import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotliCompress', ext: '.br', deleteOriginFile: false }),
    compression({ algorithm: 'gzip', ext: '.gz', deleteOriginFile: false })
  ],
  build: {
    target: 'es2020',
    modulePreload: { polyfill: false },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'react-icons';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('emailjs')) return 'email';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 650
  }
})
