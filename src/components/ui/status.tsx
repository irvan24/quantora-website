import { cn } from "@/lib/utils";

const tones = {
  positive: "bg-positive",
  caution: "bg-caution",
  critical: "bg-critical",
  accent: "bg-accent",
  neutral: "bg-line-600",
} as const;

export type StatusTone = keyof typeof tones;

export function StatusDot({ tone, className }: { tone: StatusTone; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("size-1.5 shrink-0 rounded-full", tones[tone], className)}
    />
  );
}

const thesisHealth = [
  { tone: "positive", label: "6 stable" },
  { tone: "caution", label: "2 monitoring" },
  { tone: "critical", label: "1 challenged" },
] as const satisfies ReadonlyArray<{ tone: StatusTone; label: string }>;

/** Breakdown shown next to the thesis health score, in the hero mock and the review section. */
export function ThesisHealthLegend({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[7px] text-xs text-ink-300", className)}>
      {thesisHealth.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <StatusDot tone={item.tone} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
