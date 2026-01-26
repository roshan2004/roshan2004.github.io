import React from 'react';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  const interests = [
    'Nanomaterials',
    'Polymers',
    'Membrane Proteins',
    'Protein-lipid interactions',
    'Computational Biophysics',
    'Molecular Dynamics Simulations',
    'Graphics Design',
    'Trekking',
    'Hiking',
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16'>
          About Me
        </h1>

        {/* Biography Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-6'>
              Biography
            </h2>
            <p className='text-lg text-slate-700 leading-relaxed'>
              I am a Research Engineer at Materialise NV. I recently completed
              my PhD in Computational Biophysics in Prof. Luca Monticelli's
              group (MMSB, CNRS), where I specialized in computational modeling
              of biological macromolecules and nanomaterials using biophysical
              principles and molecular dynamics simulations. Previously, I
              obtained my M.Sc. in Theoretical Physics at the Central
              Department of Physics, Tribhuvan University.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-8'>
              Experience
            </h2>
            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center'>
                    <Briefcase className='w-6 h-6 text-indigo-600' />
                  </div>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    Research Engineer
                  </h3>
                  <div className='text-slate-700'>Materialise NV</div>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>2025 – Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-6'>
              Industry Expertise
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700'>
              <li>LLM-assisted workflows for research and technical documentation.</li>
              <li>Power Automate flow design for approvals, notifications, and data routing.</li>
              <li>Process automation across Teams, SharePoint, and Microsoft 365.</li>
              <li>Rapid prototyping of internal tools to streamline operations.</li>
              <li>Best-practice guardrails for responsible AI usage.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-8'>
              Education
            </h2>
            <div className='space-y-6'>
              {/* PhD */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <GraduationCap className='w-6 h-6 text-blue-600' />
                  </div>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    PhD in Computational Biophysics
                  </h3>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>2021 - 2025</span>
                  </div>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>
                      Institut de Biologie et Chimie des Protéines (IBCP),
                      University of Lyon 1, Lyon, France
                    </span>
                  </div>
                </div>
              </div>

              {/* Master's */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <GraduationCap className='w-6 h-6 text-green-600' />
                  </div>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    Master's Degree in Science (Physics)
                  </h3>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>2019, CGPA 3.48/4.0</span>
                  </div>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>
                      Central Department of Physics, Tribhuvan University,
                      Kirtipur, Kathmandu
                    </span>
                  </div>
                </div>
              </div>

              {/* Bachelor's */}
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <GraduationCap className='w-6 h-6 text-purple-600' />
                  </div>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-xl font-semibold text-slate-900'>
                    Bachelor's Degree in Science (Major in Physics)
                  </h3>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>2013</span>
                  </div>
                  <div className='flex items-center text-slate-600 mt-1'>
                    <MapPin className='w-4 h-4 mr-2' />
                    <span>
                      Patan Multiple College, Tribhuvan University, Patan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-6'>
              Interests
            </h2>
            <div className='flex flex-wrap gap-3'>
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors'
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
