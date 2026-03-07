import{S as t}from"./Viewport3DBabylon-DKVbUfXb.js";import"./index-D2gH4sYV.js";import"./Preview3DAxisCompass-DLIS1BHp.js";const e="volumetricLightingRenderVolumeVertexShader",o=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position : vec3f;varying vWorldPos: vec4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {let worldPos=mesh.world*vec4f(vertexInputs.position,1.0);vertexOutputs.vWorldPos=worldPos;vertexOutputs.position=scene.viewProjection*worldPos;}
`;t.ShadersStoreWGSL[e]||(t.ShadersStoreWGSL[e]=o);const s={name:e,shader:o};export{s as volumetricLightingRenderVolumeVertexShaderWGSL};
