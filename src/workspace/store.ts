import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  LayoutNode, PanelNode, FloatingPanel, DropZone, ViewInstance,
  uid, findPanel, updatePanel, removeNode, insertSplit, collectPanels,
} from './types';

const DEFAULT_LAYOUT: LayoutNode = {
  // Outer split: main workspace on the left (80%), Inspector on the right
  // (20%). Inspector lives in its own column — like the Properties pane in
  // Substance Designer / Houdini / UE5 Material — instead of being a tab in
  // the bottom-left panel where it crowded the graph view.
  kind: 'split',
  id: 'root',
  direction: 'horizontal',
  ratio: 0.80,
  children: [
    {
      // Inner workspace: original two-column graph+explorer / preview+code
      // layout. Kept as a nested split so the Inspector column above sits
      // outside of it cleanly.
      kind: 'split', id: 's-workspace', direction: 'horizontal', ratio: 0.62,
      children: [
        {
          kind: 'split', id: 's-graph-explorer', direction: 'vertical', ratio: 0.78,
          children: [
            {
              kind: 'panel', id: 'p-graph',
              tabs: [{ id: 'v-graph', type: 'graph', title: 'Graph' }],
              activeTabId: 'v-graph', pinned: false,
            },
            {
              kind: 'panel', id: 'p-explorer',
              tabs: [{ id: 'v-explorer', type: 'explorer', title: 'Explorer' }],
              activeTabId: 'v-explorer', pinned: false,
            },
          ],
        },
        {
          kind: 'split', id: 's-preview-code', direction: 'vertical', ratio: 0.50,
          children: [
            {
              kind: 'panel', id: 'p-preview',
              tabs: [
                { id: 'v-preview', type: 'preview', title: '2D Preview' },
                { id: 'v-preview3d', type: 'preview3d', title: '3D Preview' },
              ],
              activeTabId: 'v-preview', pinned: false,
            },
            {
              kind: 'panel', id: 'p-code',
              tabs: [{ id: 'v-code', type: 'code', title: 'Code' }],
              activeTabId: 'v-code', pinned: false,
            },
          ],
        },
      ],
    },
    {
      kind: 'panel', id: 'p-inspector',
      tabs: [{ id: 'v-inspector', type: 'inspector', title: 'Inspector' }],
      activeTabId: 'v-inspector', pinned: false,
    },
  ],
};

function cloneLayout(node: LayoutNode): LayoutNode {
  return JSON.parse(JSON.stringify(node));
}

function ensurePreviewTabAdjacencyInPanel(panel: PanelNode): PanelNode {
  const previewIdx = panel.tabs.findIndex((tab) => tab.type === 'preview');
  if (previewIdx === -1) return panel;
  const preview3dIdx = panel.tabs.findIndex((tab) => tab.type === 'preview3d');
  const tabs = [...panel.tabs];

  if (preview3dIdx === -1) {
    tabs.splice(previewIdx + 1, 0, { id: uid(), type: 'preview3d', title: '3D Preview' });
    return { ...panel, tabs };
  }

  if (preview3dIdx !== previewIdx + 1) {
    const [preview3dTab] = tabs.splice(preview3dIdx, 1);
    const insertAt = preview3dIdx < previewIdx ? previewIdx : previewIdx + 1;
    tabs.splice(insertAt, 0, preview3dTab);
    return { ...panel, tabs };
  }

  return panel;
}

function ensurePreviewTabsInLayout(root: LayoutNode): LayoutNode {
  if (root.kind === 'panel') {
    return ensurePreviewTabAdjacencyInPanel(root);
  }
  return {
    ...root,
    children: [
      ensurePreviewTabsInLayout(root.children[0]),
      ensurePreviewTabsInLayout(root.children[1]),
    ],
  };
}

function ensurePreviewTabsInFloating(floating: FloatingPanel[]): FloatingPanel[] {
  return floating.map((f) => ({
    ...f,
    panel: ensurePreviewTabAdjacencyInPanel(f.panel),
  }));
}

