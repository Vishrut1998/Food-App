import React from 'react';
import Card from './cards';
import {resutrantData} from "../constants.js";
import RestaurantMenu from './restaurantMenu';
import Shimmer from './shimmer';
import "../styles/cards.css";
import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';




const Body = () => {
    
    const [allResturants, setAllResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchTxt, setSearchTxt] = useState();
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        
        getRestuarants();

    }, []);

    async function getRestuarants(){
        
        try{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        const restaurantList = json?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants;
        //console.log(restaurantList);
        setFilteredResturants(restaurantList);
        setAllResturants(restaurantList);
        //console.log(restaurantList,"vishrut")
        }
        catch(error){
            console.log(error)
        }
    }

    const offline = useOnline();

    if(!offline){
        return(<h1>Offline, Please check your internet connection</h1>)
    }

    if(!allResturants) return null;

   // if(filteredResturants?.length===0) return <h1>No restaurant matched your search</h1>


    return (filteredResturants?.length === 0) ? <Shimmer/> : (
        <>
        <div className='search-container p-5 bg-pink-50 my-2'>
            <input type="text" className='focus:bg-teal-100 p-2 m-2' placeholder='Search'  onChange={(e) => {
                setSearchTxt(e.target.value)
            }}/>
            <button className='px-5 py-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-lg' onClick={() => {
                const data = filterData(searchTxt,allResturants)
                setFilteredResturants(data)  
            }}>Search</button>
            <input className='focus:bg-teal-100 p-2 m-2' value={user.name} onChange={
                e => setUser({
                    ...user,
                    name : e.target.value,
                })
            }></input>
            <input className='focus:bg-teal-100 p-2 m-2' value={user.email} onChange={
                e => setUser({
                    ...user, 
                    email: e.target.value
                })
            }></input>
           
        </div>



        <div className='flex flex-wrap'>

            {
                filteredResturants.map(restaurant => {
                    
                    return  <Link  to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><Card {...restaurant.info} key={restaurant.info.id} user={user}/></Link>
                })
            }        

            
        </div>
        </>
    )
}



export default Body;