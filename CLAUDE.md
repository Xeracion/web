# xeracion.org — memoria del proyecto

Este archivo es la fuente de verdad permanente para cualquier sesión de trabajo sobre el rediseño de xeracion.org. Léelo entero antes de tocar código. La especificación completa (contenido literal, copy de cada sección, estructura de página) vive en [ESPECIFICACION.md](ESPECIFICACION.md), en esta misma carpeta — este CLAUDE.md resume las reglas transversales que no deben romperse nunca; ESPECIFICACION.md es la referencia para el contenido exacto de cada página.

## 1. Contexto de la organización

**Xeración** es una asociación juvenil gallega activa desde 2013, con sede en Ferrol: Casa da Xuventude, Rúa Almendra 9. Coordina:
- Intercambios juveniles Erasmus+ (Youth Exchanges)
- Voluntariados del Cuerpo Europeo de Solidaridad (CES / ESC — European Solidarity Corps)
- Cursos de formación (Training Courses, TC)
- Actividades locales en Ferrol (clubs, talleres, conciertos)

Contacto: `info@xeracion.org`. Email del usuario propietario de este proyecto: `info@xeracion.org`.

### Las rutas por audiencia

El sitio no tiene una home única: tiene varias sub-homes según quién es el visitante, cada una con su propio color de acento que actúa como identidad visual persistente en toda la sección.

| Ruta | Audiencia | Acento |
|---|---|---|
| `/` | Portada: hero + catálogo de experiencias destacadas | Neutro (sin clase `route-*`) |
| `/agenda/` | Jóvenes de la comarca de Ferrol que buscan algo que hacer esta semana | Teal / verde (proximidad, ría, mar) |
| `/experiencias/`, `/experiencias/[slug]/` | Jóvenes españoles (18-30) que buscan un catálogo de experiencias — caminos, aventura, vivir fuera, intercambios, planes locales, naturaleza — sin que el programa de financiación (Erasmus+, CES) sea la categoría madre: es una etiqueta de coste más. Es el 4º ítem del nav en `/`, `/agenda/` y `/nosotros/`. | Coral / naranja (salida, calidez) |
| `/nosotros/` | Quiénes somos, equipo, historia, partners, datos legales | Neutro (sin clase `route-*`) |
| `/mentores/` | Captación de mentores locales (no está en el nav principal) | Teal / verde |

**El sitio fue bilingüe (es/en) hasta que se retiró por completo la versión en inglés** — existían `/en/`, `/en/agenda/`, `/volunteering/` y `/about/`, un selector de idioma con banderas en `ResizableNavbar`, detección de idioma por `Accept-Language` en `src/middleware.ts` y una cookie `xeracion_lang`. Todo eso se eliminó: código de esas rutas, sus componentes de sección (`ForOrganisations`, `MobilityProgramCards`, la sección `RouteCards`/`Stats` de la portada inglesa), el contenido en `src/content/` (`homeEn`, `pageFerrolEnContent`, `pageNosotrosEnContent`, `volunteering.ts` entero), el selector de idioma del navbar, `src/middleware.ts`, y los tokens de color `--color-en-*`/`.route-en` (el acento púrpura, exclusivo de `/volunteering/`). No queda rastro funcional de la versión en inglés — si en el futuro se quiere reintroducir, es un proyecto nuevo, no una reactivación de código apagado.

### Marco StoryBrand

El usuario es el héroe, Xeración es el guía. Esto no es decorativo: condiciona cómo se escribe cada CTA (ver sección 3).

## 2. Sistema de diseño

### Tipografía

- **Manrope** (600) — todos los titulares H1 a H4. Sustituye a Fraunces como alternativa de Google Fonts a Nordea Sans (fuente corporativa con licencia, no disponible para este proyecto).
- **Inter** (400, 500) — cuerpo, eyebrows, UI, metadatos.

Escalas responsive (desktop / tablet / móvil). Los breakpoints del sistema son: móvil < 768px, tablet 768–1024px, desktop > 1024px.

| Nivel | Desktop | Tablet | Móvil | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | 42px | 34px | 24px | 600 | 1.04 | -0.025em |
| H2 | 34px | 30px | 26px | 600 | 1.15 | -0.02em |
| H3 | 24px | 22px | 20px | 600 | 1.2 | -0.015em |
| H4 | 19px | 18px | 17px | 600 | 1.3 | -0.01em |
| Body | 17px | 16px | 16px | 400 | 1.55 | 0 |
| Eyebrow | 11px | 11px | 11px | 500 | 1.4 | 0.16em uppercase |

