# AGENTS.md — Working Rules

This is a project instruction file, not an agent definition. Read [PRD.md](PRD.md),
[BUILD.md](BUILD.md), [DESIGN.md](DESIGN.md) and [TODO.md](TODO.md) before any work.
`archive/` is superseded and must not be treated as current.

Last updated: 2026-11-06.

---

## 1. Phase gate

- The scaffold exists and builds. Page content does not: every page still renders `[USER INPUT REQUIRED]`.
- Do not invent content to make a page look finished. Do not remove the placeholder gate.
- Blocking decisions are listed in README.md and PRD.md §7. `BLOCKED` tasks in TODO.md stay blocked.
- Silence is not approval.

## 1a. What is verified

`npm run build` emits six prerendered HTML files; all six return HTTP 200 in dev and preview; the
`/portfolio/` base path rewrites HTML, CSS, font and JS correctly; size budgets pass (JS 69.3 KB gzip,
CSS 1.5 KB gzip, font 22.3 KB).

Not verified, do not claim: responsive layout at any breakpoint, keyboard order, contrast in a browser,
LCP/CLS/INP, the 404 page on a real host, deployment, `dist/` on GitHub Pages.

## 2. No fabrication

- Never invent personal information, education, experience, awards, project results, skills, testimonials, contact details, social accounts, certifications, dates or organisations.
- Gaps stay `[USER INPUT REQUIRED]`.
- Never convert an assumption into a statement of fact.
- This applies to owner decisions too. A decision is recorded only after the owner states it.

## 3. Fixed decisions

Recorded in PRD.md §8 and BUILD.md §16. Summary: React.js + Vite + JavaScript, multi-page with no router,
build-time prerender then hydrate, plain CSS, Space Grotesk self-hosted, free ReactBits as a complement,
GitHub Pages on the free domain, visible email with `mailto:`,
palette `#217F21` / `#01B36C` / `#FFCFCA`, placeholders until content arrives.

Anything not on that list needs the owner's decision first.

## 4. Ask before deciding

Visual identity, typography, colour usage, layout, animation, navigation behaviour, architecture,
new dependencies and external services all require owner approval. When proposing an alternative:
explain it, list advantages and disadvantages, say why it might be better, ask, then wait.
One important question at a time.

If a restriction seems wrong, explain the trade-off and ask. Do not work around it.

## 5. Dependencies

Every dependency is recorded with purpose, size cost, limitations and alternatives before it is added.
No paid dependencies. No analytics, no external font service, no CMS, no form service.

## 6. Design and accessibility

- WCAG 2.2 AA is part of done. Contrast pairs and their measurements are in DESIGN.md §2; the binding consequences there are not optional.
- Accessibility and responsiveness are verified per phase, not at the end.
- ReactBits: maximum three components, six-field vetting record each, copied into `src/components/reactbits/`.

## 7. Verification

Before claiming anything is done: production build succeeds, pages load from a direct URL and survive refresh,
responsive and accessibility checks pass at the sizes in DESIGN.md §7, and performance is measured against
BUILD.md §9. Report what was not tested.

The placeholder check is a **release** gate, not a per-commit gate. While content is outstanding it fails by
design (`dist/assets/Layout-*.js` still contains the token). A green run of `npm run check:placeholders` is
required before the first deploy and before any release tag.

## 8. Git and repository

- Small, focused commits with clear messages.
- The repository is public. No secrets, no private data.
- Do not rewrite shared history without approval.
- Never commit a build output or `node_modules`.

## 9. Documentation first

If work changes requirements, architecture, design or scope, update the document first and get approval.
Keep IDs consistent across files. If two requirements conflict, surface the conflict instead of choosing silently.
