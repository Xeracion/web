import { defineField, defineType } from 'sanity'

import { languageField } from '../fields/language'
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
    languageField(),
  ],
  preview: {
    select: { title: 'name', subtitle: 'schedule', route: 'route', language: 'language' },
    prepare({ title, subtitle, route, language }) {
      return { title, subtitle: [subtitle, route, language].filter(Boolean).join(' · ') }
    },
  },
})
