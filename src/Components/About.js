import React from "react";

export default function About() {
    return(
        <div className="about-container">
            <h1 className="name" style={{color:"#FFFFFF"}}>Kirtan Patel</h1>
            <h4 className="designation" style={{color:"#F3BF99"}}>Software Developer</h4>
            <h5 className="web" style={{color:"#F5F5F5"}}>kirtan.website</h5>
            <a className="email-btn" ms-hide-element="true" >Email</a>
            <a className="linkedin-btn" ms-hide-element="true" >linkedin</a>
            <h3 className="abt-title" style={{color:"#F5F5F5"}}>About</h3>
            <p className="abt-des" style={{color:"#DCDCDC"}}>I am a Software Developer with a problem solving minset. I try to be calm in every situation and focused on how can i make my-self more better.</p>
            <h3 className="int-title" style={{color:"#F5F5F5"}}>Interests</h3>
            <p className="int-des" style={{color:"#DCDCDC"}}>I love to make food and eat food, I like more adventures place for traveling and also like to explore new things.</p>
        </div>
    )
}