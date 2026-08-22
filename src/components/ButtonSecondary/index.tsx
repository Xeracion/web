import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './ButtonSecondary.module.css'

type AsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonSecondaryProps = (AsButton | AsLink) & {
  children: ReactNode
  className?: string
}

export function ButtonSecondary({ children, className, ...rest }: ButtonSecondaryProps) {
  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsLink
    return (
      <a href={href} className={cn(styles.button, className)} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as AsButton
  return (
    <button type={type} className={cn(styles.button, className)} {...buttonRest}>
      {children}
    </button>
  )
}
