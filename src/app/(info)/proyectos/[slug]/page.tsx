import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { EyebrowPill } from '@/components/EyebrowPill'
import { HeroSplit } from '@/components/HeroSplit'
import { Prose } from '@/components/Prose'
import { getProyectoBySlug, getProyectoSlugs, pageProyectosEs } from '@/content/proyectos'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getProyectoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const proyecto = getProyectoBySlug((await params).slug)
  if (!proyecto) return {}
  return buildPageMetadata({ title: proyecto.titulo, description: proyecto.resumen })
}

export default async function ProyectoPage({ params }: PageProps) {
  const proyecto = getProyectoBySlug((await params).slug)
  if (!proyecto) notFound()

  const page = pageProyectosEs
  const hasLists = Boolean(proyecto.actividades?.length || proyecto.resultados?.length)
  const hasWho = Boolean(proyecto.paises?.length || proyecto.socios?.length)

  return (
    <>
      <HeroSplit
        heading={proyecto.heroHeading}
        text={proyecto.resumen}
        image={proyecto.imagen}
        imageAlt={proyecto.imagenAlt}
        imageLabel={`foto · ${proyecto.titulo}`}
        imageVariant="hero"
        below={<EyebrowPill highlight>Proyecto terminado · {proyecto.anio}</EyebrowPill>}
      />

      <Container as="section" aria-label="Datos del proyecto">
        <dl className={styles.facts}>
          {proyecto.datos.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container as="section" className={styles.story}>
        <h2>Qué fue.</h2>
        <div className={styles.storyText}>
          <Prose value={proyecto.descripcion} />
        </div>
      </Container>

      {hasLists ? (
        <section className={styles.band}>
          <Container className={styles.lists}>
            {proyecto.actividades?.length ? (
              <div>
                <h2>Qué hicimos.</h2>
                <ul className={styles.list}>
                  {proyecto.actividades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {proyecto.resultados?.length ? (
              <div>
                <h2>Lo que quedó.</h2>
                <ul className={styles.list}>
                  {proyecto.resultados.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {proyecto.galeria?.length ? (
        <Container as="section" className={styles.galleryWrap}>
          <h2>Así fue.</h2>
          <div className={styles.gallery}>
            {proyecto.galeria.map((photo, i) => (
              <div key={photo.src} className={styles.photo}>
                {/* La primera de cada cinco ocupa dos columnas: se pide al doble de ancho. */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={90}
                  sizes={i % 5 === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                />
              </div>
            ))}
          </div>
        </Container>
      ) : null}

      {proyecto.voces?.length ? (
        <Container as="section" className={styles.voices}>
          <h2>En sus propias palabras.</h2>
          <div className={styles.voiceGrid}>
            {proyecto.voces.map((voice) => (
              <figure key={String(voice.quote)} className={styles.voice}>
                <blockquote className={styles.voiceQuote}>{voice.quote}</blockquote>
                <figcaption className={styles.voiceName}>
                  {voice.name} · {proyecto.titulo}
                </figcaption>
              </figure>
            ))}
          </div>
          {proyecto.vocesNota ? <p className={styles.voicesNote}>{proyecto.vocesNota}</p> : null}
        </Container>
      ) : null}

      {hasWho || proyecto.enlaces?.length ? (
        <Container as="section" className={styles.who}>
          {proyecto.paises?.length ? (
            <div>
              <h2 className={styles.whoHeading}>Países</h2>
              <p className={styles.whoText}>{proyecto.paises.join(' · ')}</p>
            </div>
          ) : null}
          {proyecto.socios?.length ? (
            <div>
              <h2 className={styles.whoHeading}>Con quién lo hicimos</h2>
              <ul className={styles.partners}>
                {proyecto.socios.map((socio) => (
                  <li key={socio}>{socio}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proyecto.enlaces?.length ? (
            <div>
              <h2 className={styles.whoHeading}>Para ver más</h2>
              <ul className={styles.links}>
                {proyecto.enlaces.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href}>
                        {link.label} <span className="xr-arrow" aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      ) : null}

      {proyecto.apoyos?.length ? (
        <Container as="section" className={styles.support} aria-labelledby="apoyos">
          <h2 id="apoyos" className={styles.supportTitle}>
            Con el apoyo de
          </h2>
          <ul className={styles.supportList}>
            {proyecto.apoyos.map((apoyo) => (
              <li key={apoyo.name} className={styles.supportItem}>
                {apoyo.image ? (
                  <Image
                    src={apoyo.image}
                    alt={apoyo.caption ? '' : apoyo.name}
                    width={apoyo.caption ? 60 : 56}
                    height={apoyo.caption ? 40 : 56}
                    className={apoyo.caption ? styles.supportFlag : styles.supportLogo}
                  />
                ) : null}
                {apoyo.caption ? <span>{apoyo.caption}</span> : apoyo.image ? null : <span>{apoyo.name}</span>}
              </li>
            ))}
          </ul>
        </Container>
      ) : null}

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href="/experiencias/">{page.closingPrimaryLabel}</ButtonPrimary>
        <ButtonSecondary href="/proyectos/">{page.closingSecondaryLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
