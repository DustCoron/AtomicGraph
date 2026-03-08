import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CompiledShader, CompiledUniformDescriptor } from '../core/compiler';
import { GraphData, NodeData } from '../core/types';
import { GraphEngine } from '../core/graph';
import { CATEGORIES, NODE_REGISTRY } from '../core/registry';
import type { PaintBrushParams } from '../core/gpu-paint';
import { AppLogEntry, clearAppLogs, downloadAppLogsFile, formatAppLog, getAppLogs, subscribeAppLogs } from '../core/logs';
import { getExportPreset, getOutputNodeForChannel, OutputChannel, resolveOutputChannels } from '../core/output';
import { PerformanceMode, RendererPerfSample, ViewportPerfSample, ViewportQualityState } from '../core/perf';
import { MonitorMode, MonitorSuiteRun, getRunOverallSeverity, severityWeight } from '../core/monitor';
import { GraphContextMenuRequest, GraphEditor } from '../components/GraphEditor';
import { createDefaultPreview3DSharedSceneState } from '../components/preview3dShared';
const LazyViewport = React.lazy(async () => {
  const mod = await import('../components/Viewport');
  return { default: mod.Viewport };
});
const LazyViewport3D = React.lazy(async () => {
  const mod = await import('../components/Viewport3D');
  return { default: mod.Viewport3D };
});
const LazyViewport3DBabylon = React.lazy(async () => {
  const mod = await import('../components/Viewport3DBabylon');
  return { default: mod.Viewport3DBabylon };
});

export interface UniformRow {
  name: string;
  type: CompiledUniformDescriptor['type'];
  nodeId: string;
  key: string;
  value: any;
}

export interface OutputPreviewSurface {
  canvas: HTMLCanvasElement;
  key: string;
  version: number;
}

export interface AppStats {
  compileTimeMs: number;
  nodeCount: number;
  edgeCount: number;
  shaderLines: number;
  shaderBytes: number;
  hash: string;
  warnings: string[];
  backend: string;
  recompileCount: number;
  atomsUsed: string[];
  renderP95Ms?: number;
  renderP50Ms?: number;
  thumbnailMs?: number;
}

export interface PreviewTargetInfo {
  nodeId?: string;
  port: number;
  label: string;
  portLabel: string;
}

export interface AppContextValue {
  graph: GraphData;
  selectedNodeId: string | null;
  onMove: (id: string, pos: { x: number; y: number }) => void;
  onMoveFrame: (id: string, pos: { x: number; y: number }) => void;
  onResizeFrame: (id: string, size: { width: number; height: number }) => void;
  onDeleteFrame: (id: string) => void;
  onAddFrameAt: (x: number, y: number) => string | null;
  onUpdateFrame: (id: string, patch: { label?: string; color?: string }) => void;
  onDeleteEdge: (id: string) => void;
  onConnect: (from: string, toId: string, toPort: number) => void;
  onUpdateParam: (id: string, key: string, value: any) => void;
  onAddNode: (type: string, x?: number, y?: number) => void;
  onDeleteNode: (id: string) => void;
  onSelectionChange: (id: string | null) => void;
  onSelectionSetChange?: (ids: string[]) => void;
  onCanvasClick?: () => void;
  onRequestContextMenu?: (req: GraphContextMenuRequest) => void;
  onCanvasInteractionStart?: () => void;
  onCanvasInteractionEnd?: () => void;
  onVisibleNodeIdsChange?: (ids: string[]) => void;
  onGraphZoomChange?: (zoom: number) => void;
  nodePreviews?: Record<string, string>;
  outputPreviewSurfaces?: Partial<Record<OutputChannel, OutputPreviewSurface>>;
  nodeTimings?: Record<string, number>;
  graphViewCommandNonce?: number;
  graphViewCommandType?: 'reset' | 'frame_all' | null;
  snapEnabled: boolean;
  snapGridSize: number;
  setSnapEnabled: (enabled: boolean) => void;
  setSnapGridSize: (size: number) => void;

  previewShader: CompiledShader | null;
  codeShader: CompiledShader | null;
  compileError: string | null;
  patternSize: number;
  previewResolution: number;
  previewTarget: PreviewTargetInfo;

  previewResScale: number;
  previewHiDpi: boolean;
  previewRenderEnabled: boolean;
  previewPaintEnabled: boolean;
  previewPaintBrush: PaintBrushParams;
  previewPaintBrushRadius: number;
  previewPaintBrushColor: string;
  onTogglePreviewHiDpi: () => void;
  onTogglePreviewRenderEnabled: () => void;
  onTogglePreviewPaintEnabled: () => void;
  onSetPreviewPaintBrushRadius: (radius: number) => void;
  onSetPreviewPaintBrushColor: (color: string) => void;
  interacting: boolean;
  pinnedPreviewNodeId: string | null;
  onPinPreview: (nodeId: string | null) => void;
  previewFrameBudgetMs: number;
  preview3dReady: boolean;
  preview3dRenderEnabled: boolean;
  preview3dRenderer: 'three' | 'babylon';
  setPreview3dRenderer: (renderer: 'three' | 'babylon') => void;
  onTogglePreview3dRenderEnabled: () => void;
  performanceMode: PerformanceMode;
  viewportQuality: ViewportQualityState;
  rendererPerf: RendererPerfSample | null;
  rendererPerfP95: number;
  rendererPerfP50: number;
  thumbnailDeferred: boolean;
  graphPerfHash: string;
  onViewportPerfSample: (sample: ViewportPerfSample) => void;
  onViewportGpuFailure?: (source: 'three' | 'babylon', reason: string, hard?: boolean) => void;
  gpuCooling?: boolean;
  gpuSafetyMessage?: string | null;

  tile: boolean;
  rawMode: boolean;
  onToggleTile: () => void;
  onToggleRawMode: () => void;

  uniformRows: UniformRow[];
  stats: AppStats;
  onPreviewError: (msg: string) => void;
  monitorRuns: MonitorSuiteRun[];
  monitorRunning: boolean;
  runMonitorSuite: (mode: MonitorMode) => Promise<void>;
  clearMonitorRuns: () => void;

  libraryByCategory: [string, { type: string; label: string }[]][];
  libSearch: string;
  setLibSearch: (v: string) => void;
  collapsedCats: Set<string>;
  toggleCat: (cat: string) => void;

  atomViewBindings: Record<string, string>;
  onOpenAtomNode: (nodeId: string) => void;
}

export const AppContext = createContext<AppContextValue | null>(null);
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppContext');
  return ctx;
};

const FPS_HISTORY = 120;
const CHART_W = 200;
const CHART_H = 40;
const SPIKE_THRESHOLD = 0.4;

