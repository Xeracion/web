import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error(
    'Faltan variables de entorno. Revisa NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET y SANITY_API_WRITE_TOKEN en .env.local.',
  )
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-07-30',
  useCdn: false,
})

type SanityDoc = { _id: string; _type: string; [key: string]: unknown }

const docs: SanityDoc[] = []

function doc(_id: string, _type: string, fields: Record<string, unknown>) {
  docs.push({ _id, _type, ...fields })
}

// --- Ajustes generales -------------------------------------------------
doc('siteSettings', 'siteSettings', {
  title: 'Xeración',
  description:
    'Xeración es una asociación juvenil gallega activa desde 2013 con sede en Ferrol (Casa da Xuventude, Rúa Almendra 9). Coordina intercambios juveniles Erasmus+, voluntariados del Cuerpo Europeo de Solidaridad (CES/ESC), cursos de formación y actividades locales.',
  address: 'Casa da Xuventude, Rúa Almendra 9, 15401 Ferrol',
  email: 'info@xeracion.org',
})

// --- Home ----------------------------------------------------------------
doc('home', 'home', {
  eyebrow: 'Asociación juvenil · Ferrol · desde 2013',
  heading: 'Doce años abriendo puertas a Europa desde Galicia.',
  intro:
    'Llevamos a jóvenes gallegos de voluntariado por toda Europa, traemos a jóvenes europeos a Ferrol y montamos cosas para la peña que vive aquí.',
  heroImageCaption: 'foto editorial · grupo en muelle de Ferrol',
  heroIndicator: 'Elige por dónde entras',
  routeCardFerrol: {
    _type: 'routeCard',
    badgeLabel: 'Ruta 1 · Local',
    title: 'Vivo en Ferrol y quiero hacer algo esta semana.',
    text: 'Casa da Xuventude na Almendra. Clubs, talleres, encuentros. Casi todo gratis.',
    ctaLabel: 'Ver agenda',
    photoLabel: 'grupo en el Offline Club',
  },
  routeCardIrse: {
    _type: 'routeCard',
    badgeLabel: 'Ruta 2 · Irse',
    title: 'Quiero irme de voluntariado o Erasmus+ a Europa.',
    text: '18 a 30. Te buscamos proyecto en Europa con todo pagado.',
    ctaLabel: 'Quiero irme',
    photoLabel: 'voluntaria despidiéndose en el aeropuerto',
  },
  routeCardEn: {
    _type: 'routeCard',
    badgeLabel: 'Route 3 · Come over',
    title: 'I want to volunteer or intern in Galicia.',
    text: '2 to 12 months in Ferrol with the European Solidarity Corps.',
    ctaLabel: 'Apply',
    photoLabel: 'volunteer group at the Cantábrico coast',
  },
  stats: [
    { _type: 'statItem', _key: 'stat-1', value: '12', label: 'años activos desde 2013' },
    { _type: 'statItem', _key: 'stat-2', value: '~80', label: 'jóvenes gallegos enviados de voluntariado' },
    { _type: 'statItem', _key: 'stat-3', value: '~60', label: 'europeos acogidos en Ferrol' },
    { _type: 'statItem', _key: 'stat-4', value: '15+', label: 'países de origen y destino' },
  ],
  testimonialsEyebrow: 'Historias reales',
  agendaEyebrow: 'Esta semana en Ferrol',
  agendaLinkLabel: 'Toda la agenda',
  closingHeading: 'Si dudas, escríbenos.',
  closingText: 'Sin formularios largos. WhatsApp, email o pásate por la Almendra 9 cualquier tarde.',
})

