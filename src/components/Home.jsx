import React, { useEffect } from 'react';
import {
  ArrowRight,
  BookOpen,
  User,
  FlaskConical,
  Atom,
  Microscope,
  FileDown,
  Newspaper,
  Calendar,
  Award,
  Presentation,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import LazyImage from './LazyImage.jsx';
import profileImage from '../assets/profile-hero.jpg';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion.js';

/*
 * Home component
 *
 * This is a copy of the original home page component with one key change:
 * the size of the "Roshan Shrestha" heading has been reduced to better fit
 * the design.  The original used text-5xl/md:text-6xl/lg:text-7xl.  We’ve
 * decreased each step by one size (4xl/5xl/6xl).
 */
const Home = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    return () => {
      img.onload = null;
    };
  }, []);

  const motionClass = (value) => (prefersReducedMotion ? '' : value);

  // News and Updates items - Add your latest news here
  const newsItems = [
    {
      type: 'publication',
      icon: <BookOpen className='w-5 h-5' />,
      title: 'Paper Published in Biomacromolecules',
      description: 'Martini 3 Coarse-Grained Model for Chitosan with Tunable Acetylation',
      date: 'October 29, 2025',
      color: 'blue',
    },
    {
      type: 'publication',
      icon: <BookOpen className='w-5 h-5' />,
      title: 'Paper Published in JCTC',
      description: 'Martini 3 coarse-grained models for carbon nanomaterials',
      date: 'September 3, 2025',
      color: 'green',
    },
    {
      type: 'award',
      icon: <Award className='w-5 h-5' />,
      title: 'PhD Defense Successfully Completed',
      description: 'Successfully defended PhD thesis in Computational Biophysics',
      date: 'September 23, 2025',
      color: 'purple',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden transition-colors'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl ${motionClass('animate-pulse')}`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl ${motionClass('animate-pulse delay-1000')}`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl ${motionClass('animate-pulse delay-500')}`}
        ></div>
      </div>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Text Content */}
          <div className='text-center lg:text-left'>
            <div
              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 ${motionClass('animate-bounce')}`}
            >
              <Atom className='w-4 h-4 mr-2' />
              Computational Biophysics Researcher
            </div>
            {/* Reduced the size of the hero heading even further by one Tailwind size scale */}
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6 ${motionClass('animate-fade-in')}`}
            >
              Roshan Shrestha
            </h1>
            <p className={`text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 ${motionClass('animate-slide-up')}`}>
              Research Engineer at Materialise NV | PhD in Computational Biophysics
            </p>
            {/* News Chip removed post-defense */}
            <p
              className={`text-lg text-slate-700 dark:text-slate-300 mb-12 leading-relaxed ${motionClass('animate-slide-up delay-200')}`}
            >
              Welcome to my personal academic website. Here you can find
              information about my research interests, publications, teaching
              experience, and projects. My work focuses on leveraging
              computational modeling to understand complex biological systems
              and nanomaterials. Recently, I have also been exploring the
              integration of machine learning and artificial intelligence
              techniques to enhance molecular simulations, accelerate materials
              discovery, and gain deeper insights into biomolecular processes.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${motionClass('animate-slide-up delay-300')}`}
            >
              <Button
                onClick={() => navigate('/research')}
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
              >
                Explore My Research <Microscope className='ml-2 w-5 h-5' />
              </Button>
              <Button
                asChild
                variant='outline'
                className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105'
              >
                <a
                  href='/Roshan_Shrestha_CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download CV <FileDown className='ml-2 w-5 h-5' />
                </a>
              </Button>
            </div>

            {/* Industry Expertise Highlight */}
            <div
              className={`mt-8 max-w-xl mx-auto lg:mx-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-100/60 dark:border-slate-700/60 rounded-2xl p-6 shadow-lg ${motionClass(
                'animate-slide-up delay-400'
              )}`}
            >
              <h2 className='text-lg font-semibold text-slate-900 dark:text-white mb-3'>
                Industry Expertise
              </h2>
              <ul className='list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm'>
                <li>LLM-assisted workflows for research and documentation</li>
                <li>Power Automate flows for approvals, notifications, routing</li>
                <li>Automation across Teams, SharePoint, Microsoft 365</li>
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`relative ${motionClass('animate-fade-in delay-400')}`}>
            <div className='relative'>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-30 ${motionClass('animate-pulse')}`}
              ></div>
              <LazyImage
                src={profileImage}
                alt='Roshan Shrestha'
                wrapperClassName='w-full max-w-md mx-auto'
                imgClassName='w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500'
              />
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg ${motionClass('animate-bounce delay-1000')}`}
              >
                <FlaskConical className='w-12 h-12 text-white' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className='container mx-auto px-4 py-16 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <Newspaper className='w-8 h-8 text-blue-600 dark:text-blue-400' />
              <h2 className='text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent'>
                Latest News & Updates
              </h2>
            </div>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              Recent achievements, publications, and milestones
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {newsItems.map((item, index) => {
              const colorClasses = {
                blue: 'from-blue-500 to-cyan-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                green: 'from-green-500 to-emerald-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                purple: 'from-purple-500 to-pink-600 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                orange: 'from-orange-500 to-red-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
              };

              return (
                <div
                  key={index}
                  className={`group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg border-2 ${
                    colorClasses[item.color]?.split(' ').slice(2).join(' ') || colorClasses.blue.split(' ').slice(2).join(' ')
                  } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${
                      colorClasses[item.color]?.split(' ').slice(0, 2).join(' ') || colorClasses.blue.split(' ').slice(0, 2).join(' ')
                    } text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <div className='flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3'>
                    <Calendar className='w-4 h-4' />
                    <span>{item.date}</span>
                  </div>
                  <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className='container mx-auto px-4 pb-20 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-300 bg-clip-text text-transparent mb-4'>
            Explore My Work
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
            Discover my research contributions, academic publications, and
            professional journey
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* Research Card */}
          <div className='group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50 dark:border-slate-700/50'>
            <div className='relative mb-6'>
              <div className='flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                <FlaskConical className='w-10 h-10 text-white' />
              </div>
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full ${motionClass('animate-ping')}`}
              ></div>
            </div>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
              My Research
            </h3>
            <p className='text-slate-600 dark:text-slate-400 mb-8 text-center leading-relaxed'>
              Explore my work on biological systems and nanomaterials using
              computational modeling and molecular dynamics simulations.
            </p>
            <div className='text-center'>
              <Button
                onClick={() => navigate('/research')}
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:shadow-lg transition-all duration-300'
              >
                Learn More{' '}
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          </div>

          {/* Publications Card */}
          <div className='group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/50 dark:border-slate-700/50'>
            <div className='relative mb-6'>
              <div className='flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                <BookOpen className='w-10 h-10 text-white' />
              </div>
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full ${motionClass('animate-ping delay-300')}`}
              ></div>
            </div>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
              Publications
            </h3>
            <p className='text-slate-600 dark:text-slate-400 mb-8 text-center leading-relaxed'>
              Browse my published articles and works in preparation,
              contributing to the field of computational biophysics.
            </p>
            <div className='text-center'>
              <Button
                onClick={() => navigate('/publications')}
                className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group-hover:shadow-lg transition-all duration-300'
              >
                View Publications{' '}
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          </div>

          {/* About Me Card */}
          <div className='group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100/50 dark:border-slate-700/50'>
            <div className='relative mb-6'>
              <div className='flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300'>
                <User className='w-10 h-10 text-white' />
              </div>
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full ${motionClass('animate-ping delay-700')}`}
              ></div>
            </div>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
              About Me
            </h3>
            <p className='text-slate-600 dark:text-slate-400 mb-8 text-center leading-relaxed'>
              Discover more about my academic journey, educational background,
              and research interests in computational biophysics.
            </p>
            <div className='text-center'>
              <Button
                onClick={() => navigate('/about')}
                className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:shadow-lg transition-all duration-300'
              >
                Read My Bio{' '}
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
