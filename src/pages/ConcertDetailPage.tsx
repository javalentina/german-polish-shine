import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Info, Ticket, FileText } from "lucide-react";
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

  const InfoCell = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: typeof Calendar;
    label: string;
    value: React.ReactNode;
  }) => (
    <div className="bg-background p-8">
      <div className="flex items-center gap-3 text-primary">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">{label}</span>
      </div>
      <div className="font-display mt-4 text-lg font-light leading-snug text-foreground/90">
        {value}
      </div>
    </div>
  );

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

      {/* Unified info card: When / Time / Where / Details + actions */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            <InfoCell icon={Calendar} label={t("concert.when")} value={concert.date} />
            <InfoCell
              icon={Clock}
              label={t("concert.time")}
              value={concert.time ?? "—"}
            />
            <InfoCell
              icon={MapPin}
              label={t("concert.where")}
              value={
                <>
                  <span className="block">{concert.venue}</span>
                  {concert.address && (
                    <span className="font-body mt-1 block text-xs tracking-wide text-muted-foreground">
                      {concert.address[lang]}
                    </span>
                  )}
                </>
              }
            />
            <InfoCell
              icon={Info}
              label={t("concert.details")}
              value={concert.details ? concert.details[lang] : "—"}
            />
          </div>

          {(concert.ticketUrl || concert.programUrl) && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {concert.ticketUrl && (
                <a
                  href={concert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Ticket className="h-4 w-4" strokeWidth={1.5} />
                  {t("concert.tickets")}
                </a>
              )}
              {concert.programUrl && (
                <a
                  href={concert.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body inline-flex items-center gap-3 border border-primary/40 px-8 py-4 text-[11px] tracking-[0.3em] uppercase text-primary transition-colors hover:border-primary"
                >
                  <FileText className="h-4 w-4" strokeWidth={1.5} />
                  {t("concert.programDownload")}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      {concert.description && (
        <>
          <SectionDivider variant="line" />
          <section className="py-24 md:py-32">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("concert.about")}
              </p>
              <p className="font-display text-2xl font-light italic leading-relaxed text-foreground/90 md:text-3xl">
                {concert.description[lang]}
              </p>
            </div>
          </section>
        </>
      )}

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

      {/* Videos */}
      {concert.videos && concert.videos.length > 0 && (
        <>
          <SectionDivider variant="line" />
          <section className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                {t("concert.videos")}
              </p>
              <h2 className="font-display text-4xl font-light mb-12 md:text-5xl">{t("concert.videosTitle")}</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {concert.videos.map((v, i) => (
                  <figure key={i} className="space-y-3">
                    <div className="aspect-video overflow-hidden bg-secondary/40">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.youtubeId}`}
                        title={v.title?.[lang] ?? `Video ${i + 1}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                    {v.title && (
                      <figcaption className="font-body text-sm text-foreground/70">
                        {v.title[lang]}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
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
