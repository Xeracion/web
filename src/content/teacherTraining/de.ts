import type { TeacherCourse, TeacherTrainingContent } from './types'
import { TEACHER_TRAINING_PATHS } from './paths'

// Deutsche Fassung der Kurse für Lehrkräfte (/de/lehrerfortbildung/).
// Übersetzung von src/content/en/teacherTraining.ts: gleiche Daten, gleiche
// Reihenfolge. Nicht im Menü verlinkt (Landingpage für die Suche).

const PATHS = TEACHER_TRAINING_PATHS.de

const courses: TeacherCourse[] = [
  {
    id: 'camino',
    slug: PATHS.camino,
    name: 'Walking classroom: outdoor learning on the English Way',
    summary:
      'Sieben Tage zu Fuß von Ferrol nach Santiago de Compostela. Jede Etappe ist eine Lektion in Draußenlernen, die Sie direkt in Ihren Unterricht mitnehmen.',
    metaTitle: 'Fortbildung Draußenlernen für Lehrkräfte auf dem Jakobsweg · Erasmus+ KA1',
    metaDescription:
      'Siebentägige Erasmus+ KA1 Fortbildung für Lehrkräfte auf dem Englischen Weg von Ferrol nach Santiago de Compostela. Sechs Methoden des Draußenlernens und ein Unterrichtsgang für Ihre Schule. 560 € Kursgebühr.',
    heroHeading: 'Klassenzimmer unterwegs: Draußen unterrichten lernen, während Sie den Englischen Weg nach Santiago gehen.',
    heroText: [
      'Was wäre, wenn Ihre nächste Fortbildung gar kein Klassenzimmer hätte? Sieben Tage lang gehen Sie den Englischen Weg (Camino Inglés) vom Hafen von Ferrol bis Santiago de Compostela, rund 115 km durch Flussmündungen, mittelalterliche Städte und atlantischen Wald. Jede Etappe ist eine Lektion. Sie probieren sechs Methoden des Draußenlernens zuerst selbst als Lernende aus und machen daraus einen Unterrichtsgang für Ihre eigenen Schülerinnen und Schüler.',
      'Sie gehen in einer kleinen Gruppe mit Lehrkräften aus ganz Europa, begleitet von einem Team, das seit mehr als zehn Jahren internationale Lernprogramme in dieser Region durchführt. Sie fahren nach Hause mit einem einsatzbereiten Konzept für den Unterricht im Freien, einer Methode, um Lernen außerhalb des Klassenzimmers zu bewerten, und Kolleginnen und Kollegen für Ihr nächstes Erasmus+ Projekt.',
    ],
    heroImage: '/img/proyectos/yeah/ruta-playa.webp',
    heroImageAlt: 'Eine Gruppe auf einem Holzsteg an einem Strand hört einem Guide zu',
    days: 7,
    fee: 560,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Montag, 12. bis Sonntag, 18. Juli 2027',
    shortDates: '12. bis 18. Juli 2027',
    startDate: '2027-07-12',
    endDate: '2027-07-18',
    place: 'Von Ferrol nach Santiago de Compostela, Galicien',
    audience: [
      'Lehrkräfte der Primar- und Sekundarstufe und der Erwachsenenbildung, alle Fächer',
      'Beratungslehrkräfte und Schulsozialarbeit',
      'Lehrkräfte der beruflichen Bildung im Bereich Tourismus',
    ],
    requirements:
      'Sie sollten 15 bis 25 km am Tag gehen können. Ein Begleitfahrzeug fährt jede Etappe mit. Kurssprache: Englisch (ab B1).',
    trainers:
      'Leitung: Fran Sequeiro. Wenn Lehrkräfte aus dem Tourismus dabei sind, kommt Pam Guerrero mit einem Block über den Jakobsweg als touristisches Produkt und als Unterrichtsressource dazu.',
    outcomes: [
      'Sechs Methoden des Draußenlernens, selbst erprobt',
      'Ein Unterrichtsgang für Ihre eigene Schule, von Kolleginnen und Kollegen begutachtet',
      'Ein Lerntagebuch und ein Plan, es mit Ihrem Kollegium zu teilen',
      'Kontakte in anderen Ländern für künftige Projekte',
    ],
    programmeNote: 'Die Entfernungen sind ungefähre Angaben.',
    programmeColumns: ['Etappe', 'Thema', 'Abschluss'],
    programme: [
      { day: 1, place: 'Ferrol. Workshop am Vormittag, nachmittags von Ferrol nach Neda (15 km)', focus: 'Warum außerhalb des Klassenzimmers lernen: Forschungslage, Sicherheit und Gruppenführung', then: 'Lernvereinbarung und persönliches Tagebuch' },
      { day: 2, place: 'Von Neda nach Pontedeume (16 km)', focus: 'Die Landschaft als Text: das Gelände lesen und ortsbezogenes Lernen', then: 'Austausch über sensorische Karten' },
      { day: 3, place: 'Von Pontedeume nach Betanzos (20 km)', focus: 'Seminar im Gehen: Diskussion und kritisches Denken in Bewegung', then: 'Eine Leitfrage für jedes Fach entwickeln' },
      { day: 4, place: 'Von Betanzos nach Hospital de Bruma (25 km)', focus: 'Herausforderung, Anstrengung und Wohlbefinden: Gehen in Stille, Zuhörpaare', then: 'Reflexionskreis' },
      { day: 5, place: 'Von Hospital de Bruma nach Sigüeiro (24 km)', focus: 'Bewerten, was draußen passiert: Belege, Bewertungsraster und Portfolio', then: 'Erster Entwurf Ihres eigenen Unterrichtsgangs' },
      { day: 6, place: 'Von Sigüeiro nach Santiago (16 km). Workshop am Nachmittag', focus: 'Inklusion: einen Unterrichtsgang an unterschiedliche Fähigkeiten und Budgets anpassen', then: 'Kollegiales Feedback zu den Entwürfen' },
      { day: 7, place: 'Santiago de Compostela', focus: 'Vom Jakobsweg in die Schule: Transferplan, Risiken und Genehmigungen', then: 'Präsentationen, Evaluation und Zertifikate' },
    ],
    method:
      'Jeden Morgen wird die Methode des Tages in 20 Minuten vorgestellt, beim Gehen geübt und bei der Ankunft ausgewertet. Vor dem Kurs gibt es eine Online-Sitzung und eine kurze Lektüre, einen Monat danach eine Nachbereitung.',
    includes:
      'Fortbildung, Materialien, Pilgerausweis, Begleitfahrzeug, Online-Sitzungen und Zertifikat. Unterkunft, Verpflegung und Gepäcktransport sind nicht enthalten.',
    faqs: [
      {
        question: 'Wie fit muss ich sein?',
        answer:
          'Die Etappen sind 15 bis 25 km lang. Sie sollten diese Strecke an mehreren Tagen hintereinander in ruhigem Tempo gehen können. Ein Begleitfahrzeug fährt jede Etappe mit, niemand bleibt zurück.',
      },
      {
        question: 'Wo übernachten wir unterwegs?',
        answer:
          'Die Unterkunft ist nicht Teil der Kursgebühr: Sie wird aus der individuellen Unterstützung Ihres Zuschusses bezahlt. Wir schicken Ihnen eine Liste empfohlener Unterkünfte für jede Etappe. Den Gepäcktransport können Sie bei einem örtlichen Anbieter buchen.',
      },
      {
        question: 'Kann ich ihn mit dem Waldkurs kombinieren?',
        answer:
          'Ja. Der Kurs zur Umweltbildung findet in der Woche davor statt, vom 5. bis 9. Juli 2027. Sie können also beide direkt hintereinander machen.',
      },
    ],
  },
  {
    id: 'forest',
    slug: PATHS.forest,
    name: 'Bringing the forest back: hands-on environmental education',
    summary:
      'Fünf Tage zwischen Ferrol, den Fragas do Eume und A Capela, um die Wiederherstellung eines Waldes in ein Projekt für Ihre Schule zu verwandeln.',
    metaTitle: 'Fortbildung Umweltbildung für Lehrkräfte in Spanien · Erasmus+ KA1',
    metaDescription:
      'Fünftägige Erasmus+ KA1 Fortbildung in Galicien: einen alten atlantischen Wald lesen, einen Tag lang einen Wald wiederherstellen und ein Renaturierungsprojekt für Ihre Schule planen. 400 € Kursgebühr.',
    heroHeading: 'Den Wald zurückholen: Machen Sie aus der Wiederherstellung eines Waldes ein Projekt für Ihre Schule.',
    heroText: [
      'Galicien hat einen großen Teil seines heimischen atlantischen Waldes an Eukalyptusplantagen verloren. Eine wachsende Bewegung von Freiwilligen holt ihn zurück, Fläche für Fläche. Dieser Kurs bringt Sie mitten in diese Arbeit. Sie lesen einen alten Wald in den Fragas do Eume, einem der am besten erhaltenen atlantischen Küstenwälder Europas, und verbringen dann einen Tag damit, einen Wald wiederherzustellen: Eukalyptus entfernen, Eichen, Birken und Kastanien pflanzen.',
      'Zurück im Workshop machen Sie aus dieser Erfahrung ein Projekt für Ihre eigene Schule oder Einrichtung: einen Miniwald, einen Bestäubergarten oder eine Patenfläche, mit einer einfachen Methode, um sie das ganze Jahr über mit Ihren Schülerinnen und Schülern zu beobachten. Botanische Vorkenntnisse sind nicht nötig.',
    ],
    heroImage: '/img/proyectos/restaurando-la-naturaleza/plantando-arboles.webp',
    heroImageAlt: 'Zwei Personen graben, um einen jungen Baum auf freigeräumtem Küstengelände zu pflanzen',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 16,
    datesLabel: 'Montag, 5. bis Freitag, 9. Juli 2027',
    shortDates: '5. bis 9. Juli 2027',
    startDate: '2027-07-05',
    endDate: '2027-07-09',
    place: 'Ferrol, Fragas do Eume und A Capela, Galicien',
    audience: [
      'Lehrkräfte für Biologie, Naturwissenschaften und Geografie',
      'Lehrkräfte der beruflichen Bildung in Landwirtschaft, Forstwirtschaft und Umwelt',
      'Erwachsenenbildung und Fachkräfte aus Umweltorganisationen',
    ],
    requirements: 'Botanische Vorkenntnisse sind nicht nötig. Kurssprache: Englisch.',
    trainers: 'Leitung: Fran Sequeiro, am Tag der Wiederherstellung mit dem Team von Stop Eucalipto.',
    outcomes: [
      'Eine Methode zur Erfassung der Artenvielfalt, die Sie mit Schülerinnen, Schülern und einem Handy anwenden können',
      'Eigene Erfahrung bei einem Renaturierungstag mit heimischen Arten',
      'Ein Renaturierungsprojekt für Ihre Schule: ein Miniwald, ein Bestäubergarten oder eine Patenfläche',
      'Ein Plan, um die Ergebnisse über das Schuljahr zu messen',
    ],
    programmeColumns: ['Ort', 'Vormittag', 'Nachmittag'],
    programme: [
      { day: 1, place: 'Ferrol', focus: 'Der atlantische Wald und die Ausbreitung des Eukalyptus in Galicien. Der europäische Rahmen für Bildung für nachhaltige Entwicklung', then: 'Stadtrundgang: Natur in der Stadt lesen. Vorstellung der teilnehmenden Schulen' },
      { day: 2, place: 'Fragas do Eume', focus: 'Wie man einen alten Wald liest: Schichten, Zeigerarten, Boden und Wasser', then: 'Feldarbeit: Transekte und Erfassung der Artenvielfalt mit Citizen-Science-Apps' },
      { day: 3, place: 'A Capela', focus: 'Renaturierungstag: junge Eukalyptusbäume entfernen und heimische Arten pflanzen', then: 'Baumschule und Saatgutsammlung' },
      { day: 4, place: 'Ferrol', focus: 'Vom Gelände ins Klassenzimmer: ein schulisches Renaturierungsprojekt planen und in den Lehrplan einbinden', then: 'Workshop zur Beobachtung: Indikatoren, Wiederholungsfotografie, Familien und Gemeinde einbeziehen' },
      { day: 5, place: 'Ferrol', focus: 'Präsentation der Projekte und kollegiales Feedback', then: 'Transferplan, Möglichkeiten europäischer Zusammenarbeit, Evaluation und Zertifikate' },
    ],
    method:
      'Zwei Tage im Gelände und drei im Workshop. Vor dem Kurs schickt jede Person Fotos und einen Plan ihrer Schule, die die Grundlage ihres Projekts bilden. Drei Monate später gibt es eine Online-Nachbereitung.',
    includes:
      'Fortbildung, Materialien, Werkzeug und Handschuhe, Transport zu den Geländetagen, Online-Nachbereitung und Zertifikat. Unterkunft und Verpflegung sind nicht enthalten.',
    faqs: [
      {
        question: 'Brauche ich Kenntnisse über Pflanzen oder Forstwirtschaft?',
        answer: 'Nein. Der Kurs beginnt bei null und richtet sich an Lehrkräfte aller Fächer, die mit ihren Klassen draußen arbeiten möchten.',
      },
      {
        question: 'Was soll ich mitbringen?',
        answer:
          'Kleidung und Schuhe für die Arbeit im Freien, und vor Kursbeginn Fotos und einen Plan Ihrer Schule. Werkzeug, Handschuhe und Transport ins Gelände sind enthalten.',
      },
      {
        question: 'Kann ich ihn mit dem Jakobsweg-Kurs kombinieren?',
        answer:
          'Ja. Der Kurs Walking classroom beginnt am folgenden Montag, vom 12. bis 18. Juli 2027. Sie können also beide direkt hintereinander machen.',
      },
    ],
  },
  {
    id: 'ai',
    slug: PATHS.ai,
    name: 'Erasmus+ without the paperwork: AI and digital tools for project coordinators',
    summary:
      'Fünf Tage in Ferrol, nach denen Ihr eigenes Projektmanagement steht und funktioniert: Budget, Belege, Berichte und KI.',
    metaTitle: 'KI und digitale Tools für Erasmus+ Koordinatoren · Fortbildung KA1 in Spanien',
    metaDescription:
      'Fünftägige Erasmus+ KA1 Fortbildung in Ferrol für Projektkoordination: Budgetkontrolle, Belege und Erstattungen, KI für Anträge und Berichte, Datenschutz. 400 € Kursgebühr.',
    heroHeading: 'Weniger Papierkram, mehr Projekt: Bauen Sie in fünf Tagen Ihr eigenes Verwaltungssystem auf.',
    heroText: [
      'Wenn Sie Erasmus+ Projekte koordinieren, wissen Sie, dass die eigentliche Arbeit in Tabellen, Belegen und Berichten steckt, meistens spät am Abend. Diesen Kurs leitet ein Team, das seit mehr als zehn Jahren europäische Projekte verwaltet und es leid war, alles von Hand zu machen. Wir haben unsere eigenen Werkzeuge gebaut. In fünf Tagen zeigen wir Ihnen, wie, und Sie bauen Ihre.',
      'Bringen Sie Ihr eigenes Projekt mit. Am Freitag haben Sie eine Budgetübersicht, die zu Ihrem Zuschuss passt, einen Ablauf, der aus dem Foto eines Zugtickets eine Zeile in Ihrer Abrechnung macht, und getestete KI-Prompts für Anträge, Lernvereinbarungen und Abschlussberichte. Ohne Programmierkenntnisse, und mit einem klaren Leitfaden, wie Sie KI nutzen, ohne die Daten der Teilnehmenden zu gefährden.',
    ],
    heroImage: '/img/en/oficina-equipo.webp',
    heroImageAlt: 'Das Team von Xeración arbeitet im Büro an seinen Laptops',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Montag, 18. bis Freitag, 22. Oktober 2027',
    shortDates: '18. bis 22. Oktober 2027',
    startDate: '2027-10-18',
    endDate: '2027-10-22',
    place: 'Ferrol, Galicien',
    audience: [
      'Erasmus+ Koordinatorinnen und Koordinatoren an Schulen, in der beruflichen Bildung und in der Erwachsenenbildung',
      'Schulleitungen',
      'Verwaltungspersonal',
    ],
    requirements:
      'Eigener Laptop und Grundkenntnisse in Tabellenkalkulation. Programmierkenntnisse sind nicht nötig. Kurssprache: Englisch.',
    trainers: 'Leitung: Fran Sequeiro, der die Verwaltungswerkzeuge entwickelt hat, die Xeración jeden Tag nutzt.',
    outcomes: [
      'Eine Karte Ihrer Arbeitsabläufe, die zeigt, wo Sie die meisten Stunden verlieren',
      'Eine Budgetübersicht, angepasst an die Stückkosten Ihres Projekts',
      'Ein Ablauf für Belege und Erstattungen mit automatischer Dokumentenerkennung',
      'Vorlagen und Leitlinien, um Anträge, Vereinbarungen und Berichte mit KI zu schreiben',
      'Klare Datenschutzkriterien für den Einsatz dieser Werkzeuge',
    ],
    programmeColumns: ['Thema', 'Vormittag', 'Nachmittag'],
    programme: [
      { day: 1, place: 'Wohin die Zeit geht', focus: 'Der Lebenszyklus eines KA1 und KA2 Projekts aus Sicht der Verwaltung', then: 'Jede Person zeichnet ihre aktuellen Abläufe und wählt aus, was sie in dieser Woche lösen will' },
      { day: 2, place: 'Budget', focus: 'Budget und Kontrolle: Stückkosten, Übersicht pro Teilnehmenden, Liquiditätsplanung', then: 'Workshop: die Budgetübersicht mit den Daten des eigenen Projekts aufbauen' },
      { day: 3, place: 'Belege', focus: 'Belege und Erstattungen: vom Foto des Tickets in die Tabelle. Vorführung der Werkzeuge von Xeración', then: 'Workshop: ein eigener Ablauf zum Sammeln und Prüfen von Dokumenten. Datenschutz und Grenzen der KI' },
      { day: 4, place: 'Schreiben', focus: 'Besser und schneller schreiben mit KI: Anträge, Lernvereinbarungen, Abschlussberichte und Verbreitung', then: 'Workshop: einen ganzen Prozess automatisieren, vom Anmeldeformular bis zum fertigen Dokument' },
      { day: 5, place: 'Ihr System', focus: 'Präsentation der aufgebauten Systeme und kollegiales Feedback', then: 'Umsetzungsplan für Ihre Einrichtung, Ausschreibungen im Blick behalten, Evaluation und Zertifikate' },
    ],
    method:
      'Sie arbeiten immer an Ihrem echten Projekt, bringen Sie also Ihr Budget und Ihre Vorlagen mit. Vorher gibt es eine Online-Sitzung, um Ihre Daten vorzubereiten, und sechs Wochen danach eine Nachbereitung.',
    includes:
      'Fortbildung, Vorlagen und Leitfäden, Online-Sitzungen und Zertifikat. Lizenzen für kostenpflichtige Werkzeuge sind nicht enthalten: Der Kurs funktioniert auch mit den kostenlosen Versionen.',
    faqs: [
      {
        question: 'Muss ich programmieren können?',
        answer: 'Nein. Sie brauchen einen Laptop und Grundkenntnisse in Tabellenkalkulation. Alles wird mit Werkzeugen gebaut, die ohne Programmieren funktionieren.',
      },
      {
        question: 'Muss ich Software kaufen?',
        answer: 'Nein. Kostenpflichtige Lizenzen sind nicht in der Gebühr enthalten, und der ganze Kurs funktioniert mit den kostenlosen Versionen der Werkzeuge.',
      },
      {
        question: 'Was ist mit den Daten der Teilnehmenden?',
        answer:
          'Datenschutz ist Teil des Programms: Sie gehen mit klaren Kriterien nach Hause, was Sie in KI-Werkzeuge eingeben dürfen und was nicht, und wie Sie personenbezogene Daten schützen.',
      },
    ],
  },
]

