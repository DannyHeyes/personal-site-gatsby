import React from 'react';

import { typemaster, rdw, vcr } from '../../data/portfolio'
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

            left={typemaster.title}
            right={vcr.short_title}
            previous="/portfolio/typemaster"
            next="/portfolio/vcr-fulfillment"
            />
        </div>
     );
}
 
export default RdwJoinery;