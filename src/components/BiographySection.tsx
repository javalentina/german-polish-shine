import { useScrollReveal } from "@/hooks/useScrollReveal";
import pianoHands from "@/assets/piano-hands.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BiographySection = () => {
  const { ref: refIntro, isVisible: vIntro } = useScrollReveal();
  const { ref: refTimeline, isVisible: vTimeline } = useScrollReveal();
  const { ref: refBooks, isVisible: vBooks } = useScrollReveal();
  const { t } = useLanguage();

  const chapters = [
    { year: "1996", key: "early" },
    { year: "2019", key: "studies" },
    { year: "2021+", key: "career" },
    { year: "2022", key: "beyond" },
  ];

  const books = [
    { yearKey: "bio.book1.year", titleKey: "bio.book1.title", descKey: "bio.book1.desc" },
    { yearKey: "bio.book2.year", titleKey: "bio.book2.title", descKey: "bio.book2.desc" },
  ];

  return (
    <section id="biography" className="relative overflow-hidden py-28 md:py-36">
      {/* Decorative giant year */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-20 hidden select-none lg:block"
      >
        <span className="font-display text-[14rem] font-light leading-none text-primary/[0.04]">
          1996
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Intro: label + title + lead + quote + image */}
        <div
          ref={refIntro}
          className="grid items-start gap-12 md:grid-cols-12 md:gap-16"
        >
          <div
            className={`md:col-span-7 ${
              vIntro ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
                {t("bio.label")}
              </p>
            </div>
            <h2 className="font-display mt-6 text-4xl font-light leading-[1.1] text-balance md:text-6xl lg:text-7xl">
              {t("bio.title")}
            </h2>
            <p className="font-body mt-8 max-w-2xl text-lg leading-[1.75] text-foreground/80 md:text-xl">
              {t("bio.lead")}
            </p>

            <blockquote
              className={`mt-12 border-l-2 border-primary pl-6 ${
                vIntro ? "animate-reveal-up delay-300" : "opacity-0"
              }`}
            >
              <p className="font-display text-2xl italic leading-snug text-foreground/90 md:text-3xl">
                «{t("bio.quote")}»
              </p>
              <footer className="font-body mt-3 text-[11px] tracking-[0.3em] uppercase text-primary/80">
                — Natalia Uchitel
              </footer>
            </blockquote>
          </div>

          <div
            className={`md:col-span-5 ${
              vIntro ? "animate-fade-in delay-200" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <div className="absolute -left-3 -top-3 h-full w-full border border-primary/30" />
              <img
                src={pianoHands}
                alt="Hands of pianist Natalia Uchitel on the keys"
                className="relative h-full w-full object-cover grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={refTimeline}
          className="relative mt-28 md:mt-36"
        >
          <div className="mb-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-primary/20" />
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-primary">
              Werdegang · Career
            </p>
            <span className="h-px flex-1 bg-primary/20" />
          </div>

          <div className="relative">
            {/* Vertical line on md+ */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-[7.5rem] md:block" />

            <ol className="space-y-12 md:space-y-16">
              {chapters.map((c, i) => (
                <li
                  key={c.key}
                  className={`relative grid gap-4 md:grid-cols-[8rem_1fr] md:gap-12 ${
                    vTimeline ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={
                    vTimeline ? { animationDelay: `${i * 150}ms` } : undefined
                  }
                >
                  {/* Year column */}
                  <div className="relative flex items-center gap-4 md:block">
                    <span className="hidden h-3 w-3 rotate-45 bg-primary md:absolute md:left-[7.5rem] md:top-3 md:-translate-x-1/2 md:block" />
                    <p className="font-display text-3xl font-light text-primary md:text-4xl">
                      {c.year}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="md:pl-2">
                    <h3 className="font-display text-2xl font-light text-foreground md:text-3xl">
                      {t(`bio.chapter.${c.key}`)}
                    </h3>
                    <p className="font-body mt-4 max-w-2xl text-base leading-[1.8] text-foreground/75 md:text-lg">
                      {t(`bio.chapter.${c.key}.text`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Books */}
        <div
          ref={refBooks}
          className="mt-28 border-t border-primary/15 pt-16 md:mt-36"
        >
          <div
            className={`mb-10 flex items-end justify-between gap-6 ${
              vBooks ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <div>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
                {t("bio.books.label")}
              </p>
              <h3 className="font-display mt-3 text-3xl font-light md:text-4xl">
                {t("bio.books.label") === "Publications" ? "Books" : "Bücher"}
              </h3>
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2">
            {books.map((b, i) => (
              <article
                key={b.titleKey}
                className={`group relative overflow-hidden bg-background p-8 transition-colors hover:bg-card md:p-12 ${
                  vBooks ? "animate-reveal-up" : "opacity-0"
                }`}
                style={vBooks ? { animationDelay: `${200 + i * 150}ms` } : undefined}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-light text-primary md:text-6xl">
                    {t(b.yearKey)}
                  </span>
                  <span className="h-px flex-1 bg-primary/20" />
                </div>
                <h4 className="font-display mt-6 text-2xl font-light leading-snug md:text-3xl">
                  {t(b.titleKey)}
                </h4>
                <p className="font-body mt-4 text-base leading-[1.75] text-foreground/75 md:text-lg">
                  {t(b.descKey)}
                </p>

                {/* Decorative book icon */}
                <svg
                  className="absolute -bottom-4 -right-4 h-32 w-32 text-primary/[0.06] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H8a1 1 0 0 1 0-2h10v2Z" />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
