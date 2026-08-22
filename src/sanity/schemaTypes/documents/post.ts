import { defineField, defineType } from 'sanity'

import { languageField } from '../fields/language'

export const post = defineType({
  name: 'post',
  title: 'Post de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().error('El artículo necesita un título.'),
    }),
    defineField({
      name: 'slug',
      title: 'Dirección web',
      description:
        'La parte final de la dirección de internet del artículo (por ejemplo, xeracion.org/blog/mi-articulo). Se genera sola a partir del título: pulsa el botón "Generate" y no hace falta que la toques.',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) =>
        Rule.required().error('El artículo necesita una dirección web. Pulsa "Generate" junto al título.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen',
      description: 'Dos o tres frases que resuman el artículo. Se usan en la lista del blog y al compartirlo.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('El artículo necesita un resumen.'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagen de portada',
      type: 'imageWithAlt',
      validation: (Rule) => Rule.required().error('El artículo necesita una imagen de portada.'),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required().error('El artículo necesita un autor.'),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      options: { dateFormat: 'DD-MM-YYYY', timeFormat: 'HH:mm' },
      validation: (Rule) => Rule.required().error('El artículo necesita una fecha de publicación.'),
    }),
    languageField(),
    defineField({
      name: 'body',
      title: 'Cuerpo del texto',
      description:
        'El texto del artículo. Puedes insertar imágenes y citas destacadas usando el botón "+" al principio de una línea vacía.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título 2', value: 'h2' },
            { title: 'Título 3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
        },
        { type: 'imageWithAlt' },
        { type: 'pullQuote' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', authorName: 'author.name', media: 'coverImage', publishedAt: 'publishedAt' },
    prepare({ title, authorName, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
        : null
      return { title, subtitle: [authorName, date].filter(Boolean).join(' · '), media }
    },
  },
})