// --- Página Ferrol ---------------------------------------------------------
doc('pageFerrol', 'pageFerrol', {
  heroEyebrow: 'Ruta 1 · Casa da Xuventude · Ferrol',
  heroHeading: 'Un sitio en la Almendra donde pasan cosas cada semana.',
  heroText:
    'Talleres, clubes, conciertos, encuentros. Casi todo gratis. Rúa Almendra 9 — abierto de lunes a sábado.',
  heroImageCaption: 'foto editorial · Offline Club en la Almendra 9',
  heroCtaPrimaryLabel: 'Ver agenda de la semana',
  heroCtaSecondaryLabel: 'Cómo llegar',
  fixedProgramsIntro: { _type: 'sectionIntro', eyebrow: 'Programas fijos', heading: 'Cuatro cosas que hacemos siempre.' },
  agendaIntro: { _type: 'sectionIntro', eyebrow: 'Agenda', heading: 'Qué hay esta semana y la que viene.' },
  arrivalHeading: 'Casa da Xuventude',
  arrivalAddressText: 'Rúa Almendra 9, 15401 Ferrol. Planta baja y primera. Abierto de lunes a sábado, tardes.',
  arrivalTransportText: 'Estación de tren a 10 min andando. Autobús urbano líneas 1, 5, 7 (parada Cantón).',
  faqIntro: { _type: 'sectionIntro', heading: 'Preguntas rápidas' },
  closingHeading: 'Pásate cualquier tarde.',
  closingText: 'No hace falta avisar. Estamos en la Almendra 9.',
})

// --- Página Irse -----------------------------------------------------------
doc('pageIrse', 'pageIrse', {
  heroEyebrow: 'Ruta 2 · Voluntariado y Erasmus+',
  heroHeading: 'Vete unos meses a Europa. Con todo pagado.',
  heroText:
    'Entre 18 y 30. Te buscamos un proyecto de voluntariado o intercambio en Europa. Alojamiento, comida, transporte y dinero de bolsillo cubiertos por la UE. Tú solo tienes que decir que sí.',
  heroImageCaption: 'foto editorial · voluntaria despidiéndose en el aeropuerto',
  heroCtaPrimaryLabel: 'Apúntame a la base de datos',
  heroCtaSecondaryLabel: 'Cómo funciona',
  howItWorksIntro: { _type: 'sectionIntro', eyebrow: 'Cómo funciona', heading: 'Tres pasos y un billete de avión.' },
  howItWorksSteps: [
    {
      _type: 'processStep',
      _key: 'step-1',
      title: 'Te apuntas',
      description: 'Rellenas un formulario de 3 minutos con tus intereses, idiomas y disponibilidad.',
    },
    {
      _type: 'processStep',
      _key: 'step-2',
      title: 'Te llamamos',
      description: 'Charlamos 20 minutos por videollamada. Te contamos qué proyectos encajan.',
    },
    {
      _type: 'processStep',
      _key: 'step-3',
      title: 'Te vas',
      description: 'Tramitamos con la organización de destino. En 2-6 meses estás allí.',
    },
  ],
  programsIntro: { _type: 'sectionIntro', eyebrow: 'Qué puedes hacer', heading: 'Tres formas de irte, según lo que busques.' },
  opportunitiesIntro: { _type: 'sectionIntro', eyebrow: 'Oportunidades abiertas', heading: 'Lo último que hemos publicado.' },
  opportunitiesFeedUrl: 'https://xeracion.substack.com/',
  testimonialsIntro: { _type: 'sectionIntro', heading: 'Historias de gente que se fue' },
  faqIntro: { _type: 'sectionIntro', heading: 'Preguntas frecuentes' },
  closingHeading: '¿Te apuntas?',
  closingText: 'Rellena el formulario. Sin compromiso. Te llamamos en menos de una semana.',
})

