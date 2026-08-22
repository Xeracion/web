import Image from 'next/image'
import type { HTMLAttributes } from 'react'
import type { SanityImageSource } from '@sanity/image-url'

import { cn } from '@/lib/cn'
import { urlFor } from '@/sanity/lib/image'

import styles from './PhotoPlaceholder.module.css'

export type PhotoPlaceholderVariant = 'hero' | 'ferrol' | 'irse' | 'en' | 'neutral'

const ROUTE_CLASS: Partial<Record<PhotoPlaceholderVariant, string>> = {
  ferrol: 'route-ferrol',
  irse: 'route-irse',
  en: 'route-en',
}

interface PhotoPlaceholderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: PhotoPlaceholderVariant
  label: string
  image?: SanityImageSource
  alt?: string
  aspectRatio?: string
  radius?: 'lg' | 'xl'
  sizes?: string
}

export function PhotoPlaceholder({
  variant = 'neutral',
  label,
  image,
  alt,
  aspectRatio = '4 / 3',
  radius = 'lg',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className,
  style,
  ...rest
}: PhotoPlaceholderProps) {
  const variantModifier =
    variant === 'hero' || variant === 'neutral' ? styles[variant] : undefined

  return (
    <div
      className={cn(
        styles.wrapper,
        variantModifier,
        radius === 'xl' && styles.radiusXl,
        ROUTE_CLASS[variant],
        className,
      )}
      style={{ aspectRatio, ...style }}
      role={image ? undefined : 'img'}
      aria-label={image ? undefined : (alt ?? label)}
      {...rest}
    >
      {image ? (
        <Image
          src={urlFor(image).url()}
          alt={alt ?? label}
          fill
          sizes={sizes}
          className={styles.image}
        />
      ) : (
        <span className={styles.label} aria-hidden="true">
          [ {label} ]
        </span>
      )}
    </div>
  )
}
