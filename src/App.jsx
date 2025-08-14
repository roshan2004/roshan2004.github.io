import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/*
 * Root application component.  Maintains the currently active section and
 * renders the corresponding component.  A new "blog" case has been added
 * to handle the blog section introduced for sharing posts and updates.
 */
function App() {
  const [activeSection, setActiveSection] = useState('home');

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
      case 'teaching':
        return <Teaching />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
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