// --- Página English ----------------------------------------------------------
doc('pageEn', 'pageEn', {
  heroEyebrow: 'Route 3 · Come to Galicia',
  heroHeading: 'Live in Galicia for a few months. All expenses covered.',
  heroText:
    'We host young Europeans in Ferrol as ESC volunteers or Erasmus+ interns. Atlantic coast, real Spanish life, no need to speak Spanish when you arrive. 2 to 12 months. All covered by the EU.',
  heroImageCaption: 'editorial photo · volunteer group at the Cantábrico coast',
  heroCtaPrimaryLabel: 'Apply now',
  heroCtaSecondaryLabel: 'See open projects',
  lifeInFerrolIntro: { _type: 'sectionIntro', eyebrow: "Where you'll live", heading: 'A small Atlantic city with real Spanish life.' },
  lifeInFerrolPhotos: [
    {
      _type: 'lifeInFerrolPhoto',
      _key: 'photo-1',
      caption: 'The Cantábrico coast',
      description: '10 minutes from the city, dozens of beaches in a 30 km radius.',
    },
    {
      _type: 'lifeInFerrolPhoto',
      _key: 'photo-2',
      caption: 'Old town',
      description: '19th-century military port, walkable, cafes, tapas.',
    },
    {
      _type: 'lifeInFerrolPhoto',
      _key: 'photo-3',
      caption: 'Food and drink',
      description: 'Fresh Atlantic seafood, pulpo, empanada, Galician wines. Low cost of living.',
    },
    {
      _type: 'lifeInFerrolPhoto',
      _key: 'photo-4',
      caption: 'Weather and light',
      description: 'Mild all year: 15°C average. Rainy autumn-winter, warm and green summers.',
    },
  ],
  whatYouCanDoIntro: { _type: 'sectionIntro', eyebrow: 'Types of stay' },
  practicalInfoGettingHere: {
    _type: 'infoColumn',
    heading: 'Getting here',
    text: 'Fly to Santiago (SCQ, 1h drive), A Coruña (LCG, 45min) or Porto (OPO, 2h). We pick you up on arrival.',
  },
  practicalInfoHousing: {
    _type: 'infoColumn',
    heading: 'Housing',
    text: 'We arrange shared flat in central Ferrol with other volunteers. Rent, bills and wifi included.',
  },
  practicalInfoLanguage: {
    _type: 'infoColumn',
    heading: 'Language',
    text: "English is fine to start. We provide an online Spanish/Galician course. You'll be speaking basics in a month.",
  },
  voicesIntro: { _type: 'sectionIntro', heading: 'Voices from past volunteers' },
  howToApplyIntro: { _type: 'sectionIntro', heading: 'How to apply' },
  howToApplySteps: [
    {
      _type: 'processStep',
      _key: 'step-1',
      title: 'Fill the form',
      description: '2-minute form: your background, languages, availability.',
    },
    {
      _type: 'processStep',
      _key: 'step-2',
      title: 'Video call',
      description: 'We meet online for 30 minutes to find the right project.',
    },
    {
      _type: 'processStep',
      _key: 'step-3',
      title: 'Come over',
      description: 'We handle the paperwork with your sending organisation. You focus on packing.',
    },
  ],
  faqIntro: { _type: 'sectionIntro', heading: 'FAQ' },
  closingHeading: 'Ready to apply?',
  closingText: 'We usually reply within a week.',
})

