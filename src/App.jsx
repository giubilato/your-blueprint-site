import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <Routes>
      {/* Il Layout avvolge tutte le rotte figlie */}
      <Route path="/" element={<Layout />}>
        
        {/* Home Page (es. tuosito.com/) */}
        <Route index element={<Home />} />
        
        {/* Lista Articoli (es. tuosito.com/articles) */}
        <Route path="articles" element={<Blog />} />
        
        {/* Articolo Singolo (es. tuosito.com/articles/titolo-post) */}
        <Route path="articles/:slug" element={<BlogPost />} />
        
        {/* Qualsiasi altro indirizzo sbagliato riporta alla Home */}
        <Route path="*" element={<Home />} />
        
      </Route>
    </Routes>
  );
};

export default App;