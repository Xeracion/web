import { defineField } from 'sanity'

export const ROUTE_OPTIONS = [
  { title: 'Ferrol', value: 'ferrol' },
  { title: 'Irse', value: 'irse' },
  { title: 'English', value: 'en' },
  { title: 'Sobre nós', value: 'nosotros' },
  { title: 'General', value: 'general' },
]

export function routeField(overrides: Record<string, unknown> = {}) {
  return defineField({
    name: 'route',
    title: 'Ruta',
    description:
      'A qué zona del sitio pertenece este contenido: la de Ferrol, la de Irse, la de English, o General si no es de ninguna ruta en concreto.',
    type: 'string',
    options: { list: ROUTE_OPTIONS, layout: 'dropdown' },
    validation: (Rule) => Rule.required().error('Elige a qué ruta pertenece este contenido.'),
    ...overrides,
  })
}
