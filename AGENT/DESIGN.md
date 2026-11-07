# DESIGN — Visual Direction, Tokens, Rules

| Field | Value |
|---|---|
| Document status | Draft v0.3 — palette and typography set and implemented; wireframes pending |
| Last updated | 2026-11-06 |
| Related | [PRD.md](PRD.md), [BUILD.md](BUILD.md), [TODO.md](TODO.md) |

`PENDING` means the owner has not decided. Nothing here may be guessed to fill a gap.

---

## 1. Direction

Dark forest site with a peach outline language.

- The ground is deep green, not white. That is the site's most distinctive decision and the one to protect when it gets tempting to add "breathing room" in cream.
- Peach is a line colour, not a text colour and not a card fill. It draws rules, frames, borders and focus rings on forest.
- Jungle green is a field colour for section shifts. It carries no white text.
- Type and composition do the distinctiveness work; ornament does not.

Two house rules carried over from the design standard in use:

- No gradients, no glass or backdrop blur, no glow, no shadow on anything at rest.
- No eyebrow labels, no index numbers, no hairlines, no rows of identical icon cards.

## 2. Tokens

| Token | Value | Role | Share |
|---|---|---|---|
| `--ground` | `#217F21` | Page ground, bodies of text on it are white | 60% |
| `--support` | `#01B36C` | Section fields, accent blocks | 30% |
| `--accent` | `#FFCFCA` | Outlines, rules, focus ring on ground, small marks | 10% |
| `--ink-on-ground` | `#FFFFFF` | Text on `--ground` | — |
| `--ink-on-support` | `#14201A` | Text on `--support` | — |

Measured contrast, not estimated:

| Pair | Ratio | Body text (4.5) | Large text / UI (3.0) |
|---|---|---|---|
| white on `#217F21` | 5.09 | pass | pass |
| `#14201A` on `#01B36C` | 6.13 | pass | pass |
| `#FFCFCA` on `#217F21` | 3.65 | fail | pass |
| `#FFCFCA` on `#01B36C` | 1.96 | fail | fail |
| white on `#01B36C` | 2.74 | fail | fail |
| white on `#FFCFCA` | 1.40 | fail | fail |

Binding consequences:

1. **Never white text on `--support`.** Use `--ink-on-support`.
2. **Never peach as body text.** It is a line and UI colour only.
3. **Never peach on `--support`** — not as a border, not as a focus ring. On support surfaces the focus ring is `#14201A`.
4. Links are white with an underline. Colour alone does not distinguish them (SC 1.4.1).
5. `#217F21` is the approved forest value. `#228B22` is retired because white on it measures 4.39.

## 3. Typography

**Space Grotesk** — one family, variable, weights 300–700. Chosen 2026-11-06 by the planner under the owner's instruction "minimalist but attention-holding"; the owner may override.

Why it fits: the brief asked for minimalist but attention-holding. Space Grotesk is a geometric grotesque with deliberately odd details (the `a`, the `g`, the `t`), so it reads as designed at large display sizes while staying plain at body size. One family means one font request and no pairing decision.

| Item | Value |
|---|---|
| Family | Space Grotesk (SIL OFL 1.1, `src/assets/fonts/OFL.txt`) |
| File | `src/assets/fonts/space-grotesk-latin.woff2`, 22.3 KB, variable `wght` 300–700 |
| Subset | Latin only, via `unicode-range` in `base.css` |
| Hosting | Self-hosted, hashed into `dist/assets/`. No external font service |
| Loading | `font-display: swap`, `font-synthesis-weight: none`. No `preload` link: the font is discovered through CSS. Add one only if measurement shows the font delaying first text paint |
| Fallback | `system-ui, -apple-system, 'Segoe UI', sans-serif`. `size-adjust` on the fallback is not set yet — add it if CLS measurement exceeds NFR-003 |

Scale, from `tokens.css`. Five steps, no more:

