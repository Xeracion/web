// Antes vivía en el singleton `siteSettings` de Sanity. `googleCalendarId`
// nunca se llegó a sembrar por script (se habría añadido a mano en el
// Studio) — mientras esté vacío aquí, la agenda simplemente no muestra
// eventos, igual que hacía antes cuando el campo estaba vacío en Sanity.

export interface SocialLink {
  platform: string
  url: string
}

export const siteSettings = {
  title: 'Xeración',
  description:
    'Xeración es una asociación juvenil gallega activa desde 2013 con sede en Ferrol (Casa da Xuventude, Rúa Almendra 9). Coordina intercambios juveniles Erasmus+, voluntariados del Cuerpo Europeo de Solidaridad (CES/ESC), cursos de formación y actividades locales.',
  address: 'Casa da Xuventude, Rúa Almendra 9, 15401 Ferrol',
  email: 'info@xeracion.org',
  whatsapp: '34644523505',
  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/xeracion' },
    { platform: 'tiktok', url: 'https://tiktok.com/@xeracion' },
    { platform: 'facebook', url: 'https://facebook.com/xeracion.org' },
  ] satisfies SocialLink[],
  googleCalendarId: undefined as string | undefined,
}

export type SiteSettings = typeof siteSettings
