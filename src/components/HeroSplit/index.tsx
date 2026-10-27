import type { ReactNode } from 'react'
import type { SanityImageSource } from '@sanity/image-url'

import { Container } from '@/components/Container'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'

import styles from './HeroSplit.module.css'

interface HeroSplitProps {
  heading?: string
  text?: string | string[]
  image?: SanityImageSource | string
  imageAlt?: string
  imageLabel: string
  imageVariant: PhotoPlaceholderVariant
  below?: ReactNode
}

export function HeroSplit({
  heading,
  text,
  image,
  imageAlt,
  imageLabel,
  imageVariant,
  below,
}: HeroSplitProps) {
  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.text}>
        <h1>{heading}</h1>
        <Prose value={text} className={styles.intro} />
        {below && <div className={styles.below}>{below}</div>}
      </div>
      <PhotoPlaceholder
        variant={imageVariant}
        image={image}
        alt={imageAlt}
        label={imageLabel}
        radius="xl"
        className={styles.photo}
        style={{ aspectRatio: 'var(--hero-aspect)' }}
      />
    </Container>
  )
}
