import type { RenderFrameResult } from './gpu-renderer';
import { GPUQuadRenderer } from './gpu-renderer';

export interface PaintBrushParams {
  radius: number;
  hardness: number;
  opacity: number;
  spacing: number;
  color: [number, number, number, number];
  jitter: number;
}

export interface PaintStrokePoint {
  u: number;
  v: number;
  pressure?: number;
}

interface StampDispatch {
  cx: number;
  cy: number;
  radius: number;
  hardness: number;
  opacity: number;
  pressure: number;
  color: [number, number, number, number];
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  groupsX: number;
  groupsY: number;
}

const WORKGROUP_SIZE = 8;
const MAX_STAMPS_PER_SUBMIT = 512;
const STAMP_UNIFORM_STRIDE_BYTES = 256;
const STAMP_UNIFORM_STRIDE_FLOATS = STAMP_UNIFORM_STRIDE_BYTES / 4;
const STAMP_UNIFORM_FLOATS = 16;
const BLIT_UNIFORM_BYTES = 16;

const STAMP_WGSL = `
struct StampParams {
  center_radius: vec4f,   // cx, cy, radius, hardness
  color_opacity: vec4f,   // r, g, b, opacity
  pressure_tex: vec4f,    // pressure, texW, texH, reserved
  bounds: vec4f,          // minX, minY, maxX, maxY
};

@group(0) @binding(0) var<storage, read_write> pixels: array<vec4f>;
@group(0) @binding(1) var<uniform> stamp: StampParams;

@compute @workgroup_size(${WORKGROUP_SIZE}, ${WORKGROUP_SIZE}, 1)
fn cs_stamp(@builtin(global_invocation_id) gid: vec3<u32>) {
  let minX = i32(stamp.bounds.x);
  let minY = i32(stamp.bounds.y);
  let maxX = i32(stamp.bounds.z);
  let maxY = i32(stamp.bounds.w);

  let px = minX + i32(gid.x);
  let py = minY + i32(gid.y);

  if (px < minX || py < minY || px >= maxX || py >= maxY) {
    return;
  }

  let texW = i32(stamp.pressure_tex.y);
  let texH = i32(stamp.pressure_tex.z);
  if (px < 0 || py < 0 || px >= texW || py >= texH) {
    return;
  }

  let center = stamp.center_radius.xy;
  let radius = max(stamp.center_radius.z, 0.0001);
  let hardness = clamp(stamp.center_radius.w, 0.001, 1.0);

  let p = vec2f(f32(px) + 0.5, f32(py) + 0.5);
  let d = distance(p, center);
  if (d > radius) {
    return;
  }

  let inner = radius * hardness;
  let mask = 1.0 - smoothstep(inner, radius, d);
  let alpha = clamp(mask * stamp.color_opacity.w * stamp.pressure_tex.x, 0.0, 1.0);
  if (alpha <= 0.00001) {
    return;
  }

  let idx = u32(py) * u32(texW) + u32(px);
  var dst = pixels[idx];
  let srcRgb = stamp.color_opacity.rgb;
  dst.rgb = mix(dst.rgb, srcRgb, alpha);
  dst.a = clamp(dst.a + alpha * (1.0 - dst.a), 0.0, 1.0);
  pixels[idx] = dst;
}
`;

const BLIT_WGSL = `
struct BlitParams {
  texSize: vec2u,
  _pad: vec2u,
};

@group(0) @binding(0) var<storage, read> pixels: array<vec4f>;
@group(0) @binding(1) var dstTex: texture_storage_2d<rgba8unorm, write>;
@group(0) @binding(2) var<uniform> blit: BlitParams;

@compute @workgroup_size(${WORKGROUP_SIZE}, ${WORKGROUP_SIZE}, 1)
fn cs_blit(@builtin(global_invocation_id) gid: vec3<u32>) {
  if (gid.x >= blit.texSize.x || gid.y >= blit.texSize.y) {
    return;
  }
  let idx = gid.y * blit.texSize.x + gid.x;
  let c = clamp(pixels[idx], vec4f(0.0), vec4f(1.0));
  textureStore(dstTex, vec2i(i32(gid.x), i32(gid.y)), c);
}
`;

const PRESENT_WGSL = `
struct VSOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
  var out: VSOut;
  out.pos = vec4f(p[vi], 0.0, 1.0);
  out.uv = vec2f(p[vi].x * 0.5 + 0.5, 1.0 - (p[vi].y * 0.5 + 0.5));
  return out;
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var tex: texture_2d<f32>;

@fragment
fn fs_main(inp: VSOut) -> @location(0) vec4f {
  return textureSample(tex, samp, inp.uv);
}
`;

export class GPUTexturePainter {
  private readonly renderer: GPUQuadRenderer;
  private readonly device: GPUDevice;
  private readonly context: GPUCanvasContext;
  private readonly format: GPUTextureFormat;

  private paintTexture: GPUTexture | null = null;
  private paintTextureView: GPUTextureView | null = null;
  private paintBuffer: GPUBuffer | null = null;
  private stampUniformBuffer: GPUBuffer;
  private blitUniformBuffer: GPUBuffer;
  private sampler: GPUSampler;

