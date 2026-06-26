# Deferred features

## 4. WebGPU-backed node thumbnails (eliminate WebGL dependency)

**What:** Node thumbnails currently render through a shared
`THREE.WebGLRenderer` (see `_thumbCtx` and `renderShaderToSharedCanvas` in
`App.tsx`). That's a SECOND WebGL context on top of the Babylon 3D
preview and any other GL-using panels — and Chrome caps total WebGL
contexts at ~16 per renderer process. We already have a WebGPU device
running the main 2D preview shader; reusing it to bake node-thumbnails
removes the WebGL dependency for thumbnails entirely.

**Why deferred:** Touches the entire thumbnail pipeline:
`renderShaderToSharedCanvas`, `renderShaderToCanvas`,
`renderShaderThumbnail`, and the thumbnail cache key (which currently
includes THREE-specific material state). Need to add a WebGPU
offscreen-render-target path that produces a `data:image/png` URL
identical to the WebGL one. ~200 lines plus extensive testing across
WGSL/GLSL backends.

**Symptom this fixes:** When the browser exhausts WebGL contexts (heavy
HMR storm, many GL-heavy tabs open, Babylon engine churn), node
thumbnails silently stop appearing. The proactive WebGL probe now
catches this and surfaces a clear banner, but the underlying
sensitivity remains. WebGPU is independent of the WebGL context pool.

## 5. HMR-safe disposal for Babylon 3D viewport

**What:** `Viewport3DBabylon.tsx` creates a `BABYLON.Engine` inside a
`useEffect(..., [])` and disposes it in the effect cleanup. That works
on full unmount, but React Fast Refresh sometimes preserves component
state across HMR — leaving a zombie `Engine` (and its WebGL context)
holding GPU resources. Successive code edits during development can
exhaust Chrome's WebGL context cap, breaking the node-thumbnail
renderer (see #4) until the browser is restarted.

**Why deferred:** Needs an explicit `import.meta.hot?.dispose(() =>
engine.dispose())` handler, but the engine instance lives in a closure
inside the component's effect. Refactor to a module-level Map (keyed by
canvas/component ID) so the HMR hook can reach it, then wire dispose.
~80 lines plus careful audit of every dispose() call path so we don't
double-free.

**Workaround in the meantime:** Full browser restart frees all stale
WebGL contexts. The proactive probe at mount surfaces a clear banner
when this state is hit.

## 3. Code-affecting sample count for `slope_blur` and `non_uniform_blur`

**What:** These two filter nodes emit a fixed unrolled set of sample sites
(9 sites for `slope_blur`, 17 for `non_uniform_blur`) and gate which ones
contribute via `step(N.5, samples)` against the `samples` uniform. The GPU
still evaluates every sampled point — the `step()` only zeroes out the
contribution. At 2048×2048 this is a measurable slowdown despite the
user's `samples` slider being low.

**Why deferred:** The current uniform-driven gate works correctly; only
the upper-bound cost is wrong. The AO baker (`height_to_ao`) was added
later and uses the correct pattern — `samples` is a code-affecting
`select` so the compiler unrolls only the requested sample count. The two
older filters predate that pattern.

**Acceptance criteria:**
- Convert `samples` to a `select` with discrete options
- Emit only the requested sample count in shader
- Keep param data backward-compatible (existing float values clamp to nearest discrete option)

---



Tracked here to avoid being lost in commit history. These were proposed
during the Substance-Designer-parity pass and explicitly deferred by the
user as "late functionality" — not blocking the editor's day-to-day use,
but worth doing once the core node library and authoring UX are settled.

## 1. Bitmap import node

**What:** A source node `bitmap` that takes a user-selected image file
(via `<input type="file">` or drag-and-drop) and exposes it as a
`Texture2D` / float input that downstream nodes can sample.

**Why deferred:** Touches IndexedDB blob storage, GPU texture upload,
file lifecycle (delete/replace), and per-graph asset bundling. ~150 lines
plus careful state management.

**Substance equivalent:** The "Bitmap" node — used as the starting point
for scan-based material workflows.

**Acceptance criteria:**
- Drag-and-drop or file-picker in node card
- Image cached in IDB by content hash, survives reload
- Resamples to graph resolution
- Works in both WGSL and GLSL backends

## 2. Output bake / PNG export

**What:** A "Bake" button on each `output_*` node that renders the
output channel at requested resolution and triggers a browser download
as PNG (or EXR for height).

**Why deferred:** Requires off-screen render target at arbitrary resolution
(not just the live preview size), proper sRGB encoding for color channels
vs linear for non-color, and a UI affordance distinct from "Download
Logs".

**Substance equivalent:** The "Output" panel's per-channel export.
Without this the editor can render but not produce usable artifacts.

**Acceptance criteria:**
- Per-output Bake button
- Resolution selector (independent of live preview)
- PNG for color/grayscale, 16-bit PNG or EXR for height
- All six material channels exportable
- Filename auto-derived from graph name + channel
