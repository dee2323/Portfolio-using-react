import React from "react";
const Card = ({ img, alt, title, description, githubUrl }) => {
    return (

        <div class="container">
            <img src={img}
                alt={alt}
                class="image" />
            <div class="overlay">
                <div class="text">
                    <h3 class="title"> {title}</h3>

                    <p>{description}</p>

                    <a class="github" href={githubUrl} target="_blank"><i
                        class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Card;