import { EdgeData, GraphData, NodeData } from './types';

export type OutputChannel = 'baseColor' | 'roughness' | 'normal' | 'height' | 'metallic';

export interface OutputChannelMapping {
  baseColor?: EdgeData;
  roughness?: EdgeData;
  normal?: EdgeData;
  height?: EdgeData;
  metallic?: EdgeData;
}

export interface ExportPresetTarget {
  channel: OutputChannel;
  fileSuffix: string;
  format: 'png' | 'webp';
}

export interface ExportPreset {
  id: string;
  label: string;
  targets: ExportPresetTarget[];
}

export const OUTPUT_CHANNEL_PORTS: Record<OutputChannel, number> = {
  baseColor: 0,
  roughness: 1,
  normal: 2,
  height: 3,
  metallic: 4
};

export const OUTPUT_CHANNEL_NODE_TYPES: Record<OutputChannel, string> = {
  baseColor: 'output_baseColor',
  roughness: 'output_roughness',
  normal: 'output_normal',
  height: 'output_height',
  metallic: 'output_metallic'
};

export const OUTPUT_NODE_TYPE_TO_CHANNEL: Record<string, OutputChannel> = {
  output_baseColor: 'baseColor',
  output_roughness: 'roughness',
  output_normal: 'normal',
  output_height: 'height',
  output_metallic: 'metallic'
};

const PORT_TO_CHANNEL: Record<number, OutputChannel> = {
  0: 'baseColor',
  1: 'roughness',
  2: 'normal',
  3: 'height',
  4: 'metallic'
};

export const EXPORT_PRESETS: ExportPreset[] = [
  {
    id: 'pbr_default',
    label: 'PBR Default',
    targets: [
      { channel: 'baseColor', fileSuffix: 'basecolor', format: 'png' },
      { channel: 'roughness', fileSuffix: 'roughness', format: 'png' },
      { channel: 'normal', fileSuffix: 'normal', format: 'png' },
      { channel: 'height', fileSuffix: 'height', format: 'png' },
      { channel: 'metallic', fileSuffix: 'metallic', format: 'png' }
    ]
  }
];

export const getExportPreset = (id: string): ExportPreset | undefined =>
  EXPORT_PRESETS.find((preset) => preset.id === id);

export const isOutputNodeType = (type: string): boolean =>
  type === 'output' || Object.prototype.hasOwnProperty.call(OUTPUT_NODE_TYPE_TO_CHANNEL, type);

export const channelFromOutputNodeType = (type: string): OutputChannel | null =>
  OUTPUT_NODE_TYPE_TO_CHANNEL[type] ?? null;

export const hasDedicatedOutputNodeForChannel = (graph: GraphData, channel: OutputChannel): boolean =>
  graph.nodes.some((node) => node.type === OUTPUT_CHANNEL_NODE_TYPES[channel]);

export const getOutputNodeForChannel = (graph: GraphData, channel: OutputChannel): NodeData | null => {
  const dedicated = graph.nodes.find((node) => node.type === OUTPUT_CHANNEL_NODE_TYPES[channel]);
  if (dedicated) return dedicated;
  return graph.nodes.find((node) => node.type === 'output') ?? null;
};

export const resolveOutputChannels = (graph: GraphData): OutputChannelMapping => {
  const mapping: OutputChannelMapping = {};
  const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
  const dedicatedPresent: Partial<Record<OutputChannel, boolean>> = {};

  for (const node of graph.nodes) {
    const dedicatedChannel = channelFromOutputNodeType(node.type);
    if (!dedicatedChannel) continue;
    dedicatedPresent[dedicatedChannel] = true;
  }

  for (const edge of graph.edges) {
    const target = nodeById.get(edge.toId);
    if (!target) continue;
    const channel = channelFromOutputNodeType(target.type);
    if (!channel) continue;
    mapping[channel] = edge;
  }

  const outputNode = graph.nodes.find((node) => node.type === 'output');
  if (!outputNode) return mapping;

  for (const edge of graph.edges) {
    if (edge.toId !== outputNode.id) continue;
    const channel = PORT_TO_CHANNEL[edge.toPort];
    if (!channel) continue;
    if (dedicatedPresent[channel]) continue;
    mapping[channel] = edge;
  }
  return mapping;
};
