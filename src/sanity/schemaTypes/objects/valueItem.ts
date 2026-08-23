import { defineField, defineType } from 'sanity'

export const valueItem = defineType({
  name: 'valueItem',
  title: 'Valor',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icono',
      description: 'Un emoji, por ejemplo: ✈️.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      description: 'Por ejemplo: "Movilidad".',
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
    select: { title: 'title', subtitle: 'icon' },
  },
})
