import { defineField, defineType } from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Imagen',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Descripción de la imagen',
      description:
        'Describe en una frase corta lo que se ve en la foto. Esta descripción la usan las personas que no pueden ver la imagen (por ejemplo, si usan un lector de pantalla) y también los buscadores como Google. Ejemplo: "Grupo de jóvenes voluntarios en el puerto de Ferrol".',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Esta imagen necesita una descripción antes de poder publicarse.'),
    }),
  ],
})
