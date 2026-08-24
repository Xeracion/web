import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { LifeInFerrolPhotoData, SectionIntroData } from '@/sanity/lib/queries'

import styles from './LifeInFerrol.module.css'

interface LifeInFerrolProps {
  intro?: SectionIntroData
  photos: LifeInFerrolPhotoData[]
}

export function LifeInFerrol({ intro, photos }: LifeInFerrolProps) {
  if (photos.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <div key={i} className={styles.item}>
            <PhotoPlaceholder
              variant="en"
              image={photo.image}
              label={photo.caption ?? ''}
              aspectRatio="4 / 3"
            />
            {photo.caption && <p className={styles.caption}>{photo.caption}</p>}
            {photo.description && <p className={styles.text}>{photo.description}</p>}
          </div>
        ))}
      </div>
    </Container>
  )
}
