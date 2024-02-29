import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



export default function Navbar() {
    return (
        <nav className='flex'>
            <About />
            <Home />
            <Contact />
        </nav>
    )
}
