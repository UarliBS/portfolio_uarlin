import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return siteUrl ? [{ url: siteUrl.href }] : [];
}
