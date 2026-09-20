import { defineField, defineType } from 'sanity'

import { languageField } from '../fields/language'
import { richTextField } from '../fields/richText'

export const CATEGORIA_OPTIONS = [
  { title: 'Camino', value: 'camino' },
  { title: 'Aventura', value: 'aventura' },
  { title: 'Vivir fuera', value: 'vivirFuera' },
  { title: 'Intercambio', value: 'intercambio' },
  { title: 'Local', value: 'local' },
  { title: 'Naturaleza', value: 'naturaleza' },
]

export const AMBITO_OPTIONS = [
  { title: 'Galicia', value: 'galicia' },
  { title: 'Europa', value: 'europa' },
]

export const DURACION_OPTIONS = [
  { title: 'Un finde', value: 'finde' },
  { title: 'Una semana', value: 'semana' },
  { title: 'Meses', value: 'meses' },
]

export const COSTE_TIPO_OPTIONS = [
  { title: 'Gratis', value: 'gratis' },
  { title: 'Financiado', value: 'financiado' },
  { title: 'Pago', value: 'pago' },
]

export const experiencia = defineType({
  name: 'experiencia',
  title: 'Experiencia',
  type: 'document',
  groups: [
    { name: 'basico', title: 'Básico', default: true },
    { name: 'clasificacion', title: 'Clasificación y coste' },
    { name: 'detalle', title: 'Página interna' },
  ],
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      description: 'El nombre de la experiencia tal como aparece en la tarjeta. Corto y concreto.',
      type: 'string',
      group: 'basico',
      validation: (Rule) => Rule.required().error('La experiencia necesita un título.'),
    }),
    defineField({
      name: 'slug',
      title: 'Dirección web',
      description:
        'La parte final de la dirección (xeracion.org/experiencias/esto). Se genera sola a partir del título: pulsa "Generate".',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      group: 'basico',
      validation: (Rule) =>
        Rule.required().error('La experiencia necesita una dirección web. Pulsa "Generate" junto al título.'),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      group: 'basico',
      options: { list: CATEGORIA_OPTIONS, layout: 'dropdown' },
      validation: (Rule) => Rule.required().error('Elige una categoría.'),
    }),
    defineField({
      name: 'lugar',
      title: 'Lugar',
      description: 'Corto. Por ejemplo: "Ferrol → Santiago" o "Fragas do Eume".',
      type: 'string',
      group: 'basico',
      validation: (Rule) => Rule.required().error('La experiencia necesita un lugar.'),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen',
      description: 'Una frase, máximo 140 caracteres. Es lo que se lee en la tarjeta del catálogo.',
      type: 'text',
      rows: 2,
      group: 'basico',
      validation: (Rule) =>
        Rule.required()
          .max(140)
          .error('El resumen es obligatorio y no puede superar los 140 caracteres.'),
    }),
    defineField({
      name: 'imagen',
      title: 'Foto',
      type: 'imageWithAlt',
      group: 'basico',
      validation: (Rule) => Rule.required().error('La experiencia necesita una foto.'),
    }),
    defineField({
      name: 'ambito',
      title: 'Ámbito',
      type: 'string',
      group: 'clasificacion',
      options: { list: AMBITO_OPTIONS, layout: 'radio' },
      validation: (Rule) => Rule.required().error('Elige si es en Galicia o por Europa.'),
    }),
    defineField({
      name: 'duracion',
      title: 'Duración',
      type: 'string',
      group: 'clasificacion',
      options: { list: DURACION_OPTIONS, layout: 'radio' },
      validation: (Rule) => Rule.required().error('Elige la duración.'),
    }),
    defineField({
      name: 'costeTipo',
      title: 'Tipo de coste',
      description: 'Determina el color de la etiqueta de coste: gratis y financiado se pintan en verde.',
      type: 'string',
      group: 'clasificacion',
      options: { list: COSTE_TIPO_OPTIONS, layout: 'radio' },
      validation: (Rule) => Rule.required().error('Elige el tipo de coste.'),
    }),
    defineField({
      name: 'costeEtiqueta',
      title: 'Etiqueta de coste',
      description: 'El texto exacto que se muestra. Por ejemplo: "Sin coste", "Te lo paga Europa", "Desde 1.100 €".',
      type: 'string',
      group: 'clasificacion',
      validation: (Rule) => Rule.required().error('Escribe la etiqueta de coste.'),
    }),
    defineField({
      name: 'colorBanda',
      title: 'Color de la banda',
      description: 'Color hexadecimal para la banda superior de la tarjeta. Por ejemplo: #5DCAA5.',
      type: 'string',
      group: 'clasificacion',
      validation: (Rule) =>
        Rule.required()
          .regex(/^#([0-9a-fA-F]{3}){1,2}$/, { name: 'hex' })
          .error('Escribe un color hexadecimal válido, por ejemplo #5DCAA5.'),
    }),
    defineField({
      name: 'destacada',
      title: 'Destacada en la home',
      description: 'Si está activado, esta experiencia aparece en el catálogo reducido de la portada.',
      type: 'boolean',
      group: 'clasificacion',
      initialValue: false,
    }),
    defineField({
      name: 'activa',
      title: 'Activa',
      description: 'Si está desactivado, la experiencia deja de mostrarse en cualquier catálogo.',
      type: 'boolean',
      group: 'clasificacion',
      initialValue: true,
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      description: 'Número para ordenar manualmente el catálogo. Los números más bajos van primero.',
      type: 'number',
      group: 'clasificacion',
      initialValue: 0,
    }),
    languageField({ group: 'clasificacion' }),
    defineField({
      name: 'enlaceExterno',
      title: 'Enlace externo',
      description:
        'Opcional. Si lo rellenas, la tarjeta enlaza directamente a esta dirección (se abre en pestaña nueva) en vez de a una página propia dentro del sitio — y el campo "Descripción" de abajo deja de usarse.',
      type: 'url',
      group: 'detalle',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    richTextField({
      name: 'descripcion',
      title: 'Descripción',
      description:
        'Solo para experiencias con página propia (sin enlace externo). El texto completo de la ficha, con negrita y varios párrafos.',
      group: 'detalle',
    }),
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'lugar', media: 'imagen', activa: 'activa' },
    prepare({ title, subtitle, media, activa }) {
      return { title, subtitle: activa === false ? `${subtitle} · oculta` : subtitle, media }
    },
  },
})
