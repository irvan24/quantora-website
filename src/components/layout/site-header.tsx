import { MobileNav } from "@/components/layout/mobile-nav";
import { CtaLink } from "@/components/ui/cta-link";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-100 bg-base/[0.86] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[62px] max-w-[1220px] items-center gap-8 px-5 sm:px-8">
        <a href="#top" className="text-ink-100" aria-label={`${siteConfig.name} home`}>
          <Wordmark />
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-ink-300 transition-colors hover:text-ink-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 md:ml-0 md:gap-[18px]">
          <a
            href={siteConfig.links.signIn}
            className="hidden text-[13.5px] font-medium text-ink-200 transition-colors hover:text-ink-100 sm:inline"
          >
            Sign in
          </a>
          <CtaLink href={siteConfig.links.signUp} variant="header" size="sm">
            Get started
          </CtaLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
