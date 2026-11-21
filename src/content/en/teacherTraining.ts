import type { TeacherCourse, TeacherTrainingContent, TeacherTrainingUi } from '../teacherTraining/types'
import { TEACHER_TRAINING_PATHS } from '../teacherTraining/paths'

// Cursos para personal educativo europeo con beca Erasmus+ KA1 (/teacher-training/).
// Fuente: «Cursos KA1 de Xeración: diseño de los tres primeros» (5 de noviembre
// de 2026). Todo dato nuevo (fechas, precios, formadores, sede) sale de ese
// documento; lo que allí está pendiente (bios de formadores, accesibilidad de
// la sede, precio del alojamiento, condiciones de cancelación) no se publica.
// Las versiones en alemán, neerlandés y francés (src/content/teacherTraining/)
// traducen este archivo: cualquier cambio de datos hay que llevarlo a las cuatro.

const PATHS = TEACHER_TRAINING_PATHS.en

export const teacherCourses: TeacherCourse[] = [
  {
    id: 'camino',
    slug: PATHS.camino,
    name: 'Walking classroom: outdoor learning on the English Way',
    summary:
      'Seven days walking from Ferrol to Santiago de Compostela. Each stage is a lesson in outdoor learning that you take home ready to use.',
    metaTitle: 'Outdoor learning course for teachers on the Camino de Santiago · Erasmus+ KA1',
    metaDescription:
      'Seven day Erasmus+ KA1 course for teachers on the English Way, from Ferrol to Santiago de Compostela. Six outdoor learning techniques and a field trip for your school. 560 € course fee.',
    heroHeading: 'Walking classroom: learn to teach outdoors while you walk the English Way to Santiago.',
    heroText: [
      'What if your next training course had no classroom at all? For seven days you will walk the English Way from the port of Ferrol to Santiago de Compostela, about 115 km through estuaries, medieval towns and Atlantic forest. Each stage is a lesson. You will try six outdoor learning techniques as a learner first, then turn them into a field trip designed for your own students.',
      'You will walk with a small group of teachers from across Europe, guided by a team that has run international learning programmes in this region for more than ten years. You go home with a ready-to-use outdoor lesson plan, a method to assess learning outside the classroom, and colleagues to build your next Erasmus+ project with.',
    ],
    heroImage: '/img/proyectos/yeah/ruta-playa.webp',
    heroImageAlt: 'A group on a wooden boardwalk by a beach listening to a guide',
    days: 7,
    fee: 560,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Monday 12 to Sunday 18 July 2027',
    shortDates: '12 to 18 July 2027',
    startDate: '2027-07-12',
    endDate: '2027-07-18',
    place: 'Ferrol to Santiago de Compostela, Galicia',
    audience: [
      'Primary, secondary and adult education teachers of any subject',
      'School counsellors',
      'VET teachers of tourism',
    ],
    requirements:
      'You need to be able to walk between 15 and 25 km a day. A support vehicle follows every stage. Working language: English (B1 or higher).',
    trainers:
      'Led by Fran Sequeiro. When the group includes tourism teachers, Pam Guerrero joins with a block on the Camino as a tourism product and a teaching resource.',
    outcomes: [
      'Six outdoor learning techniques, tried first hand',
      'A field trip designed for your own school and reviewed by colleagues',
      'A learning journal and a plan to share it with your staff',
      'Contacts in other countries for future projects',
    ],
    programmeNote: 'Distances are approximate.',
    programmeColumns: ['Stage', 'Topic', 'Closing session'],
    programme: [
      { day: 1, place: 'Ferrol. Morning workshop, then Ferrol to Neda in the afternoon (15 km)', focus: 'Why learn outside the classroom: evidence, safety and group management', then: 'Learning contract and personal journal' },
      { day: 2, place: 'Neda to Pontedeume (16 km)', focus: 'The landscape as a text: reading the territory and place-based learning', then: 'Sharing sensory maps' },
      { day: 3, place: 'Pontedeume to Betanzos (20 km)', focus: 'Walking seminar: debate and critical thinking on the move', then: 'Designing a guiding question for each subject' },
      { day: 4, place: 'Betanzos to Hospital de Bruma (25 km)', focus: 'Challenge, effort and wellbeing: silent walking and listening pairs', then: 'Reflection circle' },
      { day: 5, place: 'Hospital de Bruma to Sigüeiro (24 km)', focus: 'Assessing what happens outside: evidence, rubrics and portfolio', then: 'First draft of your own field trip' },
      { day: 6, place: 'Sigüeiro to Santiago (16 km). Afternoon workshop', focus: 'Inclusion: adapting a field trip to different abilities and budgets', then: 'Peer review of the drafts' },
      { day: 7, place: 'Santiago de Compostela', focus: 'From the Camino to your school: transfer plan, risks and permissions', then: 'Presentations, evaluation and certificates' },
    ],
    method:
      'Every morning the technique of the day is introduced in 20 minutes, practised while walking and analysed on arrival. Before the course there is an online session and a short reading, and one month later a follow-up session.',
    includes:
      'Training, materials, pilgrim credential, support vehicle, online sessions and certificate. Accommodation, meals and luggage transfer are not included.',
    faqs: [
      {
        question: 'How fit do I need to be?',
        answer:
          'Stages are between 15 and 25 km. You need to be able to walk that distance on consecutive days at a gentle pace. A support vehicle follows every stage, so nobody is left behind.',
      },
      {
        question: 'Where do we sleep along the way?',
        answer:
          'Accommodation is not part of the course fee: it is paid with the individual support of your grant. We send you a list of recommended places to stay at each stage. Luggage transfer can be booked with a local operator.',
      },
      {
        question: 'Can I combine it with the forest course?',
        answer:
          'Yes. The environmental education course runs the week before, from 5 to 9 July 2027, so you can do both in a row.',
      },
    ],
  },
  {
    id: 'forest',
    slug: PATHS.forest,
    name: 'Bringing the forest back: hands-on environmental education',
    summary:
      'Five days between Ferrol, the Fragas do Eume and A Capela to turn the restoration of a forest into a project for your school.',
    metaTitle: 'Environmental education course for teachers in Spain · Erasmus+ KA1',
    metaDescription:
      'Five day Erasmus+ KA1 course in Galicia: read an old-growth Atlantic forest, spend a day restoring one and design a rewilding project for your school. 400 € course fee.',
    heroHeading: 'Bringing the forest back: turn the restoration of a forest into a project for your school.',
    heroText: [
      'Galicia has lost much of its native Atlantic forest to eucalyptus plantations. A growing movement of volunteers is bringing it back, plot by plot. This course puts you inside that work. You will read an old-growth forest in the Fragas do Eume, one of the best preserved Atlantic coastal forests in Europe, and then spend a day restoring one: pulling eucalyptus, planting oak, birch and chestnut.',
      'Back in the workshop you will turn that experience into a project for your own school or centre: a micro-forest, a pollinator garden or an adopted plot, with a simple method to monitor it with your students over the year. No botany background needed.',
    ],
    heroImage: '/img/proyectos/restaurando-la-naturaleza/plantando-arboles.webp',
    heroImageAlt: 'Two people digging to plant a young tree on cleared coastal land',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 16,
    datesLabel: 'Monday 5 to Friday 9 July 2027',
    shortDates: '5 to 9 July 2027',
    startDate: '2027-07-05',
    endDate: '2027-07-09',
    place: 'Ferrol, Fragas do Eume and A Capela, Galicia',
    audience: [
      'Science and geography teachers',
      'VET teachers of agriculture, forestry and environment',
      'Adult educators and staff of environmental organisations',
    ],
    requirements: 'No previous knowledge of botany needed. Working language: English.',
    trainers: 'Led by Fran Sequeiro, with the Stop Eucalipto team on the restoration day.',
    outcomes: [
      'A biodiversity survey method you can use with students and a phone',
      'First-hand experience of a restoration day with native species',
      'A rewilding project for your school: a micro-forest, a pollinator garden or an adopted plot',
      'A plan to measure results over the school year',
    ],
    programmeColumns: ['Place', 'Morning', 'Afternoon'],
    programme: [
      { day: 1, place: 'Ferrol', focus: 'The Atlantic forest and the spread of eucalyptus in Galicia. The European framework for learning for sustainability', then: 'Urban walk: reading nature in the city. Presentation of the participating schools' },
      { day: 2, place: 'Fragas do Eume', focus: 'How to read an old-growth forest: layers, indicator species, soil and water', then: 'Fieldwork: transects and a biodiversity survey with citizen science apps' },
      { day: 3, place: 'A Capela', focus: 'Restoration day: removing young eucalyptus and planting native species', then: 'Tree nursery and seed collection' },
      { day: 4, place: 'Ferrol', focus: 'From the field to the classroom: designing a school rewilding project and fitting it into the curriculum', then: 'Monitoring workshop: indicators, repeat photography, involving families and the local council' },
      { day: 5, place: 'Ferrol', focus: 'Project presentations and peer review', then: 'Transfer plan, options for European cooperation, evaluation and certificates' },
    ],
    method:
      'Two days in the field and three in the workshop. Before the course each participant sends photos and a plan of their school, which become the basis of their project. There is an online follow-up session three months later.',
    includes:
      'Training, materials, tools and gloves, transport to the field trips, online follow-up and certificate. Accommodation and meals are not included.',
    faqs: [
      {
        question: 'Do I need to know about plants or forestry?',
        answer: 'No. The course starts from scratch and is designed for teachers of any background who want to work outdoors with their students.',
      },
      {
        question: 'What should I bring?',
        answer:
          'Clothes and boots for working outdoors, and photos and a plan of your school before the course starts. Tools, gloves and transport to the field are included.',
      },
      {
        question: 'Can I combine it with the Camino course?',
        answer:
          'Yes. The Walking classroom course starts the following Monday, from 12 to 18 July 2027, so you can do both in a row.',
      },
    ],
  },
  {
    id: 'ai',
    slug: PATHS.ai,
    name: 'Erasmus+ without the paperwork: AI and digital tools for project coordinators',
    summary:
      'Five days in Ferrol to leave with your own project management system set up and working: budget, receipts, reports and AI.',
    metaTitle: 'AI and digital tools course for Erasmus+ coordinators · KA1 course in Spain',
    metaDescription:
      'Five day Erasmus+ KA1 course in Ferrol for project coordinators: budget tracking, receipts and reimbursements, AI for applications and reports, and data protection. 400 € course fee.',
    heroHeading: 'Less paperwork, more project: build your own management system in five days.',
    heroText: [
      'If you coordinate Erasmus+ projects, you know the real work happens in spreadsheets, receipts and reports, usually late at night. This course is run by a team that has managed European projects for more than ten years and got tired of doing it by hand. We built our own tools. In five days we show you how, and you build yours.',
      'Bring your own project. By Friday you will have a budget tracker that matches your grant, a workflow that turns a photo of a train ticket into a line in your accounts, and tested AI prompts for applications, learning agreements and final reports. No coding required, and a clear guide to using AI without putting participant data at risk.',
    ],
    heroImage: '/img/en/oficina-equipo.webp',
    heroImageAlt: 'The Xeración team working on their laptops in the office',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Monday 18 to Friday 22 October 2027',
    shortDates: '18 to 22 October 2027',
    startDate: '2027-10-18',
    endDate: '2027-10-22',
    place: 'Ferrol, Galicia',
    audience: [
      'Erasmus+ coordinators in schools, VET and adult education',
      'School leadership teams',
      'Administrative staff',
    ],
    requirements:
      'Bring your own laptop and basic spreadsheet skills. No coding needed. Working language: English.',
    trainers: 'Led by Fran Sequeiro, who developed the management tools Xeración uses every day.',
    outcomes: [
      'A map of your workflow showing where you lose the most hours',
      'A budget tracker adapted to the unit costs of your project',
      'A receipts and reimbursements workflow with automatic document reading',
      'Templates and guidelines to write applications, agreements and reports with AI',
      'Clear data protection criteria for using these tools',
    ],
    programmeColumns: ['Theme', 'Morning', 'Afternoon'],
    programme: [
      { day: 1, place: 'Where the time goes', focus: 'The life cycle of a KA1 and KA2 project from the management side', then: 'Each participant maps their current workflow and chooses what to solve during the week' },
      { day: 2, place: 'Budget', focus: 'Budget and control: unit costs, tracking per participant, cash flow forecast', then: 'Workshop: building the tracker with the data of your own project' },
      { day: 3, place: 'Receipts', focus: 'Receipts and reimbursements: from the photo of a ticket to the spreadsheet. A demo of the Xeración tools', then: 'Workshop: your own document collection and review workflow. Data protection and the limits of AI' },
      { day: 4, place: 'Writing', focus: 'Writing better and faster with AI: applications, learning agreements, final reports and dissemination', then: 'Workshop: automating a full process, from the registration form to the final document' },
      { day: 5, place: 'Your system', focus: 'Presentation of the systems built and peer review', then: 'Implementation plan for your organisation, keeping track of calls, evaluation and certificates' },
    ],
    method:
      'You always work on your real project, so bring your budget and templates. There is an online session beforehand to prepare your data and a follow-up session six weeks later.',
    includes:
      'Training, templates and guides, online sessions and certificate. Licences for paid tools are not included: the course can be followed with free versions.',
    faqs: [
      {
        question: 'Do I need to know how to code?',
        answer: 'No. You need a laptop and basic spreadsheet skills. Everything is built with tools you can use without programming.',
      },
      {
        question: 'Do I have to pay for software?',
        answer: 'No. Paid licences are not included in the fee, and the whole course can be followed with free versions of the tools.',
      },
      {
        question: 'What about participant data?',
        answer:
          'Data protection is part of the programme: you leave with clear criteria on what you can and cannot put into AI tools, and how to keep personal data safe.',
      },
    ],
  },
]

