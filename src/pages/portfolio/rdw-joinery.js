import React from 'react';

import { insure, rdw, vcr } from '../../data/portfolio'
import ProjectLayout from '../../layouts/project/project-layout';

import './rdw-joinery.css';

const RdwJoinery = () => {
    return ( 
        <div className="rdwWrapper">
            <ProjectLayout 
            title={rdw.title}
            information={rdw.information}
            label={rdw.label}
            technologies={rdw.technologies}
            background={rdw.background}
            url="https://rdwjoinery.com"

            left={insure.title}
            right={vcr.short_title}
            previous="/portfolio/insure"
            next="/portfolio/vcr-fulfillment"
            />
        </div>
     );
}
 
export default RdwJoinery;