import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const videos = [
  { id: "-_vjUDQgXnc", title: "Stravinsky. Piano Etude, Op. 7, No. 4", duration: "2:11" },
  { id: "iACDuizKOuM", title: "Reinecke. Flute Sonata Undine, Op. 167", duration: "22:12" },
  { id: "2jJdBfPofds", title: "Schumann. 6 Intermezzi, Op. 4", duration: "20:24" },
  { id: "MIKg-haJ5Ak", title: 'Joseph Achron "Hebrew Melody"', duration: "6:07" },
];

const VideosSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="bg-secondary/30 py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`mb-16 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">{t("videos.label")}</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">{t("videos.title")}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((video, i) => (
            <a key={video.id} href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-background transition-all duration-300 hover:shadow-[0_8px_30px_hsl(38_35%_58%/0.1)] active:scale-[0.98] ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={isVisible ? { animationDelay: `${200 + i * 100}ms` } : undefined}>
              <div className="relative aspect-video overflow-hidden">
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 backdrop-blur-sm">
                    <svg className="ml-1 h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-light leading-snug">{video.title}</p>
                <p className="font-body mt-2 text-xs text-muted-foreground tabular-nums">{video.duration}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? "animate-fade-in delay-700" : "opacity-0"}`}>
          <a href="https://m.youtube.com/@natalia_uchitel/videos" target="_blank" rel="noopener noreferrer"
            className="font-body inline-block border-b border-primary/40 pb-1 text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:border-primary">
            {t("videos.allOnYoutube")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
