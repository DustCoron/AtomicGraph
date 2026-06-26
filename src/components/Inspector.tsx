import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../workspace/views';
import { CATEGORIES, NODE_REGISTRY } from '../core/registry';
import { isOutputNodeType, channelFromOutputNodeType } from '../core/output';
import { NodeData } from '../core/types';

/**
 * Inspector panel — the side panel that shows the **single** selected node's
 * parameters. Replaces the inline param widgets that used to live on every
 * NodeCard.
 *
 * Why pull params out of cards:
 * - Cards stop dragging hundreds of <input>/<canvas> elements into the DOM
 *   per graph (50 nodes × ~5 widgets each = ~250 widgets). With Inspector
 *   only the selected node's ~5–8 widgets are mounted, so the graph
 *   viewport stays cheap to pan/zoom/HMR.
 * - Industry-standard layout: Substance, Houdini, Unreal Material Editor,
 *   Blender Shader Editor, Unity Shader Graph all use a dedicated
 *   Properties pane.
 *
 * Multi-select policy: deliberately empty. The user said multi-select is
 * for moving nodes only — keeping a "mixed values" UI here would be more
 * work and more visual noise for a feature nobody asked for. If two or
 * more nodes are selected, the panel just shows the count and tells the
 * user to narrow down.
 */
export function InspectorView() {
  const app = useApp();
  const { selectedNodeId, selectedNodeIdsCount, graph, onUpdateParam, onDeleteNode } = app;

  const selectedNode = useMemo(
    () => (selectedNodeId ? graph.nodes.find((n) => n.id === selectedNodeId) ?? null : null),
    [selectedNodeId, graph.nodes],
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#1a1c20',
        color: '#e2e8f0',
        overflowY: 'auto',
        overflowX: 'hidden',
        fontFamily: 'inherit',
      }}
    >
      {selectedNodeIdsCount > 1 && (
        <EmptyState
          title={`${selectedNodeIdsCount} nodes selected`}
          hint="Multi-select is for moving — select a single node to edit parameters."
        />
      )}
      {selectedNodeIdsCount <= 1 && !selectedNode && (
        <EmptyState
          title="No node selected"
          hint="Click any node in the graph to inspect its parameters."
        />
      )}
      {selectedNodeIdsCount <= 1 && selectedNode && (
        <InspectorBody
          node={selectedNode}
          allNodes={graph.nodes}
          onUpdateParam={onUpdateParam}
          onDeleteNode={onDeleteNode}
        />
      )}
    </div>
  );
}

function EmptyState({ title, hint }: { title: string; hint: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: 180,
        padding: '24px 18px',
        textAlign: 'center',
        color: '#7f8a9e',
        gap: 6,
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.4, color: '#a4adc0' }}>{title}</div>
      <div style={{ fontSize: 11, lineHeight: 1.4, maxWidth: 220 }}>{hint}</div>
    </div>
  );
}

interface InspectorBodyProps {
  node: NodeData;
  allNodes: NodeData[];
  onUpdateParam: (id: string, key: string, value: any) => void;
  onDeleteNode: (id: string) => void;
}

function InspectorBody({ node, allNodes, onUpdateParam, onDeleteNode }: InspectorBodyProps) {
  const def = NODE_REGISTRY[node.type];
  if (!def) {
    return <EmptyState title="Unknown node type" hint={`No registry entry for "${node.type}".`} />;
  }
  const catMeta = (CATEGORIES as any)[def.category];
  const catColor = catMeta?.color ?? '#888';
  const channel = channelFromOutputNodeType(node.type);

  return (
    <div>
      <Header
        title={def.label}
        sublabel={channel ? `Output · ${channel}` : (catMeta?.label ?? def.category)}
        accent={catColor}
        nodeId={node.id}
        isOutput={isOutputNodeType(node.type)}
        onDeleteNode={onDeleteNode}
      />
      <div style={{ padding: '10px 12px 14px 12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {node.type === 'remote' ? (
          <RemoteBindingEditor
            node={node}
            allNodes={allNodes}
            onUpdateParam={onUpdateParam}
          />
        ) : (
          <>
            {node.type === 'uniform_color' && (
              <ColorField
                nodeId={node.id}
                r={Number(node.params.r ?? 0.5)}
                g={Number(node.params.g ?? 0.5)}
                b={Number(node.params.b ?? 0.5)}
                onUpdateParam={onUpdateParam}
              />
            )}
            {node.type === 'levels' && (
              <LevelsCurvePreview
                inMin={Number(node.params.inMin ?? 0.0)}
                inMax={Number(node.params.inMax ?? 1.0)}
                gamma={Number(node.params.gamma ?? 1.0)}
              />
            )}
            {Object.keys(def.params).length === 0 ? (
              <div style={{ fontSize: 11, color: '#7f8a9e', padding: '6px 2px' }}>
                This node has no editable parameters.
              </div>
            ) : (
              Object.entries(node.params).map(([k, v]) => {
                const meta = def.params[k];
                if (!meta) return null;
                return (
                  <ParamField
                    key={k}
                    pk={k}
                    val={v}
                    meta={meta}
                    onChange={(next) => onUpdateParam(node.id, k, next)}
                  />
                );
              })
            )}
          </>
        )}
        <PortsSummary def={def} />
      </div>
    </div>
  );
}

