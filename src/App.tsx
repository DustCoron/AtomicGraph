import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Redo2, Undo2 } from 'lucide-react';
import { GraphContextMenuRequest } from './components/GraphEditor';
import { CommandPalette } from './components/CommandPalette';
import { NodePickerModal } from './components/NodePickerModal';
import { OperatorContextMenu } from './components/OperatorContextMenu';
import { OperatorPieMenu } from './components/OperatorPieMenu';
import { CompiledShader, Compiler, COMPILER_BUILD } from './core/compiler';
import { GraphEngine } from './core/graph';
import { SCHEMA_VERSION } from './core/graph-ir';
import { TextureEngine, applyRuntimeUniforms, buildCodeSignature, buildOutputAffectingSignature } from './core/engine';
import { getDirtyNodes } from './core/plan';
import { ensureBuiltinOperators } from './core/operators/builtin';
import { operatorRegistry, runOperator } from './core/operators/registry';
import { AddNodeIntent, OperatorContext } from './core/operators/types';
import {
  channelFromOutputNodeType,
  getExportPreset,
  getOutputNodeForChannel,
  isOutputNodeType,
  OUTPUT_CHANNEL_PORTS,
  OutputChannel,
  resolveOutputChannels
} from './core/output';
import { CATEGORIES, NODE_REGISTRY } from './core/registry';
import { GraphData, NodeData } from './core/types';
import { appendAppLog, getAppLogs } from './core/logs';
import { MonitorCheckResult, MonitorMode, MonitorSuiteRun, appendMonitorRun, buildMonitorRunId, clearMonitorRuns as clearMonitorRunsStore, getMonitorRuns } from './core/monitor';
import { PerformanceMode, RendererPerfSample, ViewportPerfSample, ViewportQualityState, percentile } from './core/perf';
import { Workspace } from './workspace/Workspace';
import { useWorkspace } from './workspace/store';
import { collectPanels } from './workspace/types';
import { AppContext, AppContextValue, OutputPreviewSurface, PreviewTargetInfo, renderViewByType } from './workspace/views';

const INIT_DATA: GraphData = {
  schemaVersion: 1,
  resolution: 512,
  nodes: [
    { id: 'out_base', type: 'output_baseColor', x: 1870, y: 120, params: {} },
    { id: 'out_rough', type: 'output_roughness', x: 1870, y: 290, params: {} },
    { id: 'out_normal', type: 'output_normal', x: 1870, y: 460, params: {} },
    { id: 'out_height', type: 'output_height', x: 1870, y: 630, params: {} },
    { id: 'spots_main', type: 'bnw_spots2_v2', x: 40, y: 70, params: {
      scale: 11, tileOffsetX: 0.0, tileOffsetY: 0.0, seed: 4242,
      nonSquareExpansion: true, grainAmount: 0.17, grainThreshold: 0.89, contrast: 1.14
    } },
    { id: 'spots_micro', type: 'bnw_spots2_v2', x: 40, y: 300, params: {
      scale: 22, tileOffsetX: 0.0, tileOffsetY: 0.0, seed: 777,
      nonSquareExpansion: true, grainAmount: 0.30, grainThreshold: 0.93, contrast: 1.25
    } },
    { id: 'blend_height', type: 'blend', x: 280, y: 180, params: { mode: 'multiply', opacity: 0.72 } },

    { id: 'perlin_deposit', type: 'perlin', x: 40, y: 540, params: { scale: 4.6, seed: 1337, tileOffsetX: 0.0, tileOffsetY: 0.0, nonSquare: true } },
    { id: 'dis_deposit', type: 'disorder', x: 280, y: 540, params: { amount: 0.10, scale: 12.0, speed: 0.35, seed: 2048 } },
    { id: 'blend_deposit', type: 'blend', x: 520, y: 300, params: { mode: 'add', opacity: 0.36 } },
    { id: 'levels_shape', type: 'levels', x: 760, y: 300, params: { inMin: 0.11, inMax: 0.93, gamma: 1.07 } },

    { id: 'edge_cavity', type: 'edge_detect', x: 760, y: 80, params: { radius: 1.6, strength: 2.0 } },
    { id: 'blend_cavity', type: 'blend', x: 1020, y: 210, params: { mode: 'burn', opacity: 0.38 } },
    { id: 'height_final', type: 'levels', x: 1260, y: 210, params: { inMin: 0.04, inMax: 0.99, gamma: 0.88 } },

    { id: 'rough_levels', type: 'levels', x: 1260, y: 420, params: { inMin: 0.18, inMax: 0.97, gamma: 1.35 } },
    { id: 'rough_micro', type: 'levels', x: 1020, y: 520, params: { inMin: 0.62, inMax: 1.0, gamma: 0.85 } },
    { id: 'rough_blend', type: 'blend', x: 1480, y: 470, params: { mode: 'screen', opacity: 0.30 } },

    { id: 'albedo_remap', type: 'remap', x: 1260, y: 640, params: { inLo: 0.0, inHi: 1.0, outLo: 0.09, outHi: 0.42 } },
    { id: 'albedo_micro', type: 'levels', x: 1020, y: 640, params: { inMin: 0.58, inMax: 1.0, gamma: 0.88 } },
    { id: 'albedo_blend', type: 'blend', x: 1480, y: 640, params: { mode: 'multiply', opacity: 0.22 } }
  ],
  edges: [
    { id: 'e1', fromId: 'spots_main', fromPort: 0, toId: 'blend_height', toPort: 0 },
    { id: 'e2', fromId: 'spots_micro', fromPort: 0, toId: 'blend_height', toPort: 1 },
    { id: 'e3', fromId: 'perlin_deposit', fromPort: 0, toId: 'dis_deposit', toPort: 0 },
    { id: 'e4', fromId: 'blend_height', fromPort: 0, toId: 'blend_deposit', toPort: 0 },
    { id: 'e5', fromId: 'dis_deposit', fromPort: 0, toId: 'blend_deposit', toPort: 1 },
    { id: 'e6', fromId: 'blend_deposit', fromPort: 0, toId: 'levels_shape', toPort: 0 },
    { id: 'e7', fromId: 'levels_shape', fromPort: 0, toId: 'edge_cavity', toPort: 0 },
    { id: 'e8', fromId: 'levels_shape', fromPort: 0, toId: 'blend_cavity', toPort: 0 },
    { id: 'e9', fromId: 'edge_cavity', fromPort: 0, toId: 'blend_cavity', toPort: 1 },
    { id: 'e10', fromId: 'blend_cavity', fromPort: 0, toId: 'height_final', toPort: 0 },
    { id: 'e11', fromId: 'height_final', fromPort: 0, toId: 'out_height', toPort: 0 },

    { id: 'e12', fromId: 'height_final', fromPort: 0, toId: 'rough_levels', toPort: 0 },
    { id: 'e13', fromId: 'spots_micro', fromPort: 0, toId: 'rough_micro', toPort: 0 },
    { id: 'e14', fromId: 'rough_levels', fromPort: 0, toId: 'rough_blend', toPort: 0 },
    { id: 'e15', fromId: 'rough_micro', fromPort: 0, toId: 'rough_blend', toPort: 1 },
    { id: 'e16', fromId: 'rough_blend', fromPort: 0, toId: 'out_rough', toPort: 0 },

    { id: 'e17', fromId: 'height_final', fromPort: 0, toId: 'albedo_remap', toPort: 0 },
    { id: 'e18', fromId: 'spots_micro', fromPort: 0, toId: 'albedo_micro', toPort: 0 },
    { id: 'e19', fromId: 'albedo_remap', fromPort: 0, toId: 'albedo_blend', toPort: 0 },
    { id: 'e20', fromId: 'albedo_micro', fromPort: 0, toId: 'albedo_blend', toPort: 1 },
    { id: 'e21', fromId: 'albedo_blend', fromPort: 0, toId: 'out_base', toPort: 0 }
  ],
  frames: [
    { id: 'fr_shape', x: 12, y: 30, width: 940, height: 430, label: 'Shape Build', color: '#4d78bc' },
    { id: 'fr_surface', x: 12, y: 480, width: 940, height: 290, label: 'Surface Micro', color: '#2f9e7f' },
    { id: 'fr_outputs', x: 980, y: 120, width: 1030, height: 640, label: 'Output Prep', color: '#a97b2c' }
  ]
};

const MAX_HISTORY = 100;
const NODE_THUMB_SIZE = 96;
const FRAME_COLORS = ['#4d78bc', '#2f9e7f', '#a97b2c', '#b1597a', '#6b66c7'];
const cloneGraph = (data: GraphData): GraphData => JSON.parse(JSON.stringify(data));

function buildNodePreviewTemplateGraph(resolution: number): GraphData {
  const nodes: NodeData[] = [];
  let idx = 0;
  for (const [type, def] of Object.entries(NODE_REGISTRY)) {
    if (isOutputNodeType(type)) continue;
    const params: Record<string, any> = {};
    for (const [key, meta] of Object.entries(def.params)) {
      params[key] = meta.default;
    }
    const col = idx % 6;
    const row = Math.floor(idx / 6);
    nodes.push({
      id: `tpl_${type}`,
      type,
      x: 80 + col * 300,
      y: 80 + row * 180,
      params,
    });
    idx += 1;
  }
  return {
    schemaVersion: SCHEMA_VERSION,
    resolution: Math.max(64, resolution || 512),
    nodes,
    edges: [],
  };
}

const isEditableTarget = (target: EventTarget | null): boolean => {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  if (el.isContentEditable || el.closest('[contenteditable="true"]')) return true;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
};

const normalizeShortcutKey = (key: string): string => {
  const token = key.trim().toLowerCase();
  if (token === 'del') return 'delete';
  if (token === 'esc') return 'escape';
  if (token === 'spacebar' || token === 'space') return ' ';
  return token;
};

const eventKey = (e: KeyboardEvent): string => {
  const key = e.key || '';
  if (key === ' ') return ' ';
  return key.toLowerCase();
};

const shortcutMatches = (shortcut: string | undefined, e: KeyboardEvent): boolean => {
  if (!shortcut) return false;
  const tokens = shortcut.split('+').map((token) => token.trim()).filter(Boolean);
  if (tokens.length === 0) return false;

  let needsCtrl = false;
  let needsMeta = false;
  let needsAlt = false;
  let needsShift = false;
  let keyToken = '';

  for (const raw of tokens) {
    const token = raw.toLowerCase();
    if (token === 'ctrl' || token === 'control') needsCtrl = true;
    else if (token === 'cmd' || token === 'command' || token === 'meta') needsMeta = true;
    else if (token === 'alt' || token === 'option') needsAlt = true;
    else if (token === 'shift') needsShift = true;
    else keyToken = raw;
  }

  const modDown = e.ctrlKey || e.metaKey;
  if (needsCtrl && !modDown) return false;
  if (needsMeta && !e.metaKey) return false;
  if (!needsCtrl && !needsMeta && modDown) return false;
  if (e.altKey !== needsAlt) return false;
  if (e.shiftKey !== needsShift) return false;

  if (!keyToken) return false;
  return normalizeShortcutKey(keyToken) === normalizeShortcutKey(eventKey(e));
};

interface NodeClipboard { type: string; x: number; y: number; params: Record<string, any>; }

