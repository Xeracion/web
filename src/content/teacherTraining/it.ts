import type { TeacherCourse, TeacherTrainingContent } from './types'
import { TEACHER_TRAINING_PATHS } from './paths'

// Versione italiana dei corsi per docenti (/it/formazione-docenti/).
// Traduzione di src/content/en/teacherTraining.ts: stessi dati, stesso ordine.
// Non collegata dal menu (landing page per i motori di ricerca).

const PATHS = TEACHER_TRAINING_PATHS.it

const courses: TeacherCourse[] = [
  {
    id: 'camino',
    slug: PATHS.camino,
    name: 'Walking classroom: outdoor learning on the English Way',
    summary:
      'Sette giorni a piedi da Ferrol a Santiago de Compostela. Ogni tappa è una lezione di educazione all’aperto che riporti a scuola pronta da usare.',
    metaTitle: 'Corso di outdoor education per docenti sul Cammino di Santiago · Erasmus+ KA1',
    metaDescription:
      'Corso Erasmus+ KA1 di sette giorni per docenti sul Cammino Inglese, da Ferrol a Santiago de Compostela. Sei tecniche di apprendimento all’aperto e un’uscita didattica per la tua scuola. 560 € di quota.',
    heroHeading: 'La classe in cammino: impara a insegnare all’aperto percorrendo il Cammino Inglese fino a Santiago.',
    heroText: [
      'E se il tuo prossimo corso di formazione non avesse nessuna aula? Per sette giorni percorrerai il Cammino Inglese (Camino Inglés) dal porto di Ferrol fino a Santiago de Compostela, circa 115 km tra estuari, borghi medievali e bosco atlantico. Ogni tappa è una lezione. Proverai sei tecniche di apprendimento all’aperto prima da studente, poi le trasformerai in un’uscita didattica pensata per i tuoi alunni.',
      'Camminerai in un piccolo gruppo con docenti da tutta Europa, accompagnato da una squadra che organizza programmi di apprendimento internazionali in questa regione da più di dieci anni. Tornerai a casa con una lezione all’aperto pronta da usare, un metodo per valutare l’apprendimento fuori dall’aula e colleghi con cui costruire il tuo prossimo progetto Erasmus+.',
    ],
    heroImage: '/img/proyectos/yeah/ruta-playa.webp',
    heroImageAlt: 'Un gruppo su una passerella di legno davanti a una spiaggia ascolta una guida',
    days: 7,
    fee: 560,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Da lunedì 12 a domenica 18 luglio 2027',
    shortDates: 'Dal 12 al 18 luglio 2027',
    startDate: '2027-07-12',
    endDate: '2027-07-18',
    place: 'Da Ferrol a Santiago de Compostela, Galizia',
    audience: [
      'Docenti di scuola primaria, secondaria e dell’educazione degli adulti, di qualsiasi materia',
      'Orientatori e personale di supporto',
      'Docenti dell’istruzione e formazione professionale nel settore turistico',
    ],
    requirements:
      'Devi poter camminare tra 15 e 25 km al giorno. Un veicolo di supporto segue ogni tappa. Lingua di lavoro: inglese (B1 o superiore).',
    trainers:
      'Guidato da Fran Sequeiro. Quando nel gruppo ci sono docenti di turismo, si aggiunge Pam Guerrero con un modulo sul Cammino come prodotto turistico e risorsa didattica.',
    outcomes: [
      'Sei tecniche di apprendimento all’aperto, provate in prima persona',
      'Un’uscita didattica progettata per la tua scuola e rivista dai colleghi',
      'Un diario di apprendimento e un piano per condividerlo con il collegio docenti',
      'Contatti in altri paesi per progetti futuri',
    ],
    programmeNote: 'Le distanze sono indicative.',
    programmeColumns: ['Tappa', 'Tema', 'Sessione finale'],
    programme: [
      { day: 1, place: 'Ferrol. Laboratorio al mattino, nel pomeriggio da Ferrol a Neda (15 km)', focus: 'Perché imparare fuori dall’aula: evidenze, sicurezza e gestione del gruppo', then: 'Patto formativo e diario personale' },
      { day: 2, place: 'Da Neda a Pontedeume (16 km)', focus: 'Il paesaggio come testo: leggere il territorio e apprendimento basato sul luogo', then: 'Condivisione delle mappe sensoriali' },
      { day: 3, place: 'Da Pontedeume a Betanzos (20 km)', focus: 'Seminario in cammino: dibattito e pensiero critico in movimento', then: 'Una domanda guida per ogni materia' },
      { day: 4, place: 'Da Betanzos a Hospital de Bruma (25 km)', focus: 'Sfida, fatica e benessere: camminata in silenzio e coppie di ascolto', then: 'Cerchio di riflessione' },
      { day: 5, place: 'Da Hospital de Bruma a Sigüeiro (24 km)', focus: 'Valutare ciò che succede fuori: evidenze, rubriche e portfolio', then: 'Prima bozza della tua uscita didattica' },
      { day: 6, place: 'Da Sigüeiro a Santiago (16 km). Laboratorio nel pomeriggio', focus: 'Inclusione: adattare un’uscita a capacità e budget diversi', then: 'Revisione tra pari delle bozze' },
      { day: 7, place: 'Santiago de Compostela', focus: 'Dal Cammino alla scuola: piano di trasferimento, rischi e autorizzazioni', then: 'Presentazioni, valutazione e certificati' },
    ],
    method:
      'Ogni mattina la tecnica del giorno viene presentata in 20 minuti, messa in pratica camminando e analizzata all’arrivo. Prima del corso ci sono una sessione online e una breve lettura, e un mese dopo una sessione di follow-up.',
    includes:
      'Formazione, materiali, credenziale del pellegrino, veicolo di supporto, sessioni online e certificato. Alloggio, pasti e trasporto bagagli non sono inclusi.',
    faqs: [
      {
        question: 'Quanto devo essere allenato?',
        answer:
          'Le tappe sono tra 15 e 25 km. Devi poter percorrere questa distanza per più giorni di seguito a passo tranquillo. Un veicolo di supporto segue ogni tappa, nessuno resta indietro.',
      },
      {
        question: 'Dove dormiamo lungo il percorso?',
        answer:
          'L’alloggio non fa parte della quota del corso: si paga con il supporto individuale della tua borsa. Ti mandiamo un elenco di alloggi consigliati per ogni tappa. Il trasporto bagagli si può prenotare con un operatore locale.',
      },
      {
        question: 'Posso abbinarlo al corso sul bosco?',
        answer:
          'Sì. Il corso di educazione ambientale si svolge la settimana prima, dal 5 al 9 luglio 2027, quindi puoi frequentarli entrambi di seguito.',
      },
    ],
  },
  {
    id: 'forest',
    slug: PATHS.forest,
    name: 'Bringing the forest back: hands-on environmental education',
    summary:
      'Cinque giorni tra Ferrol, le Fragas do Eume e A Capela per trasformare il ripristino di un bosco in un progetto per la tua scuola.',
    metaTitle: 'Corso di educazione ambientale per docenti in Spagna · Erasmus+ KA1',
    metaDescription:
      'Corso Erasmus+ KA1 di cinque giorni in Galizia: leggere un bosco atlantico antico, passare una giornata a ripristinarne uno e progettare un intervento di rinaturalizzazione per la tua scuola. 400 € di quota.',
    heroHeading: 'Riportare il bosco: trasforma il ripristino di un bosco in un progetto per la tua scuola.',
    heroText: [
      'La Galizia ha perso gran parte del suo bosco atlantico originario a favore delle piantagioni di eucalipto. Un movimento crescente di volontari lo sta riportando, appezzamento dopo appezzamento. Questo corso ti porta dentro quel lavoro. Imparerai a leggere un bosco antico nelle Fragas do Eume, uno dei boschi costieri atlantici meglio conservati d’Europa, e poi passerai una giornata a ripristinarne uno: togliere l’eucalipto, piantare querce, betulle e castagni.',
      'Tornato in laboratorio, trasformerai questa esperienza in un progetto per la tua scuola o il tuo centro: un mini bosco, un giardino per gli impollinatori o un terreno adottato, con un metodo semplice per monitorarlo con i tuoi studenti durante tutto l’anno. Non servono conoscenze di botanica.',
    ],
    heroImage: '/img/proyectos/restaurando-la-naturaleza/plantando-arboles.webp',
    heroImageAlt: 'Due persone scavano per piantare un alberello su un terreno sgombrato vicino alla costa',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 16,
    datesLabel: 'Da lunedì 5 a venerdì 9 luglio 2027',
    shortDates: 'Dal 5 al 9 luglio 2027',
    startDate: '2027-07-05',
    endDate: '2027-07-09',
    place: 'Ferrol, Fragas do Eume e A Capela, Galizia',
    audience: [
      'Docenti di scienze naturali e geografia',
      'Docenti di istituti agrari e della formazione professionale forestale e ambientale',
      'Educatori degli adulti e personale di organizzazioni ambientali',
    ],
    requirements: 'Non servono conoscenze di botanica. Lingua di lavoro: inglese.',
    trainers: 'Guidato da Fran Sequeiro, con la squadra di Stop Eucalipto nella giornata di ripristino.',
    outcomes: [
      'Un metodo di censimento della biodiversità da usare con gli studenti e uno smartphone',
      'L’esperienza diretta di una giornata di ripristino con specie autoctone',
      'Un progetto di rinaturalizzazione per la tua scuola: mini bosco, giardino per gli impollinatori o terreno adottato',
      'Un piano per misurare i risultati durante l’anno scolastico',
    ],
    programmeColumns: ['Luogo', 'Mattina', 'Pomeriggio'],
    programme: [
      { day: 1, place: 'Ferrol', focus: 'Il bosco atlantico e l’espansione dell’eucalipto in Galizia. Il quadro europeo dell’educazione alla sostenibilità', then: 'Percorso urbano: leggere la natura in città. Presentazione delle scuole partecipanti' },
      { day: 2, place: 'Fragas do Eume', focus: 'Come si legge un bosco antico: strati, specie indicatrici, suolo e acqua', then: 'Lavoro sul campo: transetti e censimento con app di citizen science' },
      { day: 3, place: 'A Capela', focus: 'Giornata di ripristino: rimozione di eucalipti giovani e messa a dimora di specie autoctone', then: 'Vivaio e raccolta dei semi' },
      { day: 4, place: 'Ferrol', focus: 'Dal campo all’aula: progettare un intervento di rinaturalizzazione scolastica e inserirlo nel curricolo', then: 'Laboratorio di monitoraggio: indicatori, fotografia ripetuta, coinvolgimento di famiglie e comune' },
      { day: 5, place: 'Ferrol', focus: 'Presentazione dei progetti e revisione tra pari', then: 'Piano di trasferimento, possibilità di cooperazione europea, valutazione e certificati' },
    ],
    method:
      'Due giorni sul campo e tre in laboratorio. Prima del corso ogni partecipante invia foto e una pianta della propria scuola, che diventano la base del suo progetto. Dopo tre mesi c’è una sessione di follow-up online.',
    includes:
      'Formazione, materiali, attrezzi e guanti, trasporto alle uscite sul campo, follow-up online e certificato. Alloggio e pasti non sono inclusi.',
    faqs: [
      {
        question: 'Servono conoscenze di botanica o di selvicoltura?',
        answer: 'No. Il corso parte da zero ed è pensato per docenti di qualsiasi materia che vogliono lavorare all’aperto con i loro studenti.',
      },
      {
        question: 'Cosa devo portare?',
        answer:
          'Abbigliamento e scarpe per lavorare all’aperto e, prima del corso, foto e una pianta della tua scuola. Attrezzi, guanti e trasporto sul campo sono inclusi.',
      },
      {
        question: 'Posso abbinarlo al corso sul Cammino?',
        answer:
          'Sì. Il corso Walking classroom inizia il lunedì successivo, dal 12 al 18 luglio 2027, quindi puoi frequentarli entrambi di seguito.',
      },
    ],
  },
  {
    id: 'ai',
    slug: PATHS.ai,
    name: 'Erasmus+ without the paperwork: AI and digital tools for project coordinators',
    summary:
      'Cinque giorni a Ferrol per tornare a casa con il tuo sistema di gestione dei progetti già impostato e funzionante: budget, ricevute, relazioni e IA.',
    metaTitle: 'Corso di IA e strumenti digitali per coordinatori Erasmus+ · KA1 in Spagna',
    metaDescription:
      'Corso Erasmus+ KA1 di cinque giorni a Ferrol per coordinatori di progetto: controllo del budget, ricevute e rimborsi, IA per candidature e relazioni, protezione dei dati. 400 € di quota.',
    heroHeading: 'Meno burocrazia, più progetto: costruisci il tuo sistema di gestione in cinque giorni.',
    heroText: [
      'Se coordini progetti Erasmus+, sai che il vero lavoro succede tra fogli di calcolo, ricevute e relazioni, di solito a tarda sera. Questo corso è tenuto da una squadra che gestisce progetti europei da più di dieci anni e si è stancata di fare tutto a mano. Abbiamo costruito i nostri strumenti. In cinque giorni ti mostriamo come, e tu costruisci i tuoi.',
      'Porta il tuo progetto. Venerdì avrai un foglio di controllo del budget adatto alla tua sovvenzione, un flusso che trasforma la foto di un biglietto del treno in una riga della contabilità, e prompt di IA collaudati per candidature, accordi di apprendimento e relazioni finali. Senza programmare, e con una guida chiara per usare l’IA senza mettere a rischio i dati dei partecipanti.',
    ],
    heroImage: '/img/en/oficina-equipo.webp',
    heroImageAlt: 'La squadra di Xeración lavora ai portatili in ufficio',
    days: 5,
    fee: 400,
    groupMin: 8,
    groupMax: 14,
    datesLabel: 'Da lunedì 18 a venerdì 22 ottobre 2027',
    shortDates: 'Dal 18 al 22 ottobre 2027',
    startDate: '2027-10-18',
    endDate: '2027-10-22',
    place: 'Ferrol, Galizia',
    audience: [
      'Coordinatori Erasmus+ di scuole, istruzione e formazione professionale ed educazione degli adulti',
      'Dirigenti scolastici e staff di presidenza',
      'Personale amministrativo',
    ],
    requirements:
      'Portatile personale e conoscenze di base dei fogli di calcolo. Non serve saper programmare. Lingua di lavoro: inglese.',
    trainers: 'Guidato da Fran Sequeiro, che ha sviluppato gli strumenti di gestione che Xeración usa ogni giorno.',
    outcomes: [
      'Una mappa del tuo flusso di lavoro che mostra dove perdi più ore',
      'Un foglio di controllo del budget adattato ai costi unitari del tuo progetto',
      'Un flusso per ricevute e rimborsi con lettura automatica dei documenti',
      'Modelli e indicazioni per scrivere candidature, accordi e relazioni con l’IA',
      'Criteri chiari di protezione dei dati per usare questi strumenti',
    ],
    programmeColumns: ['Tema', 'Mattina', 'Pomeriggio'],
    programme: [
      { day: 1, place: 'Dove va il tempo', focus: 'Il ciclo di vita di un progetto KA1 e KA2 visto dalla gestione', then: 'Ogni partecipante disegna il proprio flusso di lavoro e sceglie cosa risolvere durante la settimana' },
      { day: 2, place: 'Budget', focus: 'Budget e controllo: costi unitari, monitoraggio per partecipante, previsione di cassa', then: 'Laboratorio: costruire il foglio di controllo con i dati del proprio progetto' },
      { day: 3, place: 'Ricevute', focus: 'Ricevute e rimborsi: dalla foto del biglietto al foglio di calcolo. Dimostrazione degli strumenti di Xeración', then: 'Laboratorio: il proprio flusso di raccolta e verifica dei documenti. Protezione dei dati e limiti dell’IA' },
      { day: 4, place: 'Scrittura', focus: 'Scrivere meglio e più in fretta con l’IA: candidature, accordi di apprendimento, relazioni finali e disseminazione', then: 'Laboratorio: automatizzare un processo completo, dal modulo di iscrizione al documento finale' },
      { day: 5, place: 'Il tuo sistema', focus: 'Presentazione dei sistemi costruiti e revisione tra pari', then: 'Piano di attuazione nella tua organizzazione, monitoraggio dei bandi, valutazione e certificati' },
    ],
    method:
      'Lavori sempre sul tuo progetto reale, quindi porta il tuo budget e i tuoi modelli. Prima del corso c’è una sessione online per preparare i dati, e una di follow-up sei settimane dopo.',
    includes:
      'Formazione, modelli e guide, sessioni online e certificato. Le licenze degli strumenti a pagamento non sono incluse: il corso si può seguire con le versioni gratuite.',
    faqs: [
      {
        question: 'Devo saper programmare?',
        answer: 'No. Ti servono un portatile e conoscenze di base dei fogli di calcolo. Tutto si costruisce con strumenti che funzionano senza programmare.',
      },
      {
        question: 'Devo comprare software?',
        answer: 'No. Le licenze a pagamento non sono incluse nella quota, e tutto il corso si può seguire con le versioni gratuite degli strumenti.',
      },
      {
        question: 'E i dati dei partecipanti?',
        answer:
          'La protezione dei dati fa parte del programma: torni a casa con criteri chiari su cosa puoi e non puoi inserire negli strumenti di IA e su come proteggere i dati personali.',
      },
    ],
  },
]