function FpsOverlay({ stats, backend }: { stats: AppStats; backend: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    count: 0,
    last: performance.now(),
    history: new Float32Array(FPS_HISTORY),
    head: 0,
    filled: 0,
    currentFps: 0,
    minFps: 999,
    maxFps: 0,
    frameTimes: [] as number[],
    lastFrame: performance.now(),
  });

  useEffect(() => {
    let raf = 0;
    const s = stateRef.current;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = now - s.lastFrame;
      s.lastFrame = now;
      s.frameTimes.push(dt);
      s.count++;

      if (now - s.last >= 500) {
        const fps = Math.round((s.count * 1000) / (now - s.last));
        s.currentFps = fps;
        s.history[s.head] = fps;
        s.head = (s.head + 1) % FPS_HISTORY;
        if (s.filled < FPS_HISTORY) s.filled++;

        let mn = 999, mx = 0;
        for (let i = 0; i < s.filled; i++) {
          if (s.history[i] < mn) mn = s.history[i];
          if (s.history[i] > mx) mx = s.history[i];
        }
        s.minFps = mn;
        s.maxFps = mx;

        const avgFrame = s.frameTimes.length > 0
          ? s.frameTimes.reduce((a, b) => a + b, 0) / s.frameTimes.length
          : 0;
        const maxFrame = s.frameTimes.length > 0
          ? Math.max(...s.frameTimes)
          : 0;
        s.frameTimes = [];

        if (textRef.current) {
          textRef.current.innerText =
            `FPS: ${fps}  (min ${mn} / max ${mx})  [${backend}]\n` +
            `Frame: ${avgFrame.toFixed(1)} ms avg  ${maxFrame.toFixed(1)} ms max\n` +
            `Nodes: ${stats.nodeCount}  Edges: ${stats.edgeCount}\n` +
            `Shader: ${stats.shaderLines} ln  ${stats.shaderBytes} B\n` +
            `Compile: ${stats.compileTimeMs.toFixed(1)} ms  (#${stats.recompileCount})\n` +
            `Render p50/p95: ${(stats.renderP50Ms ?? 0).toFixed(1)} / ${(stats.renderP95Ms ?? 0).toFixed(1)} ms`;
        }

        drawChart();
        s.count = 0;
        s.last = now;
      }
    };

    const drawChart = () => {
      const cv = canvasRef.current;
      if (!cv) return;
      const ctx = cv.getContext('2d');
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      if (cv.width !== CHART_W * dpr || cv.height !== CHART_H * dpr) {
        cv.width = CHART_W * dpr;
        cv.height = CHART_H * dpr;
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, CHART_W, CHART_H);

      ctx.fillStyle = '#0a0e14';
      ctx.fillRect(0, 0, CHART_W, CHART_H);

      const ceil = Math.max(s.maxFps + 5, 65);
      const barW = CHART_W / FPS_HISTORY;

      ctx.strokeStyle = '#1a3a1a';
      ctx.lineWidth = 0.5;
      for (const target of [30, 60]) {
        const y = CHART_H - (target / ceil) * CHART_H;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(CHART_W, y);
        ctx.stroke();
      }

      ctx.font = '7px monospace';
      ctx.fillStyle = '#1a4a1a';
      ctx.fillText('60', 1, CHART_H - (60 / ceil) * CHART_H - 2);
      ctx.fillText('30', 1, CHART_H - (30 / ceil) * CHART_H - 2);

      for (let i = 0; i < s.filled; i++) {
        const idx = (s.head - s.filled + i + FPS_HISTORY) % FPS_HISTORY;
        const val = s.history[idx];
        const h = (val / ceil) * CHART_H;
        const x = (i / FPS_HISTORY) * CHART_W;

        const isSpike = val < ceil * SPIKE_THRESHOLD;
        if (isSpike) {
          ctx.fillStyle = '#ff3333cc';
        } else if (val < 45) {
          ctx.fillStyle = '#ffaa22cc';
        } else {
          ctx.fillStyle = '#00cc44aa';
        }

        ctx.fillRect(x, CHART_H - h, Math.max(barW - 0.5, 1), h);
      }

      const latest = s.filled > 0
        ? s.history[(s.head - 1 + FPS_HISTORY) % FPS_HISTORY]
        : 0;
      if (latest > 0 && s.filled > 1) {
        const prev = s.history[(s.head - 2 + FPS_HISTORY) % FPS_HISTORY];
        const drop = prev - latest;
        if (drop > 15) {
          const x = ((s.filled - 1) / FPS_HISTORY) * CHART_W;
          ctx.fillStyle = '#ff5555';
          ctx.font = 'bold 8px monospace';
          ctx.fillText(`-${Math.round(drop)}`, Math.min(x, CHART_W - 20), 8);
        }
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stats]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        background: '#000000cc',
        borderRadius: 4,
        pointerEvents: 'none',
        zIndex: 20,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: CHART_W, height: CHART_H }}
      />
      <div
        ref={textRef}
        style={{
          color: '#0f0',
          fontFamily: 'monospace',
          fontSize: 9,
          padding: '4px 8px 5px',
          whiteSpace: 'pre',
          lineHeight: 1.45,
        }}
      />
    </div>
  );
}

export function GraphView() {
  const app = useApp();
  const onNodeOpen = useCallback((nodeId: string) => {
    app.onSelectionChange(nodeId);
    const node = app.graph.nodes.find((n) => n.id === nodeId);
    if (node && (node.type === 'atom_graph' || node.type === 'perlin')) {
      app.onOpenAtomNode(nodeId);
      return;
    }
    app.onPinPreview(app.pinnedPreviewNodeId === nodeId ? null : nodeId);
  }, [app]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#1f2126' }}>
      <GraphEditor
        nodes={app.graph.nodes}
        edges={app.graph.edges}
        frames={app.graph.frames || []}
        onMove={app.onMove}
        onMoveFrame={app.onMoveFrame}
        onResizeFrame={app.onResizeFrame}
        onDelFrame={app.onDeleteFrame}
        onDelEdge={app.onDeleteEdge}
        onConnect={app.onConnect}
        onUpdateParam={app.onUpdateParam}
        onAddNode={app.onAddNode}
        onDelNode={app.onDeleteNode}
        onSelectionChange={app.onSelectionChange}
        onSelectionSetChange={app.onSelectionSetChange}
        onCanvasInteractionStart={app.onCanvasInteractionStart}
        onCanvasInteractionEnd={app.onCanvasInteractionEnd}
        onVisibleNodeIdsChange={app.onVisibleNodeIdsChange}
        onZoomChange={app.onGraphZoomChange}
        onNodeOpen={onNodeOpen}
        onCanvasClick={app.onCanvasClick}
        onRequestContextMenu={app.onRequestContextMenu}
        nodePreviews={app.nodePreviews}
        nodeTimings={app.nodeTimings}
        viewCommandNonce={app.graphViewCommandNonce}
        viewCommandType={app.graphViewCommandType}
        onToggleSnap={() => app.setSnapEnabled(!app.snapEnabled)}
        snapEnabled={app.snapEnabled}
        snapSize={app.snapGridSize}
      />
      <FpsOverlay stats={app.stats} backend="WebGPU" />
    </div>
  );
}

export function LibraryView() {
  const app = useApp();
  const categoryTabs = useMemo(() => {
    return app.libraryByCategory.map(([categoryKey, entries]) => {
      const meta = (CATEGORIES as any)[categoryKey];
      return {
        key: categoryKey,
        label: meta?.label || categoryKey.toUpperCase(),
        color: meta?.color || '#9aa5c4',
        count: entries.length
      };
    });
  }, [app.libraryByCategory]);

  const [activeCategory, setActiveCategory] = useState<string>('gen');

  useEffect(() => {
    if (activeCategory === 'all') return;
    const exists = categoryTabs.some(tab => tab.key === activeCategory && tab.count > 0);
    if (!exists) setActiveCategory(categoryTabs[0]?.key || 'all');
  }, [activeCategory, categoryTabs]);

  const visibleEntries = useMemo(() => {
    if (activeCategory === 'all') {
      return app.libraryByCategory.flatMap(([categoryKey, entries]) => entries.map(entry => ({ ...entry, categoryKey })));
    }
    const group = app.libraryByCategory.find(([categoryKey]) => categoryKey === activeCategory);
    if (!group) return [];
    return group[1].map(entry => ({ ...entry, categoryKey: activeCategory }));
  }, [activeCategory, app.libraryByCategory]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#2a2d33' }}>
      <div style={{ padding: '5px 6px', borderBottom: '1px solid #3a3e47' }}>
        <input
          className="nt-search"
          placeholder="Search nodes..."
          value={app.libSearch}
          onChange={e => app.setLibSearch(e.target.value)}
        />
      </div>
      <div className="nt-lib-tabs-wrap">
        <div className="nt-lib-tabs">
          <button
            className={`nt-lib-tab${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            ALL
            <span>{app.libraryByCategory.reduce((acc, [, entries]) => acc + entries.length, 0)}</span>
          </button>
          {categoryTabs.map(tab => (
            <button
              key={tab.key}
              className={`nt-lib-tab${activeCategory === tab.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(tab.key)}
              style={{ '--nt-lib-tab-accent': tab.color } as React.CSSProperties}
            >
              {tab.label}
              <span>{tab.count}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '4px 4px' }}>
        {visibleEntries.map(entry => (
          <button
            key={`${entry.categoryKey}_${entry.type}`}
            draggable
            onDragStart={e => {
              e.dataTransfer.setData('application/nt-node-type', entry.type);
              e.dataTransfer.effectAllowed = 'copy';
            }}
            onClick={() => app.onAddNode(entry.type)}
            className="nt-lib-item"
          >
            {entry.label}
            <span style={{ marginLeft: 'auto', fontSize: 9, color: '#64739a' }}>
              {(CATEGORIES as any)[entry.categoryKey]?.label || entry.categoryKey}
            </span>
          </button>
        ))}
        {visibleEntries.length === 0 && (
          <div style={{ padding: 12, fontSize: 10, color: '#555c6e', textAlign: 'center' }}>No results</div>
        )}
      </div>
    </div>
  );
}

