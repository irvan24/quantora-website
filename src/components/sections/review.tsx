import { Card } from "@/components/ui/card";
import { WarningIcon } from "@/components/ui/icons";
import { Section, SplitLayout } from "@/components/ui/section";
import { ThesisHealthLegend } from "@/components/ui/status";
import { CardLabel, Eyebrow } from "@/components/ui/typography";

const comparison = [
  { label: "Your assumption", value: "Growth above 25%", tone: "text-ink-100" },
  { label: "Latest result", value: "21.4%", tone: "font-semibold text-caution" },
];

export function Review() {
  return (
    <Section id="review" className="pt-24 sm:pt-[150px]">
      <SplitLayout>
        <div className="flex min-w-0 flex-col gap-3.5">
          <Card tone="caution" className="p-[22px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-[30px] items-center justify-center rounded-lg bg-surface-500 text-[11.5px] font-semibold text-accent-soft"
              >
                N
              </span>
              <div className="text-[15px] font-semibold text-ink-100">NVIDIA</div>
              <CardLabel className="ml-auto tracking-[0.14em]">Thesis review</CardLabel>
            </div>

            <div className="mt-5 flex items-center gap-[9px] text-[13px] font-semibold text-caution">
              <WarningIcon className="shrink-0" />
              Assumption needs attention
            </div>

            <div className="mt-[18px] auto-grid-130 gap-4">
              {comparison.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[10px] border border-line-300 bg-surface-300 p-3.5"
                >
                  <div className="text-[11.5px] text-ink-500">{item.label}</div>
                  <div className={`mt-1.5 text-sm ${item.tone}`}>{item.value}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[13px] leading-[1.55] text-ink-300">
              Your original reasoning may need a review.
            </p>
            <div className="mt-4 text-[13px] font-semibold text-accent-soft">Review thesis →</div>
          </Card>

          <Card tone="recessed" className="flex flex-wrap items-center gap-[22px] px-[22px] py-5">
            <div>
              <CardLabel>Thesis health</CardLabel>
              <div className="mt-2 text-[34px] leading-none font-light text-ink-100">82</div>
            </div>

            <ThesisHealthLegend className="text-[12.5px]" />

            <p className="max-w-[190px] text-[11.5px] leading-[1.5] text-ink-600 sm:ml-auto">
              Measures how well you keep your reasoning up to date — not stock quality.
            </p>
          </Card>
        </div>

        <div className="min-w-0">
          <Eyebrow>05 — Monitor &amp; review</Eyebrow>
          <h2 className="mt-[22px] text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-light tracking-[-0.025em] text-ink-100">
            Your thesis doesn&apos;t end when you invest.
          </h2>
          <p className="mt-5 max-w-[400px] text-[16.5px] leading-[1.6] text-ink-300">
            When important facts change, Quantora brings your reasoning back into focus.
          </p>
        </div>
      </SplitLayout>
    </Section>
  );
}
