
import { EdgeData, FrameData, GraphData, NodeData, ValidationResult } from './types';
import { getNodeDefinitionV2, NODE_REGISTRY } from './registry';

export class GraphEngine {
  nodes: Map<string, NodeData> = new Map();
  edges: Map<string, EdgeData> = new Map();
  frames: Map<string, FrameData> = new Map();
  edgesByTargetPort: Map<string, string> = new Map();
  resolution: number | null = null;
  lastValidationError: string | null = null;

  constructor(initialData?: GraphData) {
    if (initialData) {
      initialData.nodes.forEach(n => this.nodes.set(n.id, n));
      initialData.edges.forEach((e) => this.linkEdge(e));
      (initialData.frames || []).forEach((f) => this.frames.set(f.id, { ...f }));
      if (initialData.resolution) this.resolution = initialData.resolution;
    }
  }

  setResolution(res: number | null) {
    this.resolution = res;
  }

  addNode(type: string, x: number, y: number): NodeData | null {
    const def = NODE_REGISTRY[type];
    if (!def) return null;
    
    const id = Math.random().toString(36).slice(2, 9);
    const params: Record<string, any> = {};
    for (const [k, v] of Object.entries(def.params)) {
      params[k] = v.default;
    }

    const node: NodeData = { id, type, x, y, params };
    this.nodes.set(id, node);
    return node;
  }

  removeNode(id: string) {
    this.nodes.delete(id);
    // Remove connected edges
    for (const [eid, edge] of this.edges) {
      if (edge.fromId === id || edge.toId === id) {
        this.unlinkEdge(eid);
      }
    }
  }

  addFrame(x: number, y: number, width = 420, height = 260, label = 'Frame', color = '#4d78bc'): FrameData {
    const id = Math.random().toString(36).slice(2, 9);
    const frame: FrameData = {
      id,
      x,
      y,
      width: Math.max(140, width),
      height: Math.max(100, height),
      label,
      color,
    };
    this.frames.set(id, frame);
    return frame;
  }

  moveFrame(id: string, x: number, y: number) {
    const frame = this.frames.get(id);
    if (!frame) return;
    frame.x = x;
    frame.y = y;
  }

  resizeFrame(id: string, width: number, height: number) {
    const frame = this.frames.get(id);
    if (!frame) return;
    frame.width = Math.max(140, width);
    frame.height = Math.max(100, height);
  }

  updateFrame(id: string, patch: Partial<Omit<FrameData, 'id'>>) {
    const frame = this.frames.get(id);
    if (!frame) return;
    const next: FrameData = { ...frame, ...patch };
    next.width = Math.max(140, next.width);
    next.height = Math.max(100, next.height);
    this.frames.set(id, next);
  }

  removeFrame(id: string) {
    this.frames.delete(id);
  }

  private targetKey(toId: string, toPort: number) {
    return `${toId}:${toPort}`;
  }

  private linkEdge(edge: EdgeData) {
    this.edges.set(edge.id, edge);
    this.edgesByTargetPort.set(this.targetKey(edge.toId, edge.toPort), edge.id);
  }

  private unlinkEdge(id: string) {
    const edge = this.edges.get(id);
    if (!edge) return;
    this.edgesByTargetPort.delete(this.targetKey(edge.toId, edge.toPort));
    this.edges.delete(id);
  }

  validateConnection(fromId: string, fromPort: number, toId: string, toPort: number): ValidationResult {
    const fromNode = this.nodes.get(fromId);
    const toNode = this.nodes.get(toId);
    if (!fromNode || !toNode) return { ok: false, error: 'Connection endpoints not found.' };

    const fromDef = getNodeDefinitionV2(fromNode.type);
    const toDef = getNodeDefinitionV2(toNode.type);
    if (!fromDef || !toDef) return { ok: false, error: 'Node definition not found.' };

    const fromPortDef = fromDef.outputs[fromPort];
    const toPortDef = toDef.inputs[toPort];
    if (!fromPortDef) return { ok: false, error: `Output port ${fromPort} is invalid for ${fromNode.type}.` };
    if (!toPortDef) return { ok: false, error: `Input port ${toPort} is invalid for ${toNode.type}.` };

    const allowed = toPortDef.constraints?.allowedTypes && toPortDef.constraints.allowedTypes.length > 0
      ? toPortDef.constraints.allowedTypes
      : [toPortDef.type];

    if (!allowed.includes(fromPortDef.type)) {
      return {
        ok: false,
        error: `Type mismatch: cannot connect ${fromPortDef.type} to ${toPortDef.type} (${toNode.type}.${toPortDef.id}).`
      };
    }

    if (this.createsCycle(fromId, toId)) {
      return { ok: false, error: 'Cycle detected.' };
    }

    return { ok: true };
  }

