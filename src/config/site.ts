/**
 * Single source of truth for anything that appears in more than one place:
 * metadata, navigation and CTA destinations.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://quantora.app";

/**
 * Product CTAs fall back to the on-page signup anchor while the app is not
 * public, so no button ever points at a dead link.
 */
const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim() || "#start";

export const siteConfig = {
  name: "Quantora",
  url: siteUrl,
  tagline: "Better thinking. Better investing.",
  description:
    "Quantora helps you learn how investing works, research a company with a clear process, and write down the reason behind every investment.",
  locale: "en_US",
  links: {
    signUp: appUrl,
    signIn: appUrl,
    contact: "mailto:hello@quantora.app",
  },
  nav: [
    { label: "How it works", href: "#how" },
    { label: "Research", href: "#research" },
    { label: "Learn", href: "#learn" },
    { label: "Quantora AI", href: "#ai" },
  ],
  footerNav: [
    { label: "How it works", href: "#how" },
    { label: "Research", href: "#research" },
    { label: "Learn", href: "#learn" },
    { label: "Contact", href: "mailto:hello@quantora.app" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
