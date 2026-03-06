export type UniformPrimitive = number | boolean;
export type UniformVector = [number, number] | [number, number, number] | [number, number, number, number];
export type UniformValue = UniformPrimitive | UniformVector;

export interface UniformBinding {
  value: UniformValue;
}

export interface TextureBinding {
  portName: string;
  bindingIndex?: number;
  texture: unknown;
  sampler?: unknown;
}

export interface IShaderBindings {
  setFloat(name: string, v: number): void;
  setInt(name: string, v: number): void;
  setBool(name: string, v: boolean): void;
  setVec2(name: string, v: [number, number]): void;
  setVec3(name: string, v: [number, number, number]): void;
  setVec4(name: string, v: [number, number, number, number]): void;
  bindTexture(portName: string, texture: unknown, bindingIndex?: number, sampler?: unknown): void;
  getUniforms(): Record<string, UniformBinding>;
  getTextures(): TextureBinding[];
}

const normalizeId = (value: string) => value.replace(/[^a-zA-Z0-9_]/g, '_');

export const deterministicUniformName = (nodeId: string, paramId: string) =>
  `u_n${normalizeId(nodeId)}_p${normalizeId(paramId)}`;

export const deterministicTextureBindingName = (portName: string, bindingIndex?: number) => {
  const normalized = normalizeId(portName);
  return typeof bindingIndex === 'number' ? `t_${normalized}_${bindingIndex}` : `t_${normalized}`;
};

export class ShaderBindings implements IShaderBindings {
  private uniforms: Record<string, UniformBinding> = {};
  private textures: TextureBinding[] = [];

  setFloat(name: string, v: number) {
    this.uniforms[name] = { value: v };
  }

  setInt(name: string, v: number) {
    this.uniforms[name] = { value: Math.trunc(v) };
  }

  setBool(name: string, v: boolean) {
    this.uniforms[name] = { value: v };
  }

  setVec2(name: string, v: [number, number]) {
    this.uniforms[name] = { value: v };
  }

  setVec3(name: string, v: [number, number, number]) {
    this.uniforms[name] = { value: v };
  }

  setVec4(name: string, v: [number, number, number, number]) {
    this.uniforms[name] = { value: v };
  }

  bindTexture(portName: string, texture: unknown, bindingIndex?: number, sampler?: unknown) {
    this.textures.push({ portName: deterministicTextureBindingName(portName, bindingIndex), bindingIndex, texture, sampler });
  }

  getUniforms() {
    return this.uniforms;
  }

  getTextures() {
    return this.textures;
  }
}