export function PreviewView() {
  const app = useApp();
  const [vpSize, setVpSize] = useState<{ w: number; h: number; dpr: number }>({ w: 0, h: 0, dpr: 1 });
  const onVpResize = useCallback((w: number, h: number, dpr: number) => setVpSize({ w, h, dpr }), []);
  const pt = app.previewTarget;
  const isPinned = !!app.pinnedPreviewNodeId;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#232832' }}>
      <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #343c4c', flexShrink: 0 }}>
        {pt.nodeId ? (
          <span style={{ fontSize: 10, fontWeight: 600, color: '#3ecf8e', letterSpacing: 0.3, display: 'flex', alignItems: 'center', gap: 4 }}>
            {pt.label}
            <span style={{ color: '#5f6882', fontWeight: 400 }}>/ {pt.portLabel}</span>
            {isPinned && (
              <span
                style={{ fontSize: 8, color: '#f0c43e', cursor: 'pointer', letterSpacing: 0 }}
                title="Unpin preview"
                onClick={() => app.onPinPreview(null)}
              >PIN</span>
            )}
          </span>
        ) : (
          <span style={{ fontSize: 10, color: '#5f6882' }}>Output</span>
        )}

        {app.interacting && (
          <span style={{ fontSize: 8, color: '#f0c43e', letterSpacing: 0.4 }}>LQ</span>
        )}
        {app.thumbnailDeferred && (
          <span style={{ fontSize: 8, color: '#f3bd8e', letterSpacing: 0.3 }}>THUMB DEFER</span>
        )}

        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          onClick={app.onTogglePreviewHiDpi}
          title={app.previewHiDpi ? 'HiDPI on (uses device pixel ratio)' : 'LowDPI on (forces DPR=1)'}
        >
          {app.previewHiDpi ? 'HiDPI' : 'LowDPI'}
        </button>
        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          onClick={app.onTogglePreviewRenderEnabled}
          title={app.previewRenderEnabled ? 'Disable preview rendering loop' : 'Enable preview rendering loop'}
        >
          {app.previewRenderEnabled ? 'Render On' : 'Render Off'}
        </button>
        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          onClick={app.onTogglePreviewPaintEnabled}
          title={app.previewPaintEnabled ? 'Painting mode enabled' : 'Enable painting mode'}
        >
          {app.previewPaintEnabled ? 'Paint On' : 'Paint Off'}
        </button>
        <input
          type="range"
          min={1}
          max={256}
          step={1}
          value={app.previewPaintBrushRadius}
          onChange={(e) => app.onSetPreviewPaintBrushRadius(parseInt(e.target.value, 10) || 1)}
          title={`Brush size: ${Math.round(app.previewPaintBrushRadius)}px`}
          style={{ width: 84, height: 18 }}
        />
        <input
          type="color"
          value={app.previewPaintBrushColor}
          onChange={(e) => app.onSetPreviewPaintBrushColor(e.target.value)}
          title="Brush color"
          style={{ width: 24, height: 20, border: '1px solid #3f4a63', borderRadius: 4, background: 'transparent', padding: 0 }}
        />

        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#8791ad' }}>
          {vpSize.w}x{vpSize.h}
          {vpSize.dpr > 1 ? ` @${vpSize.dpr.toFixed(1)}x` : ''}
          {` | q ${app.viewportQuality.scale.toFixed(2)} | ${app.rendererPerf?.fps ?? 0} fps | live ${app.previewResolution} | export ${app.patternSize}`}
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <React.Suspense
          fallback={
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: '#8fa0c2', fontSize: 12 }}>
              Loading 2D preview...
            </div>
          }
        >
          <LazyViewport
            compiled={app.previewShader}
            tile={app.tile}
            resolutionScale={app.previewResScale}
            hiDpi={app.previewHiDpi}
            renderEnabled={app.previewRenderEnabled}
            paintMode={app.previewPaintEnabled}
            paintBrush={app.previewPaintBrush}
            inlineErrors={false}
            onShaderError={app.onPreviewError}
            onResolutionChange={onVpResize}
            onPerfSample={app.onViewportPerfSample}
            performanceMode={app.performanceMode}
            frameBudgetMs={app.previewFrameBudgetMs}
            graphHash={app.graphPerfHash}
          />
        </React.Suspense>
      </div>
    </div>
  );
}

function isValidSubgraph(value: any): value is GraphData {
  return !!value
    && Array.isArray(value.nodes)
    && Array.isArray(value.edges);
}

function buildDefaultAtomSubgraph(): GraphData {
  return {
    schemaVersion: 1,
    resolution: 512,
    nodes: [
      { id: 'atom_in', type: 'atom_input_a', x: 80, y: 140, params: {} },
      { id: 'atom_mul', type: 'multiply', x: 260, y: 140, params: { b: 1.12 } },
      { id: 'atom_remap', type: 'remap', x: 450, y: 140, params: { inLo: 0.04, inHi: 0.96, outLo: 0.0, outHi: 1.0 } },
      { id: 'atom_lvl', type: 'levels', x: 660, y: 140, params: { inMin: 0.03, inMax: 0.97, gamma: 0.95 } },
      { id: 'atom_clamp', type: 'clamp01', x: 850, y: 140, params: {} },
      { id: 'atom_out', type: 'output_height', x: 1040, y: 140, params: {} },
    ],
    edges: [
      { id: 'atom_e1', fromId: 'atom_in', fromPort: 0, toId: 'atom_mul', toPort: 0 },
      { id: 'atom_e2', fromId: 'atom_mul', fromPort: 0, toId: 'atom_remap', toPort: 0 },
      { id: 'atom_e3', fromId: 'atom_remap', fromPort: 0, toId: 'atom_lvl', toPort: 0 },
      { id: 'atom_e4', fromId: 'atom_lvl', fromPort: 0, toId: 'atom_clamp', toPort: 0 },
      { id: 'atom_e5', fromId: 'atom_clamp', fromPort: 0, toId: 'atom_out', toPort: 0 },
    ],
  };
}

function buildDefaultPerlinSubgraph(node?: NodeData | null): GraphData {
  const perlinParams: Record<string, any> = {};
  const sourceParams = node?.params || {};
  for (const [key, value] of Object.entries(sourceParams)) {
    if (key === 'subgraph') continue;
    perlinParams[key] = value;
  }
  return {
    schemaVersion: 1,
    resolution: 512,
    nodes: [
      { id: 'perlin_core', type: 'perlin', x: 100, y: 140, params: perlinParams },
      { id: 'atom_out', type: 'output_height', x: 360, y: 140, params: {} },
    ],
    edges: [
      { id: 'atom_e1', fromId: 'perlin_core', fromPort: 0, toId: 'atom_out', toPort: 0 },
    ],
  };
}

function buildDefaultSubgraphForNode(node?: NodeData | null): GraphData {
  if (node?.type === 'perlin') return buildDefaultPerlinSubgraph(node);
  return buildDefaultAtomSubgraph();
}

type AtomTemplateId = 'default' | 'contrast_boost' | 'edge_focus' | 'dual_blend';

