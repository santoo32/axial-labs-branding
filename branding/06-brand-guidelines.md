# AXIAL LABS — BRAND GUIDELINES
*v1.0 · 2026-05-10 · Assembled master reference*

> This document is the single source of truth for anyone producing work under the Axial Labs brand — contractors, collaborators, or AI. Read it before opening any tool. Follow it completely.

---

## 0. BRAND IN ONE SENTENCE

> **Axial Labs builds the precision systems behind ambitious digital products.**

Category: *Engineered identity studio.* The axis between design and engineering. We ship the system, not just the asset.

---

## 1. POSITIONING

**For** ambitious technology founders and product teams who care about craft,
**Axial Labs** is the engineered identity studio
**that** designs the brand and ships the software it runs on.
**Unlike** traditional agencies that deliver assets and disappear,
**we** deliver tokenized, versionable systems and the tooling to extend them.

### Differentiation pillars

1. We design the system and the software.
2. Engineering-grade precision applied to brand work.
3. Modular outputs — no one-off deliverables.
4. Tooling as a deliverable: prompt libraries, generators, CI pipelines.
5. AI-native production: every asset is regeneratable from tokens and prompts.

### Tagline

**"Systems for ambitious software."**

Use this as the default footer line on every surface. Do not vary it.

---

## 2. LOGO SYSTEM

### 2.1 Files on disk

| File | Use |
|------|-----|
| `logos/primary/axial-wordmark-primary.svg` | Default wordmark, `currentColor` |
| `logos/primary/axial-wordmark-light.svg` | Wordmark on dark surfaces (explicit Bone) |
| `logos/primary/axial-wordmark-dark.svg` | Wordmark on light surfaces (explicit Black) |
| `logos/primary/axial-wordmark-compact.svg` | No tick rule — use below 256px wide |
| `logos/primary/axial-wordmark-detailed.svg` | Full lockup with left axis line + Mono index + metadata caption. For hero moments and formal collateral only. |
| `logos/lockups/axial-lockup-stacked.svg` | Icon above wordmark — avatars, square footers |
| `logos/lockups/axial-lockup-horizontal.svg` | Icon left of wordmark — nav, inline |
| `logos/icons/axial-icon.svg` | Pure cross mark, `currentColor` |
| `logos/icons/axial-icon-stroke.svg` | Stroke-only variant |
| `logos/icons/axial-icon-voltage.svg` | Voltage accent variant |
| `logos/monogram/axial-monogram-AL.svg` | AL letterform with tick-corner registration marks |

### 2.2 Responsive sizing

| Rendered width | Use this variant |
|----------------|-----------------|
| > 1024 px | Detailed wordmark |
| 512–1024 px | Primary wordmark (with tick rule) |
| 256–512 px | Primary wordmark |
| 128–256 px | Compact wordmark (no rule) |
| 64–128 px | Lockup (icon + compact wordmark) |
| 32–64 px | Icon only |
| 16–32 px | Favicon |

### 2.3 Approved color combinations

Only four combinations are permitted:

1. Axial Black (`#0A0A0B`) on Axial Bone (`#F4F2EC`)
2. Axial Bone (`#F4F2EC`) on Axial Black (`#0A0A0B`)
3. Axial Black on Voltage (`#C6F24E`)
4. Axial Bone on Axial Black with a Voltage accent dot

### 2.4 Clear space

Minimum clear space on all four sides: **1× cap-height of the wordmark.** Do not crowd the logo with other elements.

### 2.5 Minimum size

- Wordmark: **80px wide** minimum
- Icon mark: **12px** minimum

### 2.6 Forbidden

- Gradients on the logo
- Drop shadows on the logo
- Outlined / stroked logo (use the stroke variant instead, which is a designed asset)
- Stretching or distorting proportions
- Off-palette recolouring
- Rotating the logo (exception: −90° on vertical signage only)
- Placing on a busy photographic background without a clear surface behind it

---

## 3. COLOR SYSTEM

### 3.1 Full palette

