import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { clock, vcr, insure } from '../../data/portfolio';

import './clock-app.css';

const ClockApp = () => {
    return ( 
        <div className="clockWrapper">
            <ProjectLayout
            title={clock.title}
            information={clock.information}
            label={clock.label}
            technologies={clock.technologies}
            background={clock.background}
            url="https://dannyheyes-clock-app.netlify.app/"

            left={vcr.short_title}
            right={insure.title}
            previous="/portfolio/vcr-fulfillment"
            next="/portfolio/insure"
             />
        </div>
    );
}
 
export default ClockApp;