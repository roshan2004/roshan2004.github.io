import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* About Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Roshan Shrestha</h3>
            <p className='text-slate-300 leading-relaxed'>
              PhD Researcher in Computational Biophysics, specializing in
              molecular dynamics simulations and computational modeling of
              biological systems and nanomaterials.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <Mail className='w-4 h-4 mr-3 text-blue-400' />
                <a
                  href='mailto:mail@shrestharoshan.com'
                  className='text-slate-300 hover:text-white transition-colors'
                >
                  mail@shrestharoshan.com
                </a>
              </div>
              <div className='flex items-start'>
                <MapPin className='w-4 h-4 mr-3 text-blue-400 mt-1' />
                <span className='text-slate-300'>
                  Materialise HQ, Technologielaan 15, 3001 Leuven, Belgium
                </span>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Research Areas</h3>
            <div className='space-y-2'>
              <div className='text-slate-300'>• Computational Biophysics</div>
              <div className='text-slate-300'>
                • Molecular Dynamics Simulations
              </div>
              <div className='text-slate-300'>
                • Nanomaterial-Biomolecule Interactions
              </div>
              <div className='text-slate-300'>• Coarse-Grained Modeling</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-slate-700 mt-8 pt-8 text-center'>
          <div className='flex items-center justify-center mb-4'>
            <Calendar className='w-4 h-4 mr-2 text-blue-400' />
            <span className='text-slate-300'>
              © {currentYear} Roshan Shrestha. All rights reserved.
            </span>
          </div>
          <p className='text-slate-400 text-sm'>
            Built with React and Tailwind CSS. Designed for academic excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
