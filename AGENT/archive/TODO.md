# TODO — Implementation Roadmap

| Field | Value |
|---|---|
| Document status | Draft v0.1 — **planning only; no task is complete** |
| Last updated | 2026-11-06 |
| Related | [PRD.md](PRD.md), [ARCHITECTURE.md](ARCHITECTURE.md), [DEPLOYMENT.md](DEPLOYMENT.md) |

**Rules**

- Checkboxes stay unchecked until the work is actually done **and verified**.
- Implementation does not start until the owner explicitly authorizes it and provides the needed UI/UX references.
- Tasks marked **BLOCKED** cannot start until the named open question or decision is resolved.
- No tasks exist for the Projects page; it is undecided (OQ-001, task T0-06).
- Priority: **High** (on the critical path), **Medium**, **Low**.

---

## Phase 0 — Environment and project preparation

- [ ] **T0-01 — Confirm GitHub details**
  - Description: Obtain the GitHub username, repository name and account plan (OQ-006). Note that GitHub Free requires a public repository for Pages.
  - Priority: High
  - Depends on: —
  - Acceptance: Values recorded in DEPLOYMENT.md; owner understands the public-repository requirement.
  - PRD: NFR-005, CON-008, DEP-003
  - Architecture: §18, §20 (TC-006)

- [ ] **T0-02 — Decide routing strategy (ADR-001)**
  - Description: Owner chooses among HashRouter, BrowserRouter with 404 fallback, or static prerendering (OQ-002).
  - Priority: High
  - Depends on: T0-01
  - Acceptance: Choice recorded; ADR-001 status becomes Accepted; PRD, ARCHITECTURE and DEPLOYMENT updated consistently.
  - PRD: FR-009, FR-012, FR-013, NFR-004
  - Architecture: §6, ADR-001

- [ ] **T0-03 — Decide blog authoring approach (ADR-002)**
  - Description: Owner chooses Markdown, JS/JSON data, or external platform, and states how many posts exist at launch (OQ-003).
  - Priority: Medium
  - Depends on: —
  - Acceptance: ADR-002 Accepted; FR-007 confirmed or removed.
  - PRD: FR-006, FR-007, NFR-011
  - Architecture: §9, ADR-002

- [ ] **T0-04 — Decide styling approach and ReactBits install method (ADR-008, ADR-007)**
  - Description: Choose plain CSS versus Tailwind and CLI versus copy-paste installation (OQ-011).
  - Priority: Medium
  - Depends on: T0-08 (references inform the choice)
  - Acceptance: Both decisions recorded with dependency notes.
  - PRD: NFR-006, NFR-014
  - Architecture: §11, §12, ADR-007, ADR-008

- [ ] **T0-05 — Decide tooling and workflow conventions (ADR-009)**
  - Description: Package manager, linting and formatting, test tools, Git workflow and commit conventions (OQ-012).
  - Priority: Medium
  - Depends on: —
  - Acceptance: ADR-009 Accepted; AGENTS.md updated with the chosen conventions.
  - PRD: NFR-014
  - Architecture: §20, ADR-009

- [ ] **T0-06 — Decide the Projects page (OQ-001)**
  - Description: Owner decides MVP, Post-MVP, or Home-only for projects.
  - Priority: High
  - Depends on: —
  - Acceptance: Decision recorded; if a Projects page is added, new FR IDs, tasks and architecture entries are created in all documents.
  - PRD: FR-011, G-005, UN-003, CR-006
  - Architecture: §8

- [ ] **T0-07 — Approve GitHub Actions deployment (ADR-005)**
  - Description: Owner approves or rejects the proposed Actions-based deployment (OQ-016).
  - Priority: Medium
  - Depends on: —
  - Acceptance: ADR-005 Accepted or replaced.
  - PRD: NFR-005
  - Architecture: §19, ADR-005

- [ ] **T0-08 — Receive visual identity and ReactBits references**
  - Description: Owner supplies visual direction, references, ReactBits components or prompts, typography and animation preferences (OQ-004). **Blocks all of Phase 3.**
  - Priority: High
  - Depends on: —
  - Acceptance: Only owner-approved decisions are written into DESIGN_GUIDELINES.md; unresolved items remain marked pending.
  - PRD: G-006, NFR-006, DEP-001
  - Architecture: §12

