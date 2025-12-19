import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

export function FloatingContactMe() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const startEl = document.getElementById("floating-contact-start");
    const endEl = document.getElementById("floating-contact-end");

    if (!startEl || !endEl) {
      setVisible(false);
      return;
    }

    const compute = () => {
      rafRef.current = null;

      const startY = startEl.getBoundingClientRect().top + window.scrollY;
      const endY = endEl.getBoundingClientRect().top + window.scrollY;

      const y = window.scrollY;

      const showAfter = startY + 16;
      const hideBefore = endY - 120;

      setVisible(y >= showAfter && y < hideBefore);
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={[
        "fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:bottom-6 sm:w-auto",
        "transition-all duration-300 ease-out",
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-3",
      ].join(" ")}
      aria-hidden={!visible}
    >
      <Button
        href="#contact"
        variant="primary"
        size="sm"
        className={[
          "w-full sm:w-auto",
          "shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35",
        ].join(" ")}
        aria-label="Contact me"
      >
        Contact me
      </Button>
    </div>
  );
}
