export type MonitorSeverity = 'ok' | 'warn' | 'fail';
export type MonitorMode = 'quick' | 'stress';

export interface MonitorCheckResult {
  id: string;
  label: string;
  severity: MonitorSeverity;
  durationMs: number;
  message: string;
  details?: string;
}

export interface MonitorRunMetrics {
  fps: number;
  renderP50Ms: number;
  renderP95Ms: number;
  compileMs: number;
  nodeCount: number;
  edgeCount: number;
}

export interface MonitorSuiteRun {
  id: string;
  ts: string;
  mode: MonitorMode;
  totalMs: number;
  passCount: number;
  warnCount: number;
  failCount: number;
  checks: MonitorCheckResult[];
  metrics: MonitorRunMetrics;
}

const STORAGE_KEY = 'nt.monitor.runs.v1';
const MAX_MONITOR_RUNS = 120;

function safeRead(): MonitorSuiteRun[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) =>
      entry &&
      typeof entry.id === 'string' &&
      typeof entry.ts === 'string' &&
      typeof entry.mode === 'string' &&
      typeof entry.totalMs === 'number' &&
      Array.isArray(entry.checks)
    ) as MonitorSuiteRun[];
  } catch {
    return [];
  }
}

function safeWrite(runs: MonitorSuiteRun[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(runs));
  } catch {
    // Ignore storage failures to keep UI resilient.
  }
}

export function getMonitorRuns(): MonitorSuiteRun[] {
  return safeRead();
}

export function appendMonitorRun(run: MonitorSuiteRun): MonitorSuiteRun[] {
  const next = safeRead();
  next.push(run);
  if (next.length > MAX_MONITOR_RUNS) {
    next.splice(0, next.length - MAX_MONITOR_RUNS);
  }
  safeWrite(next);
  return next;
}

export function clearMonitorRuns() {
  safeWrite([]);
}

export function buildMonitorRunId() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function severityWeight(severity: MonitorSeverity): number {
  if (severity === 'fail') return 3;
  if (severity === 'warn') return 2;
  return 1;
}

export function getRunOverallSeverity(run: MonitorSuiteRun): MonitorSeverity {
  if (run.failCount > 0) return 'fail';
  if (run.warnCount > 0) return 'warn';
  return 'ok';
}
