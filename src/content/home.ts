import type { Partner, RouteCard, SectionIntro, StatItem, Testimonial } from './types'

// ES: copy del pivote a catálogo de experiencias (scripts/patch-pivot-content.ts
// fue la última actualización real de este contenido en producción).
export const homeEs = {
  eyebrow: 'Xeración · Ferrol, Galicia',
  heading: 'Encuentra aquí tu aventura.',
  intro: 'Caminos, bosques, ciudades europeas y noches en Ferrol. Unas las pagas tú, otras te las paga Europa. Todas te dejan algo.',
  heroImageCaption: 'foto editorial · grupo en muelle de Ferrol',
  heroIndicator: undefined as string | undefined,
  catalogIntro: { eyebrow: 'Catálogo', heading: 'Elige tu experiencia.' } satisfies SectionIntro,
  testimonialsEyebrow: 'Historias reales',
  agendaEyebrow: 'Esta semana en Ferrol',
  agendaLinkLabel: 'Toda la agenda',
  institutionalText:
    'Asociación juvenil sin ánimo de lucro desde 2013 · Acreditada Erasmus+ y Cuerpo Europeo de Solidaridad · +200 jóvenes movidos',
  institutionalLinkHref: '/nosotros/',
  institutionalLogos: [
    { name: 'Erasmus+' },
    { name: 'Cuerpo Europeo de Solidaridad' },
    { name: 'Concello de Ferrol' },
    { name: 'Xunta de Galicia' },
  ] satisfies Partner[],
  closingHeading: 'Si dudas, escríbenos.',
  closingText: 'Sin formularios largos. WhatsApp, email o pásate por la Almendra 9 cualquier tarde.',
}

// testimonial-nicolas (displaySize grande) y testimonial-tasos (displaySize
// mediano, el primero en orden de creación) — mejor estimación a partir del
// orden de los scripts de seed; no tengo acceso al dataset real para
// confirmar cuál mostraba la home en producción.
export const homeEsTestimonialLarge: Testimonial = {
  quote: 'Llegué a Cracovia sin saber polaco. Volví con currículum, novia y una idea clara de a qué quiero dedicarme.',
  name: 'Nicolás',
  originCity: 'Ferrol',
  destinationCity: 'Cracovia',
  program: 'CES',
  year: 2024,
}

export const homeEsTestimonialMedium: Testimonial = {
  quote: 'Vine a Ferrol sin conocer a nadie. Salí con una segunda familia repartida por media Europa.',
  name: 'Tasos Batzonis',
  originCity: 'Grecia',
  program: 'ESC',
}

// EN: /en/ no se tocó en el pivote — sigue con el patrón de 3 tarjetas de
// ruta + tira de números de siempre. Contenido de scripts/seed-en-content.ts.
export const homeEn = {
  eyebrow: 'Youth association · Ferrol · since 2013',
  heading: 'Twelve years opening doors to Europe from Galicia.',
  intro:
    'We send young Galicians volunteering across Europe, bring young Europeans to Ferrol, and put together things for the people who live here.',
  heroImageCaption: "editorial photo · group at Ferrol's quay",
  heroIndicator: "Choose where you're coming from",
  routeCardFerrol: {
    badgeLabel: 'Route 1 · Local',
    title: 'I live in Ferrol and want to do something this week.',
    text: 'Casa da Xuventude on Almendra. Clubs, workshops, get-togethers. Almost all of it free.',
    ctaLabel: "See what's on",
    photoLabel: 'group at Offline Club',
  } satisfies RouteCard,
  routeCardVolunteering: {
    badgeLabel: 'Route 3 · Come over',
    title: 'I want to volunteer or intern in Galicia.',
    text: '2 to 12 months in Ferrol with the European Solidarity Corps.',
    ctaLabel: 'Apply',
    photoLabel: 'volunteer group at the Cantábrico coast',
  } satisfies RouteCard,
  routeCardAbout: {
    badgeLabel: 'About us',
    title: 'Twelve years building a network across Europe.',
    text: 'Who we are, how it started, and the team behind it.',
    ctaLabel: 'Meet the team',
    photoLabel: 'team at the Casa da Xuventude',
  } satisfies RouteCard,
  stats: [
    { value: '12', label: 'years active since 2013' },
    { value: '~80', label: 'young Galicians sent volunteering' },
    { value: '~60', label: 'Europeans hosted in Ferrol' },
    { value: '15+', label: 'countries of origin and destination' },
  ] satisfies StatItem[],
  testimonialsEyebrow: 'Real stories',
  agendaEyebrow: 'This week in Ferrol',
  agendaLinkLabel: 'Full schedule',
  closingHeading: "If you're unsure, just write to us.",
  closingText: 'No long forms. WhatsApp, email, or drop by Almendra 9 any afternoon.',
}

// Ningún testimonio se sembró con displaySize "grande" e idioma inglés —
// solo hay "mediano". testimonial-amelie es el más antiguo de ese grupo por
// orden de creación (mejor estimación, mismo caveat que arriba).
export const homeEnTestimonialLarge: Testimonial | null = null

export const homeEnTestimonialMedium: Testimonial = {
  quote: 'I came to Ferrol for six months. I stayed almost a year. The sea, the food, the people.',
  name: 'Amélie',
  originCity: 'Lyon',
  destinationCity: 'Ferrol',
  program: 'ESC',
  year: 2023,
}
