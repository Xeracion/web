import { defineArrayMember, defineField } from 'sanity'
import type { ArrayRule } from 'sanity'

interface RichTextFieldOptions {
  name: string
  title?: string
  description?: string
  group?: string
  validation?: (rule: ArrayRule<unknown>) => ArrayRule<unknown>
}

export function richTextField({ validation, ...rest }: RichTextFieldOptions) {
  return defineField({
    type: 'array',
    of: [
      defineArrayMember({
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
        marks: {
          decorators: [
            { title: 'Negrita', value: 'strong' },
            { title: 'Cursiva', value: 'em' },
          ],
          annotations: [],
        },
      }),
    ],
    validation,
    ...rest,
  })
}
