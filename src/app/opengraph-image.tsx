import { ImageResponse } from "next/og";

export const alt = "Warllen Barreiros — Backend e IA aplicada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#06080d",
          color: "#f4f7fb",
          padding: 90,
          borderLeft: "14px solid #28d4d8",
        }}
      >
        <div style={{ fontSize: 28, color: "#28d4d8", marginBottom: 30 }}>
          SOFTWARE DEVELOPER
        </div>
        <div style={{ fontSize: 84, fontWeight: 700 }}>Warllen Barreiros</div>
        <div style={{ fontSize: 28, color: "#c5d0dc", marginTop: 30 }}>
          Backend · IA aplicada ao desenvolvimento
        </div>
      </div>
    ),
    size,
  );
}
