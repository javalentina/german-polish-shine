# Concerts — Implementation Specification

A complete guide to implementing the **Concerts** feature for the Natalia Uchitel pianist portfolio. Covers the homepage section (upcoming + past) and the per-concert detail page, including a fully content-driven data model where any optional section auto-hides when its data is empty.

---

## 1. Concept

Two distinct presentations on the home page, plus one detail page per concert.

| State        | Where             | Visual                                                                 | Why                                                                       |
| ------------ | ----------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Upcoming** | Home `#concerts`  | Elegant text list: date · city · venue                                 | Concert hasn't happened yet — no photos/videos exist                      |
| **Past**     | Home `#concerts`  | Image-card grid (B/W → color on hover) with `VIDEO` / `📷 N` badges     | Visual recap; signals which past events have media                        |
| **Detail**   | `/concerts/:id`   | Hero image · info grid · description · programme · videos · gallery   | Everything available about that concert; sections auto-hide if empty     |

Sorting: upcoming = ascending by date (soonest first); past = descending by date (most recent first). Recommended to sort by `isoDate`.

---

## 2. Design tokens (must already exist)

- Fonts: `font-display` = Cormorant Garamond, `font-body` = Outfit
- Semantic colors: `bg-background`, `text-foreground`, `text-primary` (gold), `text-muted-foreground`, `border-border`, `bg-secondary`
- Never use raw color classes (`text-white`, `bg-black`); always semantic tokens

---

## 3. Data model

`src/data/concerts.ts`

```ts
import concertHall from "@/assets/concert-hall.jpg";
import piano from "@/assets/piano-hands.jpg";
import heroPiano from "@/assets/hero-piano.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type Concert = {
  id: string;                                 // URL slug, e.g. "2026-03-12-st-petersburg-philharmonic"
  date: string;                               // human-readable, e.g. "12. März 2026"
  isoDate: string;                            // for sorting, e.g. "2026-03-12"
  time?: string;                              // "19:30"
  city: string;                               // "Sankt-Petersburg"
  venue: string;                              // "Philharmonic Hall"
  address?: { de: string; en: string };
  details?: { de: string; en: string };       // dress code, intermission note, hall info
  upcoming: boolean;                          // controls which section it appears in
  program?: { de: string; en: string }[];     // ordered list of works
  description?: { de: string; en: string };   // short editorial paragraph
  image?: string;                             // hero image (imported asset)
  gallery?: string[];                         // photo array (past concerts only)
  videos?: { youtubeId: string; title?: { de: string; en: string } }[];
  ticketUrl?: string;                         // upcoming only
  programUrl?: string;                        // PDF link
};

export const concerts: Concert[] = [ /* entries — see examples below */ ];

export const getConcertById = (id: string) =>
  concerts.find((c) => c.id === id);
```

### Example entry — upcoming, fully populated

```ts
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
    de: "Ein Soloabend im Großen Saal …",
    en: "A solo recital in the Great Hall …",
  },
  program: [
    { de: "J. S. Bach — Chromatische Fantasie und Fuge d-moll, BWV 903",
      en: "J. S. Bach — Chromatic Fantasia and Fugue in D minor, BWV 903" },
    { de: "R. Schumann — Kreisleriana, op. 16",
      en: "R. Schumann — Kreisleriana, Op. 16" },
  ],
  ticketUrl: "https://www.philharmonia.spb.ru/en/",
  programUrl: "https://example.com/programme.pdf",
}
```

### Example entry — past, minimal

```ts
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
}
```

### Example entry — past, no media (text-only memory)

```ts
{
  id: "2025-12-04-hamburg-lmn",
  date: "4. Dezember 2025",
  isoDate: "2025-12-04",
  city: "Hamburg",
  venue: "LMN Concert",
  upcoming: false,
  image: heroPiano,
}
```

---

## 4. Auto-hide rule (very important)

Every optional field renders **only if present and non-empty**. Implementation pattern:

```tsx
{concert.program && concert.program.length > 0 && (
  <section>{/* programme block */}</section>
)}

{concert.videos?.length ? <VideosBlock videos={concert.videos} /> : null}

{concert.gallery?.length ? <GalleryBlock items={concert.gallery} /> : null}

{(concert.ticketUrl || concert.programUrl) && (
  <div>{/* CTA buttons */}</div>
)}
```

