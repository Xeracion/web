import type { Faq, StatItem } from '../types'

// /alma-spain/: oferta de acogida para coordinadores de proyectos ALMA
// (Aim, Learn, Master, Achieve, FSE+). Para posicionar en «ALMA Spain»,
// «ALMA host organisation», «hosting organisation internships»…
// Datos sacados de la ficha «ALMA Host Organisation Profile Form» (agosto de
// 2026) y de «Xeracion description 2026», en el Drive de Xeración. Nada de
// precios ni de nombres de socios: las tarifas se mandan a quien las pide.
// Cifras que no cuadraban entre documentos (nº de pisos, habitantes) se han
// dejado fuera.

export const pageAlmaEn = {
  metaTitle: 'ALMA host organisation in Spain · Internships for young people in Galicia',
  metaDescription:
    'Hosting organisation for ALMA projects in Ferrol, Spain: internships in over 50 local companies, accommodation, mentoring, Spanish lessons and reporting for 2 to 6 month placements.',
  heroHeading: 'ALMA in Spain: we host your young people in Ferrol and find them a real place to work.',
  heroText: [
    'Are you coordinating an ALMA project and looking for a host organisation in Spain? We take care of everything that happens on this side: the internship, the flat, the mentor, the Spanish lessons and the paperwork your project has to report.',
    'We have been hosting young Europeans in Ferrol, on the Atlantic coast of Galicia, since 2013, and we are registered as a host organisation in the ALMA partner search database.',
  ],
  heroImage: '/img/fotos/mentores-puente.webp',
  heroImageAlt: 'A group of young people from Xeración sitting on a wooden footbridge over a river in Galicia',
  heroCtaLabel: 'I want to talk about my ALMA project',
  mailSubject: 'ALMA project · hosting in Ferrol',

  facts: [
    { label: 'Where', value: 'Ferrol · Galicia (Spain)' },
    { label: 'Placement length', value: '2 to 6 months' },
    { label: 'Group size', value: '8 to 9 per cohort' },
    { label: 'Our role', value: 'Host organisation' },
  ] satisfies StatItem[],

  whyHeading: 'What ALMA asks of a host partner is what we already do.',
  whyText:
    'ALMA gives young people who are not working or studying a supervised stay in another EU country. That only works if the host is more than a landlord. These are the pieces we deliver as standard.',
  why: [
    {
      title: 'Long placements',
      text: 'Our usual offer already covers stays of two to six months, the ALMA range, rather than short study visits. Our preferred format is 90 days.',
    },
    {
      title: 'Young people who need close support',
      text: 'Our work has always focused on young people with fewer opportunities, and our mentoring is built for participants who need someone close, not for autonomous students.',
    },
    {
      title: 'One team for everything',
      text: 'Internship, accommodation, mentoring, language and social life are handled by the same people. That is what keeps young people on track over a long stay.',
    },
    {
      title: 'Reporting you can hand in',
      text: 'We work every day with EU programme rules: learning agreements, attendance records, evaluation, visibility and audits.',
    },
  ],

  supportHeading: 'Everything your participants need on this side.',
  support: [
    {
      title: 'The internship',
      items: [
        'We find and match placements in our network of over 50 local companies in 12 sectors.',
        'We agree tasks, working hours and learning goals with each company before the participant arrives.',
        'We go with each participant on their first day to check that the placement matches what was agreed.',
        'We keep in regular contact with the company supervisor and follow up attendance throughout the stay.',
        'Final evaluation and a certificate of participation at the end.',
      ],
    },
    {
      title: 'Living in Ferrol',
      items: [
        'Our own fully equipped flats in the city centre, with shared rooms, a kitchen, bed linen, utilities and cleaning.',
        'Meals or a food allowance, as agreed with the sending organisation.',
        'Pick-up and drop-off at A Coruña or Santiago de Compostela airport.',
        'Local bus passes and access to the municipal bike system.',
        'Help with registration, insurance and local paperwork on arrival.',
      ],
    },
    {
      title: 'Mentoring and safety',
      items: [
        'A named mentor for every cohort, introduced before the mobility starts.',
        'A welcome session on safety and local rules in the first days.',
        'A 24/7 emergency phone line staffed by our coordination team.',
        'Early mediation if something goes wrong, and written incident reports shared with you.',
      ],
    },
    {
      title: 'Language and social life',
      items: [
        'Spanish lessons for every level, with professional teachers, adapted to the length of the stay.',
        'Excursions around Galicia with local guides: the coast, its cities and natural areas.',
        'A place in the activities we run all year at the Casa da Xuventude, the Ferrol Youth House, alongside local young people.',
      ],
    },
  ],

  sectorsHeading: 'Where your participants can work.',
  sectorsText:
    'From family businesses in the old town to larger employers in the area. We match each young person to a placement that fits their profile and level, in Ferrol and the towns around it.',
  sectors: [
    'Hospitality and tourism',
    'Cookery, catering and bakery',
    'Retail and customer service',
    'Administration and office support',
    'Commerce and marketing',
    'Social and community services',
    'Arts, culture and creative work',
    'Digital skills and IT',
    'Green economy and agri-food',
    'Crafts, carpentry and furniture',
    'Car bodywork and mechanics',
    'Hairdressing and beauty',
  ],

  coordinatorsHeading: 'Made easy for you as coordinator.',
  coordinatorsText:
    'Most ALMA calls ask the host organisation for the same documents and the same proof. We already have them ready.',
  coordinators: [
    {
      title: 'Before the application',
      items: [
        'An online meeting to look at your call, your target group and your dates.',
        'A signed cooperation agreement with your organisation.',
        'A host declaration on our legal establishment and accreditations.',
        'Proof of legal registration, statutes, accreditations and our project portfolio.',
        'A fee schedule and a preliminary offer per participant and per cohort, ready for your budget.',
      ],
    },
    {
      title: 'During the mobility',
      items: [
        'Online preparation meetings with you and your participants before they travel.',
        'Monthly progress reports in the format you need.',
        'Attendance records, timesheets and confirmations from each company.',
        'Mentoring summaries and proof of the language and cultural activities.',
      ],
    },
    {
      title: 'After the mobility',
      items: [
        'Participant evaluation forms and certificates.',
        'A final cohort report.',
        'Photos and visibility materials, where participants agree.',
        'Full cooperation with any checks or audits of your project.',
      ],
    },
  ],

  placeHeading: 'Why Ferrol works for a long stay.',
  placeText: [
    'Ferrol is a compact, walkable city on the north-west coast of Spain: everything is within a 20-minute walk. Life here is much cheaper than in Madrid or Barcelona, which makes long placements viable within ESF+ unit costs and keeps participants close to a normal working life.',
    'The local economy mixes the naval and industrial base, public services, commerce, tourism and hospitality, with a growing technology sector. Beaches and protected natural areas are a short trip away.',
    'A Coruña airport is about 50 km away and Santiago de Compostela airport about an hour by road.',
  ],

  trackHeading: 'Our track record.',
  figures: [
    { value: '2013', label: 'the year we started working in youth mobility' },
    { value: '2015', label: 'accredited to host European volunteers ever since' },
    { value: '+120', label: 'international volunteers hosted in Ferrol' },
    { value: '+50', label: 'local companies in our placement network' },
    { value: '+20', label: 'European projects coordinated' },
    { value: '+50', label: 'European projects as a partner' },
  ] satisfies StatItem[],
  internshipsLinkLabel: 'Internships in Spain for schools and universities',
  trackText:
    'We have hosted young people from France, Italy, Germany, Poland, Slovakia, Portugal, the Netherlands, Türkiye and Romania, on volunteering placements of 2 to 12 months and on vocational internships for European schools. Our experience with young people with fewer opportunities comes from Erasmus+ and the European Solidarity Corps, which require the same way of working that ALMA does.',

  conditionsHeading: 'Good to know before you plan.',
  conditions: [
    'Cohorts of 8 to 9 participants. We can accommodate up to 12 at the same time, so cohorts should not overlap. Larger flows are possible with more lead time.',
    'Our preferred length is 90 days. Shorter flows of two to three months are also possible.',
    'Dates should be agreed at least three months in advance. July and August are more limited.',
    'Participants need a basic level of English or Spanish. We give language support from the first week.',
    'Participants travel with their European Health Insurance Card and the insurance provided by the sending organisation.',
    'Pocket money is managed by the sending organisation. Placements are practical learning placements, not employment contracts, formalised in writing with each company.',
  ],

  faqHeading: 'Questions from ALMA coordinators.',
  faqs: [
    {
      question: 'What is ALMA?',
      answer:
        'ALMA (Aim, Learn, Master, Achieve) is an EU initiative funded by the European Social Fund Plus (ESF+). It helps young people aged 18 to 29 who are not in employment, education or training (NEET) with a supervised stay of two to six months in another EU country, usually including an internship, before and after which they are supported in their home country.',
    },
    {
      question: 'Are you an ALMA host organisation in Spain?',
      answer:
        'Yes. Xeración is a non-profit youth organisation in Ferrol, Galicia, registered as a host organisation in the ALMA partner search database. We act as the hosting organisation (also written “host organization”) for the stay in Spain: internships, accommodation, mentoring, language and reporting.',
    },
    {
      question: 'Can you sign the cooperation agreement and the host declaration?',
      answer:
        'Yes. We can sign a cooperation agreement with your sending organisation and a declaration confirming our legal establishment and accreditations, and send proof of registration, statutes and our portfolio for your application.',
    },
    {
      question: 'What kind of internships can you offer?',
      answer:
        'Practical learning placements in over 50 local companies in 12 sectors, including hospitality and tourism, catering, retail, administration, social services, culture, digital skills, the green economy, crafts and car mechanics. We match each participant to a placement that fits their profile and level.',
    },
    {
      question: 'How many participants can you host, and for how long?',
      answer:
        'Cohorts of 8 to 9 participants, with up to 12 in our accommodation at the same time. Stays from two to six months; our preferred format is 90 days.',
    },
    {
      question: 'What is included in your hosting package?',
      answer:
        'Placement finding and tutoring, accommodation in our flats, meals or a food allowance, airport transfers, local transport, Spanish lessons, cultural activities, a named mentor, a 24/7 emergency line, monitoring, evaluation, certificates and reporting.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'We send a fee schedule and a preliminary offer per participant and per cohort, built to fit the unit costs of your ESF+ budget. Write to us with your dates and the number of participants.',
    },
    {
      question: 'Do participants need to speak Spanish?',
      answer:
        'No. A basic level of English or Spanish is enough. We give Spanish lessons from the first week, adapted to each level.',
    },
    {
      question: 'Can you also host other internships in Spain?',
      answer:
        'Yes. We also host Erasmus+ internships for vocational schools and universities, and European Solidarity Corps volunteers. Our internships in Spain page has the details.',
    },
  ] satisfies Faq[],

  closingHeading: 'Shall we plan your ALMA cohort?',
  closingText: 'Tell us about your call, your dates and how many young people you want to send. We will reply with a proposal and the documents you need.',
}
