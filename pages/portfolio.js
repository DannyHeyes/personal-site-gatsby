import React from 'react';
import IndexLayout from './../layouts/index/index-layout';
import CtaSection from '../ui-components/cta-section/cta-section';
import PortfolioIndexCard from '../ui-components/cards/cards';

import { vcr, clock, typemaster, rdw } from '../data/portfolio';

import '../styles/portfolio.css';


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
                link="/portfolio/typemaster"
                />
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