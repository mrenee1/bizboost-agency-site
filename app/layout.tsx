import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

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
      <body>{children}</body>
    </html>
  );
}
