import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://CGLuna45.github.io/Mi-Portafolio/',
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always'
      }
    }
  }
})