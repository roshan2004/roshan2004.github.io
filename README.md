# Roshan Shrestha's Academic Website

This repository contains the source code for [shrestharoshan.com](https://shrestharoshan.com), a personal portfolio and blog focused on computational biophysics.

## Development

Install dependencies:

```bash
npm install
```

Start a local development server:

```bash
npm run dev
```

### Blog metadata

Markdown posts in `public/posts` include front matter (title, date, excerpt, etc.). Run the following to regenerate `src/data/posts.json` and `public/rss.xml` whenever posts change (this happens automatically before `npm run dev` and `npm run build`):

```bash
npm run sync:posts
```

## Building

Create a production build and copy `index.html` to `404.html`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Check the project with ESLint:

```bash
npm run lint
```

## License

No license has been specified.
