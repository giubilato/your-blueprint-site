import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Sample from './pages/Sample';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="articles" element={<Blog />} />
        <Route path="articles/:slug" element={<BlogPost />} />
        
        {/* NUOVA ROTTA PRIVACY */}
        <Route path="privacy" element={<Privacy />} />

        {/* Lead magnet landing — see docs/03-product/lead-magnet.md */}
        <Route path="sample" element={<Sample />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;