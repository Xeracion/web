import type { CSSProperties, ReactNode } from 'react'

import { Container } from '@/components/Container'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'
import { countWords, WordReveal } from '@/components/WordReveal'

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
  const headingWords = countWords(heading)
  const totalWords = headingWords + (inline ? countWords(text as string) : 0)
  // Lo que va después del titular (entradilla, botones, foto) entra cuando
  // ya han salido las palabras.
  const afterWords = { '--hero-delay': `${totalWords * 28 + 260}ms` } as CSSProperties

  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.text}>
        {inline ? (
          <h1 className={styles.statement}>
            <WordReveal text={heading} />{' '}
            <span className={styles.statementMuted}>
              <WordReveal text={text as string} offset={headingWords} />
            </span>
          </h1>
        ) : (
          <>
            <h1 className={styles.heading}>
              <WordReveal text={heading} />
            </h1>
            <div className="xr-hero-fade" style={afterWords}>
              <Prose value={text} className={styles.intro} />
            </div>
          </>
        )}
        {below && (
          <div className={`${styles.below} xr-hero-fade`} style={afterWords}>
            {below}
          </div>
        )}
      </div>
      <PhotoPlaceholder
        variant={imageVariant}
        image={image}
        alt={imageAlt}
        label={imageLabel}
        radius="xl"
        sizes="(min-width: 1200px) 1200px, 100vw"
        className={`${styles.photo} xr-hero-photo`}
        style={
          {
            aspectRatio: 'var(--hero-aspect)',
            '--photo-focus': imageFocus,
            '--hero-delay': `${totalWords * 28 + 380}ms`,
          } as CSSProperties
        }
      />
    </Container>
  )
}
