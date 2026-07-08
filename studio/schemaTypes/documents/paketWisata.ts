import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'paketWisata',
  title: 'Paket Wisata',
  type: 'document',
  groups: [
// ... sisa kode ke bawah tetap sama
    {name: 'utama', title: 'Info Utama'},
    {name: 'harga', title: 'Pilihan & Harga'},
    {name: 'galeri', title: 'Galeri'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Paket',
      type: 'string',
      description: 'Contoh: Jeep Adventure, River Tubing, Fun Outbound',
      validation: (r) => r.required(),
      group: 'utama',
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {source: 'nama', maxLength: 96},
      validation: (r) => r.required(),
      group: 'utama',
    }),
    defineField({name: 'urutanMenu', title: 'Urutan di Menu (angka kecil tampil duluan)', type: 'number', group: 'utama'}),
    defineField({name: 'ringkasanKartu', title: 'Ringkasan Singkat (untuk kartu di beranda)', type: 'text', rows: 3, validation: (r) => r.max(200), group: 'utama'}),
    defineField({name: 'fotoKartu', title: 'Foto untuk Kartu di Beranda', type: 'image', options: {hotspot: true}, group: 'utama'}),

    defineField({name: 'heroKicker', title: 'Label Kecil di Hero', type: 'string', initialValue: 'Layanan Unggulan Kami', group: 'utama'}),
    defineField({name: 'heroSlides', title: 'Foto Hero (bisa lebih dari satu untuk slider)', type: 'array', of: [{type: 'image', options: {hotspot: true}}], group: 'utama'}),
    defineField({name: 'heroDeskripsi', title: 'Deskripsi di Hero', type: 'text', rows: 3, group: 'utama'}),
    defineField({name: 'deskripsiLengkap', title: 'Deskripsi Lengkap (di bawah hero)', type: 'array', of: [{type: 'block'}], group: 'utama'}),

    defineField({
      name: 'tierHarga',
      title: 'Pilihan Paket & Harga',
      type: 'array',
      of: [{type: 'tierHarga'}],
      group: 'harga',
      validation: (r) => r.min(1).error('Minimal 1 pilihan harga'),
    }),

    defineField({
      name: 'galeri', 
      title: 'Galeri Foto/Video Paket', 
      type: 'array', 
      // Ubah dari {type: 'image'} menjadi {type: 'galeriItem'}
      of: [{type: 'galeriItem'}], 
      group: 'galeri'
    }),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
  preview: {
    select: {title: 'nama', media: 'fotoKartu'},
  },
})
