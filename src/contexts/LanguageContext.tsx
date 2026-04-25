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
  "bio.title": { de: "Konzertpianistin, Pädagogin & Projektleiterin", en: "Concert Pianist, Educator & Project Leader" },
  "bio.p1": {
    de: "Natalia Uchitel wurde am 8. Oktober 1996 geboren und begann ihre musikalische Ausbildung bereits im Alter von vier Jahren an der Spezialmusikschule des St. Petersburger Konservatoriums bei Marina Veniaminovna Wolf. Schon während ihrer Schulzeit entwickelte sie eigene Aufklärungsprojekte und nahm an Musikfestivals in Russland und im Ausland teil.",
    en: "Natalia Uchitel was born on October 8, 1996, and began her musical education at the age of four at the Specialized Music School of the St. Petersburg Conservatory under Marina Veniaminovna Wolf. During her school years, she already developed her own educational projects and participated in music festivals in Russia and abroad.",
  },
  "bio.p2": {
    de: "Im Jahr 2019 schloss sie ihr Studium am St. Petersburger Konservatorium in der Klasse des namhaften Pianisten und Pädagogen Peter Laul ab. Sie nahm an Meisterkursen von Dmitry Bashkirov, Grigory Gruzman, Natalia Trull, Andrey Diev und vielen anderen teil.",
    en: "In 2019, she graduated from the St. Petersburg Conservatory in the class of the renowned pianist and teacher Peter Laul. She participated in masterclasses by Dmitry Bashkirov, Grigory Gruzman, Natalia Trull, Andrey Diev, and many others.",
  },
  "bio.p3": {
    de: "Sie ist Preisträgerin und Diplomandin internationaler Solo- und Kammermusikwettbewerbe. Natalia konzertiert erfolgreich weltweit, unter anderem in Deutschland, Italien, Israel, den USA, England, Estland, der Schweiz und Österreich. Ihr Repertoire umfasst sowohl Klassiker als auch Werke zeitgenössischer akademischer Komponisten. 2021 beendete sie ihre Aspirantur am St. Petersburger Konservatorium bei Inga Dzektser. Im Jahr 2025 schloss sie ihr Studium in der Klasse von Evgueni Sinaiski an der Folkwang Universität der Künste in Essen (Deutschland) ab.",
    en: "She is a prize winner and diplomat of international solo and chamber music competitions. Natalia performs successfully worldwide, including in Germany, Italy, Israel, the USA, England, Estonia, Switzerland, and Austria. Her repertoire includes both classics and works by contemporary academic composers. In 2021, she completed her post-graduate studies at the St. Petersburg Conservatory under Inga Dzektser. In 2025, she graduated from the class of Evgueni Sinaiski at the Folkwang University of the Arts in Essen (Germany).",
  },
  "bio.p4": {
    de: "Heute widmet sie sich intensiv der Kammermusik und tritt weiterhin als Solistin auf. Zudem ist sie als Korrepetitorin bei verschiedenen Meisterkursen und Festivals tätig. Neben ihrer Konzerttätigkeit entwickelt Natalia eigene Projekte und tritt als Dozentin auf. Im Jahr 2022 startete sie ihren Podcast und ihre YouTube-Show „Lehrerzimmer auf der Veranda“ (Uchitelskaya na verande), in der sie gemeinsam mit ihren Eltern Themen rund um Kunst und Pädagogik diskutiert. Natalia ist zudem als Autorin erfolgreich: 2020: Veröffentlichung des Buches „Lehrer-Schüler: Wie man das selbstständige Musizieren lieben lernt“, das in Russland in einer Auflage von über 1.000 Exemplaren verkauft wurde. 2024: Veröffentlichung des Buches „Musikschule ohne Trauma“.",
    en: "Today, she is deeply dedicated to chamber music and continues to perform as a soloist. She also works as an accompanist at various masterclasses and festivals. Alongside her concert activities, Natalia develops her own projects and appears as a lecturer. In 2022, she launched her podcast and YouTube show \"Teacher's Lounge on the Veranda\" (Uchitelskaya na verande), where she discusses art and pedagogy with her parents. Natalia is also a successful author: in 2020, she published the book \"Teacher-Student: How to learn to love independent music-making,\" which sold over 1,000 copies in Russia. In 2024, she published the book \"Music School Without Trauma.\"",
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
