# A birthday letter for Dealova

A single-page, scroll-through birthday site — a sealed envelope, a live counter
of how long we have been us, a letter, our story, photos, a video, and a wish
with confetti at the end.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind v4.
It compiles to a **fully static** site — no server, no database, nothing running
in the background — so it can be hosted anywhere for free.

## Run it

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>. The page updates the moment you save a file.

## Where things live

```
content.ts              >>> ALL THE TEXT LIVES HERE <<<
app/
  layout.tsx            fonts, page title, tab icon
  page.tsx              the order the sections appear in
  globals.css           colours, fonts and all the styling
  components/           one file per section of the page
public/
  img/                  photos
  audio/                song.mp3 (optional — the music button hides if missing)
```

The page, top to bottom: **Intro** (envelope) → **Hero** → **Counter** →
**Letter** → **Story** → **Gallery** → **Video** → **Reasons** → **Wish** →
**Footer**, with floating petals, a scroll-progress bar and a music toggle
layered on top.

Every word on the page comes from [`content.ts`](content.ts) — you should never
need to open a component to change wording.

## Editing it

See **[HOW-TO-EDIT.md](HOW-TO-EDIT.md)** for the full walkthrough: the text, the
photos, the YouTube video, the music, the date counter, the colour palette, and
how to put it online.

## Commands

```bash
pnpm dev     # local preview at localhost:3000
pnpm build   # writes the static site to ./out
pnpm lint    # checks the code
```

## Deploying

`pnpm build` writes plain files into `out/`. Drag that folder onto
[Netlify Drop](https://app.netlify.com/drop), or run `pnpm dlx vercel` and let
Vercel build it. Details and the GitHub Pages caveat are in
[HOW-TO-EDIT.md](HOW-TO-EDIT.md#putting-it-online-free).

The page carries a `noindex` tag and the video is meant to be an *unlisted*
YouTube upload, so the only way in is the link you send her.
