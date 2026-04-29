import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { concerts } from "@/data/concerts";

const ConcertsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const [showPast, setShowPast] = useState(false);

  const upcoming = concerts.filter((c) => c.upcoming);
  const past = concerts.filter((c) => !c.upcoming);

  const renderRow = (c: (typeof concerts)[number], i: number, dim = false) => (
    <Link
      key={c.id}
      to={`/concerts/${c.id}`}
      className={`group flex flex-col gap-2 py-7 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-center sm:gap-0 sm:px-4 ${
        dim ? "opacity-70 hover:opacity-100" : ""
      } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
      style={isVisible ? { animationDelay: `${150 + i * 60}ms` } : undefined}
    >
      <span className="font-body w-44 text-sm tracking-[0.15em] uppercase text-primary shrink-0">
        {c.date}
      </span>
      <span className="font-display text-2xl font-light md:text-3xl flex-1">{c.city}</span>
      <span className="font-body text-base text-foreground/75">{c.venue}</span>
      <svg
        className="ml-4 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 hidden sm:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </Link>
  );

  return (
    <section id="concerts" className="py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        <div className={`mb-16 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t("concerts.label")}
          </p>
          <h2 className="font-display text-4xl font-light md:text-5xl">{t("concerts.upcoming")}</h2>
        </div>

        <div className="divide-y divide-border">
          {upcoming.map((c, i) => renderRow(c, i))}
        </div>

        {past.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
              <h3 className="font-display text-2xl font-light md:text-3xl">{t("concerts.past")}</h3>
              <button
                onClick={() => setShowPast((v) => !v)}
                className="font-body text-[11px] tracking-[0.25em] uppercase text-primary transition-colors hover:text-primary/70"
              >
                {showPast ? t("concerts.hide") : `${t("concerts.show")} (${past.length})`}
              </button>
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                showPast ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="divide-y divide-border">
                  {past.map((c, i) => renderRow(c, i, true))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConcertsSection;
