'use client'

import { useActionState } from 'react'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { submitAviso, type AvisoState } from '@/lib/notifySignup'
import { cn } from '@/lib/cn'

import styles from './AvisoForm.module.css'

const initialState: AvisoState = { status: 'idle' }

interface AvisoFormProps {
  experienciaId: string
  variant?: 'primary' | 'secondary'
}

export function AvisoForm({ experienciaId, variant = 'primary' }: AvisoFormProps) {
  const [state, formAction, pending] = useActionState(submitAviso, initialState)

  if (state.status === 'success') {
    return <p className={styles.success}>{state.message}</p>
  }

  return (
    <form action={formAction} className={cn(styles.form, variant === 'secondary' && styles.secondary)}>
      <input type="hidden" name="experienciaId" value={experienciaId} />
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Nombre</span>
          <input type="text" name="nombre" required autoComplete="name" className={styles.input} />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Correo</span>
          <input type="email" name="email" required autoComplete="email" className={styles.input} />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>WhatsApp (opcional)</span>
          <input type="tel" name="whatsapp" autoComplete="tel" className={styles.input} />
        </label>
        <ButtonPrimary type="submit" accent={variant === 'primary'} disabled={pending} className={styles.submit}>
          {pending ? 'Enviando…' : 'Avísame'}
        </ButtonPrimary>
      </div>
      {state.status === 'error' && <p className={styles.error}>{state.message}</p>}
    </form>
  )
}
