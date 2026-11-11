# xeracion.org — memoria del proyecto

Este archivo es la fuente de verdad permanente para cualquier sesión de trabajo sobre el rediseño de xeracion.org. Léelo entero antes de tocar código. La especificación completa (contenido literal, copy de cada sección, estructura de página) vive en [ESPECIFICACION.md](ESPECIFICACION.md), en esta misma carpeta — este CLAUDE.md resume las reglas transversales que no deben romperse nunca; ESPECIFICACION.md es la referencia para el contenido exacto de cada página.

## 1. Contexto de la organización

**Xeración** es una asociación juvenil gallega activa desde 2013, con sede en Ferrol: Casa da Xuventude, Rúa Almendra 9. Coordina:
- Intercambios juveniles Erasmus+ (Youth Exchanges)
- Voluntariados del Cuerpo Europeo de Solidaridad (CES / ESC — European Solidarity Corps)
- Cursos de formación (Training Courses, TC)
- Actividades locales en Ferrol (clubs, talleres, conciertos)

### Posicionamiento (noviembre de 2026)

Xeración se presenta como **un grupo de gente que monta alternativas**, con dos pilares de igual peso: **experiencias** para crecer, sobre todo para gente joven (unas de pago, otras financiadas), y **proyectos para la comunidad** (Liña, Cousateca, Stop Eucalipto). Europa y Ferrol pasan a segundo plano: Europa aparece como una forma más de financiar experiencias, y como aval en la sección de cifras; Ferrol, en la agenda, la dirección y el pie. Ni uno ni otro van en el titular de la portada. Las audiencias siguen siendo tres: gente joven que busca un plan, socios europeos y visitante institucional.

Contacto: `info@xeracion.org`. Email del usuario propietario de este proyecto: `info@xeracion.org`.

### Las rutas por audiencia

El sitio no tiene una home única: tiene varias sub-homes según quién es el visitante, cada una con su propio color de acento que actúa como identidad visual persistente en toda la sección.

| Ruta | Audiencia | Acento |
|---|---|---|
| `/` | Portada: hero con dos salidas (experiencias y proyectos), agenda de la semana, catálogo destacado, proyectos para la comunidad, cifras y puertas para entidades | Neutro (sin clase `route-*`) |
| `/agenda/` | Jóvenes de la comarca de Ferrol que buscan algo que hacer esta semana | Lima (energía, cercanía) |
| `/experiencias/`, `/experiencias/[slug]/` | Jóvenes españoles (18-30) que buscan un catálogo de experiencias — caminos, aventura, vivir fuera, intercambios, planes locales, naturaleza — sin que el programa de financiación (Erasmus+, CES) sea la categoría madre: es una etiqueta de coste más. Es el 4º ítem del nav en `/`, `/agenda/` y `/nosotros/`. | Azul (salida, horizonte) |
| `/nosotros/` | Quiénes somos, equipo, historia, partners, datos legales | Neutro (sin clase `route-*`) |
| `/nosotros/equipo/` | El equipo al completo: coordinación, voluntariado europeo actual y los voluntarios que ya pasaron. Estructura calcada de anthropic.com/company/leadership. Se enlaza desde la sección «El equipo ahora mismo» de `/nosotros/` y desde el pie | Neutro (layout de `/nosotros/`) |
| `/mentores/` | Captación de mentores locales (no está en el nav principal) | Lima |
| `/speakfactor/` | Speak Factor, el curso gratuito de oratoria en inglés de la Casa da Xuventude (misma URL que en el WordPress). Se enlaza desde el footer (columna Agenda) y desde la iniciativa de `/nosotros/`; en el nav se marca «Agenda» | Lima (`route-ferrol`, como la Agenda) |
| `/paisanos/`, `/paisanos/[slug]/` | Paisanos: las 12 entrevistas a vecinos y vecinas de Ferrol, más el podcast (ver 4.6). Se enlaza desde la iniciativa «Paisanos» de `/nosotros/` | Neutro (sin clase `route-*`) |
| `/speak-factor-tc/` | Memoria de Speak Factor VI (curso internacional, Panxón y Vigo, 11–18 de mayo de 2026), ya realizado — misma URL que tenía la convocatoria en el WordPress (ver 4.6). Se enlaza desde `/speakfactor/` | Neutro (sin clase `route-*`) |
| `/preguntas/`, `/empresas/`, `/bienvenido/`, `/mesaredonda/` | Páginas informativas transferidas del WordPress anterior (ver 4.6). No están en el nav principal; `/preguntas/` y `/empresas/` se enlazan desde el footer, `/bienvenido/` es la página de llegada de las nuevas personas socias (`noindex`) y `/mesaredonda/` (ciclo de mesas redondas de las municipales de 2023, parte de Get The Net) conserva su URL antigua | Neutro (sin clase `route-*`) |

**El sitio fue bilingüe (es/en) hasta que se retiró por completo la versión en inglés** — existían `/en/`, `/en/agenda/`, `/volunteering/` y `/about/`, un selector de idioma con banderas en `ResizableNavbar`, detección de idioma por `Accept-Language` en `src/middleware.ts` y una cookie `xeracion_lang`. Todo eso se eliminó: código de esas rutas, sus componentes de sección (`ForOrganisations`, `MobilityProgramCards`, la sección `RouteCards`/`Stats` de la portada inglesa), el contenido en `src/content/` (`homeEn`, `pageFerrolEnContent`, `pageNosotrosEnContent`, `volunteering.ts` entero), el selector de idioma del navbar, `src/middleware.ts`, y los tokens de color `--color-en-*`/`.route-en` (el acento púrpura, exclusivo de `/volunteering/`). No queda rastro funcional de la versión en inglés — si en el futuro se quiere reintroducir, es un proyecto nuevo, no una reactivación de código apagado.