- [ ] **T0-09 — Confirm quality targets**
  - Description: Accessibility target, supported browsers and devices, numeric performance targets, and whether any analytics is wanted (OQ-008, OQ-009, OQ-010).
  - Priority: Medium
  - Depends on: —
  - Acceptance: Targets recorded in PRD.md; ADR-010 resolved.
  - PRD: NFR-002, NFR-003, NFR-010, SM-003
  - Architecture: §14, §16, ADR-010

- [ ] **T0-10 — Begin content intake**
  - Description: Collect owner content and decisions: all inventory items, résumé source, photos and rights, site name and favicon, contact email and obfuscation choice (OQ-005, OQ-007, OQ-013, OQ-014, OQ-015).
  - Priority: High
  - Depends on: —
  - Acceptance: Inventory statuses in CONTENT_GUIDELINES.md updated with owner-provided items only.
  - PRD: CR-001 to CR-016, NFR-007, DEP-002, DEP-004, DEP-005
  - Architecture: §9, §10

- [ ] **T0-11 — Verify the local environment**
  - Description: Check that Git and a suitable Node.js version are available; record versions.
  - Priority: Medium
  - Depends on: —
  - Acceptance: Versions recorded in AGENTS.md.
  - PRD: CON-001
  - Architecture: §3

- [ ] **T0-12 — Re-check external facts**
  - Description: Re-verify ReactBits license and GitHub Pages limits at the time implementation starts.
  - Priority: Low
  - Depends on: —
  - Acceptance: Sources and dates recorded in ARCHITECTURE.md.
  - PRD: NFR-006, NFR-013
  - Architecture: §12, §20 (TC-010)

---

## Phase 1 — Project initialization

*Starts only after explicit owner authorization to implement.*

- [ ] **T1-01 — Create the GitHub repository**
  - Description: Create the repository using the confirmed name and visibility.
  - Priority: High
  - Depends on: T0-01
  - Acceptance: Repository exists and matches DEPLOYMENT.md.
  - PRD: NFR-005, CON-002
  - Architecture: §18

- [ ] **T1-02 — Initialize the Vite React (JavaScript) project**
  - Description: Scaffold the project using the approved package manager and stack.
  - Priority: High
  - Depends on: T1-01, T0-05
  - Acceptance: Project installs and runs locally with JavaScript, React and Vite only.
  - PRD: CON-001
  - Architecture: §3, ADR-003

- [ ] **T1-03 — Configure the Vite base path**
  - Description: Set the base path for the confirmed repository form.
  - Priority: High
  - Depends on: T0-01, T0-02
  - Acceptance: A production build references assets that resolve under the planned address.
  - PRD: FR-009
  - Architecture: §6, §10

- [ ] **T1-04 — Add linting and formatting**
  - Description: Add chosen tooling as documented dependencies.
  - Priority: Medium
  - Depends on: T0-05, T1-02
  - Acceptance: Lint and format commands run cleanly.
  - PRD: NFR-014
  - Architecture: ADR-009

- [ ] **T1-05 — Repository hygiene and workflow**
  - Description: Ignore rules, branch and commit conventions as agreed.
  - Priority: Medium
  - Depends on: T0-05, T1-01
  - Acceptance: Conventions in AGENTS.md match the repository.
  - PRD: NFR-009
  - Architecture: §17, ADR-009

- [ ] **T1-06 — Add the router dependency (if needed)**
  - Description: Add the approved router with a dependency record (purpose, cost, limitations, alternatives).
  - Priority: High
  - Depends on: T0-02, T1-02
  - Acceptance: Dependency record exists; router matches ADR-001.
  - PRD: NFR-014, FR-009
  - Architecture: §3, §6

---

## Phase 2 — Foundation and architecture implementation

- [ ] **T2-01 — Create the approved folder structure**
  - Description: Implement the layout approved from ARCHITECTURE.md §5.
  - Priority: Medium
  - Depends on: T1-02
  - Acceptance: Structure matches the approved version of §5.
  - PRD: NFR-011
  - Architecture: §5

- [ ] **T2-02 — Routing skeleton for MVP routes**
  - Description: Create routes for PG-001 to PG-005 following ADR-001.
  - Priority: High
  - Depends on: T1-06, T2-01
  - Acceptance: Each route loads from a direct address and after refresh in a production-like preview.
  - PRD: FR-008, FR-009, AC-009
  - Architecture: §6, §8, ADR-001