| Token | Range | Use |
|---|---|---|
| `--step-3` | 2.4 → 4.8 rem | `h1`, one per page |
| `--step-2` | 1.6 → 2.4 rem | `h2` |
| `--step-1` | 1.25 → 1.6 rem | `h3`, `.lede` |
| `--step-0` | 1 → 1.125 rem | body |
| `--step--1` | 0.85 → 0.95 rem | meta, footer |

Rules in force:

- Display tracking -0.03em, leading 1.02. Body leading 1.55, measure 62ch.
- Headlines fit in two lines at every width, including 320px.
- No monospace outside real code blocks.
- Weight is used before size: 600 for headings, 400 for body. No weight below 300.

## 4. Spacing and layout

Values implemented in `tokens.css`:

| Token | Value | Use |
|---|---|---|
| `--page` | 1100px | content max width |
| `--gutter` | clamp(1.25rem, 0.5rem + 3vw, 3rem) | equal outer margins, every page |
| `--space-1` … `--space-5` | 0.5 / 0.875 / 1.5 / 2.5 / 4 rem | internal gaps |
| `--space-6` | clamp(4rem, 2rem + 8vw, 8rem) | section gap and hero |
| `--measure` | 62ch | body line length |

Rules in force:

- One grid and one pair of equal outer margins used on every page.
- Section gap clearly larger than any internal gap.
- Every section opens with a heading that names it.
- Every section fills the width it sets up: a heading in one half is answered by content in the other, never by emptiness.
- No vertical stretch taller than roughly half a screen holds nothing.
- Asymmetry lives inside the grid, never in the outer frame.
- One deliberate rest per page at most.

`PENDING`: the per-page wireframes (T3-02). Home is currently a hero plus a two-column entry grid; About is stacked sections; Experience and Writing are stacked lists. These are structure, not an approved composition.

## 5. Components

Implemented:

- **Header** — wordmark (a link home) and a plain link list, wrapping on narrow screens. Bottom border 2px in mixed peach. No pill bar, no glass.
- **Current-page marker** — `aria-current="page"` plus a peach underline. Never colour alone.
- **Footer** — wordmark, profile links, email. Top border 2px in mixed peach.
- **Skip link** — peach fill with `#14201A` text, hidden until focused.
- **`.entry`** — heading, meta line, body, separated by a 2px peach top rule. Not a card: no fill, no shadow, no radius.
- **`.section--support`** — full-bleed jungle block carrying `#14201A` text; focus ring switches to `#14201A`.
- **`.placeholder`** — dashed peach underline so a missing value is visible, not hidden.

Fixed rules:

- Buttons: no button exists yet. When one is needed, one fill, square or fully round, decided once and used everywhere.
- Cards: not a default. A card grid appears only if a section's content genuinely needs one.
- Fields: none. The Contact page has no form.
- Focus ring: 2px solid, using the pairs listed in §2.

## 6. Motion

Implemented: only the `prefers-reduced-motion` reset in `base.css`. No entrance animation, no transition.

Fixed rules:

- No content depends on animation to be read.
- Everything respects `prefers-reduced-motion`.
- Motion is transform and opacity only.
- Animation cost is charged against the performance budget per component (BUILD.md §9).

`PENDING`: whether any motion is added at all (T3-05).

## 7. Responsive

Targets, not yet verified. No width has been checked in a browser; the layout is fluid (clamp gutter, wrapping nav, two-column grid only at ≥48rem) but that is not evidence.

- Verified at 320, 390, 768, 1024 and 1440 px.
- No horizontal scroll at any width, including 400% zoom.
- The phone layout is its own composition, not a squeezed desktop.

## 8. ReactBits usage

ADR-006 applies: ReactBits is a complement.

