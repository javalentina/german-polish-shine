import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Mail, Phone, MapPin, GraduationCap, Award, BookOpen, Music, Users, Globe } from "lucide-react";
import TopNav from "@/components/TopNav";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";
import { useLanguage } from "@/contexts/LanguageContext";

const ResumePage = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tx = (de: string, en: string) => (lang === "de" ? de : en);

  const experience = [
    { years: "2023 – " + tx("heute", "present"), place: "Studio Lübeck" },
    { years: "2023 – 2024", place: tx("Hamburger Musicum, Hamburg", "Hamburger Musicum, Hamburg") },
    { years: "2017 – 2023", place: tx("Glinka-Hochschule für besonders begabte Kinder, St. Petersburg", "Glinka School for Specially Gifted Children, St. Petersburg") },
    { years: "2015 – 2017", place: tx("11. Musikschule, St. Petersburg", "Music School No. 11, St. Petersburg") },
  ];

  const awards = [
    { year: "2021", text: tx("Slonimsky-Wettbewerb, Wolgograd — Grand Prix", "Slonimsky Competition, Volgograd — Grand Prix") },
    { year: "2018", text: tx("Gummert-Wettbewerb, Kasan — 1. Preis", "Gummert Competition, Kazan — 1st Prize") },
    { year: "2017", text: tx("Robert-Schumann-Wettbewerb, Düsseldorf — Diplom", "Robert Schumann Competition, Düsseldorf — Diploma") },
  ];

  const education = [
    {
      years: "2023 – 2025",
      school: tx("Folkwang Universität der Künste", "Folkwang University of the Arts"),
      detail: tx("Hauptfach Klavierduo · Klasse Prof. Evgeny Sinaisky", "Major Piano Duo · Class of Prof. Evgeny Sinaisky"),
    },
    {
      years: "2019 – 2021",
      school: tx("Konservatorium „Nikolai Rimski-Korsakow", "Rimsky-Korsakov Conservatory"),
      detail: tx("Konzertexamen · Kammermusik · Klasse Prof. Inga Dzekzer", "Konzertexamen · Chamber Music · Class of Prof. Inga Dzektser"),
    },
    {
      years: "2014 – 2019",
      school: tx("Konservatorium „Nikolai Rimski-Korsakow", "Rimsky-Korsakov Conservatory"),
      detail: tx("Bachelor + Master · Klavier & pädagogische Qualifikation · Klasse Doz. Peter Laul", "Bachelor + Master · Piano & pedagogical qualification · Class of Doc. Peter Laul"),
    },
    {
      years: "2003 – 2014",
      school: tx("Spezialmusikschule am Konservatorium", "Specialized Music School at the Conservatory"),
      detail: tx("Klavier + pädagogische Qualifikation · Klasse Prof. Marina Volf", "Piano + pedagogical qualification · Class of Prof. Marina Volf"),
    },
  ];

  const teaching = [
    tx("Mehrjährige pädagogische Tätigkeit mit besonders begabten Kindern", "Years of pedagogical work with specially gifted children"),
    tx("Organisation von Kinderkonzerten", "Organisation of children's concerts"),
    tx("Interaktive Konzertformate (Schulen, Kindergärten, Babykonzerte)", "Interactive concert formats (schools, kindergartens, baby concerts)"),
    tx("Vorträge auf pädagogischen Konferenzen", "Lectures at pedagogical conferences"),
    tx("Internationale Vortragskonzerte zur Musikvermittlung", "International lecture-concerts on music education"),
  ];

  const books = [
    tx("„Wie man unabhängigen Musikunterricht liebt“", "“How to Love Independent Music-Making”"),
    tx("„Musikschule: Wie man den Unterricht inspirierend und nicht traumatisierend gestaltet“", "“Music School: How to Make Lessons Inspiring, Not Traumatic”"),
  ];

  const languages = [
    { name: tx("Russisch", "Russian"), level: tx("Muttersprache", "Native") },
    { name: tx("Englisch", "English"), level: "Advanced" },
    { name: tx("Deutsch", "German"), level: "B2.1 – B2.2" },
    { name: tx("Ukrainisch", "Ukrainian"), level: "Upper-intermediate" },
  ];

  return (
    <main className="overflow-x-hidden bg-background">
      <TopNav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to="/"
            className="font-body inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-foreground/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3" />
            {tx("Zur Startseite", "Back to homepage")}
          </Link>

          <p className="font-body mt-10 text-[10px] tracking-[0.4em] uppercase text-primary">
            {tx("Lebenslauf", "Curriculum Vitae")}
          </p>
          <h1 className="font-display mt-6 text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Nataliia <span className="italic text-primary">Uchitel</span>
          </h1>
          <p className="font-display mt-6 text-xl font-light italic text-foreground/70 md:text-2xl">
            {tx("Pianistin · Pädagogin", "Pianist · Educator")}
          </p>
          <p className="font-body mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            {tx(
              "Nataliia Uchitel verbindet eine internationale Konzerttätigkeit mit langjähriger pädagogischer Arbeit und Projekten zur Vermittlung klassischer Musik.",
              "Nataliia Uchitel combines an international concert career with many years of pedagogical work and projects dedicated to bringing classical music to wider audiences.",
            )}
          </p>

          {/* Contact */}
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="h-3 w-3" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase">{tx("Standort", "Location")}</span>
              </div>
              <p className="font-display mt-3 text-base font-light">Lübeck, Wakentizmauer 3A · 23552</p>
            </div>
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-3 w-3" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase">{tx("Telefon", "Phone")}</span>
              </div>
              <p className="font-display mt-3 text-base font-light">+49 176 6277 9950</p>
              <p className="font-body text-xs text-foreground/50">+49 1631 877567 · WhatsApp</p>
            </div>
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-3 w-3" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase">E-Mail</span>
              </div>
              <a
                href="mailto:tatatatauchitel@gmail.com"
                className="font-display mt-3 block text-base font-light transition-colors hover:text-primary"
              >
                tatatatauchitel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="ornament" />

      {/* Teaching - emphasized */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 text-primary" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
              {tx("Pädagogische Arbeit", "Teaching")}
            </p>
          </div>
          <h2 className="font-display mt-4 text-4xl font-light tracking-tight md:text-5xl">
            {tx("Lehrerin aus Berufung", "A teacher by vocation")}
          </h2>
          <p className="font-body mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
            {tx(
              "Neben der Bühne widmet sich Natalia mit gleicher Hingabe dem Unterricht — von ersten Schritten am Klavier bis zu jungen Konzertpianisten.",
              "Alongside her stage work, Natalia devotes herself with equal dedication to teaching — from first steps at the piano to young concert pianists.",
            )}
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Experience */}
            <div>
              <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                {tx("Berufserfahrung", "Professional experience")}
              </h3>
              <ul className="mt-6 space-y-6">
                {experience.map((e, i) => (
                  <li key={i} className="border-l border-primary/30 pl-5">
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary">{e.years}</p>
                    <p className="font-display mt-2 text-lg font-light leading-snug">{e.place}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/50">
                {tx("Schwerpunkte", "Highlights")}
              </h3>
              <ul className="mt-6 space-y-4">
                {teaching.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-primary" />
                    <span className="font-body text-base leading-relaxed text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Education */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-primary" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
              {tx("Ausbildung", "Education")}
            </p>
          </div>
          <h2 className="font-display mt-4 text-4xl font-light tracking-tight md:text-5xl">
            {tx("Studium & Schule", "Studies & schooling")}
          </h2>

          <div className="mt-12 space-y-px bg-border">
            {education.map((ed, i) => (
              <div key={i} className="grid gap-3 bg-background p-6 md:grid-cols-[160px_1fr] md:gap-8 md:p-8">
                <p className="font-body text-[11px] tracking-[0.25em] uppercase text-primary">{ed.years}</p>
                <div>
                  <p className="font-display text-xl font-light md:text-2xl">{ed.school}</p>
                  <p className="font-body mt-2 text-sm text-foreground/60">{ed.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="ornament" />

      {/* Awards & Concert activity */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Award className="h-4 w-4 text-primary" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
                {tx("Auszeichnungen", "Awards")}
              </p>
            </div>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-4xl">
              {tx("Wettbewerbe", "Competitions")}
            </h2>
            <ul className="mt-8 space-y-6">
              {awards.map((a, i) => (
                <li key={i}>
                  <p className="font-body text-[11px] tracking-[0.25em] uppercase text-primary">{a.year}</p>
                  <p className="font-display mt-2 text-lg font-light leading-snug">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Music className="h-4 w-4 text-primary" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
                {tx("Konzerttätigkeit", "Concert activity")}
              </p>
            </div>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-4xl">
              {tx("Auswahl", "Selection")}
            </h2>
            <p className="font-body mt-8 text-base leading-relaxed text-foreground/75">
              {tx(
                "In den letzten Jahren als Korrepetitorin bei Meisterkursen und Festivals tätig — u. a. Nagolder Musikfestival, Akademisten-Projekt der Wiener Philharmoniker im Musikverein, Brahms-Festival Lübeck, Flötenfestival in der Philharmonie Jerewan (Armenien) sowie als Gastkorrepetitorin an der Musikhochschule Lübeck.",
                "In recent years she has worked as a répétiteur at masterclasses and festivals — including the Nagold Music Festival, the Vienna Philharmonic Academists Project at the Musikverein, the Brahms Festival Lübeck, the Flute Festival at the Yerevan Philharmonic (Armenia), and as guest répétiteur at the Lübeck University of Music.",
              )}
            </p>
            <p className="font-body mt-6 text-sm italic text-foreground/60">
              {tx(
                "Konzerte in Deutschland, Russland, der Schweiz, Österreich, Estland, Israel, England, den USA und der Ukraine.",
                "Concerts in Germany, Russia, Switzerland, Austria, Estonia, Israel, England, the USA and Ukraine.",
              )}
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Books & Languages */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
                {tx("Veröffentlichungen", "Publications")}
              </p>
            </div>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-4xl">
              {tx("Bücher & Vorträge", "Books & lectures")}
            </h2>
            <ul className="mt-8 space-y-5">
              {books.map((b, i) => (
                <li key={i} className="border-l border-primary/30 pl-5">
                  <p className="font-display text-lg font-light italic leading-snug">{b}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-primary" />
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary">
                {tx("Sprachen", "Languages")}
              </p>
            </div>
            <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-4xl">
              {tx("Mehrsprachig", "Multilingual")}
            </h2>
            <ul className="mt-8 space-y-px bg-border">
              {languages.map((l, i) => (
                <li key={i} className="flex items-baseline justify-between gap-4 bg-background py-4">
                  <span className="font-display text-lg font-light">{l.name}</span>
                  <span className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/60">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default ResumePage;
