import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const title = params?.slug?.replace(/-/g, " ") || "Blog Post";

  // Placeholder — replace with actual image generation
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FF3B3F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          fontWeight: 700,
          color: "white",
          padding: "40px",
        }}
      >
        {title}
      </div>
    ),
    { ...size }
  );
}
