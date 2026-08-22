import { defineField, defineType } from 'sanity'

export const pullQuote = defineType({
  name: 'pullQuote',
  title: 'Cita destacada',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Texto de la cita',
      description: 'La frase que quieres resaltar dentro del artículo, en grande.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('La cita destacada no puede estar vacía.'),
    }),
    defineField({
      name: 'attribution',
      title: 'Quién lo dijo (opcional)',
      description: 'Por ejemplo: "Nicolás, voluntario CES 2024". Déjalo en blanco si no aplica.',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'quote' },
    prepare({ title }) {
      return { title: `“${title ?? ''}”`, subtitle: 'Cita destacada' }
    },
  },
})
