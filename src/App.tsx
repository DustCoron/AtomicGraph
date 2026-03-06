import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Crosshair, Download, FolderOpen, Hash, Maximize2, Redo2, RotateCcw, Save, Undo2, Wand2 } from 'lucide-react';
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
    { id: 'out_base', type: 'output_baseColor', x: 1664, y: 104, params: {} },
    { id: 'out_rough', type: 'output_roughness', x: 1664, y: 304, params: {} },
    { id: 'out_normal', type: 'output_normal', x: 1664, y: 504, params: {} },
    { id: 'out_metal', type: 'output_metallic', x: 1664, y: 704, params: {} },
    { id: 'out_height', type: 'output_height', x: 1664, y: 904, params: {} },

    { id: 'base_color', type: 'uniform_color', x: 80, y: 90, params: { r: 0.16, g: 0.26, b: 0.36 } },
    { id: 'spots_main', type: 'bnw_spots2_v2', x: 80, y: 380, params: {
      scale: 16, tileOffsetX: 0.0, tileOffsetY: 0.0, seed: 4242,
      nonSquareExpansion: true, grainAmount: 0.2, grainThreshold: 0.88, contrast: 1.1
    } },
    { id: 'transform_spots', type: 'transform_2d', x: 384, y: 380, params: { offsetX: 0.02, offsetY: -0.01, rotation: 14.0, scale: 1.08, tile: true } },
    { id: 'safe_spots', type: 'safe_transform', x: 688, y: 380, params: { offsetX: 0.0, offsetY: 0.0, scale: 1.0, tile: false } },
    { id: 'histogram_height', type: 'histogram_range', x: 992, y: 380, params: { inMin: 0.08, inMax: 0.92, outMin: 0.0, outMax: 1.0 } },
    { id: 'levels_main', type: 'levels', x: 1296, y: 380, params: { inMin: 0.03, inMax: 0.97, gamma: 0.9 } },
    { id: 'highpass_rough', type: 'highpass_grayscale', x: 1296, y: 612, params: { radius: 1.6, intensity: 1.25 } },
    { id: 'normal_from_height', type: 'height_to_normal', x: 1296, y: 844, params: { strength: 2.0, radius: 1.0, flipY: false } },
    { id: 'normal_finalize', type: 'normal_normalize', x: 1504, y: 844, params: { flipY: false } },
  ],
  edges: [
    { id: 'e1', fromId: 'spots_main', fromPort: 0, toId: 'transform_spots', toPort: 0 },
    { id: 'e2', fromId: 'transform_spots', fromPort: 0, toId: 'safe_spots', toPort: 0 },
    { id: 'e3', fromId: 'safe_spots', fromPort: 0, toId: 'histogram_height', toPort: 0 },
    { id: 'e4', fromId: 'histogram_height', fromPort: 0, toId: 'levels_main', toPort: 0 },
    { id: 'e5', fromId: 'levels_main', fromPort: 0, toId: 'highpass_rough', toPort: 0 },
    { id: 'e6', fromId: 'levels_main', fromPort: 0, toId: 'normal_from_height', toPort: 0 },
    { id: 'e7', fromId: 'normal_from_height', fromPort: 0, toId: 'normal_finalize', toPort: 0 },
    { id: 'e8', fromId: 'normal_finalize', fromPort: 0, toId: 'out_normal', toPort: 0 },
    { id: 'e9', fromId: 'levels_main', fromPort: 0, toId: 'out_height', toPort: 0 },
    { id: 'e10', fromId: 'highpass_rough', fromPort: 0, toId: 'out_rough', toPort: 0 },
    { id: 'e11', fromId: 'levels_main', fromPort: 0, toId: 'out_metal', toPort: 0 },
    { id: 'e12', fromId: 'base_color', fromPort: 0, toId: 'out_base', toPort: 0 }
  ],
  frames: [
    { id: 'fr_outputs', x: 1608, y: 52, width: 344, height: 972, label: 'Outputs', color: '#4d78bc' }
  ]
};

const MAX_HISTORY = 100;
const NODE_THUMB_SIZE = 96;
const DEFAULT_GRID_SNAP = 32;
const AUTOSAVE_KEY = 'atomicgraph.autosave.v1';
const ENABLE_DEBUG_FUZZ_UI = false;
const FRAME_COLORS = ['#4d78bc', '#2f9e7f', '#a97b2c', '#b1597a', '#6b66c7'];
const snapToGrid = (value: number, gridSize: number): number => Math.round(value / gridSize) * gridSize;
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
interface NodeParamClipboard { sourceType: string; params: Record<string, any>; }
type PreviewCompileWorkerRequest =
  | { type: 'set_graph'; signature: string; graph: GraphData }
  | {
      type: 'compile_job';
      signature: string;
      requestKey: string;
      mode: 'node' | 'output';
      nodeId: string;
      nodeOutputPort: number;
      outputChannel: OutputChannel;
    };
type PreviewCompileWorkerResponse =
  | { type: 'ready' }
  | { type: 'compiled'; signature: string; requestKey: string; compiled: CompiledShader }
  | { type: 'compile_error'; signature: string; requestKey: string; error: string }
  | { type: 'fatal'; error: string };

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

