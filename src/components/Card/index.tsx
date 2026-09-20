import Link from 'next/link'
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './Card.module.css'

type AsDiv = HTMLAttributes<HTMLDivElement> & { href?: undefined }
type AsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type CardProps = (AsDiv | AsLink) & {
  children: ReactNode
  interactive?: boolean
  className?: string
}

export function Card({ children, interactive, className, ...rest }: CardProps) {
  const isLink = 'href' in rest && !!rest.href
  const isInteractive = interactive ?? isLink
  const classes = cn(styles.card, isInteractive && styles.interactive, className)

  if (isLink) {
    const { href, target, ...anchorRest } = rest as AsLink
    const isExternal = target === '_blank' || /^https?:\/\//.test(href) || href.startsWith('mailto:')

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    )
  }

  const divRest = rest as AsDiv
  return (
    <div className={classes} {...divRest}>
      {children}
    </div>
  )
}
