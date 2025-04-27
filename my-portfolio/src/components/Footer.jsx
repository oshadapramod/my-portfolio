import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="font-montserrat font-bold uppercase tracking-wider mb-8 flex items-center gap-2"
                    >
                        Back to Top
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>

                    <div className="flex space-x-6 mb-8">
                        <a
                            href="https://github.com/oshadapramod"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/oshadapramod"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/oshadapramod"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>

                    <p className="font-montserrat text-sm">
                        © {new Date().getFullYear()} Oshada Pramod. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer