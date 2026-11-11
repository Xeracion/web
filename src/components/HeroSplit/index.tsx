import type { CSSProperties, ReactNode } from 'react'

import { Container } from '@/components/Container'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'

import styles from './HeroSplit.module.css'

interface HeroSplitProps {
  heading?: string
  text?: string | string[]
  image?: string
  imageAlt?: string
  imageLabel: string
  imageVariant: PhotoPlaceholderVariant
  below?: ReactNode
  /**
   * La entradilla va dentro del mismo titular, en gris, a continuación de la
   * frase principal (como la cabecera de anthropic.com). Solo para
   * entradillas de un párrafo corto: la portada.
   */
  inlineText?: boolean
  /** Posición del recorte de la foto panorámica (object-position). */
  imageFocus?: string
}

// Cabecera apilada: titular a todo el ancho, entradilla y botones debajo, y
// la foto en formato panorámico al final. Se sigue llamando HeroSplit por
// continuidad (antes era texto y foto en dos columnas).
export function HeroSplit({
  heading,
  text,
  image,
  imageAlt,
  imageLabel,
  imageVariant,
  below,
  inlineText = false,
  imageFocus = 'center 35%',
}: HeroSplitProps) {
  const inline = inlineText && typeof text === 'string'

  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.text}>
        {inline ? (
          <h1 className={styles.statement}>
            {heading} <span className={styles.statementMuted}>{text}</span>
          </h1>
        ) : (
          <>
            <h1 className={styles.heading}>{heading}</h1>
            <Prose value={text} className={styles.intro} />
          </>
        )}
        {below && <div className={styles.below}>{below}</div>}
      </div>
      <PhotoPlaceholder
        variant={imageVariant}
        image={image}
        alt={imageAlt}
        label={imageLabel}
        radius="xl"
        sizes="(min-width: 1200px) 1200px, 100vw"
        className={styles.photo}
        style={{ aspectRatio: 'var(--hero-aspect)', '--photo-focus': imageFocus } as CSSProperties}
      />
    </Container>
  )
}
