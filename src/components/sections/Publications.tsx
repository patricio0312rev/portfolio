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
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => window.open(pub.link, "_blank")}
              >
                {/* Image */}
                {pub.image && (
                  <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-sky-500 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                    {pub.authors.join(", ")}
                  </p>

                  {/* Journal & Date */}
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 mb-4">
                    <span className="font-medium">{pub.journal}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(pub.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Abstract */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                    {pub.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      window.open(pub.link, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Read Paper
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
