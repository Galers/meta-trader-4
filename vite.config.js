import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/meta-trader-4/',
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
