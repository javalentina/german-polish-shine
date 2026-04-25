import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Img = { src: string; alt: string; cls: string };

const images: Img[] = [
  { src: g1, alt: "Natalia Uchitel performing on stage", cls: "md:col-span-4 md:row-span-2 aspect-[4/5]" },
  { src: g3, alt: "Concert hall with grand piano", cls: "md:col-span-5 aspect-[16/10]" },
  { src: g2, alt: "Pianist hands on keys", cls: "md:col-span-3 aspect-square" },
  { src: g6, alt: "Sheet music on grand piano", cls: "md:col-span-3 aspect-square" },
  { src: g5, alt: "Stage performance with audience", cls: "md:col-span-5 aspect-[16/10]" },
  { src: g4, alt: "Editorial portrait of pianist", cls: "md:col-span-4 aspect-[4/5]" },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const ref = useScrollReveal();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="relative bg-background py-32 md:py-40">
      <div className="container mx-auto max-w-7xl px-6">
        <div ref={ref} className="reveal mb-16 flex flex-col items-start gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body mb-4 text-[10px] tracking-[0.4em] uppercase text-primary">
              — {t("gallery.label")}
            </p>
            <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight text-foreground md:text-7xl">
              {t("gallery.title")}
            </h2>
          </div>
          <p className="font-body max-w-sm text-sm leading-relaxed text-foreground/60">
            {t("gallery.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-sm bg-card ${img.cls} reveal`}
              style={{ animationDelay: `${i * 80}ms` }}
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/40" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">
                  0{i + 1} / 0{images.length}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl animate-fade-in md:p-12"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-6 top-6 z-10 text-foreground/70 transition-colors hover:text-primary"
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl animate-scale-in"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-[10px] tracking-[0.4em] uppercase text-foreground/50">
            0{active + 1} — Natalia Uchitel
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
