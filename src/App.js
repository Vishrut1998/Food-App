import React, {lazy, Suspense , useState} from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../src/components/navbar";
// import About from "./components/about";
import Body from "../src/components/body";
import Error from "./components/error";
import Contact from "./components/contact";
import RestaurantMenu from "./components/restaurantMenu";
import ProfileFunctional from './components/profile.js';
import Profile from "./components/profileClass";
// import Footer from "./src/components/footer";
import Footer from "../src/components/footer.js"
import Card from "../src/components/cards";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";



const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/about'));

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Vishrut S",
        email: "vishrut@gmail.com"
    })

    return(
        <>
        <UserContext.Provider value={{
            user:user,
            setUser:setUser,
        }}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </UserContext.Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body user={{name:"By Vishrut Sharma"}}/>        
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,
                children: [{
                    path:"profile",
                    element:<Profile/>
                }]        
            },
            {
                path:"/contact",
                element:<Contact/>        
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/instamart",
                element:
                <Suspense fallback={<Shimmer/>  }>
                    <Instamart/>
                </Suspense>
            }
        ]
        
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

