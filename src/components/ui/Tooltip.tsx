import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  delayDuration?: number;
};

export function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 150,
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            align={align}
            sideOffset={8}
            className={[
              "z-[10000] select-none rounded-lg px-2.5 py-1.5 text-xs shadow-lg",
              "bg-zinc-900 text-white",
              "dark:bg-zinc-100 dark:text-zinc-900",
              "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out",
              "data-[state=delayed-open]:fade-in-0 data-[state=closed]:fade-out-0",
              "data-[state=delayed-open]:zoom-in-95 data-[state=closed]:zoom-out-95",
              "data-[side=top]:slide-in-from-bottom-1",
              "data-[side=bottom]:slide-in-from-top-1",
              "data-[side=left]:slide-in-from-right-1",
              "data-[side=right]:slide-in-from-left-1",
            ].join(" ")}
          >
            {content}
            <RadixTooltip.Arrow className="fill-zinc-900 dark:fill-zinc-100" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
