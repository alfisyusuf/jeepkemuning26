import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Judul di Google (kosongkan jika sama dengan judul halaman)',
      type: 'string',
      validation: (r) => r.max(60).warning('Sebaiknya di bawah 60 karakter'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Deskripsi di Google',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(160).warning('Sebaiknya di bawah 160 karakter'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Gambar Preview saat Dibagikan (WhatsApp/Facebook)',
      type: 'image',
    }),
  ],
})
