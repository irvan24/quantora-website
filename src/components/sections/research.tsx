import { Card } from "@/components/ui/card";
import { Section, SplitLayout } from "@/components/ui/section";
import { TaskItem, type TaskState } from "@/components/ui/task-item";
import { CardLabel, Eyebrow } from "@/components/ui/typography";

const researchSteps: ReadonlyArray<{ label: string; state: TaskState }> = [
  { label: "Understand the business", state: "done" },
  { label: "Review financials", state: "done" },
  { label: "Define your assumptions", state: "current" },
  { label: "Identify risks", state: "todo" },
  { label: "Make your decision", state: "todo" },
];

const context = [
  { label: "Position", value: "Not held" },
  { label: "Your max single stock", value: "5%" },
  { label: "Semiconductor exposure", value: "7%" },
];

export function Research() {
  return (
    <Section id="research" className="pt-24 sm:pt-[170px]">
      <SplitLayout>
        <div className="flex min-w-0 flex-col gap-3.5">
          <Card className="p-[22px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-[34px] items-center justify-center rounded-[9px] bg-surface-500 text-xs font-semibold text-accent-soft"
              >
                N
              </span>
              <div>
                <div className="text-[15.5px] font-semibold text-ink-100">NVIDIA</div>
                <div className="text-[11.5px] tracking-[0.08em] text-ink-500">NVDA</div>
              </div>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <CardLabel>Your research</CardLabel>
              <div className="ml-auto text-[12.5px] text-ink-300">3 of 5 steps</div>
            </div>

            <div className="mt-4 flex flex-col gap-[11px]">
              {researchSteps.map((step) => (
                <TaskItem key={step.label} {...step} marker="dot" />
              ))}
            </div>

            <div className="mt-[18px] text-[13px] font-semibold text-accent-soft">
              Continue research →
            </div>
          </Card>

          <Card tone="recessed" className="px-[22px] py-5">
            <CardLabel>Where this fits</CardLabel>
            <div className="mt-3.5 auto-grid-120 gap-4">
              {context.map((item) => (
                <div key={item.label}>
                  <div className="text-[11.5px] text-ink-500">{item.label}</div>
                  <div className="mt-[5px] text-[13.5px] text-ink-100">{item.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="min-w-0">
          <Eyebrow>02 — Research</Eyebrow>
          <h2 className="mt-[22px] text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-light tracking-[-0.025em] text-ink-100">
            Research with a clear process.
          </h2>
          <p className="mt-5 max-w-[400px] text-[16.5px] leading-[1.6] text-ink-300">
            Know what to look for instead of getting lost in financial data.
          </p>
        </div>
      </SplitLayout>
    </Section>
  );
}
