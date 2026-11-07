# DESIGN GUIDELINES — Personal Portfolio Website

| Field | Value |
|---|---|
| Document status | Draft v0.1 — **visual identity is PENDING; no design system has been defined** |
| Last updated | 2026-11-06 |
| Related | [PRD.md](PRD.md), [ARCHITECTURE.md](ARCHITECTURE.md), [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) |

## How to read this document

- `PENDING` means the owner has not decided. **No default may be assumed.**
- Only owner-approved decisions may replace a `PENDING` marker. Each approval is recorded in the decision log (section 11).
- The owner decided (conversation, 2026-11-06) to **leave the visual identity pending until ReactBits references are supplied** (OQ-004, task T0-08).
- No colors, fonts, spacing values, themes or animation styles appear in this document, because none have been approved.
- Sections 9 and 10 contain **process rules and requirements** taken from the owner's brief; they are not visual choices.

---

## 1. Approved visual direction

| Item | Status |
|---|---|
| Overall visual direction / mood | `PENDING` — owner to describe or supply references |
| Reference websites | `PENDING` |
| ReactBits components and prompts | `PENDING` — owner to supply when needed (task T0-08) |
| Screenshots and animation references | `PENDING` |
| Distinctiveness requirement | Confirmed requirement: must not look like a generic developer portfolio template (G-006). How this is achieved is `PENDING` |
| Light / dark theme | `PENDING` (OPT-003) |

## 2. Color system

`PENDING` — no palette, theme or contrast pairs approved.
Constraint already in force: whatever is approved must meet the accessibility contrast target (OQ-009, NFR-002).

## 3. Typography

`PENDING` — no typefaces, sizes, weights or line-height approved.
Open related decision: font hosting. Loading fonts from an external service would be a third-party dependency and needs owner approval (ARCHITECTURE.md §4).

## 4. Spacing

`PENDING` — no spacing scale approved.

## 5. Layout principles

`PENDING` — grid, page width, section structure and composition of each page are unapproved.
Fixed facts: multi-page structure (PG-001 to PG-005, PRD §9); all pages reachable through navigation (FR-008).

## 6. Component conventions

| Item | Status |
|---|---|
| Navigation style and behavior | `PENDING` — requires owner approval (FR-008) |
| Buttons, links, cards, forms | `PENDING` (the Contact page has no form: ADR-006) |
| Image presentation (photos, screenshots, supporting visuals) | `PENDING` |
| Naming and folder conventions for components | Proposed in ARCHITECTURE.md §5 and §7, pending approval |

## 7. Responsive behavior

`PENDING` — breakpoints and layout shifts are unapproved. Requirement in force: NFR-001 (responsive across common screen sizes).

## 8. Animation principles

`PENDING` — animation style, intensity, speed and interaction patterns are unapproved.
Requirements in force:

- Animations must not be the only way information is conveyed.
- Animated components should respect reduced-motion preferences (NFR-012, proposed).
- Animation cost must be weighed against performance (NFR-003) per component.

## 9. Accessibility requirements

These come from the brief and PRD, not from visual preference.

| Requirement | Source | Notes |
|---|---|---|
| Semantic structure and landmarks | NFR-002 | |
| Full keyboard operation of navigation and interactive elements | NFR-002 | |
| Visible focus indication | NFR-002 | Visual style `PENDING` |
| Text alternatives for meaningful images; decorative images marked decorative | NFR-002, FR-011 | |
| Sufficient color contrast | NFR-002 | Target `PENDING` (OQ-009; WCAG 2.2 AA proposed) |
| Reduced-motion support | NFR-012 | Proposed |
| No information conveyed by color alone | NFR-002 | |

## 10. ReactBits integration rules

Source of truth for the process: [ARCHITECTURE.md](ARCHITECTURE.md) §12.

1. Use **free** ReactBits components and resources only. Do not assume every ReactBits component is free.
2. React Bits Pro (the separate paid product with a license-key registry) is excluded, as is any component that requires a license key.
3. Do not introduce paid components or dependencies.
4. Preserve each component's intended behavior where practical.
5. Evaluate compatibility with React and Vite before use.
6. Document each component's external dependencies (purpose, cost, limitations, alternatives).
7. Do not blindly combine components that create inconsistent UX; propose a resolution and ask.
8. Do not replace ReactBits with another library without owner approval.
9. If a component causes technical, accessibility, responsiveness or performance problems, explain the trade-offs, propose alternatives and **wait for the owner's decision**.
10. Variant to use (JS + CSS or JS + Tailwind) and install method: `PENDING` (ADR-007, ADR-008).

### Component vetting record template

Copy one record per component into section 12 when the owner supplies it.

| Field | Value |
|---|---|
| Component name | |
| Source page URL | |
| Variant (JS + CSS / JS + Tailwind) | |
| Confirmed free (not Pro, no license key) | Yes / No |
| License re-checked (date, source) | |
| Dependencies (name, purpose, cost, alternatives) | |
| React / Vite compatibility | |
| Routing and prerendering compatibility | |
| Accessibility (keyboard, contrast, reduced motion) | |
| Responsiveness | |
| Performance impact | |
| Consistency with other approved components | |
| Used on (page IDs) | |
| Owner approval (date, wording) | |

## 11. Design decision log

| ID | Decision | Status | Approved by / date |
|---|---|---|---|
| DD-001 | Overall visual direction | PENDING | — |
| DD-002 | Color system and theme | PENDING | — |
| DD-003 | Typography and font hosting | PENDING | — |
| DD-004 | Spacing and layout system | PENDING | — |
| DD-005 | Navigation behavior | PENDING | — |
| DD-006 | Animation principles | PENDING | — |
| DD-007 | Responsive breakpoints | PENDING | — |
| DD-008 | Image presentation | PENDING | — |
| DD-009 | ReactBits component set | PENDING | — |

## 12. ReactBits component records

No records yet. Add one filled-in vetting template per approved component.
