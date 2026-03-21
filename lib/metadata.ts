import type { Metadata } from "next";
import { getSiteUrl } from "./site";

const defaultOgImage = "/images/biz-boost-logo.png";

const defaultDescription =
  "Websites, branding, and digital marketing that actually move the needle.";

export function homeMetadata(): Metadata {
  const base = getSiteUrl();
  const url = `${base}/`;
  const title = "Biz Boost Agency — Web · Brand · Growth";
  return {
    title: { absolute: title },
    description: defaultDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: defaultDescription,
      url,
      siteName: "Biz Boost Agency",
      locale: "en_US",
      type: "website",
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Biz Boost Agency" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: defaultDescription,
      images: [defaultOgImage],
    },
  };
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const base = getSiteUrl();
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Biz Boost Agency",
      locale: "en_US",
      type: "website",
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Biz Boost Agency" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
