import './certifications.css';
import { FaArrowRight } from 'react-icons/fa';
import { memo } from 'react';


const CertificationsComponent = () => {
    const certificates = [
        {
            id: 1,
            title: "IBM DevOps and Software Engineering",
            subtitle: "Professional Certificate",
            institution: "IBM",
            link: "https://coursera.org/share/1627350d56c2a7c46400428a213cbb9b",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~2NKETWM95H46/CERTIFICATE_LANDING_PAGE~2NKETWM95H46.jpeg"
        },
        {
            id: 2,
            title: "IBM Applied DevOps Engineering",
            subtitle: "Professional Certificate",
            institution: "IBM",
            link: "https://coursera.org/share/88f8643474e5985692e5cd5265ea241f",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5VV01EKPZ0JM/CERTIFICATE_LANDING_PAGE~5VV01EKPZ0JM.jpeg"
        },
        {
            id: 3,
            title: "DevOps, Cloud, and Agile Foundations",
            subtitle: "Specialization Certificate",
            institution: "IBM",
            link: "https://coursera.org/share/baa0fc118331172361847aa843a3a766",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TL6V7NOOZV51/CERTIFICATE_LANDING_PAGE~TL6V7NOOZV51.jpeg"
        },
        {
            id: 4,
            title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            subtitle: "Course Certificate",
            institution: "IBM",
            link: "https://coursera.org/share/b850090bb6413cc7c7b1c93eb7b3f4c2",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WWALQW2JUBEM/CERTIFICATE_LANDING_PAGE~WWALQW2JUBEM.jpeg"
        },
        {
            id: 5,
            title: "Blockchain Basics",
            subtitle: "Course Certificate",
            institution: "University at Buffalo",
            link: "https://coursera.org/share/1b757ae20a420086fed3011335624330",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~A4M13Q1RLLUA/CERTIFICATE_LANDING_PAGE~A4M13Q1RLLUA.jpeg"
        },
        {
            id: 6,
            title: "Smart Contracts",
            subtitle: "Course Certificate",
            institution: "University at Buffalo",
            link: "https://coursera.org/share/e52f7df8b034205baed7c6e2834ec295",
            image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6A2WAOE1X5IM/CERTIFICATE_LANDING_PAGE~6A2WAOE1X5IM.jpeg"
        }
    ];

    const handleLinkedInRedirect = () => {
        window.open('https://www.linkedin.com/in/oshadapramod/details/certifications/', '_blank');
    };

    return (
        <section className="certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <h2>CERTIFICATIONS</h2>
                </div>

                <div className="content-wrapper">
                    <div className="left-section">
                        <h3>Check Out</h3>
                        <h4>MY CERTIFICATES</h4>
                        <p>
                            I have done various courses to improve my skills and I'm sharing few of them.
                        </p>
                        <button className="know-more-btn" onClick={handleLinkedInRedirect}>
                            KNOW MORE
                            <span className="know-more-arrow-icon">
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>

                    <div className="certificates-grid">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="certificate-card"
                                onClick={() => window.open(cert.link, '_blank')}
                            >
                                <div className="certificate-image">
                                    {cert.image ? (
                                        <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
                                    ) : (
                                        <div className="certificate-placeholder"></div>
                                    )}
                                </div>
                                <div className="certificate-content">
                                    <div className='certificate-title-section'>
                                        <h3 className="certificate-title">{cert.title}</h3>
                                    </div>
                                    <p className="certificate-subtitle">{cert.subtitle}</p>
                                    <p className="certificate-institution">{cert.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Certifications = memo(CertificationsComponent);
export default Certifications;