function Header({
  title,
  sublabel,
  accent,
  nodeId,
  isOutput,
  onDeleteNode,
}: {
  title: string;
  sublabel: string;
  accent: string;
  nodeId: string;
  isOutput: boolean;
  onDeleteNode: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px 9px 12px',
        borderBottom: '1px solid #2a2e3a',
        background: '#1d1f24',
      }}
    >
      <div
        style={{
          width: 4,
          height: 26,
          borderRadius: 2,
          background: accent,
          flexShrink: 0,
        }}
        aria-hidden
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.3,
            color: '#f1f5f9',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={title}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 9,
            letterSpacing: 0.6,
            textTransform: 'uppercase',
            color: '#8590a4',
            marginTop: 1,
          }}
        >
          {sublabel} · <span style={{ fontFamily: 'monospace', color: '#6f7a8e' }}>{nodeId}</span>
        </div>
      </div>
      {!isOutput && (
        <button
          onClick={() => onDeleteNode(nodeId)}
          title="Delete node"
          style={{
            background: 'transparent',
            border: '1px solid #3a3f49',
            color: '#94a3b8',
            cursor: 'pointer',
            fontSize: 11,
            padding: '2px 8px',
            borderRadius: 4,
            transition: 'color .12s, border-color .12s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#f87171';
            e.currentTarget.style.borderColor = '#7f1d1d';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.borderColor = '#3a3f49';
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

function PortsSummary({
  def,
}: {
  def: typeof NODE_REGISTRY[string];
}) {
  if (def.inputs.length === 0 && def.outputs.length === 0) return null;
  return (
    <div style={{ marginTop: 6, paddingTop: 10, borderTop: '1px dashed #2a2e3a' }}>
      <div style={{ fontSize: 9, color: '#6f7a8e', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4 }}>
        Ports
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, fontSize: 10 }}>
        <PortList label="IN" ports={def.inputs} />
        <PortList label="OUT" ports={def.outputs} />
      </div>
    </div>
  );
}

function PortList({ label, ports }: { label: string; ports: { label: string; type: string }[] }) {
  return (
    <div>
      <div style={{ color: '#6f7a8e', fontSize: 9, letterSpacing: 0.8, marginBottom: 2 }}>{label}</div>
      {ports.length === 0 ? (
        <div style={{ color: '#4a5673', fontSize: 9 }}>—</div>
      ) : (
        ports.map((p, i) => (
          <div key={`${label}-${i}`} style={{ display: 'flex', justifyContent: 'space-between', color: '#a4adc0' }}>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.label}</span>
            <span style={{ color: '#6f7a8e', fontFamily: 'monospace', marginLeft: 4 }}>{p.type}</span>
          </div>
        ))
      )}
    </div>
  );
}

/* ---------- generic param widgets (side-panel sized) ---------- */

interface ParamFieldProps {
  pk: string;
  val: any;
  meta: any;
  onChange: (next: any) => void;
}

function ParamField({ pk, val, meta, onChange }: ParamFieldProps) {
  if (!meta) return null;
  if (meta.type === 'float' || meta.type === 'int') {
    const step = meta.step ?? (meta.type === 'int' ? 1 : 0.01);
    const dec = step < 0.05 ? 3 : step < 1 ? 2 : 0;
    return (
      <Row label={pk}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            type="range"
            min={meta.min}
            max={meta.max}
            step={step}
            value={val}
            onChange={(e) => onChange(meta.type === 'int' ? parseInt(e.target.value, 10) : parseFloat(e.target.value))}
            style={{ flex: 1, accentColor: '#7cb6ff', cursor: 'pointer', height: 4 }}
          />
          <input
            type="number"
            min={meta.min}
            max={meta.max}
            step={step}
            value={Number(val).toFixed(dec)}
            onChange={(e) => {
              const parsed = meta.type === 'int' ? parseInt(e.target.value, 10) : parseFloat(e.target.value);
              if (Number.isFinite(parsed)) onChange(parsed);
            }}
            style={{
              width: 64,
              background: '#0b0b17',
              border: '1px solid #334155',
              color: '#f1f5f9',
              borderRadius: 3,
              padding: '2px 5px',
              fontSize: 11,
              fontFamily: 'monospace',
              outline: 'none',
            }}
          />
        </div>
      </Row>
    );
  }
  if (meta.type === 'select') {
    return (
      <Row label={pk}>
        <select
          value={val}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            background: '#0b0b17',
            border: '1px solid #334155',
            color: '#f1f5f9',
            borderRadius: 3,
            padding: '3px 6px',
            fontSize: 11,
            fontFamily: 'inherit',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {meta.options.map((o: string) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Row>
    );
  }
  if (meta.type === 'bool') {
    return (
      <Row label={pk}>
        <input
          type="checkbox"
          checked={!!val}
          onChange={(e) => onChange(e.target.checked)}
          style={{ accentColor: '#7cb6ff', cursor: 'pointer', width: 14, height: 14 }}
        />
      </Row>
    );
  }
  return null;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <span
        style={{
          fontSize: 10,
          color: '#a4adc0',
          letterSpacing: 1.1,
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------- uniform_color color picker ---------- */

function rgbFloatToHex(r: number, g: number, b: number): string {
  const clamp01 = (v: number) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0));
  const byte = (v: number) => Math.round(clamp01(v) * 255).toString(16).padStart(2, '0');
  return `#${byte(r)}${byte(g)}${byte(b)}`;
}

function hexToRgbFloat(hex: string): { r: number; g: number; b: number } {
  const m = /^#?([a-fA-F0-9]{6})$/.exec(hex.trim());
  if (!m) return { r: 0, g: 0, b: 0 };
  const n = parseInt(m[1], 16);
  return {
    r: ((n >> 16) & 0xff) / 255,
    g: ((n >> 8) & 0xff) / 255,
    b: (n & 0xff) / 255,
  };
}

function ColorField({
  nodeId,
  r,
  g,
  b,
  onUpdateParam,
}: {
  nodeId: string;
  r: number;
  g: number;
  b: number;
  onUpdateParam: (id: string, key: string, value: any) => void;
}) {
  const hex = rgbFloatToHex(r, g, b);
  return (
    <Row label="color">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <label
          title={`Pick color (current ${hex})`}
          style={{
            width: 56,
            height: 26,
            borderRadius: 4,
            border: '1px solid #2a2e3a',
            background: hex,
            cursor: 'pointer',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <input
            type="color"
            value={hex}
            onChange={(e) => {
              const next = hexToRgbFloat(e.target.value);
              onUpdateParam(nodeId, 'r', next.r);
              onUpdateParam(nodeId, 'g', next.g);
              onUpdateParam(nodeId, 'b', next.b);
            }}
            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }}
          />
        </label>
        <span style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'monospace' }}>{hex}</span>
      </div>
    </Row>
  );
}

/* ---------- levels curve preview ---------- */

function LevelsCurvePreview({ inMin, inMax, gamma }: { inMin: number; inMax: number; gamma: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.parentElement?.clientWidth ?? 200;
    const cssH = 80;
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = '#0a0e18';
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.strokeStyle = '#1d2433';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const q of [0.25, 0.5, 0.75]) {
      ctx.moveTo(q * cssW, 0); ctx.lineTo(q * cssW, cssH);
      ctx.moveTo(0, q * cssH); ctx.lineTo(cssW, q * cssH);
    }
    ctx.stroke();
    ctx.strokeStyle = '#2a334a';
    ctx.setLineDash([2, 3]);
    ctx.beginPath();
    ctx.moveTo(0, cssH);
    ctx.lineTo(cssW, 0);
    ctx.stroke();
    ctx.setLineDash([]);
    const safeRange = Math.max(inMax - inMin, 0.001);
    const safeGamma = Math.max(gamma, 0.01);
    ctx.strokeStyle = '#7cb6ff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const steps = 128;
    for (let i = 0; i <= steps; i++) {
      const x = i / steps;
      const t = Math.max(0, Math.min(1, (x - inMin) / safeRange));
      const y = Math.pow(t, 1 / safeGamma);
      const px = x * cssW;
      const py = (1 - y) * cssH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.fillStyle = '#7cb6ff';
    ctx.beginPath(); ctx.arc(inMin * cssW, cssH - 1, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(inMax * cssW, 1, 3, 0, Math.PI * 2); ctx.fill();
  }, [inMin, inMax, gamma]);

  return (
    <Row label="curve">
      <div style={{ width: '100%' }}>
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: 80,
            display: 'block',
            borderRadius: 4,
            border: '1px solid #2a2e3a',
          }}
        />
      </div>
    </Row>
  );
}

