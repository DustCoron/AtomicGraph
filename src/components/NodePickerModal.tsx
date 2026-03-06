import React, { useEffect, useMemo, useState } from 'react';
import { DataType } from '../core/types';
import { NODE_REGISTRY } from '../core/registry';

interface NodePickerModalProps {
  open: boolean;
  compatibleType?: DataType;
  onSelect: (nodeType: string) => void;
  onClose: () => void;
}

const isVisibleNode = (type: string, category: string) => category !== 'output' && !type.startsWith('atom_input');

export function NodePickerModal({ open, compatibleType, onSelect, onClose }: NodePickerModalProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);

  const items = useMemo(() => {
    const q = query.toLowerCase().trim();
    return Object.entries(NODE_REGISTRY)
      .filter(([type, def]) => {
        if (!isVisibleNode(type, def.category)) return false;
        if (q && !def.label.toLowerCase().includes(q) && !type.includes(q) && !def.category.includes(q)) return false;
        if (!compatibleType) return true;
        return def.inputs.some((inp) => inp.type === compatibleType) || def.outputs.some((out) => out.type === compatibleType);
      })
      .sort((a, b) => a[1].label.localeCompare(b[1].label));
  }, [compatibleType, query]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIndex((i) => (i + 1) % Math.max(items.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => (i - 1 + Math.max(items.length, 1)) % Math.max(items.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const picked = items[index];
        if (picked) onSelect(picked[0]);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [index, items, onClose, onSelect, open]);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#00000066', zIndex: 1250 }} onMouseDown={onClose}>
      <div
        style={{ width: 420, maxHeight: 460, margin: '100px auto 0', background: '#1b1d22', border: '1px solid #343a46', borderRadius: 10, overflow: 'hidden' }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div style={{ padding: 10, borderBottom: '1px solid #2f343f' }}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Add node..."
            style={{
              width: '100%',
              boxSizing: 'border-box',
              background: '#16181d',
              border: '1px solid #353a45',
              color: '#d5dbea',
              borderRadius: 6,
              padding: '8px 10px',
              fontSize: 13,
              outline: 'none'
            }}
          />
        </div>
        <div style={{ maxHeight: 390, overflowY: 'auto', padding: 8 }}>
          {items.map(([type, def], i) => (
            <button
              key={type}
              onClick={() => onSelect(type)}
              onMouseEnter={() => setIndex(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                border: i === index ? '1px solid #5f81bb' : '1px solid #313744',
                background: i === index ? '#42649a' : '#21252d',
                color: '#e8edf8',
                borderRadius: 6,
                padding: '8px 10px',
                fontSize: 12,
                marginBottom: 4,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{def.label}</span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>{def.category.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
