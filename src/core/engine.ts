import { GraphData, NodeData } from './types';
import { NODE_REGISTRY } from './registry';
import { GraphEngine } from './graph';
import { GraphIR, SCHEMA_VERSION, createEmptyIR, fromGraphData, toGraphData, migrateIR, serializeIR, validateIR } from './graph-ir';
import { ExecutionPlan, buildPlan } from './plan';
import { Compiler, CompiledShader, COMPILER_BUILD, ShaderBackend } from './compiler';
import { OutputChannel } from './output';
import { UniformBinding } from './bindings';

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface CompileRequest {
  backend: ShaderBackend;
  readable?: boolean;
  targetNodeId?: string;
  targetPort?: number;
  outputChannel?: OutputChannel;
}

export interface CompileResult {
  glsl: CompiledShader;
  wgsl: CompiledShader;
  plan: ExecutionPlan;
  compileTimeMs: number;
}

// ---------------------------------------------------------------------------
// Uniform resolution (moved from App.tsx)
// ---------------------------------------------------------------------------

function normalizeUniformValue(type: string, value: any) {
  if (type === 'bool') return !!value;
  if (type === 'int') return Math.trunc(Number(value) || 0);
  if (type === 'float') return Number(value) || 0;
  return value;
}

function resolveParamAlias(nodeType: string, alias: string, params: Record<string, any>): string {
  if (alias in params) return alias;
  const defaults: Record<string, string> = {
    val: 'value', spd: 'speed', sc: 'scale', se: 'seed', jt: 'jitter', ang: 'angle',
    px: 'posX', py: 'posY', r: 'rot', rad: 'rad', bl: 'blur', tk: 'thick', exp: 'exp',
    freq: 'freq', ph: 'phase', t: 't', e: 'edge', op: 'opacity', g: 'gamma',
    str: 'strength', il: 'inMin', ih: 'inMax', ol: 'outLo', oh: 'outHi',
  };
  const perNode: Record<string, Record<string, string>> = {
    add: { b: 'b' }, subtract: { b: 'b' }, multiply: { b: 'b' }, divide: { b: 'b' },
    min2: { b: 'b' }, max2: { b: 'b' }, mod: { b: 'b' }, ifgt: { b: 'b' },
    remap: { il: 'inLo', ih: 'inHi', ol: 'outLo', oh: 'outHi' },
    clamp: { lo: 'lo', hi: 'hi' }, smoothstep: { lo: 'lo', hi: 'hi' },
    shape: { px: 'posX', py: 'posY', sc: 'scale', bl: 'blur', tk: 'thick' },
    panner: { sx: 'speedX', sy: 'speedY' },
    levels: { il: 'inMin', ih: 'inMax', g: 'gamma' }, step: { e: 'edge' },
  };
  const mapped = perNode[nodeType]?.[alias] || defaults[alias];
  if (mapped && mapped in params) return mapped;
  return alias;
}

export function applyRuntimeUniforms(shader: CompiledShader, graph: GraphData): CompiledShader {
  const nodesById = new Map(graph.nodes.map(n => [n.id, n]));
  const next: Record<string, UniformBinding> = { ...shader.uniformBindings };
  for (const desc of shader.uniforms) {
    if (desc.nodeId === 'system') continue;
    const node = nodesById.get(desc.nodeId);
    if (!node) continue;
    const key = resolveParamAlias(node.type, desc.key, node.params);
    if (!(key in node.params)) continue;
    next[desc.name] = { value: normalizeUniformValue(desc.type, node.params[key]) };
  }
  return { ...shader, uniformBindings: next };
}

// ---------------------------------------------------------------------------
// Code-affecting signature (determines when full recompile is needed)
// ---------------------------------------------------------------------------

const CODE_AFFECTING_KEYS = new Set(['sides']);

export function buildCodeSignature(graph: GraphData): string {
  const nc = [...graph.nodes].sort((a, b) => a.id.localeCompare(b.id))
    .map(n => {
      const def = NODE_REGISTRY[n.type]; if (!def) return `${n.id}:${n.type}`;
      const csp = Object.keys(def.params)
        .filter(k => def.params[k].type === 'select' || CODE_AFFECTING_KEYS.has(k))
        .sort().map(k => `${k}=${String(n.params[k])}`).join(',');
      return `${n.id}:${n.type}:${csp}`;
    }).join('|');
  const ec = [...graph.edges]
    .sort((a, b) => `${a.fromId}:${a.fromPort}:${a.toId}:${a.toPort}`.localeCompare(`${b.fromId}:${b.fromPort}:${b.toId}:${b.toPort}`))
    .map(e => `${e.fromId}:${e.fromPort}>${e.toId}:${e.toPort}`).join('|');
  return `${nc}::${ec}`;
}

