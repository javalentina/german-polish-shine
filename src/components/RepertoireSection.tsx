import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

type Composer = {
  name: string;
  dates?: string;
  works: string[];
};

type Group = {
  titleKey: string;
  composers: Composer[];
};

const solo: Composer[] = [
  {
    name: "Johann Sebastian Bach",
    works: [
      "The Well-Tempered Clavier, Books I & II — Prelude and Fugue in D minor, BWV 851",
      "WTC — Prelude and Fugue in G minor, BWV 861",
      "WTC — Prelude and Fugue in C-sharp minor, BWV 849",
      "WTC — Prelude and Fugue in E major, BWV 854",
      "WTC — Prelude and Fugue in C major, BWV 846",
      "WTC — Prelude and Fugue in E minor, BWV 855",
      "WTC — Prelude and Fugue in B minor, BWV 869",
      "Chromatic Fantasia and Fugue in D minor, BWV 903",
      "Partita No. 6 in E minor, BWV 830",
      "English Suite No. 2 in A minor, BWV 807",
      "French Suite No. 2 in C minor, BWV 813",
      "French Suite No. 3 in B minor, BWV 814",
      "Toccata in E minor, BWV 914",
      "Little Preludes, BWV 924–943",
      "Two-Part Inventions, BWV 772–786",
    ],
  },
  {
    name: "Domenico Scarlatti",
    works: [
      "Sonata in D minor, K.1 / K.9",
      "Sonata in D major, K.96",
      "Sonata in F minor, K.466",
    ],
  },
  {
    name: "Ludwig van Beethoven",
    works: [
      "Piano Sonata No. 5 in C minor, Op. 10 No. 1",
      "Piano Sonata No. 8 in C minor, Op. 13 “Pathétique”",
      "Piano Sonata No. 10 in G major, Op. 14 No. 2",
      "Piano Sonata No. 11 in B-flat major, Op. 22",
      "Piano Sonata No. 27 in E minor, Op. 90",
      "Piano Sonata No. 31 in A-flat major, Op. 110",
      "Six Variations in F major, Op. 34",
    ],
  },
  { name: "Wolfgang Amadeus Mozart", works: ["Piano Sonatas"] },
  {
    name: "Franz Schubert",
    works: [
      "Impromptus, D.899 and D.935",
      "Moments Musicaux, D.780",
      "Piano Sonata in A major, D.959",
    ],
  },
  {
    name: "Robert Schumann",
    works: [
      "Abegg Variations, Op. 1",
      "Papillons, Op. 2",
      "Intermezzi, Op. 4",
      "Novelletten No. 8, Op. 21",
      "Fantasie in C major, Op. 17",
      "Album for the Young, Op. 68 (selected pieces)",
    ],
  },
  {
    name: "Franz Liszt",
    works: [
      "“Un sospiro” (Three Concert Études, S.144 No. 3)",
      "“Feux follets” (Transcendental Étude No. 5, S.139)",
      "Schubert–Liszt: “Widmung”, S.566",
      "Schubert–Liszt: “Ständchen”, S.560",
    ],
  },
  {
    name: "Frédéric Chopin",
    works: [
      "Ballade No. 1, Op. 23",
      "Ballade No. 2, Op. 38",
      "Fantaisie-Impromptu, Op. 66",
      "Preludes, Op. 28 (selected)",
      "Nocturnes, Waltzes, Impromptus",
    ],
  },
  {
    name: "Johannes Brahms",
    works: [
      "Two Rhapsodies, Op. 79",
      "Intermezzi, Op. 117",
      "Six Pieces, Op. 118 (No. 2 in A major)",
    ],
  },
  {
    name: "Felix Mendelssohn",
    works: [
      "Rondo Capriccioso, Op. 14",
      "Prelude and Fugue in E minor, Op. 35 No. 1",
      "Songs Without Words (selected)",
    ],
  },
  {
    name: "Sergei Rachmaninoff",
    works: [
      "Moments Musicaux, Op. 16",
      "Prelude in G minor, Op. 23 No. 5",
      "Prelude in E-flat major, Op. 23 No. 6",
      "Prelude in G-sharp minor, Op. 32 No. 12",
      "Études-tableaux, Op. 39 No. 5 in E-flat minor",
    ],
  },
  {
    name: "Pyotr Ilyich Tchaikovsky",
    works: ["Album for the Young, Op. 39", "The Seasons, Op. 37a (selected)"],
  },
  {
    name: "Alexander Scriabin",
    works: [
      "Piano Sonata No. 9, Op. 68",
      "Poem “Vers la flamme”, Op. 72",
      "Preludes and Études (selected)",
    ],
  },
  {
    name: "Claude Debussy",
    works: [
      "Estampes",
      "Suite bergamasque",
      "Preludes (selected)",
      "Études (Nos. 1, 11)",
      "Arabesque No. 1",
      "L’isle joyeuse",
    ],
  },
  { name: "Maurice Ravel", works: ["Sonatine", "Pavane pour une infante défunte"] },
  { name: "Edvard Grieg", works: ["Lyric Pieces, Op. 12–71 (selected)"] },
  { name: "Leoš Janáček", works: ["In the Mists"] },
  { name: "Isaac Albéniz", works: ["Iberia (selected pieces)"] },
  { name: "Olivier Messiaen", works: ["Vingt regards sur l’enfant-Jésus (selected)"] },
  {
    name: "Dmitri Shostakovich",
    works: ["24 Preludes and Fugues, Op. 87", "24 Preludes, Op. 34"],
  },
  {
    name: "Sergei Prokofiev",
    works: [
      "Piano Sonata No. 2, Op. 14",
      "Piano Sonata No. 5, Op. 38/135",
      "Suggestion diabolique, Op. 4 No. 4",
    ],
  },
  { name: "Alban Berg", works: ["Piano Sonata, Op. 1"] },
  { name: "Igor Stravinsky", works: ["Étude, Op. 7 No. 4", "Tango"] },
  { name: "Béla Bartók", works: ["Allegro barbaro, Sz. 49"] },
  {
    name: "Contemporary composers",
    works: [
      "Vladimir Deshevov — Rails; Meditations for Piano",
      "Evgeny Roitman — March in the Full Moon",
      "Yuri Krasavin — Werther",
      "Leonid Desyatnikov — Echoes of Theatre",
    ],
  },
];

