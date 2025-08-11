import {
    FaAws,
    FaPython,
    FaCodepen,
    FaGitAlt
} from "react-icons/fa";

import {
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiAnsible,
    SiGithubactions,
    SiJenkins,
    SiGnubash,
    SiGit,
    SiGrafana
} from "react-icons/si";

import {
    FcLinux
} from "react-icons/fc";

import {
    IoInfiniteSharp
} from "react-icons/io5";

import {
    DiScrum
} from "react-icons/di";

import { memo } from 'react';
import './About.css';

function AboutComponent() {
    // Define brand colors for each technology
    const iconColors = {
        Docker: "#2496ED",               // SiDocker - Docker Blue
        Kubernetes: "#326CE5",           // SiKubernetes - Kubernetes Blue
        Terraform: "#623CE4",            // SiTerraform - Terraform Purple
        Ansible: "#000000",              // SiAnsible - Ansible Black

        AWS: "#FF9900",                  // FaAws - AWS Orange
        "GitHub Actions": "#2088FF",     // SiGithubactions - GitHub Blue
        Jenkins: "#D24939",              // SiJenkins - Jenkins Red/Brown
        "Bash Scripting": "#4EAA25",     // SiGnubash - Bash Green

        Python: "#3776AB",               // FaPython - Python Blue
        Git: "#F05032",                  // FaGitAlt / SiGit - Git Orange
        Linux: "#FCC624",                // FcLinux - Linux Yellow
        "CI/CD": "#0A0A0A",              // IoInfiniteSharp - Generic (Black or gray for pipelines)

        Agile: "#6DB33F",                // DiScrum - Scrum/Agile Green
        GitOps: "#F05032",               // SiGit - Reuse Git color
        Grafana: "#F46800",              // SiGrafana - Grafana Orange
        IaC: "#000000",                  // FaCodepen - Use black or dark gray for infrastructure
    };

    const skillCategories = [
        {
            title: "DevOps & Infrastructure:",
            skills: [
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <SiTerraform />, name: "Terraform" },
                { icon: <SiAnsible />, name: "Ansible" },
            ]
        },
        {
            title: "Cloud & Automation:",
            skills: [
                { icon: <FaAws />, name: "AWS" },
                { icon: <SiGithubactions />, name: "GitHub Actions" },
                { icon: <SiJenkins />, name: "Jenkins" },
                { icon: <SiGnubash />, name: "Bash Scripting" },
            ]
        },
        {
            title: "Programming & Tools:",
            skills: [
                { icon: <FaPython />, name: "Python" },
                { icon: <FaGitAlt />, name: "Git" },
                { icon: <FcLinux />, name: "Linux" },
                { icon: <IoInfiniteSharp />, name: "CI/CD" },
            ]
        },
        {
            title: "Development Practices:",
            skills: [
                { icon: <DiScrum />, name: "Agile" },
                { icon: <SiGit />, name: "GitOps" },
                { icon: <SiGrafana />, name: "Grafana" },
                { icon: <FaCodepen />, name: "IaC" }
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

const About = memo(AboutComponent);
export default About;