// --- Página Sobre nós --------------------------------------------------
doc('pageSobreNos', 'pageSobreNos', {
  heroEyebrow: 'Desde 2013 · Ferrol, Galicia',
  heroHeading: 'No somos una ONG más. Somos tu red en Europa.',
  heroHeadingAccent: 'tu red en Europa',
  heroText:
    'Somos jóvenes que ayudamos a otros jóvenes a vivir su aventura europea. Sin protocolo, sin papeleo interminable — con la experiencia de más de una década haciendo esto.',
  heroStats: [
    { _type: 'statItem', _key: 'hero-stat-1', value: '500+', label: 'jóvenes participantes' },
    { _type: 'statItem', _key: 'hero-stat-2', value: '13', label: 'años activos' },
    { _type: 'statItem', _key: 'hero-stat-3', value: '30+', label: 'países' },
  ],
  historiaIntro: { _type: 'sectionIntro', eyebrow: 'Nuestra historia', heading: 'De una idea en un bar a una red por toda Europa.' },
  historiaParagraphs: [
    'Xeración nació en 2013 en Ferrol, cuando un grupo de amigos volvió de sus propios voluntariados europeos y se dio cuenta de que en la ciudad no había forma fácil de repetir la experiencia — ni de traer a nadie de fuera.',
    'El problema era simple: la información sobre programas europeos existía, pero estaba dispersa, en inglés técnico, y sin nadie cercano que acompañara el proceso paso a paso. Decidimos ser esa persona cercana.',
    'Trece años después seguimos con la misma idea: quitar de en medio el papeleo y la incertidumbre para que decir «me voy» sea lo más fácil de todo el viaje.',
  ],
  timeline: [
    { _type: 'timelineMilestone', _key: 'milestone-1', year: '2013', title: 'Fundación', description: 'Un grupo de amigos en Ferrol decide montar Xeración.' },
    { _type: 'timelineMilestone', _key: 'milestone-2', year: '2015', title: 'Primeros voluntarios europeos', description: 'Llegan a Ferrol los primeros jóvenes de fuera acogidos por la asociación.' },
    { _type: 'timelineMilestone', _key: 'milestone-3', year: '2021', title: 'Acreditación CES', description: 'Xeración se acredita como organización de acogida y envío del Cuerpo Europeo de Solidaridad.' },
    { _type: 'timelineMilestone', _key: 'milestone-4', year: '2024', title: '500+ participantes', description: 'Superamos los 500 jóvenes que han pasado por algún programa de Xeración.' },
    { _type: 'timelineMilestone', _key: 'milestone-5', year: '2025', title: 'Apertura Das Nest', description: 'Abrimos Das Nest, nuestro primer espacio de alojamiento propio para voluntariado.' },
  ],
  valoresIntro: { _type: 'sectionIntro', eyebrow: 'Cómo trabajamos', heading: 'Seis ideas que no negociamos.' },
  values: [
    { _type: 'valueItem', _key: 'value-1', icon: '✈️', title: 'Movilidad', description: 'Creemos que moverse por Europa debería estar al alcance de cualquier joven gallego, tenga o no dinero para pagárselo.' },
    { _type: 'valueItem', _key: 'value-2', icon: '🤝', title: 'Cooperación', description: 'Trabajamos con organizaciones de toda Europa que comparten la misma manera de hacer las cosas: sin prisa, con seguimiento real.' },
    { _type: 'valueItem', _key: 'value-3', icon: '🗳️', title: 'Democracia', description: 'Fomentamos que los jóvenes participen activamente en las decisiones que les afectan, dentro y fuera de la asociación.' },
    { _type: 'valueItem', _key: 'value-4', icon: '🌍', title: 'Tolerancia', description: 'Cada intercambio y cada voluntariado es una excusa para desmontar prejuicios, empezando por los nuestros.' },
    { _type: 'valueItem', _key: 'value-5', icon: '💚', title: 'Salud', description: 'Cuidamos el bienestar de quien se va y de quien llega — el acompañamiento no termina cuando sube al avión.' },
    { _type: 'valueItem', _key: 'value-6', icon: '🌿', title: 'Ecología', description: 'Priorizamos el tren cuando es posible y elegimos proyectos que dejan huella positiva en el sitio que los acoge.' },
  ],
  equipoIntro: { _type: 'sectionIntro', eyebrow: 'Quién está detrás', heading: 'El equipo ahora mismo.' },
  teamMembers: [
    { _type: 'teamMember', _key: 'member-1', name: 'Fran Sequeiro', role: 'Coordinación', linkUrl: 'https://linkedin.com/in/fransequeiro' },
    { _type: 'teamMember', _key: 'member-2', name: 'Amélie Arles', role: 'Voluntaria · Francia' },
    { _type: 'teamMember', _key: 'member-3', name: 'Caitlin Wessels', role: 'Voluntaria · Países Bajos' },
    { _type: 'teamMember', _key: 'member-4', name: 'Marie Salaün', role: 'Voluntaria · Francia' },
  ],
  volunteersNumber: '60+',
  volunteersSubtitle: 'voluntarios europeos de más de 20 países han pasado por Xeración desde 2013.',
  volunteersCtaLabel: 'Quiero ser el próximo →',
  volunteersCtaUrl: '/irse/',
  iniciativasIntro: { _type: 'sectionIntro', eyebrow: 'Más allá del voluntariado', heading: 'Tres proyectos propios.' },
  iniciativas: [
    { _type: 'initiative', _key: 'initiative-1', icon: '🏡', name: 'Das Nest', description: 'Nuestro espacio de alojamiento para voluntariado en Ferrol, pensado y gestionado por quienes ya pasaron por aquí.', colorScheme: 'blue' },
    { _type: 'initiative', _key: 'initiative-2', icon: '🌿', name: 'Building Nature', description: 'Proyectos de voluntariado ambiental en la ría de Ferrol: limpiezas de costa, reforestación, sensibilización.', colorScheme: 'green' },
    { _type: 'initiative', _key: 'initiative-3', icon: '🎤', name: 'Speak Factor', description: 'Talleres y clubs de idiomas abiertos a toda la comarca, llevados por nuestros propios voluntarios internacionales.', colorScheme: 'orange' },
  ],
  partnersIntro: { _type: 'sectionIntro', eyebrow: 'Con quién trabajamos' },
  partners: ['ERASMUS+', 'Cuerpo Europeo de Solidaridad', 'Eurodesk', 'Xunta de Galicia', 'Concello de Ferrol', 'Google for Nonprofits'],
  closingHeading: '¿Listo para vivir tu aventura europea?',
  closingText: 'Todas nuestras oportunidades están financiadas. El único requisito es querer.',
})

