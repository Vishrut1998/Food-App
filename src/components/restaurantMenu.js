import { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from '../constants';

import { addItem, removeItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";


const RestaurantMenu = () => {

    const {resId} = useParams();
    const restaurant = useRestaurant(resId);
    const restaurantHome = restaurant?.cards[0]?.card?.card?.info;
    const restaurantMenu = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
    const removeFoodItem = (item) => {
        dispatch(removeItem(item))
    }

    return (!restaurant) ? <Shimmer/> : (
        <div className="flex">
            <div>
            <h1>Restaurant id : {resId}</h1>
            <h2>{restaurantHome?.name}</h2>
            <img src={IMG_CDN_URL + restaurantHome?.cloudinaryImageId}/>
            <h3 className="pl-5  m-2 bg-pink-100 font-bold shadow-lg">Area : {restaurantHome?.areaName}</h3>
            <h3 className="pl-5  m-2 bg-pink-100 font-bold shadow-lg">City : {restaurantHome?.city}</h3>
            <h3 className="pl-5  m-2 bg-pink-100 font-bold shadow-lg">Avergae Rating : {restaurantHome?.avgRating}</h3>
            <h3 className="pl-5  m-2 bg-pink-100 font-bold shadow-lg">Cost for Two : {restaurantHome?.costForTwo/100 +'₹'}</h3>
            </div>

            <div className="p-5">
                <h1>Menu</h1>
                <ul >
                    {
                        Object.values(restaurantMenu)?.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name} - {items?.card?.info?.price/100+' ₹'} 
                        <div >
                        <button className="p-2 m-2 bg-green-100" onClick={() => {addFoodItem(items)}}>Add</button><button className="p-2 m-2 bg-red-100" onClick={() => {removeFoodItem(items)}}>Remove</button>
                        </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;