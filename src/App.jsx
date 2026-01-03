import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Explore from './Explore';
import ContactUs from './ContactUs';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={
          <>
            <Hero />
          </>
        } />
        
       
        <Route path="/explore" element={<Explore />} />

      
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}