import { useMemo } from "react";

type SegmentedOption<T extends string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type SegmentedControlProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: Array<SegmentedOption<T>>;
  className?: string;
  "aria-label"?: string;

  /**
   * If there are exactly 2 options, clicking anywhere on the control toggles.
   * Defaults to true for 2 options.
   */
  toggleOnContainerClick?: boolean;
};

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
  className,
  "aria-label": ariaLabel = "Segmented control",
  toggleOnContainerClick,
}: SegmentedControlProps<T>) {
  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        options.findIndex((o) => o.value === value)
      ),
    [options, value]
  );

  const count = Math.max(1, options.length);
  const indicatorWidth = 100 / count;
  const indicatorLeft = activeIndex * indicatorWidth;

  const shouldToggleOnContainer =
    typeof toggleOnContainerClick === "boolean"
      ? toggleOnContainerClick
      : count === 2;

  const toggle = () => {
    if (count !== 2) return;

    const a = options[0];
    const b = options[1];
    if (!a || !b) return;

    // If one option is disabled, don't toggle into it
    const next = value === a.value ? b : a;
    if (next.disabled) return;

    onChange(next.value);
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      onClick={() => {
        if (shouldToggleOnContainer) toggle();
      }}
      className={[
        "relative inline-grid select-none",
        "grid-flow-col auto-cols-fr",
        "p-0.5",
        "border border-zinc-200 dark:border-zinc-800",
        "bg-zinc-50/70 dark:bg-zinc-900/50",
        "rounded-md",
        "cursor-pointer",
        className ?? "",
      ].join(" ")}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {/* Active indicator (fixed positioning) */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-y-0.5",
          "rounded-[6px]",
          "bg-white dark:bg-zinc-950",
          "shadow-sm",
          "transition-all duration-200",
          "will-change-[left,width]",
        ].join(" ")}
        style={{
          width: `${indicatorWidth}%`,
          left: `${indicatorLeft}%`,
        }}
      />

      {options.map((opt) => {
        const isActive = opt.value === value;
        const isDisabled = !!opt.disabled;

        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={opt.label}
            disabled={isDisabled}
            onClick={(e) => {
              // prevent container onClick from firing twice
              e.stopPropagation();

              // still allow "toggle" behavior even when clicking active segment:
              // if 2 options, flip; otherwise select clicked option.
              if (count === 2 && shouldToggleOnContainer) {
                toggle();
                return;
              }

              if (!isDisabled) onChange(opt.value);
            }}
            className={[
              "relative z-10",
              "inline-flex items-center justify-center gap-1.5",
              "h-8 px-2",
              "rounded-[6px]",
              "text-[13px] font-medium",
              "transition-colors duration-200",
              isActive
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100",
              isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
              "ring-offset-white dark:ring-offset-zinc-900",
            ].join(" ")}
          >
            {opt.icon ? (
              <span className="inline-flex items-center justify-center">
                {opt.icon}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
