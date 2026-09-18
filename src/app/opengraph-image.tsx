import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0b0c",
        padding: 80,
        color: "#ecece8",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#191c21",
            color: "#8e9ce0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          Q
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.17em" }}>QUANTORA</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Better thinking.
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#9eabe6",
            fontStyle: "italic",
          }}
        >
          Better investing.
        </div>
      </div>

      <div style={{ fontSize: 26, color: "#9ba1a9" }}>Learn · Research · Thesis · Review</div>
    </div>,
    size,
  );
}
