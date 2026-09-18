# Huerlem Peters — Portfolio (redesign-2026)

Next.js (App Router, TypeScript) rebuild of the portfolio, driven by the
Figma **Portfolio Master** as the design and editorial source of truth.

**This is a separate, new project.** The previously uploaded static
HTML/CSS site is treated as a legacy source + asset archive only — it is
not modified and this project is not built on top of it or its Git
history (none was available).

## Status

Checkpoints 1–3 complete:

- Project scaffold, design tokens, typography architecture, route
  structure, and the reusable component foundation (Checkpoint 1).
- Accessible SiteHeader (desktop nav + mobile disclosure panel), SiteFooter,
  skip link, active-nav-state, and global layout rules (Checkpoint 2).
- Home page fully composed — Hero, LUFI (flagship), IntelliShop
  (supporting), Positioning, About entry, Contact/CV entry (Checkpoint 3,
  CLOSED). LUFI and IntelliShop media are the real exported Figma assets,
  rendered via `MediaContainer`/`next/image`.
- Checkpoint 3.1 — Hero evolved into a two-column layout: fixed
  professional identity (left) + a restrained, user-controlled
  `HeroShowcase` product carousel (right) cycling LUFI/IntelliShop hero
  screenshots in a minimal device frame. No autoplay, keyboard + touch +
  click controls, respects `prefers-reduced-motion`. CLOSED.
- Checkpoint 4A — LUFI case study (`/work/lufi`), Sections 01–04
  (Product Overview, Problem & Opportunity, Users/Principles/Design
  Challenge, UX/Product Exploration). New `CaseStudyContents` component
  for in-page section jump links. `ProjectMetadata` restyled for
  responsive multi-column long-form values. Flow map is the real exported
  Figma asset.
- Checkpoint 4B — Sections 05 (The Pattern That Kept Recurring — five
  caught instances + governance synthesis) and 06 (Visual Language & UI
  Evolution) added, now with all ten authentic Figma evidence assets
  integrated via `MediaContainer`/`next/image` (no more placeholders).
  `EvidenceSlot` was removed — fully unused once real assets replaced
  every placeholder.
- Checkpoint 4C — Sections 07 (Designing the First Meeting) and 08
  (Designing Memory & User Control) added, with all 10 authentic
  390×844 prototype frames integrated.
- Checkpoint 4D — Sections 09 (Designing Relationship Without
  Gamification) and 10 (Designing Voice) added, with 5 authentic 2×
  prototype exports integrated.
- Checkpoint 4E — Sections 11 (Unified Profile & User Control) and 12
  (Ethical Monetization) added, with 7 authentic 2× prototype exports
  integrated.
- Checkpoint 4F — Sections 13 (System Thinking & Edge Cases), 14 (Final
  Product / Interactive Prototype) and 15 (Reflection / What I Learned)
  added, with 4 new authentic exports integrated. **The 15-section LUFI
  case study is now complete and frozen — not modified further.**
  `CaseStudyContents` links all 15 sections. `CaseStudyNavigation`
  points to IntelliShop at the close.
- Checkpoint 5A — IntelliShop case study (`/work/intellishop`) begun,
  Sections 01–04 (Product Overview, Why I Revisited It, V1 Evidence, V1
  Audit & Learning), with 6 authentic 2025 V1 assets integrated.
- Checkpoint 5B — Sections 05 (Product Reframing), 06 (Information
  Architecture Transformation) and 07 (Core Flow Decisions) added, with
  6 authentic 2026 V2 decision assets integrated. The V1 feature model
  and V2 outcome model are shown side by side as the central evolution
  comparison.
- Checkpoint 5C — Sections 08 (Low-Fi Validation), 09 (Visual System
  Evolution) and 10 (V1 → V2 Comparison) added, with 7 authentic assets
  integrated. Candidate/approved/final visual-system chronology
  preserved throughout.
- Checkpoint 5D — Sections 11 (High-Fidelity Experience), 12
  (Responsive Validation), 13 (Key Design Decisions) and 14 (Outcome &
  Reflection) added, with the final 7 authentic 2× high-fidelity
  screens integrated. **The 14-section IntelliShop case study is now
  complete.** `CaseStudyContents` links all 14 sections — no disabled
  items remain. `CaseStudyNavigation` points to Storyteller at the
  close. The IntelliShop interactive prototype is contained within the
  same verified Figma project as the broader design evidence rather
  than maintained as a separate prototype file. The case-study CTA
  links to that existing Figma project.
