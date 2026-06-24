import { defineConfig } from 'vite'
import esjs from '@es-js/vite-plugin-esjs'

export default defineConfig({
  plugins: [
    esjs(),
  ],
  build: {
    target: 'esnext'
  }
})
