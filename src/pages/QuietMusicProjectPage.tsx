import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";
import concertHall from "@/assets/concert-hall.jpg";
import piano from "@/assets/piano-hands.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const QuietMusicProjectPage = () => {
  const { lang, t } = useLanguage();

  const performers = [
    { name: "Natalia Uchitel", role: { de: "Klavier", en: "Piano" } },
    { name: "Ilya Izmaylov", role: { de: "Violoncello", en: "Cello" } },
    { name: "Daria Kakutyeva", role: { de: "Bewegungsspezialistin", en: "Movement specialist" } },
  ];

  const testimonials = [
    {
      name: "Natalia",
      role: { de: "Englischlehrerin", en: "English teacher" },
      text: {
        de: "Sehr ungewöhnliche und angenehme Eindrücke — musikalisch und körperlich. Die erste „musikalische\u201c Aufgabe wirkte therapeutisch — als hätte ich mit einem Psychologen gesprochen. Zwei Stunden vergingen wie im Flug.",
        en: "Very unusual and pleasant impressions — both musical and physical. The first \"musical\" task felt therapeutic — as if I had talked to a psychologist. Two hours flew by.",
      },
    },
    {
      name: "Asya",
      role: { de: "Theaterbloggerin", en: "Theatre blogger" },
      text: {
        de: "Während der Sitzung gehen Körper und Emotionen in Balance. Minimale Übungen und Aromatherapie holen dich ins Hier und Jetzt zurück, die Musik wiegt dich auf Wellen. Nach 1,5 Stunden bist du innerlich neu sortiert.",
        en: "During the session, your body and emotions come into balance. Minimal exercises and aromatherapy bring you back to the here and now, while the music rocks you on waves. After 1.5 hours you feel emotionally re-arranged.",
      },
    },
    {
      name: "Aleksandra",
      role: { de: "Sexologin", en: "Sexologist" },
      text: {
        de: "Klassische Musik und sanfte Bio-Gymnastik übertragen jedes Gefühl von Seele und Körper sehr klar. Phänomenal, grandios. Danke für die durchlebten Emotionen.",
        en: "Classical music combined with gentle bio-gymnastics conveys every feeling of body and soul very clearly. Phenomenal, magnificent. Thank you for the emotions I lived through.",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <TopNav />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <img src={concertHall} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
            {t("qm.label")}
          </p>
          <h1 className="font-display text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl text-balance">
            {t("qm.title")}
          </h1>
          <p className="font-display mt-8 max-w-2xl text-2xl font-light italic text-foreground/80 md:text-3xl">
            {t("qm.subtitle")}
          </p>
        </div>
      </section>

      <SectionDivider variant="ornament" />

      {/* Concept */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              {t("qm.concept.label")}
            </p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              {t("qm.concept.title")}
            </h2>
          </div>
          <div className="space-y-6 font-body text-lg leading-[1.8] text-foreground/85">
            <p>{t("qm.concept.p1")}</p>
            <p>{t("qm.concept.p2")}</p>
            <p>{t("qm.concept.p3")}</p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Video */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              {t("qm.video.label")}
            </p>
            <h2 className="font-display text-4xl font-light md:text-5xl">
              {t("qm.video.title")}
            </h2>
            <p className="font-body mt-5 max-w-2xl mx-auto text-base leading-[1.75] text-foreground/75 md:text-lg">
              {t("qm.video.subtitle")}
            </p>
          </div>

          <div className="relative overflow-hidden border border-border bg-secondary/20 shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Quiet Music — Music Siesta"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* How it goes */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              {t("qm.flow.label")}
            </p>
            <h2 className="font-display text-4xl font-light md:text-5xl">{t("qm.flow.title")}</h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-background p-8 md:p-10">
                <span className="font-display text-5xl font-light text-primary/60">0{n}</span>
                <h3 className="font-display mt-6 text-2xl font-light">
                  {t(`qm.flow.step${n}.title`)}
                </h3>
                <p className="font-body mt-3 text-base leading-[1.75] text-foreground/75">
                  {t(`qm.flow.step${n}.text`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-12 border-t border-border pt-10 text-center">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
                {t("qm.duration")}
              </p>
              <p className="font-display mt-2 text-2xl font-light">~ 1,5 {t("qm.hours")}</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
                {t("qm.format")}
              </p>
              <p className="font-display mt-2 text-2xl font-light">{t("qm.formatValue")}</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
                {t("qm.partner")}
              </p>
              <p className="font-display mt-2 text-2xl font-light">Studio Miras</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="ornament" />

      {/* Performers */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t("qm.performers.label")}
          </p>
          <h2 className="font-display text-4xl font-light mb-16 md:text-5xl">
            {t("qm.performers.title")}
          </h2>

          <div className="grid gap-12 sm:grid-cols-3">
            {performers.map((p) => (
              <div key={p.name} className="text-center">
                <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-primary/20">
                  <img src={piano} alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-2xl font-light">{p.name}</h3>
                <p className="font-body mt-2 text-sm tracking-[0.15em] uppercase text-primary/80">
                  {p.role[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 text-center">
            {t("qm.reviews.label")}
          </p>
          <h2 className="font-display text-4xl font-light mb-16 md:text-5xl text-center">
            {t("qm.reviews.title")}
          </h2>

          <div className="space-y-12">
            {testimonials.map((tst, i) => (
              <figure
                key={i}
                className="border-l-2 border-primary/40 pl-8 md:pl-12"
              >
                <blockquote className="font-display text-xl font-light italic leading-relaxed text-foreground/90 md:text-2xl">
                  „{tst.text[lang]}"
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-lg">{tst.name}</span>
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">
                    {tst.role[lang]}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <SectionDivider variant="ornament" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {t("qm.gallery.label")}
          </p>
          <h2 className="font-display text-4xl font-light mb-12 md:text-5xl">
            {t("qm.gallery.title")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[gallery1, gallery2, gallery3, concertHall, piano, gallery1].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img src={src} alt="" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            to="/#projects"
            className="font-body inline-block border-b border-primary/40 pb-1 text-[11px] tracking-[0.3em] uppercase text-primary transition-colors hover:border-primary"
          >
            ← {t("qm.back")}
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default QuietMusicProjectPage;
