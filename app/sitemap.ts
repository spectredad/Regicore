import type { MetadataRoute } from "next";

const baseUrl = "https://regicore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: "2026-10-19" },
    { url: `${baseUrl}/company` },
    { url: `${baseUrl}/start` },
    { url: `${baseUrl}/terms` },
    {
      url: `${baseUrl}/hardest-working-seo-expert-bangalore`,
      lastModified: "2026-10-19",
      images: [`${baseUrl}/hardest-working-seo-expert-bangalore.jpg`],
    },
  ];
}
