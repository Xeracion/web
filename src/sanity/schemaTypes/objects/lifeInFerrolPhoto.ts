import { defineField, defineType } from 'sanity'

export const lifeInFerrolPhoto = defineType({
  name: 'lifeInFerrolPhoto',
  title: 'Foto con leyenda',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'caption',
      title: 'Título corto',
      description: 'Por ejemplo: "The Cantábrico coast".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Frase explicativa',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'caption', subtitle: 'description', media: 'image' },
  },
})
