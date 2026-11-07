# PRD — Personal Portfolio Website

| Field | Value |
|---|---|
| Document status | Draft v0.3 — scaffold built with placeholders; no page content |
| Last updated | 2026-11-06 |
| Owner | `[USER INPUT REQUIRED]` |
| Related | [BUILD.md](BUILD.md), [DESIGN.md](DESIGN.md), [TODO.md](TODO.md) |

Status tags: `[C]` confirmed by owner, `[D]` derived from the owner's brief, `[P]` proposed and not yet adopted.
`[USER INPUT REQUIRED]` marks information the owner has not supplied. It may never be guessed.

---

## 1. Overview

A multi-page, English-language personal portfolio positioning the owner as **Software Engineer + Creative Technologist + Personal Brand**. Built with React.js, Vite and JavaScript as a static multi-page site on GitHub Pages under the free github.io domain. Free ReactBits components are used as a complement, not as the primary UI source (ADR-006). No backend, no database.

Audiences: university admissions, recruiters, clients, tech community.

Success is judged by owner sign-off per page, not by invented metrics.

## 2. Scope

| In MVP | Requirement |
|---|---|
| Home | FR-001 |
| About | FR-002 |
| Experience / Education / Achievements | FR-003 |
| Contact (`mailto:` only) | FR-004 |
| Résumé / CV download | FR-005 |
| Blog / Writing index | FR-006 |
| Blog post view (conditional) | FR-007 |
| Site navigation | FR-008 |
| Direct URL and refresh support | FR-009 |
| Footer with profile links | FR-010 |
| Imagery | FR-011 |
| Page metadata and structured data | FR-012 |
| Not-found page | FR-013 |
| Placeholder release gate | FR-014 |

Conditional, pending the owner: Projects page (FR-015), blog post view (FR-007).

Out of scope: backend, database, authentication, comments, payments, e-commerce, content in languages other than English, paid ReactBits components, custom domain, hosted CMS, third-party analytics.

## 3. Functional requirements

| ID | Tag | Requirement |
|---|---|---|
| FR-001 | `[C]` | Home page introduces the owner, states the positioning, and links to every other page. |
| FR-002 | `[C]` | About page presents the owner's introduction and story using only owner-confirmed content. |
| FR-003 | `[C]` | Experience / Education / Achievements page covers education, experience and activities, achievements and awards, and certifications where applicable. |
| FR-004 | `[C]` | Contact page shows the owner's email address as text and provides a `mailto:` link. No form, no backend, no third-party form service. |
| FR-005 | `[C]` | The owner's résumé / CV is downloadable from the site. Format, source and placement are open (OQ-004). |
| FR-006 | `[C]` | Blog / Writing index lists the owner's posts. |
| FR-007 | `[P]` | Each blog post has its own page, or links out to where it is published. Depends on ADR-008 (OQ-002). |
| FR-008 | `[D]` | Every MVP page is reachable from site-wide navigation on every supported screen size. Navigation visual behaviour requires owner approval (DESIGN.md). |
| FR-009 | `[D]` | Every page loads correctly from a direct URL and after a browser refresh on GitHub Pages. Satisfied structurally by ADR-001. |
| FR-010 | `[D]` | A footer on every page carries the owner-confirmed professional and social links and the contact route. All links are `[USER INPUT REQUIRED]`. |
| FR-011 | `[C]` | The site supports personal photos, project screenshots and supporting visuals. |
| FR-012 | `[D]` | Every page has its own title, description, canonical URL, Open Graph tags, and a JSON-LD `Person` block describing the owner. |
| FR-013 | `[P]` | An unknown address serves a not-found page with a route back to Home. |
| FR-014 | `[D]` | The published build contains no unresolved `[USER INPUT REQUIRED]` token and no fictional content presented as real. This is a release gate. |
| FR-015 | `[P]` | A Projects page, if the owner approves one (OQ-001). |

