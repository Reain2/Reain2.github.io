# Personal Portfolio Website

**Live:** https://reain2.github.io — deployed from `main` through GitHub Actions.

Partially filled. Name, tagline, email, about, education, skills and interests are real and
logged in DESIGN.md. Projects, achievements, work experience, certifications, social links,
résumé, blog posts and photos are still `[USER INPUT REQUIRED]`.

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
| Home | `index.html` | Headline, intro, what I do, currently. Selected work still placeholder |
| About | `about.html` | Complete: background, approach, interests |
| Experience | `experience.html` | Education filled; work, achievements, certifications placeholder |
| Contact | `contact.html` | Email live; profiles placeholder |
| Writing | `blog.html` | No posts — placeholder |
| Not found | `404.html` | Complete |

Missing on purpose:

- Résumé download — no file (OQ-004).
- Project and blog pages — owner asked for placeholders until the site is finished.
- Images — no assets, no rights confirmed (OQ-010).
- Root `LICENSE` — the licence is the owner's choice.

## Open decisions

OQ-001 Projects, OQ-002 blog authoring, OQ-004 résumé, OQ-005 GitHub details,
OQ-006 personal content, OQ-007 browsers, OQ-008 site name and assets, OQ-009 email handling,
OQ-010 images, OQ-011 analytics. See PRD.md §7. OQ-003 typography is resolved.

No page can be finished while OQ-006 is open. Nothing may be invented to fill it.
