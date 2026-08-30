import { defineField, defineType } from 'sanity'

export const pageMentores = defineType({
  name: 'pageMentores',
  title: 'Página Mentores',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Portada', default: true },
    { name: 'porque', title: 'A quién buscamos' },
    { name: 'beneficios', title: 'Beneficios' },
    { name: 'stats', title: 'Números' },
    { name: 'testimonios', title: 'Testimonios' },
    { name: 'cierre', title: 'Cierre' },
  ],
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Etiqueta pequeña',
      description: 'Por ejemplo: "Adopta un extranjero".',
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
    defineField({
      name: 'heroText',
      title: 'Texto de la portada',
      type: 'text',
      rows: 4,
      group: 'hero',
      validation: (Rule) => Rule.required().error('Esta página necesita un texto introductorio.'),
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
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "foto editorial · mentor y voluntaria paseando por Ferrol Vello".',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Texto del botón',
      description: 'Por ejemplo: "Apúntame".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaHref',
      title: 'Destino del botón',
      description:
        'A dónde lleva el botón: un correo (ej. "mailto:info@xeracion.org"), un enlace de WhatsApp, un formulario externo, o un ancla dentro de esta misma página. Si lo dejas vacío, lleva al email de contacto.',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'whyIntro',
      title: 'Introducción de "A quién buscamos"',
      type: 'sectionIntro',
      group: 'porque',
    }),
    defineField({
      name: 'whyText',
      title: 'Texto',
      type: 'text',
      rows: 4,
      group: 'porque',
    }),
    defineField({
      name: 'beneficiosIntro',
      title: 'Introducción de "Beneficios"',
      type: 'sectionIntro',
      group: 'beneficios',
    }),
    defineField({
      name: 'beneficios',
      title: 'Beneficios de ser mentor',
      description: 'Normalmente son tres: redescubrir Ferrol, viajar sin salir de casa y hacer nuevas amistades.',
      type: 'array',
      of: [{ type: 'valueItem' }],
      group: 'beneficios',
      validation: (Rule) => Rule.min(3).max(3).error('Debe haber exactamente tres beneficios.'),
    }),
    defineField({
      name: 'stats',
      title: 'Números destacados',
      description: 'Por ejemplo: voluntarios extranjeros acompañados y mentores locales activos.',
      type: 'array',
      of: [{ type: 'statItem' }],
      group: 'stats',
      validation: (Rule) => Rule.min(2).max(2).error('Debe haber exactamente dos números.'),
    }),
    defineField({
      name: 'testimoniosIntro',
      title: 'Introducción de "Testimonios"',
      description: 'Los testimonios en sí se gestionan en su propia sección, no aquí (route: "Mentores").',
      type: 'sectionIntro',
      group: 'testimonios',
    }),
    defineField({
      name: 'closingHeading',
      title: 'Título del cierre',
      type: 'string',
      group: 'cierre',
    }),
    defineField({
      name: 'closingText',
      title: 'Texto del cierre',
      type: 'text',
      rows: 2,
      group: 'cierre',
    }),
  ],
  preview: {
    select: { title: 'heroHeading', media: 'heroImage' },
    prepare({ title, media }) {
      return { title: title || 'Página Mentores', media }
    },
  },
})
