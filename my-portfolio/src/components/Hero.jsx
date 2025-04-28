// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/hero-image.png';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle">Hi, I am</h2>
                    <h1 className="hero-title">Tomasz Gajda</h1>
                    <p className="hero-description">Front-end Developer / UI Designer</p>

                    <div className="social-links">
                        <a href="#" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="#" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:contact@example.com" className="social-link">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Tomasz Gajda" />
                    <p className="hero-image-caption">this is not my photo, but I dearly hope to get one just like this</p>
                </div>
            </div>

            <div className="explore-btn">
                <span className="line"></span>
                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                    EXPLORE
                </button>
                <span className="line"></span>
            </div>
        </section>
    );
}

export default Hero;