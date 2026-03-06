import { Compiler, CompiledShader } from '../compiler';
import { applyRuntimeUniforms } from '../engine';
import { OutputChannel } from '../output';
import { GraphData } from '../types';

type PreviewCompileWorkerRequest =
  | { type: 'set_graph'; signature: string; graph: GraphData }
  | {
      type: 'compile_job';
      signature: string;
      requestKey: string;
      mode: 'node' | 'output';
      nodeId: string;
      nodeOutputPort: number;
      outputChannel: OutputChannel;
    };

type PreviewCompileWorkerResponse =
  | { type: 'ready' }
  | { type: 'compiled'; signature: string; requestKey: string; compiled: CompiledShader }
  | { type: 'compile_error'; signature: string; requestKey: string; error: string }
  | { type: 'fatal'; error: string };

const ctx = self as any;

let currentGraph: GraphData | null = null;
let currentSignature = '';

const post = (msg: PreviewCompileWorkerResponse) => {
  ctx.postMessage(msg);
};

ctx.onmessage = (ev: MessageEvent<PreviewCompileWorkerRequest>) => {
  const msg = ev.data;
  if (!msg || typeof msg !== 'object') return;
  try {
    if (msg.type === 'set_graph') {
      currentGraph = msg.graph;
      currentSignature = msg.signature;
      return;
    }

    if (msg.type !== 'compile_job') return;
    if (!currentGraph || msg.signature !== currentSignature) return;

    const compiler = new Compiler(currentGraph);
    const compiled = msg.mode === 'output'
      ? compiler.compile({
          backend: 'glsl',
          readable: false,
          outputChannel: msg.outputChannel,
        })
      : compiler.compile({
          backend: 'glsl',
          readable: false,
          nodeId: msg.nodeId,
          nodeOutputPort: msg.nodeOutputPort,
          outputChannel: msg.outputChannel,
        });
    const runtimeCompiled = applyRuntimeUniforms(compiled, currentGraph);
    post({
      type: 'compiled',
      signature: currentSignature,
      requestKey: msg.requestKey,
      compiled: runtimeCompiled,
    });
  } catch (err: any) {
    if ((msg as any).type === 'compile_job') {
      post({
        type: 'compile_error',
        signature: currentSignature || (msg as any).signature || '',
        requestKey: (msg as any).requestKey || 'unknown',
        error: err?.message || String(err),
      });
      return;
    }
    post({ type: 'fatal', error: err?.message || String(err) });
  }
};

post({ type: 'ready' });

