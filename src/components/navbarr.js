import React from 'react';
import Icon from './../images/icon.png'
import './style.css'
export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="icon">
                <img src={Icon} alt="Icon" />
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Contact</li>

                </ul>
            </div>

        </div>
    );
}
