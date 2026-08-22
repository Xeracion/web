import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './ButtonPrimary.module.css'

type AsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonPrimaryProps = (AsButton | AsLink) & {
  children: ReactNode
  accent?: boolean
  className?: string
}

export function ButtonPrimary({ children, accent = false, className, ...rest }: ButtonPrimaryProps) {
  const classes = cn(styles.button, accent && styles.accent, className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as AsButton
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
