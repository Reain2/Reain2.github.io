# TODO — Implementation Roadmap

| Field | Value |
|---|---|
| Document status | Draft v0.3 — scaffold built with placeholders; pages not started |
| Last updated | 2026-11-06 |
| Related | [PRD.md](PRD.md), [BUILD.md](BUILD.md), [DESIGN.md](DESIGN.md) |

Rules:

- A checkbox is ticked only when the work is done **and** verified.
- `BLOCKED` means the named decision is unresolved. Do not work around it.
- Implementation is authorized (owner said "build"). Content is not.

---

## Phase 0 — Decisions and intake

- [x] **T0-01 — GitHub details** (OQ-005)
  - `Reain2`, repository `Reain2.github.io`, public, free plan. User-site form, so base is `/`.
  - Done when: values recorded in BUILD.md §5 and §13. Met.

- [~] **T0-02 — Personal content intake** (OQ-006)
  - Supplied and logged: CR-001, CR-002, CR-003, CR-005, CR-010, CR-012. Partial: CR-004, CR-016.
  - Still missing: CR-006 projects, CR-007 achievements, CR-008 work/activities, CR-009 certifications, CR-011 social links, CR-013 résumé, CR-014 blog posts, CR-015 photos.
  - Done when: DESIGN.md verification log covers CR-001 to CR-016.

- [x] **T0-03 — Typography** (OQ-003)
  - Space Grotesk variable, latin subset, self-hosted. Chosen under the owner's "minimalist but attention-holding"; owner may override.
  - Done when: DESIGN.md §3 has values and no `PENDING`. Met.

- [ ] **T0-04 — Images and rights** (OQ-010)
  - Which photos exist, who owns them, alt text per image.
  - Done when: DESIGN.md §10 logs the image set.

- [ ] **T0-05 — Blog authoring** (OQ-002, ADR-008)
  - Markdown, JS modules, or external platform. Post count at launch.
  - Done when: ADR-008 accepted; FR-007 confirmed or dropped.

- [ ] **T0-06 — Projects scope** (OQ-001)
  - MVP page, post-MVP, or Home section only.
  - Done when: FR-015 confirmed or dropped; page entries in BUILD.md §4 updated.

- [~] **T0-07 — Approve deployment and tooling** (ADR-004, ADR-010)
  - GitHub Actions approved and live. npm and pinned Node 22 accepted. ESLint + Prettier still not installed.
  - Done when: both ADRs marked Accepted. ADR-004 done; ADR-010 partially.

- [x] **T0-08 — Local environment**
  - Local: Node 26.5.0, npm 11.17.0, git 2.56.0. Pinned: `.nvmrc` = `22`, `engines.node` = `>=22`.
  - Done when: `.nvmrc` and `engines` values agreed. Met.

## Phase 1 — Scaffold

- [x] **T1-01 — Initialize the project**
  - Vite 8.3.6 + React 19.3.1 + JavaScript. Six HTML entries per BUILD.md §4. `.gitignore` written.
  - Done when: `npm run dev` serves every entry; `npm run build` emits six HTML files. Verified: 6 of 6 return 200 in dev, 6 HTML files in `dist/`.
  - Open: no `LICENSE` file at the repository root yet. The vendored font's OFL is at `src/assets/fonts/OFL.txt`.

- [ ] **T1-02 — Repository layout**
  - Implement BUILD.md §3. Planning documents stay in `AGENT/`; the move to `docs/` was dropped as churn.
  - Done when: tree matches the document. Mostly met; `LICENSE` and `.github/workflows/deploy.yml` are still missing.

- [x] **T1-03 — Base path**
  - `base` from `VITE_BASE`, default `/`. CSS imports the font relatively so Vite rewrites it per base.
  - Done when: production build preview resolves every asset under the planned path. Verified with `VITE_BASE=/portfolio/`: HTML, CSS, font URL and JS all prefixed.

- [x] **T1-04 — Layout shell**
  - Header, nav with all five pages, footer, skip link, `main` landmark, `aria-current`.
  - Done when: every page is reachable from every other page. Met: the nav is identical on all six entries.

