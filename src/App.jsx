import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Code from './components/Code.jsx';
import Blog from './components/Blog';
import Post from './components/Post'; // NEW
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

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
          <Post
            slug={activePostSlug}
            onBack={() => setActiveSection('blog')}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