Notas de tamaños específicos que aparecen en secciones concretas y difieren de la escala base (respetar los de ESPECIFICACION.md en cada caso): la cita del testimonio grande usa 28px/22px/19px; la del testimonio pequeño 19px/17px; el H2 de CTA de cierre usa 36px/28px; el número de la tira de estadísticas usa 44px.

### Paleta de color (variables CSS)

```css
:root {
  /* Neutros */
  --color-text-primary: #2C2C2A;
  --color-text-secondary: #444441;
  --color-text-tertiary: #5F5E5A;
  --color-text-muted: #888780;
  --color-border: #D3D1C7;
  --color-border-strong: #B4B2A9;
  --color-bg: #FAFAF7;
  --color-bg-warm: #F1EFE8;
  --color-white: #FFFFFF;

  /* Acento Ferrol (teal) */
  --color-ferrol-bg: #E1F5EE;
  --color-ferrol-border: #5DCAA5;
  --color-ferrol-text: #0F6E56;
  --color-ferrol-strong: #04342C;
  --color-ferrol-grad-1: #9FE1CB;
  --color-ferrol-grad-2: #5DCAA5;

  /* Acento Irse (coral) */
  --color-irse-bg: #FAECE7;
  --color-irse-border: #F0997B;
  --color-irse-text: #993C1D;
  --color-irse-strong: #4A1B0C;
  --color-irse-grad-1: #F5C4B3;
  --color-irse-grad-2: #F0997B;

  /* Espaciados */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 96px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 999px;

  /* Container */
  --container-max: 1200px;
  --container-padding: 32px;
}

@media (max-width: 768px) {
  :root {
    --container-padding: 20px;
  }
}
```

Gradientes de tarjeta de ruta (para fondos de foto placeholder en la portada):
- Ferrol: `linear-gradient(135deg, #9FE1CB 0%, #5DCAA5 100%)`
- Irse: `linear-gradient(135deg, #F5C4B3 0%, #F0997B 100%)`

### Radios generosos por contexto

- 16px en fotos hero (14px en móvil)
- 12px en tarjetas
- 8px en botones

### Componentes reutilizables

- `.eyebrow` — texto de sección en versalitas con espaciado ancho (11px, uppercase, letter-spacing 0.16em)
- `.eyebrow-pill` — versión con pastilla de fondo semi-transparente, para superponer sobre fotos
- `.container` — max-width 1200px, padding lateral responsive vía `--container-padding`
- `.btn-primary` — fondo oscuro `#2C2C2A`, texto crema, radius 8px
- `.btn-secondary` — borde 0.5px, fondo transparente
- `.btn-link` — texto plano con flecha (`→`), para "Leer más" / CTAs terciarios
- `.card` — fondo blanco, radius 12px, borde sutil, hover con lift ligero (`translateY(-2px)` + sombra `0 12px 32px -16px rgba(44,44,42,0.15)`)
- `.photo-placeholder` — marcador de foto real con gradiente, incluye etiqueta entre corchetes indicando qué foto real va ahí (ej. `[ foto editorial · grupo en muelle de Ferrol ]`)

### Header y navegación (todas las páginas)

Implementado por `ResizableNavbar` (`src/components/ResizableNavbar/`) — ver el punto 2.1 más abajo para el detalle del componente. Resumen visual:

- Sticky. Al cargar, fondo transparente y ancho igual al `.container` de la página. Al superar ~100px de scroll, la barra se estrecha (max-width 1200px → 720px), se centra, gana fondo `rgba(250,250,247,0.85)` + `backdrop-filter: blur(12px)` + sombra sutil + esquinas muy redondeadas (efecto "pill" flotante). Transición con spring (`motion`), no lineal.
- Izquierda: logotipo "Xeración" (imagen del wordmark de marca), enlaza a `/`.
- Derecha desktop: cuatro enlaces (Inicio, Agenda, Experiencias, Nosotros — ver `NAV_ITEMS_ES` en `src/lib/nav.ts`). Reciben el mismo "pill" de fondo (`--color-accent-bg`) que se desplaza animado al pasar el ratón o el foco entre ellos, sin distinción visual entre ellos.
- Derecha móvil (< 768px): hamburguesa → menú desplegable animado (no overlay a pantalla completa); se cierra al pulsar un enlace o Escape.
- **En cada sub-home**, el enlace de nav de la sección activa lleva el color de acento correspondiente (sutil, no llamativo) — esto es lo que conecta con la convención de clases de ruta del punto 5.
- Respeta `prefers-reduced-motion`: sin pill animado ni transiciones de layout si está activo.