- Checkpoint 6 — AI Bedtime Story (`/work/storyteller`), the third and
  final case study, complete as a compact 7-section client-project
  write-up (Client Brief → Understanding Two User Experiences →
  Structuring the Experience → From Flows to Interface → Designing the
  Product Experience → Development & Delivery → Outcome & Reflection).
  Uses 7 of the 17 preserved legacy Storyteller assets — curated, not
  dumped; the rest (extra personas, the watermarked multi-device
  mockup, and two photorealistic stock-style device mockups) were
  deliberately excluded, see the Checkpoint 6 report for the full list
  and reasoning. No Figma URL was ever supplied for this project, so
  the case study close has no design-evidence CTA — only internal
  links (Back to Selected Work, Work with me) and `CaseStudyNavigation`
  back to IntelliShop. `site-config.ts`'s `workNav` entry updated to
  "AI Bedtime Story" for consistency, though note `workNav` isn't
  currently rendered anywhere in the UI.

**All three case studies (LUFI, IntelliShop, AI Bedtime Story) and
Home are now complete.** About and Contact remain Checkpoint-1
placeholders.

**Outstanding project note:** the CV asset (wired at Checkpoint 8, not
touched since) should get a final alignment pass to update its
Storyteller/AI Bedtime Story entry to read "AI Bedtime Story — Client
Web Product, Team Lead · Product Designer · Developer" with
leadership + design + backend contribution represented concisely —
flagged per the Checkpoint 6 brief, not yet done.

- Checkpoint 7 — Portfolio-wide QA pass. Fixed: 3 case-study pages had
  no page-specific meta description (fell back to the generic
  site-wide one); Home's root `<title>` now includes the full
  positioning; Home's Contact entry had a "View / Download CV" button
  pointing at a CV that doesn't exist anywhere in the project (fixed —
  removed, since Contact itself correctly has no CV link either);
  IntelliShop's "next project" case-study-nav link still said "AI
  Storyteller" instead of the approved "AI Bedtime Story"; the
  `HeroShowcase` image (Home's likely LCP element) had no `priority`
  hint; the fully-orphaned `PlaceholderMedia` component (unused since
  every placeholder was replaced with real evidence across LUFI/
  IntelliShop) was removed. Verified (not assumed): all 74 referenced
  asset paths resolve to real files; zero broken CSS-class references
  anywhere in the codebase; the 5 Storyteller CSS classes flagged as
  possibly-unused were already absent, not present to remove.
  `npm install`/`build`/`lint` could not be run — this sandbox has no
  network access to the npm registry (confirmed via a real attempt,
  403 from registry.npmjs.org) — substituted a full-repo TypeScript
  syntax check (clean) as partial verification; real `npm install &&
  npm run build && npm run lint` still needs to run in an environment
  with network access before deployment. No favicon/app icon exists in
  the project (reported, not fabricated — no logo/mark asset exists to
  derive one from). `siteConfig.url` remains a placeholder domain
  pending actual deployment.
- Lint fix — `Button.tsx`'s internal-`<Link>` branch had an `any` cast
  and a `Url`-typing mismatch; both resolved by destructuring the
  already-narrowed `href: string` out of the discriminated-union props
  instead of casting. `SiteHeader.tsx`'s pathname-triggered `setState`
  effect (flagged by `react-hooks/set-state-in-effect`) was removed in
  favor of the event-driven close already on every mobile nav link,
  plus one added to the brand logo link for parity. Real `npm run
  lint` now passes clean (verified against actual project
  `node_modules`, not assumed).
- Checkpoint 8A — Home Visual Master: Header and Home rebuilt in the
  approved dark-cinematic/quiet-luxury direction (obsidian/charcoal/
  bronze palette, Fraunces serif for headlines, restrained CSS-only
  entrance motion, reduced-motion respected). Selected Work now shows
  all three projects (LUFI, IntelliShop, AI Bedtime Story — no longer
  hidden from Home). `HeroShowcase` removed from Home's render (files
  preserved, unused). App icons wired via Next's `src/app/icon.png` /
  `apple-icon.png` convention. **Scope-limited to Header + Home only**
  — About, all three case studies, Prototypes, Contact, and the
  Footer remain the previous light system until their own visual
  pass. See the Checkpoint 8A report for the full list of intentional
  differences from the approved reference image (e.g. no literal rock/
  stone photography — CSS-only atmospheric framing around the
  authentic LUFI screenshot instead) and one real accessibility fix
  made along the way (a muted-bronze text colour that measured under
  the 4.5:1 AA threshold was swapped for a safer tone before shipping).
