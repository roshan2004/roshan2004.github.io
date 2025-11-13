import React from 'react';
import { BookOpen, FileText, Clock, GraduationCap, ExternalLink } from 'lucide-react';

/*
 * Publications component
 *
 * This file defines two categories of work: published articles and works in
 * preparation.  Each published article now includes a DOI link so that
 * visitors can click through to read the paper.  The PublicationCard
 * component wraps titles with an anchor element whenever a link is provided.
 */

// Google Scholar profile URL - Update this with your actual profile URL
const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?user=YOUR_USER_ID';

const Publications = () => {
  // List of published articles.  Each entry contains bibliographic details
  // and a link to the publication.  Additional articles can be added to this
  // array as needed.
  const publishedArticles = [
    {
      title: 'Martini 3 Coarse-Grained Model for Chitosan with Tunable Acetylation',
      authors:
        'Cambiaso, S., Razmazma, H., Shrestha, R., Bochicchio, D., Rossi, G., & Monticelli, L.',
      journal: 'Biomacromolecules',
      year: '2025',
      volume: '26(11)',
      pages: '7319–7330',
      type: 'published',
      link: 'https://doi.org/10.1021/acs.biomac.5c00683',
    },
    {
      title: 'Martini 3 coarse-grained models for carbon nanomaterials',
      authors:
        'Shrestha, R., Alessandri, R., Vögele, M., Hilpert, C., Souza, P. C., Marrink, S. J., & Monticelli, L.',
      journal: 'Journal of Chemical Theory and Computation',
      year: '2025',
      volume: '21(18)',
      pages: '9035–9053',
      type: 'published',
      link: 'https://pubs.acs.org/doi/10.1021/acs.jctc.5c00923',
    },
    {
      title: 'Interaction of Phthalates with Lipid Bilayer Membranes',
      authors: 'Naz, Z., Shrestha, R., Moin, S. T., & Monticelli, L.',
      journal: 'The Journal of Physical Chemistry B',
      year: '2022',
      volume: '126(25)',
      pages: '4679–4688',
      type: 'published',
      link: 'https://doi.org/10.1021/acs.jpcb.2c02007',
    },
  ];

  // List of works currently in preparation.  These entries do not include
  // links since they are not yet published.
  const Preprints = [
    {
      title:
        'Post-translational acylation drives folding and activity of the CyaA bacterial toxin',
      authors:
        'Léger, C., Hoff, S. E., Scilironi, G., Abettan, A., Shrestha, R., Frangieh, J., Deruelle, V., Carvalho, N., Raoux-Barbot, D., Duclert-Savatier, N., Bardiaux, B., Brier, S., Bontems, François, Pehau-Arnaudet, Gérard, Ladant, D., Monticelli, L., Bonomi, M., & Chenal, A.',
      type: 'preprint',
      link: 'https://www.biorxiv.org/content/early/2025/09/12/2025.09.11.673628',
    },
  ];

  // Card component for displaying a single publication.  If a link is
  // provided on the publication object, the title will be rendered as a
  // hyperlink; otherwise it will be plain text.  The icon colour changes
  // depending on whether the article is published or in preparation.
  const PublicationCard = ({ publication }) => {
    const isPublished = publication.type === 'published';
    return (
      <div className='bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-900 p-6 hover:shadow-xl transition-shadow'>
        <div className='flex items-start space-x-4'>
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
              isPublished ? 'bg-green-100 dark:bg-green-900' : 'bg-orange-100 dark:bg-orange-900'
            }`}
          >
            {isPublished ? (
              <BookOpen
                className={`w-6 h-6 ${isPublished ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}
              />
            ) : (
              <Clock className='w-6 h-6 text-orange-600 dark:text-orange-400' />
            )}
          </div>
          <div className='flex-grow'>
            <h3 className='text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors'>
              {publication.link ? (
                <a
                  href={publication.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline'
                >
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
            </h3>
            <p className='text-slate-600 dark:text-slate-400 mb-2 italic'>{publication.authors}</p>
            {isPublished && (
              <p className='text-slate-700 dark:text-slate-300'>
                <span className='font-medium'>{publication.journal}</span>
                {publication.year ? `, ${publication.year}` : ''}
                {publication.volume ? `, ${publication.volume}` : ''}
                {publication.pages ? `, ${publication.pages}` : ''}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-20 transition-colors'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-8'>
          Publications
        </h1>

        {/* Google Scholar Profile Badge */}
        <div className='flex justify-center mb-16'>
          <a
            href={GOOGLE_SCHOLAR_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
          >
            <GraduationCap className='w-6 h-6' />
            <span className='font-semibold'>View on Google Scholar</span>
            <ExternalLink className='w-4 h-4' />
          </a>
        </div>

        {/* Published Articles Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
              <BookOpen className='w-6 h-6 text-green-600 dark:text-green-400' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900 dark:text-white'>
              Published Articles
            </h2>
          </div>
          <div className='space-y-6'>
            {publishedArticles.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </section>
        {/* Works in Preparation Section */}
        <section className='max-w-4xl mx-auto'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4'>
              <FileText className='w-6 h-6 text-orange-600 dark:text-orange-400' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900 dark:text-white'>Preprints</h2>
          </div>
          <div className='space-y-6'>
            {Preprints.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </section>
        {/* Statistics Section */}
        <section className='max-w-4xl mx-auto mt-16'>
          <div className='bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-900 p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center'>
              Publication Statistics
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-600 dark:text-green-400 mb-2'>
                  {publishedArticles.length}
                </div>
                <div className='text-slate-600 dark:text-slate-400'>Published Articles</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2'>
                  {Preprints.length}
                </div>
                <div className='text-slate-600 dark:text-slate-400'>Preprints</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
