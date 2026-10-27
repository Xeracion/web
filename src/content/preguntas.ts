import type { Faq, SectionIntro } from './types'

// Transferido de xeracion.org/condiciones-erasmus/, /voluntariado-europeo/ y
// /cursos/, reorganizado por temas.
export const pagePreguntasEs = {
  eyebrow: 'Preguntas frecuentes',
  heading: 'Todo lo que te preguntas antes de irte.',
  intro:
    'Igual es tu primera vez y te ha llamado la atención eso de viajar por Europa sin pagarlo de tu bolsillo. Si es así, sigue leyendo: aquí aclaramos unas cuantas cosillas.',
  closingHeading: '¿Te queda alguna duda?',
  closingText: 'Escríbenos por WhatsApp o pásate cualquier tarde por la Almendra 9.',
  closingCtaLabel: 'Quiero ver las experiencias',
  closingWhatsappLabel: 'Prefiero preguntar por WhatsApp',
}

export interface FaqGroup {
  intro: SectionIntro
  items: Faq[]
}

export const preguntasGroupsEs: FaqGroup[] = [
  {
    intro: { eyebrow: 'Lo básico', heading: 'Antes de nada.' },
    items: [
      {
        question: '¿Esto de qué va?',
        answer: [
          'Hace unos años en la Comisión Europea pensaron que estaría muy bien que la gente joven saliera a otros países a aprender, hacer amigos e intercambiar experiencias. Y como sabían que para la chavalada la pasta siempre es un problema, montaron programas que cubren los gastos.',
          'Así puedes hacer amigos eslovacos o sacar adelante un proyecto con gente de Irlanda **sin arruinarte por el camino**.',
        ],
      },
      {
        question: 'Si voy de intercambio, ¿luego tengo que acoger a alguien en mi casa?',
        answer:
          'No, si no quieres. «Intercambio» no significa que si vas a Italia después los italianos vengan aquí. Va de intercambiar experiencias durante el proyecto.',
      },
      {
        question: '¿Qué diferencia hay entre un intercambio juvenil y un curso de formación?',
        answer: [
          'Un **intercambio juvenil** es para cualquier joven menor de 30 años: grupos de dos o más países conviven alrededor de un tema concreto. Viene bien saber inglés, pero siempre vas con un líder de grupo español, así que no hace falta un nivel fluido.',
          'Un **curso de formación** es un proyecto formativo para gente con más experiencia en el trabajo con jóvenes. El perfil es más profesional y los contenidos más especializados, así que un nivel alto de inglés es imprescindible.',
        ],
      },
      {
        question: '¿Qué gano con un curso de formación?',
        answer: [
          'Son aventuras de una semana más o menos en las que conoces gente de otras culturas, aprendes algo concreto que te interesa, lo pones en práctica en un contexto internacional y ganas autonomía para moverte por el mundo.',
          'Y están pensados para que nadie se quede fuera por lo que tenga en la cuenta corriente: todos nuestros proyectos tienen ayuda para el viaje, el alojamiento y la comida. ¡Canela en rama!',
        ],
      },
    ],
  },
  {
    intro: { eyebrow: 'Voluntariado largo', heading: 'Irte unos meses fuera.' },
    items: [
      {
        question: '¿Quién puede apuntarse?',
        answer: [
          'Necesitas tener entre 18 y 30 años, poder comunicarte en inglés y registrarte en la base de datos del Cuerpo Europeo de Solidaridad, en el Portal Europeo de la Juventud.',
          'Imagínate irte unos meses a otro país, trabajar en algo que te apasiona, aprender un idioma nuevo y hacer amigos de todo el mundo. Y todo **sin gastar un céntimo**.',
        ],
      },
      {
        question: '¿Cuánto tiempo dura un voluntariado?',
        answer: 'Depende del proyecto, pero el mínimo son 2 meses y el máximo 12.',
      },
      {
        question: '¿Recibo algún tipo de apoyo?',
        answer:
          'Irse a vivir fuera no es ninguna broma, así que te acompañamos en todo momento. Tendrás dos tutores (uno en la asociación de acogida y otro en Xeración), un curso de idiomas para desenvolverte en la lengua del país y encuentros gratuitos al principio y a mitad del proyecto para resolver dudas y conocer a otros voluntarios.',
      },
      {
        question: '¿Qué tipo de tareas tendría que hacer?',
        answer:
          'Hay muchísimas: desde enseñar idiomas a niños hasta cuidar animales en un refugio. Siempre se detallan en el acuerdo de actividades que firmas antes de empezar. Tu jornada no puede pasar de 35 horas semanales y también puedes desarrollar tus propios proyectos con el apoyo de la asociación de acogida.',
      },
      {
        question: '¿En qué países se puede hacer?',
        answer:
          'En cualquier país de la Unión Europea y en los vecinos: Europa del Este, los Balcanes y la cuenca del Mediterráneo. Se puede hacer en otro continente, pero las condiciones son tan complicadas que te recomendamos buscar algo más cerca.',
      },
      {
        question: '¿Qué gastos tengo cubiertos?',
        answer:
          'Alojamiento (en piso o en residencia), comida (con cheques restaurante o dinero extra), seguro de salud y accidentes, transporte local, un viaje de ida y vuelta (con ciertos límites) y entre 70 y 150 euros al mes para tus gastos personales.',
      },
    ],
  },
  {
    intro: { eyebrow: 'Selección', heading: 'Cómo elegimos a quién va.' },
    items: [
      {
        question: '¿Necesito algún título para participar?',
        answer:
          'Olvídate de la titulitis. Pedimos motivación de verdad, ganas de trabajar en el proyecto y, a veces, algo de experiencia en voluntariado. Nos da igual si eres ingeniera o si no acabaste la ESO: el currículum académico no te define como persona.',
      },
      {
        question: '¿Qué pasa si tengo menos de 18 años?',
        answer:
          'Por las condiciones que nos pone la ley, enviar a menores de edad a proyectos internacionales es un follón del quince. Así que por ahora solo te podemos ofrecer nuestras actividades locales en Ferrol.',
      },
      {
        question: '¿En qué os basáis para seleccionar?',
        answer:
          'En una mezcla de cosas. Las personas socias de Xeración tienen prioridad, pero el perfil y la motivación también cuentan: si el proyecto es medioambiental y no te gusta caminar por el monte, no vas a sumar muchos puntos. Y el orden de llegada importa, sobre todo en las plazas de última hora, donde buscamos gente que pueda confirmar al momento.',
      },
      {
        question: 'Me han seleccionado, ¿y ahora qué?',
        answer:
          'Te mandamos la información detallada del proyecto (normalmente un infopack). Si hay más participantes de aquí, os juntamos en un grupo de WhatsApp y os damos instrucciones para comprar los billetes e intentar que viajéis juntos.',
      },
    ],
  },
  {
    intro: { eyebrow: 'El viaje', heading: 'Billetes, fechas y aeropuertos.' },
    items: [
      {
        question: '¿Quién paga mis billetes?',
        answer:
          'Los compras tú y luego se te reembolsan. Guarda todos los tickets: al terminar el proyecto son los documentos con los que se calcula el reembolso.',
      },
      {
        question: 'El límite de reembolso es 275 € y mis billetes cuestan 300 €. ¿Me los cubrís enteros?',
        answer:
          'Por desgracia no. El límite es el coste máximo aprobado para el proyecto, así que lo que pase de ahí corre de tu cuenta.',
      },
      {
        question: '¿Puedo viajar en otras fechas si encuentro billetes más baratos?',
        answer: [
          'Ir a un proyecto te compromete a estar de principio a fin. Salvo causa de fuerza mayor (y que se te muera el perro no cuenta), no se puede llegar tarde ni irse antes de la última sesión: los proyectos son un itinerario y si te saltas una parte acabas perdido.',
          'Lo que sí puedes es llegar antes o irte después: tienes hasta 2 días de margen, a repartir entre la ida y la vuelta. Aprovéchalos para hacer turismo, pero esos días extra los pagas tú.',
        ],
      },
      {
        question: '¿Habrá alguien esperándome en el aeropuerto?',
        answer:
          'Depende del proyecto y de lo enrollada que sea la organización. Lo normal es que llegues por tu cuenta al alojamiento; en el infopack te lo explican todo.',
      },
      {
        question: '¿Puedo ir en coche o coger un taxi?',
        answer:
          'Solo se reembolsa el medio de transporte más económico para llegar (nada de clase business), así que ir en coche al extranjero o hacer parte del viaje en taxi no está permitido. Si es tu única opción, por ejemplo para pillar el primer vuelo de la mañana, coméntalo con la organización a ver qué se puede hacer.',
      },
    ],
  },
  {
    intro: { eyebrow: 'Otras dudas', heading: 'Lo que nadie te cuenta.' },
    items: [
      {
        question: '¿Tengo que hacerme un seguro médico?',
        answer:
          'Asegurarte una buena cobertura médica es cosa de cada participante. Dentro de la Unión Europea, con la Tarjeta Sanitaria Europea vas más que cubierto. Con el Carné Joven también tienes un seguro internacional (de reembolso). Si no tienes nada de eso, te recomendamos un seguro de viaje privado.',
      },
      {
        question: 'He oído hablar de la «noche intercultural». ¿Qué es?',
        answer:
          'Una tradición de los proyectos internacionales: cada país presenta comidas, bebidas, bailes y canciones típicas. Lleva algo de comer o beber de donde vives y prepara una forma divertida (nada de powerpoints) de contar tradiciones, curiosidades o historia de aquí.',
      },
    ],
  },
]
