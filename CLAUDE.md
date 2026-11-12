# xeracion.org

Web de **Xeración**, asociación juvenil de Ferrol (Casa da Xuventude, Rúa Almendra 9) desde 2013: experiencias para gente joven (unas de pago, otras financiadas por Europa) y proyectos para la comunidad. Contacto: `info@xeracion.org`.

Next.js 16 (App Router) + TypeScript + CSS Modules, desplegado en Vercel desde `Xeracion/web`. **Sin CMS**: todo el contenido vive en `src/content/*.ts`. Stack decidido; no reconsiderarlo sin que lo pida el usuario.

El detalle está en `docs/` y **solo se lee cuando la tarea lo necesita**:
- `docs/diseno.md`: paleta y tokens, tipografía, componentes, menú, logo, pie, clases de ruta.
- `docs/contenido.md`: qué archivo de `src/content/` alimenta cada página, estructura de cada página, versión en gallego, Google Calendar, datos legales, contenido del WordPress anterior.
- `docs/catalogo.md`: el catálogo de experiencias (`src/content/experiencias.ts`).
- `ESPECIFICACION.md`: especificación original, solo como referencia histórica.

## Flujo de trabajo (cambios pequeños, en paralelo, en `main`)

Varias sesiones trabajan a la vez, cada una con un cambio pequeño, directamente en `main`, aunque la sesión arranque en otra rama:

1. `git checkout main && git pull --rebase origin main` antes de tocar nada.
2. Tocar solo los archivos que pide el cambio.
3. Comprobar según el tamaño:
   - **Textos o datos de `src/content/`:** `npx tsc --noEmit && npm run lint`. Sin build ni capturas.
   - **Componentes o CSS:** además `npm run build` y, si cambia algo visible, una captura con Playwright.
4. `git pull --rebase origin main` otra vez, commit y `git push origin main`. Si el rebase choca, resolver solo el conflicto propio; no pisar el trabajo de otra sesión.
5. Cada push a `main` sale a producción (Vercel). Para cambios grandes de diseño, mejor rama + vista previa, si el usuario lo pide.

**CLAUDE.md y `docs/` solo se tocan cuando cambia una regla o una decisión**, no por cada retoque de contenido: así no se convierten en el archivo en el que chocan todas las sesiones.

## Reglas que no se rompen

**Contenido**
- Nada inventado: ni citas, ni cifras, ni bios, ni enlaces, ni fechas, ni precios. Si falta un dato, el campo se deja vacío y se pregunta.
- Citas de personas reales literales (recortes con `[…]`). Las entrevistas de Paisanos no se reescriben.
- Datos legales reales (CIF `G70385091`, OID `E10060426`, PIC `948920640`): no tocarlos sin confirmación.
- Nunca publicar datos personales de participantes (nombres, documentos, contactos); solo cifras agregadas.
- La oficina abre por las mañanas, de 10:00 a 14:00: nunca «pásate cualquier tarde» en textos de contacto.

**Tono del copy** (todo texto nuevo, en castellano y en gallego)
1. CTAs en primera persona: «Quiero irme», «Apúntame»; nunca «Regístrate» o «Apúntate».
2. H1 como frase completa terminada en punto.
3. Sin antetítulos (texto pequeño en mayúsculas sobre un título). Las etiquetas sobre fotos y los rótulos de datos sí valen.
4. Comillas tipográficas en citas (las pone el CSS con `::before`/`::after`).
5. Punto medio `·` como separador de metadatos, nunca guiones ni barras.
6. Sin jerga institucional («movilidad participativa», «empoderamiento juvenil»…). Tono directo y cercano.
7. Erasmus+ y Cuerpo Europeo de Solidaridad no van en titulares ni nombres de sección: solo en etiquetas de coste, fichas de experiencia, la sección de cifras de la portada y los datos legales de `/nosotros/`.

**Técnicas**
- CSS Modules y variables de `src/app/globals.css`; nada de Tailwind ni frameworks CSS. Colores, radios y espacios siempre desde los tokens (ver `docs/diseno.md`).
- HTML semántico, un solo `h1` por página, contraste AA, `alt` descriptivo, foco visible.
- JavaScript mínimo; acordeones con `<details>`; iconos en SVG en línea o Unicode, sin librerías.
- Fotos reales en `public/img/` (WebP); sin fotos de stock. Logos oficiales en `public/logo/` (SVG azul y blanco).
- Responsive de 320 a 1600 px: móvil < 768, tablet 768–1024, escritorio > 1024.
- Los nombres internos históricos se quedan como están: `pageFerrolEs`, `route-ferrol`/`ferrol` (= Agenda), `route-irse` (= Experiencias), `--xr-lime-*` (= el verde de marca `#0E3A2F`), `ResizableNavbar`.
