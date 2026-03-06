import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  LayoutNode, PanelNode, FloatingPanel, DropZone, ViewInstance,
  uid, findPanel, updatePanel, removeNode, insertSplit, collectPanels,
} from './types';

const DEFAULT_LAYOUT: LayoutNode = {
  kind: 'split',
  id: 'root',
  direction: 'horizontal',
  ratio: 0.62,
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
      root: removeLegacyLibraryColumn(ensurePreviewTabsInLayout(cloneLayout(DEFAULT_LAYOUT))),
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

      resetLayout: () => set({ root: removeLegacyLibraryColumn(ensurePreviewTabsInLayout(cloneLayout(DEFAULT_LAYOUT))), floating: [], maximizedPanelId: null }),

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
          root: removeLegacyLibraryColumn(ensurePreviewTabsInLayout(preset.root)),
          floating: ensurePreviewTabsInFloating(preset.floating || []),
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
        if (isLayoutNode((persisted as any).root)) next.root = removeLegacyLibraryColumn(ensurePreviewTabsInLayout((persisted as any).root));
        if (Array.isArray((persisted as any).floating)) {
          next.floating = ensurePreviewTabsInFloating((persisted as any).floating.filter(isFloatingPanel));
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
