import type { EquipoGroup } from '../equipo'
import { equipoGroupsOriginal } from '../equipo'
import type { StatItem, Testimonial } from '../types'
import { archivo, pageNosotrosEs } from '../nosotros'

// Versión en inglés: solo lo que interesa a socios, instituciones y
// voluntarios europeos. Tres páginas: /en/ (quiénes somos para socios),
// /volunteering/ e /internships/ (estas dos en su URL del WordPress, por SEO).
// Los textos salen de las páginas inglesas del WordPress (Volunteering,
// actualizada en agosto de 2026, e Internships), de /empresas/ y de los
// datos de /nosotros/. Nada inventado: lo que cambia con el tiempo (nº de
// pisos, idiomas del equipo, años de experiencia) se ha dejado fuera.

export const pageHomeEn = {
  heroHeading: 'We are Xeración, a youth organisation in Ferrol that hosts and sends young Europeans.',
  heroText:
    'Since 2013 we have been organising volunteering, youth exchanges, training courses and internships, and running projects our community needed. Non-profit, based at the Casa da Xuventude in Ferrol, on the Atlantic coast of Galicia (Spain).',
  heroImage: '/img/fotos/equipo-casa-xuventude.webp',
  heroImageAlt: 'The Xeración team and volunteers at the Casa da Xuventude in Ferrol',
  heroPrimaryLabel: 'I want to work with you',
  heroSecondaryLabel: 'I want to volunteer in Ferrol',
  figuresHeading: 'A small team with a long track record.',
  figures: [
    { value: '2013', label: 'the year we started' },
    { value: '+120', label: 'international volunteers hosted' },
    { value: '+50', label: 'young people sent to projects abroad' },
    { value: '57', label: 'members' },
    { value: String(archivo.proyectos), label: `projects in our archive since ${archivo.desde}` },
    { value: `+${archivo.participantes}`, label: `participants from ${archivo.paises} countries in those projects` },
  ] satisfies StatItem[],
  whatHeading: 'What we can do together.',
  what: [
    {
      title: 'Host European volunteers',
      text: 'Long and short-term European Solidarity Corps volunteering in Ferrol, with flats, mentoring and a team of volunteers from all over Europe.',
      ctaLabel: 'Volunteering at Xeración',
      href: '/volunteering/',
    },
    {
      title: 'Exchanges and training courses',
      text: 'We design and host Erasmus+ youth exchanges and training courses in Galicia, and send groups to our partners’ projects.',
      ctaLabel: 'See our past projects',
      href: '/en/#projects',
    },
    {
      title: 'Host interns in Spain',
      text: 'We find placements in local companies for your participants and support them before, during and after the mobility.',
      ctaLabel: 'Internships in Ferrol',
      href: '/internships/',
    },
    {
      title: 'Projects for our community',
      text: 'Liña, Cousateca, Stop Eucalipto and Retake: initiatives we started in Ferrol because they were missing.',
      ctaLabel: 'Retake, our environmental volunteering',
      href: 'https://retake.es',
    },
  ],
  teamHeading: 'The people behind Xeración.',
  teamText:
    'Since 2013, more than 120 people from more than 15 countries have made Xeración what it is. Every year new people from all over Europe settle in Ferrol, fill the Casa da Xuventude with ideas and turn them into plans for young people here.',
  projectsHeading: 'Projects we have already done.',
  projectsText: 'Exchanges, training courses, volunteering teams and local projects since 2016. Each project page is in Spanish, with dates, partners, photos and videos.',
  partnerHeading: 'Partner details.',
  partnerText: 'Everything you need to add us to an application.',
  legalName: pageNosotrosEs.legalName,
  oid: pageNosotrosEs.legalOid,
  pic: pageNosotrosEs.legalPic,
  vat: pageNosotrosEs.legalCif,
  address: pageNosotrosEs.legalAddress,
  accreditations: [
    'Erasmus+ accreditation (sending, hosting and coordination)',
    'European Solidarity Corps accreditation',
    'Member of the Eurodesk network',
  ],
  annualReportLabel: 'Annual report (in Spanish)',
  annualReportUrl: pageNosotrosEs.memoriaAnualUrl,
  closingHeading: 'Shall we work together?',
  closingText: 'Tell us about your project, your call or your group.',
  closingCtaLabel: 'I want to write to you',
}

/** Nombres de países que aparecen en el lugar de los proyectos, en inglés. */
const LUGAR_EN: Record<string, string> = {
  Marruecos: 'Morocco',
  Turquía: 'Turkey',
  Italia: 'Italy',
  Rumanía: 'Romania',
  Chequia: 'Czechia',
}

