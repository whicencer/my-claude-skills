# Product Landing

A Claude skill that builds one-page marketing sites for a single product: an app, bot, SaaS or other digital product.

Every page uses the same clean, minimal style: bold tight headlines, light gray cards, one bright brand accent, a glass navbar and an interactive feature showcase.

## Example

**[getgrabby.netlify.app](https://getgrabby.netlify.app/)** was built with this skill.

## What you get

A fixed set of sections, in this order:

1. Navbar + hero
2. Features (interactive showcase + table)
3. How it works
4. Pricing (optional)
5. Final call to action
6. Footer

Output is plain static files that work when opened from disk and can be uploaded to any host as-is:

```
index.html
css/styles.css
js/main.js
js/feature-showcase.js
```

## How to use

Ask Claude for a landing page, for example:

> Make a landing page for my Telegram bot that summarizes long chats.

If anything important is missing, Claude asks once for:

- product name and a one-sentence description (required)
- 4–8 key features
- main button label and link
- pricing plans, or no pricing section
- brand color (default `#229ED9`)

Then it builds the page. Claude never invents prices, contacts, legal details or testimonials. It uses placeholders and gives you a list of what to fill in at the end.

## Files

- `SKILL.md`: workflow and shared design rules
- `references/`: rules for each section
- `assets/feature-showcase.js`: script for the interactive feature showcase
