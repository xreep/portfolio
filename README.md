# xreep — Aditya Raj's portfolio

Static site + one serverless function. No build step, no framework, no dependencies.

```
portfolio/
├── index.html        page markup and fixed text (hero, intro, about-page copy)
├── style.css         all styles (dark + light theme)
├── app.js            content arrays, page router, animations, AI box
├── knowledge.json    everything the "Ask about Aditya" box knows (single source for the AI)
├── api/ask.js        Vercel function that answers questions with Claude
├── vercel.json       function + cache settings
├── robots.txt
└── assets/           avatar.svg, band-3d.html (3D model), Raksha screenshots (.webp)
```

## Run locally
```
npx serve .
```
Open http://localhost:3000. The AI box works locally using offline answers from `knowledge.json`
(the `/api/ask` function only runs on Vercel, or with `npx vercel dev`).

## Where to edit things

| You want to change | Edit |
|---|---|
| Hero line, intro paragraph, availability line | `index.html` (search the text) |
| "What I do" cards | `app.js` → `const cards` |
| Home skill rows (Engineering, AI…) | `app.js` → `const S` |
| Case studies (cards + full pages) | `app.js` → `const CASES` |
| Projects page | `app.js` → `const PROJ` (only items named in `PROJ_SHOW` are shown) |
| Experience & education timeline | `app.js` → `const TL` |
| Certifications | `app.js` → `const CERTS` |
| Toolkit groups | `app.js` → `const TK` |
| Logos in the tech-stack strip | `app.js` → `const T` (icon names from simple-icons; the icon must exist in `const IC`) |
| What the AI box knows / suggested questions | `knowledge.json` |
| Colours, fonts, spacing | `style.css` → `:root` variables at the top |

**Rule of thumb:** whenever you change a fact on the site (new job, new project, new certificate),
update `knowledge.json` → `profile` too, so the AI box says the same thing. Add a matching entry to
`faq` if you want the offline fallback to answer it.

## Common updates

**New project**
1. Add an object to `PROJ` in `app.js` (copy the Raksha one: `n`, `y`, `st`, `tg`, `ic`, `l`, `b`).
2. Add its name to `PROJ_SHOW`, e.g. `PROJ.filter(p=>['Raksha','New App'].includes(p.n))`.
3. Screenshots: put `.webp` files in `assets/` and reference them.
4. Add the project to `knowledge.json`.

**New case study** — add an object to `CASES` with a unique `s` (slug). It appears on the home page,
the Case Studies page, and at `#/case/<slug>`.

**New job / role** — add a row at the top of `TL`, update the intro paragraph in `index.html`,
and update `knowledge.json`.

**New certificate** — add `[title, issuer, colour]` to `CERTS` and a line in `knowledge.json`.

## AI box ("Ask about Aditya")
Answer order: Vercel function (Claude) → Claude-in-claude.ai preview → offline answers from `knowledge.json`.
So the box always answers; the AI just makes it smarter.

To turn on real AI answers:
1. Get an API key at console.anthropic.com and set a monthly spend limit (Haiku costs very little per question).
2. Vercel → your project → Settings → Environment Variables → add `ANTHROPIC_API_KEY`.
3. Redeploy. Optional: `ASK_MODEL` to change the model.

The function caps question length, answer length, and rate-limits each visitor (8 questions/minute).
The AI is instructed to answer only from `knowledge.json` and say so when it doesn't know.

## Security
See `SECURITY.md`. Summary: strict CSP (self-only scripts, styles, fonts, images) with Trusted Types; no third-party
scripts, fonts or trackers (fonts and three.js are self-hosted in `assets/`); HSTS, frame blocking, nosniff,
Permissions-Policy, COOP/CORP in `vercel.json`; hardened `/api/ask` (origin check, JSON-only, size cap,
per-IP limits, timeout, output filter, no logging); email is assembled at runtime; `.env` files are git-ignored.

**When you change code, keep it CSP-safe:** no inline `<script>` blocks, no `onclick="..."` attributes, no `eval`,
and no files loaded from other domains. Put new JS in `app.js` (or a file under `assets/js/`).