function buildAutoLayoutDemoGraph(): GraphData {
  return {
    schemaVersion: SCHEMA_VERSION,
    resolution: 512,
    nodes: [
      { id: 'n_base', type: 'uniform_color', x: 120, y: 120, params: { r: 0.22, g: 0.30, b: 0.38 } },
      { id: 'n_noise_a', type: 'perlin', x: 180, y: 180, params: { scale: 5.2, seed: 42, tileOffsetX: 0, tileOffsetY: 0, nonSquare: true } },
      { id: 'n_noise_b', type: 'gaussian_noise', x: 220, y: 150, params: { scale: 10, mean: 0.5, stdDev: 0.17, seed: 91, tileOffsetX: 0, tileOffsetY: 0, nonSquare: true } },
      { id: 'n_transform_a', type: 'transform_2d', x: 160, y: 230, params: { offsetX: 0.01, offsetY: 0.02, rotation: 8.0, scale: 1.05, tile: true } },
      { id: 'n_warp_a', type: 'warp', x: 210, y: 250, params: { strength: 0.26 } },
      { id: 'n_warp_b', type: 'warp', x: 250, y: 200, params: { strength: 0.18 } },
      { id: 'n_uv', type: 'uv', x: 200, y: 300, params: {} },
      { id: 'n_vec_warp', type: 'vector_warp', x: 280, y: 270, params: { intensity: 0.18, centered: true, tile: true } },
      { id: 'n_edge', type: 'edge_detect', x: 290, y: 190, params: { radius: 1.2, strength: 1.4 } },
      { id: 'n_blend_h', type: 'blend', x: 320, y: 220, params: { mode: 'multiply', opacity: 0.72 } },
      { id: 'n_non_uni', type: 'non_uniform_blur', x: 300, y: 260, params: { radius: 2.0, samples: 4 } },
      { id: 'n_hist', type: 'histogram_range', x: 330, y: 150, params: { inMin: 0.1, inMax: 0.9, outMin: 0.0, outMax: 1.0 } },
      { id: 'n_levels_h', type: 'levels', x: 300, y: 120, params: { inMin: 0.04, inMax: 0.97, gamma: 0.9 } },
      { id: 'n_remap_h', type: 'remap', x: 360, y: 170, params: { inLo: 0.08, inHi: 0.9, outLo: 0, outHi: 1 } },
      { id: 'n_norm', type: 'height_to_normal', x: 390, y: 210, params: { strength: 1.6, radius: 1.0, flipY: false } },
      { id: 'n_norm_fix', type: 'normal_normalize', x: 420, y: 240, params: { flipY: false } },
      { id: 'out_base', type: 'output_baseColor', x: 430, y: 100, params: {} },
      { id: 'out_rough', type: 'output_roughness', x: 450, y: 180, params: {} },
      { id: 'out_normal', type: 'output_normal', x: 470, y: 260, params: {} },
      { id: 'out_metal', type: 'output_metallic', x: 500, y: 140, params: {} },
      { id: 'out_height', type: 'output_height', x: 520, y: 220, params: {} },
    ],
    edges: [
      { id: 'd1', fromId: 'n_noise_a', fromPort: 0, toId: 'n_transform_a', toPort: 0 },
      { id: 'd1b', fromId: 'n_transform_a', fromPort: 0, toId: 'n_warp_a', toPort: 0 },
      { id: 'd2', fromId: 'n_noise_b', fromPort: 0, toId: 'n_warp_b', toPort: 0 },
      { id: 'd2b', fromId: 'n_warp_b', fromPort: 0, toId: 'n_vec_warp', toPort: 0 },
      { id: 'd2c', fromId: 'n_uv', fromPort: 0, toId: 'n_vec_warp', toPort: 1 },
      { id: 'd3', fromId: 'n_warp_a', fromPort: 0, toId: 'n_blend_h', toPort: 0 },
      { id: 'd4', fromId: 'n_warp_b', fromPort: 0, toId: 'n_blend_h', toPort: 1 },
      { id: 'd5', fromId: 'n_blend_h', fromPort: 0, toId: 'n_non_uni', toPort: 0 },
      { id: 'd5b', fromId: 'n_noise_a', fromPort: 0, toId: 'n_non_uni', toPort: 1 },
      { id: 'd5c', fromId: 'n_non_uni', fromPort: 0, toId: 'n_hist', toPort: 0 },
      { id: 'd6', fromId: 'n_hist', fromPort: 0, toId: 'n_levels_h', toPort: 0 },
      { id: 'd6b', fromId: 'n_levels_h', fromPort: 0, toId: 'n_remap_h', toPort: 0 },
      { id: 'd7', fromId: 'n_remap_h', fromPort: 0, toId: 'n_norm', toPort: 0 },
      { id: 'd8', fromId: 'n_remap_h', fromPort: 0, toId: 'out_height', toPort: 0 },
      { id: 'd9', fromId: 'n_norm', fromPort: 0, toId: 'n_norm_fix', toPort: 0 },
      { id: 'd9b', fromId: 'n_norm_fix', fromPort: 0, toId: 'out_normal', toPort: 0 },
      { id: 'd10', fromId: 'n_edge', fromPort: 0, toId: 'out_rough', toPort: 0 },
      { id: 'd11', fromId: 'n_vec_warp', fromPort: 0, toId: 'n_edge', toPort: 0 },
      { id: 'd12', fromId: 'n_base', fromPort: 0, toId: 'out_base', toPort: 0 },
      { id: 'd13', fromId: 'n_levels_h', fromPort: 0, toId: 'out_metal', toPort: 0 },
    ],
    frames: [
      { id: 'demo_out', x: 420, y: 70, width: 340, height: 260, label: 'Outputs', color: '#4d78bc' },
    ],
  };
}

function resolveThumbnailOutputChannel(snapshot: GraphData): OutputChannel {
  const mapping = resolveOutputChannels(snapshot);
  if (mapping.height) return 'height';
  if (mapping.baseColor) return 'baseColor';
  if (mapping.normal) return 'normal';
  if (mapping.roughness) return 'roughness';
  if (mapping.metallic) return 'metallic';
  return 'baseColor';
}

function buildPreviewRequestMeta(node: NodeData, previewPort: number, fallbackOutputChannel: OutputChannel): {
  requestKey: string;
  mode: 'node' | 'output';
  outputChannel: OutputChannel;
} {
  const nodeOutputChannel = channelFromOutputNodeType(node.type);
  if (nodeOutputChannel || node.type === 'output') {
    return {
      requestKey: `out:${node.id}:${nodeOutputChannel ?? fallbackOutputChannel}`,
      mode: 'output',
      outputChannel: nodeOutputChannel ?? fallbackOutputChannel,
    };
  }
  return {
    requestKey: `node:${node.id}:p${previewPort}`,
    mode: 'node',
    outputChannel: fallbackOutputChannel,
  };
}

