import React, { useMemo, useState } from 'react';
import { FileText, Calendar, Tag } from 'lucide-react';
import postsData from '../data/posts.json';

const Blog = ({ onOpenPost }) => {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const posts = useMemo(
    () => [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const tags = useMemo(
    () => ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags)))],
    [posts]
  );

  const filtered = posts.filter(
    (p) =>
      (activeTag === 'All' || p.tags.includes(activeTag)) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-10'>
          Blog
        </h1>

        {/* Controls */}
        <div className='flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-8'>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search posts…'
            className='w-full md:w-1/2 px-3 py-2 border rounded-md'
          />
          <div className='flex flex-wrap gap-2'>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1 rounded-full text-sm border ${activeTag === t ? 'bg-blue-600 text-white' : 'bg-white hover:bg-slate-50'}`}
              >
                <span className='inline-flex items-center gap-1'>
                  <Tag className='w-3 h-3' /> {t}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className='grid md:grid-cols-2 gap-6'>
          {filtered.map((post, i) => (
            <article
              key={i}
              className='bg-white rounded-lg shadow p-6 hover:shadow-lg transition'
            >
              <div className='text-sm text-slate-500 mb-2 inline-flex items-center gap-1'>
                <Calendar className='w-4 h-4' />{' '}
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>
                {post.title}
              </h2>
              <p className='text-slate-700 mb-4'>{post.excerpt}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {post.tags.map((t, j) => (
                  <span
                    key={j}
                    className='px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700'
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenPost(post.slug)}
                className='text-blue-700 hover:underline inline-flex items-center gap-1'
              >
                Read more <FileText className='w-4 h-4' />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
