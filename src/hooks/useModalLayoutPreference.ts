import { useEffect, useState } from "react";

export type ModalLayoutMode = "stacked" | "split";

const STORAGE_KEY = "modal_layout_mode";

export function useModalLayoutPreference(defaultValue: ModalLayoutMode = "stacked") {
  const [mode, setMode] = useState<ModalLayoutMode>(defaultValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "stacked" || raw === "split") setMode(raw);
    } catch {
      console.error("Error getting modal layout preference from localStorage");
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      console.error("Error setting modal layout preference to localStorage");
    }
  }, [mode, hydrated]);

  return { mode, setMode, hydrated };
}
