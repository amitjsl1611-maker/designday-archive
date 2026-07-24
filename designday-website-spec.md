# DesignDay Website — Full Project Specification
> For use in Claude Code. Read this entirely before writing a single line of code.

---

## 1. Project Overview

**Project:** DesignDay.co — Archive & Introduction Website
**Type:** Static website (HTML5 / CSS3 / Vanilla JS only)
**Purpose:** Archive 35 editions of the DesignDay design community meetup, while serving as an introduction for future visitors. The initiative has concluded; this is a living archive, not an active event page.
**Owner:** Aashish Solanki, Founder & Curator
**Primary City Focus:** Bengaluru (scalable to Mumbai and Delhi later)
**Hosting:** GitHub Pages → eventually live at designday.co
**Status at time of writing:** Domain not yet pointed. Build locally, deploy to GitHub Pages first.

---

## 2. Design Language

### Principles
- Minimal
- Premium
- Editorial
- White-space driven
- Image-centric
- Design-first
- Fast and lightweight
- Responsive (mobile-first)

### Theme
- **Background: White / light** — NOT dark
- Clean, breathable, modern
- Influenced by: Apple, Awwwards, Framer templates, Figma Config microsites, Stripe storytelling

### Reference Designs (Study These)
Four HTML variants were developed as direction references. Key elements to borrow:

| Variant | Best Element to Use |
|---------|-------------------|
| `handstamp` | Warm cream tones, rounded cards, pill CTAs |
| `pallet` | Floating shell card layout, city folder-tab concept for multi-city expandability |
| `scroll` | Scroll-pinned timeline concept for the About page, marquee edition ticker |
| `sharp` | Hover-invert edition list rows for the archive, mosaic image hero treatment |

The final build should feel closest to **pallet + sharp** — structured, editorial, confident.

---

## 3. Brand Identity

### Logo
- File: `logo_transparent.psd` (518 × 86px RGBA)
- Export as SVG and PNG (transparent background) for web use
- Wordmark: **"designday"** in dark charcoal + **".co"** in yellow `#E0C000`
- Icon mark: geometric play-button triangle, split into coral (left) and yellow/gold (right)
- SVG approximation of icon mark:
```svg
<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="3,3  3,28  15,15.5" fill="#C8334E"/>
  <polygon points="15,15.5  27,3   27,15.5" fill="#E0C000"/>
  <polygon points="15,15.5  27,15.5 27,28" fill="#C09A00"/>
</svg>
```

### Color Palette
```css
:root {
  /* Backgrounds */
  --bg:          #FFFFFF;   /* page background */
  --bg-subtle:   #F6F6F6;   /* alternate sections */
  --bg-card:     #F2F2F2;   /* card fills */

  /* Text */
  --text:        #0D0D0D;   /* primary */
  --text-2:      #4A4A4A;   /* secondary body */
  --text-muted:  #9A9A9A;   /* labels, captions */
  --text-dim:    #D4D4D4;   /* dividers, placeholder */

  /* Brand accents (from logo) */
  --coral:       #C8334E;   /* primary accent — CTA, highlights, active states */
  --coral-hover: #A8273F;   /* coral hover */
  --yellow:      #E0C000;   /* secondary accent — ".co", logo */

  /* Borders & shadows */
  --border:      rgba(0,0,0,0.08);
  --shadow-sm:   0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  --shadow-md:   0 2px 8px rgba(0,0,0,0.07), 0 8px 28px rgba(0,0,0,0.07);
}
```

