import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
    return (
        <>
            <Navbar />
            <Homepage />
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="services"><Services /></div>
            <div id="contact"><Contact /></div>
        </>
    );
}

export default App;