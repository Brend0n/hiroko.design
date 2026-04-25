# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Core development commands
- Install dependencies: `yarn install`
- Start dev server (Vite on port 3000, auto-opens browser): `yarn dev`
- Build production bundle: `yarn build`
- Preview production build: `yarn preview`
- Lint: `yarn lint`
- Format: `yarn format`
- Run tests (Vitest watch mode): `yarn test`
- Run tests once (CI-style): `yarn test --run`
- Run a single test file: `yarn test --run path/to/file.test.js`
- Run a single test by name: `yarn test --run -t "test name"`

Note: Vitest is configured in `package.json`, but there are currently no test files in the repository.

## Architecture overview
This is a Vite-powered, multi-page static portfolio site with a lightweight client-side component system. The app is not React/Vue; UI is rendered with ES modules that return HTML strings and mount directly into the DOM.

### Entry/build model
- Build and dev are driven by `vite.config.js`.
- Vite is configured as a multi-page app via `build.rollupOptions.input`, with one HTML entry per portfolio page (`index`, project pages, `about`, `contact`).
- `src/index.html` is used as the main entry; other pages are root-level HTML files (for example `bmirror.html`, `Rudy.html`).
- Keep filename casing aligned across:
  - Vite input map (`vite.config.js`)
  - route registration (`src/router/PageRouter.js`)
  - links in portfolio data (`src/data/portfolio.js`)
  - physical HTML files

### Runtime initialization flow
`src/main.js` drives startup in this order:
1. Initialize global performance hooks (`performanceOptimizer.initialize()`).
2. Initialize page-specific controller via `pageRouter.initializeCurrentPage()`.
3. Mount shared shell components (`header`, `footer`, optional `goback`) through `componentManager.initializeCommonComponents()`.
4. If `#portfolio` exists (home page), render portfolio cards from `portfolioData`.
5. Load external scripts (`/js/jquery.shuffle.min.js`, optional `/js/password.js`).

This ordering matters because non-home pages rely on router-driven page initialization before shared component mounting completes.

### Routing and page controllers
- `src/router/PageRouter.js` maps current `window.location.pathname` filename to a page class in `src/pages/*Page.js`.
- Each page class follows the same pattern:
  - call `componentManager.initializeProjectLayout(pageData)`
  - call common component initialization
  - inject page-specific content into `#content`
- Home (`index.html`) is handled as a special case without route-class navigation.

### Component/data system
- `ComponentManager` (`src/components/ComponentManager.js`) is the central registry/factory for shared components and project layout.
- `ProjectLayout` creates shared page scaffolding (`#header`, `#content`, `#goback`, `#footer`).
- Portfolio rendering is data-driven:
  - data source: `src/data/portfolio.js`
  - list UI: `src/components/Portfolio.js`
  - item UI: `src/components/PortfolioItem.js`
- Protected projects are marked with `isProtected` in data and rendered with password-modal behavior.

### Asset/performance utilities
- `src/utils/assetManager.js` is the canonical key-to-asset-path mapping used across components/pages.
- `OptimizedImage`/`OptimizedVideo` resolve asset keys through `assetManager` and add lazy-loading helpers.
- `performanceOptimizer` applies resource hints, lazy-loading observers, and performance observers globally at startup.

When adding a new project page, update all of these together:
1. HTML entry file at repo root
2. `vite.config.js` rollup input
3. `PageRouter` route map
4. `portfolioData` item link/image metadata
5. asset keys in `assetManager` used by that page/data
