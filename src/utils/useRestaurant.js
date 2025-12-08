    import { useState, useEffect } from "react";
    import { SWIGGY_PROXY, FETCH_MENU_URL } from "../constants";

    const useRestaurant = (resId, lat, lng) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        if (!lat || !lng || !resId) return;
        getRestaurantMenu();
    }, [lat, lng, resId]);

    async function getRestaurantMenu() {
        try {
        const qs = `?type=menu&lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}&restaurantId=${resId}`;
        const url = `${SWIGGY_PROXY}/${qs}`;

        console.log("Calling Proxy URL:", url);

        const res = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${resId}`);
        // console.log("Hello=>>>>",res.json())
        if (!res.ok) {
            console.error("Proxy fetch failed:", res.status);
            return;
        }
        const jsonData = await res.json();
        console.log("Proxy response JSON:", jsonData);

        setRestaurant(jsonData?.data);
        } catch (err) {
        console.error("Proxy error:", err);
        }
    }

    return restaurant;
    };

    export default useRestaurant;
