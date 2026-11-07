# PRD — Personal Portfolio Website

| Field | Value |
|---|---|
| Document status | Draft v0.1 — planning phase (nothing implemented) |
| Last updated | 2026-11-06 |
| Owner / product owner | `[USER INPUT REQUIRED]` (name not yet provided) |
| Related documents | [ARCHITECTURE.md](ARCHITECTURE.md), [TODO.md](TODO.md), [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md), [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md), [DEPLOYMENT.md](DEPLOYMENT.md), [AGENTS.md](AGENTS.md) |

**Status tags used on every requirement**

| Tag | Meaning |
|---|---|
| `[C]` | Confirmed explicitly by the owner |
| `[D]` | Derived from the owner's written brief (rules and constraints stated there) |
| `[P]` | Proposed by the planner — **not adopted until the owner approves** |

Placeholders: `[USER INPUT REQUIRED]` marks information the owner has not supplied. Nothing marked this way may be guessed.

---

## 1. Product overview

A modern, professional, **multi-page**, **English-language** personal portfolio website positioned as **Software Engineer + Creative Technologist + Personal Brand**. It is built with React.js, Vite and JavaScript, uses free ReactBits components as its primary UI source, and is hosted on GitHub Pages under the free GitHub Pages domain. The initial release has no backend and no database.

The site must communicate technical competence and creative individuality, and must not look like a generic developer portfolio template.

## 2. Product vision

A single public website where university admissions reviewers, recruiters, clients and the tech community can understand the owner's technical ability, creative thinking, achievements and personal identity, presented in a way that feels individual rather than templated.

> The owner's personal narrative, philosophy and identity statements are **not yet provided** and must not be invented. Vision wording above restates only the brief and may be refined by the owner. `[USER INPUT REQUIRED]` for any personal narrative.

## 3. Problem statement

The brief calls for one site that serves several different audiences and purposes at once (admissions, employment, freelance, networking, showcasing work) while balancing technical expertise, problem-solving, creativity, personal development, achievements and individuality. A generic template would not communicate that balance.

## 4. Product goals

| ID | Goal | How it is judged |
|---|---|---|
| G-001 `[D]` | Support university admission and academic opportunities | Owner review of content fit for admissions audience (SM-005) |
| G-002 `[D]` | Support internship and employment opportunities | Owner review (SM-005) |
| G-003 `[D]` | Support freelance and professional opportunities | Owner review (SM-005) |
| G-004 `[D]` | Support personal branding and networking | Owner review (SM-005) |
| G-005 `[D]` | Showcase technical and creative work | Dependent on OQ-001 (Projects) and content supply (OQ-007) |
| G-006 `[D]` | Avoid a generic-template look | Owner approval of the visual identity (DESIGN_GUIDELINES.md) |

## 5. Target audiences and personas

Confirmed audiences: **university, recruiters, clients, tech community**.

The personas below are **audience archetypes derived only from those four labels**. They are not research findings and contain no invented facts about real people.

| ID | Archetype | Typical question the site must answer |
|---|---|---|
| PER-001 | University admissions reviewer | Who is this applicant, what have they achieved, and what is their academic and personal story? |
| PER-002 | Recruiter / hiring manager | What can this person do technically, what is their experience, and how do I contact them or get a résumé? |
| PER-003 | Prospective client | Can this person build what I need, and how do I reach them? |
| PER-004 | Tech community member | What does this person build and think about, and where can I follow their work? |

## 6. User needs

| ID | Need | Personas |
|---|---|---|
| UN-001 | Quickly understand who the owner is and what they do | PER-001 to PER-004 |
| UN-002 | Verify education, experience and achievements | PER-001, PER-002 |
| UN-003 | Assess technical and creative competence | PER-002, PER-003, PER-004 (evidence depends on OQ-001) |
| UN-004 | Contact the owner easily | PER-001 to PER-004 |
| UN-005 | Obtain the owner's résumé / CV | PER-001, PER-002 |
| UN-006 | Read the owner's writing | PER-004, PER-001 |
| UN-007 | Navigate comfortably on any device | PER-001 to PER-004 |

## 7. Functional requirements

