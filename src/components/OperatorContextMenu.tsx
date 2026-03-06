import React, { useEffect, useMemo, useState } from 'react';
import { Operator } from '../core/operators/types';

interface OperatorContextMenuProps {
  x: number;
  y: number;
  items: Array<{ op: Operator; enabled: boolean }>;
  onRun: (id: string) => void;
  onClose: () => void;
}

export function OperatorContextMenu({ x, y, items, onRun, onClose }: OperatorContextMenuProps) {
  const [index, setIndex] = useState(0);
  const enabledItems = useMemo(() => items.filter((it) => it.enabled), [items]);
  const activeId = enabledItems[index]?.op.id;

  useEffect(() => {
    setIndex(0);
  }, [items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIndex((i) => (i + 1) % Math.max(enabledItems.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => (i - 1 + Math.max(enabledItems.length, 1)) % Math.max(enabledItems.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = enabledItems[index];
        if (target) onRun(target.op.id);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [enabledItems, index, onClose, onRun]);

  return (
    <div
      style={{
        position: 'fixed',
        left: x,
        top: y,
        width: 260,
        maxHeight: 340,
        overflowY: 'auto',
        background: '#1b1d22f6',
        border: '1px solid #343a46',
        borderRadius: 8,
        boxShadow: '0 14px 38px #000000aa',
        zIndex: 1200,
        padding: 6
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item) => (
        <button
          key={item.op.id}
          onClick={() => item.enabled && onRun(item.op.id)}
          disabled={!item.enabled}
          style={{
            width: '100%',
            textAlign: 'left',
            border: item.enabled && item.op.id === activeId ? '1px solid #5f81bb' : '1px solid #313744',
            background: item.enabled && item.op.id === activeId ? '#42649a' : '#21252d',
            color: item.enabled ? '#e8edf8' : '#778099',
            borderRadius: 4,
            padding: '5px 8px',
            fontSize: 11,
            marginBottom: 2,
            cursor: item.enabled ? 'pointer' : 'default',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          onMouseEnter={() => {
            if (!item.enabled) return;
            const next = enabledItems.findIndex((entry) => entry.op.id === item.op.id);
            if (next >= 0) setIndex(next);
          }}
        >
          <span>{item.op.label}</span>
          <span style={{ opacity: 0.65, fontSize: 10 }}>{item.op.shortcut || item.op.category}</span>
        </button>
      ))}
    </div>
  );
}
