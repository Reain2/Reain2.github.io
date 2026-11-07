# AGENTS.md — Project Instructions

This is a general project instruction file for future development sessions. It is **not** a custom agent definition. Do not create custom agents or agent configuration files for this project.

Last updated: 2026-11-06. Read [PRD.md](PRD.md), [ARCHITECTURE.md](ARCHITECTURE.md) and [TODO.md](TODO.md) before doing any work.

---

## 1. Project overview

A multi-page, English-language personal portfolio website positioning the owner as **Software Engineer + Creative Technologist + Personal Brand**. Audiences: university admissions, recruiters, clients, tech community. Stack: React.js, Vite, JavaScript, free ReactBits components, GitHub Pages (free domain). No backend or database in the MVP.

**Current phase: planning. Nothing is implemented.**

## 2. Phase gate (highest priority)

- Do **not** write application source code, install packages, initialize the React project, write CSS, or configure deployment until the owner explicitly authorizes implementation.
- Implementation starts at TODO.md Phase 1 and only after Phase 0 blockers relevant to the task are resolved.
- Do not modify existing source code during planning. Planning documents may be edited only as the owner approves.
- Silence is not approval.

## 3. Coding principles (once implementation is authorized)

- Keep it simple. Prefer the smallest solution that satisfies the PRD.
- Content lives in the content layer, not hard-coded in components (NFR-011, subject to approval).
- Every dependency is documented with purpose, cost, limitations and alternatives before it is added (NFR-014).
- Base-path-safe asset and link references (ARCHITECTURE.md §10).
- Accessibility and responsiveness are part of "done" (NFR-001, NFR-002).
- Follow the conventions chosen under ADR-009 once decided (`OPEN`).

## 4. Technology restrictions

| Allowed (approved) | Not allowed without owner approval |
|---|---|
| React.js, Vite, JavaScript | TypeScript, other frameworks (Next.js, etc.) |
| Free ReactBits components | Paid ReactBits (Pro) or any paid dependency |
| GitHub Pages, Git, GitHub | Other hosts, custom domain |
| — | Backend, database, serverless functions |
| — | Third-party services: form services, analytics, CMS, external font or CDN services |
| — | New libraries, including a router, Markdown tooling, styling libraries (these need decisions ADR-001, ADR-002, ADR-008) |

If a restriction seems wrong, explain the trade-offs and ask. Do not work around it.

## 5. Skills usage

- Discover installed skills in the session; do not assume names or locations.
- Read a skill's instructions before using it.
- Prefer installed skills over recreating their behavior.
- Do not install skills or plugins without owner approval.
- If a relevant skill is unavailable, say so and continue with existing capabilities only where appropriate.
- Planning-phase note: the planning documents were produced in a chat interface without OpenCode access, so no skills discovery report exists yet. Run one at the start of the first OpenCode session and report it to the owner.

## 6. Documentation-first workflow

1. Check the PRD requirement and TODO task you are working on.
2. If the work changes requirements, architecture or scope, update the documents **first** and get approval.
3. Keep documents consistent: IDs (FR, NFR, T, ADR, OQ, AC) must match across files.
4. If two requirements conflict, do not silently choose. Identify the conflict and ask.
5. Never tick a TODO checkbox before the work is done **and verified**. Never claim something is implemented or verified when it is not.

## 7. No-fabrication policy

Never fabricate or assume personal information, education, experience, awards, project descriptions or results, skills, testimonials, contact details, social accounts, certifications, dates or organizations. Mark gaps `[USER INPUT REQUIRED]`. Ask when ambiguous. Never convert an assumption into a statement of fact. See CONTENT_GUIDELINES.md §10.

## 8. Mandatory user approval

Ask the owner **before** deciding anything not already established, including: visual identity, colors, typography, design direction, animation, UI/UX interactions, navigation behavior, architecture decisions, extra features, external services, and alternatives that change the approved direction.

When proposing an alternative: (1) explain it, (2) list advantages and disadvantages, (3) explain why it might be preferable, (4) ask for the decision, (5) wait. Ask conversationally, ideally one important question at a time.

Currently open decisions: see PRD.md §19 (OQ-001 to OQ-016) and ARCHITECTURE.md §2 (ADR-001, 002, 005, 007 method, 008, 009, 010). The visual identity is pending ReactBits references from the owner.

## 9. ReactBits integration rules

Full process: ARCHITECTURE.md §12 and DESIGN_GUIDELINES.md §10.

- Free components only; never React Bits Pro or anything needing a license key. Do not assume a component is free.
- Complete a vetting record per component and get owner approval before integrating.
- Preserve intended behavior where practical; document dependencies.
- Do not mix components in ways that create inconsistent UX.
- Do not replace ReactBits with another library without approval.

## 10. Git workflow

`OPEN` (ADR-009). Until the owner decides, only the following is fixed:

- Small, focused commits with clear messages.
- Never commit secrets or private data (the repository is public for GitHub Pages on the free plan).
- Do not rewrite shared history without approval.
- Proposed (awaiting approval): feature branches merged into the default branch; release tags for rollback.

## 11. Testing expectations

- Verify before claiming done: production build succeeds; preview under the production base path; refresh and direct links work; responsive and accessibility checks (TODO Phases 6–7).
- Run the placeholder check; the build must fail if `[USER INPUT REQUIRED]` remains in release content (FR-014).
- Report honestly what was and was not tested.
- Test tooling choice: `OPEN` (ADR-009).

## 12. Deployment constraints

- Static hosting only on GitHub Pages; no paid infrastructure.
- Do not configure or run deployment until the owner authorizes Phase 8.
- Follow DEPLOYMENT.md; the workflow approach (GitHub Actions) awaits approval (ADR-005).
- Respect GitHub Pages limits: site no larger than 1 GB, soft 100 GB/month bandwidth, 10-minute deployment timeout. Re-check them before launch.
- No secrets are needed for the MVP. Variables exposed to client code are public.