| Token | Hex | Role |
|-------|-----|------|
| `--axial-black` | `#0A0A0B` | Primary surface, dark mode |
| `--axial-bone` | `#F4F2EC` | Primary surface, light mode |
| `--axial-voltage` | `#C6F24E` | Signal accent — on Black only |
| `--axial-voltage-dim` | `#9DC23A` | Voltage on Bone (preserves AA contrast) |
| `--axial-ion` | `#3D5BFF` | Alt accent — cooler, fintech |
| `--axial-plasma` | `#FF4D2E` | Alt accent — warmer, consumer |
| `--axial-mercury` | `#B8C2CC` | Quiet supporting tone |
| `--graphite-900` | `#0A0A0B` | |
| `--graphite-800` | `#1A1B1E` | |
| `--graphite-700` | `#26282D` | Default border in dark mode |
| `--graphite-600` | `#3A3D44` | |
| `--graphite-500` | `#5A5E68` | Secondary text in light mode |
| `--graphite-400` | `#878C97` | Tertiary text, icons |
| `--graphite-300` | `#B5B9C2` | Secondary text in dark mode |
| `--graphite-200` | `#D8DAE0` | Default border in light mode |
| `--graphite-100` | `#ECEDEF` | Subtle surface in light mode |

### 3.2 Usage ratio

**60% surface (Black or Bone) · 35% neutrals · 5% Voltage.**

Voltage is a punctuation mark, not a paint colour. If a layout looks green, it is wrong.

### 3.3 Voltage rules

- Full Voltage (`#C6F24E`) on Axial Black **only**.
- Voltage on Bone: always use `voltage-dim` (`#9DC23A`). Full Voltage on Bone fails AA contrast.
- Voltage must cover ≤ 5% of any composition.
- Voltage is reserved for: primary CTAs on hover, signature pricing tiers, live status indicators, the accent dot in the detailed wordmark lockup.
- Never use Voltage as body text colour.

### 3.4 Dark / light mode token mapping

| Semantic role | Dark | Light |
|---------------|------|-------|
| Page background | `--graphite-900` | `--axial-bone` |
| Elevated surface | `--graphite-800` | `#FFFFFF` |
| Border | `--graphite-700` | `--graphite-200` |
| Text primary | `--axial-bone` | `--axial-black` |
| Text secondary | `--graphite-300` | `--graphite-500` |
| Text accent | `--axial-voltage` | `--axial-voltage-dim` |

The brand is **dark-mode native.** Light mode is the secondary surface (documents, formal collateral, editorial pages). Switching is a token swap, not a redesign.

### 3.5 Accessibility

- Body text: AA minimum (4.5:1 contrast ratio).
- Long-form editorial: AAA (7:1).
- Focus rings: 2px Voltage, offset 2px from element.
- Never rely on colour alone — pair with iconography or text.

---

## 4. TYPOGRAPHY

### 4.1 Type stack

| Role | Family | Fallback | Use |
|------|--------|----------|-----|
| Display | Neue Haas Grotesk Display | Inter Display | All H1/H2 above 32px |
| Body | Inter | system-ui | 14–22px UI and prose |
| Editorial | Source Serif 4 | Georgia | Long-form essays (>200 words) only |
| Mono | JetBrains Mono | Berkeley Mono | Code, data, labels, eyebrows, captions |

**Free stack (zero licensing):** Inter Display / Inter / Source Serif 4 / JetBrains Mono — all on Google Fonts. The system is designed to look identical with this stack.

### 4.2 Type scale (modular, ratio 1.25)

`12 · 14 · 16 · 20 · 24 · 32 · 40 · 56 · 72 · 96 · 128 · 160`

Never use sizes outside this scale.

### 4.3 Hierarchy

| Style | Family | Size | Weight | Tracking |
|-------|--------|------|--------|----------|
| H1 | Display | 72–128 | 600 | −2% |
| H2 | Display | 40–56 | 500 | −1% |
| H3 | Display | 24–32 | 500 | 0% |
| H4 | Body | 20 | 600 | 0% |
| Body L | Body | 18–22 | 400 | 0% |
| Body | Body | 16 | 400 | 0% |
| Caption | Mono | 12–14 | 400 | +2% |
| Eyebrow | Mono | 12 | 500 | +6%, UPPERCASE |

### 4.4 Rules

- **Mono is always lowercase or ALL CAPS.** Never sentence case in Mono.
- **Headlines are always sentence case.** Not Title Case.
- **Editorial serif only in long-form prose** (>200 words). Never in UI.
- **Never combine more than 2 type families** in one composition.
- Display below 24px is forbidden.
- Justified text is forbidden — always left-align.
- Underlines on links: use a 1px Voltage underline only.

### 4.5 Eyebrow pattern

Eyebrows precede sections and callouts. Format:

```
→ SECTION NAME
// ALTERNATE PREFIX
01 / 04  (for indexed sequences)
```

Font: Mono 12px, weight 500, tracking +6%, UPPERCASE, colour `--graphite-400`.

---

## 5. VISUAL LANGUAGE

### 5.1 Geometry

