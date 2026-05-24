export const SITE_URL = 'https://shrestharoshan.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const DEFAULT_META = {
  title: 'Roshan Shrestha — Research Engineer',
  description:
    'Roshan Shrestha — Research Engineer at Materialise NV. Computational biophysics, automation, and AI-assisted workflows.',
};

// Single source of truth for static routes: drives per-page meta,
// build-time prerendering, and sitemap generation.
export const STATIC_ROUTES = [
  {
    path: '/',
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About | Roshan Shrestha',
    description: 'Background, education, and experience of Roshan Shrestha.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/publications',
    title: 'Publications | Roshan Shrestha',
    description: 'Published articles and preprints in computational biophysics.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/code',
    title: 'Code & Software | Roshan Shrestha',
    description:
      'Open-source tools for Martini 3 simulations and computational workflows.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/projects',
    title: 'Projects | Roshan Shrestha',
    description:
      'Selected engineering projects combining LLMs, automation, and enterprise workflows.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/projects/contractsdb',
    title: 'ContractsDB Agent | Roshan Shrestha',
    description:
      'ContractsDB Agent: a Teams chatbot for end-to-end contract management, built with Copilot Studio and Power Automate at Materialise.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/blog',
    title: 'Blog | Roshan Shrestha',
    description:
      'Articles on molecular dynamics, computational methods, and engineering.',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact | Roshan Shrestha',
    description: 'Get in touch for collaborations or professional inquiries.',
    changefreq: 'yearly',
    priority: '0.5',
  },
];

export const STATIC_ROUTE_META = Object.fromEntries(
  STATIC_ROUTES.map((route) => [
    route.path,
    { title: route.title, description: route.description },
  ])
);

export function toAbsoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

// Builds the head metadata + JSON-LD for any route. Shared by the runtime
// (App.jsx) and the build-time prerenderer so they never drift.
export function buildRouteMeta(pathname, posts = []) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;

  if (normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog') {
    const slug = normalizedPath.slice('/blog/'.length);
    const post = posts.find((item) => item.slug === slug);
    if (post) {
      const ogImage = toAbsoluteUrl(post.image || post.hero);
      const description = post.excerpt || DEFAULT_META.description;
      return {
        title: `${post.title} | Roshan Shrestha`,
        description,
        canonicalUrl,
        ogImage,
        ogType: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description,
          image: ogImage,
          datePublished: post.date,
          dateModified: post.date,
          keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
          author: { '@type': 'Person', name: 'Roshan Shrestha', url: SITE_URL },
          publisher: {
            '@type': 'Person',
            name: 'Roshan Shrestha',
            url: SITE_URL,
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        },
      };
    }
    return {
      title: 'Blog Post | Roshan Shrestha',
      description: DEFAULT_META.description,
      canonicalUrl,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: 'website',
      jsonLd: null,
    };
  }

  const meta = STATIC_ROUTE_META[normalizedPath] || DEFAULT_META;
  return {
    title: meta.title,
    description: meta.description,
    canonicalUrl,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    jsonLd: null,
  };
}