const chamber: Composer[] = [
  { name: "Johann Sebastian Bach", works: ["Keyboard Concerto in D minor, BWV 1052"] },
  {
    name: "Ludwig van Beethoven",
    works: [
      "Piano Concerto No. 4 in G major, Op. 58",
      "Trio in B-flat major, Op. 11",
      "Violin Sonatas Op. 23, Op. 24, Op. 30 No. 2, Op. 47",
      "Cello Sonatas Op. 69, Op. 102",
    ],
  },
  {
    name: "Wolfgang Amadeus Mozart",
    works: [
      "Piano Concerto No. 27 in B-flat major, K.595",
      "Quintet in E-flat major, K.452",
      "Violin Sonatas",
    ],
  },
  { name: "Franz Schubert", works: ["Grand Duo in A major, D.574"] },
  {
    name: "Robert Schumann",
    works: [
      "Three Romances, Op. 94",
      "Fantasiestücke, Op. 73",
      "Stücke im Volkston, Op. 102",
    ],
  },
  {
    name: "Johannes Brahms",
    works: ["Clarinet Sonatas, Op. 120", "Clarinet Trio, Op. 114"],
  },
  { name: "Claude Debussy", works: ["Cello Sonata"] },
  { name: "Maurice Ravel", works: ["Violin Sonata", "Introduction and Allegro"] },
  {
    name: "Dmitri Shostakovich",
    works: [
      "Cello Sonata, Op. 40",
      "Piano Trio No. 2, Op. 67",
      "Piano Quintet, Op. 57",
    ],
  },
  {
    name: "Sergei Prokofiev",
    works: [
      "Violin Sonata, Op. 80",
      "Violin Sonata, Op. 94a",
      "Overture on Hebrew Themes, Op. 34",
    ],
  },
  { name: "Béla Bartók", works: ["Contrasts, Sz. 111"] },
  { name: "Erwin Schulhoff", works: ["Sonatas for Violin and Flute"] },
  { name: "Aram Khachaturian", works: ["Trio for Violin, Clarinet and Piano"] },
  { name: "Arno Babajanian", works: ["Piano Trio"] },
  { name: "Max Bruch", works: ["Eight Pieces, Op. 83"] },
  { name: "Francis Poulenc", works: ["Clarinet Sonata", "Violin Sonata, FP 119"] },
  {
    name: "Other repertoire",
    works: [
      "Paul Hindemith — Oboe Sonata",
      "Carl Reinecke — Undine, Op. 167",
      "Charles-Marie Widor — Suite for Flute, Op. 34",
      "Manuel de Falla — Suite (cello version)",
    ],
  },
  { name: "Astor Piazzolla", works: ["Grand Tango (1982) for cello and piano"] },
  {
    name: "Leonid Desyatnikov",
    works: [
      "Variations on the Obtaining of a Dwelling",
      "Sketches to Sunset",
    ],
  },
];

