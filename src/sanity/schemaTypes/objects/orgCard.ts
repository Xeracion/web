import { defineField, defineType } from 'sanity'

export const orgCard = defineType({
  name: 'orgCard',
  title: 'Tarjeta para organizaciones',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      description: 'Por ejemplo: "Send us your volunteers".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'Destino del botón',
      description: 'Un ancla dentro de la página (ej. "#contact") o una URL completa, como mailto:info@xeracion.org.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'ctaLabel' } },
})
