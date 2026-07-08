import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galeriItem',
  title: 'Item Galeri',
  type: 'object',
  fields: [
    defineField({
      name: 'tipeMedia',
      title: 'Tipe Media',
      type: 'string',
      options: {
        list: [
          { title: 'Foto', value: 'foto' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio'
      },
      initialValue: 'foto',
      validation: (r) => r.required()
    }),
    defineField({
      name: 'fileMedia',
      title: 'File Gambar / Thumbnail Video',
      type: 'image',
      description: 'Jika tipe media adalah Video, gambar ini akan menjadi cover/thumbnail sebelum video diputar.',
      options: { hotspot: true },
      validation: (r) => r.required()
    }),
    defineField({
      name: 'videoUrl',
      title: 'URL Video',
      type: 'url',
      description: 'Masukkan link YouTube, Vimeo, atau link .mp4 langsung.',
      // Kolom ini disembunyikan jika klien memilih 'foto'
      hidden: ({ parent }) => parent?.tipeMedia !== 'video',
    }),
    defineField({
      name: 'altText',
      title: 'Teks Alternatif (SEO & Aksesibilitas)',
      type: 'string',
      description: 'Penjelasan singkat tentang gambar/video ini.',
    })
  ],
  preview: {
    select: {
      title: 'altText',
      tipe: 'tipeMedia',
      media: 'fileMedia'
    },
    prepare({ title, tipe, media }) {
      return {
        title: title || 'Tanpa Keterangan',
        subtitle: tipe === 'video' ? '🎥 Video' : '📷 Foto',
        media
      }
    }
  }
})