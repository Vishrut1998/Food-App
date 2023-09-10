import React from 'react';

import { IMG_CDN_URL} from '../constants';
import { setMaxListeners } from 'process';
import { setFlagsFromString } from 'v8';





const Card = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {


    return(
        <div className='w-[200px] p-2 m-5 shadow-lg bg-pink-50'>
            <img src={IMG_CDN_URL + cloudinaryImageId}/> 
            <h2 className='font-bold text-l'>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default Card;