- [ ] **T2-03 — Structural layout shell**
  - Description: Unstyled structural shell with navigation containing all MVP pages. Navigation behavior and visuals wait for owner approval.
  - Priority: Medium
  - Depends on: T2-02, T0-08
  - Acceptance: Navigation reaches every MVP page; no unapproved behavior or styling.
  - PRD: FR-008, AC-008
  - Architecture: §7

- [ ] **T2-04 — Content layer**
  - Description: Implement the content source approach from §9 and ADR-002, populated only with placeholders.
  - Priority: High
  - Depends on: T0-03, T2-01
  - Acceptance: Pages read content from the content layer; all unverified items show the placeholder token.
  - PRD: NFR-011, NFR-007
  - Architecture: §9

- [ ] **T2-05 — Not-found handling**
  - Description: Implement behavior for unknown addresses per ADR-001.
  - Priority: Medium
  - Depends on: T2-02
  - Acceptance: Unknown addresses display the approved not-found page.
  - PRD: FR-013, AC-013
  - Architecture: §6, §8

- [ ] **T2-06 — Per-page metadata mechanism**
  - Description: Titles, descriptions and social tags per page, within ADR-001 limits.
  - Priority: Medium
  - Depends on: T2-02, T0-02
  - Acceptance: Each page shows distinct metadata in the built output.
  - PRD: FR-012, NFR-004, AC-012
  - Architecture: §15

- [ ] **T2-07 — Placeholder detection check**
  - Description: A check that fails the build when `[USER INPUT REQUIRED]` remains in content intended for release.
  - Priority: High
  - Depends on: T2-04
  - Acceptance: The check fails on a build containing the token and passes on one without it.
  - PRD: FR-014, AC-014, SM-002
  - Architecture: §9

- [ ] **T2-08 — Base-path-safe asset handling**
  - Description: Ensure all assets resolve under the configured base path.
  - Priority: Medium
  - Depends on: T1-03
  - Acceptance: Images and downloads load in a production-like preview.
  - PRD: NFR-013, FR-011
  - Architecture: §10

---

## Phase 3 — Design system and ReactBits integration

**BLOCKED by T0-08 (visual identity and ReactBits references).** Nothing in this phase may be guessed.

- [ ] **T3-01 — Record the approved visual identity**
  - Description: Write owner-approved decisions into DESIGN_GUIDELINES.md.
  - Priority: High
  - Depends on: T0-08
  - Acceptance: Every section has either an approved decision or a pending marker; no invented values.
  - PRD: G-006
  - Architecture: §11

- [ ] **T3-02 — Implement design tokens**
  - Description: Create tokens that match the approved guidelines and the chosen styling approach.
  - Priority: High
  - Depends on: T3-01, T0-04
  - Acceptance: Tokens match DESIGN_GUIDELINES.md exactly.
  - PRD: G-006, NFR-001
  - Architecture: §11, ADR-008

- [ ] **T3-03 — Vet ReactBits components**
  - Description: Complete the vetting record for each requested component.
  - Priority: High
  - Depends on: T3-01
  - Acceptance: Each record passes the checklist in ARCHITECTURE.md §12 and is owner-approved.
  - PRD: NFR-006, NFR-014, AC-018
  - Architecture: §12

- [ ] **T3-04 — Integrate approved ReactBits components**
  - Description: Add components one at a time, preserving behavior and recording dependencies.
  - Priority: High
  - Depends on: T3-03, T2-03
  - Acceptance: Each component works on supported sizes and matches its vetting record.
  - PRD: NFR-006, NFR-001
  - Architecture: §12, ADR-007

- [ ] **T3-05 — Reduced-motion and fallback behavior**
  - Description: Make animated components respect reduced-motion preferences.
  - Priority: Medium
  - Depends on: T3-04
  - Acceptance: With reduced motion enabled, no essential content depends on animation.
  - PRD: NFR-012, NFR-002
  - Architecture: §14

- [ ] **T3-06 — Font loading approach**
  - Description: Implement typography per approved guidelines. External font services require owner approval.
  - Priority: Medium
  - Depends on: T3-01
  - Acceptance: Fonts load as approved without unapproved external services.
  - PRD: G-006, NFR-003
  - Architecture: §4, §11

---

## Phase 4 — Core page development

- [ ] **T4-01 — Home page**
  - Description: Build PG-001 using the content layer and approved design.
  - Priority: High
  - Depends on: T3-04, T2-04
  - Acceptance: AC-001.
  - PRD: FR-001, AC-001
  - Architecture: §8

