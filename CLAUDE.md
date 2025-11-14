# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with this codebase. It covers architecture, workflows, conventions, and best practices specific to this repository.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Tech Stack](#architecture--tech-stack)
3. [Directory Structure](#directory-structure)
4. [Development Workflow](#development-workflow)
5. [Code Conventions](#code-conventions)
6. [Component Patterns](#component-patterns)
7. [Content Management](#content-management)
8. [Build & Deployment](#build--deployment)
9. [Common Tasks](#common-tasks)
10. [Important Files](#important-files)

---

## Project Overview

**Type:** Static Academic Portfolio Website
**Owner:** Roshan Shrestha (Computational Biophysics Researcher)
**Live Site:** https://shrestharoshan.com
**Deployment:** GitHub Pages with custom domain
**Purpose:** Showcase research, publications, blog posts, code projects, and professional information

### Key Features

- Single Page Application (SPA) with client-side routing
- Dark mode support with persistent user preference
- Markdown-based blog system with auto-generated metadata
- Lazy-loaded routes for optimal performance
- RSS feed generation
- Math equation rendering (KaTeX)
- Responsive design with Tailwind CSS
- SEO-optimized with dynamic meta tags

---

## Architecture & Tech Stack

### Core Framework

- **React 19.1.0** - UI library
- **React Router DOM 7.8.0** - Client-side routing
- **Vite 6.3.5** - Build tool and dev server (extremely fast HMR)
- **Node 20** - Runtime environment

### Styling

- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.7** - Direct Tailwind integration (no PostCSS)
- **Class Variance Authority (CVA)** - Component variant management
- **Tailwind Merge 3.3.0** - Smart class merging to avoid conflicts
- **clsx 2.1.1** - Conditional class composition
- **tw-animate-css** - Extended animation utilities

### Content Rendering

- **React Markdown 10.1.0** - Markdown to React component rendering
- **KaTeX 0.16.22** - Fast math typesetting
- **Rehype KaTeX 7.0.1** - Math equation support in Markdown
- **Remark GFM 4.0.1** - GitHub Flavored Markdown (tables, strikethrough, etc.)
- **Remark Math 6.0.0** - Parse math blocks in Markdown
- **Gray Matter 4.0.3** - YAML frontmatter parsing for blog posts

### UI Components

- **Lucide React 0.510.0** - Primary icon library (clean, consistent SVG icons)
- **Simple Icons 13.21.0** - Technology/brand icons
- **Radix UI 1.2.2** - Accessible, unstyled component primitives

### Development Tools

- **ESLint 9.25.0** - Code linting (recommended rules + react-hooks)
- **Prettier 10.1.8** - Code formatting (integrated with ESLint)
- **Rollup Plugin Visualizer 6.0.3** - Bundle size analysis

### Package Manager

**Note:** package.json specifies `pnpm@10.4.1` as the package manager, but npm works fine too. Use `npm` for consistency with existing scripts and GitHub Actions.

---

## Directory Structure

```
roshan2004.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment pipeline
├── .idea/                       # IntelliJ IDEA configuration (gitignored)
├── dist/                        # Production build output (gitignored)
├── public/                      # Static assets served as-is
│   ├── posts/                   # Markdown blog posts (*.md files)
│   ├── images/                  # Blog and page images
│   ├── Roshan_Shrestha_CV.pdf   # Resume/CV
│   ├── profile.jpg              # Profile photo
│   ├── og-image.jpg             # Social media preview image
│   ├── rss.xml                  # Auto-generated RSS feed
│   ├── robots.txt               # Search engine directives
│   └── sitemap.xml              # Site map for SEO
├── scripts/
│   └── sync-posts.mjs           # Blog metadata generator
├── src/
│   ├── assets/                  # Local images used by components
│   │   ├── profile-hero.jpg
│   │   ├── biophysics-research.jpg
│   │   ├── computational-biology.png
│   │   └── bm5c00683_0006.gif
│   ├── components/              # React components
│   │   ├── About.jsx            # About page (biography)
│   │   ├── Blog.jsx             # Blog listing page
│   │   ├── Code.jsx             # Code/tools page
│   │   ├── Contact.jsx          # Contact form page
│   │   ├── DarkModeToggle.jsx   # Theme switcher component
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Header.jsx           # Navigation bar
│   │   ├── Home.jsx             # Landing page
│   │   ├── LazyImage.jsx        # Lazy-loaded image component
│   │   ├── Post.jsx             # Individual blog post renderer
│   │   ├── Publications.jsx     # Publications list
│   │   ├── Research.jsx         # Research areas page
│   │   ├── Teaching.jsx         # Teaching materials page
│   │   ├── icons/               # Custom icon components
│   │   └── ui/                  # Reusable UI primitives (shadcn-style)
│   │       └── button.jsx
│   ├── context/
│   │   └── DarkModeContext.jsx  # Dark mode state provider
│   ├── data/
│   │   └── posts.json           # Auto-generated blog metadata (DO NOT EDIT MANUALLY)
│   ├── hooks/
│   │   ├── usePageTracking.js   # Analytics integration
│   │   ├── usePrefersReducedMotion.js # Accessibility hook
│   │   └── use-mobile.js        # Responsive breakpoint detection
│   ├── lib/
│   │   └── utils.js             # Utility functions (cn() for class merging)
│   ├── App.css                  # Theme CSS variables and custom styles
│   ├── App.jsx                  # Root component with routing logic
│   ├── index.css                # Global styles and Tailwind directives
│   └── main.jsx                 # React entry point (renders to DOM)
├── .gitignore
├── AGENTS.md                    # Development guidelines (see this too!)
├── README.md                    # Project overview and quick start
├── components.json              # shadcn/ui component configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── jsconfig.json                # Path alias configuration (@/ → src/)
├── package-lock.json            # Dependency lock file
├── package.json                 # Dependencies and scripts
└── vite.config.js               # Vite build configuration
```

---

## Development Workflow

### Initial Setup

```bash
# Clone repository
git clone https://github.com/roshan2004/roshan2004.github.io.git
cd roshan2004.github.io

# Install dependencies
npm install

# Start development server (auto-runs sync:posts first)
npm run dev
```

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with hot reload (runs on http://localhost:5173) |
| `npm run build` | Production build → `dist/` (also creates `dist/404.html` for SPA routing) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint with Prettier rules |
| `npm run sync:posts` | Regenerate `posts.json` and `rss.xml` from Markdown files |

**Note:** `sync:posts` runs automatically before `dev` and `build` via `predev` and `prebuild` hooks.

### Development Server

When you run `npm run dev`, Vite:
1. Runs `sync:posts` to ensure blog metadata is current
2. Starts a dev server on http://localhost:5173
3. Enables Hot Module Replacement (HMR) for instant updates
4. Proxies API calls if configured

---

## Code Conventions

### Language & Formatting

- **Language:** JavaScript (ES modules), JSX for React components
- **Formatting:** Prettier enforced via ESLint
  - Semicolons: Yes
  - Quotes: Single quotes (`'`) for JS, JSX single quotes (`'`) for attributes
  - Trailing commas: ES5 (objects, arrays, but not function parameters)
  - Indentation: 2 spaces

### File Naming

- **Components:** PascalCase (e.g., `Header.jsx`, `DarkModeToggle.jsx`)
- **Utilities/Hooks:** camelCase (e.g., `usePageTracking.js`, `utils.js`)
- **Scripts:** kebab-case (e.g., `sync-posts.mjs`)
- **Markdown posts:** kebab-case (e.g., `martini-3-coarse-grained-force-field.md`)

### Import Organization

```javascript
// 1. Third-party libraries
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Internal absolute imports (using @ alias)
import Header from '@/components/Header';
import { useDarkMode } from '@/context/DarkModeContext';
import { cn } from '@/lib/utils';

// 3. Relative imports (if needed, but prefer @ alias)
import './App.css';
```

**Always prefer `@/` alias over relative paths** for cleaner imports.

### ESLint Rules

- **React Hooks:** Rules of Hooks enforced
- **Unused Variables:** Error (except UPPER_CASE constants)
- **React Refresh:** Warns if components aren't compatible with fast refresh
- **Prettier Integration:** No style conflicts

### Component Structure

```javascript
// Standard component pattern
import React from 'react';
import { cn } from '@/lib/utils';

function ComponentName({ prop1, prop2, className }) {
  // Hooks at the top
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // Event handlers
  const handleClick = () => {
    // ...
  };

  // Render
  return (
    <div className={cn('base-classes', className)}>
      {/* Content */}
    </div>
  );
}

export default ComponentName;
```

---

## Component Patterns

### Lazy Loading

Routes are lazy-loaded to optimize initial bundle size:

```javascript
// App.jsx
const About = React.lazy(() => import('./components/About'));
const Research = React.lazy(() => import('./components/Research'));
// ... etc.

// Wrapped in Suspense with loading spinner
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path='/about' element={<About />} />
  </Routes>
</Suspense>
```

**When to use:** All page-level components should be lazy-loaded. Small shared components (Header, Footer, UI primitives) should NOT be lazy-loaded.

### Dark Mode

Dark mode is managed via Context API:

```javascript
import { useDarkMode } from '@/context/DarkModeContext';

function MyComponent() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='bg-white dark:bg-slate-900'>
      {/* Use dark: prefix for dark mode styles */}
    </div>
  );
}
```

**Implementation details:**
- Preference persisted to `localStorage`
- Synced with system preference on first visit
- Applied via `dark` class on `<html>` element
- Tailwind's class-based dark mode strategy

### Tailwind Class Management

Use the `cn()` utility (from `@/lib/utils`) to merge classes:

```javascript
import { cn } from '@/lib/utils';

function Button({ variant, className, children }) {
  return (
    <button
      className={cn(
        'base-classes',
        variant === 'primary' && 'primary-classes',
        variant === 'secondary' && 'secondary-classes',
        className // User-provided overrides
      )}
    >
      {children}
    </button>
  );
}
```

**Why:** Prevents Tailwind class conflicts (e.g., `text-red-500 text-blue-500` → only blue applies).

### SEO & Meta Tags

Dynamic meta tags are updated in `App.jsx` based on route:

```javascript
useEffect(() => {
  document.title = meta.title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description);
  }
}, [routeInfo]);
```

**For blog posts:** Title and description auto-populated from post metadata.

### Responsive Design

Use Tailwind's responsive prefixes:

```javascript
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
  {/* Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px) */}
</div>
```

**For JavaScript logic:**

```javascript
import { useIsMobile } from '@/hooks/use-mobile';

function MyComponent() {
  const isMobile = useIsMobile(); // true if < 768px
  // ...
}
```

---

## Content Management

### Blog Post Workflow

#### 1. Create a New Post

Create a Markdown file in `public/posts/`:

```markdown
---
title: Your Post Title
date: 2025-01-14
authors: Roshan Shrestha
tags: molecular-dynamics, martini-3, simulation
excerpt: A brief summary of your post (1-2 sentences).
hero: /images/blog/your-image.jpg
---

# Your Post Title

Your content here. Supports GFM, math equations, images, etc.

## Math Example

Inline: $E = mc^2$

Block:
$$
\frac{\partial u}{\partial t} = \nabla^2 u
$$

## Code Example

```python
def simulate():
    print("Running simulation...")
```
```

#### 2. Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | No* | Post title (defaults to filename if missing) |
| `date` | No* | Publication date (ISO format; defaults to file mtime) |
| `authors` | No | Author name(s) (string or array) |
| `tags` | No | Comma-separated or array of tags |
| `excerpt` | No* | Brief summary (auto-generated if missing) |
| `hero` | No | Hero image URL (defaults to first image in content) |

*Auto-generated if missing, but recommended to provide explicitly.

#### 3. Generate Metadata

Run the sync script (or just start dev/build, which runs it automatically):

```bash
npm run sync:posts
```

**What it does:**
- Parses all `.md` files in `public/posts/`
- Extracts frontmatter and content
- Generates `src/data/posts.json` with metadata
- Generates `public/rss.xml` for RSS readers
- Calculates reading time (200 words/min)
- Sorts posts by date (newest first)

**Important:** Never manually edit `src/data/posts.json` - it's auto-generated.

#### 4. View Your Post

- **Development:** http://localhost:5173/blog/your-post-slug
- **Production:** https://shrestharoshan.com/blog/your-post-slug

Slug is derived from filename (e.g., `my-post.md` → `/blog/my-post`).

### Image Assets

- **Blog images:** `public/images/blog/` (or any path under `public/`)
- **Component assets:** `src/assets/` (bundled, optimized by Vite)
- **Profile/CV:** `public/` root

**Lazy loading:** Use `LazyImage` component for performance:

```javascript
import LazyImage from '@/components/LazyImage';

<LazyImage
  src='/images/blog/my-image.jpg'
  alt='Description'
  className='rounded-lg'
/>
```

### Publications & Research Data

Currently hardcoded in component files:
- **Publications:** `src/components/Publications.jsx`
- **Research areas:** `src/components/Research.jsx`

**Future improvement:** Consider extracting to JSON files for easier maintenance.

---

## Build & Deployment

### Build Process

```bash
npm run build
```

**Steps:**
1. Runs `npm run sync:posts` (prebuild hook)
2. Vite builds optimized production bundle → `dist/`
3. Code splitting creates multiple chunks:
   - `react-vendor` - React core
   - `react-router` - Routing
   - `markdown-katex` - Markdown rendering
   - `radix-ui` - UI primitives
   - `lucide` - Icons
   - `vendor` - Other dependencies
4. Copies `dist/index.html` to `dist/404.html` (SPA 404 handling)

**Output:** `dist/` directory ready for deployment

### GitHub Actions Deployment

**Trigger:** Push to `main` branch (or manual workflow dispatch)

**Pipeline (`.github/workflows/deploy.yml`):**
1. Checkout repository
2. Setup Node 20 with npm caching
3. `npm ci` (clean install from lock file)
4. `npm run build` (includes sync:posts)
5. Create `dist/.nojekyll` (disable Jekyll processing)
6. Upload `dist/` as Pages artifact
7. Deploy to GitHub Pages

**Production URL:** https://shrestharoshan.com (custom domain via CNAME)

### SPA Routing on GitHub Pages

**Problem:** GitHub Pages returns 404 for routes like `/about` (no `/about.html` file exists).

**Solution:** Copy `index.html` to `404.html`. When GitHub serves 404, it loads the SPA, which handles routing client-side.

```bash
# Done automatically in build script
cp dist/index.html dist/404.html
```

---

## Common Tasks

### Adding a New Page

1. **Create component:**

```javascript
// src/components/NewPage.jsx
import React from 'react';

function NewPage() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold'>New Page</h1>
    </div>
  );
}

export default NewPage;
```

2. **Add lazy import in App.jsx:**

```javascript
const NewPage = React.lazy(() => import('./components/NewPage'));
```

3. **Add route:**

```javascript
<Route path='/new-page' element={<NewPage />} />
```

4. **Add to Header navigation (if needed):**

Edit `src/components/Header.jsx` to include the link.

5. **Add SEO metadata:**

Update `SECTION_META` in `App.jsx`:

```javascript
newPage: {
  title: 'New Page | Roshan Shrestha',
  description: 'Description of the new page.',
}
```

### Adding a shadcn/ui Component

This project uses shadcn-style components (configured in `components.json`).

**Manual installation (recommended):**

1. Copy component from https://ui.shadcn.com
2. Place in `src/components/ui/`
3. Adjust imports to use `@/` alias

**Example:** Adding a Card component

```bash
# Download manually or copy from shadcn
# Place in src/components/ui/card.jsx
```

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm install react@latest

# Update all (use caution)
npm update
```

**Important:** Test thoroughly after major version bumps, especially for React, Vite, or Tailwind.

### Analyzing Bundle Size

```bash
npm run build

# Manually use rollup-plugin-visualizer if configured
# Check dist/ for chunk sizes
```

**Optimization tips:**
- Lazy-load heavy dependencies
- Review `vite.config.js` manual chunks
- Check for duplicate dependencies

### Debugging Build Issues

**Common issues:**

1. **Build fails after adding blog post:**
   - Check Markdown syntax
   - Verify frontmatter is valid YAML
   - Run `npm run sync:posts` manually to see errors

2. **404 in production but works locally:**
   - Ensure `dist/404.html` exists (check build script)
   - Verify GitHub Pages is enabled on `main` branch
   - Check custom domain CNAME settings

3. **Dark mode not persisting:**
   - Check localStorage is enabled in browser
   - Verify `DarkModeContext` is wrapping App
   - Check for console errors

4. **Slow page loads:**
   - Optimize images (compress before uploading)
   - Check network tab for large bundles
   - Verify lazy loading is working

---

## Important Files

### Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build config (alias, plugins, chunk splitting) |
| `eslint.config.js` | Linting rules |
| `jsconfig.json` | Path alias for VSCode/editors (`@/` → `src/`) |
| `components.json` | shadcn/ui component installation config |
| `package.json` | Dependencies, scripts, package manager |

### Key Scripts

| File | Purpose |
|------|---------|
| `scripts/sync-posts.mjs` | Blog metadata generator (posts.json, RSS) |

### Deployment

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | GitHub Actions CI/CD pipeline |
| `public/robots.txt` | Search engine crawler directives |
| `public/sitemap.xml` | Site structure for SEO |

### Entry Points

| File | Purpose |
|------|---------|
| `index.html` | HTML shell (loads main.jsx) |
| `src/main.jsx` | React entry point (ReactDOM.render) |
| `src/App.jsx` | Root component (routing, SEO, layout) |

---

## Best Practices for AI Assistants

### When Making Changes

1. **Read before writing:** Always read existing files before editing
2. **Preserve formatting:** Match existing code style (Prettier handles this)
3. **Test locally:** Suggest running `npm run dev` after changes
4. **Run linting:** `npm run lint` should pass
5. **Check build:** `npm run build` should succeed without errors
6. **Verify blog posts:** After adding/editing posts, run `npm run sync:posts`

### Code Quality

- Use `@/` alias for imports, not relative paths
- Apply Tailwind classes directly, avoid inline styles
- Keep components focused and single-purpose
- Extract repeated logic to hooks or utilities
- Comment non-obvious logic (but prefer self-documenting code)

### Accessibility

- Use semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- Ensure keyboard navigation works
- Provide alt text for images
- Respect `prefers-reduced-motion` (use `usePrefersReducedMotion` hook)
- Maintain color contrast ratios (WCAG AA minimum)

### Performance

- Lazy-load page components
- Use `LazyImage` for images below the fold
- Avoid unnecessary re-renders (memoization if needed)
- Keep bundle sizes reasonable (check Vite build output)

### Security

- No API keys or secrets in code (static site)
- Sanitize user input if adding forms (use validation)
- Keep dependencies updated (security patches)

### Git Workflow

- Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)
- Write clear commit messages explaining "why" not "what"
- Reference issues/PRs when applicable
- Test before pushing to main (deploys automatically)

### Branch Naming

When working on feature branches:
- Use descriptive names: `claude/feature-name-<session-id>`
- Session IDs ensure no conflicts
- Push to feature branch first, then create PR to main

---

## Troubleshooting

### Common Errors

**Error:** `Cannot find module '@/components/Header'`
- **Fix:** Check `jsconfig.json` has `@` alias configured
- Restart dev server or VS Code

**Error:** `posts.json is empty or missing`
- **Fix:** Run `npm run sync:posts` manually
- Ensure `.md` files exist in `public/posts/`

**Error:** `Dark mode not working`
- **Fix:** Check `DarkModeContext` is in `main.jsx`
- Verify localStorage is not blocked

**Error:** `Build succeeds but 404 on routes in production`
- **Fix:** Ensure `dist/404.html` exists after build
- Check GitHub Pages settings

**Error:** `Math equations not rendering`
- **Fix:** Verify KaTeX CSS is imported in `index.html`
- Check Markdown has correct syntax: `$inline$` or `$$\nblock\n$$`

---

## Additional Resources

- **Vite Docs:** https://vitejs.dev/
- **React Router:** https://reactrouter.com/
- **Tailwind CSS:** https://tailwindcss.com/
- **shadcn/ui:** https://ui.shadcn.com/
- **KaTeX:** https://katex.org/
- **GitHub Pages:** https://docs.github.com/en/pages

---

## Summary

This is a well-architected, modern React portfolio site using:
- **Vite** for lightning-fast builds
- **Tailwind CSS** for utility-first styling
- **Markdown + auto-generation** for effortless blog management
- **Lazy loading + code splitting** for optimal performance
- **GitHub Actions + Pages** for seamless deployment

Follow the conventions in this guide and AGENTS.md to maintain consistency and quality. When in doubt, read existing code for patterns, and always test locally before pushing to main.

Happy coding!
