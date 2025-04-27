import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa'

const Services = () => {
    const services = [
        {
            title: "Development",
            description: "I can develop responsive and interactive websites and web applications using modern technologies. I specialize in React, Node.js, and blockchain development.",
            icon: <FaCode size={40} className="text-gray-700" />
        },
        {
            title: "Design",
            description: "I can design the site based on your needs and suggestions. I can also design from scratch and consult you during the process with Figma or Adobe XD.",
            icon: <FaPaintBrush size={40} className="text-gray-700" />
        },
        {
            title: "Maintenance",
            description: "I offer maintenance services for existing websites and applications, including updates, bug fixes, performance optimization, and feature additions.",
            icon: <FaTools size={40} className="text-gray-700" />
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="w-24 h-2 bg-black mx-auto mb-4"></div>
                    <h2 className="section-header">Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card"
                        >
                            <div className="flex justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services