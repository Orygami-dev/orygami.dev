# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start dev server at localhost:4321
yarn build    # Build production site to ./dist/
yarn preview  # Preview production build locally
```

## Architecture

This is an Astro 5 project using the basics starter template with TypeScript in strict mode.

**Directory structure:**
- `src/pages/` - File-based routing (`.astro` files become routes)
- `src/layouts/` - Page layouts (currently `Layout.astro` provides the HTML shell)
- `src/components/` - Reusable Astro components
- `src/assets/` - Images/assets processed by Astro's build pipeline
- `public/` - Static assets served as-is (favicon, etc.)

**Key patterns:**
- Astro components use frontmatter (`---`) for imports and server-side logic
- Styles are scoped by default in `<style>` tags within components
- TypeScript config extends `astro/tsconfigs/strict`
