import { Container } from '@/components/Container'
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
  heading?: string
  /** La primera es la grande; las siguientes (máximo dos) van apiladas al lado. */
  items: Testimonial[]
}

export function Testimonials({ heading, items }: TestimonialsProps) {
  const [large, ...rest] = items
  const smalls = rest.slice(0, 2)
  if (!large) return null

  return (
    <Container as="section" className={styles.section}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={smalls.length > 0 ? styles.grid : styles.gridSingle}>
        <div>
          <PhotoPlaceholder
            variant="neutral"
            image={large.image}
            alt={`Retrato de ${large.name}`}
            label={[large.name, large.destinationCity].filter(Boolean).join(' · ')}
            aspectRatio="4 / 3"
          />
          <Prose value={large.quote} className={styles.largeQuote} />
          <p className={styles.attribution}>{attribution(large)}</p>
        </div>
        {smalls.length > 0 && (
          <div className={styles.smalls}>
            {smalls.map((small) => (
              <div key={small.name} className={smalls.length > 1 ? styles.smallCompact : undefined}>
                <PhotoPlaceholder
                  variant="neutral"
                  image={small.image}
                  alt={`Retrato de ${small.name}`}
                  label={small.name ?? ''}
                  aspectRatio="1 / 1"
                  className={smalls.length > 1 ? styles.smallPhotoCompact : styles.smallPhoto}
                />
                <Prose value={small.quote} className={styles.smallQuote} />
                <p className={styles.smallAttribution}>{attribution(small)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
