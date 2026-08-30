import { defineField, defineType } from 'sanity'

import { languageField } from '../fields/language'
import { richTextField } from '../fields/richText'
import { routeField } from '../fields/route'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    richTextField({
      name: 'quote',
      title: 'Cita',
      description: 'Lo que dijo la persona, tal cual. Se mostrará entre comillas.',
      validation: (Rule) => Rule.required().min(1).error('El testimonio necesita una cita.'),
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required().error('El testimonio necesita el nombre de la persona.'),
    }),
    defineField({
      name: 'originCity',
      title: 'Ciudad de origen',
      type: 'string',
    }),
    defineField({
      name: 'destinationCity',
      title: 'Ciudad de destino',
      type: 'string',
    }),
    defineField({
      name: 'program',
      title: 'Programa',
      description: 'Por ejemplo: "CES", "YE" o "ESC".',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Año',
      type: 'number',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'imageWithAlt',
    }),
    languageField(),
    defineField({
      name: 'displaySize',
      title: 'Tamaño de visualización',
      description: 'Si este testimonio debe mostrarse en grande o en tamaño mediano.',
      type: 'string',
      options: {
        list: [
          { title: 'Grande', value: 'grande' },
          { title: 'Mediano', value: 'mediano' },
        ],
        layout: 'radio',
      },
      initialValue: 'mediano',
      validation: (Rule) => Rule.required(),
    }),
    routeField(),
  ],
  preview: {
    select: {
      title: 'name',
      origin: 'originCity',
      destination: 'destinationCity',
      program: 'program',
      year: 'year',
      media: 'photo',
    },
    prepare({ title, origin, destination, program, year, media }) {
      const route = [origin, destination].filter(Boolean).join(' → ')
      const tag = [program, year].filter(Boolean).join(' ')
      return { title, subtitle: [route, tag].filter(Boolean).join(' · '), media }
    },
  },
})
