const DEFAULT_MAX_ENTRIES = 64;

export interface TextureEntry {
  id: string;
  texture: GPUTexture;
  width: number;
  height: number;
  lastUsed: number;
}

export interface TextureCacheKey {
  nodeId: string;
  port: number;
  resolution: number;
  subgraphHash: string;
}

function cacheKeyStr(k: TextureCacheKey): string {
  return `${k.nodeId}:${k.port}:${k.resolution}:${k.subgraphHash}`;
}

export class TexturePool {
  private device: GPUDevice;
  private entries = new Map<string, TextureEntry>();
  private maxEntries: number;
  private format: GPUTextureFormat;

  constructor(device: GPUDevice, format: GPUTextureFormat, maxEntries = DEFAULT_MAX_ENTRIES) {
    this.device = device;
    this.format = format;
    this.maxEntries = maxEntries;
  }

  has(id: string): boolean {
    return this.entries.has(id);
  }

  hasCached(key: TextureCacheKey): boolean {
    return this.entries.has(cacheKeyStr(key));
  }

  get(id: string): TextureEntry | null {
    const entry = this.entries.get(id);
    if (!entry) return null;
    entry.lastUsed = performance.now();
    return entry;
  }

  getCached(key: TextureCacheKey): TextureEntry | null {
    return this.get(cacheKeyStr(key));
  }

  acquire(id: string, width: number, height: number): GPUTexture {
    const existing = this.entries.get(id);
    if (existing && existing.width === width && existing.height === height) {
      existing.lastUsed = performance.now();
      return existing.texture;
    }
    if (existing) {
      existing.texture.destroy();
      this.entries.delete(id);
    }

    this.evictIfNeeded();

    const texture = this.device.createTexture({
      size: { width, height },
      format: this.format,
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
    });
    this.entries.set(id, { id, texture, width, height, lastUsed: performance.now() });
    return texture;
  }

  acquireCached(key: TextureCacheKey): GPUTexture {
    return this.acquire(cacheKeyStr(key), key.resolution, key.resolution);
  }

  release(id: string) {
    const entry = this.entries.get(id);
    if (entry) {
      entry.texture.destroy();
      this.entries.delete(id);
    }
  }

  releaseCached(key: TextureCacheKey) {
    this.release(cacheKeyStr(key));
  }

  invalidateNode(nodeId: string) {
    const toDelete: string[] = [];
    for (const [id] of this.entries) {
      if (id.startsWith(`${nodeId}:`)) toDelete.push(id);
    }
    for (const id of toDelete) this.release(id);
  }

  clear() {
    for (const entry of this.entries.values()) {
      entry.texture.destroy();
    }
    this.entries.clear();
  }

  get size(): number {
    return this.entries.size;
  }

  private evictIfNeeded() {
    while (this.entries.size >= this.maxEntries) {
      let oldest: TextureEntry | null = null;
      for (const entry of this.entries.values()) {
        if (!oldest || entry.lastUsed < oldest.lastUsed) {
          oldest = entry;
        }
      }
      if (oldest) {
        oldest.texture.destroy();
        this.entries.delete(oldest.id);
      } else {
        break;
      }
    }
  }

  dispose() {
    this.clear();
  }
}