- **Right angles only** for primary structure.
- **Diagonals only at 45°.** No arbitrary angles.
- **4px base grid.** Every element aligns to it.
- **No corner radius on cards.** 4px radius reserved for inputs and chips only.
- **Circles only as functional markers:** status dots, focus rings, registration marks.

### 5.2 Grid

| Context | Columns | Gutter | Max width |
|---------|---------|--------|-----------|
| Marketing | 12 | 24px | 1280px |
| Product UI | 8 | 16px | — |
| Document | — | — | 210mm (A4) |

Base unit = 4px. All spacing follows the token scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`.

### 5.3 The "axial" element (required on every asset)

Every asset must include at least one of:

- A **visible axis line** (1px vertical or horizontal, `--graphite-700` in dark / `--graphite-200` in light)
- **Tick marks** (engineering measurement marks every 8 or 16 units)
- A **crosshair or registration mark** at frame corners
- A **Mono index label** — `01 / 04`, `→ NOTE`, `// SECTION`, or a coordinate `X: 240, Y: 480`

If none are present, the asset is off-brand.

### 5.4 Depth (Z-axis)

Prefer **borders over shadows.**

| Layer | Use | Spec |
|-------|-----|------|
| Z0 | Page surface | No shadow |
| Z1 | Cards / elevated | 1px border; no shadow in dark mode |
| Z2 | Dropdowns / popovers | Subtle shadow + 1px border |
| Z3 | Modals | Backdrop blur 12px + scrim `rgba(10,10,11,0.6)` |
| Z4 | Toasts / notifications | 3px Voltage left border, no shadow |

### 5.5 Iconography

- Style: 1.5px stroke, square caps, 24×24 viewBox, no fills.
- Colour: `currentColor` — inherits from context.
- 16-icon starter set in `/visual-language/icons/`.

### 5.6 Illustrations

- Technical-drawing / engineering-schematic style.
- 1.5px strokes, square caps, no fills (single Voltage fill permitted on one element).
- Monochrome graphite + Voltage only.
- Always include: a visible axis line, at least 2 tick marks, a Mono coordinate or label.
- 8-illustration starter set in `/visual-language/illustrations/`.

### 5.7 Patterns

Five reusable SVG patterns in `/visual-language/patterns/`:

| File | Use |
|------|-----|
| `pattern-tick-border.svg` | Measurement-mark border decoration |
| `pattern-grid-overlay.svg` | 1px grid overlay (3% opacity), hero backgrounds |
| `pattern-crosshair-corners.svg` | Registration marks at frame corners |
| `pattern-dot-grid.svg` | Technical-paper texture |
| `pattern-axis-divider.svg` | Section divider with tick marks |

### 5.8 Motion

- Easing: `cubic-bezier(0.32, 0.72, 0, 1)` — the "Axial" curve.
- Durations: `120ms` instant · `240ms` UI · `600ms` hero · `1200ms` orchestrated.
- Permitted: rotation around an axis, axis-line wipes, character-by-character type reveals, parallax along Y, Mono ticker labels.
- **Forbidden:** bounces, elastic, 3D flips, anything cute, drop-shadow morphs.

---

## 6. VOICE & TONE

### 6.1 Core voice (constant)

Six adjectives in priority order: **Precise · Confident · Restrained · Technical · Human · Opinionated.**

Not playful. Not winking. Not "fun." Not corporate. Not aspirational-vague.

### 6.2 Laws

**Law 1 — Specifics over slogans.** Every claim must include a number, a name, a tool, or a verb.

**Law 2 — Verbs over adjectives.** Cut adjectives. Lead with verbs.

**Law 3 — Concrete over abstract.** Name the tool, the file, the framework, the metric.

**Law 4 — Brevity is the brand.** If you can cut a word, cut it.

**Law 5 — Stance, never neutral.** Have a position. Say it.

### 6.3 Forbidden vocabulary

Never use on any surface:

*innovative · cutting-edge · best-in-class · world-class · seamless · robust · powerful · dynamic · vibrant · engaging · stunning · beautiful · empower · unlock · leverage · streamline · supercharge · revolutionize · transform · disrupt · elevate · enable · synergy · solutions · ecosystem · journey · stakeholder · alignment (unless geometric) · "let's chat" · "we're passionate about" · "at the intersection of" · "next-generation" · "AI-powered"*

### 6.4 Approved vocabulary

**Verbs:** ship · build · design · engineer · instrument · calibrate · tokenize · template · render · compile · structure · publish · maintain · extend · regenerate.

**Nouns:** axis · system · token · repo · grid · pixel · component · template · primitive · pipeline · contract · interface · surface · layer · module · spec.

