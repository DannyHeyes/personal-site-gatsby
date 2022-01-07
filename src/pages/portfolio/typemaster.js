import React from 'react';
import ProjectLayout from '../../layouts/project/project-layout';

import { typemaster, rdw, clock } from '../../data/portfolio';
import './typemaster.css';

const Typemaster = () => {
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
        right={rdw.title}
        next="/portfolio/rdw-joinery"
        previous="/portfolio/clock-app"
        >

        </ProjectLayout>
        </div>
     );
}
 
export default Typemaster;