### Marco StoryBrand

El usuario es el héroe, Xeración es el guía. Esto no es decorativo: condiciona cómo se escribe cada CTA (ver sección 3).

## 2. Sistema de diseño

### Tipografía

- **Nordea Sans Small** (Regular, 400) — todos los titulares H1 a H4, vía la variable `--font-display`. Es la tipografía corporativa real (con licencia), embebida como `@font-face` en `globals.css` apuntando a `public/fonts/NordeaSansSmall-Regular.ttf` (sustituyó en noviembre de 2026 a Nordea Sans Large Medium, que se retiró). Solo hay un peso: los titulares van a 400 y nada en `--font-display` debe pedir 600 o más, o el navegador fabricaría una negrita falsa. No tiene la flecha `→`, que sale de la fuente de respaldo. Si ese archivo llegara a faltar, `--font-display` degrada en cascada a **Manrope** (next/font, variable `--font-heading`) y luego a `system-ui` — ningún componente necesita tocarse, todos leen `--font-display`.
- **Inter** (400, 500) — cuerpo, eyebrows, UI, metadatos, vía `--font-body`.

Escalas responsive (desktop / tablet / móvil). Los breakpoints del sistema son: móvil < 768px, tablet 768–1024px, desktop > 1024px.

| Nivel | Desktop | Tablet | Móvil | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | 42px | 34px | 28px | 400 | 1.04 | -0.025em |
| H2 | 34px | 30px | 26px | 400 | 1.15 | -0.02em |
| H3 | 24px | 22px | 20px | 400 | 1.2 | -0.015em |
| H4 | 19px | 18px | 17px | 400 | 1.3 | -0.01em |
| Body | 17px | 16px | 16px | 400 | 1.55 | 0 |

Notas de tamaños específicos que aparecen en secciones concretas y difieren de la escala base (respetar los de ESPECIFICACION.md en cada caso): la cita del testimonio grande usa 28px/22px/19px; la del testimonio pequeño 19px/17px; el H2 de CTA de cierre usa 36px/28px; el número de la tira de estadísticas usa 44px.

### Paleta de color (variables CSS)

Paleta de marca (desde el libro de estilo "Diseño Xeración"): azul `#357DCA`, tinta `#2F2F2F`, papel `#FBFFFC`, verde `#0E3A2F`. **El verde sustituyó al antiguo lima `#D5F483`** como color de acento de marca (y al verde de texto `#4B6212`): las variables conservan el nombre histórico `--xr-lime-*`/`ferrol`, pero hoy son una escala de verdes — `--xr-lime` y `--xr-lime-700` = `#0E3A2F`, `-900` `#08241D`, tintes claros `-50` `#EEF5F2`, `-100` `#E2EEE9`, `-200` `#C3DBD1`, `-300` `#8FB8A8`, `-500` `#4F8371`, y `--xr-lime-on-dark` `#A8D5C2` para usar el verde sobre fondos oscuros (pie, bandas de cifras), donde el verde oscuro no se leería. Al ser oscuro, todo lo que lleva el verde de fondo (botón `highlight`, `EyebrowPill highlight`, botón `accent` en rutas `route-ferrol`) va con texto papel. Cuando este documento dice «lima», léase este verde. Los pasos derivados (`--xr-blue-*`, `--xr-lime-*`, `--xr-ink-*`, en `globals.css`) están calibrados para que cada combinación de texto pase AA (4.5:1). Los nombres de variable semánticos de siempre (`--color-text-primary`, `--color-ferrol-*`, `--color-accent-*`...) se mantienen — solo cambiaron los valores a los que apuntan — para que ningún componente tenga que tocar su CSS al actualizar la marca.

```css
:root {
  /* Neutros */
  --color-text-primary: #2F2F2F;
  --color-text-secondary: #444444;
  --color-text-tertiary: #5A5A5A;
  --color-text-muted: #6B6B6B;
  --color-border: #D9DDD9;
  --color-border-strong: #B9BEB9;
  --color-bg: #FBFFFC;
  --color-bg-warm: #F4F8F4;
  --color-white: #FFFFFF;

  /* Acento Ferrol / Agenda (lima) */
  --color-ferrol-bg: #E2EEE9;
  --color-ferrol-border: #4F8371;
  --color-ferrol-text: #0E3A2F;
  --color-ferrol-strong: #08241D;
  --color-ferrol-grad-1: #C3DBD1;
  --color-ferrol-grad-2: #8FB8A8;

  /* Acento Irse / Experiencias (azul) */
  --color-irse-bg: #E6F0FB;
  --color-irse-border: #8FBCEF;
  --color-irse-text: #245A96;
  --color-irse-strong: #143A63;
  --color-irse-grad-1: #8FBCEF;
  --color-irse-grad-2: #357DCA;

  /* Espaciados */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 96px;

  /* Radius — generosos */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 999px;

  /* Container: retícula de anthropic.com (el max-width incluye los márgenes) */
  --container-max: 1920px;
  --container-padding: 32px; /* 48px desde 768px, 80px desde 1280px */
}
```

