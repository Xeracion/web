import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { EyebrowPill } from '@/components/EyebrowPill'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { RichText } from '@/components/RichText'
import { siteSettings } from '@/content/siteSettings'
import { formatDateShort } from '@/lib/formatDate'
import { AMBITO_LABELS, CATEGORIA_LABELS, DURACION_LABELS } from '@/lib/experienciaCategorias'
import { buildPageMetadata } from '@/lib/metadata'
import {
  getConvocatoriasForExperiencia,
  getExperienciaBySlug,
  getExperienciaSlugs,
} from '@/sanity/lib/queries'

import styles from './page.module.css'

export async function generateStaticParams() {
  const slugs = await getExperienciaSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = await getExperienciaBySlug(slug)
  if (!item || item.enlaceExterno) return {}
  return buildPageMetadata({ title: item.titulo, description: item.resumen })
}

export default async function ExperienciaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getExperienciaBySlug(slug)

  if (!item || item.enlaceExterno) notFound()

  const convocatorias = item._id ? await getConvocatoriasForExperiencia(item._id) : []
  const whatsappHref = siteSettings.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined

  return (
    <>
      <Container as="section" className={styles.hero}>
        <div className={styles.heroText}>
          {item.categoria && <Eyebrow accent>{CATEGORIA_LABELS[item.categoria] ?? item.categoria}</Eyebrow>}
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
            label={item.lugar ?? item.titulo ?? ''}
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
          <RichText value={item.descripcion} />
        </Container>
      )}

      <Container as="section" className={styles.convocatorias}>
        {convocatorias.length > 0 ? (
          <>
            <Eyebrow accent>Convocatorias abiertas</Eyebrow>
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
        ) : (
          <div className={styles.avisame}>
            <Eyebrow accent>Próximamente</Eyebrow>
            <p>Todavía no hay convocatorias abiertas para esta experiencia.</p>
            {whatsappHref && (
              <ButtonPrimary accent href={whatsappHref}>
                Avísame cuando salga algo
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
