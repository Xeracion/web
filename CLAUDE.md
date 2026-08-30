# xeracion.org — memoria del proyecto

Este archivo es la fuente de verdad permanente para cualquier sesión de trabajo sobre el rediseño de xeracion.org. Léelo entero antes de tocar código. La especificación completa (contenido literal, copy de cada sección, estructura de página) vive en [ESPECIFICACION.md](ESPECIFICACION.md), en esta misma carpeta — este CLAUDE.md resume las reglas transversales que no deben romperse nunca; ESPECIFICACION.md es la referencia para el contenido exacto de cada página.

## 1. Contexto de la organización

**Xeración** es una asociación juvenil gallega activa desde 2013, con sede en Ferrol: Casa da Xuventude, Rúa Almendra 9. Coordina:
- Intercambios juveniles Erasmus+ (Youth Exchanges)
- Voluntariados del Cuerpo Europeo de Solidaridad (CES / ESC — European Solidarity Corps)
- Cursos de formación (Training Courses, TC)
- Actividades locales en Ferrol (clubs, talleres, conciertos)

Contacto: `info@xeracion.org`. Email del usuario propietario de este proyecto: `info@xeracion.org`.

### Las tres rutas por audiencia — y el sitio bilingüe (es/en)

El sitio no tiene una home única: tiene tres sub-homes según quién es el visitante, cada una con su propio color de acento que actúa como identidad visual persistente en toda la sección. Además, la portada, `/ferrol/` y `/nosotros/` existen en dos idiomas — español (rutas sin prefijo) e inglés (bajo `/en/`, salvo dos excepciones señaladas abajo). `/irse/` e "inglés/volunteering" NO son traducciones la una de la otra: son la 4ª ruta propia de cada idioma, con audiencias distintas.

| Ruta ES | Ruta EN | Audiencia | Acento |
|---|---|---|---|
| `/` | `/en/` | Portada neutra: hero genérico + tarjetas que enlazan a las otras rutas del mismo idioma | Neutro (sin clase `route-*`) |
| `/ferrol/` | `/en/ferrol/` | Jóvenes de la comarca de Ferrol que buscan algo que hacer esta semana | Teal / verde (proximidad, ría, mar) |
| `/irse/` | — | Jóvenes españoles (18-30) que quieren irse de voluntariado o Erasmus+ a Europa. Solo existe en español; es el 4º ítem del nav en `/`, `/ferrol/` y `/nosotros/`. | Coral / naranja (salida, calidez) |
| — | `/volunteering/` | Jóvenes europeos que quieren venir de voluntariado/prácticas a Ferrol. Solo existe en inglés (antes vivía en `/en/`); es el 4º ítem del nav en `/en/`, `/en/ferrol/` y `/about/`. **Todo el contenido en inglés**, incluidos header, footer y CTAs. | Púrpura (Europa, llegada) |
| `/nosotros/` | `/about/` | Quiénes somos, equipo, historia, partners | Neutro (sin clase `route-*`) |

Notas de la arquitectura bilingüe:
- `/ferrol/` ↔ `/en/ferrol/` y `/nosotros/` ↔ `/about/` son pares de traducción real: mismos componentes de sección (`_sections/`), mismos nombres de campo en Sanity, alimentados por un documento Sanity distinto por idioma (ver más abajo). Los componentes de sección viven físicamente bajo `src/app/ferrol/_sections/` y `src/app/nosotros/_sections/` y se **reimportan** (no se duplican) desde `src/app/en/ferrol/page.tsx` y `src/app/about/page.tsx`.
- `/irse/` y `/volunteering/` NO tienen contraparte en el otro idioma — son conceptualmente páginas distintas (irse de España vs. venir a Ferrol), no una traducción.
- Selector de idioma con banderas (🇪🇸 / 🇬🇧) integrado en `ResizableNavbar` (props `locale` y `altLangHref`). Cada layout pasa el `altLangHref` explícito de la página equivalente en el otro idioma (o al home de ese idioma si no hay equivalente directo, como en `/irse/` → `/en/` o `/volunteering/` → `/`).
- **Detección de idioma del navegador**: `src/middleware.ts` redirige `/` → `/en/` si el header `Accept-Language` del visitante no es español ni gallego (`es`/`gl`), y recuerda la elección (explícita o detectada) en la cookie `xeracion_lang` durante un año para no volver a redirigir en visitas siguientes a `/`.
- Todo texto de interfaz que no sale de Sanity (aria-labels del nav, "Cargar más", "Hablar por WhatsApp", nombres de mes/día de la agenda, etc.) está threadeado con un prop `locale?: 'es' | 'en'` (por defecto `'es'`) en el componente correspondiente — nunca hardcodeado en un solo idioma cuando el componente se reutiliza entre rutas ES y EN.

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

