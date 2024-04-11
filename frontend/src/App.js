import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Paper from './pages/paper/paper';
import Login from './pages/login/login';
import PaperDetails from './pages/paper/paperDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="content">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/papers">papers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<About />} /> {/* You might want to update this to point to an actual Profile component */}
          <Route path="/papers" element={<Paper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/paperDetails/:paperId" element={<PaperDetails />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <p>International Science and Technology Society<br/>1, Dublin 1, Ireland - AZ5DF70</p>
        </div>
        <div className="footer-center">
          <p>OUR PARTNERS<br/>GOOGLE, AMAZON R&D, IEEE</p>
        </div>
        <div className="footer-right">
          <Link to="//facebook.com" target="_blank"><img src="/path-to-facebook-logo.png" alt="Facebook" /></Link>
          <Link to="//twitter.com" target="_blank"><img src="/path-to-twitter-logo.png" alt="Twitter" /></Link>
          <Link to="//instagram.com" target="_blank"><img src="/path-to-instagram-logo.png" alt="Instagram" /></Link>
        </div>
      </footer>
    </Router>
  );
}

export default App;