/** Signature of everything that affects shader output (excludes node positions). */
export function buildOutputAffectingSignature(graph: GraphData): string {
  const struct = buildCodeSignature(graph);
  const params = [...graph.nodes]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(n => JSON.stringify(n.params))
    .join('|');
  return `${struct}|${graph.resolution ?? 512}|${params}`;
}

// ---------------------------------------------------------------------------
// TextureEngine — the single API surface between UI and core
// ---------------------------------------------------------------------------

export class TextureEngine {
  private engine: GraphEngine;
  private ir: GraphIR;
  private plan: ExecutionPlan | null = null;
  private shaderCache = new Map<string, { glsl: CompiledShader; wgsl: CompiledShader }>();
  private _compilerBuild = COMPILER_BUILD;

  private historyPast: string[] = [];
  private historyFuture: string[] = [];
  private maxHistory = 100;

  constructor(initial?: GraphIR | GraphData) {
    if (initial && 'schemaVersion' in initial && (initial as GraphIR).meta) {
      this.ir = initial as GraphIR;
    } else if (initial) {
      this.ir = fromGraphData(initial as GraphData);
    } else {
      this.ir = createEmptyIR();
    }
    this.engine = new GraphEngine(toGraphData(this.ir));
    this.rebuildPlan();
  }

  // -- Accessors --

  getIR(): Readonly<GraphIR> { return this.ir; }
  getGraphData(): GraphData { return toGraphData(this.ir); }
  getResolution(): number { return this.ir.resolution; }
  getPlan(): ExecutionPlan | null { return this.plan; }

  setResolution(res: number) {
    this.ir = { ...this.ir, resolution: res };
    this.engine.setResolution(res);
  }

  // -- Mutations (every mutation returns a fresh GraphData snapshot) --

  private sync(): GraphData {
    const gd = this.engine.serialize();
    this.ir = {
      ...this.ir,
      nodes: gd.nodes,
      edges: gd.edges,
      frames: gd.frames ?? [],
      meta: { ...this.ir.meta, modified: Date.now() }
    };
    this.rebuildPlan();
    return gd;
  }

  private pushHistory() {
    this.historyPast.push(JSON.stringify(this.ir));
    if (this.historyPast.length > this.maxHistory) this.historyPast.shift();
    this.historyFuture = [];
  }

  addNode(type: string, x: number, y: number, withHistory = true): { graph: GraphData; node: NodeData | null } {
    if (withHistory) this.pushHistory();
    const node = this.engine.addNode(type, x, y);
    return { graph: this.sync(), node };
  }

  removeNode(id: string): GraphData {
    this.pushHistory();
    this.engine.removeNode(id);
    return this.sync();
  }

  connect(fromId: string, toId: string, toPort: number): GraphData {
    this.pushHistory();
    this.engine.addEdge(fromId, toId, toPort);
    return this.sync();
  }

  disconnect(edgeId: string): GraphData {
    this.pushHistory();
    this.engine.removeEdge(edgeId);
    return this.sync();
  }

  updateParam(nodeId: string, key: string, value: any): GraphData {
    this.engine.updateParam(nodeId, key, value);
    return this.sync();
  }

  moveNode(nodeId: string, x: number, y: number): GraphData {
    this.engine.moveNode(nodeId, x, y);
    const gd = this.engine.serialize();
    this.ir = {
      ...this.ir,
      nodes: gd.nodes,
      frames: gd.frames ?? this.ir.frames,
      meta: { ...this.ir.meta, modified: Date.now() }
    };
    return gd;
  }

  // -- History --

  undo(): GraphData | null {
    if (!this.historyPast.length) return null;
    this.historyFuture.push(JSON.stringify(this.ir));
    this.ir = JSON.parse(this.historyPast.pop()!);
    this.engine = new GraphEngine(toGraphData(this.ir));
    this.rebuildPlan();
    return toGraphData(this.ir);
  }

  redo(): GraphData | null {
    if (!this.historyFuture.length) return null;
    this.historyPast.push(JSON.stringify(this.ir));
    this.ir = JSON.parse(this.historyFuture.pop()!);
    this.engine = new GraphEngine(toGraphData(this.ir));
    this.rebuildPlan();
    return toGraphData(this.ir);
  }

  canUndo(): boolean { return this.historyPast.length > 0; }
  canRedo(): boolean { return this.historyFuture.length > 0; }

  // -- Persistence --

  serialize(): string { return serializeIR(this.ir); }

  load(raw: any): GraphData {
    this.ir = migrateIR(raw);
    const validation = validateIR(this.ir);
    if (!validation.ok) console.warn('GraphIR validation errors:', validation.errors);
    this.engine = new GraphEngine(toGraphData(this.ir));
    this.rebuildPlan();
    this.historyPast = [];
    this.historyFuture = [];
    return toGraphData(this.ir);
  }

