import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { vcr, clock, rdw } from '../../data/portfolio';
import './vcr-fulfillment.css';

const VCR = () => {
    return ( 
        <div className="vcrWrapper">
        <ProjectLayout
        title={vcr.title}
        information={vcr.information}
        label={vcr.label}
        technologies={vcr.technologies}
        background={vcr.background}
        url="https://vcrfulfillment.com"

        left={rdw.title}
        right={clock.title}
        previous="/portfolio/rdw-joinery"
        next="/portfolio/clock-app"
        >

        </ProjectLayout>
        </div>
     );
}
 
export default VCR;