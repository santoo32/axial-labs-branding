# AXIAL LABS — WEB IMPLEMENTATION PLAN
*v0.2 · 2026-05-11 · target: axiallabs.com marketing site*

> Port the existing Axial Labs brand system into a production Next.js 15 App Router site, reusing tokens and HTML mockups as the source of truth. Dark-only, bilingual (en/es), and scoped to what we can credibly ship on day one.

---

## CHANGELOG (this document)
- **v0.2** — Removed light mode (dark-only, permanently). Removed Portfolio and Testimonials sections (no clients to display yet). Added i18n for English + Spanish via `next-intl`. Re-scoped phases and DoD.
- **v0.1** — Initial plan.

---

## 1. GOALS & NON-GOALS

### Goals
- Ship a single-route marketing page at `/en` and `/es` with four anchored sections that fully reflect the brand system in `/branding/`, `/tokens/`, and `/mockups/`.
- Stay token-driven: every color, space, type ramp, and motion value sourced from `/tokens/build/tokens.css`. No magic values in components.
- Keep the stack lean: Next.js 15 + React 19 + CSS Modules + `next-intl`. No UI library, no Tailwind, no styled-components — the brand owns its own CSS surface.
- Ship-ready: Lighthouse ≥ 95 on performance / accessibility / SEO / best-practices, mobile-first.

### Non-goals (explicit, do not reintroduce)
- **Light mode** — Axial Black is the only surface, ever. All light-mode tokens are removed from the bundle; the toggle, the data attribute, and the `light.json` semantic layer do not ship.
- **Portfolio / case studies / client logos** — we have no clients to display yet. No placeholders. No "trusted by" rows. No `/work/[slug]` route.
- **Testimonials** — same reason. No fabricated quotes, no "coming soon" cards.
- CMS integration (content stays typed TS modules for v1).
- Auth, dashboard, product surfaces.
- More than two locales for v1 (en/es only).
- Blog.

When we have real work to show, we add a `Work` section in v1.1 — not before.

---

## 2. STACK

| Layer | Choice | Why |
|---|---|---|
| Runtime | Next.js 15 (App Router) + React 19 | RSC by default, native metadata API, image + font optimization, simple deploy. |
| Language | TypeScript 5.5 (strict) | Type safety, autocomplete on token + translation keys. |
| Styling | CSS Modules + `tokens.css` as global | Already-owned token surface; CSS Modules give locality without runtime cost. |
| i18n | `next-intl` v3 | App Router-native, server-component-friendly, sub-path routing (`/en`, `/es`), type-safe message keys. |
| Fonts | `next/font/local` (Inter, Inter Display, JetBrains Mono) | Self-host, no CLS, no external DNS. Latin + Latin-ext subset (covers Spanish accents). |
| Animation | `motion` (Framer Motion successor), lazy | Section reveals, axis-line draws. Gated by `prefers-reduced-motion`. |
| Icons | Inline SVG from `/visual-language/icons/` + `lucide-react` for utility glyphs | Brand icons remain bespoke; lucide for chevrons/menu/locale-switcher only. |
| Forms | `zod` (validation), Resend (email), `@upstash/ratelimit` | Contact form server route. |
| Testing | Vitest + Testing Library + Playwright | Unit on components, e2e on the page (both locales). |
| Lint / format | Biome | Single tool, fast. |
| Deploy | Vercel | Edge runtime, ISR ready. |
| Analytics | Vercel Analytics + Plausible | Privacy-first. No GA. |

**Why `next-intl` over `next-i18next` or hand-rolled?** It's the only mature i18n solution that's built for the App Router and works cleanly with server components. Messages stay in JSON, keys are type-checked, and locale routing is middleware-driven — no manual locale detection logic.

**Why not Tailwind / shadcn?** The brand already defines its grid, type ramp, and component shapes in `/tokens/` and `/html/components/`. Tailwind would duplicate the token layer and dilute the design language.

---

## 3. FILE STRUCTURE

```
web/
├── PLAN.md                          ← this document
├── package.json
├── tsconfig.json
├── next.config.ts
├── biome.json
├── middleware.ts                    ← next-intl locale detection
├── README.md
│
├── messages/                        ← i18n source of truth
│   ├── en.json
│   └── es.json
│
├── public/
│   ├── fonts/                       ← Inter, Inter Display, JetBrains Mono (woff2, latin + latin-ext)
│   ├── logos/                       ← copied from /logos/
│   ├── og/                          ← generated per-locale (en + es)
│   └── favicon/                     ← favicon set from axial-icon.svg
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx           ← <html lang={locale}>, fonts, metadata, NextIntlClientProvider
│   │   │   ├── page.tsx             ← composes the four sections
│   │   │   ├── opengraph-image.tsx  ← dynamic OG per locale
│   │   │   ├── not-found.tsx        ← 404 (localized)
│   │   │   └── api/
│   │   │       └── contact/
│   │   │           └── route.ts     ← POST → Resend + rate limit
│   │   ├── globals.css              ← imports tokens.css + reset (dark only)
│   │   ├── robots.ts
│   │   └── sitemap.ts               ← emits both locale URLs
│   │
│   ├── i18n/
│   │   ├── routing.ts               ← locales = ['en', 'es']; defaultLocale = 'en'
│   │   ├── request.ts               ← server-side getRequestConfig
│   │   └── navigation.ts            ← typed Link, useRouter, redirect
│   │
│   ├── sections/                    ← one folder per page section
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.css
│   │   │   └── SchematicBackground.tsx
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   ├── Services.module.css
│   │   │   └── ServiceCard.tsx
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── About.module.css
│   │   │   └── Principle.tsx        ← differentiation pillar item
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       ├── Contact.module.css
│   │       ├── ContactForm.tsx      ← client component
│   │       └── Footer.tsx
│   │
│   ├── components/                  ← shared brand primitives
│   │   ├── NavBar/
│   │   ├── LocaleSwitcher/          ← EN / ES toggle, Mono caps
│   │   ├── Button/                  ← primary, ghost
│   │   ├── EyebrowTag/
│   │   ├── AxisDivider/
│   │   ├── MonoLabel/
│   │   ├── Crosshair/
│   │   ├── Logo/
│   │   └── SectionFrame/            ← wraps section, renders §NN index + axis lines
│   │
│   ├── content/                     ← structured data (non-translated)
│   │   ├── services.ts              ← service ids + icons + section keys (text via i18n)
│   │   ├── principles.ts            ← differentiation pillar keys
│   │   └── site.ts                  ← nav anchors, social, version
│   │
│   ├── lib/
│   │   ├── tokens.ts                ← typed token names
│   │   ├── motion.ts                ← easings/durations from motion.json
│   │   └── seo.ts                   ← <Metadata> builder, per-locale
│   │
│   └── types/
│       └── content.ts
│
└── tests/
    ├── unit/                        ← Vitest specs
    └── e2e/                         ← Playwright: en + es smoke, a11y, form
```

**Token reuse:** `globals.css` does `@import "../../tokens/build/tokens.css";`. A token change in `/tokens/core/*.json` → rebuild → website picks it up. The `light.json` semantic layer is not imported.

---

## 4. i18n STRATEGY

### 4.1 Routing
- Sub-path routing: `/en/...` and `/es/...`. The root `/` redirects to the user's preferred locale via `middleware.ts` (Accept-Language header, defaults to `en`).
- `next-intl`'s `defineRouting` declares `locales = ['en', 'es']` and `defaultLocale = 'en'`.
- A typed `Link` from `@/i18n/navigation` is used everywhere — no raw `next/link` to anchor URLs.

### 4.2 Message files
- `messages/en.json` is the source of truth. `messages/es.json` mirrors its keys exactly.
- Keys are namespaced by section: `hero.eyebrow`, `services.b01.title`, `contact.form.email.label`.
- A pre-commit script (`scripts/check-translations.ts`) fails the build if `es.json` has missing or orphan keys vs `en.json`.
- Mono Mono-cased strings (e.g. `§01`, `axial labs / engineered identity studio`) live as static constants, not translations.

### 4.3 Content authorship rules
- English is authored first by Santiago. Spanish is authored second — **never** machine-translated without human review, because the brand voice (concise, technical, no buzzwords) does not survive auto-translation cleanly.
- The forbidden-word list in `README.md §"CORE RULES"` applies in both languages (with Spanish equivalents: `innovador`, `vanguardista`, `soluciones`, `potenciar`, `transformar`, etc.).
- Typography: Inter, Inter Display, JetBrains Mono all subset to `latin` + `latin-ext` — covers `á é í ó ú ñ ü ¿ ¡` natively.

### 4.4 Locale switcher
- Mono component in the nav bar, top-right: `EN · es` or `en · ES` (active locale in voltage-dim caps).
- Switching preserves the current anchor (e.g. `/en#contact` → `/es#contact`).
- `<html lang>` and `<meta property="og:locale">` set per route.

### 4.5 SEO per locale
- `<link rel="alternate" hreflang>` tags emitted in `generateMetadata` for both locales + `x-default`.
- Sitemap emits both URLs.
- Per-locale OG images render the title in the active language.

---

## 5. SECTIONS — CONTENT & COMPONENT SPEC

Four sections. Each is anchored, wrapped in `<SectionFrame>`, and carries a Mono index label (`§00` … `§03`).

### 5.1 Hero · `§00`
- **Layout**: full-viewport (`min-height: 100svh`), Axial Black surface, Bone type.
- **Content**:
  - Eyebrow Mono tag: `axial labs / engineered identity studio` (untranslated — brand mark).
  - H1 (Inter Display, `--size-96`, sentence case):
    - en: *Systems for ambitious software.*
    - es: *Sistemas para software ambicioso.*
  - Sub (Inter, `--size-20`): two-line positioning from `branding/01-strategy.md §4`, translated.
  - Primary CTA → `#contact`, Ghost CTA → `#services`.
  - Schematic background (SVG, 45° axis grid, voltage tick marks) — port from `mockups/landing-schematic-hero.html`.
  - Mono coordinate badge bottom-right: `04°N · 73°W · v1.0` (untranslated).
- **Components**: `<NavBar>`, `<LocaleSwitcher>`, `<EyebrowTag>`, `<Button variant="primary|ghost">`, `<SchematicBackground>`.
- **Motion**: axis lines stroke-draw on mount (≤600ms, `--ease-axial`).

### 5.2 Services · `§01`
- **Layout**: 12-col grid, two clusters — "Branding system" and "Software & IT" — three cards each.
- **Branding services**:
  1. Brand strategy & positioning · *Estrategia y posicionamiento de marca*
  2. Tokenized identity systems · *Sistemas de identidad tokenizados*
  3. Asset generation pipelines · *Pipelines de generación de assets*
- **IT / software services**:
  1. Product engineering · *Ingeniería de producto*
  2. Design-systems engineering · *Ingeniería de design systems*
  3. Automation & internal tooling · *Automatización y herramientas internas*
- **Card spec** (port from `html/components/card-service.html`):
  - Square, no radius, 1px Graphite-700 border.
  - Eyebrow Mono → service code (`B.01`, `I.02`) — untranslated.
  - H3 Inter Display 32.
  - Body 16 Inter, max 3 lines.
  - Voltage hairline on hover (axial accent < 5% rule).
- **Components**: `<Services>`, `<ServiceCard>`, `<AxisDivider>` between clusters.

### 5.3 About / Principles · `§02`
- **Layout**: two-column. Left: company narrative (Source Serif 4 editorial pull-quote + Inter body), sourced from `branding/01-strategy.md §1` (thesis) and §2 (mission). Right: five differentiation pillars from §5 as a numbered Mono list.
- **No team grid for v1.** Single-founder shop; we'll add a team section when there's a team. The narrative carries Santiago's authorship implicitly; explicit team bios come later.
- **Components**: `<About>`, `<Principle>`, `<MonoLabel>`.

### 5.4 Contact / Footer · `§03`
- **Layout**: split. Left: bold CTA ("Let's ship something precise." / *"Construyamos algo preciso."*) + Mono contact block. Right: `<ContactForm>` (name, email, project type select, message). Footer below: legal, social, version stamp.
- **Form**:
  - Client component, progressive enhancement (works without JS — posts to `/api/contact`).
  - Validation via `zod` on client and server. Error messages localized.
  - Server route POSTs to Resend → `santiagot.roa@gmail.com`, with Upstash Redis rate-limit (5/min/IP). Locale included in the email subject so we know which form was used.
  - Honeypot field + `Origin` check; no captcha for v1.
- **Footer**: wordmark, anchor sitemap, legal links, locale switcher (duplicated for accessibility), version + commit SHA from build env.
- **Components**: `<Contact>`, `<ContactForm>`, `<Footer>`.

---

## 6. SHARED COMPONENT LIBRARY

