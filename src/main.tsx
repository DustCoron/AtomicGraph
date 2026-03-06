import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { CrashBoundary } from './components/CrashBoundary.tsx';
import { appendAppLog } from './core/logs.ts';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found.');
}

try {
  createRoot(rootEl).render(
    <StrictMode>
      <CrashBoundary>
        <App />
      </CrashBoundary>
    </StrictMode>,
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
