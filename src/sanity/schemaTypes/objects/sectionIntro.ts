import { defineField, defineType } from 'sanity'

export const sectionIntro = defineType({
  name: 'sectionIntro',
  title: 'Introducción de sección',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta pequeña (opcional)',
      description:
        'La palabra o frase corta que aparece encima del título de la sección, en mayúsculas. Dos a cuatro palabras. Déjalo en blanco si esta sección no lleva una.',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Título de la sección (opcional)',
      description: 'El título grande de la sección. Déjalo en blanco si esta sección no lleva uno propio.',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'heading', subtitle: 'eyebrow' },
    prepare({ title, subtitle }) {
      return { title: title || '(sin título)', subtitle }
    },
  },
})
