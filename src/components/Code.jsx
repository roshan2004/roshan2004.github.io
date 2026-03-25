import React from 'react';
import { ExternalLink } from 'lucide-react';
import LazyImage from './LazyImage.jsx';
import grapheneImage from '../assets/code/GRA_AA_CG_model.png';
import fullereneImage from '../assets/code/fullerene_M3.png';

const Code = () => {
  const tools = [
    {
      name: 'Martini 3 model of Graphene',
      description:
        'Generates a Martini 3 model of both finite and infinite graphene sheets for MD simulations with GROMACS. Outputs .gro and .itp files.',
      tags: ['Martini 3', 'Graphene', 'CG MD'],
      url: 'https://github.com/MoMS-MMSB/Martini3-Graphene',
      image: grapheneImage,
      aspectRatio: '2100 / 1036',
    },
    {
      name: 'Martini 3 model of Fullerene',
      description:
        'Generates a Martini 3 model of Fullerene for MD simulations with GROMACS. Outputs .gro and .itp files.',
      tags: ['Fullerene', 'Martini 3', 'CG MD', 'GROMACS'],
      url: 'https://github.com/MoMS-MMSB/Martini3-Fullerene',
      image: fullereneImage,
      aspectRatio: '896 / 883',
    },
  ];

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900/30'>
      <div className='max-w-3xl mx-auto px-6 py-20'>
        <div className='flex items-baseline justify-between mb-12'>
          <h1 className='text-3xl font-bold text-slate-900 dark:text-white'>
            Code & Software
          </h1>
          <a
            href='https://github.com/roshan2004'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline'
          >
            GitHub
            <ExternalLink className='w-3.5 h-3.5' />
          </a>
        </div>

        <div className='space-y-10'>
          {tools.map((tool, idx) => (
            <article
              key={idx}
              className='border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-md transition-all bg-white dark:bg-slate-800/50'
            >
              {tool.image && (
                <div className='max-h-64 overflow-hidden'>
                  <LazyImage
                    src={tool.image}
                    alt={tool.name}
                    wrapperClassName='w-full'
                    aspectRatio={tool.aspectRatio}
                    imgClassName='w-full h-auto object-cover object-center'
                  />
                </div>
              )}
              <div className='p-6'>
                <h2 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                  {tool.name}
                </h2>
                <p className='text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed'>
                  {tool.description}
                </p>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-wrap gap-2'>
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2.5 py-0.5 text-xs rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline shrink-0 ml-4'
                  >
                    View
                    <ExternalLink className='w-3.5 h-3.5' />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Code;