#### 2.1 Componente `ResizableNavbar`

- Ubicación: `src/components/ResizableNavbar/` (`ResizableNavbar.tsx` + `ResizableNavbar.module.css`, con un `index.ts` barrel para poder importarlo como `@/components/ResizableNavbar`, igual que el resto de componentes).
- Sustituye a los antiguos `Header` y `MobileMenu` (eliminados) en los cinco layouts que montan navegación: `(main)`, `agenda`, `experiencias`, `nosotros`, `mentores`.
- Props: `siteName: string`, `items: NavItem[]` (`{ name, link, key }`, de `src/lib/nav.ts` — `NAV_ITEMS_ES`), `activeRoute?: RouteKey` (`'home' | 'ferrol' | 'experiencias' | 'nosotros'` — el valor sigue llamándose `ferrol` internamente para la Agenda aunque la página pública sea `/agenda/`, ver 4.2 — se compara contra `item.key`, no se reconstruye a partir de la URL). Nada de contenido va hardcodeado dentro del componente — los enlaces se definen una vez en `src/lib/nav.ts` y cada layout se los pasa. **Ya no tiene selector de idioma** (props `locale`/`altLangHref` eliminadas junto con la versión en inglés, ver punto 1).
- El color de acento (pill de hover, texto activo) se lee siempre de `var(--color-accent-*)`, heredada de la clase `.route-ferrol/.route-irse` que ya aplica cada layout — el componente no tiene lógica condicional de color.
- **Decisión técnica**: usa la librería `motion` (antes `framer-motion`) para las animaciones de scroll (`useScroll` + `useMotionValueEvent`), el spring de resize y el pill con `layoutId`. Está inspirado en el "Resizable Navbar" de Aceternity UI, pero reimplementado desde cero en CSS Modules — **no se instaló Tailwind** para portar sus clases; todos los valores (colores, espaciados, radios, tipografía) salen de las variables del sistema de diseño ya existente, tal y como exige el punto 4.

## 3. Reglas de tono del copy

Estas reglas son inviolables y se aplican a **todo** texto nuevo que se escriba, no solo al que ya está literal en ESPECIFICACION.md:

1. **CTAs en primera persona del héroe.** El usuario habla, no se le ordena. `"Quiero irme"`, `"Apúntame"`, `"Apply"` — nunca imperativos hacia el usuario como `"Regístrate"` o `"Apúntate"`.
2. **H1 como frases completas terminadas en punto.** Nunca titulares telegráficos. Ej: `Doce años abriendo puertas a Europa desde Galicia.` — no `Doce años. Europa. Galicia.`
3. **Eyebrows de 2 a 4 palabras**, descriptivos y breves. Ej: `Historias reales`, `Cómo funciona`, `Where you'll live`.
4. **Comillas tipográficas** en testimonios y citas — `" "`, nunca comillas rectas `" "`.
5. **Punto medio (`·`) como separador de metadatos**, nunca guiones ni pipes. Ej: `MARTES · 20:00 · ALMENDRA 9`, `Nicolás · Ferrol → Cracovia · CES 2024`.
6. **Nada de jerga institucional.** Prohibido: "movilidad participativa", "empoderamiento juvenil" y equivalentes. Tono directo, humano, ferrolano cuando cabe.
7. **Los nombres de programa de financiación (Erasmus+, Cuerpo Europeo de Solidaridad) no van en titulares ni en nombres de sección.** Solo aparecen en etiquetas de coste (`costeEtiqueta` de `experiencia`, ej. "Te lo paga Europa"), en la ficha de cada experiencia, y en los datos legales/acreditaciones de `/nosotros/` (ver 4.4 y 4.5). El catálogo se organiza por tipo de experiencia, no por programa.

## 4. Reglas técnicas

