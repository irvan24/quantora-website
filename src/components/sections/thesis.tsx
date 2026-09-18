import { Card } from "@/components/ui/card";
import { CheckIcon } from "@/components/ui/icons";
import { Pill } from "@/components/ui/pill";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status";
import { CardLabel, Eyebrow } from "@/components/ui/typography";

const conditions = [
  { label: "Data Center growth above 25%", met: true },
  { label: "Gross margin above 65%", met: true },
  { label: "Hyperscaler spending remains strong", met: false },
];

const risks = ["Competition", "Customer concentration", "AI spending slowdown"];

export function Thesis() {
  return (
    <Section id="thesis" className="pt-24 sm:pt-[170px]">
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>03 — Investment thesis</Eyebrow>
        <h2 className="mt-[22px] text-[clamp(30px,4vw,46px)] font-light tracking-[-0.025em] text-ink-100">
          Know why you&apos;re investing.
        </h2>
        <p className="mx-auto mt-5 max-w-[460px] text-[16.5px] leading-[1.6] text-ink-300">
          Turn your research into a clear investment thesis.
        </p>
      </div>

      <Card className="mx-auto mt-13 max-w-[940px] rounded-2xl p-[clamp(24px,3vw,38px)]">
        <div className="flex items-center gap-3 border-b border-line-300 pb-[22px]">
          <span
            aria-hidden="true"
            className="flex size-[30px] items-center justify-center rounded-lg bg-surface-500 text-[11.5px] font-semibold text-accent-soft"
          >
            N
          </span>
          <div className="text-[15px] font-semibold text-ink-100">NVIDIA thesis</div>
          <div className="ml-auto text-[11.5px] text-ink-500">Written 16 May</div>
        </div>

        <div className="mt-6 auto-grid-260 gap-[34px]">
          <div className="flex min-w-0 flex-col gap-[30px]">
            <div>
              <CardLabel>Why</CardLabel>
              <p className="mt-3 text-[18px] leading-[1.5] font-light text-pretty text-ink-100">
                AI infrastructure demand could support long-term Data Center growth.
              </p>
            </div>

            <div>
              <CardLabel>What needs to remain true</CardLabel>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {conditions.map((condition) => (
                  <div
                    key={condition.label}
                    className="flex items-center gap-2.5 text-[13.5px] text-ink-100"
                  >
                    {condition.met ? (
                      <CheckIcon className="shrink-0 text-positive" />
                    ) : (
                      <StatusDot tone="caution" className="mx-[2.5px] size-2" />
                    )}
                    {condition.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-[30px]">
            <div>
              <CardLabel>Risks</CardLabel>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {risks.map((risk) => (
                  <Pill key={risk}>{risk}</Pill>
                ))}
              </div>
            </div>

            <Card tone="inset" className="rounded-xl p-[18px]">
              <CardLabel>What would make me reconsider</CardLabel>
              <p className="mt-3 text-[14.5px] leading-[1.55] text-pretty text-ink-100">
                Data Center growth stays below 15% for two consecutive quarters.
              </p>
            </Card>
          </div>
        </div>
      </Card>
    </Section>
  );
}