Notas de tamaños específicos que aparecen en secciones concretas y difieren de la escala base (respetar los de ESPECIFICACION.md en cada caso): la cita del testimonio grande usa 28px/22px/19px; la del testimonio pequeño 19px/17px; el H2 de CTA de cierre usa 36px/28px; el número de la tira de estadísticas usa 44px; los números de pasos en `/irse/` y `/en/` usan 56px.

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

  /* Acento English (púrpura) */
  --color-en-bg: #EEEDFE;
  --color-en-border: #AFA9EC;
  --color-en-text: #534AB7;
  --color-en-strong: #26215C;
  --color-en-grad-1: #CECBF6;
  --color-en-grad-2: #AFA9EC;

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
- English: `linear-gradient(135deg, #CECBF6 0%, #AFA9EC 100%)`

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
- Izquierda: logotipo "Xeración" (imagen del wordmark de marca), enlaza al home del idioma activo (`/` en español, `/en/` en inglés).
- Derecha desktop: cuatro enlaces (Inicio/Home, Ferrol, Irse/Volunteering, Nosotros/About Us — según el idioma, ver `NAV_ITEMS_ES`/`NAV_ITEMS_EN` en `src/lib/nav.ts`) + selector de idioma con banderas (🇪🇸/🇬🇧). Los cuatro enlaces reciben el mismo "pill" de fondo (`--color-accent-bg`) que se desplaza animado al pasar el ratón o el foco entre ellos, sin distinción visual entre ellos; el selector de idioma va separado a la derecha por un divisor sutil.
- Derecha móvil (< 768px): hamburguesa → menú desplegable animado (no overlay a pantalla completa), con el selector de idioma repetido al final de la lista; se cierra al pulsar un enlace o Escape.
- **En cada sub-home**, el enlace de nav de la sección activa lleva el color de acento correspondiente (sutil, no llamativo) — esto es lo que conecta con la convención de clases de ruta del punto 5.
- Respeta `prefers-reduced-motion`: sin pill animado ni transiciones de layout si está activo.

#### 2.1 Componente `ResizableNavbar`

- Ubicación: `src/components/ResizableNavbar/` (`ResizableNavbar.tsx` + `ResizableNavbar.module.css`, con un `index.ts` barrel para poder importarlo como `@/components/ResizableNavbar`, igual que el resto de componentes).
- Sustituye a los antiguos `Header` y `MobileMenu` (eliminados) en los nueve layouts que montan navegación: `(main)`, `ferrol`, `irse`, `volunteering`, `nosotros`, `en`, `en/ferrol`, `about`.
- Props: `siteName: string`, `items: NavItem[]` (`{ name, link, key }`, de `src/lib/nav.ts` — hay un array por idioma, `NAV_ITEMS_ES`/`NAV_ITEMS_EN`; incluye "Inicio/Home" y "Nosotros/About Us" como enlaces más, con el mismo estilo y pill que el resto), `activeRoute?: RouteKey` (`'home' | 'ferrol' | 'irse' | 'nosotros' | 'volunteering' | 'about'` — se compara contra `item.key`, no se reconstruye a partir de la URL, precisamente porque `/en/ferrol/` no cuelga de `/ferrol/`), `locale?: 'es' | 'en'` (por defecto `'es'`) y `altLangHref?: string` (el destino del selector de idioma; cada layout pasa la URL de la página equivalente en el otro idioma). Nada de contenido va hardcodeado dentro del componente — los enlaces se definen una vez en `src/lib/nav.ts` y cada layout se los pasa.
- El color de acento (pill de hover, texto activo) se lee siempre de `var(--color-accent-*)`, heredada de la clase `.route-ferrol/.route-irse/.route-en` que ya aplica cada layout — el componente no tiene lógica condicional de color.
- **Decisión técnica**: usa la librería `motion` (antes `framer-motion`) para las animaciones de scroll (`useScroll` + `useMotionValueEvent`), el spring de resize y el pill con `layoutId`. Está inspirado en el "Resizable Navbar" de Aceternity UI, pero reimplementado desde cero en CSS Modules — **no se instaló Tailwind** para portar sus clases; todos los valores (colores, espaciados, radios, tipografía) salen de las variables del sistema de diseño ya existente, tal y como exige el punto 4.

## 3. Reglas de tono del copy

Estas reglas son inviolables y se aplican a **todo** texto nuevo que se escriba, no solo al que ya está literal en ESPECIFICACION.md:

