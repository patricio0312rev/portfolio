import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import type { Job, JobProject } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { getDateRange, calculateDuration } from "@/utils/date";

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export function JobModal({ job, onClose }: JobModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (job) {
      setCurrentImageIndex(0);
      setActiveProjectId(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [job]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const activeProject: JobProject | null = useMemo(() => {
    if (!job || !activeProjectId) return null;
    return job.projects.find((p) => p.id === activeProjectId) ?? null;
  }, [activeProjectId, job]);

  const galleryImages = useMemo(() => {
    if (!job) return [];
    if (activeProject) {
      const pImgs = activeProject.images ?? [];
      if (pImgs.length > 0) return pImgs;
    }
    return job.images ?? [];
  }, [activeProject, job]);

  const canNavigate = galleryImages.length > 1;

  const nextImage = () => {
    if (!galleryImages.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (!galleryImages.length) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const openWebsite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!mounted || !job) return null;

  const viewTechnologies =
    activeProject?.technologies && activeProject.technologies.length > 0
      ? activeProject.technologies
      : job.technologies;

  const primaryWebsite = activeProject?.website || job.website;

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-10 mr-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 overflow-hidden">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {job.title}
                </h2>
                <p className="text-xl font-semibold text-sky-500 mb-2">
                  {job.company}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {getDateRange(job.startDate, job.endDate)}
                  </span>
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1">
                    {calculateDuration(job.startDate, job.endDate)}
                  </span>

                  <span className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 px-3 py-1 text-xs">
                    {activeProject ? "Project view" : "All projects"}
                  </span>
                </div>
              </div>
            </div>

            {/* Project switcher */}
            {job.projects.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  variant={activeProject ? "ghost" : "primary"}
                  size="sm"
                  onClick={() => {
                    setActiveProjectId(null);
                    setCurrentImageIndex(0);
                  }}
                >
                  All projects
                </Button>

                {job.projects.map((p) => {
                  const isActive = p.id === activeProjectId;
                  const count = p.images?.length ?? 0;

                  return (
                    <Button
                      key={p.id}
                      variant={isActive ? "primary" : "ghost"}
                      size="sm"
                      onClick={() => {
                        setActiveProjectId(p.id);
                        setCurrentImageIndex(0);
                      }}
                    >
                      {p.name}
                      {count > 0 && (
                        <span className="ml-2 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[11px]">
                          {count}
                        </span>
                      )}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ✅ Desktop layout: left content + right gallery */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* LEFT: content */}
            <div className="min-w-0">
              {/* About / Project Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  {activeProject ? activeProject.name : "About"}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400">
                  {activeProject
                    ? activeProject.summary ?? job.description
                    : job.description}
                </p>

                {/* Project bullets when focused */}
                {activeProject && activeProject.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {activeProject.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-sky-500 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Quick “back” when in project view */}
                {activeProject && (
                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setActiveProjectId(null);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back to all projects
                    </Button>
                  </div>
                )}
              </div>

              {/* All projects: show FULL info for every project */}
              {!activeProject && job.projects.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Projects</h3>

                  <div className="space-y-4">
                    {job.projects.map((project) => {
                      const pImages = project.images ?? [];

                      return (
                        <div
                          key={project.id}
                          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                {project.name}
                              </p>
                              {project.summary && (
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                  {project.summary}
                                </p>
                              )}
                            </div>

                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => {
                                setActiveProjectId(project.id);
                                setCurrentImageIndex(0);
                              }}
                            >
                              Focus
                            </Button>
                          </div>

                          {project.bullets.length > 0 ? (
                            <ul className="mt-3 space-y-2">
                              {project.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                                >
                                  <span className="text-sky-500 mt-1">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
                              Bullet points coming soon.
                            </p>
                          )}

                          {/* Project photos row (click switches the RIGHT gallery to this project) */}
                          {pImages.length > 0 && (
                            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                              {pImages.slice(0, 6).map((img, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setActiveProjectId(project.id);
                                    setCurrentImageIndex(idx);
                                  }}
                                  className="h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 hover:opacity-95"
                                  aria-label={`Open ${project.name} image ${
                                    idx + 1
                                  }`}
                                >
                                  <img
                                    src={img}
                                    alt={`${project.name} screenshot ${
                                      idx + 1
                                    }`}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                  />
                                </button>
                              ))}
                              {pImages.length > 6 && (
                                <div className="h-16 w-24 flex-shrink-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                  +{pImages.length - 6}
                                </div>
                              )}
                            </div>
                          )}

                          {project.technologies &&
                            project.technologies.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <TechBadge
                                    key={tech}
                                    techId={tech}
                                    variant="default"
                                  />
                                ))}
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Achievements (job-level only) */}
              {!activeProject &&
                job.achievements &&
                job.achievements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  {activeProject
                    ? "Technologies (Project)"
                    : "Technologies Used"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {viewTechnologies.map((tech) => (
                    <TechBadge key={tech} techId={tech} variant="accent" />
                  ))}
                </div>
              </div>

              {/* Actions */}
              {primaryWebsite && (
                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      openWebsite(primaryWebsite);
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </Button>
                </div>
              )}
            </div>

            {/* Gallery */}
            <div className="min-w-0">
              {galleryImages.length > 0 && (
                <div className="mb-2">
                  <div className="relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`${job.company} screenshot ${currentImageIndex + 1}`}
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
                          {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {galleryImages.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                      {galleryImages.map((image, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                            idx === currentImageIndex
                              ? "ring-2 ring-sky-500"
                              : "opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`Open image ${idx + 1}`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${idx + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
