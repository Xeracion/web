import type { Partner, SectionIntro, Testimonial } from './types'

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
