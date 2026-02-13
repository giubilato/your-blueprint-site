import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data/posts';

const BlogPost = () => {
  // Legge l'URL per capire quale articolo mostrare
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const CHECKOUT_URL = "https://your-checkout-link.com/buy/blueprint-2026"; 

  // Se l'articolo non esiste (es. URL sbagliato), torna alla lista
  if (!post) {
    return <Navigate to="/articles" replace />;
  }

  return (
     <div className="pt-32 pb-24 px-6 min-h-screen bg-[#0a0a0a]">
        <article className="max-w-3xl mx-auto">
           <Link to="/articles" className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 mb-8 hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Log
           </Link>

           <header className="mb-12 border-b border-slate-800 pb-12">
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-blue-500 mb-6">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                  <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">{post.title}</h1>
              <p className="text-xl text-slate-400 leading-relaxed">{post.excerpt}</p>
           </header>

           {/* CONTENUTO ARTICOLO */}
           <div className="prose prose-invert prose-lg prose-headings:font-bold prose-headings:text-white prose-p:text-slate-400 prose-p:leading-8 prose-strong:text-slate-200">
              {post.content}
           </div>

           {/* CALL TO ACTION FINALE */}
           <div className="mt-16 pt-16 border-t border-slate-800">
              <div className="bg-[#111827] border border-slate-800 p-8 text-center">
                 <h3 className="text-xl font-bold text-white mb-4">Ready to build your system?</h3>
                 <p className="text-slate-400 mb-6">This concept is built directly into the Blueprint architecture.</p>
                 <button 
                    onClick={() => window.open(CHECKOUT_URL, '_blank')}
                    className="bg-slate-100 text-[#0f172a] px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center gap-2"
                 >
                    Get the Blueprint
                 </button>
              </div>
           </div>
        </article>
     </div>
  );
};

export default BlogPost;