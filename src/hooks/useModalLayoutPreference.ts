import { useCallback, useEffect, useState } from "react";
import type { ModalLayoutMode } from "@/components/ui/LayoutModeToggle";

const DEFAULT_STORAGE_KEY = "pm_modal_layout_mode";
const SYNC_EVENT = "pm:modal-layout-mode";

function isValidMode(value: unknown): value is ModalLayoutMode {
  return value === "stacked" || value === "split";
}

export function useModalLayoutPreference(
  defaultMode: ModalLayoutMode = "stacked",
  storageKey: string = DEFAULT_STORAGE_KEY
) {
  const [mode, setModeState] = useState<ModalLayoutMode>(() => {
    if (typeof window === "undefined") return defaultMode;

    try {
      const raw = window.localStorage.getItem(storageKey);
      if (isValidMode(raw)) return raw;
    } catch {
      // ignore
    }

    return defaultMode;
  });

  const setMode = useCallback(
    (next: ModalLayoutMode) => {
      setModeState(next);

      if (typeof window === "undefined") return;

      try {
        window.localStorage.setItem(storageKey, next);
      } catch {
        // ignore
      }

      // Let other mounted instances (other modals) sync immediately
      window.dispatchEvent(
        new CustomEvent(SYNC_EVENT, { detail: { key: storageKey, value: next } })
      );
    },
    [storageKey]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) return;
      if (!isValidMode(e.newValue)) return;
      setModeState(e.newValue);
    };

    const onSync = (e: Event) => {
      const ce = e as CustomEvent<{ key: string; value: ModalLayoutMode }>;
      if (!ce.detail || ce.detail.key !== storageKey) return;
      if (!isValidMode(ce.detail.value)) return;
      setModeState(ce.detail.value);
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(SYNC_EVENT, onSync);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(SYNC_EVENT, onSync);
    };
  }, [storageKey]);

  return { mode, setMode };
}
