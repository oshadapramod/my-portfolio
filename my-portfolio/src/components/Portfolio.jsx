import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
    {
        title: "Blockchain Voting System",
        description: "A decentralized voting platform with zero-knowledge proof verification built with Solidity, Ethereum, and React.",
        tags: ["Blockchain", "React", "Solidity", "ZKP"],
        github: "https://github.com/oshadapramod/blockchain-voting",
        demo: "https://blockchain-voting-demo.com"
    },
    {
        title: "Smart Railway Payment",
        description: "Contactless payment system for railways using RFID cards with real-time transaction processing.",
        tags: ["C", "ESP-IDF", "React", "Firebase"],
        github: "https://github.com/oshadapramod/SmartRailwayPayment",
        demo: "https://railway-payment-demo.com"
    },
    {
        title: "DeptWise Management System",
        description: "Departmental management tool for automating tasks, records, and notifications for Computer Engineering Dept.",
        tags: ["React", "Node.js", "MySQL"],
        github: "https://github.com/PasinduChandrasiri/MA-COM",
        demo: "https://deptwise-demo.com"
    },
    {
        title: "SpiritX Cricket Assistant",
        description: "AI-powered chatbot for cricket fantasy leagues with player stats and recommendations using Gemini AI.",
        tags: ["React", "Node.js", "AI", "WebSockets"],
        github: "https://github.com/oshadapramod/SpiritX_CrypticHackers_02",
        demo: "https://spiritx-demo.com"
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="section-header mb-16 text-white border-white">Portfolio</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="project-card rounded-lg overflow-hidden"
                        >
                            {/* Replace with your project images */}
                            <div className="w-full h-64 bg-gray-700"></div>

                            <div className="project-overlay p-6">
                                <h3 className="font-montserrat font-bold text-xl md:text-2xl mb-2">{project.title}</h3>
                                <p className="font-opensans text-sm mb-4 text-center">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="bg-white text-black px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-montserrat font-medium text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        <FiGithub /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-montserrat font-medium text-sm hover:bg-white hover:text-black transition-colors"
                                    >
                                        <FiExternalLink /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio