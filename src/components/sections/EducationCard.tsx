import { Badge } from "@/components/ui/Badge";
import { getDateRange } from "@/utils/date";
import type { Education } from "@/types";

export function EducationCard({
  edu,
  align,
}: {
  edu: Education;
  align: "left" | "right";
}) {
  return (
    <div
      className={[
        "group relative isolate overflow-hidden cursor-default",
        "rounded-2xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900 p-6",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/15",
        "before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300",
        "before:bg-gradient-to-br before:from-purple-500/10 before:to-sky-500/10",
        "hover:before:opacity-100",
      ].join(" ")}
    >
      {/* Header with Logo and Flag */}
      <div
        className={`flex items-start gap-4 mb-4 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 overflow-hidden">
          <img
            src={edu.institutionLogo}
            alt={edu.institution}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className={`flex-1 ${align === "right" ? "text-right" : ""}`}>
          <div
            className={`flex items-center gap-2 mb-2 ${
              align === "right" ? "justify-end" : ""
            }`}
          >
            <Badge variant="accent">{edu.type}</Badge>
            <span className="text-2xl">{edu.countryFlag}</span>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-purple-500 transition-colors">
            {edu.degree}
          </h3>

          <p className="text-sky-500 font-semibold mb-1">{edu.institution}</p>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {edu.location}, {edu.country}
          </p>
        </div>
      </div>

      {/* Date Range */}
      <div
        className={`mb-3 text-sm text-zinc-500 dark:text-zinc-500 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {getDateRange(edu.startDate, edu.endDate)}
      </div>

      {/* Description */}
      <p
        className={`text-zinc-600 dark:text-zinc-400 mb-4 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {edu.description}
      </p>

      {/* Achievements */}
      {edu.achievements && edu.achievements.length > 0 && (
        <ul className={`space-y-2 ${align === "right" ? "text-right" : ""}`}>
          {edu.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className={`text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2 ${
                align === "right" ? "flex-row-reverse" : ""
              }`}
            >
              <span className="text-purple-500 flex-shrink-0">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
