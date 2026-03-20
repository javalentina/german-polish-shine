import { useScrollReveal } from "@/hooks/useScrollReveal";
import pianoHands from "@/assets/piano-hands.jpg";

const BiographySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="biography" className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          {/* Image */}
          <div className={`overflow-hidden ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img
              src={pianoHands}
              alt="Piano performance detail"
              className="w-full grayscale"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Biographie
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.1] md:text-5xl text-balance mb-8">
              Konzertpianistin, Pädagogin & Projektleiterin
            </h2>
            <div className="space-y-5 font-body text-sm leading-relaxed text-muted-foreground text-pretty">
              <p>
                Natalia Uchitel ist Konzertpianistin, Musikpädagogin und Leiterin eigener kreativer Projekte.
                Sie tritt regelmäßig in Russland, Deutschland, Italien, Israel, den USA, England, Estland,
                der Schweiz, Österreich u.A. auf.
              </p>
              <p>
                2019 schloss sie ihr Studium am St. Petersburger Konservatorium bei Prof. Peter Laul ab.
                2021 ergänzte Natalia dieses mit ihrem Aufbaustudium bei Inga Dzektser.
                Seit 2023 studiert sie an der Folkwang Universität der Künste in Essen bei Prof. Evgeny Sinaisky.
              </p>
              <p>
                2017 erhielt sie ein Diplom beim Robert-Schumann-Wettbewerb (Deutschland).
                2018 den 1. Platz beim Gummert-Wettbewerb. 2021: Grand Prix beim Kammermusikwettbewerb in Wolgograd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