- [x] **T1-05 — CI: build plus size report**
  - `scripts/size-report.mjs` enforces BUILD.md §9. `.github/workflows/ci.yml` runs `npm ci`, `npm run build`, `npm run check:sizes`.
  - Done when: the workflow fails on an over-budget bundle. Size report exits non-zero on breach; the workflow has not run yet (no repository).

- [ ] **T1-06 — Lint and format**
  - ESLint + Prettier, wired into `ci.yml` after the build step.
  - Done when: the workflow fails on a lint error.

## Phase 2 — Foundation

- [x] **T2-01 — Content layer**
  - `src/content/index.js` holds every page's data plus `PLACEHOLDER`. Every page reads from it; `<Text>` renders the token with a visible dashed underline.
  - Done when: no personal fact is typed into JSX. Met: the only literal strings in JSX are UI labels (page names, section names).

- [x] **T2-02 — Design tokens**
  - `tokens.css` holds the five colour tokens plus type, space and layout scales. Peach rules use `color-mix` of `--accent`.
  - Done when: a grep for hex values outside `tokens.css` returns nothing. Met, apart from `<meta name="theme-color">` in the entry files, which cannot read a CSS variable.

- [x] **T2-03 — Accessibility baseline**
  - Skip link, 2px focus ring with the `on-support` override, one `h1` per page, landmarks, reduced-motion reset, `aria-current`.
  - Verified by `npm run audit`: axe 4.14 reports zero violations on all six pages at 390 and 1440 px; every tab stop has a visible ring; every interactive element is ≥ 24×24 CSS px; tab order starts at the skip link.
  - Fixed during the audit: the wordmark link carried `aria-label="Home"`, which broke `label-content-name-mismatch` (WCAG 2.5.3). The label is gone; the visible wordmark is the name.
  - Not done: no manual screen-reader pass (VoiceOver/NVDA).

- [x] **T2-04 — Metadata and structured data**
  - Per-entry title, description, canonical, Open Graph, Twitter card, JSON-LD `Person` on Home, shared 1200×630 `og.png`. `robots.txt` points at `sitemap.xml`; sitemap lists the five indexable pages and excludes 404.
  - Done when: AC-012 passes on the production build. Verified on `https://reain2.github.io`.

- [~] **T2-05 — Not-found page**
  - `404.html` exists with the site shell and a link home.
  - Verified on a plain static server (`npm run audit` serves `dist/` directly): an unknown path returns status 404 and the not-found markup. `vite preview` falls back to `index.html`, so it must not be used to check this.
  - Verified on GitHub Pages: `https://reain2.github.io/nope` returns status 404 with the not-found markup.

## Phase 3 — Design

- [ ] **T3-01 — Art direction sheet**
  - Run the design-direction workflow against the approved palette: inventory of the owner's world, argument per section, one direction, one idea sentence, copy deck.
  - Done when: a direction sheet and copy deck exist and the owner approves them.

- [ ] **T3-02 — Wireframes per page**
  - Composition for Home, About, Experience, Contact, Blog, Footer, 404. Section order, not pixels.
  - Done when: DESIGN.md §4 and §5 have values and the owner approves.

- [~] **T3-03 — Type system**
  - Built: Space Grotesk variable latin subset (22.3 KB), fluid five-step scale, `font-display: swap`, `font-synthesis-weight: none`.
  - Not done: no Lighthouse or CWV run, so LCP and CLS are unmeasured. Fallback `size-adjust` deferred until a CLS number exists.

- [ ] **T3-04 — Vet ReactBits components**
  - At most three. Six-field record each (DESIGN.md §8).
  - Done when: every record is complete and owner-approved.

- [ ] **T3-05 — Motion**
  - Entrance and feedback only, transform and opacity, reduced-motion path.
  - Done when: the page is complete and readable with animation disabled.

## Phase 4 — Pages

