import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT) || 4173, // Render का port
    host: true, // 0.0.0.0 पर bind करने के लिए
    allowedHosts: ['user-management-dashboard-8ris.onrender.com'] // Render host
  }
})
