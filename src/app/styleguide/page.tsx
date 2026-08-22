import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { EyebrowPill } from '@/components/EyebrowPill'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ButtonLink } from '@/components/ButtonLink'
import { Card } from '@/components/Card'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'

import styles from './Styleguide.module.css'

export const metadata: Metadata = {
  title: 'Guía de estilo · Xeración',
  robots: { index: false, follow: false },
}

const ROUTES = [
  {
    key: 'ferrol',
    routeClass: 'route-ferrol',
    eyebrow: 'Ruta 1 · Casa da Xuventude · Ferrol',
    pill: 'Ruta 1 · Local',
    title: 'Vivo en Ferrol y quiero hacer algo esta semana.',
    text: 'Casa da Xuventude na Almendra. Clubs, talleres, encuentros. Casi todo gratis.',
    cta: 'Ver agenda',
    photoLabel: 'grupo en el Offline Club',
  },
  {
    key: 'irse',
    routeClass: 'route-irse',
    eyebrow: 'Ruta 2 · Voluntariado y Erasmus+',
    pill: 'Ruta 2 · Irse',
    title: 'Quiero irme de voluntariado o Erasmus+ a Europa.',
    text: '18 a 30. Te buscamos proyecto en Europa con todo pagado.',
    cta: 'Quiero irme',
    photoLabel: 'voluntaria despidiéndose en el aeropuerto',
  },
  {
    key: 'en',
    routeClass: 'route-en',
    eyebrow: 'Route 3 · Come to Galicia',
    pill: 'Route 3 · Come over',
    title: 'I want to volunteer or intern in Galicia.',
    text: '2 to 12 months in Ferrol with the European Solidarity Corps.',
    cta: 'Apply',
    photoLabel: 'volunteer group at the Cantábrico coast',
  },
] as const