- Checkpoint 8A.1 — Cinematic product staging system. New reusable
  `DeviceFrame` component (phone-dark/phone-light/laptop chrome, no
  trademarked shapes) and `HeroStageTilt` (subtle desktop-only pointer
  response, ≤2°, disabled for touch/reduced-motion). All four product
  presentations (LUFI Hero, LUFI/IntelliShop/AI Bedtime Story in
  Selected Work) now use real device staging with per-project material
  character instead of flat screenshots in cards — LUFI dark graphite,
  IntelliShop light metal against cooler graphite, Storyteller laptop
  frame. Every screen inside every device is an authentic, unmodified
  project asset (verified by checksum against the untouched source
  files) — confirmed zero use of the AI-generated reference LUFI
  interface supplied for mood/atmosphere reference only. Footer now
  matches the dark system (was still light, creating a visible seam
  after Home's dark closing section) — content/links unchanged, one
  real contrast fix made (TextLink's default accent color measured
  ~3.9:1 against the new dark background; overridden to the verified
  ~7.4:1 bronze-highlight tone for footer links specifically, via a
  documented `!important` — TextLink itself, used across every
  still-light page, was not changed).
- Checkpoint 8A.2 — Hero now uses the approved photographic environment
  plate (`public/assets/portfolio/hero-lufi-environment.jpg`, real
  photography, not CSS-recreated) as the background of the product
  stage only — the left hero-copy column keeps its own solid obsidian
  background independently, so hero typography contrast doesn't depend
  on the photo's content. A restrained fading gradient overlay sits at
  the stage/copy seam (safety margin, not a recreation of the plate)
  and a soft non-opaque radial gradient sits behind the right-side LUFI
  metadata for readability against the plate's rock detail. Selected
  Work cards got distinct, more restrained CSS-only environments per
  project (LUFI: simple basalt facet + bronze edge light; IntelliShop:
  cool graphite + neutral studio highlight, no bronze; Storyteller:
  soft warm-charcoal + a hinted resting surface beneath the laptop) —
  **and one real, confirmed bug fix**: `.workCardMedia` was missing its
  own `overflow: hidden`, so the LUFI card's intentionally
  larger/bleeding device could paint past the media/body boundary into
  the card's text area (the outer `.workCard`'s `overflow: hidden`
  doesn't clip an internal sibling overlap, only content exceeding the
  whole card). Fixed by adding `overflow: hidden` + `isolation: isolate`
  to `.workCardMedia` and `position: relative` + `z-index: 10` to
  `.workCardBody`, exactly containing every environment/device/shadow
  layer within the media area.
- Checkpoint 8A.2 final patch — Hero background moved from a
  product-column-only layer to a single full-`Section` photographic
  scene (`fill` image + one left→center readability gradient), so the
  plate's own dark left zone (generated specifically for the headline)
  is now actually used instead of discarded. Hero grid retuned to a
  37%/63% split approximating the approved 35–38% headline / 62–65%
  device+metadata proportions. `HeroStageTilt` max tilt reduced
  2°→1.2°. Selected Work breakpoints corrected to explicit
  1→2→3-column steps (768px, 1180px) instead of jumping straight from
  1 to 3 at 768px. All three Selected Work devices resized from blind
  `scale()` transforms to real aspect-ratio-driven geometry
  (height/width + `aspect-ratio` matching each screenshot's true
  ratio) — LUFI ~85% media height, IntelliShop ~88% height + static
  3° tilt, Storyteller ~96% media width + static −2° tilt. The
  media/body clipping contract from the previous patch is unchanged
  and reconfirmed intact. `npm run typecheck` (real `tsc --noEmit`,
  not a substitute) now also verified clean, in addition to real
  `npm run lint`.