1. **CTAs en primera persona del héroe.** El usuario habla, no se le ordena. `"Quiero irme"`, `"Apúntame"`, `"Apply"` — nunca imperativos hacia el usuario como `"Regístrate"` o `"Apúntate"`.
2. **H1 como frases completas terminadas en punto.** Nunca titulares telegráficos. Ej: `Doce años abriendo puertas a Europa desde Galicia.` — no `Doce años. Europa. Galicia.`
3. **Eyebrows de 2 a 4 palabras**, descriptivos y breves. Ej: `Historias reales`, `Cómo funciona`, `Where you'll live`.
4. **Comillas tipográficas** en testimonios y citas — `" "`, nunca comillas rectas `" "`.
5. **Punto medio (`·`) como separador de metadatos**, nunca guiones ni pipes. Ej: `MARTES · 20:00 · ALMENDRA 9`, `Nicolás · Ferrol → Cracovia · CES 2024`.
6. **Nada de jerga institucional.** Prohibido: "movilidad participativa", "empoderamiento juvenil" y equivalentes. Tono directo, humano, ferrolano cuando cabe.
7. En `/en/`, todo el copy —incluidos header, footer, CTAs y microcopy— va en inglés. No mezclar idiomas dentro de esa ruta.

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

Los eventos de la agenda destacada (portada) y de la agenda de próximas dos semanas (`/ferrol/`) se leen en tiempo real de Google Calendar a través de `src/lib/googleCalendar.ts`, **no** del tipo de documento "Evento" en Sanity (que se mantiene en el esquema sin usar, por si se necesita en el futuro). Configuración:

- `GOOGLE_CALENDAR_API_KEY` (variable de entorno) — clave de la API de Google Calendar, restringida a "Calendar API" en Google Cloud Console.
- `googleCalendarId` (campo de texto en Sanity Studio → Ajustes generales) — el ID del calendario (Ajustes del calendario de Google → Integrar calendario → ID de calendario). El calendario debe estar marcado como público.

Mientras falte cualquiera de los dos, la agenda no muestra eventos (no rompe la página). `getGoogleCalendarEvents` pide `singleEvents: true` a la API para que Google expanda los eventos recurrentes (ej. Offline Club cada martes) en instancias sueltas — no hay parseo de RRULE en el código.

### 4.2 Contenido bilingüe en Sanity

Cada página que existe en los dos idiomas tiene un **documento singleton propio por idioma** en Sanity (mismo patrón que ya existía entre `pageIrse` y `pageEn`, ahora extendido a portada y Ferrol):

| Español | Inglés | Ruta que alimenta |
|---|---|---|
| `home` | `homeEn` | `/` · `/en/` |
| `pageFerrol` | `pageFerrolEn` | `/ferrol/` · `/en/ferrol/` |
| `pageNosotros` | `pageNosotrosEn` | `/nosotros/` · `/about/` |
| — | `pageEn` | `/volunteering/` (sin equivalente en español) |
| — | `pageIrse` | `/irse/` (sin equivalente en inglés) |

`homeEn` usa los mismos nombres de campo que `home` salvo en las tarjetas de ruta, donde `routeCardIrse`/`routeCardEn` (ES) se sustituyen por `routeCardVolunteering`/`routeCardAbout` (EN), ya que la portada inglesa enlaza a `/volunteering/` y `/about/` en vez de a `/irse/` y `/en/`. `pageFerrolEn` y `pageNosotrosEn` son mirrors exactos campo a campo de `pageFerrol`/`pageNosotros` — por eso las páginas `/en/ferrol/` y `/about/` reimportan literalmente los componentes de `_sections/` de `/ferrol/` y `/nosotros/` en vez de duplicarlos.

Las colecciones referenciadas por `route` (`fixedProgram`, `faq` — ambas con `route: "ferrol"` para esta página) llevan además un campo `language` (`es`/`en`, por defecto `es` si no está definido, para no romper documentos antiguos sin el campo) que las separa entre la versión española e inglesa de `/ferrol/`. `testimonial` ya tenía este campo de antes. Al añadir contenido nuevo en Studio para `/en/ferrol/`, recuerda marcar `language: English` — si no, no aparecerá filtrado en esa página ni en la española.

El seed inicial de todo este contenido en inglés (traducción fiel del contenido español sembrado por `scripts/seed.ts` y `scripts/seed-nosotros.ts`) vive en `scripts/seed-en-content.ts` — mismo patrón de ejecución que el resto de scripts de `scripts/` (`npx tsx scripts/seed-en-content.ts` con `SANITY_API_WRITE_TOKEN` en `.env.local`), usa `createIfNotExists` así que no pisa nada si ya existiera. Ese seed **no** rellena `pastVolunteers`/`pastVolunteersIntro` de `pageNosotrosEn` ni los logos de partners — son contenido que solo existe hoy dentro del Studio en español y hay que traducir/duplicar ahí a mano.

## 5. Convención de clases de ruta

Cada layout de sub-home aplica una clase en su elemento raíz que determina qué variables de acento CSS están activas en el scope de esa página:

