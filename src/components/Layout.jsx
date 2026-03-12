import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout as LayoutIcon, Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Questa variabile ci dice se siamo in Home Page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handlePricingClick = (e) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById('waitlist-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-900/50 selection:text-blue-200 overflow-x-hidden flex flex-col">
      
      {/* --- NAVBAR (Menu Alto) --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-slate-800 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <div className="h-12 w-12 bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow">
               <LayoutIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100 uppercase font-mono">Your Blueprint</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            {/* LOGICA MENU ALTO: Nascondi Articles se siamo in Home */}
            {!isHome && (
              <Link to="/articles" className="hover:text-white transition-colors">ARTICLES</Link>
            )}
            
            <Link 
              to={isHome ? "#waitlist-section" : "/#waitlist-section"} 
              onClick={handlePricingClick}
              className="bg-slate-100 text-[#0f172a] px-6 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold shadow-[0_0_10px_rgba(255,255,255,0.1)] cursor-pointer"
            >
                Get Access
            </Link>
          </div>

          <button className="md:hidden text-slate-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
            {/* Anche qui nascondiamo Articles se siamo in home */}
            {!isHome && (
               <Link to="/articles" className="text-left font-bold text-slate-300 py-2 border-b border-slate-800">ARTICLES</Link>
            )}
            <Link 
              to={isHome ? "#waitlist-section" : "/#waitlist-section"}
              onClick={handlePricingClick}
              className="bg-slate-100 text-[#0f172a] px-6 py-3 w-full font-bold text-center block shadow-lg cursor-pointer"
            >
              Get Access
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER (Menu Basso) --- */}
      <footer className="py-12 px-6 border-t border-slate-900 text-slate-600 text-sm bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-6 w-6 bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.5)]">
              <LayoutIcon className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold uppercase tracking-widest font-mono text-slate-400">Your Blueprint</span>
          </Link>
          
          <div className="flex items-center gap-6">
             <Link to="/articles" className="hover:text-blue-400 transition-colors">Articles</Link>
             <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
             {/* Facebook icon */}
             <a
               href="https://www.facebook.com/people/Your-Blueprint/61587239911725/"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Your Blueprint on Facebook"
               className="hover:text-blue-400 transition-colors"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
               </svg>
             </a>
          </div>
          
          <div>&copy; 2026 Blueprint Systems.</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;