- [ ] **T4-02 — About page**
  - Description: Build PG-002.
  - Priority: High
  - Depends on: T3-04, T2-04
  - Acceptance: AC-002.
  - PRD: FR-002, AC-002
  - Architecture: §8

- [ ] **T4-03 — Experience / Education / Achievements page**
  - Description: Build PG-003 covering education, experience, achievements, certifications if applicable.
  - Priority: High
  - Depends on: T3-04, T2-04
  - Acceptance: AC-003.
  - PRD: FR-003, AC-003
  - Architecture: §8

- [ ] **T4-04 — Contact page**
  - Description: Build PG-004 with visible email and `mailto:` link, using the email obfuscation decision.
  - Priority: High
  - Depends on: T3-04, T0-10
  - Acceptance: AC-004; no form or third-party service present.
  - PRD: FR-004, AC-004
  - Architecture: §8, ADR-006

- [ ] **T4-05 — Résumé / CV download**
  - Description: Implement the download in the approved placement.
  - Priority: High
  - Depends on: T0-10, T2-08
  - Acceptance: AC-005.
  - PRD: FR-005, AC-005
  - Architecture: §10

- [ ] **T4-06 — Blog / Writing index**
  - Description: Build PG-005 per ADR-002.
  - Priority: Medium
  - Depends on: T0-03, T2-04, T3-04
  - Acceptance: AC-006.
  - PRD: FR-006, AC-006
  - Architecture: §9

- [ ] **T4-07 — Blog post view (conditional)**
  - Description: Implement post views if ADR-002 and the owner confirm FR-007.
  - Priority: Medium
  - Depends on: T4-06, T0-03
  - Acceptance: AC-007.
  - PRD: FR-007, AC-007
  - Architecture: §9, ADR-002

- [ ] **T4-08 — Final navigation behavior**
  - Description: Implement the owner-approved navigation behavior across supported sizes.
  - Priority: High
  - Depends on: T3-04, T2-03
  - Acceptance: AC-008.
  - PRD: FR-008, AC-008
  - Architecture: §7

- [ ] **T4-09 — Profile links**
  - Description: Add links only for accounts the owner confirms.
  - Priority: Medium
  - Depends on: T0-10
  - Acceptance: AC-010.
  - PRD: FR-010, AC-010
  - Architecture: §17

- [ ] **T4-10 — Imagery components**
  - Description: Components for personal photos, project screenshots (if OQ-001 allows) and supporting visuals, with alt text support.
  - Priority: Medium
  - Depends on: T3-04, T2-08
  - Acceptance: AC-011.
  - PRD: FR-011, AC-011
  - Architecture: §10

---

## Phase 5 — Content integration

- [ ] **T5-01 — Verify and log each content item**
  - Description: Record each owner-provided item in the verification log; confirm English language.
  - Priority: High
  - Depends on: T0-10
  - Acceptance: No unverified fact is published; log complete.
  - PRD: NFR-007, NFR-008, CR-001 to CR-016
  - Architecture: §9

- [ ] **T5-02 — Integrate verified content**
  - Description: Load verified content into pages through the content layer.
  - Priority: High
  - Depends on: T5-01, T4-01, T4-02, T4-03
  - Acceptance: Page content matches the verification log exactly.
  - PRD: FR-001 to FR-003, NFR-007
  - Architecture: §9

- [ ] **T5-03 — Add and test the résumé file**
  - Description: Add the owner-supplied file and test download.
  - Priority: High
  - Depends on: T0-10, T4-05
  - Acceptance: AC-005 verified on a production-like build.
  - PRD: FR-005
  - Architecture: §10

- [ ] **T5-04 — Add photos with alt text and rights confirmation**
  - Description: Add owner-supplied images with owner-approved alt text.
  - Priority: Medium
  - Depends on: T0-10, T4-10
  - Acceptance: AC-011; rights confirmed (OQ-013).
  - PRD: FR-011, NFR-002
  - Architecture: §10

- [ ] **T5-05 — Add blog posts**
  - Description: Add owner-supplied posts using the chosen approach.
  - Priority: Medium
  - Depends on: T4-06
  - Acceptance: AC-006 and, if applicable, AC-007.
  - PRD: FR-006, FR-007
  - Architecture: §9

- [ ] **T5-06 — Resolve all placeholders**
  - Description: Replace or remove every placeholder; run the check from T2-07.
  - Priority: High
  - Depends on: T5-02, T5-03, T5-04, T5-05, T2-07
  - Acceptance: AC-014; SM-002 is zero.
  - PRD: FR-014, SM-002
  - Architecture: §9

