import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-0YMM6KWVKL";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Biz Boost Agency",
    template: "%s · Biz Boost Agency",
  },
  description:
    "Websites, branding, and digital marketing that actually move the needle.",
  openGraph: {
    siteName: "Biz Boost Agency",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
