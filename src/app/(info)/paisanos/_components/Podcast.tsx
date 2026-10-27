import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { Container } from '@/components/Container'
import { pagePaisanosEs } from '@/content/paisanos'

import styles from './Podcast.module.css'

export function Podcast() {
  const page = pagePaisanosEs

  return (
    <section className={styles.band}>
      <Container className={styles.inner}>
        <Image src={page.podcastImage} alt="Logotipo del podcast Paisanos" width={160} height={160} className={styles.logo} />
        <div>
          <p className={styles.eyebrow}>{page.podcastEyebrow}</p>
          <h2 className={styles.heading}>{page.podcastHeading}</h2>
          <p className={styles.text}>{page.podcastText}</p>
          <ButtonPrimary highlight href={page.podcastUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            {page.podcastCtaLabel}
          </ButtonPrimary>
        </div>
      </Container>
    </section>
  )
}
