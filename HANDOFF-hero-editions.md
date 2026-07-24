# Handoff: wire the hero editions strip to real episodes

## What this is

The hero (top of the page) ends with a strip of three small photos, bottom right. Each one now cross-fades on a loop: the photo and the keyword caption swap together every few seconds, and the three slots are staggered so they do not flip in unison. This is built and working with **placeholder data**. Your job is to swap the placeholders for the real episodes and point each photo at the right episode page.

## Where the code lives

Two files, kept in sync (edit the first, copy to the second):

- `designday-scroll.html` — the canonical file.
- `index.html` — a byte copy that the local server serves at `/`. After any edit: `cp designday-scroll.html index.html`.

Inside `designday-scroll.html`, look for the module commented:

```
/* ---- hero editions strip: cross-fade image + keyword per slot ---- */
```

The data you care about is the `DATA` array right below it. It has three sub-arrays, one per visible photo slot (left, middle, right). Each item looks like:

```js
{img:'edition-2012-firstday.jpg', word:'Biomimicry', url:'#archive'}
```

- `img` — a filename inside `assets/photos/`.
- `word` — the keyword caption shown over the photo (sentence case, keep it short).
- `url` — where the photo links when clicked. Right now every entry points at `#archive` as a placeholder.

## What to do

1. **Use the real episode list and links** (you have these; we did not). For each slot, replace the placeholder items with the episodes you want that slot to cycle through.
2. **Set `url`** on every item to the real episode page. The link updates automatically as the strip rotates, so once `url` is filled, each photo already clicks through to the episode it is currently showing. No extra wiring needed.
3. **Match `word` to the episode theme** (for example the edition's actual theme), and make sure `img` is a real file in `assets/photos/`. If you add new photos, drop them in that folder and reference the filename.
4. The three initial photos and captions are also hard-coded in the markup so the strip looks right before JavaScript runs. Find `<div class="hero-shots" id="heroShots">` and update each slot's first `.ph-layer` background image and its `.hero-cap` text to match item 0 of the matching `DATA` sub-array.

## Notes

- Images use `background-image`, so any aspect ratio works. The strip stretches to match the height of the text block on its left.
- Each shot is an `<a>` already, so it is keyboard focusable and clickable.
- The loop is disabled for visitors who ask for reduced motion. In that case the strip just shows the first photo of each slot, so make sure item 0 of each sub-array is a good default.
- Photos currently available: `edition-2012-firstday.jpg`, `edition-2013-rhythm.jpg`, `edition-2014-talk.jpg`, `edition-2015-mumbai.jpg`, `edition-2016-jam.jpg`, `edition-2017-behance.jpg`, plus `poster-*.jpg`.
- Timing: first swap after ~1.5s, then every 2.6s, staggered ~0.85s between slots. Tune the numbers at the bottom of the module if you want a different feel.