### Typography
- **Primary font:** Manrope (Google Fonts)
- **Standby font:** Open Sans (Google Fonts) — available but not primary
- **Weights used:** 300, 400, 500, 600, 700, 800
- **Load via Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```
- **Type scale:**
  - Display / Hero: `clamp(32px, 5vw, 64px)`, weight 800, tracking `-0.03em`
  - H2 section titles: `clamp(22px, 2.8vw, 38px)`, weight 700, tracking `-0.02em`
  - H3 card titles: `16–18px`, weight 700
  - Body: `15–16px`, weight 400, line-height `1.75`
  - Labels / eyebrows: `10–11px`, weight 700, tracking `0.18–0.22em`, uppercase
  - Captions / meta: `11–13px`, weight 500, color `var(--text-muted)`

---

## 4. Tech Stack

```
HTML5       — semantic markup, no divitis
CSS3        — custom properties, grid, flexbox, no frameworks
Vanilla JS  — lightweight, no libraries unless absolutely required
Fonts       — Google Fonts (Manrope)
Icons       — inline SVG only (no icon font libraries)
Images      — lazy loaded, optimised JPG/WebP
```

**Explicitly forbidden:**
- React, Angular, Vue, or any JS framework
- Bootstrap, Tailwind, or any CSS framework
- jQuery
- Any CDN dependency that could go offline

---

## 5. Folder Structure

```
designday/
├── index.html                  ← Home / Landing page
├── about.html                  ← About page
├── events.html                 ← Events archive (all 35 editions)
├── contact.html                ← Contact page
│
├── pages/
│   └── events/
│       ├── edition-01.html     ← Individual event detail pages
│       ├── edition-06.html
│       └── ... (one per edition)
│
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── designday-logo.svg
│   │   │   ├── designday-logo.png
│   │   │   └── designday-icon.svg
│   │   ├── events/
│   │   │   ├── 2012/
│   │   │   ├── 2013/
│   │   │   ├── 2014/
│   │   │   ├── 2015/
│   │   │   ├── 2016/
│   │   │   └── 2017/
│   │   ├── aashish/
│   │   │   └── portrait.jpg
│   │   └── placeholders/
│   │       └── event-placeholder.jpg
│   │
│   ├── css/
│   │   ├── tokens.css          ← all CSS custom properties
│   │   ├── base.css            ← reset, body, typography
│   │   ├── nav.css             ← navigation component
│   │   ├── carousel.css        ← hero carousel
│   │   ├── cards.css           ← event cards
│   │   ├── footer.css          ← footer
│   │   └── responsive.css      ← all media queries
│   │
│   ├── js/
│   │   ├── carousel.js         ← hero carousel logic
│   │   ├── nav.js              ← sticky nav + mobile menu
│   │   └── utils.js            ← shared utilities
│   │
│   └── fonts/                  ← empty (using Google Fonts CDN)
│
└── README.md
```

---

## 6. Site Structure / Information Architecture

### Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/index.html` | Hero carousel, intro, featured events, founder teaser, footer |
| About | `/about.html` | What / Why / Who — storytelling layout |
| Events Archive | `/events.html` | All 35 editions in a grid/list layout |
| Event Detail | `/pages/events/edition-XX.html` | Individual edition page |
| Contact | `/contact.html` | Email, social links, no form |

### Navigation (all pages)
- **Logo** (left)
- **Links** (right): Home · About · Events Archive · Contact
- Sticky on scroll
- Mobile hamburger below 680px
- Active page indicator: coral underline

---

## 7. Page Specifications

---

### 7.1 Home (`index.html`)

**Layout order:**
1. Sticky nav
2. Hero carousel (padded from edges, NOT fullscreen)
3. Intro tagline + description (two-column)
4. Divider
5. Featured events (3 cards)
6. Footer

**Hero Carousel:**
- Starts immediately below the nav (not fullscreen)
- Has `32px` horizontal margin on each side (so it does NOT touch the browser edges)
- `border-radius: 16px`
- Height: `520px` desktop, `380px` tablet, `280px` mobile
- `overflow: hidden`
- Subtle `box-shadow`
- Auto-advances every 6.5 seconds
- Pauses on hover
- Touch/swipe support on mobile
- Keyboard arrow support
- **Navigation: dots only** (no ticker, no progress bar)
  - Dots: 6px circles, active = white filled + scale(1.35)
  - Ghost circular prev/next arrows on left/right edges of the carousel
