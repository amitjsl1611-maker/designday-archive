# DesignDay.co — Claude Handoff Document

> Give this file to Claude at the start of a new session. It covers everything built, every decision made, and exactly what still needs doing.

---

## Project Overview

**DesignDay.co** is a static archive website for a design meetup that ran 35 Bangalore editions (plus Mumbai and Delhi editions) from October 2012 to May 2017. Founded by Aashish Solanki.

**Stack:** Pure static — HTML5, CSS3, Vanilla JS only. No frameworks, no build tools, no npm. Everything runs from a Python HTTP server (`python3 -m http.server 3456`).

**Dev server config:** `.claude/launch.json` → name `designday`, port `3456`.

---

## File Structure

```
/
├── index.html              ← Homepage
├── index.css               ← Homepage styles
├── mobile.css              ← Mobile overrides
├── events.html             ← Archive grid page (all editions)
├── about.html              ← About page
├── volunteers.html         ← NOT YET BUILT (linked in nav, 404s)
├── CLAUDE-HANDOFF.md       ← This file
├── pages/
│   └── events/
│       └── edition.html   ← Single edition template (fetches from JSON)
├── data/
│   ├── editions.js         ← Master index (window.EDITIONS array, 45 objects)
│   └── editions/
│       ├── edition-01.json
│       └── ... (36 JSON files total, skipping 9 gap editions)
├── assets/
│   ├── logo/designday-logo.png
│   ├── photos/             ← Edition photos referenced by JSON
│   ├── favicon/
│   └── images/aashish/portrait.jpg  ← MISSING — needs to be added
├── designday-website-spec.md   ← Original full spec (content reference)
├── BRAND-NOTES.md
└── HANDOFF-hero-editions.md
```

---

## Design Tokens (defined inline in every page's `<style>` block)

```css
--paper:   #FFFFFF
--paper-2: #F4F3F1
--ink:     #1A1916
--ink-2:   #57564F
--ink-3:   #8E8D85
--accent:  #E24866   /* pink-red */
--gold:    #FBC02D
--green:   #74C044
--line:    rgba(26,25,22,.12)
--line-2:  rgba(26,25,22,.20)
--sans:    'Schibsted Grotesk', sans-serif
--mono:    'JetBrains Mono', monospace
--gut:     clamp(20px, 5vw, 80px)   /* page gutters */
--nav-h:   81px   /* homepage */ / 68px /* events, edition */
--ease:    cubic-bezier(.22,1,.36,1)
```

**Fonts:** Schibsted Grotesk (400/500/600/700/800) + JetBrains Mono (400/500) from Google Fonts.

**Icons:** Material Icons Round — `<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round">`. Used as `<span class="material-icons-round mi">icon_name</span>`.

---

## Button System

```css
.btn        { border-radius:999px; font-size:15px; font-weight:600; padding:13px 24px; }
.btn-ghost  { border:1px solid var(--line-2); }           /* hover: paper-2 bg */
.btn-dark   { background:var(--ink); color:white; }       /* hover: accent bg */
.btn-green  { background:#2E8B23; color:white; }          /* primary CTA */
```

---

## Navigation — THE RULE (match this exactly on every page)

Every page uses the same nav. The homepage was the source of truth — **always match it exactly**.

```html
<header class="nav">
  <a href="[root]/index.html" aria-label="DesignDay home">
    <img class="brand-logo" src="[root]/assets/logo/designday-logo.png" alt="DesignDay" width="156" height="44">
  </a>
  <nav class="nav-links">
    <a href="[root]/about.html">About</a>
    <a href="[root]/volunteers.html">Volunteers</a>
    <a href="[root]/events.html">Browse the archive</a>
  </nav>
</header>
```

Nav CSS — **use `padding:18px var(--gut)` not a fixed `height`**. This is critical — inner pages previously used `height: var(--nav-h)` which made the nav taller than the homepage. The correct rule for every page:

```css
.nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px var(--gut);                /* ← padding-based, NOT height-based */
  background: rgba(255,255,255,.92); backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.brand-logo  { height: 44px; width: auto; display: block; }
.nav-links   { display: flex; align-items: center; gap: clamp(18px,2.4vw,34px); }
.nav-links a { font-size: 15px; font-weight: 500; color: var(--ink-2); }
.nav-links a.active { color: var(--ink); font-weight: 600; }
```

