import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
// Assicurati che il percorso sia corretto e il file esista in src/data/posts.jsx
import { BLOG_POSTS } from '../data/posts';

const Blog = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0a0a0a]">
      <Helmet>
        <title>Articles — Your Blueprint</title>
        <meta name="description" content="Thoughts on planning, weekly reviews, and using the reMarkable as a long-term thinking tool. Guides, system breakdowns, and behind-the-design notes from the Your Blueprint studio." />
        <link rel="canonical" href="https://yourblueprint.co/articles" />
      </Helmet>
       <div className="max-w-4xl mx-auto">
          {/* Header della sezione Blog */}
          <div className="mb-16 text-center">
             <div className="inline-block px-3 py-1 border border-blue-900/50 text-blue-400 text-xs uppercase tracking-[0.2em] mb-6 bg-blue-950/20 backdrop-blur-sm">
                Architect's Log
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Thoughts on <span className="text-blue-500">Execution</span></h1>
             <p className="text-lg text-slate-400 max-w-xl mx-auto">Strategies, systems, and philosophies for the high-performance mind.</p>
          </div>

          {/* Griglia Articoli */}
          <div className="grid gap-8">
             {/* Controllo di sicurezza: se non ci sono post, mostra un messaggio */}
             {BLOG_POSTS && BLOG_POSTS.length > 0 ? (
               [...BLOG_POSTS]
                 .sort((a, b) => new Date(b.date) - new Date(a.date))
                 .map(post => (
                  <Link to={`/articles/${post.slug}`} key={post.id} className="group bg-[#0d1219] border border-slate-800 hover:border-blue-500/50 transition-all p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden cursor-pointer block">
                     <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                     
                     <div className="flex-1">
                        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
                           <span>{post.date}</span>
                           <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                           <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
                        <span className="text-blue-500 font-bold uppercase text-xs tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                           Read Article <ArrowRight className="w-4 h-4"/>
                        </span>
                     </div>
                  </Link>
               ))
             ) : (
               <div className="text-center text-slate-500">No articles found. Check src/data/posts.jsx</div>
             )}
          </div>
       </div>
    </div>
  );
};

export default Blog;