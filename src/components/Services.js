import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        { title: "iOS Development", description: "Building modern, user-friendly mobile apps." },
        { title: "IELTS Tutoring", description: "Helping students excel with personalized lessons." },
        { title: "Piano Lessons", description: "Teaching piano to students of all levels." },
    ];

    return (
        <div className="services">
            <h2>Services</h2>
            <div className="service-list">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;