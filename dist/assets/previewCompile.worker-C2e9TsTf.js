(function(){"use strict";const h=$=>({id:$,type:"float",label:$}),g=()=>({id:"out",type:"float",label:"Out"}),se=$=>({id:$,type:"vec2",label:$}),H=$=>({id:$,type:"vec3",label:$}),Q=($="Out")=>({id:"out",type:"vec3",label:$}),n=($,e,o,l,d,v)=>({type:$,default:e,min:o,max:l,step:d,options:v}),j={constant:{type:"constant",label:"Constant",category:"gen",inputs:[],outputs:[g()],params:{value:n("float",.5,-1,1,.01)}},time:{type:"time",label:"Time",category:"gen",inputs:[],outputs:[g()],params:{speed:n("float",1,0,10,.1)}},uv:{type:"uv",label:"UV",category:"gen",inputs:[],outputs:[{id:"out",type:"vec2",label:"UV"}],params:{}},uv_x:{type:"uv_x",label:"UV.x",category:"gen",inputs:[],outputs:[g()],params:{}},uv_y:{type:"uv_y",label:"UV.y",category:"gen",inputs:[],outputs:[g()],params:{}},uniform_color:{type:"uniform_color",label:"Uniform Color",category:"gen",inputs:[],outputs:[{id:"out",type:"vec3",label:"Color"}],params:{r:n("float",.5,0,1,.01),g:n("float",.5,0,1,.01),b:n("float",.5,0,1,.01)}},gaussian_noise:{type:"gaussian_noise",label:"Gaussian Noise",category:"gen",inputs:[],outputs:[g()],params:{scale:n("float",12,1,64,1),mean:n("float",.5,0,1,.01),stdDev:n("float",.16,.01,.5,.01),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},tile_generator:{type:"tile_generator",label:"Tile Generator",category:"gen",inputs:[],outputs:[g()],params:{scale:n("float",6,1,64,1),shape:n("select","square",void 0,void 0,void 0,["square","dot"]),radius:n("float",.42,.05,.49,.01),variation:n("float",.25,0,1,.01),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},noise:{type:"noise",label:"Noise fBm v2",category:"gen",inputs:[],outputs:[g()],params:{scale:n("float",6,.25,64,.25),octaves:n("float",4,1,8,1),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},perlin:{type:"perlin",label:"Perlin Noise v2",category:"gen",inputs:[],outputs:[g()],params:{scale:n("float",32,1,64,1),disorder:n("float",0,0,1,.01),disorderSpeed:n("float",1,0,2,.01),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},worley:{type:"worley",label:"Worley Noise v2",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:n("float",5,1,20,.5),jitter:n("float",1,0,1,.05),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},voronoi:{type:"voronoi",label:"Voronoi",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:n("float",5,1,64,.5),jitter:n("float",1,0,1,.05),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},bnw_spots2_v2:{type:"bnw_spots2_v2",label:"BnW Spots 2 (v2)",category:"noises",inputs:[],outputs:[g()],params:{scale:n("int",10,1,32,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),seed:n("int",1337,0,2147483647,1),nonSquareExpansion:n("bool",!0),grainAmount:n("float",.22,0,1,.005),grainThreshold:n("float",.86,0,1,.005),contrast:n("float",1.08,.25,3,.01)}},shape:{type:"shape",label:"Shape SDF",category:"gen",inputs:[],outputs:[g()],params:{type:n("select","circle",void 0,void 0,void 0,["circle","square","ring","triangle","polygon","star"]),posX:n("float",.5,0,1,.01),posY:n("float",.5,0,1,.01),scale:n("float",.5,.05,2,.01),rad:n("float",.5,0,1,.01),blur:n("float",.01,.001,.5,.001),thick:n("float",.05,.001,.5,.001)}},split:{type:"split",label:"Split Vec4",category:"math",inputs:[{id:"in",type:"vec4",label:"In"}],outputs:[{id:"x",type:"float",label:"X"},{id:"y",type:"float",label:"Y"},{id:"z",type:"float",label:"Z"},{id:"w",type:"float",label:"W"},{id:"xyz",type:"vec3",label:"XYZ"}],params:{}},gradient:{type:"gradient",label:"Gradient",category:"gen",inputs:[],outputs:[g()],params:{type:n("select","linear",void 0,void 0,void 0,["linear","radial","angular"]),angle:n("float",0,0,360,1)}},checker:{type:"checker",label:"Checker",category:"gen",inputs:[],outputs:[g()],params:{scale:n("float",8,1,32,1)}},panner:{type:"panner",label:"Panner",category:"filter",inputs:[h("In")],outputs:[g()],params:{speedX:n("float",.1,-2,2,.01),speedY:n("float",0,-2,2,.01)}},tile_sampler:{type:"tile_sampler",label:"Tile Sampler",category:"filter",inputs:[h("In")],outputs:[g()],params:{scale:n("float",6,1,64,1),angle:n("float",0,-180,180,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01)}},add:{type:"add",label:"Add A+B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",0,-2,2,.01)}},subtract:{type:"subtract",label:"Subtract A-B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",0,-2,2,.01)}},multiply:{type:"multiply",label:"Multiply A×B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",1,-4,4,.01)}},divide:{type:"divide",label:"Divide A÷B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",2,.01,8,.01)}},power:{type:"power",label:"Power A^B",category:"math",inputs:[h("Base"),h("Exp")],outputs:[g()],params:{exp:n("float",2,.1,8,.1)}},oneminus:{type:"oneminus",label:"1 - x",category:"math",inputs:[h("In")],outputs:[g()],params:{}},abs:{type:"abs",label:"Abs |x|",category:"math",inputs:[h("In")],outputs:[g()],params:{}},negate:{type:"negate",label:"Negate -x",category:"math",inputs:[h("In")],outputs:[g()],params:{}},sqrt:{type:"sqrt",label:"Sqrt √x",category:"math",inputs:[h("In")],outputs:[g()],params:{}},sign:{type:"sign",label:"Sign",category:"math",inputs:[h("In")],outputs:[g()],params:{}},frac:{type:"frac",label:"Frac",category:"math",inputs:[h("In")],outputs:[g()],params:{}},floor:{type:"floor",label:"Floor",category:"math",inputs:[h("In")],outputs:[g()],params:{}},ceil:{type:"ceil",label:"Ceil",category:"math",inputs:[h("In")],outputs:[g()],params:{}},min2:{type:"min2",label:"Min A,B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",.5,-2,2,.01)}},max2:{type:"max2",label:"Max A,B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",.5,-2,2,.01)}},mod:{type:"mod",label:"Mod A%B",category:"math",inputs:[h("A"),h("B")],outputs:[g()],params:{b:n("float",.5,.01,4,.01)}},clamp01:{type:"clamp01",label:"Clamp 0-1",category:"math",inputs:[h("In")],outputs:[g()],params:{}},clamp:{type:"clamp",label:"Clamp lo..hi",category:"math",inputs:[h("In")],outputs:[g()],params:{lo:n("float",0,-2,2,.01),hi:n("float",1,-2,2,.01)}},remap:{type:"remap",label:"Remap",category:"math",inputs:[h("In")],outputs:[g()],params:{inLo:n("float",0,-2,2,.01),inHi:n("float",1,-2,2,.01),outLo:n("float",0,-2,2,.01),outHi:n("float",1,-2,2,.01)}},sin:{type:"sin",label:"Sin",category:"trig",inputs:[h("In")],outputs:[g()],params:{freq:n("float",1,.1,20,.1),phase:n("float",0,0,6.28,.05)}},cos:{type:"cos",label:"Cos",category:"trig",inputs:[h("In")],outputs:[g()],params:{freq:n("float",1,.1,20,.1),phase:n("float",0,0,6.28,.05)}},tan:{type:"tan",label:"Tan",category:"trig",inputs:[h("In")],outputs:[g()],params:{freq:n("float",1,.1,10,.1)}},atan2node:{type:"atan2node",label:"Atan2 Y,X",category:"trig",inputs:[h("Y"),h("X")],outputs:[g()],params:{}},lerp:{type:"lerp",label:"Lerp A,B,T",category:"interp",inputs:[h("A"),h("B"),h("T")],outputs:[g()],params:{t:n("float",.5,0,1,.01)}},smoothstep:{type:"smoothstep",label:"Smoothstep",category:"interp",inputs:[h("In")],outputs:[g()],params:{lo:n("float",0,-1,2,.01),hi:n("float",1,-1,2,.01)}},step:{type:"step",label:"Step edge,x",category:"interp",inputs:[h("Edge"),h("X")],outputs:[g()],params:{edge:n("float",.5,-1,2,.01)}},ifgt:{type:"ifgt",label:"If A>B ? C:D",category:"interp",inputs:[h("A"),h("B"),h("T"),h("F")],outputs:[g()],params:{b:n("float",.5,-2,2,.01)}},blend:{type:"blend",label:"Blend",category:"filter",inputs:[h("A"),h("B")],outputs:[g()],params:{mode:n("select","mix",void 0,void 0,void 0,["mix","add","multiply","screen","overlay","difference","dodge","burn"]),opacity:n("float",.5,0,1,.01)}},levels:{type:"levels",label:"Levels",category:"filter",inputs:[h("In")],outputs:[g()],params:{inMin:n("float",0,0,1,.01),inMax:n("float",1,0,1,.01),gamma:n("float",1,.1,4,.05)}},histogram_scan:{type:"histogram_scan",label:"Histogram Scan",category:"filter",inputs:[h("In")],outputs:[g()],params:{position:n("float",.5,0,1,.01),width:n("float",.1,.001,.5,.005),contrast:n("float",1,.1,8,.1)}},histogram_range:{type:"histogram_range",label:"Histogram Range",category:"filter",inputs:[h("In")],outputs:[g()],params:{inMin:n("float",.15,0,1,.005),inMax:n("float",.85,0,1,.005),outMin:n("float",0,0,1,.005),outMax:n("float",1,0,1,.005)}},curve:{type:"curve",label:"Curve",category:"filter",inputs:[h("In")],outputs:[g()],params:{lift:n("float",0,-1,1,.01),gamma:n("float",1,.1,4,.01),gain:n("float",1,0,2,.01)}},warp:{type:"warp",label:"Domain Warp",category:"filter",inputs:[h("In"),se("Warp")],outputs:[g()],params:{strength:n("float",.15,0,.5,.005)}},vector_warp:{type:"vector_warp",label:"Vector Warp Grayscale",category:"filter",inputs:[h("In"),se("Vector")],outputs:[g()],params:{intensity:n("float",.15,0,1,.005),centered:n("bool",!0),tile:n("bool",!0)}},directional_warp:{type:"directional_warp",label:"Directional Warp",category:"filter",inputs:[h("In"),h("Warp")],outputs:[g()],params:{amount:n("float",.15,0,1,.005),angle:n("float",0,-3.141592653589793,3.141592653589793,.01)}},disorder:{type:"disorder",label:"Disorder",category:"filter",inputs:[h("In")],outputs:[g()],params:{amount:n("float",.08,0,1,.005),scale:n("float",8,.25,64,.25),speed:n("float",.5,0,8,.01),seed:n("int",1337,0,2147483647,1)}},slope_blur:{type:"slope_blur",label:"Slope Blur",category:"filter",inputs:[h("In"),h("Slope")],outputs:[g()],params:{intensity:n("float",2,0,16,.1),samples:n("float",4,1,8,1)}},non_uniform_blur:{type:"non_uniform_blur",label:"Non-Uniform Blur Grayscale",category:"filter",inputs:[h("In"),h("BlurMap")],outputs:[g()],params:{radius:n("float",2,0,12,.1),samples:n("float",4,1,4,1)}},transform_2d:{type:"transform_2d",label:"Transformation 2D",category:"filter",inputs:[h("In")],outputs:[g()],params:{offsetX:n("float",0,-2,2,.005),offsetY:n("float",0,-2,2,.005),rotation:n("float",0,-180,180,.5),scale:n("float",1,.05,8,.01),tile:n("bool",!0)}},safe_transform:{type:"safe_transform",label:"Safe Transform Grayscale",category:"filter",inputs:[h("In")],outputs:[g()],params:{offsetX:n("float",0,-2,2,.005),offsetY:n("float",0,-2,2,.005),scale:n("float",1,.05,8,.01),tile:n("bool",!1)}},flood_fill:{type:"flood_fill",label:"Flood Fill",category:"filter",inputs:[h("In")],outputs:[g()],params:{scale:n("float",8,1,64,1),threshold:n("float",.1,0,1,.01),seed:n("int",1337,0,2147483647,1),tileOffsetX:n("float",0,-1e4,1e4,.01),tileOffsetY:n("float",0,-1e4,1e4,.01),nonSquare:n("bool",!0)}},edge_detect:{type:"edge_detect",label:"Edge Detect",category:"filter",inputs:[h("In")],outputs:[g()],params:{radius:n("float",1,.5,4,.1),strength:n("float",1.2,.1,5,.1)}},blur:{type:"blur",label:"Blur",category:"filter",inputs:[h("In")],outputs:[g()],params:{amount:n("float",.05,.001,.5,.001),center:n("float",0,-1,1,.01)}},highpass_grayscale:{type:"highpass_grayscale",label:"Highpass Grayscale",category:"filter",inputs:[h("In")],outputs:[g()],params:{radius:n("float",1,.5,8,.1),intensity:n("float",1,.1,4,.05)}},height_to_normal:{type:"height_to_normal",label:"Height to Normal",category:"filter",inputs:[h("Height")],outputs:[Q("Normal")],params:{strength:n("float",2,.01,4,.02),radius:n("float",1,.5,4,.1),flipY:n("bool",!1)}},normal_combine:{type:"normal_combine",label:"Normal Combine",category:"filter",inputs:[H("Base"),H("Detail")],outputs:[Q("Normal")],params:{strength:n("float",1,0,2,.01)}},normal_normalize:{type:"normal_normalize",label:"Normal Normalize",category:"filter",inputs:[H("Normal")],outputs:[Q("Normal")],params:{flipY:n("bool",!1)}},atom_input:{type:"atom_input",label:"Atom Input",category:"util",inputs:[],outputs:[g()],params:{}},atom_input_a:{type:"atom_input_a",label:"Atom In A",category:"util",inputs:[],outputs:[g()],params:{}},atom_input_b:{type:"atom_input_b",label:"Atom In B",category:"util",inputs:[],outputs:[g()],params:{}},atom_input_c:{type:"atom_input_c",label:"Atom In C",category:"util",inputs:[],outputs:[g()],params:{}},atom_input_d:{type:"atom_input_d",label:"Atom In D",category:"util",inputs:[],outputs:[g()],params:{}},atom_graph:{type:"atom_graph",label:"Atom Graph",category:"util",inputs:[h("A"),h("B"),h("C"),h("D")],outputs:[g()],params:{}},remote:{type:"remote",label:"Remote",category:"util",inputs:[],outputs:[],params:{target:n("select","",void 0,void 0,void 0,[]),key:n("select","",void 0,void 0,void 0,[]),value:n("float",.5,0,1,.01),label:n("select","",void 0,void 0,void 0,[])}},buffer:{type:"buffer",label:"Buffer",category:"filter",inputs:[h("In")],outputs:[{id:"out",type:"float",label:"Out"},{id:"lod",type:"float",label:"LOD"}],params:{}},output:{type:"output",label:"Output",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"},{id:"roughness",type:"float",label:"Roughness"},{id:"normal",type:"vec3",label:"Normal"},{id:"height",type:"float",label:"Height"},{id:"metallic",type:"float",label:"Metallic"},{id:"ao",type:"float",label:"AO"}],outputs:[],params:{}},output_baseColor:{type:"output_baseColor",label:"Output BaseColor",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"}],outputs:[],params:{}},output_roughness:{type:"output_roughness",label:"Output Roughness",category:"output",inputs:[{id:"roughness",type:"float",label:"Roughness"}],outputs:[],params:{}},output_normal:{type:"output_normal",label:"Output Normal",category:"output",inputs:[{id:"normal",type:"vec3",label:"Normal"}],outputs:[],params:{}},output_height:{type:"output_height",label:"Output Height",category:"output",inputs:[{id:"height",type:"float",label:"Height"}],outputs:[],params:{}},output_metallic:{type:"output_metallic",label:"Output Metallic",category:"output",inputs:[{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}},output_ao:{type:"output_ao",label:"Output AO",category:"output",inputs:[{id:"ao",type:"float",label:"AO"}],outputs:[],params:{}}},ue={defaultInputMaxConnections:1},ve=$=>{var e;return{type:$.type==="select"?"enum":$.type,default:$.default,ui:{min:$.min,max:$.max,step:$.step,dropdown:(e=$.options)==null?void 0:e.map(o=>({label:o,value:o}))}}},oe=($,e,o)=>({...$,constraints:{maxConnections:e?o.defaultInputMaxConnections:Number.POSITIVE_INFINITY,allowedTypes:[$.type]}}),de=($,e)=>{const o={...ue};return{id:$.type,label:$.label,category:$.category,inputs:$.inputs.map(l=>oe(l,!0,o)),outputs:$.outputs.map(l=>oe(l,!1,o)),params:Object.fromEntries(Object.entries($.params).map(([l,d])=>[l,ve(d)])),constraints:{singleConnectionInputs:!0}}},M=Object.fromEntries(Object.entries(j).map(([$,e])=>[$,de(e)]));M.output&&(M.output.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},M.output.inputs[1].constraints={maxConnections:1,allowedTypes:["float"]},M.output.inputs[2].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},M.output.inputs[3].constraints={maxConnections:1,allowedTypes:["float"]},M.output.inputs[4].constraints={maxConnections:1,allowedTypes:["float"]},M.output.inputs[5].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_baseColor&&(M.output_baseColor.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]}),M.output_roughness&&(M.output_roughness.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_normal&&(M.output_normal.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]}),M.output_height&&(M.output_height.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_metallic&&(M.output_metallic.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]}),M.output_ao&&(M.output_ao.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});const Z=$=>$.replace(/[^a-zA-Z0-9_]/g,"_"),me=($,e)=>`u_n${Z($)}_p${Z(e)}`,he=($,e)=>{const o=Z($);return typeof e=="number"?`t_${o}_${e}`:`t_${o}`};class ne{constructor(){this.uniforms={},this.textures=[]}setFloat(e,o){this.uniforms[e]={value:o}}setInt(e,o){this.uniforms[e]={value:Math.trunc(o)}}setBool(e,o){this.uniforms[e]={value:o}}setVec2(e,o){this.uniforms[e]={value:o}}setVec3(e,o){this.uniforms[e]={value:o}}setVec4(e,o){this.uniforms[e]={value:o}}bindTexture(e,o,l,d){this.textures.push({portName:he(e,l),bindingIndex:l,texture:o,sampler:d})}getUniforms(){return this.uniforms}getTextures(){return this.textures}}const re={baseColor:0,roughness:1,normal:2,height:3,metallic:4,ao:5},$e={baseColor:"output_baseColor",roughness:"output_roughness",normal:"output_normal",height:"output_height",metallic:"output_metallic",ao:"output_ao"},ge={output_baseColor:"baseColor",output_roughness:"roughness",output_normal:"normal",output_height:"height",output_metallic:"metallic",output_ao:"ao"},ye={0:"baseColor",1:"roughness",2:"normal",3:"height",4:"metallic",5:"ao"},ae=$=>ge[$]??null,xe=($,e)=>$.nodes.some(o=>o.type===$e[e]),ie=$=>{const e={},o=new Map($.nodes.map(v=>[v.id,v])),l={};for(const v of $.nodes){const m=ae(v.type);m&&(l[m]=!0)}for(const v of $.edges){const m=o.get(v.toId);if(!m)continue;const E=ae(m.type);E&&(e[E]=v)}const d=$.nodes.find(v=>v.type==="output");if(!d)return e;for(const v of $.edges){if(v.toId!==d.id)continue;const m=ye[v.toPort];m&&(l[m]||(e[m]=v))}return e},G={fade1:{id:"fade1",signature:{args:[{name:"t",type:"f32"}],returns:"f32"},pure:!0,wgsl:"fn fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }"},fade2:{id:"fade2",signature:{args:[{name:"t",type:"vec2f"}],returns:"vec2f"},deps:["fade1"],pure:!0,wgsl:"fn fade2(t: vec2f) -> vec2f { return vec2f(fade1(t.x), fade1(t.y)); }"},hash_u32:{id:"hash_u32",signature:{args:[{name:"x0",type:"u32"}],returns:"u32"},pure:!0,wgsl:`
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
`}},be={hq:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

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
  let tileMode = tile || false;
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
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 8; i++) {
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
  let tileMode = tile || false;
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

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
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

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

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
}`,lq:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

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
  let tileMode = tile || false;
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
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 5; i++) {
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
  let tileMode = tile || false;
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

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
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

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

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
}`,tileable:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

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
  let tileMode = tile || true;
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
  let tile = (tileFlag > 0.5) || true;
  for (var i: i32 = 0; i < 8; i++) {
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
  let tileMode = tile || true;
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

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
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

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

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
}`,debug:`const WGSL_PLUS_DEBUG_ATOMS: bool = true;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = true;

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
  let tileMode = tile || false;
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
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 8; i++) {
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
  let tileMode = tile || false;
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

const WGSL_PLUS_DEBUG_SDF: bool = true;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
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

const WGSL_PLUS_DEBUG_KERNELS: bool = true;

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
}`};function _e($="hq"){return be[$]}class we{constructor(e){this.bindings=new ne,this.uniformBindings={},this.uniformDescriptors=new Map,this.decls=new Set,this.funcs=new Map,this.funcDefs=[],this.warnings=new Set,this.activeOutputInputPort=0,this.backend="glsl",this.uniformIndexMap=new Map,this.nextUniformIndex=0,this.funcBodies=new Map,this.funcExprs=new Map,this.atomCse=new Map,this.tempCounterByFunc=new Map,this.atomInputExprStack=[],this.wgslVariant="hq",this.graph=e,this.nodes=new Map(e.nodes.map(o=>[o.id,o])),this.edgeIndex=new Map,e.edges.forEach(o=>{this.edgeIndex.set(`${o.toId}:${o.toPort}`,o)})}compile(e){this.backend=(e==null?void 0:e.backend)||"glsl",this.wgslVariant=(e==null?void 0:e.wgslVariant)||"hq",this.bindings=new ne,this.uniformBindings={},this.uniformDescriptors.clear(),this.decls.clear(),this.funcs.clear(),this.funcDefs=[],this.warnings.clear(),this.uniformIndexMap.clear(),this.nextUniformIndex=0,this.funcBodies.clear(),this.funcExprs.clear(),this.atomCse.clear(),this.tempCounterByFunc.clear(),this.activeOutputInputPort=re[(e==null?void 0:e.outputChannel)||"baseColor"]??0;const o=(e==null?void 0:e.readable)??!0;this.registerSystemUniforms();let l=null;const d=e==null?void 0:e.nodeId,v=e==null?void 0:e.nodeOutputPort;if(d){if(!this.nodes.has(d))return this.defaultShader();l=this.genFunction(d,v??0)}else{const m=(e==null?void 0:e.outputChannel)||"baseColor",_=ie(this.graph)[m];if(_)l=this.genFunction(_.fromId,_.fromPort);else if(!xe(this.graph,m)){const t=Array.from(this.nodes.values()).find(s=>s.type==="output");t&&(l=this.getOutputExpression(t.id,m))}l||(l=this.defaultOutputExpression(m))}return this.backend==="wgsl"?this.assembleWgsl(l,o):this.assembleGlsl(l,o)}assembleGlsl(e,o){const l=this.resolveAtomOrder(e.atoms??new Set),d="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",v=`
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_preview_offset;
      uniform float u_preview_zoom;
      uniform float u_preview_tile;
      ${Array.from(this.decls).join(`
`)}

      ${Se}

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
    `,m=o?this.toReadableSource(v):this.toRawSource(v),E=this.hashString(m);return{backend:"glsl",source:m,warnings:Array.from(this.warnings),hash:E,atomsUsed:l,uniforms:Array.from(this.uniformDescriptors.values()),vertex:d,fragment:m,uniformBindings:this.uniformBindings}}glslOutputAssign(e){return e.type==="float"?`float v = ${e.code}; gl_FragColor = vec4(vec3(v), 1.0);`:e.type==="vec2"?`vec2 v = ${e.code}; gl_FragColor = vec4(v, 0.0, 1.0);`:e.type==="vec3"?`vec3 v = ${e.code}; gl_FragColor = vec4(v, 1.0);`:e.type==="vec4"?`vec4 v = ${e.code}; gl_FragColor = v;`:`gl_FragColor = ${e.code};`}assembleWgsl(e,o){const l=this.buildUniformLayout(),d=e.atoms??new Set,v=this.resolveAtomOrder(d),m=this.emitAtomPrelude(d),E=_e(this.wgslVariant),_=`
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

