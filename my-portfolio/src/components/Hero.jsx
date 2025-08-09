// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCredly } from "react-icons/si";
import { HiMegaphone } from "react-icons/hi2";
import { useEffect, useRef, useState, useMemo } from 'react';
import heroImage from '../assets/hero-image.png';
import bioGif from '../assets/bio-gif.gif';
import './Hero.css';

function Hero() {
    const heroRef = useRef(null);
    const heroTitleRef = useRef(null);
    const socialLinksRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [bioText, setBioText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [rainHeight, setRainHeight] = useState(0);
    const [lowerRainStart, setLowerRainStart] = useState(0);
    const [lowerRainHeight, setLowerRainHeight] = useState(0);
    const [showNotice, setShowNotice] = useState(true); // controls mount
    const [noticeClosing, setNoticeClosing] = useState(false); // controls exit animation
    const noticeTimeoutRef = useRef(null);

    const startNoticeClose = () => {
        if (noticeClosing) return; // already closing
        setNoticeClosing(true);
        // remove after animation duration
        noticeTimeoutRef.current = setTimeout(() => {
            setShowNotice(false);
        }, 480); // match CSS transition time
    };

    // Auto-hide notice after 3s (trigger graceful close)
    useEffect(() => {
        if (!showNotice) return;
        const auto = setTimeout(() => startNoticeClose(), 3000);
        return () => clearTimeout(auto);
    }, [showNotice]);

    // Cleanup on unmount
    useEffect(() => () => { if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current); }, []);

    // Pre-generate column data so it stays stable across re-renders
    const codeRainColumns = useMemo(() => {
        const columns = 24; // adjust for density (narrower area now)
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // English letters + numbers only
        const lineHeightPx = 16; // keep in sync with CSS .code-rain__column line-height
        const extraVisiblePx = 50; // requested additional visible length
        const baseLength = 34; // previous length
        const extraChars = Math.ceil(extraVisiblePx / lineHeightPx); // translate pixels to char rows
        const streamLength = baseLength + extraChars; // new total length
        const makeStream = () => Array.from({ length: streamLength }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        return Array.from({ length: columns }, (_, i) => ({
            id: i,
            left: (i / columns) * 100, // left within its container (now limited in CSS)
            duration: 8 + Math.random() * 10, // 8s - 18s
            delay: -Math.random() * 18, // negative for staggered start
            stream: makeStream()
        }));
    }, []);

    // Separate set for lower rain to desynchronize
    const codeRainColumnsLower = useMemo(() => {
        const columns = 24;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const lineHeightPx = 16;
        const extraVisiblePx = 50;
        const baseLength = 36; // slightly different to vary
        const extraChars = Math.ceil(extraVisiblePx / lineHeightPx);
        const streamLength = baseLength + extraChars;
        const makeStream = () => Array.from({ length: streamLength }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
        return Array.from({ length: columns }, (_, i) => ({
            id: i,
            left: (i / columns) * 100,
            duration: 10 + Math.random() * 12, // a tad slower
            delay: -Math.random() * 20,
            stream: makeStream()
        }));
    }, []);

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
        let frame = null;
        let lastEvent = null;
        const handleMouseMove = (e) => {
            lastEvent = e;
            if (frame === null) {
                frame = requestAnimationFrame(() => {
                    frame = null;
                    if (!lastEvent) return;
                    const { clientX, clientY } = lastEvent;
                    const { left, top, width, height } = hero.getBoundingClientRect();
                    const x = (clientX - left) / width;
                    const y = (clientY - top) / height;
                    setMousePosition({ x, y });
                    setIsHovering(true);
                });
            }
        };
        const handleMouseLeave = () => {
            setIsHovering(false);
        };
        hero.addEventListener('mousemove', handleMouseMove, { passive: true });
        hero.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseleave', handleMouseLeave);
            if (frame) cancelAnimationFrame(frame);
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

    // Measure hero title offset (upper rain) & social links (lower rain)
    useEffect(() => {
        function updateRainHeight() {
            if (heroRef.current && heroTitleRef.current) {
                const heroRect = heroRef.current.getBoundingClientRect();
                const titleRect = heroTitleRef.current.getBoundingClientRect();
                const h = Math.max(0, titleRect.top - heroRect.top); // distance from top of hero to top of title
                setRainHeight(h);
            }
            if (heroRef.current && socialLinksRef.current) {
                const heroRect = heroRef.current.getBoundingClientRect();
                const linksRect = socialLinksRef.current.getBoundingClientRect();
                const start = Math.max(0, linksRect.top - heroRect.top);
                const totalH = heroRect.height;
                const lowerH = Math.max(0, totalH - start);
                setLowerRainStart(start);
                setLowerRainHeight(lowerH);
            }
        }
        updateRainHeight();
        window.addEventListener('resize', updateRainHeight);
        // Recalculate after fonts/images load (layout shift)
        window.addEventListener('load', updateRainHeight);
        const id = setTimeout(updateRainHeight, 500); // fallback delayed measurement
        return () => {
            window.removeEventListener('resize', updateRainHeight);
            window.removeEventListener('load', updateRainHeight);
            clearTimeout(id);
        };
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            {/* DevOps internship notice popup */}
            {showNotice && (
                <div className={`hero-notice visible${noticeClosing ? ' closing' : ''}`} role="alert" aria-live="assertive">
                    <button
                        type="button"
                        className="hero-notice__close"
                        aria-label="Close notice"
                        onClick={startNoticeClose}
                    >
                        <span aria-hidden>×</span>
                    </button>
                    <HiMegaphone className="hero-notice__icon" />
                    <span className="hero-notice__text"><span className="hero-notice__highlight">Notice:</span> Actively seeking a DevOps internship — recruiters, let’s talk!</span>
                </div>
            )}
            <div className="hero-background">
                <div className="devops-left" aria-hidden>
                    <div className="devops-grid" />
                </div>
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

            {/* Code rain overlay limited to hero title height */}
            <div
                className="code-rain"
                style={{ '--code-rain-height': `${rainHeight}px` }}
                aria-hidden
            >
                {codeRainColumns.map(col => (
                    <div
                        key={col.id}
                        className="code-rain__column"
                        style={{
                            left: `${col.left}%`,
                            animationDuration: `${col.duration}s`,
                            animationDelay: `${col.delay}s`
                        }}
                    >
                        {col.stream.split('').map((ch, i) => {
                            const minO = (Math.random() * 0.25).toFixed(2); // 0 - 0.25
                            const delay = (Math.random() * 4).toFixed(2);    // 0 - 4s
                            const dur = (2 + Math.random() * 6).toFixed(2);  // 2 - 8s
                            return (
                                <span
                                    key={i}
                                    className="code-rain__char"
                                    style={{
                                        '--min-o': minO,
                                        animationDuration: `${dur}s`,
                                        animationDelay: `${delay}s`
                                    }}
                                >
                                    {ch}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle">Hi, I am</h2>
                    <h1 className="hero-title" ref={heroTitleRef}>Oshada Pramod</h1>
                    <p className="hero-description">Aspiring DevOps Engineer
                        <br />Computer Engineering Undergraduate
                    </p>

                    <div className="social-links">
                        {/* ref on social links for lower code rain positioning */}
                        <a href="https://github.com/oshadapramod/" className="social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/oshadapramod/" className="social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.credly.com/users/oshada-pramod-nandarathna" className="social-link credly-link">
                            <SiCredly />
                        </a>
                        <span ref={socialLinksRef} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Oshada Pramod" loading="eager" decoding="async" fetchpriority="high" width="550" height="550" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>

            {/* Lower code rain overlay (from social links down) */}
            <div
                className="code-rain-lower"
                style={{ top: `${lowerRainStart}px`, height: `${lowerRainHeight}px` }}
                aria-hidden
            >
                {codeRainColumnsLower.map(col => (
                    <div
                        key={col.id}
                        className="code-rain__column"
                        style={{
                            left: `${col.left}%`,
                            animationDuration: `${col.duration}s`,
                            animationDelay: `${col.delay}s`
                        }}
                    >
                        {col.stream.split('').map((ch, i) => {
                            const minO = (Math.random() * 0.25).toFixed(2);
                            const delay = (Math.random() * 4).toFixed(2);
                            const dur = (2 + Math.random() * 4).toFixed(2);
                            return (
                                <span
                                    key={i}
                                    className="code-rain__char"
                                    style={{
                                        '--min-o': minO,
                                        animationDuration: `${dur}s`,
                                        animationDelay: `${delay}s`
                                    }}
                                >
                                    {ch}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="bio-box">
                <div className="bio-gif-container">
                    <img src={bioGif} alt="Coding GIF" className="bio-gif" loading="lazy" decoding="async" />
                </div>
                <div className="bio-edit-container">
                    Final-year Computer Engineering undergraduate at the University of Jaffna with practical experience in DevOps, cloud infrastructure (AWS, GCP), and CI/CD pipelines. Skilled in Docker, Kubernetes, Terraform, Jenkins, and GitHub Actions, with a strong foundation in Linux, Bash/Python, and version control. Built and deployed multiple full-stack and cloud-native apps. Strong problem-solving skills with a passion for enhancing automation, reliability, and deployment workflows in DevOps teams.
                </div>
            </div>
        </section>
    );
}

export default Hero;