## 4. Non-functional requirements

| ID | Tag | Requirement |
|---|---|---|
| NFR-001 | `[D]` | Responsive across phones, tablets, laptops and large desktops. Layout must survive 320px width and 400% zoom without horizontal scrolling. |
| NFR-002 | `[D]` | WCAG 2.2 level AA. Minimum bar: 4.5:1 for body text, 3:1 for large text and UI boundaries, 24×24 CSS px target size (SC 2.5.8), visible focus not obscured by other content (SC 2.4.11), reflow at 400% (SC 1.4.10), no information by colour alone (SC 1.4.1), keyboard operability, text alternatives. |
| NFR-003 | `[D]` | Core Web Vitals on the deployed site: LCP < 2.5s, INP < 200ms, CLS < 0.1, measured on a mid-range mobile profile. |
| NFR-004 | `[D]` | SEO baseline: one `h1` per page, 50–60 character titles, 120–160 character descriptions, self-referencing canonical, `robots.txt`, `sitemap.xml`, JSON-LD `Person` on Home. |
| NFR-005 | `[C]` | Free GitHub Pages on the free github.io domain. No paid infrastructure, backend or database. |
| NFR-006 | `[C]` | Free ReactBits components only. React Bits Pro, licence-key registries and any paid dependency are excluded. |
| NFR-007 | `[C]` | Nothing is fabricated. Missing information stays `[USER INPUT REQUIRED]`. |
| NFR-008 | `[C]` | All published content is in English. |
| NFR-009 | `[D]` | No secrets in the client bundle. The repository is public, so no private data is committed. |
| NFR-010 | `[P]` | Supported browsers: current versions of Chrome, Edge, Firefox and Safari, plus iOS Safari. Older browsers are not supported. |
| NFR-011 | `[P]` | Content is separated from presentation so edits do not require changing component logic. |
| NFR-012 | `[P]` | Every animation respects `prefers-reduced-motion` and no content depends on animation to be readable. |
| NFR-013 | `[D]` | The site stays within GitHub Pages limits (site ≤ 1 GB, soft 100 GB/month bandwidth, 10-minute deploy timeout) and within the budgets in BUILD.md §9. |
| NFR-014 | `[D]` | Every dependency is recorded with purpose, size cost, limitations and alternatives before adoption. |

## 5. Content inventory

All personal content is missing. Owner-supplied only; nothing below may be inferred.

| ID | Item | Used by | Status |
|---|---|---|---|
| CR-001 | Personal introduction | Home | Supplied 2026-11-07 |
| CR-002 | About me | About | Supplied 2026-11-07 |
| CR-003 | Education | Experience | Supplied 2026-11-07 |
| CR-004 | Technical skills | Home, About, Experience | Partial — interests listed, no skill inventory |
| CR-005 | Creative skills | Home, About, Experience | Supplied 2026-11-07 |
| CR-006 | Projects | Undecided (OQ-001) | Missing — owner said placeholder for now |
| CR-007 | Achievements and awards | Experience | Missing |
| CR-008 | Experience and activities | Experience | Missing |
| CR-009 | Certifications (if applicable) | Experience | Missing |
| CR-010 | Contact email address | Contact, Footer | Supplied 2026-11-07 |
| CR-011 | Professional and social links | Contact, Footer | Missing — owner said placeholder for now |
| CR-012 | Personal interests | About | Supplied 2026-11-07 |
| CR-013 | Résumé / CV file | Résumé download | Missing |
| CR-014 | Blog posts | Blog | Missing — owner said placeholder for now |
| CR-015 | Photos and visuals, with rights | Site-wide | Missing |
| CR-016 | Site name, tagline, favicon, social preview image | Site-wide | Partial — name and tagline supplied; no favicon or OG image |

Rules for content are in DESIGN.md §9. Every published claim must trace to an owner statement or document. When the owner revises a fact, update the page and the verification log together.

