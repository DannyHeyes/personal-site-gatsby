import React from 'react';
import { IoRocket } from '@react-icons/all-files/io5/IoRocket';

import './launchButton.module.scss';

const LaunchButton = () => {
    return ( 
        <button>
            <IoRocket/>
            <p>Launch Site</p>
        </button>
     );
}
 
export default LaunchButton;