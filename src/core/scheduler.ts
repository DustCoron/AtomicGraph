export type RenderPriority = 'preview' | 'thumbnail' | 'export';

export interface SchedulerCallbacks {
  compilePreview: () => void;
  compileThumbnails: (dirtyIds: string[] | null) => void;
  runExport: () => void;
}

export interface SchedulerConfig {
  previewDebounceMs?: number;
  thumbBatchSize?: number;
  fpsTarget?: number;
  fpsSampleWindow?: number;
}

const DEFAULTS: Required<SchedulerConfig> = {
  previewDebounceMs: 16,
  thumbBatchSize: 4,
  fpsTarget: 50,
  fpsSampleWindow: 10,
};

export class RenderScheduler {
  private callbacks: SchedulerCallbacks;
  private cfg: Required<SchedulerConfig>;
  private previewTimer = 0;
  private thumbIdleHandle = 0;
  private thumbQueue: string[] = [];
  private thumbAllDirty = false;
  private exportQueued = false;
  private disposed = false;

  private frameTimes: number[] = [];
  private lastFrameTs = 0;
  private fpsRaf = 0;
  private _currentFps = 60;
  private _thumbsThrottled = false;

  constructor(callbacks: SchedulerCallbacks, config?: SchedulerConfig) {
    this.callbacks = callbacks;
    this.cfg = { ...DEFAULTS, ...config };
    this.startFpsSampler();
  }

  get currentFps() { return this._currentFps; }
  get thumbsThrottled() { return this._thumbsThrottled; }

  // -- FPS sampler (lightweight, runs in RAF) --

  private startFpsSampler() {
    this.lastFrameTs = performance.now();
    const sample = () => {
      if (this.disposed) return;
      const now = performance.now();
      const dt = now - this.lastFrameTs;
      this.lastFrameTs = now;
      this.frameTimes.push(dt);
      if (this.frameTimes.length > this.cfg.fpsSampleWindow) {
        this.frameTimes.shift();
      }
      const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      this._currentFps = avg > 0 ? Math.round(1000 / avg) : 60;
      this._thumbsThrottled = this._currentFps < this.cfg.fpsTarget;
      this.fpsRaf = requestAnimationFrame(sample);
    };
    this.fpsRaf = requestAnimationFrame(sample);
  }

  // -- Preview: debounced, highest priority --

  requestPreview() {
    if (this.disposed) return;
    if (this.previewTimer) window.clearTimeout(this.previewTimer);
    this.previewTimer = window.setTimeout(() => {
      this.previewTimer = 0;
      if (!this.disposed) this.callbacks.compilePreview();
    }, this.cfg.previewDebounceMs);
  }

  // -- Thumbnails: idle-scheduled, FPS-aware --

  requestThumbnails(dirtyNodeIds?: string[]) {
    if (this.disposed) return;
    if (!dirtyNodeIds) {
      this.thumbAllDirty = true;
    } else {
      for (const id of dirtyNodeIds) {
        if (!this.thumbQueue.includes(id)) this.thumbQueue.push(id);
      }
    }
    this.scheduleThumbnailIdle();
  }

  private scheduleThumbnailIdle() {
    if (this.thumbIdleHandle) return;

    if (this._thumbsThrottled) {
      this.thumbIdleHandle = window.setTimeout(() => {
        this.thumbIdleHandle = 0;
        this.scheduleThumbnailIdle();
      }, 200);
      return;
    }

    const w = window as any;
    if (typeof w.requestIdleCallback === 'function') {
      this.thumbIdleHandle = w.requestIdleCallback(
        (deadline: IdleDeadline) => this.onThumbIdle(deadline),
        { timeout: 300 }
      );
    } else {
      this.thumbIdleHandle = window.setTimeout(
        () => this.onThumbIdle({ timeRemaining: () => 4, didTimeout: true } as IdleDeadline),
        32
      );
    }
  }

  private onThumbIdle(_deadline: IdleDeadline) {
    this.thumbIdleHandle = 0;
    if (this.disposed) return;

    if (this._thumbsThrottled) {
      if (this.thumbAllDirty || this.thumbQueue.length > 0) {
        this.scheduleThumbnailIdle();
      }
      return;
    }

    if (this.thumbAllDirty) {
      this.thumbAllDirty = false;
      this.thumbQueue = [];
      this.callbacks.compileThumbnails(null);
      return;
    }

    if (this.thumbQueue.length === 0) return;

    const batchSize = this._currentFps > 55 ? this.cfg.thumbBatchSize : Math.max(1, Math.floor(this.cfg.thumbBatchSize / 2));
    const batch = this.thumbQueue.splice(0, batchSize);
    this.callbacks.compileThumbnails(batch);

    if (this.thumbQueue.length > 0) {
      this.scheduleThumbnailIdle();
    }
  }

  // -- Export: separate queue, runs on next tick --

  requestExport() {
    if (this.disposed) return;
    this.exportQueued = true;
    window.setTimeout(() => {
      if (!this.disposed && this.exportQueued) {
        this.exportQueued = false;
        this.callbacks.runExport();
      }
    }, 0);
  }

  dispose() {
    this.disposed = true;
    if (this.previewTimer) window.clearTimeout(this.previewTimer);
    cancelAnimationFrame(this.fpsRaf);
    if (this.thumbIdleHandle) {
      const w = window as any;
      if (typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(this.thumbIdleHandle);
      } else {
        window.clearTimeout(this.thumbIdleHandle);
      }
    }
  }
}
