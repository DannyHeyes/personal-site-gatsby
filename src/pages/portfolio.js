import React from 'react';
import { GalleryCard } from './components/card/card';
import PageLayout from './components/layout/layout';

import { galleryWrapper,  container, overlayDiv } from '../styles/portfolio.module.scss'

const projects = [
    {
        "id": 1,
        title: "JS Accordion page, highlighting how FAQs can be added to a page."
    },
    {
        "id": 2,
        title: "Coming soon page for clothing company with custom email validation."
    },
    {   
        "id": 3,
        title: "Showing multiple reviews using CSS grid to create a mosaic effect."
    },
    {
        "id": 4,
        title: "Article preview using eventListener on share button displaying custom tooltip."
    }
]

const Portfolio = () => {
    return ( 
        <PageLayout>
            <h2>Current Portfolio</h2>
            <p>This includes single page sites, as well as small micro-projects which can be included into bigger pages. </p>

            <div className={galleryWrapper}>
                {projects.map(project => (
                    <GalleryCard>
                    <div className={container}>
                        <img src={require(`../assets/gallery/gallery-${project.id}.png`).default} alt="" />
                        <div className={overlayDiv}>
                            <p>{project.title}</p>
                        </div>
                    </div>
                    </GalleryCard>
                ))}
            </div>
        </PageLayout>
     );
}
 
export default Portfolio;