Gradientes de tarjeta de ruta (para fondos de foto placeholder en la portada):
- Ferrol/Agenda: `linear-gradient(135deg, #C3DBD1 0%, #8FB8A8 100%)`
- Irse/Experiencias: `linear-gradient(135deg, #8FBCEF 0%, #357DCA 100%)`

Cada ruta define además `--color-{ruta}-fill`/`-on-fill` (el par color de relleno + su texto de contraste correcto — verde y azul necesitan texto claro) que alimenta la variante `accent` de `ButtonPrimary`. Existe también una variante `highlight`, independiente de ruta, que es siempre el verde de marca — un acento que puede aparecer incluso en páginas de acento azul (`ButtonPrimary`, `EyebrowPill`).

### Lenguaje visual inspirado en anthropic.com

Desde noviembre de 2026 la interfaz replica la UX/UI de anthropic.com, manteniendo la paleta, la tipografía (solo Nordea + Inter, sin serif) y el contenido y la estructura de cada página:

- **Esquinas contenidas**: `--radius-sm` 4px, `--radius-md` 8px (botones, campos), `--radius-lg` 12px (tarjetas), `--radius-xl` 8px (fotos de cabecera — más pequeño que `-lg` a propósito: las fotos grandes van casi rectas). `--radius-full` queda solo para las pastillas del menú, chips y avatares redondos.
- **Tarjetas planas**: fondo `--surface-card` (`--xr-ink-50`, gris suave sobre el papel), sin borde ni sombra; al pasar el ratón solo cambian a `--surface-card-hover` (`--xr-ink-100`). Nada se eleva (`--shadow-lift: none`, sin `translateY`). En secciones que ya tienen fondo gris (`--color-bg-warm`, p. ej. «Valores» de `/nosotros/`), las tarjetas van en papel (`--color-bg`).
- **Botones rectangulares** (`--radius-md`, 14px): `ButtonPrimary` en tinta (o verde/azul con `accent`/`highlight`); `ButtonSecondary` en gris suave, sin contorno.
- **Cabeceras apiladas** (`HeroSplit`): titular a todo el ancho, entradilla y botones debajo, y la foto en panorámico (21:9 desktop, 16:9 tablet, 4:3 móvil) al final. La foto (`HeroPhotoBleed`) se abre hacia los márgenes al hacer scroll: la caja ocupa toda la retícula, un `clip-path` la recorta al ancho del contenido y se va abriendo según `--expand` (0 a 1, lo pone un poco de JS), mientras la imagen pierde un leve zoom. Sin JS o con `prefers-reduced-motion`, se queda al ancho del contenido. Con `inlineText` (solo la portada) la entradilla va dentro del mismo `h1`, en gris, a continuación de la frase principal — el efecto de anthropic.com hecho solo con Nordea. `imageFocus` ajusta el recorte (por defecto `center 35%`).
- **Separadores con líneas finas**: el pie es una lista de filas separadas por líneas.
- **`EyebrowPill`** pasó a ser una etiqueta pequeña en minúscula normal (12px, `--radius-sm`), no versalitas espaciadas.

### Componentes reutilizables

- `.eyebrow-pill` (`EyebrowPill`) — etiqueta en versalitas con pastilla de fondo semi-transparente, para superponer sobre fotos y tarjetas. El antetítulo suelto (`Eyebrow`) se eliminó, ver regla 3 del punto 3.
- `.container` — max-width 1920px (márgenes incluidos), con márgenes laterales de 32/48/80px vía `--container-padding`: la misma retícula que anthropic.com
- `.btn-primary` — fondo oscuro `#2F2F2F`, texto papel, `--radius-md`
- `.btn-secondary` — fondo gris suave, sin borde, `--radius-md`
- `.btn-link` — texto plano con flecha (`→`) que se desliza 3px al hover, para "Leer más" / CTAs terciarios
- `.card` — plana: fondo `--surface-card`, `--radius-lg` (12px), sin borde; hover solo cambia el fondo
- `.photo-placeholder` — marcador de foto real con gradiente, incluye etiqueta entre corchetes indicando qué foto real va ahí (ej. `[ foto editorial · grupo en muelle de Ferrol ]`)

En `/nosotros/`, la sección "Valores" usa discos numerados (1, 2, 3…) en vez de emoji como icono de cada tarjeta — un cambio explícito del libro de estilo, acotado a esa sección (`Iniciativas` y el patrón `ValueItem` de `/mentores/` siguen con emoji).

### Header y navegación (todas las páginas)

Implementado por `ResizableNavbar` (`src/components/ResizableNavbar/`) — ver el punto 2.1 más abajo para el detalle del componente. Resumen visual:

- Barra fija sencilla, estilo anthropic.com: fondo papel opaco, ancho del `.container`; no se encoge ni flota — al hacer scroll solo gana una línea fina inferior. Altura `--nav-height` (72px / 64px en móvil).
- Desktop: la primera mitad de `NAV_ITEMS_ES` (Inicio, Agenda) a la izquierda, el logotipo centrado y la segunda mitad (Experiencias, Nosotros) a la derecha, cada enlace en una pastilla fina con borde (`--radius-full`, 13px).
- **Logo que se comprime a la X** (como el de anthropic.com): al bajar más de 48px, las letras «eracion» se pliegan hacia la X (se desplazan, encogen y desvanecen, escalonadas de la última a la primera) mientras la caja del logo se estrecha hasta el ancho de la X; al volver arriba se despliegan en orden inverso. Es una transición CSS disparada por umbral, no ligada al scroll. Componente `LogoMark` (`src/components/LogoMark/`, prop `collapsed`): SVG en línea con el trazado del logo vectorial troceado por letras (X, e, r, a, c, i, o, n, cada una con sus huecos interiores) en `paths.ts`, generado a partir de `public/logo/xeracion-azul.svg` — no se edita a mano; si cambia el logo, hay que regenerarlo. Color vía `currentColor` (azul de marca).
Con `prefers-reduced-motion`, el cambio es instantáneo.
- Móvil (< 768px): logotipo a la izquierda y botón de menú a la derecha → lista desplegable con enlaces grandes separados por líneas; se cierra al pulsar un enlace o Escape.
- **En cada sub-home**, la pastilla de la sección activa lleva el fondo y el texto de acento correspondientes (sutil, no llamativo) — esto es lo que conecta con la convención de clases de ruta del punto 5.
- Respeta `prefers-reduced-motion`: sin animación del desplegable ni transiciones.

