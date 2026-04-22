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
  "nav.concerts": { de: "Konzerte", en: "Concerts" },
  "nav.videos": { de: "Aufnahmen", en: "Recordings" },
  "nav.projects": { de: "Projekte", en: "Projects" },
  "nav.contact": { de: "Kontakt", en: "Contact" },
  "nav.follow": { de: "Folgen", en: "Follow" },

  // Hero
  "hero.biography": { de: "Biographie", en: "Biography" },
  "hero.concerts": { de: "Konzerte", en: "Concerts" },
  "hero.scroll": { de: "Scroll", en: "Scroll" },

  // Biography
  "bio.label": { de: "Biographie", en: "Biography" },
  "bio.title": { de: "Konzertpianistin, Pädagogin & Projektleiterin", en: "Concert Pianist, Educator & Project Leader" },
  "bio.p1": {
    de: "Natalia Uchitel ist Konzertpianistin, Musikpädagogin und Leiterin eigener kreativer Projekte. Sie tritt regelmäßig in Russland, Deutschland, Italien, Israel, den USA, England, Estland, der Schweiz, Österreich u.A. auf.",
    en: "Natalia Uchitel is a concert pianist, music educator, and leader of her own creative projects. She performs regularly in Russia, Germany, Italy, Israel, the USA, England, Estonia, Switzerland, Austria, and beyond.",
  },
  "bio.p2": {
    de: "2019 schloss sie ihr Studium am St. Petersburger Konservatorium bei Prof. Peter Laul ab. 2021 ergänzte Natalia dieses mit ihrem Aufbaustudium bei Inga Dzektser. Seit 2023 studiert sie an der Folkwang Universität der Künste in Essen bei Prof. Evgeny Sinaisky.",
    en: "In 2019, she graduated from the St. Petersburg Conservatory under Prof. Peter Laul. In 2021, Natalia completed her postgraduate studies with Inga Dzektser. Since 2023, she has been studying at the Folkwang University of the Arts in Essen under Prof. Evgeny Sinaisky.",
  },
  "bio.p3": {
    de: "2017 erhielt sie ein Diplom beim Robert-Schumann-Wettbewerb (Deutschland). 2018 den 1. Platz beim Gummert-Wettbewerb. 2021: Grand Prix beim Kammermusikwettbewerb in Wolgograd.",
    en: "In 2017, she received a diploma at the Robert Schumann Competition (Germany). In 2018, she won 1st place at the Gummert Competition. In 2021, she received the Grand Prix at the Chamber Music Competition in Volgograd.",
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
