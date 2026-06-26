/**
 * Cross-session persistence for the compile cache (`core/compiler.ts`).
 *
 * Stores `CompiledShader` records in IndexedDB keyed by the same cache key
 * the in-memory LRU uses. On module init it streams a small prefix back
 * into the in-memory cache so the first `Compiler.compile()` calls after a
 * page reload hit cache instead of paying cold JIT + cold compile cost.
 *
 * IndexedDB is async, so the load is fire-and-forget — early misses still
 * compile normally, they just don't benefit from persistence on the very
 * first frames. Writes are debounced and capped to avoid the DB blowing
 * up on a long editing session.
 *
 * Dev-only: gated by `import.meta.env.DEV` at the call sites. Wrapped in
 * try/catch so a private-browsing tab (where IDB throws) silently falls
 * back to in-memory only.
 */

import type { CompiledShader } from './compiler';

const DB_NAME = 'atomicgraph.compile-cache';
const DB_VERSION = 1;
const STORE = 'shaders';

// Bump this whenever the compiler's output format / cache-key schema
// changes incompatibly with previously persisted entries. Persisted records
// with a different schemaVersion are ignored and overwritten.
//
// History:
//   v1 — initial.
//   v2 — perlin gained multi-octave summation driven by `roughness`; old
//        v1 entries for `perlin` would seed a stale single-octave shader
//        against a key that now expects six octaves of work. Same hash,
//        different bytecode — must invalidate.
//   v3 — `tileOffsetX/Y` removed from gaussian_noise / tile_generator /
//        noise / voronoi / worley / bnw_spots2_v2 param surfaces. Generated
//        WGSL/GLSL no longer references those uniforms. v2 cache entries
//        baked the offset-add into the sample position, so they'd render
//        differently from the new code for the same logical (graph) input.
export const COMPILE_CACHE_SCHEMA_VERSION = 3;

// Cap: we never load more than this from IDB at startup (oldest first eviction
// in compiler.ts handles in-memory bounds separately). 256 is a comfy fit
// for the Stress Compile Loop + warmup combo on Complex.
const PERSIST_LOAD_LIMIT = 256;
// Cap: we never WRITE more than this many total records before pruning.
const PERSIST_WRITE_LIMIT = 512;
const FLUSH_DEBOUNCE_MS = 1000;

interface PersistedRecord {
  key: string;
  value: CompiledShader;
  schemaVersion: number;
  storedAt: number;
}

let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise<IDBDatabase | null>((resolve) => {
    if (typeof indexedDB === 'undefined') { resolve(null); return; }
    let req: IDBOpenDBRequest;
    try {
      req = indexedDB.open(DB_NAME, DB_VERSION);
    } catch {
      resolve(null);
      return;
    }
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: 'key' });
        store.createIndex('storedAt', 'storedAt', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
    req.onblocked = () => resolve(null);
  });
  return dbPromise;
}

function withStore<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => Promise<T>): Promise<T | null> {
  return openDb().then((db) => {
    if (!db) return null;
    return new Promise<T | null>((resolve) => {
      let tx: IDBTransaction;
      try {
        tx = db.transaction(STORE, mode);
      } catch {
        resolve(null);
        return;
      }
      const store = tx.objectStore(STORE);
      let payload: T | null = null;
      let settled = false;
      fn(store)
        .then((result) => { payload = result; })
        .catch(() => { /* swallow per-operation errors; let tx.oncomplete decide */ });
      tx.oncomplete = () => {
        if (settled) return;
        settled = true;
        resolve(payload);
      };
      tx.onerror = () => { if (!settled) { settled = true; resolve(null); } };
      tx.onabort = () => { if (!settled) { settled = true; resolve(null); } };
    });
  });
}

/**
 * Load up to PERSIST_LOAD_LIMIT entries (most-recently-stored first) and
 * call back into the in-memory cache via `seed`. Caller is expected to be
 * `compiler.ts`'s module init; if the page exits before we resolve, no harm.
 */
