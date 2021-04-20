import React from 'react';
import './style.css'
export default function SkillSet() {
    return (
        <div >
            <h1 style={{textAlign:'center'}} >About me</h1>
            <div className="about-container">
                <div className="about-div"><h3>Contact Me</h3>
                    <p>
                        You can Contact me at <br/>
                        <div className='links'>
                        <a href="https://facebook.com/abdulwaqar844">Facebook</a>
                        <a href="https://github.com/abdulwaqar844">github</a>
                        <a href="https://twitter.com/abdulwaqar844">Twitter</a>
                        </div>
                </p>
                </div>
                <div className="about-div"><h3>About Me</h3>
                    <p>
                        I am Full Stack Web Developer
                </p>
                </div>
            </div>

        </div>
    );
}
