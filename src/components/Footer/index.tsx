import Link from 'next/link'

import { Container } from '@/components/Container'
import { LogoMark } from '@/components/LogoMark'
import type { SiteSettings } from '@/content/siteSettings'
import type { Locale } from '@/lib/i18n'

import styles from './Footer.module.css'

// Pie calcado del de anthropic.com: a la izquierda el logotipo y, abajo, los
// créditos y las redes; en el centro, los grupos de enlaces como acordeones
// (<details> nativo) separados por líneas finas; a la derecha, quiénes somos
// y cómo escribirnos.

interface FooterLink {
  label: string
  href: string
}

interface FooterGroup {
  heading: string
  links: FooterLink[]
}

const GROUPS: Record<Locale, FooterGroup[]> = {
  es: [
    {
      heading: 'Agenda',
      links: [
        { label: 'Próximos eventos', href: '/agenda/#agenda' },
        { label: 'Speak Factor', href: '/speakfactor/' },
        { label: 'Cómo llegar', href: '/agenda/#visitanos' },
        { label: 'Quiero ser mentor', href: '/mentores/' },
      ],
    },
    {
      heading: 'Experiencias',
      links: [
        { label: 'Todas las experiencias', href: '/experiencias/' },
        { label: 'Sin coste', href: '/experiencias/?filtro=gratis' },
        { label: 'Preguntas frecuentes', href: '/preguntas/' },
      ],
    },
    {
      heading: 'Proyectos',
      links: [
        { label: 'Liña', href: 'https://xn--lia-8ma.com' },
        { label: 'Cousateca', href: 'https://cousateca.com' },
        { label: 'Stop Eucalipto', href: 'https://stopeucalipto.com' },
        { label: 'Retake', href: 'https://retake.es' },
        { label: 'Paisanos', href: '/paisanos/' },
      ],
    },
    {
      heading: 'Nosotros',
      links: [
        { label: 'Quiénes somos', href: '/nosotros/' },
        { label: 'Equipo', href: '/nosotros/equipo/' },
        { label: 'Para empresas', href: '/empresas/' },
      ],
    },
  ],
  // Speak Factor, mentores, preguntas, Paisanos, equipo y empresas solo
  // existen en castellano.
  gl: [
    {
      heading: 'Axenda',
      links: [
        { label: 'Próximos eventos', href: '/gl/axenda/#agenda' },
        { label: 'Speak Factor', href: '/speakfactor/' },
        { label: 'Como chegar', href: '/gl/axenda/#visitanos' },
        { label: 'Quero ser mentor', href: '/mentores/' },
      ],
    },
    {
      heading: 'Experiencias',
      links: [
        { label: 'Todas as experiencias', href: '/gl/experiencias/' },
        { label: 'Sen custo', href: '/gl/experiencias/?filtro=gratis' },
        { label: 'Preguntas frecuentes', href: '/preguntas/' },
      ],
    },
    {
      heading: 'Proxectos',
      links: [
        { label: 'Liña', href: 'https://xn--lia-8ma.com' },
        { label: 'Cousateca', href: 'https://cousateca.com' },
        { label: 'Stop Eucalipto', href: 'https://stopeucalipto.com' },
        { label: 'Retake', href: 'https://retake.es' },
        { label: 'Paisanos', href: '/paisanos/' },
      ],
    },
    {
      heading: 'Nós',
      links: [
        { label: 'Quen somos', href: '/gl/nos/' },
        { label: 'Equipo', href: '/nosotros/equipo/' },
        { label: 'Para empresas', href: '/empresas/' },
      ],
    },
  ],
}

const COPY = {
  es: { who: 'Quiénes somos', write: 'Escríbenos', home: '/', social: 'Redes sociales', link: 'Enlace' },
  gl: { who: 'Quen somos', write: 'Escríbenos', home: '/gl/', social: 'Redes sociais', link: 'Ligazón' },
}

const PLATFORM_LABELS: Record<string, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)