export function lugarEn(lugar: string): string {
  return lugar
    .split(' · ')
    .map((part) => LUGAR_EN[part] ?? part)
    .join(' · ')
}

/** Formato de cada proyecto del archivo, en inglés. */
export const FORMATO_EN: Record<string, string> = {
  'Intercambio juvenil': 'Youth exchange',
  'Curso de formación': 'Training course',
  'Voluntariado en equipo': 'Volunteering team',
  'Proyecto local': 'Local project',
  Evento: 'Event',
  'Proyecto de cooperación': 'Cooperation partnership',
}

export const pageVolunteeringEn = {
  heroHeading: 'Volunteering at Xeración: the adventure that will change your life.',
  heroText: [
    'Join Xeración through the European Solidarity Corps and help us with language workshops, cultural events, presentations and all the international projects we run in Ferrol.',
    'In return you get a full dive into Galician culture and the chance to boost your language, cultural and project management skills in real life. If you have ideas of your own, we will support you in making them happen.',
  ],
  heroImage: '/img/en/voluntarios-escaleras.webp',
  heroImageAlt: 'A big group of volunteers and young people sitting on the steps of a historic building in Ferrol',
  facts: [
    { label: 'Where', value: 'Ferrol · Galicia (Spain)' },
    { label: 'Programme', value: 'European Solidarity Corps' },
    { label: 'Duration', value: 'Short and long term' },
    { label: 'Cost', value: 'Fully covered' },
  ] satisfies StatItem[],
  rolesHeading: 'What you could be doing.',
  rolesText: 'The roles in our latest call. Each call is a bit different.',
  roles: [
    { title: 'Events host', text: 'You organise activities and creative workshops for the local community.' },
    { title: 'Fixer', text: 'You give a hand with recycling events (repair café), 3D printing and the renovation of our hostel.' },
    { title: 'Promo magician', text: 'You create the videos, reels and posts that let people know what we do.' },
  ],
  coveredHeading: 'Everything is covered.',
  covered: [
    'Accommodation, meals and travel costs, so you can focus on making a difference without worrying about money.',
    'Mentorship, training and a community of volunteers from all over Europe.',
    'A shared flat in the centre of Ferrol with other volunteers, in a single room or sharing with someone of the same gender.',
    'The office is a 7-minute walk from the flats, with supermarkets, bars and cafés nearby.',
  ],
  placeHeading: 'Where you will live.',
  placeText: [
    'The project takes place in Ferrol, a metropolitan area of almost 120,000 people in the northwest of Spain. The city is on the coast of Galicia, not far from A Coruña and Santiago de Compostela.',
  ],
  placeImage: '/img/en/voluntaria-canido.webp',
  placeImageAlt: 'A volunteer in a Xeración T-shirt smiling under the trees in a park in Ferrol',
  profileHeading: 'We are looking for someone…',
  profile: [
    'Between 18 and 30 years old',
    'Open-minded and creative',
    'A team player who is willing to learn',
    'Fluent in English (Spanish is a plus)',
    'Resident in the EU',
  ],
  voicesHeading: 'In their own words.',
  videoHeading: 'A day as a volunteer.',
  videoText: 'What a normal day looks like at Xeración, plus a monthly round-up of everything we do.',
  videos: [
    { id: 'fDJc3XRt66M', titulo: 'Volunteering at Xeracion · ESC Ferrol Spain' },
  ],
  playlistLabel: 'Monthly news playlist',
  playlistUrl: 'https://www.youtube.com/playlist?list=PLGqbOK8rCMslfWY5xzM69RktT35tGEXSr',
  callHeading: 'There is no open call right now.',
  callText:
    'Our latest call (three 10-month volunteers, October 2026 to August 2027) is already closed. New calls are published here and on the European Youth Portal.',
  callPrimaryLabel: 'Let me know about the next call',
  callWhatsappText: 'Hi! I would like to hear about your next European Solidarity Corps volunteering call.',
  callSecondaryLabel: 'European Youth Portal',
  callSecondaryUrl: 'https://youth.europa.eu/solidarity/young-people/volunteering_en',
}

