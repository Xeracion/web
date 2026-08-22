import { defineField, defineType } from 'sanity'

import { routeField } from '../fields/route'

export const event = defineType({
  name: 'event',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      description: 'El nombre del evento, tal como debe verse en la agenda. Por ejemplo: "Offline Club".',
      type: 'string',
      validation: (Rule) => Rule.required().error('El evento necesita un título.'),
    }),
    defineField({
      name: 'dateTime',
      title: 'Fecha y hora',
      description: 'Cuándo empieza el evento.',
      type: 'datetime',
      options: { dateFormat: 'DD-MM-YYYY', timeFormat: 'HH:mm', timeStep: 15 },
      validation: (Rule) => Rule.required().error('El evento necesita una fecha y hora.'),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      description: 'Dónde es, dentro de la Casa da Xuventude o donde corresponda. Por ejemplo: "Sala baja".',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción breve',
      description: 'Una o dos frases contando de qué va el evento.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('El evento necesita una descripción breve.'),
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      description: 'Actívalo si este evento debe mostrarse como la actividad destacada de la semana en la portada.',
      type: 'boolean',
      initialValue: false,
    }),
    routeField(),
  ],
  preview: {
    select: { title: 'title', dateTime: 'dateTime', location: 'location', route: 'route' },
    prepare({ title, dateTime, location, route }) {
      const date = dateTime
        ? new Date(dateTime).toLocaleString('es-ES', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
          })
        : 'sin fecha'
      return {
        title,
        subtitle: [date, location, route].filter(Boolean).join(' · '),
      }
    },
  },
})
