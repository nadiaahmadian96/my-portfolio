import React from 'react';
import './Projects.css';
import consignEasyImage from "../assets/images/consignment-app.jpg";
import veganBakeryImage from "../assets/images/vegan-bakery.jpg";
const projects = [
    {
        title: "ConsignEasy",
        description:
            "A streamlined platform enabling consignors to manage inventory, sales, and consignor-consignee relationships with ease.",
            image: consignEasyImage,
        link: "#",
    },
    {
        title: "Vegan Bahara Bakery",
        description:
            "An innovative app showcasing tutorials from Bahara Bakery, vegan recipes, and a seamless online ordering system for bakery delights.",
        image: veganBakeryImage,
        link: "#",
    },
    {
        title: "TrackMate",
        description:
            "A personal asset tracker designed for organizing and tracking personal items with categories and reminders.",
        image: "asset-tracker.jpg",
        link: "#",
    },
    {
        title: "Guardian Patrol",
        description:
            "A web app for security teams to manage patrols with JWM devices, enabling real-time reporting and analytics.",
        image: "patrol-app.jpg",
        link: "#",
    },
    {
        title: "PitchPerfect",
        description:
            "An interactive solfege training app for musicians, offering pitch detection, progress tracking, and customizable exercises.",
        image: "solfege-app.jpg",
        link: "#",
    },
    {
        title: "TutorSync",
        description:
            "An online class management system for tutors to schedule lessons, track attendance, and share resources with students.",
        image: "class-management.jpg",
        link: "#",
    },
    {
        title: "GoldGuard",
        description:
            "A thief prevention system using RFID tags to secure gold shop inventory, with real-time alerts for unauthorized removals.",
        image: "gold-security.jpg",
        link: "#",
    },
    {
        title: "DocPal",
        description:
            "A personal doctor appointment manager app to schedule appointments, track prescriptions, and maintain medical history.",
        image: "doctor-appointment.jpg",
        link: "#",
    },
    {
        title: "KeyNotes",
        description:
            "An app designed for piano enthusiasts, combining digital sheet music, live feedback, and practice gamification.",
        image: "music-learning.jpg",
        link: "#",
    },
    {
        title: "GameHive",
        description:
            "A gaming companion app for managing custom Unity game projects, tracking player stats, and storing gameplay insights.",
        image: "game-hive.jpg",
        link: "#",
    },
];

const Projects = () => {
    return (
        <section className="projects">
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="image-overlay">
                            <img src={project.image} alt={project.title} />
                            <div className="overlay-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;