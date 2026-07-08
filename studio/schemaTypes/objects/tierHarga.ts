import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tierHarga',
  title: 'Pilihan Harga',
  type: 'object',
  fields: [
    defineField({
      name: 'namaTier',
      title: 'Nama Pilihan (contoh: Short Trip, Medium Trip)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({name: 'foto', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'badge',
      title: 'Label Badge',
      type: 'string',
      description: 'Contoh: "Favorit Keluarga". Kosongkan jika tidak perlu.',
    }),
    defineField({
      name: 'rekomendasi',
      title: 'Tandai sebagai "Rekomendasi Terbaik"?',
      type: 'boolean',
      description: 'Kartu ini akan ditonjolkan/di-highlight secara visual',
      initialValue: false,
    }),
    defineField({name: 'harga', title: 'Harga (angka saja, tanpa titik)', type: 'number', validation: (r) => r.required().positive()}),
    defineField({name: 'satuan', title: 'Satuan Harga', type: 'string', initialValue: '/ Jeep'}),
    defineField({name: 'kapasitas', title: 'Kapasitas', type: 'string', description: 'Contoh: Maksimal 4 Orang'}),
    defineField({name: 'rute', title: 'Rute Perjalanan', type: 'text', rows: 3}),
    defineField({
      name: 'fasilitas',
      title: 'Daftar Fasilitas Termasuk',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'teksWhatsApp',
      title: 'Pesan Otomatis WhatsApp Saat Klik Booking',
      type: 'string',
      description: 'Kosongkan untuk memakai teks default otomatis',
    }),
  ],
  preview: {
    select: {title: 'namaTier', subtitle: 'harga', media: 'foto'},
    prepare({title, subtitle, media}) {
      return {title, subtitle: subtitle ? `Rp ${Number(subtitle).toLocaleString('id-ID')}` : '', media}
    },
  },
})
