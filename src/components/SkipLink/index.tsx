import styles from './SkipLink.module.css'

export function SkipLink({ label = 'Saltar al contenido principal' }: { label?: string }) {
  return (
    <a href="#main-content" className={styles.skipLink}>
      {label}
    </a>
  )
}
