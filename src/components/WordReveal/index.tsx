import { Fragment, type CSSProperties } from 'react'

/** Número de palabras de un texto, para encadenar varios WordReveal seguidos. */
export function countWords(text?: string) {
  return text ? text.split(/\s+/).filter(Boolean).length : 0
}

interface WordRevealProps {
  text?: string
  /** Posición de la primera palabra en la secuencia (si va detrás de otro WordReveal). */
  offset?: number
}

// Titular que entra palabra a palabra al cargar la página (como las
// cabeceras de anthropic.com). Es solo CSS (.xr-word en globals.css): el
// texto está completo en el HTML y, con prefers-reduced-motion, aparece tal
// cual, sin animación.
export function WordReveal({ text, offset = 0 }: WordRevealProps) {
  if (!text) return null
  const words = text.split(/\s+/).filter(Boolean)

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="xr-word" style={{ '--i': offset + i } as CSSProperties}>
            {word}
          </span>
        </Fragment>
      ))}
    </>
  )
}
