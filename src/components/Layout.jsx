import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout as LayoutIcon, Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Verifica se siamo in Home Page
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
      const element = document.getElementById('pricing');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-900/50 selection:text-blue-200 overflow-x-hidden flex flex-col">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-slate-800 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <div className="h-12 w-12 bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow">
               <LayoutIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100 uppercase font-mono">Your Blueprint</span>
          </Link>
          
          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            
            {/* LOGICA MENU: Mostra ARTICLES solo se NON siamo in Home */}
            {!isHome && (
              <Link to="/articles" className="hover:text-white transition-colors">ARTICLES</Link>
            )}
            
            <Link 
              to={isHome ? "#pricing" : "/#pricing"} 
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

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
            {!isHome && (
               <Link to="/articles" className="text-left font-bold text-slate-300 py-2 border-b border-slate-800">ARTICLES</Link>
            )}
            <Link 
              to={isHome ? "#pricing" : "/#pricing"}
              onClick={handlePricingClick}
              className="bg-slate-100 text-[#0f172a] px-6 py-3 w-full font-bold text-center block shadow-lg cursor-pointer"
            >
              Get Access
            </Link>
          </div>
        )}
      </nav>

      {/* CONTENUTO PAGINA */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER GLOBALE (L'unico che deve esistere) */}
      <footer className="py-12 px-6 border-t border-slate-900 text-slate-600 text-sm bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="h-6 w-6 bg-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.5)]">
              <LayoutIcon className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold uppercase tracking-widest font-mono text-slate-400">Your Blueprint</span>
          </Link>
          <div className="flex gap-6">
             {!isHome && <Link to="/articles" className="hover:text-blue-400 transition-colors">Articles</Link>}
             <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
             <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
          </div>
          <div>&copy; 2026 Blueprint Systems.</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;