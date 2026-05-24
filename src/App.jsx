import React, { Suspense, useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import postsData from './data/posts.json';
import { buildRouteMeta } from './data/siteMeta';
import './App.css';
import usePageTracking from './hooks/usePageTracking';

const About = React.lazy(() => import('./components/About'));
const Publications = React.lazy(() => import('./components/Publications'));
const Code = React.lazy(() => import('./components/Code.jsx'));
const Projects = React.lazy(() => import('./components/Projects.jsx'));
const ProjectContractsDB = React.lazy(() =>
  import('./components/projects/ContractsDB.jsx')
);
const Blog = React.lazy(() => import('./components/Blog'));
const Post = React.lazy(() => import('./components/Post'));
const Contact = React.lazy(() => import('./components/Contact'));

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setRouteJsonLd(data) {
  const id = 'route-jsonld';
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function App() {
  const location = useLocation();
  usePageTracking(location.pathname, location.search);

  const meta = useMemo(
    () => buildRouteMeta(location.pathname, postsData),
    [location.pathname]
  );

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertCanonical(meta.canonicalUrl);

    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', meta.canonicalUrl);
    upsertMeta('property', 'og:image', meta.ogImage);
    upsertMeta('property', 'og:type', meta.ogType);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', meta.ogImage);

    setRouteJsonLd(meta.jsonLd || null);
  }, [meta]);

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
            <Route path='/projects' element={<Projects />} />
            <Route
              path='/projects/contractsdb'
              element={<ProjectContractsDB />}
            />
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
