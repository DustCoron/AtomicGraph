import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { appendAppLog } from '../core/logs';
import { PerformanceMode, percentile, ViewportQualityState } from '../core/perf';

interface Viewport3DProps {
  baseColorCanvas?: HTMLCanvasElement | null;
  heightCanvas?: HTMLCanvasElement | null;
  normalCanvas?: HTMLCanvasElement | null;
  roughnessCanvas?: HTMLCanvasElement | null;
  metallicCanvas?: HTMLCanvasElement | null;
  baseColorVersion?: number;
  heightVersion?: number;
  normalVersion?: number;
  roughnessVersion?: number;
  metallicVersion?: number;
  frameBudgetMs?: number;
  performanceMode?: PerformanceMode;
}

type MeshPreset = 'plane' | 'sphere' | 'cube' | 'cylinder';
type ViewMode = 'lit' | 'baseColor' | 'normal' | 'roughness' | 'metallic' | 'height';
type EnvPreset = 'studio' | 'overcast' | 'sunset' | 'neutral' | 'hdr_studio' | 'hdr_city' | 'custom';
type ProceduralEnvPreset = 'studio' | 'overcast' | 'sunset' | 'neutral';
type ToneMappingMode = 'aces' | 'linear' | 'reinhard' | 'cineon';
type Channel = 'baseColor' | 'height' | 'normal' | 'roughness' | 'metallic';
type TessellationQuality = 'low' | 'med' | 'high';

interface SceneState {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  mesh: THREE.Mesh;
  pbrMat: THREE.MeshStandardMaterial;
  debugMat: THREE.MeshBasicMaterial;
  hemiLight: THREE.HemisphereLight;
  dirLight: THREE.DirectionalLight;
  grid: THREE.GridHelper;
  pmrem: THREE.PMREMGenerator;
  envSource: THREE.Texture | null;
  envMap: THREE.Texture | null;
  activeEnvKey: string | null;
  envCache: Map<string, CachedEnvironment>;
  envRequestSeq: number;
  geometryCache: Map<string, THREE.BufferGeometry>;
  textures: Record<Channel, THREE.Texture>;
  fallbacks: Record<Channel, THREE.Texture>;
  wireframeMesh: THREE.LineSegments | null;
  pomMat: THREE.ShaderMaterial | null;
  raf: number;
}

interface CachedCanvasTexture {
  texture: THREE.CanvasTexture;
  refs: number;
}

interface CachedEnvironment {
  source: THREE.Texture;
  envMap: THREE.Texture;
}

const QUALITY_LEVELS: ReadonlyArray<ViewportQualityState['scale']> = [1, 0.75, 0.5];
const PERF_RING_SIZE = 300;
const IDLE_RENDER_INTERVAL_MS = 220;
const FORCE_RENDER_INTERVAL_MS = 1200;
const COMPASS_SIZE = 92;
const COMPASS_MARGIN = 10;
const BLENDER_AXIS = {
  x: 0xff5555,
  y: 0x55ff55,
  z: 0x4a8dff,
};
const CANVAS_TEXTURE_CACHE = new WeakMap<HTMLCanvasElement, CachedCanvasTexture>();
const TONE_MAPPING_VALUES: Record<ToneMappingMode, THREE.ToneMapping> = {
  aces: THREE.ACESFilmicToneMapping,
  linear: THREE.LinearToneMapping,
  reinhard: THREE.ReinhardToneMapping,
  cineon: THREE.CineonToneMapping,
};
const BUILTIN_HDR_PRESETS: Record<'hdr_studio' | 'hdr_city', { label: string; url: string }> = {
  hdr_studio: { label: 'HDR Studio', url: '/hdr/venice_sunset_1k.hdr' },
  hdr_city: { label: 'HDR City', url: '/hdr/pedestrian_overpass_1k.hdr' },
};

const TOOLBAR_BTN: React.CSSProperties = {
  border: '1px solid #3a4764',
  background: '#1b2944',
  color: '#c9d8f5',
  borderRadius: 4,
  height: 24,
  padding: '0 8px',
  fontSize: 11,
  fontWeight: 700,
  cursor: 'pointer',
};

const TOOLBAR_TOGGLE_ON: React.CSSProperties = {
  ...TOOLBAR_BTN,
  borderColor: '#5477c2',
  background: '#233a68',
  color: '#eef4ff',
};

function configureTexture(tex: THREE.Texture, srgb: boolean, tileX: number, tileY: number) {
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(tileX, tileY);
  tex.anisotropy = 8;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.needsUpdate = true;
}

function acquireCanvasTexture(canvas: HTMLCanvasElement, srgb: boolean, tileX: number, tileY: number): THREE.CanvasTexture {
  const cached = CANVAS_TEXTURE_CACHE.get(canvas);
  if (cached) {
    cached.refs += 1;
    configureTexture(cached.texture, srgb, tileX, tileY);
    cached.texture.needsUpdate = true;
    return cached.texture;
  }
  const texture = new THREE.CanvasTexture(canvas);
  configureTexture(texture, srgb, tileX, tileY);
  CANVAS_TEXTURE_CACHE.set(canvas, { texture, refs: 1 });
  return texture;
}

function releaseCanvasTexture(canvas: HTMLCanvasElement | null | undefined) {
  if (!canvas) return;
  const cached = CANVAS_TEXTURE_CACHE.get(canvas);
  if (!cached) return;
  cached.refs -= 1;
  if (cached.refs <= 0) {
    cached.texture.dispose();
    CANVAS_TEXTURE_CACHE.delete(canvas);
  }
}

function makeSolidTexture(hex: string, srgb: boolean): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = 4;
  cv.height = 4;
  const ctx = cv.getContext('2d');
  if (ctx) {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, 4, 4);
  }
  const tex = new THREE.CanvasTexture(cv);
  configureTexture(tex, srgb, 1, 1);
  return tex;
}

function disposeObject3DDeep(root: THREE.Object3D) {
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if ((mesh as any).geometry?.dispose) (mesh as any).geometry.dispose();
    const mat = (mesh as any).material;
    if (Array.isArray(mat)) {
      mat.forEach((m) => m?.dispose?.());
    } else if (mat?.dispose) {
      mat.dispose();
    }
  });
}

function buildEnvironmentSourceTexture(preset: ProceduralEnvPreset): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = 1024;
  cv.height = 512;
  const ctx = cv.getContext('2d');
  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, cv.height);
    if (preset === 'overcast') {
      grad.addColorStop(0, '#9ba7bb');
      grad.addColorStop(0.4, '#808ea4');
      grad.addColorStop(1, '#3f4859');
    } else if (preset === 'sunset') {
      grad.addColorStop(0, '#2f3c67');
      grad.addColorStop(0.45, '#945b87');
      grad.addColorStop(0.72, '#da8668');
      grad.addColorStop(1, '#2a2e40');
    } else if (preset === 'neutral') {
      grad.addColorStop(0, '#9ca0a7');
      grad.addColorStop(0.5, '#7f848c');
      grad.addColorStop(1, '#525760');
    } else {
      grad.addColorStop(0, '#6e7c98');
      grad.addColorStop(0.4, '#5f6d88');
      grad.addColorStop(1, '#303647');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, cv.width, cv.height);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  return tex;
}

function bindSceneEnvironment(state: SceneState, key: string, entry: CachedEnvironment) {
  state.activeEnvKey = key;
  state.envSource = entry.source;
  state.envMap = entry.envMap;
  state.scene.environment = entry.envMap;
  state.scene.background = entry.source;
}

