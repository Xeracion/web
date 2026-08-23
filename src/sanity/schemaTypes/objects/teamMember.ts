import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Persona del equipo',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      description: 'Por ejemplo: "Coordinación" o "Voluntaria · Francia".',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkUrl',
      title: 'Enlace (opcional)',
      description: 'Por ejemplo, su perfil de LinkedIn.',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
