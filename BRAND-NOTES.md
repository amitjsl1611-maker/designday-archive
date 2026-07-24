# DesignDay — Brand & UX Notes

Working reference distilled from `/References` (the 2012–2017 archive). Source of truth for the design pass.

---

## 1. What DesignDay was

A **curated, free monthly design meetup** — "cocreating design communities" — **an Aashish Solanki initiative**, out of Bengaluru. Grew from one city to three (Bengaluru → Mumbai → Delhi), **35 editions over ~5 years (2012–2017)**.

> ⚠️ **Attribution:** DesignDay is credited to **Aashish Solanki**, NOT NetBramha. Some early collateral in `/References` was *produced by* NetBramha Studios (e.g. a poster reads "poster by NetBramha Studios"), but the initiative itself is Aashish Solanki's — never label the site or copy "a NetBramha initiative."

Not a lecture series. Every edition mixed **inspiration + skill + hands-on practice**:

> **Inspiration** (Design Story) → **Skill Building** (Design Talk / tutorial / case study) → **Activity** (Design Jam) → **Lunch + Networking**

Energy was playful and participatory: floor-seated jam circles, post-its, flip-chart "ideas for change," icebreakers ("What if" tally boards), Mood Meters. Speakers ranged across the craft — *"Architect, Design Academia, TED fellow, Brand Guru, Design Entrepreneur, Game Designer, Typographer, Product Designer, Retail & Service Designer, Illustrator, Makeover Champion…"*

**Taglines used over the years**
- "cocreating design communities"
- "Curated & 'free' design meetups every month"
- "A curated platform for Designers to meet, discuss & solve problems together"
- "with love from Bengaluru, India"

**The vision (closing of the deck):** *"Do you see the storm coming? More cities · More design leaders · Stronger design community — A vision to transform the Indian Design Landscape. And it starts with you."*

---

## 2. Real edition themes (use these — not placeholders)

**Year One (DD01–DD12), the original 12:**
| # | Theme | # | Theme |
|---|-------|---|-------|
| DD01 | Biomimicry & Experimental Design | DD07 | Design Education |
| DD02 | Illustration & Comics | DD08 | Typography |
| DD03 | Brand Design | DD09 | Design Thinking |
| DD04 | Design for Safety | DD10 | Retail Design |
| DD05 | Brand Yourself | DD11 | Game Design |
| DD06 | Product & Furniture Design | DD12 | Ethnography |

**Later editions seen in the archive:** Automobile Design, Digital Illustration, Retail Space Design, Game Design, "Design for Accessibility," "Storm the Norm / Design Thinking 2.0," Behance Portfolio Review (with Idiom Design).

**Real speakers spotted:** Vivek Mayasandra (Typography Researcher), Kshitiz Anand (UX Expert), Pooja Saxena (typographer — "Cawnpore" Devanagari).

**Real venue / partners:** Microsoft Accelerator, Lavelle Road, Bangalore · 9:30am–2:00pm, third Saturday. Partners/sponsors: Microsoft, Idiom, ISDI (Parsons Mumbai), Moonlighting.in.

**Year-one stats:** 2 hosts · 12 design days · 22 speakers · 58+ jam outcomes · 570+ design participants · 1800+ in the community. Whole run: ~35 editions, 3 cities.

---

## 3. Brand language (authentic)

**Logo** — lowercase **designday** wordmark + a faceted **play-triangle** mark (pink / gold / green), with a small underlined **co**. Vector source: `assets/logo/designday-logo.ai`.

**Colour (sampled from the logo):**
| Role | Hex |
|------|-----|
| Magenta / pink | `#E24866` (deep `#D83253`) |
| Gold / yellow | `#FEE000` (warm `#FBC02D`) |
| Green (CTAs / logo facet) | `~#74C044` |
| Ink — "design" | `#3C3C3C` |
| Grey — "day" | `#616265` |
| Teal (early 2012 variant only) | `~#19B7B5` |

The play-triangle's three facets ARE the palette: pink + gold + green. CTAs were green; date badges / accents were pink; the gold showed up as footer fields and the "co".

**Type (originals):** Signika (rounded humanist — the wordmark feel), later Source Sans Pro / Open Sans for UI, Collator for the "co" small-caps. All in `assets/fonts/`.

**Texture & motifs:** crumpled-paper backgrounds, experimental/expressive display typography (the Typography poster), monochrome city-landmark photos behind theme titles, a recurring **vertical timeline / agenda rail with dots**, circular date badges.

**Tone:** energetic, generous, craft-nerdy, community-first. Bright and white, not moody.

---

## 4. UX patterns worth reusing (from v01/v02 sites)

- **City switcher** in the nav (Bangalore / Mumbai / Delhi).
- **Next-event hero**: circular date badge + theme + venue + green "Register"; "event is over" state for past ones.
- **City theme cards**: landmark photo (mono) + big theme title + Register.
- **Edition page**: edition # + theme, date card, venue + "view on google maps," **agenda timeline** (time · TALK/JAM · session · speaker w/ avatar + role), photo grid, video embed.
- **Past-events carousel** with themed cover art per edition.
- **Stats band** (cities / editions / speakers / participants).
- **"What is DesignDay"** explainer + partners/sponsors row.
- Footer: tagline + Community/Cities columns + email "Get updates" + socials.

---

## 5. ⚠️ Open decision — brand vs. the approved prototype

The approved `designday-scroll.html` is a **calm bone-paper editorial** take: off-white paper, single **rust-red** accent, Schibsted Grotesk, an abstract 3-triangle mark. It's elegant — but tonally it's a *reinterpretation*, not the authentic DesignDay brand, which is **bright white + magenta/gold/green + the real play-triangle logo + playful energy**.

That's the first thing to settle before refining. Options:
- **A — Re-skin to authentic brand:** keep the approved layout/scroll structure, swap in real logo, the pink/gold/green palette, Signika, real edition content.
- **B — Keep editorial, borrow truth:** retain the calm editorial direction Aashish liked; only bring in the real logo + real edition content + real photos, leave the palette/type as-is.
- **C — Hybrid:** editorial calm as the base, but pull the authentic accent colours and play-triangle in as highlights.

(Also worth noting: some timeline copy in the current prototype is generic/representative — we can replace it with the real themes in §2.)
