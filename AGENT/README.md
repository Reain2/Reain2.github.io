# Personal Portfolio Website

Scaffold built and verified locally. **No real content yet** — every page renders
`[USER INPUT REQUIRED]` where owner-supplied text belongs.

A multi-page, English-language personal portfolio for a Software Engineer + Creative Technologist.
React.js + Vite + JavaScript, plain CSS, build-time prerender, free ReactBits as a complement,
GitHub Pages.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 6 pages, prerendered, into dist/
npm run preview
```

Repository base path: `VITE_BASE=/portfolio/ npm run build`. Omit it for `<username>.github.io`.

## Documents

| Document | Contents |
|---|---|
| [PRD.md](PRD.md) | Scope, requirements, content inventory, acceptance criteria, open questions |
| [BUILD.md](BUILD.md) | Architecture, stack, prerender pipeline, tooling, deployment, ADRs |
| [DESIGN.md](DESIGN.md) | Direction, tokens and measured contrast, typography, components, motion, content rules |
| [TODO.md](TODO.md) | Phases T0–T6 with what is actually done |
| [AGENTS.md](AGENTS.md) | Rules for anyone working in this repository |
| [archive/](archive/) | Superseded v0.1 documents, reference only |

## What exists

| Page | File | State |
|---|---|---|
| Home | `index.html` | Structure + placeholders |
| About | `about.html` | Structure + placeholders |
| Experience | `experience.html` | Four empty groups |
| Contact | `contact.html` | No email, no links |
| Writing | `blog.html` | No posts |
| Not found | `404.html` | Complete (its copy is generic, not personal) |

Missing on purpose, blocked on decisions:

- Canonical URLs, `robots.txt`, `sitemap.xml`, JSON-LD — need the real domain (OQ-005, OQ-008).
- Résumé download — no file (OQ-004).
- Deploy workflow — ADR-004 unapproved.
- Images — no assets, no rights confirmed (OQ-010).

## Open decisions

OQ-001 Projects, OQ-002 blog authoring, OQ-004 résumé, OQ-005 GitHub details,
OQ-006 personal content, OQ-007 browsers, OQ-008 site name and assets, OQ-009 email handling,
OQ-010 images, OQ-011 analytics. See PRD.md §7. OQ-003 typography is resolved.

No page can be finished while OQ-006 is open. Nothing may be invented to fill it.
