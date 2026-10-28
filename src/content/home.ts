import type { Partner, SectionIntro, Testimonial } from './types'

// ES: copy del pivote a catálogo de experiencias (scripts/patch-pivot-content.ts
// fue la última actualización real de este contenido en producción).
export const homeEs = {
  heading: 'Encuentra aquí tu aventura.',
  intro: 'Caminos, bosques, ciudades europeas y noches en Ferrol. Unas las pagas tú, otras te las paga Europa. Todas te dejan algo.',
  heroImage: '/img/fotos/portada-equipo.webp' as string | undefined,
  heroImageAlt: 'El equipo de Xeración y voluntarios europeos posando juntos al aire libre',
  heroImageCaption: 'foto editorial · grupo en muelle de Ferrol',
  heroIndicator: undefined as string | undefined,
  catalogIntro: { heading: 'Elige tu experiencia.' } satisfies SectionIntro,
  catalogAllLabel: 'Quiero ver todas las experiencias',
  testimonialsHeading: 'Historias reales',
  agendaHeading: 'Esta semana en Ferrol',
  agendaLinkLabel: 'Quiero ver toda la agenda',
  institutionalText:
    'Asociación juvenil sin ánimo de lucro desde 2013 · Acreditada Erasmus+ y Cuerpo Europeo de Solidaridad · 75 voluntarios europeos acogidos',
  institutionalLinkHref: '/nosotros/',
  institutionalLogos: [
    { name: 'Concello de Ferrol', image: '/img/logos/concello-ferrol.png' },
    { name: 'Xunta de Galicia · Cultura, Lingua e Xuventude', image: '/img/logos/xunta-cultura-lingua-xuventude.png' },
    { name: 'Erasmus+', image: '/img/logos/erasmus-plus.png' },
    { name: 'Eurodesk', image: '/img/logos/eurodesk.png' },
  ] satisfies Partner[],
  doorsHeading: '¿Vienes de parte de una entidad?',
  doors: [
    {
      title: '¿Representas a una organización?',
      text: 'Si buscáis socio para un proyecto europeo en Galicia, escribidnos. Contestamos en español o en inglés.',
      ctaLabel: 'Quiero proponeros un proyecto',
      href: 'mailto:info@xeracion.org?subject=Partnership',
    },
    {
      title: '¿Tienes una empresa y quieres acoger?',
      text: 'Gente joven de otros países en prácticas en tu equipo, sin coste de gestión.',
      ctaLabel: 'Quiero saber cómo funciona',
      href: '/empresas/',
    },
  ],
  closingHeading: 'Si dudas, escríbenos.',
  closingText: 'Sin formularios largos. WhatsApp, email o pásate por la Almendra 9 cualquier mañana, de 10:00 a 14:00.',
}

// Se muestra en lugar del catálogo (home y /experiencias/) si no hay ninguna
// experiencia publicada en Sanity.
export const catalogEmptyEs = {
  title: 'Estamos preparando las próximas experiencias.',
  text: 'Escríbenos por WhatsApp y te contamos lo que viene antes que a nadie. Mientras, en Ferrol siempre hay algo esta semana.',
  whatsappLabel: 'Quiero que me aviséis',
  whatsappMessage: 'Hola, quiero que me aviséis de las próximas experiencias de Xeración.',
  agendaLabel: 'Quiero ver la agenda',
}

// Citas reales de xeracion.org: Nicolás en /voluntariado-europeo/ y Tasos
// en la portada.
//
// La sección admite hasta tres (lo ideal: una actividad local, una
// experiencia de pago y una movilidad europea). Hoy solo hay dos citas reales
// publicables; la tercera se añade aquí cuando exista, sin tocar el
// componente. No inventar citas.
const homeEsTestimonialLarge: Testimonial = {
  quote:
    'Decidí venir a Cracovia […] para pasar seis meses trabajando en proyectos de movilidad juvenil y está siendo una experiencia increíble. No solo es una oportunidad de aportar algo a la comunidad que me acoge, sino un proceso de aprendizaje enriquecedor.',
  name: 'Nicolás',
  originCity: 'Ferrol',
  destinationCity: 'Cracovia',
  program: 'CES',
  image: '/img/testimonios/nicolas.webp',
}

const homeEsTestimonialMedium: Testimonial = {
  quote:
    'Hacer un voluntariado europeo ha sido la mejor decisión. Me ha ayudado a descubrir mejor mi potencial y a tener nuevas oportunidades laborales.',
  name: 'Tasos Batzonis',
  originCity: 'Grecia',
  program: 'ESC',
  image: '/img/voluntarios/anastasios-batzonis.webp',
}

export const homeEsTestimonials: Testimonial[] = [homeEsTestimonialLarge, homeEsTestimonialMedium]
