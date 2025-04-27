import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import TypingEffect from './TypingEffect'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-gray-200 flex items-center pt-20">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-raleway font-bold text-2xl md:text-4xl mb-4">Hi, I am</h2>
                        <h1 className="font-raleway font-bold text-4xl md:text-6xl lg:text-7xl mb-4">
                            Oshada Pramod
                        </h1>
                        <TypingEffect
                            text="Blockchain Enthusiast | Web Developer"
                            className="font-raleway font-extrabold text-xl md:text-2xl text-gray-600 mb-8"
                        />

                        <div className="flex space-x-4 mt-8">
                            <a
                                href="https://github.com/oshadapramod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/oshadapramod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com/oshadapramod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-black rounded-full overflow-hidden border-8 border-white shadow-xl">
                            {/* Replace with your image */}
                            <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                                <span className="text-white font-montserrat">Your Photo</span>
                            </div>
                        </div>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -z-10 top-0 left-0 w-full h-full border-8 border-gray-300 rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero