import { Section } from "@/components/ui/section";
import { StatusDot, type StatusTone } from "@/components/ui/status";

const milestones: ReadonlyArray<{
  date: string;
  label: string;
  tone: StatusTone;
  highlight: boolean;
}> = [
  { date: "May 12", label: "Research", tone: "neutral", highlight: false },
  { date: "May 16", label: "Thesis created", tone: "accent", highlight: true },
  { date: "May 20", label: "Invested", tone: "neutral", highlight: false },
  { date: "Aug 28", label: "Assumption changed", tone: "caution", highlight: true },
  { date: "Sep 02", label: "Thesis reviewed", tone: "positive", highlight: true },
];

export function History() {
  return (
    <Section className="pt-24 sm:pt-40">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <h2 className="text-[clamp(26px,3.2vw,36px)] font-light tracking-[-0.025em] text-ink-100">
            One investment. One clear history.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[14.5px] leading-[1.6] text-ink-500">
            Remember what you thought, what changed and why you decided.
          </p>
        </div>

        <ol className="mt-14 auto-grid-150 gap-6 border-t border-line-200 px-1 pt-[26px]">
          {milestones.map((milestone) => (
            <li key={milestone.date}>
              <StatusDot tone={milestone.tone} className="size-[9px]" />
              <div className="mt-3.5 text-[11.5px] text-ink-600">{milestone.date}</div>
              <div
                className={`mt-[5px] text-sm ${milestone.highlight ? "text-ink-100" : "text-ink-300"}`}
              >
                {milestone.label}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
