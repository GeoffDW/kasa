import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav/nav';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Card from './components/card/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    <Card />
    < Footer />
  </React.StrictMode>
);

