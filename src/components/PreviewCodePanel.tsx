import React, { useMemo, useState } from 'react';
import { CompiledShader, CompiledUniformDescriptor } from '../core/compiler';
import { Viewport } from './Viewport';

interface UniformRow {
  name: string;
  type: CompiledUniformDescriptor['type'];
  nodeId: string;
  key: string;
  value: any;
}

interface PreviewCodePanelProps {
  previewShader: CompiledShader | null;
  codeShader: CompiledShader | null;
  compileError: string | null;
  patternSize: number;
  tile: boolean;
  onToggleTile: () => void;
  rawMode: boolean;
  onToggleRawMode: () => void;
  uniformRows: UniformRow[];
  stats: {
    compileTimeMs: number;
    nodeCount: number;
    edgeCount: number;
    shaderLines: number;
    shaderBytes: number;
    hash: string;
    warnings: string[];
    backend: string;
    recompileCount: number;
  };
  onPreviewError?: (message: string) => void;
}

type TabKey = 'code' | 'stats';

export function PreviewCodePanel({
  previewShader,
  codeShader,
  compileError,
  patternSize,
  tile,
  onToggleTile,
  rawMode,
  onToggleRawMode,
  uniformRows,
  stats,
  onPreviewError
}: PreviewCodePanelProps) {
  const [tab, setTab] = useState<TabKey>('code');

  const codeText = useMemo(() => codeShader?.source || '', [codeShader]);
  const ext = (stats.backend || 'glsl').toLowerCase() === 'wgsl' ? 'wgsl' : 'glsl';

  const onCopy = async () => {
    if (!codeText) return;
    await navigator.clipboard.writeText(codeText);
  };

  const onDownload = () => {
    if (!codeText) return;
    const blob = new Blob([codeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `generated_shader.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, height: '100%', background: '#232832' }}>
      <div style={{ height: '46%', minHeight: 230, display: 'flex', flexDirection: 'column', borderBottom: '1px solid #3a4252' }}>
        <div style={{ height: 34, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #343c4c' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#d6def7' }}>Preview</span>
          <button onClick={onToggleTile} className="nt-btn-sm">{tile ? 'TILE ON' : 'TILE OFF'}</button>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: '#8791ad' }}>{patternSize} x {patternSize}</span>
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Viewport compiled={previewShader} tile={tile} onShaderError={onPreviewError} />
        </div>
        {compileError && <div style={errorStyle}>Compile Error: {compileError}</div>}
      </div>

      <div style={{ display: 'flex', borderBottom: '1px solid #3a4252' }}>
        <button className={`nt-tab${tab === 'code' ? ' active' : ''}`} onClick={() => setTab('code')}>Code</button>
        <button className={`nt-tab${tab === 'stats' ? ' active' : ''}`} onClick={() => setTab('stats')}>Stats</button>
      </div>

      {tab === 'code' && (
        <>
          <div style={{ height: 34, display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px', borderBottom: '1px solid #343c4c' }}>
            <button onClick={onCopy} className="nt-btn-sm">Copy Code</button>
            <button onClick={onDownload} className="nt-btn-sm">Download .{ext}</button>
            <button onClick={onToggleRawMode} className="nt-btn-sm">{rawMode ? 'RAW' : 'READABLE'}</button>
          </div>
          {compileError && <div style={errorStyle}>Compile Error: {compileError}</div>}
          <div style={{ flex: 1, minHeight: 140, overflow: 'auto', background: '#161b24', borderBottom: '1px solid #31384a' }}>
            <pre style={{ margin: 0, padding: 10, color: '#cbd4ee', fontSize: 11, lineHeight: 1.5, fontFamily: "'Cascadia Code','Consolas',monospace" }}>
              {codeText || '// No generated source'}
            </pre>
          </div>
          <div style={{ padding: '6px 8px', borderBottom: '1px solid #31384a', color: '#d9e1f8', fontSize: 11, fontWeight: 700 }}>Uniforms</div>
          <div style={{ maxHeight: 210, overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
              <thead>
                <tr style={{ background: '#2a3140', color: '#c4cee8' }}>
                  <Th>Name</Th>
                  <Th>Type</Th>
                  <Th>Node</Th>
                  <Th>Key</Th>
                  <Th>Value</Th>
                </tr>
              </thead>
              <tbody>
                {uniformRows.map((u) => (
                  <tr key={u.name} style={{ borderTop: '1px solid #343c4c' }}>
                    <Td>{u.name}</Td>
                    <Td>{u.type}</Td>
                    <Td>{u.nodeId}</Td>
                    <Td>{u.key}</Td>
                    <Td>{formatValue(u.value)}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === 'stats' && (
        <div style={{ padding: 10, overflow: 'auto', fontSize: 11, color: '#bdc7e6', lineHeight: 1.8 }}>
          <StatRow label="Backend" value={stats.backend} />
          <StatRow label="Shader Hash" value={stats.hash} />
          <StatRow label="Compile Time (ms)" value={stats.compileTimeMs.toFixed(2)} />
          <StatRow label="Shader Lines" value={String(stats.shaderLines)} />
          <StatRow label="Shader Bytes" value={String(stats.shaderBytes)} />
          <StatRow label="Node Count" value={String(stats.nodeCount)} />
          <StatRow label="Edge Count" value={String(stats.edgeCount)} />
          <StatRow label="Recompile Count" value={String(stats.recompileCount)} />
          <div style={{ marginTop: 8, color: '#d7deef', fontWeight: 700 }}>Warnings</div>
          <div style={{ marginTop: 4, color: '#f3bd8e' }}>
            {stats.warnings.length === 0 ? 'None' : stats.warnings.join('\n')}
          </div>
        </div>
      )}
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, borderBottom: '1px solid #32394a' }}>
      <span style={{ color: '#97a3c3' }}>{label}</span>
      <span style={{ color: '#dbe4ff' }}>{value}</span>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ textAlign: 'left', padding: '5px 6px', borderRight: '1px solid #384154', fontWeight: 700 }}>{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: '5px 6px', color: '#b6c0dc', borderRight: '1px solid #384154' }}>{children}</td>;
}

function formatValue(value: any): string {
  if (Array.isArray(value)) return `[${value.join(', ')}]`;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}

const errorStyle: React.CSSProperties = {
  margin: 8,
  padding: '6px 8px',
  background: '#3a1414',
  border: '1px solid #9f3434',
  color: '#ffb3b3',
  borderRadius: 4,
  fontSize: 11,
  whiteSpace: 'pre-wrap',
  maxHeight: 120,
  overflow: 'auto'
};
