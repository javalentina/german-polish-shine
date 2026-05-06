# Project Page Template — Marketing Funnel (AIDA + Trust)

Template for project / event landing pages on the Natalia Uchitel portfolio.
Mirrors the structure of `/projects/quiet-music`. Designed as a conversion funnel:
**Awareness → Interest → Desire → Trust → Decision → Action**.

---

## 1. File structure

```
src/
├── pages/
│   └── <ProjectName>Page.tsx          ← page composition
├── contexts/
│   └── LanguageContext.tsx            ← all translation keys (de/en)
└── assets/
    └── <project-images>.jpg
```

Route: register in `src/App.tsx`:
```tsx
<Route path="/projects/<slug>" element={<ProjectNamePage />} />
```

Link from `src/components/ProjectsSection.tsx`:
```tsx
{ title: t("projects.<key>.title"), description: t("projects.<key>.desc"), href: "/projects/<slug>" }
```

---

## 2. Funnel structure (sections, in order)

Each section maps to a funnel stage. Drop a section if data is missing —
**never render an empty block**.

| # | Section          | Funnel stage   | Purpose                                  | Required |
|---|------------------|----------------|------------------------------------------|----------|
| 1 | Hero             | Awareness      | Hook + primary + secondary CTA           | yes      |
| 2 | Concept          | Interest       | Problem framing + promise                | yes      |
| 3 | Video            | Desire (show)  | Atmosphere, "show don't tell"            | optional |
| 4 | Flow / How it works | Desire      | Reduce friction, explain the experience  | yes      |
| 5 | Performers       | Authority      | Who is behind it                         | optional |
| 6 | Testimonials     | Social proof   | Voices from past guests                  | optional |
| 7 | Gallery          | Atmosphere     | Visual proof                             | optional |
| 8 | Partner          | Trust          | Co-organizer / sponsor / studio          | optional |
| 9 | Conversion       | Action         | Event facts + scarcity + final CTAs      | yes      |

Between sections use `<SectionDivider variant="ornament" />` or `variant="line"`,
alternating for rhythm.

---

## 3. Section specs

### 3.1 Hero (Awareness)

- Background image with `opacity-30` + gradient `from-background/70 via-background/60 to-background`
- `min-h-[80vh]`
- Eyebrow label (uppercase, tracking `0.3em`, primary color)
- `h1`: display font, `text-5xl md:text-7xl lg:text-8xl`, `font-light`
- Italic subtitle in display font, `text-2xl md:text-3xl`, `text-foreground/80`
- Two CTAs:
  - **Primary** — solid `bg-primary` (e.g. "Reserve")
  - **Secondary** — outlined, anchors to `#concept` ("Learn more")

### 3.2 Concept (Interest)

Two-column layout (`md:grid-cols-2`):
- Left: eyebrow + `h2`
- Right: 1–3 paragraphs (`font-body text-lg leading-[1.8]`) + inline link CTA

Auto-hide empty paragraphs:
```tsx
<p>{t("qm.concept.p1")}</p>
{t("qm.concept.p2") && <p>{t("qm.concept.p2")}</p>}
{t("qm.concept.p3") && <p>{t("qm.concept.p3")}</p>}
```

### 3.3 Video (Desire — show)

- Centered eyebrow + `h2` + subtitle
- 16:9 iframe inside bordered card with `shadow-2xl`
- YouTube embed, `loading="lazy"`

### 3.4 Flow / How it works (Desire — explain)

- 3-column grid (`sm:grid-cols-3`) with `gap-px bg-border` for hairlines
- Each step: large numeral `01/02/03` in `text-primary/60`, then `h3` + body text
- Below: 3 facts row (Duration · Format · Partner) separated by top border

### 3.5 Performers (Authority)

- Eyebrow + `h2`
- 3-up grid of circular avatars (128×128, `rounded-full`, `border-primary/20`)
- Name (display) + role (small uppercase tracked)

### 3.6 Testimonials (Social proof)

- Centered eyebrow + `h2`
- Stacked figures with `border-l-2 border-primary/40 pl-8 md:pl-12`
- Blockquote in display italic; figcaption with name + role

### 3.7 Gallery (Atmosphere)

- 3-column grid (`md:grid-cols-3`), `gap-4`
- Images `aspect-[4/5]`, hover scale `1.05`, transition 700ms

### 3.8 Partner (Trust)

- Background `bg-secondary/10`
- 1/3 + 2/3 split (`md:grid-cols-[1fr_2fr]`)
- Left: eyebrow + `h2`
- Right: intro → italic question → 1–2 paragraphs → outlined CTA

### 3.9 Conversion (Action) — the funnel narrows

- Background image `opacity-15` + gradient overlay
- Centered: eyebrow ("Ready?") + `h2` (`text-4xl md:text-6xl`) + subtitle
- **Event facts grid** — 4 tiles: When · Where · Time · Tickets
  ```tsx
  <div className="mb-10 grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-4 text-left">
    {facts.map(...)}
  </div>
  ```
- **Scarcity line** — small uppercase, e.g. `◆ Few seats remaining · reservation required ◆`
- **Two CTAs**: solid "Reserve" + outlined "Ask a question"
- Footer note in `text-foreground/60`

