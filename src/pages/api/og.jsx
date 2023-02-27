// pages/api/og.jsx

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          paddingTop: "100px",
        }}
      >
        Hello, World!
      </div>
    )
  );
}
