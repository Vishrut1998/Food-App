import React from 'react';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () =>{
    const {user} = useContext(UserContext)
    return ( 
        <>
        <h4 className='p-3 m-10 font-bold text-gray-600'>This site is devloped by {user.name}.</h4>
        <h4 className='p-3 m-10 font-bold text-gray-600'>Contact at : {user.email}</h4>
        </>
    )
}

export default Footer;