import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NEO/',
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      styles: '/src/styles',
      assets: '/src/assets',
      utils: '/src/utils',
      services: '/src/services',
      types: '/src/types',
      constants: '/src/constants',
      data: '/src/data',
    },
  },
});
