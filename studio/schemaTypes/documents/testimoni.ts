import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimoni',
  title: 'Testimoni',
  type: 'document',
  fields: [
    defineField({name: 'namaPelanggan', title: 'Nama Pelanggan', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'asalInstansi',
      title: 'Asal Kota / Instansi (opsional)',
      description: 'Contoh: "Jakarta" atau "PT Maju Bersama (Corporate Gathering)"',
      type: 'string',
    }),
    defineField({name: 'foto', title: 'Foto Pelanggan (opsional)', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {list: [1, 2, 3, 4, 5]},
      initialValue: 5,
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({name: 'isiTestimoni', title: 'Isi Testimoni', type: 'text', rows: 4, validation: (r) => r.required().max(400)}),
    defineField({
      name: 'paketTerkait',
      title: 'Paket yang Diikuti (opsional)',
      description: 'Membantu menampilkan testimoni relevan di halaman paket terkait',
      type: 'reference',
      to: [{type: 'paketWisata'}],
    }),
    defineField({name: 'tanggal', title: 'Tanggal', type: 'date', initialValue: () => new Date().toISOString().slice(0, 10)}),
    defineField({
      name: 'tampilkanDiBeranda',
      title: 'Tampilkan di Beranda?',
      description: 'Aktifkan jika testimoni ini bagus dan ingin ditonjolkan di halaman depan',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {title: 'Tanggal, Terbaru', name: 'tanggalDesc', by: [{field: 'tanggal', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'namaPelanggan', subtitle: 'asalInstansi', media: 'foto', rating: 'rating'},
    prepare({title, subtitle, media, rating}) {
      return {title, subtitle: `${'⭐'.repeat(rating || 0)}  ${subtitle || ''}`, media}
    },
  },
})
