import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageLayout from './components/layout/layout';

import { wrapper, formDiv, successDiv, formGroup } from '../styles/contact.module.scss';

const Contact = () => {
    const [state, handleSubmit] = useForm("xqkwzrej");

    
    if (state.succeeded) {
        return (
            <PageLayout>
                <div className={successDiv}>
                    <h4>Thank you</h4>
                    <p>I will reply to your message as soon as possible.</p>
                </div>
            </PageLayout>
            
        );
    }
    
    return ( 
        <PageLayout>
        <div className={wrapper}>
            <h2>Contact</h2>
            
            <div>
                <h4>What i can do for you </h4>
                <p>As a frontend developer, I specialise in bringing designs to life. I focus on clean, simple builds that are 
                easy to update and change to suit any needs that you might have to improve the experience of your users. </p>
            </div>

            <div>
                <h4>How to hire me</h4>
                <div className={formDiv}>
                    <p>If you have an exciting project that you think fits my skill-set, please fill out the form below. 
                    In the text box, please include as much information as you can as this will help me to help you. </p>
                    <form onSubmit={handleSubmit}>
                        <div className={formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className={formGroup}>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <div className={formGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" cols="30" rows="10"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>
                        <button type="submit" disabled={state.submitting}>Submit message</button>
                    </form>
                </div>
            </div>
        </div>

        </PageLayout>
     );

     // Form return if the contact request is successful.
 

}
 
export default Contact;