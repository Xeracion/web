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
  // Una imagen de Sanity (experiencia.imagen) o una ruta estática de
  // /public (contenido hardcodeado en src/content/). Sin ninguna, se
  // muestra el gradiente + etiqueta entre corchetes de siempre.
  image?: SanityImageSource | string
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
  const src = typeof image === 'string' ? image : image ? urlFor(image).url() : undefined

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
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : (alt ?? label)}
      {...rest}
    >
      {src ? (
        <Image src={src} alt={alt ?? label} fill sizes={sizes} className={styles.image} />
      ) : (
        <span className={styles.label} aria-hidden="true">
          [ {label} ]
        </span>
      )}
    </div>
  )
}
