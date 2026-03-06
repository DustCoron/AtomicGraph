export type PerformanceMode = 'performance_first' | 'balanced' | 'quality_first';

export interface RendererPerfSample {
  timestamp: number;
  fps: number;
  compile_ms: number;
  render_ms: number;
  thumbnail_ms: number;
  readback_ms: number;
  ui_commit_ms: number;
  budget_exceeded: boolean;
}

export interface ViewportPerfSample {
  timestamp: number;
  frame_id: number;
  fps: number;
  compile_ms: number;
  render_ms: number;
  readback_ms: number;
  ui_commit_ms: number;
  budget_exceeded: boolean;
  frame_budget_ms: number;
  p50_ms: number;
  p95_ms: number;
}

export interface ViewportQualityState {
  scale: 1 | 0.75 | 0.5;
  reason: 'initial' | 'adaptive_down' | 'adaptive_up' | 'interactive';
  last_change_at: number;
}

export function percentile(values: readonly number[], ratio: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.max(0, Math.min(sorted.length - 1, Math.floor((sorted.length - 1) * ratio)));
  return sorted[idx];
}
