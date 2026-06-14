import type { MetadataRoute } from "next";
import { marketSegmentPages, productPages, siteUrl } from "./lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/products", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/become-a-distributor", priority: 0.82, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/quote", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/products/p35-pu-sealant", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...productPages.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...marketSegmentPages.map((segment) => ({
      url: `${siteUrl}/market-segments/${segment.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}
