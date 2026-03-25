import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-slate-100 dark:border-slate-800'>
      <div className='max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400 dark:text-slate-500'>
        <span>&copy; {currentYear} Roshan Shrestha</span>
        <div className='flex items-center gap-6'>
          <a
            href='mailto:mail@shrestharoshan.com'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            mail@shrestharoshan.com
          </a>
          <a
            href='https://github.com/roshan2004'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/roshanshrestha2004/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