- **CSS puro con CSS Modules.** Nada de Tailwind, Bootstrap ni frameworks CSS de ningún tipo. Variables CSS + Grid/Flexbox nativos libremente.
- **HTML semántico**: `header`, `main`, `section`, `article`, `nav`, `footer`. Jerarquía de headings correcta. **Un solo `h1` por página**, sin excepción.
- **Responsive** entre 320px y 1600px. Breakpoints: móvil < 768px, tablet 768–1024px, desktop > 1024px.
- **Accesibilidad**: contraste AA mínimo, `alt` descriptivo en todas las imágenes, foco visible en interactivos, `aria-label` donde aplique.
- **JavaScript mínimo**: solo para el menú móvil (overlay hamburguesa). Nada más se justifica con JS a menos que la especificación lo pida explícitamente.
- **Acordeones**: `<details>` / `<summary>` nativos. No JS, no librería de acordeón.
- **Iconos**: SVG inline sencillos o caracteres Unicode (`→`, `↓`, `·`). Cero librerías de iconos (nada de Font Awesome, Lucide, Heroicons, etc.).
- **Fotos**: mientras no haya foto real, usar `.photo-placeholder` con el gradiente correspondiente y una etiqueta entre corchetes describiendo qué foto real debería ir ahí. No usar imágenes de stock genéricas.

### 4.1 Agenda de eventos vía Google Calendar

Los eventos de la agenda destacada (portada) y de la agenda de próximas dos semanas (`/agenda/`) se leen en tiempo real de Google Calendar a través de `src/lib/googleCalendar.ts`, **no** del tipo de documento "Evento" en Sanity (que se mantiene en el esquema sin usar, por si se necesita en el futuro). Configuración:

- `GOOGLE_CALENDAR_API_KEY` (variable de entorno) — clave de la API de Google Calendar, restringida a "Calendar API" en Google Cloud Console.
- `googleCalendarId` (campo `siteSettings.googleCalendarId` en `src/content/siteSettings.ts`, ver 4.2) — el ID del calendario (Ajustes del calendario de Google → Integrar calendario → ID de calendario). El calendario debe estar marcado como público.

Mientras falte cualquiera de los dos, la agenda no muestra eventos (no rompe la página). `getGoogleCalendarEvents` pide `singleEvents: true` a la API para que Google expanda los eventos recurrentes (ej. Offline Club cada martes) en instancias sueltas — no hay parseo de RRULE en el código.

### 4.2 Contenido hardcodeado en `src/content/` (todo excepto el catálogo)

**Sanity dejó de ser el CMS del sitio.** Se mantiene únicamente para el catálogo de experiencias (`experiencia` + `convocatoria`, ver 4.4) — eso es lo único que se sigue editando desde `/studio`. Todo el resto del contenido de todas las páginas (portada, `/agenda/`, `/nosotros/`, `/mentores/`, ajustes generales) vive hardcodeado como objetos TypeScript planos en `src/content/*.ts`, y se edita directamente en el código, en sesiones de Claude Code — no en un Studio. Este es un cambio deliberado: la web es en esencia una landing page que no cambia cada semana, así que no compensa el coste de mantener veinte tipos de documento Sanity solo para editar un titular de vez en cuando.

- **Un archivo por página/sección**, con el shape del contenido calcado del antiguo documento Sanity (mismos nombres de campo, sin `_type`/`_key`) para minimizar la reescritura de componentes:
  - `src/content/siteSettings.ts` — `siteSettings` (antes el singleton `siteSettings`): title, description, address, email, whatsapp, socialLinks, googleCalendarId.
  - `src/content/home.ts` — `homeEs` + sus testimonios destacados.
  - `src/content/agenda.ts` — `pageFerrolEs`, `fixedProgramsEs`, `ferrolFaqsEs` (sigue usando el nombre histórico `Ferrol`, ver más abajo).
  - `src/content/nosotros.ts` — `pageNosotrosEs` (incluye el bloque legal, ver 4.5) + testimonios.
  - `src/content/mentores.ts` — `pageMentoresContent` + testimonios.
  - `src/content/types.ts` — las interfaces compartidas (`StatItem`, `SectionIntro`, `TeamMember`, `Partner`, `Testimonial`, `Faq`, etc.) que sustituyen a las de `src/sanity/lib/queries.ts`.
