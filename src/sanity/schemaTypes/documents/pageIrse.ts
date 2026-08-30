import { defineField, defineType } from 'sanity'

import { richTextField } from '../fields/richText'

export const pageIrse = defineType({
  name: 'pageIrse',
  title: 'Página Irse',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Portada', default: true },
    { name: 'funciona', title: 'Cómo funciona' },
    { name: 'programas', title: 'Programas' },
    { name: 'oportunidades', title: 'Oportunidades (Substack)' },
    { name: 'testimonios', title: 'Testimonios' },
    { name: 'preguntas', title: 'Preguntas frecuentes' },
    { name: 'cierre', title: 'Cierre' },
  ],
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Etiqueta pequeña',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Titular',
      description: 'El titular grande de esta página. Debe ser una frase completa que termine en punto.',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required().error('Esta página necesita un titular.'),
    }),
    richTextField({
      name: 'heroText',
      title: 'Texto de la portada',
      group: 'hero',
      validation: (Rule) => Rule.required().min(1).error('Esta página necesita un texto introductorio.'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto principal',
      type: 'imageWithAlt',
      group: 'hero',
      validation: (Rule) => Rule.required().error('Esta página necesita una foto principal.'),
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Qué foto va en la portada',
      description:
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "foto editorial · voluntaria despidiéndose en el aeropuerto".',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCtaPrimaryLabel',
      title: 'Texto del botón principal',
      description: 'Por ejemplo: "Apúntame a la base de datos".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaPrimaryHref',
      title: 'Destino del botón principal',
      description:
        'A dónde lleva el botón. Puede ser un ancla dentro de esta misma página (ej. "#formulario") o una URL completa. Si lo dejas vacío, lleva a "#formulario".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaSecondaryLabel',
      title: 'Texto del botón secundario',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaSecondaryHref',
      title: 'Destino del botón secundario',
      description:
        'A dónde lleva el botón. Puede ser un ancla dentro de esta misma página (ej. "#programas") o una URL completa. Si lo dejas vacío, lleva a "#programas".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'howItWorksIntro',
      title: 'Introducción de "Cómo funciona"',
      type: 'sectionIntro',
      group: 'funciona',
    }),
    defineField({
      name: 'howItWorksSteps',
      title: 'Los pasos',
      description: 'Normalmente son tres: te apuntas, te llamamos, te vas.',
      type: 'array',
      of: [{ type: 'processStep' }],
      group: 'funciona',
      validation: (Rule) => Rule.min(3).max(3).error('Debe haber exactamente tres pasos.'),
    }),
    defineField({
      name: 'programsIntro',
      title: 'Introducción de "Programas disponibles"',
      description: 'Los programas en sí se gestionan en su propia sección, no aquí.',
      type: 'sectionIntro',
      group: 'programas',
    }),
    defineField({
      name: 'opportunitiesIntro',
      title: 'Introducción de "Oportunidades"',
      type: 'sectionIntro',
      group: 'oportunidades',
    }),
    defineField({
      name: 'opportunitiesFeedUrl',
      title: 'Dirección de tu Substack',
      description:
        'La dirección de tu publicación de Substack, por ejemplo https://xeracion.substack.com. Con ella se muestran tus últimos artículos (con tu propio diseño, no el de Substack) y el botón para suscribirse. Mientras esté vacío, esta sección no se muestra.',
      type: 'url',
      group: 'oportunidades',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'testimonialsIntro',
      title: 'Introducción de "Testimonios"',
      description: 'Los testimonios en sí se gestionan en su propia sección, no aquí.',
      type: 'sectionIntro',
      group: 'testimonios',
    }),
    defineField({
      name: 'faqIntro',
      title: 'Introducción de "Preguntas frecuentes"',
      description: 'Las preguntas en sí se gestionan en su propia sección, no aquí.',
      type: 'sectionIntro',
      group: 'preguntas',
    }),
    defineField({
      name: 'closingHeading',
      title: 'Título del cierre',
      type: 'string',
      group: 'cierre',
    }),
    richTextField({
      name: 'closingText',
      title: 'Texto del cierre',
      group: 'cierre',
    }),
    defineField({
      name: 'closingCtaPrimaryHref',
      title: 'Destino del botón "Apúntame"',
      description:
        'A dónde lleva el botón. Puede ser un ancla dentro de esta misma página (ej. "#formulario") o una URL completa. Si lo dejas vacío, lleva a "#formulario".',
      type: 'string',
      group: 'cierre',
    }),
  ],
  preview: {
    select: { title: 'heroHeading', media: 'heroImage' },
    prepare({ title, media }) {
      return { title: title || 'Página Irse', media }
    },
  },
})
