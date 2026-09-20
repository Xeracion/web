'use server'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '@/sanity/env'

// Guarda los avisos de interés del formulario "Avísame" de cada ficha de
// experiencia (ver AvisoForm) como documentos `avisoInteres` en Sanity, para
// que el equipo los vea y los exporte desde Studio (Contenido → Avisos de
// interés). Esto es un placeholder documentado, no una integración real de
// newsletter: si Xeración ya usa una herramienta (Mailchimp, Brevo, etc.),
// sustituye el bloque de abajo por la llamada a su API — la firma de
// submitAviso (compatible con useActionState) no tiene por qué cambiar.
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

export interface AvisoState {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitAviso(_prevState: AvisoState, formData: FormData): Promise<AvisoState> {
  const nombre = String(formData.get('nombre') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const whatsapp = String(formData.get('whatsapp') ?? '').trim()
  const experienciaId = String(formData.get('experienciaId') ?? '').trim()

  if (!nombre || !email || !experienciaId) {
    return { status: 'error', message: 'Rellena al menos tu nombre y tu correo.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Ese correo no parece válido.' }
  }
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error('SANITY_API_WRITE_TOKEN no configurado: no se pudo guardar el aviso de', email)
    return {
      status: 'error',
      message: 'No hemos podido guardar tu aviso ahora mismo. Escríbenos directamente mientras tanto.',
    }
  }

  try {
    await writeClient.create({
      _type: 'avisoInteres',
      nombre,
      email,
      whatsapp: whatsapp || undefined,
      experiencia: { _type: 'reference', _ref: experienciaId },
    })
    return { status: 'success', message: 'Apuntado. Te avisamos en cuanto salga la próxima convocatoria.' }
  } catch (err) {
    console.error('No se pudo guardar el aviso de interés:', err)
    return {
      status: 'error',
      message: 'No hemos podido guardar tu aviso. Inténtalo de nuevo o escríbenos directamente.',
    }
  }
}