### Logotipo

Los logos oficiales en vectorial están en `public/logo/`: `xeracion-azul.svg` (`#357DCA`, para fondos claros) y `xeracion-blanco.svg` (para fondos oscuros, como el pie). Mismo trazado y viewBox (1811×375). Son los únicos archivos de logo: los PNG antiguos (`XeracionBlue.png`, `XeracionWhite.png`, `XeracionXblue-1.png`) se borraron.

**Favicon**: `src/app/icon.svg` es solo la X del logo vectorial, con un `@media (prefers-color-scheme: dark)` dentro del propio SVG: azul de marca con el navegador en modo claro y blanca en modo oscuro. `src/app/favicon.ico` (X azul) se mantiene como respaldo para Safari, que no admite favicons SVG.

### Pie (`Footer`)

Fondo oscuro a todo el ancho (ya no una tarjeta redondeada). Izquierda: logotipo (`xeracion-blanco.svg`) y redes. Derecha: una fila por grupo (Agenda, Experiencias, Contacto) separada por líneas finas, con el nombre del grupo y sus enlaces en línea, y debajo «Quiénes somos» con `siteSettings.mission` (frase corta sin nombres de programa, regla 7).

#### 2.1 Componente `ResizableNavbar`

- Ubicación: `src/components/ResizableNavbar/` (`ResizableNavbar.tsx` + `ResizableNavbar.module.css`, con un `index.ts` barrel para poder importarlo como `@/components/ResizableNavbar`, igual que el resto de componentes).
- Sustituye a los antiguos `Header` y `MobileMenu` (eliminados) en los cinco layouts que montan navegación: `(main)`, `agenda`, `experiencias`, `nosotros`, `mentores`.
- Props: `siteName: string`, `items: NavItem[]` (`{ name, link, key }`, de `src/lib/nav.ts` — `NAV_ITEMS_ES`), `activeRoute?: RouteKey` (`'home' | 'ferrol' | 'experiencias' | 'nosotros'` — el valor sigue llamándose `ferrol` internamente para la Agenda aunque la página pública sea `/agenda/`, ver 4.2 — se compara contra `item.key`, no se reconstruye a partir de la URL). Nada de contenido va hardcodeado dentro del componente — los enlaces se definen una vez en `src/lib/nav.ts` y cada layout se los pasa. **Ya no tiene selector de idioma** (props `locale`/`altLangHref` eliminadas junto con la versión en inglés, ver punto 1).
- El color de acento (pill de hover, texto activo) se lee siempre de `var(--color-accent-*)`, heredada de la clase `.route-ferrol/.route-irse` que ya aplica cada layout — el componente no tiene lógica condicional de color.
- El nombre `ResizableNavbar` es histórico: era la barra que se estrechaba y flotaba (inspirada en Aceternity UI). Hoy es la barra fija estilo anthropic.com; se mantuvo el nombre y las props para no tocar los layouts. Usa `motion` solo para detectar el scroll (`useScroll`) y animar el desplegable móvil — todo en CSS Modules — **no se instaló Tailwind** para portar sus clases; todos los valores (colores, espaciados, radios, tipografía) salen de las variables del sistema de diseño ya existente, tal y como exige el punto 4.

## 3. Reglas de tono del copy

Estas reglas son inviolables y se aplican a **todo** texto nuevo que se escriba, no solo al que ya está literal en ESPECIFICACION.md:

1. **CTAs en primera persona del héroe.** El usuario habla, no se le ordena. `"Quiero irme"`, `"Apúntame"`, `"Apply"` — nunca imperativos hacia el usuario como `"Regístrate"` o `"Apúntate"`.
2. **H1 como frases completas terminadas en punto.** Nunca titulares telegráficos. Ej: `Doce años abriendo puertas a Europa desde Galicia.` — no `Doce años. Europa. Galicia.`
3. **Sin antetítulos (eyebrows).** Se retiraron de toda la web: ningún título lleva encima el texto pequeño en mayúsculas. Si una sección necesita nombre y no tiene titular, se le da un `h2` normal (como «Historias reales» en la portada o «Datos legales» en `/nosotros/`). Las etiquetas sobre fotos (`EyebrowPill`) y los rótulos de datos («Dónde», «Cuándo»…) no son antetítulos y se mantienen.
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
- **Fotos**: las fotos reales viven en `public/img/` (`equipo/`, `voluntarios/`, `testimonios/`, `fotos/`, `logos/`), ya recortadas y comprimidas a WebP (logos en PNG); se referencian desde `src/content/*.ts` como rutas estáticas (`'/img/equipo/fran-sequeiro.webp'`). Mientras no haya foto real, usar `.photo-placeholder` con el gradiente correspondiente y una etiqueta entre corchetes describiendo qué foto real debería ir ahí. No usar imágenes de stock genéricas.

