import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink } from '@/components/ButtonLink'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { HeroSplit } from '@/components/HeroSplit'
import { siteSettings } from '@/content/siteSettings'
import { pageSpeakFactorEs } from '@/content/speakfactor'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Speak Factor', description: pageSpeakFactorEs.heroText })
}

export default function SpeakFactorPage() {
  const page = pageSpeakFactorEs
  const whatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(page.whatsappMessage)}`

  return (
    <>
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel={page.heroImageCaption}
        imageVariant="ferrol"
        below={
          <div className={styles.heroButtons}>
            <ButtonPrimary accent href={whatsappHref}>
              {page.ctaLabel}
            </ButtonPrimary>
            <ButtonSecondary href="#videos">{page.videosLinkLabel}</ButtonSecondary>
          </div>
        }
      />

      <Container as="section" aria-label="Datos prácticos">
        <dl className={styles.facts}>
          {page.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.what}>
        <div>
          <h2>{page.whatIntro.heading}</h2>
          <p className={styles.whatText}>{page.whatText}</p>
        </div>
        <div className={styles.whatPhoto}>
          <Image src={page.whatImage} alt={page.whatImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Container>

      <Container as="section" className={styles.gallery} aria-label="Fotos de los talleres">
        {page.gallery.map((photo) => (
          <div key={photo.src} className={styles.galleryPhoto}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        ))}
      </Container>

      <section className={styles.learnBand}>
        <Container>
          <h2>{page.learnIntro.heading}</h2>
          <ul className={styles.learnList}>
            {page.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.learnOutro}>{page.learnOutro}</p>
        </Container>
      </section>

      <Container as="section" id="videos" className={styles.videos}>
        <h2>{page.videosIntro.heading}</h2>
        <p className={styles.videosText}>{page.videosText}</p>
        <div className={styles.videoGrid}>
          {page.videos.map((video) => (
            <a key={video.url} href={video.url} target="_blank" rel="noopener noreferrer" className={styles.video}>
              <div className={styles.videoThumb}>
                <Image src={video.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" />
                <span className={styles.play} aria-hidden="true" />
              </div>
              <p className={styles.videoTitle}>
                {video.title} <span className={styles.videoHint}>· YouTube ↗</span>
              </p>
            </a>
          ))}
        </div>
        <ButtonLink accent href="/speak-factor-tc/" className={styles.internationalLink}>
          {page.internationalLinkLabel}
        </ButtonLink>
      </Container>

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary accent href={whatsappHref}>
          {page.ctaLabel}
        </ButtonPrimary>
        <ButtonSecondary href="/agenda/#visitanos">{page.closingSecondaryLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
