import React from 'react';
import { ExternalLink } from 'lucide-react';

const GOOGLE_SCHOLAR_URL =
  'https://scholar.google.com/citations?user=y_p39wsAAAAJ&hl=en';

const Publications = () => {
  const publishedArticles = [
    {
      title:
        'Martini 3 Coarse-Grained Model for Chitosan with Tunable Acetylation',
      authors:
        'Cambiaso, S., Razmazma, H., Shrestha, R., Bochicchio, D., Rossi, G., & Monticelli, L.',
      journal: 'Biomacromolecules',
      year: '2025',
      volume: '26(11)',
      pages: '7319\u20137330',
      link: 'https://doi.org/10.1021/acs.biomac.5c00683',
    },
    {
      title: 'Martini 3 coarse-grained models for carbon nanomaterials',
      authors:
        'Shrestha, R., Alessandri, R., V\u00f6gele, M., Hilpert, C., Souza, P. C., Marrink, S. J., & Monticelli, L.',
      journal: 'Journal of Chemical Theory and Computation',
      year: '2025',
      volume: '21(18)',
      pages: '9035\u20139053',
      link: 'https://pubs.acs.org/doi/10.1021/acs.jctc.5c00923',
    },
    {
      title: 'Interaction of Phthalates with Lipid Bilayer Membranes',
      authors: 'Naz, Z., Shrestha, R., Moin, S. T., & Monticelli, L.',
      journal: 'The Journal of Physical Chemistry B',
      year: '2022',
      volume: '126(25)',
      pages: '4679\u20134688',
      link: 'https://doi.org/10.1021/acs.jpcb.2c02007',
    },
  ];

  const preprints = [
    {
      title:
        'Post-translational acylation drives folding and activity of the CyaA bacterial toxin',
      authors:
        'L\u00e9ger, C., Hoff, S. E., Scilironi, G., Abettan, A., Shrestha, R., Frangieh, J., Deruelle, V., Carvalho, N., Raoux-Barbot, D., Duclert-Savatier, N., Bardiaux, B., Brier, S., Bontems, F., Pehau-Arnaudet, G., Ladant, D., Monticelli, L., Bonomi, M., & Chenal, A.',
      link: 'https://www.biorxiv.org/content/early/2025/09/12/2025.09.11.673628',
    },
  ];

  const renderAuthors = (authorsString) => {
    const parts = authorsString.split('Shrestha, R.');
    if (parts.length === 1) return authorsString;
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && <strong>Shrestha, R.</strong>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900/30'>
      <div className='max-w-3xl mx-auto px-6 py-20'>
        <div className='flex items-baseline justify-between mb-12'>
          <h1 className='text-3xl font-bold text-slate-900 dark:text-white'>
            Publications
          </h1>
          <a
            href={GOOGLE_SCHOLAR_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline'
          >
            Google Scholar
            <ExternalLink className='w-3.5 h-3.5' />
          </a>
        </div>

        {/* Published */}
        <section className='mb-14'>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            //&nbsp;Published
          </h2>
          <div className='space-y-8'>
            {publishedArticles.map((pub, i) => (
              <article key={i}>
                <h3 className='font-medium text-slate-900 dark:text-white mb-1'>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400 italic mb-1'>
                  {renderAuthors(pub.authors)}
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  {pub.journal}, {pub.year}, {pub.volume}, {pub.pages}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Preprints */}
        <section>
          <h2 className='font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6'>
            //&nbsp;Preprints
          </h2>
          <div className='space-y-8'>
            {preprints.map((pub, i) => (
              <article key={i}>
                <h3 className='font-medium text-slate-900 dark:text-white mb-1'>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className='text-sm text-slate-500 dark:text-slate-400 italic'>
                  {renderAuthors(pub.authors)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