function buildAtomTemplate(id: AtomTemplateId): GraphData {
  if (id === 'contrast_boost') {
    return {
      schemaVersion: 1,
      resolution: 512,
      nodes: [
        { id: 'atom_in', type: 'atom_input_a', x: 80, y: 140, params: {} },
        { id: 'atom_sub', type: 'subtract', x: 250, y: 140, params: { b: 0.5 } },
        { id: 'atom_mul', type: 'multiply', x: 430, y: 140, params: { b: 1.45 } },
        { id: 'atom_add', type: 'add', x: 610, y: 140, params: { b: 0.5 } },
        { id: 'atom_lvl', type: 'levels', x: 790, y: 140, params: { inMin: 0.02, inMax: 0.98, gamma: 0.9 } },
        { id: 'atom_clamp', type: 'clamp01', x: 970, y: 140, params: {} },
        { id: 'atom_out', type: 'output_height', x: 1150, y: 140, params: {} },
      ],
      edges: [
        { id: 'atom_e1', fromId: 'atom_in', fromPort: 0, toId: 'atom_sub', toPort: 0 },
        { id: 'atom_e2', fromId: 'atom_sub', fromPort: 0, toId: 'atom_mul', toPort: 0 },
        { id: 'atom_e3', fromId: 'atom_mul', fromPort: 0, toId: 'atom_add', toPort: 0 },
        { id: 'atom_e4', fromId: 'atom_add', fromPort: 0, toId: 'atom_lvl', toPort: 0 },
        { id: 'atom_e5', fromId: 'atom_lvl', fromPort: 0, toId: 'atom_clamp', toPort: 0 },
        { id: 'atom_e6', fromId: 'atom_clamp', fromPort: 0, toId: 'atom_out', toPort: 0 },
      ],
    };
  }
  if (id === 'edge_focus') {
    return {
      schemaVersion: 1,
      resolution: 512,
      nodes: [
        { id: 'atom_in_a', type: 'atom_input_a', x: 80, y: 120, params: {} },
        { id: 'atom_in_b', type: 'atom_input_b', x: 80, y: 280, params: {} },
        { id: 'atom_edge', type: 'edge_detect', x: 290, y: 200, params: { radius: 1.2, strength: 1.8 } },
        { id: 'atom_gain', type: 'multiply', x: 510, y: 200, params: { b: 1.25 } },
        { id: 'atom_mix', type: 'blend', x: 730, y: 200, params: { mode: 'screen', opacity: 0.55 } },
        { id: 'atom_lvl', type: 'levels', x: 960, y: 200, params: { inMin: 0.04, inMax: 0.98, gamma: 0.95 } },
        { id: 'atom_out', type: 'output_height', x: 1160, y: 200, params: {} },
      ],
      edges: [
        { id: 'atom_e1', fromId: 'atom_in_a', fromPort: 0, toId: 'atom_edge', toPort: 0 },
        { id: 'atom_e2', fromId: 'atom_edge', fromPort: 0, toId: 'atom_gain', toPort: 0 },
        { id: 'atom_e3', fromId: 'atom_gain', fromPort: 0, toId: 'atom_mix', toPort: 0 },
        { id: 'atom_e4', fromId: 'atom_in_b', fromPort: 0, toId: 'atom_mix', toPort: 1 },
        { id: 'atom_e5', fromId: 'atom_mix', fromPort: 0, toId: 'atom_lvl', toPort: 0 },
        { id: 'atom_e6', fromId: 'atom_lvl', fromPort: 0, toId: 'atom_out', toPort: 0 },
      ],
    };
  }
  if (id === 'dual_blend') {
    return {
      schemaVersion: 1,
      resolution: 512,
      nodes: [
        { id: 'atom_in_a', type: 'atom_input_a', x: 80, y: 120, params: {} },
        { id: 'atom_in_b', type: 'atom_input_b', x: 80, y: 280, params: {} },
        { id: 'atom_blend', type: 'blend', x: 330, y: 200, params: { mode: 'overlay', opacity: 0.7 } },
        { id: 'atom_lvl', type: 'levels', x: 560, y: 200, params: { inMin: 0.03, inMax: 0.98, gamma: 0.95 } },
        { id: 'atom_out', type: 'output_height', x: 770, y: 200, params: {} },
      ],
      edges: [
        { id: 'atom_e1', fromId: 'atom_in_a', fromPort: 0, toId: 'atom_blend', toPort: 0 },
        { id: 'atom_e2', fromId: 'atom_in_b', fromPort: 0, toId: 'atom_blend', toPort: 1 },
        { id: 'atom_e3', fromId: 'atom_blend', fromPort: 0, toId: 'atom_lvl', toPort: 0 },
        { id: 'atom_e4', fromId: 'atom_lvl', fromPort: 0, toId: 'atom_out', toPort: 0 },
      ],
    };
  }
  return buildDefaultAtomSubgraph();
}

function cloneSubgraph(value: GraphData): GraphData {
  return JSON.parse(JSON.stringify(value));
}

function sanitizeSubgraph(value: any, fallback: GraphData): GraphData {
  if (!isValidSubgraph(value)) return fallback;
  const nodes = value.nodes.filter((node: any) =>
    node && typeof node.id === 'string' && typeof node.type === 'string'
      && typeof node.x === 'number' && typeof node.y === 'number'
      && typeof node.params === 'object'
  );
  const nodeIds = new Set(nodes.map((node: any) => node.id));
  const edges = value.edges.filter((edge: any) =>
    edge && typeof edge.id === 'string'
      && typeof edge.fromId === 'string' && typeof edge.toId === 'string'
      && typeof edge.fromPort === 'number' && typeof edge.toPort === 'number'
      && nodeIds.has(edge.fromId) && nodeIds.has(edge.toId)
  );
  if (nodes.length === 0) return fallback;
  const frames = Array.isArray(value.frames)
    ? value.frames.filter((frame: any) =>
      frame
        && typeof frame.id === 'string'
        && typeof frame.x === 'number'
        && typeof frame.y === 'number'
        && typeof frame.width === 'number'
        && typeof frame.height === 'number'
        && typeof frame.label === 'string'
    )
    : [];
  return {
    schemaVersion: value.schemaVersion || 1,
    resolution: typeof value.resolution === 'number' ? value.resolution : 512,
    nodes,
    edges,
    frames,
  };
}

