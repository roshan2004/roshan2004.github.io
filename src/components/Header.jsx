import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

/*
 * Header component
 *
 * Provides navigation across the different sections of the portfolio.  A
 * "Blog" tab has been added to the navigation items so readers can access
 * the new blog section.  The component works responsively, collapsing
 * navigation items into a menu on smaller screens.
 */
const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation items.  Adding a blog entry integrates the new
  // section into both desktop and mobile menus.
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'code', label: 'Code & Software' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className='bg-slate-900 text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo/Name */}
          <div className='text-xl font-bold'>
            <button
              onClick={() => setActiveSection('home')}
              className='hover:text-blue-300 transition-colors'
            >
              Roshan Shrestha
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-700 hover:text-blue-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden pb-4'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-700 hover:text-blue-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
