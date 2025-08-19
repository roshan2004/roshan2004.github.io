import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
            if (id.includes('@radix-ui')) {
              return 'radix-ui'
            }
            if (id.includes('lucide-react')) {
              return 'lucide'
            }
            return 'vendor' // everything else from node_modules
          }
        },
      },
    },
    // Enable build optimizations
    minify: 'esbuild',
  },
})
