import { ButtonPrimary } from '@/components/ButtonPrimary'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { getSubstackFeed, substackSubscribeUrl } from '@/lib/substack'
import type { SectionIntroData } from '@/sanity/lib/queries'

import styles from './OpportunitiesFeed.module.css'

interface OpportunitiesFeedProps {
  intro?: SectionIntroData
  feedUrl?: string
}

export async function OpportunitiesFeed({ intro, feedUrl }: OpportunitiesFeedProps) {
  if (!feedUrl) return null

  const [posts, subscribeHref] = await Promise.all([
    getSubstackFeed(feedUrl),
    Promise.resolve(substackSubscribeUrl(feedUrl)),
  ])

  return (
    <Container as="section" className={styles.section}>
      <div className={styles.header}>
        <div>
          {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
          {intro?.heading && <h2>{intro.heading}</h2>}
        </div>
        {subscribeHref && (
          <ButtonPrimary accent href={subscribeHref} target="_blank" rel="noopener noreferrer">
            Suscribirme a las oportunidades
          </ButtonPrimary>
        )}
      </div>

      {posts.length > 0 ? (
        <ul className={styles.list}>
          {posts.map((post, i) => (
            <li key={i} className={styles.item}>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                {post.description && <p className={styles.postText}>{post.description}</p>}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No hemos podido cargar las últimas publicaciones ahora mismo.</p>
      )}
    </Container>
  )
}