| ID | Tag | Requirement | Needs / Goals |
|---|---|---|---|
| FR-001 | `[C]` | The website must provide a **Home** page that introduces the owner, reflects the approved positioning, and links to the other pages. | UN-001; G-001 to G-004 |
| FR-002 | `[C]` | The website must provide an **About** page presenting the owner's personal introduction and story using only owner-confirmed content. | UN-001; G-004 |
| FR-003 | `[C]` | The website must provide an **Experience / Education / Achievements** page covering education, experience and activities, achievements and awards, and certifications where applicable. | UN-002; G-001, G-002 |
| FR-004 | `[C]` | The website must provide a **Contact** page that shows the owner's email address visibly and offers a `mailto:` link. It must not use a form, backend or third-party form service. | UN-004 |
| FR-005 | `[C]` | The website must provide a **résumé / CV download**. File format, source and placement are open (OQ-005). | UN-005 |
| FR-006 | `[C]` | The website must provide a **Blog / Writing** index page listing the owner's posts. | UN-006 |
| FR-007 | `[P]` | The website should provide an individual view for each blog post, or link out to the post's location, depending on ADR-002 (OQ-003). | UN-006 |
| FR-008 | `[D]` | Every MVP page must be reachable through site-wide navigation. Navigation *behavior* (for example sticky, collapsing, animated) is a UI/UX decision that requires owner approval. | UN-007 |
| FR-009 | `[D]` | Every MVP page must open correctly from a direct URL and after a browser refresh on GitHub Pages. Implementation depends on ADR-001 (OQ-002). | UN-007 |
| FR-010 | `[D]` | The website must link to professional and social profiles, limited to accounts the owner confirms. All links are `[USER INPUT REQUIRED]`. | UN-004; G-004 |
| FR-011 | `[C]` | The website must support a combination of personal photos, project screenshots and supporting visuals. Use of project screenshots depends on OQ-001. | UN-001, UN-003 |
| FR-012 | `[D]` | Every page must have its own title and description metadata. How this is achieved depends on ADR-001. | NFR-004 |
| FR-013 | `[P]` | The website should show a helpful not-found page for unknown addresses. Behavior depends on ADR-001. | UN-007 |
| FR-014 | `[D]` | The published build must contain **no unresolved placeholders** (`[USER INPUT REQUIRED]`) and no fictional content presented as real. This is a release gate. | NFR-007 |

## 8. Non-functional requirements

| ID | Tag | Requirement |
|---|---|---|
| NFR-001 | `[D]` | The website must be responsive across common screen sizes (phones, tablets, laptops, large desktops). Specific breakpoints are pending the approved design. |
| NFR-002 | `[D]` | The website must be accessible: semantic structure, keyboard operability, visible focus, text alternatives for meaningful images, and adequate contrast. The formal conformance target is open (OQ-009). Proposed target: WCAG 2.2 level AA `[P]`. |
| NFR-003 | `[D]` | The website must load quickly on free static hosting. Numeric targets are open (OQ-008). Measurement method: Lighthouse and Web Vitals checks during testing (SM-003). |
| NFR-004 | `[D]` | The website must follow an SEO baseline suited to a client-rendered React site (titles, descriptions, semantic HTML, social preview tags). The achievable depth depends on ADR-001. |
| NFR-005 | `[C]` | Hosting must be free GitHub Pages on the free GitHub Pages domain. No paid infrastructure, no backend and no database for the MVP. |
| NFR-006 | `[C]` | Only **free** ReactBits components and resources may be used. No paid components or dependencies may be introduced. |
| NFR-007 | `[C]` | No information may be fabricated or assumed. Unavailable information must be marked `[USER INPUT REQUIRED]`. |
| NFR-008 | `[C]` | All published content must be in English. |
| NFR-009 | `[D]` | The website must expose no secrets in its client bundle and publish only personal data the owner has approved. Anything prefixed for client exposure in the build tool is public. |
| NFR-010 | `[P]` | The website should support a defined set of current browsers and devices. The list is open (OQ-010). |
| NFR-011 | `[P]` | Content should be kept separate from presentation so that edits do not require changing component logic. Mechanism pending ADR-002 and ARCHITECTURE.md section 9. |
| NFR-012 | `[P]` | Animated components should respect the user's reduced-motion preference and degrade gracefully. Animation preferences themselves are pending (OQ-004). |
| NFR-013 | `[D]` | The site must stay within GitHub Pages usage limits (see ARCHITECTURE.md section 20) by controlling asset sizes. |
| NFR-014 | `[D]` | Every added dependency must be documented with its purpose, cost, limitations and alternatives before adoption. |

