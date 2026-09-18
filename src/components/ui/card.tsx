import { cn } from "@/lib/utils";

const tones = {
  /** Default panel used across marketing sections. */
  panel: "border-line-300 bg-surface-200",
  /** Slightly darker, for secondary/contextual blocks. */
  recessed: "border-line-200 bg-surface-100",
  /** Inner card sitting on top of a panel. */
  inset: "border-line-300 bg-surface-300",
  /** Highlighted state, e.g. the AI answer. */
  accent: "border-[#262c45] bg-surface-300",
  /** Something that needs the reader's attention. */
  caution: "border-[#2a2418] bg-surface-200",
} as const;

type CardProps = React.ComponentProps<"div"> & {
  tone?: keyof typeof tones;
};

export function Card({ tone = "panel", className, ...props }: CardProps) {
  return <div className={cn("rounded-[14px] border", tones[tone], className)} {...props} />;
}
