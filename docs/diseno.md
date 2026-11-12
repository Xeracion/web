# Sistema de diseño

> Detalle movido desde CLAUDE.md (noviembre de 2026). CLAUDE.md tiene las reglas esenciales; aquí está el porqué y el cómo. Las referencias a «punto N» o «4.x» son a las secciones originales, ahora repartidas entre `docs/diseno.md`, `docs/contenido.md` y `docs/catalogo.md`.

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
- **Separadores con líneas finas**: los grupos del pie son acordeones separados por líneas.
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

Calcado del pie de anthropic.com, a todo el ancho sobre fondo oscuro y en la retícula de 12 columnas: columnas 1 a 3 con el logotipo (`xeracion-blanco.svg`) arriba y los créditos y las redes abajo (iconos macizos de Instagram, TikTok, Facebook y LinkedIn, sacados de `siteSettings.socialLinks`); columnas 4 a 9 con los grupos de enlaces (Agenda, Experiencias, Proyectos con Liña, Cousateca, Stop Eucalipto, Retake y Paisanos, Nosotros) como acordeones `<details>` separados por líneas finas; columnas 11 y 12 con «Quiénes somos» (`siteSettings.mission`, frase corta sin nombres de programa, regla 7) y «Escríbenos» (correo y WhatsApp). Por debajo de 1024px todo se apila. Va pegado a la banda verde de cierre cuando la página termina con ella.

### 2.1 Componente `ResizableNavbar`

- Ubicación: `src/components/ResizableNavbar/` (`ResizableNavbar.tsx` + `ResizableNavbar.module.css`, con un `index.ts` barrel para poder importarlo como `@/components/ResizableNavbar`, igual que el resto de componentes).
- Sustituye a los antiguos `Header` y `MobileMenu` (eliminados) en los cinco layouts que montan navegación: `(main)`, `agenda`, `experiencias`, `nosotros`, `mentores`.
- Props: `siteName: string`, `items: NavItem[]` (`{ name, link, key }`, de `src/lib/nav.ts` — `NAV_ITEMS_ES`), `activeRoute?: RouteKey` (`'home' | 'ferrol' | 'experiencias' | 'nosotros'` — el valor sigue llamándose `ferrol` internamente para la Agenda aunque la página pública sea `/agenda/`, ver 4.2 — se compara contra `item.key`, no se reconstruye a partir de la URL). Nada de contenido va hardcodeado dentro del componente — los enlaces se definen una vez en `src/lib/nav.ts` y cada layout se los pasa. **Ya no tiene selector de idioma** (props `locale`/`altLangHref` eliminadas junto con la versión en inglés, ver punto 1).
- El color de acento (pill de hover, texto activo) se lee siempre de `var(--color-accent-*)`, heredada de la clase `.route-ferrol/.route-irse` que ya aplica cada layout — el componente no tiene lógica condicional de color.
- El nombre `ResizableNavbar` es histórico: era la barra que se estrechaba y flotaba (inspirada en Aceternity UI). Hoy es la barra fija estilo anthropic.com; se mantuvo el nombre y las props para no tocar los layouts. Usa `motion` solo para detectar el scroll (`useScroll`) y animar el desplegable móvil — todo en CSS Modules — **no se instaló Tailwind** para portar sus clases; todos los valores (colores, espaciados, radios, tipografía) salen de las variables del sistema de diseño ya existente, tal y como exige el punto 4.

## Convención de clases de ruta

Cada layout de sub-home aplica una clase en su elemento raíz que determina qué variables de acento CSS están activas en el scope de esa página:

- `route-ferrol` → activa el acento lima (en `/agenda/` y `/mentores/`)
- `route-irse` → activa el acento azul (solo en `/experiencias/` y `/experiencias/[slug]/` — el nombre de la clase quedó como `irse` por continuidad del sistema de diseño, ver 4.2)

Esta clase se aplica en el elemento raíz del layout (ej. el `<body>` o el contenedor principal de la página), no por componente individual. Los componentes compartidos (header, tarjetas, botones primarios) leen el color de acento heredando de esta clase mediante las variables `--color-{ruta}-*` definidas en el punto 2, en vez de recibir el color como prop. Esto es lo que permite que el mismo componente `.btn-primary` o el link de nav activo se pinte lima en `/agenda/` y azul en `/experiencias/` sin lógica condicional en el componente.

Ni la portada (`/`) ni `/nosotros/` llevan ninguna de estas dos clases — usan solo la paleta neutra.
