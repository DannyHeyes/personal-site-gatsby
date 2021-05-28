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
    "title": "Simple Blog Template",
    "information": "Simple blog template built with React/Gatsby, Sass and uses Contentful CMS for content creation. Includes uses of GraphQL for fetching Contentful data.",
    "link": "https://cranky-lalande-1bd987.netlify.app/"
  },
  {
    "id": 2,
    "title": "Poe & Hund Tailors",
    "information": "Static landing site for the Client, an independent Tailor. Built to increase their brand reach to potential customers. Simple HTML and CSS. ",
    "link": "https://poeandhund.com"
  },
  {
    "id": 3,
    "title": "Shortly URL Shortener",
    "information": "URL shortener site, using axios for http requests to a shortener APi. Styled with Sass and built with React/Gatsby using React Hooks to store returned data and display it.",
    "link": "https://tender-yalow-7fb95f.netlify.app/"
  }
]



const Index = () => {
  return ( 
    <PageLayout>
    <div className={wrapper}>

        <div className={imgDiv}>
          <img src={Profile} alt="" />
        </div>

        <div>
          <h1><span>I'm Danny</span> - a Frontend Developer based in Italy. With a strong focus on UI Engineering, I build fast and 
          user-oriented sites that propel start-ups to the forefront in good customer experiences. </h1>
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
