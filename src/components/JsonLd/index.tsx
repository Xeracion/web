// Datos estructurados (schema.org) en JSON-LD. No se ejecuta: es un <script>
// de datos, así que no choca con la CSP. Se escapa «<» para que ningún texto
// pueda cerrar la etiqueta.
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
