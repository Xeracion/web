import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { HeroSplit } from '@/components/HeroSplit'
import { pageVolunteeringEn, volunteeringVoicesEn } from '@/content/en/pages'
import { siteSettingsEn } from '@/content/en/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import styles from '../en.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Volunteering in Ferrol, Spain · European Solidarity Corps',
    description: pageVolunteeringEn.heroText,
    locale: 'en_GB',
    path: '/volunteering/',
  })
}

export default function VolunteeringPage() {
  const page = pageVolunteeringEn
  const whatsapp = siteSettingsEn.whatsapp
    ? `https://wa.me/${siteSettingsEn.whatsapp}?text=${encodeURIComponent(page.callWhatsappText)}`
    : `mailto:${siteSettingsEn.email}`

  return (
    <>
      <HeroSplit
        heading={page.heroHeading}
        text={page.heroText}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageLabel="photo · volunteers in Ferrol"
        imageVariant="hero"
        below={
          <div className={styles.heroActions}>
            <ButtonPrimary href="#call">{page.callPrimaryLabel}</ButtonPrimary>
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

      <Container as="section" className={styles.section} aria-labelledby="roles">
        <div className={styles.sectionHead}>
          <h2 id="roles">{page.rolesHeading}</h2>
          <p className={styles.sectionText}>{page.rolesText}</p>
        </div>
        <ul className={styles.cards}>
          {page.roles.map((role) => (
            <li key={role.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{role.title}</h3>
              <p className={styles.cardText}>{role.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      <section className={styles.band} aria-labelledby="covered">
        <Container className={styles.twoCols}>
          <div>
            <h2 id="covered">{page.coveredHeading}</h2>
            <ul className={styles.list}>
              {page.covered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{page.profileHeading}</h2>
            <ul className={styles.list}>
              {page.profile.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container as="section" className={`${styles.section} ${styles.twoCols}`} aria-labelledby="place">
        <div>
          <h2 id="place">{page.placeHeading}</h2>
          {page.placeText.map((text) => (
            <p key={text} className={styles.prose}>
              {text}
            </p>
          ))}
          <h2 className={styles.prose}>{page.videoHeading}</h2>
          <p className={styles.prose}>{page.videoText}</p>
          {page.videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.video}
            >
              <span className={styles.play} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span>
                <span className={styles.videoTitle}>{video.titulo}</span>
                <span className={styles.videoMeta}>
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </span>
              </span>
            </a>
          ))}
          <div>
            <a href={page.playlistUrl} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
              {page.playlistLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <Image src={page.placeImage} alt={page.placeImageAlt} fill quality={90} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Container>

      <Container as="section" className={styles.section} aria-labelledby="voices">
        <h2 id="voices">{page.voicesHeading}</h2>
        <div className={styles.voices}>
          {volunteeringVoicesEn.map((voice) => (
            <figure key={voice.name} className={styles.voice}>
              <blockquote className={styles.voiceQuote}>{voice.quote}</blockquote>
              <figcaption className={styles.voiceName}>
                {voice.name} · {voice.originCity}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <div id="call">
        <ClosingCtaSection heading={page.callHeading} text={page.callText}>
          <ButtonPrimary href={whatsapp} target="_blank" rel="noopener noreferrer">
            {page.callPrimaryLabel}
          </ButtonPrimary>
          <ButtonSecondary href={page.callSecondaryUrl} target="_blank" rel="noopener noreferrer">
            {page.callSecondaryLabel}
          </ButtonSecondary>
        </ClosingCtaSection>
      </div>
    </>
  )
}