function updateEnvironment(state: SceneState, preset: ProceduralEnvPreset) {
  state.envRequestSeq += 1;
  const cacheKey = `proc:${preset}`;
  const cached = state.envCache.get(cacheKey);
  if (cached) {
    bindSceneEnvironment(state, cacheKey, cached);
    return;
  }
  const source = buildEnvironmentSourceTexture(preset);
  const envMap = state.pmrem.fromEquirectangular(source).texture;
  const entry: CachedEnvironment = { source, envMap };
  state.envCache.set(cacheKey, entry);
  bindSceneEnvironment(state, cacheKey, entry);
}

function loadHDREnvironment(state: SceneState, cacheKey: string, url: string, onDone?: () => void) {
  const requestId = ++state.envRequestSeq;
  const cached = state.envCache.get(cacheKey);
  if (cached) {
    bindSceneEnvironment(state, cacheKey, cached);
    onDone?.();
    return;
  }
  const loader = new RGBELoader();
  loader.setDataType(THREE.HalfFloatType);
  loader.load(
    url,
    (hdr) => {
      if (requestId !== state.envRequestSeq) {
        hdr.dispose();
        onDone?.();
        return;
      }
      try {
        hdr.mapping = THREE.EquirectangularReflectionMapping;
        const envMap = state.pmrem.fromEquirectangular(hdr).texture;
        const entry: CachedEnvironment = { source: hdr, envMap };
        state.envCache.set(cacheKey, entry);
        bindSceneEnvironment(state, cacheKey, entry);
        appendAppLog({ level: 'info', source: 'preview3d', message: 'HDR environment loaded' });
      } catch (err) {
        appendAppLog({
          level: 'warn',
          source: 'preview3d',
          message: 'HDR environment processing failed, keeping previous environment',
          details: String(err),
        });
        hdr.dispose();
      } finally {
        onDone?.();
      }
    },
    undefined,
    (err) => {
      if (requestId !== state.envRequestSeq) {
        onDone?.();
        return;
      }
      appendAppLog({
        level: 'warn',
        source: 'preview3d',
        message: 'HDR environment load failed, keeping previous environment',
        details: String(err),
      });
      onDone?.();
    }
  );
}

function disposeEnvironmentCache(state: SceneState) {
  for (const entry of state.envCache.values()) {
    entry.source.dispose();
    entry.envMap.dispose();
  }
  state.envCache.clear();
  state.envSource = null;
  state.envMap = null;
  state.activeEnvKey = null;
}

function computeTangentsSafe(geometry: THREE.BufferGeometry) {
  if ((geometry.attributes as any).tangent) return;
  const withTangents = geometry as THREE.BufferGeometry & { computeTangents?: () => void };
  if (typeof withTangents.computeTangents !== 'function') return;
  try {
    withTangents.computeTangents();
  } catch {
    /* optional outside POM mode */
  }
}

function planeSegmentsForQuality(q: TessellationQuality): number {
  if (q === 'low') return 128;
  if (q === 'high') return 512;
  return 256;
}

function colorFromKelvin(kelvin: number): THREE.Color {
  const t = Math.max(1000, Math.min(40000, kelvin)) / 100;
  let r: number;
  let g: number;
  let b: number;
  if (t <= 66) {
    r = 255;
    g = 99.4708025861 * Math.log(t) - 161.1195681661;
  } else {
    r = 329.698727446 * Math.pow(t - 60, -0.1332047592);
    g = 288.1221695283 * Math.pow(t - 60, -0.0755148492);
  }
  if (t >= 66) b = 255;
  else if (t <= 19) b = 0;
  else b = 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  const clamp255 = (v: number) => Math.max(0, Math.min(255, v));
  return new THREE.Color(clamp255(r) / 255, clamp255(g) / 255, clamp255(b) / 255);
}

function createGeometry(preset: MeshPreset, planeSegments: number): THREE.BufferGeometry {
  if (preset === 'sphere') {
    const geo = new THREE.SphereGeometry(0.75, 160, 120);
    computeTangentsSafe(geo);
    return geo;
  }
  if (preset === 'cube') {
    const geo = new THREE.BoxGeometry(1.1, 1.1, 1.1, 30, 30, 30);
    computeTangentsSafe(geo);
    return geo;
  }
  if (preset === 'cylinder') {
    const geo = new THREE.CylinderGeometry(0.55, 0.55, 1.4, 64, 32);
    computeTangentsSafe(geo);
    return geo;
  }
  const seg = Math.max(8, Math.floor(planeSegments));
  const geo = new THREE.PlaneGeometry(2, 2, seg, seg);
  geo.rotateX(-Math.PI / 2);
  computeTangentsSafe(geo);
  return geo;
}

function geometryCacheKey(preset: MeshPreset, planeSegments: number): string {
  return preset === 'plane' ? `${preset}:${Math.max(8, Math.floor(planeSegments))}` : preset;
}

function getOrCreateGeometry(state: SceneState, preset: MeshPreset, planeSegments: number): THREE.BufferGeometry {
  const key = geometryCacheKey(preset, planeSegments);
  const cached = state.geometryCache.get(key);
  if (cached) return cached;
  const geo = createGeometry(preset, planeSegments);
  state.geometryCache.set(key, geo);
  return geo;
}

function positionCamera(state: SceneState, preset: MeshPreset) {
  const { camera, controls } = state;
  if (preset === 'plane') camera.position.set(1.65, 1.12, 1.65);
  else if (preset === 'cylinder') camera.position.set(1.45, 1.05, 1.45);
  else camera.position.set(1.5, 1.2, 1.5);
  controls.target.set(0, 0, 0);
  controls.update();
}

function disposeWireframeMesh(wireframeMesh: THREE.LineSegments | null) {
  if (!wireframeMesh) return;
  wireframeMesh.geometry.dispose();
  const mat = wireframeMesh.material;
  if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
  else mat.dispose();
}

function rebuildWireframeOverlay(state: SceneState) {
  if (state.wireframeMesh) {
    state.mesh.remove(state.wireframeMesh);
    disposeWireframeMesh(state.wireframeMesh);
    state.wireframeMesh = null;
  }
  const edgesGeo = new THREE.EdgesGeometry(state.mesh.geometry, 15);
  const edgesMat = new THREE.LineBasicMaterial({ color: '#ffffff', opacity: 0.18, transparent: true, depthWrite: false });
  const wire = new THREE.LineSegments(edgesGeo, edgesMat);
  wire.renderOrder = 999;
  state.wireframeMesh = wire;
  state.mesh.add(wire);
}

