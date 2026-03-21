import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const concerts = [
  { date: "12. März", city: "Sankt-Petersburg", venue: "Philharmonic Hall" },
  { date: "9. Februar", city: "Sankt-Petersburg", venue: "Myasnikov Mansion" },
  { date: "2. Februar", city: "Duisburg", venue: "Folkwang Universität der Künste" },
  { date: "7. Januar", city: "Wien", venue: "Brahms-Salon" },
  { date: "25. Dezember", city: "Moskau", venue: "Haus der Dichter" },
  { date: "4. Dezember", city: "Hamburg", venue: "LMN Concert" },
  { date: "21. September", city: "Lübeck", venue: "Brahms Institut" },
];

const ConcertsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="concerts" className="py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        <div className={`mb-16 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{t("concerts.label")}</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">{t("concerts.title")}</h2>
        </div>

        <div className="divide-y divide-border">
          {concerts.map((concert, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-2 py-6 transition-colors hover:bg-secondary/30 sm:flex-row sm:items-center sm:gap-0 sm:px-4 cursor-pointer ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={isVisible ? { animationDelay: `${150 + i * 80}ms` } : undefined}
            >
              <span className="font-body w-36 text-xs tracking-[0.15em] uppercase text-primary shrink-0">{concert.date}</span>
              <span className="font-display text-xl font-light md:text-2xl flex-1">{concert.city}</span>
              <span className="font-body text-sm text-muted-foreground">{concert.venue}</span>
              <svg className="ml-4 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;
