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
    const { href, ...anchorRest } = rest as AsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const divRest = rest as AsDiv
  return (
    <div className={classes} {...divRest}>
      {children}
    </div>
  )
}
