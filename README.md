# DesignDay

An archival website for **DesignDay**, a free monthly design meetup that Aashish Solanki started to grow design leadership in India. It ran from 2012 to 2017 across Bengaluru, Mumbai and Delhi. This site keeps that record in one place: the story, a five-year timeline, and a browsable archive of the editions.

It is a living archive, not an active event page. The meetup has concluded.

## What's here

- **Home** (`index.html`) — the story, a scroll-driven timeline of the five years, and a partners strip.
- **Archive** (`events.html`) — every edition as a filterable card grid, with year filters and city tabs ready for later.
- **Edition detail** (`pages/events/edition.html`) — one reusable template that loads a single edition by its slug.
- **Data** (`data/editions.js`, `data/editions/*.json`) — the edition records that drive the archive and the detail pages.

## Running locally

It is a static site, so any static file server works:

```
python3 -m http.server 4599
```

Then open http://localhost:4599.

## Tech

Plain HTML, CSS, and vanilla JavaScript. No frameworks and no build step. See [TECH-SPECS.md](TECH-SPECS.md) for the details.

## Credit

DesignDay is an Aashish Solanki initiative.
