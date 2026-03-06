import React, { useEffect, useMemo, useState } from 'react';

interface PaletteItem {
  id: string;
  label: string;
  category: string;
  shortcut?: string;
  enabled: boolean;
  searchText: string;
}

interface CommandPaletteProps {
  open: boolean;
  items: PaletteItem[];
  onRun: (id: string) => void;
  onClose: () => void;
}

const fuzzyScore = (query: string, text: string): number => {
  if (!query) return 0;
  let qi = 0;
  let score = 0;
  for (let i = 0; i < text.length && qi < query.length; i++) {
    if (text[i] === query[qi]) {
      score += 2;
      qi++;
    } else {
      score -= 0.05;
    }
  }
  return qi === query.length ? score : -999;
};

export function CommandPalette({ open, items, onRun, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const sorted = items
      .map((it) => ({ it, score: fuzzyScore(q, it.searchText) }))
      .filter((x) => q.length === 0 || x.score > -999)
      .sort((a, b) => b.score - a.score || a.it.label.localeCompare(b.it.label))
      .map((x) => x.it);
    return sorted;
  }, [items, query]);

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
        setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIndex((i) => (i - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = filtered[index];
        if (item && item.enabled) onRun(item.id);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [filtered, index, onClose, onRun, open]);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#00000066', zIndex: 1300 }} onMouseDown={onClose}>
      <div
        style={{
          width: 520,
          maxHeight: 460,
          margin: '80px auto 0',
          background: '#1b1d22',
          border: '1px solid #343a46',
          borderRadius: 10,
          boxShadow: '0 16px 48px #000000aa',
          overflow: 'hidden'
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div style={{ padding: 10, borderBottom: '1px solid #2f343f' }}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands..."
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
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => item.enabled && onRun(item.id)}
              disabled={!item.enabled}
              onMouseEnter={() => setIndex(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                border: i === index ? '1px solid #5f81bb' : '1px solid #313744',
                background: i === index ? '#42649a' : '#21252d',
                color: item.enabled ? '#e8edf8' : '#778099',
                borderRadius: 6,
                padding: '8px 10px',
                fontSize: 12,
                marginBottom: 4,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>{item.shortcut || item.category}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
