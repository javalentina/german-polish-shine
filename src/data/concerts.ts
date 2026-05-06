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
  time?: string; // e.g. "19:30"
  city: string;
  venue: string;
  address?: { de: string; en: string };
  details?: { de: string; en: string }; // short note: dress code, special info, etc.
  upcoming: boolean;
  program?: { de: string; en: string }[];
  description?: { de: string; en: string };
  image?: string;
  gallery?: string[];
  videos?: { youtubeId: string; title?: { de: string; en: string } }[];
  ticketUrl?: string;
  programUrl?: string; // PDF / external programme link
};

export const concerts: Concert[] = [
  {
    id: "2026-03-12-st-petersburg-philharmonic",
    date: "12. März 2026",
    isoDate: "2026-03-12",
    time: "19:30",
    city: "Sankt-Petersburg",
    venue: "Philharmonic Hall",
    address: {
      de: "Mikhailovskaya St. 2, Sankt-Petersburg",
      en: "Mikhailovskaya St. 2, St. Petersburg",
    },
    details: {
      de: "Großer Saal · Solorezital · Pause nach dem zweiten Werk",
      en: "Great Hall · Solo recital · Intermission after the second work",
    },
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
    ticketUrl: "https://www.philharmonia.spb.ru/en/",
  },
  {
    id: "2026-02-09-st-petersburg-myasnikov",
    date: "9. Februar 2026",
    isoDate: "2026-02-09",
    time: "19:00",
    city: "Sankt-Petersburg",
    venue: "Myasnikov Mansion",
    address: {
      de: "Vostaniya St. 45, Sankt-Petersburg",
      en: "Vostaniya St. 45, St. Petersburg",
    },
    details: {
      de: "Kammermusiksaal · Begrenzte Platzzahl",
      en: "Chamber hall · Limited seating",
    },
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
    time: "19:30",
    city: "Duisburg",
    venue: "Folkwang Universität der Künste",
    address: {
      de: "Klemensborn 39, 45239 Essen",
      en: "Klemensborn 39, 45239 Essen",
    },
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
    time: "20:00",
    city: "Wien",
    venue: "Brahms-Salon",
    address: { de: "Musikverein, Wien", en: "Musikverein, Vienna" },
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
    gallery: [gallery1, gallery2, gallery3],
    videos: [{ youtubeId: "dQw4w9WgXcQ" }],
  },
  {
    id: "2025-12-04-hamburg-lmn",
    date: "4. Dezember 2025",
    isoDate: "2025-12-04",
    city: "Hamburg",
    venue: "LMN Concert",
    upcoming: false,
    image: heroPiano,
    gallery: [gallery2, gallery3],
  },
  {
    id: "2025-09-21-luebeck-brahms",
    date: "21. September 2025",
    isoDate: "2025-09-21",
    city: "Lübeck",
    venue: "Brahms Institut",
    upcoming: false,
    image: concertHall,
    gallery: [gallery1, gallery3],
    videos: [{ youtubeId: "dQw4w9WgXcQ" }],
  },
];

export const getConcertById = (id: string) => concerts.find((c) => c.id === id);
