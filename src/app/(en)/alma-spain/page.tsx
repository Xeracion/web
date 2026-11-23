import type { Metadata } from 'next'
import Link from 'next/link'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { HeroSplit } from '@/components/HeroSplit'
import { JsonLd } from '@/components/JsonLd'
import { pageAlmaEn } from '@/content/en/alma'
import { pageHomeEn } from '@/content/en/pages'
import { siteSettingsEn } from '@/content/en/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'
import { faqNode, pageGraph, serviceNode } from '@/lib/schema'

import styles from '../en.module.css'

const PATH = '/alma-spain/'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: pageAlmaEn.metaTitle,
    description: pageAlmaEn.metaDescription,
    locale: 'en_GB',
    path: PATH,
  })
}

export default function AlmaSpainPage() {
  const page = pageAlmaEn
  const partner = pageHomeEn
  const mailto = `mailto:${siteSettingsEn.email}?subject=${encodeURIComponent(page.mailSubject)}`

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: PATH,
          name: page.metaTitle,
          description: page.metaDescription,
          locale: 'en',
          breadcrumbs: [
            ['Internships', '/internships/'],
            ['ALMA hosting in Spain', PATH],
          ],
          extra: [
            serviceNode({
              path: PATH,
              name: 'ALMA host organisation in Spain',
              serviceType: 'ALMA (Aim, Learn, Master, Achieve) hosting organisation for internships',
              description: page.heroText,
              audience: 'Coordinators of ALMA projects and sending organisations working with young people aged 18 to 29 not in employment, education or training (NEET)',
            }),
            faqNode(PATH, page.faqs),
          ],
        })}
      />
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel="photo · Xeración team"
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={mailto}>{page.heroCtaLabel}</ButtonPrimary>
          </div>
        }
      />

      <Container as="section" aria-label="Key facts">
        <dl className={styles.facts}>
          {page.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="why">
        <div className={styles.sectionHead}>
          <h2 id="why">{page.whyHeading}</h2>
          <p className={styles.sectionText}>{page.whyText}</p>
        </div>
        <ul className={styles.cards}>
          {page.why.map((item) => (
            <li key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
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

      <Container as="section" className={styles.section} aria-labelledby="coordinators">
        <div className={styles.sectionHead}>
          <h2 id="coordinators">{page.coordinatorsHeading}</h2>
          <p className={styles.sectionText}>{page.coordinatorsText}</p>
        </div>
        <div className={styles.cards}>
          {page.coordinators.map((block) => (
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

      <Container as="section" className={styles.section} aria-labelledby="track">
        <h2 id="track">{page.trackHeading}</h2>
        <dl className={styles.figures}>
          {page.figures.map((figure) => (
            <div key={figure.label}>
              <dt className={styles.figureValue}>{figure.value}</dt>
              <dd className={styles.figureLabel}>{figure.label}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.prose}>{page.trackText}</p>
        <Link href="/internships/" className={styles.textLink}>
          {page.internshipsLinkLabel} →
        </Link>
      </Container>

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

      <Container as="section" className={styles.section} aria-labelledby="conditions">
        <h2 id="conditions">{page.conditionsHeading}</h2>
        <ul className={styles.list}>
          {page.conditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>

      <section className={styles.band} aria-labelledby="partner-title">
        <Container>
          <div className={styles.sectionHead}>
            <h2 id="partner-title">{partner.partnerHeading}</h2>
            <p className={styles.sectionText}>{partner.partnerText}</p>
          </div>
          <dl className={styles.details}>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Legal name</dt>
              <dd className={styles.detailValue}>{partner.legalName}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>OID</dt>
              <dd className={styles.detailValue}>{partner.oid}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>PIC</dt>
              <dd className={styles.detailValue}>{partner.pic}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>VAT number</dt>
              <dd className={styles.detailValue}>{partner.vat}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Accreditations</dt>
              <dd>
                <ul className={styles.detailList}>
                  {partner.accreditations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <FaqAccordionSection intro={{ heading: page.faqHeading }} items={page.faqs} />

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={mailto}>{page.heroCtaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