doc('testimonial-tasos', 'testimonial', {
  quote: 'Vine a Ferrol sin conocer a nadie. Salí con una segunda familia repartida por media Europa.',
  name: 'Tasos Batzonis',
  originCity: 'Grecia',
  program: 'ESC',
  language: 'es',
  displaySize: 'mediano',
  route: 'sobre-nos',
})
doc('testimonial-martina', 'testimonial', {
  quote: 'Pensé que sería solo un año raro en mi carrera. Fue el año que más aprendí de mí misma.',
  name: 'Martina Aramini',
  originCity: 'Italia',
  program: 'ESC',
  language: 'es',
  displaySize: 'mediano',
  route: 'sobre-nos',
})
doc('testimonial-linda', 'testimonial', {
  quote: 'Nadie me avisó de que echaría tanto de menos la lluvia de Ferrol al volver a casa.',
  name: 'Linda Pūdāne',
  originCity: 'Letonia',
  program: 'ESC',
  language: 'es',
  displaySize: 'mediano',
  route: 'sobre-nos',
})

// --- Eventos (route: ferrol) -------------------------------------------
doc('event-ferrol-offline-club-1', 'event', {
  title: 'Offline Club',
  dateTime: '2026-08-04T20:00:00.000Z',
  location: 'Planta baja',
  description: 'Dos horas sin móvil con gente nueva. Trae un libro, un cuaderno o nada.',
  featured: true,
  route: 'ferrol',
})
doc('event-ferrol-english-club-1', 'event', {
  title: 'English club',
  dateTime: '2026-08-05T19:00:00.000Z',
  location: 'Sala 2',
  description: 'Miércoles 19:00. Conversación real, sin profe.',
  featured: false,
  route: 'ferrol',
})
doc('event-ferrol-taller-curriculum', 'event', {
  title: 'Taller de currículum europeo',
  dateTime: '2026-08-06T18:00:00.000Z',
  location: 'Sala baja',
  description: 'Cómo hacer currículum europeo, cartas de motivación, entrevistas.',
  featured: false,
  route: 'ferrol',
})
doc('event-ferrol-conciertazo', 'event', {
  title: 'Conciertazo · djams (concierto de Pantasmata)',
  dateTime: '2026-08-08T22:00:00.000Z',
  location: 'Almendra 9',
  description: 'Sábados noche cuando toca. Grupos locales. Esta vez toca Pantasmata.',
  featured: false,
  route: 'ferrol',
})
doc('event-ferrol-offline-club-2', 'event', {
  title: 'Offline Club',
  dateTime: '2026-08-11T20:00:00.000Z',
  location: 'Planta baja',
  description: 'Dos horas sin móvil con gente nueva. Trae un libro, un cuaderno o nada.',
  featured: false,
  route: 'ferrol',
})
doc('event-ferrol-english-club-2', 'event', {
  title: 'English club',
  dateTime: '2026-08-12T19:00:00.000Z',
  location: 'Sala 2',
  description: 'Miércoles 19:00. Conversación real, sin profe.',
  featured: false,
  route: 'ferrol',
})

