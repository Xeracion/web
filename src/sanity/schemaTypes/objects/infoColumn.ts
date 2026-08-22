import { defineField, defineType } from 'sanity'

export const infoColumn = defineType({
  name: 'infoColumn',
  title: 'Columna de información',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Título de la columna',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'text' },
  },
})