**Vercel settings to turn on once (dashboard):**
1. Settings → Environment Variables: `ANTHROPIC_API_KEY`, and `ALLOWED_ORIGINS` = your live URL(s), comma-separated.
2. Firewall → Add rule: path `/api/ask`, rate limit 10 requests / 60 s per IP, action Deny.
3. Firewall → Bot Protection: On.
4. Settings → Deployment Protection: protect Preview deployments.

## Deploy (Vercel)
1. Push this folder to GitHub (`xreep/portfolio`).
2. vercel.com → Add New → Project → import the repo → Framework preset: **Other** → Deploy.
3. Every `git push` redeploys automatically.
4. Optional custom domain: Vercel → Settings → Domains. Then add
   `<link rel="canonical" href="https://your-domain/">` and `og:url` in `index.html`.

## Before every push — quick checklist
- Open every page: Home, Case Studies, Raksha case study, Projects, About.
- Try the AI box with 3 questions.
- Check on a phone width (browser dev tools → responsive mode).
- Run Lighthouse (Chrome DevTools) and keep Performance/Accessibility/SEO green.

## Features added (Oct 2026)
- **Theme toggle** (header): remembers the visitor's choice; first visit follows their system theme.
- **Résumé**: `assets/Aditya_Raj_Resume.pdf`. To update, replace that file (keep the same name).
- **Certifications**: data in `app.js` → `const CERTS`; images in `assets/certs/*.webp`.
  New certificate with an image: export the PDF to a ~1200px-wide `.webp`, put it in `assets/certs/`, and add
  `{t, by, d, id, img}` to `CERTS` (`grp:'cisco'` groups it under Cisco, `feat:1` makes it the highlighted card).
- **Copy email**: any element with `data-copy="email"` copies on click.
- **Page transitions**: View Transitions API, with a CSS fallback; disabled for reduced-motion users.
- **Playground** (`#/play`, linked in the footer): Stack Snake and Bug Hunt, plain canvas, best scores saved
  in the visitor's browser. Code lives at the end of `app.js` ("Playground").

## FX (Oct 2026)
- **Hero code symbols**: canvas behind the hero (`fx.js` part 1). Edit the `GL` array to change the symbols. Pauses when the hero is off-screen.
- **Roaming python**: fixed canvas behind the content (part 2). Visitors can hide it with the footer button; the choice is remembered.
- **Animated cursor**: trailing ring + click ripple, mouse only (part 3). Hidden over inputs and game boards.
- All three switch off for visitors with "reduce motion" enabled in their system settings.
- Games (10): canvas games are Stack Snake, Bug Hunt, Whack-a-Bug, Firewall, Deploy Dash; HTML games are Stack Memory,
  Code Typing, Commit 2048, Bug Sweeper, Stackle. To add a game, add an entry to `GAMES` in `app.js` (name, colour,
  type `'c'` for canvas or `'d'` for HTML, description, icon) and a factory function like `Dash()` or `Sweeper()`;
  the arcade picker builds itself from `GAMES`. Stackle's word list is the `WORDS` array.

## API Lab (`#/lab`) and `GET /api/heat-index`
- Engine: `assets/js/raksha-engine.js`, a line-for-line port of Raksha's `src/risk/heat-index.ts` (checked against the app's unit-test vectors).
  The browser and `api/heat-index.js` both use this one file, so they can never disagree.
- Public, read-only, CORS-open, cached at the edge (deterministic), 30 requests/min per IP. Try:
  `curl "https://YOUR-SITE/api/heat-index?tempC=38&humidity=62&aqi=160"`
- If the API is unreachable the page runs the same engine in the browser and labels the response "in-browser fallback".

## Changelog (`#/changelog`)
Every time you ship something, add an entry at the **top** of `CHANGELOG` in `app.js`:
`{v:'1.10.0', d:'YYYY-MM-DD', t:'Short title', g:{Added:[...], Changed:[...], Fixed:[...], Removed:[...], Security:[...]}}`
Use semver: new feature → bump the middle number, fix → bump the last. The home page "What's new" pill updates itself.
