import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

export default defineConfig({
  output: 'server', // Wajib untuk Cloudflare SSR
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()] // Menggunakan Tailwind v4 terbaru
  },
  integrations: [
    react(),
    sanity({
      projectId: 'mgy2soqp',
      dataset: 'production',
      useCdn: false, // Diset false karena kita pakai SSR Server
      studioBasePath: '/admin', // Akses dashboard klien di /admin
    })
  ]
});