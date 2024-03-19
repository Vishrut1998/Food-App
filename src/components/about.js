import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileFunctional from './profile.js';
import Profile from "./profileClass";



class About extends React.Component{
   
    constructor(props){
        super(props);
       
        console.log("Parent constructor")
    }

    componentDidMount(){
        //Best Place to make an API call as it is after render
        

        console.log("Parent compoenentDidMount")
    }

    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About Page</h1>
                <Profile name={'Vishrut Class'}/>
                <p>
                    This is Vishrut Sharma's Food Villa
                </p>
                <p>Click <a href='https://portfoliovishrut.netlify.app/' target="_blank">here</a> for my other works</p>
                
                
            </div>
        )
    }
}

export default About;     