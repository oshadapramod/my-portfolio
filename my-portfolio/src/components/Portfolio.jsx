// src/components/Portfolio.jsx
import { useState } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import './Portfolio.css';

function Portfolio() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "eatsome.",
            description: "Restaurant browsing in React.js (Using Yelp API)",
            tags: ["coded", "designed"],
            image: project1Image,
            demoLink: "#",
            moreLink: "#"
        },
        {
            id: 2,
            title: "Project 2",
            description: "Another amazing project description",
            tags: ["coded"],
            image: project2Image,
            demoLink: "#",
            moreLink: "#"
        },
        {
            id: 3,
            title: "Project 3",
            description: "Yet another amazing project",
            tags: ["designed"],
            image: project1Image,
            demoLink: "#",
            moreLink: "#"
        },
        {
            id: 4,
            title: "Project 4",
            description: "One more project to showcase",
            tags: ["coded", "designed"],
            image: project2Image,
            demoLink: "#",
            moreLink: "#"
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(filter));

    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-header">
                <div className="section-header-box">
                    <h2>PORTFOLIO</h2>
                </div>
            </div>

            <div className="filter-bar">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    ALL
                </button>
                <button
                    className={`filter-btn ${filter === 'coded' ? 'active' : ''}`}
                    onClick={() => setFilter('coded')}
                >
                    CODED
                </button>
                <button
                    className={`filter-btn ${filter === 'designed' ? 'active' : ''}`}
                    onClick={() => setFilter('designed')}
                >
                    DESIGNED
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-overlay">
                            <p className="project-tags">{project.tags.join(', ')}</p>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <a href={project.demoLink} className="project-link">
                                    <span className="line"></span>
                                    <span>DEMO</span>
                                    <span className="line"></span>
                                </a>
                                <a href={project.moreLink} className="project-link">
                                    <span className="line"></span>
                                    <span>MORE</span>
                                    <span className="line"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="portfolio-footer">
                <p>More projects coming soon...</p>
            </div>
        </section>
    );
}

export default Portfolio;