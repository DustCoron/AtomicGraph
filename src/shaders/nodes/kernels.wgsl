#ifdef DEBUG
const WGSL_PLUS_DEBUG_KERNELS: bool = true;
#else
const WGSL_PLUS_DEBUG_KERNELS: bool = false;
#endif

fn ag_node_grayscale(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

fn ag_node_levels(v: f32, inLow: f32, inHigh: f32) -> f32 {
  let span = max(inHigh - inLow, 1e-5);
  return clamp((v - inLow) / span, 0.0, 1.0);
}

fn ag_node_blend(base: f32, layer: f32, opacity: f32) -> f32 {
  let t = clamp(opacity, 0.0, 1.0);
  return mix(base, layer, t);
}
