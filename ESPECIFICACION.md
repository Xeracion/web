# Especificación de xeracion.org

Documento de referencia del rediseño. Contiene el sistema de diseño, la estructura de páginas, el copy literal y las reglas de tono. No contiene instrucciones de construcción: esas van en la secuencia de prompts.

## Contexto

**Xeración** es una asociación juvenil gallega activa desde 2013 con sede en Ferrol (Casa da Xuventude, Rúa Almendra 9). Coordina intercambios juveniles Erasmus+, voluntariados del Cuerpo Europeo de Solidaridad (CES/ESC), cursos de formación y actividades locales.

## Filosofía de diseño

- **Tono editorial limpio**: mucho blanco, tipografía Fraunces para titulares, Inter para cuerpo, fotos grandes con bordes redondeados, jerarquía tipográfica marcada.
- **Sistema de tres rutas por audiencia**: cada sub-home tiene un color de acento propio que persiste como identidad visual:
  - `/ferrol/` → teal / verde (proximidad, ría, mar)
  - `/irse/` → coral / naranja (salida, calidez)
  - `/en/` → púrpura (Europa, llegada)
- **Marco StoryBrand aplicado al copy**: el usuario es el héroe, Xeración es el guía. Los CTAs son directos, sin jerga institucional.
- Bordes redondeados generosos (16 px en fotos hero, 12 px en tarjetas, 8 px en botones), asimetrías intencionadas, espacios en blanco generosos.

## Sistema de diseño

### Tipografía

```
Fraunces (400, 500) — titulares H1-H4
Inter (400, 500) — cuerpo, eyebrows, UI
```

Escalas responsive:

| Nivel | Desktop | Tablet | Móvil | Weight | Line height | Letter-spacing |
|---|---|---|---|---|---|---|
| H1 | 42 px | 34 px | 24 px | 400 | 1.04 | -0.025em |
| H2 | 34 px | 30 px | 26 px | 400 | 1.15 | -0.02em |
| H3 | 24 px | 22 px | 20 px | 400 | 1.2 | -0.015em |
| H4 | 19 px | 18 px | 17 px | 500 | 1.3 | -0.01em |
| Body | 17 px | 16 px | 16 px | 400 | 1.55 | 0 |
| Eyebrow | 11 px | 11 px | 11 px | 500 | 1.4 | 0.16em uppercase |

### Paleta de color

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

### Componentes reutilizables

