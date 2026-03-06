import { registerOperator } from './registry';
import { Operator } from './types';
import { isOutputNodeType } from '../output';

const builtinOperators: Operator[] = [
  {
    id: 'edit.undo',
    label: 'Undo',
    category: 'Edit',
    keywords: ['undo', 'history', 'back'],
    shortcut: 'Ctrl+Z',
    visible: () => true,
    run: (ctx) => ctx.actions.undo()
  },
  {
    id: 'edit.redo',
    label: 'Redo',
    category: 'Edit',
    keywords: ['redo', 'history', 'forward'],
    shortcut: 'Ctrl+Y',
    visible: () => true,
    run: (ctx) => ctx.actions.redo()
  },
  {
    id: 'graph.add_node',
    label: 'Add Node...',
    category: 'Graph',
    keywords: ['create', 'new', 'node', 'add'],
    shortcut: 'Shift+A',
    visible: () => true,
    run: (ctx) => {
      const origin =
        ctx.hover.kind === 'edge' ? 'edge' :
        ctx.hover.kind === 'port' ? 'port' :
        'canvas';
      ctx.actions.openNodePicker({
        origin,
        graphX: ctx.mouse.graphX,
        graphY: ctx.mouse.graphY,
        edgeId: ctx.hover.kind === 'edge' ? ctx.hover.edgeId : undefined,
        port: ctx.hover.kind === 'port' ? {
          nodeId: ctx.hover.nodeId,
          portIndex: ctx.hover.portIndex,
          direction: ctx.hover.direction,
          type: ctx.hover.type
        } : undefined
      });
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.copy',
    label: 'Copy',
    category: 'Edit',
    keywords: ['copy', 'clipboard'],
    shortcut: 'Ctrl+C',
    visible: (ctx) => ctx.selection.nodeIds.length > 0 || ctx.hover.kind === 'node',
    enabled: (ctx) => {
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      const node = ctx.graph.nodes.find((n) => n.id === id);
      return !!node && !isOutputNodeType(node.type);
    },
    run: (ctx) => {
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      if (!id) return;
      ctx.actions.copyNode(id);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.paste',
    label: 'Paste',
    category: 'Edit',
    keywords: ['paste', 'clipboard'],
    shortcut: 'Ctrl+V',
    visible: () => true,
    enabled: (ctx) => !!ctx.clipboard.node,
    run: (ctx) => {
      ctx.actions.pasteNodeAt(ctx.mouse.graphX, ctx.mouse.graphY);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.duplicate',
    label: 'Duplicate',
    category: 'Edit',
    keywords: ['duplicate', 'clone'],
    shortcut: 'Ctrl+D',
    visible: (ctx) => ctx.selection.nodeIds.length > 0 || ctx.hover.kind === 'node',
    run: (ctx) => {
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      if (!id) return;
      ctx.actions.duplicateNode(id);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.delete',
    label: 'Delete',
    category: 'Edit',
    keywords: ['delete', 'remove'],
    shortcut: 'Del',
    visible: (ctx) => ctx.hover.kind === 'node' || ctx.hover.kind === 'edge' || ctx.selection.nodeIds.length > 0,
    run: (ctx) => {
      if (ctx.hover.kind === 'edge') {
        ctx.actions.removeEdge(ctx.hover.edgeId);
        ctx.actions.closeContextMenu();
        return;
      }
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      if (!id) return;
      ctx.actions.removeNode(id);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.disconnect_edge',
    label: 'Disconnect Link',
    category: 'Link',
    keywords: ['disconnect', 'unlink', 'edge'],
    visible: (ctx) => ctx.hover.kind === 'edge',
    run: (ctx) => {
      if (ctx.hover.kind !== 'edge') return;
      ctx.actions.removeEdge(ctx.hover.edgeId);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.insert_node_on_edge',
    label: 'Insert Node...',
    category: 'Link',
    keywords: ['insert', 'edge', 'reroute'],
    visible: (ctx) => ctx.hover.kind === 'edge',
    run: (ctx) => {
      if (ctx.hover.kind !== 'edge') return;
      ctx.actions.openNodePicker({
        origin: 'edge',
        edgeId: ctx.hover.edgeId,
        graphX: ctx.mouse.graphX,
        graphY: ctx.mouse.graphY
      });
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'graph.add_node_from_port',
    label: 'Add Node from Port...',
    category: 'Link',
    keywords: ['port', 'add', 'connect'],
    visible: (ctx) => ctx.hover.kind === 'port',
    run: (ctx) => {
      if (ctx.hover.kind !== 'port') return;
      ctx.actions.openNodePicker({
        origin: 'port',
        graphX: ctx.mouse.graphX,
        graphY: ctx.mouse.graphY,
        port: {
          nodeId: ctx.hover.nodeId,
          portIndex: ctx.hover.portIndex,
          direction: ctx.hover.direction,
          type: ctx.hover.type
        }
      });
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'view.frame_all',
    label: 'Frame All',
    category: 'View',
    keywords: ['frame', 'view', 'fit'],
    shortcut: 'Home',
    visible: (ctx) => ctx.hover.kind === 'canvas',
    run: (ctx) => {
      ctx.actions.frameAll();
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'view.reset_view',
    label: 'Reset View',
    category: 'View',
    keywords: ['reset', 'view', 'zoom'],
    visible: (ctx) => ctx.hover.kind === 'canvas',
    run: (ctx) => {
      ctx.actions.resetView();
      ctx.actions.closeContextMenu();
    }
  },

  // Preview operators
  {
    id: 'preview.pin_to_node',
    label: 'Pin Preview to Node',
    category: 'Preview',
    keywords: ['pin', 'preview', 'lock', 'node'],
    visible: (ctx) => ctx.hover.kind === 'node' || ctx.selection.nodeIds.length > 0,
    enabled: (ctx) => {
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      const node = ctx.graph.nodes.find(n => n.id === id);
      return !!node && !isOutputNodeType(node.type);
    },
    run: (ctx) => {
      const id = ctx.selection.nodeIds[0] || (ctx.hover.kind === 'node' ? ctx.hover.nodeId : '');
      ctx.actions.pinPreviewToNode?.(id || null);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'preview.unpin',
    label: 'Unpin Preview',
    category: 'Preview',
    keywords: ['unpin', 'preview', 'unlock'],
    visible: () => true,
    run: (ctx) => {
      ctx.actions.pinPreviewToNode?.(null);
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'debug.chaos_toggle',
    label: 'Toggle Chaos Mode',
    category: 'Debug',
    keywords: ['chaos', 'fuzz', 'stress', 'random', 'crash'],
    visible: () => true,
    enabled: (ctx) => !!ctx.actions.toggleChaosMode,
    run: (ctx) => {
      ctx.actions.toggleChaosMode?.();
      ctx.actions.closeContextMenu();
    }
  },
  {
    id: 'debug.chaos_step',
    label: 'Chaos Step Once',
    category: 'Debug',
    keywords: ['chaos', 'fuzz', 'step', 'stress', 'random'],
    visible: () => true,
    enabled: (ctx) => !!ctx.actions.stepChaosModeOnce,
    run: (ctx) => {
      ctx.actions.stepChaosModeOnce?.();
      ctx.actions.closeContextMenu();
    }
  },
];

let initialized = false;
export const ensureBuiltinOperators = () => {
  if (initialized) return;
  initialized = true;
  builtinOperators.forEach(registerOperator);
};
