# Features Section ("Feature Showcase")

Read this file before building the features section of a landing page.

## Philosophy
Show, then explain. The section has two parts that work together:
- **Stage card** — shows one concrete *moment of use* for the selected feature (an example, never a description).
- **Feature table** — explains every feature in one short sentence.

The visitor can click through features themselves; if they don't, the section plays on its own.
Never put the same text in the stage card and the table.

## Structure (top → bottom)
1. Section header (H2 + subtitle), **left-aligned**.
2. Stage card: label row → typed example text → feature chips.
3. Feature table: 2-column grid of all features.

## Section header
- H2: `clamp(32px, 5vw, 48px)`, weight 800, `letter-spacing: -0.03em`, `line-height: 1.05`, near-black.
- Subtitle: 18px, regular, muted gray (`#6B6B70`), max-width ~540px, 12px below H2.
- 40px gap between header and stage card.

## Stage card

### Container
- Background: light neutral (`#EEEEF1`), `border-radius: 28px`, padding `clamp(24px, 4vw, 44px)`.
- Reserve a fixed minimum height for the text area so the card never jumps while text is typed or erased.

### Label row
- Small brand-colored dot (6px) + label (14px, muted gray) + three tiny "typing" dots that pulse while text is being typed.
- The label depends on the display mode (see below).

### Example text
- `clamp(28px, 4.5vw, 44px)`, weight 700, `letter-spacing: -0.03em`, `line-height: 1.15`, near-black.
- Blinking caret at the end while typing (thin, brand color).
- In `command` mode use a monospace font at ~80% of that size.

### Display modes
Pick the mode from the product type. If unclear, use `task`.

| Mode | Use when the product is… | Example text | Label |
|---|---|---|---|
| `agent` | an AI agent, assistant or chatbot | A real request the user sends | "You, to your agent" |
| `command` | a dev tool, CLI or API | A command or one line of code | "In your terminal" |
| `search` | search, analytics or a data product | A query typed into search | "You search for" |
| `task` | anything else (SaaS, consumer app) | A first-person task the product handles: "Send all overdue invoices every Monday" | "What you can do" |

### Writing examples
- 1–3 examples per feature, depending on how broad the feature is.
- ≤ 80 characters each. Concrete: real nouns, names, numbers, times.
- Sound like a real person, not marketing. No "seamlessly", "powerful", "effortlessly".
- Each example must clearly belong to its feature.

### Feature chips
- Placed at the bottom of the stage card, 16–24px gap above.
- White pill, height 40px, padding 0 16px, gap 8px between chips.
- Icon (Phosphor `regular`, 16px, near-black) + label (15px, weight 500).
- **Active chip**: brand-color gradient background, white icon and label.
- Chips are `<button>` elements with `aria-pressed`.
- Desktop: wrap onto multiple lines.
- Mobile (< 768px): one horizontal row, `overflow-x: auto`, hidden scrollbar, `scroll-snap-type: x mandatory`,
  soft fade mask on the right edge. Auto-scroll the active chip into view.

## Feature table
- Outer frame: same light neutral as the stage card, `border-radius: 24px`, 6px padding.
- Inner surface: white, `border-radius: 20px`, 2-column grid (1 column on mobile), hairline dividers (`rgba(0,0,0,0.08)`).
- Each cell: padding 20px 24px, icon tile on the left, text on the right.
  - Icon tile: 32px square, `border-radius: 8px`, brand color background, white Phosphor `fill` icon (18px).
  - Title: 16px, weight 600, near-black.
  - Description: 14px, regular, muted gray, `line-height: 1.5`. One sentence, ≤ 110 characters.
- **Active row**: the cell of the currently shown feature gets a soft brand tint (brand color at ~6% opacity), transition 250ms.
- Table cells are not interactive: no click handlers, no `cursor: pointer`, no hover effects. They only show the active highlight.
  This applies to table cells ONLY — feature chips stay fully clickable.
- Same feature order in chips and table.
- 4–8 features total. More than 8 → pick the 8 most important.

## Behavior
All behavior lives in `assets/feature-showcase.js`.
- Copy the script into the page as-is (inline `<script>` or a separate file). Do NOT rewrite or "improve" its logic.
- Write the HTML exactly as described in the contract at the top of the script.
- Put the examples into the `<script type="application/json" data-showcase-examples>` block, keyed by `data-feature`.
- Put the first example of the first feature into `[data-showcase-text]` so the section works without JS.
- Style the state classes the script sets: `.is-active` (chips + table cells), `.is-typing` (caret, typing dots), `.is-reduced-motion`.

Reference behavior (implemented by the script, for understanding only):
type 35ms/char → hold 3s → erase 12ms/char → next feature; autoplay runs only while visible;
any chip click pauses autoplay, which resumes 15s later from the next feature; reduced motion = 200ms crossfade.

### Autoplay
- Type the example at ~35ms per character.
- Hold the full text for **5 seconds**.
- Erase quickly (~12ms per character), then type the next one.
- Order: go to the next feature each cycle. When a feature has several examples, show the next one the next time that feature comes around.
- Run only while the section is visible (`IntersectionObserver`, threshold ~0.3) and the tab is active (`visibilitychange`). Pause otherwise.

### User interaction
- Clicking a chip or table cell immediately erases the current text and types an example of that feature.
- Any click stops autoplay. Resume after **15 seconds** without interaction, starting from the next feature.
- No progress bar or countdown indicator.

### Accessibility
- Keyboard: chips are focusable; Enter/Space selects.
- Screen readers: the stage text sits in an `aria-live="polite"` region updated with the **full** text once typing completes — never per character.
- `prefers-reduced-motion`: no typing, no caret. Crossfade the whole text (200ms) instead.

## Icons
- Library: **Phosphor Icons** (load from CDN with a pinned version).
- `regular` weight in chips, `fill` weight in table tiles — same icon per feature in both places.
- Pick the most literal icon for each feature. Never use the same icon for two features.

## Checklist
- [ ] Stage card shows examples, table shows descriptions — no duplicated text.
- [ ] Display mode matches the product type; label matches the mode.
- [ ] Chips, table cells and examples all refer to the same feature list in the same order.
- [ ] Active chip and active table row are always in sync.
- [ ] Autoplay holds 3s, pauses off-screen, resumes 15s after the last interaction.
- [ ] Card height does not jump while typing.
- [ ] Chips scroll in one row on a 375px screen, with no horizontal page scroll.
- [ ] Reduced-motion mode works.
