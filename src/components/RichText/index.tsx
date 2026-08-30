import type { ElementType } from 'react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock, PortableTextComponents } from '@portabletext/react'

interface RichTextProps {
  value?: PortableTextBlock[]
  className?: string
  as?: ElementType
  paragraphSpacing?: boolean
}

export function RichText({ value, className, as: Tag = 'p', paragraphSpacing = true }: RichTextProps) {
  if (!value || value.length === 0) return null

  const components: PortableTextComponents = {
    block: {
      normal: ({ children, index }) => (
        <Tag
          className={className}
          style={paragraphSpacing && index > 0 ? { marginTop: '1em' } : undefined}
        >
          {children}
        </Tag>
      ),
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
  }

  return <PortableText value={value} components={components} />
}
