import {createContext} from 'react';


const UserContext = createContext({
    user:{
            name:"Vishrut Sharma",
            email:"test@gmail.com"
    }
});

export default UserContext;