import React from 'react';
import './Certificates.css';

const certificates = [
    {
        title: "iOS Development Certificate",
        description: "Awarded for completing advanced iOS development training.",
        image: "ios_certificate.jpg",
    },
    {
        title: "IELTS Tutoring Certification",
        description: "Certified as an IELTS instructor with proven excellence.",
        image: "ielts_certificate.jpg",
    },
    {
        title: "Piano Teaching Diploma",
        description: "Recognized for outstanding piano teaching methods.",
        image: "piano_certificate.jpg",
    },
];

const Certificates = () => {
    return (
        <div className="certificates">
            <h2>My Certificates</h2>
            <div className="certificates-grid">
                {certificates.map((certificate, index) => (
                    <div className="certificate-card" key={index}>
                        <img src={`./assets/images/${certificate.image}`} alt={certificate.title} />
                        <div className="certificate-info">
                            <h3>{certificate.title}</h3>
                            <p>{certificate.description}</p>
                        </div>
                        <button className="view-button">View Certificate</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;