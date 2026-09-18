import { cn } from "@/lib/utils";

const sizes = {
  sm: { mark: "size-[22px] rounded-[7px] text-[11px]", label: "text-[10.5px] tracking-[0.16em]" },
  md: { mark: "size-6 rounded-[7px] text-xs", label: "text-[11.5px] tracking-[0.17em]" },
  lg: { mark: "size-[26px] rounded-lg text-[13px]", label: "text-[12.5px] tracking-[0.17em]" },
} as const;

type WordmarkProps = {
  size?: keyof typeof sizes;
  className?: string;
  labelClassName?: string;
};

export function Wordmark({ size = "lg", className, labelClassName }: WordmarkProps) {
  const preset = sizes[size];

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center bg-surface-600 font-semibold text-accent-soft",
          preset.mark,
        )}
      >
        Q
      </span>
      <span className={cn("font-semibold", preset.label, labelClassName)}>QUANTORA</span>
    </span>
  );
}
