// src/components/Services.jsx
import { FaPencilRuler, FaCode, FaTools } from 'react-icons/fa';
import './Services.css';

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>ABOUT ME</h2>
                </div>

                <p className="section-paragraph">
                    I'm an enthusiastic and driven undergraduate currently pursuing a <b>BSc. Engineering (Hons) degree,
                        specializing in Computer Engineering at the Faculty of Engineering, University of Jaffna</b>. Originally from Ratnapura,
                    I completed my schooling at Sivali Central College, where I followed the Physical Science stream for my Advanced Level studies.
                    <br />
                    <br />
                    My interests lie at the intersection of cutting-edge fields such as <b>Blockchain, Artificial Intelligence (AI),
                        Machine Learning (ML), Software Development, and DevOps</b>. I am passionate about exploring innovative solutions,
                    and I continuously seek opportunities to expand my knowledge and skill set.
                    <br />
                    <br />
                    In addition to my academic journey, I actively engage in volunteering through <b>IEEE</b>,
                    where I collaborate with like-minded peers and contribute to impactful tech-driven initiatives.
                    Outside of my studies, I enjoy playing games, watching TV series, and expressing my creativity through graphic design.
                    <br />
                    <br />
                    I’m always eager to take on new challenges, learn emerging technologies,
                    and be part of meaningful projects that make a difference.
                </p>
            </div>

            <div className="facebook-section">
                <div className="facebook-content">
                    <p className="facebook-paragraph">
                        I’m passionate about graphic design — from flyers and logos to eye-catching social media posts.
                        Check out my latest work on my Facebook page and feel free to reach out!                    </p>
                    <div className="read-more-btn">
                        <span className="line"></span>
                        <button onClick={() => window.location.href = 'https://www.facebook.com/des.by.op'}>
                            SEE SOME OF MY WORKS
                        </button>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="facebook-logo"></div>
            </div>
        </section>
    );
}

export default Services;