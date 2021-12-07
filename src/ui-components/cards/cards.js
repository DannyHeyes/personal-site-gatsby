import { Link } from 'gatsby';
import React from 'react';
import { PrimaryBtn } from '../buttons/buttons';
import StyledHr from '../styled-hr/hr';

import './cards.css';

const PortfolioIndexCard = ({ title, information, link}) => {
    return ( 
        <section className="indexCard">
            <div className="indexImg"></div>
            <div className="indexContent">
            <StyledHr/>
                <h2>{title}</h2>
                <p>{information}</p>
            <Link to={link}>
                <PrimaryBtn>
                    view project
                </PrimaryBtn>
            </Link>
            <StyledHr/>
            </div>
        </section>
     );
}
 
export default PortfolioIndexCard;