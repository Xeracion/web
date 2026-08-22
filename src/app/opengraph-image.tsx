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
          backgroundColor: '#FAFAF7',
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
              color: '#2C2C2A',
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
              color: '#5F5E5A',
              marginTop: 24,
              maxWidth: 820,
            }}
          >
            Asociación xuvenil de Ferrol · desde 2013
          </div>
        </div>
        <div style={{ display: 'flex', height: 14, width: '100%' }}>
          <div style={{ display: 'flex', flex: 1, backgroundColor: '#5DCAA5' }} />
          <div style={{ display: 'flex', flex: 1, backgroundColor: '#F0997B' }} />
          <div style={{ display: 'flex', flex: 1, backgroundColor: '#AFA9EC' }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
