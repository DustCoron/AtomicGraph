export type AtomType = 'f32' | 'u32' | 'i32' | 'bool' | 'vec2f' | 'vec3f' | 'vec4f' | 'vec2i' | 'vec3i' | 'vec4i';

export interface AtomSignatureArg {
  name: string;
  type: AtomType;
}

export interface AtomSignature {
  args: AtomSignatureArg[];
  returns: AtomType;
}

export interface AtomDef {
  id: string;
  signature: AtomSignature;
  deps?: string[];
  pure?: boolean;
  wgsl: string;
}

export const ATOMS: Record<string, AtomDef> = {
  fade1: {
    id: 'fade1',
    signature: { args: [{ name: 't', type: 'f32' }], returns: 'f32' },
    pure: true,
    wgsl: `fn fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }`,
  },
  fade2: {
    id: 'fade2',
    signature: { args: [{ name: 't', type: 'vec2f' }], returns: 'vec2f' },
    deps: ['fade1'],
    pure: true,
    wgsl: `fn fade2(t: vec2f) -> vec2f { return vec2f(fade1(t.x), fade1(t.y)); }`,
  },
  hash_u32: {
    id: 'hash_u32',
    signature: { args: [{ name: 'x0', type: 'u32' }], returns: 'u32' },
    pure: true,
    wgsl: `
fn hash_u32(x0: u32) -> u32 {
  var x = x0;
  x = x ^ (x >> 16u);
  x = x * 0x7feb352du;
  x = x ^ (x >> 15u);
  x = x * 0x846ca68bu;
  x = x ^ (x >> 16u);
  return x;
}
`,
  },
  hash2i_u32: {
    id: 'hash2i_u32',
    signature: { args: [{ name: 'i', type: 'vec2i' }, { name: 'seed', type: 'u32' }], returns: 'u32' },
    deps: ['hash_u32'],
    pure: true,
    wgsl: `
fn hash2i_u32(i: vec2<i32>, seed: u32) -> u32 {
  let xi = bitcast<u32>(i.x);
  let yi = bitcast<u32>(i.y);
  var h = seed ^ 0x9e3779b9u;
  h = h ^ hash_u32(xi + 0x85ebca6bu);
  h = hash_u32(h);
  h = h ^ hash_u32(yi + 0xc2b2ae35u);
  h = hash_u32(h);
  return h;
}
`,
  },
  grad2i: {
    id: 'grad2i',
    signature: { args: [{ name: 'h', type: 'u32' }], returns: 'vec2f' },
    pure: true,
    wgsl: `
fn grad2i(h: u32) -> vec2f {
  let k = h & 7u;
  let d = 0.70710678118;
  switch (k) {
    case 0u: { return vec2f( 1.0,  0.0); }
    case 1u: { return vec2f(-1.0,  0.0); }
    case 2u: { return vec2f( 0.0,  1.0); }
    case 3u: { return vec2f( 0.0, -1.0); }
    case 4u: { return vec2f( d,    d   ); }
    case 5u: { return vec2f(-d,    d   ); }
    case 6u: { return vec2f( d,   -d   ); }
    default: { return vec2f(-d,   -d   ); }
  }
}
`,
  },
  perlin2i_raw: {
    id: 'perlin2i_raw',
    signature: { args: [{ name: 'p_in', type: 'vec2f' }, { name: 'seed', type: 'u32' }], returns: 'f32' },
    deps: ['fade2', 'grad2i', 'hash2i_u32'],
    pure: true,
    wgsl: `
fn perlin2i_raw(p_in: vec2f, seed: u32) -> f32 {
  let i0 = vec2<i32>(floor(p_in));
  let f = fract(p_in);

  let i00 = i0;
  let i10 = i0 + vec2<i32>(1, 0);
  let i01 = i0 + vec2<i32>(0, 1);
  let i11 = i0 + vec2<i32>(1, 1);

  let g00 = grad2i(hash2i_u32(i00, seed));
  let g10 = grad2i(hash2i_u32(i10, seed));
  let g01 = grad2i(hash2i_u32(i01, seed));
  let g11 = grad2i(hash2i_u32(i11, seed));

  let d00 = dot(g00, f - vec2f(0.0, 0.0));
  let d10 = dot(g10, f - vec2f(1.0, 0.0));
  let d01 = dot(g01, f - vec2f(0.0, 1.0));
  let d11 = dot(g11, f - vec2f(1.0, 1.0));

  let u = fade2(f);
  let x0 = mix(d00, d10, u.x);
  let x1 = mix(d01, d11, u.x);
  return mix(x0, x1, u.y);
}
`,
  },
  perlin2i: {
    id: 'perlin2i',
    signature: { args: [{ name: 'p_in', type: 'vec2f' }, { name: 'seed', type: 'u32' }], returns: 'f32' },
    deps: ['perlin2i_raw'],
    pure: true,
    wgsl: `fn perlin2i(p_in: vec2f, seed: u32) -> f32 { return clamp(perlin2i_raw(p_in, seed) * 0.5 + 0.5, 0.0, 1.0); }`,
  },
  perlin2i_tiled_raw: {
    id: 'perlin2i_tiled_raw',
    signature: {
      args: [
        { name: 'p_in', type: 'vec2f' },
        { name: 'period_in', type: 'f32' },
        { name: 'seed', type: 'u32' }
      ],
      returns: 'f32'
    },
    deps: ['fade2', 'grad2i', 'hash2i_u32'],
    pure: true,
    wgsl: `
fn perlin2i_tiled_raw(p_in: vec2f, period_in: f32, seed: u32) -> f32 {
  let per = max(1, i32(round(period_in)));
  let i0 = vec2<i32>(floor(p_in));
  let f = fract(p_in);

  let i00 = vec2<i32>(((i0.x % per) + per) % per, ((i0.y % per) + per) % per);
  let i10 = vec2<i32>((((i0.x + 1) % per) + per) % per, ((i0.y % per) + per) % per);
  let i01 = vec2<i32>(((i0.x % per) + per) % per, (((i0.y + 1) % per) + per) % per);
  let i11 = vec2<i32>((((i0.x + 1) % per) + per) % per, (((i0.y + 1) % per) + per) % per);

  let g00 = grad2i(hash2i_u32(i00, seed));
  let g10 = grad2i(hash2i_u32(i10, seed));
  let g01 = grad2i(hash2i_u32(i01, seed));
  let g11 = grad2i(hash2i_u32(i11, seed));

  let d00 = dot(g00, f - vec2f(0.0, 0.0));
  let d10 = dot(g10, f - vec2f(1.0, 0.0));
  let d01 = dot(g01, f - vec2f(0.0, 1.0));
  let d11 = dot(g11, f - vec2f(1.0, 1.0));

  let u = fade2(f);
  let x0 = mix(d00, d10, u.x);
  let x1 = mix(d01, d11, u.x);
  return mix(x0, x1, u.y);
}
`,
  },
  perlin2i_tiled: {
    id: 'perlin2i_tiled',
    signature: {
      args: [
        { name: 'p_in', type: 'vec2f' },
        { name: 'period_in', type: 'f32' },
        { name: 'seed', type: 'u32' }
      ],
      returns: 'f32'
    },
    deps: ['perlin2i_tiled_raw'],
    pure: true,
    wgsl: `fn perlin2i_tiled(p_in: vec2f, period_in: f32, seed: u32) -> f32 { return clamp(perlin2i_tiled_raw(p_in, period_in, seed) * 0.5 + 0.5, 0.0, 1.0); }`,
  },
  hash01_px_seed: {
    id: 'hash01_px_seed',
    signature: { args: [{ name: 'pixel_in', type: 'vec2f' }, { name: 'seed', type: 'u32' }], returns: 'f32' },
    deps: ['hash2i_u32'],
    pure: true,
    wgsl: `
fn hash01_px_seed(pixel_in: vec2f, seed: u32) -> f32 {
  let px = vec2<i32>(floor(pixel_in));
  let h = hash2i_u32(px, seed);
  return f32(h) * (1.0 / 4294967295.0);
}
`,
  },
  bnw_spots2_v2: {
    id: 'bnw_spots2_v2',
    signature: {
      args: [
        { name: 'uv_in', type: 'vec2f' },
        { name: 'pixel_in', type: 'vec2f' },
        { name: 'resolution', type: 'vec2f' },
        { name: 'scale_in', type: 'f32' },
        { name: 'tileOffset', type: 'vec2f' },
        { name: 'seed', type: 'u32' },
        { name: 'nonSquareExpansion', type: 'f32' },
        { name: 'grainAmount', type: 'f32' },
        { name: 'grainThreshold', type: 'f32' },
        { name: 'contrast', type: 'f32' },
      ],
      returns: 'f32'
    },
    deps: ['perlin2i_tiled', 'hash01_px_seed'],
    pure: true,
    wgsl: `
fn bnw_spots2_v2(
  uv_in: vec2f,
  pixel_in: vec2f,
  resolution: vec2f,
  scale_in: f32,
  tileOffset: vec2f,
  seed: u32,
  nonSquareExpansion: f32,
  grainAmount: f32,
  grainThreshold: f32,
  contrast: f32
) -> f32 {
  var uv = uv_in;
  if (nonSquareExpansion > 0.5) {
    let aspect = resolution.x / max(resolution.y, 1.0);
    uv = vec2f(uv.x * aspect, uv.y);
  }

  let scale = clamp(round(scale_in), 1.0, 32.0);
  let p = uv * scale + tileOffset;
  let per = max(scale, 1.0);

  var q = p;
  var perQ = per;
  var sum = 0.0;
  var amp = 0.5;
  var norm = 0.0;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0xa24baed4u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0x9fb21c65u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0xe2f3d8c9u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0x1b56c4e8u); norm += amp;
  var base = select(0.0, sum / norm, norm > 0.0);
  base = smoothstep(0.35, 0.75, base);
  base = clamp((base - 0.5) * max(contrast, 0.001) + 0.5, 0.0, 1.0);

  let cluster = perlin2i_tiled(p * 2.0 + vec2f(13.2, -9.7), per * 2.0, seed ^ 0x51f2e4b7u);
  let th = clamp(grainThreshold + (cluster - 0.5) * 0.12, 0.0, 1.0);
  let grain = hash01_px_seed(pixel_in, seed ^ 0xc13fa9a9u);
  let pepper = select(0.0, 1.0, grain >= th);

  return clamp(base - clamp(grainAmount, 0.0, 1.0) * pepper, 0.0, 1.0);
}
`,
  },
};

