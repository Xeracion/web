import type { CSSProperties } from 'react'

import { cn } from '@/lib/cn'

import styles from './LogoMark.module.css'

// El wordmark «Xeracion» troceado en piezas (public/img/logo/, sacadas del
// PNG original por silueta, no por caja: algunas letras se solapan). Las
// posiciones son las de cada pieza dentro del wordmark original (1811×375),
// en % de su ancho.
const PIECES = [
  { key: 'x', left: 0, width: 17.504 },
  { key: 'e', left: 17.118, width: 13.142 },
  { key: 'r', left: 30.646, width: 9.442 },
  { key: 'a', left: 39.702, width: 13.749 },
  { key: 'c', left: 52.899, width: 12.7 },
  { key: 'i', left: 65.599, width: 5.356 },
  { key: 'o', left: 70.569, width: 14.578 },
  { key: 'n', left: 85.809, width: 14.191 },
] as const

const X_WIDTH = PIECES[0].width
const LETTERS = PIECES.length - 1

interface LogoMarkProps {
  /** Comprimido: solo queda la X (al hacer scroll, como el logo de anthropic.com). */
  collapsed?: boolean
  className?: string
}

export function LogoMark({ collapsed = false, className }: LogoMarkProps) {
  return (
    <span className={cn(styles.mark, collapsed && styles.collapsed, className)} aria-hidden="true">
      <span className={styles.layer}>
        {PIECES.map((piece, i) => {
          const style = {
            left: `${piece.left}%`,
            width: `${piece.width}%`,
            // Distancia hasta la X, en fracción del ancho del wordmark.
            '--shift': (piece.left - X_WIDTH + piece.width / 2) / 100,
            // Al comprimir sale primero la letra más lejana; al desplegar
            // vuelve primero la más cercana a la X.
            '--delay-out': `${(LETTERS - i) * 22}ms`,
            '--delay-in': `${Math.max(i - 1, 0) * 22}ms`,
          } as CSSProperties
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={piece.key}
              src={`/img/logo/${piece.key}.png`}
              alt=""
              className={cn(styles.piece, piece.key === 'x' && styles.pieceX)}
              style={style}
              draggable={false}
            />
          )
        })}
      </span>
    </span>
  )
}
