import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#d7d7d7", py: 2 }}>
      <Typography variant="body2">
        &copy; Reserverd, Designed by &nbsp;
        <Link to="https://pervej0.web.app/" style={{ textDecoration: "none" }}>
          Md Pervej Hossain
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
