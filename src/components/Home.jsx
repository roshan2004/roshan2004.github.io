import React from 'react';
import { ArrowRight, FileDown, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage.jsx';
import profileImage from '../assets/profile-hero.jpg';

const Home = () => {
  const navigate = useNavigate();

  const skills = [
    'Python',
    'C++',
    'Bash',
    'GROMACS',
    'Power Automate',
    'LLM / AI',
    'React',
    'SharePoint',
  ];

  const recentWork = [
    {
      tag: 'publication',
      title: 'Biomacromolecules',
      detail: 'Martini 3 model for Chitosan',
      date: '2025.10',
    },
    {
      tag: 'publication',
      title: 'J. Chem. Theory Comput.',
      detail: 'Martini 3 models for carbon nanomaterials',
      date: '2025.09',
    },
    {
      tag: 'milestone',
      title: 'PhD Defense',
      detail: 'Computational Biophysics, CNRS Lyon',
      date: '2025.09',
    },
  ];

  const navModules = [
    {
      label: 'Publications',
      path: '/publications',
      count: '3 articles + 1 preprint',
    },
    {
      label: 'Code & Software',
      path: '/code',
      count: '2 open-source tools',
    },
    {
      label: 'Blog',
      path: '/blog',
      count: 'MD methods & tutorials',
    },
    {
      label: 'About',
      path: '/about',
      count: 'CV, education, interests',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero with dot-grid background */}
      <section className='relative overflow-hidden'>
        {/* Dot grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.035] dark:opacity-[0.06]'
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Faint grid lines */}
        <div
          className='absolute inset-0 opacity-[0.03] dark:opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '120px 120px',
          }}
        />

        <div className='relative max-w-5xl mx-auto px-6 py-20 md:py-28'>
          <div className='grid md:grid-cols-[1fr_auto] gap-12 items-start'>
            <div>
              <p className='font-mono text-xs text-blue-600 dark:text-blue-400 tracking-wider mb-4 uppercase'>
                Research Engineer @ Materialise NV
              </p>
              <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6'>
                Computational science,{' '}
                <br className='hidden md:block' />
                AI, and automation.
              </h1>
              <p className='text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed mb-8'>
                I'm Roshan Shrestha. I build at the intersection of molecular
                simulations and LLM-powered engineering workflows &mdash; turning
                complex computational problems into automated solutions.
              </p>

              <div className='flex flex-wrap gap-1.5 mb-8'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap gap-3'>
                <a
                  href='/Roshan_Shrestha_CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors'
                >
                  <FileDown className='w-4 h-4' />
                  Download CV
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className='inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors'
                >
                  <Mail className='w-4 h-4' />
                  Get in touch
                </button>
              </div>
            </div>

            <div className='hidden md:block'>
              <LazyImage
                src={profileImage}
                alt='Roshan Shrestha'
                wrapperClassName='w-56 lg:w-64'
                imgClassName='w-full rounded-2xl grayscale-[20%]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent — dashboard module */}
      <section className='bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800'>
        <div className='max-w-5xl mx-auto px-6 py-14'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500'>
              // recent
            </h2>
            <span className='font-mono text-xs text-slate-300 dark:text-slate-600'>
              {recentWork.length} entries
            </span>
          </div>

          <div className='grid md:grid-cols-3 gap-4'>
            {recentWork.map((item) => (
              <div
                key={item.title}
                className='p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all'
              >
                <div className='flex items-center justify-between mb-3'>
                  <span className='font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'>
                    {item.tag}
                  </span>
                  <span className='font-mono text-xs text-slate-400 dark:text-slate-500'>
                    {item.date}
                  </span>
                </div>
                <h3 className='font-semibold text-slate-900 dark:text-white text-sm mb-1'>
                  {item.title}
                </h3>
                <p className='text-xs text-slate-500 dark:text-slate-400 leading-relaxed'>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick nav — structured panels */}
      <section>
        <div className='max-w-5xl mx-auto px-6 py-14'>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            // explore
          </h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {navModules.map((mod) => (
              <button
                key={mod.path}
                onClick={() => navigate(mod.path)}
                className='group text-left p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-sm transition-all'
              >
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {mod.label}
                  </span>
                  <ArrowRight className='w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors' />
                </div>
                <span className='font-mono text-[11px] text-slate-400 dark:text-slate-500'>
                  {mod.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
