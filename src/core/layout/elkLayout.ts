import { EdgeData, NodeData } from '../types';
import { NODE_REGISTRY } from '../registry';

type LayoutDirection = 'RIGHT' | 'LEFT' | 'DOWN' | 'UP';
type EdgeRouting = 'ORTHOGONAL' | 'POLYLINE' | 'SPLINES';

export interface AutoLayoutOptions {
  direction?: LayoutDirection;
  layerSpacing?: number;
  nodeSpacing?: number;
  edgeRouting?: EdgeRouting;
  includePorts?: boolean;
  padding?: number;
}

export interface LayoutPoint {
  x: number;
  y: number;
}

export interface AutoLayoutResult {
  nodePositions: Record<string, { x: number; y: number }>;
  edgeRoutes?: Record<string, LayoutPoint[][]>;
}

let elkInstancePromise: Promise<any> | null = null;

async function getElkInstance() {
  if (!elkInstancePromise) {
    elkInstancePromise = import('elkjs/lib/elk.bundled.js').then((mod: any) => {
      const ElkCtor = mod?.default || mod;
      return new ElkCtor();
    });
  }
  return elkInstancePromise;
}

const NODE_WIDTH = 210;
const REMOTE_WIDTH = 240;
const HEADER_H = 36;
const PREVIEW_H = 128 + 12;
const ROW_H = 28;
const NODE_FOOTER_H = 10;
const REMOTE_HEIGHT = HEADER_H + ROW_H * 3 + 48 + 10;

function getNodeSize(node: NodeData): { width: number; height: number } {
  if (node.type === 'remote') return { width: REMOTE_WIDTH, height: REMOTE_HEIGHT };
  const def = NODE_REGISTRY[node.type];
  if (!def) return { width: NODE_WIDTH, height: HEADER_H + ROW_H + NODE_FOOTER_H };
  const inputAndParamRows = def.inputs.length + Object.keys(def.params || {}).length;
  const outputRows = def.outputs?.length ?? 1;
  const rows = Math.max(inputAndParamRows, outputRows, 1);
  return { width: NODE_WIDTH, height: HEADER_H + PREVIEW_H + rows * ROW_H + NODE_FOOTER_H };
}

function toNum(value: unknown, fallback = 0): number {
  const v = Number(value);
  return Number.isFinite(v) ? v : fallback;
}

function extractRoutes(layoutRoot: any): Record<string, LayoutPoint[][]> {
  const allEdges: any[] = [];
  const walk = (node: any) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.edges)) allEdges.push(...node.edges);
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  walk(layoutRoot);

  const routes: Record<string, LayoutPoint[][]> = {};
  for (const edge of allEdges) {
    if (!edge?.id || !Array.isArray(edge.sections)) continue;
    const sections = edge.sections
      .map((section: any): LayoutPoint[] => {
        const points: LayoutPoint[] = [];
        if (section?.startPoint) points.push({ x: toNum(section.startPoint.x), y: toNum(section.startPoint.y) });
        if (Array.isArray(section?.bendPoints)) {
          for (const bp of section.bendPoints) points.push({ x: toNum(bp?.x), y: toNum(bp?.y) });
        }
        if (section?.endPoint) points.push({ x: toNum(section.endPoint.x), y: toNum(section.endPoint.y) });
        return points.filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
      })
      .filter((pts: LayoutPoint[]) => pts.length >= 2);
    if (sections.length > 0) routes[edge.id] = sections;
  }
  return routes;
}

export async function autoLayout(
  nodes: NodeData[],
  edges: EdgeData[],
  options: AutoLayoutOptions = {}
): Promise<AutoLayoutResult> {
  const direction = options.direction ?? 'RIGHT';
  const layerSpacing = Math.max(20, Math.round(options.layerSpacing ?? 96));
  const nodeSpacing = Math.max(20, Math.round(options.nodeSpacing ?? 56));
  const edgeRouting = options.edgeRouting ?? 'ORTHOGONAL';
  const includePorts = options.includePorts ?? true;
  const padding = Math.max(0, Math.round(options.padding ?? 24));

  const sortedNodes = [...nodes].sort((a, b) => a.id.localeCompare(b.id));
  const sortedEdges = [...edges].sort((a, b) => a.id.localeCompare(b.id));
  const childrenById = new Map<string, any>();

  const children = sortedNodes.map((node) => {
    const size = getNodeSize(node);
    const def = NODE_REGISTRY[node.type];
    const inputCount = def?.inputs?.length ?? 0;
    const outputCount = def?.outputs?.length ?? 0;
    const child: any = {
      id: node.id,
      width: size.width,
      height: size.height,
      layoutOptions: includePorts
        ? {
            'org.eclipse.elk.portConstraints': 'FIXED_ORDER',
          }
        : undefined,
    };
    if (includePorts) {
      const ports: any[] = [];
      for (let i = 0; i < inputCount; i++) {
        ports.push({
          id: `${node.id}:in:${i}`,
          width: 10,
          height: 10,
          layoutOptions: { 'org.eclipse.elk.port.side': 'WEST' },
        });
      }
      for (let i = 0; i < outputCount; i++) {
        ports.push({
          id: `${node.id}:out:${i}`,
          width: 10,
          height: 10,
          layoutOptions: { 'org.eclipse.elk.port.side': 'EAST' },
        });
      }
      child.ports = ports;
    }
    childrenById.set(node.id, child);
    return child;
  });

  const elkEdges = sortedEdges.map((edge) => {
    const fromNode = childrenById.get(edge.fromId);
    const toNode = childrenById.get(edge.toId);
    const sourcePort = `${edge.fromId}:out:${edge.fromPort}`;
    const targetPort = `${edge.toId}:in:${edge.toPort}`;
    const sourceRef = includePorts && fromNode?.ports?.some((p: any) => p.id === sourcePort) ? sourcePort : edge.fromId;
    const targetRef = includePorts && toNode?.ports?.some((p: any) => p.id === targetPort) ? targetPort : edge.toId;
    return {
      id: edge.id,
      sources: [sourceRef],
      targets: [targetRef],
    };
  });

  const elkGraph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': direction,
      'elk.edgeRouting': edgeRouting,
      'elk.spacing.nodeNode': String(nodeSpacing),
      'elk.layered.spacing.nodeNodeBetweenLayers': String(layerSpacing),
      'elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
      'elk.layered.crossingMinimization.forceNodeModelOrder': 'true',
      'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
      'elk.padding': `[top=${padding},left=${padding},bottom=${padding},right=${padding}]`,
    },
    children,
    edges: elkEdges,
  };

  const elk = await getElkInstance();
  const layouted = await elk.layout(elkGraph as any);
  if (!layouted || !Array.isArray((layouted as any).children)) {
    throw new Error('ELK layout returned an invalid graph.');
  }

  const nodePositions: Record<string, { x: number; y: number }> = {};
  for (const child of (layouted as any).children as Array<any>) {
    if (!child?.id) continue;
    nodePositions[child.id] = {
      x: toNum(child.x),
      y: toNum(child.y),
    };
  }

  return {
    nodePositions,
    edgeRoutes: extractRoutes(layouted),
  };
}
