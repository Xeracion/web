export interface GoogleReview {
  author: string
  authorUrl?: string
  photoUrl?: string
  rating: number
  text: string
  when?: string
}

export interface GoogleReviews {
  rating: number
  total: number
  mapsUrl?: string
  reviews: GoogleReview[]
}

interface PlacesReview {
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
}

interface PlacesResponse {
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: PlacesReview[]
}

// Opiniones de Google Business vía Places API (New). Devuelve como mucho las
// 5 que da Google. Sin clave o sin ID de lugar (o si la API falla) devuelve
// null y la web enseña las citas de siempre. Se refresca cada 24 horas (Google cobra por encima de 1.000 peticiones al mes).
export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) {
    console.warn(`[googleReviews] Faltan variables de entorno: ${!apiKey ? 'GOOGLE_PLACES_API_KEY ' : ''}${!placeId ? 'GOOGLE_PLACE_ID' : ''}`.trim())
    return null
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: 86400 },
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      console.error(`[googleReviews] Google respondió ${res.status}: ${body.slice(0, 300)}`)
      return null
    }
    const data = (await res.json()) as PlacesResponse
    if (typeof data.rating !== 'number') {
      console.error('[googleReviews] La respuesta de Google no trae valoración (rating)')
      return null
    }

    const reviews = (data.reviews ?? []).flatMap((r): GoogleReview[] => {
      const text = (r.originalText?.text ?? r.text?.text ?? '').trim()
      if (!text || typeof r.rating !== 'number') return []
      return [
        {
          author: r.authorAttribution?.displayName ?? '',
          authorUrl: r.authorAttribution?.uri,
          photoUrl: r.authorAttribution?.photoUri,
          rating: r.rating,
          text,
          when: r.relativePublishTimeDescription,
        },
      ]
    })

    return { rating: data.rating, total: data.userRatingCount ?? reviews.length, mapsUrl: data.googleMapsUri, reviews }
  } catch (error) {
    console.error('[googleReviews] Error al llamar a Google:', error instanceof Error ? error.message : error)
    return null
  }
}
