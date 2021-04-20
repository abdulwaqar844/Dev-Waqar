import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './style.css'
export default function menu() {
    return (
        <div className="menu-items">
            <a href="https://www.facebook.com/abdulwaqar844">{<FacebookIcon/>}</a>
            <a href="https://www.twitter.com/abdulwaqar844">{<TwitterIcon/>}</a>
            <a href="https://www.GitHub.com/abdulwaqar844">{<GitHubIcon/>}</a>
            <a href="https://www.instaGram.com/abdulwaqar844">{<InstagramIcon/>}</a>
            <a href="+923054051834">{<CallIcon/>}</a>
            <a href="mailto:abdulwaqar844@gmail.com">{<MailOutlineIcon/>}</a>


        </div>
    )
}