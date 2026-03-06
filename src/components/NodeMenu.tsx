import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORIES, NODE_REGISTRY } from '../core/registry';

interface NodeMenuProps {
  onSelect: (type: string) => void;
  onClose: () => void;
  style?: React.CSSProperties;
}

const USAGE_KEY = 'nt.node.usage.v1';

const CAT_ORDER = ['gen', 'noises', 'math', 'trig', 'interp', 'filter'] as const;
type CatKey = (typeof CAT_ORDER)[number];
const isVisibleNode = (type: string, category: string) => category !== 'output' && !type.startsWith('atom_input');

export function NodeMenu({ onSelect, onClose, style }: NodeMenuProps) {
  const [query, setQuery] = useState('');
  const [openCat, setOpenCat] = useState<CatKey | null>(null);
  const [hlIdx, setHlIdx] = useState(-1);
  const [usage, setUsage] = useState<Record<string, number>>({});
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(USAGE_KEY);
      if (raw) setUsage(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const persistUsage = (next: Record<string, number>) => {
    setUsage(next);
    try { localStorage.setItem(USAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const sortByUsage = (a: [string, any], b: [string, any]) => {
    const ua = usage[a[0]] || 0, ub = usage[b[0]] || 0;
    if (ua !== ub) return ub - ua;
    return a[1].label.localeCompare(b[1].label);
  };

  const nodesByCategory = useMemo(() => {
    const map = new Map<CatKey, [string, (typeof NODE_REGISTRY)[string]][]>();
    CAT_ORDER.forEach(c => map.set(c, []));
    Object.entries(NODE_REGISTRY).forEach(([type, def]) => {
      if (!isVisibleNode(type, def.category)) return;
      const cat = def.category as CatKey;
      if (map.has(cat)) map.get(cat)!.push([type, def]);
    });
    map.forEach(arr => arr.sort(sortByUsage));
    return map;
  }, [usage]);

  const searching = query.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!searching) return [];
    const q = query.trim().toLowerCase();
    return Object.entries(NODE_REGISTRY)
      .filter(([type, def]) => {
        if (!isVisibleNode(type, def.category)) return false;
        return def.label.toLowerCase().includes(q) || def.category.includes(q) || type.includes(q);
      })
      .sort(sortByUsage);
  }, [query, searching, usage]);

  const flatItems = useMemo((): Array<{ type: 'cat'; cat: CatKey } | { type: 'node'; nodeType: string; label: string; cat: CatKey }> => {
    if (searching) {
      return searchResults.map(([nodeType, def]) => ({
        type: 'node' as const, nodeType, label: def.label, cat: def.category as CatKey,
      }));
    }
    const items: Array<{ type: 'cat'; cat: CatKey } | { type: 'node'; nodeType: string; label: string; cat: CatKey }> = [];
    CAT_ORDER.forEach(cat => {
      items.push({ type: 'cat', cat });
      if (openCat === cat) {
        const nodes = nodesByCategory.get(cat) || [];
        nodes.forEach(([nodeType, def]) => {
          items.push({ type: 'node', nodeType, label: def.label, cat });
        });
      }
    });
    return items;
  }, [searching, searchResults, openCat, nodesByCategory]);

  const pickNode = (nodeType: string) => {
    const next = { ...usage, [nodeType]: (usage[nodeType] || 0) + 1 };
    persistUsage(next);
    onSelect(nodeType);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHlIdx(i => Math.min(i + 1, flatItems.length - 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHlIdx(i => Math.max(i - 1, 0));
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const item = flatItems[hlIdx];
      if (!item) return;
      if (item.type === 'cat') setOpenCat(prev => prev === item.cat ? null : item.cat);
      else pickNode(item.nodeType);
      return;
    }
    if (e.key === 'ArrowRight') {
      const item = flatItems[hlIdx];
      if (item?.type === 'cat' && openCat !== item.cat) { setOpenCat(item.cat); e.preventDefault(); }
      return;
    }
    if (e.key === 'ArrowLeft') {
      const item = flatItems[hlIdx];
      if (item?.type === 'cat' && openCat === item.cat) { setOpenCat(null); e.preventDefault(); }
      return;
    }
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el || hlIdx < 0) return;
    const row = el.children[hlIdx] as HTMLElement | undefined;
    row?.scrollIntoView({ block: 'nearest' });
  }, [hlIdx]);

  useEffect(() => {
    setHlIdx(-1);
  }, [query, openCat]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onWheel = (ev: WheelEvent) => { ev.preventDefault(); ev.stopPropagation(); if (listRef.current) listRef.current.scrollTop += ev.deltaY; };
    el.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => el.removeEventListener('wheel', onWheel, true);
  }, []);

  return (
    <div
      ref={rootRef}
      className="nm-root"
      style={style}
      onMouseDown={e => e.stopPropagation()}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="nm-search-wrap">
        <input
          ref={inputRef}
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
          className="nm-search"
        />
      </div>

      <div ref={listRef} className="nm-list">
        {flatItems.map((item, i) => {
          const hl = i === hlIdx;
          if (item.type === 'cat') {
            const meta = (CATEGORIES as any)[item.cat];
            const isOpen = openCat === item.cat;
            const count = nodesByCategory.get(item.cat)?.length || 0;
            return (
              <div
                key={item.cat}
                className={`nm-cat ${hl ? 'nm-hl' : ''}`}
                onClick={() => setOpenCat(prev => prev === item.cat ? null : item.cat)}
                onMouseEnter={() => setHlIdx(i)}
              >
                <span className={`nm-arrow ${isOpen ? 'open' : ''}`}>&#9656;</span>
                <span className="nm-cat-name" style={{ color: meta?.color }}>{meta?.label || item.cat}</span>
                <span className="nm-cat-count">{count}</span>
              </div>
            );
          }
          const catMeta = (CATEGORIES as any)[item.cat];
          return (
            <div
              key={item.nodeType}
              className={`nm-node ${hl ? 'nm-hl' : ''} ${searching ? '' : 'nm-indented'}`}
              onClick={() => pickNode(item.nodeType)}
              onMouseEnter={() => setHlIdx(i)}
            >
              <span className="nm-node-dot" style={{ background: catMeta?.color || '#888' }} />
              <span className="nm-node-label">{item.label}</span>
              {searching && <span className="nm-node-cat" style={{ color: catMeta?.color }}>{catMeta?.label}</span>}
            </div>
          );
        })}

        {flatItems.length === 0 && searching && (
          <div className="nm-empty">No matches</div>
        )}
      </div>
    </div>
  );
}
