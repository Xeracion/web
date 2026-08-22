import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { TestimonialData } from '@/sanity/lib/queries'

import styles from './Testimonials.module.css'

function attribution(testimonial: TestimonialData) {
  const route = [testimonial.originCity, testimonial.destinationCity].filter(Boolean).join(' → ')
  const program = [testimonial.program, testimonial.year].filter(Boolean).join(' ')
  return [testimonial.name, route, program].filter(Boolean).join(' · ')
}

interface TestimonialsProps {
  eyebrow?: string
  large: TestimonialData | null
  small: TestimonialData | null
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
              image={large.photo}
              label={[large.name, large.destinationCity].filter(Boolean).join(' en ')}
              aspectRatio="4 / 3"
            />
            <p className={styles.largeQuote}>“{large.quote}”</p>
            <p className={styles.attribution}>{attribution(large)}</p>
          </div>
        )}
        {small && (
          <div className={styles.small}>
            <PhotoPlaceholder
              variant="neutral"
              image={small.photo}
              label={small.name ?? ''}
              aspectRatio="1 / 1"
              className={styles.smallPhoto}
            />
            <p className={styles.smallQuote}>“{small.quote}”</p>
            <p className={styles.smallAttribution}>{attribution(small)}</p>
          </div>
        )}
      </div>
    </Container>
  )
}
