import React, { useEffect, useRef, useState } from 'react';
import { CompiledShader, UniformLayoutEntry } from '../core/compiler';
import { GPUQuadRenderer } from '../core/gpu-renderer';
import { appendAppLog } from '../core/logs';
import { PerformanceMode, ViewportPerfSample, percentile } from '../core/perf';

const MAX_DPR = 2;
const MIN_BACKING = 128;
const PERF_RING = 300;
const INITIAL_COMPILE_RETRY_MS = 500;
const MAX_COMPILE_RETRY_MS = 8000;

interface ViewportProps {
  compiled: CompiledShader | null;
  tile: boolean;
  resolutionScale?: number;
  inlineErrors?: boolean;
  onShaderError?: (message: string) => void;
  onResolutionChange?: (w: number, h: number, dpr: number) => void;
  onPerfSample?: (sample: ViewportPerfSample) => void;
  performanceMode?: PerformanceMode;
  frameBudgetMs?: number;
  graphHash?: string;
}

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

function findNodeRefFromWgsl(wgsl: string, lineNum: number): string | null {
  const lines = wgsl.split(/\r?\n/);
  const idx = Math.max(0, Math.min(lineNum - 1, lines.length - 1));
  for (let i = idx; i >= 0; i--) {
    const line = lines[i];
    const m = line.match(/\/\/\s*NodeRef\s+id=([^\s]+)\s+type=([^\s]+)\s+port=(\d+)\s+label=(.*)$/);
    if (m) {
      return `node=${m[1]} type=${m[2]} outPort=${m[3]} label=${m[4]}`;
    }
  }
  return null;
}

function frameBudgetByMode(mode: PerformanceMode, fallback: number): number {
  if (mode === 'quality_first') return Math.max(22, fallback);
  if (mode === 'balanced') return Math.max(19, fallback);
  return fallback;
}

function showError(errEl: HTMLDivElement | null, inlineErrors: boolean, message: string) {
  if (!errEl) return;
  if (!inlineErrors) {
    errEl.style.display = 'none';
    return;
  }
  errEl.textContent = message;
  errEl.style.display = 'block';
}

function uniformValueKey(value: any): string {
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string') return String(value);
  if (Array.isArray(value)) return `[${value.map((v) => uniformValueKey(v)).join(',')}]`;
  if (value == null) return 'null';
  return JSON.stringify(value);
}

function buildUniformSignature(compiled: CompiledShader): string {
  const parts: string[] = [];

  if (compiled.uniformLayout && compiled.uniformLayout.length > 0) {
    for (const entry of compiled.uniformLayout) {
      const binding = compiled.uniformBindings[entry.name];
      if (!binding) continue;
      parts.push(`${entry.name}:${uniformValueKey(binding.value)}`);
    }
    return parts.join('|');
  }

  if (compiled.uniforms.length > 0) {
    for (const uniform of compiled.uniforms) {
      const binding = compiled.uniformBindings[uniform.name];
      if (!binding) continue;
      parts.push(`${uniform.name}:${uniformValueKey(binding.value)}`);
    }
    return parts.join('|');
  }

  return Object.entries(compiled.uniformBindings)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, binding]) => `${name}:${uniformValueKey(binding.value)}`).join('|');
}

function resolveUsesTime(compiled: CompiledShader): boolean {
  const timeEntry = compiled.uniformLayout?.find((entry: UniformLayoutEntry) => entry.name === 'u_time');
  if (!timeEntry) return false;
  if (!compiled.wgsl) return false;
  return compiled.wgsl.includes(`uf(${timeEntry.index}u)`);
}

function buildStaticRenderTemplate(compiled: CompiledShader, uniformSignature: string): string {
  return `${compiled.hash}|${compiled.fragment.length}|${compiled.vertex.length}|${uniformSignature}`;
}

function buildStaticRenderKey(template: string, backingW: number, backingH: number, zoom: number, offset: [number, number], tile: boolean): string {
  return `${template}|${backingW}x${backingH}|z=${zoom.toFixed(4)}|o=${offset[0].toFixed(5)},${offset[1].toFixed(5)}|t=${tile ? 1 : 0}`;
}

