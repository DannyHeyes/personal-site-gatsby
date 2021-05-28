import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

import { container, content} from './layout.module.scss';

const PageLayout = (props) => {
    return ( 
        <div className={container}>
            <div className={content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default PageLayout;