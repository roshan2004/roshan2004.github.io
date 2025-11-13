import React, { useMemo, useState } from 'react';
import { FileText, Calendar, Search, Tag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import postsData from '../data/posts.json';

const Blog = () => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const navigate = useNavigate();

  const posts = useMemo(
    () => [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  const filtered = posts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());

    const matchesTag =
      !selectedTag ||
      (p.tags && p.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()));

    return matchesSearch && matchesTag;
  });

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-20 transition-colors'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-10'>
          Blog
        </h1>

        {/* Controls: Search and Tags */}
        <div className='mb-8 space-y-4'>
          {/* Search Input */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search posts…'
              className='w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className='flex flex-wrap gap-2 items-center'>
              <Tag className='w-4 h-4 text-slate-600 dark:text-slate-400' />
              <button
                onClick={() => setSelectedTag('')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  !selectedTag
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Active Filter Badge */}
          {(query || selectedTag) && (
            <div className='flex gap-2 items-center text-sm text-slate-600 dark:text-slate-400'>
              <span>Filtering:</span>
              {query && (
                <span className='inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded'>
                  Search: "{query}"
                  <button onClick={() => setQuery('')}>
                    <X className='w-3 h-3' />
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className='inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded'>
                  Tag: {selectedTag}
                  <button onClick={() => setSelectedTag('')}>
                    <X className='w-3 h-3' />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Posts */}
        {filtered.length > 0 ? (
          <div className='grid md:grid-cols-2 gap-6'>
            {filtered.map((post, i) => (
              <article
                key={i}
                className='bg-white dark:bg-slate-800 rounded-lg shadow dark:shadow-slate-900 p-6 hover:shadow-lg dark:hover:shadow-slate-900 transition'
              >
                <h2 className='text-xl font-semibold text-slate-900 dark:text-white mb-2'>
                  {post.title}
                </h2>
                <p className='text-slate-700 dark:text-slate-300 mb-4'>{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className='flex flex-wrap gap-1 mb-4'>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className='text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-1'
                >
                  Read more <FileText className='w-4 h-4' />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-slate-600 dark:text-slate-400 text-lg'>
              No posts found matching your filters.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setSelectedTag('');
              }}
              className='mt-4 text-blue-600 dark:text-blue-400 hover:underline'
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
