
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { DataType, NodeData, EdgeData, FrameData } from '../core/types';
import { NODE_REGISTRY, CATEGORIES } from '../core/registry';
import { isOutputNodeType } from '../core/output';
import { NodeCard } from './NodeCard';

const ZOOM_MIN = 0.15, ZOOM_MAX = 2.5, ZOOM_STEP = 0.1;
const PREVIEW_SIZE = 128;
const NW = 210, HDR = 36, PREVIEW_H = PREVIEW_SIZE + 12, ROW = 28, PR = 6;
const FRAME_MIN_W = 180;
const FRAME_MIN_H = 120;
const FRAME_HEADER_H = 24;

const catColor = (t: string) => {
  const cat = NODE_REGISTRY[t]?.category;
  return (CATEGORIES as any)[cat]?.color ?? "#888";
};

const dataTypeColor = (type: DataType): string => {
  const map: Record<DataType, string> = {
    float: '#94a3b8',
    vec2: '#3b82f6',
    vec3: '#10b981',
    vec4: '#8b5cf6',
    Texture2D: '#a78bfa',
    Field: '#c084fc',
  };
  return map[type] ?? '#94a3b8';
};

const NUMERIC_TYPES: DataType[] = ['float', 'vec2', 'vec3', 'vec4'];

const outPos = (n: NodeData, portIndex: number, outputCount: number) => {
  if (outputCount <= 1) return { x: n.x + NW, y: n.y + HDR / 2 };
  const def = NODE_REGISTRY[n.type];
  const rowsBeforeOutputs = (def?.inputs.length ?? 0) + Object.keys(n.params ?? {}).length;
  const y = n.y + HDR + PREVIEW_H + (rowsBeforeOutputs + portIndex + 0.5) * ROW;
  return { x: n.x + NW, y };
};
const inPos = (n: NodeData, i: number) => ({ x: n.x, y: n.y + HDR + PREVIEW_H + i * ROW + ROW / 2 });
const bz = (x1: number, y1: number, x2: number, y2: number) => { const d = Math.max(Math.abs(x2 - x1) * .5, 55); return `M${x1} ${y1}C${x1 + d} ${y1} ${x2 - d} ${y2} ${x2} ${y2}`; };
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const withAlpha = (color: string | undefined, alphaHex: string, fallback: string) => {
  const base = color || fallback;
  if (base.startsWith('#') && (base.length === 7 || base.length === 4)) return `${base}${alphaHex}`;
  return base;
};

const nodeHeight = (type: string) => {
  const d = NODE_REGISTRY[type];
  if (!d) return HDR + ROW + 10;
  const inputParamRows = d.inputs.length + Object.keys(d.params).length;
  const outputRows = d.outputs?.length ?? 1;
  return HDR + PREVIEW_H + Math.max(inputParamRows, outputRows, 1) * ROW + 10;
};

export type GraphMenuTarget =
  | { kind: 'canvas' }
  | { kind: 'node'; nodeId: string }
  | { kind: 'edge'; edgeId: string }
  | { kind: 'port'; nodeId: string; portIndex: number; direction: 'in' | 'out'; type?: DataType }
  | { kind: 'frame'; frameId: string };

export interface GraphContextMenuRequest {
  clientX: number;
  clientY: number;
  graphX: number;
  graphY: number;
  target: GraphMenuTarget;
}

