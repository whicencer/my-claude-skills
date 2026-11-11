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
7. **Secondary entry card** (optional) — an alternative way in, e.g. a QR code for mobile, an app-store badge, a code snippet.

Spacing between items (approx.): mark→H1 24px, H1→H2 8px, H2→lead 16px, lead→CTA 40px, CTA→microcopy 16px, microcopy→card 32px.

### Typography
- Font: a neutral grotesque sans (default: `Inter`, fallback `system-ui`).
- **H1**: `clamp(48px, 8vw, 80px)`, weight 800, `letter-spacing: -0.04em`, `line-height: 1`. Near-black (`#0A0A0A`).
- **H2**: `clamp(24px, 3.5vw, 36px)`, weight 700, `letter-spacing: -0.02em`, `line-height: 1.15`. Near-black.
- **Lead**: 18–20px, weight 400, `line-height: 1.5`, muted gray (`#6B6B70`). Never bold, never colored.
- **Microcopy**: 13px, muted gray, may start with a small status dot or icon.
- Contrast hierarchy comes from **size and weight**, not from color.

### Primary CTA
- Pill shape (`border-radius: 999px`), height ~56px, horizontal padding ~40px.
- Background: brand-color vertical gradient (lighter top → slightly darker bottom).
- White label, 18px, weight 600. Optional leading icon (20px) that hints at where the click leads.
- Soft colored glow: `box-shadow: 0 8px 24px <brand-color at 30% opacity>`.
- Hover: lift 1px + stronger glow. Active: press back down. Transition 150–200ms.

### Secondary entry card
- Light neutral surface (`#EEEEF1` on white bg), `border-radius: 20px`, padding 12px 20px 12px 12px.
- Horizontal: visual on the left (on its own white rounded tile), text on the right.
- Text: bold 15px title + 14px muted description. Left-aligned inside the card.
- Hide or swap it when it makes no sense on the current device (e.g. QR code on mobile).

### Background
- Default: plain white or near-white. The content carries the page.
- Alternative: a saturated brand gradient (e.g. diagonal blue). Then invert all hero text to white,
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
The navbar changes its look once the hero has scrolled away.
**The change must be motivated by the hero background** — the navbar adapts to what is beneath it.

| Hero background | `on-hero` state | `on-content` state |
|---|---|---|
| **Saturated / dark** (gradient, brand color) | Fully transparent bg, white text & logo, **white** CTA with dark label | Light tinted glass (`rgba(240,246,255,0.7)`), dark text & logo, **brand-colored** CTA with white label |
| **Light / white** | Transparent bg, no border, CTA in **soft tint** (brand color at ~12% bg, brand-colored label) | White glass (`rgba(255,255,255,0.72)`), hairline bottom border (`rgba(0,0,0,0.08)`), CTA may stay tinted |

Rules:
- On a light hero, do NOT invert colors — there is no reason to. Only add glass, border, and optional shadow.
- Animate the switch: `background-color`, `color`, `border-color`, `box-shadow` over 250ms ease.
- Trigger: an `IntersectionObserver` on the hero element (switch when the hero leaves the viewport under the navbar). Do not use a raw scroll listener with a magic pixel number.
- Respect `prefers-reduced-motion`: switch instantly, no transition.

### Links
- 15–16px, weight 500. Color follows the current state (white or near-black).
- External links get a small `↗` arrow; dropdowns get a small `⌄` chevron.
- Hover: opacity 0.7 or a subtle underline — no background pills.

### Mobile (< 768px)
- Hide text links behind a menu button; keep logo and CTA visible.
- The menu panel uses the same glass treatment as the navbar.

---

## Checklist
- [ ] Exactly one primary CTA in the hero; the navbar CTA performs the same action.
- [ ] H1 is the largest and heaviest text on the page.
- [ ] Lead text is gray, regular weight, max ~540px wide.
- [ ] Navbar has blur glass and a fallback.
- [ ] Navbar state change matches the hero background type (see table).
- [ ] Hero looks correct at 375px width with no horizontal scroll.

