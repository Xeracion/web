import Image from 'next/image'

import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import type { Testimonial } from '@/content/types'

import styles from './VoluntariosHistoricos.module.css'

function attribution(testimonial: Testimonial) {
  return [testimonial.name, testimonial.originCity].filter(Boolean).join(' · ')
}

interface VoluntariosHistoricosData {
  volunteersNumber?: string
  volunteersSubtitle?: string
  volunteersCtaLabel?: string
  volunteersCtaUrl?: string
}

export function VoluntariosHistoricos({
  data,
  testimonials,
}: {
  data: VoluntariosHistoricosData
  testimonials: Testimonial[]
}) {
  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        <AnimatedNumber as="h2" value={data.volunteersNumber ?? ''} className={styles.number} />
        {data.volunteersSubtitle && <p className={styles.subtitle}>{data.volunteersSubtitle}</p>}

        {testimonials.length > 0 && (
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className={styles.card}>
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.photo}
                  />
                )}
                <Prose value={testimonial.quote} className={styles.quote} />
                <p className={styles.attribution}>{attribution(testimonial)}</p>
              </div>
            ))}
          </div>
        )}

        {data.volunteersCtaLabel && (
          <div className={styles.cta}>
            <a href={data.volunteersCtaUrl || '/experiencias/'} className={styles.ctaButton}>
              {data.volunteersCtaLabel}
            </a>
          </div>
        )}
      </Container>
    </div>
  )
}
