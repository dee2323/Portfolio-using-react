import React from "react";
import PatriclesBackground from "./PatriclesBackground";
import './style.css'

const Hero = () => {
    return (<section id="hero">
        <PatriclesBackground />
        <h1><span>Hi, My name is</span>Deema Saleem</h1>
        <p>Fresh Front-End Developer</p>
        <button><a href="#contact">Contact Me!</a></button>



    </section>)
}
export default Hero;