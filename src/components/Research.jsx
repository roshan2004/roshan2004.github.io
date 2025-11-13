import React from 'react';
import {
  Microscope,
  Target,
  Lightbulb,
  BookOpen,
  Atom,
  Dna,
  Zap,
  Tag,
} from 'lucide-react';
import molecularDynamics from '../assets/molecular-dynamics.jpg';
import vmdVisualization from '../assets/vmd-visualization.png';
import computationalBiology from '../assets/computational-biology.png';

const Research = () => {
  // Research keywords/tags for SEO and quick overview
  const researchKeywords = [
    { text: 'Molecular Dynamics', color: 'blue' },
    { text: 'Coarse-Grained Modeling', color: 'purple' },
    { text: 'Martini Force Field', color: 'indigo' },
    { text: 'Computational Biophysics', color: 'green' },
    { text: 'Protein-Lipid Interactions', color: 'cyan' },
    { text: 'Free Energy Calculations', color: 'pink' },
    { text: 'Umbrella Sampling', color: 'orange' },
    { text: 'Metadynamics', color: 'red' },
    { text: 'Nanomaterials', color: 'teal' },
    { text: 'Membrane Proteins', color: 'violet' },
    { text: 'GROMACS', color: 'blue' },
    { text: 'VMD', color: 'emerald' },
    { text: 'Python', color: 'yellow' },
    { text: 'Data Analysis', color: 'slate' },
  ];

  const researchInterests = [
    {
      text: 'Computational modeling of biological systems',
      icon: <Dna className='w-5 h-5' />,
    },
    {
      text: 'Atomistic and coarse-grained molecular dynamics simulations',
      icon: <Atom className='w-5 h-5' />,
    },
    {
      text: 'Protein-lipid bilayer interactions',
      icon: <Microscope className='w-5 h-5' />,
    },
    {
      text: 'Free energy calculations (Umbrella Sampling, Metadynamics)',
      icon: <Zap className='w-5 h-5' />,
    },
    {
      text: 'Nanomaterial-biomolecule interactions',
      icon: <Target className='w-5 h-5' />,
    },
    {
      text: 'Polymers and Membrane Proteins',
      icon: <Lightbulb className='w-5 h-5' />,
    },
    {
      text: 'Data analysis for simulations (Python, NumPy, Matplotlib, Pandas)',
      icon: <BookOpen className='w-5 h-5' />,
    },
  ];

  // Helper function to get color classes for keywords
  const getKeywordColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-800',
      green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-800',
      cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-200 dark:hover:bg-cyan-800',
      pink: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800 hover:bg-pink-200 dark:hover:bg-pink-800',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 hover:bg-orange-200 dark:hover:bg-orange-800',
      red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800 hover:bg-red-200 dark:hover:bg-red-800',
      teal: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 hover:bg-teal-200 dark:hover:bg-teal-800',
      violet: 'bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800 hover:bg-violet-200 dark:hover:bg-violet-800',
      emerald: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-200 dark:hover:bg-emerald-800',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-800',
      slate: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-20 relative overflow-hidden transition-colors'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 animate-fade-in'>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6'>
            Research
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Exploring the frontiers of computational biophysics and molecular
            dynamics
          </p>
        </div>

        {/* Research Keywords Section */}
        <section className='max-w-6xl mx-auto mb-16 animate-slide-up delay-100'>
          <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center justify-center mb-6'>
              <Tag className='w-6 h-6 text-blue-600 dark:text-blue-400 mr-3' />
              <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>
                Research Keywords
              </h2>
            </div>
            <div className='flex flex-wrap gap-3 justify-center'>
              {researchKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 transform hover:scale-105 hover:shadow-md ${getKeywordColorClass(
                    keyword.color
                  )}`}
                >
                  {keyword.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className='max-w-6xl mx-auto mb-20 animate-slide-up delay-200'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50 dark:border-slate-700/50'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4'>
                  <Microscope className='w-8 h-8 text-white' />
                </div>
                <h2 className='text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                  Overview
                </h2>
              </div>
              <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed'>
                I hold a PhD in Computational Biophysics with expertise in
                computational modeling of biological systems and carbon-based
                nanomaterials. My research leverages advanced biophysical
                training and molecular dynamics simulations to enhance our
                understanding of complex biological interactions and the behavior
                of nanomaterials at the molecular level.
              </p>
            </div>

            <div className='relative animate-slide-in-right delay-400'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse'></div>
              <img
                src={molecularDynamics}
                alt='Molecular Dynamics Visualization'
                className='relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500'
              />
            </div>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className='max-w-6xl mx-auto mb-20 animate-slide-up delay-300'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='relative animate-slide-in-left delay-500'>
              <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse'></div>
              <img
                src={vmdVisualization}
                alt='VMD Visualization'
                className='relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500'
              />
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-green-100/50'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4'>
                  <Target className='w-8 h-8 text-white' />
                </div>
                <h2 className='text-3xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'>
                  Current Projects
                </h2>
              </div>
              <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200/50'>
                <h3 className='text-xl font-semibold text-slate-900 mb-3 flex items-center'>
                  <Atom className='w-6 h-6 mr-2 text-green-600' />
                  Nanoparticle Interactions with Glycophorin-A
                </h3>
                <p className='text-slate-700 leading-relaxed'>
                  Currently, I am involved in a molecular dynamics study
                  investigating the interactions between nanoparticles and
                  Glycophorin-A. This collaborative project aims to elucidate
                  the molecular mechanisms governing these interactions, which
                  is crucial for understanding nanoparticle biocompatibility and
                  potential biomedical applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests Section */}
        <section className='max-w-6xl mx-auto mb-20 animate-slide-up delay-400'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100/50'>
              <div className='flex items-center mb-8'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4'>
                  <Lightbulb className='w-8 h-8 text-white' />
                </div>
                <h2 className='text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
                  Research Interests
                </h2>
              </div>
              <div className='space-y-4'>
                {researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className='group flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'
                  >
                    <div className='flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 text-white'>
                      {interest.icon}
                    </div>
                    <span className='text-slate-700 group-hover:text-slate-900 transition-colors font-medium'>
                      {interest.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative animate-slide-in-right delay-600'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur-2xl opacity-20 animate-pulse'></div>
              <img
                src={computationalBiology}
                alt='Computational Biology Research'
                className='relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500'
              />
            </div>
          </div>
        </section>

        {/* Past Research Experience Section */}
        <section className='max-w-6xl mx-auto animate-slide-up delay-500'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100/50'>
            <div className='flex items-center mb-8'>
              <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4'>
                <BookOpen className='w-8 h-8 text-white' />
              </div>
              <h2 className='text-3xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                Past Research Experience
              </h2>
            </div>

            <div className='space-y-8'>
              {/* M.Sc. Research */}
              <div className='group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300'>
                <h3 className='text-xl font-semibold text-slate-900 mb-3 flex items-center'>
                  <Microscope className='w-6 h-6 mr-2 text-blue-600' />
                  M.Sc. Research (Central Department of Physics, Tribhuvan
                  University)
                </h3>
                <p className='text-slate-700 leading-relaxed'>
                  My Master's research involved working on both atomistic and
                  coarse-grained molecular dynamics simulations of proteins
                  embedded in lipid bilayers. During this period, I acquired
                  significant knowledge and practical skills in performing free
                  energy calculations using methods such as umbrella sampling
                  and enhanced collective variable sampling techniques like
                  metadynamics. I also gained proficiency in data analysis using
                  Python and its associated libraries (NumPy, Matplotlib,
                  Pandas). My thesis focused on "A MOLECULAR DYNAMICS STUDY IN
                  STRUCTURAL DYNAMICS OF A V717I SUBSTITUTION IN THE AMYLOID
                  PRECURSOR PROTEIN."
                </p>
              </div>

              {/* Graduate Research Assistant */}
              <div className='group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300'>
                <h3 className='text-xl font-semibold text-slate-900 mb-3 flex items-center'>
                  <Target className='w-6 h-6 mr-2 text-green-600' />
                  Graduate Research Assistant (GCK's Computational Lab,
                  Tribhuvan University)
                </h3>
                <p className='text-slate-700 leading-relaxed'>
                  As a research assistant, I supported Bachelor's and Master's
                  students in running Ab initio calculations and Molecular
                  Dynamics Simulations, further solidifying my expertise in
                  these computational techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
