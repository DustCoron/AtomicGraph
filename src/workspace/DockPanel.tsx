import React, { useCallback, useRef, useState } from 'react';
import { PanelNode, DropZone } from './types';
import { useWorkspace } from './store';
import { ViewErrorBoundary } from '../components/ViewErrorBoundary';

const DRAG_MIME = 'application/nt-dock-tab';

interface DockPanelProps {
  panel: PanelNode;
  renderView: (viewType: string, viewId: string) => React.ReactNode;
  isMaximized: boolean;
}

export function DockPanel({ panel, renderView, isMaximized }: DockPanelProps) {
  const { setActiveTab, closeTab, closePanel, moveTab, togglePin, toggleMaximize, undockPanel } = useWorkspace();
  const [dropZone, setDropZone] = useState<DropZone | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const activeView = panel.tabs.find(t => t.id === panel.activeTabId) || panel.tabs[0];

  const onTabDragStart = useCallback((e: React.DragEvent, tabId: string) => {
    e.dataTransfer.setData(DRAG_MIME, JSON.stringify({ panelId: panel.id, tabId }));
    e.dataTransfer.effectAllowed = 'move';
  }, [panel.id]);

  const computeZone = useCallback((e: React.DragEvent): DropZone => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 'center';
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const margin = 0.22;
    if (x < margin) return 'left';
    if (x > 1 - margin) return 'right';
    if (y < margin) return 'top';
    if (y > 1 - margin) return 'bottom';
    return 'center';
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    if (!e.dataTransfer.types.includes(DRAG_MIME)) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDropZone(computeZone(e));
  }, [computeZone]);

  const onDragLeave = useCallback(() => setDropZone(null), []);

  const onDrop = useCallback((e: React.DragEvent) => {
    setDropZone(null);
    const raw = e.dataTransfer.getData(DRAG_MIME);
    if (!raw) return;
    e.preventDefault();
    let parsed: { panelId?: string; tabId?: string } | null = null;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return;
    }
    const srcPanelId = parsed?.panelId;
    const tabId = parsed?.tabId;
    if (!srcPanelId || !tabId) return;
    const zone = computeZone(e);
    moveTab(srcPanelId, tabId, panel.id, zone);
  }, [computeZone, moveTab, panel.id]);

  return (
    <div ref={ref} className="dk-panel" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <div className="dk-header">
        <div className="dk-tabs">
          {panel.tabs.map(tab => (
            <div
              key={tab.id}
              className={`dk-tab ${tab.id === panel.activeTabId ? 'active' : ''}`}
              draggable
              onDragStart={e => onTabDragStart(e, tab.id)}
              onMouseDown={() => setActiveTab(panel.id, tab.id)}
            >
              <span className="dk-tab-label">{tab.title}</span>
              <button
                className="dk-tab-close"
                onMouseDown={e => e.stopPropagation()}
                onClick={e => { e.stopPropagation(); closeTab(panel.id, tab.id); }}
              >x</button>
            </div>
          ))}
        </div>
        <div className="dk-actions">
          <button
            className={`dk-action-btn ${panel.pinned ? 'active' : ''}`}
            onClick={() => togglePin(panel.id)}
            title={panel.pinned ? 'Unpin' : 'Pin'}
          >{panel.pinned ? 'P' : 'p'}</button>
          <button
            className="dk-action-btn"
            onClick={() => undockPanel(panel.id)}
            title="Undock"
          >u</button>
          <button
            className={`dk-action-btn ${isMaximized ? 'active' : ''}`}
            onClick={() => toggleMaximize(panel.id)}
            title={isMaximized ? 'Minimize' : 'Maximize'}
          >{isMaximized ? 'm' : 'M'}</button>
          <button
            className="dk-action-btn dk-close-btn"
            onClick={() => closePanel(panel.id)}
            title="Close"
          >x</button>
        </div>
      </div>
      <div className="dk-content">
        {activeView && (
          <ViewErrorBoundary viewType={activeView.type} viewId={activeView.id}>
            {renderView(activeView.type, activeView.id)}
          </ViewErrorBoundary>
        )}
        {!activeView && <div className="dk-empty">Empty dock</div>}
      </div>

      {dropZone && (
        <div className="dk-drop-overlay">
          <div className={`dk-drop-zone dk-drop-${dropZone}`} />
        </div>
      )}
    </div>
  );
}

interface FloatingDockProps {
  fp: { id: string; panel: PanelNode; x: number; y: number; width: number; height: number };
  renderView: (viewType: string, viewId: string) => React.ReactNode;
}

export function FloatingDock({ fp, renderView }: FloatingDockProps) {
  const { moveFloating, resizeFloating, redockPanel } = useWorkspace();
  const dragRef = useRef<{ ox: number; oy: number } | null>(null);
  const resRef = useRef<{ ow: number; oh: number; sx: number; sy: number } | null>(null);

  const onTitleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragRef.current = { ox: e.clientX - fp.x, oy: e.clientY - fp.y };
    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      moveFloating(fp.id, ev.clientX - dragRef.current.ox, ev.clientY - dragRef.current.oy);
    };
    const onUp = () => {
      dragRef.current = null;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.body.style.cursor = 'move';
  }, [fp.id, fp.x, fp.y, moveFloating]);

  const onResizeMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resRef.current = { ow: fp.width, oh: fp.height, sx: e.clientX, sy: e.clientY };
    const onMove = (ev: MouseEvent) => {
      if (!resRef.current) return;
      const w = Math.max(200, resRef.current.ow + ev.clientX - resRef.current.sx);
      const h = Math.max(150, resRef.current.oh + ev.clientY - resRef.current.sy);
      resizeFloating(fp.id, w, h);
    };
    const onUp = () => {
      resRef.current = null;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.body.style.cursor = 'nwse-resize';
  }, [fp.id, fp.width, fp.height, resizeFloating]);

  return (
    <div
      className="dk-floating"
      style={{ left: fp.x, top: fp.y, width: fp.width, height: fp.height }}
    >
      <div className="dk-floating-title" onMouseDown={onTitleMouseDown}>
        <span className="dk-tab-label">{fp.panel.tabs.map(t => t.title).join(', ')}</span>
        <button className="dk-action-btn" onClick={() => redockPanel(fp.id)} title="Redock">R</button>
      </div>
      <div className="dk-content">
        {fp.panel.tabs.length > 0
          ? (() => {
              const tab = fp.panel.tabs.find(t => t.id === fp.panel.activeTabId) || fp.panel.tabs[0];
              return (
                <ViewErrorBoundary viewType={tab.type} viewId={tab.id}>
                  {renderView(tab.type, tab.id)}
                </ViewErrorBoundary>
              );
            })()
          : <div className="dk-empty">Empty</div>
        }
      </div>
      <div className="dk-resize-handle" onMouseDown={onResizeMouseDown} />
    </div>
  );
}