### 4.1 Agenda de eventos vía Google Calendar

Los eventos de la agenda destacada (portada) y de la agenda de próximas dos semanas (`/agenda/`) se leen en tiempo real de Google Calendar a través de `src/lib/googleCalendar.ts`. Configuración:

- `GOOGLE_CALENDAR_API_KEY` (variable de entorno) — clave de la API de Google Calendar, restringida a "Calendar API" en Google Cloud Console.
- `googleCalendarId` (campo `siteSettings.googleCalendarId` en `src/content/siteSettings.ts`, ver 4.2) — el ID del calendario (Ajustes del calendario de Google → Integrar calendario → ID de calendario). El calendario debe estar marcado como público.

Mientras falte cualquiera de los dos, la agenda no muestra eventos (no rompe la página). `getGoogleCalendarEvents` pide `singleEvents: true` a la API para que Google expanda los eventos recurrentes (ej. Offline Club cada martes) en instancias sueltas — no hay parseo de RRULE en el código.

### 4.2 Contenido hardcodeado en `src/content/` (todo, también el catálogo)

**La web no tiene CMS.** Sanity se retiró por completo en noviembre de 2026 (Studio, esquemas, dependencias, modo borrador y variables de entorno): todo el contenido, incluido el catálogo de experiencias (ver 4.4), vive como objetos TypeScript planos en `src/content/*.ts` y se edita en el código, en sesiones de Claude Code. No reintroducir un CMS sin que el usuario lo pida.

- **Un archivo por página/sección**, con el shape del contenido calcado del antiguo documento Sanity (mismos nombres de campo, sin `_type`/`_key`) para minimizar la reescritura de componentes:
  - `src/content/siteSettings.ts` — `siteSettings` (antes el singleton `siteSettings`): title, description, mission (frase del pie), address, email, whatsapp, socialLinks, googleCalendarId.
  - `src/content/home.ts` — `homeEs` + sus testimonios destacados.
  - `src/content/experiencias.ts` — el catálogo de experiencias (`experiencias`) y sus funciones de lectura, ver 4.4.
  - `src/content/agenda.ts` — `pageFerrolEs`, `fixedProgramsEs`, `ferrolFaqsEs` (sigue usando el nombre histórico `Ferrol`, ver más abajo).
  - `src/content/nosotros.ts` — `pageNosotrosEs` (incluye el bloque legal, ver 4.5) + testimonios.
  - `src/content/equipo.ts` — `pageEquipoEs` (cabecera de `/nosotros/equipo/`) y `equipoGroupsEs` (los grupos). Las personas no se duplican: se leen de `teamMembers` y `pastVolunteers` de `nosotros.ts`. `TeamMember` admite `bio` (2–3 líneas) y `bioLong` (se despliega con «Leer más», `<details>` nativo); hoy nadie tiene bio porque no existen textos reales — no inventarlas, pedírselas a cada persona.
  - `src/content/mentores.ts` — `pageMentoresContent` + testimonios.
  - `src/content/preguntas.ts`, `src/content/empresas.ts`, `src/content/bienvenido.ts`, `src/content/mesaredonda.ts`, `src/content/paisanos.ts`, `src/content/speakfactor.ts`, `src/content/speakfactorvi.ts` — páginas informativas del grupo `(info)`, ver 4.6.
  - `src/content/types.ts` — las interfaces compartidas (`StatItem`, `SectionIntro`, `TeamMember`, `Partner`, `Testimonial`, `Faq`, etc.) que sustituyen a las de `src/sanity/lib/queries.ts`.
- Los nombres internos históricos se conservan aunque ya no exista Sanity detrás: `pageFerrolEs` sigue llamándose así (la página pública es `/agenda/`), igual que el `RouteKey` `'ferrol'` y la clase CSS `route-ferrol` (ver punto 5) — es la misma convención que ya explicaba este documento cuando esas páginas sí eran Sanity, y renombrar identificadores internos que nadie ve no aporta nada.
- **Cómo editar contenido**: abre el archivo de `src/content/` correspondiente y edita el objeto directamente — es TypeScript con autocompletado y type-checking (`satisfies StatItem[]` etc.), así que un campo mal escrito o un tipo equivocado lo marca el editor al momento, sin esperar a un build. No hay Studio, no hay botón de "Publicar": el cambio se despliega en el siguiente commit/deploy, como cualquier otro cambio de código.
- Las páginas importan el objeto de contenido directamente y son componentes síncronos, salvo la portada y `/agenda/`, que esperan a Google Calendar (ver 4.1).

### 4.3 Texto con negrita/varios párrafos: componente `Prose`

Como el contenido ya no vive en Sanity, los campos de texto largo (entradillas de hero, textos de cierre, respuestas de FAQ, citas de testimonios, párrafos de historia) ya no son portable text — son `string` (un párrafo) o `string[]` (varios párrafos), con una sintaxis mínima tipo markdown para negrita/cursiva: `**negrita**`, `*cursiva*`.

