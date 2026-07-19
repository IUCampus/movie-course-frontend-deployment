import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_BASE_URL || 'https://movie-course-backend-deployment.onrender.com',
          changeOrigin: true,
        },
      },
    },
  };
});
