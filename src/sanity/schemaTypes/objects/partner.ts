import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().error('El partner necesita un nombre.'),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Opcional. Mientras no lo subas, se muestra el nombre como texto.',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})
