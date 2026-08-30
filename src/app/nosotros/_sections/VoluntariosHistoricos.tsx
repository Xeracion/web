import Image from 'next/image'

import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import { RichText } from '@/components/RichText'
import { urlFor } from '@/sanity/lib/image'
import type { PageNosotrosData, TestimonialData } from '@/sanity/lib/queries'

import styles from './VoluntariosHistoricos.module.css'

function attribution(testimonial: TestimonialData) {
  return [testimonial.name, testimonial.originCity].filter(Boolean).join(' · ')
}

export function VoluntariosHistoricos({
  data,
  testimonials,
}: {
  data: PageNosotrosData
  testimonials: TestimonialData[]
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
                {testimonial.photo && (
                  <Image
                    src={urlFor(testimonial.photo).width(96).height(96).url()}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.photo}
                  />
                )}
                <RichText value={testimonial.quote} className={styles.quote} />
                <p className={styles.attribution}>{attribution(testimonial)}</p>
              </div>
            ))}
          </div>
        )}

        {data.volunteersCtaLabel && (
          <div className={styles.cta}>
            <a href={data.volunteersCtaUrl || '/irse/'} className={styles.ctaButton}>
              {data.volunteersCtaLabel}
            </a>
          </div>
        )}
      </Container>
    </div>
  )
}
