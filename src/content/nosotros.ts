import type {
  Initiative,
  Partner,
  SectionIntro,
  StatItem,
  TeamMember,
  Testimonial,
  TimelineMilestone,
  ValueItem,
} from './types'

const legalShared = {
  legalName: 'Asociación Xeración',
  legalCif: 'G70385091',
  legalAddress: 'Rúa Almendra 9, 15402 Ferrol',
  legalOid: 'E10060426',
  legalPic: '948920640',
  memoriaAnualUrl: undefined as string | undefined,
}

export const pageNosotrosEs = {
  heroEyebrow: 'Desde 2013 · Ferrol, Galicia',
  heroHeading: 'No somos una ONG más. Somos tu red en Europa.',
  heroHeadingAccent: 'tu red en Europa',
  heroText:
    'Somos jóvenes que ayudamos a otros jóvenes a vivir su aventura europea. Sin protocolo, sin papeleo interminable — con la experiencia de más de una década haciendo esto.',
  heroStats: [
    { value: '500+', label: 'jóvenes participantes' },
    { value: '13', label: 'años activos' },
    { value: '30+', label: 'países' },
  ] satisfies StatItem[],
  heroBackgroundImage: undefined as string | undefined,
  historiaIntro: { eyebrow: 'Nuestra historia', heading: 'De una idea en un bar a una red por toda Europa.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Xeración nació en 2013 en Ferrol, cuando un grupo de amigos volvió de sus propios voluntariados europeos y se dio cuenta de que en la ciudad no había forma fácil de repetir la experiencia — ni de traer a nadie de fuera.',
    'El problema era simple: la información sobre programas europeos existía, pero estaba dispersa, en inglés técnico, y sin nadie cercano que acompañara el proceso paso a paso. Decidimos ser esa persona cercana.',
    'Trece años después seguimos con la misma idea: quitar de en medio el papeleo y la incertidumbre para que decir «me voy» sea lo más fácil de todo el viaje.',
  ],
  timeline: [
    { year: '2013', title: 'Fundación', description: 'Un grupo de amigos en Ferrol decide montar Xeración.' },
    { year: '2015', title: 'Primeros voluntarios europeos', description: 'Llegan a Ferrol los primeros jóvenes de fuera acogidos por la asociación.' },
    { year: '2021', title: 'Acreditación CES', description: 'Xeración se acredita como organización de acogida y envío del Cuerpo Europeo de Solidaridad.' },
    { year: '2024', title: '500+ participantes', description: 'Superamos los 500 jóvenes que han pasado por algún programa de Xeración.' },
    { year: '2025', title: 'Apertura Das Nest', description: 'Abrimos Das Nest, nuestro primer espacio de alojamiento propio para voluntariado.' },
  ] satisfies TimelineMilestone[],
  valoresIntro: { eyebrow: 'Cómo trabajamos', heading: 'Seis ideas que no negociamos.' } satisfies SectionIntro,
  values: [
    { icon: '✈️', title: 'Movilidad', description: 'Creemos que moverse por Europa debería estar al alcance de cualquier joven gallego, tenga o no dinero para pagárselo.' },
    { icon: '🤝', title: 'Cooperación', description: 'Trabajamos con organizaciones de toda Europa que comparten la misma manera de hacer las cosas: sin prisa, con seguimiento real.' },
    { icon: '🗳️', title: 'Democracia', description: 'Fomentamos que los jóvenes participen activamente en las decisiones que les afectan, dentro y fuera de la asociación.' },
    { icon: '🌍', title: 'Tolerancia', description: 'Cada intercambio y cada voluntariado es una excusa para desmontar prejuicios, empezando por los nuestros.' },
    { icon: '💚', title: 'Salud', description: 'Cuidamos el bienestar de quien se va y de quien llega — el acompañamiento no termina cuando sube al avión.' },
    { icon: '🌿', title: 'Ecología', description: 'Priorizamos el tren cuando es posible y elegimos proyectos que dejan huella positiva en el sitio que los acoge.' },
  ] satisfies ValueItem[],
  equipoIntro: { eyebrow: 'Quién está detrás', heading: 'El equipo ahora mismo.' } satisfies SectionIntro,
  teamMembers: [
    { name: 'Fran Sequeiro', role: 'Coordinación', linkUrl: 'https://linkedin.com/in/fransequeiro' },
    { name: 'Amélie Arles', role: 'Voluntaria · Francia' },
    { name: 'Caitlin Wessels', role: 'Voluntaria · Países Bajos' },
    { name: 'Marie Salaün', role: 'Voluntaria · Francia' },
  ] satisfies TeamMember[],
  volunteersNumber: '60+',
  volunteersSubtitle: 'voluntarios europeos de más de 20 países han pasado por Xeración desde 2013.',
  volunteersCtaLabel: 'Quiero ser el próximo →',
  volunteersCtaUrl: '/experiencias/',
  pastVolunteersIntro: undefined as SectionIntro | undefined,
  pastVolunteers: [] as TeamMember[],
  iniciativasIntro: { eyebrow: 'Más allá del voluntariado', heading: 'Tres proyectos propios.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: 'Nuestro espacio de alojamiento para voluntariado en Ferrol, pensado y gestionado por quienes ya pasaron por aquí.', colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Proyectos de voluntariado ambiental en la ría de Ferrol: limpiezas de costa, reforestación, sensibilización.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Talleres y clubs de idiomas abiertos a toda la comarca, llevados por nuestros propios voluntarios internacionales.', colorScheme: 'orange' },
  ] satisfies Initiative[],
  partnersIntro: { eyebrow: 'Con quién trabajamos' } satisfies SectionIntro,
  partners: [
    { name: 'ERASMUS+' },
    { name: 'Cuerpo Europeo de Solidaridad' },
    { name: 'Eurodesk' },
    { name: 'Xunta de Galicia' },
    { name: 'Concello de Ferrol' },
    { name: 'Google for Nonprofits' },
  ] satisfies Partner[],
  ...legalShared,
  accreditations: [
    { name: 'Acreditación Erasmus+ (envío, acogida y coordinación)' },
    { name: 'Acreditación Cuerpo Europeo de Solidaridad' },
  ] satisfies Partner[],
  closingHeading: '¿Listo para vivir tu aventura europea?',
  closingText: 'Todas nuestras oportunidades están financiadas. El único requisito es querer.',
  closingCtaPrimaryHref: undefined as string | undefined,
}