- **Componente**: `Prose` (`src/components/Prose/`). Recibe `value?: string | string[]`, `className` (se aplica a cada `<p>` generado), y opcionalmente `as` (etiqueta, por defecto `p`) y `paragraphSpacing` (por defecto `true`, añade `margin-top: 1em` a partir del segundo párrafo — ponlo a `false` si el contenedor ya espacia con `gap`, como en `Historia.tsx`). Es el único componente de texto largo de la web (el antiguo `RichText` de portable text se eliminó con Sanity); también pinta la `descripcion` de las fichas de experiencia.
- Las citas de testimonios (`quote`) no interpolan las comillas tipográficas a mano en el JSX — las añade el CSS de cada sitio vía `::before`/`::after` (`content: '\201C'`/`'\201D'`) sobre la clase de la cita, igual que antes.
- **Metadatos (SEO)**: `buildPageMetadata()` (`src/lib/metadata.ts`) acepta `description` como `string | string[]`; si es array, lo une con espacios antes de meterlo en `<meta description>`/OpenGraph.

### 4.4 Catálogo de experiencias

La web se organiza por **catálogo de experiencias**, no por programa de financiación: la financiación es una etiqueta de coste más (`costeEtiqueta`, ej. «Financiada»), no la categoría madre.

- **Dónde vive**: `src/content/experiencias.ts`. La lista `experiencias` es el catálogo entero y su orden es el orden en pantalla. Para añadir, cambiar o retirar una experiencia se edita ese archivo (normalmente pidiéndolo en el chat) y sale publicado en el siguiente despliegue. **Solo datos reales**: si falta un precio, una fecha o una foto, el campo se deja vacío.
- **Campos de `ExperienciaData`**: `titulo`, `slug`, `categoria` (`camino`/`aventura`/`vivirFuera`/`intercambio`/`local`/`naturaleza`), `lugar`, `resumen` (máx. 140 caracteres, lo que se lee en la tarjeta), `descripcion` (`string[]`, párrafos de la ficha, se pinta con `Prose`), `ambito` (`galicia`/`europa`), `duracion` (`finde`/`semana`/`meses`, opcional), `costeTipo` (`gratis`/`financiado`/`pago`: gratis y financiado van en verde, pago en color de texto normal), `costeEtiqueta`, `imagen` + `imagenAlt` (ruta en `/public`, ej. `/img/experiencias/…webp`), `colorBanda` (hex de la banda de la tarjeta), `destacada` (sale en la portada), `activa` (`false` la retira sin borrarla), `convocatorias` y `ediciones`.
- **Tres tipos de tarjeta según a dónde lleva**: con `enlaceExterno` abre la web propia de la experiencia en pestaña nueva (Into the Wild, Orgasmo Sonoro, Caminocrew); con `enlaceInterno` lleva a una página de esta web que hace de ficha (Speak Factor → `/speakfactor/`); sin ninguno de los dos se genera su ficha en `/experiencias/[slug]/`.
- **`convocatorias`** (`titulo`, `pais`, `fechaInicio`/`fechaFin`/`fechaLimite` en `AAAA-MM-DD`, `plazas`, `enlaceInscripcion`): la ficha lista las que tienen el plazo abierto o no tienen plazo (`getConvocatoriasAbiertas`).
- **`ediciones`** (`titulo`, `anio`, `lugar`, `participantes`, `paises`, `resumen`, `galeria` de rutas en `/public`, `destacada`): se listan en la ficha bajo «Ediciones anteriores», de más reciente a más antigua. Si alguna está `destacada`, la tarjeta enseña el refuerzo «N ediciones desde AAAA».
- **Bloque «avísame»**: en toda ficha propia hay un botón de WhatsApp con el mensaje ya escrito («quiero que me aviséis de la próxima convocatoria de …»), principal si no hay convocatoria abierta y secundario si la hay. Sustituye al formulario que guardaba contactos en Sanity; no hay base de datos detrás.
- **Lectura**: `getExperiencias()` (activas), `getExperienciasDestacadas()` (portada), `getExperienciaBySlug()` y `getExperienciaSlugs()` (solo las que tienen ficha propia). Son funciones síncronas.
- **Sin agrupar**: todas las experiencias van juntas en una sola rejilla, sin separar las de Ferrol de las demás (decisión de noviembre de 2026; antes se agrupaban en «En Ferrol y comarca», «Caminos y naturaleza» y «Por Europa»). `ExperienciasCatalog` no enseña chips de filtro mientras haya 12 o menos (`FILTERS_THRESHOLD`); por encima aparecen. La portada nunca los lleva (`hideFilters`). Como usa `useSearchParams`, cada uso va envuelto en `<Suspense>`.
- **Componentes**: `BandCard` (tarjeta con banda de color), `ExperienciaCard` (la monta a partir de una experiencia), `ExperienciasCatalog` (buscador y filtros en cliente, con `persistInUrl` en `/experiencias/`), `CatalogEmptyState` (lo que se ve si no hay ninguna activa).
- **`Card`** (`src/components/Card/`) usa `next/link` en hrefs internos y `<a target="_blank">` con `rel="noopener noreferrer"` en externos.
- **Redirección**: `/irse/` → `/experiencias/` (301 permanente, en `next.config.ts`).

### 4.5 Datos legales en `/nosotros/`

`pageNosotrosEs` (`src/content/nosotros.ts`) tiene los campos `legalName`, `legalCif`, `legalAddress`, `legalOid`, `legalPic`, `accreditations` (array de `Partner`, reutilizando el mismo patrón de logo+nombre que ya usaban los partners) y `memoriaAnualUrl` — es contenido real de la asociación (CIF `G70385091`, OID `E10060426`, PIC `948920640`), no lo inventes ni lo cambies sin confirmarlo. Se renderiza en `Legal.tsx` (`_sections/`), justo antes del cierre.