// --- Programas fijos (route: ferrol) ------------------------------------
doc('fixedProgram-offline-club', 'fixedProgram', {
  name: 'Offline Club',
  schedule: 'Martes 20:00',
  description: 'Dos horas sin móvil con gente nueva.',
  route: 'ferrol',
})
doc('fixedProgram-english-club', 'fixedProgram', {
  name: 'English club',
  schedule: 'Miércoles 19:00',
  description: 'Conversación real, sin profe.',
  route: 'ferrol',
})
doc('fixedProgram-talleres-erasmus', 'fixedProgram', {
  name: 'Talleres Erasmus+',
  description: 'Cómo hacer currículum europeo, cartas de motivación, entrevistas.',
  route: 'ferrol',
})
doc('fixedProgram-conciertazo', 'fixedProgram', {
  name: 'Conciertazo · djams',
  schedule: 'Sábados noche cuando toca',
  description: 'Grupos locales.',
  route: 'ferrol',
})

// --- Testimonios ---------------------------------------------------------
doc('testimonial-nicolas', 'testimonial', {
  quote:
    'Llegué a Cracovia sin saber polaco. Volví con currículum, novia y una idea clara de a qué quiero dedicarme.',
  name: 'Nicolás',
  originCity: 'Ferrol',
  destinationCity: 'Cracovia',
  program: 'CES',
  year: 2024,
  language: 'es',
  displaySize: 'grande',
  route: 'irse',
})
doc('testimonial-amelie', 'testimonial', {
  quote: 'I came to Ferrol for six months. I stayed almost a year. The sea, the food, the people.',
  name: 'Amélie',
  originCity: 'Lyon',
  destinationCity: 'Ferrol',
  program: 'ESC',
  year: 2023,
  language: 'en',
  displaySize: 'mediano',
  route: 'en',
})
doc('testimonial-sara', 'testimonial', {
  quote: 'Fui a un YE de 10 días sobre cambio climático y me quedé enganchada. Ya llevo tres.',
  name: 'Sara',
  originCity: 'A Coruña',
  destinationCity: 'Sofía',
  program: 'YE',
  year: 2023,
  language: 'es',
  displaySize: 'mediano',
  route: 'irse',
})
doc('testimonial-marcos', 'testimonial', {
  quote: 'El CES me pagó Alemania un año. Ahora curro allí.',
  name: 'Marcos',
  originCity: 'Vigo',
  destinationCity: 'Leipzig',
  program: 'CES',
  year: 2022,
  language: 'es',
  displaySize: 'mediano',
  route: 'irse',
})
doc('testimonial-kamilla', 'testimonial', {
  quote: "Ferrol is small, but you feel like you're at the edge of Europe. It changed how I think about work.",
  name: 'Kamilla',
  originCity: 'Warsaw',
  destinationCity: 'Ferrol',
  program: 'ESC',
  year: 2022,
  language: 'en',
  displaySize: 'mediano',
  route: 'en',
})
doc('testimonial-jonas', 'testimonial', {
  quote: 'Best decision of my gap year. I still miss the empanada.',
  name: 'Jonas',
  originCity: 'Berlin',
  destinationCity: 'Ferrol',
  program: 'ESC',
  year: 2024,
  language: 'en',
  displaySize: 'mediano',
  route: 'en',
})

