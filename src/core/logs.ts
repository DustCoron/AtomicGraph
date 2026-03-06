export type AppLogLevel = 'info' | 'warn' | 'error';
export type AppLogEventType = 'perf_budget_exceeded' | 'render_fatal';

export interface AppLogEntry {
  id: string;
  ts: string;
  level: AppLogLevel;
  source: string;
  message: string;
  details?: string;
  event_type?: AppLogEventType;
  node_context?: string;
  graph_hash?: string;
  frame_id?: number;
}

const STORAGE_KEY = 'nt.app.logs.v1';
const LOG_EVENT = 'nt:app-logs-updated';
const MAX_LOG_ENTRIES = 800;
const DEDUPE_WINDOW_MS = 1500;

function safeRead(): AppLogEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) =>
      item &&
      typeof item.id === 'string' &&
      typeof item.ts === 'string' &&
      typeof item.level === 'string' &&
      typeof item.source === 'string' &&
      typeof item.message === 'string'
    );
  } catch {
    return [];
  }
}

function safeWrite(entries: AppLogEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Ignore quota/storage failures to avoid crashing app flows.
  }
}

function notifyUpdate() {
  try {
    window.dispatchEvent(new CustomEvent(LOG_EVENT));
  } catch {
    // no-op
  }
}

function makeId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

export function getAppLogs(): AppLogEntry[] {
  return safeRead();
}

export function appendAppLog(input: {
  level: AppLogLevel;
  source: string;
  message: string;
  details?: string;
  event_type?: AppLogEventType;
  node_context?: string;
  graph_hash?: string;
  frame_id?: number;
}): AppLogEntry {
  const next: AppLogEntry = {
    id: makeId(),
    ts: new Date().toISOString(),
    level: input.level,
    source: input.source,
    message: input.message,
    details: input.details,
    event_type: input.event_type,
    node_context: input.node_context,
    graph_hash: input.graph_hash,
    frame_id: input.frame_id,
  };
  const logs = safeRead();
  const last = logs.length > 0 ? logs[logs.length - 1] : null;
  if (last) {
    const lastTs = Date.parse(last.ts);
    const nextTs = Date.parse(next.ts);
    const samePayload =
      last.level === next.level &&
      last.source === next.source &&
      last.message === next.message &&
      (last.details || '') === (next.details || '') &&
      (last.event_type || '') === (next.event_type || '') &&
      (last.node_context || '') === (next.node_context || '') &&
      (last.graph_hash || '') === (next.graph_hash || '');
    if (samePayload && Number.isFinite(lastTs) && Number.isFinite(nextTs) && (nextTs - lastTs) <= DEDUPE_WINDOW_MS) {
      return last;
    }
  }
  logs.push(next);
  if (logs.length > MAX_LOG_ENTRIES) {
    logs.splice(0, logs.length - MAX_LOG_ENTRIES);
  }
  safeWrite(logs);
  notifyUpdate();
  return next;
}

export function clearAppLogs() {
  safeWrite([]);
  notifyUpdate();
}

export function formatAppLog(entry: AppLogEntry, includeDetails = true): string {
  const head = `[${entry.ts}] ${entry.level.toUpperCase()} [${entry.source}] ${entry.message}`;
  const meta: string[] = [];
  if (entry.event_type) meta.push(`event=${entry.event_type}`);
  if (entry.graph_hash) meta.push(`graph=${entry.graph_hash.slice(0, 24)}`);
  if (typeof entry.frame_id === 'number') meta.push(`frame=${entry.frame_id}`);
  if (entry.node_context) meta.push(`node=${entry.node_context}`);
  const metaLine = meta.length > 0 ? `\n${meta.join(' | ')}` : '';
  if (!includeDetails || !entry.details) return `${head}${metaLine}`;
  return `${head}${metaLine}\n${entry.details}`;
}

export function downloadAppLogsFile() {
  const logs = safeRead();
  const body = logs.length === 0
    ? '[No logs recorded]'
    : logs.map((entry) => formatAppLog(entry, true)).join('\n\n');
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const blob = new Blob([body], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `atomicgraph-logs-${stamp}.log`;
  a.click();
  URL.revokeObjectURL(url);
}

export function subscribeAppLogs(onChange: (logs: AppLogEntry[]) => void): () => void {
  const local = () => onChange(getAppLogs());
  const storage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onChange(getAppLogs());
  };
  window.addEventListener(LOG_EVENT, local as EventListener);
  window.addEventListener('storage', storage);
  return () => {
    window.removeEventListener(LOG_EVENT, local as EventListener);
    window.removeEventListener('storage', storage);
  };
}
