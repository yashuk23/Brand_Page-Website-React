import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Explore from './Explore';
import ContactUs from './ContactUs';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}