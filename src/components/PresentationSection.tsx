import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const VIDEO_ID = "zH1yMFPXq2M";

const PresentationSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="presentation"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className={`mb-12 text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-5">
            {t("presentation.label")}
          </p>
          <h2 className="font-display text-4xl font-light leading-[1.15] md:text-6xl text-balance">
            {t("presentation.title")}
          </h2>
          <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            {t("presentation.subtitle")}
          </p>
        </div>

        <div
          className={`relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-sm shadow-[0_30px_80px_-20px_hsl(38_35%_58%/0.25)] ring-1 ring-primary/20 ${
            isVisible ? "animate-reveal-up delay-300" : "opacity-0"
          }`}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Natalia Uchitel — Video Presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative h-full w-full"
              aria-label={t("presentation.play")}
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Natalia Uchitel video presentation"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary md:h-24 md:w-24">
                  <svg
                    className="ml-1.5 h-8 w-8 text-primary-foreground md:h-10 md:w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                  {t("presentation.watch")}
                </p>
                <p className="font-display text-xl font-light text-foreground md:text-2xl">
                  {t("presentation.cardTitle")}
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