export const pageTeacherTrainingEn: TeacherTrainingContent['hub'] = {
  metaTitle: 'Erasmus+ KA1 courses for teachers in Spain · Galicia',
  metaDescription:
    'Erasmus+ KA1 structured courses for teachers and school staff in Ferrol, Galicia: outdoor learning on the Camino de Santiago, environmental education and AI tools for coordinators.',
  heroHeading: 'Courses for teachers in Galicia that your grant can pay for in full.',
  heroText: [
    'Three short courses for teachers, trainers and school staff from across Europe, designed so that the Erasmus+ KA1 course fee covers them completely: 80 € per day, with no extra cost for your school.',
    'They are built on what we have been doing in Ferrol since 2013: learning outdoors, restoring nature and running European projects.',
  ],
  heroImage: '/img/proyectos/x-team/sesion-formacion.webp',
  heroImageAlt: 'A group sitting in a room following a projected presentation',
  coursesHeading: 'Three courses for 2027.',
  coursesText: 'Small groups that always mix at least two countries. Teaching in English.',
  fundingHeading: 'How the grant covers it.',
  fundingText: [
    'A KA1 grant has three separate parts. The course fee is 80 € per participant and day of course, up to 800 €. Our fee is exactly that, so your school does not add any money of its own.',
    'Accommodation and meals are paid with the individual support of the grant, a separate daily amount. Travel has its own fixed amount, based on distance.',
  ],
  fundingFacts: [
    { label: 'Course fee', value: '80 € per day' },
    { label: 'Duration', value: '5 or 7 days' },
    { label: 'Group', value: '8 to 16 people' },
    { label: 'Language', value: 'English' },
  ],
  stepsHeading: 'From the first email to the certificate.',
  steps: [
    { title: 'Pre-register', text: 'Write to us. Pre-registration is free and does not commit your school.' },
    { title: 'Apply', text: 'We send you the course sheet with objectives and learning outcomes, our OID and a pre-registration letter for your application.' },
    { title: 'Confirm', text: 'Once the grant is approved, you confirm the places and we invoice your school, which is the grant holder.' },
    { title: 'Learn and certify', text: 'We sign your learning agreement and, at the end, you receive a certificate of attendance and support with Europass Mobility.' },
  ],
  extrasHeading: 'Good to know.',
  shadowingHeading: 'Add a week of job shadowing.',
  shadowingText:
    'If you want to combine a course with job shadowing, we can organise observation visits to schools and organisations in Ferrolterra. It is an optional extra, with its own price.',
  stayHeading: 'Staying in Ferrol.',
  stayText:
    'Accommodation is never part of the course fee. If you want, we can help you find a place to stay in Ferrol, at a separate price. On the Camino course you receive a list of recommended places to stay at each stage.',
  trainersHeading: 'Who teaches.',
  trainersText:
    'The courses are led by Fran Sequeiro, coordinator of Xeración, a team that has run international learning programmes in Galicia since 2013. Pam Guerrero joins the Camino course when the group includes tourism teachers.',
  trainersLinkLabel: 'Meet the team',
  faqHeading: 'Questions from coordinators.',
  faqs: [
    {
      question: 'Is the course fee fully covered by Erasmus+?',
      answer:
        'Yes. Erasmus+ KA1 pays 80 € per participant and day of course, up to 800 € per person. Our fees are 400 € for the five day courses and 560 € for the seven day course, exactly what the grant covers.',
    },
    {
      question: 'Who can join?',
      answer:
        'Teachers and staff from schools, vocational education and training and adult education with a KA1 grant, either through an accredited organisation (KA121) or a short-term project (KA122).',
    },
    {
      question: 'Do I need to name the course in my application?',
      answer:
        'It is not compulsory, but it helps. We send you the course sheet with objectives and learning outcomes and a pre-registration letter that you can attach.',
    },
    {
      question: 'Who do you invoice?',
      answer: 'The sending school or organisation, which receives the grant. Accommodation, if you book it with us, is invoiced separately.',
    },
    {
      question: 'Will there be teachers from other countries?',
      answer: 'Yes. Every group mixes at least two countries, so you meet colleagues from elsewhere in Europe.',
    },
    {
      question: 'Do I get a certificate?',
      answer:
        'Yes. A certificate with the course name, description, learning outcomes, dates, venue and trainers, and support to complete your Europass Mobility.',
    },
    {
      question: 'Where are the courses held?',
      answer:
        'In Ferrol, Galicia, with field days in the Fragas do Eume natural park and A Capela. The Camino course walks from Ferrol to Santiago de Compostela. A Coruña airport is 50 km away, and Santiago de Compostela is an hour’s drive.',
    },
  ],
  closingHeading: 'Shall we save you a place?',
  closingText: 'Tell us which course, how many people and when you plan to travel. We answer personally.',
  ctaLabel: 'I want to pre-register',
  ctaDetailsLabel: 'See the courses',
}

