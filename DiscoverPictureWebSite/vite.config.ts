import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/discoverpicture-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    // Servir les fichiers APK avec le bon MIME type
    middlewareMode: false,
  },
  // Assurer que les fichiers APK sont copiés dans le build
  publicDir: 'public',
})
