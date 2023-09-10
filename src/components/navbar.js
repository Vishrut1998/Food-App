import React from 'react';
import { useState } from 'react';
import Logo from "../assets/images/villa.png";

import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';


const Title = () => (
    <a href='/'>
    <img alt='logo_image' className='h-28 rounded-md' src={Logo}/>
    </a>
)



const Navbar = () => {
    const [loggedIn , setLoggedIn] = useState(false);
    const isOnline = useOnline();
    return(
        <div className='flex justify-between bg-purple-100 shadow-lg'>
            <Title/>
            <div className='nav-items'>
                <ul className="flex py-10">
                    <Link to="/"><li className='px-2 border-4'>Home</li></Link>
                    <Link to="/about"><li className='px-2 border-b-8'>About</li></Link>
                    <Link to="/contact"><li className='px-2 border-4'>Contact Us</li></Link>
                        <li className='px-2 border-4'>Cart</li>
                    <Link to="/instamart"><li className='px-2 border-4'>Instamart</li></Link>
                    
                </ul>
            </div>
            <h1 className='py-10'>{isOnline?'🟢Online' : '🔴Offline'}</h1>
            {loggedIn ?<button onClick={() => setLoggedIn(false)}>Logout</button>:<button onClick={() => setLoggedIn(true)}>Login</button>}
        </div>

        
    )
}

export default Navbar