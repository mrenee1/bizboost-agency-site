import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biz Boost Agency — Web · Brand · Growth",
  description:
    "Websites, branding, and digital marketing that actually move the needle.",
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