/**
 * Inspector lives in a dedicated right-side column at the root level —
 * matching the Properties pane layout used by Substance Designer, Houdini,
 * UE5 Material Editor, etc. Stuffing it into the bottom-left panel competed
 * for vertical real estate with the graph view.
 *
 * Migration policy:
 *   1. If the root is already `[workspace, p-inspector]` (canonical shape),
 *      leave it alone — idempotent on every boot.
 *   2. If at least one Inspector tab exists somewhere in the layout, strip
 *      those tabs (and any panels that become empty) and wrap the remainder
 *      in a horizontal split with a fresh Inspector column on the right.
 *      This relocates Inspector for users who got the previous
 *      "Inspector in p-explorer" version.
 *   3. If no Inspector tab exists anywhere, leave the layout alone — the
 *      user closed Inspector intentionally and can re-add it via the
 *      Workspace dropdown (which calls `addView('inspector', ...)`).
 */
function isCanonicalInspectorLayout(root: LayoutNode): boolean {
  if (root.kind !== 'split' || root.direction !== 'horizontal') return false;
  const right = root.children[1];
  if (right.kind !== 'panel') return false;
  if (right.tabs.length === 0) return false;
  return right.tabs.every((t) => t.type === 'inspector');
}

function collectInspectorPanelIds(root: LayoutNode): { panelId: string; hasOtherTabs: boolean }[] {
  const out: { panelId: string; hasOtherTabs: boolean }[] = [];
  const walk = (node: LayoutNode) => {
    if (node.kind === 'panel') {
      const inspectorCount = node.tabs.filter((t) => t.type === 'inspector').length;
      if (inspectorCount > 0) {
        out.push({ panelId: node.id, hasOtherTabs: inspectorCount !== node.tabs.length });
      }
      return;
    }
    walk(node.children[0]);
    walk(node.children[1]);
  };
  walk(root);
  return out;
}

function ensureInspectorOnRight(root: LayoutNode): LayoutNode {
  if (isCanonicalInspectorLayout(root)) return root;

  const inspectorPanels = collectInspectorPanelIds(root);
  if (inspectorPanels.length === 0) {
    // User has no Inspector anywhere — respect that choice. They can re-add
    // it from the Workspace dropdown.
    return root;
  }

  // Strip Inspector tabs from existing panels, cascading panel removal if a
  // panel ends up with zero tabs left.
  let next: LayoutNode | null = root;
  for (const entry of inspectorPanels) {
    if (!next) break;
    if (entry.hasOtherTabs) {
      next = updatePanel(next, entry.panelId, (p) => {
        const remaining = p.tabs.filter((t) => t.type !== 'inspector');
        const stillActive = remaining.some((t) => t.id === p.activeTabId);
        return {
          ...p,
          tabs: remaining,
          activeTabId: stillActive ? p.activeTabId : (remaining[0]?.id ?? null),
        };
      });
    } else {
      // Panel was Inspector-only; drop the whole panel from the tree. If
      // that empties the tree entirely (extremely unlikely — would require
      // Inspector being the only panel left), fall back to a fresh default.
      next = removeNode(next, entry.panelId) ?? cloneLayout(DEFAULT_LAYOUT);
    }
  }

  if (!next) next = cloneLayout(DEFAULT_LAYOUT);

  // Avoid duplicate ids: if the existing root still happens to be id='root',
  // rename it to 's-workspace' before wrapping. Inner ids (graph/explorer/
  // preview/code panels and their splits) are unaffected.
  const inner: LayoutNode = next.id === 'root' ? { ...next, id: 's-workspace' } : next;
  const inspectorPanel: PanelNode = {
    kind: 'panel',
    id: 'p-inspector',
    tabs: [{ id: 'v-inspector', type: 'inspector', title: 'Inspector' }],
    activeTabId: 'v-inspector',
    pinned: false,
  };
  return {
    kind: 'split',
    id: 'root',
    direction: 'horizontal',
    ratio: 0.80,
    children: [inner, inspectorPanel],
  };
}

function ensureInspectorOnRightInFloating(floating: FloatingPanel[]): FloatingPanel[] {
  // Floating panels stay as the user left them — Inspector relocation only
  // touches the docked tree where the column layout matters.
  return floating;
}

function removeLegacyLibraryColumn(root: LayoutNode): LayoutNode {
  if (root.kind !== 'split' || root.id !== 'root' || root.direction !== 'horizontal') return root;
  const [left, right] = root.children;
  if (
    left.kind === 'panel'
    && left.id === 'p-library'
    && left.tabs.length === 1
    && left.tabs[0].type === 'library'
  ) {
    if (right.kind === 'split') return { ...right, id: 'root' };
    return right;
  }
  return root;
}

interface WorkspacePreset {
  root: LayoutNode;
  floating: FloatingPanel[];
  maximizedPanelId: string | null;
}

