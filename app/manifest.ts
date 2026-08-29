import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yasmin Fotografia",
    short_name: "Yasmin Fotografia",
    description:
      "Fotografia de retratos, celebrações íntimas e histórias contadas com luz e cuidado.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6edcf",
    theme_color: "#f6edcf",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
