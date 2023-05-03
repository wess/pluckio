import { defineConfig, optimizeDeps } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: 'src/pages',
    }),
  ]
})
