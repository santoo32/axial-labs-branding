# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The complete Axial Labs brand operating system — design tokens, SVG logos, HTML templates, social assets, document templates, and brand documentation. Everything compiles from `/tokens/`; the brand is dark-mode native and expressed through engineering-grade precision (tokens, grids, tick marks, axes).

## Rebuilding tokens

```bash
cd tokens
npx style-dictionary build
```

Outputs: `tokens/build/tokens.css`, `tokens.tailwind.js`, `tokens.figma.json`. Requires `style-dictionary` installed (`npm i -D style-dictionary`).

**Token versioning:** breaking changes = major bump, net-new tokens = minor, visual fixes = patch.

## Generating new assets

Every asset request to Claude must be prefixed with the full contents of `/prompts/system-prompt.md`. Never brief without it — it enforces the palette, type rules, voltage ratio, axial elements, geometry, and the 12-point QA checklist.

Pattern:
```
[PASTE /prompts/system-prompt.md IN FULL]

# Task
[asset type, filename, dimensions, copy, required elements]
```

## Key constraints when editing any asset

- **Never inline raw hex values** — always reference a token (`var(--axial-voltage)`).
- **Voltage ≤ 5%** of any composition. Full Voltage (`#C6F24E`) on Axial Black only; use `voltage-dim` (`#9DC23A`) on Bone.
- **Every asset needs one axial element**: a visible 1px axis line, tick marks, a crosshair/registration mark, or a Mono index label (`01 / 04`, `→ NOTE`, `// SECTION`).
- **No corner radius on cards** — 4px radius only on inputs and chips.
- **Borders over shadows** — no drop shadows on flat UI in dark mode.
- **Max 2 type families per composition.**
- **No center-stage hero layouts** — left-aligned by default.
- SVG: `stroke-width: 1.5`, `stroke-linecap: square`, `viewBox` always set, `currentColor` for icons.
- Filenames: kebab-case, descriptive, dated where applicable.

## HTML asset structure

All HTML files are self-contained single files with:
- Inline `<style>` block containing all CSS variables (copy from `tokens/build/tokens.css`)
- Tailwind via CDN + inline config block (see `/prompts/system-prompt.md` for the exact block)
- Google Fonts: Inter Display, Inter, JetBrains Mono, Source Serif 4
- Marketing grid: 12-col, max-width 1280px, 24px gutters
- Product grid: 8-col, 16px gutters

## Approved palette (always use token names in code)

| Token | Hex | Role |
|-------|-----|------|
| `--axial-black` | `#0A0A0B` | Primary dark surface |
| `--axial-bone` | `#F4F2EC` | Primary light surface |
| `--axial-voltage` | `#C6F24E` | Signal accent (on Black only) |
| `--axial-voltage-dim` | `#9DC23A` | Voltage on Bone |
| `--axial-ion` | `#3D5BFF` | Alt accent (fintech/cool) |
| `--axial-plasma` | `#FF4D2E` | Alt accent (consumer/warm) |
| Graphite ramp | 900–100 | Neutrals, borders, secondary text |

## Voice rules (when writing copy)

- Sentence case headlines, never Title Case.
- Forbidden words: *innovative · cutting-edge · best-in-class · seamless · robust · powerful · empower · leverage · streamline · revolutionize · transform · synergy · solutions · journey · stunning · beautiful*.
- Approved verbs: *ship · build · design · engineer · calibrate · tokenize · compile · structure · extend · regenerate*.
- No exclamation marks in headlines. No em dashes in body copy (prefer periods). Oxford comma.
- Numbers: spell out one–nine, numerals from 10.

## 12-point QA checklist

Every asset must pass before shipping:

1. Approved palette only (no off-palette hex values)
2. Max 2 type families per composition
3. Voltage ≤ 5% of pixels
4. At least one axial element present
5. Right angles for primary structure; diagonals only at 45°
6. 4px-grid aligned
7. Wordmark or icon present where required
8. No drop shadows on flat UI
9. No bouncy/elastic motion
10. Body text contrast ≥ AA (4.5:1)
11. SVG: `stroke-width` 1.5, `stroke-linecap: square`, `viewBox` set, no extraneous groups
12. Filename in kebab-case

## Asset locations

| Directory | Contents |
|-----------|----------|
| `/tokens/` | Source token JSON + Style Dictionary config + build outputs |
| `/logos/` | 25 SVGs (wordmarks, lockups, icons, monogram) |
| `/visual-language/` | Icons (16), illustrations (8), patterns (5) |
| `/mockups/` | 10 HTML marketing pages |
| `/social/` | Instagram suite, LinkedIn, X/Twitter, YouTube, email signature, avatar |
| `/decks/` | Pitch deck (16 slides), proposal template (7 pages), invoice template |
| `/color/` | Palette reference HTML |
| `/branding/` | Strategy doc, voice & tone playbook, master brand guidelines |
| `/prompts/` | Canonical system prompt for AI asset generation |
