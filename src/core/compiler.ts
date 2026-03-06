
import { GraphData, NodeData, EdgeData, DataType } from './types';
import { NODE_REGISTRY } from './registry';
import { deterministicUniformName, ShaderBindings, UniformBinding } from './bindings';
import {
  OutputChannel,
  OUTPUT_CHANNEL_PORTS,
  hasDedicatedOutputNodeForChannel,
  resolveOutputChannels
} from './output';
import { ATOMS, WGSL_BASE_HELPERS } from './atoms';

export const COMPILER_BUILD = Date.now();

export type UniformType = 'float' | 'int' | 'bool' | 'vec2' | 'vec3' | 'vec4';
export type ShaderBackend = 'glsl' | 'wgsl';

export interface CompiledUniformDescriptor {
  name: string;
  type: UniformType;
  nodeId: string;
  key: string;
  defaultValue: any;
}

export interface CompiledShader {
  backend: ShaderBackend;
  source: string;
  warnings: string[];
  hash: string;
  atomsUsed?: string[];
  uniforms: CompiledUniformDescriptor[];
  vertex: string;
  fragment: string;
  uniformBindings: Record<string, UniformBinding>;
  wgsl?: string;
  uniformLayout?: UniformLayoutEntry[];
}

export interface UniformLayoutEntry {
  name: string;
  type: UniformType;
  index: number;
  size: number;
}

interface Expr {
  code: string;
  type: DataType;
  atoms?: Set<string>;
}

export class Compiler {
  private graph: GraphData;
  private nodes: Map<string, NodeData>;
  private edgeIndex: Map<string, EdgeData>;
  private bindings: ShaderBindings = new ShaderBindings();
  private uniformBindings: Record<string, UniformBinding> = {};
  private uniformDescriptors: Map<string, CompiledUniformDescriptor> = new Map();
  private decls: Set<string> = new Set();
  private funcs: Map<string, string> = new Map();
  private funcDefs: string[] = [];
  private warnings: Set<string> = new Set();
  private activeOutputInputPort = 0;
  private backend: ShaderBackend = 'glsl';
  private uniformIndexMap: Map<string, number> = new Map();
  private nextUniformIndex = 0;
  private funcBodies: Map<string, string[]> = new Map();
  private funcExprs: Map<string, Expr> = new Map();
  private atomCse: Map<string, Map<string, Expr>> = new Map();
  private tempCounterByFunc: Map<string, number> = new Map();
  private atomInputExprStack: Expr[][] = [];

  constructor(graph: GraphData) {
    this.graph = graph;
    this.nodes = new Map(graph.nodes.map(n => [n.id, n]));
    this.edgeIndex = new Map();
    graph.edges.forEach(e => {
      this.edgeIndex.set(`${e.toId}:${e.toPort}`, e);
    });
  }

  compile(options?: {
    outputChannel?: OutputChannel;
    readable?: boolean;
    nodeId?: string;
    nodeOutputPort?: number;
    backend?: ShaderBackend;
  }): CompiledShader {
    this.backend = options?.backend || 'glsl';
    this.bindings = new ShaderBindings();
    this.uniformBindings = {};
    this.uniformDescriptors.clear();
    this.decls.clear();
    this.funcs.clear();
    this.funcDefs = [];
    this.warnings.clear();
    this.uniformIndexMap.clear();
    this.nextUniformIndex = 0;
    this.funcBodies.clear();
    this.funcExprs.clear();
    this.atomCse.clear();
    this.tempCounterByFunc.clear();
    this.activeOutputInputPort = OUTPUT_CHANNEL_PORTS[options?.outputChannel || 'baseColor'] ?? 0;
    const readable = options?.readable ?? true;

    this.registerSystemUniforms();

    let outExpr: Expr | null = null;
    const targetNodeId = options?.nodeId;
    const targetNodePort = options?.nodeOutputPort;
    if (targetNodeId) {
      if (!this.nodes.has(targetNodeId)) return this.defaultShader();
      outExpr = this.genFunction(targetNodeId, targetNodePort ?? 0);
    } else {
      const channel = options?.outputChannel || 'baseColor';
      const outputMap = resolveOutputChannels(this.graph);
      const sourceEdge = outputMap[channel];
      if (sourceEdge) {
        outExpr = this.genFunction(sourceEdge.fromId, sourceEdge.fromPort);
      } else if (!hasDedicatedOutputNodeForChannel(this.graph, channel)) {
        const outNode = Array.from(this.nodes.values()).find(n => n.type === 'output');
        if (outNode) outExpr = this.getOutputExpression(outNode.id, channel);
      }
      if (!outExpr) outExpr = this.defaultOutputExpression(channel);
    }

    if (this.backend === 'wgsl') {
      return this.assembleWgsl(outExpr, readable);
    }
    return this.assembleGlsl(outExpr, readable);
  }

  // ── GLSL assembly ─────────────────────────────────────────────────

  private assembleGlsl(outExpr: Expr, readable: boolean): CompiledShader {
    const atomsUsed = this.resolveAtomOrder(outExpr.atoms ?? new Set<string>());
    const vert = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;

    const frag = `
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_preview_offset;
      uniform float u_preview_zoom;
      uniform float u_preview_tile;
      ${Array.from(this.decls).join('\n')}

      ${GLSL_HELPERS}

      ${this.funcDefs.join('\n')}

      void main() {
        vec2 rawUv = (vUv - 0.5) / max(u_preview_zoom, 0.0001) + 0.5 + u_preview_offset;
        vec2 uv = rawUv;
        if (u_preview_tile > 0.5) {
          uv = fract(uv);
        }
        ${this.glslOutputAssign(outExpr)}
        if (u_preview_zoom < 0.95) {
          vec2 edge = min(fract(rawUv), 1.0 - fract(rawUv));
          float px = 1.5 / u_resolution.x / max(1.0 / max(u_preview_zoom, 0.0001), 1.0);
          float border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
          float onPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
          vec3 frameColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.24, 0.81, 0.56), onPrimary);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, frameColor, border * 0.7);
        }
      }
    `;

    const source = readable ? this.toReadableSource(frag) : this.toRawSource(frag);
    const hash = this.hashString(source);
    return {
      backend: 'glsl',
      source, warnings: Array.from(this.warnings), hash,
      atomsUsed,
      uniforms: Array.from(this.uniformDescriptors.values()),
      vertex: vert, fragment: source,
      uniformBindings: this.uniformBindings,
    };
  }

  private glslOutputAssign(e: Expr): string {
    if (e.type === 'float') return `float v = ${e.code}; gl_FragColor = vec4(vec3(v), 1.0);`;
    if (e.type === 'vec2') return `vec2 v = ${e.code}; gl_FragColor = vec4(v, 0.0, 1.0);`;
    if (e.type === 'vec3') return `vec3 v = ${e.code}; gl_FragColor = vec4(v, 1.0);`;
    if (e.type === 'vec4') return `vec4 v = ${e.code}; gl_FragColor = v;`;
    return `gl_FragColor = ${e.code};`;
  }

  // ── WGSL assembly ─────────────────────────────────────────────────

  private assembleWgsl(outExpr: Expr, readable: boolean): CompiledShader {
    const layout = this.buildUniformLayout();
    const usedAtoms = outExpr.atoms ?? new Set<string>();
    const atomsUsed = this.resolveAtomOrder(usedAtoms);
    const atomPrelude = this.emitAtomPrelude(usedAtoms);

    const wgsl = `
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;

fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }
fn uv2(i: u32) -> vec2f { return vec2f(uf(i), uf(i + 1u)); }

struct VSOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut;
  out.pos = vec4f(p[vi], 0, 1);
  out.uv = p[vi] * 0.5 + 0.5;
  return out;
}

${WGSL_BASE_HELPERS}

${atomPrelude}

${this.funcDefs.join('\n')}

fn tileFrame(col: vec4f, rawUv: vec2f, zoom: f32, res: vec2f) -> vec4f {
  if (zoom >= 0.95) { return col; }
  let edge = min(fract(rawUv), 1.0 - fract(rawUv));
  let px = 1.5 / res.x / max(1.0 / max(zoom, 0.0001), 1.0);
  let border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
  let inPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
  let frameColor = mix(vec3f(1.0), vec3f(0.24, 0.81, 0.56), inPrimary);
  return vec4f(mix(col.rgb, frameColor, border * 0.7), col.a);
}

@fragment
fn fs_main(inp: VSOut) -> @location(0) vec4f {
  let zoom = uf(${this.sysIdx('u_preview_zoom')}u);
  let tile = uf(${this.sysIdx('u_preview_tile')}u);
  let off = uv2(${this.sysIdx('u_preview_offset')}u);
  let res = uv2(${this.sysIdx('u_resolution')}u);
  let rawUv = (inp.uv - 0.5) / max(zoom, 0.0001) + 0.5 + off;
  var uv = rawUv;
  if (tile > 0.5) { uv = fract(uv); }
  ${this.wgslOutputColor(outExpr)}
  return tileFrame(col, rawUv, zoom, res);
}
`;

    const source = readable ? this.toReadableSource(wgsl) : this.toRawSource(wgsl);
    const hash = this.hashString(source);

    const glslResult = this.rebuildGlslFromState(outExpr, readable);

    return {
      backend: 'wgsl',
      source: glslResult.source,
      warnings: Array.from(this.warnings),
      hash,
      atomsUsed,
      uniforms: Array.from(this.uniformDescriptors.values()),
      vertex: glslResult.vertex,
      fragment: glslResult.fragment,
      uniformBindings: this.uniformBindings,
      wgsl: source,
      uniformLayout: layout,
    };
  }

