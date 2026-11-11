# Footer

Read this file before building the page footer.

## Philosophy
Quiet and factual. Small text, two sides, nothing to look at — only things to find.

## Layout
- Sits directly below the final CTA, separated by its hairline divider.
- Page container width, padding 32px top, 40px bottom.
- Two sides on desktop: **left** = identity and legal, **right** = links and contacts (right-aligned).
- Mobile (< 768px): one column, left-aligned, right side goes below the left side with 24px gap.

## Left side
1. Logo: brand mark (20px) + wordmark (15px, weight 600, near-black), 8px gap.
2. Legal line (12px gap above): 13px, muted gray.
   `© <current year> <legal company name>, <registered address>`
3. Disclaimers (optional, 8px gap above): 13px, muted gray, `line-height: 1.5`, max-width ~480px.
   E.g. trademark notices for third-party brands mentioned on the page.

## Right side
- Row 1 — navigation: 2–5 text links (Pricing, About, Privacy Policy, Terms of Service…),
  14–15px, regular, near-black, 20px gap.
- Row 2 — contacts (optional, 12px gap above): support email, support bot or social handle,
  14px, near-black, 20px gap.
- Hover: underline. No icons, no colored links.

## Content rules
- **Never invent legal or contact details** (company name, address, email, handles, legal page URLs).
  If the user did not give them, use clear placeholders (`Company Name LLC`, `support@example.com`, `#`)
  and tell the user what to fill in.
- Add a trademark disclaimer only when the page mentions third-party brands by name.
- Use the current year in the copyright line.

## Never
- No newsletter forms, social icon rows, multi-column sitemaps, or "Made with ♥" lines.
- No large logo or background color.

## Checklist
- [ ] Legal and contact details come from the user or are marked placeholders.
- [ ] Left: identity + legal. Right: links + contacts.
- [ ] Small, gray, calm — visually the lightest part of the page.
- [ ] Stacks correctly at 375px width.
