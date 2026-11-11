# Hero Section & Navbar

Read this file before building the top of any landing page.
The hero and the navbar are designed together: the navbar's look depends on the hero's background.

---

## 1. Hero

### Philosophy
One idea, one action. The hero is a calm, centered vertical stack with lots of air.
Nothing competes with the headline and the primary CTA.

### Layout
- Single centered column, `text-align: center`.
- Content max-width: ~720px for headings, ~540px for body text.
- Vertical padding: `clamp(64px, 12vh, 140px)` top, `clamp(48px, 8vh, 96px)` bottom.
- Height: content-driven. Do NOT force `100vh`.

### Stack order (top → bottom)
Use only the elements that the product needs, but keep this order:

1. **Brand mark** — the product's icon/logo, large (~96–112px), solid, no frame or shadow. It has slow, subtle "breathing" pulse animation.
2. **H1 — product name or main promise.**
3. **H2 — one-line value proposition** (what it is, for whom).
4. **Lead paragraph** — 2–4 sentences explaining what the product does in plain words.
5. **Primary CTA** — exactly one button.
6. **Microcopy** — one short status line under the CTA (e.g. "Private beta · join the waitlist").

Spacing between items (approx.): mark→H1 24px, H1→H2 8px, H2→lead 16px, lead→CTA 40px, CTA→microcopy 16px

### Typography
- Font: a neutral grotesque sans (default: `Inter`, fallback `system-ui`).
- **H1**: `clamp(48px, 8vw, 80px)`, weight 800, `letter-spacing: -0.04em`, `line-height: 1`. Near-black (`#0A0A0A`).
- **H2**: `clamp(24px, 3.5vw, 36px)`, weight 700, `letter-spacing: -0.02em`, `line-height: 1.15`. Near-black.
- **Lead**: 18–20px, weight 400, `line-height: 1.5`, muted gray (`#6B6B70`). Never bold, never colored.
- **Microcopy**: 13px, muted gray, may start with a small status dot or icon.
- Contrast hierarchy comes from **size and weight**, not from color.

### Primary CTA
- Pill shape (`border-radius: 999px`), height ~56px, horizontal padding ~40px.
- Background: `var(--brand-fill)`.
- White label, 18px, weight 600. Optional leading icon (20px) that hints at where the click leads.
- Soft colored glow: `box-shadow: 0 8px 24px <brand-color at 30% opacity>`.
- Hover: lift 1px + stronger glow. Active: press back down. Transition 150–200ms.

### Background
- Default: plain white or near-white. The content carries the page.
- Alternative: a solid brand-color background (`var(--brand-fill)`). Then invert all hero text to white,
  lead text to `rgba(255,255,255,0.8)`, and make the CTA white with dark label.
- Never: busy images, patterns or more than one gradient behind the hero text.

---

## 2. Navbar

### Structure
- Height ~56–72px, `position: fixed`, full width, content aligned to the page container.
- Left: logo (mark + wordmark). Center or right: 2–4 text links. Far right: one compact CTA pill.
- The navbar CTA repeats the hero's primary action (same label and icon), but smaller (~40px tall, 15px label).

### Glass effect (always on)
- Semi-transparent background + `backdrop-filter: blur(20px) saturate(180%)`
  (also set `-webkit-backdrop-filter`).
- Fallback when `backdrop-filter` is unsupported: use the same color at ~95% opacity.

### Two states: `on-hero` and `on-content`
The navbar is **always glass** — blurred from the very first frame, in both states.
On scroll, only the colors change.

| Hero background | `on-hero` state | `on-content` state |
|---|---|---|
| **Saturated / dark** (brand color) | Dark glass (`rgba(255,255,255,0.08)` + blur), white text, black logo, **white** CTA with dark label | Light glass (`rgba(255,255,255,0.72)` + blur), dark text, black logo, CTA with `var(--brand-fill)` background and white label |
| **Light / white** | Light glass (`rgba(255,255,255,0.6)` + blur), no border, black logo, CTA in **soft tint** (brand color at ~12% bg, brand-colored label) | Light glass (`rgba(255,255,255,0.72)` + blur), hairline bottom border (`rgba(0,0,0,0.08)`), black logo, CTA with `var(--brand-fill)` background and white label |

Rules:
- The navbar background is never fully transparent. `backdrop-filter` is applied in both states.
- In `on-content`, the CTA **always** uses `var(--brand-fill)` with a white label, whatever the hero background.
- The logo is always black in both states (see SKILL.md).
- Animate the switch: `background-color`, `color`, `border-color`, `box-shadow` over 250ms ease.
- Trigger: an `IntersectionObserver` on the hero element. No raw scroll listener with a magic pixel number.
- Respect `prefers-reduced-motion`: switch instantly, no transition.

### Links
- 15–16px, weight 500. Color follows the current state (white or near-black).
- External links get a small `↗` arrow; dropdowns get a small `⌄` chevron.
- Hover: opacity 0.7 or a subtle underline — no background pills.

### Mobile (< 768px)
- Hide text links behind a menu button; keep logo and CTA visible.
- The menu panel uses the same glass treatment as the navbar.

### Never
- Nothing below the microcopy: no second button, no QR code, no app-store badges, no secondary card.

---

## Checklist
- [ ] Exactly one primary CTA in the hero; the navbar CTA performs the same action.
- [ ] H1 is the largest and heaviest text on the page.
- [ ] Lead text is gray, regular weight, max ~540px wide.
- [ ] Navbar has blur glass and a fallback.
- [ ] Navbar state change matches the hero background type (see table).
- [ ] Hero looks correct at 375px width with no horizontal scroll.

