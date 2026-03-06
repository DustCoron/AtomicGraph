(function(){"use strict";const $=g=>({id:g,type:"float",label:g}),h=()=>({id:"out",type:"float",label:"Out"}),se=g=>({id:g,type:"vec2",label:g}),H=g=>({id:g,type:"vec3",label:g}),Q=(g="Out")=>({id:"out",type:"vec3",label:g}),a=(g,e,o,l,m,d)=>({type:g,default:e,min:o,max:l,step:m,options:d}),V={constant:{type:"constant",label:"Constant",category:"gen",inputs:[],outputs:[h()],params:{value:a("float",.5,-1,1,.01)}},time:{type:"time",label:"Time",category:"gen",inputs:[],outputs:[h()],params:{speed:a("float",1,0,10,.1)}},uv:{type:"uv",label:"UV",category:"gen",inputs:[],outputs:[{id:"out",type:"vec2",label:"UV"}],params:{}},uv_x:{type:"uv_x",label:"UV.x",category:"gen",inputs:[],outputs:[h()],params:{}},uv_y:{type:"uv_y",label:"UV.y",category:"gen",inputs:[],outputs:[h()],params:{}},uniform_color:{type:"uniform_color",label:"Uniform Color",category:"gen",inputs:[],outputs:[{id:"out",type:"vec3",label:"Color"}],params:{r:a("float",.5,0,1,.01),g:a("float",.5,0,1,.01),b:a("float",.5,0,1,.01)}},gaussian_noise:{type:"gaussian_noise",label:"Gaussian Noise",category:"gen",inputs:[],outputs:[h()],params:{scale:a("float",12,1,64,1),mean:a("float",.5,0,1,.01),stdDev:a("float",.16,.01,.5,.01),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},tile_generator:{type:"tile_generator",label:"Tile Generator",category:"gen",inputs:[],outputs:[h()],params:{scale:a("float",6,1,64,1),shape:a("select","square",void 0,void 0,void 0,["square","dot"]),radius:a("float",.42,.05,.49,.01),variation:a("float",.25,0,1,.01),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},noise:{type:"noise",label:"Noise fBm v2",category:"gen",inputs:[],outputs:[h()],params:{scale:a("float",6,.25,64,.25),octaves:a("float",4,1,8,1),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},perlin:{type:"perlin",label:"Perlin Noise v2",category:"gen",inputs:[],outputs:[h()],params:{scale:a("float",32,1,64,1),disorder:a("float",0,0,1,.01),disorderSpeed:a("float",1,0,2,.01),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},worley:{type:"worley",label:"Worley Noise v2",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:a("float",5,1,20,.5),jitter:a("float",1,0,1,.05),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},voronoi:{type:"voronoi",label:"Voronoi",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:a("float",5,1,64,.5),jitter:a("float",1,0,1,.05),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},bnw_spots2_v2:{type:"bnw_spots2_v2",label:"BnW Spots 2 (v2)",category:"noises",inputs:[],outputs:[h()],params:{scale:a("int",10,1,32,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),seed:a("int",1337,0,2147483647,1),nonSquareExpansion:a("bool",!0),grainAmount:a("float",.22,0,1,.005),grainThreshold:a("float",.86,0,1,.005),contrast:a("float",1.08,.25,3,.01)}},shape:{type:"shape",label:"Shape SDF",category:"gen",inputs:[],outputs:[h()],params:{type:a("select","circle",void 0,void 0,void 0,["circle","square","ring","triangle","polygon","star"]),posX:a("float",.5,0,1,.01),posY:a("float",.5,0,1,.01),scale:a("float",.5,.05,2,.01),rad:a("float",.5,0,1,.01),blur:a("float",.01,.001,.5,.001),thick:a("float",.05,.001,.5,.001)}},split:{type:"split",label:"Split Vec4",category:"math",inputs:[{id:"in",type:"vec4",label:"In"}],outputs:[{id:"x",type:"float",label:"X"},{id:"y",type:"float",label:"Y"},{id:"z",type:"float",label:"Z"},{id:"w",type:"float",label:"W"},{id:"xyz",type:"vec3",label:"XYZ"}],params:{}},gradient:{type:"gradient",label:"Gradient",category:"gen",inputs:[],outputs:[h()],params:{type:a("select","linear",void 0,void 0,void 0,["linear","radial","angular"]),angle:a("float",0,0,360,1)}},checker:{type:"checker",label:"Checker",category:"gen",inputs:[],outputs:[h()],params:{scale:a("float",8,1,32,1)}},panner:{type:"panner",label:"Panner",category:"filter",inputs:[$("In")],outputs:[h()],params:{speedX:a("float",.1,-2,2,.01),speedY:a("float",0,-2,2,.01)}},tile_sampler:{type:"tile_sampler",label:"Tile Sampler",category:"filter",inputs:[$("In")],outputs:[h()],params:{scale:a("float",6,1,64,1),angle:a("float",0,-180,180,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01)}},add:{type:"add",label:"Add A+B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",0,-2,2,.01)}},subtract:{type:"subtract",label:"Subtract A-B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",0,-2,2,.01)}},multiply:{type:"multiply",label:"Multiply A×B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",1,-4,4,.01)}},divide:{type:"divide",label:"Divide A÷B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",2,.01,8,.01)}},power:{type:"power",label:"Power A^B",category:"math",inputs:[$("Base"),$("Exp")],outputs:[h()],params:{exp:a("float",2,.1,8,.1)}},oneminus:{type:"oneminus",label:"1 - x",category:"math",inputs:[$("In")],outputs:[h()],params:{}},abs:{type:"abs",label:"Abs |x|",category:"math",inputs:[$("In")],outputs:[h()],params:{}},negate:{type:"negate",label:"Negate -x",category:"math",inputs:[$("In")],outputs:[h()],params:{}},sqrt:{type:"sqrt",label:"Sqrt √x",category:"math",inputs:[$("In")],outputs:[h()],params:{}},sign:{type:"sign",label:"Sign",category:"math",inputs:[$("In")],outputs:[h()],params:{}},frac:{type:"frac",label:"Frac",category:"math",inputs:[$("In")],outputs:[h()],params:{}},floor:{type:"floor",label:"Floor",category:"math",inputs:[$("In")],outputs:[h()],params:{}},ceil:{type:"ceil",label:"Ceil",category:"math",inputs:[$("In")],outputs:[h()],params:{}},min2:{type:"min2",label:"Min A,B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",.5,-2,2,.01)}},max2:{type:"max2",label:"Max A,B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",.5,-2,2,.01)}},mod:{type:"mod",label:"Mod A%B",category:"math",inputs:[$("A"),$("B")],outputs:[h()],params:{b:a("float",.5,.01,4,.01)}},clamp01:{type:"clamp01",label:"Clamp 0-1",category:"math",inputs:[$("In")],outputs:[h()],params:{}},clamp:{type:"clamp",label:"Clamp lo..hi",category:"math",inputs:[$("In")],outputs:[h()],params:{lo:a("float",0,-2,2,.01),hi:a("float",1,-2,2,.01)}},remap:{type:"remap",label:"Remap",category:"math",inputs:[$("In")],outputs:[h()],params:{inLo:a("float",0,-2,2,.01),inHi:a("float",1,-2,2,.01),outLo:a("float",0,-2,2,.01),outHi:a("float",1,-2,2,.01)}},sin:{type:"sin",label:"Sin",category:"trig",inputs:[$("In")],outputs:[h()],params:{freq:a("float",1,.1,20,.1),phase:a("float",0,0,6.28,.05)}},cos:{type:"cos",label:"Cos",category:"trig",inputs:[$("In")],outputs:[h()],params:{freq:a("float",1,.1,20,.1),phase:a("float",0,0,6.28,.05)}},tan:{type:"tan",label:"Tan",category:"trig",inputs:[$("In")],outputs:[h()],params:{freq:a("float",1,.1,10,.1)}},atan2node:{type:"atan2node",label:"Atan2 Y,X",category:"trig",inputs:[$("Y"),$("X")],outputs:[h()],params:{}},lerp:{type:"lerp",label:"Lerp A,B,T",category:"interp",inputs:[$("A"),$("B"),$("T")],outputs:[h()],params:{t:a("float",.5,0,1,.01)}},smoothstep:{type:"smoothstep",label:"Smoothstep",category:"interp",inputs:[$("In")],outputs:[h()],params:{lo:a("float",0,-1,2,.01),hi:a("float",1,-1,2,.01)}},step:{type:"step",label:"Step edge,x",category:"interp",inputs:[$("Edge"),$("X")],outputs:[h()],params:{edge:a("float",.5,-1,2,.01)}},ifgt:{type:"ifgt",label:"If A>B ? C:D",category:"interp",inputs:[$("A"),$("B"),$("T"),$("F")],outputs:[h()],params:{b:a("float",.5,-2,2,.01)}},blend:{type:"blend",label:"Blend",category:"filter",inputs:[$("A"),$("B")],outputs:[h()],params:{mode:a("select","mix",void 0,void 0,void 0,["mix","add","multiply","screen","overlay","difference","dodge","burn"]),opacity:a("float",.5,0,1,.01)}},levels:{type:"levels",label:"Levels",category:"filter",inputs:[$("In")],outputs:[h()],params:{inMin:a("float",0,0,1,.01),inMax:a("float",1,0,1,.01),gamma:a("float",1,.1,4,.05)}},histogram_scan:{type:"histogram_scan",label:"Histogram Scan",category:"filter",inputs:[$("In")],outputs:[h()],params:{position:a("float",.5,0,1,.01),width:a("float",.1,.001,.5,.005),contrast:a("float",1,.1,8,.1)}},histogram_range:{type:"histogram_range",label:"Histogram Range",category:"filter",inputs:[$("In")],outputs:[h()],params:{inMin:a("float",.15,0,1,.005),inMax:a("float",.85,0,1,.005),outMin:a("float",0,0,1,.005),outMax:a("float",1,0,1,.005)}},curve:{type:"curve",label:"Curve",category:"filter",inputs:[$("In")],outputs:[h()],params:{lift:a("float",0,-1,1,.01),gamma:a("float",1,.1,4,.01),gain:a("float",1,0,2,.01)}},warp:{type:"warp",label:"Domain Warp",category:"filter",inputs:[$("In"),se("Warp")],outputs:[h()],params:{strength:a("float",.15,0,.5,.005)}},vector_warp:{type:"vector_warp",label:"Vector Warp Grayscale",category:"filter",inputs:[$("In"),se("Vector")],outputs:[h()],params:{intensity:a("float",.15,0,1,.005),centered:a("bool",!0),tile:a("bool",!0)}},directional_warp:{type:"directional_warp",label:"Directional Warp",category:"filter",inputs:[$("In"),$("Warp")],outputs:[h()],params:{amount:a("float",.15,0,1,.005),angle:a("float",0,-3.141592653589793,3.141592653589793,.01)}},disorder:{type:"disorder",label:"Disorder",category:"filter",inputs:[$("In")],outputs:[h()],params:{amount:a("float",.08,0,1,.005),scale:a("float",8,.25,64,.25),speed:a("float",.5,0,8,.01),seed:a("int",1337,0,2147483647,1)}},slope_blur:{type:"slope_blur",label:"Slope Blur",category:"filter",inputs:[$("In"),$("Slope")],outputs:[h()],params:{intensity:a("float",2,0,16,.1),samples:a("float",4,1,8,1)}},non_uniform_blur:{type:"non_uniform_blur",label:"Non-Uniform Blur Grayscale",category:"filter",inputs:[$("In"),$("BlurMap")],outputs:[h()],params:{radius:a("float",2,0,12,.1),samples:a("float",4,1,4,1)}},transform_2d:{type:"transform_2d",label:"Transformation 2D",category:"filter",inputs:[$("In")],outputs:[h()],params:{offsetX:a("float",0,-2,2,.005),offsetY:a("float",0,-2,2,.005),rotation:a("float",0,-180,180,.5),scale:a("float",1,.05,8,.01),tile:a("bool",!0)}},safe_transform:{type:"safe_transform",label:"Safe Transform Grayscale",category:"filter",inputs:[$("In")],outputs:[h()],params:{offsetX:a("float",0,-2,2,.005),offsetY:a("float",0,-2,2,.005),scale:a("float",1,.05,8,.01),tile:a("bool",!1)}},flood_fill:{type:"flood_fill",label:"Flood Fill",category:"filter",inputs:[$("In")],outputs:[h()],params:{scale:a("float",8,1,64,1),threshold:a("float",.1,0,1,.01),seed:a("int",1337,0,2147483647,1),tileOffsetX:a("float",0,-1e4,1e4,.01),tileOffsetY:a("float",0,-1e4,1e4,.01),nonSquare:a("bool",!0)}},edge_detect:{type:"edge_detect",label:"Edge Detect",category:"filter",inputs:[$("In")],outputs:[h()],params:{radius:a("float",1,.5,4,.1),strength:a("float",1.2,.1,5,.1)}},blur:{type:"blur",label:"Blur",category:"filter",inputs:[$("In")],outputs:[h()],params:{amount:a("float",.05,.001,.5,.001),center:a("float",0,-1,1,.01)}},highpass_grayscale:{type:"highpass_grayscale",label:"Highpass Grayscale",category:"filter",inputs:[$("In")],outputs:[h()],params:{radius:a("float",1,.5,8,.1),intensity:a("float",1,.1,4,.05)}},height_to_normal:{type:"height_to_normal",label:"Height to Normal",category:"filter",inputs:[$("Height")],outputs:[Q("Normal")],params:{strength:a("float",2,.01,4,.02),radius:a("float",1,.5,4,.1),flipY:a("bool",!1)}},normal_combine:{type:"normal_combine",label:"Normal Combine",category:"filter",inputs:[H("Base"),H("Detail")],outputs:[Q("Normal")],params:{strength:a("float",1,0,2,.01)}},normal_normalize:{type:"normal_normalize",label:"Normal Normalize",category:"filter",inputs:[H("Normal")],outputs:[Q("Normal")],params:{flipY:a("bool",!1)}},atom_input:{type:"atom_input",label:"Atom Input",category:"util",inputs:[],outputs:[h()],params:{}},atom_input_a:{type:"atom_input_a",label:"Atom In A",category:"util",inputs:[],outputs:[h()],params:{}},atom_input_b:{type:"atom_input_b",label:"Atom In B",category:"util",inputs:[],outputs:[h()],params:{}},atom_input_c:{type:"atom_input_c",label:"Atom In C",category:"util",inputs:[],outputs:[h()],params:{}},atom_input_d:{type:"atom_input_d",label:"Atom In D",category:"util",inputs:[],outputs:[h()],params:{}},atom_graph:{type:"atom_graph",label:"Atom Graph",category:"util",inputs:[$("A"),$("B"),$("C"),$("D")],outputs:[h()],params:{}},remote:{type:"remote",label:"Remote",category:"util",inputs:[],outputs:[],params:{target:a("select","",void 0,void 0,void 0,[]),key:a("select","",void 0,void 0,void 0,[]),value:a("float",.5,0,1,.01),label:a("select","",void 0,void 0,void 0,[])}},buffer:{type:"buffer",label:"Buffer",category:"filter",inputs:[$("In")],outputs:[{id:"out",type:"float",label:"Out"},{id:"lod",type:"float",label:"LOD"}],params:{}},output:{type:"output",label:"Output",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"},{id:"roughness",type:"float",label:"Roughness"},{id:"normal",type:"vec3",label:"Normal"},{id:"height",type:"float",label:"Height"},{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}},output_baseColor:{type:"output_baseColor",label:"Output BaseColor",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"}],outputs:[],params:{}},output_roughness:{type:"output_roughness",label:"Output Roughness",category:"output",inputs:[{id:"roughness",type:"float",label:"Roughness"}],outputs:[],params:{}},output_normal:{type:"output_normal",label:"Output Normal",category:"output",inputs:[{id:"normal",type:"vec3",label:"Normal"}],outputs:[],params:{}},output_height:{type:"output_height",label:"Output Height",category:"output",inputs:[{id:"height",type:"float",label:"Height"}],outputs:[],params:{}},output_metallic:{type:"output_metallic",label:"Output Metallic",category:"output",inputs:[{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}}},fe={defaultInputMaxConnections:1},de=g=>{var e;return{type:g.type==="select"?"enum":g.type,default:g.default,ui:{min:g.min,max:g.max,step:g.step,dropdown:(e=g.options)==null?void 0:e.map(o=>({label:o,value:o}))}}},oe=(g,e,o)=>({...g,constraints:{maxConnections:e?o.defaultInputMaxConnections:Number.POSITIVE_INFINITY,allowedTypes:[g.type]}}),me=(g,e)=>{const o={...fe};return{id:g.type,label:g.label,category:g.category,inputs:g.inputs.map(l=>oe(l,!0,o)),outputs:g.outputs.map(l=>oe(l,!1,o)),params:Object.fromEntries(Object.entries(g.params).map(([l,m])=>[l,de(m)])),constraints:{singleConnectionInputs:!0}}},M=Object.fromEntries(Object.entries(V).map(([g,e])=>[g,me(e)]));M.output&&(M.output.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},M.output.inputs[1].constraints={maxConnections:1,allowedTypes:["float"]},M.output.inputs[2].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},M.output.inputs[3].constraints={maxConnections:1,allowedTypes:["float"]},M.output.inputs[4].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_baseColor&&(M.output_baseColor.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]}),M.output_roughness&&(M.output_roughness.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_normal&&(M.output_normal.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]}),M.output_height&&(M.output_height.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_metallic&&(M.output_metallic.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});const Z=g=>g.replace(/[^a-zA-Z0-9_]/g,"_"),ve=(g,e)=>`u_n${Z(g)}_p${Z(e)}`,$e=(g,e)=>{const o=Z(g);return typeof e=="number"?`t_${o}_${e}`:`t_${o}`};class ae{constructor(){this.uniforms={},this.textures=[]}setFloat(e,o){this.uniforms[e]={value:o}}setInt(e,o){this.uniforms[e]={value:Math.trunc(o)}}setBool(e,o){this.uniforms[e]={value:o}}setVec2(e,o){this.uniforms[e]={value:o}}setVec3(e,o){this.uniforms[e]={value:o}}setVec4(e,o){this.uniforms[e]={value:o}}bindTexture(e,o,l,m){this.textures.push({portName:$e(e,l),bindingIndex:l,texture:o,sampler:m})}getUniforms(){return this.uniforms}getTextures(){return this.textures}}const re={baseColor:0,roughness:1,normal:2,height:3,metallic:4},he={baseColor:"output_baseColor",roughness:"output_roughness",normal:"output_normal",height:"output_height",metallic:"output_metallic"},ge={output_baseColor:"baseColor",output_roughness:"roughness",output_normal:"normal",output_height:"height",output_metallic:"metallic"},ye={0:"baseColor",1:"roughness",2:"normal",3:"height",4:"metallic"},ne=g=>ge[g]??null,be=(g,e)=>g.nodes.some(o=>o.type===he[e]),ie=g=>{const e={},o=new Map(g.nodes.map(d=>[d.id,d])),l={};for(const d of g.nodes){const v=ne(d.type);v&&(l[v]=!0)}for(const d of g.edges){const v=o.get(d.toId);if(!v)continue;const k=ne(v.type);k&&(e[k]=d)}const m=g.nodes.find(d=>d.type==="output");if(!m)return e;for(const d of g.edges){if(d.toId!==m.id)continue;const v=ye[d.toPort];v&&(l[v]||(e[v]=d))}return e},P={fade1:{id:"fade1",signature:{args:[{name:"t",type:"f32"}],returns:"f32"},pure:!0,wgsl:"fn fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }"},fade2:{id:"fade2",signature:{args:[{name:"t",type:"vec2f"}],returns:"vec2f"},deps:["fade1"],pure:!0,wgsl:"fn fade2(t: vec2f) -> vec2f { return vec2f(fade1(t.x), fade1(t.y)); }"},hash_u32:{id:"hash_u32",signature:{args:[{name:"x0",type:"u32"}],returns:"u32"},pure:!0,wgsl:`
fn hash_u32(x0: u32) -> u32 {
  var x = x0;
  x = x ^ (x >> 16u);
  x = x * 0x7feb352du;
  x = x ^ (x >> 15u);
  x = x * 0x846ca68bu;
  x = x ^ (x >> 16u);
  return x;
}
`},hash2i_u32:{id:"hash2i_u32",signature:{args:[{name:"i",type:"vec2i"},{name:"seed",type:"u32"}],returns:"u32"},deps:["hash_u32"],pure:!0,wgsl:`
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
`},grad2i:{id:"grad2i",signature:{args:[{name:"h",type:"u32"}],returns:"vec2f"},pure:!0,wgsl:`
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
`},perlin2i_raw:{id:"perlin2i_raw",signature:{args:[{name:"p_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["fade2","grad2i","hash2i_u32"],pure:!0,wgsl:`
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
`},perlin2i:{id:"perlin2i",signature:{args:[{name:"p_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["perlin2i_raw"],pure:!0,wgsl:"fn perlin2i(p_in: vec2f, seed: u32) -> f32 { return clamp(perlin2i_raw(p_in, seed) * 0.5 + 0.5, 0.0, 1.0); }"},perlin2i_tiled_raw:{id:"perlin2i_tiled_raw",signature:{args:[{name:"p_in",type:"vec2f"},{name:"period_in",type:"f32"},{name:"seed",type:"u32"}],returns:"f32"},deps:["fade2","grad2i","hash2i_u32"],pure:!0,wgsl:`
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
`},perlin2i_tiled:{id:"perlin2i_tiled",signature:{args:[{name:"p_in",type:"vec2f"},{name:"period_in",type:"f32"},{name:"seed",type:"u32"}],returns:"f32"},deps:["perlin2i_tiled_raw"],pure:!0,wgsl:"fn perlin2i_tiled(p_in: vec2f, period_in: f32, seed: u32) -> f32 { return clamp(perlin2i_tiled_raw(p_in, period_in, seed) * 0.5 + 0.5, 0.0, 1.0); }"},hash01_px_seed:{id:"hash01_px_seed",signature:{args:[{name:"pixel_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["hash2i_u32"],pure:!0,wgsl:`
fn hash01_px_seed(pixel_in: vec2f, seed: u32) -> f32 {
  let px = vec2<i32>(floor(pixel_in));
  let h = hash2i_u32(px, seed);
  return f32(h) * (1.0 / 4294967295.0);
}
`},bnw_spots2_v2:{id:"bnw_spots2_v2",signature:{args:[{name:"uv_in",type:"vec2f"},{name:"pixel_in",type:"vec2f"},{name:"resolution",type:"vec2f"},{name:"scale_in",type:"f32"},{name:"tileOffset",type:"vec2f"},{name:"seed",type:"u32"},{name:"nonSquareExpansion",type:"f32"},{name:"grainAmount",type:"f32"},{name:"grainThreshold",type:"f32"},{name:"contrast",type:"f32"}],returns:"f32"},deps:["perlin2i_tiled","hash01_px_seed"],pure:!0,wgsl:`
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
`}},xe=`
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
`;class _e{constructor(e){this.bindings=new ae,this.uniformBindings={},this.uniformDescriptors=new Map,this.decls=new Set,this.funcs=new Map,this.funcDefs=[],this.warnings=new Set,this.activeOutputInputPort=0,this.backend="glsl",this.uniformIndexMap=new Map,this.nextUniformIndex=0,this.funcBodies=new Map,this.funcExprs=new Map,this.atomCse=new Map,this.tempCounterByFunc=new Map,this.atomInputExprStack=[],this.graph=e,this.nodes=new Map(e.nodes.map(o=>[o.id,o])),this.edgeIndex=new Map,e.edges.forEach(o=>{this.edgeIndex.set(`${o.toId}:${o.toPort}`,o)})}compile(e){this.backend=(e==null?void 0:e.backend)||"glsl",this.bindings=new ae,this.uniformBindings={},this.uniformDescriptors.clear(),this.decls.clear(),this.funcs.clear(),this.funcDefs=[],this.warnings.clear(),this.uniformIndexMap.clear(),this.nextUniformIndex=0,this.funcBodies.clear(),this.funcExprs.clear(),this.atomCse.clear(),this.tempCounterByFunc.clear(),this.activeOutputInputPort=re[(e==null?void 0:e.outputChannel)||"baseColor"]??0;const o=(e==null?void 0:e.readable)??!0;this.registerSystemUniforms();let l=null;const m=e==null?void 0:e.nodeId,d=e==null?void 0:e.nodeOutputPort;if(m){if(!this.nodes.has(m))return this.defaultShader();l=this.genFunction(m,d??0)}else{const v=(e==null?void 0:e.outputChannel)||"baseColor",_=ie(this.graph)[v];if(_)l=this.genFunction(_.fromId,_.fromPort);else if(!be(this.graph,v)){const t=Array.from(this.nodes.values()).find(s=>s.type==="output");t&&(l=this.getOutputExpression(t.id,v))}l||(l=this.defaultOutputExpression(v))}return this.backend==="wgsl"?this.assembleWgsl(l,o):this.assembleGlsl(l,o)}assembleGlsl(e,o){const l=this.resolveAtomOrder(e.atoms??new Set),m="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",d=`
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_preview_offset;
      uniform float u_preview_zoom;
      uniform float u_preview_tile;
      ${Array.from(this.decls).join(`
`)}

      ${we}

      ${this.funcDefs.join(`
`)}

      void main() {
        vec2 rawUv = (vUv - 0.5) / max(u_preview_zoom, 0.0001) + 0.5 + u_preview_offset;
        vec2 uv = rawUv;
        if (u_preview_tile > 0.5) {
          uv = fract(uv);
        }
        ${this.glslOutputAssign(e)}
        if (u_preview_zoom < 0.95) {
          vec2 edge = min(fract(rawUv), 1.0 - fract(rawUv));
          float px = 1.5 / u_resolution.x / max(1.0 / max(u_preview_zoom, 0.0001), 1.0);
          float border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
          float onPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
          vec3 frameColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.24, 0.81, 0.56), onPrimary);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, frameColor, border * 0.7);
        }
      }
    `,v=o?this.toReadableSource(d):this.toRawSource(d),k=this.hashString(v);return{backend:"glsl",source:v,warnings:Array.from(this.warnings),hash:k,atomsUsed:l,uniforms:Array.from(this.uniformDescriptors.values()),vertex:m,fragment:v,uniformBindings:this.uniformBindings}}glslOutputAssign(e){return e.type==="float"?`float v = ${e.code}; gl_FragColor = vec4(vec3(v), 1.0);`:e.type==="vec2"?`vec2 v = ${e.code}; gl_FragColor = vec4(v, 0.0, 1.0);`:e.type==="vec3"?`vec3 v = ${e.code}; gl_FragColor = vec4(v, 1.0);`:e.type==="vec4"?`vec4 v = ${e.code}; gl_FragColor = v;`:`gl_FragColor = ${e.code};`}assembleWgsl(e,o){const l=this.buildUniformLayout(),m=e.atoms??new Set,d=this.resolveAtomOrder(m),v=this.emitAtomPrelude(m),k=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;

fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }
fn uv2(i: u32) -> vec2f { return vec2f(uf(i), uf(i + 1u)); }

struct VSOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut;
  out.pos = vec4f(p[vi], 0, 1);
  out.uv = p[vi] * 0.5 + 0.5;
  return out;
}

${xe}

${v}

${this.funcDefs.join(`
`)}

fn tileFrame(col: vec4f, rawUv: vec2f, zoom: f32, res: vec2f) -> vec4f {
  if (zoom >= 0.95) { return col; }
  let edge = min(fract(rawUv), 1.0 - fract(rawUv));
  let px = 1.5 / res.x / max(1.0 / max(zoom, 0.0001), 1.0);
  let border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
  let inPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
  let frameColor = mix(vec3f(1.0), vec3f(0.24, 0.81, 0.56), inPrimary);
  return vec4f(mix(col.rgb, frameColor, border * 0.7), col.a);
}

@fragment
fn fs_main(inp: VSOut) -> @location(0) vec4f {
  let zoom = uf(${this.sysIdx("u_preview_zoom")}u);
  let tile = uf(${this.sysIdx("u_preview_tile")}u);
  let off = uv2(${this.sysIdx("u_preview_offset")}u);
  let res = uv2(${this.sysIdx("u_resolution")}u);
  let rawUv = (inp.uv - 0.5) / max(zoom, 0.0001) + 0.5 + off;
  var uv = rawUv;
  if (tile > 0.5) { uv = fract(uv); }
  ${this.wgslOutputColor(e)}
  return tileFrame(col, rawUv, zoom, res);
}
`,_=o?this.toReadableSource(k):this.toRawSource(k),t=this.hashString(_),s=this.rebuildGlslFromState(e,o);return{backend:"wgsl",source:s.source,warnings:Array.from(this.warnings),hash:t,atomsUsed:d,uniforms:Array.from(this.uniformDescriptors.values()),vertex:s.vertex,fragment:s.fragment,uniformBindings:this.uniformBindings,wgsl:_,uniformLayout:l}}rebuildGlslFromState(e,o){const l="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",m="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{source:m,vertex:l,fragment:m}}wgslOutputReturn(e){return e.type==="float"?`let v = ${e.code}; return vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; return vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; return vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; return v;`:`return ${e.code};`}wgslOutputColor(e){return e.type==="float"?`let v = ${e.code}; let col = vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; let col = vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; let col = vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; let col = v;`:`let col = ${e.code};`}buildUniformLayout(){const e=[];for(const[o,l]of this.uniformIndexMap.entries()){const m=this.uniformDescriptors.get(o),d=(m==null?void 0:m.type)||"float",v=d==="vec4"?4:d==="vec3"?3:d==="vec2"?2:1;e.push({name:o,type:d,index:l,size:v})}return e.sort((o,l)=>o.index-l.index)}sysIdx(e){return this.uniformIndexMap.get(e)??0}registerSystemUniforms(){const e=[["u_time","float",0],["u_resolution","vec2",[1,1]],["u_preview_offset","vec2",[0,0]],["u_preview_zoom","float",1],["u_preview_tile","float",0]];for(const[o,l,m]of e)this.uniformDescriptors.set(o,{name:o,type:l,nodeId:"system",key:o,defaultValue:m}),l==="vec2"?(this.bindings.setVec2(o,m),this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=2):(this.bindings.setFloat(o,typeof m=="number"?m:0),this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=1);this.uniformBindings=this.bindings.getUniforms()}defaultOutputExpression(e){const o=this.backend==="wgsl"?"vec3f":"vec3";return e==="baseColor"?{code:`${o}(0.0)`,type:"vec3"}:e==="normal"?{code:`${o}(0.5, 0.5, 1.0)`,type:"vec3"}:{code:"0.0",type:"float"}}getOutputExpression(e,o){const l=re[o]??0,m=this.defaultOutputExpression(o);return this.getSource(e,l,"uv",m.code,m.type)}defaultShader(){if(this.backend==="wgsl"){const o=Se;return{backend:"wgsl",source:"",warnings:[],hash:this.hashString(o),atomsUsed:[],uniforms:[],vertex:"",fragment:"",uniformBindings:{},wgsl:o,uniformLayout:[]}}const e="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{backend:"glsl",source:e,warnings:[],hash:this.hashString(e),atomsUsed:[],uniforms:[],vertex:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragment:e,uniformBindings:{}}}addUniform(e,o,l){const m=ve(e,o),d=this.inferUniformType(e,o,l);if(!this.uniformDescriptors.has(m)){Array.isArray(l)?l.length===2?this.bindings.setVec2(m,[l[0],l[1]]):l.length===3?this.bindings.setVec3(m,[l[0],l[1],l[2]]):l.length>=4?this.bindings.setVec4(m,[l[0],l[1],l[2],l[3]]):this.bindings.setFloat(m,0):typeof l=="boolean"?this.bindings.setBool(m,l):d==="int"?this.bindings.setInt(m,Number(l)):this.bindings.setFloat(m,Number(l)),this.uniformBindings=this.bindings.getUniforms(),this.uniformDescriptors.set(m,{name:m,type:d,nodeId:e,key:o,defaultValue:l});const v=d==="vec4"?4:d==="vec3"?3:d==="vec2"?2:1;this.uniformIndexMap.set(m,this.nextUniformIndex),this.nextUniformIndex+=v,this.backend==="glsl"&&this.decls.add(`uniform ${this.toGLSLType(d)} ${m};`)}if(this.backend==="wgsl"){const v=this.uniformIndexMap.get(m);return d==="vec2"?`uv2(${v}u)`:`uf(${v}u)`}return m}sysRef(e){return this.backend==="wgsl"?`uf(${this.uniformIndexMap.get(e)??0}u)`:e}sysRef2(e){return this.backend==="wgsl"?`uv2(${this.uniformIndexMap.get(e)??0}u)`:e}cloneExpr(e){return{code:e.code,type:e.type,atoms:e.atoms?new Set(e.atoms):void 0}}mergeAtoms(e,o){o&&o.forEach(l=>e.add(l))}mergeExprAtoms(e,o){o!=null&&o.atoms&&o.atoms.forEach(l=>e.add(l))}toWgslDataType(e){return e==="float"?"f32":e==="vec2"?"vec2f":e==="vec3"?"vec3f":e==="vec4"?"vec4f":"f32"}callAtom(e,o,l,m){const d=P[o],v=new Set;m.forEach(B=>this.mergeExprAtoms(v,B)),v.add(o);const k=`${o}(${m.map(B=>B.code).join(", ")})`;if(!d)return this.warnings.add(`Missing atom definition: ${o}`),{code:k,type:l,atoms:v};if(!this.W||!d.pure)return{code:k,type:l,atoms:v};const _=this.atomCse.get(e)||new Map;this.atomCse.set(e,_);const t=`${o}|${l}|${m.map(B=>B.code).join("|")}`,s=_.get(t);if(s){const B=new Set;return this.mergeExprAtoms(B,s),this.mergeAtoms(B,v),{code:s.code,type:s.type,atoms:B}}const X=this.tempCounterByFunc.get(e)??0,I=`t_${X}`;this.tempCounterByFunc.set(e,X+1);const r=this.funcBodies.get(e)||[];this.funcBodies.set(e,r),r.push(`let ${I}: ${this.toWgslDataType(l)} = ${k};`);const T={code:I,type:l,atoms:v};return _.set(t,T),T}resolveAtomOrder(e){if(e.size===0)return[];const o=new Set,l=[...e];for(;l.length;){const _=l.pop();if(o.has(_))continue;o.add(_);const t=P[_];if(!t){this.warnings.add(`Unknown atom referenced: ${_}`);continue}(t.deps??[]).forEach(s=>{o.has(s)||l.push(s)})}const m=new Set,d=new Set,v=[],k=_=>{if(m.has(_))return;if(d.has(_)){this.warnings.add(`Atom dependency cycle detected at "${_}"`);return}const t=P[_];if(!t){this.warnings.add(`Missing atom during prelude emit: ${_}`);return}d.add(_),[...t.deps??[]].sort().forEach(s=>{o.has(s)&&k(s)}),d.delete(_),m.add(_),v.push(_)};return[...o].sort().forEach(_=>k(_)),v}emitAtomPrelude(e){const o=this.resolveAtomOrder(e);return o.length===0?"":o.map(l=>P[l].wgsl.trim()).join(`

`)}getSource(e,o,l="uv",m="0.0",d="float",v){const k=this.edgeIndex.get(`${e}:${o}`);if(k){const _=this.genFunction(k.fromId,k.fromPort);return{code:`${_.code.split("(uv)").join(`(${l})`)}`,type:_.type,atoms:_.atoms?new Set(_.atoms):void 0}}return{code:m,type:d,atoms:v?new Set(v):void 0}}asFloat(e,o,l){return e.type==="float"?e.code:(this.warnings.add(`Implicit cast at node ${o}: ${e.type} -> float (${l})`),e.type==="vec2"||e.type==="vec3"||e.type==="vec4"?`(${e.code}).x`:`(${e.code})`)}asVec4(e){return e.type==="vec4"?e.code:e.type==="vec3"?this.v4(`${e.code}.x, ${e.code}.y, ${e.code}.z, 1.0`):e.type==="vec2"?this.v4(`${e.code}.x, ${e.code}.y, 0.0, 1.0`):this.v4(`${e.code}, ${e.code}, ${e.code}, 1.0`)}sanitizeAtomSubgraph(e){if(!e||!Array.isArray(e.nodes)||!Array.isArray(e.edges))return null;const o=e.nodes.filter(d=>d&&typeof d.id=="string"&&typeof d.type=="string"&&typeof d.x=="number"&&typeof d.y=="number").map(d=>({id:d.id,type:d.type,x:d.x,y:d.y,params:d.params&&typeof d.params=="object"?d.params:{}}));if(o.length===0)return null;const l=new Set(o.map(d=>d.id)),m=e.edges.filter(d=>d&&typeof d.id=="string"&&typeof d.fromId=="string"&&typeof d.toId=="string"&&typeof d.fromPort=="number"&&typeof d.toPort=="number"&&l.has(d.fromId)&&l.has(d.toId));return{schemaVersion:typeof e.schemaVersion=="number"?e.schemaVersion:1,nodes:o,edges:m,resolution:typeof e.resolution=="number"?e.resolution:void 0}}atomInputPortIndex(e){return e==="atom_input"||e==="atom_input_a"?0:e==="atom_input_b"?1:e==="atom_input_c"?2:e==="atom_input_d"?3:null}compileAtomSubgraph(e,o){var p;const l=o[0]?this.cloneExpr(o[0]):{code:"0.0",type:"float"},m=this.sanitizeAtomSubgraph((p=e.params)==null?void 0:p.subgraph);if(!m)return this.cloneExpr(l);const d=`atom_${e.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,v=new Map,k=m.nodes.map(A=>{const N=`${d}_${A.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;return v.set(A.id,N),{...A,id:N,params:{...A.params||{}}}}),_=m.edges.filter(A=>v.has(A.fromId)&&v.has(A.toId)).map(A=>({...A,id:`${d}_e_${A.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,fromId:v.get(A.fromId),toId:v.get(A.toId)})),X=ie({nodes:k,edges:_}).height;if(!X)return this.warnings.add(`Atom graph ${e.id} has no connected Height output; using passthrough.`),this.cloneExpr(l);const I=new Map(k.map(A=>[A.id,A])),r=new Map;_.forEach(A=>{r.set(`${A.toId}:${A.toPort}`,A)});const T=this.nodes,B=this.edgeIndex;this.nodes=I,this.edgeIndex=r,this.atomInputExprStack.push(o.map(A=>this.cloneExpr(A)));try{return this.genFunction(X.fromId,X.fromPort)}catch(A){return this.warnings.add(`Atom graph ${e.id} compile failed: ${(A==null?void 0:A.message)||"unknown error"}`),this.cloneExpr(l)}finally{this.atomInputExprStack.pop(),this.nodes=T,this.edgeIndex=B}}get W(){return this.backend==="wgsl"}v2(e){return this.W?`vec2f(${e})`:`vec2(${e})`}v3(e){return this.W?`vec3f(${e})`:`vec3(${e})`}v4(e){return this.W?`vec4f(${e})`:`vec4(${e})`}modF(e,o){return this.W?`wmod(${e}, ${o})`:`mod(${e}, ${o})`}modV2(e,o){return this.W?`wmod2(${e}, ${o})`:`mod(${e}, ${o})`}atan2F(e,o){return this.W?`atan2(${e}, ${o})`:`atan(${e}, ${o})`}sel(e,o,l){return this.W?`select(${l}, ${o}, ${e})`:`((${e}) ? (${o}) : (${l}))`}tF(){return this.W?"f32":"float"}tI(){return this.W?"i32":"int"}tV2(){return this.W?"vec2f":"vec2"}genFunction(e,o=0){var N,ce,ue,pe;const l=this.nodes.get(e);if(!l)return{code:"0.0",type:"float"};const m=V[l.type],d=((N=m==null?void 0:m.outputs[o])==null?void 0:N.type)||"float",v=`${e}:${o}`,k=this.funcExprs.get(v);if(k)return this.cloneExpr(k);if(this.funcs.has(v))return{code:`${this.funcs.get(v)}(uv)`,type:d,atoms:void 0};const _=`fn_${e.replace(/[^a-zA-Z0-9]/g,"_")}_${o}`;if(l.type==="split"){const n=this.getSource(e,0,"uv",this.W?"vec4f(0.0)":"vec4(0.0)","vec4"),i=this.asVec4(n);if(o===4)return{code:`(${i}).xyz`,type:"vec3",atoms:n.atoms?new Set(n.atoms):void 0};const f=["x","y","z","w"][o]??"x";return{code:`(${i}).${f}`,type:"float",atoms:n.atoms?new Set(n.atoms):void 0}}this.funcs.set(v,_),this.funcBodies.set(v,[]),this.atomCse.set(v,new Map),this.tempCounterByFunc.set(v,0);const t=l.params,s=(n,i)=>this.addUniform(e,n,i),X=()=>this.sysRef("u_time"),I=new Set,r=(n,i="0.0",f="uv")=>{const c=typeof i=="string"?{code:i,type:"float"}:i,u=this.getSource(e,n,f,c.code,c.type,c.atoms);return this.mergeExprAtoms(I,u),u.type==="vec2"?(this.warnings.add(`Implicit cast at node ${l.type}: vec2 -> float (${e}, input ${n})`),`${u.code}.x`):u.type==="vec4"?(this.warnings.add(`Implicit cast at node ${l.type}: vec4 -> float (${e}, input ${n})`),`${u.code}.x`):u.code},T=(n,i="vec2(0.0)",f="uv")=>{const c=this.W?"vec2f(0.0)":i,u=this.getSource(e,n,f,c);return this.mergeExprAtoms(I,u),u.type==="float"?(this.warnings.add(`Implicit cast at node ${l.type}: float -> vec2 (${e}, input ${n})`),this.v2(u.code)):u.code},B=(n,i="vec3(0.0)",f="uv")=>{const c=this.W?"vec3f(0.0)":i,u=this.getSource(e,n,f,c,"vec3");return this.mergeExprAtoms(I,u),u.type==="float"?(this.warnings.add(`Implicit cast at node ${l.type}: float -> vec3 (${e}, input ${n})`),this.v3(`${u.code}, ${u.code}, ${u.code}`)):u.type==="vec2"?(this.warnings.add(`Implicit cast at node ${l.type}: vec2 -> vec3 (${e}, input ${n})`),this.v3(`${u.code}.x, ${u.code}.y, 0.0`)):u.type==="vec4"?(this.warnings.add(`Implicit cast at node ${l.type}: vec4 -> vec3 (${e}, input ${n})`),`(${u.code}).xyz`):u.code};let p="return 0.0;";switch(l.type){case"constant":p=`return ${s("val",t.value)};`;break;case"time":p=`return fract(${X()} * ${s("spd",t.speed)});`;break;case"uv_x":p="return uv.x;";break;case"uv_y":p="return uv.y;";break;case"uv":p="return uv;";break;case"uniform_color":{const n=s("r",t.r??.5),i=s("g",t.g??.5),f=s("b",t.b??.5);p=`return ${this.v3(`${n}, ${i}, ${f}`)};`;break}case"gaussian_noise":{const n=s("scale",t.scale??12),i=s("mean",t.mean??.5),f=s("stdDev",t.stdDev??.16),c=s("seed",t.seed??1337),u=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),b=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${c})`:`float(${c})`,w=this.sysRef2("u_resolution"),E=`${w}.x / max(${w}.y, 1.0)`,S=`(${this.sel(`${b} > 0.5`,this.v2(`uv.x * (${E}), uv.y`),"uv")} * max(${n}, 1.0) + ${this.v2(`${u}, ${y}`)})`,O=`max(hash2(floor(${S}) + ${this.v2(`${x} * 0.137, ${x} * 0.911`)}), 1e-5)`,q=`hash2(floor(${S}) + ${this.v2(`${x} * 0.271 + 19.0, ${x} * 0.613 + 73.0`)})`,Y=`(sqrt(-2.0 * log(${O})) * cos(6.28318530718 * ${q}))`;p=`return clamp(${i} + ${Y} * ${f}, 0.0, 1.0);`;break}case"tile_generator":{const n=s("scale",t.scale??6),i=s("radius",t.radius??.42),f=s("variation",t.variation??.25),c=s("seed",t.seed??1337),u=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),b=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${c})`:`float(${c})`,w=this.sysRef2("u_resolution"),E=`${w}.x / max(${w}.y, 1.0)`,S=`(${this.sel(`${b} > 0.5`,this.v2(`uv.x * (${E}), uv.y`),"uv")} * max(${n}, 1.0) + ${this.v2(`${u}, ${y}`)})`,O=`(fract(${S}) - 0.5)`,Y=`hash2(${`floor(${S})`} + ${this.v2(`${x} * 0.151, ${x} * 0.337`)})`,F=`(1.0 - smoothstep(${i}, ${i} + 0.02, max(abs(${O}.x), abs(${O}.y))))`,W=`(1.0 - smoothstep(${i}, ${i} + 0.02, length(${O})))`;p=`return clamp(${t.shape==="dot"?W:F} * mix(1.0, ${Y}, clamp(${f}, 0.0, 1.0)), 0.0, 1.0);`;break}case"noise":{const n=s("scale",t.scale??6),i=s("octaves",t.octaves??4),f=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),u=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${f})`:`float(${f})`,x=this.sysRef2("u_resolution"),w=`${x}.x / max(${x}.y, 1.0)`;p=`return fbm(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${n}, 0.00001) + ${this.v2(`${c}, ${u}`)} + ${this.v2(`${b} * 0.173, ${b} * 0.619`)})`}, ${i}, max(${n}, 0.00001), 1.0);`;break}case"perlin":{const n=s("scale",t.scale??32),i=s("disorder",t.disorder??0),f=s("disorderSpeed",t.disorderSpeed??1),c=s("seed",t.seed??1337),u=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),b=s("nonSquare",t.nonSquare??!0?1:0),x=this.sysRef2("u_resolution"),w=`${x}.x / max(${x}.y, 1.0)`,E=this.sel(`${b} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv"),C=`max(floor(${n} + 0.5), 1.0)`,S=`(${E} * ${C} + ${this.v2(`${u}, ${y}`)})`,O=this.W?`u32(max(${c}, 0.0))`:`float(${c})`,q=`(${this.sysRef("u_time")} * ${f})`;let Y=S;if(this.W){const U=this.callAtom(v,"perlin2i_raw","float",[{code:`${S} + ${this.v2("17.0, 53.0")} + ${this.v2(`${q}*0.73, -${q}*0.41`)}`,type:"vec2"},{code:`(${O}) ^ 0x68bc21ebu`,type:"float"}]),z=this.callAtom(v,"perlin2i_raw","float",[{code:`${S} + ${this.v2("113.0, 7.0")} + ${this.v2(`-${q}*0.29, ${q}*0.87`)}`,type:"vec2"},{code:`(${O}) ^ 0x02e5be93u`,type:"float"}]);this.mergeExprAtoms(I,U),this.mergeExprAtoms(I,z),Y=`(${S} + ${i} * ${this.v2(`${U.code}, ${z.code}`)})`}else{const U=this.callAtom(v,"perlin2i_raw","float",[{code:`${S} + vec2(17.0,53.0) + vec2(${q}*0.73, -${q}*0.41)`,type:"vec2"},{code:`(${O}) + 101.0`,type:"float"}]),z=this.callAtom(v,"perlin2i_raw","float",[{code:`${S} + vec2(113.0,7.0) + vec2(-${q}*0.29, ${q}*0.87)`,type:"vec2"},{code:`(${O}) + 211.0`,type:"float"}]);this.mergeExprAtoms(I,U),this.mergeExprAtoms(I,z),Y=`(${S} + ${i} * vec2(${U.code}, ${z.code}))`}let F;this.W?(F=this.callAtom(v,"perlin2i_tiled","float",[{code:Y,type:"vec2"},{code:C,type:"float"},{code:O,type:"float"}]),this.mergeExprAtoms(I,F)):F={code:`perlin2i_tiled(${Y}, ${C}, ${O})`,type:"float"};const W=this.sel(`${n} < 1.5`,"0.5",F.code);if((ce=l.params)!=null&&ce.subgraph){const U=this.compileAtomSubgraph(l,[{code:W,type:"float"}]);this.mergeExprAtoms(I,U),p=`return ${this.asFloat(U,l.type,e)};`}else p=`return ${W};`;break}case"disorder":{const n=s("amount",t.amount??.08),i=s("scale",t.scale??8),f=s("speed",t.speed??.5),c=s("seed",t.seed??1337),u=this.W?`u32(max(${c}, 0.0))`:`float(${c})`,y=`(${this.sysRef("u_time")} * ${f})`,b=`(uv * max(${i}, 0.00001))`;let x,w;this.W?(x=this.callAtom(v,"perlin2i_raw","float",[{code:`${b} + vec2f(17.0,53.0) + vec2f(${y}*0.73, -${y}*0.41)`,type:"vec2"},{code:`(${u}) ^ 0x68bc21ebu`,type:"float"}]),w=this.callAtom(v,"perlin2i_raw","float",[{code:`${b} + vec2f(113.0,7.0) + vec2f(-${y}*0.29, ${y}*0.87)`,type:"vec2"},{code:`(${u}) ^ 0x02e5be93u`,type:"float"}])):(x=this.callAtom(v,"perlin2i_raw","float",[{code:`${b} + vec2(17.0,53.0) + vec2(${y}*0.73, -${y}*0.41)`,type:"vec2"},{code:`(${u}) + 101.0`,type:"float"}]),w=this.callAtom(v,"perlin2i_raw","float",[{code:`${b} + vec2(113.0,7.0) + vec2(-${y}*0.29, ${y}*0.87)`,type:"vec2"},{code:`(${u}) + 211.0`,type:"float"}])),this.mergeExprAtoms(I,x),this.mergeExprAtoms(I,w);const E=`(uv + ${n} * ${this.v2(`${x.code}, ${w.code}`)})`,C=this.callAtom(v,"perlin2i","float",[{code:b,type:"vec2"},{code:u,type:"float"}]);this.mergeExprAtoms(I,C),p=`return ${r(0,C,E)};`;break}case"voronoi":{const n=s("scale",t.scale??5),i=s("jitter",t.jitter??1),f=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),u=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${f})`:`float(${f})`,x=this.sysRef2("u_resolution"),w=`${x}.x / max(${x}.y, 1.0)`,C=`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${n}, 0.00001) + ${this.v2(`${c}, ${u}`)} + ${this.v2(`${b} * 0.137, ${b} * 0.911`)})`,S=`max(${n}, 0.00001)`,O=`voro(${C}, ${i}, ${S}, true)`,q=this.v4("cells,V.y,V.z,V.w");this.W?p=`{ var V=${O}; let f1=V.x; let cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`:p=`{ vec4 V=${O}; float f1=V.x; float cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`;break}case"worley":{const n=s("scale",t.scale??5),i=s("jitter",t.jitter??1),f=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),u=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${f})`:`float(${f})`,x=this.sysRef2("u_resolution"),w=`${x}.x / max(${x}.y, 1.0)`;p=`return voro(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${n}, 0.00001) + ${this.v2(`${c}, ${u}`)} + ${this.v2(`${b} * 0.137, ${b} * 0.911`)})`}, ${i}, max(${n}, 0.00001), true);`;break}case"bnw_spots2_v2":{const n=s("scale",t.scale??10),i=s("tileOffsetX",t.tileOffsetX??0),f=s("tileOffsetY",t.tileOffsetY??0),c=s("seed",t.seed??1337),u=s("nonSquareExpansion",t.nonSquareExpansion??!0?1:0),y=s("grainAmount",t.grainAmount??.22),b=s("grainThreshold",t.grainThreshold??.86),x=s("contrast",t.contrast??1.08),w=this.sysRef2("u_resolution"),E=this.v2(`${i}, ${f}`);if(this.W){const C=`u32(max(${c}, 0.0))`,S=this.callAtom(v,"bnw_spots2_v2","float",[{code:"uv",type:"vec2"},{code:`uv * ${w}`,type:"vec2"},{code:w,type:"vec2"},{code:n,type:"float"},{code:E,type:"vec2"},{code:C,type:"float"},{code:u,type:"float"},{code:y,type:"float"},{code:b,type:"float"},{code:x,type:"float"}]);this.mergeExprAtoms(I,S),p=`return ${S.code};`}else{const C=`float(${n})`,S=`float(${c})`,O=`clamp(floor(${C} + 0.5), 1.0, 32.0)`,q=`(${w}.x / max(${w}.y, 1.0))`,F=`(${this.sel(`${u} > 0.5`,`vec2(uv.x * (${q}), uv.y)`,"uv")} * ${O} + ${E})`,W=F,U=O,R=`clamp((${`smoothstep(0.35, 0.75, ${`(
            0.5   * perlin2i_tiled(${W} * 1.0, ${U} * 1.0, ${S} + 17.0) +
            0.25  * perlin2i_tiled(${W} * 2.0, ${U} * 2.0, ${S} + 31.0) +
            0.125 * perlin2i_tiled(${W} * 4.0, ${U} * 4.0, ${S} + 53.0) +
            0.0625* perlin2i_tiled(${W} * 8.0, ${U} * 8.0, ${S} + 79.0)
          ) / 0.9375`})`} - 0.5) * max(${x}, 0.001) + 0.5, 0.0, 1.0)`,J=`perlin2i_tiled(${F} * 2.0 + vec2(13.2, -9.7), ${U} * 2.0, ${S} + 137.0)`,K=`clamp(${b} + (${J} - 0.5) * 0.12, 0.0, 1.0)`,ee=`hash2(floor(uv * ${w}) + vec2(${S} * 0.013, ${S} * 0.071))`,te=`step(${K}, ${ee})`;p=`return clamp(${R} - clamp(${y}, 0.0, 1.0) * ${te}, 0.0, 1.0);`}break}case"checker":p=`return ${this.modF(`floor(uv.x * ${s("sc",t.scale)}) + floor(uv.y * ${s("sc",t.scale)})`,"2.0")};`;break;case"panner":{const n=s("sx",t.speedX),i=s("sy",t.speedY),f=`uv + ${this.v2(`${n}, ${i}`)} * ${X()}`,c=`fbm(${f}, 4.0, 4.0, 0.0)`;p=`return ${r(0,c,f)};`;break}case"tile_sampler":{const n=s("scale",t.scale??6),i=`(${s("ang",(t.angle??0)*Math.PI/180)})`,f=s("tileOffsetX",t.tileOffsetX??0),c=s("tileOffsetY",t.tileOffsetY??0),u="(uv - 0.5)",b=`fract((${this.v2(`cos(${i}) * ${u}.x - sin(${i}) * ${u}.y, sin(${i}) * ${u}.x + cos(${i}) * ${u}.y`)} + 0.5) * max(${n}, 1.0) + ${this.v2(`${f}, ${c}`)})`;p=`return ${r(0,"0.0",b)};`;break}case"gradient":{const n=s("ang",t.angle*Math.PI/180);t.type==="radial"?p="return clamp(1.0 - length(uv - 0.5) * 2.0, 0.0, 1.0);":t.type==="angular"?this.W?p="{ var nx = uv - 0.5; return (atan2(nx.y, nx.x) / 3.14159 + 1.0) * 0.5; }":p="vec2 nx = uv - 0.5; return (atan(nx.y, nx.x) / 3.14159 + 1.0) * 0.5;":this.W?p=`{ var nx = uv - 0.5; return clamp(cos(${n}) * nx.x + sin(${n}) * nx.y + 0.5, 0.0, 1.0); }`:p=`vec2 nx = uv - 0.5; return clamp(cos(${n}) * nx.x + sin(${n}) * nx.y + 0.5, 0.0, 1.0);`;break}case"shape":{const n=t.type||"circle",i=this.v2(`${s("px",t.posX??.5)}, ${s("py",t.posY??.5)}`),f=s("sc",t.scale??.5),c=s("rad",t.rad??.5),u=s("bl",t.blur??.01),y=s("tk",t.thick??.05);let b;n==="ring"?b=`abs(sdCircle(sp, ${c})) - ${y}`:n==="square"?b=`sdBox(sp, ${this.v2(c)})`:n==="triangle"?b=`sdEquilateralTriangle(sp, ${c})`:n==="polygon"?b=`sdPolygon(sp, ${c}, 6)`:n==="star"?b=`sdStar(sp, ${c}, 5, 2.5)`:b=`sdCircle(sp, ${c})`,this.W?p=`{ var sp = (uv - ${i}) / max(${f}, 0.0001); let d = ${b}; return 1.0 - smoothstep(-${u}, ${u}, d); }`:p=`vec2 sp = (uv - ${i}) / max(${f}, 0.0001); float d = ${b}; return 1.0 - smoothstep(-${u}, ${u}, d);`;break}case"add":p=`return ${r(0)} + ${r(1,s("b",t.b))};`;break;case"subtract":p=`return ${r(0)} - ${r(1,s("b",t.b))};`;break;case"multiply":p=`return ${r(0,"1.0")} * ${r(1,s("b",t.b))};`;break;case"divide":p=`return ${r(0,"1.0")} / max(${r(1,s("b",t.b))}, 0.0001);`;break;case"power":p=`return pow(max(${r(0,"0.5")}, 0.0), ${r(1,s("exp",t.exp))});`;break;case"oneminus":p=`return 1.0 - ${r(0)};`;break;case"abs":p=`return abs(${r(0)});`;break;case"negate":p=`return -(${r(0)});`;break;case"sqrt":p=`return sqrt(max(${r(0)}, 0.0));`;break;case"sign":p=`return sign(${r(0)}) * 0.5 + 0.5;`;break;case"frac":p=`return fract(${r(0)});`;break;case"floor":p=`return floor(${r(0)});`;break;case"ceil":p=`return ceil(${r(0)});`;break;case"min2":p=`return min(${r(0)}, ${r(1,s("b",t.b))});`;break;case"max2":p=`return max(${r(0)}, ${r(1,s("b",t.b))});`;break;case"mod":p=`return ${this.modF(r(0),`max(${r(1,s("b",t.b))}, 0.001)`)};`;break;case"clamp01":p=`return clamp(${r(0)}, 0.0, 1.0);`;break;case"clamp":p=`return clamp(${r(0)}, ${s("lo",t.lo)}, ${s("hi",t.hi)});`;break;case"remap":{const n=s("il",t.inLo),i=s("ih",t.inHi),f=s("ol",t.outLo),c=s("oh",t.outHi);this.W?p=`{ let t = clamp((${r(0)} - ${n}) / max(${i} - ${n}, 0.001), 0.0, 1.0); return ${f} + t * (${c} - ${f}); }`:p=`float t = clamp((${r(0)} - ${n}) / max(${i} - ${n}, 0.001), 0.0, 1.0); return ${f} + t * (${c} - ${f});`;break}case"sin":p=`return sin(${r(0,"uv.x")} * ${s("freq",t.freq)} * 6.28318 + ${s("ph",t.phase)}) * 0.5 + 0.5;`;break;case"cos":p=`return cos(${r(0,"uv.x")} * ${s("freq",t.freq)} * 6.28318 + ${s("ph",t.phase)}) * 0.5 + 0.5;`;break;case"tan":p=`return clamp(tan(${r(0,"uv.x")} * ${s("freq",t.freq)} * 3.14159) * 0.08 + 0.5, 0.0, 1.0);`;break;case"atan2node":p=`return (${this.atan2F(r(0,"uv.y - 0.5"),r(1,"uv.x - 0.5"))} / 3.14159 + 1.0) * 0.5;`;break;case"lerp":p=`return mix(${r(0)}, ${r(1,"1.0")}, clamp(${r(2,s("t",t.t))}, 0.0, 1.0));`;break;case"smoothstep":p=`return smoothstep(${s("lo",t.lo)}, ${s("hi",t.hi)}, ${r(0,"uv.x")});`;break;case"step":p=`return step(${r(0,s("e",t.edge))}, ${r(1,"uv.x")});`;break;case"ifgt":p=`return ${this.sel(`(${r(0)}) > (${r(1,s("b",t.b))})`,r(2,"1.0"),r(3,"0.0"))};`;break;case"blend":{const n=r(0),i=r(1,"1.0"),f=s("op",t.opacity),c=t.mode;let u=i;c==="add"?u=`min(${n} + ${i}, 1.0)`:c==="multiply"?u=`(${n}) * (${i})`:c==="screen"?u=`1.0 - (1.0 - ${n}) * (1.0 - ${i})`:c==="overlay"?u=this.sel(`${n} < 0.5`,`2.0 * ${n} * ${i}`,`1.0 - 2.0 * (1.0 - ${n}) * (1.0 - ${i})`):c==="difference"?u=`abs(${n} - ${i})`:c==="dodge"?u=`clamp(${n} / (1.0 - ${i} + 0.001), 0.0, 1.0)`:c==="burn"&&(u=`clamp(1.0 - (1.0 - ${n}) / (${i} + 0.001), 0.0, 1.0)`),p=`return mix(${n}, ${u}, ${f});`;break}case"levels":{const n=s("il",t.inMin),i=s("ih",t.inMax),f=s("g",t.gamma);this.W?p=`{ let t = clamp((${r(0)} - ${n}) / max(${i} - ${n}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${f}, 0.01)); }`:p=`float t = clamp((${r(0)} - ${n}) / max(${i} - ${n}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${f}, 0.01));`;break}case"histogram_scan":{const n=s("pos",t.position??.5),i=s("wid",t.width??.1),f=s("ctr",t.contrast??1),c=r(0),u=`smoothstep(${n} - max(${i}, 0.0005), ${n}, ${c})`,y=`(1.0 - smoothstep(${n}, ${n} + max(${i}, 0.0005), ${c}))`;p=`return clamp(${u} * ${y} * ${f}, 0.0, 1.0);`;break}case"histogram_range":{const n=s("inMin",t.inMin??.15),i=s("inMax",t.inMax??.85),f=s("outMin",t.outMin??0),c=s("outMax",t.outMax??1),u=r(0);this.W?p=`{ let t = clamp((${u} - ${n}) / max(${i} - ${n}, 0.0001), 0.0, 1.0); return mix(${f}, ${c}, t); }`:p=`float t = clamp((${u} - ${n}) / max(${i} - ${n}, 0.0001), 0.0, 1.0); return mix(${f}, ${c}, t);`;break}case"curve":{const n=s("lift",t.lift??0),i=s("gamma",t.gamma??1),f=s("gain",t.gain??1);p=`return clamp(pow(clamp(${r(0)} + ${n}, 0.0, 1.0), 1.0 / max(${i}, 0.001)) * ${f}, 0.0, 1.0);`;break}case"transform_2d":{const n=s("offX",t.offsetX??0),i=s("offY",t.offsetY??0),f=`(${s("rot",t.rotation??0)} * 0.017453292519943295)`,c=s("sc",t.scale??1),u=s("tile",t.tile??!0?1:0),y=`((uv - 0.5) / max(${c}, 0.0001))`,x=`(${this.v2(`cos(${f}) * ${y}.x - sin(${f}) * ${y}.y, sin(${f}) * ${y}.x + cos(${f}) * ${y}.y`)} + 0.5 + ${this.v2(`${n}, ${i}`)})`,w=`clamp(${x}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`,E=this.sel(`${u} > 0.5`,`fract(${x})`,w);p=`return ${r(0,"0.0",E)};`;break}case"safe_transform":{const n=s("offX",t.offsetX??0),i=s("offY",t.offsetY??0),f=s("sc",t.scale??1),c=s("tile",t.tile??!1?1:0),u=this.sysRef2("u_resolution"),y=`(0.5 / max(min(${u}.x, ${u}.y), 1.0))`,b=`((uv - 0.5) / max(${f}, 0.0001) + 0.5 + ${this.v2(`${n}, ${i}`)})`,x=`clamp(${b}, ${this.v2(`${y}, ${y}`)}, ${this.v2(`1.0 - ${y}, 1.0 - ${y}`)})`,w=this.sel(`${c} > 0.5`,`fract(${b})`,x);p=`return ${r(0,"0.0",w)};`;break}case"warp":{const n=T(1,this.W?"vec2f(0.0)":"vec2(0.0)"),i=s("str",t.strength),f=`(uv + ${n} * ${i})`;p=`return ${r(0,"0.0",f)};`;break}case"vector_warp":{const n=s("int",t.intensity??.15),i=s("ctr",t.centered??!0?1:0),f=s("tile",t.tile??!0?1:0),c=T(1,this.W?"vec2f(0.5)":"vec2(0.5)"),y=`(uv + (${this.sel(`${i} > 0.5`,`(${c} - ${this.v2("0.5, 0.5")})`,c)}) * ${n})`,b=this.sel(`${f} > 0.5`,`fract(${y})`,`clamp(${y}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`);p=`return ${r(0,"0.0",b)};`;break}case"directional_warp":{const n=s("amount",t.amount??.15),i=s("angle",t.angle??0),f=r(1,"0.5"),u=`(uv + ${this.v2(`cos(${i}), sin(${i})`)} * ((${f} - 0.5) * ${n}))`;p=`return ${r(0,"0.0",u)};`;break}case"edge_detect":{const n=this.sysRef2("u_resolution"),i=`(${s("radius",t.radius)} / max(${n}.x, ${n}.y))`,f=s("strength",t.strength);this.W?p=`{
            let tl = ${r(0,"0.0",`uv + vec2f(-${i}, -${i})`)};
            let  t = ${r(0,"0.0",`uv + vec2f( 0.0, -${i})`)};
            let tr = ${r(0,"0.0",`uv + vec2f( ${i}, -${i})`)};
            let  l = ${r(0,"0.0",`uv + vec2f(-${i},  0.0)`)};
            let r0 = ${r(0,"0.0",`uv + vec2f( ${i},  0.0)`)};
            let bl = ${r(0,"0.0",`uv + vec2f(-${i},  ${i})`)};
            let  b = ${r(0,"0.0",`uv + vec2f( 0.0,  ${i})`)};
            let br = ${r(0,"0.0",`uv + vec2f( ${i},  ${i})`)};
            let gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            let gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            let edge = length(vec2f(gx, gy));
            return clamp(edge * ${f}, 0.0, 1.0);
          }`:p=`
            float tl = ${r(0,"0.0",`uv + vec2(-${i}, -${i})`)};
            float  t = ${r(0,"0.0",`uv + vec2( 0.0, -${i})`)};
            float tr = ${r(0,"0.0",`uv + vec2( ${i}, -${i})`)};
            float  l = ${r(0,"0.0",`uv + vec2(-${i},  0.0)`)};
            float r0 = ${r(0,"0.0",`uv + vec2( ${i},  0.0)`)};
            float bl = ${r(0,"0.0",`uv + vec2(-${i},  ${i})`)};
            float  b = ${r(0,"0.0",`uv + vec2( 0.0,  ${i})`)};
            float br = ${r(0,"0.0",`uv + vec2( ${i},  ${i})`)};
            float gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            float edge = length(vec2(gx, gy));
            return clamp(edge * ${f}, 0.0, 1.0);
          `;break}case"blur":{const n=s("amt",t.amount??.05),i=s("ctr",t.center??0),f=`${i} - ${n}`,c=`${i} + ${n}`;p=`return 1.0 - smoothstep(${f}, ${c}, ${r(0,"0.5")});`;break}case"highpass_grayscale":{const n=s("radius",t.radius??1),i=s("intensity",t.intensity??1),f=this.sysRef2("u_resolution"),c=`(max(${n}, 0.0001) / max(${f}.x, ${f}.y))`,u=r(0,"0.0"),y=r(0,"0.0",`(uv + ${this.v2(`${c}, 0.0`)})`),b=r(0,"0.0",`(uv - ${this.v2(`${c}, 0.0`)})`),x=r(0,"0.0",`(uv + ${this.v2(`0.0, ${c}`)})`),w=r(0,"0.0",`(uv - ${this.v2(`0.0, ${c}`)})`),E=`((${u} + ${y} + ${b} + ${x} + ${w}) * 0.2)`;p=`return clamp(((${u} - ${E}) * ${i}) + 0.5, 0.0, 1.0);`;break}case"slope_blur":{const n=s("intensity",t.intensity??2),i=s("samples",t.samples??4),f=this.sysRef2("u_resolution"),c=r(1,r(0,"0.5")),y=`(${`normalize(${this.v2(`${c} - 0.5, 1.0 - ${c}`)} + ${this.v2("1e-4, 1e-4")})`} * (${n} / max(${f}.x, ${f}.y)))`,b=`step(0.5, ${i})`,x=`step(1.5, ${i})`,w=`step(2.5, ${i})`,E=`step(3.5, ${i})`,C=r(0,"0.0"),S=r(0,"0.0",`(uv + ${y})`),O=r(0,"0.0",`(uv - ${y})`),q=r(0,"0.0",`(uv + ${y} * 2.0)`),Y=r(0,"0.0",`(uv - ${y} * 2.0)`),F=r(0,"0.0",`(uv + ${y} * 3.0)`),W=r(0,"0.0",`(uv - ${y} * 3.0)`),U=r(0,"0.0",`(uv + ${y} * 4.0)`),z=r(0,"0.0",`(uv - ${y} * 4.0)`),G=`(${C} + ${b} * (${S} + ${O}) + ${x} * (${q} + ${Y}) + ${w} * (${F} + ${W}) + ${E} * (${U} + ${z}))`,R=`(1.0 + 2.0 * (${b} + ${x} + ${w} + ${E}))`;p=`return clamp(${G} / max(${R}, 1.0), 0.0, 1.0);`;break}case"non_uniform_blur":{const n=s("radius",t.radius??2),i=s("samples",t.samples??4),f=this.sysRef2("u_resolution"),c=r(1,"1.0"),u=`(max(${n}, 0.0) * clamp(${c}, 0.0, 1.0) / max(${f}.x, ${f}.y))`,y=`step(0.5, ${i})`,b=`step(1.5, ${i})`,x=`step(2.5, ${i})`,w=`step(3.5, ${i})`,E=r(0,"0.0"),C=r(0,"0.0",`(uv + ${this.v2(`${u}, 0.0`)})`),S=r(0,"0.0",`(uv - ${this.v2(`${u}, 0.0`)})`),O=r(0,"0.0",`(uv + ${this.v2(`0.0, ${u}`)})`),q=r(0,"0.0",`(uv - ${this.v2(`0.0, ${u}`)})`),Y=r(0,"0.0",`(uv + ${this.v2(`2.0 * ${u}, 0.0`)})`),F=r(0,"0.0",`(uv - ${this.v2(`2.0 * ${u}, 0.0`)})`),W=r(0,"0.0",`(uv + ${this.v2(`0.0, 2.0 * ${u}`)})`),U=r(0,"0.0",`(uv - ${this.v2(`0.0, 2.0 * ${u}`)})`),z=r(0,"0.0",`(uv + ${this.v2(`3.0 * ${u}, 0.0`)})`),G=r(0,"0.0",`(uv - ${this.v2(`3.0 * ${u}, 0.0`)})`),R=r(0,"0.0",`(uv + ${this.v2(`0.0, 3.0 * ${u}`)})`),J=r(0,"0.0",`(uv - ${this.v2(`0.0, 3.0 * ${u}`)})`),K=r(0,"0.0",`(uv + ${this.v2(`4.0 * ${u}, 0.0`)})`),ee=r(0,"0.0",`(uv - ${this.v2(`4.0 * ${u}, 0.0`)})`),te=r(0,"0.0",`(uv + ${this.v2(`0.0, 4.0 * ${u}`)})`),Ie=r(0,"0.0",`(uv - ${this.v2(`0.0, 4.0 * ${u}`)})`),Ee=`(${E}
          + ${y} * (${C} + ${S} + ${O} + ${q})
          + ${b} * (${Y} + ${F} + ${W} + ${U})
          + ${x} * (${z} + ${G} + ${R} + ${J})
          + ${w} * (${K} + ${ee} + ${te} + ${Ie}))`,qe=`(1.0 + 4.0 * (${y} + ${b} + ${x} + ${w}))`;p=`return clamp(${Ee} / max(${qe}, 1.0), 0.0, 1.0);`;break}case"flood_fill":{const n=s("scale",t.scale??8),i=s("threshold",t.threshold??.1),f=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??0),u=s("tileOffsetY",t.tileOffsetY??0),y=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${f})`:`float(${f})`,x=this.sysRef2("u_resolution"),w=`${x}.x / max(${x}.y, 1.0)`,O=`hash2(${`floor(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${n}, 1.0) + ${this.v2(`${c}, ${u}`)})`})`} + ${this.v2(`${b} * 0.271, ${b} * 0.619`)})`,q=`step(${i}, ${r(0,"1.0")})`;p=`return ${O} * ${q};`;break}case"height_to_normal":{const n=this.sysRef2("u_resolution"),i=s("radius",t.radius??1),f=`(1.0 / max(${n}.x, ${n}.y))`,c=`(max(${i}, 0.0001) * ${f})`,u=s("strength",t.strength??1),y=s("flipY",t.flipY??!1?-1:1);this.W?p=`{
            let tl = ${r(0,"0.0",`uv + vec2f(-${c}, -${c})`)};
            let  t = ${r(0,"0.0",`uv + vec2f( 0.0, -${c})`)};
            let tr = ${r(0,"0.0",`uv + vec2f( ${c}, -${c})`)};
            let  l = ${r(0,"0.0",`uv + vec2f(-${c},  0.0)`)};
            let  r0 = ${r(0,"0.0",`uv + vec2f( ${c},  0.0)`)};
            let bl = ${r(0,"0.0",`uv + vec2f(-${c},  ${c})`)};
            let  b = ${r(0,"0.0",`uv + vec2f( 0.0,  ${c})`)};
            let br = ${r(0,"0.0",`uv + vec2f( ${c},  ${c})`)};
            let dX = 3.0 * (tr - tl) + 10.0 * (r0 - l) + 3.0 * (br - bl);
            let dY = 3.0 * (bl - tl) + 10.0 * (b - t) + 3.0 * (br - tr);
            let k = (${u} / max(${i}, 0.0001)) * (1.0 / 32.0);
            let gx = -dX * k;
            let gy = -dY * k * ${y};
            let n = normalize(vec3f(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`:p=`{
            float tl = ${r(0,"0.0",`uv + vec2(-${c}, -${c})`)};
            float  t = ${r(0,"0.0",`uv + vec2( 0.0, -${c})`)};
            float tr = ${r(0,"0.0",`uv + vec2( ${c}, -${c})`)};
            float  l = ${r(0,"0.0",`uv + vec2(-${c},  0.0)`)};
            float  r0 = ${r(0,"0.0",`uv + vec2( ${c},  0.0)`)};
            float bl = ${r(0,"0.0",`uv + vec2(-${c},  ${c})`)};
            float  b = ${r(0,"0.0",`uv + vec2( 0.0,  ${c})`)};
            float br = ${r(0,"0.0",`uv + vec2( ${c},  ${c})`)};
            float dX = 3.0 * (tr - tl) + 10.0 * (r0 - l) + 3.0 * (br - bl);
            float dY = 3.0 * (bl - tl) + 10.0 * (b - t) + 3.0 * (br - tr);
            float k = (${u} / max(${i}, 0.0001)) * (1.0 / 32.0);
            float gx = -dX * k;
            float gy = -dY * k * ${y};
            vec3 n = normalize(vec3(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;break}case"normal_combine":{const n=B(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),i=B(1,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),f=s("strength",t.strength??1);this.W?p=`{
            let b = normalize(${n} * 2.0 - 1.0);
            let d = normalize(${i} * 2.0 - 1.0);
            let ds = normalize(vec3f(d.xy * ${f}, d.z));
            let n = normalize(vec3f(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`:p=`{
            vec3 b = normalize(${n} * 2.0 - 1.0);
            vec3 d = normalize(${i} * 2.0 - 1.0);
            vec3 ds = normalize(vec3(d.xy * ${f}, d.z));
            vec3 n = normalize(vec3(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`;break}case"normal_normalize":{const n=B(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),i=s("flipY",t.flipY??!1?-1:1);this.W?p=`{
            let n0 = ${n} * 2.0 - 1.0;
            let n1 = normalize(vec3f(n0.x, n0.y * ${i}, n0.z));
            return n1 * 0.5 + 0.5;
          }`:p=`{
            vec3 n0 = ${n} * 2.0 - 1.0;
            vec3 n1 = normalize(vec3(n0.x, n0.y * ${i}, n0.z));
            return n1 * 0.5 + 0.5;
          }`;break}case"remote":p="return 0.0;";break;case"atom_input":case"atom_input_a":case"atom_input_b":case"atom_input_c":case"atom_input_d":{const n=this.atomInputExprStack.length>0?this.atomInputExprStack[this.atomInputExprStack.length-1]:null,i=this.atomInputPortIndex(l.type)??0,f=(n==null?void 0:n[i])??(n==null?void 0:n[0])??null;if(!f){this.warnings.add(`Atom Input node "${e}" used outside atom graph.`),p="return 0.0;";break}n&&i>=n.length&&this.warnings.add(`Atom Input "${l.type}" requested missing parent port ${i}; using port 0.`),this.mergeExprAtoms(I,f),p=`return ${this.asFloat(f,l.type,`${e}`)};`;break}case"atom_graph":{const n=Math.max(1,((pe=(ue=V[l.type])==null?void 0:ue.inputs)==null?void 0:pe.length)||1),i=[];for(let c=0;c<n;c+=1){const u=this.getSource(e,c,"uv","0.0","float");i.push(u),this.mergeExprAtoms(I,u)}const f=this.compileAtomSubgraph(l,i);this.mergeExprAtoms(I,f),p=`return ${this.asFloat(f,l.type,e)};`;break}case"buffer":{if(o===1){const n=`1.0 / max(${this.sysRef2("u_resolution")}.x, 1.0)`;this.W?p=`{
              let s = ${n};
              let c  = ${r(0,"0.0","uv")};
              let c1 = ${r(0,"0.0","uv + vec2f(s, 0.0)")};
              let c2 = ${r(0,"0.0","uv + vec2f(-s, 0.0)")};
              let c3 = ${r(0,"0.0","uv + vec2f(0.0, s)")};
              let c4 = ${r(0,"0.0","uv + vec2f(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            }`:p=`
              float s = ${n};
              float c  = ${r(0,"0.0","uv")};
              float c1 = ${r(0,"0.0","uv + vec2(s, 0.0)")};
              float c2 = ${r(0,"0.0","uv + vec2(-s, 0.0)")};
              float c3 = ${r(0,"0.0","uv + vec2(0.0, s)")};
              float c4 = ${r(0,"0.0","uv + vec2(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            `}else p=`return ${r(0)};`;break}case"output":p=`return ${r(0)};`;break;case"output_baseColor":p=`return ${r(0)};`;break;case"output_normal":p=`return ${r(0)};`;break;case"output_roughness":p=`return ${r(0)};`;break;case"output_height":p=`return ${r(0)};`;break;case"output_metallic":p=`return ${r(0)};`;break;default:p="return 0.5;";break}if(this.W){const n=this.toWgslDataType(d),f=[...this.funcBodies.get(v)||[],p].join(`
`),c=((m==null?void 0:m.label)||l.type).replace(/\r?\n/g," ");this.funcDefs.push(`// NodeRef id=${e} type=${l.type} port=${o} label=${c}
fn ${_}(uv: vec2f) -> ${n} {
${f}
}`)}else this.funcDefs.push(`// Node: ${(m==null?void 0:m.label)||l.type} (id=${e})
${d} ${_}(vec2 uv) { ${p} }`);const A={code:`${_}(uv)`,type:d,atoms:I.size>0?new Set(I):void 0};return this.funcExprs.set(v,A),this.cloneExpr(A)}inferUniformType(e,o,l){var v,k;if(Array.isArray(l))return l.length>=4?"vec4":l.length===3?"vec3":l.length===2?"vec2":"float";if(typeof l=="boolean")return"bool";const m=this.nodes.get(e),d=m?(k=(v=V[m.type])==null?void 0:v.params)==null?void 0:k[o]:void 0;return(d==null?void 0:d.type)==="int"?"int":"float"}toGLSLType(e){return e==="float"||e==="int"?"float":e==="bool"?"bool":e==="vec2"?"vec2":e==="vec3"?"vec3":"vec4"}toReadableSource(e){return e.split(`
`).map(o=>o.trimEnd()).join(`
`).trim()}toRawSource(e){return e.replace(/\/\/[^\n\r]*/g,"").replace(/\s+/g," ").trim()}hashString(e){let o=2166136261;for(let l=0;l<e.length;l++)o^=e.charCodeAt(l),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return`fnv1a_${(o>>>0).toString(16)}`}}const we=`
// Hash functions
float hash2(vec2 p){p=fract(p*vec2(234.345,435.678));p+=dot(p,p+34.23);return fract(p.x*p.y);}
vec2 hash22(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.0+2.0*fract(sin(p)*43758.5453123);}
float fade1(float t){ return t*t*t*(t*(t*6.0-15.0)+10.0); }
vec2 fade(vec2 t) { return vec2(fade1(t.x), fade1(t.y)); }

// Noise functions
float vnoise(vec2 p, float per, bool tile){
  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.-2.*f);
  vec2 i00=i+vec2(0,0);vec2 i10=i+vec2(1,0);vec2 i01=i+vec2(0,1);vec2 i11=i+vec2(1,1);
  if(tile){i00=mod(i00,per);i10=mod(i10,per);i01=mod(i01,per);i11=mod(i11,per);}
  return mix(mix(hash2(i00),hash2(i10),u.x),mix(hash2(i01),hash2(i11),u.x),u.y);
}
vec2 grad2i(float h){
  float k = mod(h, 8.0);
  float d = 0.70710678118;
  if(k < 0.5) return vec2( 1.0,  0.0);
  if(k < 1.5) return vec2(-1.0,  0.0);
  if(k < 2.5) return vec2( 0.0,  1.0);
  if(k < 3.5) return vec2( 0.0, -1.0);
  if(k < 4.5) return vec2( d,    d);
  if(k < 5.5) return vec2(-d,    d);
  if(k < 6.5) return vec2( d,   -d);
  return vec2(-d,   -d);
}
float hash2i(vec2 i, float seed){
  // Deterministic float hash; WGSL path uses integer hash2i_u32 for strict u32 behavior.
  return floor(fract(sin(dot(i + vec2(seed, seed*1.37), vec2(127.1, 311.7))) * 43758.5453123) * 8.0);
}
float perlin2i_raw(vec2 p, float seed){
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 g00=grad2i(hash2i(i+vec2(0,0), seed));
  vec2 g10=grad2i(hash2i(i+vec2(1,0), seed));
  vec2 g01=grad2i(hash2i(i+vec2(0,1), seed));
  vec2 g11=grad2i(hash2i(i+vec2(1,1), seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i(vec2 p, float seed){
  return clamp(perlin2i_raw(p, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2i_tiled_raw(vec2 p, float per, float seed){
  float perSafe = max(1.0, floor(per + 0.5));
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 i00=mod(i+vec2(0,0), perSafe);
  vec2 i10=mod(i+vec2(1,0), perSafe);
  vec2 i01=mod(i+vec2(0,1), perSafe);
  vec2 i11=mod(i+vec2(1,1), perSafe);
  vec2 g00=grad2i(hash2i(i00, seed));
  vec2 g10=grad2i(hash2i(i10, seed));
  vec2 g01=grad2i(hash2i(i01, seed));
  vec2 g11=grad2i(hash2i(i11, seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i_tiled(vec2 p, float per, float seed){
  return clamp(perlin2i_tiled_raw(p, per, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2_disordered(vec2 p0, float seed, float disorder, float disorderSpeed, float time){
  float t = time * disorderSpeed;
  float w1 = perlin2i_raw(p0 + vec2(17.0,53.0) + vec2( t*0.73, -t*0.41), seed + 101.0);
  float w2 = perlin2i_raw(p0 + vec2(113.0,7.0) + vec2(-t*0.29,  t*0.87), seed + 211.0);
  vec2 w = vec2(w1, w2);
  return perlin2i(p0 + disorder * w, seed);
}
float fbm(vec2 p,float oct,float per,float tileFlag){
  float v=0.,a=.5,mx=0.;
  bool tile = tileFlag > 0.5;
  for(int i=0;i<8;i++){
    float m = step(float(i) + 0.5, oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p*=2.; per*=2.; a*=.5;
  }
  return mx>0.?v/mx:0.;
}

vec4 voro(vec2 p,float jt,float per,bool tile){
  vec2 n=floor(p);vec2 f=fract(p);if(tile){n=mod(n,per);}
  float f1=8.;float f2=8.;vec2 id=vec2(0.);
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){
    vec2 g=vec2(float(i),float(j));vec2 neighbor=n+g;if(tile)neighbor=mod(neighbor,per);
    vec2 o=hash22(neighbor);vec2 r=g+o*jt-f;float d=dot(r,r);
    if(d<f1){f2=f1;f1=d;id=o;}else if(d<f2){f2=d;}
  }
  f1=sqrt(f1);f2=sqrt(f2);return vec4(f1,f2,f2-f1,id.x);
}

// SDFs
float sdCircle(vec2 p, float r) { return length(p) - r; }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
float sdEquilateralTriangle(vec2 p, float r) { const float k = sqrt(3.0); p.x = abs(p.x) - r; p.y = p.y + r/k; if(p.x+k*p.y>0.0) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0; p.x -= clamp(p.x, -2.0*r, 0.0); return -length(p)*sign(p.y); }
float sdPolygon(vec2 p, float r, int n) { float an = 3.141593/float(n); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*vec2(cos(an),sin(an)); p.y += clamp(-p.y, 0.0, r*tan(an)); return length(p)*sign(p.x); }
float sdStar(vec2 p, float r, int n, float m) { float an = 3.141593/float(n); float en = 3.141593/m;  vec2  acs = vec2(cos(an),sin(an)); vec2  ecs = vec2(cos(en),sin(en)); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*acs; p += ecs*clamp(-dot(p,ecs), 0.0, r*acs.y/ecs.y); return length(p)*sign(p.x); }
`,Se=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;
fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }

struct VSOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut; out.pos = vec4f(p[vi], 0, 1); out.uv = p[vi] * 0.5 + 0.5; return out;
}
@fragment fn fs_main(inp: VSOut) -> @location(0) vec4f { return vec4f(0, 0, 0, 1); }
`;function ke(g,e){return g==="bool"?!!e:g==="int"?Math.trunc(Number(e)||0):g==="float"?Number(e)||0:e}function Ae(g,e,o){var v;if(e in o)return e;const l={val:"value",spd:"speed",sc:"scale",se:"seed",jt:"jitter",ang:"angle",px:"posX",py:"posY",r:"rot",rad:"rad",bl:"blur",tk:"thick",exp:"exp",freq:"freq",ph:"phase",t:"t",e:"edge",op:"opacity",g:"gamma",str:"strength",il:"inMin",ih:"inMax",ol:"outLo",oh:"outHi"},d=((v={add:{b:"b"},subtract:{b:"b"},multiply:{b:"b"},divide:{b:"b"},min2:{b:"b"},max2:{b:"b"},mod:{b:"b"},ifgt:{b:"b"},remap:{il:"inLo",ih:"inHi",ol:"outLo",oh:"outHi"},clamp:{lo:"lo",hi:"hi"},smoothstep:{lo:"lo",hi:"hi"},shape:{px:"posX",py:"posY",sc:"scale",bl:"blur",tk:"thick"},panner:{sx:"speedX",sy:"speedY"},levels:{il:"inMin",ih:"inMax",g:"gamma"},step:{e:"edge"}}[g])==null?void 0:v[e])||l[e];return d&&d in o?d:e}function Oe(g,e){const o=new Map(e.nodes.map(m=>[m.id,m])),l={...g.uniformBindings};for(const m of g.uniforms){if(m.nodeId==="system")continue;const d=o.get(m.nodeId);if(!d)continue;const v=Ae(d.type,m.key,d.params);v in d.params&&(l[m.name]={value:ke(m.type,d.params[v])})}return{...g,uniformBindings:l}}const le=self;let j=null,D="";const L=g=>{le.postMessage(g)};le.onmessage=g=>{const e=g.data;if(!(!e||typeof e!="object"))try{if(e.type==="set_graph"){j=e.graph,D=e.signature;return}if(e.type!=="compile_job"||!j||e.signature!==D)return;const o=new _e(j),l=e.mode==="output"?o.compile({backend:"glsl",readable:!1,outputChannel:e.outputChannel}):o.compile({backend:"glsl",readable:!1,nodeId:e.nodeId,nodeOutputPort:e.nodeOutputPort,outputChannel:e.outputChannel}),m=Oe(l,j);L({type:"compiled",signature:D,requestKey:e.requestKey,compiled:m})}catch(o){if(e.type==="compile_job"){L({type:"compile_error",signature:D||e.signature||"",requestKey:e.requestKey||"unknown",error:(o==null?void 0:o.message)||String(o)});return}L({type:"fatal",error:(o==null?void 0:o.message)||String(o)})}},L({type:"ready"})})();
