import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3d-art-gallery',
  build: {
    rollupOptions: {
      input: '/main.js',
    },
  },
});
