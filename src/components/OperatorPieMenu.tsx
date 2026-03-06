import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORIES, NODE_REGISTRY } from '../core/registry';

interface NodePieMenuProps {
  x: number;
  y: number;
  graphX: number;
  graphY: number;
  onAddNode: (type: string, gx: number, gy: number) => void;
  onAddFrame?: (gx: number, gy: number) => void;
  onClose: () => void;
}

const CAT_ORDER = ['gen', 'noises', 'math', 'trig', 'interp', 'filter'] as const;
type CatKey = (typeof CAT_ORDER)[number];
const isVisibleNode = (type: string, category: string) => category !== 'output' && !type.startsWith('atom_input');

const RADIUS = 100;
const INNER = 36;
const USAGE_KEY = 'nt.node.usage.v1';

export function OperatorPieMenu({ x, y, graphX, graphY, onAddNode, onAddFrame, onClose }: NodePieMenuProps) {
  const [activeCat, setActiveCat] = useState<CatKey | null>(null);
  const [hoverSlice, setHoverSlice] = useState(-1);
  const [hoverNode, setHoverNode] = useState(-1);
  const [query, setQuery] = useState('');
  const [usage, setUsage] = useState<Record<string, number>>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const cx = useMemo(() => Math.max(RADIUS + 20, Math.min(window.innerWidth - RADIUS - 20, x)), [x]);
  const cy = useMemo(() => Math.max(RADIUS + 20, Math.min(window.innerHeight - RADIUS - 20, y)), [y]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(USAGE_KEY);
      if (raw) setUsage(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const sortNodes = useCallback((a: [string, any], b: [string, any]) => {
    const ua = usage[a[0]] || 0, ub = usage[b[0]] || 0;
    if (ua !== ub) return ub - ua;
    return a[1].label.localeCompare(b[1].label);
  }, [usage]);

  const nodesByCategory = useMemo(() => {
    const map = new Map<CatKey, [string, (typeof NODE_REGISTRY)[string]][]>();
    CAT_ORDER.forEach(c => map.set(c, []));
    Object.entries(NODE_REGISTRY).forEach(([type, def]) => {
      if (!isVisibleNode(type, def.category)) return;
      const cat = def.category as CatKey;
      if (map.has(cat)) map.get(cat)!.push([type, def]);
    });
    map.forEach(arr => arr.sort(sortNodes));
    return map;
  }, [sortNodes]);

  const searching = query.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!searching) return [];
    const q = query.trim().toLowerCase();
    return Object.entries(NODE_REGISTRY)
      .filter(([type, def]) => isVisibleNode(type, def.category) && (
        def.label.toLowerCase().includes(q) || def.category.includes(q) || type.includes(q)
      ))
      .sort(sortNodes);
  }, [query, searching, sortNodes]);

  const nodeList = useMemo(() => {
    if (searching) return searchResults;
    if (activeCat) return nodesByCategory.get(activeCat) || [];
    return [];
  }, [searching, searchResults, activeCat, nodesByCategory]);

  const showList = nodeList.length > 0 || (searching && nodeList.length === 0);

  const pickNode = useCallback((nodeType: string) => {
    const next = { ...usage, [nodeType]: (usage[nodeType] || 0) + 1 };
    setUsage(next);
    try { localStorage.setItem(USAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    onAddNode(nodeType, graphX, graphY);
  }, [usage, onAddNode, graphX, graphY]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      const num = parseInt(e.key);
      if (num >= 1 && num <= 5 && !searching) {
        e.preventDefault();
        setActiveCat(CAT_ORDER[num - 1]);
        setHoverNode(-1);
        return;
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose, searching]);

  useEffect(() => {
    setHoverNode(-1);
  }, [activeCat, query]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const sliceAngle = (2 * Math.PI) / CAT_ORDER.length;
  const startAngle = -Math.PI / 2 - sliceAngle / 2;

  const slicePath = (i: number) => {
    const a1 = startAngle + i * sliceAngle;
    const a2 = a1 + sliceAngle;
    const r1 = INNER + 6;
    const r2 = RADIUS;
    const x1 = Math.cos(a1), y1 = Math.sin(a1);
    const x2 = Math.cos(a2), y2 = Math.sin(a2);
    const large = sliceAngle > Math.PI ? 1 : 0;
    return [
      `M ${x1 * r1} ${y1 * r1}`,
      `L ${x1 * r2} ${y1 * r2}`,
      `A ${r2} ${r2} 0 ${large} 1 ${x2 * r2} ${y2 * r2}`,
      `L ${x2 * r1} ${y2 * r1}`,
      `A ${r1} ${r1} 0 ${large} 0 ${x1 * r1} ${y1 * r1}`,
      'Z'
    ].join(' ');
  };

  const labelPos = (i: number) => {
    const mid = startAngle + (i + 0.5) * sliceAngle;
    const r = (INNER + RADIUS) / 2 + 4;
    return { x: Math.cos(mid) * r, y: Math.sin(mid) * r };
  };

  return (
    <div
      ref={rootRef}
      style={{ position: 'fixed', inset: 0, zIndex: 1300 }}
      onMouseDown={onClose}
      onContextMenu={e => e.preventDefault()}
    >
      {!showList && (
        <svg
          width={RADIUS * 2 + 40}
          height={RADIUS * 2 + 40}
          style={{
            position: 'fixed',
            left: cx - RADIUS - 20,
            top: cy - RADIUS - 20,
            overflow: 'visible',
            filter: 'drop-shadow(0 8px 32px #00000099)',
          }}
          onMouseDown={e => e.stopPropagation()}
        >
          <g transform={`translate(${RADIUS + 20}, ${RADIUS + 20})`}>
            {CAT_ORDER.map((cat, i) => {
              const meta = (CATEGORIES as any)[cat];
              const color = meta?.color || '#888';
              const isHover = hoverSlice === i;
              const isActive = activeCat === cat;
              const lp = labelPos(i);
              const count = nodesByCategory.get(cat)?.length || 0;
              return (
                <g key={cat}>
                  <path
                    d={slicePath(i)}
                    fill={isActive ? `${color}2f` : isHover ? `${color}1d` : '#1f2228'}
                    stroke={isActive ? `${color}94` : isHover ? `${color}60` : '#353b46'}
                    strokeWidth={isActive ? 1.5 : 1}
                    style={{ cursor: 'pointer', transition: 'fill 0.1s, stroke 0.1s' }}
                    onMouseEnter={() => setHoverSlice(i)}
                    onMouseLeave={() => setHoverSlice(h => h === i ? -1 : h)}
                    onMouseDown={e => {
                      e.stopPropagation();
                      setActiveCat(prev => prev === cat ? null : cat);
                    }}
                  />
                  <text
                    x={lp.x}
                    y={lp.y - 5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isActive || isHover ? color : '#a0a8bc'}
                    fontSize={10}
                    fontWeight={700}
                    letterSpacing={0.8}
                    style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
                  >
                    {meta?.label || cat.toUpperCase()}
                  </text>
                  <text
                    x={lp.x}
                    y={lp.y + 9}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isActive || isHover ? `${color}c4` : '#6d7488'}
                    fontSize={8}
                    style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
                  >
                    {count}
                  </text>
                  <text
                    x={lp.x}
                    y={lp.y + 22}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#7a8399"
                    fontSize={8}
                    fontWeight={600}
                    style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}

            <circle
              cx={0} cy={0} r={INNER}
              fill="#1c2027"
              stroke={activeCat ? `${(CATEGORIES as any)[activeCat]?.color}66` : '#353b46'}
              strokeWidth={1.5}
            />
            <text
              x={0} y={-3}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#a5aec2"
              fontSize={9}
              fontWeight={600}
              letterSpacing={0.5}
              style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
            >
              ADD
            </text>
            <text
              x={0} y={10}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#7a8399"
              fontSize={7}
              style={{ pointerEvents: 'none', fontFamily: 'inherit' }}
            >
              RMB
            </text>
          </g>
        </svg>
      )}

      {!showList && (
        <div
          style={{
            position: 'fixed',
            left: cx - 84,
            top: cy + RADIUS + 8,
            width: 168,
          }}
          onMouseDown={e => e.stopPropagation()}
        >
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type to search..."
            className="pie-search"
          />
          {onAddFrame && (
            <button
              onMouseDown={(e) => { e.stopPropagation(); onAddFrame(graphX, graphY); }}
              className="pie-list-back"
              style={{ marginTop: 6, width: '100%' }}
            >
              Add Frame
            </button>
          )}
        </div>
      )}

      {showList && (
        <div
          className="pie-list"
          style={{ left: cx - 110, top: cy - 180 }}
          onMouseDown={e => e.stopPropagation()}
        >
          <div className="pie-list-header">
            {searching ? (
              <span className="pie-list-title">Search: {query}</span>
            ) : (
              <span className="pie-list-title" style={{ color: (CATEGORIES as any)[activeCat!]?.color }}>
                {(CATEGORIES as any)[activeCat!]?.label || activeCat}
              </span>
            )}
            <button
              className="pie-list-back"
              onClick={() => { setActiveCat(null); setQuery(''); }}
            >Back</button>
          </div>
          <div className="pie-list-search-wrap">
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Filter..."
              className="pie-search"
              autoFocus
            />
          </div>
          <div className="pie-list-items">
            {nodeList.map(([type, def], i) => {
              const catMeta = (CATEGORIES as any)[def.category];
              return (
                <div
                  key={type}
                  className={`pie-node ${hoverNode === i ? 'pie-node-hl' : ''}`}
                  onMouseEnter={() => setHoverNode(i)}
                  onMouseDown={e => { e.stopPropagation(); pickNode(type); }}
                >
                  <span className="pie-node-dot" style={{ background: catMeta?.color || '#888' }} />
                  <span className="pie-node-label">{def.label}</span>
                  {searching && (
                    <span className="pie-node-cat" style={{ color: catMeta?.color }}>
                      {catMeta?.label}
                    </span>
                  )}
                </div>
              );
            })}
            {nodeList.length === 0 && (
              <div className="pie-empty">No matches</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