export function Viewport({
  compiled,
  tile,
  resolutionScale = 1,
  inlineErrors = true,
  onShaderError,
  onResolutionChange,
  onPerfSample,
  performanceMode = 'performance_first',
  frameBudgetMs = 22,
  graphHash,
}: ViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const errRef = useRef<HTMLDivElement>(null);
  const [previewSide, setPreviewSide] = useState(0);

  const gpuRef = useRef<{
    renderer?: GPUQuadRenderer;
    uniformBuf: Float32Array;
    lastShaderHash: string;
    pendingHash: string;
    compileFailCount: number;
    compileFailUntil: number;
    compileFailHash: string;
    cachedStaticRenderTemplate: string;
    cachedUniformSignature: string;
    cachedUsesTime: boolean;
    cachedShaderHash: string;
    lastStaticRenderKey: string;
    t0: number;
    raf: number;
    backingW: number;
    backingH: number;
    frameRing: Float32Array;
    frameHead: number;
    frameCount: number;
    frameId: number;
    budgetExceededStreak: number;
    lastBudgetLogAt: number;
    compileMsLast: number;
    lastPerfEmitAt: number;
    fatalHash: string;
    fatalMessage: string;
  }>({
    uniformBuf: new Float32Array(256),
    lastShaderHash: '',
    pendingHash: '',
    cachedStaticRenderTemplate: '',
    cachedUniformSignature: '',
    cachedUsesTime: false,
    cachedShaderHash: '',
    lastStaticRenderKey: '',
    t0: performance.now(),
    raf: 0,
    backingW: 0,
    backingH: 0,
    frameRing: new Float32Array(PERF_RING),
    frameHead: 0,
    frameCount: 0,
    frameId: 0,
    compileFailCount: 0,
    compileFailUntil: 0,
    compileFailHash: '',
    budgetExceededStreak: 0,
    lastBudgetLogAt: 0,
    compileMsLast: 0,
    lastPerfEmitAt: 0,
    fatalHash: '',
    fatalMessage: '',
  });

  const zoomRef = useRef(1);
  const offsetRef = useRef<[number, number]>([0, 0]);
  const draggingRef = useRef<{ x: number; y: number } | null>(null);
  const propsRef = useRef({
    compiled,
    tile,
    resolutionScale,
    inlineErrors,
    onShaderError,
    onResolutionChange,
    onPerfSample,
    performanceMode,
    frameBudgetMs,
    graphHash,
  });
  propsRef.current = {
    compiled,
    tile,
    resolutionScale,
    inlineErrors,
    onShaderError,
    onResolutionChange,
    onPerfSample,
    performanceMode,
    frameBudgetMs,
    graphHash,
  };

  useEffect(() => {
    const cv = cvRef.current;
    const container = containerRef.current;
    if (!cv || !container) return;

    let cancelled = false;
    let lastCssW = 0;
    let lastCssH = 0;
    let lastDpr = 0;
    let lastScale = 0;

    const reportFatal = (message: string) => {
      const g = gpuRef.current;
      const hash = propsRef.current.compiled?.hash || g.lastShaderHash || '';
      if (g.fatalMessage === message && g.fatalHash === hash) return;
      g.fatalMessage = message;
      g.fatalHash = hash;
      showError(errRef.current, propsRef.current.inlineErrors, message);
      propsRef.current.onShaderError?.(message);
      appendAppLog({
        level: 'error',
        source: 'viewport',
        event_type: 'render_fatal',
        message: message.split('\n')[0] || 'Viewport render fatal',
        details: message,
        graph_hash: propsRef.current.graphHash,
        frame_id: g.frameId,
      });
    };

    (async () => {
      const gpu = await GPUQuadRenderer.create(cv);
      if (cancelled) { gpu?.dispose(); return; }
      if (!gpu) {
        showError(errRef.current, propsRef.current.inlineErrors, 'WebGPU not available in this browser.');
        return;
      }
      gpuRef.current.renderer = gpu;
      gpuRef.current.t0 = performance.now();

      const tick = () => {
        gpuRef.current.raf = requestAnimationFrame(tick);
        const g = gpuRef.current;
        if (!g.renderer) return;
        g.frameId += 1;
        const frameStarted = performance.now();

        try {
          const activeBudget = frameBudgetByMode(
            propsRef.current.performanceMode,
            propsRef.current.frameBudgetMs
          );

          if (g.fatalHash && propsRef.current.compiled?.hash && g.fatalHash !== propsRef.current.compiled.hash) {
            g.fatalHash = '';
            g.fatalMessage = '';
            if (errRef.current) errRef.current.style.display = 'none';
          }

          if (g.fatalHash && (!propsRef.current.compiled || g.fatalHash === propsRef.current.compiled.hash)) {
            return;
          }

          const cssW = container.clientWidth;
          const cssH = container.clientHeight;
          const cssSize = Math.max(
            MIN_BACKING / (window.devicePixelRatio || 1),
            Math.min(cssW || MIN_BACKING, cssH || MIN_BACKING)
          );
          const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
          const scale = clamp(propsRef.current.resolutionScale, 0.1, 1);

          if (cssSize !== lastCssW || cssSize !== lastCssH || dpr !== lastDpr || scale !== lastScale) {
            const backing = Math.max(MIN_BACKING, Math.round(cssSize * dpr * scale));
            cv.width = backing;
            cv.height = backing;
            g.renderer.configure(backing, backing);
            g.backingW = backing;
            g.backingH = backing;
            lastCssW = cssSize;
            lastCssH = cssSize;
            lastDpr = dpr;
            lastScale = scale;
            propsRef.current.onResolutionChange?.(backing, backing, dpr);
          }

          const c = propsRef.current.compiled;
          if (
            c
            && c.wgsl
            && c.hash !== g.lastShaderHash
            && c.hash !== g.pendingHash
            && !(c.hash === g.compileFailHash && g.compileFailUntil > performance.now())
          ) {
            if (g.compileFailHash !== c.hash) {
              g.compileFailHash = '';
              g.compileFailUntil = 0;
              g.compileFailCount = 0;
            }
            g.pendingHash = c.hash;
            const requestedHash = c.hash;
            g.renderer.setPipelineAsync(c.wgsl, c.hash).then(result => {
              const gNow = gpuRef.current;
              gNow.pendingHash = '';
              gNow.compileMsLast = result.compileMs ?? gNow.compileMsLast;
              const currentCompiled = propsRef.current.compiled;
              if (!gNow.renderer || (currentCompiled && requestedHash !== currentCompiled.hash)) return;
              if (result.ok) {
                gNow.lastShaderHash = requestedHash;
                gNow.compileFailCount = 0;
                gNow.compileFailUntil = 0;
                gNow.compileFailHash = '';
                gNow.lastStaticRenderKey = '';
                gNow.fatalHash = '';
                gNow.fatalMessage = '';
                if (errRef.current) errRef.current.style.display = 'none';
                propsRef.current.onShaderError?.('');
              } else {
                gNow.lastShaderHash = '';
                gNow.lastStaticRenderKey = '';
                gNow.compileFailHash = requestedHash;
                gNow.compileFailCount = Math.min(gNow.compileFailCount + 1, 12);
                const retryDelay = Math.min(
                  INITIAL_COMPILE_RETRY_MS * Math.pow(2, Math.min(gNow.compileFailCount - 1, 8)),
                  MAX_COMPILE_RETRY_MS,
                );
                gNow.compileFailUntil = performance.now() + retryDelay;
                const firstErr = result.diagnostics?.find((m) => m.type === 'error');
                const lineLoc = firstErr ? `line ${firstErr.lineNum}, col ${firstErr.linePos}` : null;
                const nodeRef = firstErr ? findNodeRefFromWgsl(c.wgsl!, firstErr.lineNum) : null;
                const details = result.error || 'WGSL pipeline compilation failed.';
                const uiMessage = [
                  'Shader compilation error',
                  lineLoc ? `at ${lineLoc}` : null,
                  nodeRef ? `(${nodeRef})` : null,
                  details
                ].filter(Boolean).join(' - ');
                showError(errRef.current, propsRef.current.inlineErrors, uiMessage);
                propsRef.current.onShaderError?.(uiMessage);
              }
            });
          }

          let shouldRender = g.renderer.isReady;
          if (shouldRender && c && c.uniformLayout) {
            const uniformSignature = buildUniformSignature(c);
            if (g.cachedShaderHash !== c.hash || g.cachedUniformSignature !== uniformSignature) {
              g.cachedShaderHash = c.hash;
              g.cachedUniformSignature = uniformSignature;
              g.cachedUsesTime = resolveUsesTime(c);
              g.cachedStaticRenderTemplate = buildStaticRenderTemplate(c, g.cachedUniformSignature);
            }
            const usesTime = g.cachedUsesTime;
            const staticRenderKey = buildStaticRenderKey(
              g.cachedStaticRenderTemplate,
              g.backingW,
              g.backingH,
              zoomRef.current,
              offsetRef.current,
              propsRef.current.tile,
            );
            if (!usesTime && g.lastStaticRenderKey === staticRenderKey) {
              shouldRender = false;
            } else {
              const now = performance.now();
              fillUniformBuffer(g.uniformBuf, c, g.backingW, g.backingH, now - g.t0, zoomRef.current, offsetRef.current, propsRef.current.tile);
              g.renderer.writeUniforms(g.uniformBuf);
              g.lastStaticRenderKey = usesTime ? '' : staticRenderKey;
            }
          }

          let renderMs = 0;
          let readbackMs = 0;
          if (shouldRender) {
            const renderResult = g.renderer.render();
            renderMs = renderResult.renderMs;
            if (!renderResult.ok && renderResult.error && renderResult.error !== 'Pipeline not ready') {
              reportFatal(`Viewport render error: ${renderResult.error}`);
              return;
            }
          }

          const frameMs = performance.now() - frameStarted;
          g.frameRing[g.frameHead] = frameMs;
          g.frameHead = (g.frameHead + 1) % PERF_RING;
          g.frameCount = Math.min(PERF_RING, g.frameCount + 1);

          const budgetExceeded = frameMs > activeBudget;
          g.budgetExceededStreak = budgetExceeded ? g.budgetExceededStreak + 1 : 0;

          const nowPerf = performance.now();
          const shouldEmitPerf = nowPerf - g.lastPerfEmitAt >= 160;
          if (shouldEmitPerf) {
            g.lastPerfEmitAt = nowPerf;
            const frameWindow = Array.from(g.frameRing.slice(0, g.frameCount));
            const p50 = percentile(frameWindow, 0.5);
            const p95 = percentile(frameWindow, 0.95);
            const fps = p50 > 0 ? Math.round(1000 / p50) : 0;
            propsRef.current.onPerfSample?.({
              timestamp: nowPerf,
              frame_id: g.frameId,
              fps,
              compile_ms: g.compileMsLast,
              render_ms: renderMs,
              readback_ms: readbackMs,
              ui_commit_ms: 0,
              budget_exceeded: budgetExceeded,
              frame_budget_ms: activeBudget,
              p50_ms: p50,
              p95_ms: p95,
            });

            if (g.budgetExceededStreak >= 30 && nowPerf - g.lastBudgetLogAt > 1500) {
              g.lastBudgetLogAt = nowPerf;
              appendAppLog({
                level: 'warn',
                source: 'viewport',
                event_type: 'perf_budget_exceeded',
                message: `Frame budget exceeded for ${g.budgetExceededStreak} frames`,
                details: `budget=${activeBudget.toFixed(2)}ms p50=${p50.toFixed(2)}ms p95=${p95.toFixed(2)}ms fps~${fps}`,
                graph_hash: propsRef.current.graphHash,
                frame_id: g.frameId,
              });
            }
          }
        } catch (error) {
          const msg = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
          reportFatal(`Viewport fatal tick error: ${msg}`);
        }
      };
      gpuRef.current.raf = requestAnimationFrame(tick);
    })();

    const onWheel = (ev: WheelEvent) => {
      ev.preventDefault();
      zoomRef.current = clamp(zoomRef.current + (ev.deltaY > 0 ? -0.1 : 0.1), 0.3, 5);
    };
    const onMouseDown = (ev: MouseEvent) => { draggingRef.current = { x: ev.clientX, y: ev.clientY }; };
    const onMouseMove = (ev: MouseEvent) => {
      if (!draggingRef.current) return;
      const dx = ev.clientX - draggingRef.current.x;
      const dy = ev.clientY - draggingRef.current.y;
      draggingRef.current = { x: ev.clientX, y: ev.clientY };
      const bw = gpuRef.current.backingW || 512;
      offsetRef.current = [
        offsetRef.current[0] - dx / (bw * zoomRef.current) * (window.devicePixelRatio || 1),
        offsetRef.current[1] + dy / (bw * zoomRef.current) * (window.devicePixelRatio || 1),
      ];
    };
    const onMouseUp = () => { draggingRef.current = null; };

    cv.addEventListener('wheel', onWheel, { passive: false });
    cv.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelled = true;
      cv.removeEventListener('wheel', onWheel);
      cv.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(gpuRef.current.raf);
      gpuRef.current.renderer?.dispose();
    };
  }, []);

  useEffect(() => {
    const host = containerRef.current;
    if (!host || typeof ResizeObserver === 'undefined') return;
    const updateSize = () => {
      const side = Math.max(1, Math.floor(Math.min(host.clientWidth, host.clientHeight)));
      setPreviewSide((prev) => (prev === side ? prev : side));
    };
    updateSize();
    const observer = new ResizeObserver(() => updateSize());
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', background: '#11151f', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: previewSide || '100%', height: previewSide || '100%', position: 'relative', outline: '1px solid #23293a', flex: '0 0 auto' }}>
        <canvas ref={cvRef} style={{ display: 'block', width: '100%', height: '100%', cursor: 'grab' }} />
      </div>
      <div ref={errRef} style={{ display: 'none', position: 'absolute', bottom: 8, left: 8, right: 8, background: '#2a0c0c', border: '1px solid #a43333', color: '#ffadad', fontSize: 10, padding: '6px 8px', borderRadius: 4 }} />
      <div style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 9, color: '#5f6882' }}>
        WebGPU | Wheel: zoom | Drag: pan
      </div>
    </div>
  );
}

