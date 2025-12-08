import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

import { addItem, removeItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";
import { getLocation } from "../utils/getLocation";

const MenuError = () => (
  <div className="p-5 m-5 bg-red-100 text-red-800 font-bold rounded shadow">
    Menu details for this restaurant could not be fetched. Please try another restaurant.
  </div>
);

const RestaurantMenu = () => {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [menuFailed, setMenuFailed] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    (async () => {
      const loc = await getLocation();
      setCoords(loc);
    })();
  }, []);

  const restaurant = useRestaurant(resId, coords.lat, coords.lng, setMenuFailed);

  const restaurantHome = restaurant?.cards?.[2]?.card?.card?.info;
  const restaurantMenu =
    restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel;

  const dispatch = useDispatch();
  const addFoodItem = (item) => dispatch(addItem(item));
  const removeFoodItem = (item) => dispatch(removeItem(item));

  if (!restaurant && !menuFailed) return <Shimmer />;

  return (
    <div className="flex">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurantHome?.name}</h2>
        {restaurantHome?.cloudinaryImageId && (
          <img src={IMG_CDN_URL + restaurantHome.cloudinaryImageId} alt={restaurantHome?.name} />
        )}
        <h3 className="pl-5 m-2 bg-pink-100 font-bold shadow-lg">
          Area: {restaurantHome?.areaName}
        </h3>
        <h3 className="pl-5 m-2 bg-pink-100 font-bold shadow-lg">
          City: {restaurantHome?.city}
        </h3>
        <h3 className="pl-5 m-2 bg-pink-100 font-bold shadow-lg">
          Average Rating: {restaurantHome?.avgRating}
        </h3>
        <h3 className="pl-5 m-2 bg-pink-100 font-bold shadow-lg">
          Cost for Two: {restaurantHome?.costForTwo / 100} ₹
        </h3>
      </div>

      <div className="p-5">
        <h1>Menu</h1>
        {menuFailed ? (
          <MenuError />
        ) : restaurantMenu && Object.values(restaurantMenu).length > 0 ? (
          <ul>
            {Object.values(restaurantMenu).map((items) => (
              <li key={items?.dish?.info?.id}>
                {items?.dish?.info?.name} - {items?.dish?.info?.defaultPrice / 100} ₹
                <div>
                  <button className="p-2 m-2 bg-green-100" onClick={() => addFoodItem(items)}>
                    Add
                  </button>
                  <button className="p-2 m-2 bg-red-100" onClick={() => removeFoodItem(items)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