- Los nombres internos históricos se conservan aunque ya no exista Sanity detrás: `pageFerrolEs` sigue llamándose así (la página pública es `/agenda/`), igual que el `RouteKey` `'ferrol'` y la clase CSS `route-ferrol` (ver punto 5) — es la misma convención que ya explicaba este documento cuando esas páginas sí eran Sanity, y renombrar identificadores internos que nadie ve no aporta nada.
- **Cómo editar contenido**: abre el archivo de `src/content/` correspondiente y edita el objeto directamente — es TypeScript con autocompletado y type-checking (`satisfies StatItem[]` etc.), así que un campo mal escrito o un tipo equivocado lo marca el editor al momento, sin esperar a un build. No hay Studio, no hay botón de "Publicar": el cambio se despliega en el siguiente commit/deploy, como cualquier otro cambio de código.
- Las páginas ya no hacen `await getXPageData()` a Sanity: importan el objeto de contenido directamente y son, en su mayoría, componentes síncronos (no `async function Page()`) salvo que necesiten datos reales de Sanity (la home, que pide `getExperienciasDestacadas()`) o de Google Calendar (ver 4.1). `getExperiencias()`/`getExperienciasDestacadas()`/`getExperienciaSlugs()` degradan a `[]` si Sanity no responde (try/catch), para no tirar abajo el build ni el render si el servicio está caído — mismo patrón para las tres.

### 4.3 Texto con negrita/varios párrafos: componente `Prose`

Como el contenido ya no vive en Sanity, los campos de texto largo (entradillas de hero, textos de cierre, respuestas de FAQ, citas de testimonios, párrafos de historia) ya no son portable text — son `string` (un párrafo) o `string[]` (varios párrafos), con una sintaxis mínima tipo markdown para negrita/cursiva: `**negrita**`, `*cursiva*`.

- **Componente**: `Prose` (`src/components/Prose/`). Recibe `value?: string | string[]`, `className` (se aplica a cada `<p>` generado), y opcionalmente `as` (etiqueta, por defecto `p`) y `paragraphSpacing` (por defecto `true`, añade `margin-top: 1em` a partir del segundo párrafo — ponlo a `false` si el contenedor ya espacia con `gap`, como en `Historia.tsx`). Sustituye por completo al antiguo `RichText`/`@portabletext/react` en todas las páginas hardcodeadas.
- **Excepción — `experiencia.descripcion` sigue siendo portable text de verdad**: es el único campo de texto largo que sigue viniendo de Sanity (la ficha de una experiencia en `/experiencias/[slug]/`), así que sigue renderizándose con el componente original `RichText` (`src/components/RichText/`, envuelve `@portabletext/react`) — no lo borres ni lo sustituyas por `Prose`, son intercambiables en la superficie pero no en la fuente de datos.
- Las citas de testimonios (`quote`) no interpolan las comillas tipográficas a mano en el JSX — las añade el CSS de cada sitio vía `::before`/`::after` (`content: '\201C'`/`'\201D'`) sobre la clase de la cita, igual que antes.
- **Metadatos (SEO)**: `buildPageMetadata()` (`src/lib/metadata.ts`) acepta `description` como `string | string[]`; si es array, lo une con espacios antes de meterlo en `<meta description>`/OpenGraph.

### 4.4 Catálogo de experiencias

El pivote estratégico del proyecto: la web dejó de organizarse por programa de financiación (Erasmus+, Cuerpo Europeo de Solidaridad) y pasó a organizarse por **catálogo de experiencias**, donde la financiación es una etiqueta de coste más (`costeEtiqueta`, ej. "Te lo paga Europa"), no la categoría madre. Los nombres de programa no aparecen en titulares ni en nombres de sección — solo en etiquetas de coste, en la ficha de cada experiencia y en `/nosotros/`.

**Corrección de escala (segunda iteración del catálogo)**: Xeración publica del orden de diez convocatorias al año, no un volumen de tienda online — un catálogo pensado para mucha oferta (chips de filtro sobre seis tarjetas) se leía como vacío. La corrección no fue reducir el catálogo, sino ampliar qué cuenta como "experiencia" y añadir profundidad histórica real:

