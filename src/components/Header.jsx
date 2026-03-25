import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/', end: true },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'publications', label: 'Publications', path: '/publications' },
    { id: 'code', label: 'Code', path: '/code' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header className='border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50 transition-colors'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          <NavLink
            to='/'
            end
            className='font-mono text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-tight'
          >
            Roshan Shrestha
          </NavLink>

          {/* Desktop */}
          <nav className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className='ml-2'>
              <DarkModeToggle />
            </div>
          </nav>

          {/* Mobile */}
          <div className='md:hidden flex items-center gap-2'>
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-1.5 text-slate-600 dark:text-slate-400'
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className='md:hidden pb-4 border-t border-slate-100 dark:border-slate-800 pt-2'>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
