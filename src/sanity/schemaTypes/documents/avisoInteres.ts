import { defineField, defineType } from 'sanity'

// Se crea desde el formulario público "Avísame" de cada ficha de experiencia
// (src/lib/notifySignup.ts), no se edita a mano en Studio — este documento
// solo sirve para que el equipo vea y exporte los contactos captados.
export const avisoInteres = defineType({
  name: 'avisoInteres',
  title: 'Aviso de interés',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Correo',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: true,
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'experiencia',
      title: 'Experiencia',
      type: 'reference',
      to: [{ type: 'experiencia' }],
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'procesado',
      title: 'Ya contactado / exportado',
      description: 'Márcalo cuando hayas añadido este contacto a la newsletter o hayas hablado con la persona.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'nombre', email: 'email', experienciaTitulo: 'experiencia.titulo' },
    prepare({ title, email, experienciaTitulo }) {
      return { title, subtitle: [experienciaTitulo, email].filter(Boolean).join(' · ') }
    },
  },
})
