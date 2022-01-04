import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { clock, vcr, typemaster } from '../../data/portfolio';

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
            url="#"

            left={vcr.short_title}
            right={typemaster.title}
            previous="/portfolio/vcr-fulfillment"
            next="/portfolio/typemaster"
             />
        </div>
    );
}
 
export default ClockApp;