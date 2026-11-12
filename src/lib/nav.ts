import type { Locale } from './i18n'

export type RouteKey = 'home' | 'ferrol' | 'experiencias' | 'nosotros' | 'blog'

export interface NavLink {
  name: string
  link: string
}

export interface NavItem extends NavLink {
  key: RouteKey
  /** Enlaces secundarios: solo los enseña el menú móvil, como acordeón bajo el principal. */
  children?: NavLink[]
}

// Blog: la entrada del menú está lista pero apagada. Para encenderla, cambiar
// BLOG_ENABLED a true y crear la ruta /blog/ (y /gl/blog/); ver docs/diseno.md.
export const BLOG_ENABLED = false

const BLOG_ITEM: Record<Locale, NavItem> = {
  es: { name: 'Blog', link: '/blog/', key: 'blog' },
  gl: { name: 'Blog', link: '/gl/blog/', key: 'blog' },
}

const withBlog = (locale: Locale, items: NavItem[]): NavItem[] =>
  BLOG_ENABLED ? [...items, BLOG_ITEM[locale]] : items

export const NAV_ITEMS_ES: NavItem[] = withBlog('es', [
  { name: 'Inicio', link: '/', key: 'home' },
  {
    name: 'Agenda',
    link: '/agenda/',
    key: 'ferrol',
    children: [
      { name: 'Próximos eventos', link: '/agenda/#agenda' },
      { name: 'Speak Factor', link: '/speakfactor/' },
      { name: 'Cómo llegar', link: '/agenda/#visitanos' },
      { name: 'Quiero ser mentor', link: '/mentores/' },
    ],
  },
  {
    name: 'Experiencias',
    link: '/experiencias/',
    key: 'experiencias',
    children: [
      { name: 'Todas las experiencias', link: '/experiencias/' },
      { name: 'Sin coste', link: '/experiencias/?filtro=gratis' },
      { name: 'Preguntas frecuentes', link: '/preguntas/' },
    ],
  },
  {
    name: 'Nosotros',
    link: '/nosotros/',
    key: 'nosotros',
    children: [
      { name: 'Quiénes somos', link: '/nosotros/' },
      { name: 'Equipo', link: '/nosotros/equipo/' },
      { name: 'Paisanos', link: '/paisanos/' },
      { name: 'Para empresas', link: '/empresas/' },
    ],
  },
])

// Speak Factor, mentores, preguntas, Paisanos, equipo y empresas solo existen
// en castellano: desde la versión gallega enlazan a esa versión.
export const NAV_ITEMS_GL: NavItem[] = withBlog('gl', [
  { name: 'Inicio', link: '/gl/', key: 'home' },
  {
    name: 'Axenda',
    link: '/gl/axenda/',
    key: 'ferrol',
    children: [
      { name: 'Próximos eventos', link: '/gl/axenda/#agenda' },
      { name: 'Speak Factor', link: '/speakfactor/' },
      { name: 'Como chegar', link: '/gl/axenda/#visitanos' },
      { name: 'Quero ser mentor', link: '/mentores/' },
    ],
  },
  {
    name: 'Experiencias',
    link: '/gl/experiencias/',
    key: 'experiencias',
    children: [
      { name: 'Todas as experiencias', link: '/gl/experiencias/' },
      { name: 'Sen custo', link: '/gl/experiencias/?filtro=gratis' },
      { name: 'Preguntas frecuentes', link: '/preguntas/' },
    ],
  },
  {
    name: 'Nós',
    link: '/gl/nos/',
    key: 'nosotros',
    children: [
      { name: 'Quen somos', link: '/gl/nos/' },
      { name: 'Equipo', link: '/nosotros/equipo/' },
      { name: 'Paisanos', link: '/paisanos/' },
      { name: 'Para empresas', link: '/empresas/' },
    ],
  },
])

export const NAV_ITEMS: Record<Locale, NavItem[]> = {
  es: NAV_ITEMS_ES,
  gl: NAV_ITEMS_GL,
}
