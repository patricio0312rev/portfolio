import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { PersonalProject } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { useModalLayoutPreference } from "@/hooks/useModalLayoutPreference";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LayoutModeToggle } from "../ui/LayoutModeToggle";

export function PersonalProjectModal({
  project,
  onClose,
}: {
  project: PersonalProject | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { mode, setMode } = useModalLayoutPreference("stacked");

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const effectiveMode = isDesktop ? mode : "stacked";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const images = useMemo(() => project?.images ?? [], [project]);
  const canNavigate = images.length > 1;

  const nextImage = () => {
    if (!images.length) return;
    setCurrentImageIndex((p) => (p + 1) % images.length);
  };

  const prevImage = () => {
    if (!images.length) return;
    setCurrentImageIndex((p) => (p - 1 + images.length) % images.length);
  };

  if (!mounted || !project) return null;

  const Gallery = images.length > 0 && (
    <div className="mb-2">
      <div className="relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={images[currentImageIndex]}
          alt={`${project.name} screenshot ${currentImageIndex + 1}`}
          className="w-full h-auto object-contain max-h-[520px]"
        />

        {canNavigate && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={[
                "h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden transition-all",
                idx === currentImageIndex
                  ? "ring-2 ring-sky-500"
                  : "opacity-60 hover:opacity-100",
              ].join(" ")}
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const Content = (
    <div className="min-w-0">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {project.bullets?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.bullets.map((b, idx) => (
              <li
                key={idx}
                className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
              >
                <span className="text-sky-500">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechBadge key={t} techId={t} variant="accent" />
          ))}
        </div>
      </div>

      {(project.website || project.readMore) && (
        <div className="flex flex-wrap justify-end gap-3">
          {project.readMore && (
            <Button
              variant="ghost"
              href={project.readMore}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Read more
            </Button>
          )}
          {project.website && (
            <Button
              variant="primary"
              href={project.website}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Open project
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl lg:max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-10 mr-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 overflow-hidden">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {project.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <LayoutModeToggle mode={effectiveMode} onChange={setMode} />
            </div>
          </div>

          {effectiveMode === "split" ? (
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <div className="min-w-0">{Content}</div>
              <div className="min-w-0">{Gallery}</div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>{Gallery}</div>
              <div>{Content}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
