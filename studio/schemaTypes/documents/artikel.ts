import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'artikel',
  title: 'Artikel',
  type: 'document',
  groups: [
    {name: 'utama', title: 'Info Utama'},
    {name: 'konten', title: 'Isi Artikel'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'judul', title: 'Judul Artikel', type: 'string', validation: (r) => r.required(), group: 'utama'}),
    defineField({name: 'slug', title: 'Slug URL', type: 'slug', options: {source: 'judul', maxLength: 96}, validation: (r) => r.required(), group: 'utama'}),
    defineField({name: 'kategori', title: 'Kategori', type: 'reference', to: [{type: 'kategoriArtikel'}], group: 'utama'}),
    defineField({name: 'gambarUtama', title: 'Gambar Utama', type: 'image', options: {hotspot: true}, validation: (r) => r.required(), group: 'utama'}),
    defineField({
      name: 'ringkasan',
      title: 'Ringkasan',
      description: 'Tampil di kartu artikel & sebagai deskripsi Google. Maks 200 karakter.',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(200).required(),
      group: 'utama',
    }),
    defineField({name: 'tags', title: 'Tag', type: 'array', of: [{type: 'string'}], options: {layout: 'tags'}, group: 'utama'}),
    defineField({name: 'penulis', title: 'Penulis', type: 'string', initialValue: 'Tim Jeep Kemuning', group: 'utama'}),
    defineField({name: 'tanggalTerbit', title: 'Tanggal Terbit', type: 'datetime', initialValue: () => new Date().toISOString(), group: 'utama'}),

    defineField({
      name: 'konten',
      title: 'Isi Artikel',
      type: 'array',
      group: 'konten',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Judul Besar (H2)', value: 'h2'},
            {title: 'Judul Kecil (H3)', value: 'h3'},
            {title: 'Kutipan', value: 'blockquote'},
          ],
        },
        {type: 'image', options: {hotspot: true}},
      ],
      validation: (r) => r.required(),
    }),

    defineField({name: 'artikelTerkait', title: 'Artikel Terkait (opsional, manual)', description: 'Kosongkan agar otomatis diambil dari kategori yang sama', type: 'array', of: [{type: 'reference', to: [{type: 'artikel'}]}], group: 'konten'}),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  orderings: [
    {
      title: 'Tanggal Terbit, Terbaru',
      name: 'tanggalDesc',
      by: [{field: 'tanggalTerbit', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'judul', media: 'gambarUtama', subtitle: 'kategori.nama'},
  },
})
