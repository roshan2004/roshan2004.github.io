import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import contractsdbImage from '../assets/projects/contractsdb.webp';

const projects = [
  {
    slug: 'contractsdb',
    title: 'ContractsDB Agent',
    description:
      'AI-powered contract management built as a Teams chatbot — upload to structured SharePoint deposit in one conversation.',
    tags: [
      'Copilot Studio',
      'Power Automate',
      'GPT-4o',
      'SharePoint',
      'Dataverse',
    ],
    accent: 'from-blue-500/15 via-indigo-500/10 to-purple-500/15',
    image: contractsdbImage,
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900/30'>
      <div className='max-w-5xl mx-auto px-6 py-20'>
        <div className='mb-12'>
          <h1 className='text-3xl font-bold text-slate-900 dark:text-white mb-3'>
            Projects
          </h1>
          <p className='text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed'>
            Selected engineering work — applied LLMs, automation pipelines, and
            enterprise workflows.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className='group flex flex-col border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-md transition-all'
            >
              {project.image ? (
                <div className='h-40 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-800/50 p-3'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-full w-auto object-contain'
                  />
                </div>
              ) : (
                <div
                  className={`relative h-40 bg-gradient-to-br ${project.accent} flex items-center justify-center overflow-hidden`}
                >
                  <div
                    className='absolute inset-0 opacity-[0.08] dark:opacity-[0.12]'
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, currentColor 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <span className='relative font-mono text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300'>
                    {project.slug}
                  </span>
                </div>
              )}
              <div className='flex flex-col flex-1 p-5'>
                <h2 className='text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {project.title}
                </h2>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1.5 mb-4'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400'>
                  View project
                  <ArrowRight className='w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
