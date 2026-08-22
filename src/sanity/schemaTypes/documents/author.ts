import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().error('El autor necesita un nombre.'),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía breve',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'bio', media: 'photo' },
  },
})
