import { stegaClean } from '@sanity/client/stega'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import type { SiteSettings } from '@/sanity/lib/queries'

import styles from './Footer.module.css'

interface FooterColumn {
  heading: string
  links: Array<{ label: string; href: string }>
}

interface FooterCopy {
  columns: FooterColumn[]
  credits: (address: string) => string
}

const COPY: Record<'es' | 'en', FooterCopy> = {
  es: {
    columns: [
      {
        heading: 'Ferrol',
        links: [
          { label: 'Agenda', href: '/ferrol/#agenda' },
          { label: 'Offline Club', href: '/ferrol/#offline-club' },
          { label: 'Cómo llegar', href: '/ferrol/#visitanos' },
        ],
      },
      {
        heading: 'Irse',
        links: [
          { label: 'Voluntariado europeo', href: '/irse/#voluntariado' },
          { label: 'Intercambios', href: '/irse/#intercambios' },
          { label: 'Proyectos abiertos', href: '/irse/#proyectos' },
        ],
      },
      {
        heading: 'English',
        links: [
          { label: 'Volunteering', href: '/en/#volunteering' },
          { label: 'Life in Ferrol', href: '/en/#life' },
          { label: 'Apply', href: '/en/#apply' },
        ],
      },
    ],
    credits: (address) => `© 2026 Asociación Xeración · ${address}`,
  },
  en: {
    columns: [
      {
        heading: 'Ferrol',
        links: [
          { label: 'Schedule', href: '/ferrol/#agenda' },
          { label: 'Offline Club', href: '/ferrol/#offline-club' },
          { label: 'Getting here', href: '/ferrol/#visitanos' },
        ],
      },
      {
        heading: 'Go',
        links: [
          { label: 'European volunteering', href: '/irse/#voluntariado' },
          { label: 'Exchanges', href: '/irse/#intercambios' },
          { label: 'Open projects', href: '/irse/#proyectos' },
        ],
      },
      {
        heading: 'English',
        links: [
          { label: 'Volunteering', href: '/en/#volunteering' },
          { label: 'Life in Ferrol', href: '/en/#life' },
          { label: 'Apply', href: '/en/#apply' },
        ],
      },
    ],
    credits: (address) => `© 2026 Xeración Association · ${address}`,
  },
}

const PLATFORM_LABELS: Record<string, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
  other: 'Enlace',
}

function SocialIcon({ platform }: { platform?: string }) {
  switch (platform) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path
            d="M13.5 21v-7h2.2l.3-2.6h-2.5V9.4c0-.75.2-1.26 1.28-1.26h1.37V5.8c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.9H8.5v2.6h2.35V21"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      )
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M14 4v10.2a3.3 3.3 0 1 1-2.4-3.18" />
          <path d="M14 4c.4 2.1 2 3.7 4.1 4" />
        </svg>
      )
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="2.5" y="6" width="19" height="12" rx="4" />
          <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <line x1="7.5" y1="10" x2="7.5" y2="17" />
          <circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
          <line x1="11.5" y1="10" x2="11.5" y2="17" />
          <path d="M11.5 17v-4.2c0-1.5.9-2.4 2.1-2.4 1.2 0 1.9.8 1.9 2.4V17" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
        </svg>
      )
  }
}

interface FooterProps {
  siteSettings: SiteSettings | null
  locale?: 'es' | 'en'
}

export function Footer({ siteSettings, locale = 'es' }: FooterProps) {
  const copy = COPY[locale]
  const address = siteSettings?.address ?? 'Casa da Xuventude, Rúa Almendra 9, Ferrol'
  const socialLinks = siteSettings?.socialLinks ?? []

  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div>
          <Link href="/" className={styles.brandLogo} aria-label={siteSettings?.title ?? 'Xeración'}>
            <Image src="/XeracionWhite.png" alt="" width={1811} height={375} />
          </Link>
          {socialLinks.length > 0 && (
            <ul className={styles.socialList}>
              {socialLinks.map((link, i) => {
                const platform = stegaClean(link.platform) ?? 'other'
                return (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={PLATFORM_LABELS[platform] ?? 'Enlace'}
                    >
                      <SocialIcon platform={platform} />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {copy.columns.map((column) => (
          <div key={column.heading}>
            <h5 className={styles.columnHeading}>{column.heading}</h5>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container>
        <p className={styles.credits}>{copy.credits(address)}</p>
      </Container>
    </footer>
  )
}
