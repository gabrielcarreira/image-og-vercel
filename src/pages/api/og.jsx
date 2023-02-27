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
          background: 'white',
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
          style={{ borderRadius: '128px' }}
        />
        <p>@{username}</p>
      </div>
    ),
    {
      width: 800,
      height: 400
    }
  )
}