After this: a quiet "← Back to projects" link, then the global `<FooterSection />`.

---

## 4. Translation key schema

Use a flat namespace `<projectKey>.*` (e.g. `qm.*` for Quiet Music). All keys
provide both `de` and `en`. Empty string = section paragraph hidden.

```ts
// Hero
"<k>.label": "Project · <Name>"
"<k>.title": "..."
"<k>.subtitle": "..."
"<k>.hero.cta": "Reserve"
"<k>.hero.ctaSecondary": "Learn more"

// Concept
"<k>.concept.label": "Concept"
"<k>.concept.title": "..."
"<k>.concept.p1": "..."
"<k>.concept.p2": "..."         // optional, "" hides
"<k>.concept.p3": "..."         // optional, "" hides
"<k>.cta.join": "Join the next session"

// Video
"<k>.video.label": "Impression"
"<k>.video.title": "..."
"<k>.video.subtitle": "..."

// Flow
"<k>.flow.label": "How it unfolds"
"<k>.flow.title": "..."
"<k>.flow.step1.title" / ".text"
"<k>.flow.step2.title" / ".text"
"<k>.flow.step3.title" / ".text"
"<k>.duration" / "<k>.hours"
"<k>.format" / "<k>.formatValue"
"<k>.partner"

// Performers
"<k>.performers.label" / ".title"

// Testimonials
"<k>.reviews.label" / ".title"

// Gallery
"<k>.gallery.label" / ".title"

// Partner
"<k>.partnerBlock.label"
"<k>.partnerBlock.title"
"<k>.partnerBlock.intro"
"<k>.partnerBlock.question"
"<k>.partnerBlock.p1" / ".p2"
"<k>.partnerBlock.cta"

// Conversion
"<k>.info.when" / ".whenValue"
"<k>.info.where" / ".whereValue"
"<k>.info.time" / ".timeValue"
"<k>.info.tickets" / ".ticketsValue"
"<k>.info.note"
"<k>.final.label": "Ready?"
"<k>.final.title": "..."
"<k>.final.subtitle": "..."
"<k>.final.urgency": "Few seats remaining · reservation required"
"<k>.cta.reserve" / "<k>.cta.ask"
"<k>.back": "Back to all projects"
```

---

## 5. Performers / Testimonials data shape

Defined inline in the page component (or move to `src/data/<project>.ts`):

```ts
const performers = [
  { name: "Name", role: { de: "Klavier", en: "Piano" } },
  // ...
];

const testimonials = [
  {
    name: "Name",
    role: { de: "Beruf", en: "Profession" },
    text: { de: "...", en: "..." },
  },
];
```

---

## 6. Auto-hide rule (mandatory)

Any optional block must check its data before rendering — never produce empty UI.

```tsx
{performers.length > 0 && <PerformersSection />}
{testimonials.length > 0 && <TestimonialsSection />}
{gallery.length > 0 && <GallerySection />}
{partner && <PartnerSection />}
{videoUrl && <VideoSection />}
{t("<k>.concept.p2") && <p>{t("<k>.concept.p2")}</p>}
```

---

## 7. Design tokens (do NOT hardcode colors)

Use semantic Tailwind classes only:
`bg-background`, `bg-primary`, `bg-secondary/10`, `text-foreground`,
`text-foreground/80`, `text-primary`, `text-primary/70`, `border-border`,
`border-primary`, `border-primary/40`.

Typography:
- Display (headings): `font-display` → Cormorant Garamond, `font-light`
- Body: `font-body` → Outfit
- Eyebrows: `font-body text-sm tracking-[0.3em] uppercase text-primary`
- Buttons: `text-[11px] tracking-[0.3em] uppercase`

Spacing rhythm: `py-24 md:py-32` per section, `max-w-5xl px-6` containers.

---

## 8. Funnel diagram

```text
        ┌─────────────────────────┐
        │  HERO   (hook + CTAs)   │   awareness — wide
        └────────────┬────────────┘
        ┌────────────┴────────────┐
        │  CONCEPT (problem +     │   interest
        │           promise)      │
        └────────────┬────────────┘
        ┌────────────┴────────────┐
        │  VIDEO · FLOW           │   desire / show
        └────────────┬────────────┘
        ┌────────────┴────────────┐
        │  PERFORMERS · REVIEWS · │   trust
        │  GALLERY · PARTNER      │
        └────────────┬────────────┘
            ┌────────┴────────┐
            │   CONVERSION    │       action — narrowest
            │  facts + CTAs   │
            └─────────────────┘
```

---

## 9. Checklist when creating a new project page

- [ ] Add route in `App.tsx`
- [ ] Link from `ProjectsSection.tsx`
- [ ] Add `<projectKey>.*` translation keys (de + en) in `LanguageContext.tsx`
- [ ] Place hero / gallery images in `src/assets/`
- [ ] Wrap optional sections with auto-hide guards
- [ ] Conversion block: include When / Where / Time / Tickets + scarcity + 2 CTAs
- [ ] No hardcoded colors — only semantic tokens
- [ ] Test both `lang === "de"` and `lang === "en"`
