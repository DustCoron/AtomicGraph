import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { CrashBoundary } from './components/CrashBoundary.tsx';
import { appendAppLog, getAppLogs, clearAppLogs, downloadAppLogsFile } from './core/logs.ts';
import { getMonitorRuns, clearMonitorRuns } from './core/monitor.ts';
import { clearCompileCache, getCompileCacheStats } from './core/compiler.ts';
import { clearPersistedCompileCache, persistedCompileCacheSize } from './core/compile-cache-persist.ts';
import { clearPersistedNodePreviews, persistedNodePreviewsSigCount } from './core/node-preview-persist.ts';
import './index.css';

/**
 * Attach a developer-only handle on `window.__ag` so an agent (or a human in
 * the console) can read app state and trigger common diagnostics without
 * clicking through the UI. Tree-shaken from production builds because the
 * whole block is gated on `import.meta.env.DEV`.
 */
function attachDevApi() {
  const isDev = !!((import.meta as any).env?.DEV);
  if (!isDev || typeof window === 'undefined') return;

  const dumpStorage = () => {
    const out: Record<string, unknown> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (!(key.startsWith('atomicgraph.') || key.startsWith('nt.'))) continue;
        const raw = localStorage.getItem(key);
        try { out[key] = raw ? JSON.parse(raw) : raw; }
        catch { out[key] = raw; }
      }
    } catch { /* ignore */ }
    return out;
  };

  // appendAppLog already mirrors to /__ag/log in dev, so going through it
  // covers both the localStorage UI buffer AND the on-disk bridge file
  // with a single entry. (The /__ag/mark endpoint stays available for
  // external tools that can't run JS, e.g. `curl -X POST /__ag/mark`.)
  const mark = (tag: string) =>
    appendAppLog({ level: 'info', source: 'devbridge', message: `--- ${tag} ---` });

  (window as any).__ag = {
    version: 1,
    // Logs
    getLogs: getAppLogs,
    clearLogs: clearAppLogs,
    downloadLogs: downloadAppLogsFile,
    appendLog: appendAppLog,
    // Monitor runs
    getMonitorRuns,
    clearMonitorRuns,
    // Compile cache
    compileCacheStats: getCompileCacheStats,
    clearCompileCache,
    persistedCompileCacheSize,
    clearPersistedCompileCache,
    // Node-preview cache
    persistedNodePreviewsSigCount,
    clearPersistedNodePreviews,
    // Snapshots
    storage: dumpStorage,
    autosave: () => {
      try { return JSON.parse(localStorage.getItem('atomicgraph.autosave.v1') || 'null'); }
      catch { return null; }
    },
    // Devbridge helpers
    mark,
    state: async () => {
      try {
        const r = await fetch('/__ag/state?limit=200');
        return await r.json();
      } catch (e) { return { error: String(e) }; }
    },
  };
  // eslint-disable-next-line no-console
  console.log('[ag] window.__ag attached (dev). Try: __ag.getLogs(), __ag.mark("before-edit"), await __ag.state()');
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found.');
}

attachDevApi();

const appTree = (
  <CrashBoundary>
    <App />
  </CrashBoundary>
);
const isDev = !!((import.meta as any).env?.DEV);

try {
  createRoot(rootEl).render(
    isDev ? appTree : <StrictMode>{appTree}</StrictMode>,
  );
} catch (err: any) {
  const msg = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
  appendAppLog({
    level: 'error',
    source: 'startup',
    message: msg,
    details: err instanceof Error ? err.stack : undefined,
  });
  rootEl.innerHTML = `
    <div style="padding:16px;background:#0f131b;color:#ffd0d0;font-family:Segoe UI,Consolas,monospace;">
      <h2 style="margin:0 0 8px 0;">App failed to start</h2>
      <pre style="white-space:pre-wrap;background:#2a1414;border:1px solid #7d3b3b;padding:10px;border-radius:6px;">${msg}</pre>
      <button id="reload-btn" style="margin-top:10px;padding:6px 10px;border-radius:5px;border:1px solid #5c7cae;background:#2a4572;color:#eaf1ff;cursor:pointer;">Reload App</button>
    </div>
  `;
  const btn = document.getElementById('reload-btn');
  if (btn) btn.addEventListener('click', () => window.location.reload());
}
