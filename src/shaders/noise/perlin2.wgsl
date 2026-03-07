#ifdef LQ
#define FBM_MAX_OCTAVES 5
#else
#define FBM_MAX_OCTAVES 8
#endif

#ifdef TILEABLE
#define FORCE_TILE true
#else
#define FORCE_TILE false
#endif

#ifdef DEBUG
const WGSL_PLUS_DEBUG_NOISE: bool = true;
#else
const WGSL_PLUS_DEBUG_NOISE: bool = false;
#endif

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
  let tileMode = tile || FORCE_TILE;
  var i00 = i;
  var i10 = i + vec2f(1.0, 0.0);
  var i01 = i + vec2f(0.0, 1.0);
  var i11 = i + vec2f(1.0, 1.0);
  if (tileMode) {
    i00 = wmod2(i00, per);
    i10 = wmod2(i10, per);
    i01 = wmod2(i01, per);
    i11 = wmod2(i11, per);
  }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in;
  var per = per_in;
  var v: f32 = 0.0;
  var a: f32 = 0.5;
  var mx: f32 = 0.0;
  let tile = (tileFlag > 0.5) || FORCE_TILE;
  for (var i: i32 = 0; i < FBM_MAX_OCTAVES; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0;
    per *= 2.0;
    a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in);
  let f = fract(p_in);
  let tileMode = tile || FORCE_TILE;
  if (tileMode) {
    n = wmod2(n, per);
  }
  var f1: f32 = 8.0;
  var f2: f32 = 8.0;
  var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tileMode) {
        neighbor = wmod2(neighbor, per);
      }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) {
        f2 = f1;
        f1 = d;
        id = o;
      } else if (d < f2) {
        f2 = d;
      }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}
