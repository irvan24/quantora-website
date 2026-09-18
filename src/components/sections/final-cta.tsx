import { CtaLink } from "@/components/ui/cta-link";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <Section
      id="start"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-[190px] sm:pb-[170px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 1400 300"
          preserveAspectRatio="none"
          width="100%"
          height="300"
          fill="none"
          stroke="#ecece8"
          strokeWidth="1.2"
          className="absolute bottom-0 left-0 opacity-[0.045]"
        >
          <path d="M0 250 C160 232 240 170 400 186 C560 202 640 130 800 146 C960 162 1050 96 1200 112 C1300 122 1350 100 1400 104" />
          <path d="M0 290 C200 274 300 226 480 240 C660 254 760 196 940 208 C1120 220 1240 176 1400 188" />
        </svg>

        <div className="absolute top-[150px] right-[8%] hidden text-right font-serif text-[19px] leading-[1.5] text-ink-100 italic opacity-[0.05] lg:block">
          Better questions
          <br />
          lead to better decisions.
        </div>
      </div>

      <div className="relative mx-auto max-w-[640px] text-center">
        <h2 className="text-[clamp(32px,4.6vw,54px)] leading-[1.08] font-light tracking-[-0.03em] text-ink-100">
          Build a better investment process.
        </h2>
        <p className="mt-6 text-[16.5px] text-ink-300">Learn. Research. Think. Review.</p>

        <div className="mt-10 flex justify-center">
          <CtaLink href={siteConfig.links.signUp} size="lg">
            Start for free
          </CtaLink>
        </div>

        <p className="mt-[18px] text-[12.5px] text-ink-600">No credit card required</p>
      </div>
    </Section>
  );
}
