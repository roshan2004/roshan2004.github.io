import React from 'react';
import { FileText, Calendar } from 'lucide-react';

/*
 * Blog component
 *
 * This section provides a space to share news, tutorials or reflections.  Each
 * post includes a title, publication date, brief summary and an optional link
 * to read more.  To add new posts, append entries to the `posts` array.  If
 * you eventually decide to host full articles on separate pages or
 * external platforms, simply populate the `url` field with the desired
 * location.
 */
const Blog = () => {
  const posts = [
    {
      title: 'Launching My Academic Blog',
      date: 'Aug 14, 2025',
      excerpt:
        'Welcome to the blog section! Here I plan to share updates on my research, tutorials on computational biophysics, and reflections on academic life.',
      url: '#',
    },
    {
      title: 'My Research Journey in Computational Biophysics',
      date: 'Jul 20, 2025',
      excerpt:
        'In this post I discuss how I became interested in computational biophysics and some of the challenges and successes along the way.',
      url: '#',
    },
  ];

  const PostCard = ({ post }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-blue-600">
          <FileText className="w-8 h-8" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2 leading-tight">
            {post.url ? (
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                {post.title}
              </a>
            ) : (
              post.title
            )}
          </h3>
          <div className="flex items-center text-slate-500 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">{post.excerpt}</p>
          {post.url && (
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">Blog</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;