## 6. Acceptance criteria

| ID | Covers | Criterion (verified on the production build) |
|---|---|---|
| AC-001 | FR-001 | Home loads, shows owner-approved content only, links to every page. |
| AC-002 | FR-002 | About contains only owner-verified content. |
| AC-003 | FR-003 | Education, experience and achievements match the verification log exactly. |
| AC-004 | FR-004 | Email visible as text; link opens the default mail client; no form or third-party service. |
| AC-005 | FR-005 | The owner-supplied file downloads from the published site. |
| AC-006 | FR-006 | Blog index lists the owner-supplied posts with working links. |
| AC-007 | FR-007 | Each post opens and survives refresh. |
| AC-008 | FR-008 | Every page is reachable from navigation at 320px, 768px and 1440px. |
| AC-009 | FR-009 | Each page URL works when typed directly and after refresh. |
| AC-010 | FR-010 | Footer appears on every page and every link points to an owner-confirmed account. |
| AC-011 | FR-011 | Images render with correct dimensions and alt text; decorative images are marked decorative. |
| AC-012 | FR-012 | Each page has a distinct title, description, canonical and Open Graph set; Home has valid JSON-LD `Person`. |
| AC-013 | FR-013 | An unknown address serves the 404 page. |
| AC-014 | FR-014 | A search of source and production build finds zero placeholder tokens; owner signs off. |
| AC-015 | NFR-001, NFR-002 | No horizontal scroll at 320px or 400% zoom; every interactive element reachable by keyboard with visible focus; measured contrast meets NFR-002. |
| AC-016 | NFR-003 | Lighthouse/CWV results recorded and meet the NFR-003 thresholds, or the shortfall is accepted by the owner in writing. |

## 7. Open questions

| ID | Question | Blocks |
|---|---|---|
| OQ-001 | Projects: MVP page, post-MVP, or Home section only? | FR-015, CR-006 |
| OQ-002 | Blog authoring: Markdown, JS/JSON data, or external platform? How many posts at launch? | FR-006, FR-007, ADR-008 |
| OQ-003 | ~~Typography: which typefaces, and how are they hosted?~~ **Resolved** — Space Grotesk, self-hosted. Owner may override. | — |
| OQ-004 | Résumé: file format, who supplies it, where it lives, how it is updated? | FR-005 |
| OQ-005 | GitHub username, repository name and account plan. | base path, deploy |
| OQ-006 | All personal content (CR-001 to CR-016). | Phases 2–4 |
| OQ-007 | Supported browsers and devices (proposal in NFR-010). | verification |
| OQ-008 | Site name, tagline, favicon, social preview image. | FR-012, home |
| OQ-009 | Which email address, and should it be obfuscated against scraping? | FR-004 |
| OQ-010 | Which photos exist, and are rights and consent in place? | FR-011 |
| OQ-011 | Any analytics at all? Default is none. | — |

## 8. Owner decisions on record

| Decision | Value | Date |
|---|---|---|
| Stack | React.js + Vite + JavaScript | 2026-11-06 |
| Architecture | Multi-page Vite, no client-side router | 2026-11-06 |
| Hosting | GitHub Pages, free domain | 2026-11-06 |
| Contact | Visible email + `mailto:`, no form | 2026-11-06 |
| ReactBits | Complement, not primary UI source | 2026-11-06 |
| Styling | Plain CSS (delegated to planner, "lowest LCP") | 2026-11-06 |
| Palette | Forest `#217F21` 60%, jungle `#01B36C` 30%, peach `#FFCFCA` 10% | 2026-11-06 |
| Performance | Optimize for low LCP; the numeric thresholds in NFR-003 are proposed | 2026-11-06 |
| Typography | "Minimalist but attention-holding" — Space Grotesk chosen under that instruction | 2026-11-06 |
| Content at build | Placeholders only; no personal content yet | 2026-11-06 |

Everything else in this document is not yet decided.
