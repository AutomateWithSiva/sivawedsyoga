import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #b8954a 0%, #9a7b3d 100%)",
          borderRadius: "8px",
          fontSize: 18,
          fontWeight: 700,
          color: "white",
          fontFamily: "serif",
        }}
      >
        W
      </div>
    ),
    { width: 32, height: 32 }
  );
}
