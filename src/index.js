import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Nav from './components/nav/nav';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Card from './components/card/card';
import Home from './pages/home/home';
import Error from './pages/error/error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Banner />
      <Card />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

