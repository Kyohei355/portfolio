import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import JobCareer from './Components/JobCareer';
import SelfPR from './Components/SelfPR';
import Certifications from './Components/Certifications';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Kyohei Funo's Portfolio</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/JobCareer">Job Career</Link></li>
              <li><Link to="/certifications">Certification</Link></li>
              <li><Link to="/SelfPR">Self PR</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/JobCareer" element={<JobCareer />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/SelfPR" element={<SelfPR />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>© Kyohei Funo</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
