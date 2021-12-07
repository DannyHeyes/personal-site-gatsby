import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import './buttons.css';

const AboutBtn = (props) => {
    return ( 
        <button className="aboutButton">
            {props.children}
        </button>
     );
}
 
export default AboutBtn;

export const PrimaryBtn = (props) => {
    return ( 
        <button className="primaryBtn">
            {props.children}
        </button>
     );
}
 
export const SubmitBtn = (props) => {
    return (
        <button type="submit" className="submitBtn">
            {props.children}
        </button>
    )
}