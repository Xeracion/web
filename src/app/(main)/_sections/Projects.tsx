import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import type { HomeProject } from '@/content/types'

import styles from './Projects.module.css'

interface ProjectsProps {
  id?: string
  heading?: string
  text?: string
  items: HomeProject[]
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
              <h3 className={styles.name}>{project.name}</h3>
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
