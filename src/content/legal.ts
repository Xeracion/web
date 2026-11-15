import { pageNosotrosEs } from './nosotros'
import { siteSettings } from './siteSettings'

// Textos legales: aviso legal (LSSI), privacidad (RGPD) y cookies. Describen
// cómo funciona la web de verdad: sin formularios propios, sin analítica,
// sin cookies propias y con el mapa de Google cargado solo bajo demanda.
// Si cambia algo de eso (un formulario, analítica, un vídeo incrustado),
// hay que actualizar estos textos. Datos legales reales: no tocarlos sin
// confirmación.

export interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalPage {
  slug: string
  title: string
  heading: string
  intro: string
  sections: LegalSection[]
}

const titular = pageNosotrosEs.legalName
const cif = pageNosotrosEs.legalCif
const domicilio = `Casa da Xuventude, ${pageNosotrosEs.legalAddress} (A Coruña)`
const email = siteSettings.email

export const LEGAL_UPDATED = 'Última actualización: noviembre de 2026.'

export const avisoLegal: LegalPage = {
  slug: 'aviso-legal',
  title: 'Aviso legal',
  heading: 'Aviso legal.',
  intro: 'Quién está detrás de esta web y en qué condiciones puedes usarla.',
  sections: [
    {
      heading: 'Quiénes somos',
      paragraphs: [
        `Esta web (xeracion.org) es de **${titular}**, con CIF ${cif} y domicilio en ${domicilio}.`,
        `Puedes escribirnos a ${email}.`,
      ],
    },
    {
      heading: 'Para qué sirve la web',
      paragraphs: [
        'Para contar lo que hacemos: las experiencias y proyectos que organizamos, la agenda de actividades en Ferrol, los proyectos ya realizados y cómo ponerte en contacto con nosotros.',
      ],
    },
    {
      heading: 'Contenidos y fotos',
      paragraphs: [
        'Los textos, las fotos y los vídeos de esta web son nuestros o de las personas y organizaciones que nos han dejado usarlos. No los reutilices sin pedirnos permiso.',
        'Los logotipos de instituciones, programas y otras organizaciones pertenecen a sus titulares y aparecen solo para indicar que colaboran con nosotros o nos apoyan.',
        'Las citas y entrevistas son palabras de personas reales y se publican tal cual, en su idioma original.',
      ],
    },
    {
      heading: 'Enlaces a otras webs',
      paragraphs: [
        'Enlazamos a webs y servicios de terceros (redes sociales, WhatsApp, Typeform, YouTube, Spotify, Google Maps, webs de socios…). No respondemos de su contenido ni de cómo tratan tus datos: al entrar en ellas se aplican sus propias condiciones.',
      ],
    },
    {
      heading: 'Responsabilidad',
      paragraphs: [
        'Intentamos que la información esté al día y sea correcta, pero fechas, plazas o condiciones de una experiencia pueden cambiar. Ante cualquier duda, pregúntanos antes de apuntarte.',
      ],
    },
    {
      heading: 'Ley aplicable',
      paragraphs: ['Esta web se rige por la legislación española.'],
    },
  ],
}

export const privacidad: LegalPage = {
  slug: 'privacidad',
  title: 'Política de privacidad',
  heading: 'Tus datos, con cuidado.',
  intro: 'Qué datos personales tratamos cuando usas esta web o nos escribes, y qué derechos tienes.',
  sections: [
    {
      heading: 'Responsable',
      paragraphs: [`${titular} (CIF ${cif}), ${domicilio}. Correo: ${email}.`],
    },
    {
      heading: 'Qué datos tratamos',
      paragraphs: [
        'Esta web no tiene formularios propios ni registro de usuarios. Solo tratamos los datos que tú decides darnos:',
        '**Si nos escribes** por correo electrónico o por WhatsApp, usamos tu nombre, tu contacto y lo que nos cuentes para responderte.',
        '**Si rellenas uno de nuestros formularios** (por ejemplo, el de mentores o el de empresas), los datos que pongas sirven para gestionar tu solicitud. Esos formularios están alojados en Typeform.',
        '**Al visitar la web**, el servidor que la aloja registra datos técnicos de cada visita, como la dirección IP o el navegador, para que la web funcione y sea segura. No los usamos para identificarte ni para hacer estadísticas.',
      ],
    },
    {
      heading: 'Por qué podemos tratarlos',
      paragraphs: [
        'Porque nos los das para que te respondamos o para participar en algo (tu consentimiento y, si te apuntas, la relación que se crea), y por nuestro interés legítimo en que la web funcione de forma segura.',
      ],
    },
    {
      heading: 'Cuánto tiempo los guardamos',
      paragraphs: [
        'El tiempo necesario para atender tu consulta o gestionar tu participación, y después el que obliguen las leyes (por ejemplo, la documentación de los proyectos con financiación europea).',
      ],
    },
    {
      heading: 'Quién más los ve',
      paragraphs: [
        'No vendemos ni cedemos tus datos. Para funcionar usamos algunos proveedores que pueden tratarlos en nuestro nombre: Vercel (alojamiento de la web), Google (correo electrónico), Typeform (formularios) y WhatsApp, si eliges escribirnos por ahí. Algunos están fuera de la Unión Europea y trabajan con las garantías que exige la normativa europea.',
      ],
    },
    {
      heading: 'Tus derechos',
      paragraphs: [
        `Puedes pedirnos en cualquier momento ver tus datos, corregirlos, borrarlos, limitar su uso, oponerte a él, llevártelos o retirar tu consentimiento. Escríbenos a ${email}.`,
        'Si crees que no lo hemos hecho bien, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).',
      ],
    },
  ],
}

export const cookies: LegalPage = {
  slug: 'cookies',
  title: 'Política de cookies',
  heading: 'Esta web no usa cookies.',
  intro: 'Por eso no te mostramos ningún aviso al entrar. Te contamos qué puede pasar con los contenidos de otros.',
  sections: [
    {
      heading: 'Nuestras cookies',
      paragraphs: [
        'Ninguna. No usamos cookies propias, ni analítica, ni publicidad, y la web no guarda nada en tu navegador.',
      ],
    },
    {
      heading: 'El mapa de Google',
      paragraphs: [
        'En la agenda puedes ver un mapa de Google para llegar a la Casa da Xuventude. **Solo se carga si pulsas «Ver mapa»**: a partir de ese momento, Google puede guardar sus propias cookies en tu navegador, según su política de privacidad (policies.google.com). Si no lo pulsas, no se conecta nada con Google Maps.',
      ],
    },
    {
      heading: 'Fotos de las opiniones de Google',
      paragraphs: [
        'En «Nosotros» mostramos opiniones de Google con la foto de perfil de quien las escribió. Las pide nuestro servidor y te las sirve desde la propia web, así que tu navegador no se conecta a Google para verlas.',
      ],
    },
    {
      heading: 'Enlaces a otras webs',
      paragraphs: [
        'Los vídeos de YouTube, los pódcast de Spotify, nuestras redes sociales, WhatsApp y los formularios de Typeform se abren en sus propias webs. Allí se aplican sus cookies y sus condiciones, no las nuestras.',
      ],
    },
  ],
}

export const LEGAL_PAGES = [avisoLegal, privacidad, cookies]
