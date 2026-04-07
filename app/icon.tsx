import { ImageResponse } from 'next/og'

export const dynamic = "force-static"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22c55e',
          fontWeight: 800,
          borderRadius: "8px",
          border: '1px solid #22c55e'
        }}
      >
        FA
      </div>
    ),
    {
      ...size,
    }
  )
}
