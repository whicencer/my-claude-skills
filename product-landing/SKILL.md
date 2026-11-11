---
name: product-landing
description: Creates single-product marketing landing pages in a clean, minimal style — bold tight headlines, light gray cards, one bright brand accent, glass navbar, and an interactive feature showcase. Includes a fixed section set (hero, features, how it works, pricing, final CTA, footer). Use when the user asks to create, build, design or redesign a landing page, product page, promo site, marketing page or homepage for an app, bot, SaaS or digital product.
---

# Product Landing

Build a one-page marketing site for a single product in one consistent visual style.
The section files in `references/` hold the detailed rules; this file holds the workflow
and the rules shared by all sections.

## Workflow

### Step 1 — Ask (one message, before writing any code)
Collect the blocking information below in **a single message**. Ask in the user's language.
- Skip every item the user already provided in their request.
- If nothing is missing, skip this step entirely.
- Offer a default for each item so the user can answer briefly or skip it.

| Item | Default if skipped |
|---|---|
| Product name + what it does in one sentence | — (required, cannot skip) |
| 4–8 key features | Derive from the product description |
| Primary action: button label + link | "Get started" → `#` |
| Pricing: plans, prices, currency — or "no pricing section" | No pricing section |
| Brand color | `#229ED9` |

Do NOT ask about legal name, address, contacts, or legal page links — use placeholders (see Step 5).
Do NOT ask follow-up rounds. After the answer, build.

### Step 2 — Plan
Decide silently, without asking:
- Features display mode (`agent` / `command` / `search` / `task`) — see `references/features.md`.
- 1–3 examples per feature, the 3–4 "how it works" steps, all headings and copy.

### Step 3 — Read the section rules
Read each file right before building its section, in page order:

1. `references/hero.md` — navbar + hero
2. `references/features.md` — feature showcase + table (uses `assets/feature-showcase.js`)
3. `references/how-it-works.md`
4. `references/pricing.md` — skip if there is no pricing section
5. `references/final-cta.md`
6. `references/footer.md`

### Step 4 — Build
Output this file structure (unless the user asked for a framework):
- index.html
- css/styles.css
- js/main.js
- js/feature-showcase.js

- `index.html` — markup only. No `<style>` blocks, no `style=""` attributes except where a script sets them,
  no inline JS. The only inline `<script>` allowed is the JSON examples block of the features section.
- `css/styles.css` — all styles. Starts with the design tokens on `:root`, then sections in page order,
  each under a comment header (`/* ===== Hero ===== */`).
- `js/main.js` — page behavior written by you (navbar state, mobile menu, year in footer, etc.).
- `js/feature-showcase.js` — copy `assets/feature-showcase.js` byte-for-byte. Never merge it into `main.js` or edit it.
- Include files like this:
  - `<link rel="stylesheet" href="css/styles.css">` in `<head>`;
  - `<script src="js/feature-showcase.js" defer></script>` and `<script src="js/main.js" defer></script>` at the end of `<head>`.
- Plain scripts only — no `type="module"`, no imports. The page must work when opened directly from disk (`file://`).
- Relative paths only, so the folder can be uploaded to any host as-is.

### Step 5 — Check and report
1. Go through the checklist of every section file and the global checklist below. Fix what fails.
2. Reply to the user with a short list of every placeholder they need to fill in
   (legal name, address, contacts, legal page links, `#` links, `$XX` prices).

## Global rules

### Facts
**Never invent facts about the business**: prices, plans, numbers, customer names, testimonials,
legal name, address, emails, handles, URLs. Use obvious placeholders and list them in Step 5.

### Design tokens
Define these as CSS variables on `:root` and use only them:

```css
:root {
  --brand: #229ED9;              /* replaced by the user's brand color */
  --brand-tint: color-mix(in srgb, var(--brand) 12%, white);
  --text: #0A0A0A;
  --text-muted: #6B6B70;
  --surface: #EEEEF1;            /* cards, plates */
  --bg: #FFFFFF;
  --hairline: rgba(0, 0, 0, 0.08);
  --font: "Inter", system-ui, -apple-system, sans-serif;
  --container: 1040px;
}
```

- Light theme only. One accent color (`--brand`); everything else is black, gray and white.
- Font: Inter from Google Fonts (weights 400, 500, 600, 700, 800).
- Icons: Phosphor Icons via `https://unpkg.com/@phosphor-icons/web@2.1.1` (pinned version).

### Section header (shared by features, how it works, pricing)
- H2: `clamp(32px, 5vw, 48px)`, weight 800, `letter-spacing: -0.03em`, `line-height: 1.05`, `--text`, left-aligned.
- Optional subtitle: 18px, regular, `--text-muted`, max-width ~540px, 12px below.

### Spacing and rhythm
- Content container: `max-width: var(--container)`, side padding 24px (16px on mobile).
- Vertical gap between sections: `clamp(80px, 12vw, 140px)`.
- Alternate heavy and light sections. Never make two interactive sections in a row.

### Copy
- Plain, concrete, human. Short sentences. Real nouns and numbers.
- Banned words: seamless, powerful, revolutionary, unlock, supercharge, effortless, cutting-edge.
- All page copy in the language the user asked for (default: the language of the product description).

### Motion
- Subtle only: hover lifts, 150–250ms transitions, optional one-time fade-in on scroll.
- Everything respects `prefers-reduced-motion`.
- The only looping animation on the page is the hero brand mark pulse (see `references/hero.md`). No other infinite animations.

## Global checklist
- [ ] Only the sections listed in Step 3, in that order.
- [ ] Only colors from the tokens; one accent color.
- [ ] No invented business facts; all placeholders reported to the user.
- [ ] Hero CTA, navbar CTA and final CTA are the same action.
- [ ] No horizontal page scroll at 375px; everything readable on mobile.
- [ ] Keyboard and screen-reader basics: real buttons, alt text, visible focus states.
- [ ] Every inline `<script>` ends only at its real closing tag: no `</script` inside JS code, comments or strings.
- [ ] Files: `index.html`, `css/styles.css`, `js/main.js`, `js/feature-showcase.js` — nothing else, no inline CSS/JS.
- [ ] `js/feature-showcase.js` is identical to `assets/feature-showcase.js`.
- [ ] The JSON examples block contains no `</script` text.
- [ ] The page works when `index.html` is opened directly from disk.
