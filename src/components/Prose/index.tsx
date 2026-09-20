import type { ElementType, ReactNode } from 'react'

interface ProseProps {
  value?: string | string[]
  className?: string
  as?: ElementType
  paragraphSpacing?: boolean
}

// Reemplazo ligero de RichText/portable text para contenido hardcodeado en
// src/content/: en vez de bloques de Sanity, un string (un párrafo) o un
// array de strings (varios párrafos). Soporta **negrita** y *cursiva* con
// una sintaxis mínima tipo markdown — nada más, ni falta que hace para texto
// que se edita directamente en el código.
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.+?\*\*|\*.+?\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

export function Prose({ value, className, as: Tag = 'p', paragraphSpacing = true }: ProseProps) {
  if (!value) return null
  const paragraphs = Array.isArray(value) ? value : [value]
  if (paragraphs.length === 0) return null

  return (
    <>
      {paragraphs.map((paragraph, i) => (
        <Tag key={i} className={className} style={paragraphSpacing && i > 0 ? { marginTop: '1em' } : undefined}>
          {renderInline(paragraph)}
        </Tag>
      ))}
    </>
  )
}
