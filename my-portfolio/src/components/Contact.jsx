import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log(result.text)
                setSubmitMessage('Message sent successfully!')
                form.current.reset()
            }, (error) => {
                console.log(error.text)
                setSubmitMessage('Failed to send message. Please try again.')
            })
            .finally(() => {
                setIsSubmitting(false)
                setTimeout(() => setSubmitMessage(''), 5000)
            })
    }

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-header mb-16">Contact</h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
                >
                    <p className="font-opensans text-lg mb-8 text-center">
                        Interested in working together or have any questions? Feel free to reach out!
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="font-montserrat font-bold text-sm uppercase tracking-wider block mb-2">
                                Enter Your Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                className="input-field"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="font-montserrat font-bold text-sm uppercase tracking-wider block mb-2">
                                Enter Your Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="input-field"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="font-montserrat font-bold text-sm uppercase tracking-wider block mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="user_phone"
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="font-montserrat font-bold text-sm uppercase tracking-wider block mb-2">
                                Your Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="input-field"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isSubmitting}
                                className="font-montserrat font-bold uppercase tracking-wider bg-black text-white px-8 py-3 rounded-full flex items-center gap-4"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                                <div className="flex">
                                    <div className="w-6 h-0.5 bg-white"></div>
                                    <div className="w-6 h-0.5 bg-white"></div>
                                </div>
                            </motion.button>
                        </div>

                        {submitMessage && (
                            <p className={`text-center font-montserrat ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact