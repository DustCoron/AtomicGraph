import React, { useEffect, useMemo, useRef, useState } from 'react';
import { percentile, type PerformanceMode, type ViewportPerfSample } from '../core/perf';
import {
  ArcRotateCamera,
  BaseTexture,
  Color3,
  Color4,
  CubeTexture,
  DirectionalLight,
  DynamicTexture,
  Engine,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  PBRMaterial,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
  VertexBuffer,
  ImageProcessingConfiguration,
  ScenePerformancePriority,
  ShadowGenerator,
} from '@babylonjs/core';
import { HDRCubeTexture } from '@babylonjs/core/Materials/Textures/hdrCubeTexture';
import { DefaultRenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline';
import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper';
import {
  clampPreview3DCameraPose,
  defaultPreview3DCameraPose,
  hexToLinearRgb,
  kelvinToLinearRgb,
  preview3DCameraViewPose,
  preview3DCameraPoseEquals,
  type Preview3DCameraPose,
  type Preview3DCameraViewPreset,
  type Preview3DEnvironmentPreset,
  type Preview3DMeshPreset,
  type Preview3DSharedSceneState,
  type Preview3DViewMode,
} from './preview3dShared';
import { Preview3DAxisCompass } from './Preview3DAxisCompass';
import '@babylonjs/core/Materials/Textures/Loaders/envTextureLoader';
import '@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader';

interface Viewport3DBabylonProps {
  baseColorCanvas?: HTMLCanvasElement | null;
  heightCanvas?: HTMLCanvasElement | null;
  normalCanvas?: HTMLCanvasElement | null;
  roughnessCanvas?: HTMLCanvasElement | null;
  metallicCanvas?: HTMLCanvasElement | null;
  aoCanvas?: HTMLCanvasElement | null;
  baseColorVersion?: number;
  heightVersion?: number;
  normalVersion?: number;
  roughnessVersion?: number;
  metallicVersion?: number;
  aoVersion?: number;
  frameBudgetMs?: number;
  performanceMode?: PerformanceMode;
  onPerfSample?: (sample: ViewportPerfSample) => void;
  onGpuFailure?: (source: 'babylon', reason: string, hard?: boolean) => void;
  sceneState: Preview3DSharedSceneState;
  setSceneState: React.Dispatch<React.SetStateAction<Preview3DSharedSceneState>>;
}

type MeshPreset = Preview3DMeshPreset;
type ViewMode = Preview3DViewMode;
type Channel = 'baseColor' | 'normal' | 'roughness' | 'metallic' | 'ao' | 'height';
type TessellationQuality = 'low' | 'med' | 'high';
type ToneMapPreset = 'aces' | 'standard' | 'neutral';
type RenderProfile = 'performance' | 'balanced' | 'quality';
type EnvironmentPreset = Preview3DEnvironmentPreset;
type ShadowQuality = 'low' | 'med' | 'high';
type NormalConvention = 'opengl' | 'directx';

interface DynamicEntry {
  texture: DynamicTexture;
  canvas: HTMLCanvasElement;
  version: number;
}

interface BabylonState {
  engine: Engine;
  scene: Scene;
  camera: ArcRotateCamera;
  meshes: Record<MeshPreset, Mesh>;
  pbr: PBRMaterial;
  flat: StandardMaterial;
  hemi: HemisphericLight;
  sun: DirectionalLight;
  fill: DirectionalLight;
  rim: DirectionalLight;
  fallbacks: Record<Channel, DynamicTexture>;
  dynamic: Partial<Record<Channel, DynamicEntry>>;
  pipeline: DefaultRenderingPipeline | null;
  environmentHelper: EnvironmentHelper | null;
  environmentTexture: BaseTexture | null;
  skybox: Mesh | null;
  shadowGenerator: ShadowGenerator | null;
  activePlaneSegments: number;
  baseGeometry: Record<MeshPreset, { positions: Float32Array | null; normals: Float32Array | null; uvs: Float32Array | null; indices: number[] | null }>;
  heightReadbackCanvas: HTMLCanvasElement;
  heightReadbackCtx: CanvasRenderingContext2D | null;
  packedMetalRough: DynamicTexture | null;
  mrScratchCanvas: HTMLCanvasElement;
  mrScratchCtx: CanvasRenderingContext2D | null;
}

const TOOLBAR_BTN: React.CSSProperties = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#50545b',
  background: '#2a2d31',
  color: '#d6d8dc',
  borderRadius: 4,
  height: 24,
  padding: '0 8px',
  fontSize: 11,
  fontWeight: 700,
  cursor: 'pointer',
};
const VIEWPORT_BACKGROUND = { r: 0.435, g: 0.455, b: 0.486 };
const PERF_RING_SIZE = 300;
const IDLE_RENDER_INTERVAL_MS = 800;
const FORCE_RENDER_INTERVAL_MS = 8000;
const SLEEP_AFTER_IDLE_MS = 8000;

const RANGE_STYLE: React.CSSProperties = {
  width: '100%',
  minWidth: 64,
};

function toggleBtnStyle(enabled: boolean): React.CSSProperties {
  return enabled ? { ...TOOLBAR_BTN, borderColor: '#797f88', background: '#3a3e44', color: '#f3f4f6' } : TOOLBAR_BTN;
}

const CAMERA_SPEED_NORMAL = {
  angular: 2500,
  wheel: 60,
  pan: 1350,
};

const STORAGE_PREFIX = 'atomicgraph.preview3d.babylon.';

function readStoredBoolean(key: string, fallback: boolean): boolean {
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (raw == null) return fallback;
    return raw === '1';
  } catch {
    return fallback;
  }
}

function readStoredNumber(key: string, fallback: number): number {
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (raw == null) return fallback;
    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeStoredValue(key: string, value: string) {
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
  } catch {
    /* ignore */
  }
}

const ENVIRONMENT_PRESET_URLS: Record<Exclude<EnvironmentPreset, 'none' | 'custom'>, string> = {
  studio: 'https://assets.babylonjs.com/environments/studio.env',
  city: 'https://assets.babylonjs.com/environments/environmentSpecular.env',
};

const RENDER_PROFILE_SETTINGS: Record<
  RenderProfile,
  { priority: ScenePerformancePriority; baseScale: number; realtimeFiltering: boolean; realtimeFilteringQuality: number }
> = {
  performance: {
    priority: ScenePerformancePriority.Aggressive,
    baseScale: 1.35,
    realtimeFiltering: false,
    realtimeFilteringQuality: 8,
  },
  balanced: {
    priority: ScenePerformancePriority.Intermediate,
    baseScale: 1.0,
    realtimeFiltering: true,
    realtimeFilteringQuality: 12,
  },
  quality: {
    priority: ScenePerformancePriority.BackwardCompatible,
    baseScale: 0.78,
    realtimeFiltering: true,
    realtimeFilteringQuality: 16,
  },
};

function profileForPerformanceMode(mode?: PerformanceMode): RenderProfile {
  if (mode === 'performance_first') return 'performance';
  if (mode === 'quality_first') return 'quality';
  return 'balanced';
}

function resolutionScaleForBudget(mode: PerformanceMode | undefined, frameBudgetMs: number | undefined): number {
  if (mode === 'performance_first') return 1.18;
  if (mode === 'quality_first') return 0.9;
  if (typeof frameBudgetMs === 'number') {
    if (frameBudgetMs <= 8) return 1.2;
    if (frameBudgetMs <= 12) return 1.05;
    if (frameBudgetMs >= 20) return 0.92;
  }
  return 1;
}

function planeSegmentsForQuality(quality: TessellationQuality): number {
  if (quality === 'low') return 128;
  if (quality === 'high') return 512;
  return 256;
}

function shadowMapSizeForQuality(quality: ShadowQuality): number {
  if (quality === 'low') return 1024;
  if (quality === 'high') return 4096;
  return 2048;
}

function makeSolidTexture(scene: Scene, hex: string, channel: string): DynamicTexture {
  const tex = new DynamicTexture(`fallback_${channel}`, { width: 4, height: 4 }, scene, false);
  const ctx = tex.getContext();
  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, 4, 4);
  tex.update(false);
  tex.wrapU = Texture.WRAP_ADDRESSMODE;
  tex.wrapV = Texture.WRAP_ADDRESSMODE;
  return tex;
}

function configureDynamicTexture(tex: DynamicTexture, channel: Channel) {
  tex.wrapU = Texture.WRAP_ADDRESSMODE;
  tex.wrapV = Texture.WRAP_ADDRESSMODE;
  tex.vScale = 1;
  tex.uScale = 1;
  tex.updateSamplingMode(Texture.TRILINEAR_SAMPLINGMODE);
  tex.anisotropicFilteringLevel = 8;
  tex.gammaSpace = channel === 'baseColor';
}

function drawCanvasToTexture(tex: DynamicTexture, canvas: HTMLCanvasElement) {
  const size = tex.getSize();
  const ctx = tex.getContext();
  ctx.clearRect(0, 0, size.width, size.height);
  ctx.drawImage(canvas, 0, 0, size.width, size.height);
  tex.update(false);
}

const DEFAULT_ROUGHNESS_BYTE = 190; // ~= #bebebe (matches Three fallback roughness)
const DEFAULT_METALLIC_BYTE = 0; // #000000

