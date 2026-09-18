"use client";

import { useState } from "react";

import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-full border border-line-300 text-ink-200 transition-colors hover:text-ink-100"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-[62px] flex flex-col gap-1 border-b border-line-100 bg-base px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,.5)] sm:px-8"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.links.signIn}
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-ink-200 transition-colors hover:text-ink-100"
          >
            Sign in
          </a>
        </nav>
      ) : null}
    </div>
  );
}
