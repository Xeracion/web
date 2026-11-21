import type { TeacherCourse, TeacherTrainingContent } from './types'
import { TEACHER_TRAINING_PATHS } from './paths'

// Nederlandse versie van de cursussen voor leraren (/nl/nascholing-leraren/).
// Vertaling van src/content/en/teacherTraining.ts: dezelfde gegevens, dezelfde
// volgorde. Niet gelinkt in het menu (landingspagina voor zoekmachines).

const PATHS = TEACHER_TRAINING_PATHS.nl

const courses: TeacherCourse[] = [
  {
    id: 'camino',
    slug: PATHS.camino,
    name: 'Walking classroom: outdoor learning on the English Way',
    summary:
      'Zeven dagen lopen van Ferrol naar Santiago de Compostela. Elke etappe is een les in buitenleren die je meteen in je eigen lessen kunt gebruiken.',
    metaTitle: 'Nascholing buitenleren voor leraren op de Camino de Santiago · Erasmus+ KA1',
    metaDescription:
      'Zevendaagse Erasmus+ KA1 cursus voor leraren op de Engelse route van de Camino, van Ferrol naar Santiago de Compostela. Zes werkvormen voor buitenleren en een excursie voor je eigen school. 560 € cursusgeld.',
    heroHeading: 'Klaslokaal onderweg: leer buiten lesgeven terwijl je de Engelse route naar Santiago loopt.',
    heroText: [
      'Wat als je volgende nascholing helemaal geen klaslokaal had? Zeven dagen lang loop je de Engelse route (Camino Inglés) van de haven van Ferrol naar Santiago de Compostela, zo’n 115 km langs rivierdelta’s, middeleeuwse stadjes en Atlantisch bos. Elke etappe is een les. Je probeert zes werkvormen voor buitenleren eerst zelf uit als leerling, en maakt er daarna een excursie van voor je eigen leerlingen.',
      'Je loopt in een kleine groep met leraren uit heel Europa, begeleid door een team dat al meer dan tien jaar internationale leerprogramma’s in deze regio organiseert. Je gaat naar huis met een kant-en-klaar plan voor een buitenles, een manier om leren buiten de klas te beoordelen, en collega’s om je volgende Erasmus+ project mee op te zetten.',
    ],
    heroImage: '/img/proyectos/yeah/ruta-playa.webp',
    heroImageAlt: 'Een groep op een houten vlonder bij een strand luistert naar een gids',
    days: 7,
    fee: 560,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Maandag 12 tot en met zondag 18 juli 2027',
    shortDates: '12 tot en met 18 juli 2027',
    startDate: '2027-07-12',
    endDate: '2027-07-18',
    place: 'Van Ferrol naar Santiago de Compostela, Galicië',
    audience: [
      'Leraren basisonderwijs, voortgezet onderwijs en volwasseneneducatie, alle vakken',
      'Mentoren en schoolbegeleiders',
      'Docenten toerisme in het mbo',
    ],
    requirements:
      'Je moet 15 tot 25 km per dag kunnen lopen. Een volgauto rijdt elke etappe mee. Voertaal: Engels (B1 of hoger).',
    trainers:
      'Onder leiding van Fran Sequeiro. Als er docenten toerisme in de groep zitten, sluit Pam Guerrero aan met een blok over de Camino als toeristisch product en als lesmateriaal.',
    outcomes: [
      'Zes werkvormen voor buitenleren, zelf uitgeprobeerd',
      'Een excursie voor je eigen school, besproken met collega’s',
      'Een leerdagboek en een plan om het met je team te delen',
      'Contacten in andere landen voor toekomstige projecten',
    ],
    programmeNote: 'De afstanden zijn bij benadering.',
    programmeColumns: ['Etappe', 'Thema', 'Afsluiting'],
    programme: [
      { day: 1, place: 'Ferrol. Workshop in de ochtend, ’s middags van Ferrol naar Neda (15 km)', focus: 'Waarom buiten de klas leren: onderzoek, veiligheid en groepsmanagement', then: 'Leercontract en persoonlijk dagboek' },
      { day: 2, place: 'Van Neda naar Pontedeume (16 km)', focus: 'Het landschap als tekst: het gebied lezen en plaatsgebonden leren', then: 'Zintuiglijke kaarten delen' },
      { day: 3, place: 'Van Pontedeume naar Betanzos (20 km)', focus: 'Seminar al lopend: debat en kritisch denken in beweging', then: 'Een leidende vraag per vak ontwerpen' },
      { day: 4, place: 'Van Betanzos naar Hospital de Bruma (25 km)', focus: 'Uitdaging, inspanning en welzijn: stil lopen en luisterduo’s', then: 'Reflectiekring' },
      { day: 5, place: 'Van Hospital de Bruma naar Sigüeiro (24 km)', focus: 'Beoordelen wat buiten gebeurt: bewijs, rubrics en portfolio', then: 'Eerste versie van je eigen excursie' },
      { day: 6, place: 'Van Sigüeiro naar Santiago (16 km). Workshop in de middag', focus: 'Inclusie: een excursie aanpassen aan verschillende mogelijkheden en budgetten', then: 'Feedback van collega’s op de ontwerpen' },
      { day: 7, place: 'Santiago de Compostela', focus: 'Van de Camino naar je school: transferplan, risico’s en toestemmingen', then: 'Presentaties, evaluatie en certificaten' },
    ],
    method:
      'Elke ochtend wordt de werkvorm van de dag in 20 minuten uitgelegd, onderweg geoefend en bij aankomst besproken. Voor de cursus is er een online sessie en een korte leestekst, en een maand later een terugkomsessie.',
    includes:
      'Cursus, materiaal, pelgrimspaspoort, volgauto, online sessies en certificaat. Overnachting, maaltijden en bagagevervoer zijn niet inbegrepen.',
    faqs: [
      {
        question: 'Hoe fit moet ik zijn?',
        answer:
          'De etappes zijn 15 tot 25 km. Je moet die afstand een paar dagen achter elkaar in een rustig tempo kunnen lopen. Een volgauto rijdt elke etappe mee, dus niemand blijft achter.',
      },
      {
        question: 'Waar slapen we onderweg?',
        answer:
          'Overnachting valt niet onder het cursusgeld: die betaal je uit de individuele ondersteuning van je beurs. We sturen je een lijst met aanbevolen adressen per etappe. Bagagevervoer kun je bij een lokale aanbieder boeken.',
      },
      {
        question: 'Kan ik hem combineren met de boscursus?',
        answer:
          'Ja. De cursus natuuronderwijs is de week ervoor, van 5 tot en met 9 juli 2027, dus je kunt ze allebei achter elkaar doen.',
      },
    ],
  },
  {
    id: 'forest',
    slug: PATHS.forest,
    name: 'Bringing the forest back: hands-on environmental education',
    summary:
      'Vijf dagen tussen Ferrol, de Fragas do Eume en A Capela om het herstel van een bos om te zetten in een project voor je school.',
    metaTitle: 'Nascholing natuur- en milieueducatie voor leraren in Spanje · Erasmus+ KA1',
    metaDescription:
      'Vijfdaagse Erasmus+ KA1 cursus in Galicië: een oud Atlantisch bos lezen, een dag lang een bos herstellen en een vergroeningsproject voor je school ontwerpen. 400 € cursusgeld.',
    heroHeading: 'Het bos terugbrengen: maak van het herstel van een bos een project voor je school.',
    heroText: [
      'Galicië is een groot deel van zijn inheemse Atlantische bos kwijtgeraakt aan eucalyptusplantages. Een groeiende beweging van vrijwilligers brengt het terug, perceel voor perceel. Deze cursus zet je midden in dat werk. Je leert een oud bos lezen in de Fragas do Eume, een van de best bewaarde Atlantische kustbossen van Europa, en daarna help je een dag lang een bos herstellen: eucalyptus verwijderen, eik, berk en kastanje planten.',
      'Terug in de workshop maak je van die ervaring een project voor je eigen school of organisatie: een tiny forest, een bijentuin of een geadopteerd perceel, met een eenvoudige methode om het een heel schooljaar met je leerlingen te volgen. Kennis van plantkunde is niet nodig.',
    ],
    heroImage: '/img/proyectos/restaurando-la-naturaleza/plantando-arboles.webp',
    heroImageAlt: 'Twee mensen graven om een jong boompje te planten op vrijgemaakte grond aan de kust',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 16,
    datesLabel: 'Maandag 5 tot en met vrijdag 9 juli 2027',
    shortDates: '5 tot en met 9 juli 2027',
    startDate: '2027-07-05',
    endDate: '2027-07-09',
    place: 'Ferrol, Fragas do Eume en A Capela, Galicië',
    audience: [
      'Docenten biologie, natuurwetenschappen en aardrijkskunde',
      'Docenten groen onderwijs in het mbo: landbouw, bosbouw en milieu',
      'Volwasseneneducatie en medewerkers van natuur- en milieuorganisaties',
    ],
    requirements: 'Kennis van plantkunde is niet nodig. Voertaal: Engels.',
    trainers: 'Onder leiding van Fran Sequeiro, met het team van Stop Eucalipto op de hersteldag.',
    outcomes: [
      'Een methode om biodiversiteit te inventariseren die je met leerlingen en een telefoon kunt toepassen',
      'Eigen ervaring met een hersteldag met inheemse soorten',
      'Een vergroeningsproject voor je school: een tiny forest, een bijentuin of een geadopteerd perceel',
      'Een plan om de resultaten gedurende het schooljaar te meten',
    ],
    programmeColumns: ['Plaats', 'Ochtend', 'Middag'],
    programme: [
      { day: 1, place: 'Ferrol', focus: 'Het Atlantische bos en de opmars van de eucalyptus in Galicië. Het Europese kader voor leren voor duurzaamheid', then: 'Stadswandeling: natuur in de stad lezen. Voorstelling van de deelnemende scholen' },
      { day: 2, place: 'Fragas do Eume', focus: 'Hoe lees je een oud bos: lagen, indicatorsoorten, bodem en water', then: 'Veldwerk: transecten en een biodiversiteitsinventarisatie met citizen science apps' },
      { day: 3, place: 'A Capela', focus: 'Hersteldag: jonge eucalyptus verwijderen en inheemse soorten planten', then: 'Kwekerij en zaden verzamelen' },
      { day: 4, place: 'Ferrol', focus: 'Van het veld naar de klas: een vergroeningsproject voor school ontwerpen en inpassen in het curriculum', then: 'Workshop monitoring: indicatoren, herhaalfotografie, ouders en gemeente betrekken' },
      { day: 5, place: 'Ferrol', focus: 'Presentatie van de projecten en feedback van collega’s', then: 'Transferplan, mogelijkheden voor Europese samenwerking, evaluatie en certificaten' },
    ],
    method:
      'Twee dagen in het veld en drie in de workshop. Voor de cursus stuurt iedereen foto’s en een plattegrond van de eigen school, de basis voor het eigen project. Na drie maanden is er een online terugkomsessie.',
    includes:
      'Cursus, materiaal, gereedschap en handschoenen, vervoer naar de velddagen, online terugkomsessie en certificaat. Overnachting en maaltijden zijn niet inbegrepen.',
    faqs: [
      {
        question: 'Moet ik verstand hebben van planten of bosbouw?',
        answer: 'Nee. De cursus begint bij het begin en is bedoeld voor leraren van elk vak die met hun leerlingen buiten willen werken.',
      },
      {
        question: 'Wat neem ik mee?',
        answer:
          'Kleding en schoenen om buiten te werken, en voor de cursus foto’s en een plattegrond van je school. Gereedschap, handschoenen en vervoer naar het veld zijn inbegrepen.',
      },
      {
        question: 'Kan ik hem combineren met de Camino-cursus?',
        answer:
          'Ja. De cursus Walking classroom begint de maandag erna, van 12 tot en met 18 juli 2027, dus je kunt ze allebei achter elkaar doen.',
      },
    ],
  },
  {
    id: 'ai',
    slug: PATHS.ai,
    name: 'Erasmus+ without the paperwork: AI and digital tools for project coordinators',
    summary:
      'Vijf dagen in Ferrol om naar huis te gaan met je eigen projectadministratie opgezet en werkend: begroting, bonnetjes, verslagen en AI.',
    metaTitle: 'AI en digitale tools voor Erasmus+ coördinatoren · KA1 cursus in Spanje',
    metaDescription:
      'Vijfdaagse Erasmus+ KA1 cursus in Ferrol voor projectcoördinatoren: begrotingsbewaking, bonnetjes en declaraties, AI voor aanvragen en verslagen, en privacy. 400 € cursusgeld.',
    heroHeading: 'Minder papierwerk, meer project: bouw in vijf dagen je eigen administratiesysteem.',
    heroText: [
      'Als je Erasmus+ projecten coördineert, weet je dat het echte werk in spreadsheets, bonnetjes en verslagen zit, meestal ’s avonds laat. Deze cursus wordt gegeven door een team dat al meer dan tien jaar Europese projecten beheert en het zat was om alles met de hand te doen. We hebben onze eigen tools gebouwd. In vijf dagen laten we je zien hoe, en bouw jij de jouwe.',
      'Neem je eigen project mee. Op vrijdag heb je een begrotingsoverzicht dat past bij je subsidie, een werkwijze die van een foto van een treinkaartje een regel in je administratie maakt, en geteste AI-prompts voor aanvragen, leerovereenkomsten en eindverslagen. Zonder programmeren, en met een duidelijke handleiding om AI te gebruiken zonder de gegevens van deelnemers in gevaar te brengen.',
    ],
    heroImage: '/img/en/oficina-equipo.webp',
    heroImageAlt: 'Het team van Xeración werkt op kantoor aan hun laptops',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Maandag 18 tot en met vrijdag 22 oktober 2027',
    shortDates: '18 tot en met 22 oktober 2027',
    startDate: '2027-10-18',
    endDate: '2027-10-22',
    place: 'Ferrol, Galicië',
    audience: [
      'Erasmus+ coördinatoren in het primair en voortgezet onderwijs, mbo en volwasseneneducatie',
      'Schoolleiders',
      'Administratief personeel',
    ],
    requirements:
      'Eigen laptop en basiskennis van spreadsheets. Programmeren is niet nodig. Voertaal: Engels.',
    trainers: 'Onder leiding van Fran Sequeiro, die de administratieve tools heeft ontwikkeld die Xeración dagelijks gebruikt.',
    outcomes: [
      'Een kaart van je werkprocessen die laat zien waar je de meeste uren verliest',
      'Een begrotingsoverzicht afgestemd op de eenheidskosten van je project',
      'Een werkwijze voor bonnetjes en declaraties met automatisch uitlezen van documenten',
      'Sjablonen en richtlijnen om aanvragen, overeenkomsten en verslagen met AI te schrijven',
      'Duidelijke privacycriteria voor het gebruik van deze tools',
    ],
    programmeColumns: ['Thema', 'Ochtend', 'Middag'],
    programme: [
      { day: 1, place: 'Waar de tijd heen gaat', focus: 'De levenscyclus van een KA1 en KA2 project vanuit de administratie', then: 'Iedere deelnemer tekent de eigen werkprocessen en kiest wat hij of zij deze week wil oplossen' },
      { day: 2, place: 'Begroting', focus: 'Begroting en controle: eenheidskosten, overzicht per deelnemer, liquiditeitsprognose', then: 'Workshop: het begrotingsoverzicht opzetten met de gegevens van je eigen project' },
      { day: 3, place: 'Bonnetjes', focus: 'Bonnetjes en declaraties: van de foto van het kaartje naar de spreadsheet. Demonstratie van de tools van Xeración', then: 'Workshop: je eigen werkwijze om documenten te verzamelen en te controleren. Privacy en de grenzen van AI' },
      { day: 4, place: 'Schrijven', focus: 'Beter en sneller schrijven met AI: aanvragen, leerovereenkomsten, eindverslagen en verspreiding', then: 'Workshop: een volledig proces automatiseren, van inschrijfformulier tot eindproduct' },
      { day: 5, place: 'Jouw systeem', focus: 'Presentatie van de gebouwde systemen en feedback van collega’s', then: 'Invoeringsplan voor je organisatie, nieuwe oproepen volgen, evaluatie en certificaten' },
    ],
    method:
      'Je werkt altijd aan je echte project, dus neem je begroting en sjablonen mee. Vooraf is er een online sessie om je gegevens voor te bereiden, en zes weken later een terugkomsessie.',
    includes:
      'Cursus, sjablonen en handleidingen, online sessies en certificaat. Licenties voor betaalde tools zijn niet inbegrepen: de cursus kan met de gratis versies worden gevolgd.',
    faqs: [
      {
        question: 'Moet ik kunnen programmeren?',
        answer: 'Nee. Je hebt een laptop en basiskennis van spreadsheets nodig. Alles wordt gebouwd met tools die zonder programmeren werken.',
      },
      {
        question: 'Moet ik software kopen?',
        answer: 'Nee. Betaalde licenties zitten niet in het cursusgeld, en de hele cursus kan met de gratis versies van de tools.',
      },
      {
        question: 'Hoe zit het met de gegevens van deelnemers?',
        answer:
          'Privacy is onderdeel van het programma: je gaat naar huis met duidelijke criteria over wat je wel en niet in AI-tools mag invoeren en hoe je persoonsgegevens veilig houdt.',
      },
    ],
  },
]

