// Antes vivía en el singleton `siteSettings` de Sanity. `whatsapp`,
// `socialLinks` y `googleCalendarId` nunca se llegaron a sembrar por script
// (se habrían añadido a mano en el Studio, si es que los rellenaste) —
// mientras estén vacíos aquí, los componentes que los usan simplemente no
// muestran ese botón/enlace, igual que hacían antes cuando el campo estaba
// vacío en Sanity. Si los tenías rellenados en el Studio, dime los valores
// reales y los pongo.

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
  whatsapp: undefined as string | undefined,
  socialLinks: [] as SocialLink[],
  googleCalendarId: undefined as string | undefined,
}

export type SiteSettings = typeof siteSettings
