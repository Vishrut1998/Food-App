import React from "react";


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
    const url = 'https://api.github.com/users/Vishrut1998';
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
            <h1>Profile Class Component</h1>
            <img src = {this.state.userInfo.avatar_url} style={{height:'200px', width:'200px'}}/>
            <h2>Name : {this.state.userInfo.login}</h2>
            <h3>Id : {this.state.userInfo.id}</h3>
            
           
        </div>
    }
}

export default Profile;