import { defineField, defineType } from 'sanity'

import { richTextField } from '../fields/richText'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Portada' },
    { name: 'catalogo', title: 'Catálogo' },
    { name: 'testimonials', title: 'Testimonios' },
    { name: 'agenda', title: 'Agenda' },
    { name: 'institucional', title: 'Franja institucional' },
    { name: 'closing', title: 'Cierre' },
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Kicker',
      description: 'La frase corta que aparece encima del titular principal, en mayúsculas. Por ejemplo: "Xeración · Ferrol, Galicia".',
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
      title: 'Subtítulo',
      description: 'El párrafo corto que va justo debajo del titular, explicando qué hacéis. Admite negrita y varios párrafos.',
      group: 'hero',
      validation: (Rule) => Rule.required().min(1).error('La portada necesita un subtítulo.'),
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
      name: 'catalogIntro',
      title: 'Introducción del catálogo',
      description: 'Etiqueta y título opcionales encima del catálogo de experiencias de la portada.',
      type: 'sectionIntro',
      group: 'catalogo',
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
      name: 'institutionalText',
      title: 'Texto de la franja institucional',
      description:
        'Una sola línea, con puntos medios (·) como separador. Es lo que tiene que leer un socio institucional en cinco segundos. Por ejemplo: "Asociación juvenil sin ánimo de lucro desde 2013 · Acreditada Erasmus+ y Cuerpo Europeo de Solidaridad · +200 jóvenes movidos".',
      type: 'string',
      group: 'institucional',
      validation: (Rule) => Rule.required().error('La franja institucional necesita un texto.'),
    }),
    defineField({
      name: 'institutionalLinkHref',
      title: 'Destino del enlace',
      description: 'A dónde lleva la franja al hacer clic. Si lo dejas vacío, lleva a "/nosotros/".',
      type: 'string',
      group: 'institucional',
    }),
    defineField({
      name: 'institutionalLogos',
      title: 'Logos institucionales',
      description: 'Por ejemplo: Erasmus+, Cuerpo Europeo de Solidaridad, Concello de Ferrol, Xunta de Galicia.',
      type: 'array',
      of: [{ type: 'partner' }],
      group: 'institucional',
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