### 4.6 Contenido transferido del WordPress anterior

El sitio que estaba publicado en xeracion.org era un WordPress con Elementor. Su contenido vigente se pasó a esta web:

- **Fotos y datos reales** en `src/content/`: equipo actual (7 personas) y los 69 voluntarios europeos anteriores con foto (`pastVolunteers`, sección "Han estado con nosotros" de `/nosotros/`), valores, "¿Qué es Xeración?", hitos con fecha que aparecen en la propia web antigua (Speak Factor 2017, Paisanos 2020, Eurolibrary 2022, Get The Net 2023), apoyos institucionales con logo, memoria anual, foto del equipo en el hero de la portada y de Speak Factor en el de `/agenda/`. Las cifras de `/nosotros/` (75 voluntarios, 15 países) salen de contar ese listado — si se añade gente, actualízalas a mano.
- **Testimonios**: solo citas reales (portada y `/voluntariado-europeo/` del WordPress, y reseñas de Google). Si una cita se recorta, se marca con `[…]`; no se reescriben citas de personas reales.
- **Páginas nuevas** en el grupo de rutas `src/app/(info)/` (layout neutro, sin `activeRoute`): `/preguntas/` (antiguas `/condiciones-erasmus/`, detalles de `/voluntariado-europeo/` y `/cursos/`, en grupos de acordeón), `/empresas/` (antigua `/empresas/` + sectores de `/internships/`) y `/bienvenido/`, más `/mesaredonda/` (misma URL que en el WordPress; fotos en `public/img/mesaredonda/`, sin atribuir cada foto a un candidato porque la página original no lo dejaba claro). Usan dos componentes genéricos: `PageHeader` (`h1` + entradilla) y `FeatureGrid` (tarjetas con disco numerado).
- **Redirecciones permanentes** (en `next.config.ts`) de las URLs antiguas: `/voluntariado-europeo/`, `/intercambios/`, `/cursos/`, `/oportunidades/`, `/proyectos/` → `/experiencias/`; `/condiciones-erasmus/` → `/preguntas/`; `/calendario/`, `/eventos/` → `/agenda/`; `/paisanos/` → `/nosotros/`; `/english/`, `/en/*`, `/gl/*` → `/`.
- **Paisanos** (`src/content/paisanos.ts`): las 11 entrevistas de la categoría «Paisanos» del blog (2020, sacadas por la API REST de WordPress) más la de Olga (página de 2023). El texto de cada entrevista es **literal** — no se reescribe ni se ajusta al tono del sitio, son palabras de otras personas — y está troceado en bloques (`p` / `heading`); la cita destacada (`pullQuote`) sale de las páginas de 2023 y solo la tienen 6. Retratos en `public/img/paisanos/`, con `imageFocus` (posición del recorte) por foto porque varias son panorámicas. Redirigen a su ficha las URLs antiguas `/paisanosluis/`… y las de las entradas del blog (`/luis/`, y `/luis-2/` de la versión inglesa).
- **Speak Factor** (`src/app/speakfactor/`, layout propio con `route-ferrol`): la reserva del WordPress era un plugin (Amelia) y aquí es un enlace de WhatsApp con el mensaje ya escrito. Los dos vídeos de YouTube se enlazan, no se incrustan (sin iframes de terceros ni cookies de YouTube, y sin tocar la CSP); las miniaturas son fotos propias del taller porque las de YouTube usan imágenes de terceros. `/speak-factor-tc/` era la convocatoria en inglés del curso internacional Speak Factor VI y se mantiene en la misma URL, reescrita en español como proyecto ya realizado (grupo `(info)`): datos del programa oficial y de la documentación del proyecto en el Drive de Xeración — **solo cifras agregadas** (21 participantes de 14 países, valoración media 4,9/5 de 22 respuestas al cuestionario final), nunca nombres, documentos de identidad ni contactos de participantes — y 12 fotos elegidas del álbum compartido de Google Photos, en `public/img/speakfactor-vi/`. Las tres citas de participantes son anónimas y en su idioma original porque el cuestionario no se rellenó para publicarse.
- **No se transfirió**: las convocatorias antiguas de `/oportunidades/` e `/intercambios/` (2018–2023, ya cerradas — si se quieren, encajan como `ediciones` de su experiencia), la versión en inglés (`/internships/`, `/volunteering/`), la galega, la política de cookies (habla de Google Analytics y Smartlook, que esta web no usa — hay que redactar una nueva).

## 5. Convención de clases de ruta

Cada layout de sub-home aplica una clase en su elemento raíz que determina qué variables de acento CSS están activas en el scope de esa página:

- `route-ferrol` → activa el acento lima (en `/agenda/` y `/mentores/`)
- `route-irse` → activa el acento azul (solo en `/experiencias/` y `/experiencias/[slug]/` — el nombre de la clase quedó como `irse` por continuidad del sistema de diseño, ver 4.2)

Esta clase se aplica en el elemento raíz del layout (ej. el `<body>` o el contenedor principal de la página), no por componente individual. Los componentes compartidos (header, tarjetas, botones primarios) leen el color de acento heredando de esta clase mediante las variables `--color-{ruta}-*` definidas en el punto 2, en vez de recibir el color como prop. Esto es lo que permite que el mismo componente `.btn-primary` o el link de nav activo se pinte lima en `/agenda/` y azul en `/experiencias/` sin lógica condicional en el componente.

Ni la portada (`/`) ni `/nosotros/` llevan ninguna de estas dos clases — usan solo la paleta neutra.

