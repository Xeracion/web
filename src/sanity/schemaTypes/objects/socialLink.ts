import { defineField, defineType } from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Enlace a red social',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Red social',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Otra', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Dirección del perfil',
      description: 'Pega aquí el enlace completo al perfil, empezando por https://',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ['http', 'https'] })
          .error('Escribe una dirección web válida, empezando por https://'),
    }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
})
