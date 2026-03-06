import { appendAppLog } from './logs';

const MAX_UNIFORMS = 256;
const UNIFORM_BUF_SIZE = MAX_UNIFORMS * 4;

export interface PipelineCompileResult {
  ok: boolean;
  error?: string;
  compileMs?: number;
  diagnostics?: Array<{
    type: string;
    lineNum: number;
    linePos: number;
    message: string;
  }>;
}

export interface RenderFrameResult {
  ok: boolean;
  renderMs: number;
  error?: string;
}

export class GPUQuadRenderer {
  private device!: GPUDevice;
  private context!: GPUCanvasContext;
  private format!: GPUTextureFormat;
  private pipeline: GPURenderPipeline | null = null;
  private uniformBuffer!: GPUBuffer;
  private bindGroup: GPUBindGroup | null = null;
  private bindGroupLayout!: GPUBindGroupLayout;
  private lastShaderHash = '';

  static async create(canvas: HTMLCanvasElement): Promise<GPUQuadRenderer | null> {
    if (!navigator.gpu) return null;
    try {
      const r = new GPUQuadRenderer();
      const ok = await r.init(canvas);
      return ok ? r : null;
    } catch {
      return null;
    }
  }

  private async init(canvas: HTMLCanvasElement): Promise<boolean> {
    const isWindows = /Windows/i.test(navigator.userAgent || '');
    const adapter = await navigator.gpu.requestAdapter(
      isWindows ? undefined : { powerPreference: 'high-performance' }
    );
    if (!adapter) return false;
    this.device = await adapter.requestDevice();
    this.context = canvas.getContext('webgpu') as GPUCanvasContext;
    if (!this.context) return false;
    this.format = navigator.gpu.getPreferredCanvasFormat();
    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: 'premultiplied',
    });

    this.uniformBuffer = this.device.createBuffer({
      size: UNIFORM_BUF_SIZE,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.bindGroupLayout = this.device.createBindGroupLayout({
      entries: [{
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: 'uniform' },
      }],
    });

    this.bindGroup = this.device.createBindGroup({
      layout: this.bindGroupLayout,
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });

    return true;
  }

  setPipeline(wgsl: string, hash: string): boolean {
    if (hash === this.lastShaderHash && this.pipeline) return true;
    return false;
  }

  async setPipelineAsync(wgsl: string, hash: string): Promise<PipelineCompileResult> {
    if (hash === this.lastShaderHash && this.pipeline) return { ok: true };
    const t0 = performance.now();
    try {
      const module = this.device.createShaderModule({ code: wgsl });
      let diagnostics: Array<{ type: string; lineNum: number; linePos: number; message: string }> = [];

      try {
        const info = await module.getCompilationInfo();
        diagnostics = info.messages.map((msg) => ({
          type: msg.type,
          lineNum: msg.lineNum,
          linePos: msg.linePos,
          message: msg.message
        }));
      } catch (diagnosticErr) {
        appendAppLog({
          level: 'warn',
          source: 'viewport',
          message: 'WGSL compilation diagnostics unavailable',
          details: diagnosticErr instanceof Error ? `${diagnosticErr.name}: ${diagnosticErr.message}` : String(diagnosticErr),
        });
      }

      const errors = diagnostics.filter((msg) => msg.type === 'error');
      if (errors.length > 0) {
        const top = errors
          .slice(0, 6)
          .map((err) => `L${err.lineNum}:C${err.linePos} ${err.message}`)
          .join(' | ');
        this.pipeline = null;
        this.lastShaderHash = '';
        return { ok: false, error: top || 'WGSL compilation failed.', diagnostics, compileMs: performance.now() - t0 };
      }

      const pipelineLayout = this.device.createPipelineLayout({
        bindGroupLayouts: [this.bindGroupLayout],
      });
      this.pipeline = await this.device.createRenderPipelineAsync({
        layout: pipelineLayout,
        vertex: { module, entryPoint: 'vs_main' },
        fragment: {
          module,
          entryPoint: 'fs_main',
          targets: [{ format: this.format }],
        },
        primitive: { topology: 'triangle-list' },
      });
      this.lastShaderHash = hash;
      return { ok: true, diagnostics, compileMs: performance.now() - t0 };
    } catch (e) {
      console.error('WebGPU pipeline error:', e);
      this.pipeline = null;
      this.lastShaderHash = '';
      return {
        ok: false,
        error: e instanceof Error ? e.message : String(e),
        compileMs: performance.now() - t0,
      };
    }
  }

  writeUniforms(data: Float32Array) {
    this.device.queue.writeBuffer(
      this.uniformBuffer,
      0,
      data.buffer,
      data.byteOffset,
      Math.min(data.byteLength, UNIFORM_BUF_SIZE),
    );
  }

  render(): RenderFrameResult {
    const t0 = performance.now();
    if (!this.pipeline || !this.bindGroup) {
      return { ok: false, renderMs: performance.now() - t0, error: 'Pipeline not ready' };
    }
    try {
      const tex = this.context.getCurrentTexture();
      const encoder = this.device.createCommandEncoder();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{
          view: tex.createView(),
          loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 1 },
          storeOp: 'store',
        }],
      });
      pass.setPipeline(this.pipeline);
      pass.setBindGroup(0, this.bindGroup);
      pass.draw(3);
      pass.end();
      this.device.queue.submit([encoder.finish()]);
      return { ok: true, renderMs: performance.now() - t0 };
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      this.pipeline = null;
      this.lastShaderHash = '';
      return { ok: false, renderMs: performance.now() - t0, error: msg };
    }
  }

  configure(width: number, height: number) {
    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: 'premultiplied',
    });
  }

  get isReady() {
    return !!this.pipeline;
  }

  dispose() {
    this.uniformBuffer?.destroy();
    this.pipeline = null;
    this.bindGroup = null;
  }
}
