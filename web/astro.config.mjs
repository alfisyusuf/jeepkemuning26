import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

export default defineConfig({
  // Kita HAPUS baris `output: 'server'` dan `adapter: cloudflare()`
  // Karena secara default Astro sudah mode 'static'
  
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sanity({
      projectId: 'mgy2soqp',
      dataset: 'production',
      useCdn: false, // Wajib 'false' untuk statis agar selalu menarik data paling baru saat di-build
      studioBasePath: '/admin',
    })
  ]
});