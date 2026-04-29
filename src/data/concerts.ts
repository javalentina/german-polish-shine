import concertHall from "@/assets/concert-hall.jpg";
import piano from "@/assets/piano-hands.jpg";
import heroPiano from "@/assets/hero-piano.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type Concert = {
  id: string;
  date: string; // display date
  isoDate: string; // for sorting
  city: string;
  venue: string;
  upcoming: boolean;
  program?: { de: string; en: string }[];
  description?: { de: string; en: string };
  image?: string;
  gallery?: string[];
};

export const concerts: Concert[] = [
  {
    id: "2026-03-12-st-petersburg-philharmonic",
    date: "12. März 2026",
    isoDate: "2026-03-12",
    city: "Sankt-Petersburg",
    venue: "Philharmonic Hall",
    upcoming: true,
    image: concertHall,
    description: {
      de: "Ein Soloabend im Großen Saal der Sankt-Petersburger Philharmonie — ein Programm zwischen Bach, Schumann und zeitgenössischen Stimmen.",
      en: "A solo recital in the Great Hall of the St. Petersburg Philharmonic — a program spanning Bach, Schumann and contemporary voices.",
    },
    program: [
      { de: "J. S. Bach — Chromatische Fantasie und Fuge d-moll, BWV 903", en: "J. S. Bach — Chromatic Fantasia and Fugue in D minor, BWV 903" },
      { de: "R. Schumann — Kreisleriana, op. 16", en: "R. Schumann — Kreisleriana, Op. 16" },
      { de: "L. Desyatnikov — Sketches to Sunset", en: "L. Desyatnikov — Sketches to Sunset" },
    ],
    gallery: [gallery1, gallery2, gallery3],
  },
  {
    id: "2026-02-09-st-petersburg-myasnikov",
    date: "9. Februar 2026",
    isoDate: "2026-02-09",
    city: "Sankt-Petersburg",
    venue: "Myasnikov Mansion",
    upcoming: true,
    image: piano,
    description: {
      de: "Kammermusikabend im historischen Myasnikov-Palast — eine intime Begegnung mit Werken der Romantik.",
      en: "Chamber music evening at the historic Myasnikov Mansion — an intimate encounter with works of the Romantic era.",
    },
  },
  {
    id: "2026-02-02-duisburg-folkwang",
    date: "2. Februar 2026",
    isoDate: "2026-02-02",
    city: "Duisburg",
    venue: "Folkwang Universität der Künste",
    upcoming: true,
    image: heroPiano,
    description: {
      de: "Konzert an der Folkwang Universität der Künste mit Solo- und Kammermusikwerken.",
      en: "Concert at the Folkwang University of the Arts featuring solo and chamber music works.",
    },
  },
  {
    id: "2026-01-07-vienna-brahms",
    date: "7. Januar 2026",
    isoDate: "2026-01-07",
    city: "Wien",
    venue: "Brahms-Salon",
    upcoming: true,
    image: concertHall,
    description: {
      de: "Soloabend im Brahms-Salon, Wien.",
      en: "Solo recital at the Brahms-Salon, Vienna.",
    },
  },
  {
    id: "2025-12-25-moscow-poets-house",
    date: "25. Dezember 2025",
    isoDate: "2025-12-25",
    city: "Moskau",
    venue: "Haus der Dichter",
    upcoming: false,
    image: piano,
  },
  {
    id: "2025-12-04-hamburg-lmn",
    date: "4. Dezember 2025",
    isoDate: "2025-12-04",
    city: "Hamburg",
    venue: "LMN Concert",
    upcoming: false,
    image: heroPiano,
  },
  {
    id: "2025-09-21-luebeck-brahms",
    date: "21. September 2025",
    isoDate: "2025-09-21",
    city: "Lübeck",
    venue: "Brahms Institut",
    upcoming: false,
    image: concertHall,
  },
];

export const getConcertById = (id: string) => concerts.find((c) => c.id === id);