- **Lo local, no solo la movilidad, es experiencia de pleno derecho.** Actividades recurrentes de Ferrol sin fecha de caducidad (Offline Club, Speak Factor, Building Nature, Cousateca, Das Nest, voluntariado urbano) tienen su propia ficha con `categoria: "local"`, igual que un voluntariado en Cracovia. No hizo falta ampliar `CATEGORIA_OPTIONS` — `local` ya cubría el caso; sí se pobló por primera vez con estas cinco entradas (antes solo tenía dos). Al no tener convocatoria con fecha, su bloque "avísame" (ver más abajo) es siempre el CTA principal.
- **`edicion`** (`src/sanity/schemaTypes/documents/edicion.ts`) — colección nueva: `titulo`, `experiencia` (referencia, requerida), `anio`, `lugar`, `participantes` (opcional), `paises` (array de string, opcional), `resumen` (máx. 200 caracteres, dos frases), `galeria` (array de `imageWithAlt`, con hotspot), `destacada` (boolean). Da volumen real sin inventar nada — trece años de proyectos ejecutados que antes no aparecían en ningún sitio de la web — y sirve de prueba social (para el joven que duda) y de prueba de solvencia (para un coordinador europeo evaluando si sabéis ejecutar). En la ficha de la experiencia (`/experiencias/[slug]/`) se listan bajo "Ediciones anteriores", ordenadas por `anio` descendente, en formato compacto (año, lugar, participantes, tira de hasta 4 fotos de `galeria`); la sección entera se omite si no hay ninguna.
- **Dato de refuerzo en la tarjeta**: `EXPERIENCIA_CARD_PROJECTION` (`src/sanity/lib/queries.ts`) agrega por GROQ `edicionesCount` (`count()`), `edicionesDesde` (`math::min()` de `anio`) y `tieneEdicionesDestacadas` (si existe alguna `edicion` con `destacada == true`) para cada experiencia, en la misma query que ya trae el resto de la tarjeta — sin llamadas adicionales. `ExperienciaCard` solo muestra el refuerzo ("8 ediciones desde 2015") cuando `tieneEdicionesDestacadas` es `true`; marcar `destacada` en una edición es lo que activa el badge, no basta con que existan ediciones.
- **Secciones agrupadas en vez de chips, con pocas experiencias activas.** `CATALOG_GROUPS`/`groupForExperiencia()` (`src/lib/experienciaCategorias.ts`) clasifican cada experiencia en `'ferrol'` (`categoria === 'local'`) / `'caminos'` (resto en Galicia) / `'europa'` (`ambito === 'europa'`, tiene prioridad sobre `categoria`) — "En Ferrol y comarca", "Caminos y naturaleza", "Por Europa". `ExperienciasCatalog` calcula `grouped = forceGrouped || items.length <= 12` (`GROUPED_THRESHOLD`): agrupado por debajo del umbral, chips (código intacto, sin tocar) por encima — así el día que crezca la oferta no hace falta reescribir nada, solo pasa a filtrar solo. El buscador de texto (`showSearch`) funciona igual en ambos modos, filtrando antes de agrupar/mostrar; el filtro por chip solo existe en modo chips. La home pasa `forceGrouped` (ver más abajo) para no depender nunca del umbral.
- **`experiencia`** (`src/sanity/schemaTypes/documents/experiencia.ts`) — colección, no singleton. Campos: `titulo`, `slug` (desde `titulo`), `categoria` (`camino`/`aventura`/`vivirFuera`/`intercambio`/`local`/`naturaleza` — `CATEGORIA_OPTIONS` exportado del propio schema), `lugar`, `resumen` (máx. 140 caracteres, lo que se lee en la tarjeta), `descripcion` (richText, solo para experiencias con página propia), `ambito` (`galicia`/`europa`), `duracion` (`finde`/`semana`/`meses` — para las actividades locales permanentes es la aproximación menos mala, no un compromiso real: no se creó un cuarto valor porque hoy solo condiciona un chip de filtro que además está oculto mientras el catálogo esté en modo agrupado), `costeTipo` (`gratis`/`financiado`/`pago` — determina el color de la etiqueta: gratis y financiado en verde, pago en color de texto normal), `costeEtiqueta`, `imagen`, `colorBanda` (hex, la banda de color superior de la tarjeta), `enlaceExterno` (si está relleno, la tarjeta enlaza fuera en pestaña nueva y **no** se genera página propia), `destacada` (si aparece en el catálogo reducido de la home), `activa`, `orden`, y `language` (por si algún día hace falta una variante en otro idioma — hoy todas las experiencias son en español, el catálogo solo existe en `/experiencias/`).
- **`convocatoria`** (`src/sanity/schemaTypes/documents/convocatoria.ts`) — colección con `experiencia` (referencia), `pais`, `fechaInicio`/`fechaFin`/`fechaLimite`, `plazas`, `enlaceInscripcion`, `activa`. En la ficha de una experiencia se listan las convocatorias con `fechaLimite` futura (o sin fecha límite).
- **Bloque "avísame" — siempre visible, no solo cuando no hay plazas.** Con ~10 convocatorias al año, "mira lo que hay" falla la mitad del año. `AvisoForm` (`src/components/AvisoForm/`, client component con `useActionState`) se renderiza en **toda** ficha de experiencia: si hay convocatorias abiertas, va debajo de ellas en tono secundario ("¿No entras en esta o prefieres esperar?"); si no las hay (o la experiencia es de las locales permanentes, que nunca tienen convocatoria), ocupa su lugar como CTA principal. Formulario mínimo — nombre, correo, WhatsApp opcional — que envía a la server action `submitAviso` (`src/lib/notifySignup.ts`, `'use server'`). **Es un handler documentado y aislado, no una integración de newsletter real**: por ahora guarda cada envío como un documento `avisoInteres` en Sanity (visible en Studio, "Contenido → Avisos de interés", con un flag `procesado` para marcarlo exportado/contactado) para no perder ningún contacto; si Xeración ya usa una herramienta de newsletter, sustituir el cuerpo de `submitAviso` por su API sin tocar la firma (compatible con `useActionState`) ni el componente. `avisoInteres` (`src/sanity/schemaTypes/documents/avisoInteres.ts`) no se edita a mano — sus campos son `readOnly` en Studio salvo `procesado`.
- **Queries** (`src/sanity/lib/queries.ts`): `getExperiencias()` (todas las activas, para `/experiencias/`), `getExperienciasDestacadas()` (solo `destacada == true`, para la home), `getExperienciaBySlug(slug)`, `getExperienciaSlugs()` (para `generateStaticParams` y el sitemap), `getConvocatoriasForExperiencia(id)`, `getEdicionesForExperiencia(id)`.
- **Componentes**: `BandCard` (`src/components/BandCard/`) — tarjeta genérica con banda de color superior (con `EyebrowPill` encima para garantizar contraste, sea cual sea el hex de la banda), meta opcional, título, texto, dato de refuerzo opcional, pie con etiqueta de precio + CTA; la reutiliza `ExperienciaCard` (`src/components/ExperienciaCard/`). `ExperienciasCatalog` (`src/components/ExperienciasCatalog/`) es un client component con buscador de texto opcional (`showSearch`) sobre título+resumen, filtrado 100% en cliente (sin llamadas adicionales a Sanity), y persistencia opcional en la query string (`persistInUrl`, params `filtro`/`q`, `filtro` solo se escribe en modo chips) para poder compartir un enlace filtrado — se usa con `persistInUrl={false} forceGrouped` en la home (solo destacadas) y `persistInUrl showSearch` en `/experiencias/` (catálogo completo, decide chips/agrupado por el umbral). Como usa `useSearchParams`, cada uso va envuelto en `<Suspense>` en la página que lo monta.
- **`Card`** (`src/components/Card/`) se actualizó para usar `next/link` en hrefs internos y `<a target="_blank">` con `rel="noopener noreferrer"` en hrefs externos (detectados por `target === '_blank'`, `https?://` o `mailto:`) — antes siempre renderizaba un `<a>` plano.
- **`/experiencias/[slug]/`** solo se genera (`generateStaticParams` desde `getExperienciaSlugs()`) para experiencias sin `enlaceExterno`; si alguien visita la URL de una que sí lo tiene, `notFound()`.
- **Redirección**: `/irse/` → `/experiencias/` (301 permanente, en `next.config.ts`, mismo patrón que la redirección de `/ferrol/`).
- **Contenido de ejemplo**: `scripts/seed-experiencias.ts` (doce experiencias, siete ediciones de ejemplo y dos convocatorias, todo `createIfNotExists`, no pisa nada) — el único script de `scripts/` que sigue siendo relevante, ya que es el único tipo de contenido que sigue viviendo en Sanity (ver 4.2). Ejecútalo con `npx tsx scripts/seed-experiencias.ts` y `SANITY_API_WRITE_TOKEN` en `.env.local`.

