import React from 'react'
import "./about.css"
export default function About() { 
    return (
        <div className="about-banner">
            <div className="about-banner overlay">
                <h2 className="about-title">ABOUT</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae sapiente odit enim labore doloremque aperiam iure blanditiis, nihil corrupti provident corporis at deleniti ratione recusandae omnis ea necessitatibus alias perferendis quasi! Exercitationem molestiae iusto facere commodi? Enim veniam explicabo et ut, alias, deserunt corrupti neque fugit libero recusandae ullam nobis nisi molestias incidunt mollitia placeat eos fugiat repudiandae quos nihil!</p>
            
                <h2 className="our-team">Our Team</h2>
                <div className="about-team">
                    <div className="team-member">
                        <img src={require("./team/lorem (1).jpg")} alt="lorem1"/>
                        <p>Lorem1</p>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                    <div className="team-member">
                        <img src={require("./team/lorem (2).jpg")}  alt="lorem2"/>
                        <p>Lorem2</p>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                    <div className="team-member">
                        <img src={require("./team/lorem (3).jpg")}  alt="lorem3"/>
                        <p>Lorem3</p>
                        <span>Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                </div>
            
                <div className="about-social-medias">
                    <div className="about-social-medias-container">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                        <i className="fab fa-github" aria-hidden="true"></i>
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
