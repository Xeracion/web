import { defineField, defineType } from 'sanity'

export const homeEn = defineType({
  name: 'homeEn',
  title: 'Home (English)',
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
      description: 'La frase corta que aparece encima del titular principal, en mayúsculas. En inglés.',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heading',
      title: 'Titular',
      description:
        'El titular grande de la portada, en inglés. Debe ser una frase completa que termine en punto.',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required().error('La portada necesita un titular.'),
    }),
    defineField({
      name: 'intro',
      title: 'Entradilla',
      description: 'El párrafo corto que va justo debajo del titular, en inglés.',
      type: 'text',
      rows: 3,
      group: 'hero',
      validation: (Rule) => Rule.required().error('La portada necesita una entradilla.'),
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
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "editorial photo · group at Ferrol\'s quay".',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroIndicator',
      title: 'Indicador bajo el texto',
      description: 'El texto pequeño que invita a elegir una ruta, en inglés.',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'routeCardFerrol',
      title: 'Tarjeta · Ferrol',
      description: 'Enlaza a /en/ferrol/.',
      type: 'routeCard',
      group: 'routeCards',
    }),
    defineField({
      name: 'routeCardVolunteering',
      title: 'Tarjeta · Volunteering',
      description: 'Enlaza a /volunteering/.',
      type: 'routeCard',
      group: 'routeCards',
    }),
    defineField({
      name: 'routeCardAbout',
      title: 'Tarjeta · About us',
      description: 'Enlaza a /about/.',
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
      description: 'Por ejemplo: "Real stories".',
      type: 'string',
      group: 'testimonials',
    }),
    defineField({
      name: 'agendaEyebrow',
      title: 'Etiqueta pequeña',
      description: 'Por ejemplo: "This week in Ferrol".',
      type: 'string',
      group: 'agenda',
    }),
    defineField({
      name: 'agendaLinkLabel',
      title: 'Texto del enlace a toda la agenda',
      description: 'Por ejemplo: "Full schedule".',
      type: 'string',
      group: 'agenda',
    }),
    defineField({
      name: 'closingHeading',
      title: 'Título del cierre',
      type: 'string',
      group: 'closing',
    }),
    defineField({
      name: 'closingText',
      title: 'Texto del cierre',
      type: 'text',
      rows: 2,
      group: 'closing',
    }),
  ],
  preview: {
    select: { title: 'heading', media: 'heroImage' },
    prepare({ title, media }) {
      return { title: title || 'Home (English)', media }
    },
  },
})