function ZoomBar({ zoom, onZoom, onReset }: any) {
  const Btn = ({ label, disabled, onClick }: any) => (
    <button onClick={onClick} disabled={disabled} style={{ width: 22, height: 22, background: disabled ? "transparent" : "#111120", border: `1px solid ${disabled ? "#161622" : "#232336"}`, borderRadius: 4, cursor: disabled ? "default" : "pointer", color: disabled ? "#1a1a28" : "#555", fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", transition: "all .1s", flexShrink: 0 }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.color = "#fff"; }} onMouseLeave={e => { if (!disabled) e.currentTarget.style.color = "#555"; }}>
      {label}
    </button>
  );
  return (
    <div style={{ position: "absolute", top: 10, right: 12, display: "flex", alignItems: "center", gap: 3, background: "#0c0c1af0", backdropFilter: "blur(10px)", border: "1px solid #181826", borderRadius: 6, padding: "4px 5px", boxShadow: "0 2px 10px #00000055" }}>
      <Btn label="−" disabled={zoom <= ZOOM_MIN} onClick={() => onZoom(Math.round((zoom - ZOOM_STEP) * 100) / 100)} />
      <button onClick={onReset} style={{ background: "none", border: "none", cursor: "pointer", color: "#30304a", fontSize: 9, fontFamily: "inherit", letterSpacing: .8, padding: "2px 6px", minWidth: 42, textAlign: "center", transition: "color .1s" }}
        onMouseEnter={e => e.currentTarget.style.color = "#aaa"} onMouseLeave={e => e.currentTarget.style.color = "#30304a"}>
        {Math.round(zoom * 100)}%
      </button>
      <Btn label="+" disabled={zoom >= ZOOM_MAX} onClick={() => onZoom(Math.round((zoom + ZOOM_STEP) * 100) / 100)} />
    </div>
  );
}

interface GraphEditorProps {
  nodes: NodeData[];
  edges: EdgeData[];
  frames?: FrameData[];
  onMove: (id: string, pos: { x: number, y: number }) => void;
  onMoveFrame?: (id: string, pos: { x: number; y: number }) => void;
  onResizeFrame?: (id: string, size: { width: number; height: number }) => void;
  onDelFrame?: (id: string) => void;
  onDelEdge: (id: string) => void;
  onConnect: (from: string, toId: string, toPort: number, fromPort?: number) => void;
  onUpdateParam: (id: string, k: string, v: any) => void;
  onAddNode: (type: string, x?: number, y?: number) => void;
  onDelNode: (id: string) => void;
  onSelectionChange?: (id: string | null) => void;
  onNodeOpen?: (id: string) => void;
  onCanvasInteractionStart?: () => void;
  onCanvasInteractionEnd?: () => void;
  onCanvasClick?: () => void;
  onRequestContextMenu?: (req: GraphContextMenuRequest) => void;
  nodePreviews?: Record<string, string>;
  nodeTimings?: Record<string, number>;
  viewCommandNonce?: number;
  viewCommandType?: 'reset' | 'frame_all' | null;
}

export function GraphEditor({
  nodes,
  edges,
  frames = [],
  onMove,
  onMoveFrame,
  onResizeFrame,
  onDelFrame,
  onDelEdge,
  onConnect,
  onUpdateParam,
  onAddNode,
  onDelNode,
  onSelectionChange,
  onNodeOpen,
  onCanvasInteractionStart,
  onCanvasInteractionEnd,
  onCanvasClick,
  onRequestContextMenu,
  nodePreviews,
  nodeTimings,
  viewCommandNonce,
  viewCommandType
}: GraphEditorProps) {
  const [pan, setPan] = useState({ x: 60, y: 60 });
  const [zoom, setZoom] = useState(1.0);
  const [drag, setDrag] = useState<{ id: string, ox: number, oy: number } | null>(null);
  const [multiDrag, setMultiDrag] = useState<{ startGX: number, startGY: number, starts: Record<string, { x: number, y: number }> } | null>(null);
  const [livePositions, setLivePositions] = useState<Record<string, { x: number; y: number }> | null>(null);
  const [boxSel, setBoxSel] = useState<{ x0: number, y0: number, x1: number, y1: number, append: boolean } | null>(null);
  const suppressCanvasClickRef = useRef(false);
  const [conn, setConn] = useState<{ from: string; fromPort?: number; fromType?: DataType } | null>(null);
  const [snapTarget, setSnapTarget] = useState<{ nodeId: string; portIndex: number; screenX: number; screenY: number; compat: 'exact' | 'cast' | 'invalid' } | null>(null);
  const [sel, setSel] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null);
  const [frameDrag, setFrameDrag] = useState<{
    id: string;
    ox: number;
    oy: number;
    frameStartX: number;
    frameStartY: number;
    starts: Record<string, { x: number; y: number }>;
  } | null>(null);
  const [frameResize, setFrameResize] = useState<{ id: string; startGX: number; startGY: number; startW: number; startH: number } | null>(null);
  const [liveFrameRects, setLiveFrameRects] = useState<Record<string, { x: number; y: number; width: number; height: number }> | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [panDrag, setPanDrag] = useState<{ x: number, y: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);
  const interactionActiveRef = useRef(false);

  const beginCanvasInteraction = useCallback(() => {
    if (interactionActiveRef.current) return;
    interactionActiveRef.current = true;
    onCanvasInteractionStart?.();
  }, [onCanvasInteractionStart]);

  const endCanvasInteraction = useCallback(() => {
    if (!interactionActiveRef.current) return;
    interactionActiveRef.current = false;
    onCanvasInteractionEnd?.();
  }, [onCanvasInteractionEnd]);

  const isNodeInFrame = useCallback((node: NodeData, frame: FrameData) => {
    const cx = node.x + NW / 2;
    const cy = node.y + nodeHeight(node.type) / 2;
    return cx >= frame.x && cx <= frame.x + frame.width && cy >= frame.y && cy <= frame.y + frame.height;
  }, []);

  const rect = () => ref.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
  const toG = useCallback((sx: number, sy: number) => { const r = rect(); return { x: (sx - r.left - pan.x) / zoom, y: (sy - r.top - pan.y) / zoom }; }, [pan, zoom]);

  const effectiveNodes = useMemo(() => {
    if (!livePositions) return nodes;
    return nodes.map(n => {
      const ov = livePositions[n.id];
      return ov ? { ...n, x: ov.x, y: ov.y } : n;
    });
  }, [nodes, livePositions]);

  const effectiveFrames = useMemo(() => {
    if (!liveFrameRects) return frames;
    return frames.map((f) => {
      const ov = liveFrameRects[f.id];
      return ov ? { ...f, ...ov } : f;
    });
  }, [frames, liveFrameRects]);

  useEffect(() => {
    if (!viewCommandType) return;
    if (viewCommandType === 'reset') {
      setPan({ x: 60, y: 60 });
      setZoom(1);
      return;
    }
    if (viewCommandType === 'frame_all') {
      const host = ref.current;
      if (!host) return;
      const bounds = host.getBoundingClientRect();
      const boxes: Array<{ x0: number; y0: number; x1: number; y1: number }> = [];
      nodes.forEach((n) => {
        boxes.push({ x0: n.x, y0: n.y, x1: n.x + NW, y1: n.y + nodeHeight(n.type) });
      });
      frames.forEach((f) => {
        boxes.push({ x0: f.x, y0: f.y, x1: f.x + f.width, y1: f.y + f.height });
      });
      if (boxes.length === 0) {
        setPan({ x: 60, y: 60 });
        setZoom(1);
        return;
      }
      let minX = Number.POSITIVE_INFINITY;
      let minY = Number.POSITIVE_INFINITY;
      let maxX = Number.NEGATIVE_INFINITY;
      let maxY = Number.NEGATIVE_INFINITY;
      boxes.forEach((box) => {
        minX = Math.min(minX, box.x0);
        minY = Math.min(minY, box.y0);
        maxX = Math.max(maxX, box.x1);
        maxY = Math.max(maxY, box.y1);
      });
      const graphW = Math.max(1, maxX - minX);
      const graphH = Math.max(1, maxY - minY);
      const pad = 80;
      const fitX = (bounds.width - pad * 2) / graphW;
      const fitY = (bounds.height - pad * 2) / graphH;
      const nz = clamp(Math.min(fitX, fitY), ZOOM_MIN, ZOOM_MAX);
      const px = (bounds.width - graphW * nz) * 0.5 - minX * nz;
      const py = (bounds.height - graphH * nz) * 0.5 - minY * nz;
      setZoom(nz);
      setPan({ x: px, y: py });
    }
  }, [viewCommandNonce, viewCommandType, nodes, frames]);

  useEffect(() => {
    if (onSelectionChange) onSelectionChange(sel);
  }, [sel, onSelectionChange]);

  useEffect(() => {
    const ids = new Set(nodes.map((n) => n.id));
    setSelectedIds((prev) => prev.filter((id) => ids.has(id)));
    setSel((prev) => (prev && ids.has(prev) ? prev : null));
  }, [nodes]);

  useEffect(() => {
    const ids = new Set(frames.map((f) => f.id));
    setSelectedFrameId((prev) => (prev && ids.has(prev) ? prev : null));
  }, [frames]);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      setZoom(z => { const nz = Math.round(clamp(z + delta, ZOOM_MIN, ZOOM_MAX) * 100) / 100; setPan(p => ({ x: mx - (mx - p.x) * (nz / z), y: my - (my - p.y) * (nz / z) })); return nz; });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const zoomTo = useCallback((nz: number) => { const el = ref.current; if (!el) return; const { width, height } = el.getBoundingClientRect(), cx = width / 2, cy = height / 2; setZoom(z => { const n = clamp(nz, ZOOM_MIN, ZOOM_MAX); setPan(p => ({ x: cx - (cx - p.x) * (n / z), y: cy - (cy - p.y) * (n / z) })); return n; }); }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setConn(null);
        setSnapTarget(null);
        setFrameDrag(null);
        setFrameResize(null);
        setLiveFrameRects(null);
        setDrag(null);
        setMultiDrag(null);
        setPanDrag(null);
        endCanvasInteraction();
        return;
      }
      const active = document.activeElement as HTMLElement | null;
      const activeTag = active?.tagName;
      const editing = !!active && (active.isContentEditable || !!active.closest('[contenteditable="true"]') || activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT');
      if ((e.key === "Delete" || e.key === "Backspace") && !editing) {
        if (selectedIds.length > 0) {
          selectedIds.forEach((id) => {
            const nd = nodes.find(n => n.id === id);
            if (nd && !isOutputNodeType(nd.type)) onDelNode(id);
          });
          setSelectedIds([]);
          setSel(null);
          return;
        }
        if (sel) {
          const nd = nodes.find(n => n.id === sel);
          if (nd && !isOutputNodeType(nd.type)) {
            onDelNode(sel);
            setSel(null);
            setSelectedIds([]);
            return;
          }
        }
        if (selectedFrameId && onDelFrame) {
          onDelFrame(selectedFrameId);
          setSelectedFrameId(null);
        }
      }
    };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [sel, selectedIds, nodes, onDelNode, onDelFrame, selectedFrameId, endCanvasInteraction]);

  const SNAP_RADIUS = 35;

  const typeCompat = useCallback((fromType?: DataType, toType?: DataType): 'exact' | 'cast' | 'invalid' => {
    if (!fromType || !toType) return 'exact';
    if (fromType === toType) return 'exact';
    const numerics = new Set<DataType>(['float', 'vec2', 'vec3', 'vec4']);
    if (numerics.has(fromType) && numerics.has(toType)) return 'cast';
    return 'invalid';
  }, []);

  const onMM = useCallback((e: React.MouseEvent) => {
    const r = rect(), mx = e.clientX - r.left, my = e.clientY - r.top; setMouse({ x: mx, y: my });
    if (drag) {
      const pos = { x: (mx - pan.x) / zoom - drag.ox, y: (my - pan.y) / zoom - drag.oy };
      setLivePositions({ [drag.id]: pos });
    }
    if (multiDrag) {
      const gx = (mx - pan.x) / zoom;
      const gy = (my - pan.y) / zoom;
      const dx = gx - multiDrag.startGX;
      const dy = gy - multiDrag.startGY;
      const next: Record<string, { x: number; y: number }> = {};
      Object.entries(multiDrag.starts).forEach(([id, p]) => { next[id] = { x: p.x + dx, y: p.y + dy }; });
      setLivePositions(next);
    }
      if (frameDrag) {
        const frame = frames.find((f) => f.id === frameDrag.id);
        if (frame) {
          const gx = (mx - pan.x) / zoom;
          const gy = (my - pan.y) / zoom;
          const x = gx - frameDrag.ox;
          const y = gy - frameDrag.oy;
          setLiveFrameRects({ [frame.id]: { x, y, width: frame.width, height: frame.height } });
          const dx = x - frameDrag.frameStartX;
          const dy = y - frameDrag.frameStartY;
          if (Object.keys(frameDrag.starts).length > 0) {
            const next: Record<string, { x: number; y: number }> = {};
            Object.entries(frameDrag.starts).forEach(([id, p]) => {
              next[id] = { x: p.x + dx, y: p.y + dy };
            });
            setLivePositions(next);
          }
        }
      }
    if (frameResize) {
      const frame = frames.find((f) => f.id === frameResize.id);
      if (frame) {
        const gx = (mx - pan.x) / zoom;
        const gy = (my - pan.y) / zoom;
        const width = Math.max(FRAME_MIN_W, frameResize.startW + (gx - frameResize.startGX));
        const height = Math.max(FRAME_MIN_H, frameResize.startH + (gy - frameResize.startGY));
        setLiveFrameRects({ [frame.id]: { x: frame.x, y: frame.y, width, height } });
      }
    }
    if (boxSel) setBoxSel((prev) => prev ? { ...prev, x1: mx, y1: my } : prev);
    if (panDrag) { setPan(p => ({ x: p.x + e.clientX - panDrag.x, y: p.y + e.clientY - panDrag.y })); setPanDrag({ x: e.clientX, y: e.clientY }); }

    if (conn) {
      let best: typeof snapTarget = null;
      let bestDist = SNAP_RADIUS;
      for (const n of effectiveNodes) {
        if (n.id === conn.from) continue;
        const def = NODE_REGISTRY[n.type];
        if (!def) continue;
        for (let i = 0; i < def.inputs.length; i++) {
          const ip = inPos(n, i);
          const sx = ip.x * zoom + pan.x;
          const sy = ip.y * zoom + pan.y;
          const d = Math.hypot(mx - sx, my - sy);
          if (d < bestDist) {
            bestDist = d;
            const compat = typeCompat(conn.fromType, def.inputs[i].type as DataType);
            best = { nodeId: n.id, portIndex: i, screenX: sx, screenY: sy, compat };
          }
        }
      }
      setSnapTarget(best);
    }
  }, [drag, multiDrag, frameDrag, frameResize, boxSel, panDrag, pan, zoom, conn, effectiveNodes, frames, typeCompat]);

  const onMU = useCallback(() => {
    const hadCanvasInteraction = !!drag || !!multiDrag || !!frameDrag || !!frameResize;
    if (conn && snapTarget && snapTarget.compat !== 'invalid') {
      onConnect(conn.from, snapTarget.nodeId, snapTarget.portIndex, conn.fromPort ?? 0);
      setConn(null);
      setSnapTarget(null);
    }
    if (boxSel) {
      const minX = Math.min(boxSel.x0, boxSel.x1);
      const minY = Math.min(boxSel.y0, boxSel.y1);
      const maxX = Math.max(boxSel.x0, boxSel.x1);
      const maxY = Math.max(boxSel.y0, boxSel.y1);
      const moved = Math.abs(boxSel.x1 - boxSel.x0) > 4 || Math.abs(boxSel.y1 - boxSel.y0) > 4;
      if (moved) {
        const gx0 = (minX - pan.x) / zoom;
        const gy0 = (minY - pan.y) / zoom;
        const gx1 = (maxX - pan.x) / zoom;
        const gy1 = (maxY - pan.y) / zoom;
        const inside = nodes
          .filter((n) => {
            const nx0 = n.x, ny0 = n.y, nx1 = n.x + NW, ny1 = n.y + nodeHeight(n.type);
            return nx1 >= gx0 && nx0 <= gx1 && ny1 >= gy0 && ny0 <= gy1;
          })
          .map((n) => n.id);
        const next = boxSel.append ? Array.from(new Set([...selectedIds, ...inside])) : inside;
        setSelectedIds(next);
        setSel(next[0] ?? null);
        setSelectedFrameId(null);
        suppressCanvasClickRef.current = true;
      }
      setBoxSel(null);
    }
    if (livePositions) {
      Object.entries(livePositions).forEach(([id, pos]) => onMove(id, pos));
      setLivePositions(null);
    }
    if (liveFrameRects) {
      Object.entries(liveFrameRects).forEach(([id, rect]) => {
        if (frameDrag && onMoveFrame) onMoveFrame(id, { x: rect.x, y: rect.y });
        if (frameResize && onResizeFrame) onResizeFrame(id, { width: rect.width, height: rect.height });
      });
      setLiveFrameRects(null);
    }
    if (hadCanvasInteraction) endCanvasInteraction();
    setDrag(null);
    setMultiDrag(null);
    setFrameDrag(null);
    setFrameResize(null);
    setPanDrag(null);
  }, [boxSel, conn, frameDrag, frameResize, snapTarget, onConnect, pan.x, pan.y, zoom, nodes, selectedIds, livePositions, liveFrameRects, onMove, onMoveFrame, onResizeFrame, endCanvasInteraction]);

  const onMD = useCallback((e: React.MouseEvent) => { 
    if (e.button === 0) {
      const r = rect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      setBoxSel({ x0: mx, y0: my, x1: mx, y1: my, append: e.shiftKey });
      return;
    }
    if (e.button === 1 || e.button === 2) { 
      // Only pan if not clicking a node (handled by stopPropagation in startDrag)
      // But startDrag is on NodeCard, so if we are here, we clicked background.
      // Wait, context menu is on right click (button 2).
      if (e.button === 1) { // Middle click pan
         e.preventDefault(); setPanDrag({ x: e.clientX, y: e.clientY }); 
      }
    } 
  }, []);

  const distanceToSegment = (px: number, py: number, x1: number, y1: number, x2: number, y2: number) => {
    const vx = x2 - x1;
    const vy = y2 - y1;
    const wx = px - x1;
    const wy = py - y1;
    const c1 = vx * wx + vy * wy;
    if (c1 <= 0) return Math.hypot(px - x1, py - y1);
    const c2 = vx * vx + vy * vy;
    if (c2 <= c1) return Math.hypot(px - x2, py - y2);
    const b = c1 / c2;
    const bx = x1 + b * vx;
    const by = y1 + b * vy;
    return Math.hypot(px - bx, py - by);
  };

  const detectTargetAt = useCallback((gx: number, gy: number): GraphMenuTarget => {
    const portThreshold = 10 / zoom;

    // Ports first
    for (const n of effectiveNodes) {
      const def = NODE_REGISTRY[n.type];
      if (!def) continue;
      if (!isOutputNodeType(n.type) && def.outputs?.length) {
        const outCount = def.outputs.length;
        for (let i = 0; i < outCount; i++) {
          const pos = outPos(n, i, outCount);
          if (Math.hypot(gx - pos.x, gy - pos.y) <= portThreshold) {
            return { kind: 'port', nodeId: n.id, portIndex: i, direction: 'out', type: def.outputs[i]?.type };
          }
        }
      }
      for (let i = 0; i < def.inputs.length; i++) {
        const ix = n.x;
        const iyShifted = n.y + HDR + PREVIEW_H + i * ROW + ROW / 2;
        if (Math.hypot(gx - ix, gy - iyShifted) <= portThreshold) {
          return { kind: 'port', nodeId: n.id, portIndex: i, direction: 'in', type: def.inputs[i].type };
        }
      }
    }

    // Nodes
    for (let i = effectiveNodes.length - 1; i >= 0; i--) {
      const n = effectiveNodes[i];
      const w = NW;
      const h = nodeHeight(n.type);
      if (gx >= n.x && gx <= n.x + w && gy >= n.y && gy <= n.y + h) {
        return { kind: 'node', nodeId: n.id };
      }
    }

    // Edges (sampled Bezier)
    const edgeThreshold = 9 / zoom;
    for (const ed of edges) {
      const fn = effectiveNodes.find((n) => n.id === ed.fromId);
      const tn = effectiveNodes.find((n) => n.id === ed.toId);
      const fromDef = fn ? NODE_REGISTRY[fn.type] : null;
      if (!fn || !tn || !fromDef) continue;
      const s = outPos(fn, ed.fromPort, fromDef.outputs?.length ?? 1);
      const t = inPos(tn, ed.toPort);
      const d = Math.max(Math.abs(t.x - s.x) * 0.5, 55);
      let minDist = Number.POSITIVE_INFINITY;
      let px = s.x, py = s.y;
      for (let step = 1; step <= 20; step++) {
        const tt = step / 20;
        const u = 1 - tt;
        const x = u * u * u * s.x + 3 * u * u * tt * (s.x + d) + 3 * u * tt * tt * (t.x - d) + tt * tt * tt * t.x;
        const y = u * u * u * s.y + 3 * u * u * tt * s.y + 3 * u * tt * tt * t.y + tt * tt * tt * t.y;
        minDist = Math.min(minDist, distanceToSegment(gx, gy, px, py, x, y));
        px = x;
        py = y;
      }
      if (minDist <= edgeThreshold) {
        return { kind: 'edge', edgeId: ed.id };
      }
    }

    for (let i = effectiveFrames.length - 1; i >= 0; i--) {
      const frame = effectiveFrames[i];
      if (gx >= frame.x && gx <= frame.x + frame.width && gy >= frame.y && gy <= frame.y + frame.height) {
        return { kind: 'frame', frameId: frame.id };
      }
    }

    return { kind: 'canvas' };
  }, [edges, effectiveNodes, effectiveFrames, zoom]);

  const onContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const r = rect();
    const gx = (e.clientX - r.left - pan.x) / zoom;
    const gy = (e.clientY - r.top - pan.y) / zoom;
    const target = detectTargetAt(gx, gy);
    if (target.kind === 'frame') {
      setSelectedFrameId(target.frameId);
      setSel(null);
      setSelectedIds([]);
    }
    if (onRequestContextMenu) {
      onRequestContextMenu({
        clientX: e.clientX,
        clientY: e.clientY,
        graphX: gx,
        graphY: gy,
        target
      });
    }
  }, [detectTargetAt, onRequestContextMenu, pan, zoom]);

  const onDragOver = useCallback((e: React.DragEvent) => {
    if (e.dataTransfer.types.includes('application/nt-node-type')) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }
  }, []);

  const onDropNode = useCallback((e: React.DragEvent) => {
    const type = e.dataTransfer.getData('application/nt-node-type');
    if (!type) return;
    e.preventDefault();
    const pos = toG(e.clientX, e.clientY);
    onAddNode(type, pos.x, pos.y);
  }, [toG, onAddNode]);

  const startDrag = useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const n = nodes.find(x => x.id === id); if (!n) return;
    const g = toG(e.clientX, e.clientY);
    beginCanvasInteraction();
    if (selectedSet.has(id) && selectedIds.length > 1) {
      const starts: Record<string, { x: number, y: number }> = {};
      selectedIds.forEach((sid) => {
        const sn = nodes.find((nn) => nn.id === sid);
        if (sn) starts[sid] = { x: sn.x, y: sn.y };
      });
      setMultiDrag({ startGX: g.x, startGY: g.y, starts });
      return;
    }
    setSel(id);
    setSelectedIds([id]);
    setSelectedFrameId(null);
    setDrag({ id, ox: g.x - n.x, oy: g.y - n.y });
  }, [nodes, toG, selectedIds, selectedSet, beginCanvasInteraction]);
  const startFrameDrag = useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const frame = effectiveFrames.find((f) => f.id === id);
    if (!frame) return;
    beginCanvasInteraction();
    const g = toG(e.clientX, e.clientY);
    setSelectedFrameId(id);
    setSel(null);
    setSelectedIds([]);
    const starts: Record<string, { x: number; y: number }> = {};
    effectiveNodes.forEach((node) => {
      if (isNodeInFrame(node, frame)) {
        starts[node.id] = { x: node.x, y: node.y };
      }
    });
    setFrameDrag({
      id,
      ox: g.x - frame.x,
      oy: g.y - frame.y,
      frameStartX: frame.x,
      frameStartY: frame.y,
      starts,
    });
    if (Object.keys(starts).length > 0) {
      setLivePositions(starts);
    }
  }, [effectiveFrames, effectiveNodes, toG, isNodeInFrame, beginCanvasInteraction]);
  const startFrameResize = useCallback((e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const frame = effectiveFrames.find((f) => f.id === id);
    if (!frame) return;
    beginCanvasInteraction();
    const g = toG(e.clientX, e.clientY);
    setSelectedFrameId(id);
    setSel(null);
    setSelectedIds([]);
    setFrameResize({ id, startGX: g.x, startGY: g.y, startW: frame.width, startH: frame.height });
  }, [effectiveFrames, toG, beginCanvasInteraction]);
  const onOut = useCallback((e: React.MouseEvent, id: string, portIndex: number = 0) => {
    e.stopPropagation(); setSel(id); setSelectedIds([id]); setSelectedFrameId(null);
    const def = NODE_REGISTRY[id] ?? NODE_REGISTRY[nodes.find(n => n.id === id)?.type ?? ''];
    const fromType = def?.outputs[portIndex]?.type as DataType | undefined;
    setConn({ from: id, fromPort: portIndex, fromType });
    setSnapTarget(null);
  }, [nodes]);
  const onIn = useCallback((e: React.MouseEvent, id: string, port: number) => { e.stopPropagation(); if (!conn || conn.from === id) return; onConnect(conn.from, id, port, conn.fromPort ?? 0); setConn(null); setSnapTarget(null); }, [conn, onConnect]);
  const onSelectNode = useCallback((id: string) => { setSel(id); setSelectedIds([id]); setSelectedFrameId(null); }, []);
  const onOpenNode = useCallback((id: string) => {
    setSel(id);
    setSelectedIds([id]);
    setSelectedFrameId(null);
    onNodeOpen?.(id);
  }, [onNodeOpen]);
  const pScreen = useCallback((n: NodeData, isOut: boolean, pi = 0) => {
    const d = NODE_REGISTRY[n.type];
    const outCount = d?.outputs?.length ?? 1;
    const b = isOut ? outPos(n, pi, outCount) : inPos(n, pi);
    return { x: b.x * zoom + pan.x, y: b.y * zoom + pan.y };
  }, [pan, zoom]);
  const pendWire = useMemo(() => {
    if (!conn) return null;
    const fn = effectiveNodes.find(n => n.id === conn.from);
    if (!fn) return null;
    const fp = pScreen(fn, true, conn.fromPort ?? 0);
    const endX = snapTarget ? snapTarget.screenX : mouse.x;
    const endY = snapTarget ? snapTarget.screenY : mouse.y;
    const path = bz(fp.x, fp.y, endX, endY);
    let color = dataTypeColor(conn.fromType ?? 'float');
    let opacity = 0.6;
    if (snapTarget) {
      if (snapTarget.compat === 'exact') { color = '#22c55e'; opacity = 0.9; }
      else if (snapTarget.compat === 'cast') { color = '#eab308'; opacity = 0.85; }
      else { color = '#ef4444'; opacity = 0.85; }
    }
    return { path, color, opacity };
  }, [conn, effectiveNodes, mouse, pScreen, snapTarget]);

  const dsp = 26 * zoom, dox = ((pan.x % dsp) + dsp) % dsp, doy = ((pan.y % dsp) + dsp) % dsp;
  const selNode = nodes.find(n => n.id === sel);
  const selFrame = frames.find((f) => f.id === selectedFrameId);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", cursor: conn ? "crosshair" : (frameResize ? "nwse-resize" : (frameDrag || panDrag) ? "grabbing" : "default") }}
      onMouseMove={onMM} onMouseUp={onMU} onMouseDown={onMD} onContextMenu={onContextMenu}
      onDragOver={onDragOver} onDrop={onDropNode}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <defs>
          <pattern id="dg" width={dsp} height={dsp} patternUnits="userSpaceOnUse" patternTransform={`translate(${dox} ${doy})`}>
            <circle cx="0" cy="0" r={clamp(.65 * zoom, .3, 1.1)} fill="#ffffff09" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dg)" />
        <line x1={pan.x} y1={0} x2={pan.x} y2="100%" stroke="#ffffff05" strokeWidth="1" />
        <line x1={0} y1={pan.y} x2="100%" y2={pan.y} stroke="#ffffff05" strokeWidth="1" />
      </svg>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} onClick={() => {
        if (suppressCanvasClickRef.current) { suppressCanvasClickRef.current = false; return; }
        setConn(null); setSnapTarget(null); setSel(null); setSelectedIds([]); setSelectedFrameId(null); onCanvasClick?.();
      }}>
        <rect width="100%" height="100%" fill="transparent" />
        <defs>
        {edges.map(ed => {
          const fn = effectiveNodes.find(n => n.id === ed.fromId), tn = effectiveNodes.find(n => n.id === ed.toId);
          if (!fn || !tn) return null;
          const fromDef = NODE_REGISTRY[fn.type];
          const toDef = NODE_REGISTRY[tn.type];
          const outType = (fromDef?.outputs[ed.fromPort]?.type as DataType) ?? 'float';
          const inType = (toDef?.inputs[ed.toPort]?.type as DataType) ?? 'float';
          const fromColor = dataTypeColor(outType);
          const toColor = dataTypeColor(inType);
          const needsGradient = outType !== inType && NUMERIC_TYPES.includes(outType) && NUMERIC_TYPES.includes(inType);
          if (!needsGradient) return null;
          const fp = pScreen(fn, true, ed.fromPort), tp = pScreen(tn, false, ed.toPort);
          return (
            <linearGradient key={ed.id} id={`edge-grad-${ed.id}`} x1={fp.x} y1={fp.y} x2={tp.x} y2={tp.y} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={fromColor} />
              <stop offset="100%" stopColor={toColor} />
            </linearGradient>
          );
        })}
        </defs>
        {edges.map(ed => {
          const fn = effectiveNodes.find(n => n.id === ed.fromId), tn = effectiveNodes.find(n => n.id === ed.toId); if (!fn || !tn) return null;
          const fromDef = NODE_REGISTRY[fn.type];
          const toDef = NODE_REGISTRY[tn.type];
          const outType = (fromDef?.outputs[ed.fromPort]?.type as DataType) ?? 'float';
          const inType = (toDef?.inputs[ed.toPort]?.type as DataType) ?? 'float';
          const fromColor = dataTypeColor(outType);
          const toColor = dataTypeColor(inType);
          const needsGradient = outType !== inType && NUMERIC_TYPES.includes(outType) && NUMERIC_TYPES.includes(inType);
          const fp = pScreen(fn, true, ed.fromPort), tp = pScreen(tn, false, ed.toPort), path = bz(fp.x, fp.y, tp.x, tp.y);
          const stroke = needsGradient ? `url(#edge-grad-${ed.id})` : fromColor;
          return (
            <g key={ed.id}>
              <path d={path} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" pointerEvents="none" />
              <path d={path} fill="none" stroke="transparent" strokeWidth="16" style={{ cursor: "pointer" }} onClick={e => { e.stopPropagation(); onDelEdge(ed.id); }} />
            </g>
          );
        })}
        {pendWire && (
          <g pointerEvents="none">
            <path d={pendWire.path} fill="none" stroke={pendWire.color} strokeWidth={snapTarget ? 2.5 : 1.8} strokeDasharray={snapTarget ? 'none' : '6 4'} strokeLinecap="round" opacity={pendWire.opacity} />
            {snapTarget && (
              <>
                <circle cx={snapTarget.screenX} cy={snapTarget.screenY} r={10} fill={pendWire.color + '30'} stroke={pendWire.color} strokeWidth={2} opacity={0.9} />
                <circle cx={snapTarget.screenX} cy={snapTarget.screenY} r={16} fill="none" stroke={pendWire.color} strokeWidth={0.8} opacity={0.4}>
                  <animate attributeName="r" from="12" to="22" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="0.8s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </g>
        )}
        {boxSel && (
          <g pointerEvents="none">
            <rect
              x={Math.min(boxSel.x0, boxSel.x1)}
              y={Math.min(boxSel.y0, boxSel.y1)}
              width={Math.abs(boxSel.x1 - boxSel.x0)}
              height={Math.abs(boxSel.y1 - boxSel.y0)}
              fill="#3b82f630"
              stroke="#60a5fa"
              strokeWidth={1}
              strokeDasharray="4 3"
            />
          </g>
        )}
      </svg>
      <div style={{ position: "absolute", inset: 0, transform: `translate(${pan.x}px,${pan.y}px) scale(${zoom})`, transformOrigin: "0 0", pointerEvents: "none" }}>
        {effectiveFrames.map((frame) => {
          const isSelected = selectedFrameId === frame.id;
          const accent = frame.color || '#4d78bc';
          return (
            <div
              key={frame.id}
              style={{
                position: 'absolute',
                left: frame.x,
                top: frame.y,
                width: frame.width,
                height: frame.height,
                borderRadius: 8,
                border: `1px solid ${isSelected ? withAlpha(accent, 'cc', '#4d78bccc') : withAlpha(accent, '66', '#4d78bc66')}`,
                background: withAlpha(accent, '18', '#4d78bc18'),
                boxShadow: isSelected ? `0 0 0 1px ${withAlpha(accent, '55', '#4d78bc55')}, inset 0 0 0 1px #ffffff10` : 'inset 0 0 0 1px #ffffff06',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <div
                onMouseDown={(e) => startFrameDrag(e, frame.id)}
                style={{
                  height: FRAME_HEADER_H,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 8px',
                  borderBottom: `1px solid ${withAlpha(accent, '66', '#4d78bc66')}`,
                  background: withAlpha(accent, '24', '#4d78bc24'),
                  color: '#cfd8ef',
                  fontSize: 10,
                  letterSpacing: 0.4,
                  fontWeight: 700,
                  cursor: 'grab',
                  userSelect: 'none',
                  pointerEvents: 'all',
                }}
                title={frame.label || 'Frame'}
              >
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {frame.label || 'Frame'}
                </span>
              </div>
              <div
                onMouseDown={(e) => startFrameResize(e, frame.id)}
                style={{
                  position: 'absolute',
                  right: 2,
                  bottom: 2,
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  border: `1px solid ${withAlpha(accent, 'aa', '#4d78bcaa')}`,
                  background: withAlpha(accent, '33', '#4d78bc33'),
                  cursor: 'nwse-resize',
                  pointerEvents: 'all',
                }}
              />
            </div>
          );
        })}
        {effectiveNodes.map(n => (
          <NodeCard key={n.id} node={n} edges={edges} allNodes={nodes} isSel={selectedSet.has(n.id)} isConn={!!conn} connFrom={conn?.from ?? null}
            connFromPort={conn?.fromPort}
            connFromType={conn?.fromType}
            snapTarget={conn && snapTarget?.nodeId === n.id ? snapTarget : null}
            previewUrl={nodePreviews?.[n.id]}
            compileMs={nodeTimings?.[n.id]}
            onDrag={startDrag} onOut={onOut} onIn={onIn} onUpdate={onUpdateParam} onDelete={onDelNode} onSelect={onSelectNode} onOpen={onOpenNode} />
        ))}
      </div>
      
      <ZoomBar zoom={zoom} onZoom={zoomTo} onReset={() => { setPan({ x: 60, y: 60 }); setZoom(1); }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 22, display: "flex", alignItems: "center", padding: "0 12px", gap: 14, fontSize: 8, color: "#1c1c2e", letterSpacing: .7, pointerEvents: "none", borderTop: "1px solid #0e0e1c" }}>
        <span>SCROLL zoom</span><span>MMB pan</span><span>RMB menu</span><span>DBLCLICK node open/pin</span><span>DRAG frame header</span><span>DEL delete selected</span><span>ESC cancel</span>
        {conn && !snapTarget && <span style={{ color: "#94a3b8", marginLeft: 4 }}>● CONNECTING — drag to input port</span>}
        {conn && snapTarget && snapTarget.compat === 'exact' && <span style={{ color: "#22c55e", marginLeft: 4 }}>● SNAP — release to connect</span>}
        {conn && snapTarget && snapTarget.compat === 'cast' && <span style={{ color: "#eab308", marginLeft: 4 }}>● SNAP (implicit cast) — release to connect</span>}
        {conn && snapTarget && snapTarget.compat === 'invalid' && <span style={{ color: "#ef4444", marginLeft: 4 }}>● INCOMPATIBLE — types don't match</span>}
        {selNode && !conn && !isOutputNodeType(selNode.type) && (
          <span style={{ color: catColor(selNode.type), marginLeft: 4 }}>◈ {NODE_REGISTRY[selNode.type]?.label} selected · DEL to delete</span>
        )}
        {selFrame && !conn && !selNode && (
          <span style={{ color: selFrame.color || '#7aa2f7', marginLeft: 4 }}>FRAME {selFrame.label || selFrame.id} selected - DEL to delete</span>
        )}
      </div>
    </div>
  );
}
