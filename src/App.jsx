import React, { Suspense, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import postsData from './data/posts.json';
import './App.css';
import usePageTracking from './hooks/usePageTracking';

const About = React.lazy(() => import('./components/About'));
const Publications = React.lazy(() => import('./components/Publications'));
const Code = React.lazy(() => import('./components/Code.jsx'));
const Blog = React.lazy(() => import('./components/Blog'));
const Post = React.lazy(() => import('./components/Post'));
const Contact = React.lazy(() => import('./components/Contact'));

const SECTION_ROUTES = {
  home: '/',
  about: '/about',
  publications: '/publications',
  code: '/code',
  blog: '/blog',
  contact: '/contact',
};

const DEFAULT_META = {
  title: 'Roshan Shrestha — Research Engineer',
  description:
    'Roshan Shrestha — Research Engineer at Materialise NV. Computational biophysics, automation, and AI-assisted workflows.',
};

const SECTION_META = {
  home: DEFAULT_META,
  about: {
    title: 'About | Roshan Shrestha',
    description:
      'Background, education, and experience of Roshan Shrestha.',
  },
  publications: {
    title: 'Publications | Roshan Shrestha',
    description:
      'Published articles and preprints in computational biophysics.',
  },
  code: {
    title: 'Code & Software | Roshan Shrestha',
    description:
      'Open-source tools for Martini 3 simulations and computational workflows.',
  },
  blog: {
    title: 'Blog | Roshan Shrestha',
    description:
      'Articles on molecular dynamics, computational methods, and engineering.',
  },
  contact: {
    title: 'Contact | Roshan Shrestha',
    description:
      'Get in touch for collaborations or professional inquiries.',
  },
};

const BLOG_PREFIX = '/blog/';

function getRouteInfo(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath.startsWith(BLOG_PREFIX) && normalizedPath !== '/blog') {
    return {
      section: 'post',
      slug: normalizedPath.slice(BLOG_PREFIX.length),
    };
  }

  const matchEntry = Object.entries(SECTION_ROUTES).find(
    ([, path]) => path === normalizedPath
  );
  return {
    section: matchEntry ? matchEntry[0] : 'home',
  };
}

function App() {
  const location = useLocation();
  usePageTracking(location.pathname, location.search);

  const routeInfo = useMemo(
    () => getRouteInfo(location.pathname),
    [location.pathname]
  );

  useEffect(() => {
    const meta = { ...DEFAULT_META, ...(SECTION_META[routeInfo.section] || {}) };

    if (routeInfo.section === 'post' && routeInfo.slug) {
      const postData = postsData.find((post) => post.slug === routeInfo.slug);
      if (postData) {
        meta.title = `${postData.title} | Roshan Shrestha`;
        meta.description = postData.excerpt || meta.description;
      } else {
        meta.title = `Blog Post | Roshan Shrestha`;
      }
    }

    document.title = meta.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }, [routeInfo]);

  return (
    <div className='min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors'>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className='flex items-center justify-center min-h-[60vh]'>
              <div className='animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-t-blue-600'></div>
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/research' element={<Navigate to='/' replace />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/code' element={<Code />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<Post />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
