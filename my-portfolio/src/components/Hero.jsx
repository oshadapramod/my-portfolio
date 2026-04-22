// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCredly } from "react-icons/si";
import { HiMegaphone } from "react-icons/hi2";
import { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react';
import heroImage from '../assets/hero-image.png';
import bioGif from '../assets/bio-gif.gif';
import './Hero.css';

function HeroComponent() {
    const heroRef = useRef(null);
    const heroTitleRef = useRef(null);
    const socialLinksRef = useRef(null);
    // Remove high-frequency React state updates for mouse movement
    const isHoveringRef = useRef(false);
    const [bioText, setBioText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [rainHeight, setRainHeight] = useState(0);
    const [lowerRainStart, setLowerRainStart] = useState(0);
    const [lowerRainHeight, setLowerRainHeight] = useState(0);
    const [showNotice, setShowNotice] = useState(true); // controls mount
    const [isMobile, setIsMobile] = useState(false);
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
        if (showNotice) {
            const auto = setTimeout(startNoticeClose, 10000);
            return () => clearTimeout(auto);
        }
    }, [showNotice, startNoticeClose]);

    // Cleanup on unmount
    useEffect(() => () => { if (noticeTimeoutRef.current) clearTimeout(noticeTimeoutRef.current); }, []);

    // Build & memoize rain structure (columns + per-char style) once to avoid regenerating each render
    const buildRain = useCallback((
        columns,
        baseLength,
        extraVisiblePx,
        charSpeedMin,
        charSpeedVar,
        columnDelayMax,
        columnBaseDurationOffset = 6
    ) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const lineHeightPx = 16;
        const extraChars = Math.ceil(extraVisiblePx / lineHeightPx);
        const streamLength = baseLength + extraChars;

        return Array.from({ length: columns }, (_, colIndex) => {
            const charObjects = Array.from({ length: streamLength }, (_, i) => {
                const ch = chars[Math.floor(Math.random() * chars.length)];
                const minO = (Math.random() * 0.25).toFixed(2);
                const delay = (Math.random() * 4).toFixed(2);
                const dur = (charSpeedMin + Math.random() * charSpeedVar).toFixed(2);

                return {
                    key: i,
                    ch,
                    style: {
                        '--min-o': minO,
                        animationDuration: `${dur}s`,
                        animationDelay: `${delay}s`
                    }
                };
            });

            return {
                id: colIndex,
                left: (colIndex / columns) * 100,
                duration: charSpeedMin + Math.random() * charSpeedVar + columnBaseDurationOffset,
                delay: -Math.random() * columnDelayMax,
                chars: charObjects
            };
        });
    }, []);

    const codeRainColumns = useMemo(() => buildRain(24, 34, 50, 2, 6, 18), [buildRain]);
    const codeRainColumnsLower = useMemo(() => buildRain(24, 36, 50, 2, 4, 20), [buildRain]);

    const gradientRefs = {
        gradient1: useRef(null),
        gradient2: useRef(null),
        gradient3: useRef(null),
        gradient4: useRef(null),
        gradient5: useRef(null)
    };

    // Detect mobile breakpoint
    useEffect(() => {
        const evalMobile = () => setIsMobile(window.innerWidth <= 576);
        evalMobile();
        window.addEventListener('resize', evalMobile);
        return () => window.removeEventListener('resize', evalMobile);
    }, []);

    // Mouse parallax (desktop / tablet only). Disabled on narrow screens (<=576px) to reduce motion.
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const gradientConfig = {
            gradient1: { speed: 120, delay: 0.02, inverse: false },
            gradient2: { speed: 90, delay: 0.04, inverse: true },
            gradient3: { speed: 150, delay: 0.03, inverse: false },
            gradient4: { speed: 60, delay: 0.05, inverse: true },
            gradient5: { speed: 180, delay: 0.01, inverse: false }
        };
        let rafId = null;
        let lastX = 0.5;
        let lastY = 0.5;
        let enabled = false;
        function apply() {
            for (const key in gradientRefs) {
                const ref = gradientRefs[key];
                const cfg = gradientConfig[key];
                if (!ref.current || !cfg) continue;
                const { speed, inverse } = cfg;
                const x = inverse ? (0.5 - lastX) : (lastX - 0.5);
                const y = inverse ? (0.5 - lastY) : (lastY - 0.5);
                ref.current.style.transitionDelay = `${cfg.delay}s`;
                ref.current.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            }
            rafId = null;
        }
        function handleMove(e) {
            if (!enabled) return;
            const rect = hero.getBoundingClientRect();
            lastX = (e.clientX - rect.left) / rect.width;
            lastY = (e.clientY - rect.top) / rect.height;
            if (rafId == null) rafId = requestAnimationFrame(apply);
        }
        function handleLeave() {
            if (!enabled) return;
            isHoveringRef.current = false;
            for (const key in gradientRefs) {
                const ref = gradientRefs[key];
                if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
            }
        }
        function enable() {
            if (enabled) return;
            enabled = true;
        }
        function disable() {
            if (!enabled) return;
            enabled = false;
            // Reset transforms when disabling
            for (const key in gradientRefs) {
                const ref = gradientRefs[key];
                if (ref.current) ref.current.style.transform = 'translate(0px, 0px)';
            }
        }
        function evaluate() {
            if (window.innerWidth > 576) enable(); else disable();
        }
        hero.addEventListener('mousemove', handleMove, { passive: true });
        hero.addEventListener('mouseleave', handleLeave, { passive: true });
        window.addEventListener('resize', evaluate);
        evaluate();
        return () => {
            hero.removeEventListener('mousemove', handleMove);
            hero.removeEventListener('mouseleave', handleLeave);
            window.removeEventListener('resize', evaluate);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

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
            if (!heroRef.current) return;
            const heroRect = heroRef.current.getBoundingClientRect();

            if (heroTitleRef.current) {
                const titleRect = heroTitleRef.current.getBoundingClientRect();
                setRainHeight(Math.max(0, titleRect.top - heroRect.top));
            }

            if (socialLinksRef.current) {
                const linksRect = socialLinksRef.current.getBoundingClientRect();
                const start = Math.max(0, linksRect.top - heroRect.top);
                const totalH = heroRect.height;
                setLowerRainStart(start);
                setLowerRainHeight(Math.max(0, totalH - start));
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
            {/* {showNotice && (
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
            )} */}
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

            {/* Code rain overlay limited to hero title height (hidden on mobile) */}
            {!isMobile && (
                <div className="code-rain" style={{ '--code-rain-height': `${rainHeight}px` }} aria-hidden>
                    {codeRainColumns.map(col => (
                        <div key={col.id} className="code-rain__column" style={{ left: `${col.left}%`, animationDuration: `${col.duration}s`, animationDelay: `${col.delay}s` }}>
                            {col.chars.map(c => (
                                <span key={c.key} className="code-rain__char" style={c.style}>{c.ch}</span>
                            ))}K
                        </div>
                    ))}
                </div>
            )}

            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-subtitle">Hi, I am</h2>
                    <h1 className="hero-title" ref={heroTitleRef}>Oshada Pramod</h1>
                    <p className="hero-description">Aspiring DevOps / SRE Engineer
                        <br />Computer Engineering Undergraduate
                    </p>

                    <div className="social-links">
                        {/* ref on social links for lower code rain positioning */}
                        <a href="https://github.com/oshadapramod/"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/oshadapramod/"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.credly.com/users/oshada-pramod-nandarathna"
                            className="social-link credly-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiCredly />
                        </a>
                        <span ref={socialLinksRef} style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Oshada Pramod" loading="eager" decoding="async" fetchpriority="high" width="550" height="550" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>

            {/* Lower code rain overlay (hidden on mobile) */}
            {!isMobile && (
                <div className="code-rain-lower" style={{ top: `${lowerRainStart}px`, height: `${lowerRainHeight}px` }} aria-hidden>
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
                            {col.chars.map(c => (
                                <span key={c.key} className="code-rain__char" style={c.style}>{c.ch}</span>
                            ))}
                        </div>
                    ))}
                </div>
            )}


        </section>
    );
}

const Hero = memo(HeroComponent);
export default Hero;