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
    'Xeración es un colectivo juvenil gallego activo desde 2013 con sede en Ferrol (Casa da Xuventude, Rúa Almendra 9). Coordina intercambios juveniles Erasmus+, voluntariados del Cuerpo Europeo de Solidaridad (CES/ESC), cursos de formación y actividades locales.',
  // Frase corta del pie («Quiénes somos»). Sin nombres de programa (regla 7).
  mission:
    'Colectivo juvenil sin ánimo de lucro desde 2013. Montamos alternativas: experiencias para crecer y proyectos que mejoran lo que es de todos.',
  address: 'Casa da Xuventude, Rúa Almendra 9, 15402 Ferrol',
  email: 'info@xeracion.org',
  whatsapp: '34644523505',
  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/xeracion' },
    { platform: 'tiktok', url: 'https://tiktok.com/@xeracion' },
    { platform: 'facebook', url: 'https://facebook.com/xeracion.org' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/company/xeracion' },
  ] satisfies SocialLink[],
  googleCalendarId: 'c_e9943f07c92d8902864e3723d7f48e627f3ec6a71276d26e8d9c8f78c22c46c3@group.calendar.google.com' as string | undefined,
}

export type SiteSettings = typeof siteSettings
