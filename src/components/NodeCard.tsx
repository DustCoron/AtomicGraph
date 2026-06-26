
import React from 'react';
import { DataType, NodeData, EdgeData } from '../core/types';
import { NODE_REGISTRY, CATEGORIES } from '../core/registry';
import { isOutputNodeType } from '../core/output';

// Tightened after the Inspector migration removed params from cards: card
// is now title + thumbnail + sockets only, so we shrank the preview, the
// card width, and the socket row height to remove dead space that used to
// be filled by parameter widgets. Numbers chosen to keep long node labels
// like "Highpass Grayscale" mostly visible in the header (truncation falls
// back to the title tooltip when needed) while pulling the layout tighter.
//
// IMPORTANT: GraphEditor.tsx has its own copies of NW/HDR/PREVIEW_H/ROW for
// hit-testing and socket positioning math — keep both in sync or sockets
// will desync from the rendered card.
const ROW = 20;
const HDR = 28;
const PREVIEW_SIZE = 100;
// Just 4px of vertical padding around the preview — anything more reads as
// dead space now that params no longer live below it.
const PREVIEW_H = PREVIEW_SIZE + 4;
// Card width hugs the preview: PREVIEW_SIZE + 10px symmetrical padding. The
// category text badge ("FILTER" / "GEN" / etc) was removed from the header
// — its info is already conveyed by the colored header bar, and the text
// was eating ~30px of horizontal room that pushed the title to truncate.
const NW = PREVIEW_SIZE + 20;
const NW_REMOTE = NW + 30;
const PR = 6;
const NODE_BOTTOM_PAD = 4;

const catColor = (t: string) => {
  const cat = NODE_REGISTRY[t]?.category;
  return (CATEGORIES as any)[cat]?.color ?? "#888";
};

/**
 * Card height now only accounts for **sockets** (input + output rows), the
 * preview thumbnail and the header. Parameter widgets live in the Inspector
 * panel — the card itself is title + thumbnail + sockets. Removing params
 * from the card cuts ~30× the DOM weight per graph and keeps reconcile fast.
 *
 * NOTE: keep in sync with `nodeHeight()` in GraphEditor.tsx — both must
 * compute the same height or socket positions desync from the card.
 */
const nodeH = (t: string) => {
  const d = NODE_REGISTRY[t];
  if (!d) return HDR + ROW + NODE_BOTTOM_PAD;
  const inputRows = d.inputs.length;
  const outputRows = d.outputs?.length ?? 1;
  return HDR + PREVIEW_H + Math.max(inputRows, outputRows, 1) * ROW + NODE_BOTTOM_PAD;
};

// Param/ColorSwatch/LevelsCurve were inline widgets on the card. They moved
// to `src/components/Inspector.tsx` along with everything else that lets the
// user *edit* a node. The card is now display-only (title + thumbnail +
// sockets), which is what made the Inspector refactor worth doing.

interface NodeCardProps {
  node: NodeData;
  edges: EdgeData[];
  /**
   * Live engine resolution at the time this preview was rendered. Shown as
   * a small badge in the preview corner so it's obvious when a thumbnail
   * is at 128 (Safe Load warm-up resolution) vs the requested target. The
   * value comes from `graph.resolution` upstream.
   */
  previewResolution?: number;
  connectedInputPorts?: ReadonlySet<number>;
  connectedOutputPorts?: ReadonlySet<number>;
  allNodes?: NodeData[];
  isSel: boolean;
  isConn: boolean;
  connFrom: string | null;
  connFromPort?: number;
  connFromType?: DataType;
  snapTarget: { nodeId: string; portIndex: number; compat: 'exact' | 'cast' | 'invalid' } | null;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onOut: (e: React.MouseEvent, id: string, portIndex?: number) => void;
  onIn: (e: React.MouseEvent, id: string, port: number) => void;
  onUpdate: (id: string, k: string, v: any) => void;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
  onOpen?: (id: string) => void;
  previewUrl?: string;
  compileMs?: number;
  lodMode?: 'full' | 'compact';
}

const COMPAT_COLORS = { exact: '#22c55e', cast: '#eab308', invalid: '#ef4444' } as const;

const dataTypeColor = (type: DataType): string => {
  const map: Record<DataType, string> = {
    float: '#94a3b8', vec2: '#3b82f6', vec3: '#10b981', vec4: '#8b5cf6',
    Texture2D: '#a78bfa', Field: '#c084fc',
  };
  return map[type] ?? '#94a3b8';
};

