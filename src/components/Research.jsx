import React from 'react';
import {
  Microscope,
  Target,
  Lightbulb,
  BookOpen,
  Atom,
  Dna,
  Zap,
} from 'lucide-react';
import molecularDynamics from '../assets/molecular-dynamics.jpg';
import vmdVisualization from '../assets/vmd-visualization.png';
import computationalBiology from '../assets/computational-biology.png';

const Research = () => {
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

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 animate-fade-in'>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6'>
            Research
          </h1>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
            Exploring the frontiers of computational biophysics and molecular
            dynamics
          </p>
        </div>

        {/* Overview Section */}
        <section className='max-w-6xl mx-auto mb-20 animate-slide-up delay-200'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/50'>
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4'>
                  <Microscope className='w-8 h-8 text-white' />
                </div>
                <h2 className='text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  Overview
                </h2>
              </div>
              <p className='text-lg text-slate-700 leading-relaxed'>
                I am a PhD student specializing in Computational Biophysics with
                a primary focus on the computational modeling of biological
                systems and nanomaterials. My research aims to leverage advanced
                biophysical training and molecular dynamics simulations to
                enhance our understanding of complex biological interactions and
                the behavior of nanomaterials at the molecular level.
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
