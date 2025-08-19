import React from 'react';
import { GraduationCap, Users, Calendar, MapPin, Award } from 'lucide-react';

const Teaching = () => {
  const teachingExperience = [
    {
      title: 'High School Physics Teacher',
      institution: 'Bright Future Secondary School, Naikap, Kathmandu',
      period: 'April 2019 - July 2021',
      description:
        'Prepared and delivered lectures to high school physics students and supervised their laboratory works.',
      icon: '🏫',
    },
    {
      title: 'High School Physics Teacher',
      institution: 'Ed Mark Academy, Kalanki, Kathmandu',
      period: 'October 2018 - March 2019',
      description:
        'Prepared and delivered lectures to high school physics students and supervised their laboratory works.',
      icon: '🎓',
    },
    {
      title: 'Secondary School Science Teacher',
      institution: 'Rashmi Secondary School, Swoyambhu, Kathmandu',
      period: 'August 2011 - February 2014',
      description:
        'Taught Science to secondary level Science students (Grade 9 and 10) and supervised their laboratory works.',
      icon: '🔬',
    },
  ];

  const trainingsWorkshops = [
    {
      title: 'Trainer - Three days workshop on Fortran and Gnuplot',
      institution: 'Patan Multiple Campus, Patan',
      period: '8-10 June, 2017',
      description: 'Trained M.Sc (Physics) students of Patan Multiple Campus.',
      type: 'trainer',
    },
    {
      title: 'Tutor - Training program on Computational Physics',
      institution: 'Central Department of Physics, Kirtipur',
      period: '14-15 May, 2016',
      description:
        'Contributed the hands-on session as a tutor. Supported by UGC, Nepal, IEEE Nepal Chapter and ICTP Trieste, Italy.',
      type: 'tutor',
    },
    {
      title: 'Guest Presenter',
      institution: 'Patan Multiple Campus, Patan',
      period: 'February, 2017',
      description:
        'Delivered an invited talk on "Introduction to molecular visualization using VMD".',
      type: 'presenter',
    },
  ];

  const ExperienceCard = ({ experience }) => (
    <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'>
      <div className='flex items-start space-x-4'>
        <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
          <GraduationCap className='w-6 h-6 text-blue-600' />
        </div>
        <div className='flex-grow'>
          <h3 className='text-xl font-semibold text-slate-900 mb-2'>
            {experience.title}
          </h3>
          <div className='flex items-center text-slate-600 mb-2'>
            <MapPin className='w-4 h-4 mr-2' />
            <span>{experience.institution}</span>
          </div>
          <div className='flex items-center text-slate-600 mb-3'>
            <Calendar className='w-4 h-4 mr-2' />
            <span>{experience.period}</span>
          </div>
          <p className='text-slate-700'>{experience.description}</p>
        </div>
      </div>
    </div>
  );

  const TrainingCard = ({ training }) => {
    const getIcon = (type) => {
      switch (type) {
        case 'trainer':
          return <Users className='w-6 h-6 text-green-600' />;
        case 'tutor':
          return <GraduationCap className='w-6 h-6 text-purple-600' />;
        case 'presenter':
          return <Award className='w-6 h-6 text-orange-600' />;
        default:
          return <Users className='w-6 h-6 text-blue-600' />;
      }
    };

    const getBgColor = (type) => {
      switch (type) {
        case 'trainer':
          return 'bg-green-100';
        case 'tutor':
          return 'bg-purple-100';
        case 'presenter':
          return 'bg-orange-100';
        default:
          return 'bg-blue-100';
      }
    };

    return (
      <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'>
        <div className='flex items-start space-x-4'>
          <div
            className={`flex-shrink-0 w-12 h-12 ${getBgColor(training.type)} rounded-lg flex items-center justify-center`}
          >
            {getIcon(training.type)}
          </div>
          <div className='flex-grow'>
            <h3 className='text-xl font-semibold text-slate-900 mb-2'>
              {training.title}
            </h3>
            <div className='flex items-center text-slate-600 mb-2'>
              <MapPin className='w-4 h-4 mr-2' />
              <span>{training.institution}</span>
            </div>
            <div className='flex items-center text-slate-600 mb-3'>
              <Calendar className='w-4 h-4 mr-2' />
              <span>{training.period}</span>
            </div>
            <p className='text-slate-700'>{training.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16'>
          Teaching & Training
        </h1>

        {/* Teaching Experience Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4'>
              <GraduationCap className='w-6 h-6 text-blue-600' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900'>
              Teaching Experience
            </h2>
          </div>
          <div className='space-y-6'>
            {teachingExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </section>

        {/* Training & Workshops Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4'>
              <Users className='w-6 h-6 text-green-600' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900'>
              Training & Workshops
            </h2>
          </div>
          <div className='space-y-6'>
            {trainingsWorkshops.map((training, index) => (
              <TrainingCard key={index} training={training} />
            ))}
          </div>
        </section>

        {/* Summary Statistics */}
        <section className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-6 text-center'>
              Teaching Summary
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>
                  {teachingExperience.length}
                </div>
                <div className='text-slate-600'>Teaching Positions</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-600 mb-2'>
                  {trainingsWorkshops.length}
                </div>
                <div className='text-slate-600'>Training & Workshops</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-purple-600 mb-2'>
                  7+
                </div>
                <div className='text-slate-600'>Years of Experience</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
