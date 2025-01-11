import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>Feel free to reach out via email or follow me on social media!</p>
            <div className="social-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;