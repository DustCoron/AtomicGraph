import { DataType, EdgeData } from './types';
import { NODE_REGISTRY } from './registry';
import { GraphIR } from './graph-ir';
import { isOutputNodeType } from './output';

// ---------------------------------------------------------------------------
// Typed IR — resolved types, validated connections, topology
// ---------------------------------------------------------------------------

export interface TypedPort {
  nodeId: string;
  portIndex: number;
  type: DataType;
}

export interface TypedEdge {
  id: string;
  from: TypedPort;
  to: TypedPort;
  castNeeded: boolean;
}

export interface TypedNode {
  id: string;
  type: string;
  params: Record<string, any>;
  inputTypes: (DataType | null)[];
  outputTypes: DataType[];
  isConstant: boolean;
}

export interface TypedGraph {
  nodes: Map<string, TypedNode>;
  edges: TypedEdge[];
  order: string[];
  deps: Map<string, Set<string>>;
  directDeps: Map<string, string[]>;
  outputNodeId: string | null;
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

const TIME_NODES = new Set(['time', 'panner']);

export function buildTypedGraph(ir: GraphIR): TypedGraph {
  const nodeMap = new Map(ir.nodes.map(n => [n.id, n]));

  const inEdges = new Map<string, EdgeData[]>();
  const outEdges = new Map<string, EdgeData[]>();
  for (const e of ir.edges) {
    (inEdges.get(e.toId) ?? (inEdges.set(e.toId, []), inEdges.get(e.toId)!)).push(e);
    (outEdges.get(e.fromId) ?? (outEdges.set(e.fromId, []), outEdges.get(e.fromId)!)).push(e);
  }

  // Kahn's topological sort
  const inDeg = new Map<string, number>();
  for (const n of ir.nodes) inDeg.set(n.id, 0);
  for (const e of ir.edges) inDeg.set(e.toId, (inDeg.get(e.toId) ?? 0) + 1);

  const queue: string[] = [];
  for (const [id, d] of inDeg) { if (d === 0) queue.push(id); }

  const order: string[] = [];
  while (queue.length) {
    const id = queue.shift()!;
    order.push(id);
    for (const e of outEdges.get(id) ?? []) {
      const nd = (inDeg.get(e.toId) ?? 1) - 1;
      inDeg.set(e.toId, nd);
      if (nd === 0) queue.push(e.toId);
    }
  }

  // Transitive + direct dependency maps
  const deps = new Map<string, Set<string>>();
  const directDeps = new Map<string, string[]>();
  for (const id of order) {
    const s = new Set<string>();
    const dd: string[] = [];
    for (const e of inEdges.get(id) ?? []) {
      s.add(e.fromId);
      dd.push(e.fromId);
      for (const d of deps.get(e.fromId) ?? []) s.add(d);
    }
    deps.set(id, s);
    directDeps.set(id, dd);
  }

  // Resolve types
  const typedNodes = new Map<string, TypedNode>();
  for (const id of order) {
    const node = nodeMap.get(id)!;
    const def = NODE_REGISTRY[node.type];

    const inputTypes: (DataType | null)[] = (def?.inputs ?? []).map((_p, i) => {
      const edge = ir.edges.find(e => e.toId === id && e.toPort === i);
      if (!edge) return null;
      const fromDef = NODE_REGISTRY[nodeMap.get(edge.fromId)?.type ?? ''];
      return (fromDef?.outputs[edge.fromPort]?.type as DataType) ?? null;
    });

    const outputTypes = (def?.outputs ?? []).map(o => o.type as DataType);

    const upstreamConst = [...(deps.get(id) ?? [])].every(d => typedNodes.get(d)?.isConstant ?? false);
    const selfConst = !TIME_NODES.has(node.type) && (inEdges.get(id)?.length ?? 0) === 0
      ? node.type === 'constant'
      : upstreamConst && !TIME_NODES.has(node.type);

    typedNodes.set(id, { id, type: node.type, params: node.params, inputTypes, outputTypes, isConstant: selfConst });
  }

  const typedEdges: TypedEdge[] = ir.edges.map(e => {
    const fromDef = NODE_REGISTRY[nodeMap.get(e.fromId)?.type ?? ''];
    const toDef = NODE_REGISTRY[nodeMap.get(e.toId)?.type ?? ''];
    const ft = (fromDef?.outputs[e.fromPort]?.type as DataType) ?? 'float';
    const tt = (toDef?.inputs[e.toPort]?.type as DataType) ?? 'float';
    return { id: e.id, from: { nodeId: e.fromId, portIndex: e.fromPort, type: ft }, to: { nodeId: e.toId, portIndex: e.toPort, type: tt }, castNeeded: ft !== tt };
  });

  const outputNodeId = ir.nodes.find(n => isOutputNodeType(n.type))?.id ?? null;

  return { nodes: typedNodes, edges: typedEdges, order, deps, directDeps, outputNodeId };
}

// ---------------------------------------------------------------------------
// Subgraph extraction — nodes needed to evaluate a given target
// ---------------------------------------------------------------------------

export function getSubgraph(tg: TypedGraph, targetId: string): Set<string> {
  const sub = new Set<string>();
  sub.add(targetId);
  for (const d of tg.deps.get(targetId) ?? []) sub.add(d);
  return sub;
}
