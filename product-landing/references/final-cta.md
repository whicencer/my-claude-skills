# Final CTA Section

Read this file before building the closing call-to-action at the bottom of the page.

## Philosophy
The last push. Everything has been explained; now just one sentence and one button.
Nothing new is introduced here.

## Layout
- Centered single column, `text-align: center`.
- No extra top padding: the global section gap (SKILL.md) already separates it from the previous section.
- Bottom padding before the footer divider: `clamp(48px, 8vw, 80px)`.
- No background color, no card, no image — plain page background.
- A hairline divider (`rgba(0,0,0,0.08)`) separates it from the footer below.

## Heading
- H2: `clamp(36px, 6vw, 56px)`, weight 800, `letter-spacing: -0.035em`, `line-height: 1.05`, near-black.
- ≤ 6 words. An invitation, not a summary ("Meet your agent in Telegram", "Start shipping today").
- Breaks into two balanced lines: `max-width: 12ch; margin-inline: auto; text-wrap: balance`.
- No subtitle or paragraph.

## Button and microcopy
- Reuse the **hero primary CTA** exactly (see `references/hero.md`): same style, label, icon and link.
  Do not create a new button style.
- 32px gap between heading and button.
- Microcopy under the button: identical to the hero microcopy (if the hero has one), 16px gap.

## Never
- No second button, no "Learn more" link.
- No new claims, features, or numbers that did not appear earlier on the page.

## Checklist
- [ ] Heading ≤ 6 words, two balanced lines on desktop.
- [ ] Button and microcopy are identical to the hero.
- [ ] Only one action on the screen.
