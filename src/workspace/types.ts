export interface ViewInstance {
  id: string;
  type: string;
  title: string;
}

export interface PanelNode {
  kind: 'panel';
  id: string;
  tabs: ViewInstance[];
  activeTabId: string | null;
  pinned: boolean;
}

export interface SplitNode {
  kind: 'split';
  id: string;
  direction: 'horizontal' | 'vertical';
  ratio: number;
  children: [LayoutNode, LayoutNode];
}

export type LayoutNode = SplitNode | PanelNode;

export interface FloatingPanel {
  id: string;
  panel: PanelNode;
  x: number;
  y: number;
  width: number;
  height: number;
}

export type DropZone = 'left' | 'right' | 'top' | 'bottom' | 'center';

export const uid = () => `d_${Math.random().toString(36).slice(2, 9)}`;

function getSplitChildren(root: LayoutNode): [LayoutNode, LayoutNode] | null {
  const maybeChildren = (root as any).children;
  if (!Array.isArray(maybeChildren) || maybeChildren.length !== 2) return null;
  const [left, right] = maybeChildren;
  if (!left || !right) return null;
  return [left as LayoutNode, right as LayoutNode];
}

export function findPanel(root: LayoutNode, panelId: string): PanelNode | null {
  if (root.kind === 'panel') return root.id === panelId ? root : null;
  const children = getSplitChildren(root);
  if (!children) return null;
  return findPanel(children[0], panelId) || findPanel(children[1], panelId);
}

export function findFirstPanel(root: LayoutNode): PanelNode | null {
  if (root.kind === 'panel') return root;
  const children = getSplitChildren(root);
  if (!children) return null;
  return findFirstPanel(children[0]);
}

export function mapPanels(root: LayoutNode, fn: (p: PanelNode) => PanelNode): LayoutNode {
  if (root.kind === 'panel') return fn(root);
  const children = getSplitChildren(root);
  if (!children) return root;
  return { ...root, children: [mapPanels(children[0], fn), mapPanels(children[1], fn)] };
}

export function updatePanel(root: LayoutNode, panelId: string, fn: (p: PanelNode) => PanelNode): LayoutNode {
  return mapPanels(root, p => p.id === panelId ? fn(p) : p);
}

export function removeNode(root: LayoutNode, nodeId: string): LayoutNode | null {
  if (root.id === nodeId) return null;
  if (root.kind === 'panel') return root;
  const children = getSplitChildren(root);
  if (!children) return root;
  const [leftNode, rightNode] = children;
  if (leftNode.id === nodeId) return rightNode;
  if (rightNode.id === nodeId) return leftNode;
  const left = removeNode(leftNode, nodeId);
  const right = removeNode(rightNode, nodeId);
  if (!left) return rightNode;
  if (!right) return leftNode;
  return { ...root, children: [left, right] };
}

export function replaceNode(root: LayoutNode, nodeId: string, replacement: LayoutNode): LayoutNode {
  if (root.id === nodeId) return replacement;
  if (root.kind === 'panel') return root;
  const children = getSplitChildren(root);
  if (!children) return root;
  return {
    ...root,
    children: [
      replaceNode(children[0], nodeId, replacement),
      replaceNode(children[1], nodeId, replacement),
    ],
  };
}

export function insertSplit(
  root: LayoutNode,
  targetId: string,
  direction: 'horizontal' | 'vertical',
  position: 'before' | 'after',
  newNode: LayoutNode,
  ratio = 0.5
): LayoutNode {
  if (root.id === targetId) {
    const split: SplitNode = {
      kind: 'split',
      id: uid(),
      direction,
      ratio: position === 'before' ? 1 - ratio : ratio,
      children: position === 'before' ? [newNode, root] : [root, newNode],
    };
    return split;
  }
  if (root.kind === 'panel') return root;
  const children = getSplitChildren(root);
  if (!children) return root;
  return {
    ...root,
    children: [
      insertSplit(children[0], targetId, direction, position, newNode, ratio),
      insertSplit(children[1], targetId, direction, position, newNode, ratio),
    ],
  };
}

export function collectPanels(root: LayoutNode): PanelNode[] {
  if (root.kind === 'panel') return [root];
  const children = getSplitChildren(root);
  if (!children) return [];
  return [...collectPanels(children[0]), ...collectPanels(children[1])];
}
