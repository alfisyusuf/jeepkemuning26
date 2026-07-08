import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'halaman',
  title: 'Halaman Lainnya',
  type: 'document',
  description: 'Untuk halaman seperti Tentang Kami, Syarat & Ketentuan, Kebijakan Privasi',
  groups: [
    {name: 'utama', title: 'Info Utama'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'judul', title: 'Judul Halaman', type: 'string', validation: (r) => r.required(), group: 'utama'}),
    defineField({name: 'slug', title: 'Slug URL', type: 'slug', options: {source: 'judul', maxLength: 96}, validation: (r) => r.required(), group: 'utama'}),
    defineField({name: 'kicker', title: 'Label Kecil di Hero', type: 'string', group: 'utama'}),
    defineField({name: 'gambarHero', title: 'Gambar Hero (opsional)', type: 'image', options: {hotspot: true}, group: 'utama'}),
    defineField({
      name: 'konten',
      title: 'Isi Halaman',
      type: 'array',
      group: 'utama',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Judul Besar (H2)', value: 'h2'},
            {title: 'Judul Kecil (H3)', value: 'h3'},
          ],
        },
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'tabel',
          title: 'Tabel',
          fields: [{name: 'rows', title: 'Baris (pisahkan kolom dengan |)', type: 'array', of: [{type: 'string'}]}],
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {select: {title: 'judul'}},
})
