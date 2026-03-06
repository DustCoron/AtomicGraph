# Nhance Texture

Nhance Texture is a node-based procedural material editor with:
- real-time 2D preview (WebGPU)
- integrated 3D material preview (Three.js)
- channel-aware outputs (BaseColor, Roughness, Normal, Height)
- stress/health monitor and runtime logs

## Quick Start

Requirements:
- Node.js 20+

Run:
```bash
npm install
npm run dev
```

Open:
- http://localhost:3000

## Build and Typecheck

```bash
npm run lint
npm run build
```

## Notable UX Details

- Node thumbnails are rendered and displayed at larger size for clearer per-node feedback.
- Every graph node has a hover tooltip with type/category/ports and a quick usage hint.
- Procedural noise paths are tile-safe by default, including Perlin and BnW Spots 2.

## Documentation

See full project docs in:
- `docs/DOCUMENTATION.md`
