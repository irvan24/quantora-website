import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Section, SplitLayout } from "@/components/ui/section";
import { TaskItem, type TaskState } from "@/components/ui/task-item";
import { CardLabel, Eyebrow } from "@/components/ui/typography";

const lessons: ReadonlyArray<{ label: string; state: TaskState; meta?: string }> = [
  { label: "Risk & return", state: "done" },
  { label: "Compound interest", state: "done" },
  { label: "Inflation", state: "done" },
  { label: "Volatility", state: "done" },
  { label: "Diversification", state: "current", meta: "4 min" },
  { label: "Liquidity", state: "todo" },
  { label: "Real returns", state: "todo" },
];

export function Learn() {
  return (
    <Section id="learn" className="pt-24 sm:pt-[170px]">
      <SplitLayout>
        <div className="min-w-0">
          <Eyebrow>01 — Learn</Eyebrow>
          <h2 className="mt-[22px] text-[clamp(28px,3.4vw,40px)] leading-[1.15] font-light tracking-[-0.025em] text-ink-100">
            Learn as you invest.
          </h2>
          <p className="mt-5 max-w-[400px] text-[16.5px] leading-[1.6] text-ink-300">
            Short lessons that explain what you need, when you need it.
          </p>
          <p className="mt-7 max-w-[360px] text-[13.5px] leading-[1.6] text-ink-500">
            Learn a concept, then see how it applies to your own research.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-3.5">
          <Card className="p-[22px]">
            <CardLabel>Your learning path</CardLabel>

            <div className="mt-4 flex items-baseline gap-3">
              <div className="text-[16.5px] font-semibold text-ink-100">Investing foundations</div>
              <div className="ml-auto text-[13px] text-accent-soft">60%</div>
            </div>
            <ProgressBar value={60} label="Investing foundations progress" className="mt-3" />

            <div className="mt-[18px] flex flex-col gap-[11px]">
              {lessons.map((lesson) => (
                <TaskItem key={lesson.label} {...lesson} />
              ))}
            </div>
          </Card>

          <Card className="flex flex-wrap items-center gap-[18px] px-[22px] py-5">
            <div className="min-w-0">
              <CardLabel>Useful right now</CardLabel>
              <div className="mt-[9px] text-[15px] font-semibold text-ink-100">Gross margin</div>
              <div className="mt-[5px] text-[12.5px] text-ink-300">
                For your NVIDIA research · 3 min
              </div>
            </div>
            <span className="ml-auto text-[13px] font-semibold text-accent-soft">Learn →</span>
          </Card>
        </div>
      </SplitLayout>
    </Section>
  );
}
