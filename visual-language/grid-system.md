# Grid System
*Axial Labs · v1.0*

The grid is part of the brand. We do not hide it. Construction is on display.

---

## 1. Base unit

**4 pixels.**

Every spacing, sizing, and offset value in Axial Labs is a multiple of 4. This includes typography (font sizes round to 4-multiples in absolute pixels, line heights snap to 4-pixel rhythms), padding, margins, gutters, icon sizes, and component dimensions.

If a value is not on the 4px grid, it is not done.

---

## 2. Two grids

We run two grids depending on context:

### 2.1 Marketing grid
- **12 columns**
- **24px gutters**
- **Max width: 1280px**
- Outer page padding: `clamp(24px, 5vw, 96px)` — fluid to viewport.

Used for: landing pages, marketing sites, case studies, manifesto, contact, 404.

### 2.2 Product grid
- **8 columns**
- **16px gutters**
- **No max width** (fills viewport)
- Outer padding: 16px on mobile, 24px on tablet, 32px on desktop.

Used for: dashboards, product UI, internal tools, anything app-like.

---

## 3. Breakpoints

| Token | Min width | Note |
|---|---|---|
| `xs`  | 0px    | Mobile portrait |
| `sm`  | 480px  | Mobile landscape |
| `md`  | 768px  | Tablet |
| `lg`  | 1024px | Small laptop |
| `xl`  | 1280px | Standard desktop |
| `2xl` | 1440px | Large desktop |

Type uses `clamp()` so headings scale fluidly between breakpoints. Massive type (footer wordmark, 128px+) does **not** shrink on mobile.

---

## 4. Column behavior

| Breakpoint | Marketing cols | Product cols |
|---|---|---|
| xs (0)    | 4  | 4 |
| sm (480)  | 6  | 4 |
| md (768)  | 8  | 6 |
| lg (1024) | 12 | 8 |

Components declare span in the largest grid (`col-span-6` of 12) and we transform proportionally at smaller breakpoints.

---

## 5. Visible grid (the brand signature)

In selected hero and section moments, **show the grid**. 1px graphite-200 vertical lines at every column boundary, opacity 8–15%. The grid is overlay, not a background — it sits at z-index 1 above the surface but below content.

```html
<div class="grid-overlay" aria-hidden="true">
  <!-- 12 vertical lines, 1px each, evenly distributed -->
</div>
```

This is one of the recurring "axial elements" the system requires.

---

## 6. Vertical rhythm

Spacing scale (multiples of 4):
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 192 · 256`

### Section spacing rules
- Between H1 and subheadline: **24px**
- Between subheadline and CTA: **48px**
- Between hero and next section: **128px** (`--space-32`)
- Between sections in long pages: **96px** (`--space-24`)
- Between paragraphs in editorial: **24px** (`--space-6`)

### Inside cards
- Padding: 32px desktop, 24px mobile.
- Title to body: 12px.
- Body to footer/CTA: 24px.

### Inside product UI
- Component padding: multiples of 8, not 4 (denser).
- Gutter between toolbar items: 8 or 16.
- Stack list-items: 12 vertical padding.

---

## 7. Type to grid

Type sits **on** the grid. Cap height aligns to baseline grid lines, not bounding box.

For HTML: set explicit `line-height` in pixels rounded to 4-multiples, then set `padding` such that the cap height of the first line lands on a 4-multiple from the parent's top.

For Figma: turn on baseline grid at 4px, snap text frames to it.

---

## 8. Image and asset sizing

- Hero images: 16:9 or 4:3.
- Case study heros: 21:9 cinematic.
- Card thumbnails: 4:3.
- Avatar: 1:1.
- Instagram posts: 4:5 (1080×1350).
- LinkedIn carousel: 4:5.
- OG images: 1200×630.

All image dimensions are 4-multiples.

---

## 9. The "axial element" requirement (reminder)

Every layout must include at least one visible grid expression:

1. A vertical axis line running through the page (1px graphite-200 or 1px Voltage).
2. Tick marks at column boundaries.
3. A grid overlay in a hero moment.
4. Crosshair registration marks at frame corners (4×4 px).
5. A Mono coordinate label like `X: 0,400  Y: 240` somewhere unobtrusive.

If none are present, the layout is off-system. Add one.

---

## 10. Anti-patterns

- Random `padding: 17px`. Never. 16 or 20.
- Centered marketing layouts. We left-align.
- "Just barely off-grid" type. Never. Snap or rebuild.
- Variable column gutters within a single page.
- Rounded card corners (cards have **0** radius).
- Drop-shadow drift in dark mode (use borders).