const uiEn: TeacherTrainingUi = {
  breadcrumb: 'Teacher training',
  seeProgramme: 'See the programme',
  seeProgrammeArrow: 'See the programme →',
  essentials: 'The essentials.',
  costTag: 'Fully fundable with Erasmus+ KA1',
  feeSentence: (fee, days) => `${fee} € course fee for ${days} days, the exact amount the grant pays.`,
  factDates: 'Dates',
  factDuration: 'Duration',
  factFee: 'Course fee',
  factGroup: 'Group',
  factPlace: 'Place',
  days: (n) => `${n} days`,
  group: (min, max) => `${min} to ${max} people`,
  whoFor: 'Who it is for.',
  takeHome: 'What you take home.',
  dayByDay: 'Day by day.',
  day: 'Day',
  feeCovers: 'What the fee covers.',
  included: 'Included',
  whoTeaches: 'Who teaches',
  addShadowing: 'Add job shadowing',
  beforeBook: 'Before you book.',
  otherCourses: 'Other courses.',
  howItWorks: 'How funding and booking work →',
  photo: 'photo',
  emailSubjectHub: 'Teacher training courses in Ferrol',
  emailSubjectCourse: 'Pre-registration',
}

export const teacherTrainingEn: TeacherTrainingContent = {
  lang: 'en',
  ogLocale: 'en_GB',
  basePath: PATHS.base,
  hub: pageTeacherTrainingEn,
  ui: uiEn,
  courses: teacherCourses,
}
