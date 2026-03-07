export type Preview3DMeshPreset = 'plane' | 'sphere' | 'cube' | 'cylinder';
export type Preview3DViewMode = 'lit' | 'baseColor' | 'normal' | 'roughness' | 'metallic' | 'ao' | 'height';
export type Preview3DEnvironmentPreset = 'studio' | 'city' | 'custom' | 'none';
export type Preview3DCameraViewPreset = 'default' | 'front' | 'right' | 'back' | 'left' | 'top' | 'bottom';

export interface Preview3DCameraTarget {
  x: number;
  y: number;
  z: number;
}

export interface Preview3DCameraPose {
  alpha: number;
  beta: number;
  radius: number;
  target: Preview3DCameraTarget;
}

export interface Preview3DSharedSceneState {
  meshPreset: Preview3DMeshPreset;
  viewMode: Preview3DViewMode;
  environmentPreset: Preview3DEnvironmentPreset;
  customEnvironmentUrl: string | null;
  customEnvironmentName: string | null;
  environmentRotation: number;
  lightRotation: number;
  lightIntensity: number;
  lightColor: string;
  lightTemperature: number;
  ambientTint: string;
  ambientIntensity: number;
  iblIntensity: number;
  shadowsEnabled: boolean;
  autoRotateSpeed: number;
  cameraPose: Preview3DCameraPose;
}

function buildDefaultCameraPose(meshPreset: Preview3DMeshPreset): Preview3DCameraPose {
  if (meshPreset === 'plane') {
    return { alpha: Math.PI / 4, beta: 1.123, radius: 2.586, target: { x: 0, y: 0, z: 0 } };
  }
  if (meshPreset === 'cylinder') {
    return { alpha: Math.PI / 4, beta: 1.095, radius: 2.292, target: { x: 0, y: 0, z: 0 } };
  }
  return { alpha: Math.PI / 4, beta: 1.055, radius: 2.437, target: { x: 0, y: 0, z: 0 } };
}

export function defaultPreview3DCameraPose(meshPreset: Preview3DMeshPreset): Preview3DCameraPose {
  return buildDefaultCameraPose(meshPreset);
}

export function preview3DCameraViewPose(
  meshPreset: Preview3DMeshPreset,
  preset: Preview3DCameraViewPreset,
  target?: Preview3DCameraTarget,
): Preview3DCameraPose {
  const base = defaultPreview3DCameraPose(meshPreset);
  const nextTarget = target ?? base.target;
  if (preset === 'default') {
    return { ...base, target: nextTarget };
  }
  if (preset === 'front') {
    return { alpha: Math.PI / 2, beta: Math.PI / 2, radius: base.radius, target: nextTarget };
  }
  if (preset === 'right') {
    return { alpha: 0, beta: Math.PI / 2, radius: base.radius, target: nextTarget };
  }
  if (preset === 'back') {
    return { alpha: -Math.PI / 2, beta: Math.PI / 2, radius: base.radius, target: nextTarget };
  }
  if (preset === 'left') {
    return { alpha: Math.PI, beta: Math.PI / 2, radius: base.radius, target: nextTarget };
  }
  if (preset === 'top') {
    return { alpha: Math.PI / 2, beta: 0.15, radius: base.radius, target: nextTarget };
  }
  return { alpha: Math.PI / 2, beta: Math.PI - 0.15, radius: base.radius, target: nextTarget };
}

export function clampPreview3DCameraPose(pose: Preview3DCameraPose): Preview3DCameraPose {
  const target = pose.target ?? { x: 0, y: 0, z: 0 };
  return {
    alpha: Number.isFinite(pose.alpha) ? pose.alpha : Math.PI / 4,
    beta: Math.max(0.15, Math.min(Math.PI - 0.15, Number.isFinite(pose.beta) ? pose.beta : 1.055)),
    radius: Math.max(0.6, Math.min(8, Number.isFinite(pose.radius) ? pose.radius : 2.437)),
    target: {
      x: Number.isFinite(target.x) ? target.x : 0,
      y: Number.isFinite(target.y) ? target.y : 0,
      z: Number.isFinite(target.z) ? target.z : 0,
    },
  };
}

export function preview3DCameraPoseEquals(a: Preview3DCameraPose, b: Preview3DCameraPose, epsilon = 1e-3): boolean {
  return (
    Math.abs(a.alpha - b.alpha) <= epsilon &&
    Math.abs(a.beta - b.beta) <= epsilon &&
    Math.abs(a.radius - b.radius) <= epsilon &&
    Math.abs(a.target.x - b.target.x) <= epsilon &&
    Math.abs(a.target.y - b.target.y) <= epsilon &&
    Math.abs(a.target.z - b.target.z) <= epsilon
  );
}

export function createDefaultPreview3DSharedSceneState(): Preview3DSharedSceneState {
  const meshPreset: Preview3DMeshPreset = 'sphere';
  return {
    meshPreset,
    viewMode: 'lit',
    environmentPreset: 'city',
    customEnvironmentUrl: null,
    customEnvironmentName: null,
    environmentRotation: 0,
    lightRotation: 30,
    lightIntensity: 1.15,
    lightColor: '#ffffff',
    lightTemperature: 6500,
    ambientTint: '#becdff',
    ambientIntensity: 0.8,
    iblIntensity: 0.8,
    shadowsEnabled: false,
    autoRotateSpeed: 0,
    cameraPose: defaultPreview3DCameraPose(meshPreset),
  };
}

export function hexToLinearRgb(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.trim().replace('#', '');
  const normalized = cleaned.length === 3
    ? cleaned.split('').map((ch) => ch + ch).join('')
    : cleaned.padEnd(6, '0').slice(0, 6);
  const value = Number.parseInt(normalized, 16);
  if (!Number.isFinite(value)) return { r: 1, g: 1, b: 1 };
  return {
    r: ((value >> 16) & 0xff) / 255,
    g: ((value >> 8) & 0xff) / 255,
    b: (value & 0xff) / 255,
  };
}

export function kelvinToLinearRgb(kelvin: number): { r: number; g: number; b: number } {
  const t = Math.max(1000, Math.min(40000, kelvin)) / 100;
  let r: number;
  let g: number;
  let b: number;
  if (t <= 66) {
    r = 255;
    g = 99.4708025861 * Math.log(t) - 161.1195681661;
    b = t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  } else {
    r = 329.698727446 * Math.pow(t - 60, -0.1332047592);
    g = 288.1221695283 * Math.pow(t - 60, -0.0755148492);
    b = 255;
  }
  return {
    r: Math.min(1, Math.max(0, r / 255)),
    g: Math.min(1, Math.max(0, g / 255)),
    b: Math.min(1, Math.max(0, b / 255)),
  };
}
