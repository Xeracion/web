import { defineField, defineType } from 'sanity'

import { routeField } from '../fields/route'

export const fixedProgram = defineType({
  name: 'fixedProgram',
  title: 'Programa fijo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      description: 'Por ejemplo: "Offline Club".',
      type: 'string',
      validation: (Rule) => Rule.required().error('El programa necesita un nombre.'),
    }),
    defineField({
      name: 'schedule',
      title: 'Horario',
      description: 'Cuándo ocurre, en texto libre. Por ejemplo: "Martes 20:00". Déjalo en blanco si no tiene un horario fijo.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('El programa necesita una descripción.'),
    }),
    routeField(),
  ],
  preview: {
    select: { title: 'name', subtitle: 'schedule', route: 'route' },
    prepare({ title, subtitle, route }) {
      return { title, subtitle: [subtitle, route].filter(Boolean).join(' · ') }
    },
  },
})
