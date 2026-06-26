/**
 * Cross-session persistence for the per-node preview thumbnails.
 *
 * Stores the full `nodePreviews` map (Record<nodeId, dataURL>) keyed by
 * `outputAffectingSignature(graph)`. When a graph that we've previously
 * computed thumbnails for is loaded again (e.g. Load Example, page reload
 * with the same autosave), we can hand the cached thumbnails back to the
 * UI instantly instead of waiting on the per-node compile pipeline.
 *
 * Invalidation is via signature equality — any param tweak changes the
 * sig and forces fresh compute. This is intentionally coarse: thumbnails
 * are visual hints, and showing a stale one for the wrong graph would be
 * confusing. Coarse-key cache trades hit rate for safety.
 *
 * Cap: 24 graph signatures, oldest evicted by insertion order.
 * Dev/UX-safety: all IDB calls swallow errors and fall back to no-op.
 */

const DB_NAME = 'atomicgraph.node-previews';
const DB_VERSION = 1;
const STORE = 'thumbs';

export const NODE_PREVIEW_SCHEMA_VERSION = 1;

const MAX_PERSISTED_SIGS = 24;

interface PersistedThumbs {
  sig: string;                          // outputAffectingSignature(graph)
  previews: Record<string, string>;     // nodeId → dataURL
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
        const store = db.createObjectStore(STORE, { keyPath: 'sig' });
        store.createIndex('storedAt', 'storedAt', { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
    req.onblocked = () => resolve(null);
  });
  return dbPromise;
}

export async function lookupNodePreviews(sig: string): Promise<Record<string, string> | null> {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve) => {
    let tx: IDBTransaction;
    try { tx = db.transaction(STORE, 'readonly'); }
    catch { resolve(null); return; }
    const store = tx.objectStore(STORE);
    const req = store.get(sig);
    req.onsuccess = () => {
      const record = req.result as PersistedThumbs | undefined;
      if (!record || record.schemaVersion !== NODE_PREVIEW_SCHEMA_VERSION) {
        resolve(null);
        return;
      }
      resolve(record.previews ?? null);
    };
    req.onerror = () => resolve(null);
  });
}

let pendingWrite: { sig: string; previews: Record<string, string> } | null = null;
let writeTimer: number | null = null;

/**
 * Queue a save of the full `previews` map under `sig`. Debounced so a stream
 * of incremental `setNodePreviews(prev => ...)` calls from the compile worker
 * collapses into one write at the end.
 */
export function persistNodePreviews(sig: string, previews: Record<string, string>): void {
  // Don't persist empty maps — they're not useful and clutter the store.
  if (!sig || !previews || Object.keys(previews).length === 0) return;
  pendingWrite = { sig, previews };
  if (writeTimer !== null) return;
  writeTimer = (typeof window !== 'undefined' ? window.setTimeout : setTimeout)(() => {
    writeTimer = null;
    void doFlush();
  }, 1500) as unknown as number;
}

async function doFlush(): Promise<void> {
  const snap = pendingWrite;
  pendingWrite = null;
  if (!snap) return;
  const db = await openDb();
  if (!db) return;
  try {
    const tx = db.transaction(STORE, 'readwrite');
    const store = tx.objectStore(STORE);
    const rec: PersistedThumbs = {
      sig: snap.sig,
      previews: snap.previews,
      schemaVersion: NODE_PREVIEW_SCHEMA_VERSION,
      storedAt: Date.now(),
    };
    store.put(rec);
    // Best-effort prune: trim oldest sigs if we overshoot the cap.
    await new Promise<void>((res) => {
      const countReq = store.count();
      countReq.onsuccess = () => {
        const total = countReq.result;
        if (total <= MAX_PERSISTED_SIGS) { res(); return; }
        const overflow = total - MAX_PERSISTED_SIGS;
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
  } catch { /* swallow */ }
}

export async function clearPersistedNodePreviews(): Promise<{ ok: boolean }> {
  const db = await openDb();
  if (!db) return { ok: false };
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, 'readwrite');
      const req = tx.objectStore(STORE).clear();
      req.onsuccess = () => resolve({ ok: true });
      req.onerror = () => resolve({ ok: false });
    } catch { resolve({ ok: false }); }
  });
}

export async function persistedNodePreviewsSigCount(): Promise<number> {
  const db = await openDb();
  if (!db) return 0;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).count();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(0);
    } catch { resolve(0); }
  });
}
