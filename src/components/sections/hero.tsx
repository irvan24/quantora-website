import { AppPreview } from "@/components/sections/app-preview";
import { CtaLink } from "@/components/ui/cta-link";
import { Accentuated, Eyebrow } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";

/** Faint financial artefacts floating behind the headline. Desktop only: they collide with copy on narrow screens. */
function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      <div className="absolute top-[70px] left-[6%] text-[13px] leading-[1.8] tracking-[0.02em] text-ink-100 opacity-[0.055]">
        <div>Revenue growth</div>
        <div className="text-3xl font-light">+18.4%</div>
      </div>

      <svg
        viewBox="0 0 320 90"
        width="320"
        height="90"
        fill="none"
        stroke="#ecece8"
        strokeWidth="1.4"
        className="absolute top-[186px] left-[5%] opacity-[0.05]"
      >
        <path d="M0 74 C40 70 56 40 88 46 C118 52 128 22 160 28 C196 35 208 12 244 18 C276 24 292 8 320 12" />
      </svg>

      <div className="absolute top-24 right-[7%] text-right text-[13px] leading-[1.8] text-ink-100 opacity-[0.055]">
        <div>Gross margin</div>
        <div className="text-3xl font-light">72%</div>
        <div className="mt-[22px]">Assumption</div>
        <div className="text-[17px]">Still holds</div>
      </div>

      <svg
        viewBox="0 0 260 120"
        width="260"
        height="120"
        fill="none"
        stroke="#ecece8"
        strokeWidth="1"
        className="absolute top-[300px] right-[4%] opacity-[0.04]"
      >
        <path d="M0 0v120M65 0v120M130 0v120M195 0v120M260 0v120M0 30h260M0 60h260M0 90h260" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-20 sm:px-8 sm:pt-[104px]">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-[860px] text-center">
        <Eyebrow>A more thoughtful way to invest</Eyebrow>

        <h1 className="mt-[26px] text-[clamp(40px,6.2vw,76px)] leading-[1.04] font-light tracking-[-0.03em] text-ink-100">
          Better thinking.
          <br />
          <Accentuated>Better investing.</Accentuated>
        </h1>

        <p className="mx-auto mt-7 max-w-[560px] text-[17.5px] leading-[1.6] text-pretty text-ink-300">
          Learn how investing works, research a company, and write down the reason behind every
          investment.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaLink href={siteConfig.links.signUp}>Start for free</CtaLink>
          <CtaLink href="#how" variant="secondary">
            See how it works
          </CtaLink>
        </div>

        <p className="mt-5 text-[12.5px] text-ink-600">No credit card required</p>
      </div>

      <div className="relative mx-auto mt-16 -mb-[120px] max-w-[1180px] px-1">
        <div
          aria-hidden="true"
          className="absolute top-[-30px] right-[8%] left-[8%] h-[260px] bg-[radial-gradient(60%_70%_at_50%_40%,rgba(75,87,168,0.22),rgba(10,11,12,0)_70%)] blur-[8px]"
        />
        <AppPreview />
      </div>
    </section>
  );
}
