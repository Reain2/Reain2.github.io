import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        experience: 'experience.html',
        contact: 'contact.html',
        blog: 'blog.html',
        notFound: '404.html',
      },
    },
  },
})
