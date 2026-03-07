import React, { useMemo } from 'react';
import type { Preview3DCameraPose } from './preview3dShared';

interface Preview3DAxisCompassProps {
  cameraPose: Preview3DCameraPose;
}

type AxisEntry = {
  key: 'x' | 'y' | 'z';
  label: 'X' | 'Y' | 'Z';
  color: string;
  x: number;
  y: number;
  depth: number;
};

export function Preview3DAxisCompass({ cameraPose }: Preview3DAxisCompassProps) {
  const axes = useMemo(() => {
    const alpha = cameraPose.alpha;
    const beta = cameraPose.beta;
    const cameraPosition = {
      x: Math.sin(beta) * Math.cos(alpha),
      y: Math.cos(beta),
      z: Math.sin(beta) * Math.sin(alpha),
    };
    const forwardBase = normalize({
      x: -cameraPosition.x,
      y: -cameraPosition.y,
      z: -cameraPosition.z,
    });
    const worldUp = Math.abs(forwardBase.y) > 0.98 ? { x: 0, y: 0, z: 1 } : { x: 0, y: 1, z: 0 };
    const right = normalize(cross(forwardBase, worldUp));
    const up = normalize(cross(right, forwardBase));
    const scale = 22;
    const entries: AxisEntry[] = [
      projectAxis('x', 'X', '#ff6868', { x: 1, y: 0, z: 0 }, right, up, forwardBase, scale),
      projectAxis('y', 'Y', '#9ae34a', { x: 0, y: 1, z: 0 }, right, up, forwardBase, scale),
      projectAxis('z', 'Z', '#5a96ff', { x: 0, y: 0, z: 1 }, right, up, forwardBase, scale),
    ];
    return entries.sort((a, b) => a.depth - b.depth);
  }, [cameraPose]);

  return (
    <div
      style={{
        position: 'absolute',
        left: 10,
        bottom: 10,
        width: 78,
        height: 78,
        borderRadius: 12,
        background: 'radial-gradient(circle at 35% 30%, rgba(55,58,63,0.9), rgba(24,26,29,0.82))',
        border: '1px solid rgba(186, 191, 199, 0.16)',
        boxShadow: '0 10px 24px rgba(0,0,0,0.22)',
        pointerEvents: 'none',
        backdropFilter: 'blur(6px)',
      }}
    >
      <svg width="78" height="78" viewBox="0 0 78 78" aria-hidden="true">
        <circle cx="39" cy="39" r="27" fill="rgba(255,255,255,0.025)" />
        {axes.map((axis) => (
          <g key={axis.key}>
            <line x1="39" y1="39" x2={39 + axis.x} y2={39 - axis.y} stroke={axis.color} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx={39 + axis.x} cy={39 - axis.y} r="7" fill={axis.color} />
            <text
              x={39 + axis.x}
              y={39 - axis.y + 3}
              textAnchor="middle"
              fontSize="8"
              fontWeight="700"
              fill="#10151d"
            >
              {axis.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function projectAxis(
  key: AxisEntry['key'],
  label: AxisEntry['label'],
  color: string,
  axis: Vec3,
  right: Vec3,
  up: Vec3,
  forward: Vec3,
  scale: number,
): AxisEntry {
  return {
    key,
    label,
    color,
    x: dot(axis, right) * scale,
    y: dot(axis, up) * scale,
    depth: dot(axis, forward),
  };
}

type Vec3 = { x: number; y: number; z: number };

function dot(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function normalize(v: Vec3): Vec3 {
  const length = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / length, y: v.y / length, z: v.z / length };
}
