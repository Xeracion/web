import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './ButtonLink.module.css'

type AsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonLinkProps = (AsButton | AsLink) & {
  children: ReactNode
  accent?: boolean
  className?: string
}

export function ButtonLink({ children, accent = false, className, ...rest }: ButtonLinkProps) {
  const content = (
    <>
      {children}
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  )
  const classes = cn(styles.link, accent && styles.accent, className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as AsButton
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  )
}
