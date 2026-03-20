import { useScrollReveal } from "@/hooks/useScrollReveal";
import concertHall from "@/assets/concert-hall.jpg";

const projects = [
  {
    title: "Von Mozart bis Jazz",
    description:
      "8 Benefiz-Lektüre-Konzerte in verschiedenen Sälen von St. Petersburg — eine Million Rubel für die Arbeit einer Nachtunterkunft gesammelt (2016–2018).",
  },
  {
    title: "Die Kunst des Zuhörens",
    description:
      "Live-Lektüre-Konzerte und Online-Vorträge zur Popularisierung klassischer Musik (seit 2018).",
  },
  {
    title: "Musik-Siesta",
    description:
      "Hörer liegen auf dem Boden mit Decken in akademischen Räumen und machen Übungen beim Hören klassischer Musik (seit 2022).",
  },
  {
    title: "Das Wachbrief",
    description:
      "Performance basierend auf den Werken von Boris Pasternak und Daniil Charms mit klassischer Musik.",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={concertHall} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-6">
        <div className={`mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Projekte
          </p>
          <h2 className="font-display text-4xl font-light md:text-5xl text-balance">
            Kreative & Bildungsprojekte
          </h2>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`bg-background p-8 md:p-10 transition-colors hover:bg-secondary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={isVisible ? { animationDelay: `${200 + i * 100}ms` } : undefined}
            >
              <h3 className="font-display text-2xl font-light mb-4">{project.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Podcast */}
        <div className={`mt-16 border border-border p-8 md:p-12 ${isVisible ? "animate-reveal-up delay-600" : "opacity-0"}`}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Podcast</p>
          <h3 className="font-display text-3xl font-light mb-4">Lehrerveranda</h3>
          <p className="font-body text-sm text-muted-foreground mb-6 max-w-lg text-pretty">
            Auf Yandex.Music, Apple Podcasts, Google Podcasts, Castbox, Soundstream und anderen Plattformen.
          </p>
          <a
            href="https://m.youtube.com/@uchitelskaya_na_verande"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-block border-b border-primary/40 pb-1 text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:border-primary"
          >
            Auf YouTube anhören →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
