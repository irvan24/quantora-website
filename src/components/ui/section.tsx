import { cn } from "@/lib/utils";

/** Page section with the shared horizontal gutter. Vertical rhythm stays per-section. */
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("px-5 sm:px-8", className)} {...props} />;
}

/** Two-column layout used by the feature sections: copy on one side, product mock on the other. */
export function SplitLayout({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto auto-grid-320 max-w-[1140px] items-center gap-16", className)}
      {...props}
    />
  );
}
