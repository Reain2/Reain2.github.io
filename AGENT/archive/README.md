# Personal Portfolio Website

> **Current status: planning phase. The website is NOT implemented.** This repository currently contains planning documents only. No application code, dependencies or deployment configuration exist yet.

## Purpose

A multi-page, English-language personal portfolio for a Software Engineer + Creative Technologist + Personal Brand. It is intended to support university admission, internships and employment, freelance opportunities, personal branding and networking, and to showcase technical and creative work. Owner name and personal details: `[USER INPUT REQUIRED]`.

## Planned technology stack

| Layer | Technology | Status |
|---|---|---|
| Frontend | React.js | Approved |
| Build tool | Vite | Approved |
| Language | JavaScript | Approved |
| UI components | ReactBits (free components only) | Approved |
| Hosting | GitHub Pages, free domain | Approved |
| Version control | Git and GitHub | Approved |
| Backend / database | None for the MVP | Approved |
| Routing, styling, blog authoring, tooling | Not yet decided | Open (see ARCHITECTURE.md §2) |

## Documentation index

| Document | Contents |
|---|---|
| [PRD.md](PRD.md) | Product requirements, scope, acceptance criteria, open questions |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Planned architecture, trade-offs, Architecture Decision Records |
| [TODO.md](TODO.md) | Phased implementation roadmap with task IDs and dependencies |
| [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md) | Design rules; the visual identity is **pending** |
| [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) | Content inventory, formats and verification rules |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Planned GitHub Pages deployment process |
| [AGENTS.md](AGENTS.md) | Instructions for future development sessions |

## Decisions still open

Projects page (OQ-001), routing strategy (OQ-002), blog authoring (OQ-003), visual identity and ReactBits references (OQ-004), résumé details (OQ-005), GitHub repository details (OQ-006), all personal content (OQ-007), quality targets (OQ-008 to OQ-010), styling and tooling (OQ-011, OQ-012), photography (OQ-013), site name and branding assets (OQ-014), contact email handling (OQ-015), and approval of GitHub Actions deployment (OQ-016). The full list is in PRD.md §19.

## Workflow

1. **Planning (current):** requirements are gathered with the owner, documented and approved. No implementation.
2. **Implementation (not started):** begins only when the owner explicitly authorizes it and supplies the necessary UI/UX references. Work follows the phases in [TODO.md](TODO.md).
3. **Documentation first:** requirements, architecture and tasks are updated before code changes that affect them.
4. **Owner approval:** every creative, architectural and external-service decision is approved by the owner before adoption.
5. **No fabrication:** missing information stays marked `[USER INPUT REQUIRED]`.
