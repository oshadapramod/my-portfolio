// src/components/About.jsx
import {
    FaHtml5, FaCss3Alt, FaSass, FaJs,
    FaReact, FaBootstrap, FaGitAlt, FaFigma,
    FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import './About.css';

function About() {
    const skillCategories = [
        {
            title: "USING NOW:",
            skills: [
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
                { icon: <FaSass />, name: "SASS" },
                { icon: <FaJs />, name: "JAVASCRIPT" },
                { icon: <FaReact />, name: "REACT" },
                { icon: <FaBootstrap />, name: "BOOTSTRAP" },
                { icon: <FaGitAlt />, name: "GIT" },
                { icon: <FaFigma />, name: "FIGMA" }
            ]
        },
        {
            title: "LEARNING:",
            skills: [
                { icon: <FaNodeJs />, name: "NODEJS" },
                { icon: <FaDatabase />, name: "MySQL" },
                { icon: <SiMongodb />, name: "MONGODB" },
                { icon: <SiTypescript />, name: "TYPESCRIPT" }
            ]
        },
        {
            title: "OTHER SKILLS:",
            skills: [
                { icon: null, name: "ANGIELSKI C1/C2" },
                { icon: null, name: "HISZPAŃSKI B1/B2" },
                { icon: null, name: "C++" },
                { icon: null, name: "C" }
            ]
        }
    ];

    return (
        <section className="about" id="skills">
            <div className="container">
                <div className="section-header-box">
                    <h2 className="section-title">SKILLS</h2>
                </div>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <p className="skill-name">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;