// --- Programas de movilidad ------------------------------------------------
doc('mobilityProgram-ces-esc', 'mobilityProgram', {
  name: 'Voluntariado Europeo (CES/ESC)',
  duration: '2 a 12 meses',
  idealFor: 'Quieres una experiencia larga, con impacto social, sin necesidad de estudios previos.',
  covers: 'Alojamiento, comida, transporte, seguro, dinero de bolsillo semanal, curso de idioma online.',
  ctaLabel: 'Ver proyectos abiertos',
  ctaUrl: '/irse/#proyectos',
  route: 'irse',
})
doc('mobilityProgram-erasmus-ye', 'mobilityProgram', {
  name: 'Intercambios juveniles (Erasmus+ YE)',
  duration: '5 a 21 días',
  idealFor: 'Quieres probar una experiencia corta e intensa, conocer gente de otros países, trabajar un tema concreto.',
  covers: 'Viaje, alojamiento y comida.',
  ctaLabel: 'Ver próximos intercambios',
  ctaUrl: '/irse/#intercambios',
  route: 'irse',
})
doc('mobilityProgram-tc', 'mobilityProgram', {
  name: 'Cursos de formación (TC)',
  duration: '5 a 10 días',
  idealFor: 'Trabajas o quieres trabajar en juventud y buscas formación europea.',
  covers: 'Viaje, alojamiento, comida y formación.',
  ctaLabel: 'Ver próximos cursos',
  ctaUrl: '/irse/#cursos',
  route: 'irse',
})
doc('mobilityProgram-esc-volunteering-en', 'mobilityProgram', {
  name: 'ESC volunteering',
  duration: '2 to 12 months',
  idealFor:
    'Support local youth activities, help run our English club, contribute to environmental or cultural projects, learn Spanish on the way.',
  covers: 'Accommodation, food allowance, local transport, insurance, weekly pocket money, online language course.',
  ctaLabel: 'See open ESC projects',
  ctaUrl: '/en/#volunteering',
  route: 'en',
})
doc('mobilityProgram-erasmus-traineeship-en', 'mobilityProgram', {
  name: 'Erasmus+ traineeship',
  duration: '2 to 6 months',
  idealFor: 'Structured internship with our team. Communication, project management, event coordination, or digital content.',
  covers: 'Erasmus+ grant from your home university.',
  ctaLabel: 'Enquire about traineeships',
  ctaUrl: 'mailto:info@xeracion.org',
  route: 'en',
})

// --- Preguntas frecuentes (route: ferrol, con respuesta) -----------------
const ferrolFaqs: Array<[string, string]> = [
  ['¿Cuánto cuesta apuntarse?', 'Nada. Casi todas las actividades son gratuitas. Algunas requieren inscripción por aforo.'],
  ['¿Hay que ser de Xeración?', 'No. Ven cuando quieras. Si te gusta y quieres implicarte, luego hablamos.'],
  ['¿Qué edad hay que tener?', 'Entre 14 y 30. La mayoría de la peña que viene tiene 18-25.'],
  ['¿Puedo proponer una actividad?', 'Sí. Pásate un martes por Offline Club y coméntalo, o escríbenos por Instagram.'],
]
ferrolFaqs.forEach(([question, answer], i) => {
  doc(`faq-ferrol-${i + 1}`, 'faq', { question, answer, route: 'ferrol', order: i + 1 })
})

