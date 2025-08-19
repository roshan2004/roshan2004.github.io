import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

// Lazy load heavy components
const About = React.lazy(() => import('./components/About'));
const Research = React.lazy(() => import('./components/Research'));
const Publications = React.lazy(() => import('./components/Publications'));
const Code = React.lazy(() => import('./components/Code.jsx'));
const Blog = React.lazy(() => import('./components/Blog'));
const Post = React.lazy(() => import('./components/Post'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activePostSlug, setActivePostSlug] = useState(null); // NEW

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'research':
        return <Research />;
      case 'publications':
        return <Publications />;
      case 'code':
        return <Code />;
      case 'blog':
        // pass callback so Blog can open a single post
        return (
          <Blog
            onOpenPost={(slug) => {
              setActivePostSlug(slug);
              setActiveSection('post');
            }}
          />
        );
      case 'post': // NEW
        return (
          <Post slug={activePostSlug} onBack={() => setActiveSection('blog')} />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className='min-h-screen bg-slate-50'>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <Suspense
          fallback={
            <div className='flex items-center justify-center min-h-[60vh]'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          }
        >
          {renderSection()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
