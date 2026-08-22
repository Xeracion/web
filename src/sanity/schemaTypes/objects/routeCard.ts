import { defineField, defineType } from 'sanity'

export const routeCard = defineType({
  name: 'routeCard',
  title: 'Tarjeta de ruta',
  type: 'object',
  fields: [
    defineField({
      name: 'badgeLabel',
      title: 'Pastilla sobre la foto',
      description: 'Por ejemplo: "Ruta 1 · Local".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      description: 'La frase que resume para quién es esta ruta. Debe terminar en punto.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      description: 'Por ejemplo: "Ver agenda".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'photoLabel',
      title: 'Qué foto va aquí',
      description:
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "grupo en el Offline Club".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
})
