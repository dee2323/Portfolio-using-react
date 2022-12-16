import React from "react";
import './style.css'
const Navbar = () => {
    return (<header>
        <nav class="navbar">
            <span class="logo"><a href="#">D</a></span>
            <a class="active" href="#about"> About</a>
            <a href="#works">Work</a>
            <a href="#contact">Contact</a>
            <a href="assets/DeemaIsleemCV.pdf" class="resume" target="_blank">Resume</a>
        </nav>
    </header>)
}
export default Navbar;