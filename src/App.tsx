import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/pre';
import './style.css'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [load, updateLoad] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false)
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader Load={load} />
      <div className = "App" id = {load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;