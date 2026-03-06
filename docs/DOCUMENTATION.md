# Nhance Texture Documentation

## Overview

Nhance Texture is a graph-based procedural texture tool.
You build materials from nodes, preview in 2D/3D, and route results to PBR outputs.

Primary outputs:
- BaseColor
- Roughness
- Normal
- Height

## Runtime Architecture

Pipeline (high level):
1. GraphData (`nodes` + `edges`)
2. Compiler (`core/compiler.ts`) emits shader source + uniform bindings
3. 2D renderer draws preview + node thumbnails
4. Output channel surfaces feed 3D preview

Important files:
- `src/App.tsx`: compile/render loop, preview scheduling, stats, monitoring
- `src/core/compiler.ts`: node-to-shader codegen (GLSL + WGSL paths)
- `src/core/registry.ts`: node definitions, params, categories
- `src/components/GraphEditor.tsx`: graph interaction and edge rendering
- `src/components/NodeCard.tsx`: node UI, ports, parameter editors, thumbnails
- `src/components/Viewport.tsx`: 2D preview
- `src/components/Viewport3D.tsx`: 3D material preview

## Node UI

### Large preview thumbnails

Node previews are intentionally larger for readability.
This improves quick diagnosis of where a graph starts to break.

Key implementation points:
- Node card preview box size is larger in `NodeCard.tsx`.
- Thumbnail render size is also increased in `App.tsx` (`NODE_THUMB_SIZE`) so enlarged previews stay sharp.

### Node tooltips

Every node card has a hover tooltip with:
- node label and type id
- category
- input ports (name + type)
- output ports (name + type)
- quick hint (double-click behavior)

This is implemented directly in `NodeCard.tsx`.

## Noise and Tiling Rules

Goal:
- procedural noise nodes should remain tile-safe by default.

### Perlin

Perlin uses a periodic lattice sampling path:
- scale is clamped/rounded to safe integer period
- tiled Perlin helper is used in shader generation

### BnW Spots 2

BnW Spots 2 uses tiled Perlin layers in the base and cluster stages.
The node does not include internal disorder animation controls; animation is expected from external graph nodes.

## 2D Preview

2D preview is WebGPU-first with adaptive quality behavior and budget-aware scheduling.
When under load, non-critical work can be deferred to keep interaction responsive.

## 3D Preview

3D preview supports:
- BaseColor, Roughness, Normal, Height channel inputs
- environment presets and custom HDR loading
- environment rotation (slider + keyboard drag gesture)
- wireframe overlay
- optional POM mode
- screenshot export

## Logging and Monitoring

App logging:
- structured runtime entries are written through `core/logs.ts`
- monitor/health status is available in code/monitor views

Recommended workflow:
1. Watch health and runtime errors while editing
2. Use per-node thumbnails and tooltips to localize issues
3. Run the `All-Nodes Preview Template` monitor check to verify every node type renders in preview
4. Use monitor stress tests before exporting

## Development Workflow

Install and run:
```bash
npm install
npm run dev
```

Validate before shipping:
```bash
npm run lint
npm run build
```

## Notes

- Keep output channels explicit in graph design.
- Prefer external animation/modulation nodes over hidden behavior inside generators.
- If a preview fails, use logs and per-node visuals first, then inspect generated code in the Code view.
