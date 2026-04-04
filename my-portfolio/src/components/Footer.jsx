// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaArrowUp, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import { memo } from 'react';

function FooterComponent() {
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
                    <span className="arrow-icon">
                        <FaArrowUp />
                    </span>
                    <span>BACK TO TOP</span>
                </button>

                <div className="footer-social-links">
                    <a href="https://www.facebook.com/oshadapramod"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/prrrramod/"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/oshadapramod/"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/+94702862408"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:oshadapramod99@gmail.com"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <p className="copyright">
                    &copy;2026 Oshada Pramod All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

const Footer = memo(FooterComponent);
export default Footer;