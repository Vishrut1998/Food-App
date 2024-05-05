import React, { useEffect } from "react";
import { useState, useContext } from "react";
import Logo from "../assets/images/villa.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { FETCH_GITHUB_PROFILE_LINK } from "../constants";

const Title = () => (
  <a href="/">
    <img alt="logo_image" className="h-28 rounded-md" src={Logo} />
  </a>
);

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const setIsOnline = useOnline();
  const { user } = useContext(UserContext);
  const [image, setImage] = useState();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const handleChange = (event) => {
    setIsOnline(event.target.checked);
  };

  const getAvatarUrl = async () => {
    const url = FETCH_GITHUB_PROFILE_LINK;
    const data = await fetch(url);
    const json = await data.json();
    setImage(json);
    console.log("Github data in navabr comp: ", json);
  };

  useEffect(() => {
    getAvatarUrl();
  }, []);

  //   const profileImage = image.map((user) => user.avatar_url)

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isOnline}
              onChange={isOnline}
              aria-label="login switch"
            />
          }
          label={isOnline ? "Logout" : "Login"}
        />
      </FormGroup> */}

      <div className="flex justify-between bg-purple-100 shadow-lg">
        <Title />
        <div className="nav-items">
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <ul className="flex py-10 ml-63">
              <Link to="/">
                <li className=" px-2 pr-16 font-bold border-b-4 border-indigo-500">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="px-2 pl-[10px] pr-16 font-bold border-b-4 border-indigo-500">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="px-2 pr-16 font-bold border-b-4 border-indigo-500">
                  Contact Us
                </li>
              </Link>
              <Link to="/instamart">
                <li className="px-2 pr-16 font-bold border-b-4 border-indigo-500">
                  Instamart
                </li>
              </Link>

              <Link to="/cart">
                <li className="px-2 pr-16 font-bold border-b-4 border-indigo-500">
                  Cart - {cartItems.length} items
                </li>
              </Link>
            </ul>
          </Typography>
        </div>
        <div className="flex justify-between">
          {isOnline ? <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/41699835?v=4"
            />
          </IconButton> : null}
          <h1 className="py-10 ml-8">{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
          <span className="p-10 font-bold text-red-900">{user.name}</span>
        </div>
        {/* {loggedIn ?<button onClick={() => setLoggedIn(false)}>Logout</button>:<button onClick={() => setLoggedIn(true)}>Login</button>} */}
      </div>
    </Box>
  );
};

export default Navbar;