| Component | Source | Notes |
|---|---|---|
| `<NavBar>` | `html/components/nav-bar.html` | Sticky, blur on scroll, anchor links to `#services / #about / #contact`, mobile slide-over. Includes `<LocaleSwitcher>`. |
| `<LocaleSwitcher>` | new | Mono component; preserves anchor on switch. Uses `next-intl`'s typed router. |
| `<Button>` | `button-primary.html` + `button-ghost.html` | Variants `primary | ghost | mono`. 4px radius only. |
| `<EyebrowTag>` | `eyebrow-tag.html` | Mono uppercase. |
| `<AxisDivider>` | `axis-divider.html` | 1px hairline + tick marks every `--space-32`. |
| `<MonoLabel>` | new | TS prop union enforces lowercase or UPPERCASE. |
| `<Crosshair>` | new (SVG) | 8×8 axial accent. |
| `<Logo>` | `/logos/primary/axial-wordmark-primary.svg` | Adapts to `currentColor`. Variant prop. |
| `<SectionFrame>` | new | Renders `§NN` Mono index, axis lines, anchor id. |

---

## 7. STYLING & TOKENS

- `globals.css` order: (1) modern-normalize, (2) `@import "tokens.css"`, (3) `@font-face` declarations from `next/font/local`, (4) `:focus-visible`, selection color.
- **Dark only**: `<html>` always renders the dark token surface. No `data-theme` attribute. Light tokens (`semantic/light.json`) are excluded from the bundle by not importing them.
- Module conventions:
  - File name matches component: `Hero.module.css`.
  - Class names kebab-case.
  - **All values** reference tokens — `color: var(--axial-bone)`, never literals. CI grep gate.

---

## 8. ACCESSIBILITY

- Semantic landmarks: `<header>`, `<main>`, four `<section>` with `aria-labelledby`, `<footer>`.
- Color contrast: Bone-on-Black = 17:1; Voltage-on-Black = 12:1. All ≥ WCAG AAA for body, AA-Large for headings.
- Keyboard: visible `:focus-visible` ring (2px Voltage, 2px offset). Tab order verified in both locales (RTL is not relevant for en/es).
- `<html lang>` set correctly per route (`en` or `es`).
- Motion: every animation gated by `@media (prefers-reduced-motion: reduce)`.
- Forms: `<label>` on every field; localized errors via `aria-describedby`; submit state via `aria-live="polite"`.
- Tests: `axe-core` Playwright assertion on both locale routes.

---

## 9. PERFORMANCE BUDGET

| Metric | Target |
|---|---|
| LCP (mobile, 4G) | ≤ 1.8s |
| CLS | < 0.02 |
| INP | < 200ms |
| JS shipped (first load, gzipped) | < 90 KB (incl. next-intl) |
| Image budget per section | ≤ 120 KB (AVIF/WebP via `next/image`) |
| Fonts | Three families × two weights; subset latin + latin-ext; `display: swap` |

Levers: server components by default, `motion` lazy-imported on intersection, SVG inlined for hero, no client-side data fetching on `/`. `next-intl` messages tree-shaken per route.

---

## 10. SEO & METADATA

- `app/[locale]/layout.tsx` exports `generateMetadata` per locale: title template, description (≤ 155 chars), `openGraph`, `twitter`, `alternates.languages` for hreflang, `themeColor` (`#0A0A0B`).
- Dynamic OG image per locale at `/[locale]/opengraph-image` using `@vercel/og`.
- `robots.ts` + `sitemap.ts` emit both locale URLs.
- JSON-LD `Organization` schema in layout (name, url, logo, sameAs links) — single-language fields are emitted in English per schema.org convention.

---

## 11. CONTENT MIGRATION CHECKLIST

Pulled from the existing repo into `messages/*.json` and `src/content/`:

- [ ] `services.ts` ← service ids, codes, icons (text in messages).
- [ ] `principles.ts` ← pillar ids (text in messages).
- [ ] `site.ts` ← nav anchors, social handles, legal copy, version from `package.json`.
- [ ] `messages/en.json` ← author full copy for hero, services, about, contact (Santiago).
- [ ] `messages/es.json` ← Spanish translation, hand-written, not machine-translated.
- [ ] Voice review (en): every string passes the forbidden-words list.
- [ ] Voice review (es): every string passes the Spanish forbidden-words list.
- [ ] `scripts/check-translations.ts` passes (no missing/orphan keys).

---

## 12. IMPLEMENTATION PHASES

