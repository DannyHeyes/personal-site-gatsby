import React from 'react';
import { PrimaryBtn } from '../../ui-components/buttons/buttons';
import CtaSection from '../../ui-components/cta-section/cta-section';
import Footer from '../../ui-components/footer/footer';
import StyledHeaderImg from '../../ui-components/styled-header-img/styled-header-img';
import StyledHr from '../../ui-components/styled-hr/hr';
import Navbar from './../../ui-components/navbar/navbar';

import './project-layout.css';
import ProjectNav from './../../ui-components/project-nav/project-nav';

const ProjectLayout = ({ title, information, label, technologies, background, url, left, right, previous, next }) => {
    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                <StyledHeaderImg/>
                <section className="projectInformation">
                    <StyledHr/>
                    <h1>{title}</h1>
                    <p>{information}</p>
                    <h6>{label} <br /> {technologies}</h6>

                    <a href={url} target="_blank">
                        <PrimaryBtn>
                            visit website
                        </PrimaryBtn>
                    </a>
                    <StyledHr/>
                </section>

                <main className="projectMain">
                    <h2>Project Background</h2>
                    <p>{background}</p>

                    <div className="previewImageWrapper">
                        <h2>Static Preview</h2>
                        <div className="previewImg previewOne"></div>
                        <div className="previewImg previewTwo"></div>
                    </div>
                </main>
                <ProjectNav
                left={left}
                right={right}
                previous={previous}
                next={next} />
                
            <CtaSection/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ProjectLayout;