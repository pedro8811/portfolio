import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio',
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    outDir: './build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'script/[name].js',
        chunkFileNames: 'chunk/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
