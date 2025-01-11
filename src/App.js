import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Certificates from './components/Certificates';


function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <Navbar />
            <Homepage />
            <section id="about" data-aos="fade-up"><About /></section>
            <section id="projects" data-aos="fade-right"><Projects /></section>
            <section id="services" data-aos="fade-left"><Services /></section>
            <section id="certificates"><Certificates /></section>
            <section id="contact" data-aos="zoom-in"><Contact /></section>
        </>
    );
}

export default App;