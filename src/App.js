import React, {lazy, Suspense} from "react";
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



const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/about'));

const AppLayout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <br/>
            <Footer/>
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
                element:<Body/>        
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

