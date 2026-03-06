import { OutputChannel } from './output';

export interface PreviewSurfaceLike {
  canvas: HTMLCanvasElement;
  key: string;
  version: number;
}

export interface Preview3DChannelBinding {
  channel: OutputChannel;
  canvas: HTMLCanvasElement | null;
  key: string;
  version: number;
  connected: boolean;
}

export interface Preview3DBindings {
  baseColor: Preview3DChannelBinding;
  roughness: Preview3DChannelBinding;
  normal: Preview3DChannelBinding;
  height: Preview3DChannelBinding;
  metallic: Preview3DChannelBinding;
  connectedCount: number;
  signature: string;
}

type SurfaceMap = Partial<Record<OutputChannel, PreviewSurfaceLike>>;

function buildChannelBinding(channel: OutputChannel, surfaces?: SurfaceMap): Preview3DChannelBinding {
  const surface = surfaces?.[channel];
  if (!surface) {
    return {
      channel,
      canvas: null,
      key: '',
      version: 0,
      connected: false,
    };
  }
  return {
    channel,
    canvas: surface.canvas,
    key: surface.key,
    version: surface.version,
    connected: true,
  };
}

export function buildPreview3DBindings(surfaces?: SurfaceMap): Preview3DBindings {
  const baseColor = buildChannelBinding('baseColor', surfaces);
  const roughness = buildChannelBinding('roughness', surfaces);
  const normal = buildChannelBinding('normal', surfaces);
  const height = buildChannelBinding('height', surfaces);
  const metallic = buildChannelBinding('metallic', surfaces);
  const channels = [baseColor, roughness, normal, metallic, height];
  const connectedCount = channels.reduce((acc, c) => acc + (c.connected ? 1 : 0), 0);
  const signature = channels
    .map((c) => `${c.channel}:${c.key || 'none'}:${c.version}`)
    .join('|');
  return { baseColor, roughness, normal, height, metallic, connectedCount, signature };
}