// Iconos macizos, como los del pie de anthropic.com. Los huecos se pintan
// con el color del fondo del pie (--surface-dark).
function SocialIcon({ platform }: { platform: string }) {
  const hole = 'var(--surface-dark)'
  switch (platform) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="currentColor" />
          <circle cx="12" cy="12" r="4.6" style={{ fill: hole }} />
          <circle cx="12" cy="12" r="2.9" fill="currentColor" />
          <circle cx="17.2" cy="6.8" r="1.25" style={{ fill: hole }} />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path
            d="M13.4 22v-7.3h2.4l.37-2.85H13.4v-1.8c0-.83.23-1.39 1.42-1.39h1.5V6.12a20 20 0 0 0-2.2-.11c-2.18 0-3.66 1.33-3.66 3.76v2.08H8v2.85h2.46V22z"
            style={{ fill: hole }}
          />
        </svg>
      )
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="currentColor" />
          <path
            d="M13.6 6h2.1c.2 1.3 1.1 2.3 2.4 2.5v2.1a5 5 0 0 1-2.4-.75v4.4a3.85 3.85 0 1 1-3.85-3.85c.2 0 .4.02.6.05v2.15a1.75 1.75 0 1 0 1.15 1.65z"
            style={{ fill: hole }}
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="currentColor" />
          <rect x="6.2" y="10" width="2.6" height="8" style={{ fill: hole }} />
          <circle cx="7.5" cy="7.3" r="1.5" style={{ fill: hole }} />
          <path d="M10.8 10h2.5v1.1c.4-.75 1.35-1.3 2.6-1.3 2.1 0 2.9 1.3 2.9 3.4V18h-2.6v-4.3c0-1-.3-1.75-1.3-1.75s-1.5.75-1.5 1.75V18h-2.6z" style={{ fill: hole }} />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      )
  }
}

function FooterAnchor({ link, className }: { link: FooterLink; className: string }) {
  if (!isExternal(link.href)) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    )
  }
  const newTab = link.href.startsWith('http')
  return (
    <a
      href={link.href}
      className={className}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
      {newTab && (
        <span className={styles.external} aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  )
}

interface FooterProps {
  siteSettings: SiteSettings
  locale?: Locale
}

export function Footer({ siteSettings, locale = 'es' }: FooterProps) {
  const copy = COPY[locale]
  const socialLinks = siteSettings?.socialLinks ?? []
  const contactLinks: FooterLink[] = [
    ...(siteSettings?.email ? [{ label: siteSettings.email, href: `mailto:${siteSettings.email}` }] : []),
    ...(siteSettings?.whatsapp ? [{ label: 'WhatsApp', href: `https://wa.me/${siteSettings.whatsapp}` }] : []),
  ]

  return (
    <footer className={styles.footer} data-invert-header>
      <Container className={styles.grid}>
        <div className={styles.brand}>
          <Link href={copy.home} className={styles.brandLogo} aria-label={siteSettings?.title ?? 'Xeración'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/xeracion-blanco.svg" alt="" width={1811} height={375} className={styles.brandWordmark} />
            {/* En móvil, la X del mismo tamaño y en el mismo sitio que la de la cabecera: al subir el pie, la X de la cabecera (ya en blanco) toma su relevo. */}
            <LogoMark collapsed className={styles.brandMark} />
          </Link>
        </div>

        <nav className={styles.groups} aria-label={siteSettings?.title ?? 'Xeración'}>
          {GROUPS[locale].map((group) => (
            <details key={group.heading} className={styles.group}>
              <summary className={styles.summary}>
                <h2 className={styles.groupHeading}>{group.heading}</h2>
                <svg className={styles.chevron} viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3.5 6l4.5 4.5L12.5 6" fill="none" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </summary>
              <ul className={styles.groupLinks}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterAnchor link={link} className={styles.link} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>

        <div className={styles.aside}>
          {siteSettings?.mission && (
            <div>
              <h2 className={styles.asideHeading}>{copy.who}</h2>
              <p className={styles.asideText}>{siteSettings.mission}</p>
            </div>
          )}
          {contactLinks.length > 0 && (
            <div>
              <h2 className={styles.asideHeading}>{copy.write}</h2>
              <ul className={styles.asideLinks}>
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <FooterAnchor link={link} className={styles.asideLink} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          {socialLinks.length > 0 && (
            <ul className={styles.socialList} aria-label={copy.social}>
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={PLATFORM_LABELS[link.platform] ?? copy.link}
                  >
                    <SocialIcon platform={link.platform} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  )
}
