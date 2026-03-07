import { GraphData, NodeData, EdgeData, FrameData } from './types';
import { NODE_REGISTRY } from './registry';
import { isOutputNodeType } from './output';

export const SCHEMA_VERSION = 2;

export interface GraphIRMeta {
  name: string;
  created: number;
  modified: number;
}

export interface GraphIR {
  schemaVersion: number;
  nodes: NodeData[];
  edges: EdgeData[];
  frames: FrameData[];
  resolution: number;
  meta: GraphIRMeta;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

export interface IRValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

export function validateIR(ir: GraphIR): IRValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (ir.schemaVersion == null) errors.push('Missing schemaVersion');
  if (!Array.isArray(ir.nodes)) { errors.push('nodes must be an array'); return { ok: false, errors, warnings }; }
  if (!Array.isArray(ir.edges)) { errors.push('edges must be an array'); return { ok: false, errors, warnings }; }
  if (!Array.isArray(ir.frames)) { errors.push('frames must be an array'); return { ok: false, errors, warnings }; }

  const nodeIds = new Set<string>();
  for (const n of ir.nodes) {
    if (!n.id || !n.type) { errors.push(`Node missing id or type`); continue; }
    if (nodeIds.has(n.id)) errors.push(`Duplicate node id "${n.id}"`);
    nodeIds.add(n.id);
    if (!NODE_REGISTRY[n.type]) warnings.push(`Unknown node type "${n.type}"`);
  }

  const edgeIds = new Set<string>();
  for (const e of ir.edges) {
    if (!e.id) { errors.push('Edge missing id'); continue; }
    if (edgeIds.has(e.id)) errors.push(`Duplicate edge id "${e.id}"`);
    edgeIds.add(e.id);
    if (!nodeIds.has(e.fromId)) errors.push(`Edge ${e.id}: fromId "${e.fromId}" not found`);
    if (!nodeIds.has(e.toId)) errors.push(`Edge ${e.id}: toId "${e.toId}" not found`);
  }

  const hasOutput = ir.nodes.some(n => isOutputNodeType(n.type));
  if (!hasOutput) warnings.push('Graph has no output node');

  const frameIds = new Set<string>();
  for (const frame of ir.frames) {
    if (!frame.id) {
      errors.push('Frame missing id');
      continue;
    }
    if (frameIds.has(frame.id)) errors.push(`Duplicate frame id "${frame.id}"`);
    frameIds.add(frame.id);
  }

  return { ok: errors.length === 0, errors, warnings };
}

// ---------------------------------------------------------------------------
// Migration (older schemas → current)
// ---------------------------------------------------------------------------

export function migrateIR(raw: any): GraphIR {
  const version: number = raw.schemaVersion ?? raw.version ?? 1;

  if (version >= SCHEMA_VERSION) {
    return {
      schemaVersion: raw.schemaVersion ?? SCHEMA_VERSION,
      nodes: raw.nodes ?? [],
      edges: raw.edges ?? [],
      frames: (raw.frames ?? []).map((f: any) => ({
        id: f.id,
        x: f.x ?? 0,
        y: f.y ?? 0,
        width: f.width ?? 280,
        height: f.height ?? 180,
        label: typeof f.label === 'string' && f.label.length > 0 ? f.label : 'Frame',
        color: typeof f.color === 'string' ? f.color : undefined,
      })),
      resolution: raw.resolution ?? 512,
      meta: raw.meta ?? { name: 'Untitled', created: Date.now(), modified: Date.now() },
    };
  }

  // v1 → v2: add meta, normalize resolution, ensure schemaVersion
  return {
    schemaVersion: SCHEMA_VERSION,
    nodes: (raw.nodes ?? []).map((n: any) => ({
      id: n.id,
      type: n.type,
      x: n.x ?? 0,
      y: n.y ?? 0,
      params: n.params ?? {},
    })),
    edges: (raw.edges ?? []).map((e: any) => ({
      id: e.id,
      fromId: e.fromId,
      fromPort: e.fromPort ?? 0,
      toId: e.toId,
      toPort: e.toPort ?? 0,
    })),
    frames: (raw.frames ?? []).map((f: any) => ({
      id: f.id,
      x: f.x ?? 0,
      y: f.y ?? 0,
      width: f.width ?? 280,
      height: f.height ?? 180,
      label: typeof f.label === 'string' && f.label.length > 0 ? f.label : 'Frame',
      color: typeof f.color === 'string' ? f.color : undefined,
    })),
    resolution: raw.resolution ?? 512,
    meta: {
      name: raw.name ?? 'Untitled',
      created: raw.created ?? Date.now(),
      modified: Date.now(),
    },
  };
}

// ---------------------------------------------------------------------------
// Factory
// ---------------------------------------------------------------------------

export function createEmptyIR(outputX = 600, outputY = 200): GraphIR {
  return {
    schemaVersion: SCHEMA_VERSION,
    nodes: [
      { id: 'out_base', type: 'output_baseColor', x: outputX, y: outputY - 350, params: {} },
      { id: 'out_rough', type: 'output_roughness', x: outputX, y: outputY - 210, params: {} },
      { id: 'out_normal', type: 'output_normal', x: outputX, y: outputY - 70, params: {} },
      { id: 'out_metal', type: 'output_metallic', x: outputX, y: outputY + 70, params: {} },
      { id: 'out_ao', type: 'output_ao', x: outputX, y: outputY + 210, params: {} },
      { id: 'out_height', type: 'output_height', x: outputX, y: outputY + 350, params: {} }
    ],
    edges: [],
    frames: [],
    resolution: 512,
    meta: { name: 'Untitled', created: Date.now(), modified: Date.now() },
  };
}

// ---------------------------------------------------------------------------
// Serialization
// ---------------------------------------------------------------------------

export function serializeIR(ir: GraphIR): string {
  const snapshot: GraphIR = {
    ...ir,
    meta: { ...ir.meta, modified: Date.now() },
  };
  return JSON.stringify(snapshot, null, 2);
}

export function deserializeIR(json: string): GraphIR {
  return migrateIR(JSON.parse(json));
}

// ---------------------------------------------------------------------------
// Interop with legacy GraphData
// ---------------------------------------------------------------------------

export function fromGraphData(data: GraphData, resolution?: number): GraphIR {
  return {
    schemaVersion: SCHEMA_VERSION,
    nodes: data.nodes,
    edges: data.edges,
    frames: data.frames ?? [],
    resolution: resolution ?? data.resolution ?? 512,
    meta: { name: 'Untitled', created: Date.now(), modified: Date.now() },
  };
}

export function toGraphData(ir: GraphIR): GraphData {
  return {
    schemaVersion: ir.schemaVersion,
    nodes: ir.nodes,
    edges: ir.edges,
    frames: ir.frames,
    resolution: ir.resolution,
  };
}
