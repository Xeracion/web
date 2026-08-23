import { defineField, defineType } from 'sanity'

export const initiative = defineType({
  name: 'initiative',
  title: 'Iniciativa',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icono',
      description: 'Un emoji, por ejemplo: 🏡.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'url',
      title: 'Enlace (opcional)',
      type: 'url',
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Azul', value: 'blue' },
          { title: 'Verde', value: 'green' },
          { title: 'Naranja', value: 'orange' },
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'icon' },
  },
})
