import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import IndexLayout from '../layouts/index/index-layout';
import StyledHr from '../ui-components/styled-hr/hr';
import { danny } from '../data/personal-data';
import Github from '../assets/icons/github-green.png';
import Twitter from '../assets/icons/twitter-green.png';
import Instagram from '../assets/icons/instagram-green.png';
import Linkedin from '../assets/icons/linkedin-green.png';



import '../styles/contact.css';
import { SubmitBtn } from '../ui-components/buttons/buttons';
import { classNames } from 'classnames';

const Contact = () => {
    const [state, handleSubmit] = useForm("xqkwzrej");

    // Successful Form submission screen 
    if (state.succeeded) {
        return (
            <div className="contactWrapper">
                <IndexLayout>
                    <main>
                        <StyledHr/>
                        <div className="flex-wrapper">
                            <h1>Get in Touch</h1>
                            <div className='right-float'>
                                <p>{danny.contact} <br /> {danny.contact2}</p>
                                <div className="socialIcons">
                                    <a target="_blank" href="https://github.com/dannyheyes">
                                        <img src={Github} alt="" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/dannyheyes">
                                        <img src={Twitter} alt="" />
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/dannyheyes/">
                                        <img src={Instagram} alt="" />
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/daniel-heyes-222234a9/">
                                        <img src={Linkedin} alt="" />   
                                    </a> 
                                </div>   
                            </div>
                        </div>
                        <StyledHr/>
                    </main>

                    <h1>Contact Me</h1>
                    <div className="successMessage">
                        Thank you for your message, I will be in touch with you shortly! 
                    </div>
                </IndexLayout>
            </div>
        )
    }

    // Screen on load
    return (
        <div className="contactWrapper">
        <IndexLayout>
            <main>
                <StyledHr/>
                <div className="flex-wrapper">
                    <h1>Get in Touch</h1>
                    <div className='right-float'>
                        <p>{danny.contact} <br /> {danny.contact2}</p>
                        <div className="socialIcons">
                            <a target="_blank" href="https://github.com/dannyheyes">
                                <img src={Github} alt="" />
                            </a>
                            <a target="_blank" href="https://twitter.com/dannyheyes">
                                <img src={Twitter} alt="" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/dannyheyes/">
                                <img src={Instagram} alt="" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/daniel-heyes-222234a9/">
                                <img src={Linkedin} alt="" />   
                            </a> 
                        </div>   
                    </div>
                </div>
                <StyledHr/>
            </main>
            
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" placeholder="John Doe"/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" name="email" placeholder="example@example.com" />
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" cols="30" rows="10" placeholder="How can I help?"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>
                        <SubmitBtn disabled={state.submitting}>
                            send message
                        </SubmitBtn>
                        
                    </form>
        </IndexLayout>
        </div> 
     );
}
 
export default Contact;