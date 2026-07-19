import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'keunggulanItem',
  title: 'Kartu Keunggulan',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Nama Icon Font Awesome',
      type: 'string',
      description: 'Contoh: fa-truck-pickup, fa-user-shield, fa-campground (tulis lengkap dengan awalan fa-)',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'warnaIcon',
      title: 'Warna Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Merah (Brand Red)', value: 'text-brand-red'},
          {title: 'Kuning (Brand Mustard)', value: 'text-brand-mustard'},
          {title: 'Hijau (Brand Green)', value: 'text-brand-green'},
          {title: 'Abu-abu (Gray)', value: 'text-gray-700'},
        ]
      },
      initialValue: 'text-brand-red',
    }),
    defineField({name: 'judul', title: 'Judul', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'deskripsi', title: 'Deskripsi', type: 'text', rows: 3, validation: (r) => r.required()}),
  ],
  preview: {
    select: {title: 'judul', subtitle: 'icon'},
  },
})