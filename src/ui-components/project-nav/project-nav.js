import { Link } from 'gatsby';
import React from 'react';

import LeftArrow from '../../assets/icons/left-arrow-icon.png';
import RightArrow from '../../assets/icons/right-arrow-icon.png';

import './project-nav.css';


const ProjectNav = ({ left, right, next, previous }) => {
    return (  
        <div className="navigationDiv">
            
            <div className="rotated">
                <div className="btn btnLeft">
                <Link to={previous}>
                    <img src={LeftArrow} alt="" />
                    <p>{left}</p>
                    <span>Previous Project</span>
                </Link>
                </div>
                
                <div className="btn btnRight">
                    <Link to={next}>
                        <img src={RightArrow} alt="" />
                        <p>{right}</p>
                        <span>Next Project</span>
                    </Link>
                </div>
            </div>
          
        </div>
    );
}
 
export default ProjectNav;