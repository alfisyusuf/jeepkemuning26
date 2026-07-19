import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  fields: [
    defineField({name: 'namaBisnis', title: 'Nama Bisnis', type: 'string', initialValue: 'Jeep Kemuning'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Petualangan Seru, Cerita Tak Terlupakan.'}),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({
      name: 'whatsapp',
      title: 'Nomor WhatsApp',
      type: 'string',
      description: 'Format internasional tanpa spasi/simbol, contoh: 628561304343',
      validation: (r) => r.required().regex(/^628\d{7,12}$/, {name: 'format WA', invert: false}).warning('Gunakan format 628... tanpa spasi'),
    }),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'alamat', title: 'Alamat Basecamp', type: 'text', rows: 3}),
    defineField({name: 'instagramUrl', title: 'Link Instagram', type: 'url'}),
    defineField({
      name: 'instagramHandle', 
      title: 'Username Instagram', 
      type: 'string',
      description: 'Teks yang tampil di footer (contoh: @jeepkemuning)'
    }),
    defineField({name: 'facebookUrl', title: 'Link Facebook', type: 'url'}),
    defineField({
      name: 'facebookHandle', 
      title: 'Nama Akun Facebook', 
      type: 'string',
      description: 'Teks yang tampil di footer (contoh: Jeep Kemuning Adventure)'
    }),
    defineField({
      name: 'navMenu',
      title: 'Menu Navigasi Utama',
      description: 'Urutan di sini akan tampil sama persis di header website',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', type: 'string', title: 'Teks Menu', validation: (r: any) => r.required()},
            {
              name: 'tujuan',
              type: 'string',
              title: 'Tujuan',
              options: {list: [
                {title: 'Beranda', value: 'beranda'},
                {title: 'Paket Wisata (pilih)', value: 'paket'},
                {title: 'Artikel', value: 'artikel'},
                {title: 'Halaman Lain (pilih)', value: 'halaman'},
                {title: 'URL Manual', value: 'manual'},
              ]},
            },
            {name: 'paketRef', type: 'reference', title: 'Pilih Paket', to: [{type: 'paketWisata'}], hidden: ({parent}: any) => parent?.tujuan !== 'paket'},
            {name: 'halamanRef', type: 'reference', title: 'Pilih Halaman', to: [{type: 'halaman'}], hidden: ({parent}: any) => parent?.tujuan !== 'halaman'},
            {name: 'urlManual', type: 'string', title: 'URL', hidden: ({parent}: any) => parent?.tujuan !== 'manual'},
          ],
          preview: {select: {title: 'label'}},
        },
      ],
    }),
    defineField({name: 'seoDefault', title: 'SEO Default Situs', type: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Pengaturan Website'}
    },
  },
})