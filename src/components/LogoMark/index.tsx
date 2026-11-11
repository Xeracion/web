import type { CSSProperties } from 'react'

import { cn } from '@/lib/cn'

import styles from './LogoMark.module.css'
import { LOGO_PIECES, LOGO_VIEWBOX } from './paths'

// Wordmark «Xeracion» en vectorial (public/logo/xeracion-azul.svg), troceado
// por letras en paths.ts. Al comprimirse (al hacer scroll, como el logo de
// anthropic.com) las letras se pliegan hacia la X y solo queda la X.
const X_RIGHT = LOGO_PIECES[0].right
const LETTERS = LOGO_PIECES.length - 1

interface LogoMarkProps {
  collapsed?: boolean
  className?: string
}

export function LogoMark({ collapsed = false, className }: LogoMarkProps) {
  const style = { '--x-ratio': X_RIGHT / LOGO_VIEWBOX.width } as CSSProperties

  return (
    <span className={cn(styles.mark, collapsed && styles.collapsed, className)} style={style} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}`}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        {LOGO_PIECES.map((piece, i) => {
          const isX = piece.key === 'x'
          const pieceStyle = isX
            ? undefined
            : ({
                // Distancia hasta la X, en unidades del viewBox.
                '--shift': (piece.left + piece.right) / 2 - X_RIGHT,
                // Al comprimir sale primero la letra más lejana; al desplegar
                // vuelve primero la más cercana a la X.
                '--delay-out': `${(LETTERS - i) * 22}ms`,
                '--delay-in': `${(i - 1) * 22}ms`,
              } as CSSProperties)
          return (
            <path
              key={piece.key}
              d={piece.d}
              fillRule="evenodd"
              className={isX ? undefined : styles.letter}
              style={pieceStyle}
            />
          )
        })}
      </svg>
    </span>
  )
}
