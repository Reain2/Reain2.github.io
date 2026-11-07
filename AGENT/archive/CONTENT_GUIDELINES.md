# CONTENT GUIDELINES — Personal Portfolio Website

| Field | Value |
|---|---|
| Document status | Draft v0.1 — **all personal content is currently missing** |
| Last updated | 2026-11-06 |
| Related | [PRD.md](PRD.md), [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md), [ARCHITECTURE.md](ARCHITECTURE.md) |

Published content must be in **English** (NFR-008). The owner decided to mark all personal content `[USER INPUT REQUIRED]` for now (conversation, 2026-11-06). Nothing below states a fact about the owner.

---

## 1. Personal branding principles

From the brief:

1. Primary positioning: **Software Engineer + Creative Technologist + Personal Brand**.
2. Balance technical expertise, problem-solving ability, creative thinking, personal development, academic and professional achievements, and individuality / personal storytelling.
3. Serve several audiences at once: universities, recruiters, clients, the tech community (PER-001 to PER-004).
4. Do not look like a generic developer portfolio template.
5. **Do not invent a personality, narrative, philosophy or professional identity.** Any story, values statement, tagline or self-description must come from the owner and be confirmed.

Owner's personal narrative, values and tagline: `[USER INPUT REQUIRED]`.

## 2. Content inventory

Status values: **Missing** (not provided), **Awaiting confirmation** (provided, not yet verified), **Verified** (confirmed by the owner and logged in section 10).

| ID | Item | Used on | Status | Notes |
|---|---|---|---|---|
| CR-001 | Personal introduction | Home | Missing | `[USER INPUT REQUIRED]` |
| CR-002 | About me | About | Missing | `[USER INPUT REQUIRED]` |
| CR-003 | Education | Experience page | Missing | Institutions, dates and qualifications `[USER INPUT REQUIRED]` |
| CR-004 | Technical skills | Home, About, Experience | Missing | Only skills the owner confirms |
| CR-005 | Creative skills | Home, About, Experience | Missing | Only skills the owner confirms |
| CR-006 | Projects | Undecided (OQ-001) | Missing | No project content is collected until OQ-001 is answered |
| CR-007 | Achievements and awards | Experience | Missing | Names, issuers and dates `[USER INPUT REQUIRED]` |
| CR-008 | Experience and activities | Experience | Missing | `[USER INPUT REQUIRED]` |
| CR-009 | Certifications (if applicable) | Experience | Missing | May not apply — owner to say |
| CR-010 | Contact email address | Contact | Missing | Plus obfuscation decision (OQ-015) |
| CR-011 | Professional and social links | Contact, footer | Missing | Only confirmed accounts |
| CR-012 | Personal interests | About | Missing | `[USER INPUT REQUIRED]` |
| CR-013 | Résumé / CV file | Résumé download | Missing | Format and placement open (OQ-005) |
| CR-014 | Blog posts | Blog | Missing | Count and approach open (OQ-003) |
| CR-015 | Photos and supporting visuals | Various | Missing | Rights and consent to confirm (OQ-013) |
| CR-016 | Site name, tagline, favicon, social preview image | All | Missing | OQ-014 |

Confirmed facts that are not personal claims: the website language is English; the contact method is a visible email with a `mailto:` link.

## 3. Writing tone

`PENDING` — the owner has not defined tone of voice. The planner may propose options with trade-offs, but none is adopted. The owner may supply writing samples or descriptions.

Always-on rules regardless of tone:

- Write in English.
- Use plain, specific statements the owner can stand behind.
- No exaggeration or superlatives that cannot be supported.
- No filler text or fictional example content presented as real.

## 4. Content structure per page

Structure follows PRD §9. Sections within pages are pending the design.

| Page | Content drawn from |
|---|---|
| Home (PG-001) | CR-001, CR-004, CR-005, CR-016 |
| About (PG-002) | CR-002, CR-012 |
| Experience / Education / Achievements (PG-003) | CR-003, CR-007, CR-008, CR-009 |
| Contact (PG-004) | CR-010, CR-011 |
| Blog / Writing (PG-005) | CR-014 |
| Résumé download (FR-005) | CR-013 |
| Projects | Undecided (OQ-001) |

## 5. Project presentation format

Projects are an open question (OQ-001). If projects are added, this **proposed** template applies. Every field is filled only from owner-provided information; unknown fields stay `[USER INPUT REQUIRED]`.

| Field | Rule |
|---|---|
| Title | As the owner names it |
| One-line summary | Owner-confirmed |
| Owner's role | Owner-confirmed; no inflated claims |
| Technologies used | Only technologies the owner confirms were used |
| Links (repository, demo) | Only working links the owner provides |
| Outcome or results | Only if the owner supplies it; **no invented statistics or results** |
| Visuals | Owner-provided screenshots with alt text and rights confirmed |
| Dates | Owner-confirmed |

## 6. Achievement presentation format

**Proposed** fields: title; issuing organization; date; short owner-confirmed description; link to evidence if one exists. No achievement may be listed unless the owner confirms it exists. Rankings, scores and claims need the owner's confirmation and, where possible, a verifiable source.

## 7. Professional experience format

**Proposed** fields: role title; organization; dates; location type if the owner wishes; short owner-confirmed responsibilities and outcomes. Applies equally to activities and volunteering. Do not infer dates, titles or responsibilities.

## 8. Image and photography guidelines

The brief confirms a combination of **personal photos, project screenshots and supporting visuals**.

- Use only images the owner has the rights to publish (OQ-013).
- Obtain consent before publishing identifiable photos of other people.
- Do not present stock or generated images as personal photos or as the owner's work.
- Provide meaningful alt text; mark decorative images as decorative (NFR-002).
- Project screenshots must show work the owner confirms is theirs and must not expose private data (tokens, personal information, internal URLs).
- Optimize for the web; observe the size limits in ARCHITECTURE.md §10 and §20.
- Image style, cropping and treatment: `PENDING` design decision (DD-008).

## 9. Contact information guidelines

- Contact method for the MVP: visible email address plus `mailto:` link (FR-004, ADR-006).
- Email address: `[USER INPUT REQUIRED]`.
- The visible address can be scraped by spam bots. Whether to obfuscate it is open (OQ-015).
- Publish only contact details the owner explicitly approves. Do not add a phone number, home address or other personal data unless the owner requests it.
- Profile links: only accounts the owner confirms are theirs.

## 10. Content verification rules

1. Every factual claim on the site must trace to an owner statement or an owner-provided document.
2. Planners and developers must never fill gaps with plausible or example content.
3. Mark gaps `[USER INPUT REQUIRED]`; ask the owner when information is ambiguous.
4. Never turn an assumption into a statement of fact.
5. Nothing is published until the owner marks it Verified. The release gate (FR-014) fails if the placeholder token remains.
6. When the owner revises a fact, update the log entry and the page together.

### Verification log

| Item (CR ID) | Provided by owner (date) | Owner confirmed (date) | Source or evidence | Page |
|---|---|---|---|---|
| — | — | — | — | — |

No entries exist yet.