const RepertoireSection = () => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"solo" | "chamber">("solo");
  const { ref, isVisible } = useScrollReveal();
  const list = tab === "solo" ? solo : chamber;

  return (
    <section id="repertoire" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-20 hidden select-none lg:block"
      >
        <span className="font-display text-[14rem] font-light leading-none text-primary/[0.04]">
          Op.
        </span>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
              {t("rep.label")}
            </p>
          </div>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-light leading-[1.1] text-balance md:text-6xl lg:text-7xl">
            {t("rep.title")}
          </h2>
          <p className="font-body mt-8 max-w-2xl text-lg leading-[1.75] text-foreground/75 md:text-xl">
            {t("rep.subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`mt-14 flex flex-wrap items-center gap-8 border-b border-primary/15 ${
            isVisible ? "animate-reveal-up delay-200" : "opacity-0"
          }`}
        >
          {(["solo", "chamber"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`relative -mb-px pb-4 font-body text-[11px] tracking-[0.3em] uppercase transition-colors ${
                tab === k ? "text-primary" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {t(`rep.tab.${k}`)}
              <span
                className={`absolute -bottom-px left-0 h-px bg-primary transition-all duration-500 ${
                  tab === k ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
          <span className="ml-auto font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40">
            {list.length} {t("rep.composers")}
          </span>
        </div>

        {/* List */}
        <ul className="mt-4 divide-y divide-primary/10">
          {list.map((c, i) => (
            <RepertoireRow
              key={`${tab}-${c.name}`}
              composer={c}
              index={i}
              defaultOpen={i < 2}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

const RepertoireRow = ({
  composer,
  index,
  defaultOpen,
}: {
  composer: Composer;
  index: number;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors hover:bg-card/40 md:py-8"
      >
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="font-body text-[11px] tracking-[0.3em] text-primary/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl font-light leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl lg:text-4xl">
            {composer.name}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40 sm:inline">
            {composer.works.length}
          </span>
          <ChevronDown
            className={`h-5 w-5 text-primary/70 transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-x-12 gap-y-3 pb-8 pl-0 md:grid-cols-2 md:pl-[5.5rem]">
            {composer.works.map((w, idx) => (
              <li
                key={idx}
                className="font-body relative pl-5 text-base leading-[1.7] text-foreground/75 md:text-[17px]"
              >
                <span className="absolute left-0 top-3 h-px w-3 bg-primary/50" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default RepertoireSection;
