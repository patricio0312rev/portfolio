import type { ReactNode } from "react";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
  checkedThumb?: ReactNode;
  uncheckedThumb?: ReactNode;
};

export function Switch({
  checked,
  onCheckedChange,
  disabled,
  "aria-label": ariaLabel = "Toggle",
  checkedThumb,
  uncheckedThumb,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={[
        "relative inline-flex h-7 w-12 items-center rounded-full",
        "transition-colors duration-200",
        checked ? "bg-sky-500" : "bg-zinc-200 dark:bg-zinc-700",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
        "ring-offset-white dark:ring-offset-zinc-900",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow",
          "transition-transform duration-200",
          checked ? "translate-x-5" : "translate-x-1",
        ].join(" ")}
      >
        <span className="text-zinc-700">
          {checked ? checkedThumb : uncheckedThumb}
        </span>
      </span>
    </button>
  );
}
