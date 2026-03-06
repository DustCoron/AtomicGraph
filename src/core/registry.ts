
import {
  LegacyToV2AdapterOptions,
  NodeDefinition,
  NodeDefinitionV2,
  ParamDefinition,
  ParamDefinitionV2,
  PortDefinition,
  PortDefinitionV2
} from './types';

const floatIn = (label: string): PortDefinition => ({ id: label, type: 'float', label });
const floatOut = (): PortDefinition => ({ id: 'out', type: 'float', label: 'Out' });
const vec2In = (label: string): PortDefinition => ({ id: label, type: 'vec2', label });
const vec3In = (label: string): PortDefinition => ({ id: label, type: 'vec3', label });
const vec3Out = (label: string = 'Out'): PortDefinition => ({ id: 'out', type: 'vec3', label });

const param = (type: ParamDefinition['type'], def: any, min?: number, max?: number, step?: number, options?: string[]): ParamDefinition => ({
  type, default: def, min, max, step, options
});

export const NODE_REGISTRY: Record<string, NodeDefinition> = {
  // GENERATORS
  constant: {
    type: 'constant', label: 'Constant', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: { value: param('float', 0.5, -1, 1, 0.01) }
  },
  time: {
    type: 'time', label: 'Time', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: { speed: param('float', 1.0, 0, 10, 0.1) }
  },
  uv: {
    type: 'uv', label: 'UV', category: 'gen',
    inputs: [], outputs: [{ id: 'out', type: 'vec2', label: 'UV' }],
    params: {}
  },
  uv_x: {
    type: 'uv_x', label: 'UV.x', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {}
  },
  uv_y: {
    type: 'uv_y', label: 'UV.y', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {}
  },
  uniform_color: {
    type: 'uniform_color', label: 'Uniform Color', category: 'gen',
    inputs: [], outputs: [{ id: 'out', type: 'vec3', label: 'Color' }],
    params: {
      r: param('float', 0.5, 0, 1, 0.01),
      g: param('float', 0.5, 0, 1, 0.01),
      b: param('float', 0.5, 0, 1, 0.01),
    }
  },
  gaussian_noise: {
    type: 'gaussian_noise', label: 'Gaussian Noise', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      scale: param('float', 12, 1, 64, 1),
      mean: param('float', 0.5, 0, 1, 0.01),
      stdDev: param('float', 0.16, 0.01, 0.5, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  tile_generator: {
    type: 'tile_generator', label: 'Tile Generator', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      scale: param('float', 6, 1, 64, 1),
      shape: param('select', 'square', undefined, undefined, undefined, ['square', 'dot']),
      radius: param('float', 0.42, 0.05, 0.49, 0.01),
      variation: param('float', 0.25, 0, 1, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  noise: {
    type: 'noise', label: 'Noise fBm v2', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      scale: param('float', 6, 0.25, 64, 0.25),
      octaves: param('float', 4, 1, 8, 1),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  perlin: {
    type: 'perlin', label: 'Perlin Noise v2', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      scale: param('float', 32, 1, 64, 1),
      disorder: param('float', 0, 0, 1, 0.01),
      disorderSpeed: param('float', 1, 0, 2, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  worley: {
    type: 'worley', label: 'Worley Noise v2', category: 'gen',
    inputs: [], outputs: [{ id: 'out', type: 'vec4', label: 'F1/F2/Edge/ID' }],
    params: {
      scale: param('float', 5, 1, 20, 0.5),
      jitter: param('float', 1, 0, 1, 0.05),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  voronoi: {
    type: 'voronoi', label: 'Voronoi', category: 'gen',
    inputs: [], outputs: [{ id: 'out', type: 'vec4', label: 'F1/F2/Edge/ID' }],
    params: {
      scale: param('float', 5, 1, 64, 0.5),
      jitter: param('float', 1, 0, 1, 0.05),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  bnw_spots2_v2: {
    type: 'bnw_spots2_v2', label: 'BnW Spots 2 (v2)', category: 'noises',
    inputs: [], outputs: [floatOut()],
    params: {
      scale: param('int', 10, 1, 32, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1),
      nonSquareExpansion: param('bool', true),
      grainAmount: param('float', 0.22, 0, 1, 0.005),
      grainThreshold: param('float', 0.86, 0, 1, 0.005),
      contrast: param('float', 1.08, 0.25, 3, 0.01),
    }
  },
  shape: {
    type: 'shape', label: 'Shape SDF', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      type: param('select', 'circle', undefined, undefined, undefined, ['circle', 'square', 'ring', 'triangle', 'polygon', 'star']),
      posX: param('float', 0.5, 0, 1, 0.01),
      posY: param('float', 0.5, 0, 1, 0.01),
      scale: param('float', 0.5, 0.05, 2, 0.01),
      rad: param('float', 0.5, 0, 1, 0.01),
      blur: param('float', 0.01, 0.001, 0.5, 0.001),
      thick: param('float', 0.05, 0.001, 0.5, 0.001)
    }
  },
  split: {
    type: 'split', label: 'Split Vec4', category: 'math',
    inputs: [{ id: 'in', type: 'vec4', label: 'In' }],
    outputs: [
      { id: 'x', type: 'float', label: 'X' },
      { id: 'y', type: 'float', label: 'Y' },
      { id: 'z', type: 'float', label: 'Z' },
      { id: 'w', type: 'float', label: 'W' },
      { id: 'xyz', type: 'vec3', label: 'XYZ' }
    ],
    params: {}
  },
  gradient: {
    type: 'gradient', label: 'Gradient', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: {
      type: param('select', 'linear', undefined, undefined, undefined, ['linear', 'radial', 'angular']),
      angle: param('float', 0, 0, 360, 1)
    }
  },
  checker: {
    type: 'checker', label: 'Checker', category: 'gen',
    inputs: [], outputs: [floatOut()],
    params: { scale: param('float', 8, 1, 32, 1) }
  },
  panner: {
    type: 'panner', label: 'Panner', category: 'filter',
    inputs: [floatIn('In')],
    outputs: [floatOut()],
    params: {
      speedX: param('float', 0.1, -2, 2, 0.01),
      speedY: param('float', 0, -2, 2, 0.01),
    }
  },
  tile_sampler: {
    type: 'tile_sampler', label: 'Tile Sampler', category: 'filter',
    inputs: [floatIn('In')],
    outputs: [floatOut()],
    params: {
      scale: param('float', 6, 1, 64, 1),
      angle: param('float', 0, -180, 180, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
    }
  },

  // MATH
  add: {
    type: 'add', label: 'Add A+B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 0, -2, 2, 0.01) }
  },
  subtract: {
    type: 'subtract', label: 'Subtract A-B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 0, -2, 2, 0.01) }
  },
  multiply: {
    type: 'multiply', label: 'Multiply A×B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 1, -4, 4, 0.01) }
  },
  divide: {
    type: 'divide', label: 'Divide A÷B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 2, 0.01, 8, 0.01) }
  },
  power: {
    type: 'power', label: 'Power A^B', category: 'math',
    inputs: [floatIn('Base'), floatIn('Exp')], outputs: [floatOut()],
    params: { exp: param('float', 2, 0.1, 8, 0.1) }
  },
  oneminus: {
    type: 'oneminus', label: '1 - x', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  abs: {
    type: 'abs', label: 'Abs |x|', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  negate: {
    type: 'negate', label: 'Negate -x', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  sqrt: {
    type: 'sqrt', label: 'Sqrt √x', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  sign: {
    type: 'sign', label: 'Sign', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  frac: {
    type: 'frac', label: 'Frac', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  floor: {
    type: 'floor', label: 'Floor', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  ceil: {
    type: 'ceil', label: 'Ceil', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  min2: {
    type: 'min2', label: 'Min A,B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 0.5, -2, 2, 0.01) }
  },
  max2: {
    type: 'max2', label: 'Max A,B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 0.5, -2, 2, 0.01) }
  },
  mod: {
    type: 'mod', label: 'Mod A%B', category: 'math',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: { b: param('float', 0.5, 0.01, 4, 0.01) }
  },
  clamp01: {
    type: 'clamp01', label: 'Clamp 0-1', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {}
  },
  clamp: {
    type: 'clamp', label: 'Clamp lo..hi', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      lo: param('float', 0, -2, 2, 0.01),
      hi: param('float', 1, -2, 2, 0.01)
    }
  },
  remap: {
    type: 'remap', label: 'Remap', category: 'math',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      inLo: param('float', 0, -2, 2, 0.01),
      inHi: param('float', 1, -2, 2, 0.01),
      outLo: param('float', 0, -2, 2, 0.01),
      outHi: param('float', 1, -2, 2, 0.01)
    }
  },

  // TRIG
  sin: {
    type: 'sin', label: 'Sin', category: 'trig',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      freq: param('float', 1, 0.1, 20, 0.1),
      phase: param('float', 0, 0, 6.28, 0.05)
    }
  },
  cos: {
    type: 'cos', label: 'Cos', category: 'trig',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      freq: param('float', 1, 0.1, 20, 0.1),
      phase: param('float', 0, 0, 6.28, 0.05)
    }
  },
  tan: {
    type: 'tan', label: 'Tan', category: 'trig',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: { freq: param('float', 1, 0.1, 10, 0.1) }
  },
  atan2node: {
    type: 'atan2node', label: 'Atan2 Y,X', category: 'trig',
    inputs: [floatIn('Y'), floatIn('X')], outputs: [floatOut()],
    params: {}
  },

  // INTERP
  lerp: {
    type: 'lerp', label: 'Lerp A,B,T', category: 'interp',
    inputs: [floatIn('A'), floatIn('B'), floatIn('T')], outputs: [floatOut()],
    params: { t: param('float', 0.5, 0, 1, 0.01) }
  },
  smoothstep: {
    type: 'smoothstep', label: 'Smoothstep', category: 'interp',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      lo: param('float', 0, -1, 2, 0.01),
      hi: param('float', 1, -1, 2, 0.01)
    }
  },
  step: {
    type: 'step', label: 'Step edge,x', category: 'interp',
    inputs: [floatIn('Edge'), floatIn('X')], outputs: [floatOut()],
    params: { edge: param('float', 0.5, -1, 2, 0.01) }
  },
  ifgt: {
    type: 'ifgt', label: 'If A>B ? C:D', category: 'interp',
    inputs: [floatIn('A'), floatIn('B'), floatIn('T'), floatIn('F')], outputs: [floatOut()],
    params: { b: param('float', 0.5, -2, 2, 0.01) }
  },

  // FILTER
  blend: {
    type: 'blend', label: 'Blend', category: 'filter',
    inputs: [floatIn('A'), floatIn('B')], outputs: [floatOut()],
    params: {
      mode: param('select', 'mix', undefined, undefined, undefined, ['mix', 'add', 'multiply', 'screen', 'overlay', 'difference', 'dodge', 'burn']),
      opacity: param('float', 0.5, 0, 1, 0.01)
    }
  },
  levels: {
    type: 'levels', label: 'Levels', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      inMin: param('float', 0, 0, 1, 0.01),
      inMax: param('float', 1, 0, 1, 0.01),
      gamma: param('float', 1, 0.1, 4, 0.05)
    }
  },
  histogram_scan: {
    type: 'histogram_scan', label: 'Histogram Scan', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      position: param('float', 0.5, 0, 1, 0.01),
      width: param('float', 0.1, 0.001, 0.5, 0.005),
      contrast: param('float', 1.0, 0.1, 8, 0.1),
    }
  },
  histogram_range: {
    type: 'histogram_range', label: 'Histogram Range', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      inMin: param('float', 0.15, 0, 1, 0.005),
      inMax: param('float', 0.85, 0, 1, 0.005),
      outMin: param('float', 0.0, 0, 1, 0.005),
      outMax: param('float', 1.0, 0, 1, 0.005),
    }
  },
  curve: {
    type: 'curve', label: 'Curve', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      lift: param('float', 0.0, -1, 1, 0.01),
      gamma: param('float', 1.0, 0.1, 4, 0.01),
      gain: param('float', 1.0, 0, 2, 0.01),
    }
  },
  warp: {
    type: 'warp', label: 'Domain Warp', category: 'filter',
    inputs: [floatIn('In'), vec2In('Warp')], outputs: [floatOut()],
    params: { strength: param('float', 0.15, 0, 0.5, 0.005) }
  },
  vector_warp: {
    type: 'vector_warp', label: 'Vector Warp Grayscale', category: 'filter',
    inputs: [floatIn('In'), vec2In('Vector')], outputs: [floatOut()],
    params: {
      intensity: param('float', 0.15, 0, 1, 0.005),
      centered: param('bool', true),
      tile: param('bool', true),
    }
  },
  directional_warp: {
    type: 'directional_warp', label: 'Directional Warp', category: 'filter',
    inputs: [floatIn('In'), floatIn('Warp')],
    outputs: [floatOut()],
    params: {
      amount: param('float', 0.15, 0, 1, 0.005),
      angle: param('float', 0, -3.141592653589793, 3.141592653589793, 0.01),
    }
  },
  disorder: {
    type: 'disorder', label: 'Disorder', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      amount: param('float', 0.08, 0, 1, 0.005),
      scale: param('float', 8, 0.25, 64, 0.25),
      speed: param('float', 0.5, 0, 8, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1)
    }
  },
  slope_blur: {
    type: 'slope_blur', label: 'Slope Blur', category: 'filter',
    inputs: [floatIn('In'), floatIn('Slope')],
    outputs: [floatOut()],
    params: {
      intensity: param('float', 2.0, 0, 16, 0.1),
      samples: param('float', 4.0, 1, 8, 1),
    }
  },
  non_uniform_blur: {
    type: 'non_uniform_blur', label: 'Non-Uniform Blur Grayscale', category: 'filter',
    inputs: [floatIn('In'), floatIn('BlurMap')],
    outputs: [floatOut()],
    params: {
      radius: param('float', 2.0, 0.0, 12.0, 0.1),
      samples: param('float', 4.0, 1, 4, 1),
    }
  },
  transform_2d: {
    type: 'transform_2d', label: 'Transformation 2D', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      offsetX: param('float', 0.0, -2, 2, 0.005),
      offsetY: param('float', 0.0, -2, 2, 0.005),
      rotation: param('float', 0.0, -180, 180, 0.5),
      scale: param('float', 1.0, 0.05, 8, 0.01),
      tile: param('bool', true),
    }
  },
  safe_transform: {
    type: 'safe_transform', label: 'Safe Transform Grayscale', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      offsetX: param('float', 0.0, -2, 2, 0.005),
      offsetY: param('float', 0.0, -2, 2, 0.005),
      scale: param('float', 1.0, 0.05, 8, 0.01),
      tile: param('bool', false),
    }
  },
  flood_fill: {
    type: 'flood_fill', label: 'Flood Fill', category: 'filter',
    inputs: [floatIn('In')],
    outputs: [floatOut()],
    params: {
      scale: param('float', 8, 1, 64, 1),
      threshold: param('float', 0.1, 0, 1, 0.01),
      seed: param('int', 1337, 0, 2147483647, 1),
      tileOffsetX: param('float', 0, -10000, 10000, 0.01),
      tileOffsetY: param('float', 0, -10000, 10000, 0.01),
      nonSquare: param('bool', true)
    }
  },
  edge_detect: {
    type: 'edge_detect', label: 'Edge Detect', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      radius: param('float', 1.0, 0.5, 4.0, 0.1),
      strength: param('float', 1.2, 0.1, 5.0, 0.1)
    }
  },
  blur: {
    type: 'blur', label: 'Blur', category: 'filter',
    inputs: [floatIn('In')],
    outputs: [floatOut()],
    params: {
      amount: param('float', 0.05, 0.001, 0.5, 0.001),
      center: param('float', 0, -1, 1, 0.01)
    }
  },
  highpass_grayscale: {
    type: 'highpass_grayscale', label: 'Highpass Grayscale', category: 'filter',
    inputs: [floatIn('In')], outputs: [floatOut()],
    params: {
      radius: param('float', 1.0, 0.5, 8.0, 0.1),
      intensity: param('float', 1.0, 0.1, 4.0, 0.05),
    }
  },
  height_to_normal: {
    type: 'height_to_normal', label: 'Height to Normal', category: 'filter',
    inputs: [floatIn('Height')],
    outputs: [vec3Out('Normal')],
    params: {
      strength: param('float', 2.0, 0.01, 4.0, 0.02),
      radius: param('float', 1.0, 0.5, 4.0, 0.1),
      flipY: param('bool', false)
    }
  },
  normal_combine: {
    type: 'normal_combine', label: 'Normal Combine', category: 'filter',
    inputs: [vec3In('Base'), vec3In('Detail')],
    outputs: [vec3Out('Normal')],
    params: {
      strength: param('float', 1.0, 0.0, 2.0, 0.01),
    }
  },
  normal_normalize: {
    type: 'normal_normalize', label: 'Normal Normalize', category: 'filter',
    inputs: [vec3In('Normal')],
    outputs: [vec3Out('Normal')],
    params: {
      flipY: param('bool', false),
    }
  },

  // UTILITY / CONTROL
  atom_input: {
    type: 'atom_input', label: 'Atom Input', category: 'util',
    inputs: [],
    outputs: [floatOut()],
    params: {}
  },
  atom_input_a: {
    type: 'atom_input_a', label: 'Atom In A', category: 'util',
    inputs: [],
    outputs: [floatOut()],
    params: {}
  },
  atom_input_b: {
    type: 'atom_input_b', label: 'Atom In B', category: 'util',
    inputs: [],
    outputs: [floatOut()],
    params: {}
  },
  atom_input_c: {
    type: 'atom_input_c', label: 'Atom In C', category: 'util',
    inputs: [],
    outputs: [floatOut()],
    params: {}
  },
  atom_input_d: {
    type: 'atom_input_d', label: 'Atom In D', category: 'util',
    inputs: [],
    outputs: [floatOut()],
    params: {}
  },

  atom_graph: {
    type: 'atom_graph', label: 'Atom Graph', category: 'util',
    inputs: [floatIn('A'), floatIn('B'), floatIn('C'), floatIn('D')],
    outputs: [floatOut()],
    params: {}
  },

  remote: {
    type: 'remote', label: 'Remote', category: 'util',
    inputs: [], outputs: [],
    params: {
      target: param('select', '', undefined, undefined, undefined, []),
      key: param('select', '', undefined, undefined, undefined, []),
      value: param('float', 0.5, 0, 1, 0.01),
      label: param('select', '', undefined, undefined, undefined, []),
    }
  },

  buffer: {
    type: 'buffer', label: 'Buffer', category: 'filter',
    inputs: [floatIn('In')],
    outputs: [
      { id: 'out', type: 'float', label: 'Out' },
      { id: 'lod', type: 'float', label: 'LOD' }
    ],
    params: {}
  },

  // OUTPUT
  output: {
    type: 'output', label: 'Output', category: 'output',
    inputs: [
      { id: 'baseColor', type: 'vec3', label: 'BaseColor' },
      { id: 'roughness', type: 'float', label: 'Roughness' },
      { id: 'normal', type: 'vec3', label: 'Normal' },
      { id: 'height', type: 'float', label: 'Height' },
      { id: 'metallic', type: 'float', label: 'Metallic' }
    ],
    outputs: [],
    params: {}
  },
  output_baseColor: {
    type: 'output_baseColor', label: 'Output BaseColor', category: 'output',
    inputs: [{ id: 'baseColor', type: 'vec3', label: 'BaseColor' }],
    outputs: [],
    params: {}
  },
  output_roughness: {
    type: 'output_roughness', label: 'Output Roughness', category: 'output',
    inputs: [{ id: 'roughness', type: 'float', label: 'Roughness' }],
    outputs: [],
    params: {}
  },
  output_normal: {
    type: 'output_normal', label: 'Output Normal', category: 'output',
    inputs: [{ id: 'normal', type: 'vec3', label: 'Normal' }],
    outputs: [],
    params: {}
  },
  output_height: {
    type: 'output_height', label: 'Output Height', category: 'output',
    inputs: [{ id: 'height', type: 'float', label: 'Height' }],
    outputs: [],
    params: {}
  },
  output_metallic: {
    type: 'output_metallic', label: 'Output Metallic', category: 'output',
    inputs: [{ id: 'metallic', type: 'float', label: 'Metallic' }],
    outputs: [],
    params: {}
  }
};

const ADAPTER_DEFAULTS: Required<LegacyToV2AdapterOptions> = {
  defaultInputMaxConnections: 1
};

const toParamV2 = (paramDef: ParamDefinition): ParamDefinitionV2 => ({
  type: paramDef.type === 'select' ? 'enum' : paramDef.type,
  default: paramDef.default,
  ui: {
    min: paramDef.min,
    max: paramDef.max,
    step: paramDef.step,
    dropdown: paramDef.options?.map((value) => ({ label: value, value }))
  }
});

const toPortV2 = (port: PortDefinition, isInput: boolean, opts: Required<LegacyToV2AdapterOptions>): PortDefinitionV2 => ({
  ...port,
  constraints: {
    maxConnections: isInput ? opts.defaultInputMaxConnections : Number.POSITIVE_INFINITY,
    allowedTypes: [port.type]
  }
});

export const adaptNodeDefinitionToV2 = (
  def: NodeDefinition,
  opts?: LegacyToV2AdapterOptions
): NodeDefinitionV2 => {
  const merged = { ...ADAPTER_DEFAULTS, ...(opts || {}) };
  return {
    id: def.type,
    label: def.label,
    category: def.category,
    inputs: def.inputs.map((p) => toPortV2(p, true, merged)),
    outputs: def.outputs.map((p) => toPortV2(p, false, merged)),
    params: Object.fromEntries(Object.entries(def.params).map(([key, value]) => [key, toParamV2(value)])),
    constraints: {
      singleConnectionInputs: true
    }
  };
};

export const NODE_REGISTRY_V2: Record<string, NodeDefinitionV2> = Object.fromEntries(
  Object.entries(NODE_REGISTRY).map(([key, value]) => [key, adaptNodeDefinitionToV2(value)])
);

if (NODE_REGISTRY_V2.output) {
  NODE_REGISTRY_V2.output.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float', 'vec3', 'vec4'] };
  NODE_REGISTRY_V2.output.inputs[1].constraints = { maxConnections: 1, allowedTypes: ['float'] };
  NODE_REGISTRY_V2.output.inputs[2].constraints = { maxConnections: 1, allowedTypes: ['float', 'vec3', 'vec4'] };
  NODE_REGISTRY_V2.output.inputs[3].constraints = { maxConnections: 1, allowedTypes: ['float'] };
  NODE_REGISTRY_V2.output.inputs[4].constraints = { maxConnections: 1, allowedTypes: ['float'] };
}
if (NODE_REGISTRY_V2.output_baseColor) {
  NODE_REGISTRY_V2.output_baseColor.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float', 'vec3', 'vec4'] };
}
if (NODE_REGISTRY_V2.output_roughness) {
  NODE_REGISTRY_V2.output_roughness.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float'] };
}
if (NODE_REGISTRY_V2.output_normal) {
  NODE_REGISTRY_V2.output_normal.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float', 'vec3', 'vec4'] };
}
if (NODE_REGISTRY_V2.output_height) {
  NODE_REGISTRY_V2.output_height.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float'] };
}
if (NODE_REGISTRY_V2.output_metallic) {
  NODE_REGISTRY_V2.output_metallic.inputs[0].constraints = { maxConnections: 1, allowedTypes: ['float'] };
}

export const getNodeDefinitionV2 = (type: string): NodeDefinitionV2 | undefined => NODE_REGISTRY_V2[type];

export const CATEGORIES = {
  gen: { label: 'GEN', color: '#1e3a5f' },
  noises: { label: 'NOISES', color: '#155e75' },
  math: { label: 'MATH', color: '#312e81' },
  trig: { label: 'TRIG', color: '#4c1d95' },
  interp: { label: 'INTERP', color: '#14532d' },
  filter: { label: 'FILTER', color: '#713f12' },
  util: { label: 'UTIL', color: '#0e4d6b' },
  output: { label: 'OUT', color: '#7f1d1d' }
};
