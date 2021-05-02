import React from 'react';
import './style.css'
export default function SkillSet() {
    return (
        <div >
            <h1 style={{ textAlign: 'center' }} >About me</h1>
            <div className="about-container">
                <div className="about-div"><h3>Contact Me</h3>
                    <p>
                        <div className='links'>
                            <a href="https://facebook.com/abdulwaqar844">Facebook</a>
                            <a href="https://github.com/abdulwaqar844">Github</a>
                            <a href="https://twitter.com/abdulwaqar844">Twitter</a>
                        </div>
                    </p>
                </div>
                <div >
                    <h3>About Me</h3>
                    <p className="into-section">
                        My Name is Abdul Waqar. I am FullStack Developer with Expertise in HTML, CSS, ReactJS,Gatsby,NodeJS,Netlify Functions, Express , AWS Lambda, DynamoDB, MongoDB,FaunaDB,MySQL , Postgress, AWS Neptune,REST APIs, GraphQL API,                 </p>
                </div>
            </div>
            <h1 style={{ textAlign: 'center' }} >Developed By <a style={{
                color: "rgba(68, 101, 212, 0.747)"
            }} href="https://github.com/abdulwaqar844">Waqar</a> </h1>

        </div>
    );
}