- `.eyebrow` — texto sección en versalitas con espaciado ancho
- `.eyebrow-pill` — versión con pastilla de fondo semi-transparente para superponer sobre fotos
- `.container` — max-width 1200 px, padding lateral responsive
- `.btn-primary` — fondo oscuro (#2C2C2A) texto crema, radius 8 px
- `.btn-secondary` — borde 0.5 px, fondo transparente
- `.btn-link` — texto plano con flecha, para "Leer más" / CTAs terciarios
- `.card` — fondo blanco, radius 12 px, borde sutil, hover con lift ligero
- `.photo-placeholder` — marcador de foto real con gradiente, incluye etiqueta con corchetes que indique qué foto va ahí

## Header y navegación

Header **sticky con fondo translúcido** (`background: rgba(250,250,247,0.92)` + `backdrop-filter: blur(12px)`) que se activa al hacer scroll.

- **Izquierda**: logo texto "Xeración" en Fraunces 22 px, weight 500, letter-spacing -0.02em.
- **Derecha desktop**: navegación con `Ferrol · Irse · English · [separador] · Sobre nós` (los tres primeros con color acento sutil al hover; el cuarto en gris más suave).
- **Derecha móvil (< 768 px)**: icono hamburguesa que abre un overlay a pantalla completa desde la derecha, con animación slide-in de 300 ms.
- Padding vertical: 18 px desktop / 14 px móvil.
- Borde inferior: 0.5 px `#D3D1C7`.

En cada sub-home, el enlace de navegación de la sección en la que estás debe aparecer con el color de acento correspondiente (sutil, no llamativo).

## Página 1 · Portada

### Sección 1 · Hero asimétrico

- Fila de 2 columnas (47/53 desktop) con gap de 32 px.
- Padding vertical: 32 px arriba / 32 px abajo desktop.
- Vertical alignment: center.
- **Móvil (< 768 px)**: se apila con **foto arriba y texto debajo**.

**Columna izquierda (texto)**:
- Padding interno: 80 px arriba / 64 px abajo / 32 px laterales desktop; 8 px arriba / 24 px abajo / 0 laterales móvil.
- Contenido en orden:
  1. Eyebrow: `Asociación juvenil · Ferrol · desde 2013`
  2. H1: `Doce años abriendo puertas a Europa desde Galicia.`
  3. Párrafo: `Llevamos a jóvenes gallegos de voluntariado por toda Europa, traemos a jóvenes europeos a Ferrol y montamos cosas para la peña que vive aquí.` (max-width 460 px)
  4. Indicador pequeño: `↓  Elige por dónde entras` (Inter 11 px, letter-spacing 0.08em, uppercase, color muted)

**Columna derecha (foto)**:
- Gradiente diagonal `#B4B2A9 → #888780 → #5F5E5A` mientras no haya foto.
- Border radius: 16 px desktop / 14 px móvil.
- Aspect ratio: 4:5 desktop / 4:3 móvil.
- Min-height: 460 px desktop.
- Etiqueta esquina superior derecha `[ foto editorial · grupo en muelle de Ferrol ]` con estilo pastilla.

### Sección 2 · Tres tarjetas de ruta

- Grid de 3 columnas iguales, gap 16 px desktop / 12 px móvil.
- Móvil: 1 columna apilada.
- Padding vertical de la sección: 16 px arriba / 64 px abajo desktop.

Cada tarjeta:
- Fondo blanco, border 0.5 px `#D3D1C7`, radius 12 px, `overflow: hidden`.
- Hover: `transform: translateY(-2px)` y sombra suave `0 12px 32px -16px rgba(44,44,42,0.15)`.
- Toda la tarjeta clicable.
- Estructura interna:
  - **Área foto**: aspect-ratio 4:3 desktop / 16:9 móvil, gradiente del color de la ruta.
    - Ferrol: `linear-gradient(135deg, #9FE1CB 0%, #5DCAA5 100%)`
    - Irse: `linear-gradient(135deg, #F5C4B3 0%, #F0997B 100%)`
    - English: `linear-gradient(135deg, #CECBF6 0%, #AFA9EC 100%)`
    - En esquina inferior izquierda, pastilla eyebrow con `Ruta 1 · Local` / `Ruta 2 · Irse` / `Route 3 · Come over`.
    - En esquina superior derecha, mini-etiqueta indicando qué foto va.
  - **Área texto**: padding 18 px desktop / 16 px móvil.
    - H3 Fraunces (18 px desktop, 16 px móvil, weight 400, line-height 1.18).
    - Párrafo Inter 13 px, color texto terciario.
    - Botón texto-flecha con `border-top: 0.5px solid #D3D1C7`, padding-top 12 px, color del acento de la ruta, peso 500.

Contenido literal por tarjeta:

**Tarjeta Ferrol** (URL: `/ferrol/`):
- H3: `Vivo en Ferrol y quiero hacer algo esta semana.`
- Párrafo: `Casa da Xuventude na Almendra. Clubs, talleres, encuentros. Casi todo gratis.`
- CTA: `Ver agenda →`

**Tarjeta Irse** (URL: `/irse/`):
- H3: `Quiero irme de voluntariado o Erasmus+ a Europa.`
- Párrafo: `18 a 30. Te buscamos proyecto en Europa con todo pagado.`
- CTA: `Quiero irme →`

**Tarjeta English** (URL: `/en/`):
- H3: `I want to volunteer or intern in Galicia.`
- Párrafo: `2 to 12 months in Ferrol with the European Solidarity Corps.`
- CTA: `Apply →`

### Sección 3 · Tira de números

- Fondo `#F1EFE8`, padding vertical 64 px, full bleed dentro del container.
- Grid de 4 columnas desktop, 2x2 tablet y móvil.

Cada columna:
- Número grande Fraunces 44 px desktop, weight 400, line-height 1, letter-spacing -0.025em.
- Línea horizontal 24 px ancho, 1 px alto, color `#888780`, margen 14 px arriba/abajo.
- Descripción Inter 13 px, color texto terciario, line-height 1.5.

Contenido:
1. `12` — `años activos desde 2013`
2. `~80` — `jóvenes gallegos enviados de voluntariado`
3. `~60` — `europeos acogidos en Ferrol`
4. `15+` — `países de origen y destino`

### Sección 4 · Testimonios asimétricos

- Eyebrow encima: `Historias reales`, padding vertical 80 px arriba.
- Debajo, grid de 2 columnas (58/42 desktop), gap 56 px desktop.
- Móvil: se apila, primero el grande.
- Padding vertical de la sección: 36 px arriba / 80 px abajo desktop.

**Testimonio grande** (izquierda):
- Foto 4:3, radius 12 px, gradiente `#B4B2A9 → #888780`, etiqueta `[ Nicolás en Cracovia ]`.
- Cita en Fraunces 28 px desktop / 22 px tablet / 19 px móvil, weight 400, line-height 1.3, letter-spacing -0.015em.
- Texto de la cita: `"Llegué a Cracovia sin saber polaco. Volví con currículum, novia y una idea clara de a qué quiero dedicarme."`
- Atribución Inter 13 px, color terciario: `Nicolás · Ferrol → Cracovia · CES 2024`

**Testimonio pequeño** (derecha):
- Padding-top 8 px para alinearlo asimétricamente.
- Foto 1:1, max-width 260 px, radius 12 px, gradiente `#D3D1C7 → #B4B2A9`, etiqueta `[ Amélie ]`.
- Cita en Fraunces 19 px / 17 px móvil, line-height 1.4.
- Texto: `"I came to Ferrol for six months. I stayed almost a year. The sea, the food, the people."`
- Atribución Inter 12 px: `Amélie · Lyon → Ferrol · ESC 2023`

### Sección 5 · Agenda destacada

- Border top y bottom 0.5 px `#D3D1C7`.
- Padding 64 px vertical / 32 px lateral desktop.
- Grid de 2 columnas iguales, gap 56 px, vertical align center.

**Columna izquierda (actividad destacada)**:
- Eyebrow: `Esta semana en Ferrol`
- H3 Fraunces 32 px: `Offline Club`
- Metadatos Inter 13 px weight 500 letter-spacing 0.04em uppercase: `MARTES · 20:00 · ALMENDRA 9`
- Descripción Inter 15 px, color secundario: `Dos horas sin móvil con gente nueva. Trae un libro, un cuaderno o nada. Planta baja.`

**Columna derecha (lista de eventos)**:
- 3-4 filas con nombre a la izquierda / fecha a la derecha, border-bottom 0.5 px `#D3D1C7`, padding 14 px vertical.
- Nombre: Inter 14 px color texto primario.
- Fecha: Inter 12 px letter-spacing 0.04em uppercase color muted.
- Al final, enlace `Toda la agenda →` en Inter 13 px color texto terciario, margin-top 16 px.

Eventos:
1. `English club` — `MIÉ · 19:00`
2. `Taller de currículum europeo` — `JUE · 18:00`
3. `Conciertazo · djams` — `SÁB · 22:00`

### Sección 6 · CTA de cierre

- Centrada, max-width 520 px.
- Padding 88 px vertical desktop / 56 px móvil.
- Text-align center.
- H2 Fraunces 36 px desktop / 28 px móvil: `Si dudas, escríbenos.`
- Párrafo Inter 16 px max-width 480 px: `Sin formularios largos. WhatsApp, email o pásate por la Almendra 9 cualquier tarde.`
- Dos botones lado a lado (móvil: apilados 100% ancho):
  - Primario `Hablar por WhatsApp` → `https://wa.me/34XXXXXXXXX`
  - Secundario `info@xeracion.org` → `mailto:info@xeracion.org`

### Sección 7 · Footer

- Fondo `#F1EFE8`, padding 48 px arriba / 32 px abajo / 32 px lateral.
- Grid 4 columnas (2fr 1fr 1fr 1fr desktop, 1 columna móvil).

**Columna 1 · Brand**:
- H4 Fraunces 20 px `Xeración`
- Párrafo Inter 13 px color texto terciario line-height 1.7:
  ```
  Casa da Xuventude
  Rúa Almendra 9, Ferrol
  info@xeracion.org
  ```

**Columna 2 · Ferrol**:
- H5 Inter 13 px weight 500 color texto primario `Ferrol`
- Lista (line-height 1.9, Inter 13 px, color terciario):
  - `Agenda` → `/ferrol/#agenda`
  - `Offline Club` → `/ferrol/#offline-club`
  - `Cómo llegar` → `/ferrol/#visitanos`

**Columna 3 · Irse**:
- H5 `Irse`
- Lista:
  - `Voluntariado europeo` → `/irse/#voluntariado`
  - `Intercambios` → `/irse/#intercambios`
  - `Proyectos abiertos` → `/irse/#proyectos`

**Columna 4 · English**:
- H5 `English`
- Lista:
  - `Volunteering` → `/en/#volunteering`
  - `Life in Ferrol` → `/en/#life`
  - `Apply` → `/en/#apply`

Debajo de las 4 columnas, línea de créditos:
- Border-top 0.5 px `#D3D1C7`, padding 16 px arriba, margin-top 32 px.
- Texto centrado Inter 12 px color muted: `© 2026 Asociación Xeración · Casa da Xuventude, Ferrol`

## Página 2 · `/ferrol/`

Sub-home para jóvenes de la comarca de Ferrol. Acento visual: teal.

### Hero de la sub-home
- Mismo patrón asimétrico que la portada, con gradiente/foto en tonos teal.
- Eyebrow: `Ruta 1 · Casa da Xuventude · Ferrol` (color teal)
- H1: `Un sitio en la Almendra donde pasan cosas cada semana.`
- Párrafo: `Talleres, clubes, conciertos, encuentros. Casi todo gratis. Rúa Almendra 9 — abierto de lunes a sábado.`
- Botón primario teal: `Ver agenda de la semana`
- Botón secundario: `Cómo llegar`

### Sección "Programas fijos"
- Eyebrow: `Programas fijos`
- H2: `Cuatro cosas que hacemos siempre.`
- Grid 2x2 de tarjetas simples (borde suave, radius 12 px, padding 24 px):
  - **Offline Club** — `Martes 20:00. Dos horas sin móvil con gente nueva.`
  - **English club** — `Miércoles 19:00. Conversación real, sin profe.`
  - **Talleres Erasmus+** — `Cómo hacer currículum europeo, cartas de motivación, entrevistas.`
  - **Conciertazo · djams** — `Sábados noche cuando toca. Grupos locales.`

### Sección "Agenda de las próximas 2 semanas"
- Eyebrow: `Agenda`
- H2: `Qué hay esta semana y la que viene.`
- Lista tipo timeline con 6-8 items:
  - Fecha en columna izquierda estrecha (día, mes en versalitas).
  - Título, hora y ubicación en columna principal.
  - Ejemplos de contenido:
    - `MAR 12 NOV · 20:00 · Offline Club · Sala baja`
    - `MIÉ 13 NOV · 19:00 · English club · Sala 2`
    - `JUE 14 NOV · 18:00 · Taller de currículum europeo · Sala baja`
    - `SÁB 16 NOV · 22:00 · Conciertazo · djams (concierto de Pantasmata)`
    - `MAR 19 NOV · 20:00 · Offline Club`
    - `MIÉ 20 NOV · 19:00 · English club`

### Sección "Cómo llegar"
- Grid 2 columnas: mapa (etiqueta `[ mapa Ferrol Almendra 9 ]`) + info textual.
- Info:
  - H3: `Casa da Xuventude`
  - Párrafo: `Rúa Almendra 9, 15401 Ferrol. Planta baja y primera. Abierto de lunes a sábado, tardes.`
  - Cómo venir: `Estación de tren a 10 min andando. Autobús urbano líneas 1, 5, 7 (parada Cantón).`
  - Contacto: WhatsApp / email.

### Sección "Preguntas rápidas"
- 4-5 items acordeón:
  - `¿Cuánto cuesta apuntarse?` → `Nada. Casi todas las actividades son gratuitas. Algunas requieren inscripción por aforo.`
  - `¿Hay que ser de Xeración?` → `No. Ven cuando quieras. Si te gusta y quieres implicarte, luego hablamos.`
  - `¿Qué edad hay que tener?` → `Entre 14 y 30. La mayoría de la peña que viene tiene 18-25.`
  - `¿Puedo proponer una actividad?` → `Sí. Pásate un martes por Offline Club y coméntalo, o escríbenos por Instagram.`

### CTA de cierre
- H2: `Pásate cualquier tarde.`
- Párrafo: `No hace falta avisar. Estamos en la Almendra 9.`
- Botones: `WhatsApp` / `Instagram`

## Página 3 · `/irse/`

Sub-home para jóvenes españoles que quieren irse de voluntariado/Erasmus+ a Europa. Acento visual: coral.

### Hero
- Eyebrow: `Ruta 2 · Voluntariado y Erasmus+`
- H1: `Vete unos meses a Europa. Con todo pagado.`
- Párrafo: `Entre 18 y 30. Te buscamos un proyecto de voluntariado o intercambio en Europa. Alojamiento, comida, transporte y dinero de bolsillo cubiertos por la UE. Tú solo tienes que decir que sí.`
- Botón primario coral: `Apúntame a la base de datos`
- Botón secundario: `Cómo funciona`

### Sección "Cómo funciona en 3 pasos"
- Eyebrow: `Cómo funciona`
- H2: `Tres pasos y un billete de avión.`
- Grid 3 columnas, cada paso con número grande (Fraunces 56 px color coral) y descripción:
  1. **Te apuntas** — `Rellenas un formulario de 3 minutos con tus intereses, idiomas y disponibilidad.`
  2. **Te llamamos** — `Charlamos 20 minutos por videollamada. Te contamos qué proyectos encajan.`
  3. **Te vas** — `Tramitamos con la organización de destino. En 2-6 meses estás allí.`

### Sección "Programas disponibles"
- Eyebrow: `Qué puedes hacer`
- H2: `Tres formas de irte, según lo que busques.`
- 3 tarjetas grandes (grid 3 columnas desktop, apiladas móvil):

**Voluntariado Europeo (CES/ESC)**
- Duración: 2 a 12 meses.
- Ideal si: `Quieres una experiencia larga, con impacto social, sin necesidad de estudios previos.`
- Cubre: `Alojamiento, comida, transporte, seguro, dinero de bolsillo semanal, curso de idioma online.`
- CTA: `Ver proyectos abiertos →`

**Intercambios juveniles (Erasmus+ YE)**
- Duración: 5 a 21 días.
- Ideal si: `Quieres probar una experiencia corta e intensa, conocer gente de otros países, trabajar un tema concreto.`
- Cubre: `Viaje, alojamiento y comida.`
- CTA: `Ver próximos intercambios →`

**Cursos de formación (TC)**
- Duración: 5 a 10 días.
- Ideal si: `Trabajas o quieres trabajar en juventud y buscas formación europea.`
- Cubre: `Viaje, alojamiento, comida y formación.`
- CTA: `Ver próximos cursos →`

### Sección "Testimonios"
- Eyebrow: `Historias de gente que se fue`
- 3 testimonios en grid asimétrico (uno grande, dos medianos), cada uno con foto, cita en Fraunces y atribución con el formato nombre · Ciudad origen → Ciudad destino · programa · año:
1. `"Llegué a Cracovia sin saber polaco. Volví con currículum, novia y una idea clara de a qué quiero dedicarme."` — Nicolás · Ferrol → Cracovia · CES 2024
2. `"Fui a un YE de 10 días sobre cambio climático y me quedé enganchada. Ya llevo tres."` — Sara · A Coruña → Sofía · YE 2023
3. `"El CES me pagó Alemania un año. Ahora curro allí."` — Marcos · Vigo → Leipzig · CES 2022

### Sección "Preguntas frecuentes"
- 8-10 items acordeón, respuestas breves y tono conversacional:
  - `¿Tengo que hablar inglés?`
  - `¿Cuánto dinero de bolsillo recibiré?`
  - `¿Hay que ser universitario?`
  - `¿Qué países puedo elegir?`
  - `¿Y si no me gusta el proyecto una vez allí?`
  - `¿Puedo irme con mi pareja?`
  - `¿Cómo funciona el seguro médico?`
  - `¿Qué diferencia hay entre CES, Erasmus+ y prácticas Erasmus?`

### CTA de cierre
- H2: `¿Te apuntas?`
- Párrafo: `Rellena el formulario. Sin compromiso. Te llamamos en menos de una semana.`
- Botón primario coral: `Apúntame` → `#formulario`
- Botón secundario: `Preguntas antes` (mailto)

## Página 4 · `/en/`

Sub-home en inglés para jóvenes europeos que quieren venir a Ferrol. Acento visual: púrpura. **Todo el contenido en inglés**, incluido header, footer y CTAs.

### Hero
- Eyebrow: `Route 3 · Come to Galicia`
- H1: `Live in Galicia for a few months. All expenses covered.`
- Párrafo: `We host young Europeans in Ferrol as ESC volunteers or Erasmus+ interns. Atlantic coast, real Spanish life, no need to speak Spanish when you arrive. 2 to 12 months. All covered by the EU.`
- Botón primario púrpura: `Apply now`
- Botón secundario: `See open projects`

### Sección "Life in Ferrol"
- Eyebrow: `Where you'll live`
- H2: `A small Atlantic city with real Spanish life.`
- Grid de 4 fotos con leyendas cortas (aspect 4:3, gradiente púrpura suave, radius 12 px):
  - `The Cantábrico coast` — `10 minutes from the city, dozens of beaches in a 30 km radius.`
  - `Old town` — `19th-century military port, walkable, cafes, tapas.`
  - `Food and drink` — `Fresh Atlantic seafood, pulpo, empanada, Galician wines. Low cost of living.`
  - `Weather and light` — `Mild all year: 15°C average. Rainy autumn-winter, warm and green summers.`

### Sección "What you can do here"
- Eyebrow: `Types of stay`
- 2 tarjetas grandes:

**ESC volunteering**
- Duration: 2 to 12 months.
- What: `Support local youth activities, help run our English club, contribute to environmental or cultural projects, learn Spanish on the way.`
- Covered: `Accommodation, food allowance, local transport, insurance, weekly pocket money, online language course.`
- CTA: `See open ESC projects →`

**Erasmus+ traineeship**
- Duration: 2 to 6 months.
- What: `Structured internship with our team. Communication, project management, event coordination, or digital content.`
- Covered: `Erasmus+ grant from your home university.`
- CTA: `Enquire about traineeships →`

### Sección "Practical info"
Grid de 3 columnas (móvil apiladas):

**Getting here**
- `Fly to Santiago (SCQ, 1h drive), A Coruña (LCG, 45min) or Porto (OPO, 2h).`
- `We pick you up on arrival.`

**Housing**
- `We arrange shared flat in central Ferrol with other volunteers.`
- `Rent, bills and wifi included.`

**Language**
- `English is fine to start. We provide an online Spanish/Galician course.`
- `You'll be speaking basics in a month.`

### Sección "Voices from past volunteers"
- 3 testimonios asimétricos:
1. `"I came to Ferrol for six months. I stayed almost a year. The sea, the food, the people."` — Amélie · Lyon → Ferrol · ESC 2023
2. `"Ferrol is small, but you feel like you're at the edge of Europe. It changed how I think about work."` — Kamilla · Warsaw → Ferrol · ESC 2022
3. `"Best decision of my gap year. I still miss the empanada."` — Jonas · Berlin → Ferrol · ESC 2024

### Sección "How to apply"
- 3 pasos numerados (mismo patrón que /irse/):
  1. **Fill the form** — `2-minute form: your background, languages, availability.`
  2. **Video call** — `We meet online for 30 minutes to find the right project.`
  3. **Come over** — `We handle the paperwork with your sending organisation. You focus on packing.`

### Sección "FAQ"
- 6-8 items acordeón en inglés:
  - `Do I need to speak Spanish?`
  - `How much pocket money will I get?`
  - `Can I bring a partner?`
  - `What kind of accommodation do you offer?`
  - `How do I find a sending organisation in my country?`
  - `What if the project doesn't work for me once I'm here?`

### CTA de cierre
- H2: `Ready to apply?`
- Párrafo: `We usually reply within a week.`
- Botones: `Start application` / `Ask a question` (mailto)

### Footer en inglés
Adaptado con textos en inglés pero misma estructura.

## Requisitos transversales

- **HTML semántico**: `header`, `main`, `section`, `article`, `nav`, `footer`. Headings jerárquicos, un solo `h1` por página.
- **Responsive**: funcional entre 320 px y 1600 px. Breakpoints: móvil < 768 px, tablet 768-1024 px, desktop > 1024 px.
- **Accesibilidad**: contraste AA mínimo, texto alternativo descriptivo en todas las imágenes, foco visible en interactivos, aria-labels donde aplique.
- **Sin frameworks CSS**: nada de Tailwind, Bootstrap ni similares. CSS puro con variables. Grid y Flexbox libremente.
- **JavaScript mínimo**: solo para el menú móvil. Acordeones con `details` y `summary` nativos.
- **Sin librerías de iconos**: SVG inline sencillos o caracteres Unicode (`→`, `↓`, `·`).

## Tono del copy

- **Directo, humano, ferrolano cuando cabe**. Nada de jerga institucional tipo "movilidad participativa" o "empoderamiento juvenil".
- Los CTAs usan **verbo en primera persona del héroe** ("Quiero irme", "Apúntame", "Apply") en vez de imperativos hacia el usuario ("Regístrate", "Apúntate").
- Los eyebrows son **descriptivos y breves** (2-4 palabras).
- Los H1 son **frases completas terminadas en punto**, no titulares telegráficos.
- Los testimonios usan **comillas tipográficas**, no rectas.
- Separadores de metadatos: **punto medio** (`·`), nunca guiones.