- **Slide text** positioned bottom-left, overlaid on image
  - Gradient overlay: bottom 40% only
  - Edition label (coral, uppercase, small)
  - Event title (large, white, bold)
  - Meta: date + venue (muted white)
- **Slides use Unsplash placeholders until real photos are supplied**
  - Comment every `background-image` URL clearly: `/* REPLACE: event photo for [edition name] */`

**4 Carousel Slides (in order):**
1. Behance Portfolio Review — Graphic Design · 13 May 2017
2. Design Thinking 2.0 — Storm the Norm · 16 Apr 2016
3. Design for Accessibility · 19 Jul 2014
4. First DesignDay.co — Where It All Began · 20 Oct 2012

**Intro section (below carousel):**
- Two-column: tagline left, description right
- Tagline: `"Where designers in India came to inspire & grow."` — "inspire & grow" in coral
- Description: short paragraph about DesignDay + link to About page
- No animated counters
- No scroll-reveal animations

**Featured Events (3 cards):**
- 3-column grid, gap `16px`
- Each card: image (16:9) + edition label (coral) + title + date
- Subtle border + shadow, hover lifts card `3px`
- Links to individual event detail pages

**No sections beyond these on the homepage.** Keep it tight.

---

### 7.2 About (`about.html`)

**Three-section vertical storytelling layout:**

#### Section A — WHAT
- Large editorial typography
- Animated counters (trigger on scroll into viewport):
  - `35` Bangalore Editions
  - `5` Years Active
  - `6,000+` Community Members
  - `200+` Total Sessions
  - `3` Cities
- Supporting image or graphic
- Short paragraph explaining what DesignDay was

#### Section B — WHY
- Story of why DesignDay was founded
- Purpose / Mission / Vision / Community impact
- Pull quote from Aashish

#### Section C — WHO
- Portrait of Aashish Solanki
  - Image source: `https://aashish.com/assets/aashish-img.png`
  - Fallback: branded placeholder
- Bio (3rd person):

> Aashish Solanki is an award-winning product designer and design entrepreneur with over 16 years of experience working with Fortune 500 companies and startups across the world. As the Founder and Design Director of NetBramha Studios — one of India's most respected design consultancies — Aashish has helped brands like Google, Microsoft, Unilever, and Cisco rethink how they connect with over a billion users.
>
> A relentless advocate for India's design ecosystem, he founded DesignDay.co in 2012 as a monthly gathering to inspire, upskill, and connect designers across disciplines. Over five years, DesignDay grew to 35 Bangalore editions, 200+ total sessions across three cities, and a community of over 6,000 designers.
>
> He teaches design thinking at IIM Bangalore, has spoken at TEDx, UXIndia, MetaRefresh, and L'École de design Nantes Atlantique, and was awarded the Eminent Engineer Award by the Chief Minister of Karnataka for his contributions to India's design and tech ecosystem.

- Social links: LinkedIn, Twitter/X, Instagram
- Link to NetBramha Studios

---

### 7.3 Events Archive (`events.html`)

**Layout:**
- Masonry grid or responsive card grid
- Filter bar at top: by Year, optionally by Theme (future)
- 35 cards total (Bangalore only for now)
- Architecture must support adding Mumbai and Delhi editions later — use `data-city="bangalore"` attributes on cards for future JS filtering

**Each card shows:**
- Banner/event image (placeholder if no photo)
- Edition number (if applicable)
- Event title
- Date
- Venue
- Short description (1 line)

**Clicking a card** → navigates to `/pages/events/edition-XX.html`

**City scalability:** Add a city filter tab (Bengaluru / Mumbai / Delhi) visually present but only Bengaluru active for now. Others show "Coming soon."

---

