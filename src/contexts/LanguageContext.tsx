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
  "nav.resume": { de: "Lebenslauf", en: "Resume" },

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
  "concerts.title": { de: "Auftritte", en: "Performances" },
  "concerts.upcoming": { de: "Kommende Auftritte", en: "Upcoming Performances" },
  "concerts.past": { de: "Vergangene Konzerte", en: "Past Concerts" },
  "concerts.show": { de: "Anzeigen", en: "Show" },
  "concerts.hide": { de: "Verbergen", en: "Hide" },
  "concerts.video": { de: "Video", en: "Video" },

  // Concert detail
  "concert.notFound": { de: "Konzert nicht gefunden", en: "Concert not found" },
  "concert.back": { de: "Zur Startseite", en: "Back to homepage" },
  "concert.backToList": { de: "Alle Konzerte", en: "All concerts" },
  "concert.program": { de: "Programm", en: "Program" },
  "concert.programTitle": { de: "Werke des Abends", en: "Works of the evening" },
  "concert.impressions": { de: "Eindrücke", en: "Impressions" },
  "concert.impressionsTitle": { de: "Bilder & Atmosphäre", en: "Images & Atmosphere" },
  "concert.when": { de: "Datum", en: "Date" },
  "concert.time": { de: "Beginn", en: "Time" },
  "concert.where": { de: "Ort", en: "Venue" },
  "concert.address": { de: "Adresse", en: "Address" },
  "concert.details": { de: "Details", en: "Details" },
  "concert.tickets": { de: "Tickets buchen", en: "Book tickets" },
  "concert.programDownload": { de: "Programm öffnen", en: "View programme" },
  "concert.about": { de: "Über das Konzert", en: "About the concert" },
  "concert.videos": { de: "Videos", en: "Videos" },
  "concert.videosTitle": { de: "Aufzeichnungen", en: "Recordings" },

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
  "projects.readMore": { de: "Mehr erfahren →", en: "Learn more →" },

  // Quiet Music project page
  "qm.label": { de: "Projekt · Musik-Siesta", en: "Project · Music Siesta" },
  "qm.title": {
    de: "Die Kunst, sich selbst und die Musik zu hören",
    en: "The Art of Listening to Yourself and to Music",
  },
  "qm.subtitle": {
    de: "Ein Programm, das ein klassisches Konzert mit der Praxis verbindet, in Kontakt mit dem eigenen Körper zu kommen und ihn zu entspannen.",
    en: "A program that combines a classical concert with the practice of connecting with the body and letting it rest.",
  },
  "qm.concept.label": { de: "Konzept", en: "Concept" },
  "qm.concept.title": { de: "Eine Pause für Körper und Gehör", en: "A pause for body and hearing" },
  "qm.concept.p1": {
    de: "Ein echtes Konzert klassischer Musik — gespielt von Preisträgern internationaler Wettbewerbe, mit einem Programm, das eigens für diesen Abend zusammengestellt wird.",
    en: "A real classical concert — performed by prize-winners of international competitions, with a program curated specifically for this evening.",
  },
  "qm.concept.p2": {
    de: "Statt aufrecht im Saal zu sitzen, legen Sie sich auf Kissen, hüllen sich in eine Decke und lauschen liegend — begleitet von einer ruhigen, entspannenden Bewegungspraxis.",
    en: "Instead of sitting upright in the hall, you lie down on cushions, wrap yourself in a blanket, and listen — accompanied by a calm, restorative movement practice.",
  },
  "qm.concept.p3": { de: "", en: "" },
  "qm.flow.label": { de: "Ablauf", en: "How it unfolds" },
  "qm.flow.title": { de: "Wie der Abend verläuft", en: "What the evening looks like" },
  "qm.flow.step1.title": { de: "Ankommen", en: "Arrival" },
  "qm.flow.step1.text": {
    de: "Wir versammeln uns in kleiner Runde und sprechen darüber, warum bewusstes Zuhören klassischer Musik so schwerfällt.",
    en: "We gather in a small group and talk about why it can be hard to listen to classical music with full attention.",
  },
  "qm.flow.step2.title": { de: "Hineinhorchen", en: "Listening in" },
  "qm.flow.step2.text": {
    de: "Sie legen sich auf Kissen, decken sich zu und folgen kleinen Übungen, die helfen, in den Hörprozess einzutauchen.",
    en: "You lie down on cushions, cover yourself with a blanket, and follow gentle exercises that draw you into the music.",
  },
  "qm.flow.step3.title": { de: "Bewegen & Loslassen", en: "Moving & releasing" },
  "qm.flow.step3.text": {
    de: "Eine sanfte Gymnastik unter Live-Musik schließt den Abend — sicher, achtsam, im eigenen Tempo.",
    en: "A soft, mindful gymnastics session under live music closes the evening — safe, attentive, at your own pace.",
  },
  "qm.duration": { de: "Dauer", en: "Duration" },
  "qm.hours": { de: "Stunden", en: "hours" },
  "qm.format": { de: "Format", en: "Format" },
  "qm.formatValue": { de: "Kleine Gruppe", en: "Small group" },
  "qm.partner": { de: "Partner", en: "Partner" },
  "qm.performers.label": { de: "Mitwirkende", en: "Performers" },
  "qm.performers.title": { de: "Wer Sie begleitet", en: "Who guides the evening" },
  "qm.reviews.label": { de: "Stimmen", en: "Voices" },
  "qm.reviews.title": { de: "Was Gäste erlebt haben", en: "What guests have experienced" },
  "qm.gallery.label": { de: "Galerie", en: "Gallery" },
  "qm.gallery.title": { de: "Eindrücke aus dem Saal", en: "Impressions from the hall" },
  "qm.back": { de: "Zurück zu allen Projekten", en: "Back to all projects" },

  // Quiet Music — video & event info
  "qm.video.label": { de: "Eindruck", en: "Impression" },
  "qm.video.title": { de: "Ein Abend in Bewegung und Klang", en: "An evening in motion and sound" },
  "qm.video.subtitle": {
    de: "Ein kurzer Einblick in eine Musik-Siesta — Atmosphäre, Klang und Stille.",
    en: "A short glimpse into a Music Siesta — atmosphere, sound and silence.",
  },
  "qm.info.label": { de: "Nächste Siesta", en: "Next Siesta" },
  "qm.info.title": { de: "Wann · Wo · Details", en: "When · Where · Details" },
  "qm.info.when": { de: "Wann", en: "When" },
  "qm.info.whenValue": { de: "Termin auf Anfrage", en: "Date on request" },
  "qm.info.where": { de: "Wo", en: "Where" },
  "qm.info.whereValue": { de: "Studio Miras, Berlin", en: "Studio Miras, Berlin" },
  "qm.info.time": { de: "Dauer", en: "Time" },
  "qm.info.timeValue": { de: "ca. 1,5 Stunden", en: "approx. 1.5 hours" },
  "qm.info.tickets": { de: "Plätze", en: "Seats" },
  "qm.info.ticketsValue": { de: "Limitiert · Reservierung empfohlen", en: "Limited · reservation recommended" },
  "qm.info.cta": { de: "Platz reservieren", en: "Reserve a seat" },
  "qm.info.note": {
    de: "Schreiben Sie für aktuelle Termine und Reservierungen direkt an Natalia.",
    en: "Write directly to Natalia for current dates and reservations.",
  },

  // CTAs
  "qm.cta.reserve": { de: "Platz reservieren", en: "Reserve a seat" },
  "qm.cta.ask": { de: "Frage stellen", en: "Ask a question" },
  "qm.cta.join": { de: "An der nächsten Siesta teilnehmen", en: "Join the next Siesta" },
  "qm.hero.cta": { de: "Jetzt anmelden", en: "Sign up now" },
  "qm.hero.ctaSecondary": { de: "Mehr erfahren", en: "Learn more" },
  "qm.final.label": { de: "Bereit?", en: "Ready?" },
  "qm.final.title": {
    de: "Erleben Sie eine Siesta für Körper und Gehör",
    en: "Experience a siesta for body and hearing",
  },
  "qm.final.subtitle": {
    de: "Plätze sind limitiert. Reservieren Sie Ihren Platz bei der nächsten Music-Siesta.",
    en: "Seats are limited. Reserve your spot at the next Music-Siesta.",
  },

  // Partner
  "qm.partnerBlock.label": { de: "Partner", en: "Partner" },
  "qm.partnerBlock.title": {
    de: "Gemeinsam mit Studio Miras",
    en: "Together with Studio Miras",
  },
  "qm.partnerBlock.intro": {
    de: "Wir gestalten dieses Programm gemeinsam mit dem Studio für humanen Sport „Miras\".",
    en: "We run this programme together with the studio for humane sport \"Miras\".",
  },
  "qm.partnerBlock.question": {
    de: "Was macht diese Übungen besonders?",
    en: "What makes these sessions special?",
  },
  "qm.partnerBlock.p1": {
    de: "Wir trainieren mit höchster Aufmerksamkeit für den ganzen Organismus und mit besonderer Sorgfalt für die Wirbelsäule. Wir lernen unseren Körper kennen und ihn zu führen — um sicher und mit Qualität zu trainieren.",
    en: "We train with the utmost attention to the whole body and with special care for the spine. We get to know our body and learn to guide it — so that training is safe and of high quality.",
  },
  "qm.partnerBlock.p2": {
    de: "Wir formen Bewegungsgewohnheiten neu, aktivieren schlafende Muskeln und verbessern Beweglichkeit und Gelenkmobilität sanft und sicher — durch die Arbeit mit den Muskeln.",
    en: "We reshape movement habits, activate dormant muscles, and improve flexibility and joint mobility gently and safely — through working with the muscles.",
  },
  "qm.partnerBlock.cta": { de: "Studio Miras besuchen", en: "Visit Studio Miras" },

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
