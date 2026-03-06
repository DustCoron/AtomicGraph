import React, { useEffect, useMemo, useState } from 'react';
import { DataType } from '../core/types';
import { CATEGORIES, NODE_REGISTRY } from '../core/registry';

interface NodePickerModalProps {
  open: boolean;
  compatibleType?: DataType;
  onSelect: (nodeType: string) => void;
  onClose: () => void;
}

const isVisibleNode = (type: string, category: string) => category !== 'output' && !type.startsWith('atom_input');
const ALL_CATEGORY = 'all';

export function NodePickerModal({ open, compatibleType, onSelect, onClose }: NodePickerModalProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

  const items = useMemo(() => {
    const q = query.toLowerCase().trim();
    return Object.entries(NODE_REGISTRY)
      .filter(([type, def]) => {
        if (!isVisibleNode(type, def.category)) return false;
        if (q && !def.label.toLowerCase().includes(q) && !type.includes(q) && !def.category.includes(q)) return false;
        if (!compatibleType) return true;
        const inputMatch = def.inputs.some((inp) => inp.type === compatibleType);
        const outputMatch = def.outputs.some((out) => out.type === compatibleType);
        return inputMatch || outputMatch;
      })
      .map(([type, def]) => {
        let score = 0;
        if (compatibleType) {
          const inputMatch = def.inputs.some((inp) => inp.type === compatibleType);
          const outputMatch = def.outputs.some((out) => out.type === compatibleType);
          score = inputMatch ? 2 : outputMatch ? 1 : 0;
        }
        return { type, def, score };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        if (a.def.category !== b.def.category) return a.def.category.localeCompare(b.def.category);
        return a.def.label.localeCompare(b.def.label);
      });
  }, [compatibleType, query]);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((item) => counts.set(item.def.category, (counts.get(item.def.category) || 0) + 1));
    return Array.from(counts.entries()).sort((a, b) => {
      const aLabel = (CATEGORIES as any)[a[0]]?.label || a[0];
      const bLabel = (CATEGORIES as any)[b[0]]?.label || b[0];
      return aLabel.localeCompare(bLabel);
    });
  }, [items]);

  const visibleItems = useMemo(() => (
    activeCategory === ALL_CATEGORY
      ? items
      : items.filter((item) => item.def.category === activeCategory)
  ), [activeCategory, items]);

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setIndex(0);
    setActiveCategory(ALL_CATEGORY);
  }, [open]);

  useEffect(() => {
    if (activeCategory === ALL_CATEGORY) return;
    if (!categories.some(([category]) => category === activeCategory)) {
      setActiveCategory(ALL_CATEGORY);
    }
  }, [activeCategory, categories]);

  useEffect(() => {
    if (visibleItems.length === 0) {
      if (index !== 0) setIndex(0);
      return;
    }
    if (index > visibleItems.length - 1) {
      setIndex(visibleItems.length - 1);
    }
  }, [index, visibleItems.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIndex((i) => (i + 1) % Math.max(visibleItems.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => (i - 1 + Math.max(visibleItems.length, 1)) % Math.max(visibleItems.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const picked = visibleItems[index];
        if (picked) onSelect(picked.type);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [index, onClose, onSelect, open, visibleItems]);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#00000066', zIndex: 1250 }} onMouseDown={onClose}>
      <div
        style={{ width: 560, maxHeight: 560, margin: '88px auto 0', background: '#1b1d22', border: '1px solid #343a46', borderRadius: 10, overflow: 'hidden' }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div style={{ padding: 10, borderBottom: '1px solid #2f343f' }}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Add node (name, type, category)..."
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
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <button
                onClick={() => { setActiveCategory(ALL_CATEGORY); setIndex(0); }}
                style={{
                  border: activeCategory === ALL_CATEGORY ? '1px solid #5f81bb' : '1px solid #313744',
                  background: activeCategory === ALL_CATEGORY ? '#33527f' : '#21252d',
                  color: '#d9e5ff',
                  borderRadius: 6,
                  fontSize: 10,
                  padding: '4px 8px',
                  cursor: 'pointer'
                }}
              >
                ALL ({items.length})
              </button>
              {categories.map(([category, count]) => {
                const meta = (CATEGORIES as any)[category];
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => { setActiveCategory(category); setIndex(0); }}
                    style={{
                      border: active ? `1px solid ${meta?.color || '#5f81bb'}` : '1px solid #313744',
                      background: active ? '#2b3445' : '#21252d',
                      color: active ? '#f1f6ff' : '#aab7d4',
                      borderRadius: 6,
                      fontSize: 10,
                      padding: '4px 8px',
                      cursor: 'pointer'
                    }}
                    title={category}
                  >
                    {(meta?.label || category).toUpperCase()} ({count})
                  </button>
                );
              })}
            </div>
            {compatibleType && (
              <div style={{ fontSize: 10, color: '#9fb1d8', letterSpacing: 0.3 }}>
                Compat: <span style={{ color: '#d7e5ff' }}>{compatibleType}</span>
              </div>
            )}
          </div>
        </div>
        <div style={{ maxHeight: 470, overflowY: 'auto', padding: 8 }}>
          {visibleItems.map((item, i) => (
            <button
              key={item.type}
              onClick={() => onSelect(item.type)}
              onMouseEnter={() => setIndex(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                border: i === index ? '1px solid #5f81bb' : '1px solid #313744',
                background: i === index ? '#42649a' : '#21252d',
                color: '#e8edf8',
                borderRadius: 6,
                padding: '7px 10px',
                fontSize: 12,
                marginBottom: 4,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ color: '#e8edf8' }}>{item.def.label}</span>
                <span style={{ fontSize: 10, color: '#95a4c7' }}>
                  {item.type}
                  {item.score > 0 && compatibleType ? ` | ${item.score === 2 ? 'input match' : 'output match'}` : ''}
                </span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#9ca9c9' }}>
                  IN {item.def.inputs.length} | OUT {item.def.outputs.length}
                </span>
                <span style={{ fontSize: 10, opacity: 0.8 }}>
                  {((CATEGORIES as any)[item.def.category]?.label || item.def.category).toUpperCase()}
                </span>
              </span>
            </button>
          ))}
          {visibleItems.length === 0 && (
            <div style={{ padding: '16px 10px', color: '#8f9ab5', fontSize: 12, textAlign: 'center' }}>
              No nodes match this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
