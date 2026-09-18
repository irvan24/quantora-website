import { AssumptionChallenge } from "@/components/sections/assumption-challenge";
import { Section, SplitLayout } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/typography";

export function QuantoraAi() {
  return (
    <Section
      id="ai"
      className="relative mt-24 border-y border-line-100 bg-surface-100 py-20 sm:mt-[170px] sm:py-[120px]"
    >
      <SplitLayout className="gap-[70px]">
        <div className="min-w-0">
          <Eyebrow>04 — Quantora AI</Eyebrow>
          <h2 className="mt-[22px] text-[clamp(30px,4vw,48px)] leading-[1.1] font-light tracking-[-0.03em] text-ink-100">
            AI that challenges
            <br />
            your thinking.
          </h2>
          <p className="mt-[22px] max-w-[400px] font-serif text-[18px] leading-[1.5] font-light text-accent-light italic">
            Not one that tells you what to buy.
          </p>
          <p className="mt-[34px] max-w-[360px] text-[13.5px] leading-[1.6] text-ink-500">
            Quantora looks for blind spots. You make the decision.
          </p>
        </div>

        <AssumptionChallenge />
      </SplitLayout>
    </Section>
  );
}
