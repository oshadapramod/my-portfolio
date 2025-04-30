import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaFigma, FaUnity } from "react-icons/fa";
import { SiSolidity, SiC, SiJavascript, SiTypescript, SiDocker, SiTensorflow, SiCplusplus, SiAdobeillustrator, SiAdobephotoshop, SiWeb3Dotjs } from "react-icons/si";
import React from "react";
import './About.css';

function About() {
    // Define brand colors for each technology
    const iconColors = {
        HTML5: "#E34F26",        // HTML5 orange
        CSS3: "#1572B6",         // CSS3 blue
        Unity: "#000000",        // Unity black
        React: "#61DAFB",        // React light blue
        Solidity: "#363636",     // Solidity dark gray
        Git: "#F05032",          // Git orange
        C: "#A8B9CC",            // C light blue-gray
        JavaScript: "#F7DF1E",   // JavaScript yellow
        "Web3.js": "#F16822",    // Web3.js orange
        TypeScript: "#3178C6",   // TypeScript blue
        Docker: "#2496ED",       // Docker blue
        TensorFlow: "#FF6F00",   // TensorFlow orange
        Illustrator: "#281300",  // Illustrator orange
        Photoshop: "#001E36",    // Photoshop blue
        "C++": "#00599C",        // C++ blue
        Figma: "#F24E1E"         // Figma orange-red
    };

    const skillCategories = [
        {
            title: "USING NOW:",
            skills: [
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
                { icon: <FaUnity />, name: "Unity" },
                { icon: <FaReact />, name: "React" },
                { icon: <SiSolidity />, name: "Solidity" },
                { icon: <FaGitAlt />, name: "Git" },
                { icon: <SiC />, name: "C" },
                { icon: <SiJavascript />, name: "JavaScript" },
            ]
        },
        {
            title: "LEARNING:",
            skills: [
                { icon: <SiWeb3Dotjs />, name: "Web3.js" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiTensorflow />, name: "TensorFlow" },
            ]
        },
        {
            title: "OTHER SKILLS:",
            skills: [
                { icon: <SiAdobeillustrator />, name: "Illustrator" },
                { icon: <SiAdobephotoshop />, name: "Photoshop" },
                { icon: <SiCplusplus />, name: "C++" },
                { icon: <FaFigma />, name: "Figma" }
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
                                        <div className="skill-icon" style={{ color: iconColors[skill.name] }}>
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