- CP9 — Global Portfolio Visual System. The dark Visual Master now
  propagates to every route (About, LUFI, IntelliShop, AI Bedtime
  Story, Prototypes, Contact) — **not** via per-page rewrites, but by
  repointing the shared `--color-*` shell tokens in `tokens.css` to
  alias the existing `--vm-*` values. An audit found every shared
  component and every page's own CSS already consumed `--color-*`
  exclusively (zero hardcoded hex/rgb colors anywhere outside the
  already-dark Home/Header/Footer/DeviceFrame files, verified by grep
  across the whole `src/` tree) — so this one consolidated edit
  propagated correctly everywhere with no page-by-page rewrite needed.
  Typography: `h1`/`h2` (major titles, major case-study section
  headings) now use the Fraunces serif; `h3`/`h4` (the dozens of dense
  subsection headings inside each case study) intentionally stay
  Inter for readability — not a blanket switch. `Quote` also moved to
  the serif directly. Removed one now-redundant `!important` hack in
  `SiteFooter` (was force-overriding `TextLink`'s color for the old
  light-system accent; unnecessary now that `--color-accent` itself
  resolves to the same bronze-highlight tone everywhere). Zero changes
  to any project screenshot, diagram, or case-study copy — confirmed
  by file-timestamp check before and after. Home untouched (it already
  referenced `--vm-*` directly, not `--color-*`, so it was structurally
  unaffected either way). Real `npm run lint` and `npm run typecheck`
  both pass; `npm run build` remains blocked by the same platform SWC
  limitation as every prior checkpoint.
- CP9.1 — Accessibility token correction. `--color-text-muted` measured
  under WCAG AA for normal-size text against the CP9 remap (~4.0:1 on
  obsidian, ~3.4:1 on surface — both fail the 4.5:1 threshold this
  alias needs, since it's used for real body-size copy, not just
  large/decorative text). Fixed by repointing the shell alias only —
  `--vm-text-muted` itself is untouched (Home may depend on it as-is)
  — to `color-mix(in srgb, var(--vm-text-secondary) 82%, var(--vm-obsidian))`
  (≈ `#8b8882`, kept as a static hex fallback above the color-mix()
  line for engines without support). Now 5.51:1 on obsidian, 4.69:1 on
  surface — both pass. Every other shell text/background pair was
  measured properly (WCAG relative-luminance formula, not an estimate)
  and already passes AA comfortably — none needed changing.
- CP9.1 (CV sync + expandable media) — Current CV installed at
  `public/assets/cv/Huerlem-Peters-Product-Designer-CV.pdf` (byte-
  identical to the supplied file, verified by checksum). About's final
  paragraph and role titles synced to the CV (LUFI: Founder · Product
  Designer · Developer; IntelliShop: Product Designer; AI Bedtime
  Story: Group Leader · Product Designer · Developer); a Download CV
  button added between Get in touch and View the work. Contact now
  passes `cvHref` to `ContactCTA` (its existing, previously-unused
  capability). New `ImageLightbox` client component
  (`src/components/ImageLightbox/`) gives every one of the 71
  case-study evidence images (across LUFI/IntelliShop/AI Bedtime
  Story — confirmed by search that Home/About/Prototypes never use
  `MediaContainer`) an accessible full-screen viewer: native
  `<dialog>` + `showModal()`, focus restoration to the trigger,
  backdrop-click-to-close, a 44×44px close control, and an "Open
  original size" link using the unmodified source path. `MediaContainer`
  stays a server component; only `ImageLightbox` is a client boundary.
  The dialog's full-size image is lazy-mounted on first open rather
  than always rendered (even hidden), to avoid 71 duplicate
  full-resolution images loading eagerly. One real type error
  surfaced by `npm run typecheck` here (a CSS-module index-signature
  class name typed as possibly-`undefined`, used in
  `document.body.classList`) — fixed with a plain guard, no cast or
  suppression. Zero project-evidence files touched — verified by
  checksum against every value recorded in earlier checkpoint reports,
  all still byte-identical.
- CP9.2 — three targeted fixes to the CP9.1 work. `MediaContainer`'s
  trigger content was a `<div>` inside `ImageLightbox`'s `<button>` —
  invalid phrasing content; changed to `<span className={styles.frame}>`
  with `display: block` added so the visual result is unchanged.
  Backdrop-click-to-close was attached to the `<dialog>` element, but
  `.dialogInner` fills the full viewport and intercepts every click
  before it reaches the dialog — moved the handler to `.dialogInner`
  with an `event.target === event.currentTarget` check, so only clicks
  on genuinely empty modal space close it. `ContactCTA`'s Download CV
  button now has the `download` attribute, matching About's.
