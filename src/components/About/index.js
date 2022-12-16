import React from 'react'
import './style.css'
const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div class="inner">
                <div class="about-text">
                    <p>
                        Hi, I'm <span>Deema</span>, My interests are in FrontEnd, and I love to create
                        beautiful and
                        performant products with delightful user experiences.For now, I'm interested in learning React.
                        <span>Here some technologies i worked with:</span>
                        <br />
                        <i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i><i
                            class="fa-brands fa-js"></i><i class="fa-brands fa-react"></i><i class="fa-brands fa-php"></i><i
                                class="fa-brands fa-python"></i><i class="fa-brands fa-git-alt"></i>
                    </p>
                </div>
                <div class="about-pic">
                    <div class="wrapper">
                        <div class="image">
                            <img src="./assets/images/Deema.jpg" alt="Deema Saleem Picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;