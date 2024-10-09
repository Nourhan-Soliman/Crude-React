import React from 'react';
import aboutImage from '../Assets/about1jpg-removebg-preview.png'; 
// import About from './About';
function About() {
    return (
        <div id="about_page" className="about-page">
            <div>
                <img src={aboutImage} alt="About Us" className="about-image" />
            </div>
            <div className="about_heads">
                <h3>About Us</h3>
                <h1>Get to know more about us</h1>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet gravida quis duis tellus ultrices donec sollicitudin nisl.</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet gravida quis duis tellus ultrices donec sollicitudin nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet gravida quis duis tellus ultrices donec sollicitudin nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    );
}

export default About;
