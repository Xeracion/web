import { defineField, defineType } from 'sanity'

export const timelineMilestone = defineType({
  name: 'timelineMilestone',
  title: 'Hito de la línea de tiempo',
  type: 'object',
  fields: [
    defineField({
      name: 'year',
      title: 'Año',
      description: 'Por ejemplo: 2013.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      description: 'Por ejemplo: "Fundación".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year' },
  },
})
