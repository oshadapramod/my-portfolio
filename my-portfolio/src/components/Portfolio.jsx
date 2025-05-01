// src/components/Portfolio.jsx
import { useState } from 'react';
import railgoImage from '../assets/railgo.jpg';
import macom from '../assets/macom.png';
import spiritx from '../assets/spiritx.png';
import running from '../assets/running.png';
import cpusch from '../assets/cpusch.jpg';
import deep from '../assets/deep.jpg';
import evoting from '../assets/evoting.jpg';
import './Portfolio.css';

function Portfolio() {
    const [activeTab, setActiveTab] = useState('completed');

    const completedProjects = [
        {
            id: 1,
            title: "Rail Go",
            description: "Smart Railway Payment System using RFID Cards.",
            image: railgoImage,
            demoLink: "https://github.com/oshadapramod/SmartRailwayPayment.git"
        },
        {
            id: 2,
            title: "Dept Wise",
            description: "Management Assistant Web App for Computer Engineering Department.",
            image: macom,
            demoLink: "https://github.com/PasinduChandrasiri/MA-COM.git"
        },
        {
            id: 3,
            title: "CPU Scheduling Simulator",
            description: "A GUI-based simulator visualizing FCFS, SJF, Priority, and Round Robin scheduling algorithms.",
            image: cpusch,
            demoLink: "https://github.com/oshadapramod/SchedulingAlgo.git"
        },
        {
            id: 4,
            title: "SpiritX - Cricket Fantasy AI Assistant",
            description: "An intelligent chatbot for cricket fantasy leagues.",
            image: spiritx,
            demoLink: "https://github.com/oshadapramod/SpiritX_CrypticHackers_02.git"
        },
        {
            id: 5,
            title: "Image Captioning System",
            description: "A deep learning model that generates human-like captions for images using CNN-LSTM architecture.",
            image: deep,
            demoLink: "https://example.com/task-demo",
            moreLink: "https://example.com/task-details"
        },
    ];

    const ongoingProjects = [
        {
            id: 1,
            title: "Blockchain-Based Electronic Voting System",
            description: "A decentralized voting platform with zero-knowledge proof verification.",
            image: evoting,
            demoLink: "#" // Added a placeholder link for ongoing projects
        },
        {
            id: 2,
            title: "Voice Runner",
            description: "A voice-controlled endless runner game for Android where players use voice commands to control gameplay.",
            image: running,
            demoLink: "#" // Added a placeholder link for ongoing projects
        }
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="portfolio" id="portfolio">
            {/* Background gradients for visual interest */}
            <div className="background-gradient gradient-1"></div>
            <div className="background-gradient gradient-2"></div>
            <div className="background-gradient gradient-3"></div>

            <div className="container">
                {/* Section header */}
                <div className="section-header-box">
                    <h2 className="section-title">PORTFOLIO</h2>
                </div>

                {/* Tab navigation */}
                <div className="tab-navigation">
                    <div className="tab-container">
                        <div className={`tab-slider ${activeTab === 'ongoing' ? 'ongoing' : ''}`}></div>
                        <button
                            className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
                            onClick={() => handleTabChange('completed')}
                        >
                            COMPLETED
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'ongoing' ? 'active' : ''}`}
                            onClick={() => handleTabChange('ongoing')}
                        >
                            ONGOING
                        </button>
                    </div>
                </div>

                {/* Projects grids */}
                <div className={`projects-grid ${activeTab === 'completed' ? 'active' : ''}`}>
                    {completedProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className={`projects-grid ${activeTab === 'ongoing' ? 'active' : ''}`}>
                    {ongoingProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Portfolio footer */}
                <div className="portfolio-footer">
                    <p>More projects coming soon...</p>
                </div>
            </div>
        </section>
    );
}

// Project card component
function ProjectCard({ project }) {
    const isOngoing = project.demoLink === "#";

    const handleCardClick = () => {
        // Only open link for completed projects (not ongoing ones)
        if (!isOngoing) {
            window.open(project.demoLink, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div
            className={`project-card ${!isOngoing ? 'clickable' : ''}`}
            onClick={handleCardClick}
            style={{ cursor: !isOngoing ? 'pointer' : 'default' }}
        >
            <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-overlay">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                    {!isOngoing ? (
                        <a
                            href={project.demoLink}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // Prevents double-triggering when clicking the link
                        >
                        </a>
                    ) : (
                        <div className="project-link disabled">

                        </div>
                    )}
                </div>
            </div>

            {/* External icon positioned at top right corner */}
            {!isOngoing && (
                <div className="external-icon-container">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 3H21V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default Portfolio;