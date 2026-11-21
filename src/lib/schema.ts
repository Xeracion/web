// Datos estructurados (schema.org) de la web. Todo sale de src/content/: aquí
// no se escribe ningún dato nuevo, solo se le da forma para Google.
import type { Faq } from '@/content/types'
import { pageHomeEn } from '@/content/en/pages'
import { pageNosotrosEs } from '@/content/nosotros'
import { siteSettings } from '@/content/siteSettings'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const IN_LANGUAGE: Record<'es' | 'gl' | 'en', string> = { es: 'es-ES', gl: 'gl-ES', en: 'en-GB' }

export function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}

/** Quita el **negrita** del markdown de los textos. */
function plain(text: string | string[]): string {
  return (Array.isArray(text) ? text.join(' ') : text).replace(/\*\*/g, '')
}

/** La organización y la web: van en todas las páginas (layout raíz). */
export function siteGraph() {
  const organization = {
    '@type': ['NGO', 'Organization'],
    '@id': ORG_ID,
    name: siteSettings.title,
    legalName: pageNosotrosEs.legalName,
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/logo/xeracion-azul.svg') },
    image: absoluteUrl('/opengraph-image'),
    description: siteSettings.description,
    email: siteSettings.email,
    foundingDate: '2013',
    nonprofitStatus: 'NonprofitType',
    taxID: pageNosotrosEs.legalCif,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'OID (Erasmus+ Organisation ID)', value: pageNosotrosEs.legalOid },
      { '@type': 'PropertyValue', propertyID: 'PIC (Participant Identification Code)', value: pageNosotrosEs.legalPic },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Casa da Xuventude, Rúa Almendra 9',
      postalCode: '15402',
      addressLocality: 'Ferrol',
      addressRegion: 'Galicia',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: siteSettings.email,
      availableLanguage: ['es', 'gl', 'en'],
    },
    areaServed: [
      { '@type': 'City', name: 'Ferrol' },
      { '@type': 'AdministrativeArea', name: 'Galicia' },
      { '@type': 'Country', name: 'Spain' },
    ],
    // Lo que sabe hacer: así entiende Google para qué búsquedas es relevante.
    knowsAbout: [
      'Erasmus+',
      'European Solidarity Corps',
      'Youth exchanges',
      'Training courses for youth workers',
      'European volunteering',
      'Hosting organisation in Spain',
      'Erasmus+ internships in Spain',
      'Youth work',
      'Intercambios juveniles',
      'Voluntariado europeo',
      'Entidad de acogida en España',
    ],
    hasCredential: pageHomeEn.accreditations.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      name,
    })),
    sameAs: siteSettings.socialLinks.map((link) => link.url),
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: siteSettings.title,
    inLanguage: Object.values(IN_LANGUAGE),
    publisher: { '@id': ORG_ID },
  }

  return { '@context': 'https://schema.org', '@graph': [organization, website] }
}

interface WebPageInput {
  path: string
  name: string
  description?: string | string[]
  locale?: 'es' | 'gl' | 'en'
  /** Ruta de migas: [['Experiencias', '/experiencias/'], ['Camino', '/experiencias/camino/']]. */
  breadcrumbs?: Array<[string, string]>
  /** Nodos extra (Service, FAQPage…) que cuelgan de esta página. */
  extra?: object[]
}

/** Una página concreta, con migas y lo que se le cuelgue. */
export function pageGraph({ path, name, description, locale = 'es', breadcrumbs, extra = [] }: WebPageInput) {
  const url = absoluteUrl(path)
  const page: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    inLanguage: IN_LANGUAGE[locale],
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  }
  if (description) page.description = plain(description)

  const graph: object[] = [page, ...extra]

  if (breadcrumbs?.length) {
    const home = locale === 'en' ? ['Home', '/en/'] : locale === 'gl' ? ['Inicio', '/gl/'] : ['Inicio', '/']
    const items = [home, ...breadcrumbs]
    const id = `${url}#breadcrumb`
    page.breadcrumb = { '@id': id }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': id,
      itemListElement: items.map(([itemName, itemPath], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: itemName,
        item: absoluteUrl(itemPath),
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Un servicio que presta Xeración (acoger voluntarios, prácticas…). */
export function serviceNode(input: { path: string; name: string; serviceType: string; description: string | string[]; audience: string }) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: plain(input.description),
    provider: { '@id': ORG_ID },
    url: absoluteUrl(input.path),
    areaServed: { '@type': 'Country', name: 'Spain' },
    audience: { '@type': 'Audience', audienceType: input.audience },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: absoluteUrl(input.path), availableLanguage: ['en', 'es'] },
  }
}

/** Preguntas frecuentes de una página. */
export function faqNode(path: string, items: Faq[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: plain(item.answer) },
    })),
  }
}