export const teacherTrainingDe: TeacherTrainingContent = {
  lang: 'de',
  ogLocale: 'de_DE',
  basePath: PATHS.base,
  courses,
  hub: {
    metaTitle: 'Erasmus+ KA1 Fortbildungen für Lehrkräfte in Spanien · Galicien',
    metaDescription:
      'Erasmus+ KA1 Kurse für Lehrkräfte und Schulpersonal in Ferrol, Galicien: Draußenlernen auf dem Jakobsweg, Umweltbildung und KI-Tools für Erasmus+ Koordination. Vollständig förderfähig.',
    heroHeading: 'Fortbildungen für Lehrkräfte in Galicien, die Ihr Zuschuss vollständig bezahlt.',
    heroText: [
      'Drei kurze Kurse für Lehrkräfte, Ausbildende und Schulpersonal aus ganz Europa, so geplant, dass die Kursgebühr von Erasmus+ KA1 sie vollständig abdeckt: 80 € pro Tag, ohne Zusatzkosten für Ihre Schule.',
      'Sie beruhen auf dem, was wir seit 2013 in Ferrol tun: draußen lernen, Natur wiederherstellen und europäische Projekte durchführen. Die Kurse finden auf Englisch statt.',
    ],
    heroImage: '/img/proyectos/x-team/sesion-formacion.webp',
    heroImageAlt: 'Eine Gruppe sitzt in einem Raum und verfolgt eine Präsentation',
    coursesHeading: 'Drei Kurse für 2027.',
    coursesText: 'Kleine Gruppen aus immer mindestens zwei Ländern. Kurssprache Englisch.',
    fundingHeading: 'So deckt der Zuschuss die Kosten.',
    fundingText: [
      'Ein KA1 Zuschuss besteht aus drei getrennten Teilen. Die Kursgebühr beträgt 80 € pro Person und Kurstag, höchstens 800 €. Unsere Gebühr entspricht genau diesem Betrag, Ihre Schule muss also kein eigenes Geld dazugeben.',
      'Unterkunft und Verpflegung werden aus der individuellen Unterstützung bezahlt, einem eigenen Tagessatz. Für die Reise gibt es einen festen Betrag je nach Entfernung.',
    ],
    fundingFacts: [
      { label: 'Kursgebühr', value: '80 € pro Tag' },
      { label: 'Dauer', value: '5 oder 7 Tage' },
      { label: 'Gruppe', value: '8 bis 16 Personen' },
      { label: 'Sprache', value: 'Englisch' },
    ],
    stepsHeading: 'Von der ersten E-Mail bis zum Zertifikat.',
    steps: [
      { title: 'Voranmelden', text: 'Schreiben Sie uns. Die Voranmeldung ist kostenlos und für Ihre Schule unverbindlich.' },
      { title: 'Beantragen', text: 'Wir schicken Ihnen das Kursblatt mit Zielen und Lernergebnissen, unsere OID und ein Voranmeldeschreiben für Ihren Antrag.' },
      { title: 'Bestätigen', text: 'Sobald der Zuschuss bewilligt ist, bestätigen Sie die Plätze und wir stellen Ihrer Schule als Zuschussempfängerin die Rechnung.' },
      { title: 'Lernen und zertifizieren', text: 'Wir unterschreiben Ihre Lernvereinbarung, und am Ende erhalten Sie eine Teilnahmebescheinigung und Unterstützung beim Europass Mobilität.' },
    ],
    extrasHeading: 'Gut zu wissen.',
    shadowingHeading: 'Eine Woche Job Shadowing dazu.',
    shadowingText:
      'Wenn Sie einen Kurs mit Job Shadowing verbinden möchten, organisieren wir Hospitationen in Schulen und Einrichtungen in Ferrolterra. Das ist ein optionales Extra mit eigenem Preis.',
    stayHeading: 'Wohnen in Ferrol.',
    stayText:
      'Die Unterkunft ist nie Teil der Kursgebühr. Wenn Sie möchten, helfen wir Ihnen, eine Unterkunft in Ferrol zu finden, zu einem eigenen Preis. Beim Jakobsweg-Kurs erhalten Sie eine Liste empfohlener Unterkünfte für jede Etappe.',
    trainersHeading: 'Wer unterrichtet.',
    trainersText:
      'Die Kurse leitet Fran Sequeiro, Koordinator von Xeración, einem Team, das seit 2013 internationale Lernprogramme in Galicien durchführt. Pam Guerrero kommt beim Jakobsweg-Kurs dazu, wenn Lehrkräfte aus dem Tourismus in der Gruppe sind.',
    trainersLinkLabel: 'Das Team (auf Englisch)',
    faqHeading: 'Fragen aus der Koordination.',
    faqs: [
      {
        question: 'Wird die Kursgebühr vollständig von Erasmus+ übernommen?',
        answer:
          'Ja. Erasmus+ KA1 zahlt 80 € pro Person und Kurstag, höchstens 800 € pro Person. Unsere Gebühren betragen 400 € für die fünftägigen Kurse und 560 € für den siebentägigen Kurs, genau das, was der Zuschuss abdeckt.',
      },
      {
        question: 'Wer kann teilnehmen?',
        answer:
          'Lehrkräfte und Personal aus Schulen, beruflicher Bildung und Erwachsenenbildung mit einem KA1 Zuschuss, entweder über eine akkreditierte Einrichtung (KA121) oder ein Kurzzeitprojekt (KA122).',
      },
      {
        question: 'Muss ich den Kurs in meinem Antrag nennen?',
        answer:
          'Es ist keine Pflicht, hilft aber. Wir schicken Ihnen das Kursblatt mit Zielen und Lernergebnissen und ein Voranmeldeschreiben, das Sie beilegen können.',
      },
      {
        question: 'An wen geht die Rechnung?',
        answer: 'An die entsendende Schule oder Einrichtung, die den Zuschuss erhält. Die Unterkunft, falls Sie sie über uns buchen, wird getrennt abgerechnet.',
      },
      {
        question: 'Sind Lehrkräfte aus anderen Ländern dabei?',
        answer: 'Ja. Jede Gruppe besteht aus mindestens zwei Ländern, so lernen Sie Kolleginnen und Kollegen aus anderen Teilen Europas kennen.',
      },
      {
        question: 'Bekomme ich ein Zertifikat?',
        answer:
          'Ja. Ein Zertifikat mit Kursname, Beschreibung, Lernergebnissen, Daten, Ort und Kursleitung, und Unterstützung beim Ausfüllen Ihres Europass Mobilität.',
      },
      {
        question: 'Wo finden die Kurse statt?',
        answer:
          'In Ferrol, Galicien, mit Geländetagen im Naturpark Fragas do Eume und in A Capela. Der Jakobsweg-Kurs führt zu Fuß von Ferrol nach Santiago de Compostela. Der Flughafen A Coruña liegt 50 km entfernt, Santiago de Compostela eine Autostunde.',
      },
      {
        question: 'In welcher Sprache finden die Kurse statt?',
        answer: 'Auf Englisch, weil die Gruppen Lehrkräfte aus mehreren Ländern zusammenbringen. Ein mittleres Niveau (B1) reicht.',
      },
    ],
    closingHeading: 'Sollen wir Ihnen einen Platz reservieren?',
    closingText: 'Sagen Sie uns, welcher Kurs, wie viele Personen und wann Sie reisen möchten. Wir antworten persönlich, gern auch auf Englisch oder Spanisch.',
    ctaLabel: 'Ich möchte mich voranmelden',
    ctaDetailsLabel: 'Zu den Kursen',
  },
  ui: {
    breadcrumb: 'Lehrerfortbildung',
    seeProgramme: 'Zum Programm',
    seeProgrammeArrow: 'Zum Programm →',
    essentials: 'Das Wichtigste.',
    costTag: 'Vollständig förderfähig mit Erasmus+ KA1',
    feeSentence: (fee, days) => `${fee} € Kursgebühr für ${days} Tage, genau der Betrag, den der Zuschuss zahlt.`,
    factDates: 'Termin',
    factDuration: 'Dauer',
    factFee: 'Kursgebühr',
    factGroup: 'Gruppe',
    factPlace: 'Ort',
    days: (n) => `${n} Tage`,
    group: (min, max) => `${min} bis ${max} Personen`,
    whoFor: 'Für wen.',
    takeHome: 'Was Sie mitnehmen.',
    dayByDay: 'Tag für Tag.',
    day: 'Tag',
    feeCovers: 'Was die Gebühr abdeckt.',
    included: 'Enthalten',
    whoTeaches: 'Kursleitung',
    addShadowing: 'Job Shadowing dazu',
    beforeBook: 'Vor der Buchung.',
    otherCourses: 'Weitere Kurse.',
    howItWorks: 'So funktionieren Förderung und Buchung →',
    photo: 'Foto',
    emailSubjectHub: 'Fortbildungen für Lehrkräfte in Ferrol',
    emailSubjectCourse: 'Voranmeldung',
  },
}
