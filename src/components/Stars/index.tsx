import styles from './Stars.module.css'

const STAR = 'M12 2.6l2.9 6.1 6.7.8-4.9 4.6 1.3 6.6L12 17.4 6 20.7l1.3-6.6L2.4 9.5l6.7-.8z'

function Row() {
  return (
    <span className={styles.row} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={styles.star}>
          <path d={STAR} />
        </svg>
      ))}
    </span>
  )
}

// Valoración en estrellas (admite decimales: 4,7 rellena el 94 %).
export function Stars({ value, label }: { value: number; label: string }) {
  const pct = Math.max(0, Math.min(5, value)) * 20
  return (
    <span className={styles.stars} role="img" aria-label={label}>
      <span className={styles.empty}>
        <Row />
      </span>
      <span className={styles.fill} style={{ width: `${pct}%` }}>
        <Row />
      </span>
    </span>
  )
}
