import { defineField, defineType } from 'sanity'

export const edicion = defineType({
  name: 'edicion',
  title: 'Edición anterior',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      description: 'Por ejemplo: "Voluntariado en Cracovia · otoño 2023".',
      type: 'string',
      validation: (Rule) => Rule.required().error('La edición necesita un título.'),
    }),
    defineField({
      name: 'experiencia',
      title: 'Experiencia',
      type: 'reference',
      to: [{ type: 'experiencia' }],
      validation: (Rule) => Rule.required().error('Elige a qué experiencia pertenece esta edición.'),
    }),
    defineField({
      name: 'anio',
      title: 'Año',
      type: 'number',
      validation: (Rule) => Rule.required().integer().error('Escribe el año de esta edición.'),
    }),
    defineField({
      name: 'lugar',
      title: 'Lugar',
      type: 'string',
    }),
    defineField({
      name: 'participantes',
      title: 'Participantes',
      description: 'Opcional. Déjalo en blanco si no quieres mostrar un número.',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'paises',
      title: 'Países',
      description: 'Opcional. Países de origen o destino de esta edición.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen',
      description: 'Dos frases máximo. Se lee en la ficha de la experiencia, en el listado de ediciones.',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200).error('Máximo dos frases — 200 caracteres.'),
    }),
    defineField({
      name: 'galeria',
      title: 'Galería',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
    }),
    defineField({
      name: 'destacada',
      title: 'Destacada',
      description:
        'Si está activado, esta edición cuenta para el dato de refuerzo que aparece en la tarjeta del catálogo (ej. "8 ediciones desde 2015").',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      experienciaTitulo: 'experiencia.titulo',
      anio: 'anio',
      media: 'galeria.0',
    },
    prepare({ title, experienciaTitulo, anio, media }) {
      return {
        title,
        subtitle: [experienciaTitulo, anio].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