## 9. Website pages and sections

| ID | Page | Tag | Status | Sections |
|---|---|---|---|---|
| PG-001 | Home | `[C]` | In MVP | Section list pending visual identity and content (OQ-004, OQ-007) |
| PG-002 | About | `[C]` | In MVP | Pending content (OQ-007) |
| PG-003 | Experience / Education / Achievements | `[C]` | In MVP | Education, experience and activities, achievements and awards, certifications (if applicable). Single page versus separate pages is open for design |
| PG-004 | Contact | `[C]` | In MVP | Visible email, `mailto:` link, profile links (OQ-015) |
| PG-005 | Blog / Writing | `[C]` | In MVP | Post list; post view pending ADR-002 |
| PG-006 | Not found | `[P]` | Proposed | Pending ADR-001 |
| — | **Projects** | open | **Open question OQ-001 — not in MVP page list** | Not planned until the owner decides |

The résumé / CV download (FR-005) is a feature, not a page. Its placement is open (OQ-005).

## 10. User journeys

Journeys describe intended flows only. They contain no claims about the owner.

| ID | Persona | Journey |
|---|---|---|
| UJ-001 | PER-001 | Land on Home, read About, review Experience / Education / Achievements, download résumé or contact the owner |
| UJ-002 | PER-002 | Land on Home, review Experience page, download résumé, use email to make contact |
| UJ-003 | PER-003 | Land on Home, assess competence (evidence depends on OQ-001), use Contact page |
| UJ-004 | PER-004 | Land on Home or Blog, read writing, follow profile links |

## 11. Content requirements

All personal content is currently **missing**. The full inventory is in [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) section 2. Summary:

| ID | Content item | Used by | Status |
|---|---|---|---|
| CR-001 | Personal introduction | FR-001 | Missing |
| CR-002 | About me | FR-002 | Missing |
| CR-003 | Education | FR-003 | Missing |
| CR-004 | Technical skills | FR-001 to FR-003 | Missing |
| CR-005 | Creative skills | FR-001 to FR-003 | Missing |
| CR-006 | Projects | Depends on OQ-001 | Missing / undecided |
| CR-007 | Achievements and awards | FR-003 | Missing |
| CR-008 | Experience and activities | FR-003 | Missing |
| CR-009 | Certifications (if applicable) | FR-003 | Missing / may not apply |
| CR-010 | Contact email address | FR-004 | Missing |
| CR-011 | Professional and social links | FR-010 | Missing |
| CR-012 | Personal interests | FR-002 | Missing |
| CR-013 | Résumé / CV file | FR-005 | Missing |
| CR-014 | Blog posts | FR-006, FR-007 | Missing |
| CR-015 | Photos and visuals | FR-011 | Missing |
| CR-016 | Site name, tagline, favicon, social preview image | FR-001, FR-012 | Missing (OQ-014) |

## 12. MVP scope

The MVP is the first public release.

| In MVP | Requirements |
|---|---|
| Home page | FR-001 |
| About page | FR-002 |
| Experience / Education / Achievements page | FR-003 |
| Contact page (`mailto:`) | FR-004 |
| Résumé / CV download | FR-005 |
| Blog / Writing index | FR-006 |
| Site navigation and direct-URL access | FR-008, FR-009 |
| Profile links | FR-010 |
| Imagery support | FR-011 |
| Page metadata | FR-012 |
| Release gate against placeholders | FR-014 |
| Baseline non-functional requirements | NFR-001 to NFR-009, NFR-013, NFR-014 |

Conditional on owner approval: FR-007, FR-013, NFR-010 to NFR-012.

## 13. Post-MVP scope

| ID | Item | Condition |
|---|---|---|
| PM-001 | Dedicated Projects page(s) with detail views | Becomes MVP or Post-MVP once OQ-001 is answered |
| PM-002 | Additional content refinements and new blog posts | Ongoing |
| PM-003 | Further ReactBits components beyond the approved set | Each needs approval and vetting |

## 13a. Optional features (need additional consideration)

