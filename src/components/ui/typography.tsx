import { cn } from "@/lib/utils";

/** Small uppercase label introducing a section. */
export function Eyebrow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-[11.5px] font-semibold tracking-[0.2em] text-ink-500 uppercase",
        className,
      )}
      {...props}
    />
  );
}

/** Even smaller uppercase label used inside cards and product mockups. */
export function CardLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-[10.5px] font-semibold tracking-[0.16em] text-ink-500 uppercase",
        className,
      )}
      {...props}
    />
  );
}

/** Serif italic accent used for the emphasised half of a headline. */
export function Accentuated({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span className={cn("font-serif font-light text-accent-light italic", className)} {...props} />
  );
}
