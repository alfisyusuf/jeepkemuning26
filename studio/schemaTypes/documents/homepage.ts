import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Beranda',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'keunggulan', title: 'Keunggulan'},
    {name: 'paket', title: 'Paket Wisata'},
    {name: 'testimoni', title: 'Testimoni'},
    {name: 'galeri', title: 'Galeri'},
    {name: 'faq', title: 'FAQ'},
    {name: 'cta', title: 'CTA Bawah'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // HERO
    defineField({name: 'heroSlides', title: 'Foto Slider Hero', type: 'array', of: [{type: 'image', options: {hotspot: true}}], group: 'hero'}),
    defineField({name: 'heroJudulUtama', title: 'Judul Utama (contoh: Explore)', type: 'string', group: 'hero'}),
    defineField({name: 'heroJudulAksen', title: 'Judul Aksen Berwarna (contoh: Nature)', type: 'string', group: 'hero'}),
    defineField({name: 'heroBadge', title: 'Teks Badge Miring (contoh: Feel The Adventure!)', type: 'string', group: 'hero'}),
    defineField({name: 'heroDeskripsi', title: 'Deskripsi Hero', type: 'text', rows: 3, group: 'hero'}),

    // KEUNGGULAN
    defineField({name: 'keunggulanKicker', title: 'Label Kecil', type: 'string', initialValue: 'Kenapa Liburanmu Lebih Seru Bersama', group: 'keunggulan'}),
    defineField({name: 'keunggulanJudulUtama', title: 'Judul Utama (contoh: Jeep Kemuning)', type: 'string', group: 'keunggulan'}),
    defineField({name: 'keunggulanJudulAksen', title: 'Judul Aksen Berwarna (contoh: ?)', type: 'string', group: 'keunggulan'}),
    defineField({name: 'keunggulanDeskripsi', title: 'Deskripsi Section', type: 'text', rows: 3, group: 'keunggulan'}),
    defineField({
      name: 'keunggulanItems', title: 'Kartu Keunggulan (idealnya 4)', type: 'array',
      of: [{type: 'keunggulanItem'}], group: 'keunggulan',
      validation: (r) => r.max(6),
    }),

    // PAKET WISATA DI HOME
    defineField({
      name: 'paketDitampilkan',
      title: 'Paket yang Ditampilkan di Beranda',
      description: 'Pilih & urutkan paket wisata yang ingin ditonjolkan di halaman depan',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'paketWisata'}]}],
      group: 'paket',
    }),

    // TESTIMONI DI HOME
    defineField({
      name: 'testimoniDitampilkan',
      title: 'Testimoni yang Ditampilkan di Beranda',
      description: 'Kosongkan untuk menampilkan testimoni terbaru secara otomatis',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimoni'}]}],
      group: 'testimoni',
    }),

    // GALERI
    defineField({
      name: 'galeriHome', 
      title: 'Foto/Video Galeri di Beranda', 
      type: 'array', 
      // Ubah dari {type: 'image'} menjadi {type: 'galeriItem'}
      of: [{type: 'galeriItem'}], 
      group: 'galeri'
    }),

    // FAQ
    defineField({name: 'faq', title: 'Daftar FAQ', type: 'array', of: [{type: 'faqItem'}], group: 'faq'}),

    // CTA BAWAH
    defineField({name: 'ctaJudul', title: 'Judul CTA', type: 'string', group: 'cta'}),
    defineField({name: 'ctaSubjudul', title: 'Sub-judul Kecil', type: 'string', group: 'cta'}),
    defineField({name: 'ctaDeskripsi', title: 'Deskripsi CTA', type: 'text', rows: 2, group: 'cta'}),
    defineField({name: 'ctaFotoPolaroid', title: 'Foto Polaroid (3 foto)', type: 'array', of: [{type: 'image'}], validation: (r) => r.max(3), group: 'cta'}),

    defineField({name: 'seo', title: 'SEO Beranda', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare() {
      return {title: 'Beranda'}
    },
  },
})