Apply to: `description`, `program`, `videos`, `gallery`, `ticketUrl`, `programUrl`, `address`, `details`, `time`. Same rule for the upcoming list (skip rendering the past block entirely if there are no past concerts).

---

## 5. Homepage section — `src/components/ConcertsSection.tsx`

Anchor: `<section id="concerts">`. Mounts in `src/pages/Index.tsx`.

### Structure

```
<section id="concerts">
  ── heading: "KONZERTE" / "Kommende Auftritte" ──
  ── upcoming list (text rows, max-w-4xl, divide-y) ──
  ── (only if past.length > 0) ──
     ── header: "Rückblick / Vergangene Konzerte" + Show/Hide toggle ──
     ── animated collapse (grid-rows 0fr ↔ 1fr) ──
        ── past grid: 1 / 2 / 3 cols, image cards ──
```

### Upcoming row (text only)

- Layout: `flex` row on `sm+`, stacked on mobile, `py-7`
- Date: `font-body w-44 text-sm tracking-[0.15em] uppercase text-primary`
- City: `font-display text-2xl md:text-3xl font-light flex-1`
- Venue: `font-body text-base text-foreground/75`
- Hover: `hover:bg-secondary/30`, arrow icon slides in from left
- Whole row is a `<Link to={\`/concerts/\${id}\`}>`

### Past card (visual recap)

- Container: `<Link>` wrapping an `aspect-[4/5]` image box
- Image: `object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`
- Gradient overlay: `bg-gradient-to-t from-background via-background/30 to-transparent` for caption legibility
- Caption (bottom-left, inside image): date label (gold, uppercase, tracked), city in `font-display text-2xl`, venue in `font-body text-sm text-foreground/70`
- Media badges (top-right, only when applicable):
  - `Film` icon + "VIDEO" label — when `videos?.length`
  - `Camera` icon + count — when `gallery?.length`
  - Each badge: `bg-background/80 backdrop-blur-sm px-2.5 py-1`, text `font-body text-[9px] tracking-[0.2em] uppercase`

### Past collapse toggle

```tsx
<div className={`grid transition-[grid-template-rows] duration-500 ease-out ${
  showPast ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
}`}>
  <div className="overflow-hidden">{/* grid */}</div>
</div>
```

Toggle button label: `"Anzeigen (N)"` / `"Verbergen"` (or `"Show (N)"` / `"Hide"`).

### Reveal animation

Use a `useScrollReveal` hook. Stagger children by ~60–80ms via inline `animationDelay`.

---

## 6. Detail page — `src/pages/ConcertDetailPage.tsx`

Route: `/concerts/:id`. Register in `src/App.tsx`:

```tsx
<Route path="/concerts/:id" element={<ConcertDetailPage />} />
```

Resolve `getConcertById(id)`. If missing, render a 404 block with a back link.

### Section order (each auto-hides if empty)

1. **Hero** — full-bleed image (`h-[60vh] min-h-[420px]`), bottom gradient `from-background/40 via-background/60 to-background`. Overlaid title:
   - kicker: `Kommende / Vergangene · {date}`
   - `<h1 className="font-display text-5xl md:text-7xl font-light">{city}</h1>`
   - venue line in `font-body text-xl text-foreground/80`

2. **Info grid** — 4-column hairline grid (`grid gap-px bg-border lg:grid-cols-4`, each cell `bg-background p-8`). Cells: When (date), Time, Where (venue + address), Details. Each cell has a `lucide-react` icon + uppercase label + value in `font-display text-lg font-light`.

3. **Action buttons** — only if `ticketUrl` or `programUrl`:
   - Tickets: solid `bg-primary text-primary-foreground` with `Ticket` icon
   - Programme: outlined `border-primary/40 text-primary` with `FileText` icon
   - Both: `font-body text-[11px] tracking-[0.3em] uppercase px-8 py-4`

4. **Description** (italic editorial paragraph) — only if `description`. `font-display text-2xl md:text-3xl italic font-light`.

5. **Programme** — only if `program?.length`. Numbered list (`01`, `02`, …) with `divide-y divide-border` rows, each work in `font-display text-xl md:text-2xl`.

6. **Videos** — only if `videos?.length`. 2-column grid of YouTube `<iframe>` embeds in `aspect-video` boxes:
   ```tsx
   <iframe
     src={`https://www.youtube.com/embed/${v.youtubeId}`}
     loading="lazy"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
     className="h-full w-full"
   />
   ```

7. **Gallery** — only if `gallery?.length`. 3-column responsive grid (`sm:grid-cols-2 md:grid-cols-3`), each image `aspect-[4/5] object-cover` with hover-zoom (`hover:scale-105 transition-transform duration-700`).

8. **Back link** — `← Zurück zur Übersicht` linking to `/#concerts`.

Use the existing `<SectionDivider variant="line" | "ornament" />` between sections for breathing room.

---

## 7. i18n keys (add to `src/contexts/LanguageContext.tsx`)

```ts
"concerts.label":     { de: "Konzerte",            en: "Concerts" },
"concerts.upcoming":  { de: "Kommende Auftritte",  en: "Upcoming Performances" },
"concerts.past":      { de: "Vergangene Konzerte", en: "Past Concerts" },
"concerts.show":      { de: "Anzeigen",            en: "Show" },
"concerts.hide":      { de: "Verbergen",           en: "Hide" },
"concerts.video":     { de: "Video",               en: "Video" },

"concert.notFound":         { de: "Konzert nicht gefunden",   en: "Concert not found" },
"concert.back":             { de: "Zurück",                   en: "Back" },
"concert.backToList":       { de: "Zurück zur Übersicht",     en: "Back to overview" },
"concert.when":             { de: "Wann",                     en: "When" },
"concert.time":             { de: "Uhrzeit",                  en: "Time" },
"concert.where":            { de: "Wo",                       en: "Where" },
"concert.details":          { de: "Details",                  en: "Details" },
"concert.tickets":          { de: "Tickets buchen",           en: "Book tickets" },
"concert.programDownload":  { de: "Programm ansehen",         en: "View programme" },
"concert.about":            { de: "Über das Konzert",         en: "About the concert" },
"concert.program":          { de: "Programm",                 en: "Programme" },
"concert.programTitle":     { de: "Werke des Abends",         en: "Works of the evening" },
"concert.videos":           { de: "Aufnahmen",                en: "Recordings" },
"concert.videosTitle":      { de: "Konzertmitschnitte",       en: "Concert recordings" },
"concert.impressions":      { de: "Impressionen",             en: "Impressions" },
"concert.impressionsTitle": { de: "Bildergalerie",            en: "Photo gallery" },
```

Read with `const { t, lang } = useLanguage();` then `t("concerts.upcoming")` for static strings or `field[lang]` for bilingual data.

---

## 8. Icons (lucide-react)

`Calendar`, `Clock`, `MapPin`, `Info`, `Ticket`, `FileText`, `Film`, `Camera`. Always `strokeWidth={1.5}`, sized `h-3 w-3` (badges) or `h-4 w-4` (info/buttons).

---

## 9. Files involved

```
src/
├── components/
│   └── ConcertsSection.tsx        ← homepage section (upcoming + past)
├── pages/
│   ├── Index.tsx                  ← mounts <ConcertsSection />
│   └── ConcertDetailPage.tsx      ← /concerts/:id
├── data/
│   └── concerts.ts                ← Concert type + concerts[] array
├── contexts/
│   └── LanguageContext.tsx        ← add i18n keys from §7
├── App.tsx                        ← register /concerts/:id route
└── hooks/
    └── useScrollReveal.ts         ← reveal animation (already exists)
```

---

## 10. Adding a new concert (content workflow)

1. Open `src/data/concerts.ts`.
2. Append a new object to the `concerts` array; only `id`, `date`, `isoDate`, `city`, `venue`, `upcoming` are required.
3. Import and reference any image assets from `src/assets/`.
4. Save — the homepage list and the `/concerts/:id` page update automatically. Any omitted optional field is hidden gracefully.

To convert an upcoming concert to past after the date: flip `upcoming: false` and (optionally) add `gallery` / `videos`.
