import React from 'react';
import { Link } from 'gatsby';

import { header, title } from './header.module.scss';


const Header = () => {
    return ( 
        <header className={header}>
            <title>Home</title>
            <h1>
                <Link className={title} to="/">
                    Danny Heyes
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;