  private stampBindGroupLayout: GPUBindGroupLayout;
  private stampBindGroup: GPUBindGroup | null = null;
  private stampPipeline: GPUComputePipeline;

  private blitBindGroupLayout: GPUBindGroupLayout;
  private blitBindGroup: GPUBindGroup | null = null;
  private blitPipeline: GPUComputePipeline;

  private presentBindGroupLayout: GPUBindGroupLayout;
  private presentBindGroup: GPUBindGroup | null = null;
  private presentPipeline: GPURenderPipeline;

  private width = 0;
  private height = 0;
  private dirty = true;
  private pending: StampDispatch[] = [];

  constructor(renderer: GPUQuadRenderer) {
    this.renderer = renderer;
    this.device = renderer.getDevice();
    this.context = renderer.getCanvasContext();
    this.format = renderer.getPresentationFormat();

    this.stampUniformBuffer = this.device.createBuffer({
      size: STAMP_UNIFORM_STRIDE_BYTES * MAX_STAMPS_PER_SUBMIT,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.blitUniformBuffer = this.device.createBuffer({
      size: BLIT_UNIFORM_BYTES,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.sampler = this.device.createSampler({
      magFilter: 'linear',
      minFilter: 'linear',
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',
    });

    const stampModule = this.device.createShaderModule({ code: STAMP_WGSL });
    const blitModule = this.device.createShaderModule({ code: BLIT_WGSL });
    const presentModule = this.device.createShaderModule({ code: PRESENT_WGSL });

    this.stampBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        {
          binding: 1,
          visibility: GPUShaderStage.COMPUTE,
          buffer: { type: 'uniform', hasDynamicOffset: true, minBindingSize: STAMP_UNIFORM_FLOATS * 4 },
        },
      ],
    });
    this.blitBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, storageTexture: { access: 'write-only', format: 'rgba8unorm' } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
      ],
    });
    this.presentBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'filtering' } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'float' } },
      ],
    });

    this.stampPipeline = this.device.createComputePipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.stampBindGroupLayout] }),
      compute: { module: stampModule, entryPoint: 'cs_stamp' },
    });
    this.blitPipeline = this.device.createComputePipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.blitBindGroupLayout] }),
      compute: { module: blitModule, entryPoint: 'cs_blit' },
    });
    this.presentPipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.presentBindGroupLayout] }),
      vertex: { module: presentModule, entryPoint: 'vs_main' },
      fragment: { module: presentModule, entryPoint: 'fs_main', targets: [{ format: this.format }] },
      primitive: { topology: 'triangle-list' },
    });
  }

  ensureSize(width: number, height: number) {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    if (w === this.width && h === this.height && this.paintTexture && this.paintBuffer) return;

    this.paintTexture?.destroy();
    this.paintBuffer?.destroy();
    this.paintTexture = this.device.createTexture({
      size: { width: w, height: h, depthOrArrayLayers: 1 },
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING,
    });
    this.paintTextureView = this.paintTexture.createView();
    this.paintBuffer = this.device.createBuffer({
      size: w * h * 16,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    const zeroes = new Float32Array(w * h * 4);
    this.device.queue.writeBuffer(this.paintBuffer, 0, zeroes.buffer);
    this.device.queue.writeBuffer(this.blitUniformBuffer, 0, new Uint32Array([w, h, 0, 0]));

    this.stampBindGroup = this.device.createBindGroup({
      layout: this.stampBindGroupLayout,
      entries: [
        { binding: 0, resource: { buffer: this.paintBuffer } },
        { binding: 1, resource: { buffer: this.stampUniformBuffer, size: STAMP_UNIFORM_FLOATS * 4 } },
      ],
    });
    this.blitBindGroup = this.device.createBindGroup({
      layout: this.blitBindGroupLayout,
      entries: [
        { binding: 0, resource: { buffer: this.paintBuffer } },
        { binding: 1, resource: this.paintTextureView },
        { binding: 2, resource: { buffer: this.blitUniformBuffer } },
      ],
    });
    this.presentBindGroup = this.device.createBindGroup({
      layout: this.presentBindGroupLayout,
      entries: [
        { binding: 0, resource: this.sampler },
        { binding: 1, resource: this.paintTextureView },
      ],
    });

    this.width = w;
    this.height = h;
    this.pending = [];
    this.dirty = true;
  }

  queueStroke(points: PaintStrokePoint[], brush: PaintBrushParams) {
    if (!this.paintTexture || !this.paintBuffer || this.width <= 0 || this.height <= 0) return;
    const hardness = Math.max(0.001, Math.min(1, brush.hardness));
    const opacity = Math.max(0, Math.min(1, brush.opacity));
    const radius = Math.max(1, brush.radius);
    const jitter = Math.max(0, brush.jitter);
    const color: [number, number, number, number] = [
      Math.max(0, Math.min(1, brush.color[0])),
      Math.max(0, Math.min(1, brush.color[1])),
      Math.max(0, Math.min(1, brush.color[2])),
      Math.max(0, Math.min(1, brush.color[3])),
    ];

    for (const p of points) {
      const pressure = Math.max(0.05, Math.min(1, p.pressure ?? 1));
      const jitterPx = radius * jitter;
      const jx = jitterPx > 0 ? (Math.random() * 2 - 1) * jitterPx : 0;
      const jy = jitterPx > 0 ? (Math.random() * 2 - 1) * jitterPx : 0;
      const cx = Math.max(0, Math.min(this.width - 1, p.u * this.width + jx));
      const cy = Math.max(0, Math.min(this.height - 1, p.v * this.height + jy));
      const minX = Math.max(0, Math.floor(cx - radius - 1));
      const minY = Math.max(0, Math.floor(cy - radius - 1));
      const maxX = Math.min(this.width, Math.ceil(cx + radius + 1));
      const maxY = Math.min(this.height, Math.ceil(cy + radius + 1));
      const spanX = Math.max(1, maxX - minX);
      const spanY = Math.max(1, maxY - minY);

      this.pending.push({
        cx,
        cy,
        radius,
        hardness,
        opacity,
        pressure,
        color,
        minX,
        minY,
        maxX,
        maxY,
        groupsX: Math.max(1, Math.ceil(spanX / WORKGROUP_SIZE)),
        groupsY: Math.max(1, Math.ceil(spanY / WORKGROUP_SIZE)),
      });
    }
  }

  render(): RenderFrameResult {
    const t0 = performance.now();
    if (!this.paintTexture || !this.paintBuffer || !this.stampBindGroup || !this.blitBindGroup || !this.presentBindGroup) {
      return { ok: false, renderMs: performance.now() - t0, error: 'Paint target is not initialized' };
    }
    try {
      const encoder = this.device.createCommandEncoder();

      if (this.pending.length > 0) {
        let processed = 0;
        while (processed < this.pending.length) {
          const batch = this.pending.slice(processed, processed + MAX_STAMPS_PER_SUBMIT);
          const uniforms = new Float32Array(batch.length * STAMP_UNIFORM_STRIDE_FLOATS);
          for (let i = 0; i < batch.length; i += 1) {
            const s = batch[i];
            const base = i * STAMP_UNIFORM_STRIDE_FLOATS;
            uniforms[base + 0] = s.cx;
            uniforms[base + 1] = s.cy;
            uniforms[base + 2] = s.radius;
            uniforms[base + 3] = s.hardness;
            uniforms[base + 4] = s.color[0];
            uniforms[base + 5] = s.color[1];
            uniforms[base + 6] = s.color[2];
            uniforms[base + 7] = s.opacity * s.color[3];
            uniforms[base + 8] = s.pressure;
            uniforms[base + 9] = this.width;
            uniforms[base + 10] = this.height;
            uniforms[base + 11] = 0;
            uniforms[base + 12] = s.minX;
            uniforms[base + 13] = s.minY;
            uniforms[base + 14] = s.maxX;
            uniforms[base + 15] = s.maxY;
          }
          this.device.queue.writeBuffer(this.stampUniformBuffer, 0, uniforms.buffer);

          const pass = encoder.beginComputePass();
          pass.setPipeline(this.stampPipeline);
          for (let i = 0; i < batch.length; i += 1) {
            const s = batch[i];
            pass.setBindGroup(0, this.stampBindGroup, [i * STAMP_UNIFORM_STRIDE_BYTES]);
            pass.dispatchWorkgroups(s.groupsX, s.groupsY, 1);
          }
          pass.end();
          processed += batch.length;
        }
        this.pending = [];
        this.dirty = true;
      }

      if (this.dirty) {
        const blitPass = encoder.beginComputePass();
        blitPass.setPipeline(this.blitPipeline);
        blitPass.setBindGroup(0, this.blitBindGroup);
        blitPass.dispatchWorkgroups(
          Math.max(1, Math.ceil(this.width / WORKGROUP_SIZE)),
          Math.max(1, Math.ceil(this.height / WORKGROUP_SIZE)),
          1,
        );
        blitPass.end();
        this.dirty = false;
      }

      const view = this.context.getCurrentTexture().createView();
      const pass = encoder.beginRenderPass({
        colorAttachments: [{
          view,
          loadOp: 'clear',
          clearValue: { r: 0, g: 0, b: 0, a: 1 },
          storeOp: 'store',
        }],
      });
      pass.setPipeline(this.presentPipeline);
      pass.setBindGroup(0, this.presentBindGroup);
      pass.draw(3);
      pass.end();

      this.device.queue.submit([encoder.finish()]);
      return { ok: true, renderMs: performance.now() - t0 };
    } catch (error) {
      return {
        ok: false,
        renderMs: performance.now() - t0,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  dispose() {
    this.paintTexture?.destroy();
    this.paintBuffer?.destroy();
    this.stampUniformBuffer.destroy();
    this.blitUniformBuffer.destroy();
    this.paintTexture = null;
    this.paintTextureView = null;
    this.paintBuffer = null;
    this.stampBindGroup = null;
    this.blitBindGroup = null;
    this.presentBindGroup = null;
    this.pending = [];
  }
}
