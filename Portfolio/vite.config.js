import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: "Kodjo AMOUZOU — Portfolio",
        short_name: "Portfolio",
        description: "Portfolio de développeur frontend & enseignant",
        theme_color: "#863bff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        lang: "fr",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