- Add `class="active"` on the link matching the current page
- Path prefix for root pages (`index`, `events`, `about`): `assets/...`
- Path prefix for `pages/events/edition.html`: `../../assets/...`

---

## Page: `index.html` — Homepage

### Hero section layout

The hero fills exactly one viewport screen below the nav (`min-height: calc(100vh - var(--nav-h))`), then the city cards appear on scroll.

Structure:
```
[nav — sticky]
[.hero — flex column, min-height: calc(100vh - var(--nav-h))]
  [.hero-top — flex:1, centers h1 vertically]
    [h1 with inline .hero-chip and .hero-slide pills]
  [.hero-facts — margin:auto auto [bottom gap], sits equidistant between h1 and ticker]
    3 stat facts (2012–2017 / 3 cities / 35 editions)
  [.marquee — margin-top:auto, pinned to bottom of hero, full-bleed]
[.cities — city cards, first visible after scroll]
```

Key CSS decisions:
- **No CTAs in hero** — "Browse all 35 editions" and "Find us on Facebook" buttons were removed
- **No "An Aashish Solanki initiative" line** — removed
- **No large centered logo** — logo lives only in the sticky nav
- `hero-facts` uses `margin: auto auto clamp(40px,5vh,64px)` — the `margin-top:auto` floats it down away from h1, the bottom margin creates breathing room above the ticker
- Facts font sizes: `.fv` = `clamp(29px,2.5vw,36px)`, `.fl` = `clamp(14px,1.2vw,17px)` (20% larger than original)
- Marquee uses `margin-top:auto` to pin to bottom, plus negative left/right margins to break out of the `--gut` padding

### City Cards Section

Below the fold. Three tall rectangular cards (64vh height), equal width, flex row.

```html
<section class="cities" id="about">
  <p class="cities-header">A movement across 3 cities</p>
  <div class="city-cards">
    <a class="city-card" href="events.html" aria-label="Bengaluru editions">
      <div class="city-card-img" style="background-image:url('...')"></div>
      <div class="city-card-fade"></div>
      <span class="city-card-name">Bengaluru</span>
    </a>
    <!-- Mumbai, Delhi same pattern -->
  </div>
</section>
```

Hover behaviour: image scales up slightly, dark bottom gradient fades in, city name slides up. All via CSS transitions.

Current images: Unsplash placeholder URLs. **Should be replaced** with:
- Bengaluru → Vidhana Soudha photo
- Mumbai → Gateway of India photo
- Delhi → India Gate photo

Cards currently all link to `events.html`. Once city filtering is wired, update to `events.html?city=Bengaluru` etc.

---

## Page: `events.html` — Archive Grid

**URL params:** `?year=2017` pre-selects a year filter.

**Layout:**
- Sticky nav (`padding: 18px var(--gut)`, no fixed height)
- Page header: "Thirty-five editions, one city at a time."
- Sticky filter bar (below nav, `top: var(--nav-h)`): city tabs + year pills
- Card grid

**Year pills:** per-year edition counts, default 2017. Clicking active pill deselects → shows all. No "All" pill.

**Cards:** 4px radius, order: Image → Date → Title → Theme (accent) → Venue.

**City tabs:** Bengaluru active. Mumbai and Delhi have `.soon` class — display only, no filter.

---

## Page: `pages/events/edition.html` — Edition Detail

**URL param:** `?slug=edition-01`

Full viewport layout (no page scroll):
```
[sticky nav]
[.page-main: height = 100vh - var(--nav-h), flex column]
  [.page-body: 50/50 grid, flex:1]
    [.col-left]                        [.col-right]
      ← Back to archive (ghost pill)    .ed-hero (flex:1, cover image)
      h1 .ed-title                      .ed-thumbs strip (up to 4 from gallery[])
      .ed-desc paragraph                  — hidden if gallery[] is empty
      .detail-grid (2×2):
        Date / Theme / Venue / City
        (Material Icons + mono labels)
      View on Facebook (dark pill)
        — hidden if ed.facebook is empty
  [.edition-nav: 72px white bar]
    ← Previous edition    Next edition →
```

