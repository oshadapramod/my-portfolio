// src/components/Services.jsx
import { FaPencilRuler, FaCode, FaTools } from 'react-icons/fa';
import separatorImage from '../assets/separator.png';
import './Services.css';

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>ABOUT ME</h2>
                </div>

                <div className="separator">
                    <img src={separatorImage} alt="Separator" />
                </div>

                <p className="section-paragraph">
                    I am a front-end developer and UI designer passionate about creating beautiful, functional, and user-friendly websites. With expertise in HTML, CSS, JavaScript, and React, I build responsive applications that look great on all devices.
                </p>

                <div className="services-container">
                    <div className="service-card">
                        <div className="service-icon">
                            <FaPencilRuler />
                        </div>
                        <h3 className="service-title">DESIGN</h3>
                        <p className="service-description">
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaCode />
                        </div>
                        <h3 className="service-title">DEVELOPMENT</h3>
                        <p className="service-description">
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FaTools />
                        </div>
                        <h3 className="service-title">MAINTENANCE</h3>
                        <p className="service-description">
                            I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
                        </p>
                    </div>
                </div>
            </div>

            <div className="itberries-section">
                <div className="itberries-content">
                    <h3 className="section-header">Section Header</h3>
                    <p className="itberries-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
                    </p>
                    <div className="read-more-btn">
                        <span className="line"></span>
                        <button>READ MORE</button>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="itberries-logo"></div>
            </div>
        </section>
    );
}

export default Services;