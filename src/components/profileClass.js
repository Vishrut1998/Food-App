import React from "react";
import { FETCH_GITHUB_PROFILE_LINK } from "../constants";


class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                login : "User Name",
                id : "User Id",
                
            }
        }
        
        console.log("Child Constructor")
    }

   async componentDidMount(){
    const url = FETCH_GITHUB_PROFILE_LINK;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo : json
    })
        console.log("Child ComponentDidmount");
    }

    render(){
        console.log("Child Render")
        return <div>
            
            <div className="relative">
            <h2 className=" font-sans text-xl">Name : {this.state.userInfo.login}</h2>
            </div>
            <img className="absolute inset-y-50 right-0 h-[400px] w-[400px] mr-[250px] rounded-lg" src = {this.state.userInfo.avatar_url}/>
            
           
        </div>
    }
}

export default Profile;