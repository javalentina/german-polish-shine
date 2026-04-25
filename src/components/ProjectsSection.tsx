import { useScrollReveal } from "@/hooks/useScrollReveal";
import concertHall from "@/assets/concert-hall.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const projects = [
    { title: t("projects.mozart.title"), description: t("projects.mozart.desc") },
    { title: t("projects.listening.title"), description: t("projects.listening.desc") },
    { title: t("projects.siesta.title"), description: t("projects.siesta.desc") },
    { title: t("projects.wachbrief.title"), description: t("projects.wachbrief.desc") },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={concertHall} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-6">
        <div className={`mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("projects.label")}</p>
          <h2 className="font-display text-4xl font-light md:text-5xl text-balance">{t("projects.title")}</h2>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className={`bg-background p-8 md:p-10 transition-colors hover:bg-secondary/30 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={isVisible ? { animationDelay: `${200 + i * 100}ms` } : undefined}>
              <h3 className="font-display text-2xl font-light mb-4 md:text-3xl">{project.title}</h3>
              <p className="font-body text-base leading-[1.75] text-foreground/80 text-pretty md:text-lg">{project.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 border border-border p-8 md:p-12 ${isVisible ? "animate-reveal-up delay-600" : "opacity-0"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">{t("projects.podcast")}</p>
          <h3 className="font-display text-3xl font-light mb-4 md:text-4xl">{t("projects.podcast.title")}</h3>
          <p className="font-body text-base leading-[1.75] text-foreground/80 mb-6 max-w-xl text-pretty md:text-lg">{t("projects.podcast.desc")}</p>
          <a href="https://m.youtube.com/@uchitelskaya_na_verande" target="_blank" rel="noopener noreferrer"
            className="font-body inline-block border-b border-primary/40 pb-1 text-sm tracking-[0.2em] uppercase text-primary transition-colors hover:border-primary">
            {t("projects.podcast.listen")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
