# How to make this yours

This is a Next.js app (App Router + TypeScript + Tailwind v4) that builds to a
fully **static** site — no server, no database, nothing running in the background.

```bash
pnpm dev
```

then open http://localhost:3000

```
content.ts              >>> ALL THE TEXT LIVES HERE — this is your file <<<
app/
  layout.tsx            fonts, page title, tab icon
  page.tsx              the order the sections appear in
  globals.css           colours, fonts and all the styling
  components/           one file per section of the page
public/
  img/                  put your photos here
  audio/                put song.mp3 here (optional)
```

---

## 1. The words

Open `content.ts` and rewrite every string between `"quotes"`. It is all dummy
text right now. Nothing else needs editing for wording.

Rules:
- Keep the `"` quotes and the `,` commas exactly where they are.
- To add a paragraph to the letter, add another `"..."` line inside
  `paragraphs: [ ... ]`, separated by a comma.
- Same for `story.items`, `gallery.photos` and `reasons.items` — copy an
  existing block, paste it below, change the words.

With `pnpm dev` running, the page updates the moment you save. If something
breaks, the error appears right in the browser and names the line.

## 2. The photos

1. Drop your images into `public/img/` (jpg or png, resized to ~1600px wide so
   the page stays fast).
2. In `content.ts`, replace the placeholder paths with your files. Paths are
   relative to `public`, so `public/img/first-date.jpg` is written as
   `"/img/first-date.jpg"`.

The `story-01..04.svg` and `photo-01..08.svg` files are the placeholders —
delete them once your own photos are in.

## 3. The video

1. Upload the video to YouTube. Set visibility to **Unlisted** — it will not
   show up in search or on your channel, but the link still works.
2. Copy just the id from the link:
   - `https://www.youtube.com/watch?v=`**`Kj9x8Lm2Pq0`** → `Kj9x8Lm2Pq0`
   - `https://youtu.be/`**`Kj9x8Lm2Pq0`** → `Kj9x8Lm2Pq0`
3. Paste it into `content.ts` → `video.youtubeId`.

The embed does not load until she clicks play, so the page stays fast and
YouTube is not contacted before then.

## 4. Music (optional)

Save a song as `public/audio/song.mp3`. The music button appears by itself in
the top-right corner. If the file is not there, the button never renders.
Browsers do not allow autoplay, so she taps it once.

## 5. The date counter

`counter.startDate` is the moment you two started, written as
`"YYYY-MM-DDTHH:MM:SS"` — for example `"2023-04-17T20:15:00"`.
It counts up live, down to the second.

## 6. Colours, if you want to change the mood

Every colour is defined once, at the top of `app/globals.css` under `:root`.
Change `--rose`, `--gold`, `--night-1..3` and the whole page follows.

Those same tokens are mirrored into Tailwind, so `bg-ivory`, `text-rose-deep`
and `font-display` also work if you would rather tweak something directly in a
component.

---

## Putting it online (free)

```bash
pnpm build
```

That writes the whole site as plain files into `out/`. Then pick one:

**Netlify Drop** — easiest. Go to https://app.netlify.com/drop and drag the
`out` folder into the page. You get a link in about ten seconds.

**Vercel** — run `pnpm dlx vercel` in this folder and accept the defaults. Vercel
knows Next.js, so it builds for you; you do not need to run the build first.

**GitHub Pages** — push the repo, then Settings → Pages and publish the `out`
folder (or use a GitHub Action). Note that Pages serves from a subpath like
`/repo-name/`, which needs `basePath: "/repo-name"` in `next.config.ts`.

Unlisted YouTube plus a link you only send to her is private enough for this.
The page also carries a `noindex` tag, so Google will not list it.

---

## Commands

```bash
pnpm dev     # local preview at localhost:3000, updates as you save
pnpm build   # writes the static site to ./out
pnpm lint    # checks the code
```
