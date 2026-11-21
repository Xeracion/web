import type { TeacherCourse, TeacherTrainingContent } from './types'
import { TEACHER_TRAINING_PATHS } from './paths'

// Version française des formations pour enseignants (/fr/formation-enseignants/).
// Traduction de src/content/en/teacherTraining.ts : mêmes données, même ordre.
// Pas de lien dans le menu (page d’atterrissage pour les moteurs de recherche).

const PATHS = TEACHER_TRAINING_PATHS.fr

const courses: TeacherCourse[] = [
  {
    id: 'camino',
    slug: PATHS.camino,
    name: 'Walking classroom: outdoor learning on the English Way',
    summary:
      'Sept jours à pied de Ferrol à Saint-Jacques-de-Compostelle. Chaque étape est une leçon d’apprentissage en plein air que vous rapportez prête à l’emploi.',
    metaTitle: 'Formation enseignants apprentissage en plein air sur le Chemin de Compostelle · Erasmus+ KA1',
    metaDescription:
      'Formation Erasmus+ KA1 de sept jours pour enseignants sur le Chemin anglais, de Ferrol à Saint-Jacques-de-Compostelle. Six techniques d’apprentissage en plein air et une sortie pour votre établissement. 560 € de frais de cours.',
    heroHeading: 'La classe en marche : apprenez à enseigner dehors en parcourant le Chemin anglais jusqu’à Saint-Jacques.',
    heroText: [
      'Et si votre prochaine formation n’avait pas de salle de classe ? Pendant sept jours, vous marchez sur le Chemin anglais (Camino Inglés), du port de Ferrol jusqu’à Saint-Jacques-de-Compostelle, environ 115 km entre estuaires, villes médiévales et forêt atlantique. Chaque étape est une leçon. Vous essayez six techniques d’apprentissage en plein air d’abord en tant qu’apprenant, puis vous en faites une sortie conçue pour vos propres élèves.',
      'Vous marchez en petit groupe avec des enseignants de toute l’Europe, accompagnés par une équipe qui organise des programmes d’apprentissage internationaux dans cette région depuis plus de dix ans. Vous repartez avec une séquence en plein air prête à l’emploi, une méthode pour évaluer les apprentissages hors de la classe et des collègues avec qui monter votre prochain projet Erasmus+.',
    ],
    heroImage: '/img/proyectos/yeah/ruta-playa.webp',
    heroImageAlt: 'Un groupe sur une passerelle en bois face à une plage écoute un guide',
    days: 7,
    fee: 560,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Du lundi 12 au dimanche 18 juillet 2027',
    shortDates: 'Du 12 au 18 juillet 2027',
    startDate: '2027-07-12',
    endDate: '2027-07-18',
    place: 'De Ferrol à Saint-Jacques-de-Compostelle, Galice',
    audience: [
      'Enseignants du primaire, du secondaire et de la formation des adultes, toutes disciplines',
      'Conseillers d’orientation et personnels d’accompagnement',
      'Enseignants de la filière tourisme en formation professionnelle',
    ],
    requirements:
      'Il faut pouvoir marcher entre 15 et 25 km par jour. Un véhicule d’assistance suit chaque étape. Langue de travail : anglais (B1 ou plus).',
    trainers:
      'Dirigée par Fran Sequeiro. Quand le groupe compte des enseignants de tourisme, Pam Guerrero intervient avec un module sur le Chemin comme produit touristique et ressource pédagogique.',
    outcomes: [
      'Six techniques d’apprentissage en plein air, testées par vous-même',
      'Une sortie conçue pour votre établissement et relue par vos pairs',
      'Un journal d’apprentissage et un plan pour le partager avec votre équipe',
      'Des contacts dans d’autres pays pour de futurs projets',
    ],
    programmeNote: 'Les distances sont approximatives.',
    programmeColumns: ['Étape', 'Thème', 'Séance de clôture'],
    programme: [
      { day: 1, place: 'Ferrol. Atelier le matin, puis de Ferrol à Neda l’après-midi (15 km)', focus: 'Pourquoi apprendre hors de la classe : données probantes, sécurité et gestion du groupe', then: 'Contrat d’apprentissage et journal personnel' },
      { day: 2, place: 'De Neda à Pontedeume (16 km)', focus: 'Le paysage comme texte : lire le territoire et apprendre à partir du lieu', then: 'Mise en commun des cartes sensorielles' },
      { day: 3, place: 'De Pontedeume à Betanzos (20 km)', focus: 'Séminaire en marchant : débat et esprit critique en mouvement', then: 'Formuler une question directrice par discipline' },
      { day: 4, place: 'De Betanzos à Hospital de Bruma (25 km)', focus: 'Défi, effort et bien-être : marche en silence et binômes d’écoute', then: 'Cercle de réflexion' },
      { day: 5, place: 'De Hospital de Bruma à Sigüeiro (24 km)', focus: 'Évaluer ce qui se passe dehors : traces, grilles d’évaluation et portfolio', then: 'Premier brouillon de votre propre sortie' },
      { day: 6, place: 'De Sigüeiro à Saint-Jacques (16 km). Atelier l’après-midi', focus: 'Inclusion : adapter une sortie à différentes capacités et différents budgets', then: 'Relecture des brouillons entre pairs' },
      { day: 7, place: 'Saint-Jacques-de-Compostelle', focus: 'Du Chemin à l’établissement : plan de transfert, risques et autorisations', then: 'Présentations, évaluation et certificats' },
    ],
    method:
      'Chaque matin, la technique du jour est présentée en 20 minutes, pratiquée en marchant et analysée à l’arrivée. Avant la formation, une séance en ligne et une courte lecture ; un mois après, une séance de suivi.',
    includes:
      'Formation, matériel, crédenciale du pèlerin, véhicule d’assistance, séances en ligne et certificat. L’hébergement, les repas et le transport des bagages ne sont pas compris.',
    faqs: [
      {
        question: 'Quelle condition physique faut-il ?',
        answer:
          'Les étapes font entre 15 et 25 km. Il faut pouvoir parcourir cette distance plusieurs jours de suite à un rythme tranquille. Un véhicule d’assistance suit chaque étape, personne n’est laissé derrière.',
      },
      {
        question: 'Où dort-on en chemin ?',
        answer:
          'L’hébergement ne fait pas partie des frais de cours : il est payé avec le soutien individuel de votre bourse. Nous vous envoyons une liste d’hébergements recommandés pour chaque étape. Le transport des bagages peut être réservé auprès d’un prestataire local.',
      },
      {
        question: 'Puis-je la combiner avec la formation sur la forêt ?',
        answer:
          'Oui. La formation en éducation à l’environnement a lieu la semaine précédente, du 5 au 9 juillet 2027 : vous pouvez enchaîner les deux.',
      },
    ],
  },
  {
    id: 'forest',
    slug: PATHS.forest,
    name: 'Bringing the forest back: hands-on environmental education',
    summary:
      'Cinq jours entre Ferrol, les Fragas do Eume et A Capela pour transformer la restauration d’une forêt en projet pour votre établissement.',
    metaTitle: 'Formation enseignants en éducation à l’environnement en Espagne · Erasmus+ KA1',
    metaDescription:
      'Formation Erasmus+ KA1 de cinq jours en Galice : lire une forêt atlantique ancienne, passer une journée à en restaurer une et concevoir un projet de renaturation pour votre établissement. 400 € de frais de cours.',
    heroHeading: 'Faire revenir la forêt : transformez la restauration d’une forêt en projet pour votre établissement.',
    heroText: [
      'La Galice a perdu une grande partie de sa forêt atlantique d’origine au profit des plantations d’eucalyptus. Un mouvement de bénévoles de plus en plus large la fait revenir, parcelle après parcelle. Cette formation vous place au cœur de ce travail. Vous apprendrez à lire une forêt ancienne dans les Fragas do Eume, l’une des forêts littorales atlantiques les mieux conservées d’Europe, puis vous passerez une journée à en restaurer une : arracher l’eucalyptus, planter chênes, bouleaux et châtaigniers.',
      'De retour en atelier, vous transformerez cette expérience en projet pour votre établissement : une micro-forêt, un jardin pour les pollinisateurs ou une parcelle adoptée, avec une méthode simple pour la suivre avec vos élèves tout au long de l’année. Aucune connaissance en botanique n’est nécessaire.',
    ],
    heroImage: '/img/proyectos/restaurando-la-naturaleza/plantando-arboles.webp',
    heroImageAlt: 'Deux personnes creusent pour planter un jeune arbre sur un terrain dégagé près de la côte',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 16,
    datesLabel: 'Du lundi 5 au vendredi 9 juillet 2027',
    shortDates: 'Du 5 au 9 juillet 2027',
    startDate: '2027-07-05',
    endDate: '2027-07-09',
    place: 'Ferrol, Fragas do Eume et A Capela, Galice',
    audience: [
      'Enseignants de SVT, de sciences et de géographie',
      'Enseignants de l’enseignement agricole, forestier et environnemental',
      'Formateurs d’adultes et personnels de structures d’éducation à l’environnement',
    ],
    requirements: 'Aucune connaissance en botanique n’est nécessaire. Langue de travail : anglais.',
    trainers: 'Dirigée par Fran Sequeiro, avec l’équipe de Stop Eucalipto pour la journée de restauration.',
    outcomes: [
      'Une méthode d’inventaire de la biodiversité utilisable avec des élèves et un téléphone',
      'L’expérience directe d’une journée de restauration avec des espèces locales',
      'Un projet de renaturation pour votre établissement : micro-forêt, jardin pour les pollinisateurs ou parcelle adoptée',
      'Un plan pour mesurer les résultats au fil de l’année scolaire',
    ],
    programmeColumns: ['Lieu', 'Matin', 'Après-midi'],
    programme: [
      { day: 1, place: 'Ferrol', focus: 'La forêt atlantique et l’expansion de l’eucalyptus en Galice. Le cadre européen de l’éducation au développement durable', then: 'Balade urbaine : lire la nature en ville. Présentation des établissements participants' },
      { day: 2, place: 'Fragas do Eume', focus: 'Lire une forêt ancienne : strates, espèces indicatrices, sol et eau', then: 'Travail de terrain : transects et inventaire avec des applications de sciences participatives' },
      { day: 3, place: 'A Capela', focus: 'Journée de restauration : arrachage de jeunes eucalyptus et plantation d’espèces locales', then: 'Pépinière et récolte de graines' },
      { day: 4, place: 'Ferrol', focus: 'Du terrain à la classe : concevoir un projet de renaturation scolaire et l’intégrer au programme', then: 'Atelier de suivi : indicateurs, photographie répétée, implication des familles et de la commune' },
      { day: 5, place: 'Ferrol', focus: 'Présentation des projets et relecture entre pairs', then: 'Plan de transfert, pistes de coopération européenne, évaluation et certificats' },
    ],
    method:
      'Deux jours sur le terrain et trois en atelier. Avant la formation, chaque participant envoie des photos et un plan de son établissement, qui servent de base à son projet. Une séance de suivi en ligne a lieu trois mois plus tard.',
    includes:
      'Formation, matériel, outils et gants, transport vers les sorties de terrain, suivi en ligne et certificat. L’hébergement et les repas ne sont pas compris.',
    faqs: [
      {
        question: 'Faut-il des connaissances en botanique ou en foresterie ?',
        answer: 'Non. La formation part de zéro et s’adresse aux enseignants de toutes disciplines qui veulent travailler dehors avec leurs élèves.',
      },
      {
        question: 'Que dois-je apporter ?',
        answer:
          'Des vêtements et des chaussures pour travailler en extérieur et, avant la formation, des photos et un plan de votre établissement. Les outils, les gants et le transport vers le terrain sont compris.',
      },
      {
        question: 'Puis-je la combiner avec la formation sur le Chemin ?',
        answer:
          'Oui. La formation Walking classroom commence le lundi suivant, du 12 au 18 juillet 2027 : vous pouvez enchaîner les deux.',
      },
    ],
  },
  {
    id: 'ai',
    slug: PATHS.ai,
    name: 'Erasmus+ without the paperwork: AI and digital tools for project coordinators',
    summary:
      'Cinq jours à Ferrol pour repartir avec votre propre système de gestion de projet en place et opérationnel : budget, justificatifs, rapports et IA.',
    metaTitle: 'Formation IA et outils numériques pour coordinateurs Erasmus+ · KA1 en Espagne',
    metaDescription:
      'Formation Erasmus+ KA1 de cinq jours à Ferrol pour les coordinateurs de projets : suivi budgétaire, justificatifs et remboursements, IA pour les candidatures et les rapports, protection des données. 400 € de frais de cours.',
    heroHeading: 'Moins de paperasse, plus de projet : construisez votre propre système de gestion en cinq jours.',
    heroText: [
      'Si vous coordonnez des projets Erasmus+, vous savez que le vrai travail se passe dans les tableurs, les justificatifs et les rapports, souvent tard le soir. Cette formation est animée par une équipe qui gère des projets européens depuis plus de dix ans et qui en a eu assez de tout faire à la main. Nous avons créé nos propres outils. En cinq jours, nous vous montrons comment, et vous construisez les vôtres.',
      'Venez avec votre projet. Le vendredi, vous aurez un tableau de suivi budgétaire adapté à votre subvention, un circuit qui transforme la photo d’un billet de train en ligne de comptabilité, et des prompts d’IA testés pour les candidatures, les contrats pédagogiques et les rapports finaux. Sans programmer, avec un guide clair pour utiliser l’IA sans mettre en danger les données des participants.',
    ],
    heroImage: '/img/en/oficina-equipo.webp',
    heroImageAlt: 'L’équipe de Xeración travaille sur ses ordinateurs portables au bureau',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Du lundi 18 au vendredi 22 octobre 2027',
    shortDates: 'Du 18 au 22 octobre 2027',
    startDate: '2027-10-18',
    endDate: '2027-10-22',
    place: 'Ferrol, Galice',
    audience: [
      'Coordinateurs Erasmus+ des établissements scolaires, de la formation professionnelle et de la formation des adultes',
      'Équipes de direction',
      'Personnels administratifs',
    ],
    requirements:
      'Ordinateur portable personnel et notions de base sur les tableurs. Pas besoin de savoir programmer. Langue de travail : anglais.',
    trainers: 'Dirigée par Fran Sequeiro, qui a développé les outils de gestion que Xeración utilise au quotidien.',
    outcomes: [
      'Une carte de vos processus qui montre où vous perdez le plus d’heures',
      'Un tableau de suivi budgétaire adapté aux coûts unitaires de votre projet',
      'Un circuit de justificatifs et de remboursements avec lecture automatique des documents',
      'Des modèles et des consignes pour rédiger candidatures, contrats et rapports avec l’IA',
      'Des critères clairs de protection des données pour utiliser ces outils',
    ],
    programmeColumns: ['Thème', 'Matin', 'Après-midi'],
    programme: [
      { day: 1, place: 'Où passe le temps', focus: 'Le cycle de vie d’un projet KA1 et KA2 vu du côté de la gestion', then: 'Chaque participant dessine ses processus actuels et choisit ce qu’il va résoudre pendant la semaine' },
      { day: 2, place: 'Budget', focus: 'Budget et suivi : coûts unitaires, suivi par participant, prévision de trésorerie', then: 'Atelier : construire le tableau de suivi avec les données de son propre projet' },
      { day: 3, place: 'Justificatifs', focus: 'Justificatifs et remboursements : de la photo du billet au tableur. Démonstration des outils de Xeración', then: 'Atelier : son propre circuit de collecte et de vérification des documents. Protection des données et limites de l’IA' },
      { day: 4, place: 'Rédaction', focus: 'Rédiger mieux et plus vite avec l’IA : candidatures, contrats pédagogiques, rapports finaux et diffusion', then: 'Atelier : automatiser un processus complet, du formulaire d’inscription au document final' },
      { day: 5, place: 'Votre système', focus: 'Présentation des systèmes construits et relecture entre pairs', then: 'Plan de mise en œuvre dans votre structure, veille des appels, évaluation et certificats' },
    ],
    method:
      'Vous travaillez toujours sur votre vrai projet : apportez votre budget et vos modèles. Une séance en ligne en amont permet de préparer vos données, et une séance de suivi a lieu six semaines après.',
    includes:
      'Formation, modèles et guides, séances en ligne et certificat. Les licences d’outils payants ne sont pas comprises : la formation peut se suivre avec les versions gratuites.',
    faqs: [
      {
        question: 'Faut-il savoir programmer ?',
        answer: 'Non. Il vous faut un ordinateur portable et des notions de base sur les tableurs. Tout se construit avec des outils qui fonctionnent sans programmation.',
      },
      {
        question: 'Dois-je acheter des logiciels ?',
        answer: 'Non. Les licences payantes ne sont pas comprises dans les frais, et toute la formation peut se suivre avec les versions gratuites des outils.',
      },
      {
        question: 'Et les données des participants ?',
        answer:
          'La protection des données fait partie du programme : vous repartez avec des critères clairs sur ce que vous pouvez ou non saisir dans des outils d’IA, et sur la manière de protéger les données personnelles.',
      },
    ],
  },
]

