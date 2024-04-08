// src/App.js
import Home from './pages/home/home';
import About from './pages/about/home';
import Contact from './pages/contact/home';
import PaperDetails from './pages/paper/paper';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/papers">papers</Link></li>
        </ul>
      </nav>
      
      {/* In v6, <Switch> is replaced by <Routes> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<About />} />
        <Route path="/papers" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/paperDetails/:paperId" element={<PaperDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
