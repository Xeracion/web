import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'
import type { Testimonial } from '@/content/types'

import styles from './Testimonials.module.css'

function attribution(testimonial: Testimonial) {
  const route = [testimonial.originCity, testimonial.destinationCity].filter(Boolean).join(' → ')
  const program = [testimonial.program, testimonial.year].filter(Boolean).join(' ')
  return [testimonial.name, route, program].filter(Boolean).join(' · ')
}

interface TestimonialsProps {
  eyebrow?: string
  large: Testimonial | null
  small: Testimonial | null
}

export function Testimonials({ eyebrow, large, small }: TestimonialsProps) {
  if (!large && !small) return null

  return (
    <Container as="section" className={styles.section}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className={styles.grid}>
        {large && (
          <div>
            <PhotoPlaceholder
              variant="neutral"
              image={large.image}
              label={[large.name, large.destinationCity].filter(Boolean).join(' · ')}
              aspectRatio="4 / 3"
            />
            <Prose value={large.quote} className={styles.largeQuote} />
            <p className={styles.attribution}>{attribution(large)}</p>
          </div>
        )}
        {small && (
          <div className={styles.small}>
            <PhotoPlaceholder
              variant="neutral"
              image={small.image}
              label={small.name ?? ''}
              aspectRatio="1 / 1"
              className={styles.smallPhoto}
            />
            <Prose value={small.quote} className={styles.smallQuote} />
            <p className={styles.smallAttribution}>{attribution(small)}</p>
          </div>
        )}
      </div>
    </Container>
  )
}
