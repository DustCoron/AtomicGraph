import { GraphIR } from './graph-ir';
import { TypedGraph, TypedNode, buildTypedGraph, getSubgraph } from './ir';

// ---------------------------------------------------------------------------
// Execution Plan — sits between TypedIR and code generation
// ---------------------------------------------------------------------------

export interface NodePlan {
  nodeId: string;
  type: string;
  cacheKey: string;
  isConstant: boolean;
  dirty: boolean;
  directDeps: string[];
}

export interface ExecutionPlan {
  nodes: NodePlan[];
  typedGraph: TypedGraph;
  hash: string;
}

// ---------------------------------------------------------------------------
// Hashing
// ---------------------------------------------------------------------------

function fnv1a(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

function nodeContentKey(tn: TypedNode, upstreamKeys: Map<string, string>, directDeps: string[]): string {
  const parts: string[] = [tn.type, JSON.stringify(tn.params)];
  for (const dep of directDeps) {
    const k = upstreamKeys.get(dep);
    if (k) parts.push(k);
  }
  return fnv1a(parts.join('|'));
}

// ---------------------------------------------------------------------------
// Build plan
// ---------------------------------------------------------------------------

export function buildPlan(ir: GraphIR, prev?: ExecutionPlan): ExecutionPlan {
  const tg = buildTypedGraph(ir);

  const prevKeys = new Map<string, string>();
  if (prev) for (const np of prev.nodes) prevKeys.set(np.nodeId, np.cacheKey);

  const cacheKeys = new Map<string, string>();
  const nodes: NodePlan[] = [];

  for (const id of tg.order) {
    const tn = tg.nodes.get(id)!;
    const dd = tg.directDeps.get(id) ?? [];
    const ck = nodeContentKey(tn, cacheKeys, dd);
    cacheKeys.set(id, ck);

    nodes.push({
      nodeId: id,
      type: tn.type,
      cacheKey: ck,
      isConstant: tn.isConstant,
      dirty: prevKeys.get(id) !== ck,
      directDeps: dd,
    });
  }

  const hash = fnv1a(nodes.map(n => n.cacheKey).join(':'));
  return { nodes, typedGraph: tg, hash };
}

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export function getDirtyNodes(plan: ExecutionPlan): string[] {
  return plan.nodes.filter(n => n.dirty).map(n => n.nodeId);
}

export function getSubgraphPlan(plan: ExecutionPlan, targetId: string): NodePlan[] {
  const ids = getSubgraph(plan.typedGraph, targetId);
  return plan.nodes.filter(n => ids.has(n.nodeId));
}

export function isGraphDirty(plan: ExecutionPlan): boolean {
  return plan.nodes.some(n => n.dirty);
}
