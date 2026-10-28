import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Xeración — asociación xuvenil de Ferrol'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fbfffc',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              fontSize: 96,
              color: '#2f2f2f',
              letterSpacing: '-2px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Xeración
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#5a5a5a',
              marginTop: 24,
              maxWidth: 820,
            }}
          >
            Asociación xuvenil de Ferrol · desde 2013
          </div>
        </div>
        <div style={{ display: 'flex', height: 14, width: '100%' }}>
          <div style={{ display: 'flex', flex: 1, backgroundColor: '#0e3a2f' }} />
          <div style={{ display: 'flex', flex: 1, backgroundColor: '#357dca' }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