- [ ] **T4-01 — Home** (FR-001, AC-001)
- [ ] **T4-02 — About** (FR-002, AC-002)
- [ ] **T4-03 — Experience / Education / Achievements** (FR-003, AC-003)
- [ ] **T4-04 — Contact** (FR-004, AC-004)
- [ ] **T4-05 — Résumé download** (FR-005, AC-005)
- [ ] **T4-06 — Blog index and posts** (FR-006, FR-007, AC-006, AC-007)
- [ ] **T4-07 — Footer and profile links** (FR-010, AC-010)
- [ ] **T4-08 — Images** (FR-011, AC-011)
- [ ] **T4-09 — Projects** (FR-015) — only if OQ-001 approves

Each page task is done when: content comes from the content layer, the page matches its approved wireframe, and its AC passes on the production build.

## Phase 5 — Verify

- [ ] **T5-01 — Owner content sign-off**
  - Every page reviewed and approved in writing.
  - Done when: AC-014's content half is satisfied.

- [x] **T5-02 — Responsive and accessibility**
  - 320/390/768/1024/1440 plus keyboard and axe via `npm run audit`.
  - Result: no horizontal overflow on any of the 30 page×width combinations; axe zero violations; focus ring present on every tab stop; all targets ≥ 24×24.
  - 400% zoom is covered by the 320 px run (same effective CSS width). Contrast is computed from the tokens, not sampled in-browser.
  - Not done: manual screen-reader pass.

- [ ] **T5-03 — Performance**
  - Lighthouse and CWV on the production build, mid-range mobile profile, per budget in BUILD.md §9.
  - Done when: AC-016 passes or the owner accepts the shortfall in writing.

- [ ] **T5-04 — Links and SEO**
  - Internal and external links, titles, descriptions, canonical, JSON-LD, sitemap.
  - Done when: zero broken internal links and AC-012 re-verified.

## Phase 6 — Deploy

- [x] **T6-01 — Pages settings and workflow**
  - Source: GitHub Actions (`build_type=workflow`). `deploy.yml` builds, checks sizes, uploads `dist/` and deploys.
  - Done when: a run from the default branch deploys successfully. Met: run 42354153483 deployed `main`.

- [~] **T6-02 — First deploy and checklist**
  - Checked on the live address: all five pages 200, unknown path 404, font and CSS load, favicon/og/sitemap/robots 200, canonical and JSON-LD present, prerendered markup in the HTML, live audit clean (30 width runs, 12 axe runs).
  - Not checked: `mailto:` opens a client (needs a human), CWV/Lighthouse numbers, placeholder gate (still expected to fail).

- [ ] **T6-03 — Release tag and rollback note**
  - Tag the release; confirm a revert redeploys the previous state.
  - Done when: one revert has been exercised or the procedure is written and accepted.

## Later

- Projects page, if deferred (T5 or later).
- Additional blog posts.
- Analytics only if OQ-011 is answered yes.

## Coverage

| Requirement | Tasks |
|---|---|
| FR-001–FR-003 | T4-01 to T4-03 |
| FR-004 | T4-04 |
| FR-005 | T4-05 |
| FR-006, FR-007 | T4-06 |
| FR-008 | T1-04, T4-01 |
| FR-009 | T1-01, T1-03 |
| FR-010 | T1-04, T4-07 |
| FR-011 | T4-08 |
| FR-012 | T2-04, T5-04 |
| FR-013 | T2-05 |
| FR-014 | T5-01 (gate script `scripts/check-placeholders.mjs` exists; not wired to CI) |
| FR-015 | T4-09 |
| NFR-001, NFR-002 | T2-03, T3-05, T5-02 |
| NFR-003 | T3-03, T5-03 |
| NFR-004 | T2-04, T5-04 |
| NFR-005, NFR-006 | T0-07, T6-01 |
| NFR-007, NFR-008 | T0-02, T5-01 |
| NFR-009 | T1-05 |
| NFR-010 | T5-02 |
| NFR-011 | T2-01 |
| NFR-012 | T3-05 |
| NFR-013 | T1-05, T5-03 |
| NFR-014 | T3-04, T1-05 |