### 7.4 Event Detail Page (`/pages/events/edition-XX.html`)

**Layout per page:**
- Large hero image (full-width, aspect ratio 16:7)
- Event title + metadata (date, venue, theme, edition)
- Description paragraph
- Gallery (responsive grid, lightbox optional)
- Speakers section (portrait + name + title)
- Videos (YouTube embed if available)
- Community partners + sponsors (logos)
- Back to Archive button (top-left)

**Template:** Build ONE reusable HTML template. Each edition page uses the same structure; only the content changes. Comment every content block clearly for easy editing.

---

### 7.5 Contact (`contact.html`)

**Simple. No form.**

Content:
- Short intro line
- Email address
- Social links:
  - Facebook: `https://www.facebook.com/DesignDayco`
  - (Add Instagram, LinkedIn, Twitter if Aashish confirms handles)
- Credits: "A NetBramha Initiative"

---

## 8. Global Components

### Navigation
```
[Logo mark] designday.co    Home · About · Events Archive · Contact
```
- `position: sticky; top: 0; z-index: 100`
- Background: `rgba(255,255,255,0.92)` with `backdrop-filter: blur(20px)`
- `border-bottom: 1px solid var(--border)` always visible (not scroll-triggered)
- Height: `68px`
- Active link: bold + coral underline `1.5px`
- Mobile: hamburger toggle, fullscreen overlay menu below 680px
- Logo links to `index.html`

### Footer
```
[Logo]    Home · About · Events Archive · Contact · Facebook    © DesignDay.co · A NetBramha Initiative
```
- `border-top: 1px solid var(--border)`
- Three-column flex layout
- Collapses to stacked on mobile

---

## 9. Complete Events List — Bangalore (35 Editions)

Use this as the single source of truth for all event data across all pages.

> **Note on numbering:** Editions were numbered in the early years (1–24+) then switched to theme-based titles. Edition numbers where confirmed are marked. Gaps exist in the numbered sequence — those editions likely happened but data is missing.

