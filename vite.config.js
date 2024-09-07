import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@config': '/src/config',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    }
  }
})
