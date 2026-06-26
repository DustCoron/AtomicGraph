import fs from 'node:fs';
import path from 'node:path';

/**
 * ag-devbridge — dev-only Vite plugin that mirrors the browser's
 * `nt.app.logs.v1` localStorage stream to a file on disk so an agent
 * (or any external tool) can tail it without driving Chrome.
 *
 * Endpoints (under /__ag/*, all dev-server only):
 *   POST  /__ag/log       Append a JSON log entry to tmp/ag-app.ndjson.
 *                         Body: AppLogEntry shape (level, source, message, ...).
 *   GET   /__ag/state     { count, latest: AppLogEntry[] } — last 80 entries.
 *   GET   /__ag/state?full=1   Return all buffered entries (capped at MAX_LINES).
 *   GET   /__ag/state?level=error,warn   Filter by level (CSV).
 *   POST  /__ag/clear     Truncate the log file.
 *   POST  /__ag/mark      Append a sentinel entry with body.tag — useful to
 *                         delimit "before/after a code edit" sections.
 *
 * The file is replaced (not appended) on each dev-server start so logs match
 * the current session. Disk writes are batched (16 entries or 250 ms).
 */

const LOG_REL = 'tmp/ag-app.ndjson';
const MAX_LINES = 5000;         // hard cap to avoid unbounded growth
const FLUSH_INTERVAL_MS = 250;
const FLUSH_BATCH = 16;

export function agDevbridge() {
  const logPath = path.resolve(LOG_REL);
  /** @type {object[]} */
  let buffer = [];
  let flushTimer = null;
  let totalWritten = 0;

  function flush() {
    if (buffer.length === 0) return;
    fs.mkdirSync(path.dirname(logPath), { recursive: true });
    const text = buffer.map((e) => JSON.stringify(e)).join('\n') + '\n';
    fs.appendFileSync(logPath, text);
    totalWritten += buffer.length;
    buffer = [];
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
    // Soft truncate if file gets too long.
    if (totalWritten > MAX_LINES * 1.25) {
      try {
        const all = fs.readFileSync(logPath, 'utf8').split('\n').filter(Boolean);
        const keep = all.slice(-MAX_LINES);
        fs.writeFileSync(logPath, keep.join('\n') + '\n');
        totalWritten = keep.length;
      } catch { /* ignore truncate races */ }
    }
  }

  function scheduleFlush() {
    if (buffer.length >= FLUSH_BATCH) { flush(); return; }
    if (flushTimer) return;
    flushTimer = setTimeout(() => { flushTimer = null; flush(); }, FLUSH_INTERVAL_MS);
  }

  function readBody(req) {
    return new Promise((resolve, reject) => {
      let raw = '';
      req.setEncoding('utf8');
      req.on('data', (chunk) => {
        raw += chunk;
        if (raw.length > 256 * 1024) reject(new Error('body too large'));
      });
      req.on('end', () => resolve(raw));
      req.on('error', reject);
    });
  }

  function readAll() {
    try {
      const txt = fs.readFileSync(logPath, 'utf8');
      const lines = txt.split('\n').filter(Boolean);
      const out = [];
      for (const ln of lines) {
        try { out.push(JSON.parse(ln)); } catch { /* skip malformed */ }
      }
      return out;
    } catch {
      return [];
    }
  }

  return {
    name: 'ag-devbridge',
    apply: 'serve',
    configureServer(server) {
      // Fresh log per session.
      try { fs.unlinkSync(logPath); } catch { /* ignore */ }
      totalWritten = 0;

      server.middlewares.use('/__ag/log', (req, res, next) => {
        if (req.method !== 'POST') { next(); return; }
        readBody(req).then((raw) => {
          let entry;
          try {
            entry = JSON.parse(raw);
          } catch {
            res.statusCode = 400; res.end('invalid json'); return;
          }
          entry._recvAt = new Date().toISOString();
          buffer.push(entry);
          scheduleFlush();
          res.statusCode = 204;
          res.end();
        }).catch((err) => {
          res.statusCode = 400; res.end(String(err.message || err));
        });
      });

      server.middlewares.use('/__ag/state', (req, res, next) => {
        if (req.method !== 'GET') { next(); return; }
        flush();
        const url = new URL(req.url, 'http://x');
        const wantFull = url.searchParams.get('full') === '1';
        const levelCsv = url.searchParams.get('level');
        const limit = Math.max(1, Math.min(2000, Number(url.searchParams.get('limit')) || 80));
        let entries = readAll();
        if (levelCsv) {
          const set = new Set(levelCsv.split(',').map((s) => s.trim()).filter(Boolean));
          entries = entries.filter((e) => set.has(e.level));
        }
        const latest = wantFull ? entries : entries.slice(-limit);
        res.setHeader('content-type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
          count: entries.length,
          buffered: buffer.length,
          path: logPath,
          latest,
        }));
      });

      server.middlewares.use('/__ag/clear', (req, res, next) => {
        if (req.method !== 'POST') { next(); return; }
        try { fs.unlinkSync(logPath); } catch { /* ignore */ }
        buffer = [];
        totalWritten = 0;
        res.statusCode = 204;
        res.end();
      });

      server.middlewares.use('/__ag/mark', (req, res, next) => {
        if (req.method !== 'POST') { next(); return; }
        readBody(req).then((raw) => {
          let body = {};
          try { body = JSON.parse(raw || '{}'); } catch { /* allow empty */ }
          buffer.push({
            id: `mark_${Date.now().toString(36)}`,
            ts: new Date().toISOString(),
            level: 'info',
            source: 'devbridge',
            message: `--- ${body.tag || 'mark'} ---`,
            _recvAt: new Date().toISOString(),
          });
          flush();
          res.statusCode = 204;
          res.end();
        }).catch((err) => {
          res.statusCode = 400; res.end(String(err.message || err));
        });
      });

      // Ensure flush on shutdown so the last entries don't get lost.
      const origClose = server.close.bind(server);
      server.close = async (...args) => {
        flush();
        return origClose(...args);
      };

      // eslint-disable-next-line no-console
      console.log(`[ag-devbridge] tail: ${logPath}`);
    },
  };
}