| Slug | Date | Title | Venue | Edition # |
|------|------|-------|-------|-----------|
| `edition-01` | Sat, 20 Oct 2012 | First DesignDay.co | Bengaluru | #01 |
| `edition-02` | ~Nov 2012 | Edition 02 | Bengaluru | #02 * |
| `edition-03` | ~Dec 2012 | Edition 03 | Bengaluru | #03 * |
| `edition-04` | ~Jan 2013 | Edition 04 | Bengaluru | #04 * |
| `edition-05` | ~Feb 2013 | Edition 05 | Bengaluru | #05 * |
| `edition-06` | Sat, 16 Mar 2013 | Design Day 06 — March 2013 | Microsoft Research, Bangalore | #06 |
| `edition-07` | Sat, 20 Apr 2013 | Design Day 07 — April 2013 | Microsoft Research, Bangalore | #07 |
| `edition-08` | Sat, 18 May 2013 | Design Day 08 — May 2013 | Microsoft Research, Bangalore | #08 |
| `edition-cocreation` | Sun, 9 Jun 2013 | Design Day First Co-Creation Lab! | Bengaluru | Special |
| `edition-09` | ~Jul 2013 | Edition 09 | Bengaluru | #09 * |
| `edition-10` | Sat, 24 Aug 2013 | Design Day #10 — August 2013 | Bengaluru | #10 |
| `edition-11` | Sat, 21 Sep 2013 | Design Day #11 — GAME DESIGN! | Idiom Design & Consultancy, Bengaluru | #11 |
| `edition-12` | Sat, 19 Oct 2013 | Design Day #12 — Anniversary Edition! | Bengaluru | #12 |
| `edition-13` | Sat, 16 Nov 2013 | Design Day #13 — Automobile Design | Microsoft Research, Bangalore | #13 |
| `edition-14` | Sat, 21 Dec 2013 | Design Day #14 — Selling Design | Microsoft Research, Bangalore | #14 |
| `edition-15` | Sat, 18 Jan 2014 | Design Day Bangalore #15 — Visual Communication Design | Microsoft Research, Bangalore | #15 |
| `edition-16` | ~Feb 2014 | Edition 16 | Bengaluru | #16 * |
| `edition-17` | Sat, 15 Mar 2014 | Design Day #17 Bangalore — Product Design | Microsoft Research, Bangalore | #17 |
| `edition-18` | Sat, 19 Apr 2014 | Design Day Bangalore, Edition 18 — Mobile User Experience | Microsoft Research, Bangalore | #18 |
| `edition-19` | ~May 2014 | Edition 19 | Bengaluru | #19 * |
| `edition-20` | Sat, 21 Jun 2014 | Design Day Bangalore, Edition 20 — Design Documentation | Bengaluru | #20 |
| `edition-21` | Sat, 19 Jul 2014 | Design Day Bangalore, Edition 21 — Design for Accessibility | Microsoft Research, Bangalore | #21 |
| `edition-22` | ~Aug 2014 | Edition 22 | Bengaluru | #22 * |
| `edition-23` | ~Sep 2014 | Edition 23 | Bengaluru | #23 * |
| `edition-24` | Sat, 18 Oct 2014 | Design Day Bangalore #24 — Future by Design | Bengaluru | #24 |
| `edition-25` | Sat, 17 Jan 2015 | Design Day Bangalore — Toy Design | IBM EGL Techpark, Bengaluru | — |
| `edition-26` | Sat, 21 Feb 2015 | Bangalore Design Day — User Research | Bengaluru | — |
| `edition-27` | Sat, 28 Mar 2015 | Design Day Bangalore — Furniture Design | IBM EGL, Bengaluru | — |
| `edition-28` | Sat, 25 Apr 2015 | Design Day Bangalore — Art in Design | IBM EGL, Bengaluru | — |
| `edition-29` | Sat, 23 May 2015 | Design Day Bangalore — Women Entrepreneurs in Design | Bengaluru | — |
| `edition-30` | Sat, 20 Jun 2015 | DesignDay Bangalore — Human Machine Interaction for Consumer Products | Bengaluru | — |
| `edition-31` | Sat, 18 Jul 2015 | DesignDay Bangalore — Ideation Techniques Within Product Design Process | Bengaluru | — |
| `edition-32` | Sat, 29 Aug 2015 | DesignDay Bangalore — Thinking Visually | Bengaluru | — |
| `edition-33` | Sat, 19 Sep 2015 | DesignDay Bangalore — Storytelling: Narratives Indian Context | Bengaluru | — |
| `edition-34` | Sat, 21 Nov 2015 | Design Day Bangalore — Tales and Perspectives | Bengaluru | — |
| `edition-35` | Sat, 19 Dec 2015 | DesignDay Bangalore — Face/InterFace | Bengaluru | — |
| `edition-36` | Sat, 23 Jan 2016 | DesignDay Blr — Creative Film Making | Bengaluru | — |
| `edition-37` | Sat, 20 Feb 2016 | DesignDay Blr — Low Tolerance for Bullshit | Bengaluru | — |
| `edition-38` | Sun, 20 Mar 2016 | DesignDay at Dfrost 2016 | NID R&D Campus, Bengaluru | — |
| `edition-39` | Sat, 16 Apr 2016 | Design Thinking 2.0 — Storm the Norm | Bengaluru | — |
| `edition-40` | Sat, 14 May 2016 | Behance Portfolio Review Fest | LINK Innovations / NUMA, Bengaluru | — |
| `edition-41` | Sat, 18 Jun 2016 | Insights into Graphic Noveling | TLabs, Bengaluru | — |
| `edition-42` | Sat, 21 Jan 2017 | Design Day Bangalore — Transportation & Cities | Idiom Design & Consulting, Bengaluru | — |
| `edition-43` | Sat, 25 Mar 2017 | Design for Services | Idiom Design & Consulting, Bengaluru | — |
| `edition-44` | Sat, 13 May 2017 | Behance Portfolio Review Weekend — Graphic Design | Idiom Design & Consulting, Bengaluru | — |

