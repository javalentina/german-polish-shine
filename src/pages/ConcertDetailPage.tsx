import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getConcertById } from "@/data/concerts";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const ConcertDetailPage = () => {
  const { id = "" } = useParams();
  const { lang, t } = useLanguage();
  const concert = getConcertById(id);

  if (!concert) {
    return (
      <main className="min-h-screen bg-background">
        <TopNav />
        <div className="mx-auto max-w-3xl px-6 py-40 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">404</p>
          <h1 className="font-display text-4xl font-light mb-8">{t("concert.notFound")}</h1>
          <Link to="/" className="font-body text-[11px] tracking-[0.3em] uppercase text-primary border-b border-primary/40 pb-1">
            {t("concert.back")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <TopNav />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {concert.image && (
          <img src={concert.image} alt={concert.venue} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            {concert.upcoming ? t("concerts.upcoming") : t("concerts.past")} · {concert.date}
          </p>
          <h1 className="font-display text-5xl font-light md:text-7xl">{concert.city}</h1>
          <p className="font-body mt-4 text-xl text-foreground/80">{concert.venue}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          {concert.description && (
            <p className="font-display text-2xl font-light italic leading-relaxed text-foreground/90 md:text-3xl">
              {concert.description[lang]}
            </p>
          )}
        </div>
      </section>

      {/* Program */}
      {concert.program && concert.program.length > 0 && (
        <>
          <SectionDivider variant="ornament" />
          <section className="py-24 md:py-32">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("concert.program")}
              </p>
              <h2 className="font-display text-4xl font-light mb-12 md:text-5xl">{t("concert.programTitle")}</h2>
              <ul className="divide-y divide-border">
                {concert.program.map((p, i) => (
                  <li key={i} className="flex gap-6 py-6">
                    <span className="font-body text-sm tracking-[0.2em] text-primary/70 pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-light md:text-2xl">{p[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      {/* Gallery */}
      {concert.gallery && concert.gallery.length > 0 && (
        <>
          <SectionDivider variant="line" />
          <section className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("concert.impressions")}
              </p>
              <h2 className="font-display text-4xl font-light mb-12 md:text-5xl">{t("concert.impressionsTitle")}</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {concert.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden">
                    <img src={src} alt="" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Back link */}
      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            to="/#concerts"
            className="font-body inline-block border-b border-primary/40 pb-1 text-[11px] tracking-[0.3em] uppercase text-primary transition-colors hover:border-primary"
          >
            ← {t("concert.backToList")}
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default ConcertDetailPage;
