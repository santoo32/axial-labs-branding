# AXIAL LABS — BRAND SYSTEM
*v1.0 · 2026-05-10*

> Systems for ambitious software.

This repository is the complete, production-grade brand operating system for Axial Labs. It is not a moodboard. It is an executable system — every file is tokenized, versionable, and AI-generatable.

---

## WHAT'S IN HERE

```
/branding/        Strategy, voice, and assembled brand guidelines
/tokens/          Design tokens — the source of truth for every visual decision
/logos/           SVG logo system (25 files: wordmarks, lockups, icons, monogram)
/visual-language/ Icons (16), illustrations (8), patterns (5), grid + motion docs
/typography/      Type specimen HTML
/color/           Color palette HTML
/mockups/         10 HTML marketing pages (landing ×3, services, pricing, case studies, about, contact, 404)
/social/          Instagram suite, LinkedIn, X, YouTube, email signature, avatar
/decks/           Pitch deck (16 slides), proposal template, invoice template
/prompts/         Canonical system prompt + generation templates
```

Full file architecture in `/MASTER-PLAN.md §10`.

---

## QUICK START

### I need to use the brand right now

1. Colors, type, spacing: open `/tokens/build/tokens.css` and paste the `:root {}` block into your stylesheet.
2. Logo: use `logos/primary/axial-wordmark-primary.svg` (adapts to `currentColor`).
3. Voice rules: read `branding/03-voice-tone.md` §3 and §4. Five minutes. Non-negotiable.
4. Full reference: `branding/06-brand-guidelines.md`.

### I need to generate a new asset

Paste `/prompts/system-prompt.md` in full as the first message to Claude Sonnet, then describe the asset. The system prompt enforces palette, type rules, geometry, axial elements, and the 12-point QA checklist automatically.

Example:

```
[PASTE system-prompt.md]

# Task
Generate a single SVG Instagram post (1080×1350) in the `announcement` template.
Headline: "We shipped tokens."
Eyebrow: "→ NEW"
Background: Axial Black.
Output filename: social/instagram/post-announcement-2026-05-15.svg
```

### I need to change a color or token

1. Edit the relevant file in `/tokens/core/` (e.g., `color.json`).
2. Run `npx style-dictionary build` from `/tokens/`.
3. Commit the updated `/tokens/build/` outputs — they're the generated artifacts.
4. Bump the version per semver: token changes that break consumers = major bump.

---

## CORE RULES (memorize these)

**Color**
- Palette: Black `#0A0A0B` · Bone `#F4F2EC` · Voltage `#C6F24E` · Graphite ramp `#0A0A0B` → `#ECEDEF`.
- Voltage on Bone: use `voltage-dim` (`#9DC23A`). Full Voltage on Black only.
- Voltage ≤ 5% of any composition. It is a signal, not a paint.
- Ratio: 60% surface · 35% neutrals · 5% accent.

**Type**
- Display: Inter Display (Neue Haas Grotesk when licensed).
- Body: Inter.
- Mono: JetBrains Mono — always lowercase or ALL CAPS, never sentence case.
- Max 2 type families per composition.
- Headlines: sentence case. Not Title Case.

**Geometry**
- Right angles for primary structure. 45° diagonals only.
- 4px base grid. Everything aligns to it.
- No corner radius on cards. 4px radius on inputs and chips only.

**Every asset needs one "axial" element:**
A visible axis line, tick marks, a crosshair, or a Mono index label. If none are present, the asset is off-brand.

**Voice**
- Few words. Specifics over slogans. No adjectives unless necessary.
- Forbidden: innovative · cutting-edge · leverage · synergy · solutions · seamless · robust · empower · unlock · transform.

---

## GENERATING ASSETS — PROMPT TEMPLATES

Templates for common asset types are in `/prompts/`. Each is pre-wired to produce on-brand output:

| Template | Use |
|----------|-----|
| `system-prompt.md` | Prepend to every Sonnet call |
| `prompt-svg-illustration.md` | Technical-drawing illustration |
| `prompt-html-landing.md` | Marketing page |
| `prompt-instagram-post.md` | Social post (single) |
| `prompt-instagram-carousel.md` | 10-slide carousel |
| `prompt-ui-mockup.md` | Product UI surface |
| `prompt-brand-illustration.md` | Brand illustration |
| `prompt-pitch-deck-slide.md` | Single deck slide |

---

## TOKENS — STRUCTURE

```
/tokens/
  /core/
    color.json         ← primitive hex values
    typography.json    ← font families, sizes, weights, tracking
    spacing.json       ← 4px-base spacing scale
    motion.json        ← easing curves + durations
    shadow.json        ← glow effects, Z-layer shadows
    radius.json        ← 4px corners for inputs/chips only
    gradient.json      ← Axis Mesh, Glow Field, Ion Mist
    z-index.json       ← Z0–Z4 layer stack
  /semantic/
    dark.json          ← role mappings for dark mode
    light.json         ← role mappings for light mode
  /component/
    button.json        ← button tokens
    card.json          ← card tokens
    input.json         ← input tokens
    badge.json         ← badge / chip tokens
  /config/
    style-dictionary.config.js
  /build/
    tokens.css         ← CSS custom properties (generated)
    tokens.tailwind.js ← Tailwind theme extension (generated)
    tokens.figma.json  ← Figma Tokens Studio import (generated)
  README.md
```

**Never edit the `/build/` files directly.** They are generated from `/core/`. Edit the source JSON, then rebuild.

---

## VERSION HISTORY

See `CHANGELOG.md` for the full release history.

Current release: **v1.0.0** — initial complete brand system.

---

## CONTACTS

| Role | Name | Contact |
|------|------|---------|
| Owner / Founder | Santiago Roa | santiagot.roa@gmail.com |

---

*Axial Labs · Engineered identity studio · axiallabs.com*
