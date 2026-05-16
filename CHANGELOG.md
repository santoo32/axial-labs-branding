# CHANGELOG

_Axial Labs Brand System_

---

## v1.0.0 — 2026-05-10

Initial complete release of the Axial Labs brand operating system.

### Shipped

**Phase 0 — Foundation**

- Brand strategy doc (`/branding/01-strategy.md`)
- Voice and tone playbook with 50+ examples (`/branding/03-voice-tone.md`)
- Canonical system prompt for AI asset generation (`/prompts/system-prompt.md`)

**Phase 1 — Tokens**

- 8 core token files (color, typography, spacing, motion, shadow, radius, gradient, z-index)
- Semantic tokens: dark and light mode role mappings
- Component tokens: button, card, input, badge
- Style Dictionary build config
- 3 build outputs: `tokens.css`, `tokens.tailwind.js`, `tokens.figma.json`
- Visual language docs: grid system, motion spec

**Phase 2 — Identity**

- Logo system: 25 SVGs (5 wordmarks, 2 lockups, 3 icons, 1 monogram, 14 experiments)
- Type specimen HTML
- Color palette HTML
- 16-icon starter set
- 5 SVG patterns (tick border, grid overlay, crosshair corners, dot grid, axis divider)
- 8 technical-drawing illustrations

**Phase 3 — Templates**

- 10 HTML marketing pages (3 landing variants, services, pricing, 2 case study, about, contact, 404)
- Instagram suite: 5 posts + 10-slide carousel + preview page
- Channel templates: LinkedIn post, X card, YouTube thumbnail
- Email signature
- Profile avatar (400×400, AL monogram, circle-crop safe)
- Pitch deck: 16 slides at 1920×1080
- Proposal template: 7 A4 pages
- Invoice template: 1 A4 page

**Phase 4 — Polish**

- Brand guidelines master doc (`/branding/06-brand-guidelines.md`) — 15 sections
- Root README with quick-start and generation guide
- Final QA pass: 46 checks passed, 2 issues fixed (pitch-deck palette, instagram preview copy)
- v1.0.0 tag

### QA sign-off (2026-05-10)

| Check                                               | Result                                                  |
| --------------------------------------------------- | ------------------------------------------------------- |
| Palette — all HTML mockups                          | ✅ Pass                                                 |
| Palette — all document templates                    | ✅ Pass                                                 |
| Palette — pitch deck                                | ✅ Pass (fixed: `#050506` → `#0A0A0B`)                  |
| Forbidden vocabulary — all HTML                     | ✅ Pass                                                 |
| Forbidden vocabulary — about.html `voice-cut` table | ✅ Accepted (intentional examples)                      |
| Forbidden vocabulary — markdown docs                | ✅ Accepted (appear in forbidden-word lists only)       |
| Forbidden vocabulary — instagram preview            | ✅ Pass (fixed: "leverage" in alt text)                 |
| Axial element — all HTML                            | ✅ Pass                                                 |
| Axial element — SVG logos                           | ✅ Pass (visual elements present; grep false negatives) |
| Print CSS `@page` A4                                | ✅ Pass                                                 |
| Font stack — no rogue families                      | ✅ Pass                                                 |
| Email signature `#ffffff`                           | ✅ Accepted (email client compatibility)                |

---

## Roadmap (v1.1+)

Low-priority items deferred from Phase 3:

- ✅ `3.2` Component library extraction → `/html/components/`
- `3.7` CV / resume template

Phase 4 deferred:

- Brand guidelines microsite (`brand.axiallabs.com`)
- Photography and art direction doc
- Tokens npm package (`@axiallabs/tokens`)
- CI pipeline for token rebuilds on JSON change