  private rebuildGlslFromState(outExpr: Expr, _readable: boolean): { source: string; vertex: string; fragment: string } {
    const vert = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
    const frag = `precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}`;
    return { source: frag, vertex: vert, fragment: frag };
  }

  private wgslOutputReturn(e: Expr): string {
    if (e.type === 'float') return `let v = ${e.code}; return vec4f(vec3f(v), 1.0);`;
    if (e.type === 'vec2') return `let v = ${e.code}; return vec4f(v, 0.0, 1.0);`;
    if (e.type === 'vec3') return `let v = ${e.code}; return vec4f(v, 1.0);`;
    if (e.type === 'vec4') return `let v = ${e.code}; return v;`;
    return `return ${e.code};`;
  }

  private wgslOutputColor(e: Expr): string {
    if (e.type === 'float') return `let v = ${e.code}; let col = vec4f(vec3f(v), 1.0);`;
    if (e.type === 'vec2') return `let v = ${e.code}; let col = vec4f(v, 0.0, 1.0);`;
    if (e.type === 'vec3') return `let v = ${e.code}; let col = vec4f(v, 1.0);`;
    if (e.type === 'vec4') return `let v = ${e.code}; let col = v;`;
    return `let col = ${e.code};`;
  }

  private buildUniformLayout(): UniformLayoutEntry[] {
    const layout: UniformLayoutEntry[] = [];
    for (const [name, idx] of this.uniformIndexMap.entries()) {
      const desc = this.uniformDescriptors.get(name);
      const type = desc?.type || 'float';
      const size = type === 'vec4' ? 4 : type === 'vec3' ? 3 : type === 'vec2' ? 2 : 1;
      layout.push({ name, type, index: idx, size });
    }
    return layout.sort((a, b) => a.index - b.index);
  }

  private sysIdx(name: string): number {
    return this.uniformIndexMap.get(name) ?? 0;
  }

  // ── System uniforms ───────────────────────────────────────────────

  private registerSystemUniforms() {
    const sys: Array<[string, UniformType, any]> = [
      ['u_time', 'float', 0],
      ['u_resolution', 'vec2', [1, 1]],
      ['u_preview_offset', 'vec2', [0, 0]],
      ['u_preview_zoom', 'float', 1],
      ['u_preview_tile', 'float', 0],
    ];
    for (const [name, type, value] of sys) {
      this.uniformDescriptors.set(name, { name, type, nodeId: 'system', key: name, defaultValue: value });
      if (type === 'vec2') {
        this.bindings.setVec2(name, value);
        this.uniformIndexMap.set(name, this.nextUniformIndex);
        this.nextUniformIndex += 2;
      } else {
        this.bindings.setFloat(name, typeof value === 'number' ? value : 0);
        this.uniformIndexMap.set(name, this.nextUniformIndex);
        this.nextUniformIndex += 1;
      }
    }
    this.uniformBindings = this.bindings.getUniforms();
  }

  // ── Output expression ─────────────────────────────────────────────

  private defaultOutputExpression(channel: OutputChannel): Expr {
    const v3 = this.backend === 'wgsl' ? 'vec3f' : 'vec3';
    if (channel === 'baseColor') return { code: `${v3}(0.0)`, type: 'vec3' };
    if (channel === 'normal') return { code: `${v3}(0.5, 0.5, 1.0)`, type: 'vec3' };
    return { code: '0.0', type: 'float' };
  }

  private getOutputExpression(outputNodeId: string, channel: OutputChannel): Expr {
    const inputPort = OUTPUT_CHANNEL_PORTS[channel] ?? 0;
    const fallback = this.defaultOutputExpression(channel);
    return this.getSource(outputNodeId, inputPort, 'uv', fallback.code, fallback.type);
  }

  // ── Default shader ────────────────────────────────────────────────

  private defaultShader(): CompiledShader {
    if (this.backend === 'wgsl') {
      const wgsl = DEFAULT_WGSL;
      return {
        backend: 'wgsl', source: '', warnings: [], hash: this.hashString(wgsl),
        atomsUsed: [],
        uniforms: [], vertex: '', fragment: '',
        uniformBindings: {},
        wgsl,
        uniformLayout: [],
      };
    }
    const frag = `precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}`;
    return {
      backend: 'glsl', source: frag, warnings: [], hash: this.hashString(frag),
      atomsUsed: [],
      uniforms: [],
      vertex: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragment: frag, uniformBindings: {},
    };
  }

  // ── Uniform helpers ───────────────────────────────────────────────

  private addUniform(nodeId: string, paramKey: string, value: any): string {
    const id = deterministicUniformName(nodeId, paramKey);
    const type = this.inferUniformType(nodeId, paramKey, value);

    if (!this.uniformDescriptors.has(id)) {
      if (Array.isArray(value)) {
        if (value.length === 2) this.bindings.setVec2(id, [value[0], value[1]]);
        else if (value.length === 3) this.bindings.setVec3(id, [value[0], value[1], value[2]]);
        else if (value.length >= 4) this.bindings.setVec4(id, [value[0], value[1], value[2], value[3]]);
        else this.bindings.setFloat(id, 0);
      } else if (typeof value === 'boolean') {
        this.bindings.setBool(id, value);
      } else if (type === 'int') {
        this.bindings.setInt(id, Number(value));
      } else {
        this.bindings.setFloat(id, Number(value));
      }
      this.uniformBindings = this.bindings.getUniforms();
      this.uniformDescriptors.set(id, { name: id, type, nodeId, key: paramKey, defaultValue: value });

      const size = type === 'vec4' ? 4 : type === 'vec3' ? 3 : type === 'vec2' ? 2 : 1;
      this.uniformIndexMap.set(id, this.nextUniformIndex);
      this.nextUniformIndex += size;

      if (this.backend === 'glsl') {
        this.decls.add(`uniform ${this.toGLSLType(type)} ${id};`);
      }
    }

    if (this.backend === 'wgsl') {
      const idx = this.uniformIndexMap.get(id)!;
      if (type === 'vec2') return `uv2(${idx}u)`;
      return `uf(${idx}u)`;
    }
    return id;
  }

  private sysRef(name: string): string {
    if (this.backend === 'wgsl') {
      const idx = this.uniformIndexMap.get(name) ?? 0;
      return `uf(${idx}u)`;
    }
    return name;
  }

  private sysRef2(name: string): string {
    if (this.backend === 'wgsl') {
      const idx = this.uniformIndexMap.get(name) ?? 0;
      return `uv2(${idx}u)`;
    }
    return name;
  }

  // ── Source / expression helpers ───────────────────────────────────

  private cloneExpr(expr: Expr): Expr {
    return { code: expr.code, type: expr.type, atoms: expr.atoms ? new Set(expr.atoms) : undefined };
  }

  private mergeAtoms(target: Set<string>, source?: Set<string>) {
    if (!source) return;
    source.forEach(id => target.add(id));
  }

  private mergeExprAtoms(target: Set<string>, expr?: Expr) {
    if (!expr?.atoms) return;
    expr.atoms.forEach(id => target.add(id));
  }

  private toWgslDataType(type: DataType): string {
    if (type === 'float') return 'f32';
    if (type === 'vec2') return 'vec2f';
    if (type === 'vec3') return 'vec3f';
    if (type === 'vec4') return 'vec4f';
    return 'f32';
  }

  private callAtom(cacheKey: string, atomId: string, retType: DataType, args: Expr[]): Expr {
    const atom = ATOMS[atomId];
    const mergedAtoms = new Set<string>();
    args.forEach(arg => this.mergeExprAtoms(mergedAtoms, arg));
    mergedAtoms.add(atomId);

    const callCode = `${atomId}(${args.map(a => a.code).join(', ')})`;
    if (!atom) {
      this.warnings.add(`Missing atom definition: ${atomId}`);
      return { code: callCode, type: retType, atoms: mergedAtoms };
    }

    if (!this.W || !atom.pure) {
      return { code: callCode, type: retType, atoms: mergedAtoms };
    }

    const cseByFn = this.atomCse.get(cacheKey) || new Map<string, Expr>();
    this.atomCse.set(cacheKey, cseByFn);
    const key = `${atomId}|${retType}|${args.map(a => a.code).join('|')}`;
    const cached = cseByFn.get(key);
    if (cached) {
      const outAtoms = new Set<string>();
      this.mergeExprAtoms(outAtoms, cached);
      this.mergeAtoms(outAtoms, mergedAtoms);
      return { code: cached.code, type: cached.type, atoms: outAtoms };
    }

    const nextTemp = this.tempCounterByFunc.get(cacheKey) ?? 0;
    const tempName = `t_${nextTemp}`;
    this.tempCounterByFunc.set(cacheKey, nextTemp + 1);

    const bodyLines = this.funcBodies.get(cacheKey) || [];
    this.funcBodies.set(cacheKey, bodyLines);
    bodyLines.push(`let ${tempName}: ${this.toWgslDataType(retType)} = ${callCode};`);

    const expr: Expr = { code: tempName, type: retType, atoms: mergedAtoms };
    cseByFn.set(key, expr);
    return expr;
  }

