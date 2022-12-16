import React from "react";
import './style.css'
const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div class="contact-wrapper">
                <div class="form" role="form">
                    <form>
                        <div class="labels">
                            <label for="name" class="name">Name</label>
                            <label for="email" class="email">Email</label>
                        </div>

                        <div class="inputWrapper">

                            <input type="text" id="name" name="name" placeholder="Enter your name" required />

                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <textarea placeholder="Enter your message" name="message" required></textarea>
                        <button id="btn" type="submit"><i class="fa fa-paper-plane"></i></button>
                    </form>
                </div>
                <div class="location">
                    <div class="contact-me eamil"> <i class="fa-solid fa-envelope">
                    </i>
                        <p>deemasleem1@gmail.com</p>
                    </div>
                    <div class="contact-me address"><i class="fa-solid fa-location-pin"></i>
                        <p>Qalqilya, Azzon</p>
                    </div>

                    <h3>
                        FIND ME <br />
                        Feel free to connect with me!
                    </h3>
                </div>

            </div>
        </section>
    )
}
export default Contact;