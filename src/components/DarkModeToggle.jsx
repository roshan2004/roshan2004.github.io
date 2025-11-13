import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors'
      aria-label='Toggle dark mode'
    >
      {darkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
    </button>
  );
};

export default DarkModeToggle;