  private resolveAtomOrder(usedAtoms: Set<string>): string[] {
    if (usedAtoms.size === 0) return [];
    const expanded = new Set<string>();
    const queue = [...usedAtoms];
    while (queue.length) {
      const id = queue.pop()!;
      if (expanded.has(id)) continue;
      expanded.add(id);
      const atom = ATOMS[id];
      if (!atom) {
        this.warnings.add(`Unknown atom referenced: ${id}`);
        continue;
      }
      (atom.deps ?? []).forEach(dep => {
        if (!expanded.has(dep)) queue.push(dep);
      });
    }

    const perm = new Set<string>();
    const temp = new Set<string>();
    const ordered: string[] = [];
    const visit = (id: string) => {
      if (perm.has(id)) return;
      if (temp.has(id)) {
        this.warnings.add(`Atom dependency cycle detected at "${id}"`);
        return;
      }
      const atom = ATOMS[id];
      if (!atom) {
        this.warnings.add(`Missing atom during prelude emit: ${id}`);
        return;
      }
      temp.add(id);
      [...(atom.deps ?? [])].sort().forEach(dep => {
        if (expanded.has(dep)) visit(dep);
      });
      temp.delete(id);
      perm.add(id);
      ordered.push(id);
    };

    [...expanded].sort().forEach(id => visit(id));
    return ordered;
  }

  private emitAtomPrelude(usedAtoms: Set<string>): string {
    const ordered = this.resolveAtomOrder(usedAtoms);
    if (ordered.length === 0) return '';
    return ordered.map(id => ATOMS[id].wgsl.trim()).join('\n\n');
  }

  private getSource(
    nodeId: string,
    portIndex: number,
    uv: string = 'uv',
    defaultVal: string = '0.0',
    defaultType: DataType = 'float',
    defaultAtoms?: Set<string>
  ): Expr {
    const edge = this.edgeIndex.get(`${nodeId}:${portIndex}`);
    if (edge) {
      const expr = this.genFunction(edge.fromId, edge.fromPort);
      return { code: `${expr.code.split('(uv)').join(`(${uv})`)}`, type: expr.type, atoms: expr.atoms ? new Set(expr.atoms) : undefined };
    }
    return { code: defaultVal, type: defaultType, atoms: defaultAtoms ? new Set(defaultAtoms) : undefined };
  }

  private asFloat(expr: Expr, nodeType: string, context: string): string {
    if (expr.type === 'float') return expr.code;
    this.warnings.add(`Implicit cast at node ${nodeType}: ${expr.type} -> float (${context})`);
    return `${expr.code}.x`;
  }

  private sanitizeAtomSubgraph(value: any): GraphData | null {
    if (!value || !Array.isArray(value.nodes) || !Array.isArray(value.edges)) return null;
    const nodes = value.nodes
      .filter((node: any) =>
        node
        && typeof node.id === 'string'
        && typeof node.type === 'string'
        && typeof node.x === 'number'
        && typeof node.y === 'number'
      )
      .map((node: any) => ({
        id: node.id,
        type: node.type,
        x: node.x,
        y: node.y,
        params: node.params && typeof node.params === 'object' ? node.params : {},
      }));
    if (nodes.length === 0) return null;
    const nodeIds = new Set(nodes.map((node: NodeData) => node.id));
    const edges = value.edges.filter((edge: any) =>
      edge
      && typeof edge.id === 'string'
      && typeof edge.fromId === 'string'
      && typeof edge.toId === 'string'
      && typeof edge.fromPort === 'number'
      && typeof edge.toPort === 'number'
      && nodeIds.has(edge.fromId)
      && nodeIds.has(edge.toId)
    );
    return {
      schemaVersion: typeof value.schemaVersion === 'number' ? value.schemaVersion : 1,
      nodes,
      edges,
      resolution: typeof value.resolution === 'number' ? value.resolution : undefined,
    };
  }

  private atomInputPortIndex(nodeType: string): number | null {
    if (nodeType === 'atom_input' || nodeType === 'atom_input_a') return 0;
    if (nodeType === 'atom_input_b') return 1;
    if (nodeType === 'atom_input_c') return 2;
    if (nodeType === 'atom_input_d') return 3;
    return null;
  }

  private compileAtomSubgraph(node: NodeData, inputExprs: Expr[]): Expr {
    const fallback = inputExprs[0] ? this.cloneExpr(inputExprs[0]) : { code: '0.0', type: 'float' as const };
    const subgraph = this.sanitizeAtomSubgraph(node.params?.subgraph);
    if (!subgraph) return this.cloneExpr(fallback);

    const scopeRoot = `atom_${node.id.replace(/[^a-zA-Z0-9_]/g, '_')}`;
    const idMap = new Map<string, string>();
    const scopedNodes: NodeData[] = subgraph.nodes.map((subNode) => {
      const scopedId = `${scopeRoot}_${subNode.id.replace(/[^a-zA-Z0-9_]/g, '_')}`;
      idMap.set(subNode.id, scopedId);
      return { ...subNode, id: scopedId, params: { ...(subNode.params || {}) } };
    });

    const scopedEdges: EdgeData[] = subgraph.edges
      .filter((edge) => idMap.has(edge.fromId) && idMap.has(edge.toId))
      .map((edge) => ({
        ...edge,
        id: `${scopeRoot}_e_${edge.id.replace(/[^a-zA-Z0-9_]/g, '_')}`,
        fromId: idMap.get(edge.fromId)!,
        toId: idMap.get(edge.toId)!,
      }));

    const scopedGraph: GraphData = { nodes: scopedNodes, edges: scopedEdges };
    const outputMap = resolveOutputChannels(scopedGraph);
    const sourceEdge = outputMap.height;
    if (!sourceEdge) {
      this.warnings.add(`Atom graph ${node.id} has no connected Height output; using passthrough.`);
      return this.cloneExpr(fallback);
    }

    const scopedNodeMap = new Map(scopedNodes.map((n) => [n.id, n]));
    const scopedEdgeIndex = new Map<string, EdgeData>();
    scopedEdges.forEach((edge) => {
      scopedEdgeIndex.set(`${edge.toId}:${edge.toPort}`, edge);
    });

    const prevNodes = this.nodes;
    const prevEdgeIndex = this.edgeIndex;
    this.nodes = scopedNodeMap;
    this.edgeIndex = scopedEdgeIndex;
    this.atomInputExprStack.push(inputExprs.map((expr) => this.cloneExpr(expr)));
    try {
      return this.genFunction(sourceEdge.fromId, sourceEdge.fromPort);
    } catch (err: any) {
      this.warnings.add(`Atom graph ${node.id} compile failed: ${err?.message || 'unknown error'}`);
      return this.cloneExpr(fallback);
    } finally {
      this.atomInputExprStack.pop();
      this.nodes = prevNodes;
      this.edgeIndex = prevEdgeIndex;
    }
  }

  // ── Language helpers ──────────────────────────────────────────────

  private get W() { return this.backend === 'wgsl'; }
  private v2(args: string) { return this.W ? `vec2f(${args})` : `vec2(${args})`; }
  private v3(args: string) { return this.W ? `vec3f(${args})` : `vec3(${args})`; }
  private v4(args: string) { return this.W ? `vec4f(${args})` : `vec4(${args})`; }
  private modF(a: string, b: string) { return this.W ? `wmod(${a}, ${b})` : `mod(${a}, ${b})`; }
  private modV2(a: string, b: string) { return this.W ? `wmod2(${a}, ${b})` : `mod(${a}, ${b})`; }
  private atan2F(y: string, x: string) { return this.W ? `atan2(${y}, ${x})` : `atan(${y}, ${x})`; }
  private sel(cond: string, t: string, f: string) { return this.W ? `select(${f}, ${t}, ${cond})` : `((${cond}) ? (${t}) : (${f}))`; }
  private tF() { return this.W ? 'f32' : 'float'; }
  private tI() { return this.W ? 'i32' : 'int'; }
  private tV2() { return this.W ? 'vec2f' : 'vec2'; }

  // ── Code generation ───────────────────────────────────────────────

