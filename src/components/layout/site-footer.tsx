import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-100 px-5 pt-11 pb-14 sm:px-8">
      <Container className="flex flex-wrap items-center gap-8">
        <Wordmark size="md" labelClassName="text-ink-200" />

        <nav className="flex flex-wrap gap-x-[26px] gap-y-3 sm:ml-auto">
          {siteConfig.footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-ink-400 transition-colors hover:text-ink-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line-100 pt-6 text-xs text-ink-500">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="max-w-[520px]">
          Quantora is a research and journaling tool. It does not provide investment advice or
          recommendations.
        </p>
      </Container>
    </footer>
  );
}
