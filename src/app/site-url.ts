/** Set NEXT_PUBLIC_SITE_URL to the production origin to enable absolute SEO URLs. */
export function getSiteUrl(): URL | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL");
  return new URL(url.origin);
}
