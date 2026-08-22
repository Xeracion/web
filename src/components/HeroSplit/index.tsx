import type { ReactNode } from 'react'
import type { SanityImageSource } from '@sanity/image-url'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'

import styles from './HeroSplit.module.css'

interface HeroSplitProps {
  eyebrow?: string
  eyebrowAccent?: boolean
  heading?: string
  text?: string
  image?: SanityImageSource
  imageLabel: string
  imageVariant: PhotoPlaceholderVariant
  below?: ReactNode
}

export function HeroSplit({
  eyebrow,
  eyebrowAccent = false,
  heading,
  text,
  image,
  imageLabel,
  imageVariant,
  below,
}: HeroSplitProps) {
  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.text}>
        {eyebrow && <Eyebrow accent={eyebrowAccent}>{eyebrow}</Eyebrow>}
        <h1>{heading}</h1>
        {text && <p className={styles.intro}>{text}</p>}
        {below && <div className={styles.below}>{below}</div>}
      </div>
      <PhotoPlaceholder
        variant={imageVariant}
        image={image}
        label={imageLabel}
        radius="xl"
        className={styles.photo}
        style={{ aspectRatio: 'var(--hero-aspect)' }}
      />
    </Container>
  )
}
