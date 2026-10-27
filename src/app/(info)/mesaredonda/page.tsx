import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { FeatureGrid } from '@/components/FeatureGrid'
import { HeroSplit } from '@/components/HeroSplit'
import { mesaRedondaWhatEs, pageMesaRedondaEs } from '@/content/mesaredonda'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Mesas redondas', description: pageMesaRedondaEs.heroText })
}

export default function MesaRedondaPage() {
  const page = pageMesaRedondaEs

  return (
    <>
      <HeroSplit
        eyebrow={page.heroEyebrow}
        eyebrowAccent
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel={page.heroImageCaption}
        imageVariant="hero"
      />

      <FeatureGrid intro={page.whatIntro} items={mesaRedondaWhatEs} />

      <section className={styles.statsBand}>
        <Container>
          <dl className={styles.stats}>
            {page.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container as="section" className={styles.encuentros}>
        <Eyebrow accent>{page.encuentrosIntro.eyebrow}</Eyebrow>
        <h2>{page.encuentrosIntro.heading}</h2>
        <ul className={styles.cafes}>
          {page.encuentros.map((name) => (
            <li key={name} className={styles.cafe}>
              {name}
            </li>
          ))}
        </ul>
        <div className={styles.gallery}>
          {page.gallery.map((photo) => (
            <div key={photo.src} className={styles.photo}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className={styles.support}>
        <Eyebrow>{page.supportIntro.eyebrow}</Eyebrow>
        <div className={styles.logos}>
          {page.support.map((partner) => (
            <Image
              key={partner.name}
              src={partner.image}
              alt={partner.name}
              width={300}
              height={80}
              className={styles.logo}
            />
          ))}
        </div>
      </Container>

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={`https://wa.me/${siteSettings.whatsapp}`}>{page.closingCtaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
