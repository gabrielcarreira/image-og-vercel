import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

export default function og(req) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')
  return new ImageResponse(
    (
      <div
        style={{
          background: '#121212',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          width="256px"
          height="256px"
          src={`https://github.com/${username}.png`}
          alt="logo"
          style={{
            borderRadius: '128px',
            backgroundColor: '#00c056',
            padding: '10px'
          }}
        />
        <p style={{ color: 'white' }}>@{username}</p>
        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#00c056',
            position: 'absolute',
            left: '650px',
            top: '250px',
            borderRadius: '200px',
            filter: 'blur(50px)',
            opacity: 0.6
          }}
        />
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: '#00c056',
            position: 'absolute',
            left: '-100px',
            top: '-100px',
            borderRadius: '100px',
            filter: 'blur(50px)',
            opacity: 0.6
          }}
        />
      </div>
    ),
    {
      width: 800,
      height: 400
    }
  )
}