  addEdge(fromId: string, toId: string, toPort: number, fromPort: number = 0): EdgeData | null {
    const validation = this.validateConnection(fromId, fromPort, toId, toPort);
    if (!validation.ok) {
      this.lastValidationError = validation.error || 'Invalid connection.';
      console.warn(this.lastValidationError);
      return null;
    }
    this.lastValidationError = null;

    // Check for cycles
    // Remove existing edge to this input port (single input rule)
    const existingEdgeId = this.edgesByTargetPort.get(this.targetKey(toId, toPort));
    if (existingEdgeId) {
      this.unlinkEdge(existingEdgeId);
    }

    const id = Math.random().toString(36).slice(2, 9);
    const edge: EdgeData = { id, fromId, fromPort, toId, toPort };
    this.linkEdge(edge);
    return edge;
  }

  removeEdge(id: string) {
    this.unlinkEdge(id);
  }

  updateParam(nodeId: string, param: string, value: any) {
    const node = this.nodes.get(nodeId);
    if (node) {
      node.params = { ...node.params, [param]: value };
    }
  }

  moveNode(id: string, x: number, y: number) {
    const node = this.nodes.get(id);
    if (node) {
      node.x = x;
      node.y = y;
    }
  }

  // Topological Sort (Kahn's Algorithm)
  getExecutionOrder(): string[] {
    const sorted: string[] = [];
    const inDegree = new Map<string, number>();
    const adj = new Map<string, string[]>();

    // Initialize
    for (const id of this.nodes.keys()) {
      inDegree.set(id, 0);
      adj.set(id, []);
    }

    // Build graph
    for (const edge of this.edges.values()) {
      // from -> to
      const from = edge.fromId;
      const to = edge.toId;
      if (adj.has(from) && inDegree.has(to)) {
        adj.get(from)!.push(to);
        inDegree.set(to, inDegree.get(to)! + 1);
      }
    }

    // Queue of nodes with 0 in-degree
    const queue: string[] = [];
    for (const [id, deg] of inDegree) {
      if (deg === 0) queue.push(id);
    }

    while (queue.length > 0) {
      const u = queue.shift()!;
      sorted.push(u);

      for (const v of adj.get(u)!) {
        inDegree.set(v, inDegree.get(v)! - 1);
        if (inDegree.get(v) === 0) {
          queue.push(v);
        }
      }
    }

    // If sorted length != nodes size, there's a cycle (should be prevented by addEdge, but good sanity check)
    if (sorted.length !== this.nodes.size) {
      console.error("Cycle detected in graph sort");
      return [];
    }

    return sorted;
  }

  createsCycle(fromId: string, toId: string): boolean {
    if (fromId === toId) return true;
    
    const visited = new Set<string>();
    const stack = [fromId];
    
    // We want to check if adding from->to creates a path from 'to' back to 'from'
    // So we search backwards from 'from' to see if we can reach 'to'
    // Wait, if we add A -> B, we check if B can reach A.
    
    const canReach = (start: string, target: string): boolean => {
      const q = [start];
      const seen = new Set<string>();
      while (q.length > 0) {
        const curr = q.shift()!;
        if (curr === target) return true;
        if (seen.has(curr)) continue;
        seen.add(curr);
        
        // Find all nodes that 'curr' points to
        for (const edge of this.edges.values()) {
          if (edge.fromId === curr) {
            q.push(edge.toId);
          }
        }
      }
      return false;
    };

    return canReach(toId, fromId);
  }

  serialize(): GraphData {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: Array.from(this.edges.values()),
      frames: Array.from(this.frames.values()),
      resolution: this.resolution
    };
  }
}
