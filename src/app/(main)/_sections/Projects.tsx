import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import type { HomeProject, ProjectLogo } from '@/content/types'

import styles from './Projects.module.css'

interface ProjectsProps {
  id?: string
  heading?: string
  text?: string
  items: HomeProject[]
}

// El logo de cada proyecto ocupa el sitio del título. Si es un icono con el
// nombre escrito al lado (Liña, Cousateca), el nombre va como texto con el
// color de su marca; si es un logotipo completo (Stop Eucalipto, Retake), la
// imagen lleva el nombre en el alt.
function Logo({ name, logo }: { name: string; logo: ProjectLogo }) {
  const ratio = logo.width / logo.height
  return (
    <span className={logo.wordmark ? styles.logoMark : styles.logoFull}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.wordmark ? '' : name}
        width={logo.wordmark ? 32 : Math.round(40 * ratio)}
        height={logo.wordmark ? 32 : 40}
        className={styles.logoImg}
      />
      {logo.wordmark && (
        <span className={styles.wordmark} style={{ color: logo.wordmarkColor }}>
          {logo.wordmark}
        </span>
      )}
    </span>
  )
}

// Segundo pilar de la portada: proyectos para la comunidad. Las tarjetas solo
// son enlace si el proyecto tiene web pública.
export function Projects({ id, heading, text, items }: ProjectsProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" id={id} className={styles.section}>
      <div className={styles.head}>
        {heading && <h2>{heading}</h2>}
        {text && <p className={styles.intro}>{text}</p>}
      </div>
      <div className={styles.grid} data-reveal-stagger>
        {items.map((project) => {
          const body = (
            <>
              <h3 className={styles.name}>
                {project.logo ? <Logo name={project.name} logo={project.logo} /> : project.name}
              </h3>
              <p className={styles.text}>{project.text}</p>
              {project.href && project.ctaLabel ? (
                <span className={styles.cta}>
                  {project.ctaLabel} <span className="xr-arrow" aria-hidden="true">→</span>
                </span>
              ) : (
                project.status && <span className={styles.status}>{project.status}</span>
              )}
            </>
          )

          return project.href ? (
            <Card
              key={project.name}
              href={project.href}
              target="_blank"
              className={styles.card}
            >
              {body}
            </Card>
          ) : (
            <Card key={project.name} className={styles.card}>
              {body}
            </Card>
          )
        })}
      </div>
    </Container>
  )
}
