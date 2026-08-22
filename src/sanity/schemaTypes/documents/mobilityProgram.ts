import { defineField, defineType } from 'sanity'

import { routeField } from '../fields/route'

export const mobilityProgram = defineType({
  name: 'mobilityProgram',
  title: 'Programa de movilidad',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      description: 'Por ejemplo: "Voluntariado Europeo (CES/ESC)".',
      type: 'string',
      validation: (Rule) => Rule.required().error('El programa necesita un nombre.'),
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      description: 'Por ejemplo: "2 a 12 meses".',
      type: 'string',
    }),
    defineField({
      name: 'idealFor',
      title: 'Para quién es',
      description: 'A quién le conviene este programa.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'covers',
      title: 'Qué cubre',
      description: 'Qué gastos están pagados: alojamiento, comida, transporte, etc.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      description: 'Por ejemplo: "Ver proyectos abiertos".',
      type: 'string',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Enlace del botón',
      description:
        'A dónde lleva el botón. Puede ser una dirección completa (https://...), un correo (mailto:...) o un enlace dentro de la propia página (#proyectos).',
      type: 'string',
    }),
    routeField(),
  ],
  preview: {
    select: { title: 'name', subtitle: 'duration', route: 'route' },
    prepare({ title, subtitle, route }) {
      return { title, subtitle: [subtitle, route].filter(Boolean).join(' · ') }
    },
  },
})
