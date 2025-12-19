import { useEffect, useRef, useState } from "react";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import type { Publication } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    if (publications.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("data-id");
          if (!id) return;

          setVisibleItems((prev) => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
          });
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [publications]);

  if (publications.length === 0) return null;

  return (
    <section id="publications" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
            <BookOpen className="h-4 w-4" />
            <span>Research &amp; Publications</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Publications &amp; <span className="gradient-text">Research</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Academic contributions and research papers
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {publications.map((pub, index) => {
            const isVisible = visibleItems.has(pub.id);

            return (
              <article
                key={pub.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(pub.id, el);
                  else itemRefs.current.delete(pub.id);
                }}
                data-id={pub.id}
                className={`group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => window.open(pub.link, "_blank")}
              >
                {/* Image */}
                {pub.image && (
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-green-100 to-sky-100 dark:from-green-900/20 dark:to-sky-900/20">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {pub.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Conference & Location */}
                  {pub.conference && (
                    <div className="mb-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {pub.conference}
                      </Badge>
                      {pub.location && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {pub.location}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(pub.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3 line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    <span className="font-medium">{pub.authors[0]}</span>
                    {pub.authors.length > 1 && (
                      <span className="text-zinc-500 dark:text-zinc-500">
                        {" "}
                        et al.
                      </span>
                    )}
                  </p>

                  {/* Journal */}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-1">
                    {pub.journal}
                  </p>

                  {/* Abstract */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.slice(0, 4).map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="outline"
                        className="text-xs"
                      >
                        {keyword}
                      </Badge>
                    ))}
                    {pub.keywords.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{pub.keywords.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Footer with DOI and Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        DOI: {pub.doi.split("/").slice(-2).join("/")}
                      </a>
                    )}

                    <div className="flex items-center gap-2 ml-auto">
                      {pub.pdfLink && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            window.open(pub.pdfLink, "_blank");
                          }}
                          className="text-xs h-8"
                        >
                          PDF
                        </Button>
                      )}
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          window.open(pub.link, "_blank");
                        }}
                        className="bg-gradient-to-r from-green-500 to-sky-500 hover:from-green-600 hover:to-sky-600 text-white border-0 text-xs h-8"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Paper
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
