import Link from 'next/link'

import { Container } from '@/components/Container'
import { MobileMenu } from '@/components/MobileMenu'
import { cn } from '@/lib/cn'

import styles from './Header.module.css'

export type RouteKey = 'ferrol' | 'irse' | 'en'

const ROUTE_NAV_ITEMS: Array<{ key: RouteKey; label: string; href: string }> = [
  { key: 'ferrol', label: 'Ferrol', href: '/ferrol/' },
  { key: 'irse', label: 'Irse', href: '/irse/' },
  { key: 'en', label: 'English', href: '/en/' },
]

const ABOUT_ITEM = { key: 'about', label: 'Sobre nós', href: '/sobre-nos/' }

interface HeaderProps {
  siteName: string
  activeRoute?: RouteKey
}

export function Header({ siteName, activeRoute }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo}>
          {siteName}
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {ROUTE_NAV_ITEMS.map((item, i) => (
              <li key={item.key} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={cn(styles.navLink, activeRoute === item.key && styles.navLinkActive)}
                  aria-current={activeRoute === item.key ? 'page' : undefined}
                >
                  {item.label}
                </Link>
                {i < ROUTE_NAV_ITEMS.length - 1 && (
                  <span className={styles.dot} aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          <span className={styles.divider} aria-hidden="true" />
          <Link href={ABOUT_ITEM.href} className={styles.aboutLink}>
            {ABOUT_ITEM.label}
          </Link>
        </nav>

        <MobileMenu items={[...ROUTE_NAV_ITEMS, ABOUT_ITEM]} activeRoute={activeRoute} />
      </Container>
    </header>
  )
}
