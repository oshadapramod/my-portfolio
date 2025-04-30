// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
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

                <div className="footer-social-links">
                    <a href="https://www.facebook.com/oshadapramod" className="footer-social-link">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/prrrramod/" className="footer-social-link">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/+94702862408" className="footer-social-link">
                        <FaWhatsapp />
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