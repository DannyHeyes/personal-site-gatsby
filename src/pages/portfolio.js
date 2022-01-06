import React from 'react';
import IndexLayout from './../layouts/index/index-layout';
import StyledHr from './../ui-components/styled-hr/hr';

import { vcr, clock, insure, rdw, typemaster } from '../data/portfolio';
import { PrimaryBtn } from '../ui-components/buttons/buttons';

import '../styles/portfolio.css';
import { Link } from 'gatsby';
import CtaSection from '../ui-components/cta-section/cta-section';
import PortfolioIndexCard from '../ui-components/cards/cards';


const Portfolio = () => {
    return ( 
        <IndexLayout>
        <div className="portfolioWrapper">

            <section className="vcrWrapper">
                <PortfolioIndexCard 
                title={vcr.title}
                information={vcr.information}
                link="/portfolio/vcr-fulfillment"
                />
            </section>
            <section className="clockWrapper">
                <PortfolioIndexCard 
                title={clock.title}
                information={clock.information}
                link="/portfolio/clock-app"
                />
            </section>
            <section className="typemasterWrapper">
                <PortfolioIndexCard
                title={typemaster.title}
                information={typemaster.information}
                link="/portfolio/typemaster" />
            </section>
            <section className="rdwWrapper">
                <PortfolioIndexCard 
                title={rdw.title}
                information={rdw.information}
                link="/portfolio/rdw-joinery"
                />
            </section>

           

            </div>

            <CtaSection/>
        </IndexLayout>
        
     );
}
 
export default Portfolio;