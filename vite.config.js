import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  },
);



// dotenv.config({
//   path: `.${process.env.NODE_ENV}.env`,
// })


// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';