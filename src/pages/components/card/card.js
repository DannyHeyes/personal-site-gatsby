import React from 'react';

import { card, galleryCard } from './card.module.scss'

const Card = (props) => {
    return ( 
        <div className={card}>
            {props.children}
        </div>
     );
}
 
export default Card;


export const GalleryCard = (props) => {
    return ( 
        <div className={galleryCard}>
            {props.children}
        </div>
     );
}
 
