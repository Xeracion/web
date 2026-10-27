import type { Feature, SectionIntro } from './types'

// Transferido de xeracion.org/bienvenido/ — la página a la que llega quien
// acaba de hacerse socio o socia.
export const pageBienvenidoEs = {
  eyebrow: 'Te damos la bienvenida',
  heading: 'Ya formas parte de Xeración.',
  intro: 'Ser socio o socia tiene sus ventajas. Estas son las tuyas.',
  benefitsIntro: { eyebrow: 'Tus ventajas', heading: 'Lo que cambia desde hoy.' } satisfies SectionIntro,
  closingHeading: '¿Y si además te haces mentor?',
  closingText: 'Acompaña a los voluntarios europeos que llegan a Ferrol y enséñales tu ciudad.',
  closingCtaLabel: 'Quiero ser mentor',
  closingCtaHref: '/mentores/',
}

export const bienvenidoBenefitsEs: Feature[] = [
  {
    title: 'Viaja por Europa',
    text: 'Puedes participar en un montón de proyectos por todo el continente. Hasta que renueves no pagas la cuota de proyecto de Xeración, y tu viaje está cubierto por nuestro seguro.',
  },
  {
    title: 'Apoyamos tus ideas',
    text: 'Xeración es una herramienta para que cualquier socio ponga en marcha sus iniciativas. Te asesoramos y te dejamos material e instalaciones para ideas sobre participación, tolerancia o medio ambiente.',
  },
  {
    title: 'Actividades locales',
    text: 'Intercambios de idiomas, talleres de reciclaje, rutas culturales, limpiezas de ríos… Cada semana hay algo en la Casa da Xuventude de Ferrol, y puedes participar gratis.',
  },
]