- CP10 — LUFI Avatar System integration. New case-study section 07
  ("LUFI Avatar System") inserted between Visual Language (06) and
  Designing the First Meeting (now 08) — every subsequent section
  renumbered +1 throughout both `page.tsx` and `page.module.css`
  (JSX comments, `eyebrow` strings, `contentsItems`), verified by
  regex-based single-pass substitution rather than manual editing to
  avoid cascade errors. **Important, surfaced before writing any
  copy:** the supplied asset pack's own `manifest.md` documents a real,
  unresolved conflict — the layered character system and the
  `LufiAvatar.tsx` production-component evidence in the archived
  codebase document two different directions (a faceless breathing
  orb, "not a face and not a mascot" per its own code comment).
  Rather than present the character system as settled fact, the
  section opens with a brief framing note and the existing
  "Expressiveness vs Interpretability" subsection therefore treats
  the abstract orb as the direction represented by the
  production-component evidence in the archived codebase, without
  claiming live-build or App Store verification. 26 authentic avatar
  assets added under `public/assets/lufi/avatar/` (base/eyes/mouths/
  flames/expressions), copied and checksum-verified byte-identical to
  the supplied pack — no composite images fabricated for shy/proud/
  flattered, matching the manifest's own finding that no such finals
  exist. All evidence renders through the existing `MediaContainer` /
  `ImageLightbox`, no second viewer introduced.
- CP10.1 — targeted polish on the Avatar System section only. Outer
  `Container narrow` → `Container` (wide case-study canvas) so
  specimen grids/pillars/matrix/comparison can use the available
  width; prose runs (headings + paragraphs + quotes) individually
  wrapped in a new `.proseWidth` div (680px, reusing the
  `--container-max-narrow` token — no global Container/token change).
  Final Emotional States grid: 2 → 3 → 5 columns (768px/1024px) instead
  of 2 → 5. Two wording corrections only, exactly as specified: the
  Core Body sentence no longer implies the archived JPEGs can be
  reliably recomposited; the framework note and "Abstract production
  direction" no longer say "shipped today," instead naming the
  production-component evidence in the archived codebase. Removed a
  stale Checkpoint 4B comment claiming sections 07–15 were disabled/
  unlinked (untrue since CP10). Fixed three stale README directory
  descriptions below (`lufi/`, `intellishop/` said "Empty" despite
  being fully populated; `cv/` said both "Empty" and "added" in the
  same line).
- CP11 — Final pre-deploy QA patch. `icon.png`: 1254×1254, 837,104
  bytes → 256×256, 30,299 bytes (96.4% smaller); `apple-icon.png`:
  1254×1254, 726,174 bytes → 180×180 (Apple's own spec size), 8,519
  bytes (98.8% smaller) — same visual identity (verified), no
  transparency in the source to preserve, both still auto-discovered
  via Next's App Router file convention. IntelliShop: fixed a genuine
  skipped heading level (h2 → h4 with no h3 in between, in "Key Design
  Decisions" — the other five case-study/page files were checked
  programmatically and have none) by promoting six `findingTitle`
  elements from h4 to h3, same class/appearance, no copy change.
  IntelliShop's prototype: corrected "link pending" wording (case-study
  closing CTA and the Prototypes page) — the prototype lives inside the
  same Figma project as the design evidence, so one link now correctly
  represents both, matching the already-real, already-linked URL. One
  now-orphaned CSS rule (`.pendingCta`) removed as a direct consequence.

## Stack

Next.js 16.3.3 (Active LTS) · React 19.2.0 · TypeScript · CSS Modules
(no Tailwind). Requires Node.js ≥ 20.9. ESLint uses flat config
(`eslint.config.mjs`) — Next.js 16 removed the `next lint` CLI, so linting
runs via `npm run lint` → `eslint .`.

## Getting started

```bash
npm install
npm run dev
```

No environment variables are required yet.

## Structure

```
src/
  app/            Route segments (App Router)
  components/     One folder per component: Component.tsx, .module.css, index.ts
  lib/            site-config.ts (nav/routes), metadata.ts (SEO helper)
  styles/         tokens.css, typography.css — the shared design system
  types/          Shared content-shape types (no copy)
public/
  assets/
    lufi/         LUFI case-study visuals + avatar/ subfolder (populated)
    intellishop/  IntelliShop case-study visuals (populated)
    storyteller/  Preserved from the legacy site (17 files)
    profile/      Empty — for About/Home portrait imagery
    cv/           Huerlem-Peters-Product-Designer-CV.pdf (added at CP9.1)
    shared/        Empty — shared/OG imagery
```

## Design tokens — CONFIRMED

Colour, spacing (4/8/16/24/40/64/96px), radius (4px controls / 12px
surfaces), and layout (1200px max-width, 72/48/20px desktop/tablet/mobile
margins, 680px reading width) are all confirmed from a direct inspection
of the Portfolio Master Figma file — see `src/styles/tokens.css`.
Typography is **Inter throughout** (confirmed); a serif accent for
hero/case-study titles is an experimental idea for later, not implemented.
