# Pricing Section

Read this file before building the pricing section.

## Philosophy
Plain and honest. The visitor should understand every plan in a few seconds:
name, who it is for, price, what is included. No tricks, no clutter.

## Section header
- H2, **left-aligned**, same style as other section headers:
  `clamp(32px, 5vw, 48px)`, weight 800, `letter-spacing: -0.03em`, `line-height: 1.05`, near-black.
- Subtitle: 18px, regular, muted gray (`#6B6B70`), one sentence. It tells how to start
  ("Start free. Upgrade when you need more.").
- 32px gap between header and cards.

## Prices and currency
- Show **one currency only**. No currency switcher.
- Use the currency the user gave. If none was given, use USD.
- **Never invent prices or plan contents.** If the user did not provide them, use clear placeholders
  (`$XX`, "Feature placeholder") and tell the user what to fill in.

## Plans
- 2–4 plans. Equal-width columns on desktop, equal card heights.
- Order: cheapest → most expensive, left to right.
- Exactly **one highlighted plan** — the one the business wants most people to pick (usually the middle one).

## Card
- Surface: light neutral (`#EEEEF1`), `border-radius: 20px`, padding 24px, 12px gap between cards.
- **Highlighted card**: light brand tint background (brand color at ~12%) + 1px border (brand color at ~30%).
  No "Popular" badges, no scaling, no shadows.
- Content, top → bottom:
  1. Plan name: 20px, weight 700, near-black.
  2. Tagline: 14px, muted gray. Who the plan is for, ≤ 50 characters.
  3. Price row (20px top margin): price `clamp(32px, 4vw, 40px)`, weight 800, `letter-spacing: -0.03em`
     + period in 16px muted gray on the same baseline ("/ month", "forever").
  4. Feature list (16px top margin): 2–4 items, 15px near-black, 10px row gap.
     Each item starts with a check icon (Phosphor `check`, bold weight, 16px, brand color).
- Feature list pattern: the first item says what is shared ("All Product features"),
  the rest say what grows from plan to plan. Never repeat long identical lists in every card.
- No buttons inside the cards unless the user asks for them.

## Fine print (optional)
- Use only if the user gave billing terms worth mentioning.
- One line below the cards, 13px, muted gray, ≤ 120 characters
  (e.g. "Cancel anytime. Pay by card or Telegram Stars.").
- Optional text link after it (13px, brand color, weight 500, with →).

## Mobile (< 768px)
- Cards stack vertically in the same order. Highlighted card keeps its styling.

## Never
- No currency switcher, monthly/yearly toggle, or comparison tables.
- No crossed-out "fake discount" prices.
- No invented prices or features.

## Checklist
- [ ] One currency, taken from the user (or USD by default).
- [ ] Prices and features come from the user, or are clearly marked placeholders.
- [ ] Exactly one highlighted plan.
- [ ] Fine print is one short line or absent.
- [ ] Looks correct at 375px width with no horizontal page scroll.