export const WGSL_BASE_HELPERS = `
fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

fn hash2(p_in: vec2f) -> f32 {
  var p = fract(p_in * vec2f(234.345, 435.678));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}
fn hash22(p: vec2f) -> vec2f {
  let d = vec2f(dot(p, vec2f(127.1, 311.7)), dot(p, vec2f(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(d) * 43758.5453123);
}

fn vnoise(p_in: vec2f, per: f32, tile: bool) -> f32 {
  let i = floor(p_in);
  let f = fract(p_in);
  let u = f * f * (3.0 - 2.0 * f);
  var i00 = i; var i10 = i + vec2f(1, 0); var i01 = i + vec2f(0, 1); var i11 = i + vec2f(1, 1);
  if (tile) { i00 = wmod2(i00, per); i10 = wmod2(i10, per); i01 = wmod2(i01, per); i11 = wmod2(i11, per); }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in; var per = per_in;
  var v: f32 = 0.0; var a: f32 = 0.5; var mx: f32 = 0.0;
  let tile = tileFlag > 0.5;
  for (var i: i32 = 0; i < 8; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in); let f = fract(p_in);
  if (tile) { n = wmod2(n, per); }
  var f1: f32 = 8.0; var f2: f32 = 8.0; var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tile) { neighbor = wmod2(neighbor, per); }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) { f2 = f1; f1 = d; id = o; } else if (d < f2) { f2 = d; }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }
fn sdBox(p: vec2f, b: vec2f) -> f32 { let d = abs(p) - b; return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0); }
fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) { p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0; }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}
fn sdPolygon(p_in: vec2f, r: f32, n: i32) -> f32 {
  let an = 3.141593 / f32(n);
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * vec2f(cos(an), sin(an));
  p.y += clamp(-p.y, 0.0, r * tan(an));
  return length(p) * sign(p.x);
}
fn sdStar(p_in: vec2f, r: f32, n: i32, m: f32) -> f32 {
  let an = 3.141593 / f32(n);
  let en = 3.141593 / m;
  let acs = vec2f(cos(an), sin(an));
  let ecs = vec2f(cos(en), sin(en));
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}
`;
