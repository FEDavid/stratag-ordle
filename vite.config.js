import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  server: {
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    exclude: ['@neondatabase/serverless']
  },
  plugins: [react()],
}