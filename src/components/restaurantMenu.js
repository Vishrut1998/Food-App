import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from '../constants';
import "../styles/menu.css";    
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";


const RestaurantMenu = () => {

    const {resId} = useParams();
    const restaurant = useRestaurant(resId);
    const restaurantHome = restaurant?.cards[0]?.card?.card?.info;
    const restaurantMenu = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (!restaurant) ? <Shimmer/> : (
        <div className="menu">
            <div>
            <h1>Restaurant id : {resId}</h1>
            <h2>{restaurantHome?.name}</h2>
            <img src={IMG_CDN_URL + restaurantHome?.cloudinaryImageId}/>
            <h3>{restaurantHome?.areaName}</h3>
            <h3>{restaurantHome?.city}</h3>
            <h3>{restaurantHome?.avgRating}</h3>
            <h3>{restaurantHome?.costForTwo}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        Object.values(restaurantMenu)?.map((items) => <li key={items?.card?.info?.id}>{items?.card?.info?.name} - {items?.card?.info?.price/100+' ₹'}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;