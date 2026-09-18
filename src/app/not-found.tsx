import type { Metadata } from "next";

import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-8 text-center">
      <p className="text-[11.5px] font-semibold tracking-[0.2em] text-ink-500 uppercase">
        Error 404
      </p>
      <h1 className="mt-6 text-[clamp(32px,5vw,52px)] font-light tracking-[-0.03em] text-ink-100">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-[420px] text-[16.5px] leading-[1.6] text-ink-300">
        The link may be outdated. Everything about Quantora lives on the home page.
      </p>
      <CtaLink href="/" className="mt-9">
        Back to Quantora
      </CtaLink>
    </main>
  );
}