### 6.5 Tone by context

| Context | Tone |
|---------|------|
| Homepage | Declarative, minimal |
| Proposals | Warm, structured, specific |
| Product UI | Functional, often Mono |
| Error states | Calm, specific, useful |
| Social | Direct, claim-driven |
| Email / DMs | Conversational, brief |

### 6.6 Headline and copy rules

- Headlines: **sentence case.** Not Title Case.
- Numbers: spell out one through nine, numerals from 10.
- Punctuation: full stops always. Exclamation marks: maximum one per page (ideally zero).
- Ampersands: only in lockups. Otherwise spell "and."
- Oxford comma: yes.
- First person: "we" in marketing. "I" only in founder / personal posts.

---

## 7. DESIGN TOKENS

The token system is the brand's source of truth. Every visual decision compiles from `/tokens/`.

### 7.1 Files

| File | Purpose |
|------|---------|
| `/tokens/core/*.json` | Primitive values (color, type, spacing, motion, shadow, radius, z-index, gradient) |
| `/tokens/semantic/dark.json` | Dark-mode role mappings |
| `/tokens/semantic/light.json` | Light-mode role mappings |
| `/tokens/component/*.json` | Component-level tokens (button, card, input, badge) |
| `/tokens/config/style-dictionary.config.js` | Build config |
| `/tokens/build/tokens.css` | Generated CSS custom properties |
| `/tokens/build/tokens.tailwind.js` | Generated Tailwind theme extension |
| `/tokens/build/tokens.figma.json` | Generated Figma Tokens Studio import |

### 7.2 Regenerating

```bash
cd tokens
npx style-dictionary build
```

### 7.3 Rules

- **Never inline raw hex values in HTML or CSS.** Always reference a token by name (`var(--axial-voltage)`).
- Token changes that break consumers = major version bump.
- Net-new tokens = minor bump.
- Visual fixes = patch.

---

## 8. DIGITAL SURFACES

### 8.1 HTML mockup stack

Every HTML asset uses:

- Single `.html` file (self-contained).
- Inline `<style>` block with all CSS variables from `tokens.css`.
- Tailwind via CDN + inline config block.
- Google Fonts: Inter Display, Inter, JetBrains Mono, Source Serif 4.
- Left-aligned layouts. No centred hero layouts.
- 12-col marketing grid / 8-col product grid.
- Borders over shadows.

### 8.2 Marketing pages shipped

10 pages in `/mockups/`:

`landing-axial-hero.html` · `landing-schematic-hero.html` · `landing-live-hero.html` · `services.html` · `pricing.html` · `case-study-index.html` · `case-study-template.html` · `about.html` · `contact.html` · `404.html`

Chosen hero direction: **Schematic** — corner coordinate labels, 64×64 grid overlay, tick-framed H1.

### 8.3 Navigation

Fixed 56px bar. Left: icon + wordmark. Centre: Mono UPPERCASE nav links (12px, +6% tracking). Right: Voltage outline CTA. On scroll: shrinks to 44px, gains 1px bottom border.

### 8.4 Footer

Three stacked sections:
1. Full-width AXIAL LABS wordmark (SVG, edge-to-edge).
2. Three-column links.
3. Mono footer line: `© 2026 — AXIAL LABS  //  SYSTEMS FOR AMBITIOUS SOFTWARE`

---

## 9. DOCUMENT TEMPLATES

Both templates in `/decks/`. Light mode native (Bone bg, Black text). A4 portrait. Axis line at left margin with engineering tick marks on every page.

### 9.1 Proposal (`proposal-template.html`)

7 A4 pages: **Cover** · **Brief** · **Approach** · **Scope** (checklist with voltage-dim tick marks) · **Timeline** (4-step grid + milestone table) · **Pricing** (3-tier selector, Studio highlighted) · **Terms** · **Sign-off**.

Cover uses the inline detailed-wordmark SVG. Mono metadata header on all pages: `→ PROPOSAL · CLIENT · DATE`.

### 9.2 Invoice (`invoice-template.html`)

Single A4 page. Detailed wordmark header + invoice number + dates. Bill-from / bill-to blocks. DESCRIPTION · QTY · RATE · AMOUNT table in Mono. Subtotal, tax, deposit, and TOTAL DUE rows — TOTAL row in `--axial-voltage-dim`. Wire and Stripe payment blocks. Mono footer.

---

## 10. SOCIAL MEDIA TEMPLATES

### 10.1 Instagram — `/social/instagram/`

5 base posts (1080×1350 SVG): `post-quote` · `post-schematic` · `post-wordmark` · `post-process` · `post-announcement`.

