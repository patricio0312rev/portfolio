import { Columns, Rows } from "lucide-react";
import { Tooltip } from "@/components/ui/Tooltip";
import { SegmentedControl } from "@/components/ui/SegmentedControl";

export type ModalLayoutMode = "stacked" | "split";

type LayoutModeToggleProps = {
  mode: ModalLayoutMode;
  onChange: (mode: ModalLayoutMode) => void;
  className?: string;
};

export function LayoutModeToggle({
  mode,
  onChange,
  className,
}: LayoutModeToggleProps) {
  return (
    <div className={["hidden md:flex justify-end", className ?? ""].join(" ")}>
      <SegmentedControl<ModalLayoutMode>
        value={mode}
        onChange={onChange}
        aria-label="Modal layout mode"
        toggleOnContainerClick
        options={[
          {
            value: "stacked",
            label: "Stacked view",
            icon: (
              <Tooltip content="Stacked view">
                <span className="inline-flex">
                  <Rows className="h-3.5 w-3.5" />
                </span>
              </Tooltip>
            ),
          },
          {
            value: "split",
            label: "Side-by-side view",
            icon: (
              <Tooltip content="Side-by-side view">
                <span className="inline-flex">
                  <Columns className="h-3.5 w-3.5" />
                </span>
              </Tooltip>
            ),
          },
        ]}
      />
    </div>
  );
}