  private genFunction(nodeId: string, outputPort: number = 0): Expr {
    const node = this.nodes.get(nodeId);
    if (!node) return { code: '0.0', type: 'float' };

    const def = NODE_REGISTRY[node.type];
    const outType = def?.outputs[outputPort]?.type || 'float';

    const cacheKey = `${nodeId}:${outputPort}`;
    const cachedExpr = this.funcExprs.get(cacheKey);
    if (cachedExpr) {
      return this.cloneExpr(cachedExpr);
    }
    if (this.funcs.has(cacheKey)) {
      return { code: `${this.funcs.get(cacheKey)}(uv)`, type: outType, atoms: undefined };
    }

    const fnName = `fn_${nodeId.replace(/[^a-zA-Z0-9]/g, '_')}_${outputPort}`;

    if (node.type === 'split') {
      const inpRes = this.getSource(nodeId, 0);
      if (outputPort === 4) {
        return { code: `(${inpRes.code}).xyz`, type: 'vec3', atoms: inpRes.atoms ? new Set(inpRes.atoms) : undefined };
      }
      const swizzle = ['x', 'y', 'z', 'w'][outputPort] ?? 'x';
      return { code: `(${inpRes.code}).${swizzle}`, type: 'float', atoms: inpRes.atoms ? new Set(inpRes.atoms) : undefined };
    }

    this.funcs.set(cacheKey, fnName);
    this.funcBodies.set(cacheKey, []);
    this.atomCse.set(cacheKey, new Map());
    this.tempCounterByFunc.set(cacheKey, 0);

    const p = node.params;
    const uni = (k: string, v: any) => this.addUniform(nodeId, k, v);
    const sysTime = () => this.sysRef('u_time');
    const localAtoms = new Set<string>();

    const inp = (i: number, d: string | Expr = '0.0', customUv: string = 'uv'): string => {
      const defaultExpr: Expr = typeof d === 'string' ? { code: d, type: 'float' } : d;
      const res = this.getSource(nodeId, i, customUv, defaultExpr.code, defaultExpr.type, defaultExpr.atoms);
      this.mergeExprAtoms(localAtoms, res);
      if (res.type === 'vec2') {
        this.warnings.add(`Implicit cast at node ${node.type}: vec2 -> float (${nodeId}, input ${i})`);
        return `${res.code}.x`;
      }
      if (res.type === 'vec4') {
        this.warnings.add(`Implicit cast at node ${node.type}: vec4 -> float (${nodeId}, input ${i})`);
        return `${res.code}.x`;
      }
      return res.code;
    };

    const inp2 = (i: number, d: string = 'vec2(0.0)', customUv: string = 'uv'): string => {
      const defaultVal = this.W ? 'vec2f(0.0)' : d;
      const res = this.getSource(nodeId, i, customUv, defaultVal);
      this.mergeExprAtoms(localAtoms, res);
      if (res.type === 'float') {
        this.warnings.add(`Implicit cast at node ${node.type}: float -> vec2 (${nodeId}, input ${i})`);
        return this.v2(res.code);
      }
      return res.code;
    };

    const inp4 = (i: number, d: string = 'vec4(0.0)', customUv: string = 'uv'): string => {
      const defaultVal = this.W ? 'vec4f(0.0)' : d;
      const res = this.getSource(nodeId, i, customUv, defaultVal);
      this.mergeExprAtoms(localAtoms, res);
      if (res.type === 'float') return this.v4(res.code);
      return res.code;
    };

    let body = 'return 0.0;';

    switch (node.type) {
      // GENERATORS
      case 'constant': body = `return ${uni('val', p.value)};`; break;
      case 'time': body = `return fract(${sysTime()} * ${uni('spd', p.speed)});`; break;
      case 'uv_x': body = `return uv.x;`; break;
      case 'uv_y': body = `return uv.y;`; break;
      case 'uv': body = `return uv;`; break;
      case 'uniform_color': {
        const r = uni('r', p.r ?? 0.5);
        const g = uni('g', p.g ?? 0.5);
        const b = uni('b', p.b ?? 0.5);
        body = `return ${this.v3(`${r}, ${g}, ${b}`)};`;
        break;
      }
      case 'gaussian_noise': {
        const scale = uni('scale', p.scale ?? 12.0);
        const mean = uni('mean', p.mean ?? 0.5);
        const stdDev = uni('stdDev', p.stdDev ?? 0.16);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0);
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 1.0) + ${this.v2(`${offX}, ${offY}`)})`;
        const u1 = `max(hash2(floor(${p0}) + ${this.v2(`${seedScalar} * 0.137, ${seedScalar} * 0.911`)}), 1e-5)`;
        const u2 = `hash2(floor(${p0}) + ${this.v2(`${seedScalar} * 0.271 + 19.0, ${seedScalar} * 0.613 + 73.0`)})`;
        const z = `(sqrt(-2.0 * log(${u1})) * cos(6.28318530718 * ${u2}))`;
        body = `return clamp(${mean} + ${z} * ${stdDev}, 0.0, 1.0);`;
        break;
      }
      case 'tile_generator': {
        const scale = uni('scale', p.scale ?? 6.0);
        const radius = uni('radius', p.radius ?? 0.42);
        const variation = uni('variation', p.variation ?? 0.25);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0);
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 1.0) + ${this.v2(`${offX}, ${offY}`)})`;
        const gv = `(fract(${p0}) - 0.5)`;
        const cell = `floor(${p0})`;
        const tileRand = `hash2(${cell} + ${this.v2(`${seedScalar} * 0.151, ${seedScalar} * 0.337`)})`;
        const sq = `(1.0 - smoothstep(${radius}, ${radius} + 0.02, max(abs(${gv}.x), abs(${gv}.y))))`;
        const dot = `(1.0 - smoothstep(${radius}, ${radius} + 0.02, length(${gv})))`;
        const shapeExpr = p.shape === 'dot' ? dot : sq;
        body = `return clamp(${shapeExpr} * mix(1.0, ${tileRand}, clamp(${variation}, 0.0, 1.0)), 0.0, 1.0);`;
        break;
      }
      case 'noise': {
        const scale = uni('scale', p.scale ?? 6.0);
        const oct = uni('octaves', p.octaves ?? 4.0);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? (p.seed ?? 0));
        const offY = uni('tileOffsetY', p.tileOffsetY ?? (p.seed ?? 0));
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 0.00001) + ${this.v2(`${offX}, ${offY}`)} + ${this.v2(`${seedScalar} * 0.173, ${seedScalar} * 0.619`)})`;
        body = `return fbm(${p0}, ${oct}, max(${scale}, 0.00001), 1.0);`;
        break;
      }
      case 'perlin': {
        const scale = uni('scale', p.scale ?? 32.0);
        const disorder = uni('disorder', p.disorder ?? 0.0);
        const disorderSpeed = uni('disorderSpeed', p.disorderSpeed ?? 1.0);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0);
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const scaleF = `max(floor(${scale} + 0.5), 1.0)`;
        const p0 = `(${uvSq} * ${scaleF} + ${this.v2(`${offX}, ${offY}`)})`;
        const seedExpr = this.W ? `u32(max(${seedF}, 0.0))` : `float(${seedF})`;
        const t = `(${this.sysRef('u_time')} * ${disorderSpeed})`;
        let samplePos = p0;
        if (this.W) {
          const w1Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + ${this.v2('17.0, 53.0')} + ${this.v2(`${t}*0.73, -${t}*0.41`)}`, type: 'vec2' },
            { code: `(${seedExpr}) ^ 0x68bc21ebu`, type: 'float' },
          ]);
          const w2Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + ${this.v2('113.0, 7.0')} + ${this.v2(`-${t}*0.29, ${t}*0.87`)}`, type: 'vec2' },
            { code: `(${seedExpr}) ^ 0x02e5be93u`, type: 'float' },
          ]);
          this.mergeExprAtoms(localAtoms, w1Expr);
          this.mergeExprAtoms(localAtoms, w2Expr);
          samplePos = `(${p0} + ${disorder} * ${this.v2(`${w1Expr.code}, ${w2Expr.code}`)})`;
        } else {
          const w1Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2(17.0,53.0) + vec2(${t}*0.73, -${t}*0.41)`, type: 'vec2' },
            { code: `(${seedExpr}) + 101.0`, type: 'float' },
          ]);
          const w2Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2(113.0,7.0) + vec2(-${t}*0.29, ${t}*0.87)`, type: 'vec2' },
            { code: `(${seedExpr}) + 211.0`, type: 'float' },
          ]);
          this.mergeExprAtoms(localAtoms, w1Expr);
          this.mergeExprAtoms(localAtoms, w2Expr);
          samplePos = `(${p0} + ${disorder} * vec2(${w1Expr.code}, ${w2Expr.code}))`;
        }
        let perlinExpr: Expr;
        if (this.W) {
          perlinExpr = this.callAtom(cacheKey, 'perlin2i_tiled', 'float', [
            { code: samplePos, type: 'vec2' },
            { code: scaleF, type: 'float' },
            { code: seedExpr, type: 'float' },
          ]);
          this.mergeExprAtoms(localAtoms, perlinExpr);
        } else {
          perlinExpr = { code: `perlin2i_tiled(${samplePos}, ${scaleF}, ${seedExpr})`, type: 'float' };
        }
        const grayWhenScale1 = this.sel(`${scale} < 1.5`, '0.5', perlinExpr.code);
        if (node.params?.subgraph) {
          const atomResult = this.compileAtomSubgraph(node, [{ code: grayWhenScale1, type: 'float' }]);
          this.mergeExprAtoms(localAtoms, atomResult);
          body = `return ${this.asFloat(atomResult, node.type, nodeId)};`;
        } else {
          body = `return ${grayWhenScale1};`;
        }
        break;
      }
      case 'disorder': {
        const amount = uni('amount', p.amount ?? 0.08);
        const scale = uni('scale', p.scale ?? 8.0);
        const speed = uni('speed', p.speed ?? 0.5);
        const seedF = uni('seed', p.seed ?? 1337);
        const seedExpr = this.W ? `u32(max(${seedF}, 0.0))` : `float(${seedF})`;
        const t = `(${this.sysRef('u_time')} * ${speed})`;
        const p0 = `(uv * max(${scale}, 0.00001))`;
        let w1Expr: Expr;
        let w2Expr: Expr;
        if (this.W) {
          w1Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2f(17.0,53.0) + vec2f(${t}*0.73, -${t}*0.41)`, type: 'vec2' },
            { code: `(${seedExpr}) ^ 0x68bc21ebu`, type: 'float' },
          ]);
          w2Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2f(113.0,7.0) + vec2f(-${t}*0.29, ${t}*0.87)`, type: 'vec2' },
            { code: `(${seedExpr}) ^ 0x02e5be93u`, type: 'float' },
          ]);
        } else {
          w1Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2(17.0,53.0) + vec2(${t}*0.73, -${t}*0.41)`, type: 'vec2' },
            { code: `(${seedExpr}) + 101.0`, type: 'float' },
          ]);
          w2Expr = this.callAtom(cacheKey, 'perlin2i_raw', 'float', [
            { code: `${p0} + vec2(113.0,7.0) + vec2(-${t}*0.29, ${t}*0.87)`, type: 'vec2' },
            { code: `(${seedExpr}) + 211.0`, type: 'float' },
          ]);
        }
        this.mergeExprAtoms(localAtoms, w1Expr);
        this.mergeExprAtoms(localAtoms, w2Expr);
        const warpedUv = `(uv + ${amount} * ${this.v2(`${w1Expr.code}, ${w2Expr.code}`)})`;
        const fallbackExpr = this.callAtom(cacheKey, 'perlin2i', 'float', [
          { code: p0, type: 'vec2' },
          { code: seedExpr, type: 'float' },
        ]);
        this.mergeExprAtoms(localAtoms, fallbackExpr);
        body = `return ${inp(0, fallbackExpr, warpedUv)};`;
        break;
      }
      case 'voronoi': {
        const scale = uni('scale', p.scale ?? 5.0);
        const jitter = uni('jitter', p.jitter ?? 1.0);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? (p.seed ?? 0));
        const offY = uni('tileOffsetY', p.tileOffsetY ?? (p.seed ?? 0));
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 0.00001) + ${this.v2(`${offX}, ${offY}`)} + ${this.v2(`${seedScalar} * 0.137, ${seedScalar} * 0.911`)})`;
        const s = `max(${scale}, 0.00001)`;
        const v = `voro(${p0}, ${jitter}, ${s}, true)`;
        const v4t = this.v4('cells,V.y,V.z,V.w');
        if (this.W) {
          body = `{ var V=${v}; let f1=V.x; let cells=1.0-smoothstep(0.0,0.5,f1); return ${v4t}; }`;
        } else {
          body = `{ vec4 V=${v}; float f1=V.x; float cells=1.0-smoothstep(0.0,0.5,f1); return ${v4t}; }`;
        }
        break;
      }
      case 'worley': {
        const scale = uni('scale', p.scale ?? 5.0);
        const jitter = uni('jitter', p.jitter ?? 1.0);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? (p.seed ?? 0));
        const offY = uni('tileOffsetY', p.tileOffsetY ?? (p.seed ?? 0));
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 0.00001) + ${this.v2(`${offX}, ${offY}`)} + ${this.v2(`${seedScalar} * 0.137, ${seedScalar} * 0.911`)})`;
        body = `return voro(${p0}, ${jitter}, max(${scale}, 0.00001), true);`;
        break;
      }
      case 'bnw_spots2_v2': {
        const scale = uni('scale', p.scale ?? 10);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0.0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0.0);
        const seedF = uni('seed', p.seed ?? 1337);
        const nonSquare = uni('nonSquareExpansion', (p.nonSquareExpansion ?? true) ? 1.0 : 0.0);
        const grainAmount = uni('grainAmount', p.grainAmount ?? 0.22);
        const grainThreshold = uni('grainThreshold', p.grainThreshold ?? 0.86);
        const contrast = uni('contrast', p.contrast ?? 1.08);
        const res = this.sysRef2('u_resolution');
        const tileOffset = this.v2(`${offX}, ${offY}`);

        if (this.W) {
          const seedExpr = `u32(max(${seedF}, 0.0))`;
          const spotsExpr = this.callAtom(cacheKey, 'bnw_spots2_v2', 'float', [
            { code: 'uv', type: 'vec2' },
            { code: `uv * ${res}`, type: 'vec2' },
            { code: res, type: 'vec2' },
            { code: scale, type: 'float' },
            { code: tileOffset, type: 'vec2' },
            { code: seedExpr, type: 'float' },
            { code: nonSquare, type: 'float' },
            { code: grainAmount, type: 'float' },
            { code: grainThreshold, type: 'float' },
            { code: contrast, type: 'float' },
          ]);
          this.mergeExprAtoms(localAtoms, spotsExpr);
          body = `return ${spotsExpr.code};`;
        } else {
          const scaleScalar = `float(${scale})`;
          const seedScalar = `float(${seedF})`;
          const scaleF = `clamp(floor(${scaleScalar} + 0.5), 1.0, 32.0)`;
          const aspect = `(${res}.x / max(${res}.y, 1.0))`;
          const uvSq = this.sel(`${nonSquare} > 0.5`, `vec2(uv.x * (${aspect}), uv.y)`, 'uv');
          const p0 = `(${uvSq} * ${scaleF} + ${tileOffset})`;
          const q0 = p0;
          const per0 = scaleF;
          const baseRaw = `(
            0.5   * perlin2i_tiled(${q0} * 1.0, ${per0} * 1.0, ${seedScalar} + 17.0) +
            0.25  * perlin2i_tiled(${q0} * 2.0, ${per0} * 2.0, ${seedScalar} + 31.0) +
            0.125 * perlin2i_tiled(${q0} * 4.0, ${per0} * 4.0, ${seedScalar} + 53.0) +
            0.0625* perlin2i_tiled(${q0} * 8.0, ${per0} * 8.0, ${seedScalar} + 79.0)
          ) / 0.9375`;
          const base = `smoothstep(0.35, 0.75, ${baseRaw})`;
          const baseCtr = `clamp((${base} - 0.5) * max(${contrast}, 0.001) + 0.5, 0.0, 1.0)`;
          const cluster = `perlin2i_tiled(${p0} * 2.0 + vec2(13.2, -9.7), ${per0} * 2.0, ${seedScalar} + 137.0)`;
          const th = `clamp(${grainThreshold} + (${cluster} - 0.5) * 0.12, 0.0, 1.0)`;
          const grain = `hash2(floor(uv * ${res}) + vec2(${seedScalar} * 0.013, ${seedScalar} * 0.071))`;
          const pepper = `step(${th}, ${grain})`;
          body = `return clamp(${baseCtr} - clamp(${grainAmount}, 0.0, 1.0) * ${pepper}, 0.0, 1.0);`;
        }
        break;
      }
      case 'checker': body = `return ${this.modF(`floor(uv.x * ${uni('sc', p.scale)}) + floor(uv.y * ${uni('sc', p.scale)})`, '2.0')};`; break;
      case 'panner': {
        const sx = uni('sx', p.speedX);
        const sy = uni('sy', p.speedY);
        const panUv = `uv + ${this.v2(`${sx}, ${sy}`)} * ${sysTime()}`;
        const fallback = `fbm(${panUv}, 4.0, 4.0, 0.0)`;
        body = `return ${inp(0, fallback, panUv)};`;
        break;
      }
      case 'tile_sampler': {
        const scale = uni('scale', p.scale ?? 6.0);
        const angle = `(${uni('ang', (p.angle ?? 0) * Math.PI / 180)})`;
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0);
        const centered = `(uv - 0.5)`;
        const rotUv = this.v2(`cos(${angle}) * ${centered}.x - sin(${angle}) * ${centered}.y, sin(${angle}) * ${centered}.x + cos(${angle}) * ${centered}.y`);
        const sampleUv = `fract((${rotUv} + 0.5) * max(${scale}, 1.0) + ${this.v2(`${offX}, ${offY}`)})`;
        body = `return ${inp(0, '0.0', sampleUv)};`;
        break;
      }
      case 'gradient': {
        const ang = uni('ang', p.angle * Math.PI / 180);
        if (p.type === 'radial') {
          body = `return clamp(1.0 - length(uv - 0.5) * 2.0, 0.0, 1.0);`;
        } else if (p.type === 'angular') {
          if (this.W) {
            body = `{ var nx = uv - 0.5; return (atan2(nx.y, nx.x) / 3.14159 + 1.0) * 0.5; }`;
          } else {
            body = `vec2 nx = uv - 0.5; return (atan(nx.y, nx.x) / 3.14159 + 1.0) * 0.5;`;
          }
        } else {
          if (this.W) {
            body = `{ var nx = uv - 0.5; return clamp(cos(${ang}) * nx.x + sin(${ang}) * nx.y + 0.5, 0.0, 1.0); }`;
          } else {
            body = `vec2 nx = uv - 0.5; return clamp(cos(${ang}) * nx.x + sin(${ang}) * nx.y + 0.5, 0.0, 1.0);`;
          }
        }
        break;
      }
      case 'shape': {
        const shapeType = p.type || 'circle';
        const pos = this.v2(`${uni('px', p.posX ?? 0.5)}, ${uni('py', p.posY ?? 0.5)}`);
        const scl = uni('sc', p.scale ?? 0.5);
        const rad = uni('rad', p.rad ?? 0.5);
        const blur = uni('bl', p.blur ?? 0.01);
        const thick = uni('tk', p.thick ?? 0.05);

        let sdfExpr: string;
        if (shapeType === 'ring') sdfExpr = `abs(sdCircle(sp, ${rad})) - ${thick}`;
        else if (shapeType === 'square') sdfExpr = `sdBox(sp, ${this.v2(rad)})`;
        else if (shapeType === 'triangle') sdfExpr = `sdEquilateralTriangle(sp, ${rad})`;
        else if (shapeType === 'polygon') sdfExpr = `sdPolygon(sp, ${rad}, 6)`;
        else if (shapeType === 'star') sdfExpr = `sdStar(sp, ${rad}, 5, 2.5)`;
        else sdfExpr = `sdCircle(sp, ${rad})`;

        if (this.W) {
          body = `{ var sp = (uv - ${pos}) / max(${scl}, 0.0001); let d = ${sdfExpr}; return 1.0 - smoothstep(-${blur}, ${blur}, d); }`;
        } else {
          body = `vec2 sp = (uv - ${pos}) / max(${scl}, 0.0001); float d = ${sdfExpr}; return 1.0 - smoothstep(-${blur}, ${blur}, d);`;
        }
        break;
      }

      // MATH
      case 'add': body = `return ${inp(0)} + ${inp(1, uni('b', p.b))};`; break;
      case 'subtract': body = `return ${inp(0)} - ${inp(1, uni('b', p.b))};`; break;
      case 'multiply': body = `return ${inp(0, '1.0')} * ${inp(1, uni('b', p.b))};`; break;
      case 'divide': body = `return ${inp(0, '1.0')} / max(${inp(1, uni('b', p.b))}, 0.0001);`; break;
      case 'power': body = `return pow(max(${inp(0, '0.5')}, 0.0), ${inp(1, uni('exp', p.exp))});`; break;
      case 'oneminus': body = `return 1.0 - ${inp(0)};`; break;
      case 'abs': body = `return abs(${inp(0)});`; break;
      case 'negate': body = `return -(${inp(0)});`; break;
      case 'sqrt': body = `return sqrt(max(${inp(0)}, 0.0));`; break;
      case 'sign': body = `return sign(${inp(0)}) * 0.5 + 0.5;`; break;
      case 'frac': body = `return fract(${inp(0)});`; break;
      case 'floor': body = `return floor(${inp(0)});`; break;
      case 'ceil': body = `return ceil(${inp(0)});`; break;
      case 'min2': body = `return min(${inp(0)}, ${inp(1, uni('b', p.b))});`; break;
      case 'max2': body = `return max(${inp(0)}, ${inp(1, uni('b', p.b))});`; break;
      case 'mod': body = `return ${this.modF(inp(0), `max(${inp(1, uni('b', p.b))}, 0.001)`)};`; break;
      case 'clamp01': body = `return clamp(${inp(0)}, 0.0, 1.0);`; break;
      case 'clamp': body = `return clamp(${inp(0)}, ${uni('lo', p.lo)}, ${uni('hi', p.hi)});`; break;
      case 'remap': {
        const il = uni('il', p.inLo), ih = uni('ih', p.inHi), ol = uni('ol', p.outLo), oh = uni('oh', p.outHi);
        if (this.W) {
          body = `{ let t = clamp((${inp(0)} - ${il}) / max(${ih} - ${il}, 0.001), 0.0, 1.0); return ${ol} + t * (${oh} - ${ol}); }`;
        } else {
          body = `float t = clamp((${inp(0)} - ${il}) / max(${ih} - ${il}, 0.001), 0.0, 1.0); return ${ol} + t * (${oh} - ${ol});`;
        }
        break;
      }

      // TRIG
      case 'sin': body = `return sin(${inp(0, 'uv.x')} * ${uni('freq', p.freq)} * 6.28318 + ${uni('ph', p.phase)}) * 0.5 + 0.5;`; break;
      case 'cos': body = `return cos(${inp(0, 'uv.x')} * ${uni('freq', p.freq)} * 6.28318 + ${uni('ph', p.phase)}) * 0.5 + 0.5;`; break;
      case 'tan': body = `return clamp(tan(${inp(0, 'uv.x')} * ${uni('freq', p.freq)} * 3.14159) * 0.08 + 0.5, 0.0, 1.0);`; break;
      case 'atan2node': body = `return (${this.atan2F(inp(0, 'uv.y - 0.5'), inp(1, 'uv.x - 0.5'))} / 3.14159 + 1.0) * 0.5;`; break;

      // INTERP
      case 'lerp': body = `return mix(${inp(0)}, ${inp(1, '1.0')}, clamp(${inp(2, uni('t', p.t))}, 0.0, 1.0));`; break;
      case 'smoothstep': body = `return smoothstep(${uni('lo', p.lo)}, ${uni('hi', p.hi)}, ${inp(0, 'uv.x')});`; break;
      case 'step': body = `return step(${inp(0, uni('e', p.edge))}, ${inp(1, 'uv.x')});`; break;
      case 'ifgt': body = `return ${this.sel(`(${inp(0)}) > (${inp(1, uni('b', p.b))})`, inp(2, '1.0'), inp(3, '0.0'))};`; break;

      // FILTER
      case 'blend': {
        const a = inp(0);
        const b = inp(1, '1.0');
        const op = uni('op', p.opacity);
        const m = p.mode;
        let blend = b;
        if (m === 'add') blend = `min(${a} + ${b}, 1.0)`;
        else if (m === 'multiply') blend = `(${a}) * (${b})`;
        else if (m === 'screen') blend = `1.0 - (1.0 - ${a}) * (1.0 - ${b})`;
        else if (m === 'overlay') blend = this.sel(`${a} < 0.5`, `2.0 * ${a} * ${b}`, `1.0 - 2.0 * (1.0 - ${a}) * (1.0 - ${b})`);
        else if (m === 'difference') blend = `abs(${a} - ${b})`;
        else if (m === 'dodge') blend = `clamp(${a} / (1.0 - ${b} + 0.001), 0.0, 1.0)`;
        else if (m === 'burn') blend = `clamp(1.0 - (1.0 - ${a}) / (${b} + 0.001), 0.0, 1.0)`;
        body = `return mix(${a}, ${blend}, ${op});`;
        break;
      }
      case 'levels': {
        const il = uni('il', p.inMin), ih = uni('ih', p.inMax), g = uni('g', p.gamma);
        if (this.W) {
          body = `{ let t = clamp((${inp(0)} - ${il}) / max(${ih} - ${il}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${g}, 0.01)); }`;
        } else {
          body = `float t = clamp((${inp(0)} - ${il}) / max(${ih} - ${il}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${g}, 0.01));`;
        }
        break;
      }
      case 'histogram_scan': {
        const pos = uni('pos', p.position ?? 0.5);
        const width = uni('wid', p.width ?? 0.1);
        const contrast = uni('ctr', p.contrast ?? 1.0);
        const x = inp(0);
        const lo = `smoothstep(${pos} - max(${width}, 0.0005), ${pos}, ${x})`;
        const hi = `(1.0 - smoothstep(${pos}, ${pos} + max(${width}, 0.0005), ${x}))`;
        body = `return clamp(${lo} * ${hi} * ${contrast}, 0.0, 1.0);`;
        break;
      }
      case 'curve': {
        const lift = uni('lift', p.lift ?? 0.0);
        const gamma = uni('gamma', p.gamma ?? 1.0);
        const gain = uni('gain', p.gain ?? 1.0);
        const x = inp(0);
        body = `return clamp(pow(clamp(${x} + ${lift}, 0.0, 1.0), 1.0 / max(${gamma}, 0.001)) * ${gain}, 0.0, 1.0);`;
        break;
      }
      case 'warp': {
        const warpAmount = inp2(1, this.W ? 'vec2f(0.0)' : 'vec2(0.0)');
        const strength = uni('str', p.strength);
        const warpedUv = `(uv + ${warpAmount} * ${strength})`;
        body = `return ${inp(0, '0.0', warpedUv)};`;
        break;
      }
      case 'directional_warp': {
        const amount = uni('amount', p.amount ?? 0.15);
        const angle = uni('angle', p.angle ?? 0.0);
        const warpVal = inp(1, '0.5');
        const dir = this.v2(`cos(${angle}), sin(${angle})`);
        const warpedUv = `(uv + ${dir} * ((${warpVal} - 0.5) * ${amount}))`;
        body = `return ${inp(0, '0.0', warpedUv)};`;
        break;
      }
      case 'edge_detect': {
        const res = this.sysRef2('u_resolution');
        const r = `(${uni('radius', p.radius)} / max(${res}.x, ${res}.y))`;
        const k = uni('strength', p.strength);
        if (this.W) {
          body = `{
            let tl = ${inp(0, '0.0', `uv + vec2f(-${r}, -${r})`)};
            let  t = ${inp(0, '0.0', `uv + vec2f( 0.0, -${r})`)};
            let tr = ${inp(0, '0.0', `uv + vec2f( ${r}, -${r})`)};
            let  l = ${inp(0, '0.0', `uv + vec2f(-${r},  0.0)`)};
            let r0 = ${inp(0, '0.0', `uv + vec2f( ${r},  0.0)`)};
            let bl = ${inp(0, '0.0', `uv + vec2f(-${r},  ${r})`)};
            let  b = ${inp(0, '0.0', `uv + vec2f( 0.0,  ${r})`)};
            let br = ${inp(0, '0.0', `uv + vec2f( ${r},  ${r})`)};
            let gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            let gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            let edge = length(vec2f(gx, gy));
            return clamp(edge * ${k}, 0.0, 1.0);
          }`;
        } else {
          body = `
            float tl = ${inp(0, '0.0', `uv + vec2(-${r}, -${r})`)};
            float  t = ${inp(0, '0.0', `uv + vec2( 0.0, -${r})`)};
            float tr = ${inp(0, '0.0', `uv + vec2( ${r}, -${r})`)};
            float  l = ${inp(0, '0.0', `uv + vec2(-${r},  0.0)`)};
            float r0 = ${inp(0, '0.0', `uv + vec2( ${r},  0.0)`)};
            float bl = ${inp(0, '0.0', `uv + vec2(-${r},  ${r})`)};
            float  b = ${inp(0, '0.0', `uv + vec2( 0.0,  ${r})`)};
            float br = ${inp(0, '0.0', `uv + vec2( ${r},  ${r})`)};
            float gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            float edge = length(vec2(gx, gy));
            return clamp(edge * ${k}, 0.0, 1.0);
          `;
        }
        break;
      }
      case 'blur': {
        const amt = uni('amt', p.amount ?? 0.05);
        const ctr = uni('ctr', p.center ?? 0);
        const lo = `${ctr} - ${amt}`;
        const hi = `${ctr} + ${amt}`;
        body = `return 1.0 - smoothstep(${lo}, ${hi}, ${inp(0, '0.5')});`;
        break;
      }
      case 'slope_blur': {
        const intensity = uni('intensity', p.intensity ?? 2.0);
        const samples = uni('samples', p.samples ?? 4.0);
        const res = this.sysRef2('u_resolution');
        const slope = inp(1, inp(0, '0.5'));
        const dir = `normalize(${this.v2(`${slope} - 0.5, 1.0 - ${slope}`)} + ${this.v2('1e-4, 1e-4')})`;
        const stepUv = `(${dir} * (${intensity} / max(${res}.x, ${res}.y)))`;
        const e1 = `step(0.5, ${samples})`;
        const e2 = `step(1.5, ${samples})`;
        const e3 = `step(2.5, ${samples})`;
        const e4 = `step(3.5, ${samples})`;
        const c0 = inp(0, '0.0');
        const p1 = inp(0, '0.0', `(uv + ${stepUv})`);
        const n1 = inp(0, '0.0', `(uv - ${stepUv})`);
        const p2 = inp(0, '0.0', `(uv + ${stepUv} * 2.0)`);
        const n2 = inp(0, '0.0', `(uv - ${stepUv} * 2.0)`);
        const p3 = inp(0, '0.0', `(uv + ${stepUv} * 3.0)`);
        const n3 = inp(0, '0.0', `(uv - ${stepUv} * 3.0)`);
        const p4 = inp(0, '0.0', `(uv + ${stepUv} * 4.0)`);
        const n4 = inp(0, '0.0', `(uv - ${stepUv} * 4.0)`);
        const sum = `(${c0} + ${e1} * (${p1} + ${n1}) + ${e2} * (${p2} + ${n2}) + ${e3} * (${p3} + ${n3}) + ${e4} * (${p4} + ${n4}))`;
        const norm = `(1.0 + 2.0 * (${e1} + ${e2} + ${e3} + ${e4}))`;
        body = `return clamp(${sum} / max(${norm}, 1.0), 0.0, 1.0);`;
        break;
      }
      case 'flood_fill': {
        const scale = uni('scale', p.scale ?? 8.0);
        const threshold = uni('threshold', p.threshold ?? 0.1);
        const seedF = uni('seed', p.seed ?? 1337);
        const offX = uni('tileOffsetX', p.tileOffsetX ?? 0);
        const offY = uni('tileOffsetY', p.tileOffsetY ?? 0);
        const nonSquare = uni('nonSquare', (p.nonSquare ?? true) ? 1.0 : 0.0);
        const seedScalar = this.W ? `(${seedF})` : `float(${seedF})`;
        const res = this.sysRef2('u_resolution');
        const aspect = `${res}.x / max(${res}.y, 1.0)`;
        const uvSq = this.sel(`${nonSquare} > 0.5`, this.v2(`uv.x * (${aspect}), uv.y`), 'uv');
        const p0 = `(${uvSq} * max(${scale}, 1.0) + ${this.v2(`${offX}, ${offY}`)})`;
        const cell = `floor(${p0})`;
        const rnd = `hash2(${cell} + ${this.v2(`${seedScalar} * 0.271, ${seedScalar} * 0.619`)})`;
        const mask = `step(${threshold}, ${inp(0, '1.0')})`;
        body = `return ${rnd} * ${mask};`;
        break;
      }
      case 'height_to_normal': {
        const res = this.sysRef2('u_resolution');
        const r = `(${uni('radius', p.radius ?? 1.0)} / max(${res}.x, ${res}.y))`;
        const str = uni('strength', p.strength ?? 1.0);
        const fy = uni('flipY', (p.flipY ?? false) ? -1.0 : 1.0);
        if (this.W) {
          body = `{
            let tl = ${inp(0, '0.0', `uv + vec2f(-${r}, -${r})`)};
            let  t = ${inp(0, '0.0', `uv + vec2f( 0.0, -${r})`)};
            let tr = ${inp(0, '0.0', `uv + vec2f( ${r}, -${r})`)};
            let  l = ${inp(0, '0.0', `uv + vec2f(-${r},  0.0)`)};
            let  r0 = ${inp(0, '0.0', `uv + vec2f( ${r},  0.0)`)};
            let bl = ${inp(0, '0.0', `uv + vec2f(-${r},  ${r})`)};
            let  b = ${inp(0, '0.0', `uv + vec2f( 0.0,  ${r})`)};
            let br = ${inp(0, '0.0', `uv + vec2f( ${r},  ${r})`)};
            let dX = (tr + 2.0*r0 + br) - (tl + 2.0*l + bl);
            let dY = (bl + 2.0*b + br) - (tl + 2.0*t + tr);
            let k = ${str} * max(${res}.x, ${res}.y) / max(${r}, 0.0001) * 0.5;
            let gx = -dX * k;
            let gy = -dY * k * ${fy};
            let n = normalize(vec3f(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;
        } else {
          body = `{
            float tl = ${inp(0, '0.0', `uv + vec2(-${r}, -${r})`)};
            float  t = ${inp(0, '0.0', `uv + vec2( 0.0, -${r})`)};
            float tr = ${inp(0, '0.0', `uv + vec2( ${r}, -${r})`)};
            float  l = ${inp(0, '0.0', `uv + vec2(-${r},  0.0)`)};
            float  r0 = ${inp(0, '0.0', `uv + vec2( ${r},  0.0)`)};
            float bl = ${inp(0, '0.0', `uv + vec2(-${r},  ${r})`)};
            float  b = ${inp(0, '0.0', `uv + vec2( 0.0,  ${r})`)};
            float br = ${inp(0, '0.0', `uv + vec2( ${r},  ${r})`)};
            float dX = (tr + 2.0*r0 + br) - (tl + 2.0*l + bl);
            float dY = (bl + 2.0*b + br) - (tl + 2.0*t + tr);
            float k = ${str} * max(${res}.x, ${res}.y) / max(${r}, 0.0001) * 0.5;
            float gx = -dX * k;
            float gy = -dY * k * ${fy};
            vec3 n = normalize(vec3(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;
        }
        break;
      }

      // CONTROL (no shader output)
      case 'remote': body = `return 0.0;`; break;
      case 'atom_input':
      case 'atom_input_a':
      case 'atom_input_b':
      case 'atom_input_c':
      case 'atom_input_d': {
        const topInputs = this.atomInputExprStack.length > 0
          ? this.atomInputExprStack[this.atomInputExprStack.length - 1]
          : null;
        const portIndex = this.atomInputPortIndex(node.type) ?? 0;
        const atomIn = topInputs?.[portIndex] ?? topInputs?.[0] ?? null;
        if (!atomIn) {
          this.warnings.add(`Atom Input node "${nodeId}" used outside atom graph.`);
          body = 'return 0.0;';
          break;
        }
        if (topInputs && portIndex >= topInputs.length) {
          this.warnings.add(`Atom Input "${node.type}" requested missing parent port ${portIndex}; using port 0.`);
        }
        this.mergeExprAtoms(localAtoms, atomIn);
        body = `return ${this.asFloat(atomIn, node.type, `${nodeId}`)};`;
        break;
      }
      case 'atom_graph': {
        const inputCount = Math.max(1, NODE_REGISTRY[node.type]?.inputs?.length || 1);
        const atomInputs: Expr[] = [];
        for (let i = 0; i < inputCount; i += 1) {
          const source = this.getSource(nodeId, i, 'uv', '0.0', 'float');
          atomInputs.push(source);
          this.mergeExprAtoms(localAtoms, source);
        }
        const atomResult = this.compileAtomSubgraph(node, atomInputs);
        this.mergeExprAtoms(localAtoms, atomResult);
        body = `return ${this.asFloat(atomResult, node.type, nodeId)};`;
        break;
      }

      // UTILITY
      case 'buffer': {
        if (outputPort === 1) {
          const px = `1.0 / max(${this.sysRef2('u_resolution')}.x, 1.0)`;
          if (this.W) {
            body = `{
              let s = ${px};
              let c  = ${inp(0, '0.0', 'uv')};
              let c1 = ${inp(0, '0.0', `uv + vec2f(s, 0.0)`)};
              let c2 = ${inp(0, '0.0', `uv + vec2f(-s, 0.0)`)};
              let c3 = ${inp(0, '0.0', `uv + vec2f(0.0, s)`)};
              let c4 = ${inp(0, '0.0', `uv + vec2f(0.0, -s)`)};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            }`;
          } else {
            body = `
              float s = ${px};
              float c  = ${inp(0, '0.0', 'uv')};
              float c1 = ${inp(0, '0.0', `uv + vec2(s, 0.0)`)};
              float c2 = ${inp(0, '0.0', `uv + vec2(-s, 0.0)`)};
              float c3 = ${inp(0, '0.0', `uv + vec2(0.0, s)`)};
              float c4 = ${inp(0, '0.0', `uv + vec2(0.0, -s)`)};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            `;
          }
        } else {
          body = `return ${inp(0)};`;
        }
        break;
      }

      // OUTPUT
      case 'output': body = `return ${inp(0)};`; break;
      case 'output_baseColor': body = `return ${inp(0)};`; break;
      case 'output_normal': body = `return ${inp(0)};`; break;
      case 'output_roughness': body = `return ${inp(0)};`; break;
      case 'output_height': body = `return ${inp(0)};`; break;

      default: body = `return 0.5;`; break;
    }

    if (this.W) {
      const wt = this.toWgslDataType(outType);
      const prelude = this.funcBodies.get(cacheKey) || [];
      const fnBody = [...prelude, body].join('\n');
      const label = (def?.label || node.type).replace(/\r?\n/g, ' ');
      this.funcDefs.push(`// NodeRef id=${nodeId} type=${node.type} port=${outputPort} label=${label}\nfn ${fnName}(uv: vec2f) -> ${wt} {\n${fnBody}\n}`);
    } else {
      this.funcDefs.push(`// Node: ${def?.label || node.type} (id=${nodeId})\n${outType} ${fnName}(vec2 uv) { ${body} }`);
    }
    const outExpr: Expr = { code: `${fnName}(uv)`, type: outType, atoms: localAtoms.size > 0 ? new Set(localAtoms) : undefined };
    this.funcExprs.set(cacheKey, outExpr);
    return this.cloneExpr(outExpr);
  }

  // ── Utility ───────────────────────────────────────────────────────

  private inferUniformType(nodeId: string, paramKey: string, value: any): UniformType {
    if (Array.isArray(value)) {
      if (value.length >= 4) return 'vec4';
      if (value.length === 3) return 'vec3';
      if (value.length === 2) return 'vec2';
      return 'float';
    }
    if (typeof value === 'boolean') return 'bool';
    const node = this.nodes.get(nodeId);
    const paramDef = node ? NODE_REGISTRY[node.type]?.params?.[paramKey] : undefined;
    if (paramDef?.type === 'int') return 'int';
    return 'float';
  }

  private toGLSLType(type: UniformType): string {
    if (type === 'float') return 'float';
    if (type === 'int') return 'int';
    if (type === 'bool') return 'bool';
    if (type === 'vec2') return 'vec2';
    if (type === 'vec3') return 'vec3';
    return 'vec4';
  }

  private toReadableSource(source: string): string {
    return source.split('\n').map(l => l.trimEnd()).join('\n').trim();
  }

  private toRawSource(source: string): string {
    return source.replace(/\/\/[^\n\r]*/g, '').replace(/\s+/g, ' ').trim();
  }

  private hashString(value: string): string {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return `fnv1a_${(hash >>> 0).toString(16)}`;
  }
}