const isObject = (value: unknown): value is Record<string, any> =>
  !!value && typeof value === 'object' && !Array.isArray(value);

const isViewInstance = (value: unknown): value is ViewInstance =>
  isObject(value)
  && typeof value.id === 'string'
  && typeof value.type === 'string'
  && typeof value.title === 'string';

const isPanelNode = (value: unknown): value is PanelNode => {
  if (!isObject(value)) return false;
  if (value.kind !== 'panel') return false;
  if (typeof value.id !== 'string') return false;
  if (!Array.isArray(value.tabs) || !value.tabs.every(isViewInstance)) return false;
  if (!(value.activeTabId === null || typeof value.activeTabId === 'string')) return false;
  if (typeof value.pinned !== 'boolean') return false;
  if (value.activeTabId && !value.tabs.some((tab) => tab.id === value.activeTabId)) return false;
  return true;
};

const isLayoutNode = (value: unknown, depth = 0): value is LayoutNode => {
  if (depth > 32 || !isObject(value)) return false;
  if (value.kind === 'panel') return isPanelNode(value);
  if (value.kind !== 'split') return false;
  if (typeof value.id !== 'string') return false;
  if (value.direction !== 'horizontal' && value.direction !== 'vertical') return false;
  if (typeof value.ratio !== 'number' || !Number.isFinite(value.ratio)) return false;
  if (!Array.isArray(value.children) || value.children.length !== 2) return false;
  return isLayoutNode(value.children[0], depth + 1) && isLayoutNode(value.children[1], depth + 1);
};

const isFloatingPanel = (value: unknown): value is FloatingPanel =>
  isObject(value)
  && typeof value.id === 'string'
  && isPanelNode(value.panel)
  && typeof value.x === 'number' && Number.isFinite(value.x)
  && typeof value.y === 'number' && Number.isFinite(value.y)
  && typeof value.width === 'number' && Number.isFinite(value.width)
  && typeof value.height === 'number' && Number.isFinite(value.height);

const PRESET_STORAGE_KEY = 'nt-workspace-presets';

const readPresetStore = (): Record<string, WorkspacePreset> => {
  try {
    const raw = localStorage.getItem(PRESET_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!isObject(parsed)) return {};
    const out: Record<string, WorkspacePreset> = {};
    for (const [name, value] of Object.entries(parsed)) {
      if (!isObject(value) || !isLayoutNode(value.root)) continue;
      const floating = Array.isArray(value.floating) ? value.floating.filter(isFloatingPanel) : [];
      const maximizedPanelId = typeof value.maximizedPanelId === 'string' ? value.maximizedPanelId : null;
      out[name] = {
        root: value.root,
        floating,
        maximizedPanelId: maximizedPanelId && findPanel(value.root, maximizedPanelId) ? maximizedPanelId : null,
      };
    }
    return out;
  } catch {
    return {};
  }
};

const writePresetStore = (presets: Record<string, WorkspacePreset>) => {
  try {
    localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(presets));
  } catch {
    // Ignore storage errors to avoid runtime crashes.
  }
};

export interface WorkspaceStore {
  root: LayoutNode;
  floating: FloatingPanel[];
  maximizedPanelId: string | null;

  setRatio: (splitId: string, ratio: number) => void;
  setActiveTab: (panelId: string, tabId: string) => void;
  closeTab: (panelId: string, tabId: string) => void;
  closePanel: (panelId: string) => void;
  moveTab: (sourcePanelId: string, tabId: string, targetPanelId: string, dropZone: DropZone) => void;
  togglePin: (panelId: string) => void;
  toggleMaximize: (panelId: string) => void;
  undockPanel: (panelId: string) => void;
  redockPanel: (floatingId: string, targetPanelId?: string, dropZone?: DropZone) => void;
  moveFloating: (floatingId: string, x: number, y: number) => void;
  resizeFloating: (floatingId: string, w: number, h: number) => void;
  addView: (type: string, title?: string) => string;
  resetLayout: () => void;
  savePreset: (name: string) => void;
  loadPreset: (name: string) => boolean;
  getPresetNames: () => string[];
}