### 4.5 Datos legales en `/nosotros/`

`pageNosotrosEs` (`src/content/nosotros.ts`) tiene los campos `legalName`, `legalCif`, `legalAddress`, `legalOid`, `legalPic`, `accreditations` (array de `Partner`, reutilizando el mismo patrón de logo+nombre que ya usaban los partners) y `memoriaAnualUrl` — es contenido real de la asociación (CIF `G70385091`, OID `E10060426`, PIC `948920640`), no lo inventes ni lo cambies sin confirmarlo. Se renderiza en `Legal.tsx` (`_sections/`), justo antes del cierre.

## 5. Convención de clases de ruta

Cada layout de sub-home aplica una clase en su elemento raíz que determina qué variables de acento CSS están activas en el scope de esa página:

- `route-ferrol` → activa el acento teal (en `/agenda/` y `/mentores/`)
- `route-irse` → activa el acento coral (solo en `/experiencias/` y `/experiencias/[slug]/` — el nombre de la clase quedó como `irse` por continuidad del sistema de diseño, ver 4.2)

Esta clase se aplica en el elemento raíz del layout (ej. el `<body>` o el contenedor principal de la página), no por componente individual. Los componentes compartidos (header, tarjetas, botones primarios) leen el color de acento heredando de esta clase mediante las variables `--color-{ruta}-*` definidas en el punto 2, en vez de recibir el color como prop. Esto es lo que permite que el mismo componente `.btn-primary` o el link de nav activo se pinte teal en `/agenda/` y coral en `/experiencias/` sin lógica condicional en el componente.