// ── GLSL helper functions ───────────────────────────────────────────

const GLSL_HELPERS = `
// Hash functions
float hash2(vec2 p){p=fract(p*vec2(234.345,435.678));p+=dot(p,p+34.23);return fract(p.x*p.y);}
vec2 hash22(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.0+2.0*fract(sin(p)*43758.5453123);}
float fade1(float t){ return t*t*t*(t*(t*6.0-15.0)+10.0); }
vec2 fade(vec2 t) { return vec2(fade1(t.x), fade1(t.y)); }

// Noise functions
float vnoise(vec2 p, float per, bool tile){
  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.-2.*f);
  vec2 i00=i+vec2(0,0);vec2 i10=i+vec2(1,0);vec2 i01=i+vec2(0,1);vec2 i11=i+vec2(1,1);
  if(tile){i00=mod(i00,per);i10=mod(i10,per);i01=mod(i01,per);i11=mod(i11,per);}
  return mix(mix(hash2(i00),hash2(i10),u.x),mix(hash2(i01),hash2(i11),u.x),u.y);
}
vec2 grad2i(float h){
  float k = mod(h, 8.0);
  float d = 0.70710678118;
  if(k < 0.5) return vec2( 1.0,  0.0);
  if(k < 1.5) return vec2(-1.0,  0.0);
  if(k < 2.5) return vec2( 0.0,  1.0);
  if(k < 3.5) return vec2( 0.0, -1.0);
  if(k < 4.5) return vec2( d,    d);
  if(k < 5.5) return vec2(-d,    d);
  if(k < 6.5) return vec2( d,   -d);
  return vec2(-d,   -d);
}
float hash2i(vec2 i, float seed){
  // Deterministic float hash; WGSL path uses integer hash2i_u32 for strict u32 behavior.
  return floor(fract(sin(dot(i + vec2(seed, seed*1.37), vec2(127.1, 311.7))) * 43758.5453123) * 8.0);
}
float perlin2i_raw(vec2 p, float seed){
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 g00=grad2i(hash2i(i+vec2(0,0), seed));
  vec2 g10=grad2i(hash2i(i+vec2(1,0), seed));
  vec2 g01=grad2i(hash2i(i+vec2(0,1), seed));
  vec2 g11=grad2i(hash2i(i+vec2(1,1), seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i(vec2 p, float seed){
  return clamp(perlin2i_raw(p, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2i_tiled_raw(vec2 p, float per, float seed){
  float perSafe = max(1.0, floor(per + 0.5));
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 i00=mod(i+vec2(0,0), perSafe);
  vec2 i10=mod(i+vec2(1,0), perSafe);
  vec2 i01=mod(i+vec2(0,1), perSafe);
  vec2 i11=mod(i+vec2(1,1), perSafe);
  vec2 g00=grad2i(hash2i(i00, seed));
  vec2 g10=grad2i(hash2i(i10, seed));
  vec2 g01=grad2i(hash2i(i01, seed));
  vec2 g11=grad2i(hash2i(i11, seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i_tiled(vec2 p, float per, float seed){
  return clamp(perlin2i_tiled_raw(p, per, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2_disordered(vec2 p0, float seed, float disorder, float disorderSpeed, float time){
  float t = time * disorderSpeed;
  float w1 = perlin2i_raw(p0 + vec2(17.0,53.0) + vec2( t*0.73, -t*0.41), seed + 101.0);
  float w2 = perlin2i_raw(p0 + vec2(113.0,7.0) + vec2(-t*0.29,  t*0.87), seed + 211.0);
  vec2 w = vec2(w1, w2);
  return perlin2i(p0 + disorder * w, seed);
}
float fbm(vec2 p,float oct,float per,float tileFlag){
  float v=0.,a=.5,mx=0.;
  bool tile = tileFlag > 0.5;
  for(int i=0;i<8;i++){
    float m = step(float(i) + 0.5, oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p*=2.; per*=2.; a*=.5;
  }
  return mx>0.?v/mx:0.;
}

vec4 voro(vec2 p,float jt,float per,bool tile){
  vec2 n=floor(p);vec2 f=fract(p);if(tile){n=mod(n,per);}
  float f1=8.;float f2=8.;vec2 id=vec2(0.);
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){
    vec2 g=vec2(float(i),float(j));vec2 neighbor=n+g;if(tile)neighbor=mod(neighbor,per);
    vec2 o=hash22(neighbor);vec2 r=g+o*jt-f;float d=dot(r,r);
    if(d<f1){f2=f1;f1=d;id=o;}else if(d<f2){f2=d;}
  }
  f1=sqrt(f1);f2=sqrt(f2);return vec4(f1,f2,f2-f1,id.x);
}

// SDFs
float sdCircle(vec2 p, float r) { return length(p) - r; }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
float sdEquilateralTriangle(vec2 p, float r) { const float k = sqrt(3.0); p.x = abs(p.x) - r; p.y = p.y + r/k; if(p.x+k*p.y>0.0) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0; p.x -= clamp(p.x, -2.0*r, 0.0); return -length(p)*sign(p.y); }
float sdPolygon(vec2 p, float r, int n) { float an = 3.141593/float(n); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*vec2(cos(an),sin(an)); p.y += clamp(-p.y, 0.0, r*tan(an)); return length(p)*sign(p.x); }
float sdStar(vec2 p, float r, int n, float m) { float an = 3.141593/float(n); float en = 3.141593/m;  vec2  acs = vec2(cos(an),sin(an)); vec2  ecs = vec2(cos(en),sin(en)); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*acs; p += ecs*clamp(-dot(p,ecs), 0.0, r*acs.y/ecs.y); return length(p)*sign(p.x); }
`;

// ── WGSL helper functions ───────────────────────────────────────────

const DEFAULT_WGSL = `
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;
fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }

struct VSOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut; out.pos = vec4f(p[vi], 0, 1); out.uv = p[vi] * 0.5 + 0.5; return out;
}
@fragment fn fs_main(inp: VSOut) -> @location(0) vec4f { return vec4f(0, 0, 0, 1); }
`;
