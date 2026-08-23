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

interface FooterProps {
  siteSettings: SiteSettings | null
  locale?: 'es' | 'en'
}

export function Footer({ siteSettings, locale = 'es' }: FooterProps) {
  const copy = COPY[locale]
  const address = siteSettings?.address ?? 'Casa da Xuventude, Rúa Almendra 9, Ferrol'
  const email = siteSettings?.email ?? 'info@xeracion.org'

  return (
    <footer className={styles.footer}>
      <Container className={styles.grid}>
        <div>
          <Link href="/" className={styles.brandLogo} aria-label={siteSettings?.title ?? 'Xeración'}>
            <Image src="/logo.svg" alt="" width={140} height={30} />
          </Link>
          <p className={styles.brandText}>
            {address}
            <br />
            {email}
          </p>
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
