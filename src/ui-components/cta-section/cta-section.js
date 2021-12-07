import React from 'react';
import { PrimaryBtn } from '../buttons/buttons';

import './cta-section.css';
import { Link } from 'gatsby';
import StyledHr from '../styled-hr/hr';

const CtaSection = () => {
    return ( 
        <section className="ctaSection">
            <h1>Interested in doing a project together?</h1>
            <StyledHr/>
            <Link to="/contact">
                <PrimaryBtn>contact me</PrimaryBtn>
            </Link>
        </section>
     );
}
 
export default CtaSection;