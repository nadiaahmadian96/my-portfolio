import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Nadia Ahmadian</h1>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                    <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;