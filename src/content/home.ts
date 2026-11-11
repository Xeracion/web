import type { HomeDoor, HomeProject, Partner, SectionIntro, StatItem, Testimonial } from './types'

// ES: copy del pivote a catálogo de experiencias (scripts/patch-pivot-content.ts
// fue la última actualización real de este contenido en producción).
export const homeEs = {
  // Posicionamiento (noviembre de 2026): Xeración se presenta como un grupo
  // que monta alternativas, con dos pilares de igual peso (experiencias y
  // proyectos para la comunidad). Europa y Ferrol quedan en segundo plano.
  heading: 'Otros planes son posibles.',
  intro:
    'Somos un grupo de gente que monta alternativas: experiencias para crecer, sobre todo si eres joven, y proyectos que mejoran la vida de la comunidad. Desde 2013.',
  heroImage: '/img/fotos/portada-equipo.webp' as string | undefined,
  heroImageAlt: 'El equipo de Xeración y voluntarios europeos posando juntos al aire libre',
  heroImageCaption: 'foto editorial · gente haciendo algo juntos al aire libre',
  heroIndicator: undefined as string | undefined,
  heroActions: [
    { label: 'Quiero ver experiencias', href: '#experiencias' },
    { label: 'Quiero ver los proyectos', href: '#proyectos' },
  ],
  agendaHeading: 'Esta semana en Xeración',
  agendaLinkLabel: 'Quiero ver toda la agenda',
  catalogIntro: {
    heading: 'Para salir distinto de como entraste.',
    text: 'Aventuras al aire libre, caminos, encuentros, voluntariados. Unas las pagas tú, otras están financiadas. Todas te dejan algo.',
  } satisfies SectionIntro,
  catalogAllLabel: 'Quiero ver todas las experiencias',
  projectsHeading: 'Los montamos porque hacían falta.',
  projectsText: 'Cuando algo no existe y debería, intentamos construirlo. Estos son algunos.',
  // Solo llevan enlace los proyectos que tienen web pública confirmada.
  projects: [
    {
      name: 'Liña',
      text: 'Los buses de Ferrol y de Galicia en una sola app, con horarios y tiempo real de varias operadoras.',
      // liña.com (el dominio lleva eñe; esta es su forma técnica).
      href: 'https://xn--lia-8ma.com',
      ctaLabel: 'Quiero probarla',
    },
    {
      name: 'Cousateca',
      text: 'Una biblioteca de objetos con préstamo vecinal. Para qué comprar un taladro que vas a usar dos veces.',
      href: 'https://cousateca.com',
      ctaLabel: 'Quiero ver qué hay',
    },
    {
      name: 'Stop Eucalipto',
      text: 'Devolver el bosque autóctono al monte, parcela a parcela.',
      href: 'https://stopeucalipto.com',
      ctaLabel: 'Quiero verlo',
    },
  ] satisfies HomeProject[],
  testimonialsHeading: 'Historias reales',
  figuresHeading: 'Un grupo pequeño con un historial largo.',
  figuresText:
    'Somos una asociación juvenil sin ánimo de lucro. Llevamos desde 2013 montando experiencias y proyectos, con gente de aquí y de fuera.',
  figures: [
    { value: '2013', label: 'año en que empezamos' },
    { value: '+120', label: 'voluntarios internacionales acogidos' },
    { value: '+50', label: 'jóvenes enviados a proyectos fuera' },
    { value: '57', label: 'personas socias' },
  ] satisfies StatItem[],
  // El único sitio de la portada donde se nombran los programas europeos.
  figuresBacking:
    'Parte de lo que hacemos lo financia Europa. Estamos acreditados por Erasmus+ y el Cuerpo Europeo de Solidaridad y formamos parte de la red Eurodesk.',
  figuresLinkLabel: 'Quiero saber quiénes sois',
  figuresLinkHref: '/nosotros/',
  institutionalLogos: [
    { name: 'Concello de Ferrol', image: '/img/logos/concello-ferrol.png' },
    { name: 'Xunta de Galicia · Cultura, Lingua e Xuventude', image: '/img/logos/xunta-cultura-lingua-xuventude.png' },
    { name: 'Erasmus+', image: '/img/logos/erasmus-plus.png' },
    { name: 'Eurodesk', image: '/img/logos/eurodesk.png' },
  ] satisfies Partner[],
  doorsHeading: '¿Vienes de parte de una entidad?',
  doors: [
    {
      title: 'Hagamos algo juntos.',
      text: 'Para instituciones y empresas: qué hacemos, con quién y con qué resultados. Y una persona con la que hablar.',
      ctaLabel: 'Quiero conoceros',
      href: '/empresas/',
    },
    {
      title: '¿Traes un grupo?',
      text: 'Caminos, cursos y estancias a medida para centros, asociaciones y equipos. Nos dices fechas y cuántos sois.',
      ctaLabel: 'Quiero un presupuesto',
      href: 'mailto:info@xeracion.org?subject=Presupuesto%20para%20un%20grupo',
    },
  ] satisfies HomeDoor[],
  closingHeading: 'Si dudas, escríbenos.',
  closingText: 'Sin formularios largos. WhatsApp, email o pásate por la Almendra 9 cualquier mañana, de 10:00 a 14:00.',
}

// Se muestra en lugar del catálogo (home y /experiencias/) si no hay ninguna
// experiencia activa en src/content/experiencias.ts.
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