export default function StyleguidePage() {
  return (
    <Container as="main" className={styles.page}>
      <div className={styles.intro}>
        <Eyebrow>Sistema de diseño</Eyebrow>
        <h1>Guía de estilo.</h1>
        <p className={styles.caption}>
          H1 · 42 / 34 / 24 px · line-height 1.04 · letter-spacing -0.025em
        </p>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Escala tipográfica</h2>
          <p className={styles.sectionNote}>
            Los tamaños cambian en los tres breakpoints (desktop / tablet / móvil); redimensiona
            la ventana para verlo en vivo. El H1 ya está demostrado arriba, en el título real de
            esta página.
          </p>
        </div>

        <div>
          <div className={styles.typeRow}>
            <h3>Doce años abriendo puertas a Europa desde Galicia.</h3>
            <p className={styles.caption}>
              H2 · 34 / 30 / 26 px · line-height 1.15 · letter-spacing -0.02em
            </p>
          </div>

          <div className={styles.typeRow}>
            <h3>Un sitio en la Almendra donde pasan cosas cada semana.</h3>
            <p className={styles.caption}>
              H3 · 24 / 22 / 20 px · line-height 1.2 · letter-spacing -0.015em
            </p>
          </div>

          <div className={styles.typeRow}>
            <h4>Offline Club</h4>
            <p className={styles.caption}>
              H4 · 19 / 18 / 17 px · weight 500 · line-height 1.3 · letter-spacing -0.01em
            </p>
          </div>

          <div className={styles.typeRow}>
            <p>
              Llevamos a jóvenes gallegos de voluntariado por toda Europa, traemos a jóvenes
              europeos a Ferrol y montamos cosas para la peña que vive aquí.
            </p>
            <p className={styles.caption}>Body · 17 / 16 / 16 px · line-height 1.55</p>
          </div>

          <div className={styles.typeRow}>
            <Eyebrow>Historias reales</Eyebrow>
            <p className={styles.caption}>
              Eyebrow · 11 px en los tres breakpoints · weight 500 · letter-spacing 0.16em
              uppercase
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Container</h2>
          <p className={styles.sectionNote}>
            Max-width 1200px, padding lateral responsive (32px desktop, 20px por debajo de 768px).
            Esta misma página está envuelta en un Container.
          </p>
        </div>
        <Container className={styles.containerDemo}>
          <p className={styles.containerDemoInner}>container</p>
        </Container>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Eyebrow</h2>
        </div>
        <div className={styles.swatchRow}>
          <Eyebrow>Historias reales</Eyebrow>
          {ROUTES.map((route) => (
            <div key={route.key} className={route.routeClass}>
              <Eyebrow accent>{route.eyebrow}</Eyebrow>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>EyebrowPill</h2>
          <p className={styles.sectionNote}>
            Pensada para superponerse sobre fotos: fondo translúcido, variante neutra y variante
            con acento de ruta.
          </p>
        </div>
        <div className={styles.gradientBox}>
          <EyebrowPill>[ foto editorial · grupo en muelle de Ferrol ]</EyebrowPill>
          {ROUTES.map((route) => (
            <div key={route.key} className={route.routeClass}>
              <EyebrowPill accent>{route.pill}</EyebrowPill>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Botones</h2>
        </div>
        <div className={styles.buttonRow}>
          <ButtonPrimary href="https://wa.me/34XXXXXXXXX">Hablar por WhatsApp</ButtonPrimary>
          <ButtonSecondary href="mailto:info@xeracion.org">info@xeracion.org</ButtonSecondary>
          <ButtonLink href="#">Leer más</ButtonLink>
          {ROUTES.map((route) => (
            <div key={route.key} className={route.routeClass}>
              <ButtonLink accent href="#">
                {route.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>Card</h2>
          <p className={styles.sectionNote}>
            Composición completa (PhotoPlaceholder + EyebrowPill + Card) replicando el patrón de
            las tres tarjetas de ruta de la portada. Aquí se muestra sin <code>href</code> porque
            contiene su propio CTA enlazado (<code>ButtonLink</code>): un <code>&lt;a&gt;</code>{' '}
            no puede anidar otro <code>&lt;a&gt;</code>. Cuando montemos la portada real, hay que
            decidir si la tarjeta entera es un único enlace (y el CTA interno pasa a ser texto
            decorativo) o si solo el CTA es interactivo.
          </p>
        </div>
        <div className={styles.cardGrid}>
          {ROUTES.map((route) => (
            <div key={route.key} className={route.routeClass}>
              <Card interactive>
                <PhotoPlaceholder
                  variant={route.key}
                  label={route.photoLabel}
                  aspectRatio="4 / 3"
                />
                <div className={styles.cardBody}>
                  <EyebrowPill accent>{route.pill}</EyebrowPill>
                  <h3>{route.title}</h3>
                  <p className={styles.cardText}>{route.text}</p>
                  <div className={styles.cardFooter}>
                    <ButtonLink accent href="#">
                      {route.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <h2>PhotoPlaceholder</h2>
          <p className={styles.sectionNote}>
            Sin imagen de Sanity, muestra el gradiente de la variante y la etiqueta entre
            corchetes. Con imagen (prop <code>image</code>), sustituye el gradiente por la foto
            real.
          </p>
        </div>
        <div className={styles.photoGrid}>
          <div className={styles.photoItem}>
            <PhotoPlaceholder
              variant="hero"
              label="foto editorial · grupo en muelle de Ferrol"
              aspectRatio="4 / 5"
              radius="xl"
            />
            <p className={styles.caption}>hero</p>
          </div>
          <div className={styles.photoItem}>
            <PhotoPlaceholder variant="ferrol" label="Offline Club, sala baja" aspectRatio="4 / 3" />
            <p className={styles.caption}>ferrol</p>
          </div>
          <div className={styles.photoItem}>
            <PhotoPlaceholder variant="irse" label="grupo de voluntarias en Cracovia" aspectRatio="4 / 3" />
            <p className={styles.caption}>irse</p>
          </div>
          <div className={styles.photoItem}>
            <PhotoPlaceholder variant="en" label="coastline near Ferrol" aspectRatio="4 / 3" />
            <p className={styles.caption}>en</p>
          </div>
          <div className={styles.photoItem}>
            <PhotoPlaceholder variant="neutral" label="Nicolás en Cracovia" aspectRatio="1 / 1" />
            <p className={styles.caption}>neutral</p>
          </div>
        </div>
      </section>
    </Container>
  )
}