function portCompat(fromType?: DataType, toType?: DataType): 'exact' | 'cast' | 'invalid' {
  if (!fromType || !toType) return 'exact';
  if (fromType === toType) return 'exact';
  const nums = new Set<DataType>(['float', 'vec2', 'vec3', 'vec4']);
  if (nums.has(fromType) && nums.has(toType)) return 'cast';
  return 'invalid';
}

function buildNodeTooltip(def: (typeof NODE_REGISTRY)[string], node: NodeData): string {
  const cat = (CATEGORIES as any)[def.category]?.label ?? def.category.toUpperCase();
  const inPorts = def.inputs.length > 0 ? def.inputs.map((p) => `${p.label}:${p.type}`).join(', ') : 'none';
  const outPorts = def.outputs.length > 0 ? def.outputs.map((p) => `${p.label}:${p.type}`).join(', ') : 'none';
  return [
    `${def.label} (${node.type})`,
    `Category: ${cat}`,
    `Inputs: ${inPorts}`,
    `Outputs: ${outPorts}`,
    'Tip: double-click to open atom/subgraph',
  ].join('\n');
}

/**
 * Remote node card: now display-only like every other card. The binding
 * editor (target / param / value) lives in the Inspector panel. The card
 * shows the resolved binding as a compact label so the user can see at a
 * glance which node + parameter is exposed.
 */