## 6. Estructura de páginas (resumen — detalle completo en ESPECIFICACION.md)

- **Portada `/`** (copy en `homeEs`, `src/content/home.ts`): hero («Otros planes son posibles.» con la entradilla en gris dentro del `h1` y dos botones, `heroActions`: experiencias y proyectos) → esta semana en Xeración (`Agenda` compacta: lo que queda de la semana natural, de hoy al domingo en hora de Madrid vía `endOfWeekMadrid()`, máximo 5 filas; desaparece si no queda nada o si falla Google Calendar) → catálogo de experiencias (`ExperienciasCatalog` con `hideFilters`, en una sola rejilla, ver 4.4: destacadas, o todas las activas si no hay ninguna destacada; si no hay ninguna experiencia publicada, `CatalogEmptyState`) → proyectos para la comunidad (`Projects`, `homeEs.projects`: Liña → liña.com, Cousateca → cousateca.com, Stop Eucalipto → stopeucalipto.com; no inventar enlaces ni estados) → historias reales (`Testimonials`, hasta 3; hoy hay 2 citas reales, falta una que no hable de Europa, no inventarla) → quiénes somos en cifras (`Figures`: es el único punto de la portada donde se nombran Erasmus+ y el Cuerpo Europeo de Solidaridad) → logos institucionales → dos puertas para entidades (`Doors`: instituciones y empresas → `/empresas/`; grupos → correo de presupuesto; la portada en español no habla a socios internacionales, que tendrán su propia versión en inglés) → CTA de cierre/contacto (la oficina abre por las mañanas, de 10:00 a 14:00 — no escribir «cualquier tarde» en textos de contacto) → footer. Las cifras de la portada (+120 acogidos, +50 enviados, 57 personas socias) las confirmó la asociación; las de `/nosotros/` (75) salen de contar el listado con foto y son otro dato.
- **`/agenda/`** (antes `/ferrol/`; la URL se renombró pero el objeto de contenido sigue llamándose `pageFerrolEs`, ver 4.2): hero lima → programas fijos (grid 2×2) → agenda próximas 2 semanas (timeline) → cómo llegar (mapa + info) → preguntas rápidas (acordeón) → CTA de cierre.
- **`/experiencias/`** (antes `/irse/`; reemplazo de modelo de contenido, no solo de URL — ver 4.4): cabecera corta con `<h1>` (copy hardcodeado en la página) → catálogo completo filtrable con buscador de texto y filtros persistidos en la query string (`?filtro=`/`?q=`). Hero azul (`route-irse`). El catálogo sale de `src/content/experiencias.ts`.
- **`/experiencias/[slug]/`**: hero (foto + título + datos clave en fila: ámbito/duración/coste) → descripción (`Prose`) → ediciones anteriores → convocatorias abiertas y botón «avísame» por WhatsApp → CTA de cierre. Solo se genera para experiencias sin `enlaceExterno` ni `enlaceInterno`.
- **`/nosotros/`**: hero (con foto de fondo opcional) → historia → valores → equipo → voluntarios históricos + testimonios → "han estado con nosotros" (rejilla + cargar más) → iniciativas → «Con el apoyo de», separado en «Respaldo institucional» y «Herramientas donadas» (`partnersGroups`) → **datos legales** (CIF, OID, PIC, acreditaciones, memoria anual — ver 4.5) → CTA de cierre.
- **`/nosotros/equipo/`**: cabecera a dos columnas (`h1` a la izquierda; entradilla y botones «Quiero saber más de Xeración» → `/nosotros/` y «Quiero sumarme al equipo» → `/mentores/` a la derecha) → «Coordinación» y «Voluntariado europeo, ahora mismo» en tarjetas horizontales a dos columnas (foto cuadrada, y a su lado, bajo una línea fina: cargo, nombre, LinkedIn si hay, bio) → «Han estado con nosotros» en rejilla compacta de 6 columnas (foto, país, nombre), con los 69 voluntarios anteriores.
- **`/mentores/`**: página de captación de mentores locales (voluntarios de Ferrol que acompañan a los voluntarios europeos a integrarse en la ciudad). Hero lima → a quién buscamos → tres beneficios (rejilla, reutiliza el patrón de `ValueItem` de "Valores") → tira de 2 números → testimonios (rejilla de 3) → CTA de cierre, reimportado literalmente de `src/app/agenda/_sections/ClosingCta.tsx` (mismo acento, mismos botones WhatsApp/Instagram). No está enlazada desde el nav principal, pero sí desde un banner (`MentoresCallout`, texto hardcodeado) insertado en `/agenda/` entre las preguntas rápidas y el CTA de cierre. Contenido de la propia página alimentado por `pageMentoresContent` (`src/content/mentores.ts`).

Para el contenido literal exacto de cada sección en español (textos, testimonios, preguntas de FAQ, eventos de agenda, etc.) consultar siempre [ESPECIFICACION.md](ESPECIFICACION.md) como referencia histórica del tono/estructura original — pero el contenido real y actualmente publicado vive en `src/content/*.ts` (ver 4.2), que es la fuente de verdad para editar.

## 7. Estado del proyecto

Proyecto en Next.js 16 (App Router) + TypeScript + CSS Modules, desplegado en Vercel desde el repositorio `Xeracion/web`. Sin CMS: todo el contenido vive en `src/content/*.ts` y se edita en el código (ver 4.2 y 4.4). Stack ya decidido y en producción; no reconsiderarlo sin que el usuario lo pida explícitamente.