// Citas literales de la página Volunteering del WordPress, ya publicadas con
// nombre y país.
export const volunteeringVoicesEn: Testimonial[] = [
  {
    quote: 'I’m so happy that I came to Ferrol. The coordinators of Xeración really support me in learning and creating new things. Coming here was the best decision I ever made!',
    name: 'Lieve Graas',
    originCity: 'The Netherlands',
  },
  {
    quote: 'I had the chance to work on what I wanted to do with help and guidance to realize it. […] It helped me explore a lot of new skills and direct my future interests within an environment that feels like it encourages you instead of limiting you in restrictive work.',
    name: 'Emmanuel Bakowski',
    originCity: 'Germany',
  },
  {
    quote: 'You get a lot of freedom to develop personally and professionally at Xeración. I learned so much about myself, other people but also work. I made many international friendships that mean a lot to me and I will keep for life!',
    name: 'Alizée Mayer',
    originCity: 'The Netherlands',
  },
]

export const pageInternshipsEn = {
  heroHeading: 'Internships in Spain: we are the hosting partner you were looking for.',
  heroText: [
    'Looking for an active and reliable hosting partner in Spain? We have been working with European mobility programmes since 2013 and we hold the Erasmus+ accreditation.',
    'We support your participants before, during and after the mobility, and we can also help you design the project and share its results.',
  ],
  heroImage: '/img/en/oficina-equipo.webp',
  heroImageAlt: 'The Xeración team working on their laptops in the office',
  placeHeading: 'A Spanish immersive experience.',
  placeText: [
    'We are based in Ferrol, on the northwest coast of Spain. Its friendly people and compact size make it a perfect place to dive into the Spanish lifestyle: everything you need is within a 20-minute walk.',
    'The city centre is full of buildings from the Enlightenment, and the outskirts have some of the wildest and most beautiful beaches in the country, a paradise for surfers. Thanks to the Atlantic, the climate is mild all year round.',
    'A Coruña and its airport are 50 km away, and Santiago de Compostela is an hour’s drive. Madrid is about five hours away by direct high-speed train, and Porto about five hours by bus.',
  ],
  sectorsHeading: 'Placements in over 50 companies.',
  sectorsText: 'From small family businesses to multinationals such as the Pull&Bear headquarters. We match each participant to a placement that fits their profile.',
  sectors: [
    'Tourism and hotels',
    'Administration and accounting',
    'Commerce and marketing',
    'Hairdressing and beauty',
    'Baking and cookery',
    'Language schools',
    'Real estate and international trade',
    'New technologies and IT',
    'Woodwork and furniture making',
    'Car bodywork and maintenance',
  ],
  supportHeading: 'Support from start to finish.',
  support: [
    {
      title: 'The internship',
      items: [
        'We propose host companies and handle the matching and communication with them.',
        'We go with the participant to the workplace on the first day and make sure tasks, goals and working hours match the agreed description.',
        'We keep in touch with the company and the participant throughout the internship.',
      ],
    },
    {
      title: 'Living in Ferrol',
      items: [
        'Fully equipped flats in the city centre, close to public transport, with private or shared rooms depending on the length of the stay.',
        'Guidance on visas, registration and health and travel insurance.',
        'A 24/7 emergency number for every participant.',
      ],
    },
    {
      title: 'Learning and wellbeing',
      items: [
        'Cultural preparation and help to set clear expectations.',
        'Active help in any crisis, from health emergencies to problems sharing a flat.',
        'Spanish or English lessons adapted to each level, and the Europass certificate at the end.',
      ],
    },
  ],
  cultureHeading: 'Life outside work.',
  cultureText:
    'We organise cultural trips around Galicia, work with local guides and schools on leisure plans such as surfing or hiking, and our international volunteers run free cultural events.',
  closingHeading: 'Shall we start working together?',
  closingText: 'Tell us about your group, the dates and the profiles of your participants.',
  closingCtaLabel: 'I want to send participants',
}

// Equipo en inglés: las mismas personas que /nosotros/equipo/ con sus
// presentaciones originales (las escribieron en inglés); se traducen los
// títulos de grupo y los cargos.
const GRUPOS_EN: Record<string, string> = {
  Coordinación: 'Coordination',
  'El equipo ahora mismo': 'The team right now',
  'Han estado con nosotros': 'They have been with us',
}

const CARGOS_EN: Record<string, string> = {
  Coordinación: 'Coordinator',
  'Asistente de proyectos': 'Project assistant',
  'Community manager': 'Community manager',
  'Directora creativa': 'Creative director',
  'Coordinador de eventos': 'Events coordinator',
  'Coordinadora de eventos': 'Events coordinator',
}

export const equipoGroupsEn: EquipoGroup[] = equipoGroupsOriginal.map((group) => ({
  ...group,
  heading: group.heading && (GRUPOS_EN[group.heading] ?? group.heading),
  members: group.members.map((member) => ({
    ...member,
    role: member.role && member.role.split(' · ').map((part) => CARGOS_EN[part] ?? part).join(' · '),
  })),
}))
