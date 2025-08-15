import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/', // root path for GitHub Pages with custom domain
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // bump limit to avoid warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-markdown') || id.includes('remark') || id.includes('rehype') || id.includes('katex')) {
              return 'markdown-katex'
            }
            if (id.includes('react-router')) {
              return 'react-router'
            }
            if (id.includes('react')) {
              return 'react-vendor'
            }
            return 'vendor' // everything else from node_modules
          }
        },
      },
    },
  },
})
