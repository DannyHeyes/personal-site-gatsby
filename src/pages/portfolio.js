import React from 'react';
import { GalleryCard } from './components/card/card';
import PageLayout from './components/layout/layout';

import { galleryWrapper,  container, overlayDiv } from '../styles/portfolio.module.scss'

const projects = [
    {
        "id": 1,
        title: "Infinite scroll page using Unsplash API."
    },
    {
        "id": 2,
        title: "Simple dark mode page toggler using local storage for keeping theme."
    },
    {
        "id": 3,
        title: "JS Accordion page, highlighting how FAQs can be added to a page."
    },
    {
        "id": 4,
        title: "Coming soon page for clothing company with custom email validation."
    },
    {   
        "id": 5,
        title: "Showing multiple reviews using CSS grid to create a mosaic effect."
    },
    {
        "id": 6,
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