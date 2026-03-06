import { DataType, EdgeData, GraphData } from '../types';

export type HoverTarget =
  | { kind: 'canvas' }
  | { kind: 'node'; nodeId: string }
  | { kind: 'edge'; edgeId: string }
  | { kind: 'port'; nodeId: string; portIndex: number; direction: 'in' | 'out'; type?: DataType }
  | { kind: 'frame'; frameId: string };

export interface EditorSelection {
  nodeIds: string[];
  edgeIds: string[];
}

export interface EditorClipboard {
  node?: {
    type: string;
    x: number;
    y: number;
    params: Record<string, any>;
  } | null;
}

export interface AddNodeIntent {
  origin: 'canvas' | 'edge' | 'port';
  graphX: number;
  graphY: number;
  edgeId?: string;
  port?: { nodeId: string; portIndex: number; direction: 'in' | 'out'; type?: DataType };
}

export interface EditorActions {
  openNodePicker: (intent: AddNodeIntent) => void;
  closeContextMenu: () => void;
  frameAll: () => void;
  resetView: () => void;
  addNodeAt: (type: string, graphX: number, graphY: number) => string | null;
  removeNode: (nodeId: string) => void;
  duplicateNode: (nodeId: string) => string | null;
  copyNode: (nodeId: string) => void;
  copyNodeParams: (nodeId: string) => void;
  pasteNodeParams: (nodeId: string) => void;
  resetNodeParams: (nodeId: string) => void;
  canPasteNodeParams: (nodeId: string) => boolean;
  pasteNodeAt: (graphX: number, graphY: number) => string | null;
  removeEdge: (edgeId: string) => void;
  getEdgeById: (edgeId: string) => EdgeData | undefined;
  connect: (fromId: string, toId: string, toPort: number, fromPort?: number) => boolean;
  insertNodeOnEdge: (edgeId: string, nodeType: string, graphX: number, graphY: number) => string | null;
  addNodeFromPort: (port: { nodeId: string; portIndex: number; direction: 'in' | 'out' }, nodeType: string, graphX: number, graphY: number) => string | null;
  undo: () => void;
  redo: () => void;
  pinPreviewToNode?: (nodeId: string | null) => void;
  toggleChaosMode?: () => void;
  stepChaosModeOnce?: () => void;
}

export interface OperatorContext {
  graph: GraphData;
  selection: EditorSelection;
  hover: HoverTarget;
  mouse: { x: number; y: number; graphX: number; graphY: number };
  clipboard: EditorClipboard;
  mode: 'graph';
  actions: EditorActions;
}

export interface Operator<TArgs = any> {
  id: string;
  label: string;
  category: string;
  keywords: string[];
  shortcut?: string;
  enabled?: (ctx: OperatorContext) => boolean;
  visible?: (ctx: OperatorContext) => boolean;
  run: (ctx: OperatorContext, args?: TArgs) => void | Promise<void>;
}