export const teacherTrainingIt: TeacherTrainingContent = {
  lang: 'it',
  ogLocale: 'it_IT',
  basePath: PATHS.base,
  courses,
  hub: {
    metaTitle: 'Corsi Erasmus+ KA1 per docenti in Spagna · Galizia',
    metaDescription:
      'Corsi strutturati Erasmus+ KA1 per docenti e personale scolastico a Ferrol, in Galizia: outdoor education sul Cammino di Santiago, educazione ambientale e strumenti di IA per coordinatori.',
    heroHeading: 'Corsi per docenti in Galizia che la tua borsa copre per intero.',
    heroText: [
      'Tre corsi brevi per docenti, formatori e personale scolastico di tutta Europa, pensati perché la quota di iscrizione Erasmus+ KA1 li copra completamente: 80 € al giorno, senza costi aggiuntivi per la tua scuola.',
      'Nascono da ciò che facciamo a Ferrol dal 2013: imparare all’aperto, ripristinare la natura e gestire progetti europei. I corsi si svolgono in inglese.',
    ],
    heroImage: '/img/proyectos/x-team/sesion-formacion.webp',
    heroImageAlt: 'Un gruppo seduto in una sala segue una presentazione proiettata',
    coursesHeading: 'Tre corsi per il 2027.',
    coursesText: 'Gruppi piccoli che riuniscono sempre almeno due paesi. Corsi in inglese.',
    fundingHeading: 'Come la borsa copre il corso.',
    fundingText: [
      'Una borsa KA1 ha tre voci separate. La quota di iscrizione al corso è di 80 € per partecipante e per giorno di corso, fino a 800 €. La nostra quota è esattamente questa, quindi la tua scuola non aggiunge soldi propri.',
      'Alloggio e pasti si pagano con il supporto individuale, un importo giornaliero a parte. Il viaggio ha un suo importo fisso, calcolato in base alla distanza.',
    ],
    fundingFacts: [
      { label: 'Quota del corso', value: '80 € al giorno' },
      { label: 'Durata', value: '5 o 7 giorni' },
      { label: 'Gruppo', value: 'Da 8 a 16 persone' },
      { label: 'Lingua', value: 'Inglese' },
    ],
    stepsHeading: 'Dalla prima email al certificato.',
    steps: [
      { title: 'Preiscriviti', text: 'Scrivici. La preiscrizione è gratuita e non impegna la tua scuola.' },
      { title: 'Presenta la candidatura', text: 'Ti mandiamo la scheda del corso con obiettivi e risultati di apprendimento, il nostro OID e una lettera di preiscrizione per la tua candidatura.' },
      { title: 'Conferma', text: 'Quando la sovvenzione è approvata, confermi i posti e fatturiamo alla tua scuola, beneficiaria della borsa.' },
      { title: 'Impara e certifica', text: 'Firmiamo il tuo accordo di apprendimento e, alla fine, ricevi un attestato di partecipazione e supporto per l’Europass Mobilità.' },
    ],
    extrasHeading: 'Da sapere.',
    shadowingHeading: 'Aggiungi una settimana di job shadowing.',
    shadowingText:
      'Se vuoi abbinare un corso al job shadowing, organizziamo visite di osservazione in scuole e organizzazioni di Ferrolterra. È un extra facoltativo, con un suo prezzo.',
    stayHeading: 'Soggiornare a Ferrol.',
    stayText:
      'L’alloggio non fa mai parte della quota del corso. Se vuoi, ti aiutiamo a trovare dove stare a Ferrol, a un prezzo a parte. Nel corso sul Cammino ricevi un elenco di alloggi consigliati per ogni tappa.',
    trainersHeading: 'Chi insegna.',
    trainersText:
      'I corsi sono guidati da Fran Sequeiro, coordinatore di Xeración, una squadra che organizza programmi di apprendimento internazionali in Galizia dal 2013. Pam Guerrero si aggiunge al corso sul Cammino quando nel gruppo ci sono docenti di turismo.',
    trainersLinkLabel: 'La nostra squadra (in inglese)',
    faqHeading: 'Le domande dei coordinatori.',
    faqs: [
      {
        question: 'La quota del corso è coperta interamente da Erasmus+?',
        answer:
          'Sì. Erasmus+ KA1 paga 80 € per partecipante e per giorno di corso, fino a 800 € a persona. Le nostre quote sono di 400 € per i corsi di cinque giorni e di 560 € per quello di sette giorni, esattamente ciò che copre la borsa.',
      },
      {
        question: 'Chi può partecipare?',
        answer:
          'Docenti e personale di scuole, istruzione e formazione professionale ed educazione degli adulti con una borsa KA1, tramite un’organizzazione accreditata (KA121) o un progetto di breve durata (KA122).',
      },
      {
        question: 'Devo indicare il corso nella candidatura?',
        answer:
          'Non è obbligatorio, ma aiuta. Ti mandiamo la scheda del corso con obiettivi e risultati di apprendimento e una lettera di preiscrizione da allegare.',
      },
      {
        question: 'A chi intestate la fattura?',
        answer: 'Alla scuola o all’organizzazione di invio, che riceve la sovvenzione. L’alloggio, se lo prenoti con noi, si fattura a parte.',
      },
      {
        question: 'Ci saranno docenti di altri paesi?',
        answer: 'Sì. Ogni gruppo riunisce almeno due paesi, così conosci colleghi di altre parti d’Europa.',
      },
      {
        question: 'Riceverò un certificato?',
        answer:
          'Sì. Un certificato con nome del corso, descrizione, risultati di apprendimento, date, sede e formatori, e supporto per compilare il tuo Europass Mobilità.',
      },
      {
        question: 'Dove si svolgono i corsi?',
        answer:
          'A Ferrol, in Galizia, con giornate sul campo nel parco naturale delle Fragas do Eume e ad A Capela. Il corso sul Cammino va a piedi da Ferrol a Santiago de Compostela. L’aeroporto di A Coruña è a 50 km, e Santiago de Compostela a un’ora di auto.',
      },
      {
        question: 'In che lingua si svolgono i corsi?',
        answer: 'In inglese, perché i gruppi riuniscono docenti di diversi paesi. Basta un livello intermedio (B1).',
      },
    ],
    closingHeading: 'Ti teniamo un posto?',
    closingText: 'Dicci quale corso, quante persone e quando pensi di venire. Rispondiamo personalmente, in inglese o in spagnolo.',
    ctaLabel: 'Voglio preiscrivermi',
    ctaDetailsLabel: 'Vedi i corsi',
  },
  ui: {
    breadcrumb: 'Formazione docenti',
    seeProgramme: 'Vedi il programma',
    seeProgrammeArrow: 'Vedi il programma →',
    essentials: 'L’essenziale.',
    costTag: 'Interamente finanziabile con Erasmus+ KA1',
    feeSentence: (fee, days) => `${fee} € di quota per ${days} giorni, esattamente l’importo che paga la borsa.`,
    factDates: 'Date',
    factDuration: 'Durata',
    factFee: 'Quota del corso',
    factGroup: 'Gruppo',
    factPlace: 'Luogo',
    days: (n) => `${n} giorni`,
    group: (min, max) => `Da ${min} a ${max} persone`,
    whoFor: 'Per chi è.',
    takeHome: 'Cosa porti a casa.',
    dayByDay: 'Giorno per giorno.',
    day: 'Giorno',
    feeCovers: 'Cosa copre la quota.',
    included: 'Incluso',
    whoTeaches: 'Chi insegna',
    addShadowing: 'Aggiungi job shadowing',
    beforeBook: 'Prima di prenotare.',
    otherCourses: 'Gli altri corsi.',
    howItWorks: 'Come funzionano finanziamento e prenotazione →',
    photo: 'foto',
    emailSubjectHub: 'Corsi per docenti a Ferrol',
    emailSubjectCourse: 'Preiscrizione',
  },
}