export const teacherTrainingNl: TeacherTrainingContent = {
  lang: 'nl',
  ogLocale: 'nl_NL',
  basePath: PATHS.base,
  courses,
  hub: {
    metaTitle: 'Erasmus+ KA1 nascholing voor leraren in Spanje · Galicië',
    metaDescription:
      'Erasmus+ KA1 cursussen voor leraren en schoolpersoneel in Ferrol, Galicië: buitenleren op de Camino de Santiago, natuur- en milieueducatie en AI-tools voor Erasmus+ coördinatoren.',
    heroHeading: 'Nascholing voor leraren in Galicië die je beurs volledig betaalt.',
    heroText: [
      'Drie korte cursussen voor leraren, opleiders en schoolpersoneel uit heel Europa, zo ontworpen dat het Erasmus+ KA1 cursusgeld ze volledig dekt: 80 € per dag, zonder extra kosten voor je school.',
      'Ze zijn gebaseerd op wat we sinds 2013 in Ferrol doen: buiten leren, natuur herstellen en Europese projecten uitvoeren. De cursussen worden in het Engels gegeven.',
    ],
    heroImage: '/img/proyectos/x-team/sesion-formacion.webp',
    heroImageAlt: 'Een groep zit in een zaal en volgt een presentatie',
    coursesHeading: 'Drie cursussen voor 2027.',
    coursesText: 'Kleine groepen met altijd deelnemers uit minstens twee landen. Voertaal Engels.',
    fundingHeading: 'Zo dekt de beurs de kosten.',
    fundingText: [
      'Een KA1 beurs bestaat uit drie aparte delen. Het cursusgeld is 80 € per deelnemer per cursusdag, met een maximum van 800 €. Ons cursusgeld is precies dat bedrag, dus je school hoeft er zelf niets bij te leggen.',
      'Overnachting en maaltijden betaal je uit de individuele ondersteuning, een apart dagbedrag. Voor de reis is er een vast bedrag op basis van de afstand.',
    ],
    fundingFacts: [
      { label: 'Cursusgeld', value: '80 € per dag' },
      { label: 'Duur', value: '5 of 7 dagen' },
      { label: 'Groep', value: '8 tot 16 personen' },
      { label: 'Taal', value: 'Engels' },
    ],
    stepsHeading: 'Van de eerste mail tot het certificaat.',
    steps: [
      { title: 'Vooraanmelden', text: 'Stuur ons een bericht. Vooraanmelden is gratis en verplicht je school tot niets.' },
      { title: 'Aanvragen', text: 'We sturen je het cursusblad met doelen en leerresultaten, ons OID en een vooraanmeldingsbrief voor je aanvraag.' },
      { title: 'Bevestigen', text: 'Zodra de beurs is toegekend, bevestig je de plaatsen en sturen we de factuur naar je school, de ontvanger van de beurs.' },
      { title: 'Leren en certificeren', text: 'We tekenen je leerovereenkomst en aan het eind krijg je een deelnamecertificaat en hulp bij Europass Mobiliteit.' },
    ],
    extrasHeading: 'Goed om te weten.',
    shadowingHeading: 'Voeg een week job shadowing toe.',
    shadowingText:
      'Wil je een cursus combineren met job shadowing, dan organiseren we observatiebezoeken bij scholen en organisaties in Ferrolterra. Dat is een optionele extra, met een eigen prijs.',
    stayHeading: 'Verblijf in Ferrol.',
    stayText:
      'Overnachting valt nooit onder het cursusgeld. Als je wilt, helpen we je aan een verblijf in Ferrol, tegen een aparte prijs. Bij de Camino-cursus krijg je een lijst met aanbevolen adressen per etappe.',
    trainersHeading: 'Wie geeft les.',
    trainersText:
      'De cursussen staan onder leiding van Fran Sequeiro, coördinator van Xeración, een team dat sinds 2013 internationale leerprogramma’s in Galicië organiseert. Pam Guerrero sluit aan bij de Camino-cursus als er docenten toerisme in de groep zitten.',
    trainersLinkLabel: 'Ons team (in het Engels)',
    faqHeading: 'Vragen van coördinatoren.',
    faqs: [
      {
        question: 'Wordt het cursusgeld volledig door Erasmus+ betaald?',
        answer:
          'Ja. Erasmus+ KA1 betaalt 80 € per deelnemer per cursusdag, met een maximum van 800 € per persoon. Ons cursusgeld is 400 € voor de vijfdaagse cursussen en 560 € voor de zevendaagse cursus, precies wat de beurs dekt.',
      },
      {
        question: 'Wie kan meedoen?',
        answer:
          'Leraren en personeel uit het primair en voortgezet onderwijs, het mbo en de volwasseneneducatie met een KA1 beurs, via een geaccrediteerde organisatie (KA121) of een kortlopend project (KA122).',
      },
      {
        question: 'Moet ik de cursus in mijn aanvraag noemen?',
        answer:
          'Het is niet verplicht, maar het helpt. We sturen je het cursusblad met doelen en leerresultaten en een vooraanmeldingsbrief die je kunt bijvoegen.',
      },
      {
        question: 'Naar wie gaat de factuur?',
        answer: 'Naar de uitzendende school of organisatie, die de beurs ontvangt. Overnachting, als je die via ons boekt, wordt apart gefactureerd.',
      },
      {
        question: 'Zijn er leraren uit andere landen?',
        answer: 'Ja. Elke groep bestaat uit deelnemers uit minstens twee landen, zodat je collega’s uit andere delen van Europa leert kennen.',
      },
      {
        question: 'Krijg ik een certificaat?',
        answer:
          'Ja. Een certificaat met de naam van de cursus, beschrijving, leerresultaten, data, locatie en trainers, en hulp bij het invullen van je Europass Mobiliteit.',
      },
      {
        question: 'Waar vinden de cursussen plaats?',
        answer:
          'In Ferrol, Galicië, met velddagen in het natuurpark Fragas do Eume en in A Capela. De Camino-cursus loopt van Ferrol naar Santiago de Compostela. Het vliegveld van A Coruña ligt op 50 km, Santiago de Compostela op een uur rijden.',
      },
      {
        question: 'In welke taal worden de cursussen gegeven?',
        answer: 'In het Engels, omdat de groepen leraren uit verschillende landen samenbrengen. Een gemiddeld niveau (B1) is genoeg.',
      },
    ],
    closingHeading: 'Zullen we een plek voor je reserveren?',
    closingText: 'Laat ons weten welke cursus, met hoeveel mensen en wanneer je wilt reizen. We antwoorden persoonlijk, in het Engels of Spaans.',
    ctaLabel: 'Ik wil me vooraanmelden',
    ctaDetailsLabel: 'Bekijk de cursussen',
  },
  ui: {
    breadcrumb: 'Nascholing leraren',
    seeProgramme: 'Bekijk het programma',
    seeProgrammeArrow: 'Bekijk het programma →',
    essentials: 'In het kort.',
    costTag: 'Volledig te financieren met Erasmus+ KA1',
    feeSentence: (fee, days) => `${fee} € cursusgeld voor ${days} dagen, precies het bedrag dat de beurs betaalt.`,
    factDates: 'Data',
    factDuration: 'Duur',
    factFee: 'Cursusgeld',
    factGroup: 'Groep',
    factPlace: 'Plaats',
    days: (n) => `${n} dagen`,
    group: (min, max) => `${min} tot ${max} personen`,
    whoFor: 'Voor wie.',
    takeHome: 'Wat je meeneemt.',
    dayByDay: 'Dag voor dag.',
    day: 'Dag',
    feeCovers: 'Wat het cursusgeld dekt.',
    included: 'Inbegrepen',
    whoTeaches: 'Wie geeft les',
    addShadowing: 'Job shadowing erbij',
    beforeBook: 'Voor je boekt.',
    otherCourses: 'Andere cursussen.',
    howItWorks: 'Zo werken financiering en boeken →',
    photo: 'foto',
    emailSubjectHub: 'Nascholing voor leraren in Ferrol',
    emailSubjectCourse: 'Vooraanmelding',
  },
}
