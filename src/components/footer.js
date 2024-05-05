import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";

const footerLocationDetails = {
  heading: "Address",
  description: "249, 1st Floor, Ashoka Enclave Part-1, Sector 34, Faridabad - 121003",
};

const footerEmailDetails = {
  heading: "Email",
  description: "sharmavishrut1998@gmail.com",
};
console.log(footerLocationDetails.heading);
const footerPhoneDetails = {
  heading: "Phone",
  description: "+91 9540105285",
};

const verbiage = {
    fontSize: 'larger',
    fontWeight: '650'
}

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div
        style={{
          height: "250px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: '#dfdcdc'
        }}
      >
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
          sx={{ border: "none" }}

        >
          <LocationOnIcon />
          <span style={verbiage}>{footerLocationDetails.heading}</span>
          <span style={{textAlign: 'center'}}>{footerLocationDetails.description}</span>
        </Box>
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
          sx={{ border: "none" }}
        >
          <MailIcon />
          <span style={verbiage}>{footerEmailDetails.heading}</span>
          <span style={{textAlign: 'center'}}>{footerEmailDetails.description}</span>
        </Box>
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
          sx={{ border: "none" }}
        >
          <LocalPhoneIcon />
          <span style={verbiage}>{footerPhoneDetails.heading}</span>
          <span style={{textAlign: 'center'}}>{footerPhoneDetails.description}</span>
        </Box>
      </div>
    </>
  );
};

export default Footer;
