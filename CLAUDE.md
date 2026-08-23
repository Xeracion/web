# xeracion.org — memoria del proyecto

Este archivo es la fuente de verdad permanente para cualquier sesión de trabajo sobre el rediseño de xeracion.org. Léelo entero antes de tocar código. La especificación completa (contenido literal, copy de cada sección, estructura de página) vive en [ESPECIFICACION.md](ESPECIFICACION.md), en esta misma carpeta — este CLAUDE.md resume las reglas transversales que no deben romperse nunca; ESPECIFICACION.md es la referencia para el contenido exacto de cada página.

## 1. Contexto de la organización

**Xeración** es una asociación juvenil gallega activa desde 2013, con sede en Ferrol: Casa da Xuventude, Rúa Almendra 9. Coordina:
- Intercambios juveniles Erasmus+ (Youth Exchanges)
- Voluntariados del Cuerpo Europeo de Solidaridad (CES / ESC — European Solidarity Corps)
- Cursos de formación (Training Courses, TC)
- Actividades locales en Ferrol (clubs, talleres, conciertos)

Contacto: `info@xeracion.org`. Email del usuario propietario de este proyecto: `info@xeracion.org`.

### Las tres rutas por audiencia

El sitio no tiene una home única: tiene tres sub-homes según quién es el visitante, cada una con su propio color de acento que actúa como identidad visual persistente en toda la sección:

| Ruta | URL | Audiencia | Idioma | Acento |
|---|---|---|---|---|
| Ferrol | `/ferrol/` | Jóvenes de la comarca de Ferrol que buscan algo que hacer esta semana | Español | Teal / verde (proximidad, ría, mar) |
| Irse | `/irse/` | Jóvenes españoles (18-30) que quieren irse de voluntariado o Erasmus+ a Europa | Español | Coral / naranja (salida, calidez) |
| English | `/en/` | Jóvenes europeos que quieren venir de voluntariado/prácticas a Ferrol | **Inglés — todo el contenido, incluidos header, footer y CTAs** | Púrpura (Europa, llegada) |

La portada (`/`) es neutra: hero genérico + tarjetas que enlazan a las tres rutas.

### Marco StoryBrand

El usuario es el héroe, Xeración es el guía. Esto no es decorativo: condiciona cómo se escribe cada CTA (ver sección 3).

## 2. Sistema de diseño

### Tipografía

- **Fraunces** (400, 500) — todos los titulares H1 a H4.
- **Inter** (400, 500) — cuerpo, eyebrows, UI, metadatos.

Escalas responsive (desktop / tablet / móvil). Los breakpoints del sistema son: móvil < 768px, tablet 768–1024px, desktop > 1024px.

| Nivel | Desktop | Tablet | Móvil | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | 42px | 34px | 24px | 400 | 1.04 | -0.025em |
| H2 | 34px | 30px | 26px | 400 | 1.15 | -0.02em |
| H3 | 24px | 22px | 20px | 400 | 1.2 | -0.015em |
| H4 | 19px | 18px | 17px | 500 | 1.3 | -0.01em |
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
- Izquierda: logo texto "Xeración", Fraunces 22px, weight 500, letter-spacing -0.02em.
- Derecha desktop: `Ferrol · Irse · English · [separador] · Sobre nós` — los tres primeros con un "pill" de fondo (`--color-accent-bg`) que se desplaza animado al pasar el ratón o el foco entre ellos; el cuarto en gris suave, sin pill.
- Derecha móvil (< 768px): hamburguesa → menú desplegable animado (no overlay a pantalla completa), se cierra al pulsar un enlace o Escape.
- **En cada sub-home**, el enlace de nav de la sección activa lleva el color de acento correspondiente (sutil, no llamativo) — esto es lo que conecta con la convención de clases de ruta del punto 5.
- Respeta `prefers-reduced-motion`: sin pill animado ni transiciones de layout si está activo.

#### 2.1 Componente `ResizableNavbar`

- Ubicación: `src/components/ResizableNavbar/` (`ResizableNavbar.tsx` + `ResizableNavbar.module.css`, con un `index.ts` barrel para poder importarlo como `@/components/ResizableNavbar`, igual que el resto de componentes).
- Sustituye a los antiguos `Header` y `MobileMenu` (eliminados) en los cinco layouts que montan navegación: `(main)`, `ferrol`, `irse`, `en`, `nosotros`.
- Props: `siteName: string`, `items: NavItem[]` (`{ name, link }`, de `src/lib/nav.ts`), `secondaryItem?: NavItem` (el enlace "Sobre nós", con su estilo diferenciado), `activeRoute?: 'ferrol' | 'irse' | 'en'`. Nada de contenido va hardcodeado dentro del componente — los enlaces se definen una vez en `src/lib/nav.ts` y cada layout se los pasa.
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

## 5. Convención de clases de ruta

Cada layout de sub-home aplica una clase en su elemento raíz que determina qué variables de acento CSS están activas en el scope de esa página:

- `route-ferrol` → activa el acento teal
- `route-irse` → activa el acento coral
- `route-en` → activa el acento púrpura

Esta clase se aplica en el elemento raíz del layout (ej. el `<body>` o el contenedor principal de la página), no por componente individual. Los componentes compartidos (header, tarjetas, botones primarios) leen el color de acento heredando de esta clase mediante las variables `--color-{ruta}-*` definidas en el punto 2, en vez de recibir el color como prop. Esto es lo que permite que el mismo componente `.btn-primary` o el link de nav activo se pinte teal en `/ferrol/`, coral en `/irse/` y púrpura en `/en/` sin lógica condicional en el componente.

La portada (`/`) no lleva ninguna de estas tres clases — usa solo la paleta neutra, y las tres tarjetas de ruta aplican sus gradientes de acento de forma local (inline o vía modifier class), no heredado del layout.

## 6. Estructura de páginas (resumen — detalle completo en ESPECIFICACION.md)

- **Portada `/`**: hero asimétrico → 3 tarjetas de ruta → tira de números → testimonios asimétricos → agenda destacada → CTA de cierre → footer (4 columnas).
- **`/ferrol/`**: hero teal → programas fijos (grid 2×2) → agenda próximas 2 semanas (timeline) → cómo llegar (mapa + info) → preguntas rápidas (acordeón) → CTA de cierre.
- **`/irse/`**: hero coral → cómo funciona en 3 pasos → programas disponibles (CES/ESC, Erasmus+ YE, TC) → testimonios → FAQ extenso (acordeón) → CTA de cierre con formulario.
- **`/en/`**: hero púrpura → life in Ferrol (4 fotos) → what you can do here (ESC + traineeship) → practical info (3 columnas) → voices from past volunteers → how to apply (3 pasos) → FAQ → CTA de cierre. Footer adaptado al inglés.

Para el contenido literal exacto de cada sección (textos, testimonios, preguntas de FAQ, eventos de agenda, etc.) consultar siempre [ESPECIFICACION.md](ESPECIFICACION.md) — no reescribir de memoria.

## 7. Estado del proyecto

Proyecto en `/Users/fran/web/`. Aún no existe ningún código: este CLAUDE.md y ESPECIFICACION.md son los dos únicos archivos. La elección de stack (framework, generador estático, etc.) todavía no se ha decidido — no asumir Next.js, Astro u otro sin confirmarlo con el usuario primero, ya que la especificación solo exige CSS puro con CSS Modules y HTML semántico, no un framework concreto.