export const pageNosotrosEnContent = {
  heroEyebrow: 'Since 2013 · Ferrol, Galicia',
  heroHeading: "We're not just another NGO. We're your network in Europe.",
  heroHeadingAccent: 'your network in Europe',
  heroText:
    "We're young people helping other young people live their European adventure. No red tape, no endless paperwork — with more than a decade of experience doing this.",
  heroStats: [
    { value: '500+', label: 'young participants' },
    { value: '13', label: 'years active' },
    { value: '30+', label: 'countries' },
  ] satisfies StatItem[],
  heroBackgroundImage: undefined as string | undefined,
  historiaIntro: { eyebrow: 'Our story', heading: 'From an idea in a bar to a network across Europe.' } satisfies SectionIntro,
  historiaParagraphs: [
    'Xeración was born in 2013 in Ferrol, when a group of friends came back from their own volunteering placements in Europe and realised there was no easy way to repeat the experience in their city — or to bring anyone over from abroad.',
    'The problem was simple: information about European programmes existed, but it was scattered, written in technical English, and there was no one nearby to walk you through the process step by step. We decided to be that person.',
    'Thirteen years later we’re still working from the same idea: clear the paperwork and uncertainty out of the way so that saying "I’m going" is the easiest part of the whole trip.',
  ],
  timeline: [
    { year: '2013', title: 'Founded', description: 'A group of friends in Ferrol decides to set up Xeración.' },
    { year: '2015', title: 'First European volunteers', description: 'The first young people from abroad arrive in Ferrol, hosted by the association.' },
    { year: '2021', title: 'ESC accreditation', description: 'Xeración becomes an accredited sending and hosting organisation for the European Solidarity Corps.' },
    { year: '2024', title: '500+ participants', description: "We pass the 500 mark for young people who've been through a Xeración programme." },
    { year: '2025', title: 'Das Nest opens', description: 'We open Das Nest, our first own accommodation space for volunteers.' },
  ] satisfies TimelineMilestone[],
  valoresIntro: { eyebrow: 'How we work', heading: "Six ideas we don't compromise on." } satisfies SectionIntro,
  values: [
    { icon: '✈️', title: 'Mobility', description: 'We believe moving around Europe should be within reach of any young Galician, whether or not they can afford it.' },
    { icon: '🤝', title: 'Cooperation', description: 'We work with organisations across Europe that share the same way of doing things: no rush, real follow-up.' },
    { icon: '🗳️', title: 'Democracy', description: 'We encourage young people to take an active part in the decisions that affect them, inside and outside the association.' },
    { icon: '🌍', title: 'Tolerance', description: 'Every exchange and every volunteering placement is a chance to break down prejudice, starting with our own.' },
    { icon: '💚', title: 'Health', description: 'We look after the wellbeing of the people who leave and the people who arrive — support does not stop once you board the plane.' },
    { icon: '🌿', title: 'Sustainability', description: 'We choose the train whenever we can, and pick projects that leave a positive mark on the place that hosts them.' },
  ] satisfies ValueItem[],
  equipoIntro: { eyebrow: 'Behind the scenes', heading: 'The team right now.' } satisfies SectionIntro,
  teamMembers: [
    { name: 'Fran Sequeiro', role: 'Coordination', linkUrl: 'https://linkedin.com/in/fransequeiro' },
    { name: 'Amélie Arles', role: 'Volunteer · France' },
    { name: 'Caitlin Wessels', role: 'Volunteer · Netherlands' },
    { name: 'Marie Salaün', role: 'Volunteer · France' },
  ] satisfies TeamMember[],
  volunteersNumber: '60+',
  volunteersSubtitle: 'European volunteers from more than 20 countries have been through Xeración since 2013.',
  volunteersCtaLabel: 'Want to be next? →',
  volunteersCtaUrl: '/volunteering/',
  pastVolunteersIntro: undefined as SectionIntro | undefined,
  pastVolunteers: [] as TeamMember[],
  iniciativasIntro: { eyebrow: 'Beyond volunteering', heading: 'Three of our own projects.' } satisfies SectionIntro,
  iniciativas: [
    { icon: '🏡', name: 'Das Nest', description: "Our volunteer accommodation space in Ferrol, designed and run by people who've been through the programme themselves.", colorScheme: 'blue' },
    { icon: '🌿', name: 'Building Nature', description: 'Environmental volunteering projects on the Ferrol estuary: coastal clean-ups, reforestation, awareness campaigns.', colorScheme: 'green' },
    { icon: '🎤', name: 'Speak Factor', description: 'Language workshops and clubs open to the whole area, run by our own international volunteers.', colorScheme: 'orange' },
  ] satisfies Initiative[],
  partnersIntro: { eyebrow: 'Who we work with' } satisfies SectionIntro,
  partners: [
    { name: 'ERASMUS+' },
    { name: 'European Solidarity Corps' },
    { name: 'Eurodesk' },
    { name: 'Xunta de Galicia' },
    { name: 'Concello de Ferrol' },
    { name: 'Google for Nonprofits' },
  ] satisfies Partner[],
  ...legalShared,
  accreditations: [
    { name: 'Erasmus+ accreditation (sending, hosting & coordinating)' },
    { name: 'European Solidarity Corps accreditation' },
  ] satisfies Partner[],
  closingHeading: 'Ready to live your European adventure?',
  closingText: 'All our opportunities are fully funded. The only requirement is wanting to.',
  closingCtaPrimaryHref: undefined as string | undefined,
}

export const nosotrosTestimonialsEs: Testimonial[] = [
  { quote: 'Vine a Ferrol sin conocer a nadie. Salí con una segunda familia repartida por media Europa.', name: 'Tasos Batzonis', originCity: 'Grecia', program: 'ESC' },
  { quote: 'Pensé que sería solo un año raro en mi carrera. Fue el año que más aprendí de mí misma.', name: 'Martina Aramini', originCity: 'Italia', program: 'ESC' },
  { quote: 'Nadie me avisó de que echaría tanto de menos la lluvia de Ferrol al volver a casa.', name: 'Linda Pūdāne', originCity: 'Letonia', program: 'ESC' },
]

export const nosotrosTestimonialsEn: Testimonial[] = [
  { quote: 'I came to Ferrol not knowing anyone. I left with a second family scattered across half of Europe.', name: 'Tasos Batzonis', originCity: 'Greece', program: 'ESC' },
  { quote: 'I thought it would just be an odd year in my career. It was the year I learned the most about myself.', name: 'Martina Aramini', originCity: 'Italy', program: 'ESC' },
  { quote: "No one warned me I'd miss Ferrol's rain so much once I got home.", name: 'Linda Pūdāne', originCity: 'Latvia', program: 'ESC' },
]
