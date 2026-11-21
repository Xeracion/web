import type { Metadata } from 'next'
import Link from 'next/link'

import { Equipo } from '@/app/nosotros/_sections/Equipo'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { HeroSplit } from '@/components/HeroSplit'
import { FORMATO_EN, lugarEn, pageHomeEn } from '@/content/en/pages'
import { siteSettingsEn } from '@/content/en/siteSettings'
import { getProyectoHref, getProyectos } from '@/content/proyectos'
import { JsonLd } from '@/components/JsonLd'
import { buildPageMetadata } from '@/lib/metadata'
import { pageGraph, serviceNode } from '@/lib/schema'

import styles from '../en.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: pageHomeEn.metaTitle,
    absoluteTitle: true,
    description: pageHomeEn.metaDescription,
    locale: 'en_GB',
    path: '/en/',
  })
}

export default function HomeEnPage() {
  const page = pageHomeEn
  const email = siteSettingsEn.email
  const mailto = `mailto:${email}`

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: '/en/',
          name: page.metaTitle,
          description: page.metaDescription,
          locale: 'en',
          extra: page.what
            .filter((item) => item.href.startsWith('/') && !item.href.includes('#'))
            .map((item) =>
              serviceNode({
                path: item.href,
                name: item.title,
                serviceType: item.title,
                description: item.text,
                audience: 'European youth organisations and project partners',
              }),
            ),
        })}
      />
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel="photo · Xeración"
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href={mailto}>{page.heroPrimaryLabel}</ButtonPrimary>
            <ButtonSecondary href="/volunteering/">{page.heroSecondaryLabel}</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" className={styles.section} aria-labelledby="figures">
        <h2 id="figures">{page.figuresHeading}</h2>
        <dl className={styles.figures}>
          {page.figures.map((figure) => (
            <div key={figure.label}>
              <dt className={styles.figureValue}>{figure.value}</dt>
              <dd className={styles.figureLabel}>{figure.label}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="what">
        <h2 id="what">{page.whatHeading}</h2>
        <ul className={styles.cards}>
          {page.what.map((item) => {
            const external = item.href.startsWith('http')
            return (
              <li key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
                {external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    {item.ctaLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link href={item.href} className={styles.cardLink}>
                    {item.ctaLabel} <span className="xr-arrow" aria-hidden="true">→</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </Container>

      <Equipo data={page} locale="en" />

      <Container as="section" id="projects" className={styles.section} aria-labelledby="projects-title">
        <div className={styles.sectionHead}>
          <h2 id="projects-title">{page.projectsHeading}</h2>
          <p className={styles.sectionText}>{page.projectsText}</p>
        </div>
        <ul className={styles.projects}>
          {getProyectos().map((proyecto) => (
            <li key={proyecto.slug}>
              <Link href={getProyectoHref(proyecto)} className={styles.projectRow} hrefLang="es">
                <span className={styles.projectYear}>{proyecto.anio}</span>
                <span className={styles.projectTitle}>{proyecto.titulo}</span>
                <span className={styles.projectMeta}>{FORMATO_EN[proyecto.formato] ?? proyecto.formato}</span>
                <span className={styles.projectMeta}>{lugarEn(proyecto.lugar)}</span>
                <span className={styles.projectArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.band} id="partner-details" aria-labelledby="partner-title">
        <Container>
          <div className={styles.sectionHead}>
            <h2 id="partner-title">{page.partnerHeading}</h2>
            <p className={styles.sectionText}>{page.partnerText}</p>
          </div>
          <dl className={styles.details}>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Legal name</dt>
              <dd className={styles.detailValue}>{page.legalName}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>OID</dt>
              <dd className={styles.detailValue}>{page.oid}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>PIC</dt>
              <dd className={styles.detailValue}>{page.pic}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>VAT number</dt>
              <dd className={styles.detailValue}>{page.vat}</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Address</dt>
              <dd className={styles.detailValue}>{page.address} · Spain</dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Contact</dt>
              <dd className={styles.detailValue}>
                <a href={mailto} className={styles.detailLink}>
                  {email}
                </a>
              </dd>
            </div>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>Accreditations</dt>
              <dd>
                <ul className={styles.detailList}>
                  {page.accreditations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            {page.annualReportUrl ? (
              <div className={styles.detail}>
                <dt className={styles.detailLabel}>Documents</dt>
                <dd>
                  <a href={page.annualReportUrl} target="_blank" rel="noopener noreferrer" className={styles.detailLink} hrefLang="es">
                    {page.annualReportLabel} <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </Container>
      </section>

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href={mailto}>{page.closingCtaLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
