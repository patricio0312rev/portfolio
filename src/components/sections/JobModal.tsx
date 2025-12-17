import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from 'lucide-react';
import type { Job } from '@/types';
import { TechBadge } from '@/components/ui/TechBadge';
import { Button } from '@/components/ui/Button';
import { getDateRange, calculateDuration } from '@/utils/date';

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

export function JobModal({ job, onClose }: JobModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (job) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [job]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!job) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % job.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + job.images.length) % job.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl animate-slide-up"
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
                <p className="text-xl font-semibold text-sky-500 mb-2">{job.company}</p>
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
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {job.images.length > 0 && (
            <div className="mb-6">
              <div className="relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={job.images[currentImageIndex]}
                  alt={`${job.company} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
                
                {/* Navigation Arrows */}
                {job.images.length > 1 && (
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
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                      {currentImageIndex + 1} / {job.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {job.images.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {job.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                        idx === currentImageIndex
                          ? 'ring-2 ring-sky-500'
                          : 'opacity-60 hover:opacity-100'
                      }`}
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

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                  <span className="text-sky-500 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {job.achievements && job.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech) => (
                <TechBadge key={tech} techId={tech} variant="accent" />
              ))}
            </div>
          </div>

          {/* Actions */}
          {job.website && (
            <div className="flex justify-end">
              <Button
                variant="primary"
                href={job.website}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  window.open(job.website, '_blank');
                }}
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
