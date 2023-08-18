import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Mi App PWA',
        short_name: 'PWA',
        description: 'Mi Progressive Web App con React y Vite',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000'
      },
      workbox: {
          navigateFallback: '/index.html',
          navigateFallbackDenylist: [/^\/__/, /\/[^/]+\.[^/]+$/],
          globIgnores: ['**/sw.js']
      }
    })
  ],
  server: {
    https: true,
  }
})
