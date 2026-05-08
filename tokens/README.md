# Axial Labs · Design Tokens

Single source of truth for the Axial Labs visual system.
**v1.0 · 2026-05-07**

---

## Structure

```
tokens/
├── core/             # Primitive tokens — values, no semantics
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   ├── radius.json
│   ├── shadow.json
│   ├── motion.json
│   ├── gradient.json
│   └── z-index.json
│
├── semantic/         # Surface-level tokens that reference core
│   ├── dark.json     # default mode
│   └── light.json
│
├── component/        # Component-scoped tokens
│   ├── button.json
│   ├── card.json
│   ├── input.json
│   └── badge.json
│
├── build/            # Generated outputs — do not edit by hand
│   ├── tokens.css
│   ├── tokens.tailwind.js
│   └── tokens.figma.json
│
└── config/
    └── style-dictionary.config.js
```

---

## Layer model

We follow the classic three-layer token model:

1. **Core** = primitives. `color.axial.voltage = #C6F24E`. Stable.
2. **Semantic** = intent. `text.accent = {color.axial.voltage}`. Theme-swappable.
3. **Component** = scoped. `button.primary.color = {text.accent}`. Inherits.

**Consumers reference semantic and component tokens.** Never reach for core values directly in product code.

---

## Build

```bash
cd tokens
npx style-dictionary build
```

Outputs:
- `build/tokens.css` — CSS variables for any HTML/web target.
- `build/tokens.tailwind.js` — Tailwind theme extension.
- `build/tokens.figma.json` — Tokens Studio for Figma.

---

## Usage — Web (CSS)

```html
<link rel="stylesheet" href="/tokens/build/tokens.css" />
<style>
  .my-button {
    background: var(--axial-voltage);
    color: var(--axial-black);
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-sm);
    transition: all var(--duration-ui) var(--ease-axial);
  }
</style>
```

## Usage — Tailwind

```js
// tailwind.config.js
const axialTokens = require('./tokens/build/tokens.tailwind.js');
module.exports = {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: { extend: axialTokens },
};
```

## Usage — CDN (single-file mockups)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="/tokens/build/tokens.tailwind.js"></script>
<script>tailwind.config = { theme: { extend: window.axialTokens } };</script>
```

---

## Theme switching

```html
<html data-theme="dark"> <!-- default -->
<html data-theme="light">
```

Switch programmatically:

```js
document.documentElement.setAttribute('data-theme', 'light');
```

All semantic tokens swap. Core tokens never change.

---

## Adding a token

1. Add it to the right `core/*.json` file.
2. If it should respond to mode, surface it in `semantic/dark.json` and `semantic/light.json`.
3. If it's component-scoped, add it under `component/<name>.json`.
4. Run `npx style-dictionary build`.
5. Commit `core/`, `semantic/`, `component/`, **and** `build/` (generated files are committed).

## Versioning

Semver. Token changes that break consumers = major bump. Net-new tokens = minor. Visual fixes = patch.

---

## Rules of the system

- **Never hardcode hex values** in product code. Reference tokens.
- **Voltage is a signal, not a paint.** Cap at 5% of any composition.
- **Borders, not shadows.** Z1 surfaces use 1px borders, not drop shadows.
- **4px grid.** Every spacing value is a multiple of 4.
- **Right angles.** No corner radius on cards. 4px on inputs only.

See `/MASTER-PLAN.md` for full rationale.
