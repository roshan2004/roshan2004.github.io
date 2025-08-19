# Repository Guidelines

## Project Structure & Modules
- `src/`: App source (React + Vite).
  - `src/components/`: Feature sections and UI; prefer PascalCase files (e.g., `Header.jsx`).
  - `src/components/ui/`: Reusable UI primitives.
  - `src/assets/`: Local images/fonts used by components.
  - `src/main.jsx`, `src/App.jsx`: App entry and root layout.
- `public/`: Static assets served as-is.
  - `public/posts/*.md`: Blog posts (Markdown).
- `dist/`: Production build output (generated). 
- Path alias: `@` → `src` (see `vite.config.js`). Use absolute imports (e.g., `import Header from '@/components/Header'`).

## Build, Test, and Development
- `npm install`: Install dependencies.
- `npm run dev`: Start Vite dev server with React fast-refresh.
- `npm run build`: Production build; also copies `dist/index.html` to `dist/404.html` for GitHub Pages.
- `npm run preview`: Serve the production build locally.
- `npm run lint`: Run ESLint with Prettier config.

## Coding Style & Naming
- **Language**: JavaScript/JSX (no TS).
- **Formatting**: Prettier enforced — semicolons, single quotes, trailing commas (ES5). Indentation: 2 spaces.
- **Linting**: ESLint (recommended rules, react-hooks). `no-unused-vars` ignores UPPER_CASE globals.
- **Components**: PascalCase filenames and exports (e.g., `Contact.jsx`, `export default Contact`).
- **Imports**: Prefer `@/…` alias; group third-party → internal → relative.
- **Tailwind**: Utility-first styles in JSX; keep class lists readable and consistent.

## Testing Guidelines
- No test framework is configured. If adding tests, prefer Vitest + React Testing Library.
- Name test files `*.test.jsx` near source or under `__tests__/`.
- Ensure `npm run lint` passes before PRs.

## Commit & Pull Requests
- Prefer Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `perf:`, `style:`.
  - Example: `feat(blog): render Markdown posts from /public/posts`.
- PRs should include:
  - Clear description and rationale; reference issues (e.g., `Closes #12`).
  - Screenshots or GIFs for UI changes; link to preview if applicable.
  - Checklist: built locally (`npm run build`), lint clean, no console errors.

## Security & Configuration
- Do not commit secrets; site is static. Place public assets in `public/` only.
- Base path is `/` (custom domain). Use relative asset paths or `/`-rooted URLs.
