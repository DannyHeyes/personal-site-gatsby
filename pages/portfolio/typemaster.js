import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { clock, typemaster, rdw } from '../../data/portfolio';

import './typemaster.css'

const InsurePage = () => {
    return ( 
        <div className="typemasterWrapper">
            <ProjectLayout 
            title={typemaster.title}
            information={typemaster.information}
            label={typemaster.label}
            technologies={typemaster.technologies}
            background={typemaster.background}
            url="https://dannyheyes-typemaster.netlify.app/"

            left={clock.title}
            right={rdw.short_title}
            previous="/portfolio/clock-app"
            next="/portfolio/rdw-joinery"
            />
        </div>
     );
}
 
export default InsurePage;