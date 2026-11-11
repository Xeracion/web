import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { EyebrowPill } from '@/components/EyebrowPill'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { Prose } from '@/components/Prose'
import { getConvocatoriasAbiertas, getExperienciaBySlug, getExperienciaSlugs } from '@/content/experiencias'
import { siteSettings } from '@/content/siteSettings'
import { formatDateShort } from '@/lib/formatDate'
import { AMBITO_LABELS, DURACION_LABELS } from '@/lib/experienciaCategorias'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

// Las convocatorias se filtran por fecha límite: se regenera a diario para
// que una convocatoria cerrada deje de aparecer sola.
export const revalidate = 86400

export function generateStaticParams() {
  return getExperienciaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getExperienciaBySlug(slug)
  if (!item) return {}
  return buildPageMetadata({ title: item.titulo, description: item.resumen })
}

export default async function ExperienciaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getExperienciaBySlug(slug)

  if (!item) notFound()

  const convocatorias = getConvocatoriasAbiertas(item)
  const ediciones = [...(item.ediciones ?? [])].sort((a, b) => b.anio - a.anio)
  const avisoHref = siteSettings.whatsapp
    ? `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(`Hola, quiero que me aviséis de la próxima convocatoria de ${item.titulo}.`)}`
    : undefined
  const whatsappHref = siteSettings.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const hayConvocatorias = convocatorias.length > 0

  return (
    <>
      <Container as="section" className={styles.hero}>
        <div className={styles.heroText}>
          <h1>{item.titulo}</h1>
          {item.resumen && <p className={styles.resumen}>{item.resumen}</p>}
          <dl className={styles.datos}>
            {item.ambito && (
              <div>
                <dt>Ámbito</dt>
                <dd>{AMBITO_LABELS[item.ambito] ?? item.ambito}</dd>
              </div>
            )}
            {item.duracion && (
              <div>
                <dt>Duración</dt>
                <dd>{DURACION_LABELS[item.duracion] ?? item.duracion}</dd>
              </div>
            )}
            {item.costeEtiqueta && (
              <div>
                <dt>Coste</dt>
                <dd>{item.costeEtiqueta}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className={styles.heroPhotoWrap}>
          <PhotoPlaceholder
            variant="irse"
            image={item.imagen}
            alt={item.imagenAlt}
            label={item.lugar ?? item.titulo}
            radius="xl"
            aspectRatio="4 / 3"
          />
          {item.lugar && (
            <div className={styles.heroBadge}>
              <EyebrowPill accent>{item.lugar}</EyebrowPill>
            </div>
          )}
        </div>
      </Container>

      {item.descripcion && (
        <Container as="section" className={styles.descripcion}>
          <Prose value={item.descripcion} />
        </Container>
      )}

      {ediciones.length > 0 && (
        <Container as="section" className={styles.ediciones}>
          <h2 className={styles.sectionTitle}>Ediciones anteriores</h2>
          <ul className={styles.edicionesList}>
            {ediciones.map((edicion, i) => (
              <li key={i} className={styles.edicion}>
                <div className={styles.edicionHeader}>
                  <p className={styles.edicionTitulo}>{edicion.titulo}</p>
                  <p className={styles.edicionMeta}>
                    {[
                      edicion.anio,
                      edicion.lugar,
                      edicion.participantes ? `${edicion.participantes} participantes` : null,
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                  {edicion.resumen && <p className={styles.edicionResumen}>{edicion.resumen}</p>}
                </div>
                {edicion.galeria && edicion.galeria.length > 0 && (
                  <div className={styles.edicionGaleria}>
                    {edicion.galeria.slice(0, 4).map((foto, j) => (
                      <Image
                        key={j}
                        src={foto}
                        alt=""
                        width={80}
                        height={80}
                        className={styles.edicionFoto}
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      )}

      <Container as="section" className={styles.convocatorias}>
        {hayConvocatorias && (
          <>
            <h2 className={styles.sectionTitle}>Convocatorias abiertas</h2>
            <ul className={styles.convocatoriasList}>
              {convocatorias.map((convocatoria, i) => (
                <li key={i} className={styles.convocatoria}>
                  <div>
                    <p className={styles.convocatoriaTitulo}>{convocatoria.titulo}</p>
                    <p className={styles.convocatoriaMeta}>
                      {[
                        convocatoria.pais,
                        convocatoria.fechaInicio && convocatoria.fechaFin
                          ? `${formatDateShort(convocatoria.fechaInicio)} – ${formatDateShort(convocatoria.fechaFin)}`
                          : null,
                        convocatoria.fechaLimite
                          ? `plazo hasta el ${formatDateShort(convocatoria.fechaLimite)}`
                          : null,
                        convocatoria.plazas ? `${convocatoria.plazas} plazas` : null,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  </div>
                  {convocatoria.enlaceInscripcion && (
                    <ButtonPrimary accent href={convocatoria.enlaceInscripcion}>
                      Apuntarme
                    </ButtonPrimary>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {avisoHref && (
          <div className={hayConvocatorias ? styles.avisameSecondary : styles.avisame}>
            {hayConvocatorias ? (
              <p className={styles.avisameTexto}>
                ¿No entras en esta o prefieres esperar? Escríbenos y te avisamos de la siguiente.
              </p>
            ) : (
              <>
                <h2 className={styles.sectionTitle}>Próximamente</h2>
                <p className={styles.avisameTexto}>
                  Ahora mismo no hay convocatoria abierta. Escríbenos y te avisamos en cuanto salga la próxima.
                </p>
              </>
            )}
            {hayConvocatorias ? (
              <ButtonSecondary href={avisoHref}>Quiero que me aviséis</ButtonSecondary>
            ) : (
              <ButtonPrimary accent href={avisoHref}>
                Quiero que me aviséis
              </ButtonPrimary>
            )}
          </div>
        )}
      </Container>

      <Container as="section" className={styles.cierre}>
        <h2>¿Hablamos?</h2>
        <p>Cuéntanos qué buscas y te ayudamos a encontrar tu experiencia.</p>
        <div className={styles.cierreButtons}>
          {whatsappHref && <ButtonPrimary href={whatsappHref}>Hablar por WhatsApp</ButtonPrimary>}
          {siteSettings?.email && (
            <ButtonSecondary href={`mailto:${siteSettings.email}`}>{siteSettings.email}</ButtonSecondary>
          )}
        </div>
      </Container>
    </>
  )
}
