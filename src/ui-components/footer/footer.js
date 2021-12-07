import React from 'react';
import { Link } from 'gatsby';

import Logo from '../../assets/icons/navbar-logo.png';
import Github from '../../assets/icons/github-white.png';
import Twitter from '../../assets/icons/twitter-white.png';
import Instagram from '../../assets/icons/instagram-white.png';
import Linkedin from '../../assets/icons/linkedin-white.png';

import './footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div className="footerLogo">
                <img src={Logo} alt="" />
            </div>
            <div className="footerNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact me</Link>
                </li>
            </ul>               
            </div>
            <div className="socialIcons">
                <a target="_blank" href="https://github.com/dannyheyes/">
                    <img src={Github} alt="github icon" />
                </a>
                <a target="_blank" href="https://twitter.com/dannyheyes">
                    <img src={Twitter} alt="twitter icon" />
                </a>
                <a target="_blank" href="https://www.instagram.com/dannyheyes/">
                    <img src={Instagram} alt="instagram icon" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/daniel-heyes-222234a9/">
                    <img src={Linkedin} alt="linkedin icon" />
                </a>  
            </div>
        </footer>
     );
}
 
export default Footer;