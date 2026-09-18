import { CardLabel } from "@/components/ui/typography";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusDot, ThesisHealthLegend } from "@/components/ui/status";
import { Wordmark } from "@/components/ui/wordmark";

const navGroups = [
  { title: "Your journey", items: [{ label: "My Plan" }, { label: "Learn" }] },
  { title: "Invest", items: [{ label: "Research" }, { label: "Portfolio" }] },
  { title: "Reflect", items: [{ label: "Theses", badge: "1" }, { label: "Journal" }] },
];

const summaryCards = [
  { label: "My plan", value: "On track", hint: "Next review March 2027" },
  { label: "Discipline", value: "4 months", hint: "4 of 4 decisions followed your rules" },
  { label: "Next contribution", value: "€300", hint: "In 8 days" },
];

const brokenAssumptions = [
  { tone: "critical", claim: "Operating margin stays above 24%", reality: "21.6% reported" },
  { tone: "caution", claim: "China revenue returns to growth", reality: "−3% y/y" },
] as const;

const holdings = [
  { name: "NVIDIA", weight: "4.2%", trend: "M0 13 12 10 22 12 34 5 44 7 60 2", rising: true },
  { name: "LVMH", weight: "3.1%", trend: "M0 4 12 6 22 5 34 10 44 9 60 13", rising: false },
  {
    name: "MSCI World ETF",
    weight: "62%",
    trend: "M0 12 12 11 22 8 34 9 44 5 60 3",
    rising: true,
  },
];

/**
 * Static mock of the product dashboard. Exposed as a single labelled image so
 * assistive technology gets the gist instead of a wall of fake data.
 */
export function AppPreview() {
  return (
    <div
      role="img"
      aria-label="The Quantora dashboard: one next action, the health of your investment theses and your current holdings."
      className="relative overflow-hidden rounded-t-2xl border border-line-400 bg-surface-100 shadow-[0_-10px_60px_rgba(0,0,0,.6)]"
    >
      <div className="flex min-h-[520px]">
        <aside className="hidden w-[196px] shrink-0 flex-col gap-5 border-r border-line-200 bg-[#0a0c0e] px-3 py-5 md:flex">
          <Wordmark size="sm" className="px-1.5" />

          <div className="rounded-lg bg-surface-500 px-2.5 py-2 text-[12.5px] font-semibold text-ink-100">
            Home
          </div>

          {navGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-[3px]">
              <div className="px-2.5 pb-1.5 text-[9.5px] font-semibold tracking-[0.16em] text-ink-700 uppercase">
                {group.title}
              </div>
              {group.items.map((item) => (
                <div key={item.label} className="flex px-2.5 py-[7px] text-[12.5px] text-ink-300">
                  {item.label}
                  {"badge" in item && item.badge ? (
                    <span className="ml-auto font-semibold text-critical">{item.badge}</span>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-[18px] px-5 pt-6 pb-8 sm:px-7">
          <div>
            <div className="text-[22px] font-light tracking-[-0.02em] text-ink-100">
              Good evening, Irvan.
            </div>
            <div className="mt-[7px] text-[13px] text-ink-300">
              One thing needs your thinking today. Nothing else is urgent.
            </div>
          </div>

          <div className="auto-grid-150 gap-3">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[11px] border border-line-300 bg-surface-300 px-[15px] py-3.5"
              >
                <div className="text-[11px] text-ink-500">{card.label}</div>
                <div className="mt-2 text-[15px] font-semibold text-ink-100">{card.value}</div>
                <div className="mt-[5px] text-[11.5px] text-ink-500">{card.hint}</div>
              </div>
            ))}
          </div>

          <div className="auto-grid-260 gap-3">
            <div className="rounded-[11px] border border-line-300 bg-surface-300 px-[18px] pt-[18px] pb-4">
              <CardLabel className="tracking-[0.1em]">Next action</CardLabel>
              <div className="mt-[9px] text-[17px] font-semibold text-ink-100">
                Review your LVMH thesis
              </div>
              <div className="mt-[7px] text-[12.5px] leading-[1.55] text-ink-300">
                Q3 results landed. Two assumptions you wrote no longer match reality.
              </div>

              <div className="mt-3.5 flex flex-col gap-2.5">
                {brokenAssumptions.map((item) => (
                  <div key={item.claim} className="flex items-start gap-[9px]">
                    <StatusDot tone={item.tone} className="mt-[5px] size-[7px]" />
                    <div>
                      <div className="text-[12.5px] font-medium text-ink-100">{item.claim}</div>
                      <div className="text-[11.5px] text-ink-500">{item.reality}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3.5">
                <span className="rounded-full bg-accent-strong px-4 py-2 text-[12.5px] font-semibold text-white">
                  Review thesis
                </span>
                <span className="text-xs text-accent-soft">Ask Quantora to challenge it</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 rounded-[11px] border border-line-300 bg-surface-300 p-[18px]">
              <CardLabel className="tracking-[0.1em]">Thesis health</CardLabel>

              <div className="flex items-center gap-[18px]">
                <div className="relative size-[86px] shrink-0">
                  <svg viewBox="0 0 86 86" className="block size-full -rotate-90">
                    <circle cx="43" cy="43" r="37" fill="none" stroke="#1a1e23" strokeWidth="7" />
                    <circle
                      cx="43"
                      cy="43"
                      r="37"
                      fill="none"
                      stroke="#6b7bd6"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray="190 232"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-light text-ink-100">82</div>
                    <div className="text-[10px] text-ink-500">Healthy</div>
                  </div>
                </div>
                <ThesisHealthLegend />
              </div>

              <div className="flex flex-col gap-2.5 border-t border-line-300 pt-3">
                <CardLabel className="tracking-[0.1em]">Holdings</CardLabel>
                {holdings.map((holding) => (
                  <div
                    key={holding.name}
                    className="flex items-center gap-2.5 text-[12.5px] text-ink-100"
                  >
                    <span className="flex-1">{holding.name}</span>
                    <svg
                      viewBox="0 0 60 16"
                      width="60"
                      height="16"
                      fill="none"
                      stroke={holding.rising ? "#6b7bd6" : "#6c727b"}
                      strokeWidth="1.4"
                      aria-hidden="true"
                    >
                      <path d={holding.trend} />
                    </svg>
                    <span className="w-[46px] text-right text-ink-300">{holding.weight}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-line-300 pt-3">
                <CardLabel className="tracking-[0.1em]">Continue learning</CardLabel>
                <div className="mt-[9px] text-[12.5px] text-ink-100">Diversification</div>
                <ProgressBar
                  value={60}
                  label="Diversification lesson progress"
                  className="mt-[7px] h-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 bg-gradient-to-b from-transparent to-base to-[88%]" />
    </div>
  );
}