Ni la portada (`/`) ni `/nosotros/` llevan ninguna de estas dos clases — usan solo la paleta neutra.

## 6. Estructura de páginas (resumen — detalle completo en ESPECIFICACION.md)

- **Portada `/`**: hero asimétrico (kicker + H1 + subtítulo, foto editorial) → catálogo filtrable de experiencias destacadas (`ExperienciasCatalog`, ver 4.4) → esta semana en Ferrol (`Agenda`, reutilizado sin cambios) → historias reales (`Testimonials`, sin cambios) → franja institucional discreta (una línea, enlaza a `/nosotros/`) → logos institucionales (Erasmus+, CES, Concello de Ferrol, Xunta de Galicia) → CTA de cierre/contacto (sin cambios) → footer.
- **`/agenda/`** (antes `/ferrol/`; la URL se renombró pero el objeto de contenido sigue llamándose `pageFerrolEs`, ver 4.2): hero teal → programas fijos (grid 2×2) → agenda próximas 2 semanas (timeline) → cómo llegar (mapa + info) → preguntas rápidas (acordeón) → CTA de cierre.
- **`/experiencias/`** (antes `/irse/`; reemplazo de modelo de contenido, no solo de URL — ver 4.4): cabecera corta con `<h1>` (copy hardcodeado en la página) → catálogo completo filtrable con buscador de texto y filtros persistidos en la query string (`?filtro=`/`?q=`). Hero coral (`route-irse`). Es la única página cuyo contenido principal sigue viniendo de Sanity en tiempo real (la colección `experiencia`).
- **`/experiencias/[slug]/`**: hero (foto + título + datos clave en fila: ámbito/duración/coste) → descripción en portable text (de Sanity, ver 4.3) → convocatorias abiertas o bloque "avísame" → CTA de cierre. Solo se genera para experiencias sin `enlaceExterno`.
- **`/nosotros/`**: hero (con foto de fondo opcional) → historia → valores → equipo → voluntarios históricos + testimonios → "han estado con nosotros" (rejilla + cargar más) → iniciativas → partners → **datos legales** (CIF, OID, PIC, acreditaciones, memoria anual — ver 4.5) → CTA de cierre.
- **`/mentores/`**: página de captación de mentores locales (voluntarios de Ferrol que acompañan a los voluntarios europeos a integrarse en la ciudad). Hero teal → a quién buscamos → tres beneficios (rejilla, reutiliza el patrón de `ValueItem` de "Valores") → tira de 2 números → testimonios (rejilla de 3) → CTA de cierre, reimportado literalmente de `src/app/agenda/_sections/ClosingCta.tsx` (mismo acento, mismos botones WhatsApp/Instagram). No está enlazada desde el nav principal, pero sí desde un banner (`MentoresCallout`, texto hardcodeado) insertado en `/agenda/` entre las preguntas rápidas y el CTA de cierre. Contenido de la propia página alimentado por `pageMentoresContent` (`src/content/mentores.ts`).

Para el contenido literal exacto de cada sección en español (textos, testimonios, preguntas de FAQ, eventos de agenda, etc.) consultar siempre [ESPECIFICACION.md](ESPECIFICACION.md) como referencia histórica del tono/estructura original — pero el contenido real y actualmente publicado vive en `src/content/*.ts` (ver 4.2), que es la fuente de verdad para editar.

## 7. Estado del proyecto

Proyecto en Next.js 16 (App Router) + TypeScript + CSS Modules, con Sanity Studio embebido en `/studio` para el catálogo de experiencias (ver 4.2 y 4.4). El resto del contenido vive hardcodeado en `src/content/*.ts` y se edita directamente en el código — no hay Studio para esas páginas. Stack ya decidido y en producción; no reconsiderarlo sin que el usuario lo pida explícitamente.
