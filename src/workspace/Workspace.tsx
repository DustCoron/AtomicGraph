import React, { useCallback, useEffect, useRef } from 'react';
import { LayoutNode, PanelNode, findPanel } from './types';
import { useWorkspace } from './store';
import { DockPanel, FloatingDock } from './DockPanel';

interface WorkspaceProps {
  renderView: (viewType: string, viewId: string) => React.ReactNode;
}

export function Workspace({ renderView }: WorkspaceProps) {
  const { root, floating, maximizedPanelId, toggleMaximize, resetLayout } = useWorkspace();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.shiftKey && e.code === 'Space') {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        e.preventDefault();
        if (maximizedPanelId) {
          toggleMaximize(maximizedPanelId);
        } else {
          const active = document.activeElement?.closest('[data-panel-id]');
          const panelId = active?.getAttribute('data-panel-id');
          if (panelId) toggleMaximize(panelId);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [maximizedPanelId, toggleMaximize]);

  const maximizedPanel = maximizedPanelId ? findPanel(root, maximizedPanelId) : null;

  return (
    <div className="dk-workspace">
      {maximizedPanel ? (
        <div className="dk-maximized" data-panel-id={maximizedPanel.id}>
          <DockPanel panel={maximizedPanel} renderView={renderView} isMaximized={true} />
        </div>
      ) : (
        <LayoutRenderer node={root} renderView={renderView} />
      )}

      {floating.map(fp => (
        <FloatingDock key={fp.id} fp={fp} renderView={renderView} />
      ))}
    </div>
  );
}

function LayoutRenderer({ node, renderView }: { node: LayoutNode; renderView: (type: string, id: string) => React.ReactNode }) {
  if (node.kind === 'panel') {
    return (
      <div className="dk-leaf" data-panel-id={node.id}>
        <DockPanel panel={node} renderView={renderView} isMaximized={false} />
      </div>
    );
  }

  return (
    <SplitRenderer
      splitId={node.id}
      direction={node.direction}
      ratio={node.ratio}
      first={<LayoutRenderer node={node.children[0]} renderView={renderView} />}
      second={<LayoutRenderer node={node.children[1]} renderView={renderView} />}
    />
  );
}

interface SplitRendererProps {
  splitId: string;
  direction: 'horizontal' | 'vertical';
  ratio: number;
  first: React.ReactNode;
  second: React.ReactNode;
}

function SplitRenderer({ splitId, direction, ratio, first, second }: SplitRendererProps) {
  const { setRatio } = useWorkspace();
  const containerRef = useRef<HTMLDivElement>(null);
  const cbRef = useRef(setRatio);
  cbRef.current = setRatio;

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const onMove = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      let newRatio: number;
      if (direction === 'horizontal') {
        newRatio = (ev.clientX - rect.left) / rect.width;
      } else {
        newRatio = (ev.clientY - rect.top) / rect.height;
      }
      newRatio = Math.max(0.08, Math.min(0.92, newRatio));
      cbRef.current(splitId, newRatio);
    };

    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }, [splitId, direction]);

  const isH = direction === 'horizontal';
  const pct1 = `${ratio * 100}%`;
  const pct2 = `${(1 - ratio) * 100}%`;

  return (
    <div ref={containerRef} className={`dk-split dk-split-${isH ? 'h' : 'v'}`}>
      <div className="dk-split-child" style={isH ? { width: pct1 } : { height: pct1 }}>
        {first}
      </div>
      <div
        className={`nt-splitter nt-splitter-${isH ? 'x' : 'y'}`}
        onMouseDown={onMouseDown}
      />
      <div className="dk-split-child" style={isH ? { width: pct2 } : { height: pct2 }}>
        {second}
      </div>
    </div>
  );
}
