import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/meta-trader-4/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