  /** Update node/frame layout only; skips plan rebuild (layout doesn't affect output). */
  updateNodePositions(
    nodes: { id: string; x: number; y: number }[],
    frames?: { id: string; x: number; y: number; width: number; height: number; label: string; color?: string }[]
  ) {
    const byId = new Map(nodes.map(n => [n.id, n]));
    for (const n of this.ir.nodes) {
      const upd = byId.get(n.id);
      if (upd) {
        n.x = upd.x;
        n.y = upd.y;
      }
    }
    this.engine.nodes.forEach((node, id) => {
      const upd = byId.get(id);
      if (upd) {
        node.x = upd.x;
        node.y = upd.y;
      }
    });
    if (frames) {
      const nextFrames = frames.map((frame) => ({ ...frame }));
      this.ir.frames = nextFrames;
      this.engine.frames = new Map(nextFrames.map((frame) => [frame.id, { ...frame }]));
    }
    this.ir.meta = { ...this.ir.meta, modified: Date.now() };
  }

  // -- Plan --

  private rebuildPlan() {
    this.plan = buildPlan(this.ir, this.plan ?? undefined);
    this.shaderCache.clear();
  }

  // -- Compilation --

  compile(req: CompileRequest): CompileResult {
    const t0 = performance.now();
    const gd = toGraphData(this.ir);
    const target = req.targetNodeId ?? 'output';
    const port = req.targetPort ?? 0;
    const channel = req.outputChannel ?? 'baseColor';
    const readable = req.readable ?? true;

    const cacheKey = `${this.plan?.hash}|${this._compilerBuild}|${target}:${port}|${channel}|${readable}`;
    const cached = this.shaderCache.get(cacheKey);
    if (cached) {
      return {
        glsl: applyRuntimeUniforms(cached.glsl, gd),
        wgsl: applyRuntimeUniforms(cached.wgsl, gd),
        plan: this.plan!,
        compileTimeMs: performance.now() - t0,
      };
    }

    const nodeOpts = req.targetNodeId ? { nodeId: req.targetNodeId, nodeOutputPort: port } : {};
    const glsl = new Compiler(gd).compile({ backend: 'glsl', readable, outputChannel: channel, ...nodeOpts });
    const wgsl = new Compiler(gd).compile({ backend: 'wgsl', readable, outputChannel: channel, ...nodeOpts });

    this.shaderCache.set(cacheKey, { glsl, wgsl });

    return {
      glsl: applyRuntimeUniforms(glsl, gd),
      wgsl: applyRuntimeUniforms(wgsl, gd),
      plan: this.plan!,
      compileTimeMs: performance.now() - t0,
    };
  }

  compileNode(nodeId: string, port = 0): CompiledShader {
    const gd = toGraphData(this.ir);
    const compiled = new Compiler(gd).compile({ nodeId, nodeOutputPort: port, readable: true, backend: 'glsl' });
    return applyRuntimeUniforms(compiled, gd);
  }

  invalidateCache() {
    this.shaderCache.clear();
  }

  // -- Remote node presets --

  getRemoteValues(): Record<string, { target: string; key: string; value: any; label: string }> {
    const result: Record<string, { target: string; key: string; value: any; label: string }> = {};
    for (const node of this.ir.nodes) {
      if (node.type === 'remote') {
        result[node.id] = {
          target: node.params.target || '',
          key: node.params.key || '',
          value: node.params.value ?? 0,
          label: node.params.label || node.params.key || '',
        };
      }
    }
    return result;
  }

  saveRemotePreset(name: string) {
    const values = this.getRemoteValues();
    const key = `nt.remote_preset.${name}`;
    localStorage.setItem(key, JSON.stringify(values));
  }

  loadRemotePreset(name: string): GraphData | null {
    const key = `nt.remote_preset.${name}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      const values = JSON.parse(raw) as Record<string, { target: string; key: string; value: any }>;
      for (const [nodeId, preset] of Object.entries(values)) {
        const node = this.ir.nodes.find(n => n.id === nodeId);
        if (!node || node.type !== 'remote') continue;
        this.engine.updateParam(nodeId, 'value', preset.value);
        if (preset.target && preset.key) {
          this.engine.updateParam(preset.target, preset.key, preset.value);
        }
      }
      return this.sync();
    } catch {
      return null;
    }
  }

  getRemotePresetNames(): string[] {
    const prefix = 'nt.remote_preset.';
    const names: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(prefix)) names.push(k.slice(prefix.length));
    }
    return names.sort();
  }

  deleteRemotePreset(name: string) {
    localStorage.removeItem(`nt.remote_preset.${name}`);
  }
}
