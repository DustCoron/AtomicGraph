
export type DataType = 'float' | 'vec2' | 'vec3' | 'vec4' | 'Texture2D' | 'Field';
export type ScalarDataType = Exclude<DataType, 'Texture2D' | 'Field'>;

export interface PortDefinition {
  id: string;
  type: DataType;
  label: string;
}

export interface PortConstraint {
  maxConnections?: number;
  allowedTypes?: DataType[];
  required?: boolean;
}

export interface PortDefinitionV2 extends PortDefinition {
  constraints?: PortConstraint;
}

export interface NodeDefinition {
  type: string;
  label: string;
  category: string;
  inputs: PortDefinition[];
  outputs: PortDefinition[];
  params: Record<string, ParamDefinition>;
}

export interface NodeConstraintSet {
  singleConnectionInputs?: boolean;
}

export interface NodeDefinitionV2 {
  id: string;
  label: string;
  category: string;
  inputs: PortDefinitionV2[];
  outputs: PortDefinitionV2[];
  params: Record<string, ParamDefinitionV2>;
  constraints?: NodeConstraintSet;
}

export interface ParamDefinition {
  type: 'float' | 'int' | 'select' | 'bool';
  default: any;
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
}

export interface ParamUIMetadata {
  min?: number;
  max?: number;
  step?: number;
  dropdown?: { label: string; value: string }[];
}

export interface ParamDefinitionV2 {
  type: 'float' | 'int' | 'enum' | 'bool';
  default: any;
  ui?: ParamUIMetadata;
}

export interface NodeData {
  id: string;
  type: string;
  x: number;
  y: number;
  params: Record<string, any>;
}

export interface EdgeData {
  id: string;
  fromId: string;
  fromPort: number;
  toId: string;
  toPort: number;
}

export interface FrameData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color?: string;
}

export interface GraphData {
  schemaVersion?: number;
  nodes: NodeData[];
  edges: EdgeData[];
  frames?: FrameData[];
  resolution?: number | null;
}

export interface ValidationResult {
  ok: boolean;
  error?: string;
}

export interface LegacyToV2AdapterOptions {
  defaultInputMaxConnections?: number;
}
