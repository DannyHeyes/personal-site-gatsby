import React, { useState } from 'react';
import classNames from 'classnames';

import Logo from '../../assets/icons/navbar-logo.png';
import Burger from '../../assets/icons/hamburger-icon.png'

import './navbar.css';
import { Link } from 'gatsby';

const Navbar = () => {

   const [isOpen, setOpen] = useState(false);

   const handleNavOpen = () => {
       setOpen(!isOpen);
   };

   const navClass = classNames('navList', classNames, {
       'open' : isOpen === true
   })

   

    return ( 
        <nav>
            <div>
                <img src={Logo} alt="danny heyes logo" />
            </div>
            <div className={navClass}>
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
            <div className="burgerDiv" onClick={handleNavOpen}>
                <img src={Burger} alt="hamburger icon for menu" />
            </div>
        </nav>
     );
}
 
export default Navbar;