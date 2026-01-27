import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Keizer Logistics BV - Transport & Logistiek'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a19 0%, #2d2d2b 50%, #3d3d3a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #e8b95a 0%, #d4a344 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
            }}
          >
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#1a1a19' }}>K</span>
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            Keizer Logistics
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#e8b95a',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Uw betrouwbare partner in transport & logistiek
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#e8b95a' }}>5+</span>
            <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Jaar ervaring</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#e8b95a' }}>500+</span>
            <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Tevreden klanten</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#e8b95a' }}>24/7</span>
            <span style={{ fontSize: '20px', color: '#a0a0a0' }}>Bereikbaar</span>
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '24px',
            color: '#636260',
          }}
        >
          keizer-logistics.nl
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
