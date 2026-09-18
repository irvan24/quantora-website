import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent-strong font-semibold text-white hover:bg-accent-strong-hover",
  secondary:
    "border border-[#1e2228] bg-surface-300 font-medium text-ink-200 hover:bg-surface-400 hover:text-ink-100",
  header:
    "border border-[#4b5793]/12 bg-accent-deep font-semibold text-ink-100 hover:bg-accent-deep-hover hover:text-white",
} as const;

const sizes = {
  sm: "px-[18px] py-[9px] text-[13.5px]",
  md: "px-[27px] py-[14px] text-[14.5px]",
  lg: "px-8 py-[15px] text-[15px]",
} as const;

type CtaLinkProps = React.ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/**
 * Anchor-based CTA. The landing page only links to in-page sections and to the
 * product app, so `next/link` would add no routing benefit here.
 */
export function CtaLink({ variant = "primary", size = "md", className, ...props }: CtaLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full whitespace-nowrap transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
