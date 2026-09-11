import { memo } from 'react';
import './Services.css';

function ServicesComponent() {
    return (
        <section className="services" id="about">
            <div className="container">
                <div className="section-header">
                    <h2>ABOUT ME</h2>
                </div>

                <p className="section-paragraph">
                    I’m a passionate and motivated <b>Computer Engineer</b> with a strong interest in
                    <b> DevOps, Cloud Computing, Software Engineering, and Site Reliability Engineering</b>.
                    I graduated with a <b>BSc. Engineering (Hons) degree in Computer Engineering from the
                        Faculty of Engineering, University of Jaffna</b>. Originally from Ratnapura, I completed
                    my schooling at Sivali Central College, where I followed the Physical Science stream for
                    my Advanced Level studies.
                    <br />
                    <br />
                    My core interests include <b>DevOps, Cloud Computing, Software Development, and Automation</b>.
                    I enjoy working with technologies such as Docker, GitHub Actions, Terraform, AWS, Python,
                    Java, and Linux, while continuously exploring modern approaches to CI/CD, infrastructure
                    as code, cloud infrastructure, and reliable system design.
                    <br />
                    <br />
                    Throughout my academic and professional journey, I have worked on a variety of technical
                    projects that have strengthened my skills in <b>software development, cloud technologies,
                        automation, and system reliability</b>. I have also actively participated in
                    <b> IEEE</b> activities, collaborating with peers and contributing to technology-focused
                    initiatives and projects.
                    <br />
                    <br />
                    Outside of technology, I enjoy playing games, watching TV series, and expressing my
                    creativity through graphic design. I’m always eager to take on new challenges, learn
                    emerging technologies, solve meaningful problems, and contribute to projects that make
                    a real-world impact.
                </p>
            </div>

            <div className="facebook-section">
                <div className="facebook-content">
                    <p className="facebook-paragraph">
                        Also, I’m passionate about graphic design — from flyers and logos to eye-catching social media posts.
                        Check out my latest work on my Facebook page and feel free to reach out!                    </p>
                    <div className="read-more-btn">
                        <span className="line"></span>
                        <button
                            onClick={() =>
                                window.open('https://www.facebook.com/des.by.op', '_blank', 'noopener,noreferrer')
                            }
                        >
                            SEE SOME OF MY WORKS
                        </button>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Services = memo(ServicesComponent);
export default Services;