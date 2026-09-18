import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

/** Centered content column. Override the width with `max-w-*` when a section needs it. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[1140px]", className)} {...props} />;
}
