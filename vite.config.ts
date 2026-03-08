import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

function manualChunks(id: string): string | undefined {
  if (!id.includes('node_modules')) return undefined;

  if (id.includes('/@babylonjs/')) return 'vendor-babylon';
  if (id.includes('/three/') || id.includes('/@react-three/')) return 'vendor-three';
  if (id.includes('/elkjs/')) return 'vendor-elk';
  if (id.includes('/@xyflow/')) return 'vendor-xyflow';

  return undefined;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    optimizeDeps: {
      include: ['@react-three/fiber', '@xyflow/react'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks,
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify; file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
