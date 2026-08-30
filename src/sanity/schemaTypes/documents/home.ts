import { defineField, defineType } from 'sanity'

import { richTextField } from '../fields/richText'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Portada' },
    { name: 'routeCards', title: 'Tarjetas de ruta' },
    { name: 'stats', title: 'Números' },
    { name: 'testimonials', title: 'Testimonios' },
    { name: 'agenda', title: 'Agenda' },
    { name: 'closing', title: 'Cierre' },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta pequeña',
      description: 'La frase corta que aparece encima del titular principal, en mayúsculas.',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      description: 'El titular grande de la portada. Debe ser una frase completa que termine en punto.',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required().error('La portada necesita un titular.'),
    }),
    richTextField({
      name: 'intro',
      title: 'Entradilla',
      description: 'El párrafo corto que va justo debajo del titular, explicando qué hacéis. Admite negrita y varios párrafos.',
      group: 'hero',
      validation: (Rule) => Rule.required().min(1).error('La portada necesita una entradilla.'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto principal',
      type: 'imageWithAlt',
      group: 'hero',
      validation: (Rule) => Rule.required().error('La portada necesita una foto principal.'),
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Qué foto va en la portada',
      description:
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "foto editorial · grupo en muelle de Ferrol".',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroIndicator',
      title: 'Indicador bajo el texto',
      description: 'El texto pequeño que invita a elegir una ruta. Por ejemplo: "Elige por dónde entras".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'routeCardFerrol',
      title: 'Tarjeta · Ferrol',
      type: 'routeCard',
      group: 'routeCards',
    }),
    defineField({
      name: 'routeCardIrse',
      title: 'Tarjeta · Irse',
      type: 'routeCard',
      group: 'routeCards',
    }),
    defineField({
      name: 'routeCardEn',
      title: 'Tarjeta · English',
      type: 'routeCard',
      group: 'routeCards',
    }),
    defineField({
      name: 'stats',
      title: 'Tira de números',
      description: 'Los cuatro números destacados que aparecen en la franja de estadísticas.',
      type: 'array',
      of: [{ type: 'statItem' }],
      group: 'stats',
      validation: (Rule) =>
        Rule.min(4).max(4).error('La tira de números necesita exactamente cuatro números.'),
    }),
    defineField({
      name: 'testimonialsEyebrow',
      title: 'Etiqueta pequeña',
      description: 'Por ejemplo: "Historias reales".',
      type: 'string',
      group: 'testimonials',
    }),
    defineField({
      name: 'agendaEyebrow',
      title: 'Etiqueta pequeña',
      description: 'Por ejemplo: "Esta semana en Ferrol".',
      type: 'string',
      group: 'agenda',
    }),
    defineField({
      name: 'agendaLinkLabel',
      title: 'Texto del enlace a toda la agenda',
      description: 'Por ejemplo: "Toda la agenda".',
      type: 'string',
      group: 'agenda',
    }),
    defineField({
      name: 'closingHeading',
      title: 'Título del cierre',
      description: 'El título de la sección final, la que invita a escribiros.',
      type: 'string',
      group: 'closing',
    }),
    richTextField({
      name: 'closingText',
      title: 'Texto del cierre',
      group: 'closing',
    }),
  ],
  preview: {
    select: { title: 'heading', media: 'heroImage' },
    prepare({ title, media }) {
      return { title: title || 'Home', media }
    },
  },
})
