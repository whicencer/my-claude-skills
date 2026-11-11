# How It Works Section

Read this file before building the "how it works" / steps section.

## Philosophy
A light, quiet section. It comes right after the heavy features section and gives the eye a rest.
Its only job: prove that getting started is simple. Keep it small — do not add visuals,
illustrations, or extra elements unless the user asks for them.

## Section header
- H2 only, **left-aligned**, same style as the features header:
  `clamp(32px, 5vw, 48px)`, weight 800, `letter-spacing: -0.03em`, `line-height: 1.05`, near-black.
- No subtitle.
- The heading promises ease in concrete words ("Up and running in a minute"), not "How it works".
- 24px gap between header and steps.

## Steps content
- 3 steps by default, 4 maximum. Never more — more steps means it is not simple.
- Title: imperative, ≤ 4 words ("Open the app", "Pick a name", "Just text it").
- Description: one short sentence, ≤ 60 characters.
- The last step describes the result the user gets, not another chore.

## Layout
- One shared surface: light neutral (`#EEEEF1`), `border-radius: 20px`.
- Steps sit in equal columns inside it, separated by hairline vertical dividers (`rgba(0,0,0,0.06)`).
- Cell padding: 24px.
- Mobile (< 768px): steps stack vertically, dividers become horizontal.

## Step anatomy
- Number tile: 32px square, `border-radius: 8px`, `var(--brand-fill)`, white number (15px, weight 700), centered.
- Title: 16px, weight 600, near-black.
- Description: 14px, regular, muted gray (`#6B6B70`), `line-height: 1.45`.
- Number tile on the left, text on the right, 14px gap, vertically centered.

## Never
- No icons instead of numbers — the numbers carry the "sequence" meaning.
- No visuals, CTA buttons, timers, or connector lines.
- No interactivity (tabs, carousels). This section is read, not explored.

## Checklist
- [ ] 3–4 steps, short imperative titles, one-sentence descriptions.
- [ ] Heading is a concrete promise of ease.
- [ ] Section is visibly lighter than the features section.
- [ ] Looks correct at 375px width with no horizontal page scroll.
