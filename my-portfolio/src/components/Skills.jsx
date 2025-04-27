import { motion } from 'framer-motion'
import {
    FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact,
    FaNodeJs, FaGitAlt, FaFigma, FaJava, FaPython,
    FaDatabase, FaAws
} from 'react-icons/fa'
import { SiTypescript, SiBootstrap, SiMongodb, SiMysql, SiSolidity, SiTensorflow } from 'react-icons/si'
import { DiAndroid } from 'react-icons/di'

const Skills = () => {
    const skillCategories = [
        {
            title: "Using Now",
            skills: [
                { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
                { name: "SASS", icon: <FaSass size={50} className="text-pink-500" /> },
                { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },
                { name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
                { name: "Bootstrap", icon: <SiBootstrap size={50} className="text-purple-600" /> },
                { name: "Git", icon: <FaGitAlt size={50} className="text-orange-600" /> },
                { name: "Figma", icon: <FaFigma size={50} className="text-purple-400" /> }
            ]
        },
        {
            title: "Learning",
            skills: [
                { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-600" /> },
                { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600" /> },
                { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql size={50} className="text-blue-600" /> },
                { name: "Solidity", icon: <SiSolidity size={50} className="text-gray-700" /> },
                { name: "TensorFlow", icon: <SiTensorflow size={50} className="text-orange-500" /> }
            ]
        },
        {
            title: "Other Skills",
            skills: [
                { name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
                { name: "Python", icon: <FaPython size={50} className="text-blue-500" /> },
                { name: "C/C++", icon: <FaDatabase size={50} className="text-blue-700" /> },
                { name: "Android", icon: <DiAndroid size={50} className="text-green-500" /> },
                { name: "AWS", icon: <FaAws size={50} className="text-orange-500" /> },
                { name: "English C1/C2", icon: <span className="text-4xl">🇬🇧</span> }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="section-header mb-16">Skills</h2>

                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-16">
                        <h3 className="skill-category">{category.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    className="skill-item"
                                >
                                    {skill.icon}
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills