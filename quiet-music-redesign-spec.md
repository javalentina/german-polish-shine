# Quiet Music Project Page — Redesign Specification

A guide to bring `/projects/quiet-music` to a refined editorial standard, matching the rest of the Natalia Uchitel portfolio (dark charcoal + ivory + gold, Cormorant Garamond + Outfit).

---

## 1. Design Tokens (must match the rest of the site)

In `src/index.css` (`:root`):

```css
--background: 30 8% 8%;       /* charcoal */
--foreground: 40 30% 92%;     /* ivory */
--primary: 42 55% 62%;        /* gold */
--primary-foreground: 30 8% 8%;
--secondary: 30 6% 14%;
--muted: 30 6% 18%;
--border: 35 12% 22%;
```

Typography (Tailwind `fontFamily`):

- `font-display` → `"Cormorant Garamond", serif` — all headings, quotes, big numbers
- `font-body`    → `"Outfit", sans-serif` — body, eyebrow labels, buttons

Eyebrow label pattern (used on every section):
```tsx
<p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
  {label}
</p>
```

Animation: `animate-reveal-up` (fade + 24px translate-y, 700ms ease-out), triggered via an `IntersectionObserver` hook (`useScrollReveal`).

---

## 2. Page Architecture

A single full-bleed page at `/projects/quiet-music` composed of these sections, in order, separated by `<SectionDivider />` (alternating `variant="ornament"` and `variant="line"`):

1. **Hero** — full-bleed image, label + huge title + italic subtitle
2. **Concept** — 2-column: left = label/title, right = three paragraphs
3. **Video** — centered YouTube embed in a bordered card
4. **How it unfolds** — 3 numbered steps in a `grid-cols-3` with a hairline border
5. **Stats row** — Duration / Format / Partner (small label + display number)
6. **Event Info** — When / Where / Time / Seats card + CTA (the "one place where all info" block)
7. **Performers** — 3 circular portraits with role
8. **Testimonials** — large italic blockquotes with a left gold rule
9. **Gallery** — `grid-cols-3` of 4:5 portrait crops with `hover:scale-105`
10. **Back link** — small bordered tracking-[0.3em] uppercase link to `/#projects`

All sections live in a single file: `src/pages/QuietMusicProjectPage.tsx`.

---

## 3. Hero Section

```tsx
<section className="relative flex min-h-[80vh] items-center overflow-hidden">
  <img src={concertHall} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
  <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32">
    <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
      Project · Music Siesta
    </p>
    <h1 className="font-display text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl text-balance">
      Quiet Music
    </h1>
    <p className="font-display mt-8 max-w-2xl text-2xl font-light italic text-foreground/80 md:text-3xl">
      A pause for body and hearing.
    </p>
  </div>
</section>
```

---

## 4. Concept (2-column editorial)

```tsx
<section className="py-24 md:py-32">
  <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-20">
    <div>
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Concept</p>
      <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
        A pause for body and hearing
      </h2>
    </div>
    <div className="space-y-6 font-body text-lg leading-[1.8] text-foreground/85">
      <p>{p1}</p><p>{p2}</p><p>{p3}</p>
    </div>
  </div>
</section>
```

---

## 5. YouTube Video Section (NEW)

A centered embed in a bordered card with shadow. Use a real watch-id (replace `VIDEO_ID`).

```tsx
<section className="py-24 md:py-32">
  <div className="mx-auto max-w-5xl px-6">
    <div className="mb-12 text-center">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Impression</p>
      <h2 className="font-display text-4xl font-light md:text-5xl">
        An evening in motion and sound
      </h2>
      <p className="font-body mt-5 max-w-2xl mx-auto text-base leading-[1.75] text-foreground/75 md:text-lg">
        A short glimpse into a Music Siesta — atmosphere, sound and silence.
      </p>
    </div>

    <div className="relative overflow-hidden border border-border bg-secondary/20 shadow-2xl">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Quiet Music — Music Siesta"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>
```

Notes:
- Use Tailwind's `aspect-video` (16:9) wrapper — never set fixed pixel heights.
- `loading="lazy"` for performance.
- The bordered card with `bg-secondary/20` and `shadow-2xl` matches the editorial dark style; do NOT use rounded corners (the site uses sharp edges everywhere).

---

## 6. How it Unfolds (3 steps + stats)

```tsx
<section className="py-24 md:py-32">
  <div className="mx-auto max-w-5xl px-6">
    <div className="mb-16 text-center">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">How it unfolds</p>
      <h2 className="font-display text-4xl font-light md:text-5xl">What the evening looks like</h2>
    </div>

    {/* hairline grid: gap-px on bg-border creates 1px dividers */}
    <div className="grid gap-px bg-border sm:grid-cols-3">
      {[1,2,3].map(n => (
        <div key={n} className="bg-background p-8 md:p-10">
          <span className="font-display text-5xl font-light text-primary/60">0{n}</span>
          <h3 className="font-display mt-6 text-2xl font-light">{stepTitle[n]}</h3>
          <p className="font-body mt-3 text-base leading-[1.75] text-foreground/75">{stepText[n]}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 flex flex-wrap items-center justify-center gap-12 border-t border-border pt-10 text-center">
      {/* Duration / Format / Partner — each = tiny tracking label + display number */}
    </div>
  </div>
</section>
```

The `gap-px` + `bg-border` + child `bg-background` is a common trick for 1-pixel hairline dividers between cards without using individual borders.

---

## 7. Event Info — "When · Where · Time · Details" (NEW, key request)

The single source of truth for upcoming Siestas. A bordered container holding a 4-up hairline grid of facts plus a note + CTA.

```tsx
<section className="py-24 md:py-32">
  <div className="mx-auto max-w-5xl px-6">
    <div className="mb-12">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Next Siesta</p>
      <h2 className="font-display text-4xl font-light md:text-5xl">When · Where · Details</h2>
    </div>

    <div className="border border-border bg-secondary/10 p-8 md:p-12">
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "When",   value: "Date on request" },
          { label: "Where",  value: "Studio Miras, Berlin" },
          { label: "Time",   value: "approx. 1.5 hours" },
          { label: "Seats",  value: "Limited · reservation recommended" },
        ].map((item, i) => (
          <div key={i} className="bg-background p-6 md:p-8">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary/70">
              {item.label}
            </p>
            <p className="font-display mt-3 text-xl font-light leading-snug md:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
        <p className="font-body max-w-xl text-sm leading-[1.75] text-foreground/70 md:text-base">
          Write directly to Natalia for current dates and reservations.
        </p>
        <a
          href="mailto:contact@nataliauchitel.com"
          className="font-body inline-block border border-primary px-8 py-3 text-[11px] tracking-[0.3em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Reserve a seat
        </a>
      </div>
    </div>
  </div>
</section>
```

Design rationale:
- Outer card framed with `border border-border bg-secondary/10` to set it apart as a "panel".
- Inner 4-up uses the same hairline-grid trick as the steps so it visually rhymes with the rest of the page.
- The CTA is **outline gold** with inverse hover — never a filled rounded button. Rounded corners are forbidden in this design system.

---

## 8. Performers

```tsx
<div className="grid gap-12 sm:grid-cols-3">
  {performers.map(p => (
    <div key={p.name} className="text-center">
      <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-primary/20">
        <img src={p.photo} alt="" className="h-full w-full object-cover" />
      </div>
      <h3 className="font-display text-2xl font-light">{p.name}</h3>
      <p className="font-body mt-2 text-sm tracking-[0.15em] uppercase text-primary/80">{p.role}</p>
    </div>
  ))}
</div>
```

The circular avatars are the **only** rounded element on the page — they're portraits, so it's allowed.

---

## 9. Testimonials

```tsx
<figure className="border-l-2 border-primary/40 pl-8 md:pl-12">
  <blockquote className="font-display text-xl font-light italic leading-relaxed text-foreground/90 md:text-2xl">
    „{quote}"
  </blockquote>
  <figcaption className="mt-6 flex items-baseline gap-4">
    <span className="font-display text-lg">{name}</span>
    <span className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">{role}</span>
  </figcaption>
</figure>
```

Use German low-quote `„` + closing `"` so it reads correctly in both languages.

---

## 10. Gallery

```tsx
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  {images.map((src, i) => (
    <div key={i} className="overflow-hidden">
      <img src={src} alt="" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
    </div>
  ))}
</div>
```

Always use `aspect-[4/5]` portrait crops — they create a magazine-like rhythm. Avoid mixing aspect ratios.

---

## 11. Bilingual Copy (DE / EN)

Add to `src/contexts/LanguageContext.tsx`:

```ts
"qm.video.label":     { de: "Eindruck", en: "Impression" },
"qm.video.title":     { de: "Ein Abend in Bewegung und Klang", en: "An evening in motion and sound" },
"qm.video.subtitle":  { de: "Ein kurzer Einblick in eine Musik-Siesta — Atmosphäre, Klang und Stille.",
                        en: "A short glimpse into a Music Siesta — atmosphere, sound and silence." },

"qm.info.label":         { de: "Nächste Siesta", en: "Next Siesta" },
"qm.info.title":         { de: "Wann · Wo · Details", en: "When · Where · Details" },
"qm.info.when":          { de: "Wann", en: "When" },
"qm.info.whenValue":     { de: "Termin auf Anfrage", en: "Date on request" },
"qm.info.where":         { de: "Wo", en: "Where" },
"qm.info.whereValue":    { de: "Studio Miras, Berlin", en: "Studio Miras, Berlin" },
"qm.info.time":          { de: "Dauer", en: "Time" },
"qm.info.timeValue":     { de: "ca. 1,5 Stunden", en: "approx. 1.5 hours" },
"qm.info.tickets":       { de: "Plätze", en: "Seats" },
"qm.info.ticketsValue":  { de: "Limitiert · Reservierung empfohlen", en: "Limited · reservation recommended" },
"qm.info.cta":           { de: "Platz reservieren", en: "Reserve a seat" },
"qm.info.note":          { de: "Schreiben Sie für aktuelle Termine und Reservierungen direkt an Natalia.",
                           en: "Write directly to Natalia for current dates and reservations." },
```

---

## 12. What's wrong with the current Vercel version (and how to fix)

| Issue                                                       | Fix                                                                                  |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Looks like a generic landing page, not editorial            | Adopt the eyebrow + huge `font-display` + italic subtitle hero pattern               |
| Rounded buttons / cards                                     | All corners sharp. Buttons = bordered, hairline-thin, uppercase tracking-[0.3em]     |
| Mixed/uneven typography                                     | Strict pairing: Cormorant Garamond display + Outfit body. Nothing else.              |
| No dedicated "When/Where/Time" block                        | Add the Event Info section (§7) — single source of truth                             |
| No video                                                    | Add the YouTube embed section (§5)                                                   |
| Section transitions feel abrupt                             | Insert `<SectionDivider variant="ornament"/>` and `variant="line"` between sections   |
| Card content competes for attention                         | Use the `gap-px / bg-border / bg-background` hairline grid for stat & step cards     |
| Gallery uses random aspect ratios                           | Lock to `aspect-[4/5]` portrait                                                      |
| Color palette feels neutral                                 | Drive accents with a single gold (`hsl(42 55% 62%)`) at low opacity for restraint    |
| Generic "Read more" links                                   | Use small uppercase `tracking-[0.3em]` links with bottom gold border                 |
| No bilingual support                                        | Wrap all copy through the `useLanguage` `t()` helper with the keys above             |

---

## 13. Acceptance Criteria

- [ ] Page renders at `/projects/quiet-music` with all 10 sections in the order above.
- [ ] YouTube video plays in 16:9, lazy-loaded, no layout shift on mobile.
- [ ] Event Info card displays When / Where / Time / Seats in a 4-up grid (stacks 2-up on `sm`, 1-up on mobile).
- [ ] CTA is an outline-gold link that inverts on hover.
- [ ] Every visible string flows through the `t()` helper and works in DE and EN.
- [ ] No rounded corners except performer avatars.
- [ ] Reveal-on-scroll animations fire once per section.
- [ ] Lighthouse: LCP < 2.5s, CLS < 0.05.