// WGSL-Plus prelude variant: ${this.wgslVariant}
${E}

${m}

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
`,t=o?this.toReadableSource(_):this.toRawSource(_),s=this.hashString(t),W=this.rebuildGlslFromState(e,o);return{backend:"wgsl",source:W.source,warnings:Array.from(this.warnings),hash:s,atomsUsed:v,uniforms:Array.from(this.uniformDescriptors.values()),vertex:W.vertex,fragment:W.fragment,uniformBindings:this.uniformBindings,wgsl:t,uniformLayout:l}}rebuildGlslFromState(e,o){const l="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",d="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{source:d,vertex:l,fragment:d}}wgslOutputReturn(e){return e.type==="float"?`let v = ${e.code}; return vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; return vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; return vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; return v;`:`return ${e.code};`}wgslOutputColor(e){return e.type==="float"?`let v = ${e.code}; let col = vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; let col = vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; let col = vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; let col = v;`:`let col = ${e.code};`}buildUniformLayout(){const e=[];for(const[o,l]of this.uniformIndexMap.entries()){const d=this.uniformDescriptors.get(o),v=(d==null?void 0:d.type)||"float",m=v==="vec4"?4:v==="vec3"?3:v==="vec2"?2:1;e.push({name:o,type:v,index:l,size:m})}return e.sort((o,l)=>o.index-l.index)}sysIdx(e){return this.uniformIndexMap.get(e)??0}registerSystemUniforms(){const e=[["u_time","float",0],["u_resolution","vec2",[1,1]],["u_preview_offset","vec2",[0,0]],["u_preview_zoom","float",1],["u_preview_tile","float",0]];for(const[o,l,d]of e)this.uniformDescriptors.set(o,{name:o,type:l,nodeId:"system",key:o,defaultValue:d}),l==="vec2"?(this.bindings.setVec2(o,d),this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=2):(this.bindings.setFloat(o,typeof d=="number"?d:0),this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=1);this.uniformBindings=this.bindings.getUniforms()}defaultOutputExpression(e){const o=this.backend==="wgsl"?"vec3f":"vec3";return e==="baseColor"?{code:`${o}(0.0)`,type:"vec3"}:e==="normal"?{code:`${o}(0.5, 0.5, 1.0)`,type:"vec3"}:e==="ao"?{code:"1.0",type:"float"}:{code:"0.0",type:"float"}}getOutputExpression(e,o){const l=re[o]??0,d=this.defaultOutputExpression(o);return this.getSource(e,l,"uv",d.code,d.type)}defaultShader(){if(this.backend==="wgsl"){const o=ke;return{backend:"wgsl",source:"",warnings:[],hash:this.hashString(o),atomsUsed:[],uniforms:[],vertex:"",fragment:"",uniformBindings:{},wgsl:o,uniformLayout:[]}}const e="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{backend:"glsl",source:e,warnings:[],hash:this.hashString(e),atomsUsed:[],uniforms:[],vertex:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragment:e,uniformBindings:{}}}addUniform(e,o,l){const d=me(e,o),v=this.inferUniformType(e,o,l);if(!this.uniformDescriptors.has(d)){Array.isArray(l)?l.length===2?this.bindings.setVec2(d,[l[0],l[1]]):l.length===3?this.bindings.setVec3(d,[l[0],l[1],l[2]]):l.length>=4?this.bindings.setVec4(d,[l[0],l[1],l[2],l[3]]):this.bindings.setFloat(d,0):typeof l=="boolean"?this.bindings.setBool(d,l):v==="int"?this.bindings.setInt(d,Number(l)):this.bindings.setFloat(d,Number(l)),this.uniformBindings=this.bindings.getUniforms(),this.uniformDescriptors.set(d,{name:d,type:v,nodeId:e,key:o,defaultValue:l});const m=v==="vec4"?4:v==="vec3"?3:v==="vec2"?2:1;this.uniformIndexMap.set(d,this.nextUniformIndex),this.nextUniformIndex+=m,this.backend==="glsl"&&this.decls.add(`uniform ${this.toGLSLType(v)} ${d};`)}if(this.backend==="wgsl"){const m=this.uniformIndexMap.get(d);return v==="vec2"?`uv2(${m}u)`:`uf(${m}u)`}return d}sysRef(e){return this.backend==="wgsl"?`uf(${this.uniformIndexMap.get(e)??0}u)`:e}sysRef2(e){return this.backend==="wgsl"?`uv2(${this.uniformIndexMap.get(e)??0}u)`:e}cloneExpr(e){return{code:e.code,type:e.type,atoms:e.atoms?new Set(e.atoms):void 0}}mergeAtoms(e,o){o&&o.forEach(l=>e.add(l))}mergeExprAtoms(e,o){o!=null&&o.atoms&&o.atoms.forEach(l=>e.add(l))}toWgslDataType(e){return e==="float"?"f32":e==="vec2"?"vec2f":e==="vec3"?"vec3f":e==="vec4"?"vec4f":"f32"}callAtom(e,o,l,d){const v=G[o],m=new Set;d.forEach(B=>this.mergeExprAtoms(m,B)),m.add(o);const E=`${o}(${d.map(B=>B.code).join(", ")})`;if(!v)return this.warnings.add(`Missing atom definition: ${o}`),{code:E,type:l,atoms:m};if(!this.W||!v.pure)return{code:E,type:l,atoms:m};const _=this.atomCse.get(e)||new Map;this.atomCse.set(e,_);const t=`${o}|${l}|${d.map(B=>B.code).join("|")}`,s=_.get(t);if(s){const B=new Set;return this.mergeExprAtoms(B,s),this.mergeAtoms(B,m),{code:s.code,type:s.type,atoms:B}}const W=this.tempCounterByFunc.get(e)??0,A=`t_${W}`;this.tempCounterByFunc.set(e,W+1);const r=this.funcBodies.get(e)||[];this.funcBodies.set(e,r),r.push(`let ${A}: ${this.toWgslDataType(l)} = ${E};`);const T={code:A,type:l,atoms:m};return _.set(t,T),T}resolveAtomOrder(e){if(e.size===0)return[];const o=new Set,l=[...e];for(;l.length;){const _=l.pop();if(o.has(_))continue;o.add(_);const t=G[_];if(!t){this.warnings.add(`Unknown atom referenced: ${_}`);continue}(t.deps??[]).forEach(s=>{o.has(s)||l.push(s)})}const d=new Set,v=new Set,m=[],E=_=>{if(d.has(_))return;if(v.has(_)){this.warnings.add(`Atom dependency cycle detected at "${_}"`);return}const t=G[_];if(!t){this.warnings.add(`Missing atom during prelude emit: ${_}`);return}v.add(_),[...t.deps??[]].sort().forEach(s=>{o.has(s)&&E(s)}),v.delete(_),d.add(_),m.push(_)};return[...o].sort().forEach(_=>E(_)),m}emitAtomPrelude(e){const o=this.resolveAtomOrder(e);return o.length===0?"":o.map(l=>G[l].wgsl.trim()).join(`