// --- Preguntas frecuentes (route: irse) -----------------------------------
const irseFaqs: Array<[string, string]> = [
  [
    '¿Tengo que hablar inglés?',
    'Ayuda, pero no es obligatorio. Muchos proyectos funcionan con un inglés básico, y antes de irte tienes acceso a un curso de idioma online gratuito. Cuanto menos nivel tengas, más te ayudamos a elegir un proyecto donde puedas defenderte sin agobios.',
  ],
  [
    '¿Cuánto dinero de bolsillo recibiré?',
    'En los voluntariados largos (CES/ESC) recibes una cantidad semanal que fija la Comisión Europea según el país de destino, además de tener alojamiento, comida y transporte ya cubiertos. En los intercambios cortos (YE) no hay dinero de bolsillo porque todos los gastos del programa están pagados de antemano.',
  ],
  [
    '¿Hay que ser universitario?',
    'No, ni falta que hace. Lo único que pedimos es tener entre 18 y 30 años (algunos intercambios aceptan desde los 16) y ganas de embarcarte en esto.',
  ],
  [
    '¿Qué países puedo elegir?',
    'Cualquier país que participe en Erasmus+: toda la Unión Europea más varios países asociados. Te proponemos los proyectos abiertos que encajen con lo que buscas — la lista cambia cada mes, así que cuanto antes te apuntes antes te llamamos.',
  ],
  [
    '¿Y si no me gusta el proyecto una vez allí?',
    'Nos lo cuentas y hablamos con la organización de acogida. Muchas veces se puede ajustar la tarea o el alojamiento; si de verdad no funciona, estudiamos contigo un cambio de proyecto o la vuelta anticipada. No te dejamos solo con el problema.',
  ],
  [
    '¿Puedo irme con mi pareja?',
    'Puedes proponerlo, pero cada proyecto tiene sus propias plazas y organización de acogida, así que no siempre es posible coincidir en el mismo destino. Te lo decimos claro desde la primera llamada para que no haya sorpresas.',
  ],
  [
    '¿Cómo funciona el seguro médico?',
    'Todos los voluntariados CES/ESC llevan un seguro médico específico incluido que cubre toda tu estancia. Para los intercambios cortos (YE) basta con llevar la Tarjeta Sanitaria Europea.',
  ],
  [
    '¿Qué diferencia hay entre CES, Erasmus+ y prácticas Erasmus?',
    'El CES (Cuerpo Europeo de Solidaridad) es un voluntariado de 2 a 12 meses pensado para aportar algo a la comunidad de acogida. Los intercambios Erasmus+ (YE) son estancias cortas, de una a tres semanas, centradas en un tema concreto y con un grupo. Las prácticas Erasmus son para estudiantes en empresas u organizaciones y las gestiona tu universidad o centro de estudios, no nosotros directamente.',
  ],
]
irseFaqs.forEach(([question, answer], i) => {
  doc(`faq-irse-${i + 1}`, 'faq', { question, answer, route: 'irse', order: i + 1 })
})

// --- Preguntas frecuentes (route: en) -------------------------------------
const enFaqs: Array<[string, string]> = [
  [
    'Do I need to speak Spanish?',
    "No. English is fine when you arrive. We also give you access to a free online Spanish/Galician course before and during your stay, so you'll pick up the basics fast.",
  ],
  [
    'How much pocket money will I get?',
    "It's a weekly amount set by the European Commission based on the cost of living in Spain, on top of your accommodation, food allowance and local transport already being covered.",
  ],
  [
    'Can I bring a partner?',
    "You can ask, but placements depend on the host organisation and how many spots they have, so we can't always guarantee the same project for both of you. We'll be upfront about it from the first call.",
  ],
  [
    'What kind of accommodation do you offer?',
    "A shared flat in central Ferrol with other volunteers, with rent, bills and wifi included. You'll have your own room.",
  ],
  [
    'How do I find a sending organisation in my country?',
    "If you don't have one yet, we can point you towards partner organisations we've worked with before, or you can search the official European Solidarity Corps portal. Either way, we help with the paperwork.",
  ],
  [
    "What if the project doesn't work for me once I'm here?",
    "Talk to us straight away — we check in with you regularly during your stay. If something's really not working, we look at adjusting the role or, as a last resort, finding another placement.",
  ],
]
enFaqs.forEach(([question, answer], i) => {
  doc(`faq-en-${i + 1}`, 'faq', { question, answer, route: 'en', order: i + 1 })
})

async function run() {
  console.log(`Sembrando ${docs.length} documentos en ${dataset}...`)
  const tx = docs.reduce((t, d) => t.createOrReplace(d), client.transaction())
  await tx.commit()
  console.log('Listo.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
