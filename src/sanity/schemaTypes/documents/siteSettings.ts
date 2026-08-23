import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes generales',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del sitio',
      description: 'El nombre de la asociación tal como debe aparecer en el sitio. Por ejemplo: "Xeración".',
      type: 'string',
      validation: (Rule) => Rule.required().error('El sitio necesita un nombre.'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción para buscadores',
      description:
        'Una o dos frases que expliquen quiénes sois. Es lo que Google suele mostrar debajo del título cuando alguien os busca.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logotipo',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      description: 'La dirección física de la sede, tal como quieres que aparezca en el pie de página.',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
      validation: (Rule) =>
        Rule.email().error('Escribe un correo electrónico válido, por ejemplo info@xeracion.org'),
    }),
    defineField({
      name: 'whatsapp',
      title: 'Número de WhatsApp',
      description:
        'El número al que llega el botón "Hablar por WhatsApp", con el prefijo del país y sin espacios. Por ejemplo: 34612345678.',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Enlaces a redes sociales',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
      name: 'googleCalendarId',
      title: 'ID de Google Calendar',
      description:
        'El calendario de Google del que se leen automáticamente los eventos de la agenda (portada y /ferrol). El calendario debe estar configurado como público (Ajustes del calendario → "Permisos de acceso" → "Hacer disponible públicamente"). El ID está en Ajustes del calendario → "Integrar calendario" → "ID de calendario" (algo como xxxxx@group.calendar.google.com). Mientras esté vacío, no se muestra ningún evento.',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'email', media: 'logo' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Ajustes generales', subtitle, media }
    },
  },
})