`)}getSource(e,o,l="uv",d="0.0",v="float",m){const E=this.edgeIndex.get(`${e}:${o}`);if(E){const _=this.genFunction(E.fromId,E.fromPort);return{code:`${_.code.split("(uv)").join(`(${l})`)}`,type:_.type,atoms:_.atoms?new Set(_.atoms):void 0}}return{code:d,type:v,atoms:m?new Set(m):void 0}}asFloat(e,o,l){return e.type==="float"?e.code:(this.warnings.add(`Implicit cast at node ${o}: ${e.type} -> float (${l})`),e.type==="vec2"||e.type==="vec3"||e.type==="vec4"?`(${e.code}).x`:`(${e.code})`)}asVec4(e){return e.type==="vec4"?e.code:e.type==="vec3"?this.v4(`${e.code}.x, ${e.code}.y, ${e.code}.z, 1.0`):e.type==="vec2"?this.v4(`${e.code}.x, ${e.code}.y, 0.0, 1.0`):this.v4(`${e.code}, ${e.code}, ${e.code}, 1.0`)}sanitizeAtomSubgraph(e){if(!e||!Array.isArray(e.nodes)||!Array.isArray(e.edges))return null;const o=e.nodes.filter(v=>v&&typeof v.id=="string"&&typeof v.type=="string"&&typeof v.x=="number"&&typeof v.y=="number").map(v=>({id:v.id,type:v.type,x:v.x,y:v.y,params:v.params&&typeof v.params=="object"?v.params:{}}));if(o.length===0)return null;const l=new Set(o.map(v=>v.id)),d=e.edges.filter(v=>v&&typeof v.id=="string"&&typeof v.fromId=="string"&&typeof v.toId=="string"&&typeof v.fromPort=="number"&&typeof v.toPort=="number"&&l.has(v.fromId)&&l.has(v.toId));return{schemaVersion:typeof e.schemaVersion=="number"?e.schemaVersion:1,nodes:o,edges:d,resolution:typeof e.resolution=="number"?e.resolution:void 0}}atomInputPortIndex(e){return e==="atom_input"||e==="atom_input_a"?0:e==="atom_input_b"?1:e==="atom_input_c"?2:e==="atom_input_d"?3:null}compileAtomSubgraph(e,o){var u;const l=o[0]?this.cloneExpr(o[0]):{code:"0.0",type:"float"},d=this.sanitizeAtomSubgraph((u=e.params)==null?void 0:u.subgraph);if(!d)return this.cloneExpr(l);const v=`atom_${e.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,m=new Map,E=d.nodes.map(k=>{const N=`${v}_${k.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;return m.set(k.id,N),{...k,id:N,params:{...k.params||{}}}}),_=d.edges.filter(k=>m.has(k.fromId)&&m.has(k.toId)).map(k=>({...k,id:`${v}_e_${k.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,fromId:m.get(k.fromId),toId:m.get(k.toId)})),W=ie({nodes:E,edges:_}).height;if(!W)return this.warnings.add(`Atom graph ${e.id} has no connected Height output; using passthrough.`),this.cloneExpr(l);const A=new Map(E.map(k=>[k.id,k])),r=new Map;_.forEach(k=>{r.set(`${k.toId}:${k.toPort}`,k)});const T=this.nodes,B=this.edgeIndex;this.nodes=A,this.edgeIndex=r,this.atomInputExprStack.push(o.map(k=>this.cloneExpr(k)));try{return this.genFunction(W.fromId,W.fromPort)}catch(k){return this.warnings.add(`Atom graph ${e.id} compile failed: ${(k==null?void 0:k.message)||"unknown error"}`),this.cloneExpr(l)}finally{this.atomInputExprStack.pop(),this.nodes=T,this.edgeIndex=B}}get W(){return this.backend==="wgsl"}v2(e){return this.W?`vec2f(${e})`:`vec2(${e})`}v3(e){return this.W?`vec3f(${e})`:`vec3(${e})`}v4(e){return this.W?`vec4f(${e})`:`vec4(${e})`}modF(e,o){return this.W?`wmod(${e}, ${o})`:`mod(${e}, ${o})`}modV2(e,o){return this.W?`wmod2(${e}, ${o})`:`mod(${e}, ${o})`}atan2F(e,o){return this.W?`atan2(${e}, ${o})`:`atan(${e}, ${o})`}sel(e,o,l){return this.W?`select(${l}, ${o}, ${e})`:`((${e}) ? (${o}) : (${l}))`}tF(){return this.W?"f32":"float"}tI(){return this.W?"i32":"int"}tV2(){return this.W?"vec2f":"vec2"}genFunction(e,o=0){var N,ce,fe,pe;const l=this.nodes.get(e);if(!l)return{code:"0.0",type:"float"};const d=j[l.type];let v=((N=d==null?void 0:d.outputs[o])==null?void 0:N.type)||"float";const m=`${e}:${o}`,E=this.funcExprs.get(m);if(E)return this.cloneExpr(E);if(this.funcs.has(m))return{code:`${this.funcs.get(m)}(uv)`,type:v,atoms:void 0};const _=`fn_${e.replace(/[^a-zA-Z0-9]/g,"_")}_${o}`;if(l.type==="split"){const a=this.getSource(e,0,"uv",this.W?"vec4f(0.0)":"vec4(0.0)","vec4"),i=this.asVec4(a);if(o===4)return{code:`(${i}).xyz`,type:"vec3",atoms:a.atoms?new Set(a.atoms):void 0};const p=["x","y","z","w"][o]??"x";return{code:`(${i}).${p}`,type:"float",atoms:a.atoms?new Set(a.atoms):void 0}}this.funcs.set(m,_),this.funcBodies.set(m,[]),this.atomCse.set(m,new Map),this.tempCounterByFunc.set(m,0);const t=l.params,s=(a,i)=>this.addUniform(e,a,i),W=()=>this.sysRef("u_time"),A=new Set,r=(a,i="0.0",p="uv")=>{const c=typeof i=="string"?{code:i,type:"float"}:i,f=this.getSource(e,a,p,c.code,c.type,c.atoms);return this.mergeExprAtoms(A,f),f.type==="vec2"?(this.warnings.add(`Implicit cast at node ${l.type}: vec2 -> float (${e}, input ${a})`),`${f.code}.x`):f.type==="vec4"?(this.warnings.add(`Implicit cast at node ${l.type}: vec4 -> float (${e}, input ${a})`),`${f.code}.x`):f.code},T=(a,i="vec2(0.0)",p="uv")=>{const c=this.W?"vec2f(0.0)":i,f=this.getSource(e,a,p,c);return this.mergeExprAtoms(A,f),f.type==="float"?(this.warnings.add(`Implicit cast at node ${l.type}: float -> vec2 (${e}, input ${a})`),this.v2(f.code)):f.code},B=(a,i="vec3(0.0)",p="uv")=>{const c=this.W?"vec3f(0.0)":i,f=this.getSource(e,a,p,c,"vec3");return this.mergeExprAtoms(A,f),f.type==="float"?(this.warnings.add(`Implicit cast at node ${l.type}: float -> vec3 (${e}, input ${a})`),this.v3(`${f.code}, ${f.code}, ${f.code}`)):f.type==="vec2"?(this.warnings.add(`Implicit cast at node ${l.type}: vec2 -> vec3 (${e}, input ${a})`),this.v3(`${f.code}.x, ${f.code}.y, 0.0`)):f.type==="vec4"?(this.warnings.add(`Implicit cast at node ${l.type}: vec4 -> vec3 (${e}, input ${a})`),`(${f.code}).xyz`):f.code};let u="return 0.0;";switch(l.type){case"constant":u=`return ${s("val",t.value)};`;break;case"time":u=`return fract(${W()} * ${s("spd",t.speed)});`;break;case"uv_x":u="return uv.x;";break;case"uv_y":u="return uv.y;";break;case"uv":u="return uv;";break;case"uniform_color":{const a=s("r",t.r??.5),i=s("g",t.g??.5),p=s("b",t.b??.5);u=`return ${this.v3(`${a}, ${i}, ${p}`)};`;break}case"gaussian_noise":{const a=s("scale",t.scale??12),i=s("mean",t.mean??.5),p=s("stdDev",t.stdDev??.16),c=s("seed",t.seed??1337),f=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),x=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${c})`:`float(${c})`,w=this.sysRef2("u_resolution"),U=`${w}.x / max(${w}.y, 1.0)`,S=`(${this.sel(`${x} > 0.5`,this.v2(`uv.x * (${U}), uv.y`),"uv")} * max(${a}, 1.0) + ${this.v2(`${f}, ${y}`)})`,O=`max(hash2(floor(${S}) + ${this.v2(`${b} * 0.137, ${b} * 0.911`)}), 1e-5)`,q=`hash2(floor(${S}) + ${this.v2(`${b} * 0.271 + 19.0, ${b} * 0.613 + 73.0`)})`,L=`(sqrt(-2.0 * log(${O})) * cos(6.28318530718 * ${q}))`;u=`return clamp(${i} + ${L} * ${p}, 0.0, 1.0);`;break}case"tile_generator":{const a=s("scale",t.scale??6),i=s("radius",t.radius??.42),p=s("variation",t.variation??.25),c=s("seed",t.seed??1337),f=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),x=s("nonSquare",t.nonSquare??!0?1:0),b=this.W?`(${c})`:`float(${c})`,w=this.sysRef2("u_resolution"),U=`${w}.x / max(${w}.y, 1.0)`,S=`(${this.sel(`${x} > 0.5`,this.v2(`uv.x * (${U}), uv.y`),"uv")} * max(${a}, 1.0) + ${this.v2(`${f}, ${y}`)})`,O=`(fract(${S}) - 0.5)`,L=`hash2(${`floor(${S})`} + ${this.v2(`${b} * 0.151, ${b} * 0.337`)})`,F=`(1.0 - smoothstep(${i}, ${i} + 0.02, max(abs(${O}.x), abs(${O}.y))))`,P=`(1.0 - smoothstep(${i}, ${i} + 0.02, length(${O})))`;u=`return clamp(${t.shape==="dot"?P:F} * mix(1.0, ${L}, clamp(${p}, 0.0, 1.0)), 0.0, 1.0);`;break}case"noise":{const a=s("scale",t.scale??6),i=s("octaves",t.octaves??4),p=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),f=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${p})`:`float(${p})`,b=this.sysRef2("u_resolution"),w=`${b}.x / max(${b}.y, 1.0)`;u=`return fbm(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${a}, 0.00001) + ${this.v2(`${c}, ${f}`)} + ${this.v2(`${x} * 0.173, ${x} * 0.619`)})`}, ${i}, max(${a}, 0.00001), 1.0);`;break}case"perlin":{const a=s("scale",t.scale??32),i=s("disorder",t.disorder??0),p=s("disorderSpeed",t.disorderSpeed??1),c=s("seed",t.seed??1337),f=s("tileOffsetX",t.tileOffsetX??0),y=s("tileOffsetY",t.tileOffsetY??0),x=s("nonSquare",t.nonSquare??!0?1:0),b=this.sysRef2("u_resolution"),w=`${b}.x / max(${b}.y, 1.0)`,U=this.sel(`${x} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv"),I=`max(floor(${a} + 0.5), 1.0)`,S=`(${U} * ${I} + ${this.v2(`${f}, ${y}`)})`,O=this.W?`u32(max(${c}, 0.0))`:`float(${c})`,q=`(${this.sysRef("u_time")} * ${p})`;let L=S;if(this.W){const C=this.callAtom(m,"perlin2i_raw","float",[{code:`${S} + ${this.v2("17.0, 53.0")} + ${this.v2(`${q}*0.73, -${q}*0.41`)}`,type:"vec2"},{code:`(${O}) ^ 0x68bc21ebu`,type:"float"}]),Y=this.callAtom(m,"perlin2i_raw","float",[{code:`${S} + ${this.v2("113.0, 7.0")} + ${this.v2(`-${q}*0.29, ${q}*0.87`)}`,type:"vec2"},{code:`(${O}) ^ 0x02e5be93u`,type:"float"}]);this.mergeExprAtoms(A,C),this.mergeExprAtoms(A,Y),L=`(${S} + ${i} * ${this.v2(`${C.code}, ${Y.code}`)})`}else{const C=this.callAtom(m,"perlin2i_raw","float",[{code:`${S} + vec2(17.0,53.0) + vec2(${q}*0.73, -${q}*0.41)`,type:"vec2"},{code:`(${O}) + 101.0`,type:"float"}]),Y=this.callAtom(m,"perlin2i_raw","float",[{code:`${S} + vec2(113.0,7.0) + vec2(-${q}*0.29, ${q}*0.87)`,type:"vec2"},{code:`(${O}) + 211.0`,type:"float"}]);this.mergeExprAtoms(A,C),this.mergeExprAtoms(A,Y),L=`(${S} + ${i} * vec2(${C.code}, ${Y.code}))`}let F;this.W?(F=this.callAtom(m,"perlin2i_tiled","float",[{code:L,type:"vec2"},{code:I,type:"float"},{code:O,type:"float"}]),this.mergeExprAtoms(A,F)):F={code:`perlin2i_tiled(${L}, ${I}, ${O})`,type:"float"};const P=this.sel(`${a} < 1.5`,"0.5",F.code);if((ce=l.params)!=null&&ce.subgraph){const C=this.compileAtomSubgraph(l,[{code:P,type:"float"}]);this.mergeExprAtoms(A,C),u=`return ${this.asFloat(C,l.type,e)};`}else u=`return ${P};`;break}case"disorder":{const a=s("amount",t.amount??.08),i=s("scale",t.scale??8),p=s("speed",t.speed??.5),c=s("seed",t.seed??1337),f=this.W?`u32(max(${c}, 0.0))`:`float(${c})`,y=`(${this.sysRef("u_time")} * ${p})`,x=`(uv * max(${i}, 0.00001))`;let b,w;this.W?(b=this.callAtom(m,"perlin2i_raw","float",[{code:`${x} + vec2f(17.0,53.0) + vec2f(${y}*0.73, -${y}*0.41)`,type:"vec2"},{code:`(${f}) ^ 0x68bc21ebu`,type:"float"}]),w=this.callAtom(m,"perlin2i_raw","float",[{code:`${x} + vec2f(113.0,7.0) + vec2f(-${y}*0.29, ${y}*0.87)`,type:"vec2"},{code:`(${f}) ^ 0x02e5be93u`,type:"float"}])):(b=this.callAtom(m,"perlin2i_raw","float",[{code:`${x} + vec2(17.0,53.0) + vec2(${y}*0.73, -${y}*0.41)`,type:"vec2"},{code:`(${f}) + 101.0`,type:"float"}]),w=this.callAtom(m,"perlin2i_raw","float",[{code:`${x} + vec2(113.0,7.0) + vec2(-${y}*0.29, ${y}*0.87)`,type:"vec2"},{code:`(${f}) + 211.0`,type:"float"}])),this.mergeExprAtoms(A,b),this.mergeExprAtoms(A,w);const U=`(uv + ${a} * ${this.v2(`${b.code}, ${w.code}`)})`,I=this.callAtom(m,"perlin2i","float",[{code:x,type:"vec2"},{code:f,type:"float"}]);this.mergeExprAtoms(A,I),u=`return ${r(0,I,U)};`;break}case"voronoi":{const a=s("scale",t.scale??5),i=s("jitter",t.jitter??1),p=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),f=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${p})`:`float(${p})`,b=this.sysRef2("u_resolution"),w=`${b}.x / max(${b}.y, 1.0)`,I=`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${a}, 0.00001) + ${this.v2(`${c}, ${f}`)} + ${this.v2(`${x} * 0.137, ${x} * 0.911`)})`,S=`max(${a}, 0.00001)`,O=`voro(${I}, ${i}, ${S}, true)`,q=this.v4("cells,V.y,V.z,V.w");this.W?u=`{ var V=${O}; let f1=V.x; let cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`:u=`{ vec4 V=${O}; float f1=V.x; float cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`;break}case"worley":{const a=s("scale",t.scale??5),i=s("jitter",t.jitter??1),p=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??t.seed??0),f=s("tileOffsetY",t.tileOffsetY??t.seed??0),y=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${p})`:`float(${p})`,b=this.sysRef2("u_resolution"),w=`${b}.x / max(${b}.y, 1.0)`;u=`return voro(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${a}, 0.00001) + ${this.v2(`${c}, ${f}`)} + ${this.v2(`${x} * 0.137, ${x} * 0.911`)})`}, ${i}, max(${a}, 0.00001), true);`;break}case"bnw_spots2_v2":{const a=s("scale",t.scale??10),i=s("tileOffsetX",t.tileOffsetX??0),p=s("tileOffsetY",t.tileOffsetY??0),c=s("seed",t.seed??1337),f=s("nonSquareExpansion",t.nonSquareExpansion??!0?1:0),y=s("grainAmount",t.grainAmount??.22),x=s("grainThreshold",t.grainThreshold??.86),b=s("contrast",t.contrast??1.08),w=this.sysRef2("u_resolution"),U=this.v2(`${i}, ${p}`);if(this.W){const I=`u32(max(${c}, 0.0))`,S=this.callAtom(m,"bnw_spots2_v2","float",[{code:"uv",type:"vec2"},{code:`uv * ${w}`,type:"vec2"},{code:w,type:"vec2"},{code:a,type:"float"},{code:U,type:"vec2"},{code:I,type:"float"},{code:f,type:"float"},{code:y,type:"float"},{code:x,type:"float"},{code:b,type:"float"}]);this.mergeExprAtoms(A,S),u=`return ${S.code};`}else{const I=`float(${a})`,S=`float(${c})`,O=`clamp(floor(${I} + 0.5), 1.0, 32.0)`,q=`(${w}.x / max(${w}.y, 1.0))`,F=`(${this.sel(`${f} > 0.5`,`vec2(uv.x * (${q}), uv.y)`,"uv")} * ${O} + ${U})`,P=F,C=O,z=`clamp((${`smoothstep(0.35, 0.75, ${`(
            0.5   * perlin2i_tiled(${P} * 1.0, ${C} * 1.0, ${S} + 17.0) +
            0.25  * perlin2i_tiled(${P} * 2.0, ${C} * 2.0, ${S} + 31.0) +
            0.125 * perlin2i_tiled(${P} * 4.0, ${C} * 4.0, ${S} + 53.0) +
            0.0625* perlin2i_tiled(${P} * 8.0, ${C} * 8.0, ${S} + 79.0)
          ) / 0.9375`})`} - 0.5) * max(${b}, 0.001) + 0.5, 0.0, 1.0)`,K=`perlin2i_tiled(${F} * 2.0 + vec2(13.2, -9.7), ${C} * 2.0, ${S} + 137.0)`,J=`clamp(${x} + (${K} - 0.5) * 0.12, 0.0, 1.0)`,ee=`hash2(floor(uv * ${w}) + vec2(${S} * 0.013, ${S} * 0.071))`,te=`step(${J}, ${ee})`;u=`return clamp(${z} - clamp(${y}, 0.0, 1.0) * ${te}, 0.0, 1.0);`}break}case"checker":u=`return ${this.modF(`floor(uv.x * ${s("sc",t.scale)}) + floor(uv.y * ${s("sc",t.scale)})`,"2.0")};`;break;case"panner":{const a=s("sx",t.speedX),i=s("sy",t.speedY),p=`uv + ${this.v2(`${a}, ${i}`)} * ${W()}`,c=`fbm(${p}, 4.0, 4.0, 0.0)`;u=`return ${r(0,c,p)};`;break}case"tile_sampler":{const a=s("scale",t.scale??6),i=`(${s("ang",(t.angle??0)*Math.PI/180)})`,p=s("tileOffsetX",t.tileOffsetX??0),c=s("tileOffsetY",t.tileOffsetY??0),f="(uv - 0.5)",x=`fract((${this.v2(`cos(${i}) * ${f}.x - sin(${i}) * ${f}.y, sin(${i}) * ${f}.x + cos(${i}) * ${f}.y`)} + 0.5) * max(${a}, 1.0) + ${this.v2(`${p}, ${c}`)})`;u=`return ${r(0,"0.0",x)};`;break}case"gradient":{const a=s("ang",t.angle*Math.PI/180);t.type==="radial"?u="return clamp(1.0 - length(uv - 0.5) * 2.0, 0.0, 1.0);":t.type==="angular"?this.W?u="{ var nx = uv - 0.5; return (atan2(nx.y, nx.x) / 3.14159 + 1.0) * 0.5; }":u="vec2 nx = uv - 0.5; return (atan(nx.y, nx.x) / 3.14159 + 1.0) * 0.5;":this.W?u=`{ var nx = uv - 0.5; return clamp(cos(${a}) * nx.x + sin(${a}) * nx.y + 0.5, 0.0, 1.0); }`:u=`vec2 nx = uv - 0.5; return clamp(cos(${a}) * nx.x + sin(${a}) * nx.y + 0.5, 0.0, 1.0);`;break}case"shape":{const a=t.type||"circle",i=this.v2(`${s("px",t.posX??.5)}, ${s("py",t.posY??.5)}`),p=s("sc",t.scale??.5),c=s("rad",t.rad??.5),f=s("bl",t.blur??.01),y=s("tk",t.thick??.05);let x;a==="ring"?x=`abs(sdCircle(sp, ${c})) - ${y}`:a==="square"?x=`sdBox(sp, ${this.v2(c)})`:a==="triangle"?x=`sdEquilateralTriangle(sp, ${c})`:a==="polygon"?x=`sdPolygon(sp, ${c}, 6)`:a==="star"?x=`sdStar(sp, ${c}, 5, 2.5)`:x=`sdCircle(sp, ${c})`,this.W?u=`{ var sp = (uv - ${i}) / max(${p}, 0.0001); let d = ${x}; return 1.0 - smoothstep(-${f}, ${f}, d); }`:u=`vec2 sp = (uv - ${i}) / max(${p}, 0.0001); float d = ${x}; return 1.0 - smoothstep(-${f}, ${f}, d);`;break}case"add":u=`return ${r(0)} + ${r(1,s("b",t.b))};`;break;case"subtract":u=`return ${r(0)} - ${r(1,s("b",t.b))};`;break;case"multiply":u=`return ${r(0,"1.0")} * ${r(1,s("b",t.b))};`;break;case"divide":u=`return ${r(0,"1.0")} / max(${r(1,s("b",t.b))}, 0.0001);`;break;case"power":u=`return pow(max(${r(0,"0.5")}, 0.0), ${r(1,s("exp",t.exp))});`;break;case"oneminus":u=`return 1.0 - ${r(0)};`;break;case"abs":u=`return abs(${r(0)});`;break;case"negate":u=`return -(${r(0)});`;break;case"sqrt":u=`return sqrt(max(${r(0)}, 0.0));`;break;case"sign":u=`return sign(${r(0)}) * 0.5 + 0.5;`;break;case"frac":u=`return fract(${r(0)});`;break;case"floor":u=`return floor(${r(0)});`;break;case"ceil":u=`return ceil(${r(0)});`;break;case"min2":u=`return min(${r(0)}, ${r(1,s("b",t.b))});`;break;case"max2":u=`return max(${r(0)}, ${r(1,s("b",t.b))});`;break;case"mod":u=`return ${this.modF(r(0),`max(${r(1,s("b",t.b))}, 0.001)`)};`;break;case"clamp01":u=`return clamp(${r(0)}, 0.0, 1.0);`;break;case"clamp":u=`return clamp(${r(0)}, ${s("lo",t.lo)}, ${s("hi",t.hi)});`;break;case"remap":{const a=s("il",t.inLo),i=s("ih",t.inHi),p=s("ol",t.outLo),c=s("oh",t.outHi);this.W?u=`{ let t = clamp((${r(0)} - ${a}) / max(${i} - ${a}, 0.001), 0.0, 1.0); return ${p} + t * (${c} - ${p}); }`:u=`float t = clamp((${r(0)} - ${a}) / max(${i} - ${a}, 0.001), 0.0, 1.0); return ${p} + t * (${c} - ${p});`;break}case"sin":u=`return sin(${r(0,"uv.x")} * ${s("freq",t.freq)} * 6.28318 + ${s("ph",t.phase)}) * 0.5 + 0.5;`;break;case"cos":u=`return cos(${r(0,"uv.x")} * ${s("freq",t.freq)} * 6.28318 + ${s("ph",t.phase)}) * 0.5 + 0.5;`;break;case"tan":u=`return clamp(tan(${r(0,"uv.x")} * ${s("freq",t.freq)} * 3.14159) * 0.08 + 0.5, 0.0, 1.0);`;break;case"atan2node":u=`return (${this.atan2F(r(0,"uv.y - 0.5"),r(1,"uv.x - 0.5"))} / 3.14159 + 1.0) * 0.5;`;break;case"lerp":{const a=this.getSource(e,0,"uv","0.0","float"),i=this.getSource(e,1,"uv","1.0","float");this.mergeExprAtoms(A,a),this.mergeExprAtoms(A,i);const p=`clamp(${r(2,s("t",t.t))}, 0.0, 1.0)`,c=a.type==="vec3"||a.type==="vec4"||i.type==="vec3"||i.type==="vec4",f=!c&&(a.type==="vec2"||i.type==="vec2");if(c){v="vec3";const y=this.v3(`${p}, ${p}, ${p}`);u=`return mix(${B(0,this.W?"vec3f(0.0)":"vec3(0.0)")}, ${B(1,this.W?"vec3f(1.0)":"vec3(1.0)")}, ${y});`}else if(f){v="vec2";const y=this.v2(`${p}, ${p}`);u=`return mix(${T(0,this.W?"vec2f(0.0)":"vec2(0.0)")}, ${T(1,this.W?"vec2f(1.0)":"vec2(1.0)")}, ${y});`}else u=`return mix(${r(0)}, ${r(1,"1.0")}, ${p});`;break}case"smoothstep":u=`return smoothstep(${s("lo",t.lo)}, ${s("hi",t.hi)}, ${r(0,"uv.x")});`;break;case"step":u=`return step(${r(0,s("e",t.edge))}, ${r(1,"uv.x")});`;break;case"ifgt":u=`return ${this.sel(`(${r(0)}) > (${r(1,s("b",t.b))})`,r(2,"1.0"),r(3,"0.0"))};`;break;case"blend":{const a=r(0),i=r(1,"1.0"),p=s("op",t.opacity),c=t.mode;let f=i;c==="add"?f=`min(${a} + ${i}, 1.0)`:c==="multiply"?f=`(${a}) * (${i})`:c==="screen"?f=`1.0 - (1.0 - ${a}) * (1.0 - ${i})`:c==="overlay"?f=this.sel(`${a} < 0.5`,`2.0 * ${a} * ${i}`,`1.0 - 2.0 * (1.0 - ${a}) * (1.0 - ${i})`):c==="difference"?f=`abs(${a} - ${i})`:c==="dodge"?f=`clamp(${a} / (1.0 - ${i} + 0.001), 0.0, 1.0)`:c==="burn"&&(f=`clamp(1.0 - (1.0 - ${a}) / (${i} + 0.001), 0.0, 1.0)`),u=`return mix(${a}, ${f}, ${p});`;break}case"levels":{const a=s("il",t.inMin),i=s("ih",t.inMax),p=s("g",t.gamma);this.W?u=`{ let t = clamp((${r(0)} - ${a}) / max(${i} - ${a}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${p}, 0.01)); }`:u=`float t = clamp((${r(0)} - ${a}) / max(${i} - ${a}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${p}, 0.01));`;break}case"histogram_scan":{const a=s("pos",t.position??.5),i=s("wid",t.width??.1),p=s("ctr",t.contrast??1),c=r(0),f=`smoothstep(${a} - max(${i}, 0.0005), ${a}, ${c})`,y=`(1.0 - smoothstep(${a}, ${a} + max(${i}, 0.0005), ${c}))`;u=`return clamp(${f} * ${y} * ${p}, 0.0, 1.0);`;break}case"histogram_range":{const a=s("inMin",t.inMin??.15),i=s("inMax",t.inMax??.85),p=s("outMin",t.outMin??0),c=s("outMax",t.outMax??1),f=r(0);this.W?u=`{ let t = clamp((${f} - ${a}) / max(${i} - ${a}, 0.0001), 0.0, 1.0); return mix(${p}, ${c}, t); }`:u=`float t = clamp((${f} - ${a}) / max(${i} - ${a}, 0.0001), 0.0, 1.0); return mix(${p}, ${c}, t);`;break}case"curve":{const a=s("lift",t.lift??0),i=s("gamma",t.gamma??1),p=s("gain",t.gain??1);u=`return clamp(pow(clamp(${r(0)} + ${a}, 0.0, 1.0), 1.0 / max(${i}, 0.001)) * ${p}, 0.0, 1.0);`;break}case"transform_2d":{const a=s("offX",t.offsetX??0),i=s("offY",t.offsetY??0),p=`(${s("rot",t.rotation??0)} * 0.017453292519943295)`,c=s("sc",t.scale??1),f=s("tile",t.tile??!0?1:0),y=`((uv - 0.5) / max(${c}, 0.0001))`,b=`(${this.v2(`cos(${p}) * ${y}.x - sin(${p}) * ${y}.y, sin(${p}) * ${y}.x + cos(${p}) * ${y}.y`)} + 0.5 + ${this.v2(`${a}, ${i}`)})`,w=`clamp(${b}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`,U=this.sel(`${f} > 0.5`,`fract(${b})`,w);u=`return ${r(0,"0.0",U)};`;break}case"safe_transform":{const a=s("offX",t.offsetX??0),i=s("offY",t.offsetY??0),p=s("sc",t.scale??1),c=s("tile",t.tile??!1?1:0),f=this.sysRef2("u_resolution"),y=`(0.5 / max(min(${f}.x, ${f}.y), 1.0))`,x=`((uv - 0.5) / max(${p}, 0.0001) + 0.5 + ${this.v2(`${a}, ${i}`)})`,b=`clamp(${x}, ${this.v2(`${y}, ${y}`)}, ${this.v2(`1.0 - ${y}, 1.0 - ${y}`)})`,w=this.sel(`${c} > 0.5`,`fract(${x})`,b);u=`return ${r(0,"0.0",w)};`;break}case"warp":{const a=T(1,this.W?"vec2f(0.0)":"vec2(0.0)"),i=s("str",t.strength),p=`(uv + ${a} * ${i})`;u=`return ${r(0,"0.0",p)};`;break}case"vector_warp":{const a=s("int",t.intensity??.15),i=s("ctr",t.centered??!0?1:0),p=s("tile",t.tile??!0?1:0),c=T(1,this.W?"vec2f(0.5)":"vec2(0.5)"),y=`(uv + (${this.sel(`${i} > 0.5`,`(${c} - ${this.v2("0.5, 0.5")})`,c)}) * ${a})`,x=this.sel(`${p} > 0.5`,`fract(${y})`,`clamp(${y}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`);u=`return ${r(0,"0.0",x)};`;break}case"directional_warp":{const a=s("amount",t.amount??.15),i=s("angle",t.angle??0),p=r(1,"0.5"),f=`(uv + ${this.v2(`cos(${i}), sin(${i})`)} * ((${p} - 0.5) * ${a}))`;u=`return ${r(0,"0.0",f)};`;break}case"edge_detect":{const a=this.sysRef2("u_resolution"),i=`(${s("radius",t.radius)} / max(${a}.x, ${a}.y))`,p=s("strength",t.strength);this.W?u=`{
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
            return clamp(edge * ${p}, 0.0, 1.0);
          }`:u=`
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
            return clamp(edge * ${p}, 0.0, 1.0);
          `;break}case"blur":{const a=s("amt",t.amount??.05),i=s("ctr",t.center??0),p=`${i} - ${a}`,c=`${i} + ${a}`;u=`return 1.0 - smoothstep(${p}, ${c}, ${r(0,"0.5")});`;break}case"highpass_grayscale":{const a=s("radius",t.radius??1),i=s("intensity",t.intensity??1),p=this.sysRef2("u_resolution"),c=`(max(${a}, 0.0001) / max(${p}.x, ${p}.y))`,f=r(0,"0.0"),y=r(0,"0.0",`(uv + ${this.v2(`${c}, 0.0`)})`),x=r(0,"0.0",`(uv - ${this.v2(`${c}, 0.0`)})`),b=r(0,"0.0",`(uv + ${this.v2(`0.0, ${c}`)})`),w=r(0,"0.0",`(uv - ${this.v2(`0.0, ${c}`)})`),U=`((${f} + ${y} + ${x} + ${b} + ${w}) * 0.2)`;u=`return clamp(((${f} - ${U}) * ${i}) + 0.5, 0.0, 1.0);`;break}case"slope_blur":{const a=s("intensity",t.intensity??2),i=s("samples",t.samples??4),p=this.sysRef2("u_resolution"),c=r(1,r(0,"0.5")),y=`(${`normalize(${this.v2(`${c} - 0.5, 1.0 - ${c}`)} + ${this.v2("1e-4, 1e-4")})`} * (${a} / max(${p}.x, ${p}.y)))`,x=`step(0.5, ${i})`,b=`step(1.5, ${i})`,w=`step(2.5, ${i})`,U=`step(3.5, ${i})`,I=r(0,"0.0"),S=r(0,"0.0",`(uv + ${y})`),O=r(0,"0.0",`(uv - ${y})`),q=r(0,"0.0",`(uv + ${y} * 2.0)`),L=r(0,"0.0",`(uv - ${y} * 2.0)`),F=r(0,"0.0",`(uv + ${y} * 3.0)`),P=r(0,"0.0",`(uv - ${y} * 3.0)`),C=r(0,"0.0",`(uv + ${y} * 4.0)`),Y=r(0,"0.0",`(uv - ${y} * 4.0)`),V=`(${I} + ${x} * (${S} + ${O}) + ${b} * (${q} + ${L}) + ${w} * (${F} + ${P}) + ${U} * (${C} + ${Y}))`,z=`(1.0 + 2.0 * (${x} + ${b} + ${w} + ${U}))`;u=`return clamp(${V} / max(${z}, 1.0), 0.0, 1.0);`;break}case"non_uniform_blur":{const a=s("radius",t.radius??2),i=s("samples",t.samples??4),p=this.sysRef2("u_resolution"),c=r(1,"1.0"),f=`(max(${a}, 0.0) * clamp(${c}, 0.0, 1.0) / max(${p}.x, ${p}.y))`,y=`step(0.5, ${i})`,x=`step(1.5, ${i})`,b=`step(2.5, ${i})`,w=`step(3.5, ${i})`,U=r(0,"0.0"),I=r(0,"0.0",`(uv + ${this.v2(`${f}, 0.0`)})`),S=r(0,"0.0",`(uv - ${this.v2(`${f}, 0.0`)})`),O=r(0,"0.0",`(uv + ${this.v2(`0.0, ${f}`)})`),q=r(0,"0.0",`(uv - ${this.v2(`0.0, ${f}`)})`),L=r(0,"0.0",`(uv + ${this.v2(`2.0 * ${f}, 0.0`)})`),F=r(0,"0.0",`(uv - ${this.v2(`2.0 * ${f}, 0.0`)})`),P=r(0,"0.0",`(uv + ${this.v2(`0.0, 2.0 * ${f}`)})`),C=r(0,"0.0",`(uv - ${this.v2(`0.0, 2.0 * ${f}`)})`),Y=r(0,"0.0",`(uv + ${this.v2(`3.0 * ${f}, 0.0`)})`),V=r(0,"0.0",`(uv - ${this.v2(`3.0 * ${f}, 0.0`)})`),z=r(0,"0.0",`(uv + ${this.v2(`0.0, 3.0 * ${f}`)})`),K=r(0,"0.0",`(uv - ${this.v2(`0.0, 3.0 * ${f}`)})`),J=r(0,"0.0",`(uv + ${this.v2(`4.0 * ${f}, 0.0`)})`),ee=r(0,"0.0",`(uv - ${this.v2(`4.0 * ${f}, 0.0`)})`),te=r(0,"0.0",`(uv + ${this.v2(`0.0, 4.0 * ${f}`)})`),Ue=r(0,"0.0",`(uv - ${this.v2(`0.0, 4.0 * ${f}`)})`),qe=`(${U}
          + ${y} * (${I} + ${S} + ${O} + ${q})
          + ${x} * (${L} + ${F} + ${P} + ${C})
          + ${b} * (${Y} + ${V} + ${z} + ${K})
          + ${w} * (${J} + ${ee} + ${te} + ${Ue}))`,Ie=`(1.0 + 4.0 * (${y} + ${x} + ${b} + ${w}))`;u=`return clamp(${qe} / max(${Ie}, 1.0), 0.0, 1.0);`;break}case"flood_fill":{const a=s("scale",t.scale??8),i=s("threshold",t.threshold??.1),p=s("seed",t.seed??1337),c=s("tileOffsetX",t.tileOffsetX??0),f=s("tileOffsetY",t.tileOffsetY??0),y=s("nonSquare",t.nonSquare??!0?1:0),x=this.W?`(${p})`:`float(${p})`,b=this.sysRef2("u_resolution"),w=`${b}.x / max(${b}.y, 1.0)`,O=`hash2(${`floor(${`(${this.sel(`${y} > 0.5`,this.v2(`uv.x * (${w}), uv.y`),"uv")} * max(${a}, 1.0) + ${this.v2(`${c}, ${f}`)})`})`} + ${this.v2(`${x} * 0.271, ${x} * 0.619`)})`,q=`step(${i}, ${r(0,"1.0")})`;u=`return ${O} * ${q};`;break}case"height_to_normal":{const a=this.sysRef2("u_resolution"),i=s("radius",t.radius??1),p=`(1.0 / max(${a}.x, ${a}.y))`,c=`(max(${i}, 0.0001) * ${p})`,f=s("strength",t.strength??1),y=s("flipY",t.flipY??!1?-1:1);this.W?u=`{
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
            let k = (${f} / max(${i}, 0.0001)) * (1.0 / 32.0);
            let gx = -dX * k;
            let gy = -dY * k * ${y};
            let n = normalize(vec3f(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`:u=`{
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
            float k = (${f} / max(${i}, 0.0001)) * (1.0 / 32.0);
            float gx = -dX * k;
            float gy = -dY * k * ${y};
            vec3 n = normalize(vec3(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;break}case"normal_combine":{const a=B(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),i=B(1,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),p=s("strength",t.strength??1);this.W?u=`{
            let b = normalize(${a} * 2.0 - 1.0);
            let d = normalize(${i} * 2.0 - 1.0);
            let ds = normalize(vec3f(d.xy * ${p}, d.z));
            let n = normalize(vec3f(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`:u=`{
            vec3 b = normalize(${a} * 2.0 - 1.0);
            vec3 d = normalize(${i} * 2.0 - 1.0);
            vec3 ds = normalize(vec3(d.xy * ${p}, d.z));
            vec3 n = normalize(vec3(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`;break}case"normal_normalize":{const a=B(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),i=s("flipY",t.flipY??!1?-1:1);this.W?u=`{
            let n0 = ${a} * 2.0 - 1.0;
            let n1 = normalize(vec3f(n0.x, n0.y * ${i}, n0.z));
            return n1 * 0.5 + 0.5;
          }`:u=`{
            vec3 n0 = ${a} * 2.0 - 1.0;
            vec3 n1 = normalize(vec3(n0.x, n0.y * ${i}, n0.z));
            return n1 * 0.5 + 0.5;
          }`;break}case"remote":u="return 0.0;";break;case"atom_input":case"atom_input_a":case"atom_input_b":case"atom_input_c":case"atom_input_d":{const a=this.atomInputExprStack.length>0?this.atomInputExprStack[this.atomInputExprStack.length-1]:null,i=this.atomInputPortIndex(l.type)??0,p=(a==null?void 0:a[i])??(a==null?void 0:a[0])??null;if(!p){this.warnings.add(`Atom Input node "${e}" used outside atom graph.`),u="return 0.0;";break}a&&i>=a.length&&this.warnings.add(`Atom Input "${l.type}" requested missing parent port ${i}; using port 0.`),this.mergeExprAtoms(A,p),u=`return ${this.asFloat(p,l.type,`${e}`)};`;break}case"atom_graph":{const a=Math.max(1,((pe=(fe=j[l.type])==null?void 0:fe.inputs)==null?void 0:pe.length)||1),i=[];for(let c=0;c<a;c+=1){const f=this.getSource(e,c,"uv","0.0","float");i.push(f),this.mergeExprAtoms(A,f)}const p=this.compileAtomSubgraph(l,i);this.mergeExprAtoms(A,p),u=`return ${this.asFloat(p,l.type,e)};`;break}case"buffer":{if(o===1){const a=`1.0 / max(${this.sysRef2("u_resolution")}.x, 1.0)`;this.W?u=`{
              let s = ${a};
              let c  = ${r(0,"0.0","uv")};
              let c1 = ${r(0,"0.0","uv + vec2f(s, 0.0)")};
              let c2 = ${r(0,"0.0","uv + vec2f(-s, 0.0)")};
              let c3 = ${r(0,"0.0","uv + vec2f(0.0, s)")};
              let c4 = ${r(0,"0.0","uv + vec2f(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            }`:u=`
              float s = ${a};
              float c  = ${r(0,"0.0","uv")};
              float c1 = ${r(0,"0.0","uv + vec2(s, 0.0)")};
              float c2 = ${r(0,"0.0","uv + vec2(-s, 0.0)")};
              float c3 = ${r(0,"0.0","uv + vec2(0.0, s)")};
              float c4 = ${r(0,"0.0","uv + vec2(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            `}else u=`return ${r(0)};`;break}case"output":u=`return ${r(0)};`;break;case"output_baseColor":u=`return ${r(0)};`;break;case"output_normal":u=`return ${r(0)};`;break;case"output_roughness":u=`return ${r(0)};`;break;case"output_height":u=`return ${r(0)};`;break;case"output_metallic":u=`return ${r(0)};`;break;case"output_ao":u=`return ${r(0)};`;break;default:u="return 0.5;";break}if(this.W){const a=this.toWgslDataType(v),p=[...this.funcBodies.get(m)||[],u].join(`
`),c=((d==null?void 0:d.label)||l.type).replace(/\r?\n/g," ");this.funcDefs.push(`// NodeRef id=${e} type=${l.type} port=${o} label=${c}
fn ${_}(uv: vec2f) -> ${a} {
${p}
}`)}else this.funcDefs.push(`// Node: ${(d==null?void 0:d.label)||l.type} (id=${e})
${v} ${_}(vec2 uv) { ${u} }`);const k={code:`${_}(uv)`,type:v,atoms:A.size>0?new Set(A):void 0};return this.funcExprs.set(m,k),this.cloneExpr(k)}inferUniformType(e,o,l){var m,E;if(Array.isArray(l))return l.length>=4?"vec4":l.length===3?"vec3":l.length===2?"vec2":"float";if(typeof l=="boolean")return"bool";const d=this.nodes.get(e),v=d?(E=(m=j[d.type])==null?void 0:m.params)==null?void 0:E[o]:void 0;return(v==null?void 0:v.type)==="int"?"int":"float"}toGLSLType(e){return e==="float"||e==="int"?"float":e==="bool"?"bool":e==="vec2"?"vec2":e==="vec3"?"vec3":"vec4"}toReadableSource(e){return e.split(`
`).map(o=>o.trimEnd()).join(`
`).trim()}toRawSource(e){return e.replace(/\/\/[^\n\r]*/g,"").replace(/\s+/g," ").trim()}hashString(e){let o=2166136261;for(let l=0;l<e.length;l++)o^=e.charCodeAt(l),o+=(o<<1)+(o<<4)+(o<<7)+(o<<8)+(o<<24);return`fnv1a_${(o>>>0).toString(16)}`}}const Se=`
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
`,ke=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;
fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }

struct VSOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut; out.pos = vec4f(p[vi], 0, 1); out.uv = p[vi] * 0.5 + 0.5; return out;
}
@fragment fn fs_main(inp: VSOut) -> @location(0) vec4f { return vec4f(0, 0, 0, 1); }
`;function Ee($,e){return $==="bool"?!!e:$==="int"?Math.trunc(Number(e)||0):$==="float"?Number(e)||0:e}function Ae($,e,o){var m;if(e in o)return e;const l={val:"value",spd:"speed",sc:"scale",se:"seed",jt:"jitter",ang:"angle",px:"posX",py:"posY",r:"rot",rad:"rad",bl:"blur",tk:"thick",exp:"exp",freq:"freq",ph:"phase",t:"t",e:"edge",op:"opacity",g:"gamma",str:"strength",il:"inMin",ih:"inMax",ol:"outLo",oh:"outHi"},v=((m={add:{b:"b"},subtract:{b:"b"},multiply:{b:"b"},divide:{b:"b"},min2:{b:"b"},max2:{b:"b"},mod:{b:"b"},ifgt:{b:"b"},remap:{il:"inLo",ih:"inHi",ol:"outLo",oh:"outHi"},clamp:{lo:"lo",hi:"hi"},smoothstep:{lo:"lo",hi:"hi"},shape:{px:"posX",py:"posY",sc:"scale",bl:"blur",tk:"thick"},panner:{sx:"speedX",sy:"speedY"},levels:{il:"inMin",ih:"inMax",g:"gamma"},step:{e:"edge"}}[$])==null?void 0:m[e])||l[e];return v&&v in o?v:e}function Oe($,e){const o=new Map(e.nodes.map(d=>[d.id,d])),l={...$.uniformBindings};for(const d of $.uniforms){if(d.nodeId==="system")continue;const v=o.get(d.nodeId);if(!v)continue;const m=Ae(v.type,d.key,v.params);m in v.params&&(l[d.name]={value:Ee(d.type,v.params[m])})}return{...$,uniformBindings:l}}const le=self;let X=null,D="";const R=$=>{le.postMessage($)};le.onmessage=$=>{const e=$.data;if(!(!e||typeof e!="object"))try{if(e.type==="set_graph"){X=e.graph,D=e.signature;return}if(e.type!=="compile_job"||!X||e.signature!==D)return;const o=new we(X),l=e.mode==="output"?o.compile({backend:"glsl",readable:!1,outputChannel:e.outputChannel}):o.compile({backend:"glsl",readable:!1,nodeId:e.nodeId,nodeOutputPort:e.nodeOutputPort,outputChannel:e.outputChannel}),d=Oe(l,X);R({type:"compiled",signature:D,requestKey:e.requestKey,compiled:d})}catch(o){if(e.type==="compile_job"){R({type:"compile_error",signature:D||e.signature||"",requestKey:e.requestKey||"unknown",error:(o==null?void 0:o.message)||String(o)});return}R({type:"fatal",error:(o==null?void 0:o.message)||String(o)})}},R({type:"ready"})})();