| ID | Item | Why it is not in scope now |
|---|---|---|
| OPT-001 | Contact form through a third-party service | Owner chose `mailto:` only; a form would add an external service that needs approval |
| OPT-002 | Analytics | External service; unapproved (OQ-008) |
| OPT-003 | Light / dark theme switching | Part of the pending visual identity (OQ-004) |
| OPT-004 | RSS or similar feed for the blog | Depends on ADR-002 |
| OPT-005 | Static prerendering for stronger SEO | One of three open routing options (ADR-001) |

## 14. Out-of-scope features

| ID | Item |
|---|---|
| OOS-001 | Backend services and databases (MVP) |
| OOS-002 | User accounts, authentication, comments |
| OOS-003 | E-commerce and payments |
| OOS-004 | Multi-language content (English only) |
| OOS-005 | Paid ReactBits components or any paid dependency |
| OOS-006 | Custom domain (free GitHub Pages domain confirmed) |
| OOS-007 | Content management systems with hosted backends |

## 15. Acceptance criteria

| ID | Requirement | Criteria (verified on the deployed or preview build) |
|---|---|---|
| AC-001 | FR-001 | Home loads at its address, shows owner-approved content only, and links to every MVP page |
| AC-002 | FR-002 | About loads and contains only owner-verified content |
| AC-003 | FR-003 | Page presents education, experience and achievements from owner-verified content, each item matching the verification log |
| AC-004 | FR-004 | The email address is visible; selecting the link opens the default mail client addressed to the owner; no form or third-party service is present |
| AC-005 | FR-005 | The owner-supplied file downloads or opens correctly from the published site |
| AC-006 | FR-006 | Blog index lists the posts the owner supplied, with working links |
| AC-007 | FR-007 | Each post opens correctly (or links out correctly) and survives refresh |
| AC-008 | FR-008 | Every MVP page is reachable from navigation on all supported screen sizes |
| AC-009 | FR-009 | Each MVP page URL works when typed directly and after refresh on the GitHub Pages address |
| AC-010 | FR-010 | Every profile link goes to an account the owner confirmed |
| AC-011 | FR-011 | Images display with appropriate alt text; decorative images are marked decorative |
| AC-012 | FR-012 | Each page shows a distinct title and description in its metadata |
| AC-013 | FR-013 | An unknown address displays the not-found page (behavior per ADR-001) |
| AC-014 | FR-014 | A search of the production build and source finds zero placeholder tokens and the owner signs off the content |
| AC-015 | NFR-001 | Pages render without horizontal scrolling or clipped content across the approved set of screen sizes |
| AC-016 | NFR-002 | Keyboard-only navigation reaches every interactive element; checks against the chosen target (OQ-009) pass |
| AC-017 | NFR-003 | Performance results are recorded and compared with targets once set (OQ-008) |
| AC-018 | NFR-006 | Each ReactBits component used has a completed vetting record confirming it is free |

## 16. Success metrics

Metrics are measurable without extra services. No numeric targets are invented; they are set by the owner (OQ-008).

| ID | Metric | How it is measured |
|---|---|---|
| SM-001 | All MVP pages are published and reachable | Manual checklist on the deployed address (DEPLOYMENT.md section 8) |
| SM-002 | Zero unresolved placeholders at launch | Text search of source and production build for the placeholder token |
| SM-003 | Lighthouse performance, accessibility, best-practices and SEO scores recorded as a baseline | Lighthouse run on key pages; targets set by owner |
| SM-004 | Zero broken internal links at launch | Link check on the production build |
| SM-005 | Owner confirms each page accurately and fully represents them | Written owner sign-off per page |

## 17. Constraints and assumptions

**Constraints**

| ID | Constraint |
|---|---|
| CON-001 | Stack: React.js, Vite, JavaScript (confirmed) |
| CON-002 | Hosting: GitHub Pages, free domain, no paid infrastructure |
| CON-003 | UI source: free ReactBits only |
| CON-004 | No backend or database for the MVP |
| CON-005 | Content in English |
| CON-006 | The owner approves every creative, architectural and external-service decision |
| CON-007 | GitHub Pages serves static files only; GitHub's current documentation states it does not support server-side languages |
| CON-008 | GitHub Pages is available for public repositories on GitHub Free; private-repository publishing requires a paid plan. Owner's plan is unknown (OQ-006) |

**Assumptions** (each is unverified and must be confirmed)

