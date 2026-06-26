import { Compiler } from './compiler';
import type { GraphData } from './types';
import { OUTPUT_CHANNEL_PORTS } from './output';
import { appendAppLog } from './logs';

/**
 * Precompile every (channel × backend × readable) combination for `graph` so
 * the module-level compile cache in `compiler.ts` is warm before the user (or
 * the monitor suite) hits it for real. Runs entirely off the critical path:
 * if the browser exposes `requestIdleCallback`, work happens during idle
 * frames; otherwise we fall back to a debounced `setTimeout` so it doesn't
 * compete with the initial paint.
 *
 * Cost on a typical 15-24 node graph: ~200-400 ms of compiler work, split
 * across multiple idle slices, fully transparent to the user. Pays itself
 * back the first time `RUN STRESS` runs (135 ms vs 9 s without warmup).
 */

const ALL_CHANNELS = Object.keys(OUTPUT_CHANNEL_PORTS) as Array<keyof typeof OUTPUT_CHANNEL_PORTS>;
const BACKENDS = ['wgsl', 'glsl'] as const;
const READABLE = [true, false] as const;

type IdleCallback = (cb: () => void) => void;

function makeIdleScheduler(): IdleCallback {
  if (typeof window !== 'undefined' && typeof (window as any).requestIdleCallback === 'function') {
    return (cb) => (window as any).requestIdleCallback(cb, { timeout: 1500 });
  }
  return (cb) => window.setTimeout(cb, 60);
}

export interface WarmupResult {
  ok: boolean;
  durationMs: number;
  compiledCount: number;
  skippedAfterError: boolean;
}

/**
 * Schedule a compile-cache warmup pass for `graph`. Returns a cancellation
 * handle. Safe to call repeatedly: callers should cancel a prior token
 * before scheduling a new pass to avoid stacking idle work for stale graphs.
 */
export function scheduleCompileWarmup(graph: GraphData): { cancel: () => void } {
  let cancelled = false;
  const idle = makeIdleScheduler();
  const t0 = (typeof performance !== 'undefined' ? performance.now() : Date.now());

  // Build the task list once so we can slice it.
  const tasks: Array<() => void> = [];
  let compiledCount = 0;
  let firstError: unknown = null;

  for (const channel of ALL_CHANNELS) {
    for (const backend of BACKENDS) {
      for (const readable of READABLE) {
        tasks.push(() => {
          if (cancelled || firstError) return;
          try {
            new Compiler(graph).compile({
              backend,
              outputChannel: channel,
              readable,
            });
            compiledCount += 1;
          } catch (err) {
            // First failure aborts the rest — a broken graph that can't compile
            // shouldn't keep retrying in idle time. Log once and bail.
            firstError = err;
          }
        });
      }
    }
  }

  // One compile per idle tick.
  //
  // We previously batched four per slice, which worked when each compile
  // was ~10 ms warm. After the Perlin gained multi-octave summation and
  // the AO baker showed up, a single cold compile can be ~500 ms — so a
  // four-task slice blocked the main thread for ~2 s and the user saw the
  // page freeze during page-reload warm-up. Slice=1 keeps each yield
  // bounded to a single compile and lets the browser respond between
  // them; the cache makes subsequent slices effectively free anyway.
  const SLICE = 1;
  let cursor = 0;

  const tick = () => {
    if (cancelled) return;
    if (cursor >= tasks.length) {
      const dt = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - t0;
      if (firstError) {
        appendAppLog({
          level: 'warn',
          source: 'warmup',
          message: 'Compile warm-up aborted by error',
          details: firstError instanceof Error ? firstError.message : String(firstError),
        });
      } else {
        appendAppLog({
          level: 'info',
          source: 'warmup',
          message: `Compile warm-up complete (${compiledCount}/${tasks.length} in ${dt.toFixed(1)}ms)`,
        });
      }
      return;
    }
    const end = Math.min(cursor + SLICE, tasks.length);
    for (; cursor < end; cursor++) tasks[cursor]();
    if (!cancelled) idle(tick);
  };

  idle(tick);
  return { cancel: () => { cancelled = true; } };
}
