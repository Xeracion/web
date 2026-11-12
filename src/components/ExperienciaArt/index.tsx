import type { ReactNode } from 'react'

import type { ExperienciaCategoria } from '@/content/experiencias'

import styles from './ExperienciaArt.module.css'

// Dibujo abstracto para la banda de cada tarjeta mientras no hay foto: formas
// geométricas en blanco translúcido sobre el color de la experiencia. Cada
// categoría tiene el suyo, para que la forma ya cuente de qué va.
// Es decorativo (aria-hidden): el título de la tarjeta dice el resto.

const ART: Record<ExperienciaCategoria, ReactNode> = {
  // Cumbres superpuestas y un sol.
  aventura: (
    <>
      <circle cx="238" cy="28" r="14" className={styles.solid} />
      <polygon points="0,100 60,34 104,78 160,20 230,100" className={styles.soft} />
      <polygon points="90,100 170,44 218,84 262,50 300,100" className={styles.mid} />
      <polygon points="0,100 40,66 84,100" className={styles.solid} />
    </>
  ),
  // Un sendero que serpentea con sus mojones.
  camino: (
    <>
      <path
        d="M-10 82 C 40 82, 50 30, 100 40 S 160 92, 210 58 S 270 18, 310 30"
        className={styles.line}
      />
      <circle cx="100" cy="40" r="6" className={styles.solid} />
      <circle cx="210" cy="58" r="6" className={styles.solid} />
      <circle cx="292" cy="26" r="9" className={styles.mid} />
    </>
  ),
  // Ondas que salen de un punto: voz, música, encuentro.
  local: (
    <>
      <circle cx="210" cy="50" r="74" className={styles.ring} />
      <circle cx="210" cy="50" r="50" className={styles.ring} />
      <circle cx="210" cy="50" r="26" className={styles.mid} />
      <circle cx="210" cy="50" r="8" className={styles.solid} />
    </>
  ),
  // Órbitas alrededor de un globo.
  vivirFuera: (
    <>
      <circle cx="220" cy="50" r="38" className={styles.mid} />
      <ellipse cx="220" cy="50" rx="84" ry="22" className={styles.ring} transform="rotate(-18 220 50)" />
      <ellipse cx="220" cy="50" rx="22" ry="38" className={styles.ring} />
      <circle cx="292" cy="30" r="7" className={styles.solid} />
    </>
  ),
  // Dos círculos que se cruzan.
  intercambio: (
    <>
      <circle cx="180" cy="50" r="42" className={styles.soft} />
      <circle cx="240" cy="50" r="42" className={styles.mid} />
      <path d="M40 50 H120 M104 36 L120 50 L104 64" className={styles.line} />
    </>
  ),
  // Colinas y una hoja.
  naturaleza: (
    <>
      <path d="M0 100 C 50 40, 110 40, 160 100 Z" className={styles.soft} />
      <path d="M120 100 C 180 30, 250 30, 300 100 Z" className={styles.mid} />
      <path d="M232 30 C 252 30, 262 46, 258 62 C 240 62, 228 50, 232 30 Z" className={styles.solid} />
    </>
  ),
}

export function ExperienciaArt({ categoria }: { categoria: ExperienciaCategoria }) {
  return (
    <svg
      className={styles.art}
      viewBox="0 0 300 100"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {ART[categoria] ?? ART.aventura}
    </svg>
  )
}
