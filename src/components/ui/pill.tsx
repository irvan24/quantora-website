import { cn } from "@/lib/utils";

/** Rounded tag used for risks and monitoring topics. */
export function Pill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "rounded-full border border-line-500 bg-surface-400 px-[13px] py-1.5 text-[12.5px] text-ink-200",
        className,
      )}
      {...props}
    />
  );
}
