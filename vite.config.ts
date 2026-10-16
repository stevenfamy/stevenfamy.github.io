import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: { rollupOptions: { input: ['index.html', 'ops.html', 'blueprint.html', 'classic.html'] } },
})
