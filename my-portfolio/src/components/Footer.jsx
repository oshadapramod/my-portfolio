// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <button className="back-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                    <span>BACK TO TOP</span>
                </button>

                <div className="social-links">
                    <a href="#" className="social-link">
                        <FaFacebook />
                    </a>
                    <a href="#" className="social-link">
                        <FaTwitter />
                    </a>
                    <a href="#" className="social-link">
                        <FaInstagram />
                    </a>
                </div>

                <p className="copyright">
                    &copy;2025 Oshada Pramod All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;