#ifdef DEBUG
const WGSL_PLUS_DEBUG_ATOMS: bool = true;
#else
const WGSL_PLUS_DEBUG_ATOMS: bool = false;
#endif

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }
