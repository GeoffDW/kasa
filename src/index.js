import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Nav     from './components/nav/nav';
import Home    from './pages/home/home';
import About   from './pages/about/about';
import Housing from './pages/housing/housing';
import Error   from './pages/error/error';
import Footer  from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />      
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
        </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

