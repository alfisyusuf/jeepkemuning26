import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'kategoriArtikel',
  title: 'Kategori Artikel',
  type: 'document',
  fields: [
    defineField({name: 'nama', title: 'Nama Kategori', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', title: 'Slug URL', type: 'slug', options: {source: 'nama'}, validation: (r) => r.required()}),
  ],
  preview: {select: {title: 'nama'}},
})