function RemoteCard({ node, allNodes, isSel, onDrag, onDelete, onSelect }: {
  node: NodeData; allNodes: NodeData[]; isSel: boolean;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}) {
  const ac = '#0e4d6b';
  const targetId = node.params.target || '';
  const paramKey = node.params.key || '';
  const val = node.params.value ?? 0.5;
  const label = node.params.label || paramKey || 'Value';

  const targetNode = allNodes.find(n => n.id === targetId);
  const targetDef = targetNode ? NODE_REGISTRY[targetNode.type] : null;
  const targetLabel = targetDef?.label ?? (targetId ? `(${targetId})` : '— unbound —');
  const paramDisplay = paramKey || '—';

  const rh = HDR + 64;

  return (
    <div
      draggable={false}
      title="Remote node — open Inspector to edit binding."
      onMouseDown={e => { e.stopPropagation(); onSelect(node.id); }}
      style={{
        position: 'absolute', left: node.x, top: node.y, width: NW_REMOTE, height: rh,
        background: '#0c0c17', border: `1px solid ${isSel ? ac : ac + '22'}`, borderRadius: 7,
        boxShadow: isSel ? `0 0 0 2.5px ${ac}50,0 8px 36px #000000cc` : `0 4px 24px #000000aa`,
        pointerEvents: 'all', overflow: 'visible',
      }}
    >
      <div onMouseDown={e => { e.preventDefault(); onDrag(e, node.id); }} style={{
        height: HDR, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8, cursor: 'grab',
        background: ac, borderBottom: `1px solid ${ac}99`, borderRadius: '6px 6px 0 0', userSelect: 'none',
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#ffffff', flex: 1, letterSpacing: .3 }}>{label}</span>
        <button
          onMouseDown={e => e.stopPropagation()}
          onClick={e => { e.stopPropagation(); onDelete(node.id); }}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: '0 1px', transition: 'color .12s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
          onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
        >×</button>
      </div>
      <div style={{ padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 9, color: '#7b8aa6', letterSpacing: 0.6, textTransform: 'uppercase' }}>{targetLabel}</span>
          <span style={{ fontSize: 11, color: '#f8fafc', fontFamily: 'monospace' }}>{Number(val).toFixed(2)}</span>
        </div>
        <div style={{ fontSize: 9, color: '#6f7a8e', letterSpacing: 0.5, fontFamily: 'monospace' }}>{paramDisplay}</div>
      </div>
    </div>
  );
}

export function NodeCard({ node, edges, connectedInputPorts, connectedOutputPorts, allNodes, isSel, isConn, connFrom, connFromPort, connFromType, snapTarget, onDrag, onOut, onIn, onUpdate, onDelete, onSelect, onOpen, previewUrl, compileMs, previewResolution, lodMode = 'full' }: NodeCardProps) {
  const def = NODE_REGISTRY[node.type];
  if (!def) return null;
  const compact = lodMode === 'compact' && !isSel && !isConn;

  if (node.type === 'remote' && allNodes) {
    return <RemoteCard node={node} allNodes={allNodes} isSel={isSel} onDrag={onDrag} onDelete={onDelete} onSelect={onSelect} />;
  }

  const ac = catColor(node.type);
  const nh = nodeH(node.type);
  const catMeta = (CATEGORIES as any)[def.category];
  const nodeTooltip = buildNodeTooltip(def, node);

  return (
    <div
      draggable={false}
      title={nodeTooltip}
      onMouseDown={e => { e.stopPropagation(); onSelect(node.id); }}
      onDoubleClick={e => { e.stopPropagation(); onSelect(node.id); onOpen?.(node.id); }}
      style={{
      position: "absolute", left: node.x, top: node.y, width: NW, height: nh,
      background: "#0c0c17",
      border: `1px solid ${isSel ? ac : ac + "22"}`,
      borderRadius: 7,
      boxShadow: isSel ? `0 0 0 2.5px ${ac}50,0 8px 36px #000000cc,inset 0 1px 0 #ffffff08` : `0 4px 24px #000000aa,inset 0 1px 0 #ffffff05`,
      pointerEvents: "all", overflow: "visible", transition: "border-color .1s,box-shadow .1s",
    }}>
      <div
        onMouseDown={e => { e.preventDefault(); onDrag(e, node.id); }}
        title={catMeta?.label ?? def.category}
        style={{
          height: HDR, display: "flex", alignItems: "center", padding: "0 6px", gap: 4, cursor: "grab",
          background: ac, borderBottom: `1px solid ${ac}99`, borderRadius: "6px 6px 0 0", userSelect: "none",
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, color: "#ffffff", flex: 1, letterSpacing: .2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{def.label}</span>
        {!isOutputNodeType(node.type) && (
          <button onMouseDown={e => e.stopPropagation()} onClick={e => { e.stopPropagation(); onDelete(node.id); }}
            style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 13, lineHeight: 1, padding: "0 1px", transition: "color .12s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#f87171"} onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>×</button>
        )}
        {!isOutputNodeType(node.type) && def.outputs?.length === 1 && (
          <div onClick={e => onOut(e, node.id, 0)} style={{
            position: "absolute", right: -PR, top: HDR / 2 - PR, width: PR * 2, height: PR * 2, borderRadius: "50%",
            background: connFrom === node.id ? "#ffffff" : "#ffffff40", border: `2px solid #ffffff`, cursor: "crosshair", zIndex: 10,
            boxShadow: connFrom === node.id ? `0 0 9px ${ac}` : "none", transition: "all .1s",
          }} />
        )}
      </div>
      {!compact && (
      <div style={{
        height: PREVIEW_H,
        // 2px breathing room above and below the preview, centered
        // horizontally. Card width is now tuned so the preview almost fills
        // the inner box (10px symmetrical padding via flex center).
        padding: '2px 0',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div
          style={{
            width: PREVIEW_SIZE,
            height: PREVIEW_SIZE,
            borderRadius: 4,
            border: "1px solid #2a2e3a",
            background: '#090d16',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 0 1px #ffffff08',
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
          }}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={`${def.label} preview`}
              draggable={false}
              style={{ width: PREVIEW_SIZE, height: PREVIEW_SIZE, display: 'block', imageRendering: 'pixelated', userSelect: 'none', pointerEvents: 'none' }}
            />
          ) : (
            <div style={{ width: PREVIEW_SIZE, height: PREVIEW_SIZE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#4a5673', letterSpacing: 0.6 }}>
              {PREVIEW_SIZE}x{PREVIEW_SIZE}
            </div>
          )}
          {previewResolution && previewResolution > 0 ? (
            <div
              title={`Engine resolution: ${previewResolution}px`}
              style={{
                position: 'absolute',
                bottom: 3,
                right: 3,
                padding: '1px 4px',
                borderRadius: 2,
                background: 'rgba(8, 12, 22, 0.78)',
                color: '#8aa0c8',
                fontSize: 9,
                fontFamily: 'monospace',
                letterSpacing: 0.3,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {previewResolution}
            </div>
          ) : null}
        </div>
      </div>
      )}
      {!compact && def.inputs.map((port, i) => {
        const connected = connectedInputPorts
          ? connectedInputPorts.has(i)
          : edges.some(e => e.toId === node.id && e.toPort === i);
        const isSelf = connFrom === node.id;
        const isSnapped = snapTarget?.portIndex === i;
        const compat = isConn && !isSelf ? portCompat(connFromType, port.type as DataType) : null;
        const compatColor = compat ? COMPAT_COLORS[compat] : null;

        const portTypeColor = dataTypeColor(port.type as DataType);
        let portBg = connected ? portTypeColor + "50" : "#0c0c1a";
        let portBorder = connected ? portTypeColor : portTypeColor + "66";
        let portShadow = 'none';
        let portScale = 1;

        if (isConn && !isSelf && compat) {
          portBorder = compatColor!;
          if (isSnapped) {
            portBg = compatColor! + '55';
            portShadow = `0 0 10px ${compatColor}aa, 0 0 20px ${compatColor}44`;
            portScale = 1.4;
          } else {
            portBg = compatColor! + '18';
            portShadow = `0 0 6px ${compatColor}44`;
            portScale = 1.1;
          }
        } else if (isConn && isSelf) {
          portBorder = '#ef444444';
          portBg = '#ef444412';
        }

        return (
          <div key={i} style={{ position: "relative", height: ROW, display: "flex", alignItems: "center" }}>
            <div onClick={e => onIn(e, node.id, i)} style={{
              position: "absolute", left: -PR, top: ROW / 2 - PR, width: PR * 2, height: PR * 2, borderRadius: "50%",
              background: portBg,
              border: `2px solid ${portBorder}`,
              boxShadow: portShadow,
              transform: `scale(${portScale})`,
              cursor: isConn && !isSelf ? "crosshair" : "default", zIndex: 10,
              transition: "all .15s ease",
            }} />
            <span style={{ marginLeft: 13, fontSize: 10, color: "#e2e8f0", letterSpacing: .8 }}>{port.label}</span>
            {isConn && !isSelf && compat && compat !== 'exact' && (
              <span style={{
                marginLeft: 4, fontSize: 7, color: compatColor, letterSpacing: .5,
                opacity: isSnapped ? 1 : 0.6, transition: 'opacity .15s',
              }}>
                {compat === 'cast' ? 'cast' : 'mismatch'}
              </span>
            )}
          </div>
        );
      })}
      {/*
        Inline param widgets used to live here (sliders/selects/checkboxes,
        plus the levels curve and uniform_color swatch). They moved to the
        Inspector side panel so each card stays light and the graph view
        doesn't drag a forest of inputs through every re-render. Outputs
        with > 1 port still render directly below the inputs; the layout
        math relies on them sitting where the params used to sit.
      */}
      {!compact && !isOutputNodeType(node.type) && def.outputs && def.outputs.length > 1 && def.outputs.map((port, i) => {
        const portTypeColor = dataTypeColor(port.type as DataType);
        const connected = connectedOutputPorts
          ? connectedOutputPorts.has(i)
          : edges.some(e => e.fromId === node.id && e.fromPort === i);
        return (
          <div key={i} style={{ position: "relative", height: ROW, display: "flex", alignItems: "center" }}>
            <span style={{ marginLeft: 13, fontSize: 10, color: "#e2e8f0", letterSpacing: .8, flex: 1 }}>{port.label}</span>
            <div onClick={e => onOut(e, node.id, i)} style={{
              position: "absolute", right: -PR, top: ROW / 2 - PR, width: PR * 2, height: PR * 2, borderRadius: "50%",
              background: connFrom === node.id ? portTypeColor + "80" : connected ? portTypeColor + "50" : "#0c0c1a",
              border: `2px solid ${connected ? portTypeColor : portTypeColor + "66"}`, cursor: "crosshair", zIndex: 10,
              boxShadow: connFrom === node.id && connFromPort === i ? `0 0 9px ${ac}` : "none", transition: "all .1s",
            }} />
          </div>
        );
      })}
      {compact && (
        <div style={{ height: nh - HDR, display: 'grid', placeItems: 'center', color: '#7f90b3', fontSize: 9, letterSpacing: 0.4 }}>
          {def.inputs.length} IN / {def.outputs.length} OUT
        </div>
      )}
      {compileMs != null && (
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 4,
          fontSize: 14, fontWeight: 700, fontFamily: 'monospace', lineHeight: 1,
          color: compileMs > 200 ? '#ef4444' : compileMs > 15 ? '#eab308' : '#22c55e',
          letterSpacing: 0.5, pointerEvents: 'none', userSelect: 'none',
        }}>
          {compileMs.toFixed(1)}ms
        </div>
      )}
    </div>
  );
}
