import React from 'react';
import Footer from '../../ui-components/footer/footer';
import Navbar from '../../ui-components/navbar/navbar';

import './index-layout.css';

const IndexLayout = (props) => {
    return ( 
        <div className="container">
            <Navbar/>
            <div className="content">
                {props.children}
            </div>
            <Footer/>
            
        </div>
     );
}
 
export default IndexLayout;