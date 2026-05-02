import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants";

export const alt = SITE_TITLE;
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
        padding: "80px",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "28px",
          opacity: 0.7,
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
        Available for new projects
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Damian Kaczorowski
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 500,
            opacity: 0.85,
          }}
        >
          Software Developer
        </div>
        <div
          style={{
            fontSize: "28px",
            opacity: 0.6,
            maxWidth: "900px",
            lineHeight: 1.4,
            marginTop: "16px",
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "24px",
          opacity: 0.7,
        }}
      >
        <span>Java</span>
        <span>·</span>
        <span>React</span>
        <span>·</span>
        <span>Next.js</span>
        <span>·</span>
        <span>TypeScript</span>
        <span>·</span>
        <span>Spring Boot</span>
      </div>
    </div>,
    { ...size },
  );
}
