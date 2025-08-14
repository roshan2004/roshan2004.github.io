import React, { useMemo, useState } from 'react';
import { FileText, Calendar, Tag } from 'lucide-react';

const Blog = () => {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const posts = [
    {
      title: "Use of position restraint in Molecular Dynamics Simulation",
      date: "2025-08-14",
      tags: ["GROMACS", "MD", "restraint"],
      excerpt: "Position restraints are applied during molecular dynamics simulations, especially for equilibrating transmembrane proteins. Initially, the simulation assigns velocities to atoms based on the Maxwell-Boltzmann distribution. Atoms with high velocities can cause large atomic movements, potentially disrupting secondary structures. Position restraints help stabilize the protein during equilibration, allowing velocities to smooth out to the mean distribution and preventing protein unfolding due to large initial velocities.",
      href: "#"
    },
    {
      title: "From MD to ML: making datasets from trajectories",
      date: "2025-07-20",
      tags: ["ML", "MD", "Python"],
      excerpt: "Labeling frames, feature extraction, and avoiding leakage.",
      href: "#"
    }
  ];

  const tags = useMemo(() => ["All", ...Array.from(new Set(posts.flatMap(p => p.tags)))], [posts]);

  const filtered = posts.filter(p =>
    (activeTag === 'All' || p.tags.includes(activeTag)) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) ||
     p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-10">Blog</h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full md:w-1/2 px-3 py-2 border rounded-md"
          />
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full text-sm border ${activeTag === t ? 'bg-blue-600 text-white' : 'bg-white hover:bg-slate-50'}`}
              >
                <span className="inline-flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {t}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <article key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="text-sm text-slate-500 mb-2 inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{post.title}</h2>
              <p className="text-slate-700 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((t, j) => (
                  <span key={j} className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
              {post.href && (
                <a href={post.href} className="text-blue-700 hover:underline inline-flex items-center gap-1">
                  Read more <FileText className="w-4 h-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
