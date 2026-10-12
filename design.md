# Design Direction — Daffa Portfolio

This file defines the visual direction for the existing React and Vite portfolio. `AGENTS.md` controls workflow, approval, and implementation scope.

## Direction

Create an editorial minimal portfolio with a distinct typographic voice, clear hierarchy, and deliberate whitespace. The design should feel personal and composed, not like a stock portfolio template. Treat the supplied palette as the complete visual foundation:

- **Navy `#1F2E4A`:** primary text, navigation rail, and primary interaction color.
- **Charcoal `#343A40`:** secondary text and supporting labels.
- **Pale gray `#CED4DA`:** dividers, chip borders, and restrained surface contrast.
- **Paper `#F8F9FA`:** page background and text on navy surfaces.

Do not place navy and charcoal directly against each other to communicate a boundary. Their contrast is low. Keep body text at readable sizes and maintain strong focus indicators.

## Typography and Composition

- Keep the existing Space Grotesk and Inter font stacks. Do not download or add fonts without separate approval.
- Use large, controlled headings, concise labels, a consistent measure, and fine rules to create editorial rhythm.
- Use the existing project data and verified assets. Do not invent organization, education, achievements, project screenshots, metrics, or contributions.
- Keep skill labels and the internship availability statement as currently approved content.

## Navigation and Motion

- On desktop with enough width and height, show one homepage panel at a time in a viewport-height presentation. The sidebar uses existing Lucide icons with accessible names and visible keyboard focus.
- Preserve section hashes and project detail routes. Project detail pages remain naturally scrollable.
- On narrow screens and short viewports, show the complete homepage in document flow and allow scrolling so content is not clipped.
- Use short, purposeful slide transitions only for section changes. Respect `prefers-reduced-motion`; movement must never carry essential information.
- Keep mobile navigation discoverable, keyboard operable, and large enough to use by touch.

## Page Components

- **Navigation:** keep the desktop icon rail concise, mark the current section, and preserve a clearly labeled mobile menu.
- **Hero:** identify Daffa and his confirmed focus quickly. Keep the approved internship availability text and direct actions to projects and contact.
- **About:** use concise, confirmed biographical information only.
- **Skills:** retain grouped skills without subjective percentage meters or unsupported expertise claims.
- **Projects:** preserve the distinction between featured and additional work, the project type, Daffa's role, technologies, and available links. Use a project presentation control on the desktop panel and a complete flowing list on narrow screens.
- **Project details:** retain their separate routes, section content, contribution and limitation notes, AI-assistance context, and working links. Detail pages remain scrollable.
- **Contact and footer:** retain the existing contact channels and keep the footer simple and readable.

## Layout and States

- Use consistent alignment, a readable content measure, and deliberate spacing.
- Reflow skill groups, project cards, navigation, and contact links to available width. Let long text wrap instead of clipping.
- When a desktop panel has more content than its available height, preserve access to it with contained scrolling. On short viewports use normal document scrolling.
- Do not make important content visible only on hover or only through motion.
- Do not add organization or education sections until their content is confirmed.

## Accessibility and Performance

- Use semantic headings, landmarks, lists, and links; provide accessible names for icon-only controls.
- Keep a visible, high-contrast keyboard focus indicator and operable navigation controls.
- Respect reduced-motion preferences for panel changes and menu transitions.
- Use existing dependencies and assets. Do not add heavy effects, constant movement, parallax, or unnecessary decorative graphics.
- Verify contrast for every actual text, surface, boundary, control, and focus pairing after styling.

## Content and References

- Project data and confirmed facts remain authoritative in `docs/02_PROJECT_DATA.md`.
- Do not invent screenshots, demos, metrics, features, achievements, project ownership, organization, or education details.
- Treat external references as inspiration only. Adapt visual qualities to this portfolio rather than reproducing a reference layout.
- Do not use gradients, glass effects, shadows, or ornament without a clear hierarchy or usability purpose.

## Project Constraints

- Preserve React, Vite, the current dependencies, GitHub Pages, and the `/portfolio/` base path.
- Keep project descriptions, contribution distinctions, AI-assistance notes, links, and limitations accurate.
- Keep Organization and Education unpublished unless confirmed source data becomes available.
- Do not add services, dependencies, external assets, or fonts without the approvals required by `AGENTS.md`.

## Review Checklist

- Check 360, 390, 430, 768, 1024, 1280, and 1440 px widths, plus short viewport heights.
- Confirm there is no unintended horizontal overflow or clipped content.
- Check keyboard order, skip link, sidebar and menu names, active state, focus visibility, and project navigation.
- Verify contrast for actual foreground, background, borders, controls, and focus states.
- Check reduced motion, project detail scrolling, section hashes, and all project links.
- Confirm SEO metadata, GitHub Pages behavior, and `/portfolio/` base path remain intact.
- Confirm project and contribution facts still match `docs/02_PROJECT_DATA.md`.
