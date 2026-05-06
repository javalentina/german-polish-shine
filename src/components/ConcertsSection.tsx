import { useState } from "react";
import { Link } from "react-router-dom";
import { Film, Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { concerts, type Concert } from "@/data/concerts";

const ConcertsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t, lang } = useLanguage();
  const [showPast, setShowPast] = useState(false);

  const upcoming = concerts.filter((c) => c.upcoming);
  const past = concerts.filter((c) => !c.upcoming);

  // Future concert = elegant text row, no image (hasn't happened yet)
  const renderUpcoming = (c: Concert, i: number) => (
    <Link
      key={c.id}
      to={`/concerts/${c.id}`}
      className={`group flex flex-col gap-2 py-7 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-center sm:gap-0 sm:px-4 ${
        isVisible ? "animate-reveal-up" : "opacity-0"
      }`}
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

  // Past concert = visual recap card with image, video & gallery indicators
  const renderPast = (c: Concert, i: number) => {
    const hasVideos = !!c.videos?.length;
    const hasGallery = !!c.gallery?.length;
    return (
      <Link
        key={c.id}
        to={`/concerts/${c.id}`}
        className={`group block ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
        style={isVisible ? { animationDelay: `${150 + i * 80}ms` } : undefined}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
          {c.image && (
            <img
              src={c.image}
              alt={`${c.city} — ${c.venue}`}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          {/* Media badges */}
          {(hasVideos || hasGallery) && (
            <div className="absolute right-4 top-4 flex gap-2">
              {hasVideos && (
                <span className="flex items-center gap-1.5 bg-background/80 px-2.5 py-1 backdrop-blur-sm">
                  <Film className="h-3 w-3 text-primary" strokeWidth={1.5} />
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-foreground/80">
                    {t("concerts.video")}
                  </span>
                </span>
              )}
              {hasGallery && (
                <span className="flex items-center gap-1.5 bg-background/80 px-2.5 py-1 backdrop-blur-sm">
                  <Camera className="h-3 w-3 text-primary" strokeWidth={1.5} />
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-foreground/80">
                    {c.gallery!.length}
                  </span>
                </span>
              )}
            </div>
          )}

          {/* Caption inside image */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
              {c.date}
            </p>
            <h4 className="font-display text-2xl font-light leading-tight">{c.city}</h4>
            <p className="font-body mt-1 text-sm text-foreground/70">{c.venue}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section id="concerts" className="py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`mb-16 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t("concerts.label")}
          </p>
          <h2 className="font-display text-4xl font-light md:text-5xl">{t("concerts.upcoming")}</h2>
        </div>

        <div className="mx-auto max-w-4xl divide-y divide-border">
          {upcoming.map((c, i) => renderUpcoming(c, i))}
        </div>

        {past.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 flex items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary mb-1">
                  {lang === "de" ? "Rückblick" : "Recap"}
                </p>
                <h3 className="font-display text-2xl font-light md:text-3xl">{t("concerts.past")}</h3>
              </div>
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {past.map((c, i) => renderPast(c, i))}
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