function buildPOMShaderMaterial(initial: {
  baseMap: THREE.Texture;
  heightMap: THREE.Texture;
  normalMap: THREE.Texture;
  roughnessMap: THREE.Texture;
  metallicMap: THREE.Texture;
}): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      u_baseMap: { value: initial.baseMap },
      u_heightMap: { value: initial.heightMap },
      u_normalMap: { value: initial.normalMap },
      u_roughnessMap: { value: initial.roughnessMap },
      u_metallicMap: { value: initial.metallicMap },
      u_tile: { value: new THREE.Vector2(3, 3) },
      u_lightDir: { value: new THREE.Vector3(0.4, 0.8, 0.2).normalize() },
      u_lightColor: { value: new THREE.Color('#ffffff') },
      u_lightIntensity: { value: 1.15 },
      u_hemiColor: { value: new THREE.Color('#becdff') },
      u_hemiIntensity: { value: 0.8 },
      u_envIntensity: { value: 0.8 },
      u_normalScale: { value: new THREE.Vector2(1, 1) },
      u_roughnessBias: { value: 1.0 },
      u_heightTexel: { value: new THREE.Vector2(1 / 1024, 1 / 1024) },
      u_heightToNormalStrength: { value: 0.2 },
      u_hasNormal: { value: 0.0 },
      u_hasHeight: { value: 0.0 },
      u_pomScale: { value: 0.08 },
      u_pomSteps: { value: 16 },
      u_debanding: { value: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vT;
      varying vec3 vB;
      varying vec3 vN;

      void main() {
        vUv = uv;
        vec3 n = normalize(normalMatrix * normal);
        vec3 t = normalize(normalMatrix * tangent.xyz);
        t = normalize(t - dot(t, n) * n);
        vec3 b = normalize(cross(n, t) * tangent.w);
        vT = t;
        vB = b;
        vN = n;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      precision highp float;

      uniform sampler2D u_baseMap;
      uniform sampler2D u_heightMap;
      uniform sampler2D u_normalMap;
      uniform sampler2D u_roughnessMap;
      uniform sampler2D u_metallicMap;
      uniform vec2 u_tile;
      uniform vec3 u_lightDir;
      uniform vec3 u_lightColor;
      uniform float u_lightIntensity;
      uniform vec3 u_hemiColor;
      uniform float u_hemiIntensity;
      uniform float u_envIntensity;
      uniform vec2 u_normalScale;
      uniform float u_roughnessBias;
      uniform vec2 u_heightTexel;
      uniform float u_heightToNormalStrength;
      uniform float u_hasNormal;
      uniform float u_hasHeight;
      uniform float u_pomScale;
      uniform int u_pomSteps;
      uniform float u_debanding;

      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vT;
      varying vec3 vB;
      varying vec3 vN;

      vec2 parallaxOcclusionMapping(vec2 uv, vec3 viewDirTangent) {
        float baseSteps = float(max(u_pomSteps, 4));
        float numLayers = mix(baseSteps, baseSteps * 0.5, abs(dot(vec3(0.0, 0.0, 1.0), viewDirTangent)));
        float layerDepth = 1.0 / numLayers;
        float curDepth = 0.0;
        float vz = max(viewDirTangent.z, 0.05);
        vec2 deltaUV = viewDirTangent.xy / vz * u_pomScale / numLayers;
        vec2 curUV = uv;
        float curSample = 1.0 - texture2D(u_heightMap, curUV).r;

        for (int i = 0; i < 64; i++) {
          if (float(i) >= numLayers || curDepth >= curSample) break;
          curUV -= deltaUV;
          curSample = 1.0 - texture2D(u_heightMap, curUV).r;
          curDepth += layerDepth;
        }

        vec2 prevUV = curUV + deltaUV;
        float afterDepth = curSample - curDepth;
        float beforeDepth = (1.0 - texture2D(u_heightMap, prevUV).r) - curDepth + layerDepth;
        float denom = afterDepth - beforeDepth;
        float w = abs(denom) < 0.0001 ? 0.0 : afterDepth / denom;
        return mix(curUV, prevUV, clamp(w, 0.0, 1.0));
      }

      vec3 buildNormalTangent(vec2 uv) {
        if (u_hasNormal > 0.5) {
          vec3 n = texture2D(u_normalMap, uv).xyz * 2.0 - 1.0;
          n.xy *= u_normalScale;
          return normalize(n);
        }
        if (u_hasHeight > 0.5) {
          float c = texture2D(u_heightMap, uv).r;
          float px = texture2D(u_heightMap, uv + vec2(u_heightTexel.x, 0.0)).r;
          float py = texture2D(u_heightMap, uv + vec2(0.0, u_heightTexel.y)).r;
          vec2 grad = vec2(c - px, c - py) * u_heightToNormalStrength * 10.0;
          return normalize(vec3(grad.x, grad.y, 1.0));
        }
        return vec3(0.0, 0.0, 1.0);
      }

      vec3 dither(vec3 color, vec2 fc) {
        float n = fract(sin(dot(fc, vec2(12.9898, 78.233))) * 43758.5453);
        return color + (n - 0.5) / 255.0;
      }

      void main() {
        mat3 tbn = mat3(normalize(vT), normalize(vB), normalize(vN));
        vec3 viewDirW = normalize(cameraPosition - vWorldPos);
        vec3 viewDirT = normalize(vec3(dot(viewDirW, normalize(vT)), dot(viewDirW, normalize(vB)), dot(viewDirW, normalize(vN))));

        vec2 uv = vUv * u_tile;
        if (u_hasHeight > 0.5) uv = parallaxOcclusionMapping(uv, viewDirT);
        if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 * u_tile.x || uv.y > 1.0 * u_tile.y) discard;

        vec3 albedoSrgb = texture2D(u_baseMap, uv).rgb;
        vec3 albedo = pow(albedoSrgb, vec3(2.2));
        float rough = clamp(texture2D(u_roughnessMap, uv).r * u_roughnessBias, 0.04, 1.0);
        float metal = clamp(texture2D(u_metallicMap, uv).r, 0.0, 1.0);
        vec3 normalW = normalize(tbn * buildNormalTangent(uv));
        vec3 L = normalize(u_lightDir);
        vec3 V = normalize(viewDirW);
        vec3 H = normalize(L + V);
        float ndotl = max(dot(normalW, L), 0.0);
        float hemi = mix(0.35, 1.0, clamp(normalW.y * 0.5 + 0.5, 0.0, 1.0));
        float specPow = mix(128.0, 8.0, rough);
        float spec = pow(max(dot(normalW, H), 0.0), specPow) * (1.0 - rough * 0.85);
        vec3 diffuseColor = albedo * (1.0 - metal);
        vec3 f0 = mix(vec3(0.04), albedo, metal);
        vec3 color = diffuseColor * (ndotl * u_lightIntensity * u_lightColor + hemi * u_hemiIntensity * 0.6 * u_hemiColor + u_envIntensity * 0.12);
        color += f0 * (spec * (0.35 + u_envIntensity * 0.4));
        if (u_debanding > 0.5) color = dither(color, gl_FragCoord.xy);
        gl_FragColor = vec4(max(color, vec3(0.0)), 1.0);
      }
    `,
  });
}

function applyViewMode(state: SceneState, mode: ViewMode, pomEnabled: boolean) {
  if (mode === 'lit') {
    state.mesh.material = pomEnabled && state.pomMat ? state.pomMat : state.pbrMat;
    return;
  }
  const map =
    mode === 'normal' ? state.textures.normal :
    mode === 'roughness' ? state.textures.roughness :
    mode === 'metallic' ? state.textures.metallic :
    mode === 'height' ? state.textures.height :
    state.textures.baseColor;
  state.debugMat.map = map;
  state.debugMat.needsUpdate = true;
  state.mesh.material = state.debugMat;
}

export function Viewport3D({
  baseColorCanvas = null,
  heightCanvas = null,
  normalCanvas = null,
  roughnessCanvas = null,
  metallicCanvas = null,
  baseColorVersion = 0,
  heightVersion = 0,
  normalVersion = 0,
  roughnessVersion = 0,
  metallicVersion = 0,
  frameBudgetMs = 22,
  performanceMode = 'performance_first',
}: Viewport3DProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneState | null>(null);
  const channelCanvasRef = useRef<Partial<Record<Channel, HTMLCanvasElement>>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const keyERotateRef = useRef(false);
  const sceneDirtyRef = useRef(true);
  const lastRenderAtRef = useRef(0);

  const [meshPreset, setMeshPreset] = useState<MeshPreset>('plane');
  const [viewMode, setViewMode] = useState<ViewMode>('lit');
  const [envPreset, setEnvPreset] = useState<EnvPreset>('studio');
  const [toneMapping, setToneMapping] = useState<ToneMappingMode>('aces');
  const [toneExposure, setToneExposure] = useState(1);
  const [debanding, setDebanding] = useState(true);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [tileX, setTileX] = useState(3);
  const [tileY, setTileY] = useState(3);
  const [displacement, setDisplacement] = useState(0.15);
  const [tessellationQuality, setTessellationQuality] = useState<TessellationQuality>('med');
  const [normalScale, setNormalScale] = useState(1.0);
  const [normalFlipY, setNormalFlipY] = useState(false);
  const [heightNormalStrength, setHeightNormalStrength] = useState(0.2);
  const [roughnessBias, setRoughnessBias] = useState(1);
  const [lightRotation, setLightRotation] = useState(30);
  const [lightIntensity, setLightIntensity] = useState(1.15);
  const [lightColor, setLightColor] = useState('#ffffff');
  const [lightTemperature, setLightTemperature] = useState(6500);
  const [ambientTint, setAmbientTint] = useState('#becdff');
  const [envIntensity, setEnvIntensity] = useState(0.8);
  const [envRotation, setEnvRotation] = useState(0);
  const [backgroundBlur, setBackgroundBlur] = useState(0.15);
  const [showGrid, setShowGrid] = useState(true);
  const [showWire, setShowWire] = useState(false);
  const [pomEnabled, setPomEnabled] = useState(false);
  const [pomScale, setPomScale] = useState(0.08);
  const [pomSteps, setPomSteps] = useState<8 | 16 | 32>(16);
  const [qualityScale, setQualityScale] = useState<ViewportQualityState['scale']>(1);
  const [supportsBackgroundBlur, setSupportsBackgroundBlur] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const markSceneDirty = useCallback(() => {
    sceneDirtyRef.current = true;
  }, []);

  const connected = useMemo(() => ({
    baseColor: !!baseColorCanvas,
    roughness: !!roughnessCanvas,
    normal: !!normalCanvas,
    metallic: !!metallicCanvas,
    height: !!heightCanvas,
  }), [baseColorCanvas, roughnessCanvas, normalCanvas, metallicCanvas, heightCanvas]);

  const forceHighPlaneTessellation = useMemo(
    () => meshPreset === 'plane' && connected.height && (pomEnabled || displacement > 0),
    [meshPreset, connected.height, pomEnabled, displacement]
  );
  const effectiveTessellationQuality: TessellationQuality = forceHighPlaneTessellation ? 'high' : tessellationQuality;
  const planeSegments = useMemo(() => planeSegmentsForQuality(effectiveTessellationQuality), [effectiveTessellationQuality]);

  const signature = useMemo(
    () => [
      `bc:${baseColorCanvas ? 1 : 0}:${baseColorVersion}`,
      `h:${heightCanvas ? 1 : 0}:${heightVersion}`,
      `n:${normalCanvas ? 1 : 0}:${normalVersion}`,
      `r:${roughnessCanvas ? 1 : 0}:${roughnessVersion}`,
      `m:${metallicCanvas ? 1 : 0}:${metallicVersion}`,
    ].join('|'),
    [
      baseColorCanvas, baseColorVersion,
      heightCanvas, heightVersion,
      normalCanvas, normalVersion,
      roughnessCanvas, roughnessVersion,
      metallicCanvas, metallicVersion
    ]
  );

  const tileXRef = useRef(tileX);
  const tileYRef = useRef(tileY);
  const frameBudgetRef = useRef(frameBudgetMs);
  const perfModeRef = useRef<PerformanceMode>(performanceMode);
  const autoRotateRef = useRef(autoRotateSpeed);
  const viewModeRef = useRef(viewMode);
  const pomEnabledRef = useRef(pomEnabled);
  const pomScaleRef = useRef(pomScale);
  const pomStepsRef = useRef(pomSteps);
  const qualityRef = useRef<ViewportQualityState>({ scale: 1, reason: 'initial', last_change_at: Date.now() });

  useEffect(() => { tileXRef.current = tileX; }, [tileX]);
  useEffect(() => { tileYRef.current = tileY; }, [tileY]);
  useEffect(() => { frameBudgetRef.current = frameBudgetMs; }, [frameBudgetMs]);
  useEffect(() => { perfModeRef.current = performanceMode; }, [performanceMode]);
  useEffect(() => { autoRotateRef.current = autoRotateSpeed; }, [autoRotateSpeed]);
  useEffect(() => { viewModeRef.current = viewMode; }, [viewMode]);
  useEffect(() => { pomEnabledRef.current = pomEnabled; }, [pomEnabled]);
  useEffect(() => { pomScaleRef.current = pomScale; }, [pomScale]);
  useEffect(() => { pomStepsRef.current = pomSteps; }, [pomSteps]);
  useEffect(() => { qualityRef.current.scale = qualityScale; }, [qualityScale]);

  useEffect(() => {
    markSceneDirty();
  }, [
    markSceneDirty,
    signature,
    meshPreset,
    planeSegments,
    viewMode,
    envPreset,
    toneMapping,
    toneExposure,
    debanding,
    tileX,
    tileY,
    displacement,
    normalScale,
    normalFlipY,
    heightNormalStrength,
    roughnessBias,
    lightRotation,
    lightIntensity,
    lightColor,
    lightTemperature,
    ambientTint,
    envIntensity,
    envRotation,
    backgroundBlur,
    showGrid,
    showWire,
    pomEnabled,
    pomScale,
    pomSteps,
    autoRotateSpeed,
    qualityScale,
  ]);

  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key.toLowerCase() === 'e') keyERotateRef.current = true;
    };
    const onKeyUp = (ev: KeyboardEvent) => {
      if (ev.key.toLowerCase() === 'e') keyERotateRef.current = false;
    };
    const onBlur = () => {
      keyERotateRef.current = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', onBlur);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', onBlur);
    };
  }, []);

  const onResetCamera = useCallback(() => {
    const state = sceneRef.current;
    if (!state) return;
    positionCamera(state, meshPreset);
    markSceneDirty();
  }, [meshPreset, markSceneDirty]);

  const onScreenshot = useCallback(() => {
    const state = sceneRef.current;
    if (!state) return;
    try {
      state.renderer.render(state.scene, state.camera);
      const url = state.renderer.domElement.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `atomicgraph_preview_${Date.now()}.png`;
      a.click();
      appendAppLog({ level: 'info', source: 'preview3d', message: '3D screenshot exported' });
    } catch (err) {
      const details = `screenshot export failed: ${String(err)}`;
      appendAppLog({ level: 'warn', source: 'preview3d', message: '3D screenshot export failed', details });
      setLoadError(details);
    }
  }, []);

  const onHDRFileLoad = useCallback((file: File) => {
    const state = sceneRef.current;
    if (!state) return;
    const url = URL.createObjectURL(file);
    const cacheKey = `custom:${file.name}:${file.size}:${file.lastModified}`;
    loadHDREnvironment(state, cacheKey, url, () => {
      URL.revokeObjectURL(url);
      markSceneDirty();
    });
    setEnvPreset('custom');
  }, [markSceneDirty]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    sceneDirtyRef.current = true;
    lastRenderAtRef.current = 0;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#121927');

    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 120);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = TONE_MAPPING_VALUES[toneMapping];
    renderer.toneMappingExposure = toneExposure;

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr * qualityRef.current.scale);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      sceneDirtyRef.current = true;
    };
    resize();
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.075;
    controls.minDistance = 0.5;
    controls.maxDistance = 6;
    controls.maxPolarAngle = Math.PI * 0.49;

    // Inset compass: Blender-style axis colors (X red, Y green, Z blue).
    const compassScene = new THREE.Scene();
    const compassCamera = new THREE.PerspectiveCamera(40, 1, 0.01, 10);
    compassCamera.position.set(0, 0, 2.4);
    compassCamera.lookAt(0, 0, 0);
    const compassRoot = new THREE.Group();
    const origin = new THREE.Vector3(0, 0, 0);
    compassRoot.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, 0.78, BLENDER_AXIS.x, 0.22, 0.1));
    compassRoot.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, 0.78, BLENDER_AXIS.y, 0.22, 0.1));
    compassRoot.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, 0.78, BLENDER_AXIS.z, 0.22, 0.1));
    compassScene.add(compassRoot);
    const compassBg = new THREE.Mesh(
      new THREE.CircleGeometry(1.08, 48),
      new THREE.MeshBasicMaterial({ color: '#10192a', transparent: true, opacity: 0.72, depthWrite: false, depthTest: false })
    );
    compassBg.position.z = -0.15;
    compassScene.add(compassBg);
    const rendererSize = new THREE.Vector2();

    const baseFallback = makeSolidTexture('#7f8898', true);
    const heightFallback = makeSolidTexture('#7f7f7f', false);
    const normalFallback = makeSolidTexture('#8080ff', false);
    const roughFallback = makeSolidTexture('#bebebe', false);
    const metallicFallback = makeSolidTexture('#000000', false);
    configureTexture(baseFallback, true, tileXRef.current, tileYRef.current);
    configureTexture(heightFallback, false, tileXRef.current, tileYRef.current);
    configureTexture(normalFallback, false, tileXRef.current, tileYRef.current);
    configureTexture(roughFallback, false, tileXRef.current, tileYRef.current);
    configureTexture(metallicFallback, false, tileXRef.current, tileYRef.current);

    const pbrMat = new THREE.MeshStandardMaterial({
      color: '#8f97a6',
      roughness: 0.85,
      map: baseFallback,
      displacementMap: heightFallback,
      displacementScale: displacement,
      normalMap: normalFallback,
      normalScale: new THREE.Vector2(normalScale, normalScale),
      roughnessMap: roughFallback,
      metalnessMap: metallicFallback,
      metalness: 1,
    });
    pbrMat.dithering = debanding;

    const debugMat = new THREE.MeshBasicMaterial({ map: baseFallback, color: '#ffffff' });
    debugMat.dithering = debanding;

    const geometryCache = new Map<string, THREE.BufferGeometry>();
    const initialGeo = createGeometry(meshPreset, planeSegments);
    geometryCache.set(geometryCacheKey(meshPreset, planeSegments), initialGeo);
    const mesh = new THREE.Mesh(initialGeo, pbrMat);
    scene.add(mesh);

    const hemiLight = new THREE.HemisphereLight('#becdff', '#252933', envIntensity);
    const dirLight = new THREE.DirectionalLight('#ffffff', lightIntensity);
    scene.add(hemiLight, dirLight);

    const grid = new THREE.GridHelper(3.5, 14, '#3f577f', '#2b3650');
    grid.visible = showGrid;
    grid.position.y = -0.001;
    scene.add(grid);

    const pomMat = buildPOMShaderMaterial({
      baseMap: baseFallback,
      heightMap: heightFallback,
      normalMap: normalFallback,
      roughnessMap: roughFallback,
      metallicMap: metallicFallback,
    });

    const state: SceneState = {
      renderer,
      scene,
      camera,
      controls,
      mesh,
      pbrMat,
      debugMat,
      hemiLight,
      dirLight,
      grid,
      pmrem: new THREE.PMREMGenerator(renderer),
      envSource: null,
      envMap: null,
      activeEnvKey: null,
      envCache: new Map<string, CachedEnvironment>(),
      envRequestSeq: 0,
      geometryCache,
      textures: {
        baseColor: baseFallback,
        height: heightFallback,
        normal: normalFallback,
        roughness: roughFallback,
        metallic: metallicFallback,
      },
      fallbacks: {
        baseColor: baseFallback,
        height: heightFallback,
        normal: normalFallback,
        roughness: roughFallback,
        metallic: metallicFallback,
      },
      wireframeMesh: null,
      pomMat,
      raf: 0,
    };

    setSupportsBackgroundBlur('backgroundBlurriness' in state.scene);
    sceneRef.current = state;
    updateEnvironment(state, 'studio');
    positionCamera(state, meshPreset);
    applyViewMode(state, viewModeRef.current, pomEnabledRef.current);

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const drag = { active: false, lastX: 0 };
    const onPointerDown = (ev: PointerEvent) => {
      if (!keyERotateRef.current) return;
      drag.active = true;
      drag.lastX = ev.clientX;
      controls.enabled = false;
      renderer.domElement.style.cursor = 'ew-resize';
      sceneDirtyRef.current = true;
      ev.preventDefault();
    };
    const onPointerMove = (ev: PointerEvent) => {
      if (!drag.active) return;
      const dx = ev.clientX - drag.lastX;
      drag.lastX = ev.clientX;
      sceneDirtyRef.current = true;
      setEnvRotation((prev) => {
        let next = prev + dx * 0.35;
        while (next < 0) next += 360;
        while (next >= 360) next -= 360;
        return next;
      });
    };
    const onPointerUp = () => {
      if (!drag.active) return;
      drag.active = false;
      controls.enabled = true;
      renderer.domElement.style.cursor = '';
      sceneDirtyRef.current = true;
    };
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    let prev = performance.now();
    let frameId = 0;
    let overBudgetFrames = 0;
    let underBudgetSince = 0;
    let qualityLevelIdx = 0;
    let interacting = false;
    const frameTimes = new Float32Array(PERF_RING_SIZE);
    let frameHead = 0;
    let frameCount = 0;
    const lastAdjustRef = { at: performance.now() };

    const onControlStart = () => {
      interacting = true;
      sceneDirtyRef.current = true;
    };
    const onControlEnd = () => {
      interacting = false;
      sceneDirtyRef.current = true;
    };
    const onControlChange = () => {
      sceneDirtyRef.current = true;
    };
    controls.addEventListener('start', onControlStart);
    controls.addEventListener('end', onControlEnd);
    controls.addEventListener('change', onControlChange);

    const render = () => {
      state.raf = requestAnimationFrame(render);
      const now = performance.now();
      const deltaSec = Math.max(0, (now - prev) / 1000);
      prev = now;

      const hasAutoRotate = autoRotateRef.current > 0;
      if (hasAutoRotate) {
        state.mesh.rotation.y += autoRotateRef.current * deltaSec;
        sceneDirtyRef.current = true;
      }
      if (state.pomMat) {
        const effectiveSteps = Math.max(4, Math.floor(pomStepsRef.current * qualityRef.current.scale));
        state.pomMat.uniforms.u_pomScale.value = pomScaleRef.current;
        state.pomMat.uniforms.u_pomSteps.value = effectiveSteps;
      }
      const controlsChanged = state.controls.update();
      if (controlsChanged) sceneDirtyRef.current = true;

      const msSinceLastRender = now - (lastRenderAtRef.current || 0);
      const shouldRender =
        sceneDirtyRef.current ||
        interacting ||
        hasAutoRotate ||
        msSinceLastRender >= FORCE_RENDER_INTERVAL_MS;

      if (!shouldRender) {
        return;
      }
      if (!sceneDirtyRef.current && !interacting && !hasAutoRotate && msSinceLastRender < IDLE_RENDER_INTERVAL_MS) {
        return;
      }

      const frameStart = performance.now();
      state.renderer.render(state.scene, state.camera);

      compassRoot.quaternion.copy(state.camera.quaternion).invert();
      state.renderer.getSize(rendererSize);
      const size = Math.max(70, Math.min(COMPASS_SIZE, Math.floor(Math.min(rendererSize.x, rendererSize.y) * 0.2)));
      const vx = rendererSize.x - size - COMPASS_MARGIN;
      const vy = rendererSize.y - size - COMPASS_MARGIN;
      const prevAutoClear = state.renderer.autoClear;
      state.renderer.autoClear = false;
      state.renderer.clearDepth();
      state.renderer.setScissorTest(true);
      state.renderer.setViewport(vx, vy, size, size);
      state.renderer.setScissor(vx, vy, size, size);
      state.renderer.render(compassScene, compassCamera);
      state.renderer.setScissorTest(false);
      state.renderer.setViewport(0, 0, rendererSize.x, rendererSize.y);
      state.renderer.autoClear = prevAutoClear;
      sceneDirtyRef.current = false;
      lastRenderAtRef.current = now;

      const frameMs = performance.now() - frameStart;

      frameTimes[frameHead] = frameMs;
      frameHead = (frameHead + 1) % PERF_RING_SIZE;
      frameCount = Math.min(PERF_RING_SIZE, frameCount + 1);

      const windowValues = Array.from(frameTimes.slice(0, frameCount));
      const p95 = percentile(windowValues, 0.95);
      const requestedBudget = Math.max(8, frameBudgetRef.current || 22);
      const modeBudget = interacting ? Math.min(requestedBudget, 16.6) : Math.min(requestedBudget, 22);
      const budget = perfModeRef.current === 'quality_first' ? modeBudget + 2 : modeBudget;

      if (frameMs > budget) overBudgetFrames += 1;
      else overBudgetFrames = 0;
      if (overBudgetFrames >= 30) {
        appendAppLog({
          level: 'warn',
          source: 'preview3d',
          message: '3D frame budget exceeded for 30+ consecutive frames',
          details: `budget=${budget.toFixed(2)}ms frame=${frameMs.toFixed(2)}ms p95=${p95.toFixed(2)}ms`,
        });
        overBudgetFrames = 0;
      }

      const qualityNow = performance.now();
      if (qualityNow - lastAdjustRef.at > 500) {
        if (p95 > budget * 1.08 && qualityLevelIdx < QUALITY_LEVELS.length - 1) {
          qualityLevelIdx += 1;
          const nextScale = QUALITY_LEVELS[qualityLevelIdx];
          qualityRef.current = { scale: nextScale, reason: 'adaptive_down', last_change_at: Date.now() };
          setQualityScale(nextScale);
          lastAdjustRef.at = qualityNow;
          resize();
          underBudgetSince = 0;
        } else if (p95 < budget * 0.82 && qualityLevelIdx > 0) {
          if (underBudgetSince === 0) underBudgetSince = qualityNow;
          if (qualityNow - underBudgetSince >= 3000) {
            qualityLevelIdx -= 1;
            const nextScale = QUALITY_LEVELS[qualityLevelIdx];
            qualityRef.current = { scale: nextScale, reason: 'adaptive_up', last_change_at: Date.now() };
            setQualityScale(nextScale);
            lastAdjustRef.at = qualityNow;
            resize();
            underBudgetSince = 0;
          }
        } else {
          underBudgetSince = 0;
        }
      }
      frameId += 1;
      if (frameId % 240 === 0) {
        appendAppLog({
          level: 'info',
          source: 'preview3d',
          message: '3D adaptive quality sample',
          details: `p95=${p95.toFixed(2)}ms quality=${qualityRef.current.scale.toFixed(2)} budget=${budget.toFixed(2)}ms`,
        });
      }
    };
    render();

    return () => {
      cancelAnimationFrame(state.raf);
      state.envRequestSeq += 1;
      observer.disconnect();
      controls.removeEventListener('start', onControlStart);
      controls.removeEventListener('end', onControlEnd);
      controls.removeEventListener('change', onControlChange);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      state.controls.dispose();
      state.pbrMat.dispose();
      state.debugMat.dispose();
      if (state.pomMat) state.pomMat.dispose();
      for (const geo of state.geometryCache.values()) geo.dispose();
      state.geometryCache.clear();
      state.grid.geometry.dispose();
      if (Array.isArray(state.grid.material)) state.grid.material.forEach((m) => m.dispose());
      else state.grid.material.dispose();
      if (state.wireframeMesh) {
        state.mesh.remove(state.wireframeMesh);
        disposeWireframeMesh(state.wireframeMesh);
        state.wireframeMesh = null;
      }
      disposeObject3DDeep(compassRoot);
      disposeObject3DDeep(compassBg);
      for (const key of ['baseColor', 'height', 'normal', 'roughness', 'metallic'] as const) {
        releaseCanvasTexture(channelCanvasRef.current[key]);
      }
      baseFallback.dispose();
      heightFallback.dispose();
      normalFallback.dispose();
      roughFallback.dispose();
      metallicFallback.dispose();
      disposeEnvironmentCache(state);
      state.pmrem.dispose();
      state.renderer.dispose();
      channelCanvasRef.current = {};
      if (state.renderer.domElement.parentElement === host) host.removeChild(state.renderer.domElement);
      sceneRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    state.mesh.geometry = getOrCreateGeometry(state, meshPreset, planeSegments);
    if (showWire) rebuildWireframeOverlay(state);
    positionCamera(state, meshPreset);
  }, [meshPreset, planeSegments, showWire]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    state.renderer.toneMapping = TONE_MAPPING_VALUES[toneMapping];
    state.renderer.toneMappingExposure = toneExposure;
  }, [toneMapping, toneExposure]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    state.pbrMat.dithering = debanding;
    state.debugMat.dithering = debanding;
    if (state.pomMat) state.pomMat.uniforms.u_debanding.value = debanding ? 1 : 0;
  }, [debanding]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    state.pbrMat.displacementScale = displacement;
    state.pbrMat.normalScale.set(normalScale, normalFlipY ? -normalScale : normalScale);
    state.pbrMat.roughness = Math.max(0.03, Math.min(1, 0.85 * roughnessBias));
    state.pbrMat.metalnessMap = state.textures.metallic;
    state.pbrMat.metalness = 1;
    if (connected.normal) {
      state.pbrMat.normalMap = state.textures.normal;
      state.pbrMat.bumpMap = null;
      state.pbrMat.bumpScale = 0;
    } else {
      state.pbrMat.normalMap = null;
      state.pbrMat.bumpMap = connected.height ? state.textures.height : null;
      state.pbrMat.bumpScale = connected.height ? heightNormalStrength : 0;
    }
    if (state.pomMat) {
      state.pomMat.uniforms.u_normalScale.value.set(normalScale, normalFlipY ? -normalScale : normalScale);
      state.pomMat.uniforms.u_roughnessBias.value = roughnessBias;
      state.pomMat.uniforms.u_heightToNormalStrength.value = heightNormalStrength;
      state.pomMat.uniforms.u_hasNormal.value = connected.normal ? 1 : 0;
      state.pomMat.uniforms.u_hasHeight.value = connected.height ? 1 : 0;
    }
    state.pbrMat.needsUpdate = true;
    applyViewMode(state, viewModeRef.current, pomEnabledRef.current);
  }, [displacement, normalScale, normalFlipY, roughnessBias, connected.normal, connected.height, heightNormalStrength, connected.metallic]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    const ang = THREE.MathUtils.degToRad(lightRotation);
    const sunColor = new THREE.Color(lightColor).multiply(colorFromKelvin(lightTemperature));
    const hemiColor = new THREE.Color(ambientTint);
    state.dirLight.intensity = lightIntensity;
    state.dirLight.color.copy(sunColor);
    state.hemiLight.intensity = envIntensity;
    state.hemiLight.color.copy(hemiColor);
    state.pbrMat.envMapIntensity = envIntensity;
    state.dirLight.position.set(Math.cos(ang) * 2.6, 2.25, Math.sin(ang) * 2.6);
    if (state.pomMat) {
      const lightDir = state.dirLight.position.clone().normalize();
      state.pomMat.uniforms.u_lightDir.value.copy(lightDir);
      state.pomMat.uniforms.u_lightIntensity.value = lightIntensity;
      state.pomMat.uniforms.u_lightColor.value.copy(sunColor);
      state.pomMat.uniforms.u_hemiColor.value.copy(hemiColor);
      state.pomMat.uniforms.u_hemiIntensity.value = envIntensity;
      state.pomMat.uniforms.u_envIntensity.value = envIntensity;
    }
  }, [lightRotation, lightIntensity, lightColor, lightTemperature, ambientTint, envIntensity]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    state.grid.visible = showGrid;
  }, [showGrid]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    if (envPreset === 'custom') return;
    if (envPreset === 'hdr_studio' || envPreset === 'hdr_city') {
      const preset = BUILTIN_HDR_PRESETS[envPreset];
      loadHDREnvironment(state, `hdr:${envPreset}`, preset.url, () => {
        setLoadError(null);
        markSceneDirty();
      });
      return;
    }
    updateEnvironment(state, envPreset);
    setLoadError(null);
    markSceneDirty();
  }, [envPreset, markSceneDirty]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    const rad = THREE.MathUtils.degToRad(envRotation);
    const sceneAny = state.scene as any;
    if (sceneAny.environmentRotation) sceneAny.environmentRotation.y = rad;
    if (sceneAny.backgroundRotation) sceneAny.backgroundRotation.y = rad;
  }, [envRotation]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    const sceneAny = state.scene as any;
    if (sceneAny.backgroundBlurriness !== undefined) sceneAny.backgroundBlurriness = backgroundBlur;
  }, [backgroundBlur]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    for (const tex of [state.textures.baseColor, state.textures.height, state.textures.normal, state.textures.roughness, state.textures.metallic]) {
      const srgb = tex === state.textures.baseColor;
      configureTexture(tex, srgb, tileX, tileY);
    }
    if (state.pomMat) state.pomMat.uniforms.u_tile.value.set(tileX, tileY);
  }, [tileX, tileY]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    if (showWire) rebuildWireframeOverlay(state);
    else if (state.wireframeMesh) {
      state.mesh.remove(state.wireframeMesh);
      disposeWireframeMesh(state.wireframeMesh);
      state.wireframeMesh = null;
    }
  }, [showWire]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;
    applyViewMode(state, viewMode, pomEnabled);
  }, [viewMode, pomEnabled]);

  useEffect(() => {
    const state = sceneRef.current;
    if (!state) return;

    const setTexture = (channel: Channel, tex: THREE.Texture) => {
      state.textures[channel] = tex;
      if (channel === 'baseColor') state.pbrMat.map = tex;
      if (channel === 'height') {
        state.pbrMat.displacementMap = tex;
        if (!connected.normal) state.pbrMat.bumpMap = tex;
      }
      if (channel === 'normal') state.pbrMat.normalMap = connected.normal ? tex : null;
      if (channel === 'roughness') state.pbrMat.roughnessMap = tex;
      if (channel === 'metallic') state.pbrMat.metalnessMap = tex;
      state.pbrMat.needsUpdate = true;

      if (state.pomMat) {
        if (channel === 'baseColor') state.pomMat.uniforms.u_baseMap.value = tex;
        if (channel === 'height') state.pomMat.uniforms.u_heightMap.value = tex;
        if (channel === 'normal') state.pomMat.uniforms.u_normalMap.value = tex;
        if (channel === 'roughness') state.pomMat.uniforms.u_roughnessMap.value = tex;
        if (channel === 'metallic') state.pomMat.uniforms.u_metallicMap.value = tex;
      }
      applyViewMode(state, viewModeRef.current, pomEnabledRef.current);
    };

    const applyCanvasTexture = (channel: Channel, canvas: HTMLCanvasElement | null, srgb: boolean, version: number) => {
      if (!canvas) {
        const prevCanvas = channelCanvasRef.current[channel];
        if (prevCanvas) releaseCanvasTexture(prevCanvas);
        channelCanvasRef.current[channel] = undefined;
        setTexture(channel, state.fallbacks[channel]);
        return;
      }
      try {
        const prevCanvas = channelCanvasRef.current[channel];
        if (prevCanvas && prevCanvas !== canvas) releaseCanvasTexture(prevCanvas);
        channelCanvasRef.current[channel] = canvas;
        const tex = acquireCanvasTexture(canvas, srgb, tileXRef.current, tileYRef.current);
        tex.userData.version = version;
        tex.needsUpdate = true;
        setTexture(channel, tex);

        if (channel === 'height' && state.pomMat) {
          const w = Math.max(1, canvas.width || 1);
          const h = Math.max(1, canvas.height || 1);
          state.pomMat.uniforms.u_heightTexel.value.set(1 / w, 1 / h);
          state.pomMat.uniforms.u_hasHeight.value = 1;
        }
        if (channel === 'normal' && state.pomMat) state.pomMat.uniforms.u_hasNormal.value = 1;
        setLoadError(null);
      } catch (err) {
        const details = `${channel} canvas update failed: ${String(err)}`;
        appendAppLog({ level: 'warn', source: 'preview3d', message: '3D texture update failed, fallback applied', details });
        setLoadError(details);
      }
    };

    applyCanvasTexture('baseColor', baseColorCanvas, true, baseColorVersion);
    applyCanvasTexture('height', heightCanvas, false, heightVersion);
    applyCanvasTexture('normal', normalCanvas, false, normalVersion);
    applyCanvasTexture('roughness', roughnessCanvas, false, roughnessVersion);
    applyCanvasTexture('metallic', metallicCanvas, false, metallicVersion);
    if (state.pomMat) {
      state.pomMat.uniforms.u_hasNormal.value = connected.normal ? 1 : 0;
      state.pomMat.uniforms.u_hasHeight.value = connected.height ? 1 : 0;
      state.pomMat.uniforms.u_tile.value.set(tileXRef.current, tileYRef.current);
    }
  }, [
    signature,
    connected.normal,
    connected.height,
    connected.metallic,
    baseColorCanvas, baseColorVersion,
    heightCanvas, heightVersion,
    normalCanvas, normalVersion,
    roughnessCanvas, roughnessVersion,
    metallicCanvas, metallicVersion,
  ]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#151c2b' }}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".hdr"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onHDRFileLoad(file);
          e.currentTarget.value = '';
        }}
      />

      <div style={{ borderBottom: '1px solid #30384a', padding: '6px 8px', display: 'flex', gap: 6, alignItems: 'center', background: '#1b2435', flexShrink: 0 }}>
        <span style={{ color: '#dce6ff', fontWeight: 700, fontSize: 11, marginRight: 2 }}>3D Preview</span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#9fb0d8', fontSize: 10 }}>
          Mesh
          <select value={meshPreset} onChange={(e) => setMeshPreset(e.target.value as MeshPreset)} className="nt-select">
            <option value="plane">Plane</option>
            <option value="sphere">Sphere</option>
            <option value="cube">Cube</option>
            <option value="cylinder">Cylinder</option>
          </select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#9fb0d8', fontSize: 10 }}>
          Mode
          <select value={viewMode} onChange={(e) => setViewMode(e.target.value as ViewMode)} className="nt-select">
            <option value="lit">Lit</option>
            <option value="baseColor">BaseColor</option>
            <option value="normal">Normal</option>
            <option value="roughness">Roughness</option>
            <option value="metallic">Metallic</option>
            <option value="height">Height</option>
          </select>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#9fb0d8', fontSize: 10 }}>
          Env
          <select value={envPreset} onChange={(e) => setEnvPreset(e.target.value as EnvPreset)} className="nt-select">
            <option value="studio">Studio</option>
            <option value="overcast">Overcast</option>
            <option value="sunset">Sunset</option>
            <option value="neutral">Neutral</option>
            <option value="hdr_studio">HDR Studio</option>
            <option value="hdr_city">HDR City</option>
            <option value="custom">Custom</option>
          </select>
        </label>

        <button style={showWire ? TOOLBAR_TOGGLE_ON : TOOLBAR_BTN} onClick={() => setShowWire((v) => !v)}>Wire</button>
        <button style={pomEnabled ? TOOLBAR_TOGGLE_ON : TOOLBAR_BTN} onClick={() => setPomEnabled((v) => !v)}>POM</button>
        <button style={TOOLBAR_BTN} onClick={onScreenshot}>Shot</button>
        <button style={TOOLBAR_BTN} onClick={() => fileInputRef.current?.click()}>Load HDR...</button>
        <button style={TOOLBAR_BTN} onClick={onResetCamera}>Reset Cam</button>
        <button style={settingsOpen ? TOOLBAR_TOGGLE_ON : TOOLBAR_BTN} onClick={() => setSettingsOpen((v) => !v)}>Settings</button>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#7b8ab1' }}>Q x{qualityScale.toFixed(2)}</span>
      </div>

      <div style={{ borderBottom: '1px solid #2d3547', padding: '4px 8px', display: 'flex', gap: 8, background: '#182032', flexShrink: 0 }}>
        {([
          ['D', 'Diffuse', connected.baseColor],
          ['N', 'Normal', connected.normal],
          ['R', 'Roughness', connected.roughness],
          ['M', 'Metallic', connected.metallic],
          ['H', 'Height', connected.height],
        ] as const).map(([short, label, ok]) => (
          <span
            key={short}
            title={`${label}: ${ok ? 'connected' : 'fallback'}`}
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 0.4,
              color: ok ? '#a8ebc6' : '#f2c290',
              border: `1px solid ${ok ? '#2f5f49' : '#5f4b2f'}`,
              background: ok ? '#1a2a24' : '#2a2319',
              borderRadius: 999,
              padding: '1px 8px',
              minWidth: 18,
              textAlign: 'center',
            }}
          >
            {short}
          </span>
        ))}
        {!connected.normal && connected.height && <span style={{ fontSize: 9, color: '#d9c6ff', border: '1px solid #52406e', background: '#231d31', borderRadius: 999, padding: '1px 7px' }}>normal from height fallback</span>}
        <span style={{ marginLeft: 'auto', fontSize: 9, color: '#7182a8' }}>E + drag: rotate env</span>
      </div>

      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <div ref={hostRef} style={{ width: '100%', height: '100%' }} />
        {settingsOpen && (
          <div style={{ position: 'absolute', top: 8, right: 8, width: 300, maxHeight: 'calc(100% - 16px)', overflow: 'auto', border: '1px solid #374665', background: '#15233df2', borderRadius: 8, boxShadow: '0 10px 24px #00000075', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ color: '#dce6ff', fontWeight: 700, fontSize: 11 }}>Material and Tiling</div>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Tile X ({tileX.toFixed(2)})<input type="range" min={1} max={12} step={0.25} value={tileX} onChange={(e) => setTileX(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Tile Y ({tileY.toFixed(2)})<input type="range" min={1} max={12} step={0.25} value={tileY} onChange={(e) => setTileY(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Displacement ({displacement.toFixed(3)})<input type="range" min={0} max={0.5} step={0.005} value={displacement} onChange={(e) => setDisplacement(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>
              Tessellation
              <select value={tessellationQuality} onChange={(e) => setTessellationQuality(e.target.value as TessellationQuality)} className="nt-select">
                <option value="low">Low (128)</option>
                <option value="med">Medium (256)</option>
                <option value="high">High (512)</option>
              </select>
            </label>
            {meshPreset === 'plane' && (
              <div style={{ fontSize: 9, color: '#8192b8' }}>
                Plane segments: {planeSegments}
                {forceHighPlaneTessellation ? ' (forced High by height displacement/POM)' : ''}
              </div>
            )}
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Normal Strength ({normalScale.toFixed(2)})<input type="range" min={0} max={2} step={0.02} value={normalScale} onChange={(e) => setNormalScale(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={normalFlipY} onChange={(e) => setNormalFlipY(e.target.checked)} />Flip Normal Y</label>
            {!connected.normal && <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Height to Normal ({heightNormalStrength.toFixed(2)})<input type="range" min={0} max={0.6} step={0.01} value={heightNormalStrength} onChange={(e) => setHeightNormalStrength(Number(e.target.value))} /></label>}
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Roughness Bias ({roughnessBias.toFixed(2)})<input type="range" min={0.2} max={1.8} step={0.02} value={roughnessBias} onChange={(e) => setRoughnessBias(Number(e.target.value))} /></label>

            <div style={{ height: 1, background: '#33425e' }} />
            <div style={{ color: '#dce6ff', fontWeight: 700, fontSize: 11 }}>Lighting and Environment</div>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Light Rotation ({Math.round(lightRotation)}deg)<input type="range" min={-180} max={180} step={1} value={lightRotation} onChange={(e) => setLightRotation(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Sun ({lightIntensity.toFixed(2)})<input type="range" min={0} max={2.4} step={0.05} value={lightIntensity} onChange={(e) => setLightIntensity(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>
              Sun Color
              <input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} />
            </label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>
              Sun Temp ({Math.round(lightTemperature)}K)
              <input type="range" min={1500} max={12000} step={50} value={lightTemperature} onChange={(e) => setLightTemperature(Number(e.target.value))} />
            </label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>
              Ambient Tint
              <input type="color" value={ambientTint} onChange={(e) => setAmbientTint(e.target.value)} />
            </label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Environment ({envIntensity.toFixed(2)})<input type="range" min={0} max={2} step={0.05} value={envIntensity} onChange={(e) => setEnvIntensity(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Env Rotation ({Math.round(envRotation)}deg)<input type="range" min={0} max={360} step={1} value={envRotation} onChange={(e) => setEnvRotation(Number(e.target.value))} /></label>
            {supportsBackgroundBlur && <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Background Blur ({backgroundBlur.toFixed(2)})<input type="range" min={0} max={1} step={0.01} value={backgroundBlur} onChange={(e) => setBackgroundBlur(Number(e.target.value))} /></label>}
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />Grid</label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>Auto Rotate
              <select value={autoRotateSpeed} onChange={(e) => setAutoRotateSpeed(Number(e.target.value))} className="nt-select"><option value={0}>Off</option><option value={0.35}>Slow</option><option value={0.8}>Medium</option><option value={1.5}>Fast</option></select>
            </label>

            <div style={{ height: 1, background: '#33425e' }} />
            <div style={{ color: '#dce6ff', fontWeight: 700, fontSize: 11 }}>Post and POM</div>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>Tone Mapping
              <select value={toneMapping} onChange={(e) => setToneMapping(e.target.value as ToneMappingMode)} className="nt-select">
                <option value="aces">ACES</option><option value="linear">Linear</option><option value="reinhard">Reinhard</option><option value="cineon">Cineon</option>
              </select>
            </label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>Exposure ({toneExposure.toFixed(2)})<input type="range" min={0.1} max={3} step={0.02} value={toneExposure} onChange={(e) => setToneExposure(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={debanding} onChange={(e) => setDebanding(e.target.checked)} />Debanding</label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={pomEnabled} onChange={(e) => setPomEnabled(e.target.checked)} />Enable POM</label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', flexDirection: 'column', gap: 3 }}>POM Scale ({pomScale.toFixed(3)})<input type="range" min={0} max={0.15} step={0.0025} value={pomScale} onChange={(e) => setPomScale(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#9eb0d7', display: 'flex', alignItems: 'center', gap: 6 }}>POM Quality
              <select value={pomSteps} onChange={(e) => setPomSteps(Number(e.target.value) as 8 | 16 | 32)} className="nt-select"><option value={8}>Low (8)</option><option value={16}>Medium (16)</option><option value={32}>High (32)</option></select>
            </label>
          </div>
        )}
      </div>

      {loadError && <div style={{ borderTop: '1px solid #5f3b3b', background: '#2a1717', color: '#ffb8b8', fontSize: 10, padding: '5px 8px', lineHeight: 1.35 }}>{loadError}</div>}
    </div>
  );
}
