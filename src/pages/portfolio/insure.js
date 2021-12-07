import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { clock, insure, rdw } from '../../data/portfolio';

import './insure.css'

const InsurePage = () => {
    return ( 
        <div className="insureWrapper">
            <ProjectLayout 
            title={insure.title}
            information={insure.information}
            label={insure.label}
            technologies={insure.technologies}
            background={insure.background}
            url="#"

            left={clock.title}
            right={rdw.short_title}
            previous="/portfolio/clock-app"
            next="/portfolio/rdw-joinery"
            />
        </div>
     );
}
 
export default InsurePage;