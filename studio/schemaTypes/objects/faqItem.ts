import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'Pertanyaan FAQ',
  type: 'object',
  fields: [
    defineField({name: 'pertanyaan', title: 'Pertanyaan', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'jawaban', title: 'Jawaban', type: 'text', rows: 3, validation: (r) => r.required()}),
  ],
  preview: {
    select: {title: 'pertanyaan'},
  },
})
