import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Import structure dan konstanta SINGLETON_TYPES dari file structure.ts yang baru dipindah
import {structure, SINGLETON_TYPES} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Jeep Kemuning',

  projectId: 'mgy2soqp',
  dataset: 'production',

  plugins: [
    // Masukkan custom structure ke dalam plugin
    structureTool({
      structure: structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Sembunyikan tombol "Create New" untuk halaman Singleton (Beranda & Pengaturan) di menu pencarian
    templates: (templates) =>
      templates.filter(({schemaType}) => !SINGLETON_TYPES.has(schemaType)),
  },
  
  // Mencegah klien menghapus (delete) dokumen Singleton
  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})