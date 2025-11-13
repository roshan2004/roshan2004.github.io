// src/components/Post.jsx
import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { useNavigate, useParams } from 'react-router-dom';
import 'katex/dist/katex.min.css'; // <-- important
import posts from '../data/posts.json';

// Helper function to strip frontmatter from markdown content
const stripFrontmatter = (markdown) => {
  // Match frontmatter between --- delimiters at the start
  const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/;
  return markdown.replace(frontmatterRegex, '');
};

const Post = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    if (!post) return;
    fetch(`${base}posts/${post.slug}.md`)
      .then((res) => (res.ok ? res.text() : Promise.reject('Not found')))
      .then((rawContent) => setContent(stripFrontmatter(rawContent)))
      .catch(() => setError('Could not load the post content.'));
  }, [post, base]);

  if (!post) {
    return (
      <div className='min-h-screen bg-slate-50 dark:bg-slate-900 py-16 transition-colors'>
        <div className='container mx-auto px-4 max-w-3xl'>
          <button
            onClick={() => navigate('/blog')}
            className='text-blue-700 dark:text-blue-400 underline mb-4'
          >
            ← Back to Blog
          </button>
          <p className='text-slate-700 dark:text-slate-300'>Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16 transition-colors'>
      <div className='container mx-auto px-4 max-w-3xl bg-white dark:bg-slate-800 rounded-xl shadow dark:shadow-slate-900 p-8'>
        <button
          onClick={() => navigate('/blog')}
          className='text-blue-700 dark:text-blue-400 underline'
        >
          ← Back to Blog
        </button>
        <h1 className='text-3xl md:text-4xl font-bold mt-4 mb-2 text-slate-900 dark:text-white'>
          {post.title}
        </h1>
        {error ? (
          <p className='text-red-600 dark:text-red-400'>{error}</p>
        ) : (
          <article className='prose dark:prose-invert max-w-none'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </div>
  );
};

export default Post;