export const useWorkspace = create<WorkspaceStore>()(
  persist(
    (set, get) => ({
      root: ensureInspectorOnRight(removeLegacyLibraryColumn(ensurePreviewTabsInLayout(cloneLayout(DEFAULT_LAYOUT)))),
      floating: [],
      maximizedPanelId: null,

      setRatio: (splitId, ratio) => set(s => {
        const update = (node: LayoutNode): LayoutNode => {
          if (node.kind === 'split' && node.id === splitId) return { ...node, ratio };
          if (node.kind === 'split') return { ...node, children: [update(node.children[0]), update(node.children[1])] };
          return node;
        };
        return { root: update(s.root) };
      }),

      setActiveTab: (panelId, tabId) => set(s => ({
        root: updatePanel(s.root, panelId, p => ({ ...p, activeTabId: tabId })),
      })),

      closeTab: (panelId, tabId) => set(s => {
        const panel = findPanel(s.root, panelId);
        if (!panel) return s;
        const newTabs = panel.tabs.filter(t => t.id !== tabId);
        if (newTabs.length === 0) {
          const newRoot = removeNode(s.root, panelId);
          return { root: newRoot || cloneLayout(DEFAULT_LAYOUT) };
        }
        return {
          root: updatePanel(s.root, panelId, p => ({
            ...p,
            tabs: newTabs,
            activeTabId: p.activeTabId === tabId ? (newTabs[0]?.id || null) : p.activeTabId,
          })),
        };
      }),

      closePanel: (panelId) => set(s => {
        const newRoot = removeNode(s.root, panelId);
        return {
          root: newRoot || cloneLayout(DEFAULT_LAYOUT),
          maximizedPanelId: s.maximizedPanelId === panelId ? null : s.maximizedPanelId,
        };
      }),

      moveTab: (sourcePanelId, tabId, targetPanelId, dropZone) => set(s => {
        if (sourcePanelId === targetPanelId && dropZone === 'center') return s;

        const srcPanel = findPanel(s.root, sourcePanelId);
        if (!srcPanel) return s;
        const tab = srcPanel.tabs.find(t => t.id === tabId);
        if (!tab) return s;

        let root = s.root;
        const srcRemaining = srcPanel.tabs.filter(t => t.id !== tabId);
        root = updatePanel(root, sourcePanelId, p => ({
          ...p,
          tabs: srcRemaining,
          activeTabId: p.activeTabId === tabId ? (srcRemaining[0]?.id || null) : p.activeTabId,
        }));

        if (srcRemaining.length === 0 && sourcePanelId !== targetPanelId) {
          root = removeNode(root, sourcePanelId) || root;
        }

        if (dropZone === 'center') {
          root = updatePanel(root, targetPanelId, p => ({
            ...p,
            tabs: [...p.tabs, tab],
            activeTabId: tab.id,
          }));
        } else {
          const dir = (dropZone === 'left' || dropZone === 'right') ? 'horizontal' : 'vertical';
          const pos = (dropZone === 'left' || dropZone === 'top') ? 'before' : 'after';
          const newPanel: PanelNode = {
            kind: 'panel', id: uid(),
            tabs: [tab], activeTabId: tab.id, pinned: false,
          };
          root = insertSplit(root, targetPanelId, dir, pos, newPanel, 0.5);
        }

        return { root };
      }),

      togglePin: (panelId) => set(s => ({
        root: updatePanel(s.root, panelId, p => ({ ...p, pinned: !p.pinned })),
      })),

      toggleMaximize: (panelId) => set(s => ({
        maximizedPanelId: s.maximizedPanelId === panelId ? null : panelId,
      })),

      undockPanel: (panelId) => set(s => {
        const panel = findPanel(s.root, panelId);
        if (!panel) return s;
        const newRoot = removeNode(s.root, panelId);
        if (!newRoot) return s;
        const floating: FloatingPanel = {
          id: uid(), panel: { ...panel },
          x: 100, y: 100, width: 500, height: 400,
        };
        return {
          root: newRoot,
          floating: [...s.floating, floating],
          maximizedPanelId: s.maximizedPanelId === panelId ? null : s.maximizedPanelId,
        };
      }),

      redockPanel: (floatingId, targetPanelId, dropZone) => set(s => {
        const fi = s.floating.findIndex(f => f.id === floatingId);
        if (fi === -1) return s;
        const fp = s.floating[fi];
        const remaining = s.floating.filter((_, i) => i !== fi);

        let root = s.root;
        if (targetPanelId && dropZone) {
          if (dropZone === 'center') {
            root = updatePanel(root, targetPanelId, p => ({
              ...p,
              tabs: [...p.tabs, ...fp.panel.tabs],
              activeTabId: fp.panel.tabs[0]?.id || p.activeTabId,
            }));
          } else {
            const dir = (dropZone === 'left' || dropZone === 'right') ? 'horizontal' : 'vertical';
            const pos = (dropZone === 'left' || dropZone === 'top') ? 'before' : 'after';
            root = insertSplit(root, targetPanelId, dir, pos, fp.panel);
          }
        } else {
          const panels = collectPanels(root);
          const target = panels.find(p => !p.pinned) || panels[0];
          if (target) {
            root = updatePanel(root, target.id, p => ({
              ...p,
              tabs: [...p.tabs, ...fp.panel.tabs],
              activeTabId: fp.panel.tabs[0]?.id || p.activeTabId,
            }));
          }
        }
        return { root, floating: remaining };
      }),

      moveFloating: (floatingId, x, y) => set(s => ({
        floating: s.floating.map(f => f.id === floatingId ? { ...f, x, y } : f),
      })),

      resizeFloating: (floatingId, width, height) => set(s => ({
        floating: s.floating.map(f => f.id === floatingId ? { ...f, width, height } : f),
      })),

      addView: (type, title) => {
        const tabId = uid();
        set(s => {
        const viewTitle = title || type.charAt(0).toUpperCase() + type.slice(1);
        const tab: ViewInstance = { id: tabId, type, title: viewTitle };
        const panels = collectPanels(s.root);
        const emptyUnpinned = panels.find(p => p.tabs.length === 0 && !p.pinned);
        if (emptyUnpinned) {
          return { root: updatePanel(s.root, emptyUnpinned.id, p => ({ ...p, tabs: [tab], activeTabId: tab.id })) };
        }
        const unpinned = panels.find(p => !p.pinned);
        if (unpinned) {
          return { root: updatePanel(s.root, unpinned.id, p => ({ ...p, tabs: [...p.tabs, tab], activeTabId: tab.id })) };
        }
        const newPanel: PanelNode = { kind: 'panel', id: uid(), tabs: [tab], activeTabId: tab.id, pinned: false };
        const last = panels[panels.length - 1];
        if (last) {
          return { root: insertSplit(s.root, last.id, 'horizontal', 'after', newPanel) };
        }
        return { root: newPanel };
        });
        return tabId;
      },

      resetLayout: () => set({
        root: ensureInspectorOnRight(removeLegacyLibraryColumn(ensurePreviewTabsInLayout(cloneLayout(DEFAULT_LAYOUT)))),
        floating: [],
        maximizedPanelId: null,
      }),

      savePreset: (name) => {
        const s = get();
        const presets = readPresetStore();
        presets[name] = { root: s.root, floating: s.floating, maximizedPanelId: s.maximizedPanelId };
        writePresetStore(presets);
      },

      loadPreset: (name) => {
        const presets = readPresetStore();
        const preset = presets[name];
        if (!preset?.root) return false;
        set({
          root: ensureInspectorOnRight(removeLegacyLibraryColumn(ensurePreviewTabsInLayout(preset.root))),
          floating: ensureInspectorOnRightInFloating(ensurePreviewTabsInFloating(preset.floating || [])),
          maximizedPanelId: preset.maximizedPanelId || null
        });
        return true;
      },

      getPresetNames: () => {
        const presets = readPresetStore();
        return Object.keys(presets);
      },
    }),
    {
      name: 'nt-workspace-layout',
      partialize: (state) => ({
        root: state.root,
        floating: state.floating,
        maximizedPanelId: state.maximizedPanelId,
      }),
      merge: (persistedState, currentState) => {
        const persisted = (persistedState || {}) as Partial<WorkspaceStore>;
        const next = { ...currentState };
        if (isLayoutNode((persisted as any).root)) next.root = ensureInspectorOnRight(removeLegacyLibraryColumn(ensurePreviewTabsInLayout((persisted as any).root)));
        if (Array.isArray((persisted as any).floating)) {
          next.floating = ensureInspectorOnRightInFloating(ensurePreviewTabsInFloating((persisted as any).floating.filter(isFloatingPanel)));
        }
        const maybeMax = (persisted as any).maximizedPanelId;
        if (maybeMax === null || typeof maybeMax === 'string') {
          next.maximizedPanelId = maybeMax;
        }
        if (next.maximizedPanelId && !findPanel(next.root, next.maximizedPanelId)) {
          next.maximizedPanelId = null;
        }
        return next;
      },
    }
  )
);
