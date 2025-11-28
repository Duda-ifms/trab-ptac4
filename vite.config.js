import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração compatível com Node 20.16+
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})
