import React from 'react';
import { IconContext } from '@react-icons/all-files';
import { IoRocket } from '@react-icons/all-files/io5/IoRocket';

import { launchBtn } from './launchButton.module.scss';

const LaunchButton = () => {
    return ( 
        <button className={launchBtn}>
        <IconContext.Provider value={{ size: "1.7em"}}>
            <IoRocket/>
        </IconContext.Provider>
            <p>Launch Site</p>
        </button>
     );
}
 
export default LaunchButton;