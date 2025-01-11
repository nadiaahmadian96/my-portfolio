import React from 'react';
import './Homepage.css';
import backgroundVideo from '../assets/videos/background.mp4';

const Homepage = () => {
    return (
        <section className="homepage">
            {/* Video Background */}
            <video className="background-video" autoPlay loop muted playsInline>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="background-overlay"></div>
            {/* Hero Content */}
            <div className="hero-content">
            <h1>
    Hi, I'm <span className="highlight">Nadia Ahmadian</span>.
</h1>
<h2 className="animated-text">
    I build <span className="highlight">iOS apps</span>, <br />
    inspire <span className="highlight">piano enthusiasts</span>, <br />
    and create <span className="highlight">innovative solutions</span>.
</h2>
<a href="#projects" className="cta-button">View My Work</a>
            </div>
        </section>
    );
};

export default Homepage;