export const teacherTrainingFr: TeacherTrainingContent = {
  lang: 'fr',
  ogLocale: 'fr_FR',
  basePath: PATHS.base,
  courses,
  hub: {
    metaTitle: 'Formations Erasmus+ KA1 pour enseignants en Espagne · Galice',
    metaDescription:
      'Cours structurés Erasmus+ KA1 pour enseignants et personnels éducatifs à Ferrol, en Galice : apprentissage en plein air sur le Chemin de Compostelle, éducation à l’environnement et outils d’IA pour coordinateurs.',
    heroHeading: 'Des formations pour enseignants en Galice que votre bourse finance entièrement.',
    heroText: [
      'Trois formations courtes pour enseignants, formateurs et personnels éducatifs de toute l’Europe, conçues pour que les frais de cours Erasmus+ KA1 les couvrent entièrement : 80 € par jour, sans surcoût pour votre établissement.',
      'Elles s’appuient sur ce que nous faisons à Ferrol depuis 2013 : apprendre dehors, restaurer la nature et mener des projets européens. Les formations ont lieu en anglais.',
    ],
    heroImage: '/img/proyectos/x-team/sesion-formacion.webp',
    heroImageAlt: 'Un groupe assis dans une salle suit une présentation projetée',
    coursesHeading: 'Trois formations pour 2027.',
    coursesText: 'Des petits groupes qui réunissent toujours au moins deux pays. Formation en anglais.',
    fundingHeading: 'Comment la bourse la finance.',
    fundingText: [
      'Une bourse KA1 comprend trois parties distinctes. Les frais de cours sont de 80 € par participant et par jour de formation, dans la limite de 800 €. Nos frais correspondent exactement à ce montant : votre établissement n’ajoute rien de sa poche.',
      'L’hébergement et les repas sont payés avec le soutien individuel, un montant journalier à part. Le voyage dispose de son propre forfait, calculé selon la distance.',
    ],
    fundingFacts: [
      { label: 'Frais de cours', value: '80 € par jour' },
      { label: 'Durée', value: '5 ou 7 jours' },
      { label: 'Groupe', value: '8 à 16 personnes' },
      { label: 'Langue', value: 'Anglais' },
    ],
    stepsHeading: 'Du premier e-mail au certificat.',
    steps: [
      { title: 'Se préinscrire', text: 'Écrivez-nous. La préinscription est gratuite et n’engage pas votre établissement.' },
      { title: 'Déposer la candidature', text: 'Nous vous envoyons la fiche de la formation avec objectifs et acquis d’apprentissage, notre OID et une lettre de préinscription pour votre candidature.' },
      { title: 'Confirmer', text: 'Une fois la subvention accordée, vous confirmez les places et nous facturons votre établissement, bénéficiaire de la bourse.' },
      { title: 'Se former et certifier', text: 'Nous signons votre contrat pédagogique et, à la fin, vous recevez une attestation de participation et un appui pour l’Europass Mobilité.' },
    ],
    extrasHeading: 'Bon à savoir.',
    shadowingHeading: 'Ajoutez une semaine de job shadowing.',
    shadowingText:
      'Si vous souhaitez combiner une formation avec du job shadowing, nous organisons des visites d’observation dans des établissements et des structures de Ferrolterra. C’est une option, avec son propre tarif.',
    stayHeading: 'Séjourner à Ferrol.',
    stayText:
      'L’hébergement ne fait jamais partie des frais de cours. Si vous le souhaitez, nous vous aidons à trouver un logement à Ferrol, à un tarif séparé. Pour la formation sur le Chemin, vous recevez une liste d’hébergements recommandés pour chaque étape.',
    trainersHeading: 'Qui anime.',
    trainersText:
      'Les formations sont dirigées par Fran Sequeiro, coordinateur de Xeración, une équipe qui organise des programmes d’apprentissage internationaux en Galice depuis 2013. Pam Guerrero intervient dans la formation sur le Chemin quand le groupe compte des enseignants de tourisme.',
    trainersLinkLabel: 'Notre équipe (en anglais)',
    faqHeading: 'Les questions des coordinateurs.',
    faqs: [
      {
        question: 'Les frais de cours sont-ils entièrement pris en charge par Erasmus+ ?',
        answer:
          'Oui. Erasmus+ KA1 verse 80 € par participant et par jour de formation, dans la limite de 800 € par personne. Nos frais sont de 400 € pour les formations de cinq jours et de 560 € pour celle de sept jours, exactement ce que couvre la bourse.',
      },
      {
        question: 'Qui peut participer ?',
        answer:
          'Les enseignants et personnels des établissements scolaires, de la formation professionnelle et de la formation des adultes disposant d’une bourse KA1, via une structure accréditée (KA121) ou un projet de courte durée (KA122).',
      },
      {
        question: 'Dois-je mentionner la formation dans ma candidature ?',
        answer:
          'Ce n’est pas obligatoire, mais cela aide. Nous vous envoyons la fiche de la formation avec objectifs et acquis d’apprentissage et une lettre de préinscription à joindre.',
      },
      {
        question: 'À qui adressez-vous la facture ?',
        answer: 'À l’établissement ou à la structure d’envoi, qui reçoit la subvention. L’hébergement, si vous le réservez avec nous, est facturé à part.',
      },
      {
        question: 'Y aura-t-il des enseignants d’autres pays ?',
        answer: 'Oui. Chaque groupe réunit au moins deux pays, pour que vous rencontriez des collègues d’ailleurs en Europe.',
      },
      {
        question: 'Vais-je recevoir un certificat ?',
        answer:
          'Oui. Un certificat avec le nom de la formation, sa description, les acquis d’apprentissage, les dates, le lieu et les formateurs, et un appui pour compléter votre Europass Mobilité.',
      },
      {
        question: 'Où ont lieu les formations ?',
        answer:
          'À Ferrol, en Galice, avec des journées de terrain dans le parc naturel des Fragas do Eume et à A Capela. La formation sur le Chemin va à pied de Ferrol à Saint-Jacques-de-Compostelle. L’aéroport d’A Coruña est à 50 km, et Saint-Jacques-de-Compostelle à une heure de route.',
      },
      {
        question: 'Dans quelle langue se déroulent les formations ?',
        answer: 'En anglais, car les groupes réunissent des enseignants de plusieurs pays. Un niveau intermédiaire (B1) suffit.',
      },
    ],
    closingHeading: 'On vous garde une place ?',
    closingText: 'Dites-nous quelle formation, combien de personnes et quand vous comptez venir. Nous répondons personnellement, en anglais ou en espagnol.',
    ctaLabel: 'Je veux me préinscrire',
    ctaDetailsLabel: 'Voir les formations',
  },
  ui: {
    breadcrumb: 'Formation des enseignants',
    seeProgramme: 'Voir le programme',
    seeProgrammeArrow: 'Voir le programme →',
    essentials: 'L’essentiel.',
    costTag: 'Entièrement finançable avec Erasmus+ KA1',
    feeSentence: (fee, days) => `${fee} € de frais de cours pour ${days} jours, exactement le montant versé par la bourse.`,
    factDates: 'Dates',
    factDuration: 'Durée',
    factFee: 'Frais de cours',
    factGroup: 'Groupe',
    factPlace: 'Lieu',
    days: (n) => `${n} jours`,
    group: (min, max) => `${min} à ${max} personnes`,
    whoFor: 'Pour qui.',
    takeHome: 'Ce que vous rapportez.',
    dayByDay: 'Jour par jour.',
    day: 'Jour',
    feeCovers: 'Ce que couvrent les frais.',
    included: 'Compris',
    whoTeaches: 'Qui anime',
    addShadowing: 'Ajouter du job shadowing',
    beforeBook: 'Avant de réserver.',
    otherCourses: 'Les autres formations.',
    howItWorks: 'Financement et réservation →',
    photo: 'photo',
    emailSubjectHub: 'Formations pour enseignants à Ferrol',
    emailSubjectCourse: 'Préinscription',
  },
}
