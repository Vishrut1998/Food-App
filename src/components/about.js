import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./profile.js";
import Profile from "./profileClass";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

const aboutHeading = {
    fontFamily: "sans-serif",
    fontSize: "xxx-large",
    padding: "10px",
    marginLeft: "40px",
    marginTop: "10px",
    width: "336px"
}

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    //Best Place to make an API call as it is after render

    console.log("Parent compoenentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1 style={aboutHeading}>About Page</h1>
        <Box
          height={200}
          width={300}
          my={4}
          marginLeft={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: "2px solid grey" }}
        >
          
          <Profile name={"Vishrut Class"} />
          <p>This is Vishrut Sharma's Food Villa</p>
          <p>
            Click{" "}
            <a href="https://portfoliovishrut.netlify.app/" target="_blank" style={{border: '2px solid black', padding: '2px'}}>
              here
            </a>{" "}
            to checkout my personal portfolio.
          </p>
        </Box>
      </div>
    );
  }
}

export default About;
