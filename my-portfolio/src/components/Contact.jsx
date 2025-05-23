// src/components/Contact.jsx
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import lottie from 'lottie-web';
import './Contact.css';
// Import your Lottie JSON file
// Assuming you'll place it in the assets folder
import successAnimation from '../assets/success.json';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
    const animationContainer = useRef(null);
    const animationInstance = useRef(null);

    useEffect(() => {
        // Initialize animation but don't play it yet
        if (showSuccessAnimation && animationContainer.current) {
            animationInstance.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: successAnimation
            });

            // Reset form and animation state after animation completes
            animationInstance.current.addEventListener('complete', () => {
                setTimeout(() => {
                    setShowSuccessAnimation(false);
                }, 1000); // Keep showing for a bit after completion
            });

            return () => {
                if (animationInstance.current) {
                    animationInstance.current.destroy();
                }
            };
        }
    }, [showSuccessAnimation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.send(
                'service_bglg9rv', // Replace with your EmailJS service ID
                'template_v3u61pt', // Replace with your EmailJS template ID
                formData,
                'nvZ6uhx72Qwtp5ta-' // Replace with your EmailJS public key
            ).then(() => {
                // Show animation instead of alert
                setShowSuccessAnimation(true);

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }).catch((error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS Error:', error);
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header-box">
                    <h2>CONTACT</h2>
                </div>

                <p className="contact-intro">
                    I'd love to hear from you! Whether you have a question, proposal, or just want to say hello, fill out the form below and I'll get back to you as soon as possible.
                </p>

                {showSuccessAnimation ? (
                    <div className="success-animation-container">
                        <div ref={animationContainer} className="animation"></div>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-indicator"></div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="ENTER YOUR NAME*"
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <div className="form-indicator"></div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ENTER YOUR EMAIL*"
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <div className="form-indicator"></div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="PHONE NUMBER"
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-indicator"></div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="YOUR MESSAGE*"
                                rows="6"
                                className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button type="submit" className="submit-btn">
                            <span className="line"></span>
                            <span>SUBMIT</span>
                            <span className="line"></span>
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;