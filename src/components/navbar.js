import React from 'react';
import { useState , useContext } from 'react';
import Logo from "../assets/images/villa.png";

import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';



const Title = () => (
    <a href='/'>
    <img alt='logo_image' className='h-28 rounded-md' src={Logo}/>
    </a>
)



const Navbar = () => {
    const [loggedIn , setLoggedIn] = useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)


    return(
        <div className='flex justify-between bg-purple-100 shadow-lg'>
            <Title/>
            <div className='nav-items'>
                <ul className="flex py-10">
                    <Link to="/"><li className=' px-2 pr-16 font-bold border-b-4 border-indigo-500'>Home</li></Link>
                    <Link to="/about"><li className='px-2 pl-[10px] pr-16 font-bold border-b-4 border-indigo-500'>About</li></Link>
                    <Link to="/contact"><li className='px-2 pr-16 font-bold border-b-4 border-indigo-500'>Contact Us</li></Link>
                    <Link to="/instamart"><li className='px-2 pr-16 font-bold border-b-4 border-indigo-500'>Instamart</li></Link>

                    <Link to="/cart"><li className='px-2 pr-16 font-bold border-b-4 border-indigo-500'>Cart - {cartItems.length} items</li></Link>
                    
                </ul>
            </div>
            <h1 className='py-10'>{isOnline?'🟢Online' : '🔴Offline'}</h1>
            <span className='p-10 font-bold text-red-900'>{user.name}</span>
            {/* {loggedIn ?<button onClick={() => setLoggedIn(false)}>Logout</button>:<button onClick={() => setLoggedIn(true)}>Login</button>} */}
        </div>

        
    )
}

export default Navbar