function isSubgraphLike(value: any): value is GraphData {
  return !!value && Array.isArray(value.nodes) && Array.isArray(value.edges);
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

function buildDefaultPerlinSubgraph(node?: NodeData): GraphData {
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

function buildDefaultSubgraphForNode(node: NodeData): GraphData {
  if (node.type === 'perlin') return buildDefaultPerlinSubgraph(node);
  return buildDefaultAtomSubgraph();
}

function isSubgraphCapableType(type: string): boolean {
  return type === 'atom_graph' || type === 'perlin';
}

export default function App() {
  const engine = useRef(new GraphEngine(INIT_DATA));
  const tex = useRef(new TextureEngine(INIT_DATA));
  const [graph, setGraph] = useState<GraphData>(engine.current.serialize());
  const graphRef = useRef<GraphData>(graph);
  
  const tile = true;
  const [rawMode, setRawMode] = useState(false);
  const [patternSize, setPatternSize] = useState<number>(engine.current.resolution || 512);
  const previewResolution = useMemo(() => Math.min(patternSize, 1024), [patternSize]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [clipboard, setClipboard] = useState<NodeClipboard | null>(null);
  const [codeShader, setCodeShader] = useState<CompiledShader | null>(null);
  const [previewShader, setPreviewShader] = useState<CompiledShader | null>(null);
  const [nodePreviews, setNodePreviews] = useState<Record<string, string>>({});
  const [outputPreviewSurfaces, setOutputPreviewSurfaces] = useState<Partial<Record<OutputChannel, OutputPreviewSurface>>>({});
  const nodePreviewKeysRef = useRef<Record<string, string>>({});
  const nodePreviewImageCacheRef = useRef<Map<string, string>>(new Map());
  const outputPreviewKeysRef = useRef<Partial<Record<OutputChannel, string>>>({});
  const outputPreviewSurfacesRef = useRef<Partial<Record<OutputChannel, OutputPreviewSurface>>>({});
  const [nodeTimings, setNodeTimings] = useState<Record<string, number>>({});
  const [compileError, setCompileError] = useState<string | null>(null);
  const lastLoggedErrorRef = useRef('');
  const [compileTimeMs, setCompileTimeMs] = useState(0);
  const [recompileCount, setRecompileCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [libSearch, setLibSearch] = useState('');
  const [collapsedCats, setCollapsedCats] = useState<Set<string>>(new Set());
  const historyRef = useRef<{ past: GraphData[]; future: GraphData[] }>({ past: [], future: [] });

  const [interacting, setInteracting] = useState(false);
  const [pinnedPreviewNodeId, setPinnedPreviewNodeId] = useState<string | null>(null);
  const interactTimerRef = useRef(0);
  const INTERACT_DEBOUNCE = 300;
  const LQ_SCALE = 0.5;
  const performanceMode: PerformanceMode = 'performance_first';
  const [viewportQuality, setViewportQuality] = useState<ViewportQualityState>({
    scale: 1,
    reason: 'initial',
    last_change_at: Date.now(),
  });
  const previewFrameBudgetMs = interacting ? 16.6 : 22;
  const previewResScale = Math.min(interacting ? LQ_SCALE : 1, viewportQuality.scale);
  const [rendererPerf, setRendererPerf] = useState<RendererPerfSample | null>(null);
  const [rendererPerfP50, setRendererPerfP50] = useState(0);
  const [rendererPerfP95, setRendererPerfP95] = useState(0);
  const [thumbnailDeferred, setThumbnailDeferred] = useState(false);
  const [thumbnailBlockedUntil, setThumbnailBlockedUntil] = useState(0);
  const thumbnailBlockTimerRef = useRef(0);
  const [previewWorkPending, setPreviewWorkPending] = useState(false);
  const compileDebounceTimerRef = useRef(0);
  const previewProgramKeyRef = useRef('');
  const previewRuntimeKeyRef = useRef('');
  const thumbnailRoundRobinRef = useRef(0);
  const perfRingRef = useRef<RendererPerfSample[]>([]);
  const stableBudgetSinceRef = useRef(0);
  const lastCompileMsRef = useRef(0);
  const lastThumbnailMsRef = useRef(0);
  const lastReadbackMsRef = useRef(0);
  const lastUiCommitMsRef = useRef(0);

  const { root, floating, setActiveTab, resetLayout, addView, savePreset, loadPreset, getPresetNames } = useWorkspace();
  const [windowMenuOpen, setWindowMenuOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<GraphContextMenuRequest | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [nodePickerIntent, setNodePickerIntent] = useState<AddNodeIntent | null>(null);
  const [graphViewCommandNonce, setGraphViewCommandNonce] = useState(0);
  const [graphViewCommandType, setGraphViewCommandType] = useState<'reset' | 'frame_all' | null>(null);
  const [chaosMode, setChaosMode] = useState(false);
  const chaosTimerRef = useRef(0);
  const chaosStepCountRef = useRef(0);
  const [monitorRuns, setMonitorRuns] = useState<MonitorSuiteRun[]>(() => getMonitorRuns());
  const [monitorRunning, setMonitorRunning] = useState(false);
  const [atomViewBindings, setAtomViewBindings] = useState<Record<string, string>>({});

  const reportCompileIssue = useCallback((message: string | null, source: string) => {
    setCompileError(message);
    if (!message) {
      lastLoggedErrorRef.current = '';
      return;
    }
    if (lastLoggedErrorRef.current === message) return;
    lastLoggedErrorRef.current = message;
    const firstLine = message.split('\n')[0] || message;
    appendAppLog({
      level: 'error',
      source,
      message: firstLine,
      details: message,
    });
  }, []);

  const setPreviewPending = useCallback((pending: boolean) => {
    setPreviewWorkPending(pending);
  }, []);

  const deferThumbnails = useCallback((ms: number) => {
    const until = performance.now() + Math.max(0, ms);
    setThumbnailBlockedUntil((prev) => Math.max(prev, until));
  }, []);

  useEffect(() => {
    if (thumbnailBlockTimerRef.current) {
      window.clearTimeout(thumbnailBlockTimerRef.current);
      thumbnailBlockTimerRef.current = 0;
    }
    if (thumbnailBlockedUntil <= 0) {
      setThumbnailDeferred(false);
      return;
    }
    const remaining = Math.max(0, thumbnailBlockedUntil - performance.now());
    if (remaining <= 1) {
      setThumbnailBlockedUntil(0);
      setThumbnailDeferred(false);
      return;
    }
    setThumbnailDeferred(true);
    thumbnailBlockTimerRef.current = window.setTimeout(() => {
      setThumbnailBlockedUntil(0);
      setThumbnailDeferred(false);
      thumbnailBlockTimerRef.current = 0;
    }, remaining + 6);
    return () => {
      if (thumbnailBlockTimerRef.current) {
        window.clearTimeout(thumbnailBlockTimerRef.current);
        thumbnailBlockTimerRef.current = 0;
      }
    };
  }, [thumbnailBlockedUntil]);

  useEffect(() => {
    ensureBuiltinOperators();
  }, []);

  useEffect(() => () => {
    if (interactTimerRef.current) window.clearTimeout(interactTimerRef.current);
    if (compileDebounceTimerRef.current) window.clearTimeout(compileDebounceTimerRef.current);
    if (thumbnailBlockTimerRef.current) window.clearTimeout(thumbnailBlockTimerRef.current);
  }, []);

  useEffect(() => {
    outputPreviewSurfacesRef.current = outputPreviewSurfaces;
  }, [outputPreviewSurfaces]);

  const outputSigRef = useRef<string>('');
  const positionOnlyRef = useRef(false);
  useEffect(() => {
    graphRef.current = graph;
    const sig = buildOutputAffectingSignature(graph);
    if (sig === outputSigRef.current) {
      positionOnlyRef.current = true;
      tex.current.updateNodePositions(graph.nodes, graph.frames || []);
      return;
    }
    positionOnlyRef.current = false;
    outputSigRef.current = sig;
    tex.current.load({ schemaVersion: SCHEMA_VERSION, ...graph, meta: tex.current.getIR().meta });
  }, [graph]);

  const pushHistory = useCallback((prev: GraphData) => {
    historyRef.current.past.push(cloneGraph(prev));
    if (historyRef.current.past.length > MAX_HISTORY) historyRef.current.past.shift();
    historyRef.current.future = [];
  }, []);

  const applyEngineGraph = useCallback((next: GraphData) => {
    engine.current = new GraphEngine(next);
    setGraph(next);
  }, []);

  const applyMutation = useCallback((mutate: (eng: GraphEngine) => boolean | void, withHistory = true) => {
    const prev = engine.current.serialize();
    const result = mutate(engine.current);
    if (result === false) return false;
    const next = engine.current.serialize();
    if (withHistory) pushHistory(prev);
    setGraph(next);
    return true;
  }, [pushHistory]);

  const onSetPatternSize = useCallback((next: number) => {
    setPatternSize(next);
    applyMutation(eng => { eng.setResolution(next); }, true);
  }, [applyMutation]);

  const markInteracting = useCallback(() => {
    setInteracting(true);
    if (interactTimerRef.current) window.clearTimeout(interactTimerRef.current);
    interactTimerRef.current = window.setTimeout(() => setInteracting(false), INTERACT_DEBOUNCE);
  }, []);

  const onMove = useCallback((id: string, pos: { x: number; y: number }) => {
    markInteracting();
    applyMutation(eng => { eng.moveNode(id, pos.x, pos.y); }, false);
  }, [applyMutation, markInteracting]);

  const onMoveFrame = useCallback((id: string, pos: { x: number; y: number }) => {
    markInteracting();
    applyMutation((eng) => { eng.moveFrame(id, pos.x, pos.y); }, false);
  }, [applyMutation, markInteracting]);

  const onResizeFrame = useCallback((id: string, size: { width: number; height: number }) => {
    markInteracting();
    applyMutation((eng) => { eng.resizeFrame(id, size.width, size.height); }, false);
  }, [applyMutation, markInteracting]);

  const onDeleteFrame = useCallback((id: string) => {
    applyMutation((eng) => { eng.removeFrame(id); }, true);
  }, [applyMutation]);

  const onUpdateFrame = useCallback((id: string, patch: { label?: string; color?: string }) => {
    applyMutation((eng) => { eng.updateFrame(id, patch); }, true);
  }, [applyMutation]);

  const onAddFrameAt = useCallback((x: number, y: number) => {
    let createdId: string | null = null;
    applyMutation((eng) => {
      const count = eng.serialize().frames?.length ?? 0;
      const frame = eng.addFrame(x, y, 420, 260, `Frame ${count + 1}`, '#4d78bc');
      createdId = frame.id;
      return true;
    }, true);
    return createdId;
  }, [applyMutation]);

  const onDeleteEdge = useCallback((id: string) => {
    applyMutation(eng => { eng.removeEdge(id); }, true);
  }, [applyMutation]);

  const onConnect = useCallback((from: string, toId: string, toPort: number, fromPort?: number) => {
    applyMutation(eng => {
      const edge = eng.addEdge(from, toId, toPort, fromPort ?? 0);
      if (!edge) {
        if (eng.lastValidationError) {
          appendAppLog({
            level: 'warn',
            source: 'graph-connect',
            message: eng.lastValidationError,
          });
          alert(eng.lastValidationError);
        }
        return false;
      }
      return true;
    }, true);
  }, [applyMutation]);

  const onUpdateParam = useCallback((id: string, key: string, value: any) => {
    markInteracting();
    applyMutation(eng => {
      eng.updateParam(id, key, value);
      const node = eng.serialize().nodes.find(n => n.id === id);
      if (node?.type === 'remote' && key === 'value') {
        const targetId = node.params.target;
        const paramKey = node.params.key;
        if (targetId && paramKey) {
          eng.updateParam(targetId, paramKey, value);
        }
      }
    }, false);
  }, [applyMutation, markInteracting]);

  const onAddNode = useCallback((type: string, x?: number, y?: number) => {
    const nx = x ?? 100 + Math.random() * 200;
    const ny = y ?? 60 + Math.random() * 240;
    applyMutation(eng => {
      const created = eng.addNode(type, nx, ny);
      if (!created) return false;
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation]);

  const onDeleteNode = useCallback((id: string) => {
    const node = graph.nodes.find((n) => n.id === id);
    if (node && isOutputNodeType(node.type)) return;
    applyMutation(eng => { eng.removeNode(id); }, true);
    setSelectedNodeId(prev => (prev === id ? null : prev));
  }, [applyMutation, graph.nodes]);

  const onOpenAtomNode = useCallback((nodeId: string) => {
    const node = graphRef.current.nodes.find((n) => n.id === nodeId);
    if (!node || !isSubgraphCapableType(node.type)) return;

    const panels = collectPanels(root);
    for (const fp of floating) panels.push(fp.panel);
    const panelByViewId = new Map<string, string>();
    for (const panel of panels) {
      for (const tab of panel.tabs) panelByViewId.set(tab.id, panel.id);
    }

    const existingViewEntry = Object.entries(atomViewBindings).find(([, mappedNodeId]) => mappedNodeId === nodeId);
    if (existingViewEntry) {
      const [existingViewId] = existingViewEntry;
      const panelId = panelByViewId.get(existingViewId);
      if (panelId) {
        setActiveTab(panelId, existingViewId);
        return;
      }
      setAtomViewBindings((prev) => {
        const next = { ...prev };
        delete next[existingViewId];
        return next;
      });
    }

    if (!isSubgraphLike(node.params?.subgraph)) {
      applyMutation((eng) => {
        eng.updateParam(nodeId, 'subgraph', buildDefaultSubgraphForNode(node));
      }, true);
    }
    const titlePrefix = node.type === 'perlin' ? 'Perlin' : 'Atom';
    const viewId = addView('atom_graph', `${titlePrefix}: ${nodeId}`);
    setAtomViewBindings((prev) => ({ ...prev, [viewId]: nodeId }));
  }, [addView, applyMutation, atomViewBindings, floating, root, setActiveTab]);

  const onSave = useCallback(() => {
    const json = tex.current.serialize();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = `project_v${SCHEMA_VERSION}_${Date.now()}.json`; link.click();
    URL.revokeObjectURL(url);
  }, []);

  const onLoad = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const raw = JSON.parse(evt.target?.result as string);
        if (!raw.nodes || !raw.edges) throw new Error('Invalid project file');
        const gd = tex.current.load(raw);
        engine.current = new GraphEngine(gd);
        setGraph(gd);
        setPatternSize(tex.current.getResolution());
        engine.current.setResolution(tex.current.getResolution());
        historyRef.current = { past: [], future: [] };
        setSelectedNodeId(null);
      } catch (err: any) {
        appendAppLog({
          level: 'error',
          source: 'project-load',
          message: err?.message || 'Invalid project file',
          details: err instanceof Error ? err.stack : undefined,
        });
        alert('Invalid project file');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const copySelection = useCallback(() => {
    if (!selectedNodeId) return;
    const node = graph.nodes.find(n => n.id === selectedNodeId);
    if (!node || isOutputNodeType(node.type)) return;
    setClipboard({ type: node.type, x: node.x, y: node.y, params: { ...node.params } });
  }, [graph.nodes, selectedNodeId]);

  const pasteClipboard = useCallback((graphX?: number, graphY?: number) => {
    if (!clipboard) return;
    applyMutation(eng => {
      const px = typeof graphX === 'number' ? graphX : clipboard.x + 40;
      const py = typeof graphY === 'number' ? graphY : clipboard.y + 40;
      const created = eng.addNode(clipboard.type, px, py);
      if (!created) return false;
      Object.entries(clipboard.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation, clipboard]);

  const cutSelection = useCallback(() => {
    copySelection();
    if (selectedNodeId) onDeleteNode(selectedNodeId);
  }, [copySelection, onDeleteNode, selectedNodeId]);

  const duplicateSelection = useCallback(() => {
    if (!selectedNodeId) return;
    const node = graph.nodes.find(n => n.id === selectedNodeId);
    if (!node || isOutputNodeType(node.type)) return;
    applyMutation(eng => {
      const created = eng.addNode(node.type, node.x + 40, node.y + 40);
      if (!created) return false;
      Object.entries(node.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation, graph.nodes, selectedNodeId]);

  const undo = useCallback(() => {
    const past = historyRef.current.past;
    if (past.length === 0) return;
    const prev = past.pop()!;
    historyRef.current.future.unshift(cloneGraph(engine.current.serialize()));
    applyEngineGraph(prev);
    setPatternSize(prev.resolution || 512);
  }, [applyEngineGraph]);

  const redo = useCallback(() => {
    const future = historyRef.current.future;
    if (future.length === 0) return;
    const next = future.shift()!;
    historyRef.current.past.push(cloneGraph(engine.current.serialize()));
    applyEngineGraph(next);
    setPatternSize(next.resolution || 512);
  }, [applyEngineGraph]);

  const addNodeAt = useCallback((type: string, graphX: number, graphY: number): string | null => {
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(type, graphX, graphY);
      if (!created) return false;
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation]);

  const connectNodes = useCallback((fromId: string, toId: string, toPort: number, fromPort: number = 0) => {
    let ok = false;
    applyMutation(eng => {
      const edge = eng.addEdge(fromId, toId, toPort, fromPort);
      if (!edge) return false;
      ok = true;
      return true;
    }, true);
    return ok;
  }, [applyMutation]);

  const duplicateNodeById = useCallback((nodeId: string): string | null => {
    const node = graph.nodes.find(n => n.id === nodeId);
    if (!node || isOutputNodeType(node.type)) return null;
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(node.type, node.x + 40, node.y + 40);
      if (!created) return false;
      Object.entries(node.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation, graph.nodes]);

  const insertNodeOnEdge = useCallback((edgeId: string, nodeType: string, graphX: number, graphY: number): string | null => {
    const edge = graph.edges.find(e => e.id === edgeId);
    if (!edge) return null;
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(nodeType, graphX, graphY);
      if (!created) return false;
      eng.removeEdge(edgeId);
      const a = eng.addEdge(edge.fromId, created.id, 0, edge.fromPort);
      const b = eng.addEdge(created.id, edge.toId, edge.toPort, 0);
      if (!a || !b) return false;
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation, graph.edges]);

  const addNodeFromPort = useCallback((port: { nodeId: string; portIndex: number; direction: 'in' | 'out' }, nodeType: string, graphX: number, graphY: number): string | null => {
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(nodeType, graphX, graphY);
      if (!created) return false;
      if (port.direction === 'out') {
        const connected = eng.addEdge(port.nodeId, created.id, 0, port.portIndex);
        if (!connected) return false;
      } else {
        const connected = eng.addEdge(created.id, port.nodeId, port.portIndex, 0);
        if (!connected) return false;
      }
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation]);

  const stepChaosModeOnce = useCallback(() => {
    const snapshot = graphRef.current;
    const nonOutputNodes = snapshot.nodes.filter((n) => !isOutputNodeType(n.type));
    const randomNodeTypePool = Object.values(NODE_REGISTRY)
      .filter((def) => def.category !== 'output' && def.type !== 'remote')
      .map((def) => def.type);
    const choose = <T,>(list: T[]): T | null => (list.length > 0 ? list[Math.floor(Math.random() * list.length)] : null);

    try {
      const modeRoll = Math.random();
      if (modeRoll < 0.9) {
        const opRoll = Math.random();
        if (opRoll < 0.22 && nonOutputNodes.length > 0) {
          const node = choose(nonOutputNodes)!;
          const dx = (Math.random() - 0.5) * 240;
          const dy = (Math.random() - 0.5) * 180;
          applyMutation((eng) => { eng.moveNode(node.id, node.x + dx, node.y + dy); }, false);
        } else if (opRoll < 0.45) {
          const candidates = nonOutputNodes.filter((n) => {
            const def = NODE_REGISTRY[n.type];
            return !!def && Object.keys(def.params).length > 0;
          });
          const node = choose(candidates);
          if (node) {
            const def = NODE_REGISTRY[node.type];
            const keys = Object.keys(def.params);
            const key = choose(keys);
            if (key) {
              const meta = def.params[key];
              let nextValue: any = node.params[key];
              if (meta.type === 'float') {
                const min = meta.min ?? 0;
                const max = meta.max ?? 1;
                nextValue = min + Math.random() * (max - min);
              } else if (meta.type === 'int') {
                const min = Math.floor(meta.min ?? 0);
                const max = Math.floor(meta.max ?? 100);
                nextValue = min + Math.floor(Math.random() * Math.max(1, max - min + 1));
              } else if (meta.type === 'bool') {
                nextValue = Math.random() > 0.5;
              } else if (meta.type === 'select' && meta.options && meta.options.length > 0) {
                nextValue = choose(meta.options) ?? node.params[key];
              }
              applyMutation((eng) => { eng.updateParam(node.id, key, nextValue); }, false);
            }
          }
        } else if (opRoll < 0.57 && snapshot.edges.length > 0) {
          const edge = choose(snapshot.edges);
          if (edge) applyMutation((eng) => { eng.removeEdge(edge.id); }, false);
        } else if (opRoll < 0.69 && randomNodeTypePool.length > 0) {
          const type = choose(randomNodeTypePool)!;
          const x = 80 + Math.random() * 1900;
          const y = 40 + Math.random() * 1100;
          applyMutation((eng) => {
            const created = eng.addNode(type, x, y);
            return !!created;
          }, false);
        } else if (opRoll < 0.79 && nonOutputNodes.length > 6) {
          const node = choose(nonOutputNodes);
          if (node) {
            applyMutation((eng) => { eng.removeNode(node.id); }, false);
            setSelectedNodeId((prev) => (prev === node.id ? null : prev));
          }
        } else if (snapshot.nodes.length >= 2) {
          let connected = false;
          for (let attempt = 0; attempt < 24 && !connected; attempt++) {
            const fromNode = choose(nonOutputNodes);
            const toNode = choose(snapshot.nodes);
            if (!fromNode || !toNode || fromNode.id === toNode.id) continue;
            const fromDef = NODE_REGISTRY[fromNode.type];
            const toDef = NODE_REGISTRY[toNode.type];
            if (!fromDef || !toDef || fromDef.outputs.length === 0 || toDef.inputs.length === 0) continue;
            const fromPort = Math.floor(Math.random() * fromDef.outputs.length);
            const toPort = Math.floor(Math.random() * toDef.inputs.length);
            connected = !!applyMutation((eng) => {
              const edge = eng.addEdge(fromNode.id, toNode.id, toPort, fromPort);
              return !!edge;
            }, false);
          }
        }
      } else {
        if (Math.random() < 0.88) {
          const views = ['graph', 'preview', 'preview3d', 'code', 'logs', 'library', 'explorer'];
          const type = choose(views) ?? 'graph';
          addView(type, `${type.toUpperCase()} Fuzz`);
        } else {
          resetLayout();
        }
      }
      chaosStepCountRef.current += 1;
      if (chaosStepCountRef.current % 40 === 0) {
        appendAppLog({
          level: 'info',
          source: 'chaos',
          message: `fuzz steps=${chaosStepCountRef.current}`,
        });
      }
    } catch (error) {
      appendAppLog({
        level: 'error',
        source: 'chaos',
        message: error instanceof Error ? `${error.name}: ${error.message}` : String(error),
        details: error instanceof Error ? error.stack : undefined,
      });
    }
  }, [addView, applyMutation, resetLayout]);

  useEffect(() => {
    if (!chaosMode) {
      if (chaosTimerRef.current) {
        window.clearInterval(chaosTimerRef.current);
        chaosTimerRef.current = 0;
      }
      return;
    }
    appendAppLog({ level: 'warn', source: 'chaos', message: 'Chaos mode started' });
    chaosTimerRef.current = window.setInterval(() => {
      stepChaosModeOnce();
    }, 220);
    return () => {
      if (chaosTimerRef.current) {
        window.clearInterval(chaosTimerRef.current);
        chaosTimerRef.current = 0;
      }
      appendAppLog({ level: 'warn', source: 'chaos', message: 'Chaos mode stopped' });
    };
  }, [chaosMode, stepChaosModeOnce]);

  useEffect(() => {
    const api = {
      start: () => setChaosMode(true),
      stop: () => setChaosMode(false),
      toggle: () => setChaosMode((v) => !v),
      step: () => stepChaosModeOnce(),
      status: () => ({ running: chaosMode, steps: chaosStepCountRef.current }),
    };
    (window as any).ntChaos = api;
    return () => {
      if ((window as any).ntChaos === api) delete (window as any).ntChaos;
    };
  }, [chaosMode, stepChaosModeOnce]);

  const buildOperatorContext = useCallback((req?: GraphContextMenuRequest): OperatorContext => {
    const selectedNode = selectedNodeId ? graph.nodes.find((n) => n.id === selectedNodeId) : null;
    const fallback: GraphContextMenuRequest = req || contextMenu || {
      clientX: 0,
      clientY: 0,
      graphX: selectedNode ? selectedNode.x + 140 : 220,
      graphY: selectedNode ? selectedNode.y + 70 : 140,
      target: { kind: 'canvas' }
    };

    return {
      graph,
      mode: 'graph',
      selection: {
        nodeIds: selectedNodeId ? [selectedNodeId] : [],
        edgeIds: fallback.target.kind === 'edge' ? [fallback.target.edgeId] : []
      },
      hover: fallback.target,
      mouse: { x: fallback.clientX, y: fallback.clientY, graphX: fallback.graphX, graphY: fallback.graphY },
      clipboard: { node: clipboard || undefined },
      actions: {
        openNodePicker: (intent) => setNodePickerIntent(intent),
        closeContextMenu: () => setContextMenu(null),
        frameAll: () => { setGraphViewCommandType('frame_all'); setGraphViewCommandNonce((n) => n + 1); },
        resetView: () => { setGraphViewCommandType('reset'); setGraphViewCommandNonce((n) => n + 1); },
        addNodeAt: (type, graphX, graphY) => addNodeAt(type, graphX, graphY),
        removeNode: (nodeId) => onDeleteNode(nodeId),
        duplicateNode: (nodeId) => duplicateNodeById(nodeId),
        copyNode: (nodeId) => {
          const node = graph.nodes.find((n) => n.id === nodeId);
          if (!node || isOutputNodeType(node.type)) return;
          setClipboard({ type: node.type, x: node.x, y: node.y, params: { ...node.params } });
        },
        pasteNodeAt: (graphX, graphY) => {
          pasteClipboard(graphX, graphY);
          return null;
        },
        removeEdge: (edgeId) => onDeleteEdge(edgeId),
        getEdgeById: (edgeId) => graph.edges.find((e) => e.id === edgeId),
        connect: (fromId, toId, toPort, fromPort = 0) => connectNodes(fromId, toId, toPort, fromPort),
        insertNodeOnEdge: (edgeId, nodeType, graphX, graphY) => insertNodeOnEdge(edgeId, nodeType, graphX, graphY),
        addNodeFromPort: (port, nodeType, graphX, graphY) => addNodeFromPort(port, nodeType, graphX, graphY),
        undo,
        redo,
        pinPreviewToNode: (nodeId) => setPinnedPreviewNodeId(nodeId),
        toggleChaosMode: () => setChaosMode((v) => !v),
        stepChaosModeOnce: () => stepChaosModeOnce(),
      }
    };
  }, [
    addNodeAt,
    addNodeFromPort,
    clipboard,
    connectNodes,
    contextMenu,
    duplicateNodeById,
    graph,
    insertNodeOnEdge,
    onDeleteEdge,
    onDeleteNode,
    pasteClipboard,
    redo,
    selectedNodeId,
    stepChaosModeOnce,
    undo
  ]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return;
      if (e.key === 'F3') {
        e.preventDefault();
        setPaletteOpen(true);
        return;
      }
      if (paletteOpen || nodePickerIntent || contextMenu) return;

      const mod = e.ctrlKey || e.metaKey;
      const key = (e.key || '').toLowerCase();

      // Keep cut shortcut explicit (no operator yet).
      if (mod && key === 'x' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        cutSelection();
        return;
      }

      // macOS/common redo variant.
      if (mod && e.shiftKey && key === 'z' && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        redo();
        return;
      }

      const ctx = buildOperatorContext();
      const ops = operatorRegistry.getAll().filter((op) => !!op.shortcut && op.id !== 'graph.delete');
      for (const op of ops) {
        if (!shortcutMatches(op.shortcut, e)) continue;
        const ran = runOperator(op.id, ctx);
        if (ran) {
          e.preventDefault();
          e.stopPropagation();
          if (paletteOpen) setPaletteOpen(false);
          return;
        }
      }
    };
    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [buildOperatorContext, contextMenu, cutSelection, nodePickerIntent, paletteOpen, redo]);

  const openContextMenu = useCallback((req: GraphContextMenuRequest) => {
    setContextMenu(req);
  }, []);

  const closeTransientUi = useCallback(() => {
    setContextMenu(null);
    setPaletteOpen(false);
    setNodePickerIntent(null);
    setWindowMenuOpen(false);
  }, []);

  const runOp = useCallback((id: string, req?: GraphContextMenuRequest) => {
    const ctx = buildOperatorContext(req);
    runOperator(id, ctx);
    setPaletteOpen(false);
  }, [buildOperatorContext]);

  const addFrameFromMenu = useCallback((gx: number, gy: number) => {
    onAddFrameAt(gx, gy);
    setContextMenu(null);
  }, [onAddFrameAt]);

  const renameFrameFromMenu = useCallback((frameId: string) => {
    const frame = (graph.frames || []).find((entry) => entry.id === frameId);
    if (!frame) {
      setContextMenu(null);
      return;
    }
    const next = prompt('Frame label:', frame.label || 'Frame');
    if (next != null) onUpdateFrame(frameId, { label: next.trim() || 'Frame' });
    setContextMenu(null);
  }, [graph.frames, onUpdateFrame]);

  const recolorFrameFromMenu = useCallback((frameId: string) => {
    const frame = (graph.frames || []).find((entry) => entry.id === frameId);
    const current = frame?.color || FRAME_COLORS[0];
    const idx = Math.max(0, FRAME_COLORS.indexOf(current));
    const nextColor = FRAME_COLORS[(idx + 1) % FRAME_COLORS.length];
    onUpdateFrame(frameId, { color: nextColor });
    setContextMenu(null);
  }, [graph.frames, onUpdateFrame]);

  const deleteFrameFromMenu = useCallback((frameId: string) => {
    onDeleteFrame(frameId);
    setContextMenu(null);
  }, [onDeleteFrame]);

  const pickerCompatibleType = useMemo(() => {
    if (!nodePickerIntent) return undefined;
    if (nodePickerIntent.port?.type) return nodePickerIntent.port.type;
    if (nodePickerIntent.edgeId) {
      const edge = graph.edges.find((e) => e.id === nodePickerIntent.edgeId);
      if (!edge) return undefined;
      const toNode = graph.nodes.find((n) => n.id === edge.toId);
      if (!toNode) return undefined;
      return NODE_REGISTRY[toNode.type]?.inputs?.[edge.toPort]?.type;
    }
    return undefined;
  }, [graph.edges, graph.nodes, nodePickerIntent]);

  const onPickNodeType = useCallback((nodeType: string) => {
    const intent = nodePickerIntent;
    if (!intent) return;
    if (intent.origin === 'edge' && intent.edgeId) {
      insertNodeOnEdge(intent.edgeId, nodeType, intent.graphX, intent.graphY);
    } else if (intent.origin === 'port' && intent.port) {
      addNodeFromPort(
        { nodeId: intent.port.nodeId, portIndex: intent.port.portIndex, direction: intent.port.direction },
        nodeType,
        intent.graphX,
        intent.graphY
      );
    } else {
      addNodeAt(nodeType, intent.graphX, intent.graphY);
    }
    setNodePickerIntent(null);
  }, [addNodeAt, addNodeFromPort, insertNodeOnEdge, nodePickerIntent]);

  const graphSignature = useMemo(() => buildCodeSignature(graph), [graph]);
  const outputAffectingSig = useMemo(() => buildOutputAffectingSignature(graph), [graph]);
  const outputPreviewChannel = useMemo<OutputChannel>(() => {
    const mapping = resolveOutputChannels(graph);
    if (mapping.height) return 'height';
    if (mapping.baseColor) return 'baseColor';
    if (mapping.normal) return 'normal';
    if (mapping.roughness) return 'roughness';
    return 'baseColor';
  }, [graph.nodes, graph.edges]);
  const outputPreviewPort = OUTPUT_CHANNEL_PORTS[outputPreviewChannel];
  const graphPerfHash = outputAffectingSig;

  const onViewportPerfSample = useCallback((sample: ViewportPerfSample) => {
    const merged: RendererPerfSample = {
      timestamp: sample.timestamp,
      fps: sample.fps,
      compile_ms: lastCompileMsRef.current || sample.compile_ms || 0,
      render_ms: sample.render_ms,
      thumbnail_ms: lastThumbnailMsRef.current || 0,
      readback_ms: sample.readback_ms + (lastReadbackMsRef.current || 0),
      ui_commit_ms: (lastUiCommitMsRef.current || 0) + (sample.ui_commit_ms || 0),
      budget_exceeded: sample.budget_exceeded,
    };
    lastThumbnailMsRef.current = 0;
    lastReadbackMsRef.current = 0;
    lastUiCommitMsRef.current = 0;
    setRendererPerf(merged);

    const ring = perfRingRef.current;
    ring.push(merged);
    if (ring.length > 300) ring.splice(0, ring.length - 300);
    const renderSeries = ring.map((entry) => entry.render_ms).filter((value) => Number.isFinite(value) && value > 0);
    const p50 = percentile(renderSeries, 0.5);
    const p95 = percentile(renderSeries, 0.95);
    setRendererPerfP50(p50);
    setRendererPerfP95(p95);

    if (sample.budget_exceeded) {
      stableBudgetSinceRef.current = 0;
      deferThumbnails(420);
    } else if (thumbnailBlockedUntil <= 0) {
      stableBudgetSinceRef.current = stableBudgetSinceRef.current || performance.now();
    }

    if (performanceMode !== 'performance_first') return;
    const now = performance.now();
    const downThreshold = sample.frame_budget_ms + 0.5;
    const upThreshold = Math.max(8, sample.frame_budget_ms - 2);

    if (sample.p95_ms > downThreshold) {
      stableBudgetSinceRef.current = 0;
      setViewportQuality((prev) => {
        if (now - prev.last_change_at < 450) return prev;
        if (prev.scale === 1) return { scale: 0.75, reason: 'adaptive_down', last_change_at: now };
        if (prev.scale === 0.75) return { scale: 0.5, reason: 'adaptive_down', last_change_at: now };
        return prev;
      });
      return;
    }

    if (sample.p95_ms <= upThreshold) {
      stableBudgetSinceRef.current = stableBudgetSinceRef.current || now;
      if (now - stableBudgetSinceRef.current >= 3000) {
        setViewportQuality((prev) => {
          if (now - prev.last_change_at < 700) return prev;
          if (prev.scale === 0.5) return { scale: 0.75, reason: 'adaptive_up', last_change_at: now };
          if (prev.scale === 0.75) return { scale: 1, reason: 'adaptive_up', last_change_at: now };
          return prev;
        });
      }
      return;
    }

    stableBudgetSinceRef.current = 0;
  }, [deferThumbnails, performanceMode, thumbnailBlockedUntil]);

  const buildCompileBacktest = useCallback((snapshot: GraphData, backend: 'glsl' | 'wgsl'): string[] => {
    const failures: string[] = [];
    for (const node of snapshot.nodes) {
      if (isOutputNodeType(node.type)) continue;
      const def = NODE_REGISTRY[node.type];
      const outCount = Math.max(1, def?.outputs?.length ?? 1);
      for (let port = 0; port < outCount; port++) {
        try {
          new Compiler(snapshot).compile({
            backend,
            readable: !rawMode,
            nodeId: node.id,
            nodeOutputPort: port,
            outputChannel: 'baseColor',
          });
        } catch (err: any) {
          const msg = (err?.message || String(err) || 'unknown error').replace(/\s+/g, ' ').trim();
          failures.push(`${backend}: node=${node.id} type=${node.type} outPort=${port} -> ${msg}`);
          if (failures.length >= 6) return failures;
        }
      }
    }
    return failures;
  }, [rawMode]);

  const buildPreviewTemplateBacktest = useCallback((resolution: number): { failures: string[]; nodeCount: number; caseCount: number } => {
    const template = buildNodePreviewTemplateGraph(resolution);
    const failures: string[] = [];
    let caseCount = 0;
    for (const node of template.nodes) {
      const def = NODE_REGISTRY[node.type];
      const outCount = Math.max(1, def?.outputs?.length ?? 1);
      for (let port = 0; port < outCount; port++) {
        try {
          const compiled = new Compiler(template).compile({
            backend: 'glsl',
            readable: !rawMode,
            nodeId: node.id,
            nodeOutputPort: port,
            outputChannel: 'baseColor',
          });
          const canvas = renderShaderToSharedCanvas(compiled, 64);
          if (!canvas || canvas.width < 1 || canvas.height < 1) {
            throw new Error('empty preview canvas');
          }
          caseCount += 1;
        } catch (err: any) {
          const msg = (err?.message || String(err) || 'unknown error').replace(/\s+/g, ' ').trim();
          failures.push(`preview-template: node=${node.id} type=${node.type} outPort=${port} -> ${msg}`);
          if (failures.length >= 12) {
            return { failures, nodeCount: template.nodes.length, caseCount };
          }
        }
      }
    }
    return { failures, nodeCount: template.nodes.length, caseCount };
  }, [rawMode]);

  const clearMonitorRuns = useCallback(() => {
    clearMonitorRunsStore();
    setMonitorRuns([]);
  }, []);

  const runMonitorSuite = useCallback(async (mode: MonitorMode) => {
    if (monitorRunning) return;
    setMonitorRunning(true);
    const suiteStarted = performance.now();
    const snapshot = graphRef.current;
    const checks: MonitorCheckResult[] = [];
    const outputs: OutputChannel[] = ['baseColor', 'roughness', 'normal', 'height'];
    try {

    const runCheck = async (id: string, label: string, fn: () => Promise<Omit<MonitorCheckResult, 'id' | 'label' | 'durationMs'>> | Omit<MonitorCheckResult, 'id' | 'label' | 'durationMs'>) => {
      const t0 = performance.now();
      try {
        const result = await fn();
        checks.push({ id, label, durationMs: performance.now() - t0, ...result });
      } catch (error) {
        const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
        checks.push({ id, label, durationMs: performance.now() - t0, severity: 'fail', message: 'Check crashed', details });
      }
    };

    await runCheck('graph_integrity', 'Graph Integrity', () => {
      const nodeById = new Map(snapshot.nodes.map((node) => [node.id, node]));
      const invalid = snapshot.edges.filter((edge) => {
        const from = nodeById.get(edge.fromId);
        const to = nodeById.get(edge.toId);
        if (!from || !to) return true;
        const fromDef = NODE_REGISTRY[from.type];
        const toDef = NODE_REGISTRY[to.type];
        if (!fromDef || !toDef) return true;
        return edge.fromPort >= (fromDef.outputs?.length ?? 1) || edge.toPort >= toDef.inputs.length;
      });
      if (invalid.length > 0) {
        return {
          severity: 'fail',
          message: `${invalid.length} invalid edge(s)`,
          details: invalid.slice(0, 6).map((edge) => `${edge.id}: ${edge.fromId}.${edge.fromPort} -> ${edge.toId}.${edge.toPort}`).join('\n'),
        };
      }
      return { severity: 'ok', message: 'All edges are valid' };
    });

    await runCheck('compile_outputs', 'Compile Outputs', () => {
      const failures: string[] = [];
      for (const channel of outputs) {
        try {
          new Compiler(snapshot).compile({ backend: 'wgsl', readable: !rawMode, outputChannel: channel });
          new Compiler(snapshot).compile({ backend: 'glsl', readable: !rawMode, outputChannel: channel });
        } catch (error) {
          failures.push(`${channel}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      if (failures.length > 0) {
        return { severity: 'fail', message: `${failures.length} output compile failure(s)`, details: failures.join('\n') };
      }
      return { severity: 'ok', message: `Compiled ${outputs.length} output channels` };
    });

    await runCheck('node_backtest', 'Per-Node Backtest', () => {
      const wgslFailures = buildCompileBacktest(snapshot, 'wgsl');
      const glslFailures = buildCompileBacktest(snapshot, 'glsl');
      const failures = [...wgslFailures, ...glslFailures];
      if (failures.length > 0) {
        return { severity: 'fail', message: `${failures.length} node compile failure(s)`, details: failures.join('\n') };
      }
      return { severity: 'ok', message: 'Per-node compile backtest passed' };
    });

    await runCheck('preview_template', 'All-Nodes Preview Template', () => {
      const { failures, nodeCount, caseCount } = buildPreviewTemplateBacktest(snapshot.resolution ?? 512);
      if (failures.length > 0) {
        return {
          severity: 'fail',
          message: `${failures.length} preview template failure(s)`,
          details: failures.join('\n'),
        };
      }
      return {
        severity: 'ok',
        message: `Rendered ${caseCount} preview case(s) across ${nodeCount} node types`,
      };
    });

    await runCheck('preview_state', 'Preview Readiness', () => {
      if (compileError) {
        return { severity: 'fail', message: 'Preview has compile error', details: compileError };
      }
      if (!previewShader || !codeShader) {
        return { severity: 'warn', message: 'Shader is not compiled yet' };
      }
      return { severity: 'ok', message: 'Preview shader is available' };
    });

    await runCheck('performance_budget', 'Frame Budget', () => {
      if (!rendererPerf) {
        return { severity: 'warn', message: 'No live render samples yet' };
      }
      const p95 = rendererPerfP95;
      const soft = previewFrameBudgetMs + 2;
      const hard = previewFrameBudgetMs + 8;
      if (p95 > hard) {
        return { severity: 'fail', message: `p95 ${p95.toFixed(1)}ms > ${hard.toFixed(1)}ms` };
      }
      if (p95 > soft) {
        return { severity: 'warn', message: `p95 ${p95.toFixed(1)}ms above budget` };
      }
      return { severity: 'ok', message: `p95 ${p95.toFixed(1)}ms within budget` };
    });

    await runCheck('runtime_logs', 'Runtime Error Drift', () => {
      const now = Date.now();
      const horizon = now - 5 * 60 * 1000;
      const recentErrors = getAppLogs().filter((entry) => entry.level === 'error' && Date.parse(entry.ts) >= horizon);
      if (recentErrors.length >= 4) {
        return { severity: 'fail', message: `${recentErrors.length} errors in last 5m` };
      }
      if (recentErrors.length > 0) {
        return { severity: 'warn', message: `${recentErrors.length} errors in last 5m` };
      }
      return { severity: 'ok', message: 'No recent runtime errors' };
    });

    if (mode === 'stress') {
      await runCheck('stress_compile_loop', 'Stress Compile Loop', async () => {
        const t0 = performance.now();
        const loops = 16;
        for (let i = 0; i < loops; i++) {
          const channel = outputs[i % outputs.length];
          const readable = i % 2 === 0;
          new Compiler(snapshot).compile({ backend: 'wgsl', outputChannel: channel, readable });
          new Compiler(snapshot).compile({ backend: 'glsl', outputChannel: channel, readable });
          await new Promise((resolve) => window.setTimeout(resolve, 0));
        }
        const ms = performance.now() - t0;
        if (ms > 600) return { severity: 'warn', message: `Stress loop passed but slow (${ms.toFixed(1)}ms)` };
        return { severity: 'ok', message: `Stress loop passed (${ms.toFixed(1)}ms)` };
      });
    }

    const totalMs = performance.now() - suiteStarted;
    const passCount = checks.filter((check) => check.severity === 'ok').length;
    const warnCount = checks.filter((check) => check.severity === 'warn').length;
    const failCount = checks.filter((check) => check.severity === 'fail').length;
    const run: MonitorSuiteRun = {
      id: buildMonitorRunId(),
      ts: new Date().toISOString(),
      mode,
      totalMs,
      passCount,
      warnCount,
      failCount,
      checks,
      metrics: {
        fps: rendererPerf?.fps ?? 0,
        renderP50Ms: rendererPerfP50,
        renderP95Ms: rendererPerfP95,
        compileMs: compileTimeMs,
        nodeCount: snapshot.nodes.length,
        edgeCount: snapshot.edges.length,
      },
    };
    setMonitorRuns(appendMonitorRun(run));

    const level = failCount > 0 ? 'error' : warnCount > 0 ? 'warn' : 'info';
    appendAppLog({
      level,
      source: 'monitor',
      message: `suite=${mode} pass=${passCount} warn=${warnCount} fail=${failCount}`,
      details: checks.map((check) => `${check.severity.toUpperCase()} ${check.label} (${check.durationMs.toFixed(1)}ms): ${check.message}`).join('\n'),
      graph_hash: graphPerfHash,
    });
    } finally {
      setMonitorRunning(false);
    }
  }, [
    monitorRunning,
    rawMode,
    buildCompileBacktest,
    buildPreviewTemplateBacktest,
    compileError,
    previewShader,
    codeShader,
    rendererPerf,
    rendererPerfP95,
    rendererPerfP50,
    previewFrameBudgetMs,
    compileTimeMs,
    graphPerfHash,
  ]);

  const previewTarget = useMemo<PreviewTargetInfo>(() => {
    const selectedNode = selectedNodeId ? graph.nodes.find(n => n.id === selectedNodeId) : undefined;
    // Output selection should always win over pinning so users can inspect final output quickly.
    const selectedOutputChannel = selectedNode ? channelFromOutputNodeType(selectedNode.type) : null;
    if (selectedOutputChannel) {
      return { port: OUTPUT_CHANNEL_PORTS[selectedOutputChannel], label: 'Output', portLabel: selectedOutputChannel };
    }
    if (selectedNode?.type === 'output') return { port: outputPreviewPort, label: 'Output', portLabel: outputPreviewChannel };

    const effectiveId = pinnedPreviewNodeId ?? selectedNodeId;
    if (!effectiveId) return { port: outputPreviewPort, label: 'Output', portLabel: outputPreviewChannel };
    const node = graph.nodes.find(n => n.id === effectiveId);
    if (!node) return { port: outputPreviewPort, label: 'Output', portLabel: outputPreviewChannel };
    const def = NODE_REGISTRY[node.type];
    if (!def) return { port: outputPreviewPort, label: 'Output', portLabel: outputPreviewChannel };
    const nodeOutputChannel = channelFromOutputNodeType(node.type);
    if (nodeOutputChannel) {
      return { port: OUTPUT_CHANNEL_PORTS[nodeOutputChannel], label: 'Output', portLabel: nodeOutputChannel };
    }
    if (node.type === 'output') return { port: outputPreviewPort, label: 'Output', portLabel: outputPreviewChannel };
    let bestPort = 0;
    if (def.outputs.length > 1) {
      const connectedPorts = graph.edges
        .filter(e => e.fromId === effectiveId)
        .map(e => e.fromPort);
      if (connectedPorts.length > 0) bestPort = Math.max(...connectedPorts);
    }
    const portLabel = def.outputs[bestPort]?.label || `Out #${bestPort}`;
    return { nodeId: effectiveId, port: bestPort, label: def.label, portLabel };
  }, [pinnedPreviewNodeId, selectedNodeId, graph.nodes, graph.edges, outputPreviewChannel, outputPreviewPort]);

  const previewOutputChannel = useMemo<OutputChannel>(() => {
    if (previewTarget.nodeId) return 'baseColor';
    const channelFromPort = Object.entries(OUTPUT_CHANNEL_PORTS)
      .find(([, port]) => port === previewTarget.port)?.[0] as OutputChannel | undefined;
    return channelFromPort ?? outputPreviewChannel;
  }, [previewTarget.nodeId, previewTarget.port, outputPreviewChannel]);

  useEffect(() => {
    let cancelled = false;
    if (compileDebounceTimerRef.current) {
      window.clearTimeout(compileDebounceTimerRef.current);
      compileDebounceTimerRef.current = 0;
    }
    setPreviewPending(true);
    const run = () => {
      if (cancelled) return;
      try {
        const targetKey = previewTarget.nodeId
          ? `${previewTarget.nodeId}:${previewTarget.port}`
          : `output:${previewTarget.port}`;
        const compileKey = `${graphSignature}|${rawMode ? 'raw' : 'readable'}|${targetKey}|${previewOutputChannel}|${COMPILER_BUILD}`;
        const runtimeKey = `${outputAffectingSig}|${targetKey}|${previewOutputChannel}`;
        const shouldSkipPositionOnly = positionOnlyRef.current && previewRuntimeKeyRef.current === runtimeKey && !!codeShader;

        if (shouldSkipPositionOnly) {
          positionOnlyRef.current = false;
          if (!cancelled) setPreviewPending(false);
          return;
        }
        if (positionOnlyRef.current) positionOnlyRef.current = false;

        const shouldRecompile = previewProgramKeyRef.current !== compileKey || !codeShader || !previewShader;
        if (shouldRecompile) {
          const t0 = performance.now();
          const compileResult = tex.current.compile({
            backend: 'glsl',
            readable: !rawMode,
            outputChannel: previewOutputChannel,
            targetNodeId: previewTarget.nodeId,
            targetPort: previewTarget.port,
          });
          previewProgramKeyRef.current = compileKey;
          previewRuntimeKeyRef.current = runtimeKey;
          setCodeShader(compileResult.glsl);
          setPreviewShader(compileResult.wgsl);
          reportCompileIssue(null, 'preview-compile');
          const compileMs = Math.max(compileResult.compileTimeMs, performance.now() - t0);
          setCompileTimeMs(compileMs);
          lastCompileMsRef.current = compileMs;
          setRecompileCount(v => v + 1);
          if (!cancelled) setPreviewPending(false);
          return;
        }

        if (previewRuntimeKeyRef.current !== runtimeKey && codeShader) {
          const ui0 = performance.now();
          setCodeShader(applyRuntimeUniforms(codeShader, graph));
          setPreviewShader(prev => prev ? applyRuntimeUniforms(prev, graph) : prev);
          lastUiCommitMsRef.current = performance.now() - ui0;
          previewRuntimeKeyRef.current = runtimeKey;
        }
        if (!cancelled) setPreviewPending(false);
      } catch (e: any) {
        console.error('[NhanceTexture] Preview compile failed:', e);
        const targetInfo = previewTarget.nodeId
          ? `target node=${previewTarget.nodeId} outPort=${previewTarget.port}`
          : `target output=${previewOutputChannel}`;
        const backtestWgsl = buildCompileBacktest(graph, 'wgsl');
        const backtestGlsl = buildCompileBacktest(graph, 'glsl');
        const backtest = [...backtestWgsl, ...backtestGlsl];
        const detailedError = [
          e?.message || 'Compilation failed.',
          targetInfo,
          backtest.length > 0 ? `backtest:\n${backtest.join('\n')}` : 'backtest: no direct per-node compile throw (likely runtime WGSL pipeline error)'
        ].join('\n');
        if (previewTarget.nodeId) {
          try {
            const fallback = tex.current.compile({
              backend: 'glsl',
              readable: !rawMode,
              outputChannel: previewOutputChannel,
            });
            setPreviewShader(fallback.wgsl);
            setCodeShader(fallback.glsl);
            reportCompileIssue(detailedError, 'preview-compile');
            if (!cancelled) setPreviewPending(false);
            return;
          } catch {
            /* fallback also failed */
          }
        }
        reportCompileIssue(detailedError, 'preview-compile');
        if (!cancelled) setPreviewPending(false);
      }
    };

    const debounceMs = interacting ? 80 : 0;
    if (debounceMs > 0) {
      compileDebounceTimerRef.current = window.setTimeout(run, debounceMs);
    } else {
      run();
    }

    return () => {
      cancelled = true;
      if (compileDebounceTimerRef.current) {
        window.clearTimeout(compileDebounceTimerRef.current);
        compileDebounceTimerRef.current = 0;
      }
    };
  }, [
    graph,
    graphSignature,
    rawMode,
    codeShader,
    previewShader,
    previewTarget,
    previewOutputChannel,
    outputAffectingSig,
    interacting,
    buildCompileBacktest,
    reportCompileIssue,
    setPreviewPending,
  ]);

  useEffect(() => {
    if (interacting || chaosMode || previewWorkPending) return;
    if (thumbnailBlockedUntil > performance.now()) return;
    let disposed = false;
    const startSig = outputAffectingSig;
    const snapshot = graphRef.current;
    const MAX_PREVIEW_NODES = 40;
    const nodeById = new Map(snapshot.nodes.map((n) => [n.id, n]));
    const plan = tex.current.getPlan();
    const dirtyIds = plan ? getDirtyNodes(plan) : [];
    const pinnedIds = [selectedNodeId, pinnedPreviewNodeId].filter((id): id is string => !!id);
    const outputIds = snapshot.nodes.filter((n) => isOutputNodeType(n.type)).map((n) => n.id);
    const priorityIds = Array.from(new Set([...pinnedIds, ...outputIds, ...dirtyIds]));
    const restIds = snapshot.nodes
      .map((n) => n.id)
      .filter((id) => !priorityIds.includes(id));
    let orderedIds = priorityIds;
    const remaining = Math.max(0, MAX_PREVIEW_NODES - priorityIds.length);
    if (remaining > 0 && restIds.length > 0) {
      const start = thumbnailRoundRobinRef.current % restIds.length;
      const rotatedRest = restIds.slice(start).concat(restIds.slice(0, start));
      orderedIds = orderedIds.concat(rotatedRest.slice(0, remaining));
      thumbnailRoundRobinRef.current = (start + remaining) % restIds.length;
    }
    const nodesToRender = orderedIds
      .slice(0, MAX_PREVIEW_NODES)
      .map((id) => nodeById.get(id))
      .filter((node): node is NonNullable<typeof node> => !!node);

    const w = window as any;
    const scheduleIdle = (cb: (d: IdleDeadline) => void) => {
      if (typeof w.requestIdleCallback === 'function') {
        return w.requestIdleCallback(cb, { timeout: 200 });
      }
      return window.setTimeout(() => cb({ timeRemaining: () => 4, didTimeout: true } as IdleDeadline), 32);
    };
    const cancelIdle = (id: number) => {
      if (typeof w.cancelIdleCallback === 'function') w.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };

    let idx = 0;
    const timings: Record<string, number> = {};
    let idleHandle = 0;
    const compiler = new Compiler(snapshot);
    const outputThumbChannel: OutputChannel = (() => {
      const mapping = resolveOutputChannels(snapshot);
      if (mapping.height) return 'height';
      if (mapping.baseColor) return 'baseColor';
      if (mapping.normal) return 'normal';
      if (mapping.roughness) return 'roughness';
      return 'baseColor';
    })();
    const getNodePreviewPort = (nodeId: string): number => {
      const node = snapshot.nodes.find((n) => n.id === nodeId);
      if (!node) return 0;
      const def = NODE_REGISTRY[node.type];
      if (!def || def.outputs.length <= 1) return 0;

      const connectedPorts = snapshot.edges
        .filter((e) => e.fromId === nodeId)
        .map((e) => e.fromPort);
      if (connectedPorts.length > 0) return Math.max(...connectedPorts);

      // Split nodes are most useful to preview as XYZ when no output is connected yet.
      if (node.type === 'split' && def.outputs.length > 4) return 4;
      return 0;
    };

    const batchSize = performanceMode === 'performance_first'
      ? (viewportQuality.scale <= 0.75 ? 1 : 2)
      : 2;

    const step = (deadline: IdleDeadline) => {
      if (disposed) return;
      const chunk: Record<string, string> = {};
      let produced = 0;
      const thumbBatchStart = performance.now();
      while (idx < nodesToRender.length && (deadline.timeRemaining() > 2 || deadline.didTimeout) && produced < batchSize) {
        const node = nodesToRender[idx++];
        try {
          const t0 = performance.now();
          const nodeOutputChannel = channelFromOutputNodeType(node.type);
          const previewPort = getNodePreviewPort(node.id);
          const previewContext = nodeOutputChannel || node.type === 'output'
            ? `out:${node.id}:${nodeOutputChannel ?? outputThumbChannel}`
            : `node:${node.id}:p${previewPort}`;
          const compiled = nodeOutputChannel || node.type === 'output'
            ? compiler.compile({
                outputChannel: nodeOutputChannel ?? outputThumbChannel,
                readable: false,
              })
            : compiler.compile({
                nodeId: node.id,
                nodeOutputPort: previewPort,
                readable: false,
              });
          const runtimeCompiled = applyRuntimeUniforms(compiled, snapshot);
          const thumbKey = buildThumbnailKey(runtimeCompiled, NODE_THUMB_SIZE, previewContext);
          let thumb = nodePreviewImageCacheRef.current.get(thumbKey);
          if (!thumb) {
            const rb0 = performance.now();
            thumb = renderShaderThumbnail(runtimeCompiled, NODE_THUMB_SIZE);
            lastReadbackMsRef.current += performance.now() - rb0;
            nodePreviewImageCacheRef.current.set(thumbKey, thumb);
            if (nodePreviewImageCacheRef.current.size > 320) {
              const firstKey = nodePreviewImageCacheRef.current.keys().next().value as string | undefined;
              if (firstKey) nodePreviewImageCacheRef.current.delete(firstKey);
            }
          }
          if (nodePreviewKeysRef.current[node.id] !== thumbKey) {
            nodePreviewKeysRef.current[node.id] = thumbKey;
            chunk[node.id] = thumb;
          }
          timings[node.id] = performance.now() - t0;
          produced++;
        } catch (err: any) {
          const staleKey = `stale|${startSig}|${node.id}`;
          appendAppLog({
            level: 'warn',
            source: 'thumbnail',
            message: `node preview compile/render failed`,
            details: `node=${node.id} type=${node.type} error=${(err?.message || String(err) || 'unknown').replace(/\s+/g, ' ').trim()}`,
            node_context: `${node.id}:${node.type}`,
            graph_hash: graphPerfHash,
          });
          if (nodePreviewKeysRef.current[node.id] !== staleKey) {
            nodePreviewKeysRef.current[node.id] = staleKey;
            chunk[node.id] = renderErrorThumbnail(NODE_THUMB_SIZE, 'ERR');
          }
        }
      }
      lastThumbnailMsRef.current += performance.now() - thumbBatchStart;
      if (Object.keys(chunk).length > 0) {
        const ui0 = performance.now();
        setNodePreviews(prev => ({ ...prev, ...chunk }));
        lastUiCommitMsRef.current += performance.now() - ui0;
      }
      if (Object.keys(timings).length > 0) {
        const ui0 = performance.now();
        setNodeTimings((prev) => ({ ...prev, ...timings }));
        lastUiCommitMsRef.current += performance.now() - ui0;
      }
      if (idx < nodesToRender.length) {
        idleHandle = scheduleIdle(step);
      }
    };

    const startTimer = window.setTimeout(() => {
      idleHandle = scheduleIdle(step);
    }, performanceMode === 'performance_first' ? 220 : 180);

    return () => {
      disposed = true;
      window.clearTimeout(startTimer);
      if (idleHandle) cancelIdle(idleHandle);
    };
  }, [
    outputAffectingSig,
    selectedNodeId,
    pinnedPreviewNodeId,
    interacting,
    chaosMode,
    previewWorkPending,
    thumbnailBlockedUntil,
    performanceMode,
    viewportQuality.scale,
    graphPerfHash,
  ]);

  useEffect(() => {
    if (interacting || chaosMode || previewWorkPending) return;
    let disposed = false;
    const snapshot = graphRef.current;
    const size = Math.max(128, Math.min(patternSize, 1024));
    const channels: OutputChannel[] = ['baseColor', 'normal', 'roughness', 'height'];
    const compiler = new Compiler(snapshot);
    const updates: Partial<Record<OutputChannel, { key: string; canvas: HTMLCanvasElement }>> = {};
    const w = window as any;

    const scheduleIdle = (cb: (d: IdleDeadline) => void) => {
      if (typeof w.requestIdleCallback === 'function') {
        return w.requestIdleCallback(cb, { timeout: 220 });
      }
      return window.setTimeout(() => cb({ timeRemaining: () => 3, didTimeout: true } as IdleDeadline), 24);
    };
    const cancelIdle = (id: number) => {
      if (typeof w.cancelIdleCallback === 'function') w.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };

    let idx = 0;
    let idleHandle = 0;
    const step = (deadline: IdleDeadline) => {
      if (disposed) return;
      while (idx < channels.length && (deadline.timeRemaining() > 2 || deadline.didTimeout)) {
        const channel = channels[idx++];
        const outputNode = getOutputNodeForChannel(snapshot, channel);
        if (!outputNode) {
          if (outputPreviewKeysRef.current[channel] !== '') {
            updates[channel] = { key: '', canvas: document.createElement('canvas') };
          }
          continue;
        }
        try {
          const compiled = compiler.compile({ outputChannel: channel, readable: false });
          const runtimeCompiled = applyRuntimeUniforms(compiled, snapshot);
          const mapKey = buildThumbnailKey(runtimeCompiled, size, `preview3d:${channel}`);
          if (outputPreviewKeysRef.current[channel] === mapKey) {
            continue;
          }
          const existingSurface = outputPreviewSurfacesRef.current[channel];
          const canvas = renderShaderToCanvas(runtimeCompiled, size, existingSurface?.canvas);
          updates[channel] = { key: mapKey, canvas };
        } catch {
          if (outputPreviewKeysRef.current[channel] !== '') {
            updates[channel] = { key: '', canvas: document.createElement('canvas') };
          }
        }
      }

      if (idx < channels.length) {
        idleHandle = scheduleIdle(step);
        return;
      }

      setOutputPreviewSurfaces((prev) => {
        const next = { ...prev };
        let changed = false;
        for (const channel of Object.keys(updates) as OutputChannel[]) {
          const update = updates[channel];
          if (!update) continue;
          const prevEntry = prev[channel];
          const prevKey = prevEntry?.key || '';
          if (prevKey !== update.key) {
            changed = true;
            next[channel] = {
              canvas: update.canvas,
              key: update.key,
              version: (prevEntry?.version ?? 0) + 1,
            };
            outputPreviewKeysRef.current[channel] = update.key;
          }
        }
        return changed ? next : prev;
      });
    };

    const startTimer = window.setTimeout(() => {
      idleHandle = scheduleIdle(step);
    }, performanceMode === 'performance_first' ? 260 : 160);

    return () => {
      disposed = true;
      window.clearTimeout(startTimer);
      if (idleHandle) cancelIdle(idleHandle);
    };
  }, [
    outputAffectingSig,
    rawMode,
    patternSize,
    interacting,
    chaosMode,
    previewWorkPending,
    performanceMode
  ]);

  const onExport = useCallback(() => {
    const graphData = engine.current.serialize();
    const preset = getExportPreset('pbr_default');
    if (!preset) return;
    const outputMapping = resolveOutputChannels(graphData);
    const res = patternSize;
    try {
      for (const target of preset.targets) {
        if (!outputMapping[target.channel]) continue;
        const compiled = new Compiler(graphData).compile({ outputChannel: target.channel, readable: !rawMode });
        const canvas = document.createElement('canvas'); canvas.width = res; canvas.height = res;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, preserveDrawingBuffer: true });
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const uniforms: any = {};
        Object.entries(applyRuntimeUniforms(compiled, graphData).uniformBindings).forEach(([key, uniform]) => {
          uniforms[key] = { value: uniform.value };
        });
        if (uniforms.u_resolution) uniforms.u_resolution.value = [res, res];
        const material = new THREE.ShaderMaterial({ vertexShader: compiled.vertex, fragmentShader: compiled.fragment, uniforms });
        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
        renderer.render(scene, camera);
        const mime = target.format === 'webp' ? 'image/webp' : 'image/png';
        const url = canvas.toDataURL(mime);
        const link = document.createElement('a'); link.href = url;
        link.download = `texture_${target.fileSuffix}_${res}x${res}.${target.format}`; link.click();
        renderer.dispose(); material.dispose();
      }
    } catch (error) {
      console.error(error);
      appendAppLog({
        level: 'error',
        source: 'export',
        message: error instanceof Error ? `${error.name}: ${error.message}` : String(error),
        details: error instanceof Error ? error.stack : undefined,
      });
      alert('Export failed.');
    }
  }, [patternSize, rawMode, graph]);

  const onPreviewError = useCallback((msg: string) => {
    reportCompileIssue(msg ? msg : null, 'viewport');
  }, [reportCompileIssue]);

  const libraryByCategory = useMemo(() => {
    const lq = libSearch.toLowerCase();
    const grouped = new Map<string, Array<{ type: string; label: string }>>();
    Object.values(NODE_REGISTRY).forEach(nodeDef => {
      if (nodeDef.category === 'output') return;
      if (lq && !nodeDef.label.toLowerCase().includes(lq) && !nodeDef.category.includes(lq)) return;
      if (!grouped.has(nodeDef.category)) grouped.set(nodeDef.category, []);
      grouped.get(nodeDef.category)!.push({ type: nodeDef.type, label: nodeDef.label });
    });
    for (const list of grouped.values()) list.sort((a, b) => a.label.localeCompare(b.label));
    return Array.from(grouped.entries());
  }, [libSearch]);

  const toggleCat = useCallback((cat: string) => {
    setCollapsedCats(prev => { const next = new Set(prev); next.has(cat) ? next.delete(cat) : next.add(cat); return next; });
  }, []);

  const uniformRows = useMemo(() => {
    if (!codeShader) return [];
    return codeShader.uniforms.map(u => ({
      name: u.name, type: u.type, nodeId: u.nodeId, key: u.key,
      value: codeShader.uniformBindings[u.name]?.value ?? u.defaultValue
    }));
  }, [codeShader]);

  const stats = useMemo(() => {
    const source = codeShader?.source || '';
    return {
      compileTimeMs, nodeCount: graph.nodes.length, edgeCount: graph.edges.length,
      shaderLines: source ? source.split('\n').length : 0,
      shaderBytes: new TextEncoder().encode(source).length,
      hash: codeShader?.hash || 'n/a', warnings: codeShader?.warnings || [],
      backend: codeShader?.backend || 'glsl', recompileCount,
      atomsUsed: codeShader?.atomsUsed || [],
      renderP95Ms: rendererPerfP95,
      renderP50Ms: rendererPerfP50,
      thumbnailMs: rendererPerf?.thumbnail_ms ?? 0,
    };
  }, [codeShader, compileTimeMs, graph.edges.length, graph.nodes.length, recompileCount, rendererPerfP95, rendererPerfP50, rendererPerf]);

  const contextMenuItems = useMemo(() => {
    if (!contextMenu) return [];
    const ctx = buildOperatorContext(contextMenu);
    return operatorRegistry.listVisible(ctx).map((op) => ({
      op,
      enabled: op.enabled ? op.enabled(ctx) : true
    }));
  }, [buildOperatorContext, contextMenu]);

  const paletteItems = useMemo(() => {
    const ctx = buildOperatorContext();
    return operatorRegistry.getAll().map((op) => ({
      id: op.id,
      label: op.label,
      category: op.category,
      shortcut: op.shortcut,
      enabled: (op.visible ? op.visible(ctx) : true) && (op.enabled ? op.enabled(ctx) : true),
      searchText: `${op.label} ${op.category} ${op.keywords.join(' ')}`.toLowerCase()
    }));
  }, [buildOperatorContext]);

  const appCtx = useMemo<AppContextValue>(() => ({
    graph, selectedNodeId, onMove, onMoveFrame, onResizeFrame, onDeleteFrame, onAddFrameAt, onUpdateFrame, onDeleteEdge, onConnect, onUpdateParam, onAddNode, onDeleteNode,
    onSelectionChange: setSelectedNodeId,
    onCanvasClick: closeTransientUi,
    onRequestContextMenu: openContextMenu,
    nodePreviews, outputPreviewSurfaces, nodeTimings,
    graphViewCommandNonce,
    graphViewCommandType,
    previewShader, codeShader, compileError, patternSize, previewResolution,
    previewTarget,
    previewResScale,
    interacting,
    pinnedPreviewNodeId,
    previewFrameBudgetMs,
    performanceMode,
    viewportQuality,
    rendererPerf,
    rendererPerfP95,
    rendererPerfP50,
    thumbnailDeferred,
    graphPerfHash,
    onViewportPerfSample,
    onPinPreview: setPinnedPreviewNodeId,
    tile, rawMode,
    onToggleTile: () => {},
    onToggleRawMode: () => setRawMode(v => !v),
    uniformRows, stats,
    onPreviewError,
    monitorRuns,
    monitorRunning,
    runMonitorSuite,
    clearMonitorRuns,
    libraryByCategory, libSearch, setLibSearch, collapsedCats, toggleCat,
    atomViewBindings,
    onOpenAtomNode,
  }), [
    graph, selectedNodeId, onMove, onMoveFrame, onResizeFrame, onDeleteFrame, onAddFrameAt, onUpdateFrame, onDeleteEdge, onConnect, onUpdateParam, onAddNode, onDeleteNode,
    closeTransientUi, openContextMenu, nodePreviews, outputPreviewSurfaces, nodeTimings, graphViewCommandNonce, graphViewCommandType,
    previewShader, codeShader, compileError, patternSize, previewResolution,
    previewTarget, previewResScale, interacting, pinnedPreviewNodeId,
    previewFrameBudgetMs, performanceMode, viewportQuality, rendererPerf, rendererPerfP95, rendererPerfP50,
    thumbnailDeferred, graphPerfHash, onViewportPerfSample,
    tile, rawMode, uniformRows, stats, onPreviewError,
    monitorRuns, monitorRunning, runMonitorSuite, clearMonitorRuns,
    libraryByCategory, libSearch, collapsedCats, toggleCat,
    atomViewBindings,
    onOpenAtomNode,
  ]);

  const renderView = useCallback((type: string, viewId: string) => renderViewByType(type, viewId), []);

  return (
    <AppContext.Provider value={appCtx}>
      <div style={rootStyle}>
        <div style={menuBarStyle}>
          <span style={menuTitleStyle}>Nhance Texture Designer</span>
          <span className="nt-menu-item">File</span>
          <span className="nt-menu-item">Edit</span>
          <span className="nt-menu-item">Tools</span>
          <span className="nt-menu-item" style={{ position: 'relative' }}
            onClick={() => setWindowMenuOpen(v => !v)}>
            Window
            {windowMenuOpen && (
              <div style={menuDropStyle} onMouseLeave={() => setWindowMenuOpen(false)}>
                <div className="nt-drop-item" onClick={() => { resetLayout(); setWindowMenuOpen(false); }}>Reset Layout</div>
                <div style={menuDropSep} />
                <div className="nt-drop-item" onClick={() => { addView('graph', 'Graph'); setWindowMenuOpen(false); }}>New Graph</div>
                <div className="nt-drop-item" onClick={() => { addView('preview', '2D Preview'); setWindowMenuOpen(false); }}>New Preview</div>
                <div className="nt-drop-item" onClick={() => { addView('preview3d', '3D Preview'); setWindowMenuOpen(false); }}>New 3D Preview</div>
                <div className="nt-drop-item" onClick={() => { addView('code', 'Code'); setWindowMenuOpen(false); }}>New Code</div>
                <div className="nt-drop-item" onClick={() => { addView('logs', 'Logs'); setWindowMenuOpen(false); }}>New Logs</div>
                <div className="nt-drop-item" onClick={() => { addView('library', 'Library'); setWindowMenuOpen(false); }}>New Library</div>
                <div className="nt-drop-item" onClick={() => { addView('explorer', 'Explorer'); setWindowMenuOpen(false); }}>New Explorer</div>
                <div style={menuDropSep} />
                <div className="nt-drop-item" onClick={() => {
                  const name = prompt('Preset name:');
                  if (name) { savePreset(name); setWindowMenuOpen(false); }
                }}>Save Preset...</div>
                {getPresetNames().map(name => (
                  <div key={name} className="nt-drop-item" onClick={() => { loadPreset(name); setWindowMenuOpen(false); }}>
                    Load: {name}
                  </div>
                ))}
              </div>
            )}
          </span>
          <span className="nt-menu-item">Help</span>
        </div>

        <div style={toolbarStyle}>
          <button
            onClick={undo}
            className="nt-btn nt-btn-icon"
            disabled={historyRef.current.past.length === 0}
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={redo}
            className="nt-btn nt-btn-icon"
            disabled={historyRef.current.future.length === 0}
            title="Redo (Ctrl+Y)"
            aria-label="Redo"
          >
            <Redo2 size={14} />
          </button>
          <div style={dividerStyle} />
          <button onClick={onSave} className="nt-btn">SAVE</button>
          <button onClick={() => fileInputRef.current?.click()} className="nt-btn">LOAD</button>
          <input ref={fileInputRef} type="file" accept=".json" style={{ display: 'none' }} onChange={onLoad} />
          <div style={dividerStyle} />
          <span style={labelStyle}>SIZE</span>
          <select value={patternSize} onChange={e => onSetPatternSize(parseInt(e.target.value, 10))} className="nt-select">
            {[256, 512, 1024, 2048, 4096].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <div style={dividerStyle} />
          <button onClick={onExport} className="nt-btn">EXPORT</button>
          <div style={dividerStyle} />
          <button
            onClick={() => setChaosMode((v) => !v)}
            className="nt-btn"
            style={chaosMode ? { borderColor: '#9b2c2c', color: '#ffd3d3' } : undefined}
            title="Toggle runtime fuzz mode"
          >
            {chaosMode ? 'FUZZ ON' : 'FUZZ OFF'}
          </button>
          <button onClick={stepChaosModeOnce} className="nt-btn" title="Run one fuzz step">FUZZ STEP</button>
        </div>

        <Workspace renderView={renderView} />

        {contextMenu && (
          contextMenu.target.kind === 'canvas' ? (
            <OperatorPieMenu
              x={contextMenu.clientX}
              y={contextMenu.clientY}
              graphX={contextMenu.graphX}
              graphY={contextMenu.graphY}
              onAddNode={(type, gx, gy) => { addNodeAt(type, gx, gy); setContextMenu(null); }}
              onAddFrame={addFrameFromMenu}
              onClose={() => setContextMenu(null)}
            />
          ) : contextMenu.target.kind === 'frame' ? (
            <div
              style={{ position: 'fixed', inset: 0, zIndex: 1200 }}
              onMouseDown={() => setContextMenu(null)}
            >
              <div
                style={{
                  position: 'fixed',
                  left: contextMenu.clientX,
                  top: contextMenu.clientY,
                  width: 200,
                  background: '#1b1d22f6',
                  border: '1px solid #343a46',
                  borderRadius: 8,
                  boxShadow: '0 14px 38px #000000aa',
                  padding: 6,
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onContextMenu={(e) => e.preventDefault()}
              >
                <button
                  className="nt-btn-sm"
                  style={{ width: '100%', marginBottom: 4, textAlign: 'left' }}
                  onClick={() => { if (contextMenu.target.kind === 'frame') renameFrameFromMenu(contextMenu.target.frameId); }}
                >
                  Rename Frame
                </button>
                <button
                  className="nt-btn-sm"
                  style={{ width: '100%', marginBottom: 4, textAlign: 'left' }}
                  onClick={() => { if (contextMenu.target.kind === 'frame') recolorFrameFromMenu(contextMenu.target.frameId); }}
                >
                  Cycle Color
                </button>
                <button
                  className="nt-btn-sm"
                  style={{ width: '100%', textAlign: 'left', borderColor: '#6f3737', color: '#ffb3b3' }}
                  onClick={() => { if (contextMenu.target.kind === 'frame') deleteFrameFromMenu(contextMenu.target.frameId); }}
                >
                  Delete Frame
                </button>
              </div>
            </div>
          ) : (
            <div onMouseDown={() => setContextMenu(null)}>
              <OperatorContextMenu
                x={contextMenu.clientX}
                y={contextMenu.clientY}
                items={contextMenuItems}
                onRun={(id) => runOp(id, contextMenu)}
                onClose={() => setContextMenu(null)}
              />
            </div>
          )
        )}

        <CommandPalette
          open={paletteOpen}
          items={paletteItems}
          onRun={(id) => runOp(id)}
          onClose={() => setPaletteOpen(false)}
        />

        <NodePickerModal
          open={!!nodePickerIntent}
          compatibleType={pickerCompatibleType}
          onSelect={onPickNodeType}
          onClose={() => setNodePickerIntent(null)}
        />

      </div>
    </AppContext.Provider>
  );
}

const _thumbCtx: {
  renderer?: THREE.WebGLRenderer;
  scene?: THREE.Scene;
  camera?: THREE.OrthographicCamera;
  mesh?: THREE.Mesh;
  geo?: THREE.PlaneGeometry;
  material?: THREE.ShaderMaterial;
  shaderKey?: string;
  lastSize?: number;
} = {};

function uniformValueKey(value: any): string {
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string') return String(value);
  if (Array.isArray(value)) return `[${value.map((v) => uniformValueKey(v)).join(',')}]`;
  if (value == null) return 'null';
  return JSON.stringify(value);
}

function buildThumbnailKey(compiled: CompiledShader, size: number, context = ''): string {
  const entries = Object.entries(compiled.uniformBindings)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, binding]) => `${name}:${uniformValueKey(binding.value)}`);
  return `${size}|${context}|${compiled.hash}|${compiled.vertex.length}|${compiled.fragment.length}|${entries.join('|')}`;
}

function renderShaderToSharedCanvas(compiled: CompiledShader, size: number): HTMLCanvasElement {
  if (!_thumbCtx.renderer) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    _thumbCtx.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, preserveDrawingBuffer: true, antialias: false });
    _thumbCtx.renderer.setPixelRatio(1);
    _thumbCtx.renderer.setSize(size, size, false);
    _thumbCtx.renderer.setClearColor(0x000000, 1);
    _thumbCtx.scene = new THREE.Scene();
    _thumbCtx.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    _thumbCtx.geo = new THREE.PlaneGeometry(2, 2);
    const placeholder = new THREE.ShaderMaterial({ uniforms: {} });
    _thumbCtx.mesh = new THREE.Mesh(_thumbCtx.geo, placeholder);
    _thumbCtx.material = placeholder;
    _thumbCtx.shaderKey = '';
    _thumbCtx.scene.add(_thumbCtx.mesh);
    _thumbCtx.lastSize = size;
  }

  if (_thumbCtx.lastSize !== size) {
    _thumbCtx.renderer.setSize(size, size, false);
    _thumbCtx.renderer.domElement.width = size;
    _thumbCtx.renderer.domElement.height = size;
    _thumbCtx.lastSize = size;
  }

  const uniforms: any = {};
  Object.entries(compiled.uniformBindings).forEach(([key, binding]) => {
    uniforms[key] = { value: binding.value };
  });
  uniforms.u_time = { value: 0 };
  uniforms.u_resolution = { value: [size, size] };
  uniforms.u_preview_offset = { value: [0, 0] };
  uniforms.u_preview_zoom = { value: 1 };
  uniforms.u_preview_tile = { value: 0 };

  const shaderKey = `${compiled.hash}|${compiled.vertex.length}|${compiled.fragment.length}`;
  if (!_thumbCtx.material || _thumbCtx.shaderKey !== shaderKey) {
    const material = new THREE.ShaderMaterial({
      vertexShader: compiled.vertex,
      fragmentShader: compiled.fragment,
      uniforms
    });
    if (_thumbCtx.material && _thumbCtx.material !== material) _thumbCtx.material.dispose();
    _thumbCtx.material = material;
    _thumbCtx.shaderKey = shaderKey;
    _thumbCtx.mesh!.material = material;
  } else {
    const material = _thumbCtx.material;
    Object.entries(uniforms).forEach(([name, value]) => {
      if (material.uniforms[name]) material.uniforms[name].value = (value as any).value;
      else material.uniforms[name] = value as any;
    });
    material.needsUpdate = false;
  }

  _thumbCtx.renderer.render(_thumbCtx.scene!, _thumbCtx.camera!);
  return _thumbCtx.renderer.domElement;
}

function renderShaderToCanvas(compiled: CompiledShader, size: number, targetCanvas?: HTMLCanvasElement): HTMLCanvasElement {
  const sharedCanvas = renderShaderToSharedCanvas(compiled, size);
  const canvas = targetCanvas ?? document.createElement('canvas');
  if (canvas.width !== size || canvas.height !== size) {
    canvas.width = size;
    canvas.height = size;
  }
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(sharedCanvas, 0, 0, size, size);
  }
  return canvas;
}

function renderShaderThumbnail(compiled: CompiledShader, size: number): string {
  const canvas = renderShaderToSharedCanvas(compiled, size);
  return canvas.toDataURL('image/png');
}

function renderErrorThumbnail(size: number, label = 'ERR'): string {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(32, size);
  canvas.height = Math.max(32, size);
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  ctx.fillStyle = '#14090a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#7f1d1d';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  ctx.fillStyle = '#f87171';
  ctx.font = `bold ${Math.max(10, Math.floor(canvas.width * 0.14))}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, canvas.width * 0.5, canvas.height * 0.5);
  return canvas.toDataURL('image/png');
}

const rootStyle: React.CSSProperties = {
  width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
  background: 'var(--nt-bg-0)', color: 'var(--nt-text-1)', overflow: 'hidden',
  fontFamily: "'Segoe UI','IBM Plex Mono',sans-serif"
};

const menuBarStyle: React.CSSProperties = {
  height: 28, display: 'flex', alignItems: 'center', gap: 14,
  background: 'var(--nt-bg-2)', borderBottom: '1px solid var(--nt-border-1)',
  padding: '0 10px', flexShrink: 0
};

const menuTitleStyle: React.CSSProperties = {
  fontSize: 11, color: 'var(--nt-text-0)', marginRight: 12, fontWeight: 600
};

const toolbarStyle: React.CSSProperties = {
  height: 36, display: 'flex', alignItems: 'center', gap: 8,
  background: 'var(--nt-bg-1)', borderBottom: '1px solid var(--nt-border-1)',
  padding: '0 10px', flexShrink: 0
};

const labelStyle: React.CSSProperties = { fontSize: 10, color: 'var(--nt-text-2)', letterSpacing: 0.6 };
const dividerStyle: React.CSSProperties = { width: 1, height: 16, background: 'var(--nt-border-1)', margin: '0 3px' };

const menuDropStyle: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0, marginTop: 4,
  background: 'var(--nt-bg-1)', border: '1px solid var(--nt-border-1)', borderRadius: 4,
  boxShadow: '0 8px 24px #000000aa', padding: '4px 0', minWidth: 180, zIndex: 200,
};
const menuDropSep: React.CSSProperties = {
  height: 1, background: 'var(--nt-border-1)', margin: '4px 8px',
};
