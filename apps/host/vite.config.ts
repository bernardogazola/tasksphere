import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

const isProd = process.env.NODE_ENV === 'production'

const remotes = isProd
  ? {
      tarefas: '/tarefas/assets/remoteEntry.js',
      dashboard: '/dashboard/assets/remoteEntry.js',
      equipe: '/equipe/assets/remoteEntry.js',
    }
  : {
      tarefas: 'http://localhost:5001/assets/remoteEntry.js',
      dashboard: 'http://localhost:5002/assets/remoteEntry.js',
      equipe: 'http://localhost:5003/assets/remoteEntry.js',
    }

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'host',
      remotes,
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5100,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
