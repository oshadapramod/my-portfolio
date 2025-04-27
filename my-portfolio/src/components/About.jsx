import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-header mb-16">About Me</h2>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="font-opensans text-lg mb-6">
                                I'm a Computer Engineering Undergraduate at the University of Jaffna with a passion for
                                Blockchain, Web Development, and Graphic Design. I'm currently exploring Zero-Knowledge
                                Proofs (ZKP) for privacy applications in blockchain technology.
                            </p>
                            <p className="font-opensans text-lg mb-6">
                                As a tech enthusiast, I love exploring new technologies and sharing knowledge with others.
                                My goal is to create innovative solutions that solve real-world problems while maintaining
                                a strong focus on user experience and performance.
                            </p>
                            <p className="font-opensans text-lg">
                                When I'm not coding, you can find me contributing to open-source projects, participating in
                                hackathons, or learning about the latest advancements in blockchain technology.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-black p-1 rounded-lg">
                            {/* Replace with your image */}
                            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                                <span className="text-white font-montserrat">About Me Image</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About