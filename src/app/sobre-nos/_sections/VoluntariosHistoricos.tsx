import { Container } from '@/components/Container'
import type { PageSobreNosData, TestimonialData } from '@/sanity/lib/queries'

import styles from './VoluntariosHistoricos.module.css'

const MAP_DOTS: Array<{ x: number; y: number; region: 'es' | 'west' | 'east' | 'nordic' }> = [
  { x: 178, y: 292, region: 'es' },
  { x: 232, y: 228, region: 'west' },
  { x: 262, y: 168, region: 'west' },
  { x: 296, y: 268, region: 'west' },
  { x: 336, y: 208, region: 'west' },
  { x: 388, y: 232, region: 'east' },
  { x: 424, y: 292, region: 'east' },
  { x: 432, y: 158, region: 'east' },
  { x: 470, y: 210, region: 'east' },
  { x: 300, y: 100, region: 'nordic' },
  { x: 350, y: 70, region: 'nordic' },
  { x: 260, y: 60, region: 'nordic' },
]

const REGION_COLOR: Record<string, string> = {
  es: '#5b8dff',
  west: '#6bd39c',
  east: '#f2c94c',
  nordic: '#b79cf0',
}

function attribution(testimonial: TestimonialData) {
  return [testimonial.name, testimonial.originCity].filter(Boolean).join(' · ')
}

export function VoluntariosHistoricos({
  data,
  testimonials,
}: {
  data: PageSobreNosData
  testimonials: TestimonialData[]
}) {
  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        <h2 className={styles.number}>{data.volunteersNumber}</h2>
        {data.volunteersSubtitle && <p className={styles.subtitle}>{data.volunteersSubtitle}</p>}

        <svg
          className={styles.map}
          viewBox="0 0 700 380"
          role="img"
          aria-label="Mapa esquemático de Europa con puntos de colores marcando los países de origen de los voluntarios históricos de Xeración"
        >
          <path
            d="M120 250 L160 190 L150 130 L200 90 L260 60 L330 50 L400 70 L460 60 L540 90 L580 140 L560 200 L600 240 L570 300 L500 330 L420 320 L360 350 L280 340 L220 320 L160 300 Z"
            fill="currentColor"
            className={styles.silhouette}
          />
          {MAP_DOTS.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={7}
              fill={REGION_COLOR[dot.region]}
              stroke="var(--color-text-primary)"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          ))}
        </svg>

        {testimonials.length > 0 && (
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className={styles.card}>
                <p className={styles.quote}>“{testimonial.quote}”</p>
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
