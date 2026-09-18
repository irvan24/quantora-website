import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type TaskState = "done" | "current" | "todo";

type TaskItemProps = {
  label: string;
  state: TaskState;
  /** Shape used for the current step: a ring (lessons) or a filled dot (research steps). */
  marker?: "ring" | "dot";
  /** Optional trailing text, e.g. an estimated duration. */
  meta?: string;
};

export function TaskItem({ label, state, marker = "ring", meta }: TaskItemProps) {
  if (state === "current") {
    return (
      <div className="flex items-center gap-[11px] rounded-[9px] border border-line-500 bg-surface-400 px-[13px] py-[11px] text-sm font-semibold text-ink-100">
        {marker === "ring" ? (
          <span
            aria-hidden="true"
            className="size-[13px] shrink-0 rounded-full border-2 border-accent"
          />
        ) : (
          <span aria-hidden="true" className="size-[9px] shrink-0 rounded-full bg-accent" />
        )}
        {label}
        {meta ? <span className="ml-auto text-xs font-normal text-ink-500">{meta}</span> : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-[11px] text-[13.5px]",
        state === "done" ? "text-ink-400" : "text-ink-600",
      )}
    >
      {state === "done" ? (
        <CheckIcon className="shrink-0 text-positive" />
      ) : (
        <span
          aria-hidden="true"
          className="size-[13px] shrink-0 rounded-full border-[1.5px] border-line-600"
        />
      )}
      {label}
      {meta ? <span className="ml-auto text-xs text-ink-500">{meta}</span> : null}
    </div>
  );
}
