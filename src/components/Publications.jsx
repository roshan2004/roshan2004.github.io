import React from 'react';
import { BookOpen, FileText, Clock, Quote } from 'lucide-react';
import citationsData from '../data/citations.json';

/*
 * Publications component
 *
 * This file defines two categories of work: published articles and works in
 * preparation.  Each published article now includes a DOI link so that
 * visitors can click through to read the paper.  The PublicationCard
 * component wraps titles with an anchor element whenever a link is provided.
 */

// Helper function to extract DOI from URL
const extractDoi = (url) => {
  if (!url) return null;
  const match = url.match(/10\.\d{4,}(?:\.\d+)*\/[^\s]+/);
  return match ? match[0] : null;
};

// Helper function to get citation count for a publication
const getCitationCount = (link) => {
  const doi = extractDoi(link);
  if (!doi || !citationsData || !citationsData[doi]) return null;
  return citationsData[doi].citationCount;
};

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
    const citationCount = getCitationCount(publication.link);

    return (
      <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'>
        <div className='flex items-start space-x-4'>
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
              isPublished ? 'bg-green-100' : 'bg-orange-100'
            }`}
          >
            {isPublished ? (
              <BookOpen
                className={`w-6 h-6 ${isPublished ? 'text-green-600' : 'text-orange-600'}`}
              />
            ) : (
              <Clock className='w-6 h-6 text-orange-600' />
            )}
          </div>
          <div className='flex-grow'>
            <h3 className='text-xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors'>
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
            <p className='text-slate-600 mb-2 italic'>{publication.authors}</p>
            {isPublished && (
              <p className='text-slate-700'>
                <span className='font-medium'>{publication.journal}</span>
                {publication.year ? `, ${publication.year}` : ''}
                {publication.volume ? `, ${publication.volume}` : ''}
                {publication.pages ? `, ${publication.pages}` : ''}.
              </p>
            )}
            {citationCount !== null && citationCount !== undefined && (
              <div className='flex items-center mt-3 text-sm text-slate-600'>
                <Quote className='w-4 h-4 mr-1' />
                <span className='font-medium'>{citationCount}</span>
                <span className='ml-1'>citation{citationCount !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16'>
          Publications
        </h1>
        {/* Published Articles Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='flex items-center mb-8'>
            <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4'>
              <BookOpen className='w-6 h-6 text-green-600' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900'>
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
            <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
              <FileText className='w-6 h-6 text-orange-600' />
            </div>
            <h2 className='text-3xl font-semibold text-slate-900'>Preprints</h2>
          </div>
          <div className='space-y-6'>
            {Preprints.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </section>
        {/* Statistics Section */}
        <section className='max-w-4xl mx-auto mt-16'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-slate-900 mb-6 text-center'>
              Publication Statistics
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-600 mb-2'>
                  {publishedArticles.length}
                </div>
                <div className='text-slate-600'>Published Articles</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-orange-600 mb-2'>
                  {Preprints.length}
                </div>
                <div className='text-slate-600'>Preprints</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600 mb-2'>
                  {Object.values(citationsData || {}).reduce(
                    (sum, data) => sum + (data.citationCount || 0),
                    0
                  )}
                </div>
                <div className='text-slate-600'>Total Citations</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
