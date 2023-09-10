import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileFunctional from './profile.js';
import Profile from "./profileClass";

const About1 = () =>{
    return(
        <div>
            <h1>About Page</h1>
            <p>
                This is Vishrut Sharma's Food Villa
            </p>
            <ProfileFunctional name={'Vishrut'}/>
            <Profile name={'Vishrut Class'}/>
        </div>
    )
}

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
                <p>
                    This is Vishrut Sharma's Food Villa
                </p>
                <ProfileFunctional name={'Vishrut'}/>
                <Profile name={'Vishrut Class'}/>
            </div>
        )
    }
}

export default About;     