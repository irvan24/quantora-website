import { cn } from "@/lib/utils";

type ProgressBarProps = {
  /** Completion between 0 and 100. */
  value: number;
  label: string;
  className?: string;
};

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-[5px] overflow-hidden rounded-full bg-line-300", className)}
    >
      <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}