- `route-ferrol` → activa el acento teal (en `/ferrol/`, `/en/ferrol/` y `/mentores/`)
- `route-irse` → activa el acento coral (solo en `/irse/`, no tiene equivalente en inglés)
- `route-en` → activa el acento púrpura (solo en `/volunteering/`, no tiene equivalente en español)

Esta clase se aplica en el elemento raíz del layout (ej. el `<body>` o el contenedor principal de la página), no por componente individual. Los componentes compartidos (header, tarjetas, botones primarios) leen el color de acento heredando de esta clase mediante las variables `--color-{ruta}-*` definidas en el punto 2, en vez de recibir el color como prop. Esto es lo que permite que el mismo componente `.btn-primary` o el link de nav activo se pinte teal en `/ferrol/` y `/en/ferrol/`, coral en `/irse/` y púrpura en `/volunteering/` sin lógica condicional en el componente.

Ni la portada (`/`, `/en/`) ni `/nosotros/`/`/about/` llevan ninguna de estas tres clases — usan solo la paleta neutra. En la portada, las tarjetas de ruta aplican sus gradientes de acento de forma local (inline o vía modifier class), no heredado del layout — así la tarjeta "About us" de `/en/` puede quedar neutra mientras las de Ferrol/Volunteering llevan su acento.

## 6. Estructura de páginas (resumen — detalle completo en ESPECIFICACION.md)

- **Portada `/` y `/en/`**: hero asimétrico → 3 tarjetas de ruta → tira de números → testimonios asimétricos → agenda destacada → CTA de cierre → footer. En `/` las tarjetas llevan a Ferrol/Irse/Volunteering; en `/en/`, a Ferrol/Volunteering/About — mismos componentes de sección, datos de `homeEn`.
- **`/ferrol/` y `/en/ferrol/`**: hero teal → programas fijos (grid 2×2) → agenda próximas 2 semanas (timeline) → cómo llegar (mapa + info) → preguntas rápidas (acordeón) → CTA de cierre. `/en/ferrol/` reimporta literalmente los componentes de `src/app/ferrol/_sections/`, alimentados por `pageFerrolEn`.
- **`/irse/`**: hero coral → cómo funciona en 3 pasos → programas disponibles (CES/ESC, Erasmus+ YE, TC) → testimonios → FAQ extenso (acordeón) → CTA de cierre con formulario. Solo en español.
- **`/volunteering/`**: hero púrpura → life in Ferrol (4 fotos) → what you can do here (ESC + traineeship) → practical info (3 columnas) → voices from past volunteers → how to apply (3 pasos) → FAQ → CTA de cierre. Footer adaptado al inglés. Solo en inglés (antes vivía en `/en/`, alimentada por el documento Sanity `pageEn`, que conserva ese nombre de tipo aunque la URL cambió).
- **`/nosotros/` y `/about/`**: hero (con foto de fondo opcional) → historia → valores → equipo → voluntarios históricos + testimonios → "han estado con nosotros" (rejilla + cargar más) → iniciativas → partners → CTA de cierre. `/about/` reimporta los componentes de `src/app/nosotros/_sections/`, alimentados por `pageNosotrosEn`.
- **`/mentores/`**: página de captación de mentores locales (voluntarios de Ferrol que acompañan a los voluntarios europeos a integrarse en la ciudad). Hero teal → a quién buscamos → tres beneficios (rejilla, reutiliza el patrón de `valueItem` de "Valores") → tira de 2 números → testimonios (rejilla de 3, reutiliza el tipo `testimonial` con `route: "mentores"`) → CTA de cierre, reimportado literalmente de `src/app/ferrol/_sections/ClosingCta.tsx` (mismo acento, mismos botones WhatsApp/Instagram). Solo en español; no está enlazada desde el nav principal. Contenido alimentado por `pageMentores`, adaptado del texto original de la página equivalente en el sitio anterior.

Para el contenido literal exacto de cada sección en español (textos, testimonios, preguntas de FAQ, eventos de agenda, etc.) consultar siempre [ESPECIFICACION.md](ESPECIFICACION.md) — no reescribir de memoria. ESPECIFICACION.md es anterior a la página `/nosotros/` y a varias secciones añadidas después (agenda vía Google Calendar, "han estado con nosotros", etc.); para esas partes la referencia de contenido real son los scripts `scripts/seed*.ts`, no el documento.

## 7. Estado del proyecto

Proyecto en `/Users/fran/web/`. Aún no existe ningún código: este CLAUDE.md y ESPECIFICACION.md son los dos únicos archivos. La elección de stack (framework, generador estático, etc.) todavía no se ha decidido — no asumir Next.js, Astro u otro sin confirmarlo con el usuario primero, ya que la especificación solo exige CSS puro con CSS Modules y HTML semántico, no un framework concreto.