function fillUniformBuffer(
  buf: Float32Array,
  compiled: CompiledShader,
  backingW: number,
  backingH: number,
  timeMs: number,
  zoom: number,
  offset: [number, number],
  tile: boolean,
) {
  buf.fill(0);
  const layout = compiled.uniformLayout;
  if (!layout) return;
  for (const entry of layout) {
    if (entry.name === 'u_time') { buf[entry.index] = timeMs / 1000; continue; }
    if (entry.name === 'u_resolution') { buf[entry.index] = backingW; buf[entry.index + 1] = backingH; continue; }
    if (entry.name === 'u_preview_offset') { buf[entry.index] = offset[0]; buf[entry.index + 1] = offset[1]; continue; }
    if (entry.name === 'u_preview_zoom') { buf[entry.index] = zoom; continue; }
    if (entry.name === 'u_preview_tile') { buf[entry.index] = tile ? 1 : 0; continue; }
    const binding = compiled.uniformBindings[entry.name];
    if (!binding) continue;
    const v = binding.value;
    if (typeof v === 'number') {
      buf[entry.index] = v;
    } else if (typeof v === 'boolean') {
      buf[entry.index] = v ? 1 : 0;
    } else if (Array.isArray(v)) {
      for (let j = 0; j < v.length && j < entry.size; j++) buf[entry.index + j] = v[j];
    }
  }
}
