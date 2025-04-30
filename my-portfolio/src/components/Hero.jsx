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
                    <h1 className="hero-title">Oshada Pramod</h1>
                    <p className="hero-description">Computer Engineering Undergraduate at
                        <br />University of Jaffna
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/oshadapramod/" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/oshadapramod/" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="oshadapramod99@gmail.com" className="social-link">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Oshada Pramod" />
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