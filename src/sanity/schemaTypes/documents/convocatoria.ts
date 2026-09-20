import { defineField, defineType } from 'sanity'

export const convocatoria = defineType({
  name: 'convocatoria',
  title: 'Convocatoria',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      description: 'Por ejemplo: "Convocatoria de primavera 2026".',
      type: 'string',
      validation: (Rule) => Rule.required().error('La convocatoria necesita un título.'),
    }),
    defineField({
      name: 'experiencia',
      title: 'Experiencia',
      type: 'reference',
      to: [{ type: 'experiencia' }],
      validation: (Rule) => Rule.required().error('Elige a qué experiencia pertenece esta convocatoria.'),
    }),
    defineField({
      name: 'pais',
      title: 'País',
      type: 'string',
    }),
    defineField({
      name: 'fechaInicio',
      title: 'Fecha de inicio',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'fechaFin',
      title: 'Fecha de fin',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'fechaLimite',
      title: 'Plazo de inscripción',
      description: 'La fecha límite para apuntarse. Pasada esta fecha, la convocatoria deja de listarse como abierta.',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'plazas',
      title: 'Plazas',
      description: 'Opcional. Déjalo en blanco si no quieres mostrar un número de plazas.',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
    }),
    defineField({
      name: 'enlaceInscripcion',
      title: 'Enlace de inscripción',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }).error('Escribe la dirección donde se apunta la gente.'),
    }),
    defineField({
      name: 'activa',
      title: 'Activa',
      description: 'Si está desactivado, esta convocatoria deja de mostrarse aunque el plazo no haya pasado.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'titulo', experienciaTitulo: 'experiencia.titulo', pais: 'pais', fechaLimite: 'fechaLimite' },
    prepare({ title, experienciaTitulo, pais, fechaLimite }) {
      const subtitle = [experienciaTitulo, pais, fechaLimite ? `hasta ${fechaLimite}` : null]
        .filter(Boolean)
        .join(' · ')
      return { title, subtitle }
    },
  },
})
