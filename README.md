# KTP UMD Website

Website for Kappa Theta Pi at the University of Maryland. Built with Astro.

## Development

### Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Project Structure

```
src/
  components/    # Reusable UI components (Navbar, Footer, MemberCard, etc.)
  data/          # Member data (members.json)
  layouts/       # Page layout wrapper (Layout.astro)
  pages/         # Route pages (index, membership, students, companies, faq)
  styles/        # Global CSS and design tokens (global.css)
public/          # Static assets (images, fonts)
```

### Key Files

- `src/styles/global.css` — Design system tokens, dark/light theme variables, and base styles.
- `src/data/members.json` — All member data: exec board, chairs, brothers, and alumni.
- `src/components/Navbar.astro` — Site navigation with mobile menu and theme toggle.
- `src/pages/membership.astro` — Brothers page with pledge class ordering.

### Adding Members

1. Add headshots to `public/img/brothers/` using the format `First_Last.jpg`.
2. Update `src/data/members.json` following the established format.
3. Move graduates to the alumni section under their pledge class.

### Deployment

The site deploys to GitHub Pages via GitHub Actions. Merge to `master` only after approval from the Webmaster.

## Commit Format

All commits must follow this format:

```
[SemYear] Message
```

Example: `[Fall21] Update Rush Events`

Use the `dev` branch for development. Only merge into `master` after Webmaster approval.