export async function hydrateCompileCache(seed: (key: string, value: CompiledShader) => void): Promise<{ loaded: number; available: number }> {
  const db = await openDb();
  if (!db) return { loaded: 0, available: 0 };
  return new Promise((resolve) => {
    let tx: IDBTransaction;
    try {
      tx = db.transaction(STORE, 'readonly');
    } catch {
      resolve({ loaded: 0, available: 0 });
      return;
    }
    const store = tx.objectStore(STORE);
    const idx = store.index('storedAt');
    let loaded = 0;
    let scanned = 0;
    // Walk newest-first; abort cursor once we've seeded the limit.
    const req = idx.openCursor(null, 'prev');
    req.onsuccess = () => {
      const cursor = req.result;
      if (!cursor) { resolve({ loaded, available: scanned }); return; }
      scanned += 1;
      const record = cursor.value as PersistedRecord;
      if (record && record.schemaVersion === COMPILE_CACHE_SCHEMA_VERSION && record.value && typeof record.key === 'string') {
        seed(record.key, record.value);
        loaded += 1;
      }
      if (loaded >= PERSIST_LOAD_LIMIT) { resolve({ loaded, available: scanned }); return; }
      cursor.continue();
    };
    req.onerror = () => resolve({ loaded, available: scanned });
  });
}

const pendingWrites = new Map<string, CompiledShader>();
let flushTimer: number | null = null;

function scheduleFlush(): void {
  if (flushTimer !== null) return;
  flushTimer = (typeof window !== 'undefined' ? window.setTimeout : setTimeout)(() => {
    flushTimer = null;
    void flushPending();
  }, FLUSH_DEBOUNCE_MS) as unknown as number;
}

async function flushPending(): Promise<void> {
  if (pendingWrites.size === 0) return;
  const drain = Array.from(pendingWrites.entries());
  pendingWrites.clear();
  await withStore('readwrite', async (store) => {
    const now = Date.now();
    for (const [key, value] of drain) {
      const rec: PersistedRecord = { key, value, schemaVersion: COMPILE_CACHE_SCHEMA_VERSION, storedAt: now };
      try { store.put(rec); } catch { /* tx will surface as onerror */ }
    }
    // Best-effort prune: count entries and trim oldest if over cap.
    await new Promise<void>((res) => {
      const countReq = store.count();
      countReq.onsuccess = () => {
        const total = countReq.result;
        if (total <= PERSIST_WRITE_LIMIT) { res(); return; }
        const overflow = total - PERSIST_WRITE_LIMIT;
        const idx = store.index('storedAt');
        const cursorReq = idx.openCursor();
        let removed = 0;
        cursorReq.onsuccess = () => {
          const cursor = cursorReq.result;
          if (!cursor || removed >= overflow) { res(); return; }
          cursor.delete();
          removed += 1;
          cursor.continue();
        };
        cursorReq.onerror = () => res();
      };
      countReq.onerror = () => res();
    });
    return null;
  });
}

/** Queue a cache record for persistence. Coalesced via FLUSH_DEBOUNCE_MS. */
export function persistCompileEntry(key: string, value: CompiledShader): void {
  pendingWrites.set(key, value);
  scheduleFlush();
}

/** Diagnostic: wipe the IDB store. Exposed via window.__ag. */
export async function clearPersistedCompileCache(): Promise<{ ok: boolean }> {
  const result = await withStore('readwrite', (store) => new Promise<boolean>((resolve) => {
    const req = store.clear();
    req.onsuccess = () => resolve(true);
    req.onerror = () => resolve(false);
  }));
  pendingWrites.clear();
  return { ok: !!result };
}

/** Diagnostic: how many records are persisted right now. */
export async function persistedCompileCacheSize(): Promise<number> {
  const result = await withStore('readonly', (store) => new Promise<number>((resolve) => {
    const req = store.count();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(0);
  }));
  return result ?? 0;
}