**Data flow:** fetch `../../data/editions/[slug].json` → inject into DOM → `buildBottomNav()` reads `window.EDITIONS` from `data/editions.js` for prev/next links.

**Image path:** `../../assets/photos/` + `ed.photo`.

---

## Page: `about.html`

Three full-width sections separated by `border-bottom: 1px solid var(--line)`.

**WHAT** — 2-column grid (1fr / 1fr):
- Left: section label + h2 + 2 paragraphs
- Right: 2×3 stats grid (35 editions / 5 years / 6,000+ members / 200+ sessions / 3 cities / ₹100)

**WHY** — 2-column grid (1fr / 2fr): label left, story + blockquote right.

**WHO** — 2-column grid (1fr / 1fr):
- Left: portrait photo (`assets/images/aashish/portrait.jpg` — **file missing**)
- Right: Aashish bio + links (NetBramha Studios, LinkedIn)

Page title: "Fifty editions. All volunteer driven." — font-weight 600, no italic.

---

## Page: `volunteers.html` — NOT BUILT

Linked in nav on all pages, currently 404s. Needs creating with same nav/footer pattern.

---

## Data Architecture

### `data/editions.js` — `window.EDITIONS`
Array of 45 objects. 9 have `gap: true` (unknown data, hidden everywhere). 36 are real editions.

```js
{
  slug: "edition-01",
  num: "#01",        // ← already includes #, don't add another one in templates
  title: "...",
  theme: "...",
  date: "Sat, 20 Oct 2012",
  year: 2012,
  venue: "...",
  city: "Bengaluru",
  photo: "filename.jpg",
  gap: false,
  carousel: false,   // unused — feature was removed
  gallery: []
}
```

### `data/editions/[slug].json` — per-edition detail
Same fields plus:
```json
"facebook": "",    ← EMPTY — needs real Facebook event URLs
"gallery": []      ← EMPTY — add up to 4 photo filenames for thumbnail strip
```

---

## Pending Work (priority order)

| Task | File(s) | Notes |
|------|---------|-------|
| Build `volunteers.html` | New file | Linked in nav everywhere, currently 404 |
| Add Aashish portrait | `assets/images/aashish/portrait.jpg` | Used in about.html WHO section. Save locally, don't hotlink |
| Fill Facebook URLs | `data/editions/*.json` | Add real FB event URLs to `"facebook"` field. Button auto-appears |
| Replace city card images | `index.html` | Swap Unsplash placeholders with real local photos |
| Wire city URL params | `events.html` + `index.html` | City tabs are stub only. Once wired, update city card href to `events.html?city=Bengaluru` etc. |
| Add gallery photos | `data/editions/*.json` | Add filenames to `gallery[]`. Thumbnails appear automatically in edition pages |
| Hero photo strip | `index.html` | See `HANDOFF-hero-editions.md` for which edition photos go in the homepage hero inline chips |

---

## Known Quirks & Decisions

- **Nav must use `padding:18px` not `height: var(--nav-h)`** — inner pages previously used a fixed height which made the nav taller than the homepage. Always use padding-based nav.
- **`num` field already contains `#`** — stored as `"#01"`, not `1`. Templates must use `ed.num` directly, never prepend another `#`.
- **Edition page has no scroll** — `height: calc(100vh - var(--nav-h))` makes it exactly one screen. Content fits within that.
- **Gap editions** — 9 editions with `gap: true` are invisible everywhere: not shown in the grid, skipped in prev/next nav.
- **Year filter default is 2017** — most recent first. Deliberate.
- **No "All" pill** — deselecting an active year pill shows all editions.
- **City tabs for Mumbai/Delhi are display-only** — marked `.soon`, no filter logic yet.
- **Carousel field is dead** — `carousel: true/false` in JSON does nothing. Feature was removed.
- **City card images are Unsplash placeholders** — will need replacing with real photos before launch.

---

## Claude Instance Context

Project owner: Amit (amit.jsl1611@gmail.com). Static archive site, all design decisions made conversationally. The `designday-website-spec.md` file in the root is the original brief — consult it for any content questions.
