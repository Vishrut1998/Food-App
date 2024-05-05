import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./profile.js";
import Profile from "./profileClass";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import useOnline from "../utils/useOnline";
import Offline from "./offline.js";

const aboutHeading = {
  fontFamily: "sans-serif",
  fontSize: "xxx-large",
  padding: "10px",
  marginLeft: "40px",
  marginTop: "10px",
  width: "336px",
};



// if (!offline) {
//   return <h1>Offline, Please check your internet connection</h1>;
// }

const About = () => {
  const offline = useOnline();
  return ( !offline ?<Offline /> : 
    <div style={{ height: "60vh" }}>
      {/* <h1 style={aboutHeading}>About Page</h1> */}
      <Box
        height={400}
        width={600}
        my={4}
        marginLeft={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        p={2}
        ml={40}
        sx={{ border: "none" }}
      >
        <Profile name={"Vishrut Class"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "xxx-large" }}>
          This is Vishrut Sharma's Food Villa
        </p>
        <p style={{ fontFamily: "sans-serif", fontSize: "xxx-large" }}>
          Click{" "}
          <a
            href="https://portfoliovishrut.netlify.app/"
            target="_blank"
            style={{ border: "2px solid black", padding: "2px" }}
          >
            here
          </a>{" "}
          to checkout my personal portfolio.
        </p>
      </Box>
    </div>
  );
};
// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log("Parent constructor");
//   }

//   componentDidMount() {
//     //Best Place to make an API call as it is after render

//     console.log("Parent compoenentDidMount");
//   }

//   render() {

//     if(!offline){
//         return(<h1>Offline, Please check your internet connection</h1>)
//     }
//     console.log("Parent render");
//     return (
//       <div style={{height: '60vh'}}>
//         {/* <h1 style={aboutHeading}>About Page</h1> */}
//         <Box
//           height={400}
//           width={600}
//           my={4}
//           marginLeft={6}
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           gap={4}
//           p={2}
//           ml={40}
//           sx={{ border: "none" }}
//         >

//           <Profile name={"Vishrut Class"} />
//           <p style={{fontFamily: 'sans-serif', fontSize:'xxx-large'}}>This is Vishrut Sharma's Food Villa</p>
//           <p style={{fontFamily: 'sans-serif', fontSize:'xxx-large'}}>
//             Click{" "}
//             <a href="https://portfoliovishrut.netlify.app/" target="_blank" style={{border: '2px solid black', padding: '2px'}}>
//               here
//             </a>{" "}
//             to checkout my personal portfolio.
//           </p>
//         </Box>
//       </div>
//     );
//   }
// }

export default About;
