import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import aboutImage from "../assets/images/about-me.jpg"; // Replace with your image
import pianoAudio from "../assets/audio/piano.mp3"; // Replace with your audio file

const About = () => {
    const [audioStarted, setAudioStarted] = useState(false);

    const handleAudioPlay = () => {
        const audio = document.getElementById("piano-audio");
        audio.play();
        setAudioStarted(true);
    };

    const aboutRef = useRef(null);

    // Scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const swiftCodeSnippets = [
        'let developer = "Nadia Ahmadian"',
        "D♭", "E♭", "🎶", 
        "func buildApp(for user: User) -> App",
        "if passion == true { inspire() }",
        "let music = Piano.play()",
        "var innovation = creativity + technology",
        "🎹",
        "class Developer: CreativePerson { ... }",
        "protocol Teacher { func teach() }",
        "🎵",
        "if success { celebrate() } else { tryAgain() }",
    ];

    const generateCodeRows = () => {
        const rows = [];
        for (let i = 0; i < 20; i++) {
            const randomCodes = [...Array(20)].map(
                () => swiftCodeSnippets[Math.floor(Math.random() * swiftCodeSnippets.length)]
            );
            rows.push(randomCodes);
        }
        return rows;
    };

    const codeRows = generateCodeRows();

    return (
        <div className="about" ref={aboutRef}>
            {/* Swift Code Animation */}
            <div className="code-animation">
                {codeRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="code-row" style={{ top: `${rowIndex * 15}%` }}>
                        {row.map((code, codeIndex) => (
                            <span
                                key={codeIndex}
                                className="code-line"
                                style={{
                                    color: Math.random() > 0.5 ? "#ff69b4" : "#00bfff", // Pink or Blue
                                }}
                            >
                                {code}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {/* About Section */}
            <div className="about-container">
                {/* Left Section */}
                <div className="about-left">
                    <img src={aboutImage} alt="Nadia Ahmadian" className="about-image" />
                    {!audioStarted && (
                        <button className="audio-button" onClick={handleAudioPlay}>
                            Click to Listen 🎹
                        </button>
                    )}
                </div>

                {/* Right Section */}
                <div className="about-right">
                    <h2 className="animated-title animate-on-scroll">About Me</h2>
                    <p className="animate-on-scroll">
                        Hi! I'm <strong className="highlight">Nadia Ahmadian</strong>, a passionate <strong>iOS Developer</strong>, 
                        and <strong>piano teacher</strong>. I blend <span className="accent">technology</span>, 
                        <span className="accent">education</span>, and <span className="accent">music </span> 
                        to <span className="inspire">create and inspire.</span>
                    </p>
                </div>
            </div>

            {/* Columns Section */}
            <div className="columns-section">
                <div className="column">
                    <h3 className="animated-title animate-on-scroll">What I Do</h3>
                    <ul className="what-i-do animate-on-scroll">
                        <li>
                            <strong>iOS Development:</strong> Creating intuitive, feature-rich apps with <span className="highlight">Swift</span> and <span className="highlight">SwiftUI</span>. Focused on performance and sleek design.
                        </li>
                        <li>
                            <strong>Web Development:</strong> Crafting responsive websites using <span className="highlight">React.js</span> and modern web technologies for exceptional user experiences.
                        </li>
                        <li>
                            <strong>Junior Unity Game Development:</strong> Building 2D/3D games with <span className="highlight">Unity</span> and <span className="highlight">C#</span>, combining creativity and gameplay.
                        </li>
                        <li>
                            <strong>Piano Tutoring:</strong> Guiding aspiring pianists with personalized lessons that balance technicality and creativity.
                        </li>
                    </ul>
                </div>

                <div className="column">
                    <h3 className="animated-title animate-on-scroll">My Values</h3>
                    <ul className="my-values animate-on-scroll">
                        <li>
                            <strong>Creativity:</strong> Transforming ideas into meaningful innovations in coding and music.
                        </li>
                        <li>
                            <strong>Authenticity:</strong> Staying true to my journey and embracing growth.
                        </li>
                        <li>
                            <strong>Empowerment:</strong> Helping others unlock their potential and achieve their dreams.
                        </li>
                        <li>
                            <strong>Resilience:</strong> Finding beauty in adversity and persevering with determination.
                        </li>
                        <li>
                            <strong>Connection:</strong> Fostering relationships and inspiring people to thrive.
                        </li>
                    </ul>
                </div>

                <div className="column">
                    <h3 className="animated-title animate-on-scroll">Fun Facts About Me</h3>
                    <ul className="fun-facts animate-on-scroll">
                        <li>
                            <strong>Exploring music genres:</strong> Discovering styles that fuel piano compositions and coding playlists.
                        </li>
                        <li>
                            <strong>Creative designs:</strong> Experimenting with app interfaces and personal projects.
                        </li>
                        <li>
                            <strong>Playing with Pesteh:</strong> My parakeet brings joy with its curious personality.
                        </li>
                        <li>
                            <strong>Open world games:</strong> Immersive experiences like <em>Ghost of Tsushima</em>.
                        </li>
                        <li>
                            <strong>Escape rooms:</strong> Challenging my problem-solving skills in thrilling puzzles.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Piano Audio */}
            <audio id="piano-audio" loop>
                <source src={pianoAudio} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default About;