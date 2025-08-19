import React from 'react';
import { BookOpen, FileText, Clock } from 'lucide-react';

/*
 * Publications component
 *
 * This file defines two categories of work: published articles and works in
 * preparation.  Each published article now includes a DOI link so that
 * visitors can click through to read the paper.  The PublicationCard
 * component wraps titles with an anchor element whenever a link is provided.
 */
const Publications = () => {
  // List of published articles.  Each entry contains bibliographic details
  // and a link to the publication.  Additional articles can be added to this
  // array as needed.
  const publishedArticles = [
    {
      title: 'Interaction of Phthalates with Lipid Bilayer Membranes',
      authors: 'Naz, Z., Shrestha, R., Moin, S. T., & Monticelli, L.',
      journal: 'The Journal of Physical Chemistry B',
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
      title: 'Martini 3 coarse-grained models for carbon nanomaterials',
      authors:
        'Shrestha, R., Alessandri, R., Vögele, M., de Souza, P. C. T., Marrink, S., J., & Monticelli, L.',
      type: 'preprint',
      link: 'https://doi.org/10.26434/chemrxiv-2024-6s1wj-v3',

    },
  
    {
      title: 'Martini 3 coarse-grained model for chitosan with tunable acetylation',
      authors:
        'Cambiaso, S., Bochicchio, D., Shrestha, R., Rossi, & Monticelli, L.',
      type: 'preprint',
      link: 'https://doi.org/10.26434/chemrxiv-2025-qb3n5',
    },
    
  ];

  // Card component for displaying a single publication.  If a link is
  // provided on the publication object, the title will be rendered as a
  // hyperlink; otherwise it will be plain text.  The icon colour changes
  // depending on whether the article is published or in preparation.
  const PublicationCard = ({ publication }) => {
    const isPublished = publication.type === 'published';
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start space-x-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
              isPublished ? 'bg-green-100' : 'bg-orange-100'
            }`}
          >
            {isPublished ? (
              <BookOpen className={`w-6 h-6 ${isPublished ? 'text-green-600' : 'text-orange-600'}`} />
            ) : (
              <Clock className="w-6 h-6 text-orange-600" />
            )}
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors">
              {publication.link ? (
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
            </h3>
            <p className="text-slate-600 mb-2 italic">{publication.authors}</p>
            {isPublished && (
              <p className="text-slate-700">
                <span className="font-medium">{publication.journal}</span>, {publication.year}, {publication.volume}, {publication.pages}.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">Publications</h1>
        {/* Published Articles Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">Published Articles</h2>
          </div>
          <div className="space-y-6">
            {publishedArticles.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </section>
        {/* Works in Preparation Section */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-semibold text-slate-900">Preprints</h2>
          </div>
          <div className="space-y-6">
            {Preprints.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </section>
        {/* Statistics Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Publication Statistics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{publishedArticles.length}</div>
                <div className="text-slate-600">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{Preprints.length}</div>
                <div className="text-slate-600">Preprints</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
