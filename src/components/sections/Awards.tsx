import React, { useState } from 'react';
import { Trophy, ExternalLink, X } from 'lucide-react';
import type { Award } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface AwardsProps {
  awards: Award[];
}

export function Awards({ awards }: AwardsProps) {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedAward(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="awards" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 text-sm font-medium text-yellow-600 dark:text-yellow-400">
            <Trophy className="h-4 w-4" />
            <span>Recognition & Honors</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Recognition for academic excellence and professional contributions
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <article
              key={award.id}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:border-yellow-500/50 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedAward(award)}
            >
              {/* Image */}
              {award.images.length > 0 && (
                <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={award.images[0]}
                    alt={award.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <Badge variant="accent" className="mb-3">
                  {award.category}
                </Badge>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-sky-500 transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
                  {award.organization}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                  {new Date(award.date).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  {award.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Award Modal */}
        {selectedAward && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="sticky top-4 float-right z-10 mr-4 rounded-full bg-zinc-100 dark:bg-zinc-800 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <Badge variant="accent" className="mb-3">
                    {selectedAward.category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {selectedAward.title}
                  </h2>
                  <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                    {selectedAward.organization}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {new Date(selectedAward.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                {/* Images */}
                {selectedAward.images.length > 0 && (
                  <div className="mb-6">
                    <div className="relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-4">
                      <img
                        src={selectedAward.images[currentImageIndex]}
                        alt={`${selectedAward.title} ${currentImageIndex + 1}`}
                        className="w-full h-auto object-contain max-h-[500px]"
                      />
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedAward.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedAward.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                              idx === currentImageIndex
                                ? 'ring-2 ring-yellow-500'
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
                  <h3 className="text-lg font-semibold mb-2">About this Award</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {selectedAward.description}
                  </p>
                </div>

                {/* Link */}
                {selectedAward.link && (
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      href={selectedAward.link}
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        window.open(selectedAward.link, '_blank');
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read More
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
