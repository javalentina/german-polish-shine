import { useScrollReveal } from "@/hooks/useScrollReveal";
import pianoHands from "@/assets/piano-hands.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BiographySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="biography" className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          <div className={`overflow-hidden ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img src={pianoHands} alt="Piano performance detail" className="w-full grayscale" loading="lazy" />
          </div>
          <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">{t("bio.label")}</p>
            <h2 className="font-display text-4xl font-light leading-[1.1] md:text-5xl text-balance mb-8">{t("bio.title")}</h2>
            <div className="space-y-5 font-body text-sm leading-relaxed text-muted-foreground text-pretty">
              <p>{t("bio.p1")}</p>
              <p>{t("bio.p2")}</p>
              <p>{t("bio.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
