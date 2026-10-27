import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { EyebrowPill } from '@/components/EyebrowPill'
import { HeroSplit } from '@/components/HeroSplit'
import { pageSpeakFactorViEs, speakFactorViVoicesEs } from '@/content/speakfactorvi'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Speak Factor VI', description: pageSpeakFactorViEs.heroText })
}

export default function SpeakFactorViPage() {
  const page = pageSpeakFactorViEs

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
        below={<EyebrowPill highlight>Edición terminada</EyebrowPill>}
      />

      <Container as="section" aria-label="Datos del proyecto">
        <dl className={styles.facts}>
          {page.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.days}>
        <Eyebrow accent>{page.daysIntro.eyebrow}</Eyebrow>
        <h2>{page.daysIntro.heading}</h2>
        <ol className={styles.timeline}>
          {page.days.map((day) => (
            <li key={day.day} className={styles.dayItem}>
              <span className={styles.dayLabel}>{day.day}</span>
              <div>
                <h3 className={styles.dayTitle}>{day.title}</h3>
                <p className={styles.dayText}>{day.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <section className={styles.trainersBand}>
        <Container className={styles.trainers}>
          <div>
            <Eyebrow accent>{page.trainersIntro.eyebrow}</Eyebrow>
            <h2>{page.trainersIntro.heading}</h2>
            <div className={styles.trainerList}>
              {page.trainers.map((trainer) => (
                <div key={trainer.name}>
                  <h3 className={styles.trainerName}>{trainer.name}</h3>
                  <p className={styles.trainerText}>{trainer.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.trainersPhoto}>
            <Image src={page.trainersImage} alt={page.trainersImageAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </Container>
      </section>

      <Container as="section" className={styles.galleryWrap}>
        <Eyebrow accent>{page.galleryIntro.eyebrow}</Eyebrow>
        <h2>{page.galleryIntro.heading}</h2>
        <div className={styles.gallery}>
          {page.gallery.map((photo) => (
            <div key={photo.src} className={styles.photo}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className={styles.voices}>
        <Eyebrow accent>{page.voicesIntro.eyebrow}</Eyebrow>
        <h2>{page.voicesIntro.heading}</h2>
        <div className={styles.voiceGrid}>
          {speakFactorViVoicesEs.map((voice) => (
            <figure key={String(voice.quote)} className={styles.voice}>
              <blockquote className={styles.voiceQuote}>{voice.quote}</blockquote>
              <figcaption className={styles.voiceName}>{voice.name} · Speak Factor VI</figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.voicesNote}>{page.voicesNote}</p>
        <div className={styles.support}>
          {page.support.map((logo) => (
            <Image key={logo.name} src={logo.image} alt={logo.name} width={300} height={63} className={styles.supportLogo} />
          ))}
        </div>
      </Container>

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href="/speakfactor/">{page.closingPrimaryLabel}</ButtonPrimary>
        <ButtonSecondary href="/experiencias/">{page.closingSecondaryLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
