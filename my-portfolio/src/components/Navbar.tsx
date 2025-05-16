import React from 'react';
import '../styles/navbar.css';  // Ensure CSS is imported
import Home from '../sections/Home';
import About from '../sections/About';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="nav-menu">
                <ul className="nav-links">
                    <li><a href="#home"> Home </a></li>
                    <li><a href="#about"> About </a></li>
                    <li><a href="/SaiKrishna__Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume </a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;