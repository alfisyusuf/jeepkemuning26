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
      description: 'Contoh: fa-truck-pickup, fa-user-shield, fa-campground (cari nama di fontawesome.com/icons, tanpa "fa-solid")',
      validation: (r) => r.required(),
    }),
    defineField({name: 'judul', title: 'Judul', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'deskripsi', title: 'Deskripsi', type: 'text', rows: 3, validation: (r) => r.required()}),
  ],
  preview: {
    select: {title: 'judul', subtitle: 'icon'},
  },
})