### Phase 0 — Bootstrap (½ day)
1. `pnpm create next-app web --ts --app --no-tailwind --src-dir --import-alias "@/*"`
2. Add `next-intl`, Biome, Vitest, Playwright, `motion`, `zod`, `resend`, `@upstash/ratelimit`.
3. Configure `next.config.ts` (image domains, experimental.reactCompiler) + `withNextIntl` wrapper.
4. Create `middleware.ts` for locale detection.
5. Copy fonts to `/public/fonts/`, wire `next/font/local` with latin + latin-ext subsets.
6. Add postcss alias so `globals.css` can `@import "tokens.css"` from `/tokens/build/`.
7. Stub `messages/en.json` and `messages/es.json`.

### Phase 1 — Primitives (1 day)
- `<Logo>`, `<Button>`, `<EyebrowTag>`, `<MonoLabel>`, `<AxisDivider>`, `<Crosshair>`, `<SectionFrame>`, `<NavBar>`, `<LocaleSwitcher>`.
- Visual regression baselines in Playwright (both locales).

### Phase 2 — Sections (1.5 days, parallelizable)
- Hero + SchematicBackground.
- Services + ServiceCard.
- About + Principle.
- Contact + ContactForm + Footer.
- Each lands behind an `id` anchor and is added to `[locale]/page.tsx` in section order.

### Phase 3 — Plumbing (½ day)
- `/api/contact` route w/ Resend + rate limit + zod schemas (localized error messages).
- Per-locale metadata, OG image route, sitemap, robots.
- 404 page (localized).
- `scripts/check-translations.ts` in CI.

### Phase 4 — Spanish authorship & QA (½ day)
- Santiago writes/reviews `es.json` content end-to-end (no MT).
- Native-speaker proof if available.
- Voice + forbidden-words pass.

### Phase 5 — Polish & Ship (½ day)
- Lighthouse + axe on both locales, fix violations.
- Playwright smoke on mobile + desktop, both locales.
- Vercel deploy preview → review → promote.
- Tag `v1.0.0` and update `/CHANGELOG.md`.

**Total estimate: 4–4.5 days of focused work.**

---

## 13. RISKS & OPEN QUESTIONS

| Risk | Mitigation |
|---|---|
| Spanish copy drifts from English brand voice. | Hand-authored only. Forbidden-words list applied to es. Optional native-speaker proof. |
| Translation key drift between `en.json` and `es.json`. | `scripts/check-translations.ts` runs in pre-commit + CI; build fails on mismatch. |
| Token sync between `/tokens/build/` and the web app drifts. | One repo, postcss `@import` from `/tokens/build/`. Build script regenerates tokens before `next build`. |
| `motion` adds JS weight. | Lazy-import on `IntersectionObserver`. Reduced-motion bypasses entirely. |
| Form abuse / spam. | Honeypot + Upstash rate limit + Resend's bounce protection. |
| Hero schematic is heavy SVG. | Inline + minify; cap path count; `aria-hidden` on decoration. |
| Pressure to add a portfolio "Work" section before there's real work. | Explicit non-goal in §1. Revisit only when real case studies exist. |

### Open questions
1. **Domain & analytics**: confirm `axiallabs.com` is registered and DNS-ready for Vercel.
2. **Email provider**: confirm Resend for `/api/contact`.
3. **Default locale**: confirm `en` is the default (Accept-Language fallback). Acceptable alternatives: `es` (if primary market is Spanish-speaking) or geolocation-based.
4. **Locale URL strategy**: confirm sub-paths `/en` and `/es` (recommended) vs. domain-based (`en.axiallabs.com`).

---

## 14. DEFINITION OF DONE (v1)

- [ ] Four sections rendered, anchored, reachable from `<NavBar>` — in both locales.
- [ ] `/en` and `/es` both render fully; `/` redirects correctly.
- [ ] `<html lang>` and hreflang tags correct on every route.
- [ ] Token literals: zero `#` hex values in `src/`. CI grep gate.
- [ ] Translation parity: `scripts/check-translations.ts` passes in CI.
- [ ] No light-mode code paths: grep gate for `light`, `data-theme`, `prefers-color-scheme: light`.
- [ ] Lighthouse ≥ 95 on all four scores, both locales, mobile + desktop.
- [ ] Axe: zero serious / critical violations on both locales.
- [ ] Playwright: smoke + a11y + form-submission specs pass on both locales.
- [ ] `/api/contact` round-trips an email to `santiagot.roa@gmail.com` in staging, with locale in subject.
- [ ] OG images render per locale.
- [ ] CHANGELOG entry + `v1.0.0` tag + production deploy.

---

*This plan is the contract for v1. Scope changes require a new entry in §CHANGELOG above and a bump to this document's version stamp.*
