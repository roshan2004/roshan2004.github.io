import React from 'react';

const About = () => {
  const interests = [
    'Nanomaterials',
    'Polymers',
    'Membrane Proteins',
    'Protein-lipid interactions',
    'Computational Biophysics',
    'Molecular Dynamics',
    'LLM & AI Workflows',
    'Process Automation',
    'Graphics Design',
    'Trekking',
  ];

  return (
    <div className='min-h-screen'>
      <div className='max-w-3xl mx-auto px-6 py-20'>
        <h1 className='text-3xl font-bold text-slate-900 dark:text-white mb-12'>
          About
        </h1>

        {/* Bio */}
        <section className='mb-14'>
          <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>
            I am a Research Engineer at Materialise NV. I recently completed my
            PhD in Computational Biophysics in Prof. Luca Monticelli's group
            (MMSB, CNRS), where I specialized in computational modeling of
            biological macromolecules and nanomaterials using biophysical
            principles and molecular dynamics simulations. Previously, I
            obtained my M.Sc. in Theoretical Physics at the Central Department
            of Physics, Tribhuvan University.
          </p>
        </section>

        {/* Experience */}
        <section className='mb-14'>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            //&nbsp;Experience
          </h2>
          <div className='border-l-2 border-blue-200 dark:border-blue-900 pl-6 space-y-8'>
            <div>
              <h3 className='font-semibold text-slate-900 dark:text-white'>
                Research Engineer
              </h3>
              <p className='text-slate-500 dark:text-slate-400 text-sm'>
                Materialise NV &middot; 2025 &ndash; Present
              </p>
              <ul className='mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1'>
                <li>LLM-assisted workflows for research and documentation</li>
                <li>Power Automate flows for approvals, notifications, routing</li>
                <li>Automation across Teams, SharePoint, Microsoft 365</li>
                <li>Rapid prototyping of internal tools</li>
                <li>Best-practice guardrails for responsible AI usage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className='mb-14'>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            //&nbsp;Education
          </h2>
          <div className='border-l-2 border-blue-200 dark:border-blue-900 pl-6 space-y-8'>
            <div>
              <h3 className='font-semibold text-slate-900 dark:text-white'>
                PhD in Computational Biophysics
              </h3>
              <p className='text-slate-500 dark:text-slate-400 text-sm'>
                University of Lyon 1 &middot; 2021 &ndash; 2025
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-slate-900 dark:text-white'>
                M.Sc. in Physics
              </h3>
              <p className='text-slate-500 dark:text-slate-400 text-sm'>
                Tribhuvan University
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-slate-900 dark:text-white'>
                B.Sc. in Physics
              </h3>
              <p className='text-slate-500 dark:text-slate-400 text-sm'>
                Patan Multiple College, Tribhuvan University &middot; 2013
              </p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            //&nbsp;Interests
          </h2>
          <div className='flex flex-wrap gap-2'>
            {interests.map((interest) => (
              <span
                key={interest}
                className='px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
