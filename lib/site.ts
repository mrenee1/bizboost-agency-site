/**
 * Canonical site origin for metadata, Open Graph URLs, and canonical links.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.thebizboostagency.com).
 * Vercel previews use VERCEL_URL when the env var is unset.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
