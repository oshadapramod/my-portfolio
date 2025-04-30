// src/components/Hero.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import heroImage from '../assets/hero-image.png';
import bioGif from '../assets/bio-gif.gif'; // Import the GIF image
import './Hero.css';

function Hero() {
    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [bioText, setBioText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const gradientRefs = {
        gradient1: useRef(null),
        gradient2: useRef(null),
        gradient3: useRef(null),
        gradient4: useRef(null),
        gradient5: useRef(null)
    };

    // Handle mouse movement
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = hero.getBoundingClientRect();

            // Calculate normalized mouse position (0-1)
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;

            setMousePosition({ x, y });
            setIsHovering(true);
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Apply the transform effect
    useEffect(() => {
        if (!isHovering) {
            // Reset positions with smooth transition when mouse leaves
            for (const key in gradientRefs) {
                if (gradientRefs[key].current) {
                    gradientRefs[key].current.style.transform = 'translate(0px, 0px)';
                }
            }
            return;
        }

        // Get mouse position
        const { x, y } = mousePosition;

        // Configure different sensitivities for each gradient
        const gradientConfig = {
            gradient1: { speed: 120, delay: 0.02, inverse: false },
            gradient2: { speed: 90, delay: 0.04, inverse: true },
            gradient3: { speed: 150, delay: 0.03, inverse: false },
            gradient4: { speed: 60, delay: 0.05, inverse: true },
            gradient5: { speed: 180, delay: 0.01, inverse: false }
        };

        // Update each gradient position
        for (const key in gradientRefs) {
            if (gradientRefs[key].current) {
                const element = gradientRefs[key].current;
                const { speed, inverse } = gradientConfig[key];

                // Calculate position based on mouse coordinates
                // Center point is 0.5, 0.5
                const translateX = inverse
                    ? (0.5 - x) * speed
                    : (x - 0.5) * speed;

                const translateY = inverse
                    ? (0.5 - y) * speed
                    : (y - 0.5) * speed;

                // Set transition delay for more organic movement
                element.style.transitionDelay = `${gradientConfig[key].delay}s`;

                // Apply the transform
                element.style.transform = `translate(${translateX}px, ${translateY}px)`;
            }
        }
    }, [mousePosition, isHovering]);

    const handleBioEdit = () => {
        setIsEditing(true);
    };

    const handleBioChange = (e) => {
        setBioText(e.target.value);
    };

    const handleBioSave = () => {
        setIsEditing(false);
        // Optionally save to localStorage or a backend
        localStorage.setItem('userBio', bioText);
    };

    // Load saved bio if available
    useEffect(() => {
        const savedBio = localStorage.getItem('userBio');
        if (savedBio) {
            setBioText(savedBio);
        }
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-background">
                <div
                    className="background-gradient gradient-1"
                    ref={gradientRefs.gradient1}
                ></div>
                <div
                    className="background-gradient gradient-2"
                    ref={gradientRefs.gradient2}
                ></div>
                <div
                    className="background-gradient gradient-3"
                    ref={gradientRefs.gradient3}
                ></div>
                <div
                    className="background-gradient gradient-4"
                    ref={gradientRefs.gradient4}
                ></div>
                <div
                    className="background-gradient gradient-5"
                    ref={gradientRefs.gradient5}
                ></div>
            </div>

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
                        <a href="mailto:oshadapramod99@gmail.com" className="social-link">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Oshada Pramod" />
                </div>
            </div>

            <div className="bio-box">
                <div className="bio-gif-container">
                    <img src={bioGif} alt="Coding GIF" className="bio-gif" />
                </div>
                <div className="bio-edit-container">
                    I am a dedicated and motivated individual with a strong passion for technology, including blockchain, artificial intelligence (AI), and machine learning (ML). With a background in software development and hands-on experience in both front-end and back-end technologies, I thrive in collaborative environments and enjoy solving complex problems. I am always eager to take on new challenges and contribute to innovative projects.
                </div>
            </div>
        </section>
    );
}

export default Hero;