import { defineField, defineType } from 'sanity'

export const statItem = defineType({
  name: 'statItem',
  title: 'Número destacado',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Número',
      description: 'El número grande, tal como debe verse. Por ejemplo: 12, ~80 o 15+.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Descripción',
      description: 'La frase pequeña que explica qué significa el número. Por ejemplo: "años activos desde 2013".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
})
