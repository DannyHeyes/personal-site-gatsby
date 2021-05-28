import React from 'react';
import { Link } from 'gatsby';
import { IconContext } from '@react-icons/all-files';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'; 
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import { iconDiv } from './footer.module.scss';

const Footer = () => {
    return ( 
        <footer>
            <IconContext.Provider value={{ color: "#999999", size: "1.5em", margin: "20px"}}>
               <div className={iconDiv}>
               <Link to="https://twitter.com/dannyheyes" target="_blank">
                    <FaTwitter/>
                </Link>
                <Link to="https://instagram.com/dannyheyes" target="_blank">
                    <FaInstagram/>
                </Link>
                <Link to="https://github.com/dannyheyes" target="_blank">
                    <FaGithub/>
                </Link>
               </div> 
            </IconContext.Provider>
            <div>
            <p> © Danny Heyes. All Rights Reserved</p>
            </div>
            
        </footer>
     );
}
 
export default Footer;