export default function App() {
  const engine = useRef<GraphEngine | null>(null);
  const tex = useRef<TextureEngine | null>(null);
  if (!engine.current) engine.current = new GraphEngine(INIT_DATA);
  if (!tex.current) tex.current = new TextureEngine(INIT_DATA);
  const [graph, setGraph] = useState<GraphData>(engine.current.serialize());
  const graphRef = useRef<GraphData>(graph);
  
  const tile = true;
  const [rawMode, setRawMode] = useState(false);
  const [patternSize, setPatternSize] = useState<number>(engine.current.resolution || 512);
  const previewResolution = useMemo(() => Math.min(patternSize, 1024), [patternSize]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [selectedNodeIds, setSelectedNodeIds] = useState<string[]>([]);
  const [visibleNodeIds, setVisibleNodeIds] = useState<string[]>([]);
  const [clipboard, setClipboard] = useState<NodeClipboard | null>(null);
  const paramClipboardRef = useRef<NodeParamClipboard | null>(null);
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
  const [nodePreviewWarmupDone, setNodePreviewWarmupDone] = useState(false);
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
  const [previewCompileWorkerReady, setPreviewCompileWorkerReady] = useState(false);
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
  const previewCompileWorkerRef = useRef<Worker | null>(null);
  const previewCompileWorkerReadyRef = useRef(false);
  const previewCompileWorkerDisabledRef = useRef(false);
  const previewCompiledShadersRef = useRef<Map<string, CompiledShader>>(new Map());

  const { root, floating, setActiveTab, resetLayout, addView, savePreset, loadPreset, getPresetNames } = useWorkspace();
  const { hasGraphTab, has2DPreviewTab, has3DPreviewTab } = useMemo(() => {
    const panels = [...collectPanels(root), ...floating.map((fp) => fp.panel)];
    let nextHasGraphTab = false;
    let nextHas2DPreviewTab = false;
    let nextHas3DPreviewTab = false;

    for (const panel of panels) {
      for (const tab of panel.tabs) {
        if (tab.type === 'graph') nextHasGraphTab = true;
        if (tab.type === 'preview') nextHas2DPreviewTab = true;
        if (tab.type === 'preview3d') nextHas3DPreviewTab = true;
        if (nextHasGraphTab && nextHas2DPreviewTab && nextHas3DPreviewTab) break;
      }
      if (nextHasGraphTab && nextHas2DPreviewTab && nextHas3DPreviewTab) break;
    }

    return {
      hasGraphTab: nextHasGraphTab,
      has2DPreviewTab: nextHas2DPreviewTab,
      has3DPreviewTab: nextHas3DPreviewTab,
    };
  }, [floating, root]);
  const shouldRenderNodePreviews = hasGraphTab;
  const shouldRenderOutputSurfaces = has3DPreviewTab;
  const preview3dReady = useMemo(() => {
    if (!has3DPreviewTab) return false;
    if (previewWorkPending || !!compileError) return false;
    return nodePreviewWarmupDone || !shouldRenderNodePreviews;
  }, [has3DPreviewTab, previewWorkPending, compileError, nodePreviewWarmupDone, shouldRenderNodePreviews]);
  const [windowMenuOpen, setWindowMenuOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<GraphContextMenuRequest | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [nodePickerIntent, setNodePickerIntent] = useState<AddNodeIntent | null>(null);
  const [graphViewCommandNonce, setGraphViewCommandNonce] = useState(0);
  const [graphViewCommandType, setGraphViewCommandType] = useState<'reset' | 'frame_all' | null>(null);
  const [snapEnabled, setSnapEnabled] = useState<boolean>(() => {
    try {
      const raw = window.localStorage.getItem('atomicgraph.snap.enabled');
      return raw == null ? true : raw === '1';
    } catch {
      return true;
    }
  });
  const [snapGridSize, setSnapGridSize] = useState<number>(DEFAULT_GRID_SNAP);
  const [hasAutosave, setHasAutosave] = useState<boolean>(() => {
    try {
      return !!window.localStorage.getItem(AUTOSAVE_KEY);
    } catch {
      return false;
    }
  });
  const [chaosMode, setChaosMode] = useState(false);
  const chaosTimerRef = useRef(0);
  const chaosStepCountRef = useRef(0);
  const [monitorRuns, setMonitorRuns] = useState<MonitorSuiteRun[]>(() => getMonitorRuns());
  const [monitorRunning, setMonitorRunning] = useState(false);
  const [atomViewBindings, setAtomViewBindings] = useState<Record<string, string>>({});
  const [autoLayoutRunning, setAutoLayoutRunning] = useState(false);
  const [autoLayoutNotice, setAutoLayoutNotice] = useState<{ tone: 'ok' | 'warn'; text: string } | null>(null);
  const autoLayoutNoticeTimerRef = useRef(0);
  const autoLayoutModuleRef = useRef<Promise<typeof import('./core/layout/elkLayout')> | null>(null);

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

  const showAutoLayoutNotice = useCallback((text: string, tone: 'ok' | 'warn' = 'ok') => {
    setAutoLayoutNotice({ text, tone });
    if (autoLayoutNoticeTimerRef.current) window.clearTimeout(autoLayoutNoticeTimerRef.current);
    autoLayoutNoticeTimerRef.current = window.setTimeout(() => {
      setAutoLayoutNotice(null);
      autoLayoutNoticeTimerRef.current = 0;
    }, 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (autoLayoutNoticeTimerRef.current) window.clearTimeout(autoLayoutNoticeTimerRef.current);
    };
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
    if (previewCompileWorkerRef.current) {
      previewCompileWorkerRef.current.terminate();
      previewCompileWorkerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof Worker === 'undefined') {
      previewCompileWorkerDisabledRef.current = true;
      return;
    }
    try {
      const worker = new Worker(new URL('./core/workers/previewCompile.worker.ts', import.meta.url), { type: 'module' });
      worker.onmessage = (ev: MessageEvent<PreviewCompileWorkerResponse>) => {
        const msg = ev.data;
        if (!msg || typeof msg !== 'object') return;
        if (msg.type === 'ready') {
          previewCompileWorkerReadyRef.current = true;
          setPreviewCompileWorkerReady(true);
          return;
        }
        if (msg.type === 'compiled') {
          if (msg.signature !== outputSigRef.current) return;
          previewCompiledShadersRef.current.set(msg.requestKey, msg.compiled);
          return;
        }
        if (msg.type === 'compile_error') {
          if (msg.signature !== outputSigRef.current) return;
          appendAppLog({
            level: 'warn',
            source: 'preview-worker',
            message: 'Worker preview compile failed',
            details: `request=${msg.requestKey} error=${msg.error}`,
            graph_hash: msg.signature,
          });
          return;
        }
        if (msg.type === 'fatal') {
          previewCompileWorkerDisabledRef.current = true;
          previewCompileWorkerReadyRef.current = false;
          setPreviewCompileWorkerReady(false);
          previewCompiledShadersRef.current.clear();
          appendAppLog({
            level: 'warn',
            source: 'preview-worker',
            message: 'Preview compile worker disabled after fatal error',
            details: msg.error,
          });
        }
      };
      worker.onerror = (err) => {
        previewCompileWorkerDisabledRef.current = true;
        previewCompileWorkerReadyRef.current = false;
        setPreviewCompileWorkerReady(false);
        previewCompiledShadersRef.current.clear();
        appendAppLog({
          level: 'warn',
          source: 'preview-worker',
          message: 'Preview compile worker crashed',
          details: err.message || String(err),
        });
      };
      previewCompileWorkerRef.current = worker;
      return () => {
        worker.terminate();
        if (previewCompileWorkerRef.current === worker) previewCompileWorkerRef.current = null;
      };
    } catch (err: any) {
      previewCompileWorkerDisabledRef.current = true;
      previewCompileWorkerReadyRef.current = false;
      setPreviewCompileWorkerReady(false);
      appendAppLog({
        level: 'warn',
        source: 'preview-worker',
        message: 'Preview compile worker unavailable',
        details: err?.message || String(err),
      });
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('atomicgraph.snap.enabled', snapEnabled ? '1' : '0');
      window.localStorage.setItem('atomicgraph.snap.size', String(snapGridSize));
    } catch {
      /* ignore localStorage errors */
    }
  }, [snapEnabled, snapGridSize]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const payload = {
          savedAt: Date.now(),
          patternSize,
          graph: graphRef.current,
        };
        window.localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(payload));
        setHasAutosave(true);
      } catch {
        /* ignore localStorage errors */
      }
    }, 700);
    return () => window.clearTimeout(timer);
  }, [graph, patternSize]);

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

  const frameAllGraphView = useCallback(() => {
    setGraphViewCommandType('frame_all');
    setGraphViewCommandNonce((n) => n + 1);
  }, []);

  const resetGraphView = useCallback(() => {
    setGraphViewCommandType('reset');
    setGraphViewCommandNonce((n) => n + 1);
  }, []);

  const restoreAutosave = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(AUTOSAVE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { graph?: GraphData; patternSize?: number; savedAt?: number };
      if (!parsed || !parsed.graph || !Array.isArray(parsed.graph.nodes) || !Array.isArray(parsed.graph.edges)) return;
      applyEngineGraph(parsed.graph);
      const nextSize = parsed.patternSize ?? parsed.graph.resolution ?? 512;
      setPatternSize(nextSize);
      historyRef.current = { past: [], future: [] };
      setSelectedNodeId(null);
      appendAppLog({
        level: 'info',
        source: 'project-load',
        message: 'Autosave restored',
        details: parsed.savedAt ? new Date(parsed.savedAt).toLocaleString() : undefined,
      });
    } catch (error) {
      appendAppLog({
        level: 'warn',
        source: 'project-load',
        message: 'Failed to restore autosave',
        details: error instanceof Error ? error.message : String(error),
      });
    }
  }, [applyEngineGraph]);

  const onSelectionSetChange = useCallback((ids: string[]) => {
    setSelectedNodeIds(ids);
  }, []);

  const onVisibleNodeIdsChange = useCallback((ids: string[]) => {
    setVisibleNodeIds((prev) => (
      prev.length === ids.length && prev.every((id, idx) => id === ids[idx])
        ? prev
        : ids
    ));
  }, []);

  useEffect(() => {
    if (!selectedNodeId) {
      setSelectedNodeIds([]);
      return;
    }
    setSelectedNodeIds((prev) => (
      prev.length > 0 && prev.includes(selectedNodeId) ? prev : [selectedNodeId]
    ));
  }, [selectedNodeId]);

  const loadAutoLayoutDemo = useCallback(() => {
    const demo = buildAutoLayoutDemoGraph();
    applyEngineGraph(demo);
    setPatternSize(demo.resolution || 512);
    setSelectedNodeId(null);
    setSelectedNodeIds([]);
    historyRef.current = { past: [], future: [] };
    showAutoLayoutNotice('Demo DAG loaded. Run Auto Layout.', 'ok');
    appendAppLog({ level: 'info', source: 'layout', message: 'Auto-layout demo graph loaded' });
  }, [applyEngineGraph, showAutoLayoutNotice]);

  const getAutoLayout = useCallback(async () => {
    if (!autoLayoutModuleRef.current) {
      autoLayoutModuleRef.current = import('./core/layout/elkLayout');
    }
    const mod = await autoLayoutModuleRef.current;
    return mod.autoLayout;
  }, []);

  const markInteracting = useCallback(() => {
    setInteracting(true);
    if (interactTimerRef.current) window.clearTimeout(interactTimerRef.current);
    interactTimerRef.current = window.setTimeout(() => setInteracting(false), INTERACT_DEBOUNCE);
  }, []);

  const onCanvasInteractionStart = useCallback(() => {
    markInteracting();
  }, [markInteracting]);

  const onCanvasInteractionEnd = useCallback(() => {
    markInteracting();
  }, [markInteracting]);

  const snapPos = useCallback((value: number) => (
    snapEnabled ? snapToGrid(value, snapGridSize) : value
  ), [snapEnabled, snapGridSize]);

  const onMove = useCallback((id: string, pos: { x: number; y: number }) => {
    markInteracting();
    applyMutation(eng => { eng.moveNode(id, snapPos(pos.x), snapPos(pos.y)); }, false);
  }, [applyMutation, markInteracting, snapPos]);

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
    const nx = snapPos(x ?? 100 + Math.random() * 200);
    const ny = snapPos(y ?? 60 + Math.random() * 240);
    applyMutation(eng => {
      const created = eng.addNode(type, nx, ny);
      if (!created) return false;
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation, snapPos]);

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

  const copyNodeParams = useCallback((nodeId: string) => {
    const node = graph.nodes.find((n) => n.id === nodeId);
    if (!node || isOutputNodeType(node.type)) return;
    paramClipboardRef.current = {
      sourceType: node.type,
      params: { ...node.params },
    };
  }, [graph.nodes]);

  const resetNodeParams = useCallback((nodeId: string) => {
    applyMutation((eng) => {
      const node = eng.serialize().nodes.find((n) => n.id === nodeId);
      if (!node || isOutputNodeType(node.type)) return false;
      const def = NODE_REGISTRY[node.type];
      if (!def) return false;
      for (const [key, meta] of Object.entries(def.params)) {
        eng.updateParam(nodeId, key, meta.default);
      }
      return true;
    }, true);
  }, [applyMutation]);

  const canPasteNodeParams = useCallback((nodeId: string): boolean => {
    const clip = paramClipboardRef.current;
    if (!clip) return false;
    const node = graph.nodes.find((n) => n.id === nodeId);
    if (!node || isOutputNodeType(node.type)) return false;
    const targetDef = NODE_REGISTRY[node.type];
    const sourceDef = NODE_REGISTRY[clip.sourceType];
    if (!targetDef) return false;
    for (const [key, value] of Object.entries(clip.params)) {
      const targetMeta = targetDef.params[key];
      const sourceMeta = sourceDef?.params?.[key];
      if (!targetMeta) continue;
      if (sourceMeta && sourceMeta.type !== targetMeta.type) continue;
      if (targetMeta.type === 'select' && targetMeta.options && !targetMeta.options.includes(String(value))) continue;
      return true;
    }
    return false;
  }, [graph.nodes]);

  const pasteNodeParams = useCallback((nodeId: string) => {
    const clip = paramClipboardRef.current;
    if (!clip) return;
    applyMutation((eng) => {
      const node = eng.serialize().nodes.find((n) => n.id === nodeId);
      if (!node || isOutputNodeType(node.type)) return false;
      const targetDef = NODE_REGISTRY[node.type];
      const sourceDef = NODE_REGISTRY[clip.sourceType];
      if (!targetDef) return false;
      let updated = 0;
      for (const [key, value] of Object.entries(clip.params)) {
        const targetMeta = targetDef.params[key];
        const sourceMeta = sourceDef?.params?.[key];
        if (!targetMeta) continue;
        if (sourceMeta && sourceMeta.type !== targetMeta.type) continue;
        if (targetMeta.type === 'select' && targetMeta.options && !targetMeta.options.includes(String(value))) continue;
        eng.updateParam(nodeId, key, value);
        updated += 1;
      }
      return updated > 0;
    }, true);
  }, [applyMutation]);

  const pasteClipboard = useCallback((graphX?: number, graphY?: number) => {
    if (!clipboard) return;
    applyMutation(eng => {
      const px = snapPos(typeof graphX === 'number' ? graphX : clipboard.x + 40);
      const py = snapPos(typeof graphY === 'number' ? graphY : clipboard.y + 40);
      const created = eng.addNode(clipboard.type, px, py);
      if (!created) return false;
      Object.entries(clipboard.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation, clipboard, snapPos]);

  const cutSelection = useCallback(() => {
    copySelection();
    if (selectedNodeId) onDeleteNode(selectedNodeId);
  }, [copySelection, onDeleteNode, selectedNodeId]);

  const duplicateSelection = useCallback(() => {
    if (!selectedNodeId) return;
    const node = graph.nodes.find(n => n.id === selectedNodeId);
    if (!node || isOutputNodeType(node.type)) return;
    applyMutation(eng => {
      const created = eng.addNode(node.type, snapPos(node.x + 40), snapPos(node.y + 40));
      if (!created) return false;
      Object.entries(node.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      setSelectedNodeId(created.id);
      return true;
    }, true);
  }, [applyMutation, graph.nodes, selectedNodeId, snapPos]);

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
      const created = eng.addNode(type, snapPos(graphX), snapPos(graphY));
      if (!created) return false;
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation, snapPos]);

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
      const created = eng.addNode(node.type, snapPos(node.x + 40), snapPos(node.y + 40));
      if (!created) return false;
      Object.entries(node.params).forEach(([k, v]) => eng.updateParam(created.id, k, v));
      createdId = created.id;
      setSelectedNodeId(created.id);
      return true;
    }, true);
    return createdId;
  }, [applyMutation, graph.nodes, snapPos]);

  const insertNodeOnEdge = useCallback((edgeId: string, nodeType: string, graphX: number, graphY: number): string | null => {
    const edge = graph.edges.find(e => e.id === edgeId);
    if (!edge) return null;
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(nodeType, snapPos(graphX), snapPos(graphY));
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
  }, [applyMutation, graph.edges, snapPos]);

  const addNodeFromPort = useCallback((port: { nodeId: string; portIndex: number; direction: 'in' | 'out' }, nodeType: string, graphX: number, graphY: number): string | null => {
    let createdId: string | null = null;
    applyMutation(eng => {
      const created = eng.addNode(nodeType, snapPos(graphX), snapPos(graphY));
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
  }, [applyMutation, snapPos]);

  const runAutoLayout = useCallback(async (scope: 'all' | 'selection' = 'all') => {
    if (autoLayoutRunning) return;
    const snapshot = graphRef.current;
    let nodes = snapshot.nodes;
    let edges = snapshot.edges;

    if (scope === 'selection') {
      const selectedSet = new Set(selectedNodeIds.filter((id) => snapshot.nodes.some((n) => n.id === id)));
      if (selectedSet.size < 2) {
        showAutoLayoutNotice('Select at least 2 nodes for selection layout.', 'warn');
        return;
      }
      nodes = snapshot.nodes.filter((n) => selectedSet.has(n.id));
      edges = snapshot.edges.filter((e) => selectedSet.has(e.fromId) && selectedSet.has(e.toId));
    }

    if (nodes.length < 2) {
      showAutoLayoutNotice('Nothing to layout.', 'warn');
      return;
    }

    const oldMinX = Math.min(...nodes.map((n) => n.x));
    const oldMinY = Math.min(...nodes.map((n) => n.y));

    setAutoLayoutRunning(true);
    try {
      const autoLayout = await getAutoLayout();
      const result = await autoLayout(nodes, edges, {
        direction: 'RIGHT',
        layerSpacing: 96,
        nodeSpacing: 56,
        edgeRouting: 'ORTHOGONAL',
        includePorts: true,
        padding: 28,
      });

      const positionedNodes = { ...result.nodePositions };
      const outputNodesInScope = nodes.filter((n) => isOutputNodeType(n.type) && !!positionedNodes[n.id]);
      if (outputNodesInScope.length > 1) {
        const nonOutputNodesInScope = nodes.filter((n) => !isOutputNodeType(n.type) && !!positionedNodes[n.id]);
        const rightMostOutputX = Math.max(...outputNodesInScope.map((n) => positionedNodes[n.id].x));
        const rightMostNonOutputX = nonOutputNodesInScope.length > 0
          ? Math.max(...nonOutputNodesInScope.map((n) => positionedNodes[n.id].x))
          : rightMostOutputX;
        const alignedOutputX = Math.max(rightMostOutputX, rightMostNonOutputX + 260);
        for (const node of outputNodesInScope) {
          positionedNodes[node.id] = { ...positionedNodes[node.id], x: alignedOutputX };
        }
      }

      const entries = Object.entries(positionedNodes);
      if (entries.length === 0) throw new Error('ELK returned no node positions.');

      const layoutMinX = Math.min(...entries.map(([, p]) => p.x));
      const layoutMinY = Math.min(...entries.map(([, p]) => p.y));
      const dx = oldMinX - layoutMinX;
      const dy = oldMinY - layoutMinY;

      let movedCount = 0;
      const didApply = applyMutation((eng) => {
        let moved = false;
        for (const [id, pos] of entries) {
          const node = eng.nodes.get(id);
          if (!node) continue;
          const nx = Math.round(pos.x + dx);
          const ny = Math.round(pos.y + dy);
          if (node.x === nx && node.y === ny) continue;
          eng.moveNode(id, nx, ny);
          moved = true;
          movedCount += 1;
        }
        return moved;
      }, true);

      if (!didApply || movedCount === 0) {
        showAutoLayoutNotice('Auto Layout made no changes.', 'warn');
        return;
      }

      markInteracting();
      appendAppLog({
        level: 'info',
        source: 'layout',
        message: scope === 'selection' ? `selection layout applied (${movedCount} nodes)` : `auto layout applied (${movedCount} nodes)`,
      });
      showAutoLayoutNotice(scope === 'selection' ? `Selection layout applied (${movedCount})` : `Auto Layout applied (${movedCount})`, 'ok');
    } catch (error) {
      const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
      appendAppLog({
        level: 'error',
        source: 'layout',
        message: 'Auto layout failed',
        details,
      });
      showAutoLayoutNotice('Auto Layout failed. See logs.', 'warn');
    } finally {
      setAutoLayoutRunning(false);
    }
  }, [autoLayoutRunning, selectedNodeIds, applyMutation, markInteracting, showAutoLayoutNotice, getAutoLayout]);

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
    if (!ENABLE_DEBUG_FUZZ_UI) return;
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

  useEffect(() => {
    if (!ENABLE_DEBUG_FUZZ_UI && chaosMode) setChaosMode(false);
  }, [chaosMode]);

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
        copyNodeParams: (nodeId) => copyNodeParams(nodeId),
        pasteNodeParams: (nodeId) => pasteNodeParams(nodeId),
        resetNodeParams: (nodeId) => resetNodeParams(nodeId),
        canPasteNodeParams: (nodeId) => canPasteNodeParams(nodeId),
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
        toggleChaosMode: ENABLE_DEBUG_FUZZ_UI ? () => setChaosMode((v) => !v) : undefined,
        stepChaosModeOnce: ENABLE_DEBUG_FUZZ_UI ? () => stepChaosModeOnce() : undefined,
      }
    };
  }, [
    addNodeAt,
    addNodeFromPort,
    clipboard,
    copyNodeParams,
    canPasteNodeParams,
    connectNodes,
    contextMenu,
    duplicateNodeById,
    graph,
    insertNodeOnEdge,
    onDeleteEdge,
    onDeleteNode,
    pasteClipboard,
    pasteNodeParams,
    redo,
    resetNodeParams,
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

      if (mod && key === 'z' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        undo();
        return;
      }

      if (mod && key === 'y' && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        redo();
        return;
      }

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

      if (!mod && !e.shiftKey && !e.altKey && key === 'f') {
        e.preventDefault();
        e.stopPropagation();
        resetGraphView();
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
  }, [buildOperatorContext, contextMenu, cutSelection, nodePickerIntent, paletteOpen, redo, resetGraphView, undo]);

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
    if (mapping.metallic) return 'metallic';
    return 'baseColor';
  }, [graph.nodes, graph.edges]);
  const outputPreviewPort = OUTPUT_CHANNEL_PORTS[outputPreviewChannel];
  const graphPerfHash = outputAffectingSig;

  useEffect(() => {
    setNodePreviewWarmupDone(!shouldRenderNodePreviews);
  }, [outputAffectingSig, shouldRenderNodePreviews]);

  useEffect(() => {
    previewCompiledShadersRef.current.clear();
    if (!shouldRenderNodePreviews) return;
    if (!previewCompileWorkerReady || previewCompileWorkerDisabledRef.current) return;
    const worker = previewCompileWorkerRef.current;
    if (!worker) return;

    const snapshot = graphRef.current;
    const signature = outputAffectingSig;
    const edgesByFromNode = new Map<string, number[]>();
    for (const edge of snapshot.edges) {
      const next = edgesByFromNode.get(edge.fromId);
      if (next) next.push(edge.fromPort);
      else edgesByFromNode.set(edge.fromId, [edge.fromPort]);
    }
    const outputThumbChannel = resolveThumbnailOutputChannel(snapshot);
    const getNodePreviewPort = (node: NodeData): number => {
      const def = NODE_REGISTRY[node.type];
      if (!def || def.outputs.length <= 1) return 0;
      const connectedPorts = edgesByFromNode.get(node.id);
      if (connectedPorts && connectedPorts.length > 0) return Math.max(...connectedPorts);
      if (node.type === 'split' && def.outputs.length > 4) return 4;
      return 0;
    };

    worker.postMessage({
      type: 'set_graph',
      signature,
      graph: snapshot,
    } satisfies PreviewCompileWorkerRequest);

    for (const node of snapshot.nodes) {
      const previewPort = getNodePreviewPort(node);
      const meta = buildPreviewRequestMeta(node, previewPort, outputThumbChannel);
      worker.postMessage({
        type: 'compile_job',
        signature,
        requestKey: meta.requestKey,
        mode: meta.mode,
        nodeId: node.id,
        nodeOutputPort: previewPort,
        outputChannel: meta.outputChannel,
      } satisfies PreviewCompileWorkerRequest);
    }
  }, [outputAffectingSig, shouldRenderNodePreviews, previewCompileWorkerReady]);

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
            if (_thumbCtx.unavailableReason) {
              failures.push(`preview-template: GPU unavailable -> ${_thumbCtx.unavailableReason}`);
              return { failures, nodeCount: template.nodes.length, caseCount };
            }
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
    const outputs: OutputChannel[] = ['baseColor', 'roughness', 'normal', 'metallic', 'height'];
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
      const has2DPreview = has2DPreviewTab;
      if (compileError) {
        return { severity: 'fail', message: 'Preview has compile error', details: compileError };
      }
      if (!has2DPreview) {
        return { severity: 'ok', message: '2D preview panel is closed (check skipped)' };
      }
      if (previewWorkPending) {
        return { severity: 'ok', message: 'Preview compile is still pending' };
      }
      if (!previewShader || !codeShader) {
        return { severity: 'warn', message: 'Shader is not compiled yet' };
      }
      return { severity: 'ok', message: 'Preview shader is available' };
    });

    await runCheck('performance_budget', 'Frame Budget', () => {
      const hasAnyPreviewViewport = has2DPreviewTab || has3DPreviewTab;
      if (!hasAnyPreviewViewport) {
        return { severity: 'ok', message: 'No preview viewport is open (check skipped)' };
      }
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
    previewWorkPending,
    rendererPerf,
    rendererPerfP95,
    rendererPerfP50,
    previewFrameBudgetMs,
    has2DPreviewTab,
    has3DPreviewTab,
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
      for (const edge of graph.edges) {
        if (edge.fromId === effectiveId && edge.fromPort > bestPort) bestPort = edge.fromPort;
      }
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
    if (!has2DPreviewTab) return;
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
        console.error('[AtomicGraph] Preview compile failed:', e);
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
    has2DPreviewTab,
    buildCompileBacktest,
    reportCompileIssue,
    setPreviewPending,
  ]);

  useEffect(() => {
    if (!shouldRenderNodePreviews || interacting || chaosMode || previewWorkPending) return;
    if (thumbnailBlockedUntil > performance.now()) return;
    let disposed = false;
    const startSig = outputAffectingSig;
    const snapshot = graphRef.current;
    const totalNodes = snapshot.nodes.length;
    const previewNodeBudget = (() => {
      if (performanceMode !== 'performance_first') return 40;
      if (totalNodes >= 420) return 8;
      if (totalNodes >= 240) return 12;
      if (totalNodes >= 120) return 18;
      if (totalNodes >= 64) return 26;
      return 40;
    })();
    const nodePreviewTargetCount = nodePreviewWarmupDone ? previewNodeBudget : totalNodes;
    const dirtyPriorityCap = totalNodes > 240 ? 8 : totalNodes > 120 ? 12 : 28;
    const allowRoundRobin = nodePreviewWarmupDone && totalNodes <= 120;
    const nodeById = new Map(snapshot.nodes.map((n) => [n.id, n]));
    const edgesByFromNode = new Map<string, number[]>();
    for (const edge of snapshot.edges) {
      const next = edgesByFromNode.get(edge.fromId);
      if (next) next.push(edge.fromPort);
      else edgesByFromNode.set(edge.fromId, [edge.fromPort]);
    }
    const plan = tex.current.getPlan();
    const dirtyIds = plan ? getDirtyNodes(plan) : [];
    const pinnedIds = [selectedNodeId, pinnedPreviewNodeId].filter((id): id is string => !!id);
    const visibleIds = visibleNodeIds.filter((id) => nodeById.has(id));
    const outputIds = snapshot.nodes.filter((n) => isOutputNodeType(n.type)).map((n) => n.id);
    const priorityIds: string[] = [];
    const prioritySet = new Set<string>();
    const addPriorityId = (id: string | null | undefined) => {
      if (!id || prioritySet.has(id)) return;
      prioritySet.add(id);
      priorityIds.push(id);
    };
    pinnedIds.forEach(addPriorityId);
    visibleIds.forEach(addPriorityId);
    outputIds.forEach(addPriorityId);
    dirtyIds.slice(0, dirtyPriorityCap).forEach(addPriorityId);
    const restIds = snapshot.nodes
      .map((n) => n.id)
      .filter((id) => !prioritySet.has(id));
    let orderedIds = priorityIds;
    if (!nodePreviewWarmupDone) {
      orderedIds = orderedIds.concat(restIds);
    } else {
      const remaining = Math.max(0, nodePreviewTargetCount - priorityIds.length);
      if (allowRoundRobin && remaining > 0 && restIds.length > 0) {
        const start = thumbnailRoundRobinRef.current % restIds.length;
        const rotatedRest = restIds.slice(start).concat(restIds.slice(0, start));
        orderedIds = orderedIds.concat(rotatedRest.slice(0, remaining));
        thumbnailRoundRobinRef.current = (start + remaining) % restIds.length;
      }
    }
    const nodesToRender = orderedIds
      .slice(0, nodePreviewTargetCount)
      .map((id) => nodeById.get(id))
      .filter((node): node is NonNullable<typeof node> => !!node);
    if (nodesToRender.length === 0) {
      setNodePreviewWarmupDone(true);
      return;
    }

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
    const outputThumbChannel = resolveThumbnailOutputChannel(snapshot);
    const getNodePreviewPort = (nodeId: string): number => {
      const node = nodeById.get(nodeId);
      if (!node) return 0;
      const def = NODE_REGISTRY[node.type];
      if (!def || def.outputs.length <= 1) return 0;

      const connectedPorts = edgesByFromNode.get(nodeId);
      if (connectedPorts && connectedPorts.length > 0) return Math.max(...connectedPorts);

      // Split nodes are most useful to preview as XYZ when no output is connected yet.
      if (node.type === 'split' && def.outputs.length > 4) return 4;
      return 0;
    };

    // Keep startup and heavy graphs smooth: render node previews strictly one-by-one.
    const batchSize = 1;
    let warmupMarked = false;
    const markWarmupDone = () => {
      if (warmupMarked) return;
      warmupMarked = true;
      setNodePreviewWarmupDone(true);
    };

    const step = (deadline: IdleDeadline) => {
      if (disposed) return;
      const chunk: Record<string, string> = {};
      let produced = 0;
      const thumbBatchStart = performance.now();
      while (idx < nodesToRender.length && (deadline.timeRemaining() > 2 || deadline.didTimeout) && produced < batchSize) {
        const node = nodesToRender[idx++];
        try {
          const t0 = performance.now();
          const previewPort = getNodePreviewPort(node.id);
          const meta = buildPreviewRequestMeta(node, previewPort, outputThumbChannel);
          let runtimeCompiled = previewCompiledShadersRef.current.get(meta.requestKey);
          if (!runtimeCompiled) {
            const compiled = meta.mode === 'output'
              ? compiler.compile({
                  outputChannel: meta.outputChannel,
                  readable: false,
                })
              : compiler.compile({
                  nodeId: node.id,
                  nodeOutputPort: previewPort,
                  readable: false,
                });
            runtimeCompiled = applyRuntimeUniforms(compiled, snapshot);
          } else {
            previewCompiledShadersRef.current.delete(meta.requestKey);
          }
          const thumbKey = buildThumbnailKey(runtimeCompiled, NODE_THUMB_SIZE, meta.requestKey);
          let thumb = nodePreviewImageCacheRef.current.get(thumbKey);
          if (!thumb) {
            const rb0 = performance.now();
            thumb = renderShaderThumbnail(runtimeCompiled, NODE_THUMB_SIZE);
            lastReadbackMsRef.current += performance.now() - rb0;
            nodePreviewImageCacheRef.current.set(thumbKey, thumb);
            const thumbCacheLimit = totalNodes > 160 ? 160 : 320;
            if (nodePreviewImageCacheRef.current.size > thumbCacheLimit) {
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
      } else {
        markWarmupDone();
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
    shouldRenderNodePreviews,
    selectedNodeId,
    pinnedPreviewNodeId,
    visibleNodeIds,
    nodePreviewWarmupDone,
    interacting,
    chaosMode,
    previewWorkPending,
    thumbnailBlockedUntil,
    performanceMode,
    viewportQuality.scale,
    graphPerfHash,
  ]);

  useEffect(() => {
    if (!shouldRenderOutputSurfaces || !preview3dReady || interacting || chaosMode) return;
    let disposed = false;
    const snapshot = graphRef.current;
    const size = Math.max(128, Math.min(patternSize, 1024));
    const channels: OutputChannel[] = ['baseColor', 'normal', 'roughness', 'metallic', 'height'];
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
    shouldRenderOutputSurfaces,
    preview3dReady,
    rawMode,
    patternSize,
    interacting,
    chaosMode,
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
    onSelectionSetChange,
    onCanvasClick: closeTransientUi,
    onRequestContextMenu: openContextMenu,
    onCanvasInteractionStart,
    onCanvasInteractionEnd,
    onVisibleNodeIdsChange,
    nodePreviews, outputPreviewSurfaces, nodeTimings,
    graphViewCommandNonce,
    graphViewCommandType,
    snapEnabled,
    snapGridSize,
    setSnapEnabled,
    setSnapGridSize,
    previewShader, codeShader, compileError, patternSize, previewResolution,
    previewTarget,
    previewResScale,
    interacting,
    pinnedPreviewNodeId,
    previewFrameBudgetMs,
    preview3dReady,
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
    onSelectionSetChange,
    onVisibleNodeIdsChange,
    closeTransientUi, openContextMenu, onCanvasInteractionStart, onCanvasInteractionEnd, nodePreviews, outputPreviewSurfaces, nodeTimings, graphViewCommandNonce, graphViewCommandType,
    snapEnabled, snapGridSize,
    previewShader, codeShader, compileError, patternSize, previewResolution,
    previewTarget, previewResScale, interacting, pinnedPreviewNodeId,
    previewFrameBudgetMs, preview3dReady, performanceMode, viewportQuality, rendererPerf, rendererPerfP95, rendererPerfP50,
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
          <span style={menuTitleStyle}>AtomicGraph</span>
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
                <div className="nt-drop-item" onClick={() => { loadAutoLayoutDemo(); setWindowMenuOpen(false); }}>Load Demo DAG (Layout)</div>
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
            title="Undo (Ctrl/Cmd+Z)"
            aria-label="Undo"
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={redo}
            className="nt-btn nt-btn-icon"
            disabled={historyRef.current.future.length === 0}
            title="Redo (Ctrl/Cmd+Y, Ctrl/Cmd+Shift+Z)"
            aria-label="Redo"
          >
            <Redo2 size={14} />
          </button>
          <div style={dividerStyle} />
          <button onClick={onSave} className="nt-btn nt-btn-icon" title="Save graph" aria-label="Save">
            <Save size={14} />
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="nt-btn nt-btn-icon" title="Load graph" aria-label="Load">
            <FolderOpen size={14} />
          </button>
          <input ref={fileInputRef} type="file" accept=".json" style={{ display: 'none' }} onChange={onLoad} />
          <div style={dividerStyle} />
          <span style={{ ...labelStyle, display: 'inline-flex', alignItems: 'center' }} title="Texture size">
            <Hash size={12} />
          </span>
          <select value={patternSize} onChange={e => onSetPatternSize(parseInt(e.target.value, 10))} className="nt-select" title="Texture size">
            {[256, 512, 1024, 2048].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <div style={dividerStyle} />
          <button onClick={frameAllGraphView} className="nt-btn nt-btn-icon" title="Frame all graph content" aria-label="Frame all">
            <Maximize2 size={14} />
          </button>
          <button onClick={resetGraphView} className="nt-btn nt-btn-icon" title="Reset graph camera (F)" aria-label="Reset view">
            <Crosshair size={14} />
          </button>
          <button
            onClick={() => runAutoLayout('all')}
            className="nt-btn nt-btn-icon"
            disabled={autoLayoutRunning}
            title="Run deterministic ELK layered layout (left to right)"
            aria-label="Auto layout"
          >
            {autoLayoutRunning ? <span style={{ fontSize: 11 }}>...</span> : <Wand2 size={14} />}
          </button>
          <button
            onClick={() => runAutoLayout('selection')}
            className="nt-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
            disabled={autoLayoutRunning || selectedNodeIds.length < 2}
            title={selectedNodeIds.length < 2 ? 'Select at least 2 nodes' : 'Layout only selected nodes'}
          >
            <Wand2 size={13} />
            SEL
          </button>
          {autoLayoutNotice && (
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              color: autoLayoutNotice.tone === 'warn' ? '#ffb3b3' : '#9ff3ca',
              letterSpacing: 0.3,
            }}>
              {autoLayoutNotice.text}
            </span>
          )}
          <div style={dividerStyle} />
          <button onClick={onExport} className="nt-btn nt-btn-icon" title="Export textures" aria-label="Export">
            <Download size={14} />
          </button>
          <button onClick={restoreAutosave} className="nt-btn nt-btn-icon" disabled={!hasAutosave} title="Restore last autosave" aria-label="Restore autosave">
            <RotateCcw size={14} />
          </button>
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
  unavailableReason?: string;
  unavailableLogged?: boolean;
} = {};

function uniformValueKey(value: any): string {
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string') return String(value);
  if (Array.isArray(value)) return `[${value.map((v) => uniformValueKey(v)).join(',')}]`;
  if (value == null) return 'null';
  return JSON.stringify(value);
}

function buildThumbnailKey(compiled: CompiledShader, size: number, context = ''): string {
  const entries: string[] = [];
  if (compiled.uniformLayout && compiled.uniformLayout.length > 0) {
    for (const entry of compiled.uniformLayout) {
      const binding = compiled.uniformBindings[entry.name];
      if (!binding) continue;
      entries.push(`${entry.name}:${uniformValueKey(binding.value)}`);
    }
  } else {
    for (const uniform of compiled.uniforms) {
      const binding = compiled.uniformBindings[uniform.name];
      if (!binding) continue;
      entries.push(`${uniform.name}:${uniformValueKey(binding.value)}`);
    }
    if (entries.length === 0) {
      Object.entries(compiled.uniformBindings)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([name, binding]) => entries.push(`${name}:${uniformValueKey(binding.value)}`));
    }
  }
  return `${size}|${context}|${compiled.hash}|${compiled.vertex.length}|${compiled.fragment.length}|${entries.join('|')}`;
}

function renderShaderToSharedCanvas(compiled: CompiledShader, size: number): HTMLCanvasElement | null {
  if (_thumbCtx.unavailableReason) return null;

  if (!_thumbCtx.renderer) {
    try {
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
    } catch (err: any) {
      _thumbCtx.unavailableReason = (err?.message || String(err) || 'WebGL context creation failed').replace(/\s+/g, ' ').trim();
      if (!_thumbCtx.unavailableLogged) {
        _thumbCtx.unavailableLogged = true;
        console.warn(`[thumb] WebGL thumbnails disabled: ${_thumbCtx.unavailableReason}`);
      }
      return null;
    }
  }

  if (!_thumbCtx.renderer || !_thumbCtx.scene || !_thumbCtx.camera) return null;

  if (_thumbCtx.lastSize !== size) {
    _thumbCtx.renderer.setSize(size, size, false);
    _thumbCtx.renderer.domElement.width = size;
    _thumbCtx.renderer.domElement.height = size;
    _thumbCtx.lastSize = size;
  }

  const uniforms: any = {};
  if (compiled.uniformLayout && compiled.uniformLayout.length > 0) {
    for (const entry of compiled.uniformLayout) {
      const binding = compiled.uniformBindings[entry.name];
      if (binding) uniforms[entry.name] = { value: binding.value };
    }
  } else {
    for (const uniform of compiled.uniforms) {
      const binding = compiled.uniformBindings[uniform.name];
      if (binding) uniforms[uniform.name] = { value: binding.value };
    }
    if (Object.keys(uniforms).length === 0) {
      Object.entries(compiled.uniformBindings).forEach(([key, binding]) => {
        uniforms[key] = { value: binding.value };
      });
    }
  }
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

  _thumbCtx.renderer.render(_thumbCtx.scene, _thumbCtx.camera);
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
  if (ctx && sharedCanvas) {
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(sharedCanvas, 0, 0, size, size);
  } else if (ctx && !sharedCanvas) {
    ctx.fillStyle = '#16161f';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#6b7280';
    ctx.font = `bold ${Math.max(8, Math.floor(size * 0.12))}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('NO GPU', size * 0.5, size * 0.5);
  }
  return canvas;
}

function renderShaderThumbnail(compiled: CompiledShader, size: number): string {
  const canvas = renderShaderToSharedCanvas(compiled, size);
  if (!canvas) return renderErrorThumbnail(size, 'NO GPU');
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
  height: 34, display: 'flex', alignItems: 'center', gap: 6,
  background: 'var(--nt-bg-1)', borderBottom: '1px solid var(--nt-border-1)',
  padding: '0 8px', flexShrink: 0
};

const labelStyle: React.CSSProperties = { fontSize: 9, color: 'var(--nt-text-2)', letterSpacing: 0.4 };
const dividerStyle: React.CSSProperties = { width: 1, height: 14, background: 'var(--nt-border-1)', margin: '0 2px' };

const menuDropStyle: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0, marginTop: 4,
  background: 'var(--nt-bg-1)', border: '1px solid var(--nt-border-1)', borderRadius: 4,
  boxShadow: '0 8px 24px #000000aa', padding: '4px 0', minWidth: 180, zIndex: 200,
};
const menuDropSep: React.CSSProperties = {
  height: 1, background: 'var(--nt-border-1)', margin: '4px 8px',
};
