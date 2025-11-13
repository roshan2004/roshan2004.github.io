import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

/*
 * Header component
 *
 * Provides navigation across the different sections of the portfolio.  A
 * "Blog" tab has been added to the navigation items so readers can access
 * the new blog section.  The component works responsively, collapsing
 * navigation items into a menu on smaller screens.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation items.  Adding a blog entry integrates the new
  // section into both desktop and mobile menus.
  const navItems = [
    { id: 'home', label: 'Home', path: '/', end: true },
    { id: 'about', label: 'About Me', path: '/about' },
    { id: 'research', label: 'Research', path: '/research' },
    { id: 'publications', label: 'Publications', path: '/publications' },
    { id: 'code', label: 'Code & Software', path: '/code' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const linkBaseClasses =
    'px-3 py-2 rounded-md transition-colors hover:bg-slate-700 hover:text-blue-300';

  return (
    <header className='bg-slate-900 dark:bg-slate-950 text-white shadow-lg sticky top-0 z-50 transition-colors'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo/Name */}
          <div className='text-xl font-bold'>
            <NavLink to='/' end className='hover:text-blue-300 transition-colors'>
              Roshan Shrestha
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive ? 'bg-blue-600 text-white' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <DarkModeToggle />
          </nav>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className='md:hidden flex items-center gap-2'>
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden pb-4'>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left ${linkBaseClasses} ${
                    isActive ? 'bg-blue-600 text-white' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
