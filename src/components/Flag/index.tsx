import type { ReactNode } from 'react'

import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

import styles from './Flag.module.css'

// Banderas en SVG en línea (sin librería ni emojis, que en Windows no se ven
// como bandera). Se dibujan en una caja de 30×20 y se enseñan pequeñas, con
// esquinas suaves y un aro fino. Para añadir un país: su código ISO, su
// dibujo y su nombre en castellano y gallego.

const FLAGS: Record<string, ReactNode> = {
  FR: (
    <>
      <rect x="0.000" width="10.050" height="20" fill="#0055A4"/><rect x="10.000" width="10.050" height="20" fill="#FFFFFF"/><rect x="20.000" width="10.050" height="20" fill="#EF4135"/>
    </>
  ),
  IT: (
    <>
      <rect x="0.000" width="10.050" height="20" fill="#009246"/><rect x="10.000" width="10.050" height="20" fill="#FFFFFF"/><rect x="20.000" width="10.050" height="20" fill="#CE2B37"/>
    </>
  ),
  DE: (
    <>
      <rect y="0.000" width="30" height="6.717" fill="#000000"/><rect y="6.667" width="30" height="6.717" fill="#DD0000"/><rect y="13.333" width="30" height="6.717" fill="#FFCE00"/>
    </>
  ),
  NL: (
    <>
      <rect y="0.000" width="30" height="6.717" fill="#AE1C28"/><rect y="6.667" width="30" height="6.717" fill="#FFFFFF"/><rect y="13.333" width="30" height="6.717" fill="#21468B"/>
    </>
  ),
  AT: (
    <>
      <rect y="0.000" width="30" height="6.717" fill="#ED2939"/><rect y="6.667" width="30" height="6.717" fill="#FFFFFF"/><rect y="13.333" width="30" height="6.717" fill="#ED2939"/>
    </>
  ),
  EE: (
    <>
      <rect y="0.000" width="30" height="6.717" fill="#0072CE"/><rect y="6.667" width="30" height="6.717" fill="#000000"/><rect y="13.333" width="30" height="6.717" fill="#FFFFFF"/>
    </>
  ),
  LV: (
    <>
      <rect width="30" height="20" fill="#9E3039"/><rect y="8" width="30" height="4" fill="#FFFFFF"/>
    </>
  ),
  PL: (
    <>
      <rect y="0.000" width="30" height="10.050" fill="#FFFFFF"/><rect y="10.000" width="30" height="10.050" fill="#DC143C"/>
    </>
  ),
  CZ: (
    <>
      <rect y="0.000" width="30" height="10.050" fill="#FFFFFF"/><rect y="10.000" width="30" height="10.050" fill="#D7141A"/><path d="M0 0L15 10L0 20Z" fill="#11457E"/>
    </>
  ),
  SK: (
    <>
      <rect y="0.000" width="30" height="6.717" fill="#FFFFFF"/><rect y="6.667" width="30" height="6.717" fill="#0B4EA2"/><rect y="13.333" width="30" height="6.717" fill="#EE1C25"/><path d="M6 4.2h6.6v5.4c0 2.6-2.2 4.2-3.3 4.8C8.2 13.8 6 12.2 6 9.6z" fill="#EE1C25" stroke="#FFFFFF" strokeWidth=".7"/><path d="M9.3 5.8v6.4M7.4 7.6h3.8M7.8 9.4h3" stroke="#FFFFFF" strokeWidth=".9"/>
    </>
  ),
  RO: (
    <>
      <rect x="0.000" width="10.050" height="20" fill="#002B7F"/><rect x="10.000" width="10.050" height="20" fill="#FCD116"/><rect x="20.000" width="10.050" height="20" fill="#CE1126"/>
    </>
  ),
  FI: (
    <>
      <rect width="30" height="20" fill="#FFFFFF"/><rect x="8" width="4.4" height="20" fill="#003580"/><rect y="7.8" width="30" height="4.4" fill="#003580"/>
    </>
  ),
  PT: (
    <>
      <rect width="30" height="20" fill="#FF0000"/><rect width="12" height="20" fill="#006600"/><circle cx="12" cy="10" r="3.6" fill="#FFCC00"/><circle cx="12" cy="10" r="2.1" fill="#FF0000"/><circle cx="12" cy="10" r="1.1" fill="#FFFFFF"/>
    </>
  ),
  GR: (
    <>
      <rect width="30" height="20" fill="#0D5EAF"/><rect y="2.222" width="30" height="2.222" fill="#FFFFFF"/><rect y="6.667" width="30" height="2.222" fill="#FFFFFF"/><rect y="11.111" width="30" height="2.222" fill="#FFFFFF"/><rect y="15.556" width="30" height="2.222" fill="#FFFFFF"/><rect width="11.111" height="11.111" fill="#0D5EAF"/><rect x="4.444" width="2.222" height="11.111" fill="#FFFFFF"/><rect y="4.444" width="11.111" height="2.222" fill="#FFFFFF"/>
    </>
  ),
  TR: (
    <>
      <rect width="30" height="20" fill="#E30A17"/><circle cx="10.6" cy="10" r="5" fill="#FFFFFF"/><circle cx="12" cy="10" r="4" fill="#E30A17"/><polygon points="13.80,10.00 15.55,9.38 15.60,7.53 16.72,9.00 18.50,8.47 17.45,10.00 18.50,11.53 16.72,11.00 15.60,12.47 15.55,10.62" fill="#FFFFFF"/>
    </>
  ),
}

const NAMES: Record<string, Record<Locale, string>> = {
  FR: { es: 'Francia', gl: 'Francia' },
  IT: { es: 'Italia', gl: 'Italia' },
  DE: { es: 'Alemania', gl: 'Alemaña' },
  NL: { es: 'Países Bajos', gl: 'Países Baixos' },
  AT: { es: 'Austria', gl: 'Austria' },
  EE: { es: 'Estonia', gl: 'Estonia' },
  LV: { es: 'Letonia', gl: 'Letonia' },
  PL: { es: 'Polonia', gl: 'Polonia' },
  CZ: { es: 'República Checa', gl: 'República Checa' },
  SK: { es: 'Eslovaquia', gl: 'Eslovaquia' },
  RO: { es: 'Rumanía', gl: 'Romanía' },
  FI: { es: 'Finlandia', gl: 'Finlandia' },
  PT: { es: 'Portugal', gl: 'Portugal' },
  GR: { es: 'Grecia', gl: 'Grecia' },
  TR: { es: 'Turquía', gl: 'Turquía' },
}

export function countryName(code: string, locale: Locale = 'es') {
  return NAMES[code]?.[locale] ?? code
}

export function Flag({ code, locale = 'es', className }: { code: string; locale?: Locale; className?: string }) {
  const art = FLAGS[code]
  if (!art) return null
  const name = countryName(code, locale)

  return (
    <span className={cn(styles.flag, className)} role="img" aria-label={name} title={name}>
      <svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">
        {art}
      </svg>
    </span>
  )
}
