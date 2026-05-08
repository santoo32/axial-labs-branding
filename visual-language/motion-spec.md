# Motion Spec
*Axial Labs · v1.0*

Motion at Axial Labs is **mechanical, not theatrical.** Things rotate around axes, slide along guides, and tick into place. They do not bounce. They do not wobble. They do not celebrate themselves.

If a motion makes you smile, it's wrong. If it makes you nod, it's right.

---

## 1. The Axial easing curve

```
cubic-bezier(0.32, 0.72, 0, 1)
```

Token: `--ease-axial`. This is the default for everything. Slightly aggressive at the start, glides to rest.

### Other allowed curves
- `--ease-in-out` — `cubic-bezier(0.65, 0, 0.35, 1)`. Symmetric. Use for two-way state changes (toggles, accordions).
- `--ease-out` — `cubic-bezier(0, 0, 0.35, 1)`. For elements entering the viewport.
- `linear` — for axis-line wipes, scrolling tickers, marquees, marching ants.

### Forbidden curves
- `ease-in` (alone) — feels sluggish.
- `cubic-bezier` with overshoot or undershoot.
- Anything labeled `bounce`, `elastic`, `back`.

---

## 2. Duration tokens

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 120ms | Hover state changes, focus rings, tooltip fade-in. |
| `--duration-ui`      | 240ms | Default UI transitions: tabs, accordions, buttons, modals. |
| `--duration-hero`    | 600ms | Hero entries, page-level transitions. |
| `--duration-epic`    | 1200ms | Orchestrated scroll-triggered sequences. |

Anything longer than 1200ms is suspicious. Anything shorter than 120ms is invisible.

---

## 3. The motion primitives

### 3.1 Rotation around an axis
The signature motion. Subtle. 0–4 degrees. Around an off-center axis.

```css
.rotate-on-load {
  transform: rotate(-2deg);
  animation: settle var(--duration-hero) var(--ease-axial) forwards;
}
@keyframes settle {
  to { transform: rotate(0deg); }
}
```

Use for: incoming hero illustrations, brand mark reveals, orbiting elements.

### 3.2 Axis-line wipe
A 1px line draws itself from one end to the other.

```css
.axis-draw {
  transform-origin: top;
  transform: scaleY(0);
  animation: axis-draw var(--duration-hero) var(--ease-axial) forwards;
}
@keyframes axis-draw {
  to { transform: scaleY(1); }
}
```

Use for: page-load hero ornaments, section dividers entering on scroll.

### 3.3 Type reveal — character by character
30ms per character. Display headlines only.

```js
// Pseudocode
characters.forEach((char, i) => {
  char.style.transition = `opacity 240ms var(--ease-axial)`;
  char.style.transitionDelay = `${i * 30}ms`;
  char.style.opacity = 1;
});
```

Use for: hero H1, manifesto opening, section headlines on scroll.

### 3.4 Parallax along Y
Scroll-linked. Subtle. Max offset: 80px over a full viewport scroll.

```css
.parallax {
  will-change: transform;
  transform: translateY(calc(var(--scroll) * -0.15));
}
```

Use for: hero illustrations, decorative axis ornaments, NOT body content.

### 3.5 Mono ticker
Linear marquee for status/data lines.

```css
.ticker {
  animation: tick 12s linear infinite;
}
@keyframes tick {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

Use for: live status footers, pricing tickers, data feeds.

---

## 4. Component motion patterns

### 4.1 Buttons
- Default → Hover: `background-color`, `box-shadow` over **240ms ease-axial**.
- Default → Active: scale `0.98` over **120ms**.
- Focus ring: appears instantly on `:focus-visible`. No transition.

### 4.2 Cards (service, pricing)
- Hover: border-color shifts to Voltage over **240ms**. Internal arrow translates **+4px X** over **240ms**. No card-level scale or lift.

### 4.3 Modals (Z3)
- Enter: backdrop fades in over **240ms**, content scales from 0.98 → 1.0 + opacity 0 → 1 over **240ms ease-axial**.
- Exit: reverse, both at **120ms**.

### 4.4 Tooltips
- Enter: opacity 0 → 1 + translateY(4px → 0) over **120ms ease-out**.
- 200ms hover delay before showing.

### 4.5 Tabs / Accordions
- Indicator slides between tabs over **240ms ease-in-out**.
- Accordion content uses `grid-template-rows` from `0fr` → `1fr` over **240ms ease-axial**.

### 4.6 Page transitions (SPAs)
- Outgoing page: opacity 1 → 0 + translateY(0 → -8px) over **240ms ease-axial**.
- Incoming page: opacity 0 → 1 + translateY(8px → 0) over **240ms ease-axial**, 80ms delay.

---

## 5. Scroll-triggered orchestration

For hero / landing experiences:

1. **0ms** — page surface fades in.
2. **80ms** — axis line draws (600ms duration).
3. **300ms** — eyebrow Mono fades in (240ms).
4. **400ms** — H1 character-by-character reveal (≈900ms total for 30 chars).
5. **1100ms** — body subhead fades in (240ms).
6. **1300ms** — CTA fades + Voltage glow pulses once (600ms).

Total opening sequence: ~1.9s. Anything longer is showing off.

---

## 6. Reduced-motion mode

Respect `prefers-reduced-motion: reduce`. When set:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

All decorative motion is replaced with instant transitions. Functional state changes (focus, hover indicators) remain but become instant.

---

## 7. Performance rules

- Animate `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`, `margin`, `padding`.
- Use `will-change` only on elements actively animating, and remove it when done.
- 60fps minimum on M1 / mid-range Android. Profile before shipping.
- No JavaScript-driven scroll handlers without `requestAnimationFrame` throttling.

---

## 8. Sound (forward-looking)

Not in v1. When we add sound:
- Subtle. Mechanical (tick, click, hum).
- Never musical or emotional.
- Always opt-in via a Mono toggle in the bottom corner.
- Defaults off.

---

## 9. Anti-patterns

- Bounces on enter.
- Elastic snap-backs.
- 3D card flips.
- Confetti or particle effects.
- Springy tab indicators.
- Page transitions over 400ms.
- Cursor-following blobs.
- "Magnetic" hover effects.
- Scrolljacking.

If you're tempted by any of these, you're solving a different problem than the one Axial Labs has.
