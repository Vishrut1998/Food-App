import { useState, useEffect } from "react";

const useRestaurant = (resId, lat, lng, setMenuFailed) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (!lat || !lng || !resId) return;

    const getRestaurantMenu = async () => {
      try {
        const res = await fetch(
          `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${resId}`
        );

        if (!res.ok) {
          console.error("Menu fetch failed:", res.status);
          setMenuFailed(true);
          return;
        }

        const jsonData = await res.json();

        if (!jsonData?.data) {
          console.warn("Menu data not found for this restaurant");
          setMenuFailed(true);
          return;
        }

        setRestaurant(jsonData.data);
        setMenuFailed(false);
      } catch (err) {
        console.error("Menu fetch error:", err);
        setMenuFailed(true);
      }
    };

    getRestaurantMenu();
  }, [resId, lat, lng, setMenuFailed]);

  return restaurant;
};

export default useRestaurant;
