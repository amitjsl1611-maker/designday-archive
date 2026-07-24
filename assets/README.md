# DesignDay — Assets

Web-ready brand assets pulled from `/References`. Source files stay in `/References`; this folder holds only what the build consumes.

## logo/
| File | What it is | Use |
|------|-----------|-----|
| `designday-logo.png` | Full wordmark + play mark, 1500×422, transparent | Primary logo (nav, hero, footer) |
| `designday-logo-sm.png` | Same, 518×86, transparent | Small / retina-light contexts |
| `designday-logo.pdf` / `.ai` | Vector source | Re-export crisp PNG/SVG at any size |
| `designday-logo-fb.jpg` | Social avatar version | OG / social cards |

> The vector (`.ai` / `.pdf`) is the source of truth for an exact SVG. The favicon below is a hand-rebuilt approximation — replace it with a real export when convenient.

## favicon/
| File | What it is |
|------|-----------|
| `favicon.svg` | Play-triangle mark rebuilt in exact brand colours (pink `#E24866`, gold `#FEE000`, green `#74C044`). Transparent, scalable. |

## fonts/
Brand font kit gathered from the original collateral:
- **Signika** (Light / Regular / Semibold / Bold) — the wordmark / display family
- **Source Sans Pro** (Light / Regular / Semibold / Bold / Black) — v02 UI text
- **Open Sans** (Light → ExtraBold + italics) — earlier body text
- **Varela** (Regular) — accents
- **Collator** (Regular) — the small-caps "co" lockup

> Decide the final type pairing during the design pass — see `BRAND-NOTES.md`. Self-host the chosen families; drop the rest.

## photos/
Empty for now. Candidate sources in `/References`:
- `/References/DesignDay/` — archived posts & old site screens
- `/References/proto/Collateral/` — posters, timelines, sketches
- `/References/DesignDay/IDA Design Award - Oslo/` — award photos

Pull real edition photos here once we lock which editions the timeline features.
