
import React from 'react';
import { DataType, NodeData, EdgeData } from '../core/types';
import { NODE_REGISTRY, CATEGORIES } from '../core/registry';
import { isOutputNodeType } from '../core/output';

const ROW = 28;
const HDR = 36;
const PREVIEW_SIZE = 128;
const PREVIEW_H = PREVIEW_SIZE + 12;
const NW = 210;
const NW_REMOTE = 240;
const PR = 6;

const catColor = (t: string) => {
  const cat = NODE_REGISTRY[t]?.category;
  return (CATEGORIES as any)[cat]?.color ?? "#888";
};

const nodeH = (t: string) => {
  const d = NODE_REGISTRY[t];
  if (!d) return HDR + ROW + 10;
  const inputParamRows = d.inputs.length + Object.keys(d.params).length;
  const outputRows = d.outputs?.length ?? 1;
  return HDR + PREVIEW_H + Math.max(inputParamRows, outputRows, 1) * ROW + 10;
};

interface ParamProps {
  pk: string;
  val: any;
  meta: any;
  accent?: string;
  nodeId: string;
  onUpdate: (id: string, k: string, v: any) => void;
}

function Param({ pk, val, meta, nodeId, onUpdate }: ParamProps) {
  if (!meta) return null;
  if (meta.type === 'float') {
    const dec = meta.step < 0.05 ? 3 : meta.step < 1 ? 2 : 1;
    return (
      <div style={{ padding: "3px 10px", height: ROW, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
          <span style={{ fontSize: 10, color: "#e2e8f0", letterSpacing: 1.2, textTransform: "uppercase", userSelect: "none" }}>{pk}</span>
          <span style={{ fontSize: 11, color: "#f8fafc", fontFamily: "monospace" }}>{Number(val).toFixed(dec)}</span>
        </div>
        <input type="range" min={meta.min} max={meta.max} step={meta.step} value={val}
          onMouseDown={e => e.stopPropagation()}
          onChange={e => onUpdate(nodeId, pk, parseFloat(e.target.value))}
          style={{ width: "100%", accentColor: "#64748b", cursor: "pointer", height: 2 }} />
      </div>
    );
  }
  if (meta.type === 'select') {
    return (
      <div style={{ display: "flex", alignItems: "center", height: ROW, padding: "0 10px", gap: 6 }}>
        <span style={{ fontSize: 10, color: "#e2e8f0", letterSpacing: 1.2, textTransform: "uppercase", userSelect: "none", flex: 1 }}>{pk}</span>
        <select value={val} onMouseDown={e => e.stopPropagation()} onChange={e => onUpdate(nodeId, pk, e.target.value)}
          style={{ background: "#0b0b17", border: "1px solid #334155", color: "#f1f5f9", borderRadius: 3, padding: "2px 5px", fontSize: 10, fontFamily: "inherit", cursor: "pointer", outline: "none", maxWidth: 115 }}>
          {meta.options.map((o: string) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    );
  }
  if (meta.type === 'bool') {
    return (
      <div style={{ display: "flex", alignItems: "center", height: ROW, padding: "0 10px", gap: 6 }}>
        <span style={{ fontSize: 10, color: "#e2e8f0", letterSpacing: 1.2, textTransform: "uppercase", userSelect: "none", flex: 1 }}>{pk}</span>
        <input type="checkbox" checked={!!val} onMouseDown={e => e.stopPropagation()} onChange={e => onUpdate(nodeId, pk, e.target.checked)}
          style={{ accentColor: "#94a3b8", cursor: "pointer" }} />
      </div>
    );
  }
  return null;
}

interface NodeCardProps {
  node: NodeData;
  edges: EdgeData[];
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

function RemoteCard({ node, allNodes, isSel, onDrag, onUpdate, onDelete, onSelect, compact }: {
  node: NodeData; allNodes: NodeData[]; isSel: boolean;
  onDrag: (e: React.MouseEvent, id: string) => void;
  onUpdate: (id: string, k: string, v: any) => void;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
  compact: boolean;
}) {
  const ac = '#0e4d6b';
  const targetId = node.params.target || '';
  const paramKey = node.params.key || '';
  const val = node.params.value ?? 0.5;
  const label = node.params.label || paramKey || 'Value';

  const targetNode = allNodes.find(n => n.id === targetId);
  const targetDef = targetNode ? NODE_REGISTRY[targetNode.type] : null;
  const paramDef = targetDef?.params?.[paramKey];
  const pMin = paramDef?.min ?? 0;
  const pMax = paramDef?.max ?? 1;
  const pStep = paramDef?.step ?? 0.01;
  const dec = pStep < 0.05 ? 3 : pStep < 1 ? 2 : 1;

  const candidates = allNodes.filter(n => !isOutputNodeType(n.type) && n.type !== 'remote' && n.id !== node.id);
  const paramKeys = targetDef ? Object.keys(targetDef.params).filter(k => targetDef.params[k].type === 'float' || targetDef.params[k].type === 'int') : [];

  const rh = HDR + 28 * 3 + 48 + 10;

  return (
    <div draggable={false} title="Remote node: bind and drive another node parameter from one control." onMouseDown={e => { e.stopPropagation(); onSelect(node.id); }} style={{
      position: 'absolute', left: node.x, top: node.y, width: NW_REMOTE, height: rh,
      background: '#0c0c17', border: `1px solid ${isSel ? ac : ac + '22'}`, borderRadius: 7,
      boxShadow: isSel ? `0 0 0 2.5px ${ac}50,0 8px 36px #000000cc` : `0 4px 24px #000000aa`,
      pointerEvents: 'all', overflow: 'visible',
    }}>
      <div onMouseDown={e => { e.preventDefault(); onDrag(e, node.id); }} style={{
        height: HDR, display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8, cursor: 'grab',
        background: ac, borderBottom: `1px solid ${ac}99`, borderRadius: '6px 6px 0 0', userSelect: 'none',
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#ffffff', flex: 1, letterSpacing: .3 }}>Remote</span>
        <button onMouseDown={e => e.stopPropagation()} onClick={e => { e.stopPropagation(); onDelete(node.id); }}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: '0 1px', transition: 'color .12s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#f87171'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>x</button>
      </div>
      {!compact ? (
        <>
          <div style={{ padding: '4px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: 28, gap: 6 }}>
              <span style={{ fontSize: 9, color: '#cbd5e1', letterSpacing: 1, textTransform: 'uppercase', width: 48 }}>Target</span>
              <select value={targetId} onMouseDown={e => e.stopPropagation()}
                onChange={e => onUpdate(node.id, 'target', e.target.value)}
                style={{ background: '#0b0b17', border: '1px solid #334155', color: '#f1f5f9', borderRadius: 3, padding: '2px 5px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer', outline: 'none', flex: 1 }}>
                <option value="">-- select --</option>
                {candidates.map(n => {
                  const d = NODE_REGISTRY[n.type];
                  return <option key={n.id} value={n.id}>{d?.label || n.type} ({n.id})</option>;
                })}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', height: 28, gap: 6 }}>
              <span style={{ fontSize: 9, color: '#cbd5e1', letterSpacing: 1, textTransform: 'uppercase', width: 48 }}>Param</span>
              <select value={paramKey} onMouseDown={e => e.stopPropagation()}
                onChange={e => {
                  onUpdate(node.id, 'key', e.target.value);
                  if (targetNode && e.target.value in targetNode.params) {
                    onUpdate(node.id, 'value', targetNode.params[e.target.value]);
                  }
                }}
                style={{ background: '#0b0b17', border: '1px solid #334155', color: '#f1f5f9', borderRadius: 3, padding: '2px 5px', fontSize: 10, fontFamily: 'inherit', cursor: 'pointer', outline: 'none', flex: 1 }}>
                <option value="">-- select --</option>
                {paramKeys.map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', height: 28, gap: 6 }}>
              <span style={{ fontSize: 9, color: '#cbd5e1', letterSpacing: 1, textTransform: 'uppercase', width: 48 }}>Label</span>
              <input type="text" value={node.params.label || ''} placeholder={paramKey || 'Label'}
                onMouseDown={e => e.stopPropagation()}
                onChange={e => onUpdate(node.id, 'label', e.target.value)}
                style={{ background: '#0b0b17', border: '1px solid #334155', color: '#f1f5f9', borderRadius: 3, padding: '2px 5px', fontSize: 10, fontFamily: 'inherit', outline: 'none', flex: 1 }} />
            </div>
          </div>
          {paramDef && (
            <div style={{ padding: '4px 10px 8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#e2e8f0', letterSpacing: 0.3 }}>{label}</span>
                <span style={{ fontSize: 11, color: '#f8fafc', fontFamily: 'monospace' }}>{Number(val).toFixed(dec)}</span>
              </div>
              <input type="range" min={pMin} max={pMax} step={pStep} value={val}
                onMouseDown={e => e.stopPropagation()}
                onChange={e => onUpdate(node.id, 'value', parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#64748b', cursor: 'pointer', height: 6 }} />
            </div>
          )}
        </>
      ) : (
        <div style={{ height: rh - HDR, display: 'grid', placeItems: 'center', color: '#8ea3c8', fontSize: 10, letterSpacing: 0.4 }}>
          REMOTE LINK
        </div>
      )}
    </div>
  );
}

export function NodeCard({ node, edges, allNodes, isSel, isConn, connFrom, connFromPort, connFromType, snapTarget, onDrag, onOut, onIn, onUpdate, onDelete, onSelect, onOpen, previewUrl, compileMs, lodMode = 'full' }: NodeCardProps) {
  const def = NODE_REGISTRY[node.type];
  if (!def) return null;
  const compact = lodMode === 'compact' && !isSel && !isConn;

  if (node.type === 'remote' && allNodes) {
    return <RemoteCard node={node} allNodes={allNodes} isSel={isSel} onDrag={onDrag} onUpdate={onUpdate} onDelete={onDelete} onSelect={onSelect} compact={compact} />;
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
      <div onMouseDown={e => { e.preventDefault(); onDrag(e, node.id); }} style={{
        height: HDR, display: "flex", alignItems: "center", padding: "0 10px", gap: 8, cursor: "grab",
        background: ac, borderBottom: `1px solid ${ac}99`, borderRadius: "6px 6px 0 0", userSelect: "none",
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#ffffff", flex: 1, letterSpacing: .3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{def.label}</span>
        <span style={{ fontSize: 8, color: '#dbe6ffcc', letterSpacing: 0.4, textTransform: 'uppercase' }}>{catMeta?.label ?? def.category}</span>
        {!isOutputNodeType(node.type) && (
          <button onMouseDown={e => e.stopPropagation()} onClick={e => { e.stopPropagation(); onDelete(node.id); }}
            style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: "0 1px", transition: "color .12s" }}
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
      <div style={{ height: PREVIEW_H, padding: '6px 10px 4px 10px', boxSizing: 'border-box' }}>
        <div
          style={{
            width: PREVIEW_SIZE,
            height: PREVIEW_SIZE,
            borderRadius: 4,
            border: "1px solid #2a2e3a",
            background: '#090d16',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 0 1px #ffffff08'
          }}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={`${def.label} preview`}
              draggable={false}
              style={{ width: '100%', height: '100%', display: 'block', imageRendering: 'pixelated', userSelect: 'none', pointerEvents: 'none' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#4a5673', letterSpacing: 0.6 }}>
              {PREVIEW_SIZE}x{PREVIEW_SIZE}
            </div>
          )}
        </div>
      </div>
      )}
      {!compact && def.inputs.map((port, i) => {
        const connected = edges.some(e => e.toId === node.id && e.toPort === i);
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
      {!compact && Object.entries(node.params).map(([k, v]) => (
        <Param key={k} pk={k} val={v} meta={def.params[k]} nodeId={node.id} onUpdate={onUpdate} />
      ))}
      {!compact && !isOutputNodeType(node.type) && def.outputs && def.outputs.length > 1 && def.outputs.map((port, i) => {
        const portTypeColor = dataTypeColor(port.type as DataType);
        const connected = edges.some(e => e.fromId === node.id && e.fromPort === i);
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
