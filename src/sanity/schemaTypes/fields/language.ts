import { defineField } from 'sanity'

export const LANGUAGE_OPTIONS = [
  { title: 'Castellano', value: 'es' },
  { title: 'Galego', value: 'gl' },
  { title: 'English', value: 'en' },
]

export function languageField(overrides: Record<string, unknown> = {}) {
  return defineField({
    name: 'language',
    title: 'Idioma',
    description: 'En qué idioma está escrito este contenido.',
    type: 'string',
    options: { list: LANGUAGE_OPTIONS, layout: 'dropdown' },
    initialValue: 'es',
    validation: (Rule) => Rule.required(),
    ...overrides,
  })
}
