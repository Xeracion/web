import type { SectionIntro, StatItem, Testimonial, ValueItem } from './types'

// scripts/seed-mentores.ts. /mentores/ no cambió con el pivote.
export const pageMentoresContent = {
  heroEyebrow: 'Adopta un extranjero',
  heroHeading: 'Viaja sin salir de casa: hazte mentor de un voluntario europeo en Ferrol.',
  heroText:
    'Durante todo el año recibimos voluntarios europeos en Ferrol, gente joven que se queda entre 2 y 10 meses desarrollando su Voluntariado Europeo. Adaptarse a una ciudad y una cultura nuevas no es fácil — hasta ir al banco se convierte en una aventura. Queremos que ese proceso sea lo más sencillo posible, y para eso hace falta gente de aquí.',
  heroImageCaption: 'foto editorial · mentor y voluntaria paseando por Ferrol Vello',
  heroCtaLabel: 'Apúntame',
  heroCtaHref: 'mailto:info@xeracion.org',
  whyIntro: { eyebrow: 'A quién buscamos', heading: 'Gente activa con ganas de enseñar su ciudad.' } satisfies SectionIntro,
  whyText:
    'Buscamos personas con algo de tiempo libre, capaces de comunicarse en inglés y con ganas de unirse al club de los mejores embajadores que puede tener Ferrol. Tu trabajo: ayudar a los voluntarios a integrarse en la ciudad, descubrirla, disfrutarla y sentirse como en casa.',
  beneficiosIntro: { eyebrow: 'Qué vas a ganar', heading: 'Tres motivos para apuntarte.' } satisfies SectionIntro,
  beneficios: [
    { icon: '🏙️', title: 'Redescubrirás Ferrol', description: 'Aprende historia local, visita museos, descubre playas nuevas. A veces hace falta una excusa para recorrer los rincones que aún no conoces — ¿qué mejor que enseñárselos a alguien de fuera?' },
    { icon: '✈️', title: 'Viajarás sin salir de casa', description: 'Para descubrir una cultura nueva, probar otra cocina o aprender un idioma normalmente hay que subirse a un avión. Aquí ese país viene a tu encuentro — mucho más fácil, ¿no?' },
    { icon: '🤝', title: 'Harás nuevas amistades', description: 'Formarás parte de un grupo de gente activa, viajera y que habla inglés. Conocerás personas de otros países con quienes organizar fiestas y excursiones.' },
  ] satisfies ValueItem[],
  stats: [
    { value: '+10', label: 'voluntarios extranjeros acompañados' },
    { value: '15', label: 'mentores locales activos' },
  ] satisfies StatItem[],
  testimoniosIntro: { eyebrow: 'Voces de mentores', heading: 'Experiencias de mentores.' } satisfies SectionIntro,
  closingHeading: '¿Te apuntas de mentor?',
  closingText: 'Sin curso previo ni compromiso largo. Solo hace falta tener ganas de enseñar tu ciudad.',
}

export const mentoresTestimonials: Testimonial[] = [
  { quote: 'He practicado inglés sin salir de casa.', name: 'Barbara', originCity: 'Italia' },
  { quote: 'É unha experiencia que como persoa che fai medrar e aprender moito.', name: 'Laura', originCity: 'Italia' },
  { quote: 'Nunca pensé que podría ver la ciudad con otros ojos.', name: 'Miguel', originCity: 'Italia' },
]
