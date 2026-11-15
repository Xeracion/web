import type { PaisanoBlock } from './types'

// Historias de voluntarios europeos publicadas en el blog del WordPress
// anterior (2017–2020). Se enlazan desde la sección «Testimonios» de
// /nosotros/ y conservan su URL de siempre (/una-turca-en-ferrol/…), ver
// src/app/(info)/[historia]/. El texto es literal, como en Paisanos: son
// palabras de otras personas y no se reescriben ni se ajustan al tono del
// sitio. De las entradas bilingües se publica la parte en castellano.

export interface Historia {
  slug: string
  /** Título original de la entrada. */
  titulo: string
  name: string
  country?: string
  anio: number
  /** Fecha de publicación original (AAAA-MM-DD). */
  fecha: string
  /** Entradilla propia, solo con datos que están en el texto. */
  lead: string
  /** Idioma del texto si no es castellano. */
  lang?: string
  image?: string
  imageAlt?: string
  gallery?: { src: string; alt: string }[]
  body: PaisanoBlock[]
}

export const testimoniosIntroEs = {
  heading: 'Testimonios.',
  text: 'Lo que contaron en el blog algunas de las personas que vinieron a Ferrol de voluntariado, con sus palabras.',
}

export const historiasEs: Historia[] = [
  {
    slug: "una-polaca-en-tierras-gallegas",
    titulo: "Una polaca en tierras gallegas",
    name: "Kamila",
    country: "Polonia",
    anio: 2019,
    fecha: "2019-03-26",
    lead: "Kamila llegó de Polonia a Ferrol el 7 de marzo de 2019 con el Servicio Voluntario Europeo. Así fueron sus dos primeras semanas.",
    image: "/img/historias/kamila-manifestacion.webp",
    imageAlt: "Kamila sonríe con gafas de sol sujetando una pancarta que dice «Actúa ahora» en una manifestación",
    body: [
      { type: "p", text: "¡Hola! Mi nombre es Kamila y soy de Polonia. El 7 de marzo comencé mi aventura EVS en Ferrol." },
      { type: "p", text: "Antes de venir aquí, no sabía nada de Ferrol. Tuve que buscar este lugar en el mapa y prepararme para un largo viaje desde Polonia a España. Tuve una muy buena sensación sobre esta experiencia y mi intuición no me engañó." },
      { type: "p", text: "Al principio pensé que Ferrol es una ciudad pequeña. Después de unos días noté que no es tan pequeño. Quiero decir, necesitaba un tiempo para recordar cómo debo ir de mi apartamento a la oficina. ¡Pero después de dos semanas, estoy mejor y mejor!" },
      { type: "p", text: "Tuve una cena de bienvenida muy tranquila con personal, voluntarios y amigos de Xeracion. Desde el principio me sentí muy bien en mi nuevo equipo y no podía esperar para comenzar esta aventura. El 8 de marzo fue mi primer día en la oficina. Compartí mis miedos, expectativas y planes y también dediqué tiempo a conocer mejor los objetivos de la organización. Después de eso, participé en una manifestación con motivo del Día Internacional de la Mujer. Fue una experiencia increíble para mí, porque nunca participé antes en un evento de este estilo. Durante estas dos semanas tuve la oportunidad de participar en Speak Factor (talleres de oratoria), Language Exchange (reunión cada jueves para practicar las habilidades del idioma) y Global Climate Strake. Descubrí unas cascadas impresionantes en una excursión y comí una tortilla española. También empecé un curso de español y espero que mi español mejore pronto. 🙂" },
      { type: "p", text: "Todos los días hago muchas cosas y puedo decir: ¡Nunca me he aburrido en esta ciudad! Fueron solo dos semanas, pero estoy seguro de que mi experiencia EVS será increíble." },
      { type: "p", text: "Ferrol mola;)" },
    ],
  },
  {
    slug: "stories-of-ferrol",
    titulo: "A day in the social kitchen of Ferrol",
    name: "Un voluntario de Xeración",
    anio: 2020,
    fecha: "2020-01-31",
    lead: "Un voluntario europeo pasó un día entero en la Cocina Económica de Ferrol antes de terminar su voluntariado, en enero de 2020, y lo contó en inglés.",
    lang: "en",
    image: "/img/historias/cocina-economica.webp",
    imageAlt: "Fachada naranja de la Cocina Económica de Ferrol en la calle Rubalcava",
    body: [
      { type: "heading", text: "A volunteer discovers the life of the Ferrolanos" },
      { type: "p", text: "Every day I passed the beautiful little orange building on the right side of the Rua Rubalcava I took a quick look inside, saw the workers with their white clothing dedicating passionately their time to charitable service and I thought: One day you will learn more about this interesting and unique place." },
      { type: "p", text: "Time went by and every time I went past the Cocina Economica I had a bad consciousness that I haven’t yet investigated more. Now my volunteer service is almost over and I don’t want to leave this city without reporting about this special institution." },
      { type: "p", text: "Thursday morning, the sun was shining brightly when I entered the front door of the building at 10.30h. The workers already started two hours before to get ready for the day.  A woman was ordering bags of different food donations from different partners like supermarkets or private people. Of course everything was checked very well. Two of the five cooks were already starting to cook in the kitchen and a soft smell of a vegetable sauce floated through the hall. Another woman started to clean the tables to prepare and organizing the cutlery." },
      { type: "p", text: "Since 1891 the social kitchen of Ferrol is a well known independent institution supporting people with limited resources with providing a full warm lunch every day and dinner from Monday to Friday and on Sundays." },
      { type: "p", text: "After a while it will be the time of a few of the approximately 40 volunteers in total to arrive, that are dedicating one or two hours of their time per week helping for example with distributing the food and decking the tables. To do this important social work the volunteers just have to fill out a form, have an interview with the administrative workers to be registered." },
      { type: "p", text: "At 12.30-14.30h lunch is taking place, due to donations and support of the local government it is free for the people. Of course people need to provide a certificate of indigence, to use the service of the institution. At the entrance this is checked by one of the two administrative workers of the kitchen, which are in charge of organizing the volunteer administration and managing the contact with the partners." },
      { type: "p", text: "In the afternoon the cleaning starts, just before the procedure begins again and dinner is going to take place provided by a catering service." },
      { type: "p", text: "At 22.30 after cleaning the day in the social kitchen of Ferrol is over, but after 10 hours everything will start again." },
      { type: "p", text: "My impression of this institution was as interesting as I thought it would be. It’s very inspiring to see what dedicating work these people are doing there every day in the background of the daily city life. I really believe this stable social work and solidarity is one of the most important things that keeps our society together." },
      { type: "p", text: "Further information: https://www.cocinaeconomicaferrol.com/" },
    ],
  },
  {
    slug: "ayca-de-turquia-a-galicia",
    titulo: "Ayca de Turquía a Galicia",
    name: "Ayca",
    country: "Turquía",
    anio: 2018,
    fecha: "2018-03-21",
    lead: "Ayca llegó de Turquía en 2018 para seis meses de voluntariado en Narón. Era su primera vez en España.",
    image: "/img/historias/ayca-grupo.webp",
    imageAlt: "Ayca y otras cuatro personas se hacen un selfi sonriendo junto al mar",
    gallery: [{"src": "/img/historias/ayca-torre-hercules.webp", "alt": "La Torre de Hércules sobre la costa de A Coruña con el cielo despejado"}, {"src": "/img/historias/ayca-radio.webp", "alt": "Ayca y otras voluntarias con auriculares en un estudio de radio"}, {"src": "/img/historias/ayca-catedrales.webp", "alt": "Los acantilados de la playa de As Catedrales con el mar revuelto"}],
    body: [
      { type: "p", text: "¡Hola! Mi nombre es Ayca, soy de Turquía y ahora vivo en Galicia como voluntaria de un proyecto SVE." },
      { type: "p", text: "Cuando al principio me comunicaron que había sido seleccionada por Xeración, he sido muy feliz de entrar a formar parte de esta familia." },
      { type: "p", text: "Mi proyecto en Narón durará 6 meses y esta es mi primera visita a España." },
      { type: "p", text: "Lo primero que me llamó la atención fueron los chistes de la lluvia," },
      { type: "p", text: "Eso porque aquí llueve repentinamente y luego se para, después de 15 minutos está lloviendo otra vez y se detiene, una y otra vez de nuevo 🙂 Es la razón porque todo es verde y el aire es tan fresco. Todos es conectado y es maravilloso!" },
      { type: "p", text: "También quiero hablar de la gente y de la forma de vida en Galicia." },
      { type: "p", text: "Todas las personas que viven aquí son muy habladoras, amables y divertidas." },
      { type: "p", text: "Hay períodos de descanso llamados “siesta” y todas las tiendas, los bancos, las cafeterías y este tipo de lugares están cerrados en este momento. Es una cosa muy interesante para mí, ya que en Turquía no tenemos esto." },
      { type: "p", text: "Otro “choque cultural” para mí fue que cuando tengo que cruzar el paso de cebra y todos los coches paran para dejarme pasar y creo que este es un comportamiento muy educado." },
      { type: "p", text: "Las calles aquí son muy limpias y se pueden encontrar contenedores de reciclaje en todas partes." },
      { type: "p", text: "Además quiero hablar de la belleza natural de la Galicia. Esta región cuenta con una gran cantidad de playas y lugares verdes que tuvimos la oportunidad de ver durante el fin de semana. Fue una experiencia maravillosa." },
      { type: "p", text: "Si deseas concentrarte en tí mismo mientras escuchas los sonidos de las olas en la naturaleza, debes venir aquí!" },
      { type: "p", text: "En mi asociación organizamos una gran cantidad de eventos culturales, pero hasta ahora la experiencia más emocionante para mí fue cuando hablamos por radio local, Fran fue mi traductor,  ya que todavía no hablo español , pero de todos modos fue emocionante! 🙂" },
      { type: "p", text: "Yo vivo con 4 compañeros de piso y el último fin de semana hemos preparado todos juntos la cena para nuestros amigos y fue muy agradable." },
      { type: "p", text: "Tienes que venir aquí sin perder más tiempo y formar parte de esta familia !! 🙂" },
    ],
  },
  {
    slug: "mis-primeros-dias-en-galicia",
    titulo: "Mis primeros días en Galicia",
    name: "Çagatay",
    country: "Turquía",
    anio: 2018,
    fecha: "2018-03-22",
    lead: "Çagatay llegó de Turquía en 2018, junto a Ayca, para hacer voluntariado en Narón. Esto lo escribió a los 20 días.",
    image: "/img/historias/cagatay-coruna.webp",
    imageAlt: "Çagatay con gorro gris en un mirador sobre la costa de A Coruña",
    gallery: [{"src": "/img/historias/cagatay-costa.webp", "alt": "Çagatay de espaldas mirando el mar desde unas rocas de la costa norte de Galicia"}, {"src": "/img/historias/cagatay-playa.webp", "alt": "Çagatay y tres amigos se hacen un selfi en una playa con rocas"}],
    body: [
      { type: "p", text: "¡Hola! Me llamo  Çagatay  y llegué en Galicia hace 20 días con Ayça, otra voluntaria turca y esta es mi experiencia hasta ahora." },
      { type: "p", text: "La gente aquí es muy cálida, íntima, agradable y acogedora. Desde el primer día, todo el mundo está haciendo lo mejor para que nos sintamos bien y que sea más fácil acostumbrarnos a nuestra nueva vida." },
      { type: "p", text: "Me encantó todo el mundo que conocí, haciendo planes con mis nuevos amigos me hace feliz." },
      { type: "p", text: "Me encantan Narón y Ferrol, porque no me gustan las multitudes ni los ruidos, me encanta el verde y la naturaleza así que aquí es el lugar adecuado para mí. Lo único malo es el tiempo, porque es muy frío, pero espero que será más agradable… ¡La primavera está llegando!" },
      { type: "p", text: "A principios de marzo, Ayça e yo fuimos a La Coruña y hemos hecho un recorrido por la ciudad. La torre de Hércules es tan hermosa y me encanta su historia. También me gustó mucho el centro de la ciudad vieja." },
      { type: "p", text: "La semana pasada, descubrimos la costa norte de Galicia, fuimos a la playa de Doniños, Santa Comba, Valdoviño y al “El mejor banco del mundo”." },
      { type: "p", text: "Galicia cuenta con una muy hermosa naturaleza. Me gustaría visitar más y volver a la playa, sobre todo cuando llegue el verano." },
      { type: "p", text: "La misma noche, una sorpresa me esperaba porque era mi cumpleaños. Cuando fui a casa, descubrí que mis compañeros de piso habían organizado una fiesta de cumpleaños para mí y me hizo muy feliz. Honestamente tengo que admitir que vi la tarta antes, así que no fue una verdadera sorpresa, pero me gustó mucho lo que hicieron." },
      { type: "p", text: "Todo va bien y espero que será aún mejor." },
      { type: "p", text: "Tengo mucho trabajo que hacer y tengo muchas ganas de vivir esta experiencia." },
    ],
  },
  {
    slug: "the-naron-experience",
    titulo: "The Narón experience",
    name: "Berra",
    country: "Turquía",
    anio: 2017,
    fecha: "2017-10-04",
    lead: "Berra vino de Turquía para dos meses de voluntariado en Ferrol, en otoño de 2017. Lo escribió a los 17 días de llegar.",
    body: [
      { type: "p", text: "Hola, me llamo Berra Arı y soy de Turquia. He venido a Galicia de voluntaria y me quedaré en Ferrol durante 2 meses. Esta es mi primera experiencia en España y, en realidad, fuera de Turquía. Llevo 17 días en Ferrol y mi sensación hasta el momento es que todo es de color verde (vivo en Ankara y allí todo es mucho más seco) y que el tiempo cambia mucho. Por la mañana puede hacer mucho sol y por la tarde un montón de lluvia, pero aquí todo el mundo está acostumbrado y tienen siempre un paraguas listo. Otra cosa que me parece rara son los horarios de comida, se come muy tarde… nunca antes me había encontrado cenando a medianoche (algo que es bastante normal aquí)." },
      { type: "p", text: "Las calles están limpias en Ferrol y la gente amable. Me ha sorprendido que la cocina española se parece bastante a la turca y además tienen algo magnífico llamado Tortilla. Hay muchas playas para descubrir, empezando por la del Faro de Punta Frouxeira donde se encuentra unas vistas increíbles. Otro de mis descubrimientos ha sido el de las Fragas do Eume un bosque viejo y misterioso con monasterio incluido." },
      { type: "p", text: "En Xeración he estado trabajando organizando diversos eventos. Actividades para la limpieza de las calles de Ferrol o el intercambio cultural… como la noche en la que presentamos la cultura y gastronomía turca." },
      { type: "p", text: "Sin lugar a dudas los días pasan muy rápido en Ferrol 🙂" },
    ],
  },
  {
    slug: "una-turca-en-ferrol",
    titulo: "Una turca en Ferrol",
    name: "Aylin",
    country: "Turquía",
    anio: 2017,
    fecha: "2017-07-24",
    lead: "Aylin llegó de Turquía con el Servicio Voluntario Europeo en 2017. Así vivió su primer mes en Ferrol.",
    body: [
      { type: "p", text: "Me llamo Aylin, tengo 20 años y soy de Turquia. Os voy a contar lo que ha supuesto para mí la aventura de venir a Galicia y lo que he visto aquí durante un mes." },
      { type: "p", text: "Desde Estambul a Madrid tuve la suerte de compartir viaje con mi compañero de SVE. El trayecto hasta Ferrol fue un poco más duro que el anterior. Aún así, al llegar a Ferrol conocí a Fran. Fue ahí donde empezó la aventura." },
      { type: "p", text: "Después de descansar un rato nos fuimos a jugar al Paintball sin perder más tiempo." },
      { type: "p", text: "Curiosamente, lo único que conocía de Galicia antes de venir eran las banderas turcas que usan los aficionados del Depor. Lo que no sabía era su razón de ser. Tuve la suerte de conocer la historia unos días después haciendo nuevos amigos." },
      { type: "p", text: "Me resulto sorprendente ver cómo la gente de aquí acepta e incluso abraza a todos los países y culturas sin ningún tipo de discriminación, con gestos tan simples como hondear una bandera en un estadio.  De hecho, en mi caso, soy una seguidora muy grande del equipo de futbol del Besiktas en Turquía y allí consideramos apoyar a nuestro equipo con un estilo de vida. Es por ello que el Besiktas es un claro ejemplo de cómo vemos el mundo en Turquía. Tenemos una sensibilidad especial sobre cualquier tema del mundo aunque no esté relacionada con el deporte. Puede ser sobre un niño que está enfermo, como el caso de Adri aquí, un deportista expuesto al racismo como Eto’o, un terremoto como el que se tomó tantas vidas en Van (Turquía) o eventos políticos relacionados con los derechos de las personas." },
      { type: "p", text: "Todo esto me hace ver que aceptamos a todo el mundo y nos preocupamos por todo el mundo como hacéis aquí." },
      { type: "p", text: "He aprendido muchas cosas sobre vuestra cultura y un montón de historias. La más interesante es la relacionada con Finisterre, me hace pensar sobre los tiempos en que se bautizó con dicho nombre." },
      { type: "p", text: "Otra cosa que me sorprendió mucho fue San Juan. Es estupendo ver a la gente que se reúne para espantar a la mala suerte y formular deseos para el año siguiente. Y lo hacen de una manera muy organizada. Me encantó vivirlo con todos ellos aquella noche. También me sirvió para quemar las cosas malas que hay en mi vida." },
      { type: "p", text: "Además, saber que en Ares, durante los Maios, se cubre toda una calle con flores durante una sola noche con la ayuda de todos los vecinos, me pareció increíble y muy bonito." },
      { type: "p", text: "Y, por supuesto, aprender sobre el Camino de Santiago me hizo darme cuenta de que muchas veces la gente, aun con diferentes motivos, necesita un lugar de referencia hacia el que mirar y gracias al cual mejorar y reflexionar sobre sus vidas. Galicia es ese sitio." },
      { type: "p", text: "La vida aquí es muy diferente. La gente vive relajada, tienen tiempo para trabajar pero también para disfrutar, y eso me gusta. Es posible que este estilo de vida tenga que ver con el sol. Se pone tan tarde comparado con mi país que la gente tiene tiempo para hacer muchas más cosas una vez salen de trabajar: ir a la playa (tenéis unas playas increíbles en esta zona), a caminar por el monte, después disfrutar de unas buenas tapas y unas cañas antes de cenar…etc. Hay muchas zonas naturales en las que te sientes en paz." },
      { type: "p", text: "Todo esto es bastante diferente a la vida en nuestro país." },
      { type: "p", text: "También en términos de gastronomía, pues tenéis infinidad de productos del mar que están deliciosos. Mi favorito, sin duda, es el pulpo. Nunca lo había probado hasta venir aquí y me encanta." },
      { type: "p", text: "Y, por supuesto, la cerveza regional que tenéis, Estrella Galicia, os invita a estar de cañas después de cenar durante parte o gran parte de la noche. Creo que echaré de menos la 1906 cuando vuelva a Turquía." },
      { type: "p", text: "Ahora mismo, unos de mis objetivos es aprender español. Ya sé algunas palabras básicas, pero me gustaría poder llegar a tener conversaciones sencillas con la gente antes de que acabe mi estancia aquí, porque me encanta este idioma y, además, dado que no demasiada gente habla inglés, es bastante necesario para comunicarte a diario." },
      { type: "p", text: "Aun así, he conocido gente con la que sí que me puedo comunicar en inglés y con las que he podido intercambiar información y disfrutar de nuevas experiencias. Hablando con toda esta gente nueva me he dado cuenta de que las nacionalidades existen solo en nuestras cabezas." },
      { type: "p", text: "Xeración es una asociación que da la oportunidad a la gente de visitar otros países y que gente de otros países venga a España, y a mí me dio esa oportunidad. Es mi primer proyecto pero seguro que no será el último. Seguiré aprendiendo cosas sobre otras culturas y otras gentes." },
      { type: "p", text: "Infinitas gracias a Xeración por haberme dado esta oportunidad." },
    ],
  },
  {
    slug: "miexperienciaridvan",
    titulo: "Mi experiencia SVE",
    name: "Ridvan",
    anio: 2017,
    fecha: "2017-07-21",
    lead: "Ridvan pasó el verano de 2017 en Xeración con el Servicio Voluntario Europeo. Esto lo escribió a mitad de su estancia.",
    image: "/img/historias/ridvan.webp",
    imageAlt: "Ridvan sonríe bajo un puente de piedra rodeado de vegetación",
    body: [
      { type: "p", text: "Debo admitir que este es uno de mis mejores veranos, porque experimentar cosas tan variadas en un país tan diferente me hace mejorar como persona y eso me encanta." },
      { type: "p", text: "Viajando a otro país tienes la oportunidad de ver el tuyo desde otra perspectiva. Te hace pensar sobre ambos países y comparar las cosas buenas y malas de cada uno. Además, el estar sin tus amigos de siempre, ni tu familia te ayuda a reflexionar sobre ti mismo y sobre las cosas que quieres cambiar de tu propia vida. Y este es un buen momento para empezar puesto que el SVE te ofrece la oportunidad de disfrutar de tiempo libre y empezar a trabajar en esos cambios." },
      { type: "p", text: "Yo he decidido hacer un proyecto de voluntariado en Xeración, en Galicia. Lo primero que me llamó la atención aquí fué que el atardecer aquí sea a una hora tan tardía. Es estupendo, porque tenemos muchas horas de luz al día, lo que nos permite realizar muchas actividades después del trabajo. Entre ellas, lo mejor es la posibilidad de conocer gente de la zona con la que intercambiar historias y curiosidades sobre nuestras diferentes culturas, sobre todo sobre la comida, un tema muy importante en mi cultura y, por lo que veo, también en la gallega." },
      { type: "p", text: "Una de las primeras experiencias de las que pudimos disfrutar fue la fiesta de San Juan en la playa del Orzán (A Coruña), una mezcla de misticismo y euforia que nos cautivó (en cierto modo me recordaba a nuestra fiesta tradicional kurda llamada Newroz) Fue toda una alegría poder visitar la ciudad de noche y de día después de haberla visto solo por internet unos meses antes del proyecto. Disfrutar del Pulpo a feira, las cañas y las tapas nos sirvió para empezar a comprender la cultura de esta tierra." },
      { type: "p", text: "Durante los días siguientes ya comenzamos a trabajar con Fran (el presidente de la asociación) quién nos enseñó qué teníamos que hacer. Primero empezamos con algo de trabajo administrativo y a aprender un poco de Español dos horas diarias. Luego ya nos dedicamos a organizar los intercambio de idiomas (Language Exchange). Estos intercambios reúnen a gente de toda la ciudad cada viernes en El cafelito de Gloria (un bar muy agradable cerca de la plaza de Amboage). Cada semana, más gente se une a nosotros y acaban convirtiéndose en nuestros amigos." },
      { type: "p", text: "Tuvimos la suerte de ir con ellos a una piscina natural en la provincial de Lugo que nos encantó. La siguiente visita fue con Fran a Ares, un pueblecito cerca de Ferrol muy conocido por los Maios (representaciones florales en las calles organizadas por los vecinos). Ese día aprovechamos para comer un poco de pulpo a la mugardesa en el pueblo que le da nombre (Mugardos)." },
      { type: "p", text: "Aún quedan algunas semanas aquí y espero vivirlas con la misma intensidad." },
      { type: "p", text: "Sin duda alguna, cualquiera que tenga la oportunidad de hacer una estancia como esta en el extranjero no debería dudar ni un segundo." },
    ],
  },
]

export function getHistoria(slug: string): Historia | undefined {
  return historiasEs.find((historia) => historia.slug === slug)
}
