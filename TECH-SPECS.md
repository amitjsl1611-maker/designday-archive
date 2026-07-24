# DesignDay — Technical Specification

A short, practical reference for anyone working on this site.

## Stack

- HTML5, CSS3, and vanilla JavaScript. No frameworks, no libraries, no build step.
- Fonts from Google Fonts: Schibsted Grotesk (display) and JetBrains Mono (accent), loaded with `display=swap`.
- All interactivity is hand-written vanilla JS at the end of each page.

## File structure

```
index.html              Home
index.css               Tokens + base + homepage component styles
mobile.css              Homepage responsive breakpoints
events.html             Archive grid (self-contained, inline <style>)
pages/events/
  edition.html          Reusable edition-detail template
data/
  editions.js           window.EDITIONS — the master list
  editions/<slug>.json  One record per non-gap edition (read by the detail page)
assets/
  logo/  favicon/  photos/  fonts/
```

## Pages

- **Home** (`index.html`): hero with the story, a scroll-pinned timeline of 2012–2017, a testimonial, a closing archive CTA, and a footer. Styles in `index.css` + `mobile.css`.
- **Archive** (`events.html`): builds a card grid from `window.EDITIONS`, filters by year (pills), and has city tabs reserved for future Mumbai and Delhi editions. Cards link to the detail page with `?slug=`.
- **Edition detail** (`pages/events/edition.html`): reads `?slug=` from the URL, fetches `../../data/editions/<slug>.json`, renders the content, and builds prev/next navigation from `window.EDITIONS`.

## Data model

`data/editions.js` defines `window.EDITIONS`, an array of edition objects. Core fields:

- `slug`, `year`, `num`, `date`, `title`, `theme`, `venue`, `city`, `photo`
- `gap: true` marks an edition we know happened but have no content for yet. These are skipped in the archive grid and have no detail page.
- Optional fields reserved for later: `gallery`, `facebook`, `carousel`.

Each non-gap edition also has a matching `data/editions/<slug>.json` that the detail page fetches. Today these mirror the `editions.js` records, so a content edit currently needs to land in both places.

## Styling

- Design tokens are CSS custom properties: `--paper`, `--ink`, `--accent`, `--gold`, `--green`, `--sans`, `--mono`, `--gut`, `--nav-h`, `--ease`.
- The homepage uses external `index.css` and `mobile.css`. `events.html` and `edition.html` currently keep their own inline `<style>` blocks.

## JavaScript behaviors

- **Home**: sticky-nav reveal, the scroll-pinned timeline, and two cross-fade loops (the inline hero photo and the editions strip). All animation paths check `prefers-reduced-motion`.
- **Archive**: grid build, year-pill filtering, and `?year=` deep links from the homepage.
- **Edition detail**: slug lookup, JSON fetch with a graceful "not found" state, and prev/next nav.

## Browser support

Modern evergreen browsers. The site uses CSS grid, flexbox, custom properties, `position: sticky`, `backdrop-filter`, `IntersectionObserver`, and `fetch`.

## Adding an edition

1. Add an entry to `data/editions.js`.
2. Add a matching `data/editions/<slug>.json`.
3. Drop any photo into `assets/photos/` and reference its filename in the record.

## Known follow-ups (tracked, not yet done)

- Default the archive to show all editions (it currently opens filtered to one year).
- Escape user/data values before injecting them in the edition-detail template.
- Reconcile the edition count across copy and data (35 vs 36).
- Build the About and Contact pages; remove the dead `contact.html` link in the events footer.
- Consolidate the duplicated inline CSS in `events.html` and `edition.html` into shared files.