| ID | Assumption | Confirm via |
|---|---|---|
| ASM-001 | The owner can supply all content, a résumé file and photos | OQ-005, OQ-007, OQ-013 |
| ASM-002 | The owner has or will create a GitHub account suitable for Pages | OQ-006 |
| ASM-003 | The owner will supply ReactBits references before Phase 3 | OQ-004 |

## 18. Risks and dependencies

| ID | Risk | Mitigation |
|---|---|---|
| RSK-001 | Single-page-app routing breaks on refresh or direct links on GitHub Pages | Decide ADR-001 early; test refresh on a preview path before launch |
| RSK-002 | Client-rendered React limits SEO and link previews | Document limits; evaluate prerendering option |
| RSK-003 | Heavy ReactBits animation dependencies hurt performance and accessibility | Per-component vetting; reduced-motion handling |
| RSK-004 | A paid ReactBits Pro component is used by mistake | Exclusion rule and vetting record (ARCHITECTURE.md section 12) |
| RSK-005 | Visual identity arrives late and blocks design work | Keep Phase 3 explicitly blocked; do not guess |
| RSK-006 | Content is not supplied, so the site cannot launch | Content intake in Phase 0; release gate FR-014 |
| RSK-007 | A visible email address attracts spam and depends on the visitor's mail client | Owner accepted `mailto:`; decide obfuscation (OQ-015) |
| RSK-008 | Media-heavy assets approach GitHub Pages limits | Asset budget and optimization (NFR-013) |
| RSK-009 | GitHub Pages terms restrict use as free hosting for commercial transaction sites | Keep the site a portfolio; no e-commerce or payments (OOS-003) |
| RSK-010 | A public repository exposes all source and content | Keep secrets out; none needed for MVP |
| RSK-011 | Scope creep around the undecided Projects page | OQ-001 is an explicit open item; no project tasks scheduled |

| ID | Dependency | Needed for |
|---|---|---|
| DEP-001 | Visual identity and ReactBits references from owner | Phase 3 |
| DEP-002 | Personal content from owner | Phases 4–5 |
| DEP-003 | GitHub account and repository details | Phases 1 and 8 |
| DEP-004 | Résumé / CV file | FR-005 |
| DEP-005 | Photos and visuals with usage rights | FR-011 |

## 19. Open questions

| ID | Question | Affects |
|---|---|---|
| OQ-001 | Should Projects be in the MVP, Post-MVP, or shown on Home only? | FR-011, G-005, UN-003, CR-006 |
| OQ-002 | Which routing strategy: HashRouter, BrowserRouter with 404 fallback, or static prerendering? (ADR-001) | FR-009, FR-012, FR-013, NFR-004 |
| OQ-003 | How are blog posts authored: Markdown files, JS/JSON data, or an external platform? How many posts at launch? (ADR-002) | FR-006, FR-007, NFR-011 |
| OQ-004 | What is the visual identity: colors, typography, theme, layout style, animation, interactions? Awaiting ReactBits references | DESIGN_GUIDELINES.md, Phase 3 |
| OQ-005 | Résumé / CV: file format, who supplies the source, where it is placed, how it is updated? | FR-005 |
| OQ-006 | GitHub username, repository name and account plan (affects the build base path, site address and public-repository requirement) | DEPLOYMENT.md |
| OQ-007 | All personal content (see CONTENT_GUIDELINES.md) | Phases 4–5 |
| OQ-008 | Numeric performance targets, and whether any analytics is wanted | NFR-003, SM-003, OPT-002 |
| OQ-009 | Accessibility conformance target | NFR-002 |
| OQ-010 | Supported browsers and devices | NFR-010 |
| OQ-011 | Styling approach and ReactBits variant (JS+CSS or JS+Tailwind) (ADR-008) | ARCHITECTURE.md section 11 |
| OQ-012 | Tooling and workflow conventions: package manager, linting, testing, Git workflow (ADR-009) | AGENTS.md, Phase 1 |
| OQ-013 | Which photos and visuals exist, and are rights and consent in place? | FR-011 |
| OQ-014 | Site name, tagline, favicon, social preview image | FR-001, FR-012 |
| OQ-015 | Which email address is shown, and should it be obfuscated against scraping? | FR-004 |
| OQ-016 | Approve GitHub Actions as the deployment method (ADR-005)? | DEPLOYMENT.md |

## 20. Traceability

Every MVP requirement in sections 7–8 has matching tasks in [TODO.md](TODO.md); each task lists its PRD and architecture references.
