import { defineField, defineType } from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Paso',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del paso',
      description: 'Corto y en primera persona. Por ejemplo: "Te apuntas".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Explicación',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
