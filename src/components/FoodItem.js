import React from 'react';
import { IMG_CDN_URL} from '../constants';






const FoodItem = ({name, description, imageId, price}) => {

    return(
        <div className='w-[200px] p-2 m-5 shadow-lg bg-pink-50'>
            <img src={IMG_CDN_URL + imageId}/> 
            <h2 className='font-bold text-l'>{name}</h2>
            <h3>{description}</h3>
            <h4>{price / 100} ₹</h4>
           
        </div>
    )
}

export default FoodItem;