| Rule | Detail |
|---|---|
| Maximum components | 3 (proposed, awaiting owner approval) |
| Source | Free only. React Bits Pro, licence-key registries and paid bundles are excluded |
| Selection | Only a component that already matches §1 and §5. Never reshape the site to fit a component |
| Variant | JS + CSS, since the project is JavaScript with plain CSS |
| Installation | Copy the component into `src/components/reactbits/<name>/`; no CLI, no registry |
| Dependencies | Any package the component needs is a separate dependency with its own record (NFR-014) |
| Loading | `import()` per component; never in the shared entry bundle |
| Behaviour | Preserve the component's intended behaviour where practical; document any change |

### Vetting record

Six fields, one per component. A component without a complete record is not integrated.

| Field | Value |
|---|---|
| Component and source URL | |
| Confirmed free (not Pro, no licence key) | |
| Dependencies and their size | |
| Matches §1, §2 and §5 | |
| Keyboard, contrast, reduced motion, responsive | |
| Owner approval (date) | |

## 9. Content rules

- Every factual claim traces to an owner statement or an owner-supplied document.
- Gaps are written as `[USER INPUT REQUIRED]` and found by the release gate.
- No invented statistics, results, testimonials, employers, dates or qualifications.
- Photos only with owner-confirmed rights; consent before publishing identifiable images of other people.
- Screenshots of the owner's work must not expose tokens, personal data or internal URLs.
- Project and achievement entries use only owner-confirmed fields.

### Verification log

Every published claim traces to one row here. Updated when the owner supplies or revises a fact.

| Item | Value as published | Owner statement | Date |
|---|---|---|---|
| Full name | Samuel Rain Gunawan | "Samuel Rain Gunawan (panggil Rain)" | 2026-11-07 |
| Preferred name | Rain | same | 2026-11-07 |
| Tagline | Tech Enthusiast, Exploring New Things | "Tech Enthusiast, Exploring New Stuffs" — grammar corrected | 2026-11-07 |
| Email | samuelsofficials28@gmail.com | supplied directly | 2026-11-07 |
| Home intro | curious, tries new things, takes on challenges | "saya suka penasaran dan nyoba hal baru dan kalo ada tantangan suka dicobain" | 2026-11-07 |
| Skills / interests | photography, video editing, new tools, AI | "saya suka fotografi, editing video, coba tools teknologi baru, hal-hal berkaitan dengan ai" | 2026-11-07 |
| Current status | 12th grade, Cinta Kasih Tzu Chi Vocational School | "currently 12th grade vocational cinta kasih tzu chi" | 2026-11-07 |
| Schooling | Santo Leo 2, kindergarten to junior high | "tk-smp santo leo 2, skrg smk cinta kasih tzu chi" | 2026-11-07 |
| Approach | "Do my best to make everything work" | "cara kerja: do my best to get everything work" — grammar corrected | 2026-11-07 |
| Hobbies | football, running, games, reading, music | "sports kyk football, running, games, reading book, hearing musics" | 2026-11-07 |

Not supplied, still placeholder: projects, achievements, work experience, certifications, social links, résumé, blog posts, photos, favicon, social preview image.

## 10. Decision log

| Item | Status | Date |
|---|---|---|
| Palette: `#217F21` / `#01B36C` / `#FFCFCA` | Approved, 60/30/10 | 2026-11-06 |
| Text colours: white on ground, `#14201A` on support | Approved | 2026-11-06 |
| Peach as outline/accent only | Approved | 2026-11-06 |
| Direction: dark forest, peach line language | Derived from the palette decision | 2026-11-06 |
| Typography: Space Grotesk, self-hosted | Implemented, owner may override | 2026-11-06 |
| Layout system and wireframes | Tokens implemented; per-page wireframes PENDING (T3-02) | 2026-11-06 |
| Navigation behaviour | Static link list implemented; mobile behaviour pending review | 2026-11-06 |
| Motion style | PENDING (T3-05) | — |
| ReactBits component set | PENDING | — |
| Image treatment | PENDING | — |