- [ ] **T5-07 — Owner content sign-off**
  - Description: Owner reviews and signs off each page.
  - Priority: High
  - Depends on: T5-06
  - Acceptance: Written sign-off for every MVP page (SM-005).
  - PRD: SM-005, G-001 to G-004
  - Architecture: —

---

## Phase 6 — Responsive design and accessibility

- [ ] **T6-01 — Responsive pass**
  - Description: Check all pages across the approved screen sizes.
  - Priority: High
  - Depends on: T4-01 to T4-08
  - Acceptance: AC-015.
  - PRD: NFR-001, AC-015
  - Architecture: §13

- [ ] **T6-02 — Keyboard and screen-reader checks**
  - Description: Test keyboard operation and structure, with automated and manual checks.
  - Priority: High
  - Depends on: T4-01 to T4-08, T0-09
  - Acceptance: AC-016 against the chosen target.
  - PRD: NFR-002, AC-016
  - Architecture: §14

- [ ] **T6-03 — Contrast and motion review**
  - Description: Check contrast and reduced-motion behavior against approved design.
  - Priority: Medium
  - Depends on: T3-05
  - Acceptance: Results recorded; defects fixed or approved by owner.
  - PRD: NFR-002, NFR-012
  - Architecture: §14

- [ ] **T6-04 — Browser and device checks**
  - Description: Test the browser list approved in OQ-010.
  - Priority: Medium
  - Depends on: T0-09, T6-01
  - Acceptance: Each listed browser passes the smoke checklist.
  - PRD: NFR-010
  - Architecture: §13

---

## Phase 7 — Testing and optimization

- [ ] **T7-01 — Test approach**
  - Description: Implement the checks chosen under ADR-009.
  - Priority: Medium
  - Depends on: T0-05
  - Acceptance: Documented and runnable test commands.
  - PRD: NFR-014
  - Architecture: §20, ADR-009

- [ ] **T7-02 — Link check**
  - Description: Check internal and external links.
  - Priority: High
  - Depends on: T5-06
  - Acceptance: SM-004 is zero broken internal links.
  - PRD: SM-004, FR-010
  - Architecture: §17

- [ ] **T7-03 — Lighthouse baseline**
  - Description: Run Lighthouse on key pages; record results.
  - Priority: High
  - Depends on: T5-06
  - Acceptance: SM-003 recorded; compared with targets if set.
  - PRD: NFR-003, SM-003, AC-017
  - Architecture: §16

- [ ] **T7-04 — Asset optimization and size check**
  - Description: Optimize images and confirm total size is within limits.
  - Priority: Medium
  - Depends on: T5-04
  - Acceptance: Published size well within the 1 GB limit.
  - PRD: NFR-013, NFR-003
  - Architecture: §10, §20 (TC-002)

- [ ] **T7-05 — SEO metadata verification**
  - Description: Verify titles, descriptions and social tags in the built output.
  - Priority: Medium
  - Depends on: T2-06
  - Acceptance: AC-012 verified.
  - PRD: FR-012, NFR-004
  - Architecture: §15

- [ ] **T7-06 — Dependency review**
  - Description: Review all dependencies, including those pulled in by ReactBits components, for necessity and known vulnerabilities.
  - Priority: Medium
  - Depends on: T3-04
  - Acceptance: Each dependency has a record; no unapproved packages.
  - PRD: NFR-014, NFR-009
  - Architecture: §12, §17

- [ ] **T7-07 — Production build and refresh test**
  - Description: Build for production and test refresh and direct links under the planned base path.
  - Priority: High
  - Depends on: T2-02, T1-03
  - Acceptance: AC-009 passes on a production-like preview.
  - PRD: FR-009, AC-009
  - Architecture: §6

- [ ] **T7-08 — Vetting records audit**
  - Description: Confirm every ReactBits component used has a complete, approved record.
  - Priority: High
  - Depends on: T3-04
  - Acceptance: AC-018.
  - PRD: NFR-006, AC-018
  - Architecture: §12

---

## Phase 8 — Deployment

- [ ] **T8-01 — Configure Pages source**
  - Description: Set the Pages publishing source as planned in DEPLOYMENT.md.
  - Priority: High
  - Depends on: T0-07, T1-01
  - Acceptance: Settings match DEPLOYMENT.md §2.
  - PRD: NFR-005
  - Architecture: §18