> Rows marked `*` = dates estimated, content unknown. Build placeholder pages or skip until data is confirmed. There was also a gap in events Oct 2015, and a run of cancelled events Aug–Nov 2016 on Meetup (do not include cancelled ones).

**Total confirmed unique Bangalore editions visible from screenshots: 35**
*(Editions #02–05, #09, #16, #19, #22–23 = 7 gaps. Owner to confirm or fill.)*

---

## 10. Key Metrics (for About page stats block)

| Metric | Value | Source |
|--------|-------|--------|
| Bangalore Editions | 35 | Extracted from FB + Meetup screenshots |
| Total sessions (all cities) | 200+ | Aashish's public bios (2018) |
| Years active | 5 | Oct 2012 – May 2017 |
| Cities | 3 | Bengaluru, Mumbai, Delhi |
| Online community members | 6,000+ | Teardown.in speaker bio (Jun 2018) |
| Meetup members | 2,662 | Meetup page screenshot |
| Facebook followers | 2,400+ | Facebook page screenshot |
| Entry fee per event | ₹100 | Meetup event description |
| Event cadence | 3rd Saturday of every month | Meetup description |
| Est. Bangalore attendees | ~1,200+ | Calculated (~35 avg × 35 editions) |

---

## 11. Founder — Aashish Solanki

**Portrait:** `https://aashish.com/assets/aashish-img.png`
Save locally to `/assets/images/aashish/portrait.jpg` — do not hotlink.

**Bio (3rd person, for About page WHO section):**
See Section 7.2 above.

**Key credentials for About page:**
- Founder & Design Director, NetBramha Studios
- Co-founder, HeadStart Network (NFP)
- Teaches at IIM Bangalore
- Spoke at TEDx, UXIndia, MetaRefresh, 500 Startups, L'École de design Nantes Atlantique
- Eminent Engineer Award — CM of Karnataka
- IDEO Fellow shortlist
- 16+ years experience
- Clients: Google, Microsoft, Cisco, Shell, Unilever, Alcatel Lucent, EMAAR

**Social links (confirmed):**
- Facebook community: `https://www.facebook.com/DesignDayco`
- Aashish's site: `https://aashish.com`
- NetBramha: `https://netbramha.com`

---

## 12. Assets Status

| Asset | Status | Action |
|-------|--------|--------|
| Logo PSD | ✅ Provided | Convert to SVG + PNG |
| Aashish portrait | ✅ Public URL | Download and save locally |
| Event photos | ⏳ Pending | Owner to provide Google Drive link |
| Event banner posters | ⏳ Pending | Extractable from Facebook event pages |
| Sponsor logos | ⏳ Unknown | Ask owner |
| YouTube event recordings | ⏳ Unknown | Ask owner |

**Until real photos arrive:** Use Unsplash placeholders. Tag every placeholder image with:
```html
<!-- PLACEHOLDER: Replace with [edition name] event photo -->
```
And every placeholder CSS background with:
```css
/* REPLACE: /assets/images/events/2017/behance-review.jpg */
```

---

## 13. Performance Requirements

- Lighthouse score: 90+ on all four metrics
- No render-blocking resources
- All images: lazy loaded (`loading="lazy"`)
- Images served as WebP where possible, JPG fallback
- Google Fonts loaded with `display=swap`
- No unused CSS
- JS deferred or at end of `<body>`
- Total page weight: under 500KB (excluding images)
- Semantic HTML throughout (`nav`, `main`, `section`, `article`, `footer`, `h1–h3`)
- WCAG 2.1 AA accessibility minimum
- `prefers-reduced-motion` respected for all animations

---

## 14. SEO

- Each page has a unique `<title>` and `<meta name="description">`
- `<meta property="og:image">` for social sharing
- Canonical URLs
- `<html lang="en">`
- Structured data (JSON-LD) for events on detail pages (optional but recommended)

**Page titles:**
- Home: `DesignDay — A Design Community Initiative`
- About: `About — DesignDay.co`
- Events Archive: `Events Archive — 35 Editions — DesignDay.co`
- Contact: `Contact — DesignDay.co`
- Event detail: `[Event Title] — DesignDay.co`

---

## 15. Future Expandability

The codebase must support adding the following without major refactoring:

- Additional editions (Mumbai, Delhi)
- City filter on the archive page
- Sponsors section
- Blog / News section
- Video gallery
- Community gallery
- A newsletter signup (just an email field → Mailchimp or similar)

**How to future-proof it:**
- Use `data-` attributes on event cards (`data-city`, `data-year`, `data-theme`)
- Use a consistent JSON-like comment block at the top of each event detail page to make future templating easy
- Keep CSS variables in one `tokens.css` file — nothing hardcoded in component files

---

## 16. Code Standards

- **Comments:** Comment every major section clearly. Someone unfamiliar with the code should be able to edit an event card in under 2 minutes.
- **No duplication:** Extract repeated patterns to reusable CSS classes
- **CSS specificity:** Keep selectors flat — avoid nesting more than 2 levels deep
- **Variables:** All colours, spacing, and typography values via CSS custom properties in `tokens.css`
- **No inline styles** except for dynamic background images (carousels, event cards)
- **Responsive breakpoints:**
  - Mobile: < 480px
  - Tablet: 480px – 900px
  - Desktop: 900px+

---

## 17. Deployment — GitHub Pages

1. Repo name: `designday-website` (public)
2. Enable GitHub Pages: Settings → Pages → Branch: `main` → Folder: `/ (root)`
3. Site live at: `https://[username].github.io/designday-website`
4. Custom domain later: `designday.co`
   - Add CNAME file to repo root with value `designday.co`
   - Add CNAME record at domain registrar pointing to `[username].github.io`
   - GitHub handles SSL automatically

---

## 18. Build Order (Recommended Sequence for Claude Code)

1. `tokens.css` — all design tokens
2. `base.css` — reset, body, typography
3. `nav.css` + `nav.js` — navigation component
4. `index.html` — homepage (carousel + intro + 3 cards + footer)
5. `carousel.css` + `carousel.js`
6. `cards.css` — event card component
7. `footer.css`
8. `events.html` — archive grid with all 35 editions
9. `pages/events/edition-template.html` — single event detail template
10. Generate all individual edition pages from template
11. `about.html`
12. `contact.html`
13. Responsive pass — test all breakpoints
14. Performance pass — lazy load, image optimisation, Lighthouse audit
15. SEO pass — meta tags, OG tags, structured data

---

## 19. Questions Still Open (Owner to Answer Before Full Build)

1. **Editions #02–05, #09, #16, #19, #22–23** — any data on these? Dates, themes, venues?
2. **Photo dump** — share as Google Drive public folder link
3. **Speakers list** — names per edition (even partial)
4. **YouTube recordings** — any editions were filmed?
5. **Sponsors / partners** — any logos to include?
6. **Instagram / Twitter / LinkedIn** for DesignDay or Aashish — confirm handles
7. **Oct 2015 gap** — was there an event that month?
8. **Peak attendance** — which edition had the most people?
9. **Design direction** — confirm which of the 4 reference variants (handstamp / pallet / scroll / sharp) to build closest to

---

*Document compiled from: Facebook events screenshot, Meetup events screenshot, public speaker bios, Meetup group description, designday.co logo PSD analysis, aashish.com, netbramha.com, and conversation context.*

*Last updated: June 2026*