export function AtomGraphView({ viewId }: { viewId: string }) {
  const app = useApp();
  const parentNodeId = app.atomViewBindings[viewId];
  const parentNode = useMemo(
    () => app.graph.nodes.find((node) => node.id === parentNodeId) || null,
    [app.graph.nodes, parentNodeId]
  );
  const sourceSubgraph = useMemo(
    () => sanitizeSubgraph(parentNode?.params?.subgraph, buildDefaultSubgraphForNode(parentNode)),
    [parentNode?.params?.subgraph, parentNode]
  );
  const [subgraph, setSubgraph] = useState<GraphData>(() => cloneSubgraph(sourceSubgraph));
  const [nodeTypeToAdd, setNodeTypeToAdd] = useState<string>('constant');
  const [templateToApply, setTemplateToApply] = useState<AtomTemplateId>('default');

  const addableTypes = useMemo(
    () => Object.values(NODE_REGISTRY)
      .filter((def) => {
        if (def.type === 'remote') return false;
        if (def.type === 'atom_input') return false;
        if (def.category === 'output') return def.type === 'output_height';
        return true;
      })
      .map((def) => ({ type: def.type, label: def.label }))
      .sort((a, b) => a.label.localeCompare(b.label)),
    []
  );

  const templates = useMemo(
    () => [
      { id: 'default' as AtomTemplateId, label: 'Math Polish' },
      { id: 'contrast_boost' as AtomTemplateId, label: 'Contrast Boost' },
      { id: 'edge_focus' as AtomTemplateId, label: 'Edge Focus' },
      { id: 'dual_blend' as AtomTemplateId, label: 'Dual Blend (A/B)' },
    ],
    []
  );

  useEffect(() => {
    setSubgraph(cloneSubgraph(sourceSubgraph));
  }, [sourceSubgraph, parentNodeId]);

  const commitSubgraph = useCallback((next: GraphData) => {
    if (!parentNodeId) return;
    setSubgraph(next);
    app.onUpdateParam(parentNodeId, 'subgraph', next);
  }, [app, parentNodeId]);

  const mutate = useCallback((fn: (eng: GraphEngine) => boolean | void) => {
    const eng = new GraphEngine(subgraph);
    const result = fn(eng);
    if (result === false) return;
    commitSubgraph(eng.serialize());
  }, [subgraph, commitSubgraph]);

  if (!parentNodeId) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8ea0c8', fontSize: 11 }}>
        Atom window is not bound to a node.
      </div>
    );
  }

  if (!parentNode) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3b3', fontSize: 11 }}>
        Parent atom node was removed.
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#1e2430' }}>
      <div style={{ height: 32, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #323a4a', flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: '#d8e2ff', fontWeight: 700 }}>Atom Graph</span>
        <span style={{ fontSize: 9, color: '#8791ad' }}>{parentNode.type} ({parentNode.id})</span>
        <select
          className="nt-select"
          value={templateToApply}
          onChange={(e) => setTemplateToApply(e.target.value as AtomTemplateId)}
          style={{ marginLeft: 8 }}
          title="Apply a math-heavy internal template"
        >
          {templates.map((template) => (
            <option key={template.id} value={template.id}>{template.label}</option>
          ))}
        </select>
        <button
          className="nt-btn-sm"
          onClick={() => commitSubgraph(buildAtomTemplate(templateToApply))}
          title="Replace subgraph with template"
        >
          Apply Template
        </button>
        <select
          className="nt-select"
          value={nodeTypeToAdd}
          onChange={(e) => setNodeTypeToAdd(e.target.value)}
          style={{ marginLeft: 'auto' }}
        >
          {addableTypes.map((entry) => (
            <option key={entry.type} value={entry.type}>{entry.label}</option>
          ))}
        </select>
        <button
          className="nt-btn-sm"
          onClick={() => mutate((eng) => {
            const x = 120 + Math.random() * 260;
            const y = 80 + Math.random() * 220;
            const added = eng.addNode(nodeTypeToAdd, x, y);
            if (!added) return false;
            return true;
          })}
        >
          Add Node
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <GraphEditor
          nodes={subgraph.nodes}
          edges={subgraph.edges}
          frames={subgraph.frames || []}
          onMove={(id, pos) => mutate((eng) => { eng.moveNode(id, pos.x, pos.y); })}
          onMoveFrame={(id, pos) => mutate((eng) => { eng.moveFrame(id, pos.x, pos.y); })}
          onResizeFrame={(id, size) => mutate((eng) => { eng.resizeFrame(id, size.width, size.height); })}
          onDelFrame={(id) => mutate((eng) => { eng.removeFrame(id); })}
          onDelEdge={(id) => mutate((eng) => { eng.removeEdge(id); })}
          onConnect={(from, toId, toPort, fromPort) => mutate((eng) => !!eng.addEdge(from, toId, toPort, fromPort ?? 0))}
          onUpdateParam={(id, key, value) => mutate((eng) => { eng.updateParam(id, key, value); })}
          onAddNode={(type, x, y) => mutate((eng) => {
            const added = eng.addNode(type, x ?? 180, y ?? 120);
            return !!added;
          })}
          onDelNode={(id) => mutate((eng) => { eng.removeNode(id); })}
          onSelectionChange={() => {}}
          onCanvasClick={() => {}}
          onNodeOpen={() => {}}
          nodePreviews={{}}
          nodeTimings={{}}
        />
      </div>
    </div>
  );
}

export function Preview3DView() {
  const app = useApp();
  const surfaces = app.outputPreviewSurfaces;
  const [sceneState, setSceneState] = useState(createDefaultPreview3DSharedSceneState);

  const sharedProps = {
    baseColorCanvas: surfaces?.baseColor?.canvas ?? null,
    baseColorVersion: surfaces?.baseColor?.version ?? 0,
    roughnessCanvas: surfaces?.roughness?.canvas ?? null,
    roughnessVersion: surfaces?.roughness?.version ?? 0,
    normalCanvas: surfaces?.normal?.canvas ?? null,
    normalVersion: surfaces?.normal?.version ?? 0,
    metallicCanvas: surfaces?.metallic?.canvas ?? null,
    metallicVersion: surfaces?.metallic?.version ?? 0,
    aoCanvas: surfaces?.ao?.canvas ?? null,
    aoVersion: surfaces?.ao?.version ?? 0,
    heightCanvas: surfaces?.height?.canvas ?? null,
    heightVersion: surfaces?.height?.version ?? 0,
    frameBudgetMs: app.previewFrameBudgetMs,
    performanceMode: app.performanceMode,
    onPerfSample: app.onViewportPerfSample,
    onGpuFailure: app.onViewportGpuFailure,
    sceneState,
    setSceneState,
  } as const;

  return (
    <div style={{ width: '100%', height: '100%', background: '#1b2230', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #343c4c', flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: '#8fa0c2', fontWeight: 700, letterSpacing: 0.3 }}>Renderer</span>
        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          onClick={app.onTogglePreview3dRenderEnabled}
        >
          {app.preview3dRenderEnabled ? '3D On' : '3D Off'}
        </button>
        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          disabled={!app.preview3dRenderEnabled}
          onClick={() => app.setPreview3dRenderer('three')}
        >
          {app.preview3dRenderer === 'three' ? 'Three Active' : 'Three'}
        </button>
        <button
          className="nt-btn-sm"
          style={{ height: 20, padding: '0 7px', fontSize: 9 }}
          disabled={!app.preview3dRenderEnabled}
          onClick={() => app.setPreview3dRenderer('babylon')}
        >
          {app.preview3dRenderer === 'babylon' ? 'Babylon Active' : 'Babylon'}
        </button>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#6f7f9e' }}>
          {!app.preview3dRenderEnabled
            ? '3D rendering disabled'
            : app.gpuCooling
            ? (app.gpuSafetyMessage || 'GPU safety cooldown active')
            : (app.preview3dRenderer === 'babylon' ? 'Babylon.js raster preview' : 'Three.js raster preview')}
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
      {app.preview3dRenderEnabled ? (
        <React.Suspense
          fallback={
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: '#8fa0c2', fontSize: 12 }}>
              Loading 3D module...
            </div>
          }
        >
          {app.preview3dRenderer === 'babylon'
            ? <LazyViewport3DBabylon {...sharedProps} />
            : <LazyViewport3D {...sharedProps} />}
        </React.Suspense>
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: '#8fa0c2', fontSize: 12 }}>
          3D render is turned off.
        </div>
      )}
      </div>
    </div>
  );
}

function Spoiler({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '1px solid #31384a' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', width: '100%',
          padding: '5px 8px', background: 'none', border: 'none',
          color: '#9aa5c0', fontSize: 10, fontWeight: 600, cursor: 'pointer',
          gap: 6, textAlign: 'left',
        }}
      >
        <span style={{ display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform .15s', fontSize: 8 }}>
          &#9654;
        </span>
        {title}
        {count != null && <span style={{ color: '#5f6882', fontWeight: 400 }}>({count})</span>}
      </button>
      {open && children}
    </div>
  );
}

