import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "de" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.biography": { de: "Biographie", en: "Biography" },
  "nav.repertoire": { de: "Repertoire", en: "Repertoire" },
  "nav.concerts": { de: "Konzerte", en: "Concerts" },
  "rep.label": { de: "Repertoire", en: "Repertoire" },
  "rep.title": {
    de: "Ein Repertoire von Bach bis zur Gegenwart",
    en: "A Repertoire from Bach to the Present",
  },
  "rep.subtitle": {
    de: "Eine Auswahl an Solo- und Kammermusikwerken aus drei Jahrhunderten — vom Barock über die Romantik bis zu zeitgenössischen Komponisten.",
    en: "A selection of solo and chamber works spanning three centuries — from the Baroque through Romanticism to contemporary composers.",
  },
  "rep.tab.solo": { de: "Solo", en: "Solo" },
  "rep.tab.chamber": { de: "Kammermusik", en: "Chamber Music" },
  "rep.composers": { de: "Komponisten", en: "Composers" },
  "nav.videos": { de: "Aufnahmen", en: "Recordings" },
  "nav.projects": { de: "Projekte", en: "Projects" },
  "nav.gallery": { de: "Galerie", en: "Gallery" },
  "nav.contact": { de: "Kontakt", en: "Contact" },
  "nav.follow": { de: "Folgen", en: "Follow" },
  "nav.presentation": { de: "Über mich", en: "About Me" },

  // Presentation video
  "presentation.label": { de: "Videopräsentation", en: "Video Presentation" },
  "presentation.title": { de: "Lernen Sie Natalia Uchitel kennen", en: "Meet Natalia Uchitel" },
  "presentation.subtitle": {
    de: "Eine persönliche Einladung in die musikalische Welt der Pianistin — über ihren Werdegang, ihre Projekte und ihre Leidenschaft für klassische Musik.",
    en: "A personal invitation into the pianist's musical world — her journey, her projects, and her passion for classical music.",
  },
  "presentation.watch": { de: "Video ansehen", en: "Watch Video" },
  "presentation.play": { de: "Video abspielen", en: "Play video" },
  "presentation.cardTitle": { de: "Natalia Uchitel — Videopräsentation", en: "Natalia Uchitel — Video Presentation" },

  // Gallery
  "gallery.label": { de: "Galerie", en: "Gallery" },
  "gallery.title": { de: "In Bildern", en: "In Pictures" },
  "gallery.subtitle": {
    de: "Momente von der Bühne, aus dem Studio und hinter den Kulissen — eine visuelle Reise durch Klang und Stille.",
    en: "Moments from the stage, the studio and behind the scenes — a visual journey through sound and silence.",
  },

  // Hero
  "hero.biography": { de: "Biographie", en: "Biography" },
  "hero.concerts": { de: "Konzerte", en: "Concerts" },
  "hero.scroll": { de: "Scroll", en: "Scroll" },

  // Biography
  "bio.label": { de: "Biographie", en: "Biography" },
  "bio.title": { de: "Eine Reise durch Klang & Lehre", en: "A Journey Through Sound & Teaching" },
  "bio.lead": {
    de: "Von einem vierjährigen Mädchen am Klavier in St. Petersburg zur international gefeierten Konzertpianistin, Pädagogin und Autorin — Natalias Weg ist eine fortwährende Hingabe an die Musik.",
    en: "From a four-year-old girl at the piano in St. Petersburg to an internationally celebrated concert pianist, educator and author — Natalia's path is a continuing devotion to music.",
  },
  "bio.quote": {
    de: "Musik ist für mich kein Beruf — sie ist die Sprache, in der ich am ehrlichsten denke.",
    en: "Music isn't a profession to me — it's the language in which I think most honestly.",
  },
  "bio.chapter.early": { de: "Frühe Jahre", en: "Early Years" },
  "bio.chapter.early.text": {
    de: "Geboren am 8. Oktober 1996. Mit vier Jahren begann sie ihre Ausbildung an der Spezialmusikschule des St. Petersburger Konservatoriums bei Marina Veniaminovna Wolf. Schon als Schülerin entwickelte sie eigene Aufklärungsprojekte und nahm an Festivals in Russland und im Ausland teil.",
    en: "Born October 8, 1996. At the age of four she began her studies at the Specialized Music School of the St. Petersburg Conservatory under Marina Veniaminovna Wolf. Already as a pupil she created her own educational projects and performed at festivals in Russia and abroad.",
  },
  "bio.chapter.studies": { de: "Studium & Meisterklassen", en: "Studies & Masterclasses" },
  "bio.chapter.studies.text": {
    de: "2019 schloss sie ihr Studium am St. Petersburger Konservatorium in der Klasse von Peter Laul ab. 2021 beendete sie dort ihre Aspirantur bei Inga Dzektser. 2025 absolvierte sie die Folkwang Universität der Künste in Essen bei Evgueni Sinaiski. Meisterkurse u.a. bei Dmitry Bashkirov, Grigory Gruzman, Natalia Trull und Andrey Diev.",
    en: "In 2019 she graduated from the St. Petersburg Conservatory in the class of Peter Laul. In 2021 she completed her post-graduate studies there with Inga Dzektser. In 2025 she graduated from the Folkwang University of the Arts in Essen under Evgueni Sinaiski. Masterclasses with Dmitry Bashkirov, Grigory Gruzman, Natalia Trull, Andrey Diev and others.",
  },
  "bio.chapter.career": { de: "Internationale Karriere", en: "International Career" },
  "bio.chapter.career.text": {
    de: "Preisträgerin und Diplomandin internationaler Solo- und Kammermusikwettbewerbe. Konzerte in Deutschland, Italien, Israel, den USA, England, Estland, der Schweiz und Österreich. Ihr Repertoire reicht von den Klassikern bis zu zeitgenössischen akademischen Komponisten. Heute widmet sie sich intensiv der Kammermusik und arbeitet als Korrepetitorin bei Meisterkursen und Festivals.",
    en: "Prize winner and diplomat of international solo and chamber music competitions. Concerts in Germany, Italy, Israel, the USA, England, Estonia, Switzerland and Austria. Her repertoire spans the classics through contemporary academic composers. Today she devotes herself to chamber music and works as accompanist at masterclasses and festivals.",
  },
  "bio.chapter.beyond": { de: "Mehr als die Bühne", en: "Beyond the Stage" },
  "bio.chapter.beyond.text": {
    de: "Seit 2022 produziert Natalia ihren Podcast und die YouTube-Show „Lehrerzimmer auf der Veranda“ (Uchitelskaya na verande) — Gespräche mit ihren Eltern über Kunst und Pädagogik. Sie tritt regelmäßig als Dozentin auf und entwickelt eigene Bildungsprojekte.",
    en: "Since 2022 Natalia has produced her podcast and YouTube show \"Teacher's Lounge on the Veranda\" (Uchitelskaya na verande) — conversations with her parents on art and pedagogy. She regularly appears as a lecturer and develops her own educational projects.",
  },
  "bio.books.label": { de: "Veröffentlichungen", en: "Publications" },
  "bio.book1.year": { de: "2020", en: "2020" },
  "bio.book1.title": {
    de: "Lehrer-Schüler",
    en: "Teacher-Student",
  },
  "bio.book1.desc": {
    de: "„Wie man das selbstständige Musizieren lieben lernt.“ Über 1.000 verkaufte Exemplare in Russland.",
    en: "\"How to learn to love independent music-making.\" Over 1,000 copies sold in Russia.",
  },
  "bio.book2.year": { de: "2024", en: "2024" },
  "bio.book2.title": {
    de: "Musikschule ohne Trauma",
    en: "Music School Without Trauma",
  },
  "bio.book2.desc": {
    de: "Ein neuer Blick auf die musikalische Ausbildung — empathisch, modern, befreiend.",
    en: "A fresh look at music education — empathetic, modern, liberating.",
  },

  // Concerts
  "concerts.label": { de: "Konzerte", en: "Concerts" },
  "concerts.title": { de: "Kommende Auftritte", en: "Upcoming Performances" },

  // Videos
  "videos.label": { de: "Aufnahmen", en: "Recordings" },
  "videos.title": { de: "Aufzeichnungen von Auftritten", en: "Performance Recordings" },
  "videos.allOnYoutube": { de: "Alle Aufnahmen auf YouTube →", en: "All recordings on YouTube →" },

  // Projects
  "projects.label": { de: "Projekte", en: "Projects" },
  "projects.title": { de: "Kreative & Bildungsprojekte", en: "Creative & Educational Projects" },
  "projects.mozart.title": { de: "Von Mozart bis Jazz", en: "From Mozart to Jazz" },
  "projects.mozart.desc": {
    de: "8 Benefiz-Lektüre-Konzerte in verschiedenen Sälen von St. Petersburg — eine Million Rubel für die Arbeit einer Nachtunterkunft gesammelt (2016–2018).",
    en: "8 charity lecture-concerts in various halls of St. Petersburg — one million rubles raised for a night shelter (2016–2018).",
  },
  "projects.listening.title": { de: "Die Kunst des Zuhörens", en: "The Art of Listening" },
  "projects.listening.desc": {
    de: "Live-Lektüre-Konzerte und Online-Vorträge zur Popularisierung klassischer Musik (seit 2018).",
    en: "Live lecture-concerts and online talks to popularize classical music (since 2018).",
  },
  "projects.siesta.title": { de: "Musik-Siesta", en: "Music Siesta" },
  "projects.siesta.desc": {
    de: "Hörer liegen auf dem Boden mit Decken in akademischen Räumen und machen Übungen beim Hören klassischer Musik (seit 2022).",
    en: "Listeners lie on the floor with blankets in academic halls, doing exercises while listening to classical music (since 2022).",
  },
  "projects.wachbrief.title": { de: "Das Wachbrief", en: "The Wake-up Letter" },
  "projects.wachbrief.desc": {
    de: "Performance basierend auf den Werken von Boris Pasternak und Daniil Charms mit klassischer Musik.",
    en: "Performance based on the works of Boris Pasternak and Daniil Charms with classical music.",
  },
  "projects.podcast": { de: "Podcast", en: "Podcast" },
  "projects.podcast.title": { de: "Lehrerveranda", en: "Teacher's Veranda" },
  "projects.podcast.desc": {
    de: "Auf Yandex.Music, Apple Podcasts, Google Podcasts, Castbox, Soundstream und anderen Plattformen.",
    en: "Available on Yandex.Music, Apple Podcasts, Google Podcasts, Castbox, Soundstream, and other platforms.",
  },
  "projects.podcast.listen": { de: "Auf YouTube anhören →", en: "Listen on YouTube →" },

  // Footer
  "footer.rights": { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
