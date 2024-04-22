import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build:{
    rollupOptions: {
      external: ['react', 'react-dom', 'src/utils/helpers.js', 'src/shared/Modal.jsx']
    }
  },
  resolve: {
    alias: {
      // Example alias for 'utils' directory
      '@utils': './src/utils',
      // Add more aliases as needed
    },
  },
});
