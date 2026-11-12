import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { pagePaisanosEs } from '@/content/paisanos'

import styles from './Podcast.module.css'

export function Podcast() {
  const page = pagePaisanosEs

  return (
    <ClosingCtaSection heading={page.podcastHeading} text={page.podcastText} logo={
      <Image src={page.podcastImage} alt="Logotipo del podcast Paisanos" width={120} height={120} className={styles.logo} />
    }>
      <ButtonPrimary accent href={page.podcastUrl} target="_blank" rel="noopener noreferrer">
        {page.podcastCtaLabel}
      </ButtonPrimary>
    </ClosingCtaSection>
  )
}