export function CodeView() {
  const app = useApp();
  const codeText = useMemo(() => app.codeShader?.source || '', [app.codeShader]);
  const ext = (app.stats.backend || 'glsl').toLowerCase() === 'wgsl' ? 'wgsl' : 'glsl';
  const [activeTab, setActiveTab] = useState<'monitor' | 'code' | 'uniforms'>('monitor');
  const [logs, setLogs] = useState<AppLogEntry[]>(() => getAppLogs());
  useEffect(() => subscribeAppLogs(setLogs), []);
  const latestWarn = useMemo(() => [...logs].reverse().find((entry) => entry.level === 'warn') ?? null, [logs]);
  const latestRun = useMemo(() => app.monitorRuns.length > 0 ? app.monitorRuns[app.monitorRuns.length - 1] : null, [app.monitorRuns]);
  const latestRunSeverity = latestRun ? getRunOverallSeverity(latestRun) : 'warn';
  const latestRunCheckCount = Array.isArray((latestRun as any)?.checks) ? (latestRun as any).checks.length : 0;
  const recentLogs = useMemo(() => [...logs].reverse().slice(0, 40), [logs]);
  const recentRuntimeErrors = useMemo(() => {
    const horizon = Date.now() - 5 * 60 * 1000;
    const dedupe = new Set<string>();
    return recentLogs.filter((entry) => {
      if (entry.level !== 'error') return false;
      const ts = Date.parse(entry.ts);
      if (!Number.isFinite(ts) || ts < horizon) return false;
      const key = `${entry.source}|${entry.message}`;
      if (dedupe.has(key)) return false;
      dedupe.add(key);
      return true;
    });
  }, [recentLogs]);
  const feedbackItems = useMemo(() => {
    const items: { severity: 'ok' | 'warn' | 'fail'; title: string; message: string }[] = [];
    if (app.compileError) {
      items.push({ severity: 'fail', title: 'Compile', message: app.compileError });
    }
    if (app.stats.warnings.length > 0) {
      items.push({ severity: 'warn', title: 'Compiler warnings', message: app.stats.warnings.join(' | ') });
    }
    if (recentRuntimeErrors.length > 0) {
      for (const entry of recentRuntimeErrors.slice(0, 3)) {
        items.push({
          severity: 'fail',
          title: 'Runtime',
          message: formatAppLog(entry, false),
        });
      }
    }
    if (items.length === 0) {
      items.push({
        severity: 'ok',
        title: 'Status',
        message: 'No critical feedback. Last compile and runtime checks look clean.',
      });
    }
    return items;
  }, [app.compileError, app.stats.warnings, recentRuntimeErrors]);

  const onCopy = async () => { if (codeText) await navigator.clipboard.writeText(codeText); };
  const onDownload = () => {
    if (!codeText) return;
    const blob = new Blob([codeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `generated_shader.${ext}`; a.click();
    URL.revokeObjectURL(url);
  };
  const onDownloadLogs = useCallback(() => downloadAppLogsFile(), []);
  const onClearLogs = useCallback(() => clearAppLogs(), []);
  const onRunQuick = useCallback(async () => { await app.runMonitorSuite('quick'); }, [app]);
  const onRunStress = useCallback(async () => { await app.runMonitorSuite('stress'); }, [app]);
  const history = useMemo(() => [...app.monitorRuns].reverse().slice(0, 20), [app.monitorRuns]);
  const hasRenderSamples = !!app.rendererPerf && (app.stats.renderP95Ms ?? 0) > 0;
  const healthCards = useMemo(() => {
    const items = [
      {
        title: 'Compile',
        severity: app.compileError ? 'fail' : app.stats.warnings.length > 0 ? 'warn' : 'ok',
        value: app.compileError ? 'Error' : app.stats.warnings.length > 0 ? `${app.stats.warnings.length} warning(s)` : 'OK',
      },
      {
        title: 'Runtime',
        severity: recentRuntimeErrors.length > 0 ? 'fail' : latestWarn ? 'warn' : 'ok',
        value: recentRuntimeErrors.length > 0 ? `${recentRuntimeErrors.length} error(s)` : latestWarn ? 'Has warnings' : 'OK',
      },
      {
        title: 'Performance',
        severity: !hasRenderSamples ? 'ok' : (app.stats.renderP95Ms ?? 0) > app.previewFrameBudgetMs + 8 ? 'fail' : (app.stats.renderP95Ms ?? 0) > app.previewFrameBudgetMs + 2 ? 'warn' : 'ok',
        value: !hasRenderSamples ? 'No samples' : `p95 ${(app.stats.renderP95Ms ?? 0).toFixed(1)}ms`,
      },
      {
        title: 'Monitor',
        severity: latestRun ? latestRunSeverity : 'warn',
        value: latestRun ? `${latestRun.mode.toUpperCase()} ${latestRun.passCount}/${latestRunCheckCount} pass` : 'No run yet',
      },
    ] as const;
    return items;
  }, [app.compileError, app.stats.warnings.length, app.stats.renderP95Ms, app.previewFrameBudgetMs, hasRenderSamples, latestWarn, recentRuntimeErrors.length, latestRun, latestRunSeverity, latestRunCheckCount]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#232832' }}>
      <div style={{ height: 28, display: 'flex', alignItems: 'center', gap: 4, borderBottom: '1px solid #343c4c', background: '#1b2230', padding: '0 6px', flexShrink: 0 }}>
        <button className={`nt-tab${activeTab === 'monitor' ? ' active' : ''}`} onClick={() => setActiveTab('monitor')}>Monitor</button>
        <button className={`nt-tab${activeTab === 'code' ? ' active' : ''}`} onClick={() => setActiveTab('code')}>Code</button>
        <button className={`nt-tab${activeTab === 'uniforms' ? ' active' : ''}`} onClick={() => setActiveTab('uniforms')}>Uniforms</button>
        <span style={{ marginLeft: 'auto', fontSize: 9, color: '#7f8db2', whiteSpace: 'nowrap' }}>
          {app.stats.shaderLines} ln / {app.stats.shaderBytes} B
        </span>
      </div>

      <div style={{ borderBottom: '1px solid #31384a', background: '#212734', padding: '7px 8px', display: 'flex', gap: 6, flexWrap: 'wrap', flexShrink: 0 }}>
        {activeTab === 'monitor' && (
          <>
            <button onClick={onRunQuick} className="nt-btn-sm" disabled={app.monitorRunning}>{app.monitorRunning ? 'RUNNING...' : 'RUN QUICK'}</button>
            <button onClick={onRunStress} className="nt-btn-sm" disabled={app.monitorRunning}>{app.monitorRunning ? 'RUNNING...' : 'RUN STRESS'}</button>
            <button onClick={app.clearMonitorRuns} className="nt-btn-sm">Clear Tests</button>
            <button onClick={onDownloadLogs} className="nt-btn-sm">Download Logs</button>
            <button onClick={onClearLogs} className="nt-btn-sm">Clear Logs</button>
          </>
        )}
        {activeTab === 'code' && (
          <>
            <button onClick={onCopy} className="nt-btn-sm">Copy</button>
            <button onClick={onDownload} className="nt-btn-sm">.{ext}</button>
            <button onClick={app.onToggleRawMode} className="nt-btn-sm">{app.rawMode ? 'RAW' : 'READABLE'}</button>
          </>
        )}
        {activeTab === 'uniforms' && (
          <span style={{ fontSize: 10, color: '#8ea0c8', padding: '5px 2px' }}>
            {app.uniformRows.length} uniforms
          </span>
        )}
      </div>

      {activeTab === 'monitor' && (
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2px' }}>
            <span style={{ fontSize: 11, color: '#d4def8', fontWeight: 700, letterSpacing: 0.2 }}>System Health</span>
            <span style={{ fontSize: 10, color: '#8ea0c8' }}>{recentRuntimeErrors.length} error(s) | {app.stats.warnings.length} warning(s)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 6 }}>
            {healthCards.map((item) => (
              <div key={item.title} style={{ border: '1px solid #364056', borderRadius: 6, padding: '8px 9px', background: '#182031' }}>
                <div style={{ fontSize: 10, color: '#8ea0c8', marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: item.severity === 'fail' ? '#ffb3b3' : item.severity === 'warn' ? '#f3bd8e' : '#9be9c1', fontWeight: 700 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid #323a4d', borderRadius: 6, background: '#151c29', overflow: 'hidden' }}>
            <div style={{ padding: '6px 8px', borderBottom: '1px solid #2b3446', color: '#d4def8', fontSize: 10, fontWeight: 700 }}>
              Feedback
            </div>
            <div style={{ maxHeight: 110, overflow: 'auto' }}>
              {feedbackItems.map((item, idx) => (
                <div
                  key={`${item.title}_${idx}`}
                  style={{
                    padding: '7px 8px',
                    borderTop: idx === 0 ? 'none' : '1px solid #273044',
                    color: item.severity === 'fail' ? '#ffb3b3' : item.severity === 'warn' ? '#f3bd8e' : '#9be9c1',
                    fontSize: 10,
                    lineHeight: 1.45,
                    wordBreak: 'break-word',
                    fontFamily: "'Cascadia Code','Consolas',monospace",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{item.title}:</span> {item.message}
                </div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid #31384a', borderRadius: 6, background: '#161d2a', overflow: 'hidden' }}>
            <div style={{ padding: '6px 8px', borderBottom: '1px solid #2b3446', color: '#d4def8', fontSize: 10, fontWeight: 700 }}>
              Metrics
            </div>
            <div style={{ padding: '6px 8px', fontSize: 11, color: '#b8c4e5', lineHeight: 1.7 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Compile</span><span>{app.stats.compileTimeMs.toFixed(2)} ms</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Render p50 / p95</span><span>{hasRenderSamples ? `${(app.stats.renderP50Ms ?? 0).toFixed(2)} / ${(app.stats.renderP95Ms ?? 0).toFixed(2)} ms` : 'No samples'}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Nodes / Edges</span><span>{app.stats.nodeCount} / {app.stats.edgeCount}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Quality scale</span><span>{app.viewportQuality.scale.toFixed(2)}</span></div>
            </div>
          </div>

          <div style={{ border: '1px solid #31384a', borderRadius: 6, overflow: 'hidden', background: '#131a27', minHeight: 140 }}>
            <div style={{ padding: '7px 8px', color: '#d4def8', fontSize: 11, fontWeight: 700, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #2a3242' }}>
              <span>Tests and Monitor</span>
              <span style={{ color: '#8ea0c8', fontWeight: 500 }}>{app.monitorRuns.length} runs</span>
            </div>
            <div style={{ maxHeight: 180, overflow: 'auto' }}>
              {history.length === 0 && (
                <div style={{ padding: '10px 10px', color: '#8ea0c8', fontSize: 11 }}>No monitor runs yet.</div>
              )}
              {history.map((run) => {
                const checks = Array.isArray((run as any).checks) ? (run as any).checks : [];
                const metrics = (run as any).metrics || { renderP95Ms: 0 };
                const performanceCheck = checks.find((check) => check.id === 'performance_budget');
                const hasRunRenderSamples = (metrics.renderP95Ms ?? 0) > 0 && !performanceCheck?.message.startsWith('Skipped:');
                return (
                  <div key={run.id} style={{ borderTop: '1px solid #2a3242', padding: '7px 9px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#c7d4f2', marginBottom: 4 }}>
                      <span>
                        <span style={{ color: getRunOverallSeverity(run) === 'fail' ? '#ffb3b3' : getRunOverallSeverity(run) === 'warn' ? '#f3bd8e' : '#9be9c1', fontWeight: 700 }}>
                          {run.mode.toUpperCase()}
                        </span>
                        {' '}| pass {run.passCount} warn {run.warnCount} fail {run.failCount}
                      </span>
                      <span style={{ color: '#7f8db2' }}>{run.totalMs.toFixed(1)} ms</span>
                    </div>
                    <div style={{ fontSize: 10, color: '#8ea0c8', marginBottom: 4 }}>
                      {new Date(run.ts).toLocaleString()} | {hasRunRenderSamples ? `p95 ${(metrics.renderP95Ms ?? 0).toFixed(1)} ms` : 'p95 n/a'}
                    </div>
                    <div style={{ fontSize: 10, lineHeight: 1.45 }}>
                      {checks
                        .slice()
                        .sort((a, b) => severityWeight(b.severity) - severityWeight(a.severity))
                        .slice(0, 4)
                        .map((check) => (
                          <div key={`${run.id}_${check.id}`} style={{ color: check.severity === 'fail' ? '#ffb3b3' : check.severity === 'warn' ? '#f3bd8e' : '#9be9c1' }}>
                            {check.label}: {check.message}
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ border: '1px solid #31384a', borderRadius: 6, maxHeight: 160, overflow: 'auto', background: '#141b27' }}>
            <div style={{ padding: '6px 8px', borderBottom: '1px solid #2a3242', color: '#d4def8', fontSize: 10, fontWeight: 700 }}>
              Recent Logs
            </div>
            {recentLogs.slice(0, 10).map((log) => (
              <pre
                key={log.id}
                style={{
                  margin: 0,
                  padding: '6px 8px',
                  borderTop: '1px solid #2a3242',
                  color: log.level === 'error' ? '#ffb3b3' : log.level === 'warn' ? '#f3bd8e' : '#c7d4f2',
                  fontSize: 10,
                  lineHeight: 1.35,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: "'Cascadia Code','Consolas',monospace",
                }}
              >
                {formatAppLog(log, false)}
              </pre>
            ))}
            {recentLogs.length === 0 && (
              <div style={{ padding: '8px 10px', color: '#8ea0c8', fontSize: 10 }}>No logs captured yet.</div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'code' && (
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#161b24' }}>
          <pre style={{ margin: 0, padding: 8, color: '#cbd4ee', fontSize: 10, lineHeight: 1.5, fontFamily: "'Cascadia Code','Consolas',monospace" }}>
            {codeText || '// No generated source'}
          </pre>
        </div>
      )}

      {activeTab === 'uniforms' && (
        <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9 }}>
            <thead>
              <tr style={{ background: '#2a3140', color: '#c4cee8' }}>
                <th style={{ textAlign: 'left', padding: '4px 6px', fontWeight: 700 }}>Name</th>
                <th style={{ textAlign: 'left', padding: '4px 6px', fontWeight: 700 }}>Type</th>
                <th style={{ textAlign: 'left', padding: '4px 6px', fontWeight: 700 }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {app.uniformRows.map(u => (
                <tr key={u.name} style={{ borderTop: '1px solid #343c4c' }}>
                  <td style={{ padding: '4px 6px', color: '#b6c0dc' }}>{u.name}</td>
                  <td style={{ padding: '4px 6px', color: '#b6c0dc' }}>{u.type}</td>
                  <td style={{ padding: '4px 6px', color: '#b6c0dc' }}>{fmtVal(u.value)}</td>
                </tr>
              ))}
              {app.uniformRows.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '8px 10px', color: '#8ea0c8' }}>No uniforms in current shader.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function LogsView() {
  const [logs, setLogs] = useState<AppLogEntry[]>(() => getAppLogs());
  useEffect(() => subscribeAppLogs(setLogs), []);
  const latestLogs = useMemo(() => [...logs].reverse().slice(0, 400), [logs]);
  const onDownloadLogs = useCallback(() => downloadAppLogsFile(), []);
  const onClearLogs = useCallback(() => clearAppLogs(), []);
  const counts = useMemo(() => ({
    error: logs.filter((entry) => entry.level === 'error').length,
    warn: logs.filter((entry) => entry.level === 'warn').length,
    info: logs.filter((entry) => entry.level === 'info').length,
  }), [logs]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1b2230' }}>
      <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #343c4c', flexShrink: 0 }}>
        <button onClick={onDownloadLogs} className="nt-btn-sm">Download Logs</button>
        <button onClick={onClearLogs} className="nt-btn-sm">Clear</button>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#8ea0c8' }}>
          err {counts.error} | warn {counts.warn} | info {counts.info}
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', background: '#131a27' }}>
        {latestLogs.length === 0 && (
          <div style={{ padding: '10px 12px', color: '#8ea0c8', fontSize: 10 }}>No logs captured yet.</div>
        )}
        {latestLogs.map((log) => (
          <pre
            key={log.id}
            style={{
              margin: 0,
              padding: '8px 10px',
              borderTop: '1px solid #2a3242',
              color: log.level === 'error' ? '#ffb3b3' : log.level === 'warn' ? '#f3bd8e' : '#c7d4f2',
              fontSize: 10,
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontFamily: "'Cascadia Code','Consolas',monospace",
            }}
          >
            {formatAppLog(log, true)}
          </pre>
        ))}
      </div>
    </div>
  );
}

export function ExplorerView() {
  const app = useApp();
  const [open, setOpen] = useState<Set<string>>(new Set(['root', 'graph', 'nodes', 'outputs']));
  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const nodeById = useMemo(() => new Map(app.graph.nodes.map((n) => [n.id, n])), [app.graph.nodes]);
  const outputNodeByChannel = useMemo<Record<OutputChannel, NodeData | null>>(() => ({
    baseColor: getOutputNodeForChannel(app.graph, 'baseColor'),
    roughness: getOutputNodeForChannel(app.graph, 'roughness'),
    normal: getOutputNodeForChannel(app.graph, 'normal'),
    metallic: getOutputNodeForChannel(app.graph, 'metallic'),
    ao: getOutputNodeForChannel(app.graph, 'ao'),
    height: getOutputNodeForChannel(app.graph, 'height')
  }), [app.graph.nodes]);
  const nodeList = useMemo(() => {
    return [...app.graph.nodes].sort((a, b) => {
      const la = NODE_REGISTRY[a.type]?.label || a.type;
      const lb = NODE_REGISTRY[b.type]?.label || b.type;
      return la.localeCompare(lb) || a.id.localeCompare(b.id);
    });
  }, [app.graph.nodes]);
  const edgeList = useMemo(() => {
    return [...app.graph.edges].sort((a, b) =>
      `${a.fromId}:${a.fromPort}>${a.toId}:${a.toPort}`.localeCompare(`${b.fromId}:${b.fromPort}>${b.toId}:${b.toPort}`)
    );
  }, [app.graph.edges]);
  const outputMap = useMemo(() => resolveOutputChannels(app.graph), [app.graph.nodes, app.graph.edges]);
  const outChannels: OutputChannel[] = ['baseColor', 'roughness', 'normal', 'metallic', 'ao', 'height'];
  const preset = useMemo(() => getExportPreset('pbr_default'), []);

  const selectNode = useCallback((nodeId: string) => {
    app.onSelectionChange(nodeId);
  }, [app]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#242730' }}>
      <div style={{ flex: 1, overflow: 'auto', padding: 8, fontSize: 11 }}>
        <ExplorerBranchRow
          label="atomicgraph.ag"
          depth={0}
          open={open.has('root')}
          onToggle={() => toggle('root')}
        />

        {open.has('root') && (
          <>
            <ExplorerBranchRow
              label="graph"
              depth={1}
              count={app.graph.nodes.length}
              open={open.has('graph')}
              onToggle={() => toggle('graph')}
            />
            {open.has('graph') && (
              <>
                <ExplorerBranchRow
                  label="nodes"
                  depth={2}
                  count={nodeList.length}
                  open={open.has('nodes')}
                  onToggle={() => toggle('nodes')}
                />
                {open.has('nodes') && nodeList.map((n) => {
                  const def = NODE_REGISTRY[n.type];
                  const selected = app.selectedNodeId === n.id;
                  const pinned = app.pinnedPreviewNodeId === n.id;
                  const ms = app.nodeTimings?.[n.id];
                  return (
                    <ExplorerLeafRow
                      key={`node_${n.id}`}
                      depth={3}
                      label={`${def?.label || n.type} (${n.id})`}
                      right={ms != null ? `${ms.toFixed(1)}ms` : pinned ? 'PIN' : undefined}
                      active={selected}
                      accent={pinned ? '#f0c43e' : undefined}
                      onClick={() => selectNode(n.id)}
                      onDoubleClick={() => app.onPinPreview(app.pinnedPreviewNodeId === n.id ? null : n.id)}
                    />
                  );
                })}

                <ExplorerBranchRow
                  label="edges"
                  depth={2}
                  count={edgeList.length}
                  open={open.has('edges')}
                  onToggle={() => toggle('edges')}
                />
                {open.has('edges') && edgeList.map((e) => {
                  const from = nodeById.get(e.fromId);
                  const to = nodeById.get(e.toId);
                  const fromLabel = from ? (NODE_REGISTRY[from.type]?.label || from.type) : e.fromId;
                  const toLabel = to ? (NODE_REGISTRY[to.type]?.label || to.type) : e.toId;
                  return (
                    <ExplorerLeafRow
                      key={`edge_${e.id}`}
                      depth={3}
                      label={`${fromLabel}.${e.fromPort} -> ${toLabel}.${e.toPort}`}
                      right={e.id}
                      onClick={() => {
                        if (from) selectNode(from.id);
                      }}
                    />
                  );
                })}
              </>
            )}

            <ExplorerBranchRow
              label="outputs"
              depth={1}
              count={outChannels.length}
              open={open.has('outputs')}
              onToggle={() => toggle('outputs')}
            />
            {open.has('outputs') && outChannels.map((channel) => {
              const edge = outputMap[channel];
              const from = edge ? nodeById.get(edge.fromId) : null;
              const fromLabel = from ? (NODE_REGISTRY[from.type]?.label || from.type) : 'unconnected';
              const active = !!edge;
              const outputNode = outputNodeByChannel[channel];
              return (
                <ExplorerLeafRow
                  key={`out_${channel}`}
                  depth={2}
                  label={`${channel} -> ${fromLabel}`}
                  right={edge ? `${edge.fromId}.${edge.fromPort}` : '-'}
                  active={outputNode ? app.selectedNodeId === outputNode.id : false}
                  accent={active ? '#3ecf8e' : '#8892aa'}
                  onClick={() => {
                    if (from) selectNode(from.id);
                    else if (outputNode) selectNode(outputNode.id);
                  }}
                />
              );
            })}

            <ExplorerBranchRow
              label="materials"
              depth={1}
              count={preset?.targets.length ?? 0}
              open={open.has('materials')}
              onToggle={() => toggle('materials')}
            />
            {open.has('materials') && (preset?.targets ?? []).map((target) => (
              <ExplorerLeafRow
                key={`mat_${target.channel}`}
                depth={2}
                label={`${target.channel} (${target.format})`}
                right={`texture_${target.fileSuffix}`}
                accent={outputMap[target.channel] ? '#3ecf8e' : '#8892aa'}
                onClick={() => {
                  const outputNode = outputNodeByChannel[target.channel];
                  if (outputNode) selectNode(outputNode.id);
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function ExplorerBranchRow({
  label,
  depth,
  count,
  open,
  onToggle,
}: {
  label: string;
  depth: number;
  count?: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 28,
        padding: `0 8px 0 ${12 + depth * 16}px`,
        border: 'none',
        background: 'transparent',
        color: '#dbe4ff',
        fontSize: 12,
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: 4,
      }}
    >
      <span style={{ width: 12, color: '#8ea0c8', fontSize: 10 }}>{open ? '▼' : '▶'}</span>
      <span>{label}</span>
      {count != null && <span style={{ marginLeft: 6, color: '#7b8bb2', fontSize: 10 }}>({count})</span>}
    </button>
  );
}

function ExplorerLeafRow({
  label,
  depth,
  right,
  active,
  accent,
  onClick,
  onDoubleClick,
}: {
  label: string;
  depth: number;
  right?: string;
  active?: boolean;
  accent?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 26,
        padding: `0 8px 0 ${24 + depth * 16}px`,
        border: '1px solid transparent',
        background: active ? '#314775' : 'transparent',
        color: accent || '#c7d4f2',
        fontSize: 12,
        cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left',
        borderRadius: 4,
      }}
    >
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      {right && <span style={{ marginLeft: 10, color: '#8ea0c8', fontSize: 10, flexShrink: 0 }}>{right}</span>}
    </button>
  );
}

function fmtVal(v: any): string {
  if (Array.isArray(v)) return `[${v.join(', ')}]`;
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  return String(v);
}

const VIEW_MAP: Record<string, React.ComponentType> = {
  graph: GraphView,
  library: LibraryView,
  preview: PreviewView,
  preview3d: Preview3DView,
  code: CodeView,
  logs: LogsView,
  explorer: ExplorerView,
};

export function renderViewByType(type: string, viewId: string): React.ReactNode {
  if (type === 'atom_graph') {
    return <AtomGraphView key={viewId} viewId={viewId} />;
  }
  const Component = VIEW_MAP[type];
  if (!Component) return <div className="dk-empty">Unknown view: {type}</div>;
  return <Component key={viewId} />;
}
