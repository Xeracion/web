import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { RichText } from '@/components/RichText'
import type { SectionIntroData, TestimonialData } from '@/sanity/lib/queries'

import styles from './Voices.module.css'

function attribution(testimonial: TestimonialData) {
  const route = [testimonial.originCity, testimonial.destinationCity].filter(Boolean).join(' → ')
  const program = [testimonial.program, testimonial.year].filter(Boolean).join(' ')
  return [testimonial.name, route, program].filter(Boolean).join(' · ')
}

interface VoicesProps {
  intro?: SectionIntroData
  items: TestimonialData[]
}

export function Voices({ intro, items }: VoicesProps) {
  if (items.length === 0) return null

  const [featured, ...rest] = items

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        <div className={styles.featured}>
          <PhotoPlaceholder
            variant="neutral"
            image={featured.photo}
            label={[featured.name, featured.destinationCity].filter(Boolean).join(' in ')}
            aspectRatio="4 / 3"
          />
          <div>
            <RichText value={featured.quote} className={styles.featuredQuote} />
            <p className={styles.attribution}>{attribution(featured)}</p>
          </div>
        </div>
        {rest.map((testimonial, i) => (
          <div key={i}>
            <PhotoPlaceholder
              variant="neutral"
              image={testimonial.photo}
              label={testimonial.name ?? ''}
              aspectRatio="1 / 1"
              style={{ maxWidth: 220 }}
            />
            <RichText value={testimonial.quote} className={styles.quote} />
            <p className={styles.attribution}>{attribution(testimonial)}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
