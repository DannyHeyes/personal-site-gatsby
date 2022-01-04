import React from "react"

import IndexLayout from "../layouts/index/index-layout";
import '../styles/index.css';
import AboutBtn, { PrimaryBtn } from "../ui-components/buttons/buttons";
import CtaSection from "../ui-components/cta-section/cta-section";
import { danny } from './../data/personal-data';
import StyledHr from './../ui-components/styled-hr/hr';
import Arrows from '../assets/icons/down-arrow-icon.png'
import { Link } from "gatsby";


const Index = () => {

  
  return ( 
    <IndexLayout>
      <main className="main">
        <div className="mainBgHero"></div>
        <div className="mainContent">
          <h1>{danny.header}</h1>
          <Link to='#about'>
              <AboutBtn >
                <div>
                  <img src={Arrows} alt="" />
                </div>
                <p>{danny.about}</p>
              </AboutBtn>
            </Link>
        </div>
      </main>

      <section id="about" className="about">
        <div className="profileImg"></div>
        <div className="profileContent">
          <StyledHr/>
          <h1>{danny.about}</h1>
          <p>{danny.profile}</p>
          <Link to="/portfolio">
            <PrimaryBtn>go to portfolio</PrimaryBtn>
          </Link>
          <StyledHr/>
          </div>
      </section>

      <CtaSection/>
    </IndexLayout>
   );
}
 
export default Index;
