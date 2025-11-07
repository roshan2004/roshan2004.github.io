import React, { useMemo, useState } from 'react';
import { FileText, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import postsData from '../data/posts.json';

const Blog = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const posts = useMemo(
    () => [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  const filtered = posts.filter(
    (p) =>
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 mb-10'>
          Blog
        </h1>

        {/* Controls: Only search input */}
        <div className='mb-8'>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search posts…'
            className='w-full md:w-1/2 px-3 py-2 border rounded-md'
          />
        </div>

        {/* Posts */}
        <div className='grid md:grid-cols-2 gap-6'>
          {filtered.map((post, i) => (
            <article
              key={i}
              className='bg-white rounded-lg shadow p-6 hover:shadow-lg transition'
            >
              <div className='text-sm text-slate-500 mb-2 inline-flex items-center gap-2 flex-wrap'>
                <span className='inline-flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />{' '}
                  {new Date(post.date).toLocaleDateString()}
                </span>
                {post.readingTime && (
                  <span aria-label={`${post.readingTime} minute read`}>
                    • {post.readingTime} min read
                  </span>
                )}
              </div>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>
                {post.title}
              </h2>
              <p className='text-slate-700 mb-4'>{post.excerpt}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {(post.tags?.slice(0, 3) || []).map((t, j) => (
                  <span
                    key={j}
                    className='px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700'
                  >
                    {t}
                  </span>
                ))}
                {post.tags && post.tags.length > 3 && (
                  <span className='px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700'>
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
              <button
                onClick={() => navigate(`/blog/${post.slug}`)}
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
