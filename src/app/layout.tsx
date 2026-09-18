import type { Metadata, Viewport } from "next";
import { Mulish, Newsreader } from "next/font/google";

import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";

import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "investment thesis",
    "investment research",
    "investing journal",
    "long-term investing",
    "investment process",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mulish.variable} ${newsreader.variable}`}>
      <body className="overflow-x-hidden font-sans">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-surface-400 focus:px-4 focus:py-2 focus:text-sm focus:text-ink-100"
        >
          Skip to content
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