/* ---------- remote binding editor ---------- */

function RemoteBindingEditor({
  node,
  allNodes,
  onUpdateParam,
}: {
  node: NodeData;
  allNodes: NodeData[];
  onUpdateParam: (id: string, key: string, value: any) => void;
}) {
  const targetId = node.params.target || '';
  const paramKey = node.params.key || '';
  const labelTxt = node.params.label || '';
  const val = node.params.value ?? 0.5;

  const candidates = useMemo(
    () => allNodes.filter((n) => !isOutputNodeType(n.type) && n.type !== 'remote' && n.id !== node.id),
    [allNodes, node.id],
  );

  const targetNode = candidates.find((n) => n.id === targetId);
  const targetDef = targetNode ? NODE_REGISTRY[targetNode.type] : null;
  const paramDef = targetDef?.params?.[paramKey];
  const paramKeys = targetDef
    ? Object.keys(targetDef.params).filter((k) => {
        const t = targetDef.params[k].type;
        return t === 'float' || t === 'int';
      })
    : [];

  const handleTargetChange = useCallback(
    (nextTargetId: string) => {
      onUpdateParam(node.id, 'target', nextTargetId);
      // Drop the param key when target changes — keeping a stale key produces
      // a binding that looks valid but resolves to nothing on the engine side.
      if (paramKey) onUpdateParam(node.id, 'key', '');
    },
    [node.id, onUpdateParam, paramKey],
  );

  return (
    <>
      <Row label="target node">
        <select
          value={targetId}
          onChange={(e) => handleTargetChange(e.target.value)}
          style={{
            width: '100%',
            background: '#0b0b17',
            border: '1px solid #334155',
            color: '#f1f5f9',
            borderRadius: 3,
            padding: '3px 6px',
            fontSize: 11,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <option value="">— select node —</option>
          {candidates.map((n) => {
            const d = NODE_REGISTRY[n.type];
            return (
              <option key={n.id} value={n.id}>{d?.label || n.type} ({n.id})</option>
            );
          })}
        </select>
      </Row>
      <Row label="parameter">
        <select
          value={paramKey}
          onChange={(e) => {
            onUpdateParam(node.id, 'key', e.target.value);
            if (targetNode && e.target.value in targetNode.params) {
              onUpdateParam(node.id, 'value', targetNode.params[e.target.value]);
            }
          }}
          style={{
            width: '100%',
            background: '#0b0b17',
            border: '1px solid #334155',
            color: '#f1f5f9',
            borderRadius: 3,
            padding: '3px 6px',
            fontSize: 11,
            cursor: 'pointer',
            outline: 'none',
          }}
          disabled={!targetNode}
        >
          <option value="">— select param —</option>
          {paramKeys.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
      </Row>
      <Row label="display label">
        <input
          type="text"
          value={labelTxt}
          placeholder={paramKey || 'Label'}
          onChange={(e) => onUpdateParam(node.id, 'label', e.target.value)}
          style={{
            width: '100%',
            background: '#0b0b17',
            border: '1px solid #334155',
            color: '#f1f5f9',
            borderRadius: 3,
            padding: '3px 6px',
            fontSize: 11,
            outline: 'none',
          }}
        />
      </Row>
      {paramDef && (
        <Row label={labelTxt || paramKey || 'value'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="range"
              min={paramDef.min}
              max={paramDef.max}
              step={paramDef.step ?? 0.01}
              value={val}
              onChange={(e) => onUpdateParam(node.id, 'value', parseFloat(e.target.value))}
              style={{ flex: 1, accentColor: '#7cb6ff', cursor: 'pointer', height: 4 }}
            />
            <input
              type="number"
              min={paramDef.min}
              max={paramDef.max}
              step={paramDef.step ?? 0.01}
              value={Number(val).toFixed((paramDef.step ?? 0.01) < 0.05 ? 3 : 2)}
              onChange={(e) => {
                const parsed = parseFloat(e.target.value);
                if (Number.isFinite(parsed)) onUpdateParam(node.id, 'value', parsed);
              }}
              style={{
                width: 64,
                background: '#0b0b17',
                border: '1px solid #334155',
                color: '#f1f5f9',
                borderRadius: 3,
                padding: '2px 5px',
                fontSize: 11,
                fontFamily: 'monospace',
                outline: 'none',
              }}
            />
          </div>
        </Row>
      )}
    </>
  );
}
