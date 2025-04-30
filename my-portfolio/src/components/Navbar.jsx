// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('about');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Also determine active section based on scroll position
            const sections = ['about', 'skills', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);

        if (section === 'about') {
            // Scroll to top of the page for "About me"
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll to the specific section
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
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