- [ ] **T8-02 — Create the deployment workflow**
  - Description: Implement the workflow designed in DEPLOYMENT.md.
  - Priority: High
  - Depends on: T8-01, T0-07
  - Acceptance: Workflow runs on the default branch with least-privilege permissions.
  - PRD: NFR-005, NFR-009
  - Architecture: §19, ADR-005

- [ ] **T8-03 — First deployment**
  - Description: Deploy the release candidate.
  - Priority: High
  - Depends on: T8-02, T7-02, T7-03, T7-07
  - Acceptance: Site reachable at the planned address.
  - PRD: SM-001
  - Architecture: §18

- [ ] **T8-04 — Post-deployment verification**
  - Description: Run the checklist in DEPLOYMENT.md §8.
  - Priority: High
  - Depends on: T8-03
  - Acceptance: SM-001 and AC-009 pass on the live address.
  - PRD: SM-001, AC-009
  - Architecture: §18

- [ ] **T8-05 — Rollback readiness**
  - Description: Document and rehearse the rollback procedure.
  - Priority: Medium
  - Depends on: T8-03
  - Acceptance: A previous good version can be restored following DEPLOYMENT.md §10.
  - PRD: NFR-005
  - Architecture: §19

- [ ] **T8-06 — Release gate review**
  - Description: Confirm all MVP acceptance criteria and owner sign-off.
  - Priority: High
  - Depends on: T8-04, T5-07
  - Acceptance: All AC IDs for MVP requirements pass; owner approves release.
  - PRD: AC-001 to AC-018, SM-001 to SM-005
  - Architecture: —

---

## Phase 9 — Post-launch improvements

- [ ] **T9-01 — Projects implementation (only if approved)**
  - Description: Plan and build Projects per the OQ-001 decision.
  - Priority: Medium
  - Depends on: T0-06, T8-06
  - Acceptance: New requirements and acceptance criteria exist in the PRD first.
  - PRD: PM-001, G-005
  - Architecture: §8

- [ ] **T9-02 — Evaluate optional features**
  - Description: Discuss OPT-001 to OPT-005 with the owner.
  - Priority: Low
  - Depends on: T8-06
  - Acceptance: Each option is approved, deferred or rejected in writing.
  - PRD: OPT-001 to OPT-005
  - Architecture: ADR-010

- [ ] **T9-03 — Ongoing content updates**
  - Description: Add or revise content under the verification rules.
  - Priority: Low
  - Depends on: T8-06
  - Acceptance: Verification log stays current.
  - PRD: NFR-007
  - Architecture: §9

- [ ] **T9-04 — Periodic maintenance review**
  - Description: Re-check dependencies, vulnerabilities and GitHub Pages limits.
  - Priority: Low
  - Depends on: T8-06
  - Acceptance: Review recorded with date.
  - PRD: NFR-009, NFR-013, NFR-014
  - Architecture: §20 (TC-010)

---

## Coverage matrix (MVP requirements to tasks)

| Requirement | Tasks |
|---|---|
| FR-001 | T4-01, T5-02 |
| FR-002 | T4-02, T5-02 |
| FR-003 | T4-03, T5-02 |
| FR-004 | T4-04 |
| FR-005 | T4-05, T5-03 |
| FR-006 | T4-06, T5-05 |
| FR-007 | T4-07, T5-05 |
| FR-008 | T2-03, T4-08 |
| FR-009 | T1-03, T2-02, T7-07 |
| FR-010 | T4-09, T7-02 |
| FR-011 | T2-08, T4-10, T5-04 |
| FR-012 | T2-06, T7-05 |
| FR-013 | T2-05 |
| FR-014 | T2-07, T5-06 |
| NFR-001 | T6-01 |
| NFR-002 | T6-02, T6-03 |
| NFR-003 | T7-03, T7-04 |
| NFR-004 | T2-06, T7-05 |
| NFR-005 | T0-01, T1-01, T8-01, T8-02 |
| NFR-006 | T3-03, T3-04, T7-08 |
| NFR-007 | T2-04, T5-01 |
| NFR-008 | T5-01 |
| NFR-009 | T1-05, T7-06, T8-02 |
| NFR-010 | T6-04 |
| NFR-011 | T2-01, T2-04 |
| NFR-012 | T3-05, T6-03 |
| NFR-013 | T2-08, T7-04 |
| NFR-014 | T1-04, T1-06, T7-06 |