10-slide carousel: `carousel-slide-01` through `carousel-slide-10` (hook → title → 7 content slides → summary → CTA).

Preview page: `instagram-suite-preview.html`.

### 10.2 Other channels

| File | Format |
|------|--------|
| `social/linkedin/linkedin-post.svg` | 1200×628 |
| `social/twitter-x/x-card.svg` | 1600×900 |
| `social/youtube-thumbnails/youtube-thumbnail.svg` | 1280×720 |
| `social/email/email-signature.html` | 600px wide, plain HTML |
| `social/avatar-profile.svg` | 400×400, circle-crop safe |

### 10.3 Consistency rules (every post must satisfy)

1. Includes icon mark or wordmark.
2. Includes Mono index/tag in top-left or bottom-right.
3. 24px outer margin minimum.
4. 1 surface + 1 accent + max 1 supporting tone.
5. Never combines more than 2 type styles per composition.

---

## 11. PITCH DECK

`/decks/pitch-deck-template.html` — 16 slides at 1920×1080. Dark mode. Each slide: Mono index bottom-left (`04 / 16`), compact wordmark bottom-right, generous whitespace, type as the visual hero. Section dividers: full-bleed Display type, Voltage line at left edge.

---

## 12. QA CHECKLIST

Every generated asset must pass all 12 before shipping:

1. ✅ Uses only the approved color palette (no off-palette hex values).
2. ✅ Uses only the approved type families (max 2 per composition).
3. ✅ Voltage covers ≤ 5% of pixels.
4. ✅ Includes at least one axial element (axis line, tick marks, crosshair, or Mono index).
5. ✅ Right angles for primary structure; diagonals only at 45°.
6. ✅ 4px-grid aligned.
7. ✅ Wordmark or icon present where required.
8. ✅ No drop shadows on flat UI.
9. ✅ No bouncy / elastic motion.
10. ✅ Body text contrast meets AA minimum (4.5:1).
11. ✅ SVG: `stroke-width` 1.5, `stroke-linecap: square`, `viewBox` set, no extraneous groups.
12. ✅ Filename in kebab-case, descriptive, dated where applicable.

---

## 13. FAILURE MODES — NEVER SHIP THESE

- Generic SaaS rounded-gradient cards.
- Dribbble-style 3D isometric icons.
- Neumorphism or glassmorphism with heavy blur.
- Rocket-ship, gear, lightbulb, or lightning-bolt illustrations.
- Centred hero layout with subhead and one CTA.
- Color-coded charts with > 4 hues.
- Drop shadows on cards in dark mode.
- Emojis anywhere in product UI.
- More than 2 type families in one composition.
- Voltage as text on Bone (use `voltage-dim`).
- Off-palette recolouring of the logo.
- Exclamation marks in headlines.

---

## 14. ASSET INVENTORY (v1.0)

| Category | Count | Location |
|----------|-------|----------|
| Logo SVGs | 25 | `/logos/` |
| Icon set | 16 | `/visual-language/icons/` |
| Illustrations | 8 | `/visual-language/illustrations/` |
| Patterns | 5 | `/visual-language/patterns/` |
| HTML mockups | 10 | `/mockups/` |
| Instagram posts | 5 | `/social/instagram/` |
| Carousel slides | 10 | `/social/instagram/` |
| Channel templates | 4 | `/social/linkedin/`, `/twitter-x/`, `/youtube-thumbnails/` |
| Email signature | 1 | `/social/email/` |
| Avatar | 1 | `/social/` |
| Pitch deck | 1 | `/decks/` |
| Document templates | 2 | `/decks/` |
| Token files (source) | 11 | `/tokens/core/`, `/semantic/`, `/component/` |
| Token build outputs | 3 | `/tokens/build/` |
| Branding docs | 2 | `/branding/` |
| Type + color HTML | 2 | `/typography/`, `/color/` |
| Visual language docs | 2 | `/visual-language/` |

**Total: 113 files across the system.**

---

## 15. HOW TO GENERATE NEW ASSETS

Every new asset request to Sonnet follows the same pattern:

```
[PASTE /prompts/system-prompt.md IN FULL]

# Task
[Describe the specific asset — type, filename, dimensions, copy, required elements]
```

That system prompt enforces: palette, type rules, voltage ratio, axial elements, geometry, naming convention, and the 12-point QA checklist. Never brief Sonnet without it.

---

*End of brand guidelines. v1.0 · Axial Labs · 2026-05-10.*
*Next version bump: when any token changes break existing consumers.*
