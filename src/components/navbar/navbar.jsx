import React from 'react';
import './navbar.css';
import { link } from 'react-scroll';
import logo from '../../assets/G.png';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <link className="desktopMenuListItem">Home</link>
                <link className="desktopMenuListItem">About Me</link>
                <link className="desktopMenuListItem">Portfolio</link>
                <link className="desktopMenuListItem">Contact</link>
                <link className="desktopMenuListItem">Resume</link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar;