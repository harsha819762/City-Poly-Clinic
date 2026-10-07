import { ImageResponse } from "next/og"

import { clinic } from "@/lib/clinic"
import { ogImage } from "@/lib/og-image"

// Rendered once at build into out/og.png. A real .png URL (instead of the extensionless
// opengraph-image file convention) lets GitHub Pages serve it as image/png for link previews.
export const dynamic = "force-static"

function Star({ fill }: { fill: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z"
      />
    </svg>
  )
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #fbf8f3 0%, #e6f1ed 100%)",
          color: "#172a2b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              background: "#0e5e57",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 14, height: 48, borderRadius: 4, background: "#fff" }} />
            <div style={{ position: "absolute", width: 48, height: 14, borderRadius: 4, background: "#fff" }} />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{clinic.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: 900 }}>
            Trusted medical clinic in Whitefield, Bengaluru
          </div>
          <div style={{ fontSize: 30, color: "#4b5a5a" }}>{clinic.address.street}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "#fff",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            <Star fill="#e8a020" />
            {clinic.rating.value} Google rating · {clinic.rating.count} reviews
          </div>
          <div
            style={{
              display: "flex",
              background: "#0e5e57",
              color: "#fff",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            Call {clinic.phone.display}
          </div>
        </div>
      </div>
    ),
    { width: ogImage.width, height: ogImage.height }
  )
}
