// src/components/Navbar.jsx
import { useState } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';

function Navbar({ scrolled }) {
    const [activeSection, setActiveSection] = useState('about');

    const handleNavClick = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <img src={logo} alt="Tomasz Gajda Logo" />
                </div>
                <div className="nav-links">
                    <button
                        className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => handleNavClick('about')}
                    >
                        About me
                    </button>
                    <button
                        className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={() => handleNavClick('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
                        onClick={() => handleNavClick('portfolio')}
                    >
                        Portfolio
                    </button>
                    <button
                        className="nav-item contact-btn"
                        onClick={() => handleNavClick('contact')}
                    >
                        CONTACT ME
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;