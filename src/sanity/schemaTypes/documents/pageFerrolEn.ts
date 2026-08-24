import { defineField, defineType } from 'sanity'

export const pageFerrolEn = defineType({
  name: 'pageFerrolEn',
  title: 'Página Ferrol (English)',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Portada', default: true },
    { name: 'programas', title: 'Programas fijos' },
    { name: 'agenda', title: 'Agenda' },
    { name: 'llegar', title: 'Cómo llegar' },
    { name: 'preguntas', title: 'Preguntas rápidas' },
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
    defineField({
      name: 'heroText',
      title: 'Texto de la portada',
      type: 'text',
      rows: 3,
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
        'Mientras no haya foto subida, este texto describe qué foto hace falta. Por ejemplo: "foto editorial · Offline Club en la Almendra 9".',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCtaPrimaryLabel',
      title: 'Texto del botón principal',
      description: 'Por ejemplo: "Ver agenda de la semana".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaPrimaryHref',
      title: 'Destino del botón principal',
      description:
        'A dónde lleva el botón. Puede ser un ancla dentro de esta misma página (ej. "#agenda") o una URL completa (ej. "https://..."). Si lo dejas vacío, lleva a "#agenda".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaSecondaryLabel',
      title: 'Texto del botón secundario',
      description: 'Por ejemplo: "Cómo llegar".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaSecondaryHref',
      title: 'Destino del botón secundario',
      description:
        'A dónde lleva el botón. Puede ser un ancla dentro de esta misma página (ej. "#visitanos") o una URL completa. Si lo dejas vacío, lleva a "#visitanos".',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'fixedProgramsIntro',
      title: 'Introducción de "Programas fijos"',
      description: 'Los programas fijos en sí se gestionan en su propia sección, no aquí.',
      type: 'sectionIntro',
      group: 'programas',
    }),
    defineField({
      name: 'agendaIntro',
      title: 'Introducción de "Agenda"',
      description: 'Los eventos en sí se gestionan en su propia sección, no aquí.',
      type: 'sectionIntro',
      group: 'agenda',
    }),
    defineField({
      name: 'arrivalHeading',
      title: 'Título de "Cómo llegar"',
      description: 'Por ejemplo: "Casa da Xuventude".',
      type: 'string',
      group: 'llegar',
    }),
    defineField({
      name: 'arrivalMapEmbedUrl',
      title: 'Mapa de Google (URL insertada)',
      description:
        'Ve a Google Maps, busca la ubicación, pulsa Compartir → "Insertar un mapa", y pega aquí la URL que aparece dentro de src="..." en el código que te da. Mientras esté vacío, se muestra un marcador de foto en su lugar.',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({ scheme: ['https'] }).custom((value) => {
          if (!value) return true
          return /^https:\/\/(www\.)?google\.com\/maps\/embed/.test(value)
            ? true
            : 'Pega la URL del atributo src de un mapa insertado de Google Maps (empieza por https://www.google.com/maps/embed...).'
        }),
      group: 'llegar',
    }),
    defineField({
      name: 'arrivalAddressText',
      title: 'Texto de la dirección',
      description: 'Dirección completa, planta y horario de apertura.',
      type: 'text',
      rows: 2,
      group: 'llegar',
    }),
    defineField({
      name: 'arrivalTransportText',
      title: 'Cómo venir en transporte',
      type: 'text',
      rows: 2,
      group: 'llegar',
    }),
    defineField({
      name: 'faqIntro',
      title: 'Introducción de "Preguntas rápidas"',
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
      return { title: title || 'Página Ferrol (English)', media }
    },
  },
})
