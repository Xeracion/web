import Image from 'next/image'

import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { Stars } from '@/components/Stars'
import type { Testimonial } from '@/content/types'
import { getGoogleReviews } from '@/lib/googleReviews'

import { ReviewsCarousel } from './ReviewsCarousel'
import styles from './VoluntariosHistoricos.module.css'

function attribution(testimonial: Testimonial) {
  return [testimonial.name, testimonial.originCity].filter(Boolean).join(' · ')
}

const COPY = {
  es: { title: 'Opiniones en Google', all: 'Ver todas las opiniones', of: 'de 5', opinions: 'opiniones', rating: 'Valoración', prev: 'Opiniones anteriores', next: 'Opiniones siguientes' },
  gl: { title: 'Opinións en Google', all: 'Ver todas as opinións', of: 'de 5', opinions: 'opinións', rating: 'Valoración', prev: 'Opinións anteriores', next: 'Opinións seguintes' },
}

const number = (n: number, locale: 'es' | 'gl') => n.toLocaleString(locale === 'gl' ? 'gl-ES' : 'es-ES', { maximumFractionDigits: 1 })

interface VoluntariosHistoricosData {
  volunteersNumber?: string
  volunteersSubtitle?: string
  volunteersCtaLabel?: string
  volunteersCtaUrl?: string
}

export async function VoluntariosHistoricos({
  data,
  testimonials,
  locale = 'es',
}: {
  data: VoluntariosHistoricosData
  testimonials: Testimonial[]
  locale?: 'es' | 'gl'
}) {
  const google = await getGoogleReviews()
  const copy = COPY[locale]
  const feed = google && google.reviews.length > 0 ? google : null

  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        <AnimatedNumber as="h2" value={data.volunteersNumber ?? ''} className={styles.number} />
        {data.volunteersSubtitle && <p className={styles.subtitle}>{data.volunteersSubtitle}</p>}

        {feed && (
          <div className={styles.feed}>
            <div className={styles.summary}>
              <span className={styles.score}>{number(feed.rating, locale)}</span>
              <div className={styles.summaryText}>
                <Stars value={feed.rating} label={`${copy.rating} ${number(feed.rating, locale)} ${copy.of}`} />
                <p>
                  {feed.total} {copy.opinions} · {copy.title}
                </p>
              </div>
              {feed.mapsUrl && (
                <a href={feed.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.all}>
                  {copy.all} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
            <ReviewsCarousel label={copy.title} prevLabel={copy.prev} nextLabel={copy.next}>
              {feed.reviews.map((review, i) => (
                <li key={i} className={styles.review}>
                  <div className={styles.author}>
                    {review.photoUrl ? (
                      <Image src={review.photoUrl} alt="" width={44} height={44} className={styles.avatar} />
                    ) : (
                      <span className={styles.avatar} aria-hidden="true" />
                    )}
                    <div>
                      <p className={styles.name}>
                        {review.authorUrl ? (
                          <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">
                            {review.author}
                          </a>
                        ) : (
                          review.author
                        )}
                      </p>
                      <p className={styles.when}>{review.when}</p>
                    </div>
                  </div>
                  <Stars value={review.rating} label={`${review.rating} ${copy.of}`} />
                  <p className={styles.text}>{review.text}</p>
                </li>
              ))}
            </ReviewsCarousel>
          </div>
        )}

        {!feed && testimonials.length > 0 && (
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
