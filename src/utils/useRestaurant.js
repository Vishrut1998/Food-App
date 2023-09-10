import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant =(resId) => {
    const[restaurant, setRestaurant] = useState()
    //const [menuRestaurant, setMenuRestaurant] = useState();

    //get data from API

    useEffect(() => {
        getRestaurantMenu();
    },[]);

    async function getRestaurantMenu(){
        const data  = await fetch(FETCH_MENU_URL+resId);
        const json = await data.json();
        //console.log(json)
        //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards[0].card.info);
        //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        //console.log(json?.data?.cards[0]?.card?.card?.info)
        // setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        // setMenuRestaurant(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setRestaurant(json?.data)
    }
   
    return restaurant;
    

}

export default useRestaurant;