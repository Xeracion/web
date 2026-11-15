import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { HeroSplit } from '@/components/HeroSplit'
import { pageInternshipsEn } from '@/content/en/pages'
import { siteSettingsEn } from '@/content/en/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import styles from '../en.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Internships in Spain · Hosting partner in Ferrol',
    description: pageInternshipsEn.heroText,
    locale: 'en_GB',
    path: '/internships/',
  })
}

export default function InternshipsPage() {
  const page = pageInternshipsEn
  const mailto = `mailto:${siteSettingsEn.email}`

  return (
    <>
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel="photo · Xeración office"
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={mailto}>{page.closingCtaLabel}</ButtonPrimary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="place">
        <div className={styles.sectionHead}>
          <h2 id="place">{page.placeHeading}</h2>
          <div>
            {page.placeText.map((text, i) => (
              <p key={text} className={i === 0 ? styles.sectionText : styles.prose}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="sectors">
        <div className={styles.sectionHead}>
          <h2 id="sectors">{page.sectorsHeading}</h2>
          <p className={styles.sectionText}>{page.sectorsText}</p>
        </div>
        <ul className={styles.cards}>
          {page.sectors.map((sector) => (
            <li key={sector} className={styles.card}>
              <span className={styles.cardTitle}>{sector}</span>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.band} aria-labelledby="support">
        <Container>
          <h2 id="support">{page.supportHeading}</h2>
          <div className={styles.cards}>
            {page.support.map((block) => (
              <div key={block.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{block.title}</h3>
                <ul className={styles.list}>
                  {block.items.map((item) => (
                    <li key={item} className={styles.cardText}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container as="section" className={styles.section} aria-labelledby="culture">
        <div className={styles.sectionHead}>
          <h2 id="culture">{page.cultureHeading}</h2>
          <p className={styles.sectionText}>{page.cultureText}</p>
        </div>
      </Container>

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={mailto}>{page.closingCtaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
