// src/components/Navbar.jsx
import { useState, useEffect, useRef, memo } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

function NavbarComponent() {
    const [activeSection, setActiveSection] = useState(null); // nothing at start
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [manualLock, setManualLock] = useState(false); // prevent observer override right after click
    const lockTimer = useRef(null);

    // Sections that can become active (exclude hero/contact/footer)
    const watchSections = ['about', 'skills', 'certifications', 'portfolio'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver to auto-set active section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -40% 0px', // favor section nearer top
            threshold: [0.25, 0.5, 0.75]
        };

        const handler = (entries) => {
            if (manualLock) return;
            // Pick the section most in view
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible.length > 0) {
                const id = visible[0].target.id;
                if (watchSections.includes(id)) {
                    setActiveSection(id);
                    return;
                }
            }

            // If none of the watched sections visible, clear highlight
            setActiveSection(null);
        };

        const observer = new IntersectionObserver(handler, observerOptions);

        watchSections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [manualLock]);

    const handleNavClick = (section) => {
        // Manual selection
        setActiveSection(section);
        setMenuOpen(false);
        setManualLock(true);
        if (lockTimer.current) clearTimeout(lockTimer.current);
        lockTimer.current = setTimeout(() => setManualLock(false), 1200); // release after scroll animation
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                        className={`nav-item ${activeSection === 'certifications' ? 'active' : ''}`}
                        onClick={() => handleNavClick('certifications')}
                    >
                        Certifications
                    </button>
                    <button
                        className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
                        onClick={() => handleNavClick('portfolio')}
                    >
                        Portfolio
                    </button>
                    <button
                        className={`nav-item contact-btn ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => handleNavClick('contact')}
                    >
                        CONTACT ME
                    </button>
                </div>
            </div>
        </nav>
    );
}

const Navbar = memo(NavbarComponent);
export default Navbar;