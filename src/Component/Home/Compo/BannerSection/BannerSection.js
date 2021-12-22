import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BGImg from "../../../../Images/university-ground.jpg";

const BannerSection = () => {
  const bgContent = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), url(${BGImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Box style={bgContent}>
      <Box>
        <Typography
          variant="h1"
          py={5}
          color="white"
          sx={{ fontFamily: "Italianno, cursive" }}
        >
          Univ. Solution
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerSection;
