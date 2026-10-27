import type { Faq, SectionIntro } from './types'

// Transferido de xeracion.org/empresas/ (y los sectores de /internships/).
export const pageEmpresasEs = {
  eyebrow: 'Para empresas',
  heading: 'Acoge en tu empresa a gente de otros países.',
  intro:
    'Te ayudamos a encontrar a la persona de fuera que mejor encaja con tu equipo. Sin coste de gestión.',
  whyIntro: { eyebrow: 'Por qué hacerlo', heading: 'Un equipo más abierto y más europeo.' } satisfies SectionIntro,
  whyText: [
    'Acoger a alguien en prácticas que viene de otro país es una gran oportunidad para crear un ambiente de trabajo más cosmopolita e innovador. Podrás plantear proyectos con dimensión europea y enriquecer vuestra manera de trabajar con el intercambio cultural que trae alguien de fuera.',
    'Ya colaboramos con **más de 50 empresas**, desde negocios familiares hasta multinacionales: turismo y hostelería, administración, comercio y marketing, peluquería y estética, panadería, cocina, academias de idiomas, inmobiliarias, informática, carpintería y talleres de automoción.',
  ],
  weHandleHeading: 'Nos ocupamos de',
  weHandle: [
    'Buscar las entidades europeas que envían a los participantes',
    'Redactar todos los informes necesarios',
    'Seleccionar y entrevistar a los candidatos',
    'Buscar y contratar el alojamiento',
    'Contratar un seguro de accidentes laborales',
    'La formación a la llegada',
    'El seguimiento durante todo el proyecto',
  ],
  youHandleHeading: 'Lo que te toca a ti',
  youHandle: [
    'Diseñar un plan de trabajo acorde con lo que la persona necesita aprender',
    'Dar trabajo efectivo durante toda la jornada acordada (entre 30 y 40 horas semanales)',
    'Poner los medios para que trabaje de forma segura',
    'Nombrar a un tutor o tutora que coordine y acompañe el aprendizaje',
    'Evaluar su desempeño al final',
  ],
  faqIntro: { eyebrow: 'Más información', heading: 'Lo que más nos preguntan.' } satisfies SectionIntro,
  closingHeading: '¿Hablamos?',
  closingText: 'Registra tu empresa y te contamos los siguientes pasos.',
  closingCtaLabel: 'Quiero registrar mi empresa',
  closingCtaHref: 'https://xeracion.typeform.com/empresas',
  closingEmailLabel: 'Prefiero escribir un correo',
}

export const empresasFaqsEs: Faq[] = [
  {
    question: '¿Cuánto cuesta acoger a alguien en prácticas?',
    answer: 'Nada, 0 euros. No te cobramos un solo céntimo por nuestro trabajo de gestión.',
  },
  {
    question: '¿Qué tipo de empresas pueden participar?',
    answer:
      'Cualquiera, desde pymes hasta multinacionales, y de cualquier sector: trabajamos con perfiles muy variados. Lo importante es tener una actitud abierta y alguna persona de referencia que hable inglés.',
  },
  {
    question: 'Si tengo más dudas, ¿a quién escribo?',
    answer: 'A info@xeracion.org. Te respondemos personalmente.',
  },
]