function sampleCanvasLumaToByteBuffer(
  scratchCanvas: HTMLCanvasElement,
  scratchCtx: CanvasRenderingContext2D | null,
  sourceCanvas: HTMLCanvasElement | null | undefined,
  width: number,
  height: number,
  fallbackByte: number,
): Uint8ClampedArray {
  const out = new Uint8ClampedArray(width * height);
  if (!sourceCanvas || !scratchCtx) {
    out.fill(fallbackByte);
    return out;
  }
  scratchCanvas.width = width;
  scratchCanvas.height = height;
  scratchCtx.clearRect(0, 0, width, height);
  scratchCtx.drawImage(sourceCanvas, 0, 0, width, height);
  const data = scratchCtx.getImageData(0, 0, width, height).data;
  for (let i = 0, p = 0; i < data.length; i += 4, p += 1) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    out[p] = (r * 77 + g * 150 + b * 29) >> 8;
  }
  return out;
}

function updatePackedMetalRoughTexture(state: BabylonState): DynamicTexture {
  const roughCanvas = state.dynamic.roughness?.canvas ?? null;
  const metallicCanvas = state.dynamic.metallic?.canvas ?? null;
  const width = Math.max(1, roughCanvas?.width ?? metallicCanvas?.width ?? 4);
  const height = Math.max(1, roughCanvas?.height ?? metallicCanvas?.height ?? 4);

  let packed = state.packedMetalRough;
  const packedSize = packed?.getSize();
  const packedWidth = packedSize?.width ?? 0;
  const packedHeight = packedSize?.height ?? 0;
  if (!packed || packedWidth !== width || packedHeight !== height) {
    packed?.dispose();
    packed = new DynamicTexture('packed_metallic_roughness', { width, height }, state.scene, false);
    configureDynamicTexture(packed, 'roughness');
    state.packedMetalRough = packed;
  }

  const rough = sampleCanvasLumaToByteBuffer(
    state.mrScratchCanvas,
    state.mrScratchCtx,
    roughCanvas,
    width,
    height,
    DEFAULT_ROUGHNESS_BYTE,
  );
  const metallic = sampleCanvasLumaToByteBuffer(
    state.mrScratchCanvas,
    state.mrScratchCtx,
    metallicCanvas,
    width,
    height,
    DEFAULT_METALLIC_BYTE,
  );

  const ctx = packed.getContext();
  const image = state.mrScratchCtx?.createImageData(width, height) ?? new ImageData(width, height);
  const out = image.data;
  for (let i = 0, p = 0; i < out.length; i += 4, p += 1) {
    out[i] = 0;
    out[i + 1] = rough[p];
    out[i + 2] = metallic[p];
    out[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  packed.update(false);
  return packed;
}

function selectActiveMesh(state: BabylonState, preset: MeshPreset) {
  (Object.keys(state.meshes) as MeshPreset[]).forEach((key) => {
    state.meshes[key].setEnabled(key === preset);
  });
}

function applySharedCameraPose(state: BabylonState, pose: Preview3DCameraPose) {
  const next = clampPreview3DCameraPose(pose);
  state.camera.alpha = next.alpha;
  state.camera.beta = next.beta;
  state.camera.radius = next.radius;
  state.camera.setTarget(new Vector3(next.target.x, next.target.y, next.target.z));
}

function readSharedCameraPose(state: BabylonState): Preview3DCameraPose {
  return clampPreview3DCameraPose({
    alpha: state.camera.alpha,
    beta: state.camera.beta,
    radius: state.camera.radius,
    target: {
      x: state.camera.target.x,
      y: state.camera.target.y,
      z: state.camera.target.z,
    },
  });
}

function applySharedLighting(state: BabylonState, lighting: {
  lightRotation: number;
  lightIntensity: number;
  lightColor: string;
  lightTemperature: number;
  ambientTint: string;
  ambientIntensity: number;
  iblIntensity: number;
}) {
  const ang = (lighting.lightRotation * Math.PI) / 180;
  const sunPos = new Vector3(Math.cos(ang) * 2.6, 2.25, Math.sin(ang) * 2.6);
  const fillPos = new Vector3(Math.cos(ang + Math.PI * 0.72) * 2.1, 1.85, Math.sin(ang + Math.PI * 0.72) * 2.1);
  const rimPos = new Vector3(Math.cos(ang - Math.PI * 0.82) * 2.25, 2.05, Math.sin(ang - Math.PI * 0.82) * 2.25);
  const sunBase = hexToLinearRgb(lighting.lightColor);
  const kelvin = kelvinToLinearRgb(lighting.lightTemperature);
  const ambient = hexToLinearRgb(lighting.ambientTint);
  const sunColor = new Color3(sunBase.r * kelvin.r, sunBase.g * kelvin.g, sunBase.b * kelvin.b);
  const fillColor = new Color3(
    Math.min(1, sunColor.r * 0.72 + ambient.r * 0.28),
    Math.min(1, sunColor.g * 0.72 + ambient.g * 0.28),
    Math.min(1, sunColor.b * 0.72 + ambient.b * 0.28),
  );
  const rimColor = new Color3(
    Math.min(1, sunColor.r * 0.88 + 0.12),
    Math.min(1, sunColor.g * 0.9 + 0.1),
    Math.min(1, sunColor.b * 0.94 + 0.06),
  );
  state.sun.position.copyFrom(sunPos);
  state.sun.direction.copyFrom(sunPos.scale(-1).normalize());
  state.sun.diffuse = sunColor;
  state.sun.intensity = lighting.lightIntensity;
  state.fill.position.copyFrom(fillPos);
  state.fill.direction.copyFrom(fillPos.scale(-1).normalize());
  state.fill.diffuse = fillColor;
  state.fill.intensity = Math.max(0.08, lighting.lightIntensity * 0.34);
  state.rim.position.copyFrom(rimPos);
  state.rim.direction.copyFrom(rimPos.scale(-1).normalize());
  state.rim.diffuse = rimColor;
  state.rim.intensity = Math.max(0.06, lighting.lightIntensity * 0.2);
  state.hemi.diffuse = new Color3(ambient.r, ambient.g, ambient.b);
  state.hemi.groundColor = new Color3(ambient.r * 0.22, ambient.g * 0.22, ambient.b * 0.24);
  state.hemi.intensity = lighting.ambientIntensity;
  state.pbr.environmentIntensity = lighting.iblIntensity;
}

function applyCameraSpeed(camera: ArcRotateCamera) {
  camera.angularSensibilityX = CAMERA_SPEED_NORMAL.angular;
  camera.angularSensibilityY = CAMERA_SPEED_NORMAL.angular;
  camera.wheelPrecision = CAMERA_SPEED_NORMAL.wheel;
  camera.panningSensibility = CAMERA_SPEED_NORMAL.pan;
  camera.inertia = 0.82;
  camera.panningInertia = 0.78;
}

function applyCameraAutoRotate(camera: ArcRotateCamera, enabled: boolean, speed: number) {
  camera.useAutoRotationBehavior = enabled;
  if (enabled && camera.autoRotationBehavior) {
    camera.autoRotationBehavior.idleRotationWaitTime = 800;
    camera.autoRotationBehavior.idleRotationSpinupTime = 500;
    camera.autoRotationBehavior.idleRotationSpeed = speed;
  }
}

function applyRenderProfile(state: BabylonState, profile: RenderProfile, resolutionScale: number) {
  const settings = RENDER_PROFILE_SETTINGS[profile];
  state.scene.performancePriority = settings.priority;
  const hardwareScaling = Math.min(2, Math.max(0.55, settings.baseScale * resolutionScale));
  state.engine.setHardwareScalingLevel(hardwareScaling);
  state.pbr.realTimeFiltering = settings.realtimeFiltering;
  state.pbr.realTimeFilteringQuality = settings.realtimeFilteringQuality;
}

function applyImageProcessing(scene: Scene, toneMap: ToneMapPreset, exposure: number, contrast: number) {
  const ip = scene.imageProcessingConfiguration;
  ip.isEnabled = true;
  ip.applyByPostProcess = true;
  ip.toneMappingEnabled = true;
  ip.toneMappingType =
    toneMap === 'neutral'
      ? ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL
      : toneMap === 'standard'
        ? ImageProcessingConfiguration.TONEMAPPING_STANDARD
        : ImageProcessingConfiguration.TONEMAPPING_ACES;
  ip.exposure = exposure;
  ip.contrast = contrast;
  ip.ditheringEnabled = true;
  ip.ditheringIntensity = 1 / 255;
}

function applyPipelineSettings(
  state: BabylonState,
  settings: { msaaSamples: number }
) {
  const pipeline = state.pipeline;
  if (!pipeline) return;
  pipeline.imageProcessingEnabled = true;
  pipeline.fxaaEnabled = false;
  pipeline.bloomEnabled = false;
  pipeline.sharpenEnabled = true;
  pipeline.sharpen.edgeAmount = 0.22;
  pipeline.sharpen.colorAmount = 1;
  pipeline.samples = settings.msaaSamples;
}

function clearEnvironment(state: BabylonState) {
  if (state.environmentTexture) {
    state.environmentTexture.dispose();
    state.environmentTexture = null;
  }
  if (state.skybox) {
    state.skybox.dispose(false, false);
    state.skybox = null;
  }
  state.scene.environmentTexture = null;
  state.pbr.reflectionTexture = null;
  state.skybox = null;
}

function environmentBaseRotation(preset: EnvironmentPreset): number {
  return preset === 'city' ? Math.PI * 0.12 : 0;
}

function environmentRotationRadians(preset: EnvironmentPreset, rotationDegrees: number): number {
  return environmentBaseRotation(preset) + (rotationDegrees * Math.PI) / 180;
}

function applyEnvironmentTexture(
  state: BabylonState,
  texture: BaseTexture,
  preset: EnvironmentPreset,
  rotationDegrees: number,
  setError: (value: string | null) => void,
) {
  if ('gammaSpace' in texture) {
    texture.gammaSpace = false;
  }
  if ('rotationY' in texture) {
    (texture as BaseTexture & { rotationY: number }).rotationY = environmentRotationRadians(preset, rotationDegrees);
  }
  state.scene.environmentTexture = texture;
  state.pbr.reflectionTexture = texture;
  state.environmentTexture = texture;
  state.skybox = null;
  setError(null);
}

function applyEnvironmentPreset(
  state: BabylonState,
  preset: Exclude<EnvironmentPreset, 'custom'>,
  rotationDegrees: number,
  setError: (value: string | null) => void,
  onReady?: () => void,
) {
  clearEnvironment(state);
  if (preset === 'none') {
    setError(null);
    onReady?.();
    return;
  }
  const texture = CubeTexture.CreateFromPrefilteredData(ENVIRONMENT_PRESET_URLS[preset], state.scene);
  texture.onLoadObservable.addOnce(() => {
    setError(null);
    onReady?.();
  });
  applyEnvironmentTexture(state, texture, preset, rotationDegrees, setError);
}

function applyCustomEnvironment(
  state: BabylonState,
  url: string,
  rotationDegrees: number,
  setError: (value: string | null) => void,
  onReady?: () => void,
) {
  clearEnvironment(state);
  const texture = new HDRCubeTexture(
    url,
    state.scene,
    256,
    false,
    true,
    false,
    true,
    () => {
      setError(null);
      onReady?.();
    },
    (message, exception) => {
      const details = exception instanceof Error ? `${exception.name}: ${exception.message}` : String(exception ?? '');
      setError(`HDR environment load failed: ${message || details || 'Unknown error'}`);
    },
  );
  applyEnvironmentTexture(state, texture, 'custom', rotationDegrees, setError);
}

function updateEnvironmentRotation(state: BabylonState, preset: EnvironmentPreset, rotationDegrees: number) {
  const radians = environmentRotationRadians(preset, rotationDegrees);
  if (state.environmentTexture && 'rotationY' in state.environmentTexture) {
    (state.environmentTexture as BaseTexture & { rotationY: number }).rotationY = radians;
  }
}

function applyShadowSettings(state: BabylonState, enabled: boolean, quality: ShadowQuality, darkness: number) {
  const setReceivers = (value: boolean) => {
    (Object.keys(state.meshes) as MeshPreset[]).forEach((preset) => {
      state.meshes[preset].receiveShadows = value;
    });
  };
  if (!enabled) {
    state.sun.shadowEnabled = false;
    state.shadowGenerator?.dispose();
    state.shadowGenerator = null;
    setReceivers(false);
    return;
  }

  const mapSize = shadowMapSizeForQuality(quality);
  const currentMap = state.shadowGenerator?.getShadowMap();
  const currentSize = currentMap?.getSize();
  const width = typeof currentSize === 'number' ? currentSize : currentSize?.width ?? 0;
  const needsRebuild = !state.shadowGenerator || width !== mapSize;

  if (needsRebuild) {
    state.shadowGenerator?.dispose();
    const generator = new ShadowGenerator(mapSize, state.sun);
    generator.bias = 0.00055;
    generator.normalBias = 0.02;
    generator.darkness = darkness;
    generator.forceBackFacesOnly = false;
    generator.useContactHardeningShadow = quality === 'high';
    generator.usePercentageCloserFiltering = quality !== 'high';
    generator.filteringQuality =
      quality === 'high'
        ? ShadowGenerator.QUALITY_HIGH
        : quality === 'med'
          ? ShadowGenerator.QUALITY_MEDIUM
          : ShadowGenerator.QUALITY_LOW;
    generator.contactHardeningLightSizeUVRatio = 0.05;
    (Object.keys(state.meshes) as MeshPreset[]).forEach((preset) => {
      if (preset !== 'plane') {
        generator.addShadowCaster(state.meshes[preset], true);
      }
    });
    state.shadowGenerator = generator;
  }

  if (state.shadowGenerator) {
    state.shadowGenerator.darkness = darkness;
    state.shadowGenerator.filteringQuality =
      quality === 'high'
        ? ShadowGenerator.QUALITY_HIGH
        : quality === 'med'
          ? ShadowGenerator.QUALITY_MEDIUM
          : ShadowGenerator.QUALITY_LOW;
    state.shadowGenerator.useContactHardeningShadow = quality === 'high';
    state.shadowGenerator.usePercentageCloserFiltering = quality !== 'high';
  }

  state.sun.shadowEnabled = true;
  setReceivers(true);
}

function channelTexture(state: BabylonState, channel: Channel): Texture {
  return state.dynamic[channel]?.texture ?? state.fallbacks[channel];
}

function applyLitMaterial(state: BabylonState) {
  const base = channelTexture(state, 'baseColor');
  const normal = channelTexture(state, 'normal');
  const ao = channelTexture(state, 'ao');
  const packedMetalRough = updatePackedMetalRoughTexture(state);
  const hasNormal = !!state.dynamic.normal?.canvas;
  const hasAo = !!state.dynamic.ao?.canvas;
  state.pbr.albedoTexture = base;
  state.pbr.bumpTexture = hasNormal ? normal : null;
  state.pbr.metallicTexture = packedMetalRough;
  state.pbr.useMetallnessFromMetallicTextureBlue = true;
  state.pbr.useRoughnessFromMetallicTextureGreen = true;
  state.pbr.useRoughnessFromMetallicTextureAlpha = false;
  state.pbr.useAmbientOcclusionFromMetallicTextureRed = false;
  state.pbr.microSurfaceTexture = null;
  state.pbr.metallic = 1;
  state.pbr.roughness = 1;
  state.pbr.ambientTexture = ao;
  state.pbr.useAmbientInGrayScale = true;
  state.pbr.ambientTextureStrength = hasAo ? 1 : 0;
  state.pbr.useParallax = false;
  state.pbr.useParallaxOcclusion = false;
  state.pbr.parallaxScaleBias = 0;
  state.pbr.usePhysicalLightFalloff = true;
  state.pbr.enableSpecularAntiAliasing = true;
  state.pbr.useHorizonOcclusion = true;
  state.pbr.useRadianceOcclusion = true;
  state.pbr.forceIrradianceInFragment = true;
  (Object.keys(state.meshes) as MeshPreset[]).forEach((key) => {
    state.meshes[key].material = state.pbr;
  });
}

function applyViewMode(state: BabylonState, mode: ViewMode) {
  if (mode === 'lit') {
    applyLitMaterial(state);
    return;
  }
  const tex = channelTexture(state, mode);
  state.flat.diffuseTexture = tex;
  state.flat.emissiveTexture = tex;
  (Object.keys(state.meshes) as MeshPreset[]).forEach((key) => {
    state.meshes[key].material = state.flat;
  });
}

function readHeightBuffer(state: BabylonState, canvas: HTMLCanvasElement): { buffer: Uint8Array; width: number; height: number } | null {
  const width = Math.max(1, canvas.width || 1);
  const height = Math.max(1, canvas.height || 1);
  state.heightReadbackCanvas.width = width;
  state.heightReadbackCanvas.height = height;
  const ctx = state.heightReadbackCtx;
  if (!ctx) return null;
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(canvas, 0, 0, width, height);
  const image = ctx.getImageData(0, 0, width, height);
  return {
    buffer: new Uint8Array(image.data.buffer, image.data.byteOffset, image.data.byteLength),
    width,
    height,
  };
}

function cacheMeshBaseGeometry(state: BabylonState, preset: MeshPreset) {
  const mesh = state.meshes[preset];
  const positions = mesh.getVerticesData(VertexBuffer.PositionKind);
  const normals = mesh.getVerticesData(VertexBuffer.NormalKind);
  const uvs = mesh.getVerticesData(VertexBuffer.UVKind);
  const indices = mesh.getIndices();
  state.baseGeometry[preset] = {
    positions: positions ? new Float32Array(positions) : null,
    normals: normals ? new Float32Array(normals) : null,
    uvs: uvs ? new Float32Array(uvs) : null,
    indices: indices ? Array.from(indices) : null,
  };
}

function cacheAllMeshBaseGeometry(state: BabylonState) {
  (Object.keys(state.meshes) as MeshPreset[]).forEach((preset) => {
    cacheMeshBaseGeometry(state, preset);
  });
}

function restoreMeshBaseGeometry(state: BabylonState, preset: MeshPreset) {
  const mesh = state.meshes[preset];
  const base = state.baseGeometry[preset];
  if (base.positions) {
    // Use fresh copies to avoid Babylon mutating our cached base buffers by reference.
    mesh.updateVerticesData(VertexBuffer.PositionKind, new Float32Array(base.positions), true, false);
  }
  if (base.normals) {
    mesh.updateVerticesData(VertexBuffer.NormalKind, new Float32Array(base.normals), false, false);
  }
}

function meshDisplacementScale(preset: MeshPreset): number {
  if (preset === 'plane') return 1.0;
  if (preset === 'sphere') return 0.4;
  if (preset === 'cylinder') return 0.35;
  return 0.3;
}

function wrap01(value: number): number {
  return value - Math.floor(value);
}

function sampleHeightLuma(
  image: { buffer: Uint8Array; width: number; height: number },
  u: number,
  v: number,
): number {
  const uu = wrap01(u);
  const vv = wrap01(v);
  const x = Math.min(image.width - 1, Math.max(0, Math.floor(uu * (image.width - 1))));
  const y = Math.min(image.height - 1, Math.max(0, Math.floor(vv * (image.height - 1))));
  const p = (x + y * image.width) * 4;
  const r = image.buffer[p] / 255;
  const g = image.buffer[p + 1] / 255;
  const b = image.buffer[p + 2] / 255;
  return r * 0.3 + g * 0.59 + b * 0.11;
}

function recomputeNormalsFromIndices(
  positions: Float32Array,
  indices: number[] | null,
  fallbackNormals: Float32Array,
): Float32Array {
  if (!indices || indices.length < 3) {
    return new Float32Array(fallbackNormals);
  }
  const normals = new Float32Array(positions.length);
  for (let i = 0; i + 2 < indices.length; i += 3) {
    const ia = indices[i] * 3;
    const ib = indices[i + 1] * 3;
    const ic = indices[i + 2] * 3;
    const ax = positions[ia];
    const ay = positions[ia + 1];
    const az = positions[ia + 2];
    const bx = positions[ib];
    const by = positions[ib + 1];
    const bz = positions[ib + 2];
    const cx = positions[ic];
    const cy = positions[ic + 1];
    const cz = positions[ic + 2];
    const abx = bx - ax;
    const aby = by - ay;
    const abz = bz - az;
    const acx = cx - ax;
    const acy = cy - ay;
    const acz = cz - az;
    const nx = aby * acz - abz * acy;
    const ny = abz * acx - abx * acz;
    const nz = abx * acy - aby * acx;
    normals[ia] += nx;
    normals[ia + 1] += ny;
    normals[ia + 2] += nz;
    normals[ib] += nx;
    normals[ib + 1] += ny;
    normals[ib + 2] += nz;
    normals[ic] += nx;
    normals[ic + 1] += ny;
    normals[ic + 2] += nz;
  }
  for (let i = 0; i < normals.length; i += 3) {
    const nx = normals[i];
    const ny = normals[i + 1];
    const nz = normals[i + 2];
    const len = Math.hypot(nx, ny, nz);
    if (len > 1e-6) {
      const inv = 1 / len;
      normals[i] = nx * inv;
      normals[i + 1] = ny * inv;
      normals[i + 2] = nz * inv;
    } else {
      normals[i] = fallbackNormals[i];
      normals[i + 1] = fallbackNormals[i + 1];
      normals[i + 2] = fallbackNormals[i + 2];
    }
  }
  return normals;
}

function rebuildPlaneMesh(state: BabylonState, segments: number) {
  if (state.activePlaneSegments === segments) return;
  const wasEnabled = state.meshes.plane.isEnabled();
  const oldPlane = state.meshes.plane;
  oldPlane.dispose(false, false);
  const nextPlane = MeshBuilder.CreateGround(
    'mesh_plane',
    { width: 2.2, height: 2.2, subdivisions: segments, updatable: true },
    state.scene,
  );
  nextPlane.setEnabled(wasEnabled);
  state.meshes.plane = nextPlane;
  state.activePlaneSegments = segments;
  cacheMeshBaseGeometry(state, 'plane');
}

function applyDisplacementToMesh(
  state: BabylonState,
  preset: MeshPreset,
  heightImage: { buffer: Uint8Array; width: number; height: number } | null,
  amount: number
) {
  const base = state.baseGeometry[preset];
  const mesh = state.meshes[preset];
  if (!base.positions || !base.normals) {
    mesh.refreshBoundingInfo(true);
    return;
  }
  if (!heightImage || amount <= 0.0001 || !base.uvs) {
    restoreMeshBaseGeometry(state, preset);
    mesh.refreshBoundingInfo(true);
    return;
  }
  const positions = new Float32Array(base.positions);
  const scaled = amount * meshDisplacementScale(preset);
  for (let i = 0; i * 2 + 1 < base.uvs.length && i * 3 + 2 < positions.length; i += 1) {
    const i2 = i * 2;
    const i3 = i * 3;
    const luma = sampleHeightLuma(heightImage, base.uvs[i2], base.uvs[i2 + 1]);
    const signed = (luma - 0.5) * 2;
    const disp = signed * scaled;
    positions[i3] = base.positions[i3] + base.normals[i3] * disp;
    positions[i3 + 1] = base.positions[i3 + 1] + base.normals[i3 + 1] * disp;
    positions[i3 + 2] = base.positions[i3 + 2] + base.normals[i3 + 2] * disp;
  }
  const normals =
    preset === 'plane'
      ? recomputeNormalsFromIndices(positions, base.indices, base.normals)
      : new Float32Array(base.normals);
  mesh.updateVerticesData(VertexBuffer.PositionKind, positions, true, false);
  mesh.updateVerticesData(VertexBuffer.NormalKind, normals, false, false);
  mesh.refreshBoundingInfo(true);
}

function applyDisplacementAllMeshes(state: BabylonState, heightCanvas: HTMLCanvasElement | null, amount: number) {
  const image = heightCanvas ? readHeightBuffer(state, heightCanvas) : null;
  (Object.keys(state.meshes) as MeshPreset[]).forEach((preset) => {
    applyDisplacementToMesh(state, preset, image, amount);
  });
}

export function Viewport3DBabylon({
  baseColorCanvas,
  heightCanvas,
  normalCanvas,
  roughnessCanvas,
  metallicCanvas,
  aoCanvas,
  baseColorVersion = 0,
  heightVersion = 0,
  normalVersion = 0,
  roughnessVersion = 0,
  metallicVersion = 0,
  aoVersion = 0,
  frameBudgetMs,
  performanceMode,
  onPerfSample,
  onGpuFailure,
  sceneState,
  setSceneState,
}: Viewport3DBabylonProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<BabylonState | null>(null);
  const cameraPoseSyncRef = useRef(sceneState.cameraPose);
  const sceneDirtyRef = useRef(true);
  const wakeRendererRef = useRef<(() => void) | null>(null);
  const lastRenderAtRef = useRef(0);
  const [displacementAmount, setDisplacementAmount] = useState(0.15);
  const [tessellationQuality, setTessellationQuality] = useState<TessellationQuality>('med');
  const [toneMap, setToneMap] = useState<ToneMapPreset>('aces');
  const [exposure, setExposure] = useState(1.06);
  const [contrast, setContrast] = useState(1.08);
  const [msaaSamples, setMsaaSamples] = useState<1 | 2 | 4>(1);
  const [renderProfile, setRenderProfile] = useState<RenderProfile>(() => profileForPerformanceMode(performanceMode));
  const [renderProfilePinned, setRenderProfilePinned] = useState(false);
  const [resolutionScale, setResolutionScale] = useState(() => resolutionScaleForBudget(performanceMode, frameBudgetMs));
  const [resolutionScalePinned, setResolutionScalePinned] = useState(false);
  const [shadowQuality, setShadowQuality] = useState<ShadowQuality>('med');
  const [shadowDarkness, setShadowDarkness] = useState(0.24);
  const [wireframeEnabled, setWireframeEnabled] = useState(() => readStoredBoolean('wireframe', false));
  const [inspectMode, setInspectMode] = useState(() => readStoredBoolean('inspectMode', false));
  const [inspectStrength, setInspectStrength] = useState(() => readStoredNumber('inspectStrength', 1.65));
  const [normalConvention, setNormalConvention] = useState<NormalConvention>('opengl');
  const [cameraMenuOpen, setCameraMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [renderStats, setRenderStats] = useState({ renderMs: 0, samples: 4, fps: 0, p50: 0, p95: 0 });
  const {
    meshPreset,
    viewMode,
    lightRotation,
    lightIntensity,
    lightColor,
    lightTemperature,
    ambientTint,
    ambientIntensity,
    iblIntensity,
    environmentPreset,
    customEnvironmentUrl,
    customEnvironmentName,
    environmentRotation,
    autoRotateSpeed,
    shadowsEnabled,
    cameraPose,
  } = sceneState;
  const autoRotate = autoRotateSpeed > 0;
  const updateSceneState = (updater: (prev: Preview3DSharedSceneState) => Preview3DSharedSceneState) => {
    setSceneState(updater);
  };
  const requestRender = () => {
    sceneDirtyRef.current = true;
    wakeRendererRef.current?.();
  };
  const applyCameraViewPreset = (preset: Preview3DCameraViewPreset) => {
    updateSceneState((prev) => ({
      ...prev,
      cameraPose: preview3DCameraViewPose(prev.meshPreset, preset, prev.cameraPose.target),
    }));
    setCameraMenuOpen(false);
  };

  const incoming = useMemo(() => ({
    baseColor: { canvas: baseColorCanvas ?? null, version: baseColorVersion },
    normal: { canvas: normalCanvas ?? null, version: normalVersion },
    roughness: { canvas: roughnessCanvas ?? null, version: roughnessVersion },
    metallic: { canvas: metallicCanvas ?? null, version: metallicVersion },
    ao: { canvas: aoCanvas ?? null, version: aoVersion },
    height: { canvas: heightCanvas ?? null, version: heightVersion },
  }), [
    baseColorCanvas, baseColorVersion,
    normalCanvas, normalVersion,
    roughnessCanvas, roughnessVersion,
    metallicCanvas, metallicVersion,
    aoCanvas, aoVersion,
    heightCanvas, heightVersion,
  ]);
  const connected = useMemo(
    () => ({
      baseColor: !!incoming.baseColor.canvas,
      normal: !!incoming.normal.canvas,
      roughness: !!incoming.roughness.canvas,
      metallic: !!incoming.metallic.canvas,
      ao: !!incoming.ao.canvas,
      height: !!incoming.height.canvas,
    }),
    [incoming],
  );
  const effectiveDisplacementAmount = useMemo(() => {
    if (!inspectMode || !incoming.height.canvas) return displacementAmount;
    return Math.max(displacementAmount * inspectStrength, 0.16);
  }, [inspectMode, incoming.height.canvas, displacementAmount, inspectStrength]);
  const forceHighPlaneTessellation = useMemo(
    () => meshPreset === 'plane' && !!incoming.height.canvas && effectiveDisplacementAmount > 0.0001,
    [meshPreset, incoming.height.canvas, effectiveDisplacementAmount],
  );
  const roughnessConnected = !!incoming.roughness.canvas;
  const effectiveTessellationQuality: TessellationQuality = forceHighPlaneTessellation ? 'high' : tessellationQuality;
  const planeSegments = useMemo(
    () => planeSegmentsForQuality(effectiveTessellationQuality),
    [effectiveTessellationQuality],
  );

  useEffect(() => {
    writeStoredValue('wireframe', wireframeEnabled ? '1' : '0');
    writeStoredValue('inspectMode', inspectMode ? '1' : '0');
    writeStoredValue('inspectStrength', String(inspectStrength));
  }, [wireframeEnabled, inspectMode, inspectStrength]);

  useEffect(() => {
    const host = hostRef.current;
    const cv = canvasRef.current;
    if (!host || !cv) return;
    let disposed = false;

    try {
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        const message = 'Babylon WebGL context lost';
        setError(message);
        onGpuFailure?.('babylon', message);
      };
      const handleContextRestored = () => {
        setError(null);
      };
      cv.addEventListener('webglcontextlost', handleContextLost, { passive: false });
      cv.addEventListener('webglcontextrestored', handleContextRestored);
      const engine = new Engine(cv, false, { preserveDrawingBuffer: true, stencil: true, premultipliedAlpha: true }, true);
      const scene = new Scene(engine);
      scene.clearColor = new Color4(VIEWPORT_BACKGROUND.r, VIEWPORT_BACKGROUND.g, VIEWPORT_BACKGROUND.b, 1);

      const initialCameraPose = clampPreview3DCameraPose(cameraPose);
      const camera = new ArcRotateCamera('camera', initialCameraPose.alpha, initialCameraPose.beta, initialCameraPose.radius, new Vector3(initialCameraPose.target.x, initialCameraPose.target.y, initialCameraPose.target.z), scene);
      camera.lowerRadiusLimit = 0.6;
      camera.upperRadiusLimit = 8;
      applyCameraSpeed(camera);
      applyCameraAutoRotate(camera, autoRotate, autoRotateSpeed);
      camera.attachControl(cv, true);

      const hemi = new HemisphericLight('hemi', new Vector3(0, 1, 0), scene);
      hemi.diffuse = new Color3(0.82, 0.9, 1.0);
      hemi.groundColor = new Color3(0.18, 0.2, 0.25);
      const sun = new DirectionalLight('sun', new Vector3(-0.4, -1, 0.3), scene);
      sun.position = new Vector3(3, 4, -2);
      // Fill + rim lights improve default material readability and roughness perception.
      const fill = new DirectionalLight('fill', new Vector3(0.52, -0.45, -0.68), scene);
      fill.position = new Vector3(-2.2, 1.8, 1.6);
      const rim = new DirectionalLight('rim', new Vector3(-0.65, -0.32, 0.72), scene);
      rim.position = new Vector3(2.0, 2.1, -1.8);

      const plane = MeshBuilder.CreateGround('mesh_plane', { width: 2.2, height: 2.2, subdivisions: planeSegments, updatable: true }, scene);
      const sphere = MeshBuilder.CreateSphere('mesh_sphere', { diameter: 1.7, segments: 72, updatable: true }, scene);
      const cube = MeshBuilder.CreateBox('mesh_cube', { size: 1.4, updatable: true }, scene);
      const cylinder = MeshBuilder.CreateCylinder('mesh_cylinder', { height: 1.55, diameter: 1.1, tessellation: 96, subdivisions: 18, updatable: true }, scene);
      sphere.position.y = 0.85;
      cube.position.y = 0.7;
      cylinder.position.y = 0.78;

      const pbr = new PBRMaterial('pbr', scene);
      pbr.roughness = 1;
      pbr.metallic = 1;
      pbr.albedoColor = Color3.White();

      const flat = new StandardMaterial('flat', scene);
      flat.disableLighting = true;
      flat.diffuseColor = Color3.White();
      flat.emissiveColor = Color3.White();
      flat.specularColor = Color3.Black();
      const environmentHelper = new EnvironmentHelper(
        {
          createGround: false,
          createSkybox: false,
          setupImageProcessing: false,
        },
        scene,
      );
      environmentHelper.onErrorObservable.add((info) => {
        const msg = typeof info?.message === 'string' ? info.message : '';
        if (msg) setError(`Environment load warning: ${msg}`);
      });
      applyImageProcessing(scene, toneMap, exposure, contrast);
      const pipeline = new DefaultRenderingPipeline('ag_babylon_pipeline', true, scene, [camera], true);

      const fallbacks: Record<Channel, DynamicTexture> = {
        baseColor: makeSolidTexture(scene, '#8f97a6', 'baseColor'),
        normal: makeSolidTexture(scene, '#8080ff', 'normal'),
        roughness: makeSolidTexture(scene, '#bebebe', 'roughness'),
        metallic: makeSolidTexture(scene, '#000000', 'metallic'),
        ao: makeSolidTexture(scene, '#ffffff', 'ao'),
        height: makeSolidTexture(scene, '#7f7f7f', 'height'),
      };
      const heightReadbackCanvas = document.createElement('canvas');
      const heightReadbackCtx = heightReadbackCanvas.getContext('2d', { willReadFrequently: true });
      const mrScratchCanvas = document.createElement('canvas');
      const mrScratchCtx = mrScratchCanvas.getContext('2d', { willReadFrequently: true });

      const nextState: BabylonState = {
        engine,
        scene,
        camera,
        meshes: { plane, sphere, cube, cylinder },
        pbr,
        flat,
        hemi,
        sun,
        fill,
        rim,
        fallbacks,
        dynamic: {},
        pipeline,
        environmentHelper,
        environmentTexture: null,
        skybox: null,
        shadowGenerator: null,
        activePlaneSegments: planeSegments,
        baseGeometry: {
          plane: { positions: null, normals: null, uvs: null, indices: null },
          sphere: { positions: null, normals: null, uvs: null, indices: null },
          cube: { positions: null, normals: null, uvs: null, indices: null },
          cylinder: { positions: null, normals: null, uvs: null, indices: null },
        },
        heightReadbackCanvas,
        heightReadbackCtx,
        packedMetalRough: null,
        mrScratchCanvas,
        mrScratchCtx,
      };
      (Object.keys(fallbacks) as Channel[]).forEach((ch) => configureDynamicTexture(fallbacks[ch], ch));
      applyPipelineSettings(nextState, { msaaSamples });
      cacheAllMeshBaseGeometry(nextState);
      applyDisplacementAllMeshes(nextState, incoming.height.canvas, displacementAmount);
      selectActiveMesh(nextState, meshPreset);
      applySharedCameraPose(nextState, initialCameraPose);
      applySharedLighting(nextState, {
        lightRotation,
        lightIntensity,
        lightColor,
        lightTemperature,
        ambientTint,
        ambientIntensity,
        iblIntensity,
      });
      applyLitMaterial(nextState);

      stateRef.current = nextState;
      cameraPoseSyncRef.current = readSharedCameraPose(nextState);
      sceneDirtyRef.current = true;
      lastRenderAtRef.current = 0;
      setError(null);
      let lastCameraSyncAt = 0;
      let lastStatsUpdateAt = 0;
      let lastPerfEmitAt = 0;
      let lastInteractionAt = performance.now();
      let animationFrame = 0;
      let frameId = 0;
      let overBudgetFrames = 0;
      const frameTimes = new Float32Array(PERF_RING_SIZE);
      let frameHead = 0;
      let frameCount = 0;
      let requestNextFrame = () => {};
      const markSceneDirty = () => {
        lastInteractionAt = performance.now();
        sceneDirtyRef.current = true;
        requestNextFrame();
      };
      wakeRendererRef.current = markSceneDirty;
      const onPointerWake = () => markSceneDirty();
      const onPointerMoveWake = (event: PointerEvent) => {
        if (event.buttons !== 0) markSceneDirty();
      };
      const onWheelWake = () => markSceneDirty();
      const onKeyWake = () => markSceneDirty();
      cv.addEventListener('pointerdown', onPointerWake);
      cv.addEventListener('pointermove', onPointerMoveWake);
      cv.addEventListener('wheel', onWheelWake, { passive: true });
      window.addEventListener('keydown', onKeyWake, true);
      camera.onViewMatrixChangedObservable.add(() => {
        if (disposed) return;
        const now = performance.now();
        lastInteractionAt = now;
        sceneDirtyRef.current = true;
        if (now - lastCameraSyncAt < 80) return;
        lastCameraSyncAt = now;
        const nextPose = readSharedCameraPose(nextState);
        if (preview3DCameraPoseEquals(nextPose, cameraPoseSyncRef.current, 1e-3)) return;
        cameraPoseSyncRef.current = nextPose;
        updateSceneState((prev) => (
          preview3DCameraPoseEquals(prev.cameraPose, nextPose, 1e-3)
            ? prev
            : { ...prev, cameraPose: nextPose }
        ));
      });

      const resize = () => {
        engine.resize();
        markSceneDirty();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      requestNextFrame = () => {
        if (animationFrame === 0 && !disposed) {
          animationFrame = window.requestAnimationFrame(renderFrame);
        }
      };
      const renderFrame = () => {
        animationFrame = 0;
        if (disposed) return;
        const now = performance.now();
        const cameraInMotion =
          Math.abs(camera.inertialAlphaOffset) > 1e-4
          || Math.abs(camera.inertialBetaOffset) > 1e-4
          || Math.abs(camera.inertialRadiusOffset) > 1e-4
          || Math.abs((camera as ArcRotateCamera & { inertialPanningX?: number }).inertialPanningX ?? 0) > 1e-4
          || Math.abs((camera as ArcRotateCamera & { inertialPanningY?: number }).inertialPanningY ?? 0) > 1e-4;
        const hasAutoRotate = camera.useAutoRotationBehavior && autoRotateSpeed > 0;
        const msSinceLastRender = now - lastRenderAtRef.current;
        const shouldRender =
          sceneDirtyRef.current
          || cameraInMotion
          || hasAutoRotate
          || msSinceLastRender >= FORCE_RENDER_INTERVAL_MS;

        if (!shouldRender) {
          if (now - lastInteractionAt >= SLEEP_AFTER_IDLE_MS) {
            return;
          }
          requestNextFrame();
          return;
        }
        if (!sceneDirtyRef.current && !cameraInMotion && !hasAutoRotate && msSinceLastRender < IDLE_RENDER_INTERVAL_MS) {
          if (now - lastInteractionAt >= SLEEP_AFTER_IDLE_MS) {
            return;
          }
          requestNextFrame();
          return;
        }

        const frameStart = performance.now();
        scene.render();
        const frameMs = performance.now() - frameStart;
        lastRenderAtRef.current = performance.now();
        sceneDirtyRef.current = cameraInMotion || hasAutoRotate;
        frameTimes[frameHead] = frameMs;
        frameHead = (frameHead + 1) % PERF_RING_SIZE;
        frameCount = Math.min(PERF_RING_SIZE, frameCount + 1);
        const frameWindow = Array.from(frameTimes.slice(0, frameCount));
        const p50 = percentile(frameWindow, 0.5);
        const p95 = percentile(frameWindow, 0.95);
        const fps = p50 > 0 ? Math.round(1000 / p50) : 0;
        const requestedBudget = Math.max(8, frameBudgetMs || 22);
        const activeBudget = (cameraInMotion || hasAutoRotate) ? Math.min(requestedBudget, 16.6) : Math.min(requestedBudget, 22);
        const budget = performanceMode === 'quality_first' ? activeBudget + 2 : activeBudget;
        const budgetExceeded = frameMs > budget;
        if (budgetExceeded) overBudgetFrames += 1;
        else overBudgetFrames = 0;
        if (now - lastStatsUpdateAt > 220) {
          lastStatsUpdateAt = now;
          const samples = nextState.pipeline?.samples ?? msaaSamples;
          setRenderStats((prevStats) => (
            Math.abs(prevStats.renderMs - frameMs) < 0.01
            && prevStats.samples === samples
            && prevStats.fps === fps
            && Math.abs(prevStats.p50 - p50) < 0.01
            && Math.abs(prevStats.p95 - p95) < 0.01
              ? prevStats
              : { renderMs: frameMs, samples, fps, p50, p95 }
          ));
        }
        if (overBudgetFrames >= 30) {
          overBudgetFrames = 0;
        }
        if (now - lastPerfEmitAt >= 160) {
          lastPerfEmitAt = now;
          onPerfSample?.({
            timestamp: now,
            frame_id: frameId,
            fps,
            compile_ms: 0,
            render_ms: frameMs,
            readback_ms: 0,
            ui_commit_ms: 0,
            budget_exceeded: budgetExceeded,
            frame_budget_ms: budget,
            p50_ms: p50,
            p95_ms: p95,
          });
        }
        frameId += 1;
        if (sceneDirtyRef.current || cameraInMotion || hasAutoRotate || now - lastInteractionAt < SLEEP_AFTER_IDLE_MS) {
          requestNextFrame();
        }
      };
      requestNextFrame();

      return () => {
        disposed = true;
        ro.disconnect();
        wakeRendererRef.current = null;
        cv.removeEventListener('webglcontextlost', handleContextLost);
        cv.removeEventListener('webglcontextrestored', handleContextRestored);
        cv.removeEventListener('pointerdown', onPointerWake);
        cv.removeEventListener('pointermove', onPointerMoveWake);
        cv.removeEventListener('wheel', onWheelWake);
        window.removeEventListener('keydown', onKeyWake, true);
        if (animationFrame !== 0) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
        Object.values(nextState.dynamic).forEach((entry) => entry?.texture.dispose());
        nextState.packedMetalRough?.dispose();
        Object.values(nextState.fallbacks).forEach((tex) => tex.dispose());
        Object.values(nextState.meshes).forEach((mesh) => mesh.dispose(false, false));
        nextState.shadowGenerator?.dispose();
        nextState.skybox?.dispose(false, false);
        nextState.environmentTexture?.dispose();
        nextState.environmentHelper?.dispose();
        nextState.pipeline?.dispose();
        nextState.pbr.dispose();
        nextState.flat.dispose();
        scene.dispose();
        engine.dispose();
        stateRef.current = null;
        sceneDirtyRef.current = false;
        lastRenderAtRef.current = 0;
      };
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
      onGpuFailure?.('babylon', message, true);
      return undefined;
    }
  }, []);

  useEffect(() => {
    if (renderProfilePinned) return;
    setRenderProfile(profileForPerformanceMode(performanceMode));
  }, [performanceMode, renderProfilePinned]);

  useEffect(() => {
    if (resolutionScalePinned) return;
    setResolutionScale(resolutionScaleForBudget(performanceMode, frameBudgetMs));
  }, [performanceMode, frameBudgetMs, resolutionScalePinned]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    selectActiveMesh(state, meshPreset);
    requestRender();
  }, [meshPreset]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    const nextPose = clampPreview3DCameraPose(cameraPose);
    if (preview3DCameraPoseEquals(nextPose, cameraPoseSyncRef.current, 1e-3)) return;
    applySharedCameraPose(state, nextPose);
    cameraPoseSyncRef.current = nextPose;
    requestRender();
  }, [cameraPose]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyViewMode(state, viewMode);
    requestRender();
  }, [viewMode]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    state.pbr.invertNormalMapY = normalConvention === 'directx';
    requestRender();
  }, [normalConvention]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyCameraAutoRotate(state.camera, autoRotate, autoRotateSpeed);
    requestRender();
  }, [autoRotate, autoRotateSpeed]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applySharedLighting(state, {
      lightRotation,
      lightIntensity,
      lightColor,
      lightTemperature,
      ambientTint,
      ambientIntensity,
      iblIntensity,
    });
    requestRender();
  }, [lightRotation, lightIntensity, lightColor, lightTemperature, ambientTint, ambientIntensity, iblIntensity]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyImageProcessing(state.scene, toneMap, exposure, contrast);
    requestRender();
  }, [toneMap, exposure, contrast]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyPipelineSettings(state, { msaaSamples });
    requestRender();
  }, [msaaSamples]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyRenderProfile(state, renderProfile, resolutionScale);
    requestRender();
  }, [renderProfile, resolutionScale]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    if (environmentPreset === 'custom') {
      if (!customEnvironmentUrl) {
        setError('Load an HDR file to enable the custom environment.');
        return;
      }
      applyCustomEnvironment(state, customEnvironmentUrl, environmentRotation, setError, requestRender);
      requestRender();
      return;
    }
    applyEnvironmentPreset(state, environmentPreset, environmentRotation, setError, requestRender);
    requestRender();
  }, [environmentPreset, customEnvironmentUrl]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    updateEnvironmentRotation(state, environmentPreset, environmentRotation);
    requestRender();
  }, [environmentPreset, environmentRotation]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    rebuildPlaneMesh(state, planeSegments);
    selectActiveMesh(state, meshPreset);
    applyViewMode(state, viewMode);
    requestRender();
  }, [planeSegments, meshPreset, viewMode]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyShadowSettings(state, shadowsEnabled, shadowQuality, shadowDarkness);
    requestRender();
  }, [shadowsEnabled, shadowQuality, shadowDarkness, planeSegments]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;

    const updateChannel = (channel: Channel, canvas: HTMLCanvasElement | null, version: number) => {
      const existing = state.dynamic[channel];
      if (!canvas) {
        if (existing) {
          existing.texture.dispose();
          delete state.dynamic[channel];
        }
        return;
      }

      if (existing && existing.canvas === canvas && existing.version === version) return;

      const needsNewTexture =
        !existing
        || existing.canvas !== canvas
        || existing.texture.getSize().width !== Math.max(1, canvas.width || 1)
        || existing.texture.getSize().height !== Math.max(1, canvas.height || 1);

      if (needsNewTexture) {
        existing?.texture.dispose();
        const texture = new DynamicTexture(
          `paint_${channel}`,
          { width: Math.max(1, canvas.width || 1), height: Math.max(1, canvas.height || 1) },
          state.scene,
          false,
        );
        configureDynamicTexture(texture, channel);
        drawCanvasToTexture(texture, canvas);
        state.dynamic[channel] = { texture, canvas, version };
        return;
      }

      drawCanvasToTexture(existing.texture, canvas);
      existing.canvas = canvas;
      existing.version = version;
    };

    updateChannel('baseColor', incoming.baseColor.canvas, incoming.baseColor.version);
    updateChannel('normal', incoming.normal.canvas, incoming.normal.version);
    updateChannel('roughness', incoming.roughness.canvas, incoming.roughness.version);
    updateChannel('metallic', incoming.metallic.canvas, incoming.metallic.version);
    updateChannel('ao', incoming.ao.canvas, incoming.ao.version);
    updateChannel('height', incoming.height.canvas, incoming.height.version);

    applyViewMode(state, viewMode);
    setError(null);
    requestRender();
  }, [incoming, viewMode]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    applyDisplacementAllMeshes(state, incoming.height.canvas, effectiveDisplacementAmount);
    applyViewMode(state, viewMode);
    requestRender();
  }, [incoming.height.canvas, incoming.height.version, effectiveDisplacementAmount, planeSegments, viewMode]);

  useEffect(() => {
    const state = stateRef.current;
    if (!state) return;
    state.scene.forceWireframe = wireframeEnabled;
    requestRender();
  }, [wireframeEnabled]);

  const onHDRFileLoad = (file: File) => {
    if (!file.name.toLowerCase().endsWith('.hdr')) {
      setError('Custom environments must be provided as .hdr files.');
      return;
    }
    const nextUrl = URL.createObjectURL(file);
    if (sceneState.customEnvironmentUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(sceneState.customEnvironmentUrl);
    }
    updateSceneState((prev) => ({
      ...prev,
      customEnvironmentUrl: nextUrl,
      customEnvironmentName: file.name,
      environmentPreset: 'custom',
    }));
    setError(null);
  };

  const onScreenshot = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setError('Screenshot failed: preview canvas is not ready.');
      return;
    }
    try {
      const stamp = new Date().toISOString().replace(/[:.]/g, '-');
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `atomicgraph-babylon-preview-${stamp}.png`;
      link.click();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? `Screenshot failed: ${err.message}` : `Screenshot failed: ${String(err)}`);
    }
  };

  const resetCamera = () => {
    const state = stateRef.current;
    if (!state) return;
    state.camera.inertialAlphaOffset = 0;
    state.camera.inertialBetaOffset = 0;
    state.camera.inertialRadiusOffset = 0;
    const nextPose = defaultPreview3DCameraPose(meshPreset);
    applySharedCameraPose(state, nextPose);
    cameraPoseSyncRef.current = nextPose;
    updateSceneState((prev) => ({ ...prev, cameraPose: nextPose }));
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#17191b' }}>
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
      <div style={{ borderBottom: '1px solid #33373d', padding: '6px 8px', display: 'flex', gap: 6, alignItems: 'center', background: '#232528', flexShrink: 0, flexWrap: 'wrap' }}>
        <span style={{ color: '#f3f4f6', fontWeight: 700, fontSize: 11, marginRight: 2 }}>3D Preview</span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#b9bec6', fontSize: 10 }}>Mesh<select value={meshPreset} onChange={(e) => { const nextMesh = e.target.value as MeshPreset; const nextPose = defaultPreview3DCameraPose(nextMesh); updateSceneState((prev) => ({ ...prev, meshPreset: nextMesh, cameraPose: nextPose })); }} className="nt-select"><option value="plane">Plane</option><option value="sphere">Sphere</option><option value="cube">Cube</option><option value="cylinder">Cylinder</option></select></label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#b9bec6', fontSize: 10 }}>Mode<select value={viewMode} onChange={(e) => updateSceneState((prev) => ({ ...prev, viewMode: e.target.value as ViewMode }))} className="nt-select"><option value="lit">Lit</option><option value="baseColor">BaseColor</option><option value="normal">Normal</option><option value="roughness">Roughness</option><option value="metallic">Metallic</option><option value="ao">AO</option><option value="height">Height</option></select></label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#b9bec6', fontSize: 10 }}>Env<select value={environmentPreset} onChange={(e) => updateSceneState((prev) => ({ ...prev, environmentPreset: e.target.value as EnvironmentPreset }))} className="nt-select"><option value="studio">Studio</option><option value="city">City</option><option value="custom">{customEnvironmentName ? `Custom: ${customEnvironmentName}` : 'Custom HDR'}</option><option value="none">None</option></select></label>
        <div style={{ position: 'relative' }}>
          <button style={cameraMenuOpen ? toggleBtnStyle(true) : TOOLBAR_BTN} onClick={() => setCameraMenuOpen((v) => !v)}>Camera</button>
          {cameraMenuOpen && (
            <div style={{ position: 'absolute', top: 28, left: 0, width: 156, border: '1px solid #44484f', background: '#17191cf2', borderRadius: 8, boxShadow: '0 10px 24px #00000075', padding: 6, display: 'flex', flexDirection: 'column', gap: 2, zIndex: 20 }}>
              {([
                ['default', 'Default'],
                ['front', 'Front'],
                ['right', 'Right'],
                ['back', 'Back'],
                ['left', 'Left'],
                ['top', 'Top'],
                ['bottom', 'Bottom'],
              ] as const).map(([preset, label]) => (
                <button
                  key={preset}
                  style={{ ...TOOLBAR_BTN, width: '100%', justifyContent: 'flex-start', textAlign: 'left', background: '#24272b', borderColor: '#3f4349', color: '#d6d8dc' }}
                  onClick={() => applyCameraViewPreset(preset)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        <button style={wireframeEnabled ? toggleBtnStyle(true) : TOOLBAR_BTN} onClick={() => setWireframeEnabled((v) => !v)}>Wire</button>
        <button style={inspectMode ? toggleBtnStyle(true) : TOOLBAR_BTN} onClick={() => setInspectMode((v) => !v)}>Inspect</button>
        <button style={TOOLBAR_BTN} onClick={onScreenshot}>Shot</button>
        <button style={TOOLBAR_BTN} onClick={() => fileInputRef.current?.click()}>Load HDR...</button>
        <button style={TOOLBAR_BTN} onClick={resetCamera}>Reset Cam</button>
        <button style={settingsOpen ? toggleBtnStyle(true) : TOOLBAR_BTN} onClick={() => setSettingsOpen((v) => !v)}>Settings</button>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: '#8b9098' }}>Q x{(1 / resolutionScale).toFixed(2)}</span>
      </div>
      <div style={{ borderBottom: '1px solid #33373d', padding: '4px 8px', display: 'flex', gap: 8, background: '#1d1f23', flexShrink: 0, flexWrap: 'wrap' }}>
        {([
          ['D', 'Diffuse', connected.baseColor],
          ['N', 'Normal', connected.normal],
          ['R', 'Roughness', connected.roughness],
          ['M', 'Metallic', connected.metallic],
          ['A', 'AO', connected.ao],
          ['H', 'Height', connected.height],
        ] as const).map(([short, label, ok]) => (
          <span key={short} title={`${label}: ${ok ? 'connected' : 'fallback'}`} style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.4, color: ok ? '#a8ebc6' : '#f2c290', border: `1px solid ${ok ? '#2f5f49' : '#5f4b2f'}`, background: ok ? '#1a2a24' : '#2a2319', borderRadius: 999, padding: '1px 8px', minWidth: 18, textAlign: 'center' }}>{short}</span>
        ))}
        {!connected.normal && connected.height && <span style={{ fontSize: 9, color: '#d8d0e5', border: '1px solid #514956', background: '#262228', borderRadius: 999, padding: '1px 7px' }}>normal from height fallback</span>}
        {inspectMode && <span style={{ fontSize: 9, color: '#d8d0e5', border: '1px solid #514956', background: '#262228', borderRadius: 999, padding: '1px 7px' }}>relief x{inspectStrength.toFixed(2)}</span>}
        {customEnvironmentName && environmentPreset === 'custom' && <span style={{ fontSize: 9, color: '#d6d8dc', border: '1px solid #4a4f57', background: '#23262b', borderRadius: 999, padding: '1px 7px' }}>HDR {customEnvironmentName}</span>}
        <span style={{ marginLeft: 'auto', fontSize: 9, color: '#8b9098' }}>Env rot {Math.round(environmentRotation)}deg</span>
      </div>
      <div ref={hostRef} style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        <Preview3DAxisCompass cameraPose={cameraPose} />
        <div style={{ position: 'absolute', right: 12, bottom: 12, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, pointerEvents: 'none' }}>
          <div style={{ color: '#d6d8dc', fontSize: 10, textShadow: '0 1px 2px #000000aa' }}>FPS: {renderStats.fps}</div>
          <div style={{ color: '#d6d8dc', fontSize: 10, textShadow: '0 1px 2px #000000aa' }}>p50 / p95: {renderStats.p50.toFixed(1)} / {renderStats.p95.toFixed(1)} ms</div>
          <div style={{ color: '#d6d8dc', fontSize: 10, textShadow: '0 1px 2px #000000aa' }}>Samples: {renderStats.samples}</div>
          <div style={{ color: '#d6d8dc', fontSize: 10, textShadow: '0 1px 2px #000000aa' }}>Render: {renderStats.renderMs.toFixed(2)} ms</div>
        </div>
        {settingsOpen && (
          <div style={{ position: 'absolute', top: 8, right: 8, width: 300, maxHeight: 'calc(100% - 16px)', overflow: 'auto', border: '1px solid #44484f', background: '#17191cf2', borderRadius: 8, boxShadow: '0 10px 24px #00000075', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ color: '#f3f4f6', fontWeight: 700, fontSize: 11 }}>Material and Surface</div>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Displacement ({effectiveDisplacementAmount.toFixed(3)})<input type="range" min={0} max={0.4} step={0.005} value={displacementAmount} onChange={(e) => setDisplacementAmount(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Tessellation<select value={tessellationQuality} onChange={(e) => setTessellationQuality(e.target.value as TessellationQuality)} className="nt-select"><option value="low">Low</option><option value="med">Medium</option><option value="high">High</option></select></label>
            {meshPreset === 'plane' && <div style={{ fontSize: 9, color: '#8b9098' }}>Plane segments: {planeSegments}{forceHighPlaneTessellation ? ' (forced High by height displacement)' : ''}</div>}
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Normal Map<select value={normalConvention} onChange={(e) => setNormalConvention(e.target.value as NormalConvention)} className="nt-select"><option value="opengl">OpenGL</option><option value="directx">DirectX</option></select></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={wireframeEnabled} onChange={(e) => setWireframeEnabled(e.target.checked)} />Wireframe</label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={inspectMode} onChange={(e) => setInspectMode(e.target.checked)} />Inspect relief</label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Relief Strength ({inspectStrength.toFixed(2)}x)<input type="range" min={1} max={2.5} step={0.05} value={inspectStrength} onChange={(e) => setInspectStrength(Number(e.target.value))} disabled={!inspectMode || !connected.height} /></label>
            <div style={{ fontSize: 9, color: roughnessConnected ? '#d6d8dc' : '#8b9098' }}>Roughness source: {roughnessConnected ? 'Map' : 'Fallback'}</div>
            <div style={{ height: 1, background: '#33373d' }} />
            <div style={{ color: '#f3f4f6', fontWeight: 700, fontSize: 11 }}>Lighting and Environment</div>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Light Rotation ({Math.round(lightRotation)}deg)<input type="range" min={-180} max={180} step={1} value={lightRotation} onChange={(e) => updateSceneState((prev) => ({ ...prev, lightRotation: Number(e.target.value) }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Sun ({lightIntensity.toFixed(1)})<input type="range" min={0} max={2.5} step={0.05} value={lightIntensity} onChange={(e) => updateSceneState((prev) => ({ ...prev, lightIntensity: Number(e.target.value) }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Sun Color<input type="color" value={lightColor} onChange={(e) => updateSceneState((prev) => ({ ...prev, lightColor: e.target.value }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Sun Temp ({Math.round(lightTemperature)}K)<input type="range" min={1500} max={12000} step={50} value={lightTemperature} onChange={(e) => updateSceneState((prev) => ({ ...prev, lightTemperature: Number(e.target.value) }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Ambient Tint<input type="color" value={ambientTint} onChange={(e) => updateSceneState((prev) => ({ ...prev, ambientTint: e.target.value }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Ambient ({ambientIntensity.toFixed(1)})<input type="range" min={0} max={2.5} step={0.05} value={ambientIntensity} onChange={(e) => updateSceneState((prev) => ({ ...prev, ambientIntensity: Number(e.target.value) }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>IBL ({iblIntensity.toFixed(1)})<input type="range" min={0} max={2.5} step={0.05} value={iblIntensity} onChange={(e) => updateSceneState((prev) => ({ ...prev, iblIntensity: Number(e.target.value) }))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Env Rotation ({Math.round(environmentRotation)}deg)<input type="range" min={-180} max={180} step={1} value={environmentRotation} onChange={(e) => updateSceneState((prev) => ({ ...prev, environmentRotation: Number(e.target.value) }))} disabled={environmentPreset === 'none'} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={shadowsEnabled} onChange={(e) => updateSceneState((prev) => ({ ...prev, shadowsEnabled: e.target.checked }))} />Shadows</label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Shadow Quality<select value={shadowQuality} onChange={(e) => setShadowQuality(e.target.value as ShadowQuality)} className="nt-select" disabled={!shadowsEnabled}><option value="low">Low</option><option value="med">Medium</option><option value="high">High</option></select></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Shadow Softness ({(1 - shadowDarkness).toFixed(2)})<input type="range" min={0} max={0.75} step={0.01} value={shadowDarkness} onChange={(e) => setShadowDarkness(Number(e.target.value))} disabled={!shadowsEnabled} /></label>
            <div style={{ height: 1, background: '#33373d' }} />
            <div style={{ color: '#f3f4f6', fontWeight: 700, fontSize: 11 }}>Camera and Quality</div>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={autoRotate} onChange={(e) => updateSceneState((prev) => ({ ...prev, autoRotateSpeed: e.target.checked ? (prev.autoRotateSpeed > 0 ? prev.autoRotateSpeed : 0.12) : 0 }))} />Auto Rotate</label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Orbit Speed ({autoRotateSpeed.toFixed(2)})<input type="range" min={0.02} max={0.35} step={0.01} value={Math.max(autoRotateSpeed, 0.02)} onChange={(e) => updateSceneState((prev) => ({ ...prev, autoRotateSpeed: Number(e.target.value) }))} disabled={!autoRotate} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Render Profile<select value={renderProfile} onChange={(e) => { setRenderProfilePinned(true); setRenderProfile(e.target.value as RenderProfile); }} className="nt-select"><option value="performance">Performance</option><option value="balanced">Balanced</option><option value="quality">Quality</option></select></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Resolution ({(1 / resolutionScale).toFixed(2)}x)<input type="range" min={0.75} max={1.35} step={0.01} value={resolutionScale} onChange={(e) => { setResolutionScalePinned(true); setResolutionScale(Number(e.target.value)); }} style={RANGE_STYLE} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>MSAA<select value={msaaSamples} onChange={(e) => setMsaaSamples(Number(e.target.value) as 1 | 2 | 4)} className="nt-select"><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option></select></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', alignItems: 'center', gap: 6 }}>Tone Mapping<select value={toneMap} onChange={(e) => setToneMap(e.target.value as ToneMapPreset)} className="nt-select"><option value="aces">ACES</option><option value="neutral">Neutral</option><option value="standard">Standard</option></select></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Exposure ({exposure.toFixed(2)})<input type="range" min={0.3} max={2.2} step={0.02} value={exposure} onChange={(e) => setExposure(Number(e.target.value))} /></label>
            <label style={{ fontSize: 10, color: '#b9bec6', display: 'flex', flexDirection: 'column', gap: 3 }}>Contrast ({contrast.toFixed(2)})<input type="range" min={0.8} max={1.8} step={0.02} value={contrast} onChange={(e) => setContrast(Number(e.target.value))} /></label>
          </div>
        )}
      </div>
      {error && (
        <div style={{ borderTop: '1px solid #5f3b3b', background: '#2a1717', color: '#ffb8b8', fontSize: 10, padding: '5px 8px', lineHeight: 1.35 }}>
          Babylon preview error: {error}
        </div>
      )}
    </div>
  );
}
