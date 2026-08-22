import { defineField, defineType } from 'sanity'

import { routeField } from '../fields/route'

export const faq = defineType({
  name: 'faq',
  title: 'Pregunta frecuente',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Pregunta',
      type: 'string',
      validation: (Rule) => Rule.required().error('Falta escribir la pregunta.'),
    }),
    defineField({
      name: 'answer',
      title: 'Respuesta',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('Falta escribir la respuesta.'),
    }),
    routeField(),
    defineField({
      name: 'order',
      title: 'Orden',
      description: 'Un número para decidir en qué posición aparece esta pregunta respecto a las demás. Las de número más bajo van primero.',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Orden manual',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'question', route: 'route', order: 'order' },
    prepare({ title, route, order }) {
      return { title, subtitle: [route, order != null ? `orden ${order}` : null].filter(Boolean).join(' · ') }
    },
  },
})
