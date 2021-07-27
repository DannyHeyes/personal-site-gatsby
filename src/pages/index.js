import React from "react"
import PageLayout from "./components/layout/layout";
import Card from './components/card/card';

import { wrapper, imgDiv, skillsDiv, cardDiv, cardWrapper } from '../styles/home.module.scss';
import LaunchButton from './components/common/launchButton';
import { Link } from "gatsby";
import Profile from '../assets/profile.jpg';


const cards = [
  {
    "id": 1,
    "title": "RDW Joinery Services",
    "information": "Custom multi-page site for specialist joinery client. Site is built using React, and uses Sass for styling. Dependency includes react-router-dom for routing.",
    "link": "https://rdwjoinery.com"

  },
  {
    "id": 2,
    "title": "Simple Blog Template",
    "information": "Simple blog template built with React/Gatsby, Sass and uses Contentful CMS for content creation. Includes uses of GraphQL for fetching Contentful data.",
    "link": "https://cranky-lalande-1bd987.netlify.app/"
  },
  {
    "id": 3,
    "title": "Shortly URL Shortener",
    "information": "URL shortener site, using axios for http requests to a shortener APi. Styled with Sass and built with React/Gatsby using React Hooks to store returned data and display it.",
    "link": "https://tender-yalow-7fb95f.netlify.app/"
  },
  // {
  //   "id": 4,
  //   "title": "Poe & Hund Tailors",
  //   "information": "Static landing page for Independent Tailor. The client wanted a simple site to increase their online presence to reach more potential customers.",
  //   "link": "https://poeandhund.com"
  // }
]



const Index = () => {
  return ( 
    <PageLayout>
    <div className={wrapper}>

        <div className={imgDiv}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <h1><span>I'm Danny</span> - a Frontend Developer based in Italy. I focus on building fast, responsive sites with a strong focus on UI and UX development, helping propel small
          businesses to the forefront of good customer experience on the web. </h1>
        </div>

        <div className={skillsDiv}>
          <h2>Skills</h2>
          <ul>
            <li>
              <p><span>Web technologies and frameworks: </span>HTML, CSS</p>
            </li>
            <li>
              <p> <span>Scripts: </span>JavaScript, jQuery, Sass </p>
            </li>
            <li>
              <p> <span>UI Frameworks/Libraries: </span>React.js, Gatsby.js, Bootstrap, TailwindCSS</p>
            </li>
            <li>
              <p><span>Version Control: </span>Github, Git</p>
            </li>
          </ul>
        </div>

        <div className={cardDiv}>
          <h2>Latest Work</h2>

          <div className={cardWrapper}>
          {cards.map(card => (
            <Card key={card.id}>
              <div>
                <img src={require(`../assets/example-${card.id}.png`).default} alt="" />
              </div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.information}</p>
                <Link style={{ position: "absolute", bottom: "20px", left: "10px", color: "#000", textDecoration: "none" }} to={card.link} target="_blank">
                  <LaunchButton/>
                </Link>
              </div>
            </Card>
          ))}
          </div>

        </div>

      </div>
    </PageLayout>
   );
}
 
export default Index;
